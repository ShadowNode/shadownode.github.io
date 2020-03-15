$(document).ready(function() {
    function getAllServers() {
        var statsUrl = "https://shadownode.ca/servers/api/getAll?rand=" + new Date().getTime();
        var serverSelect = $('#server-select');
        fetch(statsUrl, {
            method: 'get'
        }).then(async function (response) {
            const servers = await response.json();
            for (var key of Object.keys(servers)) {
                const section = servers[key];
                if (!section.name.includes('Lobby') && section.active === 1) {
                    serverSelect.append($("<option></option>").attr("value", section.name).text(section.name));
                }
            }
        }).catch(function (err) {
            console.log("Error: " + err)
        });
    }
    getAllServers();

    $( "#minecraft-username" ).change(function() {
        // Check input( $( this ).val() ) for validity here
        $('#minecraft-image').attr("src","https://minotar.net/helm/" + $( this ).val());
        console.log($( this ).val());
    });

    $( "#appeal" ).click(function() {
        $( "#application" ).fadeOut('fast');
        $( "#appeals" ).fadeIn('fast');
    });

    $( "#staff-app" ).click(function() {
        $( "#appeals" ).fadeOut('fast');
        $( "#application" ).fadeIn('fast');
    });

    function sendMessage() {
        var request = new XMLHttpRequest();
        request.open("POST", "https://discordapp.com/api/webhooks/688714850276343811/3xZVXCLWzOCJrjTVfRHnpcIjwBukFWmtYne3mLLgdRra95Ap7Lpgp6ZlXgWv5BVLcf3T");

        request.setRequestHeader('Content-type', 'application/json');

        var params = {
            username: "Babymillie👶🍼🚼#0001",
            avatar_url: "https://minotar.net/helm/Babymillie",
            content: "Simple test"
        }

        request.send(JSON.stringify(params));
    }
    sendMessage();
});