// const headAPI = "https://crafthead.net/cube/";
const headAPI = "https://mc-heads.net/avatar/";
const discordMsg = "https://discordapp.com/users/";

const jsonURL = '/assets/js/staff.json'

const staffTable = document.getElementById('staffGrid');

function addRank(rank, roleColor) {
    let element = document.getElementById('rankTemplate').content.cloneNode(true);
    let rankHeader = element.getElementById('staffRank');

    rankHeader.innerText = rank;
    rankHeader.id = rank + '_rank';
    rankHeader.style.color = roleColor;

    staffTable.appendChild(element);

}

function addStaff(display, mc, discord, roleColor) {

    let element = document.getElementById('staffTemplate').content.cloneNode(true);

    // let staffRow = element.getElementById('staffRow');
    let staffHead = element.getElementById('staffHead');
    let staffMember = element.getElementById('staffMember');

    let boxShadow = '5px 0px 10px ' + roleColor;

    staffHead.innerHTML = '<img alt="' + display + '" src="' + headAPI + mc + '/35" />';
    staffHead.id = mc + '_head';

    staffMember.innerText = display;
    staffMember.id =  mc + '_staff';
    staffMember.style.borderColor = roleColor;
    staffMember.style.boxShadow = boxShadow;

    staffTable.appendChild(element);
}

fetch(jsonURL, {method: 'get'}).then(async function (response) {

    const staffJson = await response.json();
    for (let staffRank of Object.keys(staffJson)) {

        let staffArray = staffJson[staffRank]['members'];
        let roleColor = staffJson[staffRank]['color'];

        addRank(staffRank, roleColor);

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

