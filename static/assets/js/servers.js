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
            addServer(template.content.cloneNode(true), section.name, (section.status ? "online" : "offline"), section.pack_name, section.pack_version, "?/" + section.maxplayers, section.uptime, section.address);
        }
    }).catch(function (err) {
        console.log("Error: " + err)
    });
}

function addServer(element, name, online, pack, packVersion, playerCount, uptime, serverIp) {
    element.getElementById('status').classList.add(online);
    element.getElementById('server-name').innerText = name;
    element.getElementById('pack').innerText = pack;
    element.getElementById('pack-version').innerText = packVersion;
    element.getElementById('players').innerText = playerCount;
    element.getElementById('uptime').innerText = uptime;
    element.getElementById('ip').innerText = serverIp;
    divServerTable.appendChild(element);
}

function extendInfo(element) {
    element.parentElement.getElementsByClassName('extended-info')[0].classList.toggle('active');
}

getAllServers();