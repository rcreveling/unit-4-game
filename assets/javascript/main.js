$(function () {
    var location = ["Fighting Area", "Defending Area", "Out of Combat"]
    var characters = ["Hannibal", "B.A. Baracus", "Face", "Murdock"]
    var c = document.getElementById('canvas');
    var ctx = c.getContext("2d");
    var image1 = document.getElementById("gameHannibal");
    var image2 = document.getElementById("gameBa");
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
                sx = 0;
                sy = 0;
                swidth = 150;
                sheight = 150;
                break;
            case 'selBa':
                pick = image2;
                sx = 100;
                sy = 0;
                swidth = 200;
                sheight = 200;
                break;
            case 'selMurdock':
                pick = '';
                sx = 0;
                sy = 0;
                swidth = 100;
                sheight = 100;
                break;
            case 'selFace':
                pick = '';
                sx = 0;
                sy = 0;
                swidth = 100;
                sheight = 100;
                break;

        }
        return { pick, sx, sy, swidth, sheight }
    }


    $(document).on("click", ".charBtn", function () {
        console.log("click")

        var charP = $(this).attr('id')
        var img = drawnCharacterImg(charP)
        console.log(img)
        ctx.drawImage(img.pick, img.sx, img.sy, img.swidth, img.sheight, 30, 30, 50, 50)
    })

})