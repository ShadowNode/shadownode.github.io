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
    //sendMessage();

    function getUrlVars() {
        var vars = {};
        var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
            vars[key] = value;
        });
        return vars;
    }

    if (getUrlVars()["code"]) {
        var discordTokenUrl = "https://discordapp.com/api/oauth2/token";
        var discordMeUrl = "https://discordapp.com/api/users/@me";
        var data = {
            client_id: '688722644895268921', // make it github secret?
            client_secret: 'Uy4D2G8LfFd79qus0DgdoWwfLKN0c9xq', // make it github secret?
            grant_type: 'authorization_code',
            code: getUrlVars()["code"],
            redirect_uri: "http://localhost:1313/forms.html",
            scope: 'identify'
        };
        $.post( discordTokenUrl, data, function(data, status) {
            //do more check for errors
            $.ajaxSetup({
                headers: {
                    "Authorization": `Bearer ` + data.access_token,
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            });
            $.get( discordMeUrl, function(data, status) {
                console.log(data);
                $('#discord-username').html(data.username + '#' + data.discriminator);
            });
        });

    }
});