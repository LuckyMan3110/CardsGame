/*
 Navicat Premium Data Transfer

 Source Server         : my_db
 Source Server Type    : MongoDB
 Source Server Version : 70004 (7.0.4)
 Source Host           : localhost:27017
 Source Schema         : cards_db

 Target Server Type    : MongoDB
 Target Server Version : 70004 (7.0.4)
 File Encoding         : 65001

 Date: 21/12/2023 14:23:17
*/


// ----------------------------
// Collection structure for games
// ----------------------------
db.getCollection("games").drop();
db.createCollection("games");

// ----------------------------
// Documents of games
// ----------------------------
db.getCollection("games").insert([ {
    _id: ObjectId("657d6fca8bbb38fa783b524e"),
    startdate: ISODate("2023-12-16T09:35:43.84Z"),
    state: NumberInt("0"),
    correctAnswer: [
        "A good sniff.",
        "A good sniff.",
        "A good sniff.",
        "A good sniff.",
        "A good sniff.",
        "A good sniff.",
        "A good sniff.",
        "A good sniff.",
        "A good sniff.",
        "A good sniff."
    ],
    weight: [ ],
    gametype: "Feeling Nostalgic",
    enddate: ISODate("2023-12-17T00:00:00.000Z"),
    attendnumber: NumberInt("20"),
    content: [
        {
            _id: ObjectId("657d6fca8bbb38fa783b524f"),
            question: "check me out, yo! I call this dance move.",
            answer1: "Getting decapitated by a helicopter.",
            answer2: "Fingering each other's buttholes.",
            answer3: "A button that when you press it, there's jazz.",
            answer4: "Fucking all my dad's friends.",
            answer5: "A good sniff.",
            answer6: "Some guy."
        },
        {
            _id: ObjectId("657d6fca8bbb38fa783b5250"),
            question: "check me out, yo! I call this dance move.",
            answer1: "Getting decapitated by a helicopter.",
            answer2: "Fingering each other's buttholes.",
            answer3: "A button that when you press it, there's jazz.",
            answer4: "Fucking all my dad's friends.",
            answer5: "A good sniff.",
            answer6: "Some guy."
        },
        {
            _id: ObjectId("657d6fca8bbb38fa783b5251"),
            question: "check me out, yo! I call this dance move.",
            answer1: "Getting decapitated by a helicopter.",
            answer2: "Fingering each other's buttholes.",
            answer3: "A button that when you press it, there's jazz.",
            answer4: "Fucking all my dad's friends.",
            answer5: "A good sniff.",
            answer6: "Some guy."
        },
        {
            _id: ObjectId("657d6fca8bbb38fa783b5252"),
            question: "check me out, yo! I call this dance move.",
            answer1: "Getting decapitated by a helicopter.",
            answer2: "Fingering each other's buttholes.",
            answer3: "A button that when you press it, there's jazz.",
            answer4: "Fucking all my dad's friends.",
            answer5: "A good sniff.",
            answer6: "Some guy."
        },
        {
            _id: ObjectId("657d6fca8bbb38fa783b5253"),
            question: "check me out, yo! I call this dance move.",
            answer1: "Getting decapitated by a helicopter.",
            answer2: "Fingering each other's buttholes.",
            answer3: "A button that when you press it, there's jazz.",
            answer4: "Fucking all my dad's friends.",
            answer5: "A good sniff.",
            answer6: "Some guy."
        },
        {
            _id: ObjectId("657d6fca8bbb38fa783b5254"),
            question: "check me out, yo! I call this dance move.",
            answer1: "Getting decapitated by a helicopter.",
            answer2: "Fingering each other's buttholes.",
            answer3: "A button that when you press it, there's jazz.",
            answer4: "Fucking all my dad's friends.",
            answer5: "A good sniff.",
            answer6: "Some guy."
        },
        {
            _id: ObjectId("657d6fca8bbb38fa783b5255"),
            question: "check me out, yo! I call this dance move.",
            answer1: "Getting decapitated by a helicopter.",
            answer2: "Fingering each other's buttholes.",
            answer3: "A button that when you press it, there's jazz.",
            answer4: "Fucking all my dad's friends.",
            answer5: "A good sniff.",
            answer6: "Some guy."
        },
        {
            _id: ObjectId("657d6fca8bbb38fa783b5256"),
            question: "check me out, yo! I call this dance move.",
            answer1: "Getting decapitated by a helicopter.",
            answer2: "Fingering each other's buttholes.",
            answer3: "A button that when you press it, there's jazz.",
            answer4: "Fucking all my dad's friends.",
            answer5: "A good sniff.",
            answer6: "Some guy."
        },
        {
            _id: ObjectId("657d6fca8bbb38fa783b5257"),
            question: "check me out, yo! I call this dance move.",
            answer1: "Getting decapitated by a helicopter.",
            answer2: "Fingering each other's buttholes.",
            answer3: "A button that when you press it, there's jazz.",
            answer4: "Fucking all my dad's friends.",
            answer5: "A good sniff.",
            answer6: "Some guy."
        },
        {
            _id: ObjectId("657d6fca8bbb38fa783b5258"),
            question: "check me out, yo! I call this dance move.",
            answer1: "Getting decapitated by a helicopter.",
            answer2: "Fingering each other's buttholes.",
            answer3: "A button that when you press it, there's jazz.",
            answer4: "Fucking all my dad's friends.",
            answer5: "A good sniff.",
            answer6: "Some guy."
        }
    ],
    followlist: [
        {
            values: [
                "Some guy.",
                "Fingering each other's buttholes.",
                "A button that when you press it, there's jazz.",
                "A button that when you press it, there's jazz.",
                "Some guy.",
                "Some guy.",
                "A good sniff.",
                "A button that when you press it, there's jazz.",
                "Fingering each other's buttholes."
            ],
            _id: ObjectId("658332e8fa7e4f3edc3f95ba"),
            email: "alpha@hotmail.com"
        }
    ],
    __v: NumberInt("0")
} ]);
db.getCollection("games").insert([ {
    _id: ObjectId("657d70c6f9d14fb1fc4bc86d"),
    startdate: ISODate("2023-12-16T09:40:54.394Z"),
    enddate: ISODate("2023-12-17T00:00:00.000Z"),
    state: NumberInt("0"),
    correctAnswer: [
        "sdfa",
        "sdfa",
        "sdfa",
        "sdfa",
        "sdfa",
        "sdfa",
        "sdfa",
        "sdfa",
        "sdfa",
        "sdfa"
    ],
    weight: [ ],
    gametype: "Feeling Nostalgic",
    attendnumber: NumberInt("243"),
    content: [
        {
            _id: ObjectId("657d70c6f9d14fb1fc4bc86e"),
            question: "fdsaf",
            answer1: "dsfa",
            answer2: "asdf",
            answer3: "asdf",
            answer4: "sdfa",
            answer5: "sdfa",
            answer6: "asdf"
        },
        {
            _id: ObjectId("657d70c6f9d14fb1fc4bc86f"),
            question: "fdsaf",
            answer1: "dsfa",
            answer2: "asdf",
            answer3: "asdf",
            answer4: "sdfa",
            answer5: "sdfa",
            answer6: "asdf"
        },
        {
            _id: ObjectId("657d70c6f9d14fb1fc4bc870"),
            question: "fdsaf",
            answer1: "dsfa",
            answer2: "asdf",
            answer3: "asdf",
            answer4: "sdfa",
            answer5: "sdfa",
            answer6: "asdf"
        },
        {
            _id: ObjectId("657d70c6f9d14fb1fc4bc871"),
            question: "fdsaf",
            answer1: "dsfa",
            answer2: "asdf",
            answer3: "asdf",
            answer4: "sdfa",
            answer5: "sdfa",
            answer6: "asdf"
        },
        {
            _id: ObjectId("657d70c6f9d14fb1fc4bc872"),
            question: "fdsaf",
            answer1: "dsfa",
            answer2: "asdf",
            answer3: "asdf",
            answer4: "sdfa",
            answer5: "sdfa",
            answer6: "asdf"
        },
        {
            _id: ObjectId("657d70c6f9d14fb1fc4bc873"),
            question: "fdsaf",
            answer1: "dsfa",
            answer2: "asdf",
            answer3: "asdf",
            answer4: "sdfa",
            answer5: "sdfa",
            answer6: "asdf"
        },
        {
            _id: ObjectId("657d70c6f9d14fb1fc4bc874"),
            question: "fdsaf",
            answer1: "dsfa",
            answer2: "asdf",
            answer3: "asdf",
            answer4: "sdfa",
            answer5: "sdfa",
            answer6: "asdf"
        },
        {
            _id: ObjectId("657d70c6f9d14fb1fc4bc875"),
            question: "fdsaf",
            answer1: "dsfa",
            answer2: "asdf",
            answer3: "asdf",
            answer4: "sdfa",
            answer5: "sdfa",
            answer6: "asdf"
        },
        {
            _id: ObjectId("657d70c6f9d14fb1fc4bc876"),
            question: "fdsaf",
            answer1: "dsfa",
            answer2: "asdf",
            answer3: "asdf",
            answer4: "sdfa",
            answer5: "sdfa",
            answer6: "asdf"
        },
        {
            _id: ObjectId("657d70c6f9d14fb1fc4bc877"),
            question: "fdsaf",
            answer1: "dsfa",
            answer2: "asdf",
            answer3: "asdf",
            answer4: "sdfa",
            answer5: "sdfa",
            answer6: "asdf"
        }
    ],
    followlist: [
        {
            values: [
                "asdf",
                "asdf",
                "dsfa",
                "asdf",
                "sdfa",
                "asdf",
                "asdf",
                "asdf",
                "sdfa"
            ],
            _id: ObjectId("65831f2a3a4c5a070c39822f"),
            email: "goodluck3110.dev@gmail.com"
        }
    ],
    __v: NumberInt("0")
} ]);
db.getCollection("games").insert([ {
    _id: ObjectId("657dcd60021fe4199157d2ed"),
    startdate: ISODate("2023-12-16T15:37:26.483Z"),
    enddate: ISODate("2023-12-18T00:00:00.000Z"),
    state: NumberInt("0"),
    correctAnswer: [
        "Fucking all my dad's friends.",
        "Fucking all my dad's friends.",
        "Fucking all my dad's friends.",
        "Fucking all my dad's friends.",
        "Fucking all my dad's friends.",
        "Fucking all my dad's friends.",
        "Fucking all my dad's friends.",
        "Fucking all my dad's friends.",
        "Fucking all my dad's friends.",
        "Fucking all my dad's friends."
    ],
    weight: [ ],
    gametype: "Feeling Nostalgic",
    attendnumber: NumberInt("50"),
    content: [
        {
            _id: ObjectId("657dcd60021fe4199157d2ee"),
            question: "check me out, yo! I call this dance move.",
            answer1: "Getting decapitated by a helicopter.",
            answer2: "Fingering each other's buttholes.",
            answer3: "Fucking all my dad's friends.",
            answer4: "Having anuses for eyes.",
            answer5: "Stuffing my peehole with Tic Tacs.",
            answer6: "A toothless woman gumming on a peach."
        },
        {
            _id: ObjectId("657dcd60021fe4199157d2ef"),
            question: "Fingering each other's buttholes.",
            answer1: "Getting decapitated by a helicopter.",
            answer2: "Fucking all my dad's friends.",
            answer3: "Fucking all my dad's friends.",
            answer4: "Expanding British commercial interests in Nigeria.",
            answer5: "Stuffing my peehole with Tic Tacs.",
            answer6: "The heart of a child."
        },
        {
            _id: ObjectId("657dcd60021fe4199157d2f0"),
            question: "Fingering each other's buttholes.",
            answer1: "Getting decapitated by a helicopter.",
            answer2: "Fucking all my dad's friends.",
            answer3: "Fucking all my dad's friends.",
            answer4: "Expanding British commercial interests in Nigeria.",
            answer5: "Stuffing my peehole with Tic Tacs.",
            answer6: "The heart of a child."
        },
        {
            _id: ObjectId("657dcd60021fe4199157d2f1"),
            question: "Fingering each other's buttholes.",
            answer1: "Getting decapitated by a helicopter.",
            answer2: "Fucking all my dad's friends.",
            answer3: "Fucking all my dad's friends.",
            answer4: "Expanding British commercial interests in Nigeria.",
            answer5: "Stuffing my peehole with Tic Tacs.",
            answer6: "The heart of a child."
        },
        {
            _id: ObjectId("657dcd60021fe4199157d2f2"),
            question: "Fingering each other's buttholes.",
            answer1: "Getting decapitated by a helicopter.",
            answer2: "Fucking all my dad's friends.",
            answer3: "Fucking all my dad's friends.",
            answer4: "Expanding British commercial interests in Nigeria.",
            answer5: "Stuffing my peehole with Tic Tacs.",
            answer6: "The heart of a child."
        },
        {
            _id: ObjectId("657dcd60021fe4199157d2f3"),
            question: "Fingering each other's buttholes.",
            answer1: "Getting decapitated by a helicopter.",
            answer2: "Fucking all my dad's friends.",
            answer3: "Fucking all my dad's friends.",
            answer4: "Expanding British commercial interests in Nigeria.",
            answer5: "Stuffing my peehole with Tic Tacs.",
            answer6: "The heart of a child."
        },
        {
            _id: ObjectId("657dcd60021fe4199157d2f4"),
            question: "Fingering each other's buttholes.",
            answer1: "Getting decapitated by a helicopter.",
            answer2: "Fucking all my dad's friends.",
            answer3: "Fucking all my dad's friends.",
            answer4: "Expanding British commercial interests in Nigeria.",
            answer5: "Stuffing my peehole with Tic Tacs.",
            answer6: "The heart of a child."
        },
        {
            _id: ObjectId("657dcd60021fe4199157d2f5"),
            question: "Fingering each other's buttholes.",
            answer1: "Getting decapitated by a helicopter.",
            answer2: "Fucking all my dad's friends.",
            answer3: "Fucking all my dad's friends.",
            answer4: "Expanding British commercial interests in Nigeria.",
            answer5: "Stuffing my peehole with Tic Tacs.",
            answer6: "The heart of a child."
        },
        {
            _id: ObjectId("657dcd60021fe4199157d2f6"),
            question: "Fingering each other's buttholes.",
            answer1: "Getting decapitated by a helicopter.",
            answer2: "Fucking all my dad's friends.",
            answer3: "Fucking all my dad's friends.",
            answer4: "Expanding British commercial interests in Nigeria.",
            answer5: "Stuffing my peehole with Tic Tacs.",
            answer6: "The heart of a child."
        },
        {
            _id: ObjectId("657dcd60021fe4199157d2f7"),
            question: "Fingering each other's buttholes.",
            answer1: "Getting decapitated by a helicopter.",
            answer2: "Fucking all my dad's friends.",
            answer3: "Fucking all my dad's friends.",
            answer4: "Expanding British commercial interests in Nigeria.",
            answer5: "Stuffing my peehole with Tic Tacs.",
            answer6: "The heart of a child."
        }
    ],
    followlist: [
        {
            values: [
                "Getting decapitated by a helicopter.",
                "Stuffing my peehole with Tic Tacs.",
                "Expanding British commercial interests in Nigeria.",
                "Fucking all my dad's friends.",
                "Stuffing my peehole with Tic Tacs.",
                "Fucking all my dad's friends.",
                "Fucking all my dad's friends.",
                "Stuffing my peehole with Tic Tacs.",
                "Fucking all my dad's friends."
            ],
            _id: ObjectId("657dd7b4f0df93228c82337c"),
            email: "alpha@hotmail.com"
        }
    ],
    __v: NumberInt("0")
} ]);
db.getCollection("games").insert([ {
    _id: ObjectId("657dcdb5ef351a98e8b38281"),
    startdate: ISODate("2023-12-16T16:17:56.33Z"),
    enddate: ISODate("2023-12-18T00:00:00.000Z"),
    state: NumberInt("1"),
    correctAnswer: [
        "Fucking all my dad's friends.",
        "Fucking all my dad's friends.",
        "Fucking all my dad's friends.",
        "Fucking all my dad's friends.",
        "Fucking all my dad's friends.",
        "Fucking all my dad's friends.",
        "Fucking all my dad's friends.",
        "Fucking all my dad's friends.",
        "Fucking all my dad's friends.",
        "Fucking all my dad's friends."
    ],
    weight: [ ],
    gametype: "Feeling Nostalgic",
    attendnumber: NumberInt("50"),
    content: [
        {
            _id: ObjectId("657dcdb5ef351a98e8b38282"),
            question: "check me out, yo! I call this dance move.",
            answer1: "Getting decapitated by a helicopter.",
            answer2: "Fingering each other's buttholes.",
            answer3: "Fucking all my dad's friends.",
            answer4: "Having anuses for eyes.",
            answer5: "Stuffing my peehole with Tic Tacs.",
            answer6: "A toothless woman gumming on a peach."
        },
        {
            _id: ObjectId("657dcdb5ef351a98e8b38283"),
            question: "Fingering each other's buttholes.",
            answer1: "Getting decapitated by a helicopter.",
            answer2: "Fucking all my dad's friends.",
            answer3: "Fucking all my dad's friends.",
            answer4: "Expanding British commercial interests in Nigeria.",
            answer5: "Stuffing my peehole with Tic Tacs.",
            answer6: "The heart of a child."
        },
        {
            _id: ObjectId("657dcdb5ef351a98e8b38284"),
            question: "Fingering each other's buttholes.",
            answer1: "Getting decapitated by a helicopter.",
            answer2: "Fucking all my dad's friends.",
            answer3: "Fucking all my dad's friends.",
            answer4: "Expanding British commercial interests in Nigeria.",
            answer5: "Stuffing my peehole with Tic Tacs.",
            answer6: "The heart of a child."
        },
        {
            _id: ObjectId("657dcdb5ef351a98e8b38285"),
            question: "Fingering each other's buttholes.",
            answer1: "Getting decapitated by a helicopter.",
            answer2: "Fucking all my dad's friends.",
            answer3: "Fucking all my dad's friends.",
            answer4: "Expanding British commercial interests in Nigeria.",
            answer5: "Stuffing my peehole with Tic Tacs.",
            answer6: "The heart of a child."
        },
        {
            _id: ObjectId("657dcdb5ef351a98e8b38286"),
            question: "Fingering each other's buttholes.",
            answer1: "Getting decapitated by a helicopter.",
            answer2: "Fucking all my dad's friends.",
            answer3: "Fucking all my dad's friends.",
            answer4: "Expanding British commercial interests in Nigeria.",
            answer5: "Stuffing my peehole with Tic Tacs.",
            answer6: "The heart of a child."
        },
        {
            _id: ObjectId("657dcdb5ef351a98e8b38287"),
            question: "Fingering each other's buttholes.",
            answer1: "Getting decapitated by a helicopter.",
            answer2: "Fucking all my dad's friends.",
            answer3: "Fucking all my dad's friends.",
            answer4: "Expanding British commercial interests in Nigeria.",
            answer5: "Stuffing my peehole with Tic Tacs.",
            answer6: "The heart of a child."
        },
        {
            _id: ObjectId("657dcdb5ef351a98e8b38288"),
            question: "Fingering each other's buttholes.",
            answer1: "Getting decapitated by a helicopter.",
            answer2: "Fucking all my dad's friends.",
            answer3: "Fucking all my dad's friends.",
            answer4: "Expanding British commercial interests in Nigeria.",
            answer5: "Stuffing my peehole with Tic Tacs.",
            answer6: "The heart of a child."
        },
        {
            _id: ObjectId("657dcdb5ef351a98e8b38289"),
            question: "Fingering each other's buttholes.",
            answer1: "Getting decapitated by a helicopter.",
            answer2: "Fucking all my dad's friends.",
            answer3: "Fucking all my dad's friends.",
            answer4: "Expanding British commercial interests in Nigeria.",
            answer5: "Stuffing my peehole with Tic Tacs.",
            answer6: "The heart of a child."
        },
        {
            _id: ObjectId("657dcdb5ef351a98e8b3828a"),
            question: "Fingering each other's buttholes.",
            answer1: "Getting decapitated by a helicopter.",
            answer2: "Fucking all my dad's friends.",
            answer3: "Fucking all my dad's friends.",
            answer4: "Expanding British commercial interests in Nigeria.",
            answer5: "Stuffing my peehole with Tic Tacs.",
            answer6: "The heart of a child."
        },
        {
            _id: ObjectId("657dcdb5ef351a98e8b3828b"),
            question: "Fingering each other's buttholes.",
            answer1: "Getting decapitated by a helicopter.",
            answer2: "Fucking all my dad's friends.",
            answer3: "Fucking all my dad's friends.",
            answer4: "Expanding British commercial interests in Nigeria.",
            answer5: "Stuffing my peehole with Tic Tacs.",
            answer6: "The heart of a child."
        }
    ],
    followlist: [
        {
            values: [
                "A toothless woman gumming on a peach.",
                "Stuffing my peehole with Tic Tacs.",
                "Getting decapitated by a helicopter.",
                "Fucking all my dad's friends.",
                "Fucking all my dad's friends.",
                "Expanding British commercial interests in Nigeria.",
                "The heart of a child.",
                "Getting decapitated by a helicopter.",
                "Fucking all my dad's friends."
            ],
            _id: ObjectId("6584354bc3eec43ee4c62567"),
            email: "alpha@hotmail.com"
        }
    ],
    __v: NumberInt("0")
} ]);
db.getCollection("games").insert([ {
    _id: ObjectId("657dd19554c699d5b4710ef8"),
    startdate: ISODate("2023-12-16T16:33:35.851Z"),
    enddate: ISODate("2023-12-18T00:00:00.000Z"),
    state: NumberInt("1"),
    correctAnswer: [
        "dsafdsafasd",
        "dsafdsafasd",
        "dsafdsafasd",
        "dsafdsafasd",
        "dsafdsafasd",
        "dsafdsafasd",
        "dsafdsafasd",
        "dsafdsafasd",
        "dsafdsafasd",
        "dsafdsafasd"
    ],
    weight: [ ],
    gametype: "Play CAH with your kids",
    attendnumber: NumberInt("23"),
    content: [
        {
            _id: ObjectId("657dd19554c699d5b4710ef9"),
            question: "dasfsda",
            answer1: "fdsf",
            answer2: "adsfdsaf",
            answer3: "sdafdsafsda",
            answer4: "dsafdsaf",
            answer5: "fdsaf",
            answer6: "fdsa"
        },
        {
            _id: ObjectId("657dd19554c699d5b4710efa"),
            question: "dasfsda",
            answer1: "fdsf",
            answer2: "adsfdsaf",
            answer3: "sdafdsafsda",
            answer4: "dsafdsaf",
            answer5: "fdsaf",
            answer6: "fdsa"
        },
        {
            _id: ObjectId("657dd19554c699d5b4710efb"),
            question: "dasfsda",
            answer1: "fdsf",
            answer2: "adsfdsaf",
            answer3: "sdafdsafsda",
            answer4: "dsafdsaf",
            answer5: "fdsaf",
            answer6: "fdsa"
        },
        {
            _id: ObjectId("657dd19554c699d5b4710efc"),
            question: "dasfsda",
            answer1: "fdsf",
            answer2: "adsfdsaf",
            answer3: "sdafdsafsda",
            answer4: "dsafdsaf",
            answer5: "fdsaf",
            answer6: "fdsa"
        },
        {
            _id: ObjectId("657dd19554c699d5b4710efd"),
            question: "dasfsda",
            answer1: "fdsf",
            answer2: "adsfdsaf",
            answer3: "sdafdsafsda",
            answer4: "dsafdsaf",
            answer5: "fdsaf",
            answer6: "fdsa"
        },
        {
            _id: ObjectId("657dd19554c699d5b4710efe"),
            question: "dasfsda",
            answer1: "fdsf",
            answer2: "adsfdsaf",
            answer3: "sdafdsafsda",
            answer4: "dsafdsaf",
            answer5: "fdsaf",
            answer6: "fdsa"
        },
        {
            _id: ObjectId("657dd19554c699d5b4710eff"),
            question: "dasfsda",
            answer1: "fdsf",
            answer2: "adsfdsaf",
            answer3: "sdafdsafsda",
            answer4: "dsafdsaf",
            answer5: "fdsaf",
            answer6: "fdsa"
        },
        {
            _id: ObjectId("657dd19554c699d5b4710f00"),
            question: "dasfsda",
            answer1: "fdsf",
            answer2: "adsfdsaf",
            answer3: "sdafdsafsda",
            answer4: "dsafdsaf",
            answer5: "fdsaf",
            answer6: "fdsa"
        },
        {
            _id: ObjectId("657dd19554c699d5b4710f01"),
            question: "dasfsda",
            answer1: "fdsf",
            answer2: "adsfdsaf",
            answer3: "sdafdsafsda",
            answer4: "dsafdsaf",
            answer5: "fdsaf",
            answer6: "fdsa"
        },
        {
            _id: ObjectId("657dd19554c699d5b4710f02"),
            question: "dasfsda",
            answer1: "fdsf",
            answer2: "adsfdsaf",
            answer3: "sdafdsafsda",
            answer4: "dsafdsaf",
            answer5: "fdsaf",
            answer6: "fdsa"
        }
    ],
    followlist: [
        {
            values: [
                "fdsa",
                "dsafdsaf",
                "sdafdsafsda",
                "fdsaf",
                "adsfdsaf",
                "sdafdsafsda",
                "sdafdsafsda",
                "sdafdsafsda",
                "fdsa"
            ],
            _id: ObjectId("658323603a4c5a070c3982f5"),
            email: "alpha@hotmail.com"
        }
    ],
    __v: NumberInt("0")
} ]);
db.getCollection("games").insert([ {
    _id: ObjectId("657dd283d40dc1e6fc00aa53"),
    startdate: ISODate("2023-12-16T16:36:13.896Z"),
    enddate: ISODate("2023-12-18T00:00:00.000Z"),
    state: NumberInt("1"),
    correctAnswer: [
        "Having anuses for eyes.",
        "Having anuses for eyes.",
        "Having anuses for eyes.",
        "Having anuses for eyes.",
        "Having anuses for eyes.",
        "Having anuses for eyes.",
        "Having anuses for eyes.",
        "Having anuses for eyes.",
        "Having anuses for eyes.",
        "Having anuses for eyes."
    ],
    weight: [ ],
    gametype: "Feeling Nostalgic",
    attendnumber: NumberInt("34"),
    content: [
        {
            _id: ObjectId("657dd283d40dc1e6fc00aa54"),
            question: "check me out, yo! I call this dance move.",
            answer1: "A button that when you press it, there's jazz.",
            answer2: "Fingering each other's buttholes.",
            answer3: "Fucking all my dad's friends.",
            answer4: "Having anuses for eyes.",
            answer5: "A toothless woman gumming on a peach.",
            answer6: "Expanding British commercial interests in Nigeria."
        },
        {
            _id: ObjectId("657dd283d40dc1e6fc00aa55"),
            question: "check me out, yo! I call this dance move.",
            answer1: "A good sniff.",
            answer2: "Fingering each other's buttholes.",
            answer3: "dsfasfadsf",
            answer4: "The heart of a child.",
            answer5: "A toothless woman gumming on a peach.",
            answer6: "Stuffing my peehole with Tic Tacs."
        },
        {
            _id: ObjectId("657dd283d40dc1e6fc00aa56"),
            question: "check me out, yo! I call this dance move.",
            answer1: "A good sniff.",
            answer2: "Fingering each other's buttholes.",
            answer3: "dsfasfadsf",
            answer4: "The heart of a child.",
            answer5: "A toothless woman gumming on a peach.",
            answer6: "Stuffing my peehole with Tic Tacs."
        },
        {
            _id: ObjectId("657dd283d40dc1e6fc00aa57"),
            question: "check me out, yo! I call this dance move.",
            answer1: "A good sniff.",
            answer2: "Fingering each other's buttholes.",
            answer3: "dsfasfadsf",
            answer4: "The heart of a child.",
            answer5: "A toothless woman gumming on a peach.",
            answer6: "Stuffing my peehole with Tic Tacs."
        },
        {
            _id: ObjectId("657dd283d40dc1e6fc00aa58"),
            question: "check me out, yo! I call this dance move.",
            answer1: "A good sniff.",
            answer2: "Fingering each other's buttholes.",
            answer3: "dsfasfadsf",
            answer4: "The heart of a child.",
            answer5: "A toothless woman gumming on a peach.",
            answer6: "Stuffing my peehole with Tic Tacs."
        },
        {
            _id: ObjectId("657dd283d40dc1e6fc00aa59"),
            question: "check me out, yo! I call this dance move.",
            answer1: "A good sniff.",
            answer2: "Fingering each other's buttholes.",
            answer3: "dsfasfadsf",
            answer4: "The heart of a child.",
            answer5: "A toothless woman gumming on a peach.",
            answer6: "Stuffing my peehole with Tic Tacs."
        },
        {
            _id: ObjectId("657dd283d40dc1e6fc00aa5a"),
            question: "check me out, yo! I call this dance move.",
            answer1: "A good sniff.",
            answer2: "Fingering each other's buttholes.",
            answer3: "dsfasfadsf",
            answer4: "The heart of a child.",
            answer5: "A toothless woman gumming on a peach.",
            answer6: "Stuffing my peehole with Tic Tacs."
        },
        {
            _id: ObjectId("657dd283d40dc1e6fc00aa5b"),
            question: "check me out, yo! I call this dance move.",
            answer1: "A good sniff.",
            answer2: "Fingering each other's buttholes.",
            answer3: "dsfasfadsf",
            answer4: "The heart of a child.",
            answer5: "A toothless woman gumming on a peach.",
            answer6: "Stuffing my peehole with Tic Tacs."
        },
        {
            _id: ObjectId("657dd283d40dc1e6fc00aa5c"),
            question: "check me out, yo! I call this dance move.",
            answer1: "A good sniff.",
            answer2: "Fingering each other's buttholes.",
            answer3: "dsfasfadsf",
            answer4: "The heart of a child.",
            answer5: "A toothless woman gumming on a peach.",
            answer6: "Stuffing my peehole with Tic Tacs."
        },
        {
            _id: ObjectId("657dd283d40dc1e6fc00aa5d"),
            question: "check me out, yo! I call this dance move.",
            answer1: "A good sniff.",
            answer2: "Fingering each other's buttholes.",
            answer3: "dsfasfadsf",
            answer4: "The heart of a child.",
            answer5: "A toothless woman gumming on a peach.",
            answer6: "Stuffing my peehole with Tic Tacs."
        }
    ],
    followlist: [
        {
            values: [
                "Expanding British commercial interests in Nigeria.",
                "A toothless woman gumming on a peach.",
                "dsfasfadsf",
                "Fingering each other's buttholes.",
                "A toothless woman gumming on a peach.",
                "dsfasfadsf",
                "Stuffing my peehole with Tic Tacs.",
                "A good sniff.",
                "dsfasfadsf"
            ],
            _id: ObjectId("658325403a4c5a070c398309"),
            email: "alpha@hotmail.com"
        }
    ],
    __v: NumberInt("0")
} ]);
db.getCollection("games").insert([ {
    _id: ObjectId("657dd4aede23544cd888f4af"),
    startdate: ISODate("2023-12-16T16:45:08.669Z"),
    enddate: ISODate("2023-12-18T00:00:00.000Z"),
    state: NumberInt("1"),
    correctAnswer: [
        "The heart of a child.",
        "The heart of a child.",
        "The heart of a child.",
        "The heart of a child.",
        "The heart of a child.",
        "The heart of a child.",
        "The heart of a child.",
        "The heart of a child.",
        "The heart of a child.",
        "The heart of a child."
    ],
    weight: [ ],
    gametype: "Feeling Nostalgic",
    attendnumber: NumberInt("24"),
    content: [
        {
            _id: ObjectId("657dd4aede23544cd888f4b0"),
            question: "check me out, yo! I call this dance move.",
            answer1: "Getting decapitated by a helicopter.",
            answer2: "Fucking all my dad's friends.",
            answer3: "A button that when you press it, there's jazz.",
            answer4: "Some guy.",
            answer5: "A good sniff.",
            answer6: "The heart of a child."
        },
        {
            _id: ObjectId("657dd4aede23544cd888f4b1"),
            question: "check me out, yo! I call this dance move.",
            answer1: "Getting decapitated by a helicopter.",
            answer2: "Fucking all my dad's friends.",
            answer3: "A button that when you press it, there's jazz.",
            answer4: "Some guy.",
            answer5: "A good sniff.",
            answer6: "The heart of a child."
        },
        {
            _id: ObjectId("657dd4aede23544cd888f4b2"),
            question: "check me out, yo! I call this dance move.",
            answer1: "Getting decapitated by a helicopter.",
            answer2: "Fucking all my dad's friends.",
            answer3: "A button that when you press it, there's jazz.",
            answer4: "Some guy.",
            answer5: "A good sniff.",
            answer6: "The heart of a child."
        },
        {
            _id: ObjectId("657dd4aede23544cd888f4b3"),
            question: "check me out, yo! I call this dance move.",
            answer1: "Getting decapitated by a helicopter.",
            answer2: "Fucking all my dad's friends.",
            answer3: "A button that when you press it, there's jazz.",
            answer4: "Some guy.",
            answer5: "A good sniff.",
            answer6: "The heart of a child."
        },
        {
            _id: ObjectId("657dd4aede23544cd888f4b4"),
            question: "check me out, yo! I call this dance move.",
            answer1: "Getting decapitated by a helicopter.",
            answer2: "Fucking all my dad's friends.",
            answer3: "A button that when you press it, there's jazz.",
            answer4: "Some guy.",
            answer5: "A good sniff.",
            answer6: "The heart of a child."
        },
        {
            _id: ObjectId("657dd4aede23544cd888f4b5"),
            question: "check me out, yo! I call this dance move.",
            answer1: "Getting decapitated by a helicopter.",
            answer2: "Fucking all my dad's friends.",
            answer3: "A button that when you press it, there's jazz.",
            answer4: "Some guy.",
            answer5: "A good sniff.",
            answer6: "The heart of a child."
        },
        {
            _id: ObjectId("657dd4aede23544cd888f4b6"),
            question: "check me out, yo! I call this dance move.",
            answer1: "Getting decapitated by a helicopter.",
            answer2: "Having anuses for eyes.",
            answer3: "Men discussing their feelings in an emotionally healthy way.",
            answer4: "Some guy.",
            answer5: "A good sniff.",
            answer6: "Stuffing my peehole with Tic Tacs."
        },
        {
            _id: ObjectId("657dd4aede23544cd888f4b7"),
            question: "check me out, yo! I call this dance move.",
            answer1: "Getting decapitated by a helicopter.",
            answer2: "Having anuses for eyes.",
            answer3: "Men discussing their feelings in an emotionally healthy way.",
            answer4: "Some guy.",
            answer5: "A good sniff.",
            answer6: "Stuffing my peehole with Tic Tacs."
        },
        {
            _id: ObjectId("657dd4aede23544cd888f4b8"),
            question: "check me out, yo! I call this dance move.",
            answer1: "Getting decapitated by a helicopter.",
            answer2: "Having anuses for eyes.",
            answer3: "Men discussing their feelings in an emotionally healthy way.",
            answer4: "Some guy.",
            answer5: "A good sniff.",
            answer6: "Stuffing my peehole with Tic Tacs."
        },
        {
            _id: ObjectId("657dd4aede23544cd888f4b9"),
            question: "check me out, yo! I call this dance move.",
            answer1: "Getting decapitated by a helicopter.",
            answer2: "Having anuses for eyes.",
            answer3: "Men discussing their feelings in an emotionally healthy way.",
            answer4: "Some guy.",
            answer5: "A good sniff.",
            answer6: "Stuffing my peehole with Tic Tacs."
        }
    ],
    followlist: [
        {
            values: [
                "A good sniff.",
                "The heart of a child.",
                "A good sniff.",
                "The heart of a child.",
                "A button that when you press it, there's jazz.",
                "A button that when you press it, there's jazz.",
                "Some guy.",
                "Men discussing their feelings in an emotionally healthy way.",
                "Stuffing my peehole with Tic Tacs."
            ],
            _id: ObjectId("657f3bac721bc94e04b8c424"),
            email: "alpha@hotmail.com"
        }
    ],
    __v: NumberInt("0")
} ]);
db.getCollection("games").insert([ {
    _id: ObjectId("657dd607a6a2a24594ca78d1"),
    startdate: ISODate("2023-12-16T16:53:25.245Z"),
    enddate: ISODate("2023-12-18T00:00:00.000Z"),
    state: NumberInt("1"),
    correctAnswer: [
        "The heart of a child.",
        "The heart of a child.",
        "The heart of a child.",
        "The heart of a child.",
        "The heart of a child.",
        "The heart of a child.",
        "The heart of a child.",
        "The heart of a child.",
        "The heart of a child.",
        "The heart of a child."
    ],
    weight: [ ],
    gametype: "Feeling Nostalgic",
    attendnumber: NumberInt("24"),
    content: [
        {
            _id: ObjectId("657dd607a6a2a24594ca78d2"),
            question: "check me out, yo! I call this dance move.",
            answer1: "Getting decapitated by a helicopter.",
            answer2: "Fucking all my dad's friends.",
            answer3: "A button that when you press it, there's jazz.",
            answer4: "Some guy.",
            answer5: "A good sniff.",
            answer6: "The heart of a child."
        },
        {
            _id: ObjectId("657dd607a6a2a24594ca78d3"),
            question: "check me out, yo! I call this dance move.",
            answer1: "Getting decapitated by a helicopter.",
            answer2: "Fucking all my dad's friends.",
            answer3: "A button that when you press it, there's jazz.",
            answer4: "Some guy.",
            answer5: "A good sniff.",
            answer6: "The heart of a child."
        },
        {
            _id: ObjectId("657dd607a6a2a24594ca78d4"),
            question: "check me out, yo! I call this dance move.",
            answer1: "Getting decapitated by a helicopter.",
            answer2: "Fucking all my dad's friends.",
            answer3: "A button that when you press it, there's jazz.",
            answer4: "Some guy.",
            answer5: "A good sniff.",
            answer6: "The heart of a child."
        },
        {
            _id: ObjectId("657dd607a6a2a24594ca78d5"),
            question: "check me out, yo! I call this dance move.",
            answer1: "Getting decapitated by a helicopter.",
            answer2: "Fucking all my dad's friends.",
            answer3: "A button that when you press it, there's jazz.",
            answer4: "Some guy.",
            answer5: "A good sniff.",
            answer6: "The heart of a child."
        },
        {
            _id: ObjectId("657dd607a6a2a24594ca78d6"),
            question: "check me out, yo! I call this dance move.",
            answer1: "Getting decapitated by a helicopter.",
            answer2: "Fucking all my dad's friends.",
            answer3: "A button that when you press it, there's jazz.",
            answer4: "Some guy.",
            answer5: "A good sniff.",
            answer6: "The heart of a child."
        },
        {
            _id: ObjectId("657dd607a6a2a24594ca78d7"),
            question: "check me out, yo! I call this dance move.",
            answer1: "Getting decapitated by a helicopter.",
            answer2: "Fucking all my dad's friends.",
            answer3: "A button that when you press it, there's jazz.",
            answer4: "Some guy.",
            answer5: "A good sniff.",
            answer6: "The heart of a child."
        },
        {
            _id: ObjectId("657dd607a6a2a24594ca78d8"),
            question: "check me out, yo! I call this dance move.",
            answer1: "Getting decapitated by a helicopter.",
            answer2: "Having anuses for eyes.",
            answer3: "Men discussing their feelings in an emotionally healthy way.",
            answer4: "Some guy.",
            answer5: "A good sniff.",
            answer6: "Stuffing my peehole with Tic Tacs."
        },
        {
            _id: ObjectId("657dd607a6a2a24594ca78d9"),
            question: "check me out, yo! I call this dance move.",
            answer1: "Getting decapitated by a helicopter.",
            answer2: "Having anuses for eyes.",
            answer3: "Men discussing their feelings in an emotionally healthy way.",
            answer4: "Some guy.",
            answer5: "A good sniff.",
            answer6: "Stuffing my peehole with Tic Tacs."
        },
        {
            _id: ObjectId("657dd607a6a2a24594ca78da"),
            question: "check me out, yo! I call this dance move.",
            answer1: "Getting decapitated by a helicopter.",
            answer2: "Having anuses for eyes.",
            answer3: "Men discussing their feelings in an emotionally healthy way.",
            answer4: "Some guy.",
            answer5: "A good sniff.",
            answer6: "Stuffing my peehole with Tic Tacs."
        },
        {
            _id: ObjectId("657dd607a6a2a24594ca78db"),
            question: "check me out, yo! I call this dance move.",
            answer1: "Getting decapitated by a helicopter.",
            answer2: "Having anuses for eyes.",
            answer3: "Men discussing their feelings in an emotionally healthy way.",
            answer4: "Some guy.",
            answer5: "A good sniff.",
            answer6: "Stuffing my peehole with Tic Tacs."
        }
    ],
    followlist: [
        {
            values: [
                "Fucking all my dad's friends.",
                "A button that when you press it, there's jazz.",
                "A button that when you press it, there's jazz.",
                "Some guy.",
                "The heart of a child.",
                "A button that when you press it, there's jazz.",
                "A good sniff.",
                "Some guy.",
                "Stuffing my peehole with Tic Tacs."
            ],
            _id: ObjectId("658321f33a4c5a070c3982df"),
            email: "alpha@hotmail.com"
        }
    ],
    __v: NumberInt("0")
} ]);
db.getCollection("games").insert([ {
    _id: ObjectId("657dd672a6a2a24594ca78ed"),
    startdate: ISODate("2023-12-16T16:53:25.245Z"),
    enddate: ISODate("2023-12-18T00:00:00.000Z"),
    state: NumberInt("-1"),
    correctAnswer: [
        "fdsfdsfdsafsadfdsa",
        "fdsfdsfdsafsadfdsa",
        "fdsfdsfdsafsadfdsa",
        "fdsfdsfdsafsadfdsa",
        "fdsfdsfdsafsadfdsa",
        "fdsfdsfdsafsadfdsa",
        "fdsfdsfdsafsadfdsa",
        "fdsfdsfdsafsadfdsa",
        "fdsfdsfdsafsadfdsa",
        "fdsfdsfdsafsadfdsa"
    ],
    weight: [ ],
    gametype: "Feeling Nostalgic",
    attendnumber: NumberInt("33"),
    content: [
        {
            _id: ObjectId("657dd672a6a2a24594ca78ee"),
            question: "afdsaf",
            answer1: "sdfsdf",
            answer2: "sdfsda",
            answer3: "fsdfsdfdasf",
            answer4: "dafds",
            answer5: "fdsafdsafs",
            answer6: "dsaf"
        },
        {
            _id: ObjectId("657dd672a6a2a24594ca78ef"),
            question: "afdsaf",
            answer1: "sdfsdf",
            answer2: "sdfsda",
            answer3: "fsdfsdfdasf",
            answer4: "dafds",
            answer5: "fdsafdsafs",
            answer6: "dsaf"
        },
        {
            _id: ObjectId("657dd672a6a2a24594ca78f0"),
            question: "afdsaf",
            answer1: "sdfsdf",
            answer2: "sdfsda",
            answer3: "fsdfsdfdasf",
            answer4: "dafds",
            answer5: "fdsafdsafs",
            answer6: "dsaf"
        },
        {
            _id: ObjectId("657dd672a6a2a24594ca78f1"),
            question: "afdsaf",
            answer1: "sdfsdf",
            answer2: "sdfsda",
            answer3: "fsdfsdfdasf",
            answer4: "dafds",
            answer5: "fdsafdsafs",
            answer6: "dsaf"
        },
        {
            _id: ObjectId("657dd672a6a2a24594ca78f2"),
            question: "afdsaf",
            answer1: "sdfsdf",
            answer2: "sdfsda",
            answer3: "fsdfsdfdasf",
            answer4: "dafds",
            answer5: "fdsafdsafs",
            answer6: "dsaf"
        },
        {
            _id: ObjectId("657dd672a6a2a24594ca78f3"),
            question: "afdsaf",
            answer1: "sdfsdf",
            answer2: "sdfsda",
            answer3: "fsdfsdfdasf",
            answer4: "dafds",
            answer5: "fdsafdsafs",
            answer6: "dsaf"
        },
        {
            _id: ObjectId("657dd672a6a2a24594ca78f4"),
            question: "afdsaf",
            answer1: "sdfsdf",
            answer2: "sdfsda",
            answer3: "fsdfsdfdasf",
            answer4: "dafds",
            answer5: "fdsafdsafs",
            answer6: "dsaf"
        },
        {
            _id: ObjectId("657dd672a6a2a24594ca78f5"),
            question: "afdsaf",
            answer1: "sdfsdf",
            answer2: "sdfsda",
            answer3: "fsdfsdfdasf",
            answer4: "dafds",
            answer5: "fdsafdsafs",
            answer6: "dsaf"
        },
        {
            _id: ObjectId("657dd672a6a2a24594ca78f6"),
            question: "afdsaf",
            answer1: "sdfsdf",
            answer2: "sdfsda",
            answer3: "fsdfsdfdasf",
            answer4: "dafds",
            answer5: "fdsafdsafs",
            answer6: "dsaf"
        },
        {
            _id: ObjectId("657dd672a6a2a24594ca78f7"),
            question: "afdsaf",
            answer1: "sdfsdf",
            answer2: "sdfsda",
            answer3: "fsdfsdfdasf",
            answer4: "dafds",
            answer5: "fdsafdsafs",
            answer6: "dsaf"
        }
    ],
    followlist: [ ],
    __v: NumberInt("0")
} ]);
db.getCollection("games").insert([ {
    _id: ObjectId("657dd720e5d107263caf0439"),
    startdate: ISODate("2023-12-16T16:56:32.339Z"),
    enddate: ISODate("2023-12-18T00:00:00.000Z"),
    state: NumberInt("1"),
    correctAnswer: [
        "dsfdsfsdfsdfsdafasfd",
        "dsfdsfsdfsdfsdafasfd",
        "dsfdsfsdfsdfsdafasfd",
        "dsfdsfsdfsdfsdafasfd",
        "dsfdsfsdfsdfsdafasfd",
        "dsfdsfsdfsdfsdafasfd",
        "dsfdsfsdfsdfsdafasfd",
        "dsfdsfsdfsdfsdafasfd",
        "dsfdsfsdfsdfsdafasfd",
        "dsfdsfsdfsdfsdafasfd"
    ],
    weight: [ ],
    gametype: "Feeling Nostalgic",
    attendnumber: NumberInt("324"),
    content: [
        {
            _id: ObjectId("657dd720e5d107263caf043a"),
            question: "dfsdaf",
            answer1: "sadfdsafdsfds",
            answer2: "fdsfdsaf",
            answer3: "dsfdsafsdf",
            answer4: "fsdf",
            answer5: "sdfdsafsda",
            answer6: "sadfdsfdsfsdfdsa"
        },
        {
            _id: ObjectId("657dd720e5d107263caf043b"),
            question: "dfsdaf",
            answer1: "sadfdsafdsfds",
            answer2: "fdsfdsaf",
            answer3: "dsfdsafsdf",
            answer4: "fsdf",
            answer5: "sdfdsafsda",
            answer6: "sadfdsfdsfsdfdsa"
        },
        {
            _id: ObjectId("657dd720e5d107263caf043c"),
            question: "dfsdaf",
            answer1: "sadfdsafdsfds",
            answer2: "fdsfdsaf",
            answer3: "dsfdsafsdf",
            answer4: "fsdf",
            answer5: "sdfdsafsda",
            answer6: "sadfdsfdsfsdfdsa"
        },
        {
            _id: ObjectId("657dd720e5d107263caf043d"),
            question: "dfsdaf",
            answer1: "sadfdsafdsfds",
            answer2: "fdsfdsaf",
            answer3: "dsfdsafsdf",
            answer4: "fsdf",
            answer5: "sdfdsafsda",
            answer6: "sadfdsfdsfsdfdsa"
        },
        {
            _id: ObjectId("657dd720e5d107263caf043e"),
            question: "dfsdaf",
            answer1: "sadfdsafdsfds",
            answer2: "fdsfdsaf",
            answer3: "dsfdsafsdf",
            answer4: "fsdf",
            answer5: "sdfdsafsda",
            answer6: "sadfdsfdsfsdfdsa"
        },
        {
            _id: ObjectId("657dd720e5d107263caf043f"),
            question: "dfsdaf",
            answer1: "sadfdsafdsfds",
            answer2: "fdsfdsaf",
            answer3: "dsfdsafsdf",
            answer4: "fsdf",
            answer5: "sdfdsafsda",
            answer6: "sadfdsfdsfsdfdsa"
        },
        {
            _id: ObjectId("657dd720e5d107263caf0440"),
            question: "dfsdaf",
            answer1: "sadfdsafdsfds",
            answer2: "fdsfdsaf",
            answer3: "dsfdsafsdf",
            answer4: "fsdf",
            answer5: "sdfdsafsda",
            answer6: "sadfdsfdsfsdfdsa"
        },
        {
            _id: ObjectId("657dd720e5d107263caf0441"),
            question: "dfsdaf",
            answer1: "sadfdsafdsfds",
            answer2: "fdsfdsaf",
            answer3: "dsfdsafsdf",
            answer4: "fsdf",
            answer5: "sdfdsafsda",
            answer6: "sadfdsfdsfsdfdsa"
        },
        {
            _id: ObjectId("657dd720e5d107263caf0442"),
            question: "dfsdaf",
            answer1: "sadfdsafdsfds",
            answer2: "fdsfdsaf",
            answer3: "dsfdsafsdf",
            answer4: "fsdf",
            answer5: "sdfdsafsda",
            answer6: "sadfdsfdsfsdfdsa"
        },
        {
            _id: ObjectId("657dd720e5d107263caf0443"),
            question: "dfsdaf",
            answer1: "sadfdsafdsfds",
            answer2: "fdsfdsaf",
            answer3: "dsfdsafsdf",
            answer4: "fsdf",
            answer5: "sdfdsafsda",
            answer6: "sadfdsfdsfsdfdsa"
        }
    ],
    followlist: [
        {
            values: [
                "sadfdsfdsfsdfdsa",
                "sdfdsafsda",
                "sdfdsafsda",
                "fdsfdsaf",
                "sadfdsfdsfsdfdsa",
                "fdsfdsaf",
                "sadfdsafdsfds",
                "sadfdsfdsfsdfdsa",
                "dsfdsafsdf"
            ],
            _id: ObjectId("657f2902721bc94e04b8c3b9"),
            email: "alpha@hotmail.com"
        }
    ],
    __v: NumberInt("0")
} ]);
db.getCollection("games").insert([ {
    _id: ObjectId("658321113a4c5a070c39826d"),
    startdate: ISODate("2023-12-20T16:47:35.639Z"),
    enddate: ISODate("2023-12-23T00:00:00.000Z"),
    state: NumberInt("1"),
    correctAnswer: [
        "perfect",
        "perfect2",
        "perfect2",
        "perfect2",
        "perfect2",
        "perfect2",
        "perfect2",
        "perfect2",
        "perfect2",
        "perfect2"
    ],
    weight: [ ],
    gametype: "America's #1 gerbil coffin",
    attendnumber: NumberInt("2"),
    content: [
        {
            _id: ObjectId("658321113a4c5a070c39826e"),
            question: "question1",
            answer1: "aaaaaaa",
            answer2: "bbbbbbb",
            answer3: "ccccc",
            answer4: "dddddddd",
            answer5: "eeeeeeeee",
            answer6: "fffff"
        },
        {
            _id: ObjectId("658321113a4c5a070c39826f"),
            question: "question2",
            answer1: "aaaaaaa",
            answer2: "bbbbbbb",
            answer3: "ccccc",
            answer4: "dddddddd",
            answer5: "eeeeeeeee",
            answer6: "fffff"
        },
        {
            _id: ObjectId("658321113a4c5a070c398270"),
            question: "question2",
            answer1: "aaaaaaa",
            answer2: "bbbbbbb",
            answer3: "ccccc",
            answer4: "dddddddd",
            answer5: "eeeeeeeee",
            answer6: "fffff"
        },
        {
            _id: ObjectId("658321113a4c5a070c398271"),
            question: "question2",
            answer1: "aaaaaaa",
            answer2: "bbbbbbb",
            answer3: "ccccc",
            answer4: "dddddddd",
            answer5: "eeeeeeeee",
            answer6: "fffff"
        },
        {
            _id: ObjectId("658321113a4c5a070c398272"),
            question: "question2",
            answer1: "aaaaaaa",
            answer2: "bbbbbbb",
            answer3: "ccccc",
            answer4: "dddddddd",
            answer5: "eeeeeeeee",
            answer6: "fffff"
        },
        {
            _id: ObjectId("658321113a4c5a070c398273"),
            question: "question2",
            answer1: "aaaaaaa",
            answer2: "bbbbbbb",
            answer3: "ccccc",
            answer4: "dddddddd",
            answer5: "eeeeeeeee",
            answer6: "fffff"
        },
        {
            _id: ObjectId("658321113a4c5a070c398274"),
            question: "question2",
            answer1: "aaaaaaa",
            answer2: "bbbbbbb",
            answer3: "ccccc",
            answer4: "dddddddd",
            answer5: "eeeeeeeee",
            answer6: "fffff"
        },
        {
            _id: ObjectId("658321113a4c5a070c398275"),
            question: "question2",
            answer1: "aaaaaaa",
            answer2: "bbbbbbb",
            answer3: "ccccc",
            answer4: "dddddddd",
            answer5: "eeeeeeeee",
            answer6: "fffff"
        },
        {
            _id: ObjectId("658321113a4c5a070c398276"),
            question: "question2",
            answer1: "aaaaaaa",
            answer2: "bbbbbbb",
            answer3: "ccccc",
            answer4: "dddddddd",
            answer5: "eeeeeeeee",
            answer6: "fffff"
        },
        {
            _id: ObjectId("658321113a4c5a070c398277"),
            question: "question2",
            answer1: "aaaaaaa",
            answer2: "bbbbbbb",
            answer3: "ccccc",
            answer4: "dddddddd",
            answer5: "eeeeeeeee",
            answer6: "fffff"
        }
    ],
    followlist: [ ],
    __v: NumberInt("0")
} ]);
db.getCollection("games").insert([ {
    _id: ObjectId("658321493a4c5a070c39828e"),
    startdate: ISODate("2023-12-20T16:47:35.639Z"),
    enddate: ISODate("2023-12-23T00:00:00.000Z"),
    state: NumberInt("1"),
    correctAnswer: [
        "answer3",
        "answer3",
        "answer3",
        "answer3",
        "answer3",
        "answer3",
        "answer3",
        "answer3",
        "answer3",
        "answer3"
    ],
    weight: [ ],
    gametype: "Play CAH with your kids",
    attendnumber: NumberInt("2"),
    content: [
        {
            _id: ObjectId("658321493a4c5a070c39828f"),
            question: "question3",
            answer1: "a",
            answer2: "b",
            answer3: "c",
            answer4: "d",
            answer5: "e",
            answer6: "f"
        },
        {
            _id: ObjectId("658321493a4c5a070c398290"),
            question: "question3",
            answer1: "a",
            answer2: "b",
            answer3: "c",
            answer4: "d",
            answer5: "e",
            answer6: "f"
        },
        {
            _id: ObjectId("658321493a4c5a070c398291"),
            question: "question3",
            answer1: "a",
            answer2: "b",
            answer3: "c",
            answer4: "d",
            answer5: "e",
            answer6: "f"
        },
        {
            _id: ObjectId("658321493a4c5a070c398292"),
            question: "question3",
            answer1: "a",
            answer2: "b",
            answer3: "c",
            answer4: "d",
            answer5: "e",
            answer6: "f"
        },
        {
            _id: ObjectId("658321493a4c5a070c398293"),
            question: "question3",
            answer1: "a",
            answer2: "b",
            answer3: "c",
            answer4: "d",
            answer5: "e",
            answer6: "f"
        },
        {
            _id: ObjectId("658321493a4c5a070c398294"),
            question: "question3",
            answer1: "a",
            answer2: "b",
            answer3: "c",
            answer4: "d",
            answer5: "e",
            answer6: "f"
        },
        {
            _id: ObjectId("658321493a4c5a070c398295"),
            question: "question3",
            answer1: "a",
            answer2: "b",
            answer3: "c",
            answer4: "d",
            answer5: "e",
            answer6: "f"
        },
        {
            _id: ObjectId("658321493a4c5a070c398296"),
            question: "question3",
            answer1: "a",
            answer2: "b",
            answer3: "c",
            answer4: "d",
            answer5: "e",
            answer6: "f"
        },
        {
            _id: ObjectId("658321493a4c5a070c398297"),
            question: "question3",
            answer1: "a",
            answer2: "b",
            answer3: "c",
            answer4: "d",
            answer5: "e",
            answer6: "f"
        },
        {
            _id: ObjectId("658321493a4c5a070c398298"),
            question: "question3",
            answer1: "a",
            answer2: "b",
            answer3: "c",
            answer4: "d",
            answer5: "e",
            answer6: "f"
        }
    ],
    followlist: [
        {
            values: [
                "f",
                "f",
                "c",
                "e",
                "b",
                "b",
                "b",
                "e",
                "c"
            ],
            _id: ObjectId("65842bb6c3eec43ee4c62203"),
            email: "alpha@hotmail.com"
        }
    ],
    __v: NumberInt("0")
} ]);
db.getCollection("games").insert([ {
    _id: ObjectId("65832f593a4c5a070c398392"),
    startdate: ISODate("2023-12-20T16:47:35.639Z"),
    enddate: ISODate("2023-12-21T00:00:00.000Z"),
    state: NumberInt("1"),
    correctAnswer: [
        "adsfas",
        "adsfas",
        "adsfas",
        "adsfas",
        "adsfas",
        "adsfas",
        "adsfas",
        "adsfas",
        "adsfas",
        "adsfas"
    ],
    weight: [ ],
    gametype: "Feeling Nostalgic",
    attendnumber: NumberInt("22"),
    content: [
        {
            _id: ObjectId("65832f593a4c5a070c398393"),
            question: "dfasdf",
            answer1: "asdf",
            answer2: "asdfasd",
            answer3: "fasdf",
            answer4: "fasd",
            answer5: "fasdf",
            answer6: "asdfsda"
        },
        {
            _id: ObjectId("65832f593a4c5a070c398394"),
            question: "dfasdf",
            answer1: "asdf",
            answer2: "asdfasd",
            answer3: "fasdf",
            answer4: "fasd",
            answer5: "fasdf",
            answer6: "asdfsda"
        },
        {
            _id: ObjectId("65832f593a4c5a070c398395"),
            question: "dfasdf",
            answer1: "asdf",
            answer2: "asdfasd",
            answer3: "fasdf",
            answer4: "fasd",
            answer5: "fasdf",
            answer6: "asdfsda"
        },
        {
            _id: ObjectId("65832f593a4c5a070c398396"),
            question: "dfasdf",
            answer1: "asdf",
            answer2: "asdfasd",
            answer3: "fasdf",
            answer4: "fasd",
            answer5: "fasdf",
            answer6: "asdfsda"
        },
        {
            _id: ObjectId("65832f593a4c5a070c398397"),
            question: "dfasdf",
            answer1: "asdf",
            answer2: "asdfasd",
            answer3: "fasdf",
            answer4: "fasd",
            answer5: "fasdf",
            answer6: "asdfsda"
        },
        {
            _id: ObjectId("65832f593a4c5a070c398398"),
            question: "dfasdf",
            answer1: "asdf",
            answer2: "asdfasd",
            answer3: "fasdf",
            answer4: "fasd",
            answer5: "fasdf",
            answer6: "asdfsda"
        },
        {
            _id: ObjectId("65832f593a4c5a070c398399"),
            question: "dfasdf",
            answer1: "asdf",
            answer2: "asdfasd",
            answer3: "fasdf",
            answer4: "fasd",
            answer5: "fasdf",
            answer6: "asdfsda"
        },
        {
            _id: ObjectId("65832f593a4c5a070c39839a"),
            question: "dfasdf",
            answer1: "asdf",
            answer2: "asdfasd",
            answer3: "fasdf",
            answer4: "fasd",
            answer5: "fasdf",
            answer6: "asdfsda"
        },
        {
            _id: ObjectId("65832f593a4c5a070c39839b"),
            question: "dfasdf",
            answer1: "asdf",
            answer2: "asdfasd",
            answer3: "fasdf",
            answer4: "fasd",
            answer5: "fasdf",
            answer6: "asdfsda"
        },
        {
            _id: ObjectId("65832f593a4c5a070c39839c"),
            question: "dfasdf",
            answer1: "asdf",
            answer2: "asdfasd",
            answer3: "fasdf",
            answer4: "fasd",
            answer5: "fasdf",
            answer6: "asdfsda"
        }
    ],
    followlist: [ ],
    __v: NumberInt("0")
} ]);
db.getCollection("games").insert([ {
    _id: ObjectId("65843219c3eec43ee4c62410"),
    startdate: ISODate("2023-12-21T12:00:55.492Z"),
    enddate: ISODate("2023-12-25T00:00:00.000Z"),
    state: NumberInt("1"),
    correctAnswer: [
        "perfect!!!",
        "perfect!!!!!!!!!!!",
        "perfect!!!!!!!!!!!",
        "perfect!!!!!!!!!!!",
        "perfect!!!!!!!!!!!",
        "perfect!!!!!!!!!!!",
        "perfect!!!!!!!!!!!",
        "perfect!!!!!!!!!!!",
        "perfect!!!!!!!!!!!",
        "perfect!!!!!!!!!!!"
    ],
    weight: [ ],
    gametype: "Play CAH with your kids",
    attendnumber: NumberInt("123"),
    content: [
        {
            _id: ObjectId("65843219c3eec43ee4c62411"),
            question: "question1",
            answer1: "aaaaaaaa",
            answer2: "bbbbbbb",
            answer3: "ccccc",
            answer4: "ddddddddd",
            answer5: "eeeeeee",
            answer6: "ffffffffff"
        },
        {
            _id: ObjectId("65843219c3eec43ee4c62412"),
            question: "question2",
            answer1: "111",
            answer2: "2222222",
            answer3: "3333333",
            answer4: "444",
            answer5: "555555",
            answer6: "6666666"
        },
        {
            _id: ObjectId("65843219c3eec43ee4c62413"),
            question: "question2",
            answer1: "111",
            answer2: "2222222",
            answer3: "3333333",
            answer4: "444",
            answer5: "555555",
            answer6: "6666666"
        },
        {
            _id: ObjectId("65843219c3eec43ee4c62414"),
            question: "question2",
            answer1: "111",
            answer2: "2222222",
            answer3: "3333333",
            answer4: "444",
            answer5: "555555",
            answer6: "6666666"
        },
        {
            _id: ObjectId("65843219c3eec43ee4c62415"),
            question: "question2",
            answer1: "111",
            answer2: "2222222",
            answer3: "3333333",
            answer4: "444",
            answer5: "555555",
            answer6: "6666666"
        },
        {
            _id: ObjectId("65843219c3eec43ee4c62416"),
            question: "question2",
            answer1: "111",
            answer2: "2222222",
            answer3: "3333333",
            answer4: "444",
            answer5: "555555",
            answer6: "6666666"
        },
        {
            _id: ObjectId("65843219c3eec43ee4c62417"),
            question: "question2",
            answer1: "111",
            answer2: "2222222",
            answer3: "3333333",
            answer4: "444",
            answer5: "555555",
            answer6: "6666666"
        },
        {
            _id: ObjectId("65843219c3eec43ee4c62418"),
            question: "question2",
            answer1: "111",
            answer2: "2222222",
            answer3: "3333333",
            answer4: "444",
            answer5: "555555",
            answer6: "6666666"
        },
        {
            _id: ObjectId("65843219c3eec43ee4c62419"),
            question: "question2",
            answer1: "111",
            answer2: "2222222",
            answer3: "3333333",
            answer4: "444",
            answer5: "555555",
            answer6: "6666666"
        },
        {
            _id: ObjectId("65843219c3eec43ee4c6241a"),
            question: "question2",
            answer1: "111",
            answer2: "2222222",
            answer3: "3333333",
            answer4: "444",
            answer5: "555555",
            answer6: "6666666"
        }
    ],
    followlist: [
        {
            values: [
                "ffffffffff",
                "6666666",
                "444",
                "3333333",
                "3333333",
                "2222222",
                "111",
                "3333333",
                "555555"
            ],
            _id: ObjectId("65843239c3eec43ee4c6242d"),
            email: "alpha@hotmail.com"
        }
    ],
    __v: NumberInt("0")
} ]);
db.getCollection("games").insert([ {
    _id: ObjectId("6584395bc3eec43ee4c625e3"),
    startdate: ISODate("2023-12-21T12:00:55.492Z"),
    enddate: ISODate("2023-12-25T00:00:00.000Z"),
    state: NumberInt("1"),
    correctAnswer: [
        "perfect",
        "perfect",
        "perfect",
        "perfect1",
        "perfect1",
        "perfect1",
        "perfect1",
        "perfect1",
        "perfect1",
        "perfect1"
    ],
    weight: [ ],
    gametype: "Play CAH with your kids",
    attendnumber: NumberInt("25"),
    content: [
        {
            _id: ObjectId("6584395bc3eec43ee4c625e4"),
            question: "question1",
            answer1: "aaa",
            answer2: "bbb",
            answer3: "ccc",
            answer4: "perfect",
            answer5: "ddd",
            answer6: "eee"
        },
        {
            _id: ObjectId("6584395bc3eec43ee4c625e5"),
            question: "question2",
            answer1: "aaaaaa",
            answer2: "bbbbbbbbb",
            answer3: "cccbcccc",
            answer4: "perfect223",
            answer5: "ddddddd",
            answer6: "eeedeeeee"
        },
        {
            _id: ObjectId("6584395bc3eec43ee4c625e6"),
            question: "question3",
            answer1: "1111",
            answer2: "222222222222222",
            answer3: "3333",
            answer4: "perfect!!!!!",
            answer5: "4444",
            answer6: "5555"
        },
        {
            _id: ObjectId("6584395bc3eec43ee4c625e7"),
            question: "question3",
            answer1: "11111111111111",
            answer2: "222222222222222",
            answer3: "3333333333333",
            answer4: "perfect1",
            answer5: "44443333333",
            answer6: "5555344444444"
        },
        {
            _id: ObjectId("6584395bc3eec43ee4c625e8"),
            question: "question3",
            answer1: "11111111111111",
            answer2: "222222222222222",
            answer3: "3333333333333",
            answer4: "perfect1",
            answer5: "44443333333",
            answer6: "5555344444444"
        },
        {
            _id: ObjectId("6584395bc3eec43ee4c625e9"),
            question: "question3",
            answer1: "11111111111111",
            answer2: "222222222222222",
            answer3: "3333333333333",
            answer4: "perfect1",
            answer5: "44443333333",
            answer6: "5555344444444"
        },
        {
            _id: ObjectId("6584395bc3eec43ee4c625ea"),
            question: "question3",
            answer1: "11111111111111",
            answer2: "222222222222222",
            answer3: "3333333333333",
            answer4: "perfect1",
            answer5: "44443333333",
            answer6: "5555344444444"
        },
        {
            _id: ObjectId("6584395bc3eec43ee4c625eb"),
            question: "question3",
            answer1: "11111111111111",
            answer2: "222222222222222",
            answer3: "3333333333333",
            answer4: "perfect1",
            answer5: "44443333333",
            answer6: "5555344444444"
        },
        {
            _id: ObjectId("6584395bc3eec43ee4c625ec"),
            question: "question3",
            answer1: "11111111111111",
            answer2: "222222222222222",
            answer3: "3333333333333",
            answer4: "perfect1",
            answer5: "44443333333",
            answer6: "5555344444444"
        },
        {
            _id: ObjectId("6584395bc3eec43ee4c625ed"),
            question: "question3",
            answer1: "11111111111111",
            answer2: "222222222222222",
            answer3: "3333333333333",
            answer4: "perfect1",
            answer5: "44443333333",
            answer6: "5555344444444"
        }
    ],
    followlist: [ ],
    __v: NumberInt("0")
} ]);
db.getCollection("games").insert([ {
    _id: ObjectId("65843aa8c3eec43ee4c626c6"),
    startdate: ISODate("2023-12-21T12:00:55.492Z"),
    enddate: ISODate("2023-12-24T00:00:00.000Z"),
    state: NumberInt("1"),
    correctAnswer: [
        "aas",
        "aas",
        "aas",
        "aas",
        "aas",
        "aas",
        "aas",
        "aas",
        "aas",
        "aas"
    ],
    weight: [ ],
    gametype: "Play CAH with your kids",
    attendnumber: NumberInt("33"),
    content: [
        {
            _id: ObjectId("65843aa8c3eec43ee4c626c7"),
            question: "aaa",
            answer1: "sdf",
            answer2: "sdfsd",
            answer3: "fsdf",
            answer4: "sdf",
            answer5: "asdf",
            answer6: "asdf"
        },
        {
            _id: ObjectId("65843aa8c3eec43ee4c626c8"),
            question: "aaa",
            answer1: "sdf",
            answer2: "sdfsd",
            answer3: "fsdf",
            answer4: "sdf",
            answer5: "asdf",
            answer6: "asdf"
        },
        {
            _id: ObjectId("65843aa8c3eec43ee4c626c9"),
            question: "aaa",
            answer1: "sdf",
            answer2: "sdfsd",
            answer3: "fsdf",
            answer4: "sdf",
            answer5: "asdf",
            answer6: "asdf"
        },
        {
            _id: ObjectId("65843aa8c3eec43ee4c626ca"),
            question: "aaa",
            answer1: "sdf",
            answer2: "sdfsd",
            answer3: "fsdf",
            answer4: "sdf",
            answer5: "asdf",
            answer6: "asdf"
        },
        {
            _id: ObjectId("65843aa8c3eec43ee4c626cb"),
            question: "aaa",
            answer1: "sdf",
            answer2: "sdfsd",
            answer3: "fsdf",
            answer4: "sdf",
            answer5: "asdf",
            answer6: "asdf"
        },
        {
            _id: ObjectId("65843aa8c3eec43ee4c626cc"),
            question: "aaa",
            answer1: "sdf",
            answer2: "sdfsd",
            answer3: "fsdf",
            answer4: "sdf",
            answer5: "asdf",
            answer6: "asdf"
        },
        {
            _id: ObjectId("65843aa8c3eec43ee4c626cd"),
            question: "aaa",
            answer1: "sdf",
            answer2: "sdfsd",
            answer3: "fsdf",
            answer4: "sdf",
            answer5: "asdf",
            answer6: "asdf"
        },
        {
            _id: ObjectId("65843aa8c3eec43ee4c626ce"),
            question: "aaa",
            answer1: "sdf",
            answer2: "sdfsd",
            answer3: "fsdf",
            answer4: "sdf",
            answer5: "asdf",
            answer6: "asdf"
        },
        {
            _id: ObjectId("65843aa8c3eec43ee4c626cf"),
            question: "aaa",
            answer1: "sdf",
            answer2: "sdfsd",
            answer3: "fsdf",
            answer4: "sdf",
            answer5: "asdf",
            answer6: "asdf"
        },
        {
            _id: ObjectId("65843aa8c3eec43ee4c626d0"),
            question: "aaa",
            answer1: "sdf",
            answer2: "sdfsd",
            answer3: "fsdf",
            answer4: "sdf",
            answer5: "asdf",
            answer6: "asdf"
        }
    ],
    followlist: [ ],
    __v: NumberInt("0")
} ]);

