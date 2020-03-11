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
            addServer(section.name, (section.status ? "online" : "offline"), section.pack_name, section.pack_version, "?/" + section.maxplayers, section.uptime);
        }
    }).catch(function (err) {
        console.log("Error: " + err)
    });
}

function addServer(name, online, pack, packVersion, playerCount, uptime) {
    var col = document.createElement('div');
    col.setAttribute('class', 'col')
    divServerTable.appendChild(col);

    var table = document.createElement('div');
    table.setAttribute('class', 'table');
    col.appendChild(table);

    //Status Div
    var status = document.createElement('div');
    status.setAttribute('class', 'status ' + online);
    table.appendChild(status);
    var h2Name = document.createElement('h2');
    h2Name.innerText = name;
    status.appendChild(h2Name);

    //Info Div
    var dl = document.createElement('dl');
    dl.setAttribute('class', 'info');
    table.appendChild(dl);
    var packDT = document.createElement('dt');
    packDT.innerText = "Pack:";
    var packDD = document.createElement('dd');
    packDD.innerText = pack;
    var packVersionDT = document.createElement('dt');
    packVersionDT.innerText = "Pack Version:";
    var packVersionDD = document.createElement('dd');
    packVersionDD.innerText = packVersion;
    var playersDT = document.createElement('dt');
    playersDT.innerText = "Players:";
    var playersDD = document.createElement('dd');
    playersDD.innerText = playerCount
    var uptimeDT = document.createElement('dt');
    uptimeDT.innerText = "Uptime:";
    var uptimeDD = document.createElement('dd');
    uptimeDD.innerText = uptime;
    dl.append(packDT, packDD, packVersionDT, packVersionDD, playersDT, playersDD, uptimeDT, uptimeDD);
}

getAllServers();