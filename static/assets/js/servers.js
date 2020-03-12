const divServerTable = document.getElementById("server-table");

function getAllServers() {
    var statsUrl = "https://shadownode.ca/servers/api/getStatsData.json";
    fetch(statsUrl, {
        method: 'get'
    }).then(async function (response) {
        const json = await response.json();
        const servers = json.servers;
        for (var key of Object.keys(servers)) {
            const section = servers[key];
            console.log(section);
            var template = document.getElementById('server-template');
            addServer(template.content.cloneNode(true), key, section.name, (section.status ? "online" : "offline"), section.pack_name, section.pack_version, "?/" + section.maxplayers, section.uptime, section.address);
        }
        loaded();
    }).catch(function (err) {
        console.log("Error: " + err)
    });
}

function addServer(element, id, name, online, pack, packVersion, playerCount, uptime, serverIp) {
    element.getElementById('status').classList.add(online);
    element.getElementById('status').id = id + "_status";
    element.getElementById('server-name').innerText = name;
    element.getElementById('server-name').id = id + "_server-name";
    element.getElementById('pack').innerText = pack;
    element.getElementById('pack').id = id + "_pack";
    element.getElementById('pack-version').innerText = packVersion;
    element.getElementById('pack-version').id = id + "_pack-version";
    element.getElementById('players').innerText = playerCount;
    element.getElementById('players').id = id + "_players";
    element.getElementById('uptime').innerText = uptime;
    element.getElementById('uptime').id = id + "_uptime";
    element.getElementById('ip').innerText = serverIp;
    element.getElementById('ip').id = id + "_ip";
    element.getElementById('player-chart').id = id + "_player-chart";
    element.getElementById('tps-chart').id = id + "_tps-chart";
    divServerTable.appendChild(element);
}

function extendInfo(element) {
    element.parentElement.getElementsByClassName('extended-info')[0].classList.toggle('active');
}

function loaded() {
    document.getElementById('loading').style.display = 'none';
    document.getElementById('serversWrapper').style.display = 'flex';
}

getAllServers();
