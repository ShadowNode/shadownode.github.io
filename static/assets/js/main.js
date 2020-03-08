const playersEle = document.getElementById("players");
let cachedCount;

function playerCount(element) {
    var playerCountURL = "https://shadownode.ca/servers/api/getPlayerCount.json";
    fetch(playerCountURL, {
        method: 'get'
    }).then(async function (response) {
        const json = await response.json();
        cachedCount = "There are " + json.players + " players online!";
        element.innerText = cachedCount;
    }).catch(function (err) {
        console.log("Error: " + err)
    });
}

playersEle.onloadstart = (playerCount(playersEle));
playersEle.onmouseenter = function () {
    playersEle.innerText = "IP: play.shadownode.ca";
};
playersEle.onmouseleave = function () {
    playersEle.innerText = cachedCount;
};