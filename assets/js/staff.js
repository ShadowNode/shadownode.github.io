// const headAPI = "https://crafthead.net/cube/";
const headAPI = "https://mc-heads.net/avatar/";
const discordMsg = "https://discordapp.com/users/";

const jsonURL = '/assets/js/staff.json'

const staffTable = document.getElementById('staffGrid');

function addRank(rank, roleColor, roleDesc) {
    let element = document.getElementById('rankTemplate').content.cloneNode(true);
    let rankHeader = element.getElementById('staffRank');
    let rankDesc = element.getElementById('rankDescription');


    rankHeader.innerHTML = '<a href="#'  + rank + '" style="color: ' + roleColor + ' !important;">' + rank + '</a>';
    rankHeader.id = rank;
    rankHeader.style.color = roleColor;


    if (roleDesc == null) {
        roleDesc = "&nbsp;";
    }

    rankDesc.innerText = roleDesc;
    rankDesc.id = rank + "_desc";


    staffTable.appendChild(element);

}

function addStaff(display, mc, discord, roleColor) {

    let element = document.getElementById('staffTemplate').content.cloneNode(true);

    let staffRow = element.getElementById('staffRow');
    let staffHead = element.getElementById('staffHead');
    let staffMember = element.getElementById('staffMember');

    let boxShadow = '0px 0px 10px 5px ' + roleColor;

    staffHead.innerHTML = '<img height="100px" width="100px" style="box-shadow: ' + boxShadow +'" alt="' + display + '" src="' + headAPI + mc + '/100" />';
    staffHead.id = mc + '_head';
    staffHead.style.borderColor = roleColor;

    staffRow.id = display + '_row';


    staffMember.innerHTML = '<a style="" href="https://discord.com/users/' + discord + '">' + display + '</a>' ;
    staffMember.id =  mc + '_staff';

    // staffMember.style.borderColor = roleColor;
    staffTable.appendChild(element);
}

fetch(jsonURL, {method: 'get'}).then(async function (response) {

    const staffJson = await response.json();
    for (let staffRank of Object.keys(staffJson)) {

        let staffArray = staffJson[staffRank]['members'];
        let roleColor = staffJson[staffRank]['color'];
        let roleDesc = staffJson[staffRank]['description'];

        addRank(staffRank, roleColor, roleDesc);

        staffArray.forEach((staffMember) => {

            let staffName = staffMember.display;
            let mcName = staffMember.ingame;
            let discordID = staffMember.discord;
            let away = staffMember.away;

            if (away) {
                staffName += ' (A)';
            }
            addStaff(staffName,mcName, discordID, roleColor);
        });
    }
}).catch(function (err) {
    console.log("Error: " + err)

});

