const level1 = [
  "Haus", "Baum", "Hund", "Katze", "Auto", "Sonne", "Tisch", "Stuhl", "Blume", "Wasser",
  "Brot", "Apfel", "Vogel", "Hand", "Ball", "Fisch", "Freund", "Mutter", "Vater", "Kind",
  "Tür", "Fenster", "Straße", "Regen", "Schnee", "Tag", "Nacht", "Schule", "Buch", "Garten",
  "Stadt", "Dorf", "Essen", "Lachen", "Spielen", "Tanzen", "Laufen", "Schlafen", "Herz", "Berg",
  "Himmel", "Musik", "Arbeit", "Zeit", "Woche", "Jahr", "Kleid", "Vogel", "Blume", "Stern"
];

const level2 = [
  "Zahnarzt", "Schmetterling", "Krankenhaus", "Lieblingsfarbe", "Taschenlampe",
  "Kühlschrank", "Sommerferien", "Haustürschlüssel", "Fahrkarte", "Waschmaschine",
  "Briefkasten", "Wasserflasche", "Notizbuch", "Regenschirm", "Fußballspiel",
  "Geburtstag", "Nachbarhaus", "Winterjacke", "Frühstück", "Schnellstraße",
  "Kopfhörer", "Telefonzelle", "Fernbedienung", "Theaterstück", "Weihnachtsbaum",
  "Zahnbürste", "Erdbeermarmelade", "Computermaus", "Flugzeug", "Brillenetui",
  "Einkaufswagen", "Kalenderblatt", "Haustier", "Wohnzimmer", "Schreibtischstuhl",
  "Fahrradhelm", "Taschenbuch", "Wasserhahn", "Fensterbrett", "Stadtplan",
  "Schlafanzug", "Spiegelbild", "Zahnpasta", "Briefumschlag", "Wolkenkratzer",
  "Gemüsesuppe", "Schulranzen", "Handtasche", "Fernsehprogramm", "Einkaufsliste"
];

const level3 = [
  "Geschwindigkeitsbegrenzung", "Umweltverschmutzung", "Wettervorhersage", "Bewusstseinszustand",
  "Verhaltensauffälligkeit", "Lebensmittelunverträglichkeit", "Straßenverkehrsordnung",
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


function chooseRandomWord(number){
    let list = []
    switch(number){
        case 1: list = level1;break;
        case 2: list = level2;break;
        case 3: list = level3;break;
    }
    return randomWord(list);
}

function randomWord(list){
    return list[Math.floor(Math.random()*list.length)]
}
