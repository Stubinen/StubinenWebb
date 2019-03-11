let Strings ={
    sv:{
        "Logga in" : "Logga in",
        "Registrera" : "Registrera",
        "Spela Trailer" : "Spela Trailer",
        "RedanSpelade" : "Redan visade filmer denna termin",
        "Styrelsen" : "Styrelsen",
        "Ordförande" : "Ordförande",
        "Sekreterare" : "Sekreterare",
        "Kassör" : "Kassör",
        "Event" : "Event",
        "Filmansvarig" : "Filmansvarig",
        "Marknadsföring Tryck" : "Marknadsföring Tryck",
        "Marknadsföring Digital" : "Marknadsföring Digital",
        "Webb" : "Webb",
        "Fel lösenord eller email." : "Fel lösenord eller email.",
        "Lösenordet behöver minst 8 karaktärer": "Lösenordet behöver minst 8 karaktärer",
        "Lösenordet måste innehålla minst en siffra" : "Lösenordet måste innehålla minst en siffra",
        "Lösenordet måste innehålla minst en stor bokstav" : "Lösenordet måste innehålla minst en stor bokstav",
        "Lösenordet måste innehålla minst en liten bokstav" : "Lösenordet måste innehålla minst en liten bokstav",
        "Fyll i hela formuläret" : "Fyll i hela formuläret",
        "Förnamn" : "Förnamn",
        "Efternamn" : "Efternamn",
        "Ange en korrekt email" : "Ange en korrekt email",
        "Kårmedlemskap" : "Kårmedlemskap",
        "ingen (men är student)"  : "ingen (men är student)" ,
        "Ej student" : "Ej student",
        "Lösenordet matchar inte!" : "Lösenordet matchar inte!",
        "Nästa" : "Nästa",
        "Logga in" : "Logga in",
        "Startsida" : "Startsida",
        "Skapa konto" : "Skapa konto",
        "Personnummer" : "Personnummer",
        "Adress" : "Adress",
        "Postnummer" : "Postnummer",
        "Stad" : "Stad",
        "Kön: " : "Kön: ",
        "Kvinna" : "Kvinna",
        "Man" :"Man",
        "icke binär":"icke binär",
        "Telefonnummer" : "Telefonnummer",
        "Föregående" : "Föregående",
        "Registrera" : "Registrera",
        "Lösenord" : "Lösenord",
        "Upprepa Lösenord" : "Upprepa Lösenord",
        "Fel lösenord eller email." : "Fel lösenord eller email.",
        "Logga in" :"Logga in",
        "Lösenord" : "Lösenord",

    },
    en:{
        "Logga in" : "Log in",
        "Registrera" : "Register",
        "Spela Trailer" : "Play Trailer",
        "RedanSpelade" : "Already shown movies this semester",
        "Styrelsen" : "The Board",
        "Ordförande" : "President",
        "Sekreterare" : "Secretary",
        "Kassör" : "Treasurer",
        "Event" : "Event",
        "Filmansvarig" : "Film Supervisor",
        "Marknadsföring Tryck" : "Marketing Print",
        "Marknadsföring Digital" : "Marketing Digital",
        "Webb" : "Web",
        "Fel lösenord eller email." : "Wrong password or email.",
        "Lösenordet behöver minst 8 karaktärer" : "The password needs atleast 8 characters",
        "Lösenordet måste innehålla minst en siffra" : "The password has to include atleast one number",
        "Lösenordet måste innehålla minst en stor bokstav" : "The password has to include atleast one capital letter",
        "Lösenordet måste innehålla minst en liten bokstav" : "The password has to include atleast one lowercase letter",
        "Fyll i hela formuläret" : "Fill out all the fields",
        "Förnamn" : "First name",
        "Efternamn" : "Surname",
        "Ange en korrekt email" : "Enter a valid email",
        "Kårmedlemskap" : "Student Union Membership",
        "ingen (men är student)" : "none (but am a student)",
        "Ej student" : "Not a student",
        "Lösenordet matchar inte!" : "The password doesn't match",
        "Nästa" : "Next",
        "Logga in" : "Log in",
        "Startsida" : "Homepage",
        "Skapa konto" : "Create account",
        "Personnummer" : "Personalnumber",
        "Adress" : "Address",
        "Postnummer" : "Zip code",
        "Stad" : "City",
        "Kön: " : "Gender: ",
        "Kvinna" : "Woman",
        "Man" : "Man",
        "icke binär":"Non-binary",
        "Telefonnummer" : "Phonenumber",
        "Föregående" : "Previous",
        "Registrera" : "Register",
        "Lösenord" : "Password",
        "Upprepa Lösenord" : "Repeat password",
        "Fel lösenord eller email." : "Wrong password or email.",
        "Logga in": "Log in",
        "Lösenord" : "Password",
    },

}
var Lang = "sv";
if(localStorage.getItem("Language") != null){
    Lang = localStorage.getItem("Language");
}

export function translate(S){
    if(Lang == "sv" ){
        return Strings.sv[S];
    }
    else{
        return Strings.en[S]
    }
}
export function changeLang(L){
    Lang = L;
    localStorage.setItem("Language", L);
    window.location.reload();
}
