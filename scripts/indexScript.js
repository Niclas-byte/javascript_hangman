const letters = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
    "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
    "Ä", "Ö", "Ü"
];

const level1 = [
    "Haus", "Baum", "Hund", "Katze", "Auto", "Sonne", "Tisch", "Stuhl", "Blume", "Wasser",
    "Brot", "Apfel", "Vogel", "Hand", "Ball", "Fisch", "Freund", "Mutter", "Vater", "Kind",
    "Tür", "Fenster", "Regen", "Schnee", "Tag", "Nacht", "Schule", "Buch", "Garten",
    "Stadt", "Dorf", "Essen", "Lachen", "Spielen", "Tanzen", "Laufen", "Schlafen", "Herz", "Berg",
    "Himmel", "Musik", "Arbeit", "Zeit", "Woche", "Jahr", "Kleid", "Vogel", "Blume", "Stern"
];

const level2 = [
    "Zahnarzt", "Schmetterling", "Krankenhaus", "Lieblingsfarbe", "Taschenlampe",
    "Kühlschrank", "Sommerferien", "Haustürschlüssel", "Fahrkarte", "Waschmaschine",
    "Briefkasten", "Wasserflasche", "Notizbuch", "Regenschirm",
    "Geburtstag", "Nachbarhaus", "Winterjacke", "Frühstück",
    "Kopfhörer", "Telefonzelle", "Fernbedienung", "Theaterstück", "Weihnachtsbaum",
    "Zahnbürste", "Erdbeermarmelade", "Computermaus", "Flugzeug", "Brillenetui",
    "Einkaufswagen", "Kalenderblatt", "Haustier", "Wohnzimmer", "Schreibtischstuhl",
    "Fahrradhelm", "Taschenbuch", "Wasserhahn", "Fensterbrett", "Stadtplan",
    "Schlafanzug", "Spiegelbild", "Zahnpasta", "Briefumschlag", "Wolkenkratzer",
    "Gemüsesuppe", "Schulranzen", "Handtasche", "Fernsehprogramm", "Einkaufsliste"
];

const level3 = [
    "Geschwindigkeitsbegrenzung", "Umweltverschmutzung", "Wettervorhersage", "Bewusstseinszustand",
    "Verhaltensauffälligkeit", "Lebensmittelunverträglichkeit",
    "Energieeinsparverordnung", "Arbeitslosenversicherung", "Datenschutzgrundverordnung",
    "Krankenversichertenkarte", "Wissenschaftsverständnis", "Elektrizitätswerk",
    "Verantwortungsbewusstsein", "Gleichberechtigungsprinzip", "Meinungsverschiedenheit",
    "Klimaveränderung", "Gesellschaftsstruktur", "Zeitmanagement", "Geschichtsunterricht",
    "Finanzverwaltung", "Landwirtschaftsbetrieb", "Bauaufsichtsbehörde", "Nahrungsmittelproduktion",
    "Zukunftsperspektive", "Persönlichkeitsentwicklung", "Forschungsprojekt", "Überzeugungskraft",
    "Sicherheitsvorkehrung", "Krisenbewältigung", "Entwicklungspolitik", "Wettbewerbsfähigkeit",
    "Unabhängigkeitserklärung", "Betriebssystemupdate", "Informationssicherheit",
    "Kommunikationsstrategie", "Verkehrsinfrastruktur", "Produktionsprozess", "Qualitätskontrolle",
    "Arbeitsgemeinschaft", "Erneuerungsprozess", "Leistungsbewertung", "Entscheidungsfreiheit",
    "Steuererklärung", "Vertragsverhandlung", "Diskussionsgrundlage", "Mitarbeiterschulung",
    "Unternehmensberatung", "Bildungsinstitution", "Energieverbrauchsanalyse"
];

let falseWordsCounter = 0;
function chooseRandomWord(number) {
    let list = []
    switch (number) {
        case 1: list = level1; break;
        case 2: list = level2; break;
        case 3: list = level3; break;
    }
    //local Storage vorgeschlagen ChatGPT
    localStorage.setItem("chosenWord", randomWord(list).toUpperCase())
    wordToStar(localStorage.getItem("chosenWord"))
    window.location.href = "../html/index.html";
}

function randomWord(list) {
    return list[Math.floor(Math.random() * list.length)]
}

function getWord() {
    return word;
}

function wordToStar(word) {
    starWord = "";
    for (i = 1; i <= word.length; i++) {
        starWord += "_ "
    }
    localStorage.setItem("starWord", starWord.toUpperCase());
}

function generateButtons() {
    const container = document.getElementById("buttonContainer");
    container.innerHTML = "";
    letters.forEach(letter => {
        const button = document.createElement("button");
        button.id = letter;
        button.textContent = letter;
        button.className = "letter-Button";
        button.addEventListener('click', () => pressButton(letter))
        container.appendChild(button);
    })
}

function pressButton(letter) {
    const gameWord = localStorage.getItem("chosenWord");
    let starWord = localStorage.getItem("starWord");

    let starArray = starWord.split(" ");
    if (gameWord.includes(letter)) {
        for (i = 0; i < gameWord.length; i++) {
            if (gameWord.charAt(i).includes(letter) && starArray[i] == "_") {
                starArray[i] = letter;
            }
        }

        const newStar = starArray.join(" ");
        const htmlWord = document.getElementById("wordDisplay");
        htmlWord.textContent = newStar;
        if (!newStar.includes("_")) {
            successWin();
        }
        document.getElementById(letter).style.backgroundColor = "green";
        localStorage.setItem("starWord", newStar);
    } else {
        falseCounterWords()
        document.getElementById(letter).style.backgroundColor = "red";
        if (falseWordsCounter == 6) {
            failLose(gameWord)

        }
    }
    document.getElementById(letter).disabled = true;
    
}



function successWin() {
    setTimeout(() => {
        disableAllButtons();
        alert("Glückwunsch! Du hast das Wort erraten!");
        window.location.href = "../html/startGame.html";
    }, 100)

}

function failLose(correctWord) {
    setTimeout(() => {
        disableAllButtons();
        alert(`Du hast verloren!\nDas richtige Wort war: ${correctWord}`);
        window.location.href = "../html/startGame.html";
    }, 100)
}

function falseCounterWords() {
    const canvas = document.getElementById("hangman");
    const ctx = canvas.getContext('2d');
    falseWordsCounter++;
    counter = `${falseWordsCounter} / 6 Falsch geraten`;
    const displayCounter = document.getElementById("falseWordsCounter");
    displayCounter.textContent = counter;
    switch (falseWordsCounter) {
        case 1:
            ctx.arc(303, 70, 20, 0, Math.PI * 2);
            ctx.stroke();
            break;
        case 2: ctx.fillRect(300, 90, 4, 65); break;
        case 3: ctx.moveTo(302.5, 110);
            ctx.lineTo(270, 140); ctx.stroke(); break;

        case 4: ctx.moveTo(302.5, 110);
            ctx.lineTo(335, 140);
            ctx.stroke(); break;
        case 5: ctx.moveTo(302.5, 150);
            ctx.lineTo(275, 200); ctx.stroke(); break;
        case 6: ctx.moveTo(302.5, 150);
            ctx.lineTo(330, 200);
            ctx.stroke(); break;

    }

}

function disableAllButtons() {
    for (i = 0; i < letters.length; i++) {
        document.getElementById(letters[i]).disabled = true;
        document.getElementById(letters[i]).style.backgroundColor = "lightgray";
    }
}

