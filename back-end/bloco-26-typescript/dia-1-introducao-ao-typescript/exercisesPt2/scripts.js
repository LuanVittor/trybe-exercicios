"use strict";
exports.__esModule = true;
exports.area = exports.capacity = exports.convertWeight = exports.convert = void 0;
function convert(value, base, convert) {
    var units = ["km", "hm", "dam", "m", "dm", "cm", "mm"];
    function makeError(unity) {
        throw new Error("A unidade ".concat(unity, " n\u00E3o \u00E9 uma unidade v\u00E1lida."));
    }
    if (!units.includes(base))
        makeError(base); // se a unidade base não for válida lançamos um erro
    if (!units.includes(convert))
        makeError(convert); // se a unidade para a conversão não for válida lançamos um erro
    var forIndex = units.indexOf(base); // pegamos o index da unidade base no array
    var toIndex = units.indexOf(convert); // pegamos o index da unidade para a conversão
    var exponent = (toIndex - forIndex); // calculamos o expoente a partir da diferença dos index
    return value * Math.pow(10, exponent);
}
exports.convert = convert;
function convertWeight(value, base, convert) {
    var units = ["kg", "hg", "dag", "g", "dg", "cg", "mg"];
    function makeError(unity) {
        throw new Error("A unidade ".concat(unity, " n\u00E3o \u00E9 uma unidade v\u00E1lida."));
    }
    if (!units.includes(base))
        makeError(base);
    if (!units.includes(convert))
        makeError(convert);
    var forIndex = units.indexOf(base);
    var toIndex = units.indexOf(convert);
    var exponent = (toIndex - forIndex);
    return value * Math.pow(10, exponent);
}
exports.convertWeight = convertWeight;
function capacity(value, base, convert) {
    var units = ["kl", "hl", "dal", "l", "dl", "cl", "ml"];
    function makeError(unity) {
        throw new Error("A unidade ".concat(unity, " n\u00E3o \u00E9 uma unidade v\u00E1lida."));
    }
    if (!units.includes(base))
        makeError(base);
    if (!units.includes(convert))
        makeError(convert);
    var forIndex = units.indexOf(base);
    var toIndex = units.indexOf(convert);
    var exponent = (toIndex - forIndex);
    return value * Math.pow(10, exponent);
}
exports.capacity = capacity;
function area(value, base, convert) {
    var units = ["km²", "hm²", "dam²", "m²", "dm²", "cm²", "mm²"];
    function makeError(unity) {
        throw new Error("A unidade ".concat(unity, " n\u00E3o \u00E9 uma unidade v\u00E1lida."));
    }
    if (!units.includes(base))
        makeError(base);
    if (!units.includes(convert))
        makeError(convert);
    var forIndex = units.indexOf(base);
    var toIndex = units.indexOf(convert);
    var exponent = (toIndex - forIndex);
    return value * Math.pow(10, exponent);
}
exports.area = area;
var characters = [
    {
        nickname: 'xKillerx',
        "class": 'warrior',
        stats: { agi: 50, str: 100, int: 25, hp: 1000, mp: 300 },
        createdAt: new Date('2003-10-1')
    },
    {
        nickname: 'jainaProud',
        "class": 'mage',
        stats: { agi: 80, str: 40, int: 150, hp: 630, mp: 1100 },
        createdAt: new Date('2003-10-2')
    },
    {
        nickname: 'catIn',
        "class": 'hunter',
        stats: { agi: 150, str: 90, int: 80, hp: 800, mp: 600 },
        createdAt: new Date('2003-10-15')
    },
];
function printCharacter(character, index) {
    var nickname = character.nickname, cls = character["class"], createdAt = character.createdAt;
    console.log("\n\n===== Character: ".concat(index + 1, " ========"));
    console.log("nickname: ".concat(nickname, "\nclass: ").concat(cls, "\ncreatedAt: ").concat(createdAt));
}
characters.forEach(printCharacter);
