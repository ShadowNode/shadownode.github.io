// const headAPI = "https://crafthead.net/cube/";
const headAPI = "https://mc-heads.net/avatar/";
const discordMsg = "https://discordapp.com/users/";

let tableElement = document.getElementById('staffTemplate');

// Test Data Needs to be completed
const staffJson =
    {
        "Owner": {
            "color": "#FF55FF",
            "members": [
                {
                    "display": "ShadowKitten",
                    "ingame": "ShadowsKitten",
                    "discord": "106221569897922560",
                    "away": false
                },
            ]
        },
        "Sr Administrator": {
            "color": "#AA0000",
            "members": [
                {
                    "display": 'Dnsmasq',
                    "ingame": 'Dnsmasq',
                    "discord": "220218217145171969",
                    "away": false
                },
                {
                    "display": 'RedSensei',
                    "ingame": 'RedSensei',
                    "discord": "318557661081632768",
                    "away": true
                },
            ],
        },
    }


for (let staffRank of Object.keys(staffJson)) {

    console.log(staffRank);

    let staffArray = staffJson[staffRank]['members'];
    let roleColor = staffJson[staffRank]['color'];

    /* Build the staff table for the role */

    staffArray.forEach((staffMember) => {

        let staffName = staffMember.display;
        let mcName = staffMember.ingame;
        let discordID = staffMember.discord;
        let away = staffMember.away;

        if (away) {
            staffName += ' (A)';
        }


    });

}