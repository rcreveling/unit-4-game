
/* Materialize Collapsible/Modal Initialization */
$(document).ready(function () {
    $('.collapsible').collapsible();
    $('.modal').modal();
});
/* Materialize Collapsible */

/*import Characters when NODE ADDED*/

/* import Characters */

$(function () {
    var location = ["Fighting Area", "Defending Area", "Out of Combat"]
    var characters = ["Hannibal", "B.A. Baracus", "Face", "Murdock"]
    var c = document.getElementById('canvas');
    var ctx = c.getContext("2d");
    var image1 = document.getElementById("gameHannibal");
    var image2 = document.getElementById("gameBa");
    var image3 = document.getElementById("gameMurdock");
    var image4 = document.getElementById("gameFace");
    var npcImage1 = document.getElementById("lynchFace");
    var npcImage2 = document.getElementById("craneFace");
    var npcImage3 = document.getElementById("deckerFace");
    var charInfo = [];
    var clearCanvas = true;
    // Characters, Location, HP, Abilities //

    var Hannibal = {
        name: "John 'Hannibal' Smith",
        age: 53,
        HP: 100,
        abilities: {
            one: "Make A Plan",
            two: "Chameleon",
            three: "Grenadier",
            four: "Commando"
        },
        abilityDescriptions: {
            one: "Get ready for the battle: Take two turns next time you're up. +1 turn",
            two: "Get into character: put on your favorite disguise and avoid the next hit. +100 Agility, 1 turn",
            three: "'Nade out - lob one of Uncle Sam's favorite toys at... Uncle Sam. Deal 50 Damage.",
            four: "Go Full Out: +1 turn, +20 Damage per hit, +20 agility",
        },

        items: {
            specialOne: "Cigar",
            specialTwo: "Leather Gloves",
            specialThree: "Wig",
            weapon: "Colt Lawman Mk III"
        },
        itemFunctions: {
            specialOne: "",
            specialTwo: "",
            specialThree: "",
            specialFour: ""
        },
        //Agility, Accuracy, Strength//
        attributes: {
            strength: 80,
            agility: 25,
            accuracy: 85
        },
        abilitiesFunction(abilitynumber) {
            var s = $(this).attributes.strength;
            switch (abilitynumber) {
                case (one):

                    break;
                case (two):

                    break;
                case (three):

                    break;
                case (four):

                    break;
            }
        }
    }
    var BAB = {
        name: "Bad Attitude Baracus",
        age: 44,
        HP: 200,
        abilities: {
            one: "Pity The Fool",
            two: "Hearts and Minds",
            three: "Armor Up",
            four: "Baller Brawler"
        },
        abilityDescriptions: {
            one: "It's Rhetorical. +20 Strength, 1 turn",
            two: "Get into character: put on your favorite disguise and avoid the next hit",
            three: "'Nade out: Lob one of Uncle Sam's favorite toys at... Uncle Sam.",
            four: "Go Full Out: one extra turn, +20 Damage per hit, +20 agility"
        },
        items: {
            specialOne: "Van Keys",
            specialTwo: "50lbs Gold",
            specialThree: "HeavyWeight Champion Belt",
            weapon: "Colt Lawman Mk III"
        },

        //Agility, Accuracy, Strength//
        attributes: {
            strength: 100,
            agility: 15,
            accuracy: 75
        },
    }
    var Murdock = {
        name: "Howling Mad Murdock",
        age: 45,
        HP: 75,
        abilities: {
            one: "Socko's Modern Strike",
            two: "Ride the Skies",
            three: "Put em Down",
            four: "Apache Commando Master Murdock"
        },
        abilityDescriptions: {
            one: "Get ready for the battle: Take two turns next time you're up",
            two: "Get into character: put on your favorite disguise and avoid the next hit",
            three: "'Nade out: Lob one of Uncle Sam's favorite toys at... Uncle Sam.",
            four: "Go Full Out: one extra turn, +20 Damage per hit, +20 agility"
        },
        items: {
            specialOne: "Leather Bomber Jacket",
            specialTwo: "Baseball Cap",
            specialThree: "Socko",
            weapon: "Colt Lawman Mk III"
        },
        itemFunctions: {
            specialOne: "",
            specialTwo: "",
            specialThree: "",
            specialFour: ""
        },
        //Agility, Accuracy, Strength//
        attributes: {
            strength: 60,
            agility: 35,
            accuracy: 90
        },
    }

    var Face = {
        name: "Templeton Peck",
        age: 33,
        HP: 100,
        abilities: {
            one: "Heavy Wink",
            two: "Flashy Work",
            three: "Get The Girl",
            four: "Carbine Hail"
        },
        abilityDescriptions: {
            one: "Get ready for the battle: Take two turns next time you're up",
            two: "Get into character: put on your favorite disguise and avoid the next hit",
            three: "'Nade out: Lob one of Uncle Sam's favorite toys at... Uncle Sam.",
            four: "Go Full Out: one extra turn, +20 Damage per hit, +20 agility"
        },
        items: {
            specialOne: "Handkerchief",
            specialTwo: "",
            specialThree: "",
            weapon: "Colt Lawman Mk III"
        },
        itemFunctions: {
            specialOne: "",
            specialTwo: "",
            specialThree: "",
            specialFour: ""
        },
        //Agility, Accuracy, Strength//
        attributes: {
            strength: 70,
            agility: 35,
            accuracy: 85
        },
    }
    //End A-Team//

    //Begin Enemies//
    var Colonel_Lynch = {
        name: "Col. Lynch",
        age: 39,
        HP: 250,
        abilities: [
            "Wee Wooo",
            "Miss the Shot",
            "Barely catch up",
            "Miss the Jump"
        ],
        attributes: {
            strength: 130,
            agility: 25,
            accuracy: 90
        },
    }
    var Crane = {
        name: "Crane",
        age: 34,
        HP: 300,
        abilities: [
            "",
            "",
            "",
            ""
        ],

        abilityDescriptions: [
            "",
            "",
            "",
            ""
        ],
        //Agility, Accuracy, Strength//
        attributes: {
            strength: 120,
            agility: 40,
            accuracy: 95
        },
    }
    var Decker = {
        name: "Decker",
        age: 41,
        HP: 300,
        abilities: [
            "Squad Cars",
            "Corner 'Em",
            "The Enemy of my Enemy...",
            "Fixing the Deck"
        ],

        abilityDescriptions: [
            "Call in the local Boys in Blue, reduce enemy Agility by 20 for 2 turns",
            "Get the Team in a bad position, +20% Strength +20% Accuracy -20.0 Enemy Agility (50% chance of success)",
            "Cooperate with the local baddies, +20 Strength for 2 turns",
            "Call in Crane for morale support, +30% to All Stats for 2 turns"
        ],
        //Agility, Accuracy, Strength//
        attributes: {
            strength: 150,
            agility: 40,
            accuracy: 75
        },
    }
    //End Enemies//


    // END CHARACTERS //
    var pick;

    var drawnCharacterImg = function (char) {
        debugger;
        var sx = "";
        var sy = "";
        var swidth = "";
        var sheight = "";


        switch (char) {
            case 'selHannibal':
                p = image1;
                sx = 50;
                sy = 0;
                swidth = 200;
                sheight = 200;
                charInfo = [
                    Hannibal.name,
                    Hannibal.age,
                    Hannibal.HP,
                    Hannibal.abilities.one,
                    Hannibal.abilities.two,
                    Hannibal.abilities.three,
                    Hannibal.abilities.four,
                    Hannibal.abilityDescriptions.one,
                    Hannibal.abilityDescriptions.two,
                    Hannibal.abilityDescriptions.three,
                    Hannibal.abilityDescriptions.four,
                    Hannibal.items
                ]
                break;
            case 'selBa':
                p = image2;
                sx = 30;
                sy = 0;
                swidth = 600;
                sheight = 600;
                charInfo = [
                    BAB.name,
                    BAB.age,
                    BAB.HP,
                    BAB.abilities.one,
                    BAB.abilities.two,
                    BAB.abilities.three,
                    BAB.abilities.four,
                    BAB.abilityDescriptions.one,
                    BAB.abilityDescriptions.two,
                    BAB.abilityDescriptions.three,
                    BAB.abilityDescriptions.four,
                    BAB.items
                ]
                break;
            case 'selMurdock':
                p = image3;
                sx = 50;
                sy = 20;
                swidth = 190;
                sheight = 150;
                charInfo = [
                    Murdock.name,
                    Murdock.age,
                    Murdock.HP,
                    Murdock.abilities.one,
                    Murdock.abilities.two,
                    Murdock.abilities.three,
                    Murdock.abilities.four,
                    Murdock.abilityDescriptions.one,
                    Murdock.abilityDescriptions.two,
                    Murdock.abilityDescriptions.three,
                    Murdock.abilityDescriptions.four,
                    Murdock.items
                ]
                break;
            case 'selFace':
                p = image4;
                sx = 0;
                sy = 0;
                swidth = 500;
                sheight = 500;
                charInfo = [
                    Face.name,
                    Face.age,
                    Face.HP,
                    Face.abilities.one,
                    Face.abilities.two,
                    Face.abilities.three,
                    Face.abilities.four,
                    Murdock.abilityDescriptions.one,
                    Murdock.abilityDescriptions.two,
                    Murdock.abilityDescriptions.three,
                    Murdock.abilityDescriptions.four,
                    Face.items
                ]
                break;

        }
        pick = p;
        return { pick, sx, sy, swidth, sheight }
    }

    var drawnNpcImg = function (char) {

        var sx = "";
        var sy = "";
        var swidth = "";
        var sheight = "";


        switch (char) {
            case '#lynchFace':
                p = npcImage1;
                sx = 100;
                sy = 0;
                swidth = 200;
                sheight = 200;
                npcInfo = [Colonel_Lynch.name,
                Colonel_Lynch.age,
                Colonel_Lynch.HP,
                Colonel_Lynch.abilities[0],
                Colonel_Lynch.abilities[1],
                Colonel_Lynch.abilities[2],
                Colonel_Lynch.abilities[3],
                // Colonel_Lynch.abilityDescriptions[0],
                // Colonel_Lynch.abilityDescriptions[1],
                // Colonel_Lynch.abilityDescriptions[2],
                // Colonel_Lynch.abilityDescriptions[3],
                Colonel_Lynch.items]
                break;
            case '#craneFace':
                p = npcImage2;
                sx = 30;
                sy = 0;
                swidth = 300;
                sheight = 300;
                npcInfo = [Crane.name,
                Crane.age,
                Crane.HP,
                Crane.abilities[0],
                Crane.abilities[1],
                Crane.abilities[2],
                Crane.abilities[3],
                Crane.items]
                break;
            case '#deckerFace':
                p = npcImage3;
                sx = 50;
                sy = 20;
                swidth = 190;
                sheight = 150;
                npcInfo = [Decker.name,
                Decker.age,
                Decker.HP,
                Decker.abilities[0],
                Decker.abilities[1],
                Decker.abilities[2],
                Decker.abilities[3],
                Decker.items]
                break;

        }
        pick = p;
        return { pick, sx, sy, swidth, sheight }
    }

    var currentImage = [];
    var drawNpc = false;
    $(document).on("click", ".charBtn", function () {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        var charP = $(this).attr('id');
        var img = drawnCharacterImg(charP);
        console.log(img);
        ctx.rect(10, 10, 200, 200);
        ctx.drawImage(img.pick, img.sx, img.sy, img.swidth, img.sheight, 20, 20, 100, 100);
        if (drawNpc) {
            switch (startClicks) {
                case 0:
                    var npcImg = drawnNpcImg('#lynchFace')
                    ctx.drawImage(npcImg.pick, npcImg.sx, npcImg.sy, npcImg.swidth, npcImg.sheight, 200, 0, 100, 100);
                    break;
                case 1:
                    var npcImg = drawnNpcImg('#craneFace')
                    ctx.drawImage(npcImg.pick, npcImg.sx, npcImg.sy, npcImg.swidth, npcImg.sheight, 200, 0, 100, 100);
                    break;
                case 2:
                    var npcImg = drawnNpcImg('#deckerFace')
                    ctx.drawImage(npcImg.pick, npcImg.sx, npcImg.sy, npcImg.swidth, npcImg.sheight, 200, 0, 100, 100);
                    break;
            }
        }

        currentImage.push(img.pick, img.sx, img.sy, img.swidth, img.sheight);

    })

    $(".charBtn").one("click", function () {
        if ($("#charInfoArea").hasClass("hiddenImage")) {
            $("#charInfoArea").toggleClass("hiddenImage");
        }
    })

    //NPC Start Button Functions//
    var startClicks = 0;
    $(document).on("click", "#startBtn", function () {



        if (startClicks === 0) {
            var npcP = '#lynchFace';
            var img = drawnNpcImg(npcP);
            if (img.HP === 0) {
                startClicks++;
            }
        } else if (startClicks === 1) {
            var npcP = '#craneFace';
            var img = drawnNpcImg(npcP);
            startClicks++;
        } else if (startClicks === 1) {
            var npcP = '#deckerFace';
            var img = drawnNpcImg(npcP);
            startClicks++;
        }
        console.log(img);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.drawImage(img.pick, img.sx, img.sy, img.swidth, img.sheight, 200, 0, 100, 100);

    })
    //Start Button Initialize Enemy Display//
    $("#startBtn").one("click", function () {
        if ($("#npcInfoArea").hasClass("hiddenImage")) {
            $("#npcInfoArea").toggleClass("hiddenImage");
            drawNpc = true;
        }
    })

    //charBtn function for Abilities, Ability Descriptions, and other CharInfo//
    $(document).on("click", ".charBtn", function () {


        $("#name").text(charInfo[0]);
        $("#age").text("Age - " + charInfo[1]);
        $("#HP").text("Health - " + charInfo[2]);

        $("#abilityOne").text(charInfo[3]);

        $("#abilityTwo").text(charInfo[4]);

        $("#abilityThree").text(charInfo[5]);

        $("#abilityFour").text(charInfo[6]);

        $(".abilityOneDescription").text(charInfo[7]);

        $(".abilityTwoDescription").text(charInfo[8]);

        $(".abilityThreeDescription").text(charInfo[9]);

        $(".abilityFourDescription").text(charInfo[10]);
    })
    //startBtn function for NPC Abilities, Ability Descriptions and other NPC info//
    $(document).on("click", "#startBtn", function () {

        $("#npcName").text(npcInfo[0]);
        $("#npcAge").text("Age - " + npcInfo[1]);
        $("#npcHP").text("Health - " + npcInfo[2]);

        $("#npcAbilityOne").text(npcInfo[3]);

        $("#npcAbilityTwo").text(npcInfo[4]);

        $("#npcAbilityThree").text(npcInfo[5]);

        $("#npcAbilityFour").text(npcInfo[6]);

        $(".npcAbilityOneDescription").text(npcInfo[7]);

        $(".npcAbilityTwoDescription").text(npcInfo[8]);

        $(".npcAbilityThreeDescription").text(npcInfo[9]);

        $(".npcAbilityFourDescription").text(npcInfo[10]);
    })

    // Modal Pop-Up dynamic function//
    function abilityOne(pick) {

        switch (pick) {
            case image1:
                var ability = Hannibal.abilities.one;
                $("#abilityOnePrompt").html(ability);
                break;
            case image2:
                var ability = BAB.abilities.one;
                $("#abilityOnePrompt").html(ability);
                break;
            case image3:
                var ability = Murdock.abilities.one;
                $("#abilityOnePrompt").html(ability);
                break;
            case image4:
                var ability = Face.abilities.one;
                $("#abilityOnePrompt").html(ability);
                break;

        }
    }
    function abilityTwo() {
        switch (pick) {
            case image1:
                var ability = Hannibal.abilities.two;
                $("#abilityTwoPrompt").html(ability);
                break;
            case image2:
                var ability = BAB.abilities.two;
                $("#abilityTwoPrompt").html(ability);
                break;
            case image3:
                var ability = Murdock.abilities.two;
                $("#abilityTwoPrompt").html(ability);
                break;
            case image4:
                var ability = Face.abilities.two;
                $("#abilityOnePrompt").html(ability);
                break;

        }
    }
    function abilityThree() {
        switch (pick) {
            case image1:
                var ability = Hannibal.abilities.three;
                $("#abilityThreePrompt").html(ability);
                break;
            case image2:
                var ability = BAB.abilities.three;
                $("#abilityThreePrompt").html(ability);
                break;
            case image3:
                var ability = Murdock.abilities.three;
                $("#abilityThreePrompt").html(ability);
                break;
            case image4:
                var ability = Face.abilities.three;
                $("#abilityOnePrompt").html(ability);
                break;

        }
    }
    function abilityFour() {
        switch (pick) {
            case image1:
                var ability = Hannibal.abilities.four;
                $("#abilityFourPrompt").html(ability);
                break;
            case image2:
                var ability = BAB.abilities.four;
                $("#abilityFourPrompt").html(ability);
                break;
            case image3:
                var ability = Murdock.abilities.four;
                $("#abilityFourPrompt").html(ability);
                break;
            case image4:
                var ability = Face.abilities.four;
                $("#abilityOnePrompt").html(ability);
                break;

        }
    }

    function a(c) {
        return $(c).attr('id');
    }

    $(".material-icons").on("click", function () {
        debugger;
        var b = a(this);
        var pick = $(document).drawnCharacterImg.pick;
        switch (b) {
            case "useAbilityOne":
                console.log("Arrow 1")

                abilityOne(pick);
                break;
            case "useAbilityTwo":
                console.log("Arrow 2")

                abilityTwo(pick);
                break;
            case "useAbilityThree":
                console.log("Arrow 3")

                abilityThree(pick);
                break;
            case "useAbilityFour":
                console.log("Arrow 4")

                abilityFour(pick);
                break;
        }

    });
})