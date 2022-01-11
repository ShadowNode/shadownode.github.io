// const headAPI = "https://crafthead.net/cube/";
const headAPI = "https://mc-heads.net/avatar/";
const discordMsg = "https://discordapp.com/users/";

const staffTable = document.getElementById('staffGrid');

// Test Data Needs to be completed
const staffJson = {
    'Owner': {
        'color': '#FF55FF',
        'members': [
            {
                'display': 'ShadowKitten',
                'ingame': 'df6e1e9b-d23d-4283-a941-87916bc3ea2e',
                'discord': '106221569897922560',
                'away': false
            },
        ]
    },
    'Sr Administrator': {
        'color': '#AA0000',
        'members': [
            {
                'display': 'Dnsmasq',
                'ingame': '98c3e2ec-60f9-4ccd-b4a0-24280813dda3',
                'discord': '220218217145171969',
                'away': false
            },
            {
                'display': 'RedSensei',
                'ingame': '5232223d-f05a-4a7b-9376-0428549b1163',
                'discord': '318557661081632768',
                'away': true
            },
            {
                'display': 'War_Horse',
                'ingame': 'dbf54ce3-0aea-47da-9d16-863283c7a437',
                'discord': '675429391513419816',
                'away': false
            },
            {
                'display': 'Endercorps_Alpha',
                'ingame': '9db449a3-a567-470a-85d4-7ef7f16405a8',
                'discord': '142748655294742528',
                away: false
            },
            {
                'display': 'tree_of_chaos',
                'ingame': '2a6871c0-2dfa-41d8-af58-8608c81b8864',
                'discord': '261311666904367124',
                away: false
            }
        ],
    },
    'Administrator': {
        'color': '#FF5555',
        'members': [
            {
                'display': 'Cosmic_Elemental',
                'ingame': 'a51adf68-e79a-4a62-8b95-10405dd071bd',
                'discord': '356530058908925965',
                away: false
            },
            {
                'display': 'InkEyes',
                'ingame': 'f741de3f-89a7-4431-ac61-dcff541c45a7',
                'discord': '147137133495189505',
                away: false
            },
            {
                'display': 'Moody_420',
                'ingame': '39e05a75-49f2-4060-9a48-80e34d11b162',
                'discord': '262778042760298497',
                away: false
            },
            {
                'display': 'Zyion',
                'ingame': '6e863331-9968-4943-aa48-0b3c65308bc4',
                'discord': '99358692054405120',
                away: false
            },

        ]
    },
    'Moderator': {
        'color': '#1a7939',
        'members': [

        ]
    },
    'MIT': {
        'color': '#25c059',
        'members': [

        ]
    },
    'Developer': {
        'color': '#FFAA00',
        'members': [

        ]
    },
    'Builder': {
        'color': '#FFFF55',
        'members': [

        ]
    }
}

function addRank(rank, roleColor) {
    let element = document.getElementById('rankTemplate').content.cloneNode(true);
    let rankHeader = element.getElementById('staffRank');

    rankHeader.innerText = rank;
    rankHeader.id = rank + '_rank';
    rankHeader.style.color = roleColor;

    staffTable.appendChild(element);

}

function addStaff(display, mc, discord) {
    let element = document.getElementById('staffTemplate').content.cloneNode(true);

    let staffHead = element.getElementById('staffHead');
    let staffMember = element.getElementById('staffMember');


    staffHead.innerHTML = '<img src="' + headAPI + mc + '/35" />';
    staffHead.id = mc + '_head';

    staffMember.innerText = display;
    staffMember.id =  mc + '_staff';

    staffTable.appendChild(element);
}
for (let staffRank of Object.keys(staffJson)) {

    console.log(staffRank);

    let staffArray = staffJson[staffRank]['members'];
    let roleColor = staffJson[staffRank]['color'];

    // let rankTemplate = document.getElementById('rankTemplate');

    addRank(staffRank, roleColor);


    staffArray.forEach((staffMember) => {

        let staffName = staffMember.display;
        let mcName = staffMember.ingame;
        let discordID = staffMember.discord;
        let away = staffMember.away;

        if (away) {
            staffName += ' (A)';
        }

        addStaff(staffName,mcName, discordID);
    });
}