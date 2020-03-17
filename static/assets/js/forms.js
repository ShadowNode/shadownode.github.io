$(document).ready(function() {
    /* Settings */
    var discordTokenUrl = "https://discordapp.com/api/oauth2/token";
    var discordMeUrl = "https://discordapp.com/api/users/@me";
    var discordGuilsUrl = "https://discordapp.com/api/users/@me/guilds";
    var shadownodeGuildId = "124188711603798016";
    var s = "VXk0RDJHOExmRmQ3OXF1czBEZ2RvV3dmTEtOMGM5eHE";
    var c = "Njg4NzIyNjQ0ODk1MjY4OTIx";
    var redirectUri = "http://" + window.location.host + "/forms" + (window.location.hostname === "localhost" ? ".html" : ""); // Update this on release
    var discordAuthUrl = "https://discordapp.com/oauth2/authorize?client_id=688722644895268921&redirect_uri=" + encodeURI(redirectUri) + "&response_type=code&scope=identify+guilds";
    var stats = "https://shadownode.ca/servers/api/getAll";
    var minecraft = "https://minotar.net/helm/";
    var w = "aHR0cHM6Ly9kaXNjb3JkYXBwLmNvbS9hcGkvd2ViaG9va3MvNjg4NzE0ODUwMjc2MzQzODExLzN4WlZYQ0xXek9DSnJqVFZmUkhucGNJandCdWtGV210WW5lM21MTGdkUnJhOTVBcDdMcGdwNlpsWGdXdjVCVkxjZjNU";

    $('#discord-login').attr("href", discordAuthUrl).text('Login with Discord');
    var error = false;

    function getAllServers() {
        var statsUrl = stats + "?rand=" + new Date().getTime();
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

    /* Function to get ?url=parameters&and=these */
    function getUrlVars() {
        var vars = {};
        var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
            vars[key] = value;
        });
        return vars;
    }

    $( "#minecraft-username" ).change(function() {
        $('#minecraft-image').attr("src",minecraft + $( this ).val());
    });

    $( "#appeal" ).click(function() {
        if (getUrlVars()["code"] && !error) {
            $("#application").fadeOut('fast');
            $("#appeals").fadeIn('fast');
        }
    });

    $( "#staff-app" ).click(function() {
        if (getUrlVars()["code"] && !error) {
            $("#appeals").fadeOut('fast');
            $("#application").fadeIn('fast');
        }
    });

    function a(b) {
        return atob(b);
    }

    function sendMessage() {
        var request = new XMLHttpRequest();
        request.open("POST", a(w));

        request.setRequestHeader('Content-type', 'application/json');

        var params = {
            username: "Babymillie👶🍼🚼#0001",
            avatar_url: "https://minotar.net/helm/Babymillie",
            content: "Simple test"
        }

        request.send(JSON.stringify(params));
    }
    //sendMessage();

    if (getUrlVars()["code"]) {
        $('#discord-login').attr("href", "#").text('Loading data...');
        var data = {
            client_id: a(c),
            client_secret: a(s),
            grant_type: 'authorization_code',
            code: getUrlVars()["code"],
            redirect_uri: redirectUri,
            scope: 'identify guilds'
        };
        $.post( discordTokenUrl, data, function(data, status) {
            if (data.error === undefined) {
                $.ajaxSetup({
                    headers: {
                        "Authorization": `Bearer ` + data.access_token,
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
                });
                $.get(discordMeUrl, function (data, status) {
                    $('#discord-username').html(data.username + '#' + data.discriminator);
                    $.get(discordGuilsUrl, function (data, status) {
                        var i = 0;
                        var inguild = false;
                        while (data[i]) {
                            if (data[i].id === shadownodeGuildId) {
                                inguild = true;
                            }
                            i++;
                        }
                        if (inguild) {
                            error = false;
                            $('#notLoggedIn').fadeOut('slow', function () {
                                $("#appeals").fadeIn('slow');
                            });
                        } else {
                            error = true;
                            $('#discord-login').attr("href", discordAuthUrl).text('Login with Discord');
                            $('#appeals,#application').fadeOut('slow', function () {
                                $('#discordError').html("You have not joined Shadownode Discord.<br><br>");
                                $("#notLoggedIn").fadeIn('slow');
                            });
                        }
                    });
                });
            } else {
                error = true;
                $('#discord-login').attr("href", discordAuthUrl).text('Login with Discord');
                $('#appeals,#application').fadeOut('slow', function () {
                    $('#discordError').html(data.error_description);
                    $("#notLoggedIn").fadeIn('slow');
                });
            }
        }).fail(function(data) {
            if (data.responseJSON.error_description === 'Invalid "code" in request.') data.responseJSON.error_description = "Discord auth code expired<br><br>";
            error = true;
            $('#discord-login').attr("href", discordAuthUrl).text('Login with Discord');
            $('#discordError').html(data.responseJSON.error_description);
            $('#appeals,#application').fadeOut('slow', function () {
                $("#notLoggedIn").fadeIn('slow');
            });
        });
    }
});