// ----------------------------
// Collection structure for results
// ----------------------------
db.getCollection("results").drop();
db.createCollection("results");

// ----------------------------
// Documents of results
// ----------------------------

// ----------------------------
// Collection structure for users
// ----------------------------
db.getCollection("users").drop();
db.createCollection("users");

// ----------------------------
// Documents of users
// ----------------------------
db.getCollection("users").insert([ {
    _id: ObjectId("657b4617aefd4263b45357c1"),
    date: ISODate("2023-12-14T18:13:16.327Z"),
    access_type: "admin",
    name: "timon",
    email: "timondev@gmail.com",
    avatar: "//www.gravatar.com/avatar/dc5086513868c27b806b56e20c7feece?s=200&rating=pg&default=mm",
    password: "$2a$10$1MEoUExJSFndHN7Wl5Sta.F9sAwSFlqXwrHEZU.nn2tnrqH9bn2WC",
    __v: NumberInt("0")
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("657b4696aefd4263b45357c4"),
    date: ISODate("2023-12-14T18:13:16.327Z"),
    access_type: "user",
    name: "alpha",
    email: "alpha@hotmail.com",
    avatar: "//www.gravatar.com/avatar/d67fb7135122acdae9d13b491ce606a8?s=200&rating=pg&default=mm",
    password: "$2a$10$1MEoUExJSFndHN7Wl5Sta.F9sAwSFlqXwrHEZU.nn2tnrqH9bn2WC",
    __v: NumberInt("0")
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("657b46ccaefd4263b45357c7"),
    date: ISODate("2023-12-14T18:13:16.327Z"),
    access_type: "user",
    name: "11111",
    email: "11111@hotmail.com",
    avatar: "//www.gravatar.com/avatar/6cf7c46b651f1cbdf3e9d2c6c50d41b1?s=200&rating=pg&default=mm",
    password: "$2a$10$1MEoUExJSFndHN7Wl5Sta.F9sAwSFlqXwrHEZU.nn2tnrqH9bn2WC",
    __v: NumberInt("0")
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("657c6fc1f84dc6b0cc4cc6fc"),
    date: ISODate("2023-12-15T12:55:12.383Z"),
    access_type: "user",
    name: "intel",
    email: "intel@gmail.com",
    avatar: "//www.gravatar.com/avatar/fc1855b02ca7f922115c85669f526611?s=200&rating=pg&default=mm",
    password: "$2a$10$1MEoUExJSFndHN7Wl5Sta.F9sAwSFlqXwrHEZU.nn2tnrqH9bn2WC",
    __v: NumberInt("0")
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("65831e8e3a4c5a070c3981ac"),
    date: ISODate("2023-12-20T16:47:35.627Z"),
    access_type: "user",
    name: "luckyman",
    email: "goodluck3110.dev@gmail.com",
    avatar: "//www.gravatar.com/avatar/e3c2b45e903647df3dd1a43d7c3c3558?s=200&rating=pg&default=mm",
    password: "$2a$10$1MEoUExJSFndHN7Wl5Sta.F9sAwSFlqXwrHEZU.nn2tnrqH9bn2WC",
    __v: NumberInt("0")
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("658437fec3eec43ee4c625b5"),
    date: ISODate("2023-12-21T12:00:55.481Z"),
    access_type: "user",
    name: "luckyboy",
    email: "lucky@gmail.com",
    avatar: "//www.gravatar.com/avatar/4030aa30711a0b34ded1e00bfb14566f?s=200&rating=pg&default=mm",
    password: "$2a$10$zIivVMkXVXsJ9Pr//kR.qOnhoOY7exit2OcxKft1jCNrGX0TP8bD2",
    __v: NumberInt("0")
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("6584389ec3eec43ee4c625d2"),
    date: ISODate("2023-12-21T12:00:55.481Z"),
    access_type: "user",
    name: "good",
    email: "good@gmail.com",
    avatar: "//www.gravatar.com/avatar/e91e40535f865d58797effd0fa4b83b2?s=200&rating=pg&default=mm",
    password: "$2a$10$wwTWmewXl2CVzEF7ud2L/u8u.mmCOoSWed/8p7QUe/65kZP8BVyca",
    __v: NumberInt("0")
} ]);
