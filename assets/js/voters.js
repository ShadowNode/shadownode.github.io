const headAPI = "https://mc-heads.net/avatar/";
const voterTable = document.getElementById("voter-table");

function getCurrentTop3() {
    var currentTop3 = "https://api.shadownode.ca/voters/?method=getTopVoters&when=thismonth"

    fetch(currentTop3, {
        method: 'get'
    }).then(async function (response) {

        const json = await response.json();
        const top3 = json.response;
        
       var cTable = document.getElementById('current-top');

        for (var key of Object.keys(top3)) {
            const section = top3[key];

            var template = document.getElementById('voter-template');
    
            var uuid = section.uuid;
            var pname = section.username;
            var votes = section.votes_this_month;

            addVoter(template.content.cloneNode(true), key, uuid, pname, votes, cTable);
        }
    });
}
function getLastTop3() {
    var apiURL = "https://api.shadownode.ca/voters/?method=getTopVoters&when=lastmonth"

    fetch(apiURL, {
        method: 'get'
    }).then(async function (response) {

        const json = await response.json();
        const top3 = json.response;
        
    //    voterTable.innerHTML += '<div class="voter-heading"><h3>Last Month\'s Top 3 Voters</h3></div>';
        var lTable = document.getElementById('last-top');
        for (var key of Object.keys(top3)) {
            const section = top3[key];

            var template = document.getElementById('voter-template');
    
            var uuid = section.uuid;
            var pname = section.username;
            var votes = section.votes_last_month;
    
            addVoter(template.content.cloneNode(true), key, uuid, pname, votes, lTable);
        }
    });

}


function getTotalTokens() {
    var apiURL = "https://api.shadownode.ca/voters/?method=getMostTokens"

    fetch(apiURL, {
        method: 'get'
    }).then(async function (response) {

        const json = await response.json();
        const top3 = json.response;
        
        var cTable = document.getElementById('token-top');

        for (var key of Object.keys(top3)) {
         
            const section = top3[key];
         
            var template = document.getElementById('voter-template');
    
            var uuid = section.uuid;
            var pname = section.username;
            var tokens = section.tokens;
    
   
            element = template.content.cloneNode(true);

            var voterHead = element.getElementById('voter-head');
            var voterData = element.getElementById('voter-data');    
        
            voterHead.innerHTML = '<img src="' + headAPI + uuid + '" class="player-head" alt="'+ pname + '"/>';
            voterHead.id = pname + "_voter-head";
            
            voterData.innerHTML = pname + "<br/>Has " + tokens + " tokens";
            voterData.id = pname + "_voter-data";

            cTable.appendChild(element);
        }
    });
}


function addVoter(element, voterPos, uuid, pname, voteCount, voterDiv) {

    var voterHead = element.getElementById('voter-head');
    var voterData = element.getElementById('voter-data');    

    voterHead.innerHTML = '<img src="' + headAPI + uuid + '" class="player-head" alt="'+ pname + '"/>';
    voterHead.id = pname + "_voter-head";
    
    voterData.innerHTML = pname + "<br/>Voted " + voteCount + " times!";
    voterData.id = pname + "_voter-data";

    voterDiv.appendChild(element);
}


getCurrentTop3();
getLastTop3();
getTotalTokens();
