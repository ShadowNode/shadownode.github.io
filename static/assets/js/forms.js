$(document).ready(function() {
    /* Settings */
    var discordTokenUrl = "https://discordapp.com/api/oauth2/token";
    var discordMeUrl = "https://discordapp.com/api/users/@me";
    var discordGuilsUrl = "https://discordapp.com/api/users/@me/guilds";
    var shadownodeGuildId = "124188711603798016";
    var s = "VXk0RDJHOExmRmQ3OXF1czBEZ2RvV3dmTEtOMGM5eHE";
    var c = "Njg4NzIyNjQ0ODk1MjY4OTIx";
    var w = "aHR0cHM6Ly9kZXYuY29yZS1zZXJ2ZXIuYmU6MzQwMDEv";
    var m = "aHR0cHM6Ly9zaGllbGRlZC13YXRlcnMtODczOTcuaGVyb2t1YXBwLmNvbS9odHRwczovL2FwaS5tb2phbmcuY29tL3VzZXJzL3Byb2ZpbGVzL21pbmVjcmFmdC8=";
    var redirectUri = "http://" + window.location.host + "/forms" + (window.location.hostname === "localhost" ? ".html" : ""); // Update this on release
    var discordAuthUrl = "https://discordapp.com/oauth2/authorize?client_id=688722644895268921&redirect_uri=" + encodeURI(redirectUri) + "&response_type=code&scope=identify+guilds";
    var stats = "https://shadownode.ca/servers/api/getAll";
    var minecraft = "https://minotar.net/helm/";


    $('#discord-login').attr("href", discordAuthUrl).text('Login with Discord');
    var error = false;

    function getAllServers() {
        var statsUrl = stats + "?rand=" + new Date().getTime();
        var serverSelect = $('.server-select');
        fetch(statsUrl, {
            method: 'get'
        }).then(async function (response) {
            const servers = await response.json();
            for (var key of Object.keys(servers)) {
                const section = servers[key];
                if (!section.name.includes('ShadowNode')) { /* Disabling showing "ShadowNode Servers" */
                    if (!section.name.includes('Lobby') && section.active === 1) {
                        serverSelect.append($("<option></option>").attr("value", section.name).text(section.name));
                    }
                }
            }
            serverSelect.append($("<option>Other - Explain in channel</option>"));
        }).catch(function (err) {
            console.log("Error: " + err)
        });
    }
    getAllServers();

    /* Function to get ?url=parameters&and=these */
    function getUrlVars() {
        var vars = {};
        var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
            vars[key] = value;
        });
        return vars;
    }

    $("#minecraft-username-appeal").change(function () {
        $.get(a(m) + $(this).val(), function (data, status) {
            if (typeof data === 'undefined') {
                $('#minecraft-username-appeal').css('border', '2px solid red');
            } else {
                $('#minecraft-username-appeal').css('border', '2px solid green');
                $('#minecraft-image').attr("src", minecraft + $('#minecraft-username-appeal').val());
            }
        });
    });

    $("#appeal").click(function () {
        if (getUrlVars()["code"] && !error) {
            $("#application").fadeOut('fast');
            $("#appeals").fadeIn('fast');
        }
    });

    $("#staff-app").click(function () {
        if (getUrlVars()["code"] && !error) {
            $("#appeals").fadeOut('fast');
            $("#application").fadeIn('fast');
        }
    });

    function a(b) {
        return atob(b);
    }

    function sendAppealMessage() {
        var params = {
            application: 'appeal',
            id: $('.discord-id').val(),
            mcusername: $('#minecraft-username-appeal').val(),
            username: $('#discord-username-appeal').text(),
            avatar_url: $('#minecraft-image').attr('src'),
            server: $('#server-select').val(),
            reason: $('#banreason').val(),
            content: $('#explanation').val()
        };
        $.ajax({
            beforeSend: function (xhrObj) {
                xhrObj.setRequestHeader("Content-Type", "application/json");
                xhrObj.setRequestHeader("Accept", "application/json");
            },
            type: "GET",
            data: params,
            dataType: "json",
            url: a(w),
            complete: function (data) {
                $('#appeals,#application').fadeOut('slow', function () {
                    $("#success").fadeIn('slow');
                });
            }
        });
    }

    function sendApplicationMessage() {
        //TODO: Finish
        var params = {
            application: 'application'/*,
            id: $('.discord-id').val(),
            mcusername: $('#minecraft-username-appeal').val(),
            username: $('#discord-username-appeal').text(),
            avatar_url: $('#minecraft-image').attr('src'),
            server: $('#server-select').val(),
            reason: $('#banreason').val(),
            content: $('#explanation').val()*/
        };
        $.ajax({
            beforeSend: function (xhrObj) {
                xhrObj.setRequestHeader("Content-Type", "application/json");
                xhrObj.setRequestHeader("Accept", "application/json");
            },
            type: "GET",
            data: params,
            dataType: "json",
            url: a(w),
            complete: function (data) {
                $('#appeals,#application').fadeOut('slow', function () {
                    $("#success").fadeIn('slow');
                });
            }
        });
    }

    $("form").submit(function (e) {
        e.preventDefault();
    });

    $( "#send-application" ).click(function() {
        //TODO: parse all values and check if valid
        sendApplicationMessage();
    });

    $( "#send-appeal" ).click(function() {
        //TODO: parse all values and check if valid
        sendAppealMessage();
    });

    if (getUrlVars()["code"]) {
        $('.discord-login').attr("href", "#").text('Loading data...');
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
                $.ajax({
                    beforeSend: function (xhrObj) {
                        xhrObj.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                        xhrObj.setRequestHeader("Authorization", "Bearer " + data.access_token);
                    },
                    type: "GET",
                    url: discordMeUrl,
                    complete: function (data1) {
                        $('.discord-id').attr('value', data1.responseJSON.id);
                        $('.discord-username').html(data1.responseJSON.username + '#' + data1.responseJSON.discriminator);
                        $.ajax({
                            beforeSend: function (xhrObj) {
                                xhrObj.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                                xhrObj.setRequestHeader("Authorization", "Bearer " + data.access_token);
                            },
                            type: "GET",
                            url: discordGuilsUrl,
                            complete: function (data2) {
                                var i = 0;
                                var inguild = false;
                                while (data2.responseJSON[i]) {
                                    if (data2.responseJSON[i].id === shadownodeGuildId) {
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
                                    $('.discord-login').attr("href", discordAuthUrl).text('Login with Discord');
                                    $('#appeals,#application').fadeOut('slow', function () {
                                        $('.discordError').html("You have not joined Shadownode Discord.<br><br>");
                                        $("#notLoggedIn").fadeIn('slow');
                                    });
                                }
                            }
                        });
                    }
                });
            } else {
                error = true;
                $('.discord-login').attr("href", discordAuthUrl).text('Login with Discord');
                $('#appeals,#application').fadeOut('slow', function () {
                    $('.discordError').html(data.error_description);
                    $("#notLoggedIn").fadeIn('slow');
                });
            }
        }).fail(function(data) {
            if (data.responseJSON.error_description === 'Invalid "code" in request.') data.responseJSON.error_description = "Discord auth code expired<br><br>";
            error = true;
            $('.discord-login').attr("href", discordAuthUrl).text('Login with Discord');
            $('.discordError').html(data.responseJSON.error_description);
            $('#appeals,#application').fadeOut('slow', function () {
                $("#notLoggedIn").fadeIn('slow');
            });
        });
    }

    /* Character Counters */


    $("#leadership").keyup(function (obj) {
        var maxlength = obj.target.maxLength;
        var strLength = obj.target.value.length;

        if (strLength > maxlength) {
            $('#leadershipNum').html('<span style="color: red;">' + strLength + ' out of ' + maxlength + ' characters.</span>');
        } else {
            $('#leadershipNum').html(strLength + ' out of ' + maxlength + ' characters.');
        }
    });

    $("#moderation").keyup(function (obj) {
        var maxlength = obj.target.maxLength;
        var strLength = obj.target.value.length;

        if (strLength > maxlength) {
            $('#moderationChar').html('<span style="color: red;">' + strLength + ' out of ' + maxlength + ' characters.</span>');
        } else {
            $('#moderationChar').html(strLength + ' out of ' + maxlength + ' characters.');
        }
    });


    $("#banreason").keyup(function (obj) {
        var maxlength = obj.target.maxLength;
        var strLength = obj.target.value.length;

        if (strLength > maxlength) {
            $('#banChar').html('<span style="color: red;">' + strLength + ' out of ' + maxlength + ' characters.</span>');
        } else {
            $('#banChar').html(strLength + ' out of ' + maxlength + ' characters.');
        }
    });

    $("#explanation").keyup(function (obj) {
        var maxlength = obj.target.maxLength;
        var strLength = obj.target.value.length;

        if (strLength > maxlength) {
            $('#explanationNum').html('<span style="color: red;">' + strLength + ' out of ' + maxlength + ' characters.</span>');
        } else {
            $('#explanationNum').html(strLength + ' out of ' + maxlength + ' characters.');
        }
    });

    $("#situational-friend").keyup(function (obj) {
        var maxlength = obj.target.maxLength;
        var strLength = obj.target.value.length;

        if (strLength > maxlength) {
            $('#friendNum').html('<span style="color: red;">' + strLength + ' out of ' + maxlength + ' characters.</span>');
        } else {
            $('#friendNum').html(strLength + ' out of ' + maxlength + ' characters.');
        }
    });

    $("#situational-priority").keyup(function (obj) {
        var maxlength = obj.target.maxLength;
        var strLength = obj.target.value.length;

        if (strLength > maxlength) {
            $('#priorityNum').html('<span style="color: red;">' + strLength + ' out of ' + maxlength + ' characters.</span>');
        } else {
            $('#priorityNum').html(strLength + ' out of ' + maxlength + ' characters.');
        }
    });

    $("#situational-complicated").keyup(function (obj) {
        var maxlength = obj.target.maxLength;
        var strLength = obj.target.value.length;

        if (strLength > maxlength) {
            $('#complicatedNum').html('<span style="color: red;">' + strLength + ' out of ' + maxlength + ' characters.</span>');
        } else {
            $('#complicatedNum').html(strLength + ' out of ' + maxlength + ' characters.');
        }
    });

    /* Continue Btn */
    $(".continue").click(function (e) {
        $(".section active").removeClass("active");

        var $parent = $(this).parent();
        $parent.addClass("active");
        e.preventDefault();
    })

});