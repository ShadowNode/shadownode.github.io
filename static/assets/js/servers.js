$.fn.ToolTip = function(plot) {
    $(this).bind("plothover", function(event, pos, item) {
        $("#tooltip").remove();
        var axes = plot.getAxes();
        if (pos.x < axes.xaxis.min || pos.x > axes.xaxis.max ||
            pos.y < axes.yaxis.min || pos.y > axes.yaxis.max) {
            return;
        }

        var j, dataset = plot.getData();
        var series = dataset[0];

        for (j = 0; j < series.data.length; ++j) {
            if (series.data[j][0] > pos.x) {
                break;
            }
        }

        var y,
            p1 = series.data[j - 1],
            p2 = series.data[j];

        if (p1 == null || p2 == null) {
            y = "N/A";
        } else {
            y = p2[1];
        }
        var datetime = new Date(pos.x);
        showTooltip(pos.pageX, pos.pageY, datetime.getFullYear() + '-' + pad(datetime.getMonth() + 1) + '-' + pad(datetime.getDate()) + ' ' + formatAMPM(datetime, series.label == 'Players') + '<br/>' + series.label + ': ' + y);

    });
};

function pad(n) {
    return n < 10 ? '0' + n : n
}

function formatAMPM(date, type) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    if (type) {
        var strTime = hours + ':00 ' + ampm;
    } else {
        minutes = minutes < 10 ? '0' + minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
    }
    return strTime;
}

$.fn.PlayersChart = function(data, player_min, player_max) {
    var plot = $.plot($(this), [{
        data: data,
        label: "Players"
    }], {
        series: {
            lines: {
                show: true,
                fill: true
            }
        },
        crosshair: {
            mode: "x"
        },
        grid: {
            hoverable: true,
            autoHighlight: false,
            borderWidth: 1,
            color: "#FFF"
        },
        xaxis: {
            min: player_min,
            max: player_max,
            mode: "time",
            timeformat: "%a",
            minTickSize: [1, "day"],
            dayNames: ["S", "M", "T", "W", "T", "F", "S"],
            font: {
                size: 10,
                lineHeight: 10,
                weight: "bold",
                family: "sans-serif",
                variant: "small-caps",
                color: "#FFF"
            }
        },
        yaxis: {
            font: {
                size: 10,
                lineHeight: 10,
                weight: "bold",
                family: "sans-serif",
                variant: "small-caps",
                color: "#FFF"
            },
            min: 0,
            tickDecimals: 0
        },
        legend: {
            show: false
        }
    });
    $(this).ToolTip(plot);
};

$.fn.TpsChart = function(data, tps_min, tps_max) {
    var plot = $.plot($(this), [{
        data: data,
        label: "TPS"
    }], {
        series: {
            lines: {
                show: true,
                fill: true
            },
            color: "#bfff80"
        },
        crosshair: {
            mode: "x"
        },
        grid: {
            hoverable: true,
            autoHighlight: false,
            borderWidth: 1,
            color: "#FFF"
        },
        xaxis: {
            min: tps_min,
            max: tps_max,
            mode: "time",
            timeformat: "%H",
            minTickSize: [5, "minute"],
            font: {
                size: 10,
                lineHeight: 10,
                weight: "bold",
                family: "sans-serif",
                variant: "small-caps",
                color: "#FFF"
            }
        },
        yaxis: {
            font: {
                size: 10,
                lineHeight: 10,
                weight: "bold",
                family: "sans-serif",
                variant: "small-caps",
                color: "#FFF"
            },
            min: 0,
            max: 21
        },
        legend: {
            show: false
        }
    });
    $(this).ToolTip(plot);
};

function showTooltip(x, y, contents) {
    $('<div id="tooltip" class="tooltip">' + contents + '</div>').css({
        top: y + 12,
        left: x - 50,
        position: "relative"
    }).appendTo("body").show();

}

const divServerTable = document.getElementById("server-table");

function getAllServers() {
    var statsUrl = "https://shadownode.ca/servers/api/getStatsData.json?rand=" + new Date().getTime();
    fetch(statsUrl, {
        method: 'get'
    }).then(async function (response) {
        const json = await response.json();
        const servers = json.servers;
        for (var key of Object.keys(servers)) {
            const section = servers[key];
            var template = document.getElementById('server-template');
            if (section.onlineplayers === undefined) section.onlineplayers = 0;
            else section.onlineplayers = String(section.onlineplayers).split(",").length;
            addServer(template.content.cloneNode(true), key, section.name, section.pack_link, (section.status ? "online" : "offline"), section.pack_name, section.pack_version, section.onlineplayers + "/" + section.maxplayers, section.uptime, section.address, section.players, section.tps, section.week, section.max1d, section.max7d, section.max30d, section.player_min, section.player_max, section.tps_min, section.tps_max, section.staff_last_seen);
        }
        loaded();
    }).catch(function (err) {
        console.log("Error: " + err)
    });
}

function addServer(element, id, name, pack_link, online, pack, packVersion, playerCount, uptime, serverIp, players, tps, week, max1d, max7d, max30d, player_min, player_max, tps_min, tps_max, staffTime) {
    element.getElementById('server-name').classList.add(online);
    element.getElementById('server-name').innerText = name;
    element.getElementById('server-name').id = id + "_server-name";
    if (pack_link !== "") {
        element.getElementById('pack').innerHTML = "<a href='"+pack_link+"'  class='highlight' target='_blank'>"+ pack +"</a>";
    } else {
        element.getElementById('pack').innerText = pack;
    }
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
    element.getElementById('t-week').innerText = week;
    element.getElementById('t-week').id = id + "_t-week";
    element.getElementById('t-record').innerText = max1d.players;
    element.getElementById('t-record').id = id + "_t-record";
    element.getElementById('w-record').innerText = max7d.players;
    element.getElementById('w-record').id = id + "_w-record";
    element.getElementById('m-record').innerText = max30d.players;
    element.getElementById('m-record').id = id + "_m-record";
    element.getElementById('staff-time').innerText = formatTime(staffTime);
    element.getElementById('staff-time').id = id + "_staff-time";
    divServerTable.appendChild(element);
    $("#" + id + "_player-chart").PlayersChart(players, player_min, player_max);
    $("#" + id + "_tps-chart").TpsChart(tps, tps_min, tps_max);

}

function formatTime(milliTime) {
return "soon"
}

function loaded() {
    document.getElementById('loading').style.display = 'none';
    document.getElementById('serversWrapper').style.display = 'flex';
    $(".tooltip-hover").on( "click", function() {
        var $tempElement = $("<input>");
        $("body").append($tempElement);
        $tempElement.val($(this)[0].innerText.replace('Click to copy ip!','')).select();
        document.execCommand("Copy");
        $tempElement.remove();
        $(this).find( ".tooltip-text")[0].innerText = "Ip copied to clipboard";
    });
    $( ".tooltip-hover" ).on( "mouseleave", function() {
        $(this).find( ".tooltip-text")[0].innerText = "Click to copy ip!";
    });
}

getAllServers();
