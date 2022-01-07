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
    $('<div id="tooltip" class="tooltip">' + contents + '</div>').appendTo("body").show();
    var tooltipHeight = $("#tooltip").height();
    $("#tooltip").css({
        top: y + 12,
        left: x - 50,
        height: tooltipHeight,
        position: "absolute",
    });
}

const divServerTable = document.getElementById("server-table");

function getAllServers() {
    var serverName = false
    if (urlQueryString) {
        serverName = urlQueryString.toLowerCase();
    }

    var statsUrl = "https://api.shadownode.ca/stats/?rand=" + new Date().getTime();
    fetch(statsUrl, {
        method: 'get'
    }).then(async function (response) {
        const json = await response.json();
        const servers = json.servers;

        for (var key of Object.keys(servers)) {
            var section = servers[key];

            if (serverName) {
                if (section.id == serverName) { 
                    getServer(section, key, json, true);
                } else {
                    getServer(section, key, json, false);
                }
            } 
            else {
                getServer(section, key, json, false);
            }
        }
        
        loaded();
    }).catch(function (err) {
        console.log("Error: " + err)

    });
}

function getServer(serverSection, key, json, highlightServer) {
    var template = document.getElementById('server-template');
    if (serverSection.onlineplayers === undefined) serverSection.onlineplayers = 0;
    else serverSection.onlineplayers = String(serverSection.onlineplayers).split(",").length;
    addServer(template.content.cloneNode(true), key, getSafe(serverSection.name, "Unknown"), getSafe(serverSection.pack_link, "Unknown"),
        getSafe(serverSection.status ? "online" : "offline", "offline"), getSafe(serverSection.pack_name, "Unknown"), getSafe(serverSection.pack_version, "Unknown"),
        getSafe(serverSection.onlineplayers, 0) + "/" + getSafe( serverSection.maxplayers, 0), getSafe( serverSection.uptime,"Unknown"),
        getSafe( serverSection.address, "Unknown"), getSafe( serverSection.players, [[0,0]]), getSafe(serverSection.tps, [[0,0]]), getSafe( serverSection.week, 0),
        getSafe( serverSection.max1d, {players: 0, time:0}), getSafe( serverSection.max7d, {players: 0, time:0}), getSafe( serverSection.max30d, {players: 0, time:0}),
        getSafe( json.player_min, 0), getSafe( json.player_max, 0), getSafe(json.tps_min, 0), getSafe( json.tps_max, 0),
        getSafe( serverSection.staff_last_seen, 0),
        getSafe( highlightServer, false));

}

function addServer(element, id, name, pack_link, online, pack, packVersion, playerCount, uptime, serverIp, players, tps, week, max1d, max7d, max30d, player_min, player_max, tps_min, tps_max, staffTime, highlightServer) {
    var serverCol = element.getElementById('server-block');
    var statusLink = encodeURI(document.location.origin +  document.location.pathname) + '#/' + id;

    if (highlightServer) {
        serverCol.classList.add('server-glow');
    }
    serverCol.id = id;

    element.getElementById('server-name').classList.add(online);

    element.getElementById('server-name').innerHTML = name + '&nbsp;<span class="server-anchor" data-status-link="' + statusLink + '"> <i class="fas fa-link"/></span>';
    element.getElementById('server-name').id = id + "_server-name";
        
    if (pack_link !== "" || pack_link != null) {
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

function getSafe(fn, defaultVal) {
    if (fn === undefined) {
        return defaultVal;
    } else {
        return fn;
    }
}

var periods = {
    month: 30 * 24 * 60 * 60 * 1000,
    week: 7 * 24 * 60 * 60 * 1000,
    day: 24 * 60 * 60 * 1000,
    hour: 60 * 60 * 1000,
    minute: 60 * 1000
};

function formatTime(milliTime) {
    if (milliTime === "0") {
        return "Never"
    }
    var diff = Date.now() - milliTime;

    if (diff > periods.month) {
        // it was at least a month ago
        const month = Math.floor(diff / periods.month);
        return month + (month === 1 ? " month ago" : " months ago")
    } else if (diff > periods.week) {
        const week = Math.floor(diff / periods.week);
        return week + (week === 1 ? " week ago" : " weeks ago")
    } else if (diff > periods.day) {
        const day = Math.floor(diff / periods.day);
        return day + (day === 1 ? " day ago" : " days ago")
    } else if (diff > periods.hour) {
        const hour = Math.floor(diff / periods.hour);
        return hour + (hour === 1 ? " hour ago" : " hours ago")
    } else if (diff > periods.minute) {
        const minute = Math.floor(diff / periods.minute);
        return minute + (minute === 1 ? " minute ago" : " minutes ago")
    }
    return "Just now";
}

function loaded() {
    document.getElementById('loading').style.display = 'none';
    document.getElementById('serversWrapper').style.display = 'flex';

    /* Copy Server IP */
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

    /* Copy Status Link  */
    $('.server-anchor').click(function(e) {
        if (!document.getElementById('temp')) {
            var elementID = $(this).attr('id');
            var tip = $('<span class="server-tooltip" id="temp">Copied link to clipboard</span>');  
            var parent = $(this).parent().parent();


            setTimeout(function() {
                tip.fadeOut(500);
                document.getElementById('temp').remove();
            }, 3000);
            $(parent).prepend(tip);
            // $(this).append(tip);
        }
        var statusLink = $(this).data('status-link');

        navigator.clipboard.writeText(statusLink);
    });

    $('.chart').css({width: "100% !important", margin: 'auto', padding: '0 !important' });

    /*  If direct server status, scroll to correct server, if needed */
    if (urlQueryString) {
        try {
            document.getElementById(urlQueryString).scrollIntoView(false);
        } catch { 
            console.log("Debug: Couldn't find the element " + urlQueryString.trim())
        }
    }
}

const urlQueryString = window.location.hash.substr(1).replace(/^\/|\/$/g, '');

getAllServers();