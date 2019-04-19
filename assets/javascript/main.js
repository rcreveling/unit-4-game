/* Materialize Collapsible */
$(document).ready(function () {
    $('.collapsible').collapsible();
});

/* Materialize Collapsible */
$(function () {
    var location = ["Fighting Area", "Defending Area", "Out of Combat"]
    var characters = ["Hannibal", "B.A. Baracus", "Face", "Murdock"]
    var c = document.getElementById('canvas');
    var ctx = c.getContext("2d");
    var image1 = document.getElementById("gameHannibal");
    var image2 = document.getElementById("gameBa");
    var image3 = document.getElementById("gameMurdock");
    var image4 = document.getElementById("gameFace");
    var charInfo = [];

    // Characters, Location, HP, Abilities //

    var Face = {
        name: "Templeton Peck",
        age: 33,
        HP: 100,
        abilities: [
            "Heavy Wink",
            "Flashy Work",
            "Get The Girl",
            "Carbine Hail"
        ],

        items: [
            "Handkerchief",
            "Colt Lawman Mk III"
        ]
    }

    var BAB = {
        name: "Bad Attitude Baracus",
        age: 44,
        HP: 200,
        abilities: [
            "Pity The Fool",
            "Hearts and Minds",
            "Armor Up",
            "Baller Brawler"
        ],

        items: [
            "Van Keys",
            "50lbs Gold"
        ]
    }

    var Hannibal = {
        name: "John 'Hannibal' Smith",
        age: 53,
        HP: 100,
        abilities: [
            "Make a Plan",
            "Chameleon",
            "Grenadier",
            "Commando"
        ],

        items: [
            "Cigar",
            "Leather Gloves"
        ]

    }

    var Murdock = {
        name: "Howling Mad Murdock",
        age: 45,
        HP: 75,
        abilities: [
            "Socko's Modern Strike",
            "Ride the Skies",
            "Put em Down",
            "Apache Commando Master Murdock"
        ],

        items: [
            "Leather Bomber Jacket",
            "Baseball Cap",
            "Socko"
        ]
    }

    var Colonel_Lynch = {
        name: "Col. Lynch",
        age: 39,
        HP: 250,
        abilities: [
            "Wee Wooo",
            "Miss the Shot",
            "Barely catch up",
            "Miss the Jump"
        ]
    }

    var Decker = {
        name: "Decker",
        age: 41,
        HP: 300,
        abilities: [

        ]
    }


    // END CHARACTERS //

    const drawnCharacterImg = (char) => {
        var pick = "";
        var sx = "";
        var sy = "";
        var swidth = "";
        var sheight = "";


        switch (char) {
            case 'selHannibal':
                pick = image1;
                sx = 50;
                sy = 0;
                swidth = 200;
                sheight = 200;
                charInfo = [Hannibal.name, Hannibal.age, Hannibal.HP, Hannibal.abilities[0], Hannibal.abilities[1], Hannibal.abilities[2], Hannibal.abilities[3], Hannibal.items]
                break;
            case 'selBa':
                pick = image2;
                sx = 30;
                sy = 0;
                swidth = 600;
                sheight = 600;
                charInfo = [BAB.name, BAB.age, BAB.HP, BAB.abilities[0], BAB.abilities[1], BAB.abilities[2], BAB.abilities[3], BAB.items]
                break;
            case 'selMurdock':
                pick = image3;
                sx = 50;
                sy = 20;
                swidth = 190;
                sheight = 150;
                charInfo = [Murdock.name, Murdock.age, Murdock.HP, Murdock.abilities[0], Murdock.abilities[1], Murdock.abilities[2], Murdock.abilities[3], Murdock.items]
                break;
            case 'selFace':
                pick = image4;
                sx = 0;
                sy = 0;
                swidth = 500;
                sheight = 500;
                charInfo = [Face.name, Face.age, Face.HP, Face.abilities[0], Face.abilities[1], Face.abilities[2], Face.abilities[3], Face.items]
                break;

        }
        return { pick, sx, sy, swidth, sheight }
    }



    $(document).on("click", ".charBtn", function () {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        var charP = $(this).attr('id');
        var img = drawnCharacterImg(charP);
        console.log(img);
        ctx.rect(10, 10, 200, 200);
        ctx.drawImage(img.pick, img.sx, img.sy, img.swidth, img.sheight, 20, 20, 100, 100);
    })

    $(".charBtn").one("click", function () {
        if ($("#charInfoArea").hasClass("hiddenImage")) {
            $("#charInfoArea").toggleClass("hiddenImage");
        }
    })

    $(document).on("click", ".charBtn", function () {

        $("#name").text(charInfo[0]);
        $("#age").text("Age - " + charInfo[1]);
        $("#HP").text("Health - " + charInfo[2]);
        $("#abilityOne").text(charInfo[3]);
        $("#abilityTwo").text(charInfo[4]);
        $("#abilityThree").text(charInfo[5]);
        $("#abilityFour").text(charInfo[6]);
    })

})

