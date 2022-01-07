const headAPI = "https://mc-heads.net/avatar/";
const voterTable = document.getElementById("voter-table");

function getCurrentTop3() {
    /*
        Example Code 
        This is example JSON output till we have an actual format
    */ 
    // const top3 = [
    //     {
    //         uuid: "90349245-dd9a-464c-baf7-f72fa414b5a1",
    //         pname: "LethalMrM",
    //         votes: 10    
    //     },
    //     {
    //         uuid: "df6e1e9b-d23d-4283-a941-87916bc3ea2e",
    //         pname: "ShadowsKitten",
    //         votes: 9
    //     },
    //     {
    //         uuid: "a97174eb-9e37-4035-b751-f7601488528d",
    //         pname: "Bennyboy1695",
    //         votes: 100
    //     }
    var currentTop3 = "https://api.shadownode.ca/voters/?method=getTopVoters&when=thismonth"

    fetch(currentTop3, {
        method: 'get'
    }).then(async function (response) {
        const json = await response.json();
        const top3 = json.response;
        
       voterTable.innerHTML += '<div class="voter-heading"><h3>Current Top 3 Voters</h3></div>';

        for (var key of Object.keys(top3)) {
            const section = top3[key];
            var template = document.getElementById('voter-template');
    
            var uuid = section.uuid;
            var pname = section.username;
            var votes = section.votes_this_month;
    
            addVoter(template.content.cloneNode(true), key, uuid, pname, votes);
        }
    });
    getLastTop3();
}
function getLastTop3() {
    var apiURL = "https://api.shadownode.ca/voters/?method=getTopVoters&when=lastmonth"

    fetch(apiURL, {
        method: 'get'
    }).then(async function (response) {
        const json = await response.json();
        const top3 = json.response;
        
       voterTable.innerHTML += '<div class="voter-heading"><h3>Last Month\'s Top 3 Voters</h3></div>';

        for (var key of Object.keys(top3)) {
            const section = top3[key];
            var template = document.getElementById('voter-template');
    
            var uuid = section.uuid;
            var pname = section.username;
            var votes = section.votes_last_month;
    
            addVoter(template.content.cloneNode(true), key, uuid, pname, votes);
        }
    });

    getTotalTokens();
}


function getTotalTokens() {
    var apiURL = "https://api.shadownode.ca/voters/?method=getMostTokens"

    fetch(apiURL, {
        method: 'get'
    }).then(async function (response) {
        const json = await response.json();
        const top3 = json.response;
        
       voterTable.innerHTML += '<div class="voter-heading"><h3>Top 3 Tokens</h3></div>';

        for (var key of Object.keys(top3)) {
            const section = top3[key];
            var template = document.getElementById('voter-template');
    
            var uuid = section.uuid;
            var pname = section.username;
            var tokens = section.tokens;
    
            // addVoter(template.content.cloneNode(true), key, uuid, pname, votes);
            
            element = template.content.cloneNode(true);

            var voterHead = element.getElementById('voter-head');
            var voterData = element.getElementById('voter-data');    
        
            voterHead.innerHTML = '<img src="' + headAPI + uuid + '" class="player-head" alt="'+ pname + '"/>';
            voterHead.id = pname + "_voter-head";
            
            voterData.innerHTML = pname + "<br/>Has " + tokens + " tokens";
            voterData.id = pname + "_voter-data";

            voterTable.appendChild(element);
        }
    });
}


function addVoter(element, voterPos, uuid, pname, voteCount) {

    var voterHead = element.getElementById('voter-head');
    var voterData = element.getElementById('voter-data');    

    voterHead.innerHTML = '<img src="' + headAPI + uuid + '" class="player-head" alt="'+ pname + '"/>';
    voterHead.id = pname + "_voter-head";
    
    voterData.innerHTML = pname + "<br/>Voted " + voteCount + " times!";
    voterData.id = pname + "_voter-data";

    voterTable.appendChild(element);
}


getCurrentTop3();
