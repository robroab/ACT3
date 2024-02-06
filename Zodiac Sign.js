function findZodiacSign(month, day) {
    if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) {
        return "Aries";
    } else if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) {
        return "Tauro";
    } else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
        return "Geminis";
    } else if ((month == 6 && day >= 21) || (month == 7 && day <= 22)) {
        return "Cancer";
    } else if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) {
        return "Leo";
    } else if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) {
        return "Virgo";
    } else if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) {
        return "Libra";
    } else if ((month == 10 && day >= 23) || (month == 11 && day <= 21)) {
        return "Escorpio";
    } else if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) {
        return "Sagitario";
    } else if ((month == 12 && day >= 22) || (month == 1 && day <= 19)) {
        return "Capricornio";
    } else if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) {
        return "Acuario";
    } else {
        return "Piscis";
    }
}

var birthMonth = prompt("Ingresa tu mes de nacimiento (1-12):");
var birthDay = prompt("Ingresa tu dia de nacimiento (1-31):");

// Conversion de string a Int
birthMonth = parseInt(birthMonth);
birthDay = parseInt(birthDay);

if (isNaN(birthMonth) || isNaN(birthDay) || birthMonth < 1 || birthMonth > 12 || birthDay < 1 || birthDay > 31) {
    alert("Datos invalidos, por favor colocar un mes y/o dia valido");
} else {
    //llamar a la funcion
    var zodiacSign = findZodiacSign(birthMonth, birthDay);
    alert("Tu signo zodiacal es " + zodiacSign);
}