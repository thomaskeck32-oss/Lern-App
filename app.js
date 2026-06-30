const questions = [
[
  {
    "t": "Löten / K65 Rohr",
    "q": "Warum wird beim Hartlöten in Kältemittelleitungen Stickstoff durchgespült?",
    "a": [
      "Damit das Rohr schneller abkühlt",
      "Damit innen keine Oxide/Zunder entstehen",
      "Damit das Lot flüssiger wird",
      "Damit der Druckschalter auslöst"
    ],
    "r": 1,
    "e": "Stickstoff verdrängt Sauerstoff. Dadurch entstehen innen keine Oxidschuppen, die später Ventile, Filtertrockner oder Verdichter schädigen können."
  },
  {
    "t": "Löten / K65 Rohr",
    "q": "Ab welcher Temperatur spricht man grundsätzlich von Hartlöten?",
    "a": [
      "Über 150 °C",
      "Über 250 °C",
      "Über 450 °C",
      "Über 900 °C"
    ],
    "r": 2,
    "e": "Hartlöten liegt oberhalb von 450 °C. Weichlöten liegt darunter."
  },
  {
    "t": "Löten / K65 Rohr",
    "q": "Was ist beim Erwärmen einer Lötstelle wichtig?",
    "a": [
      "Nur das Lot direkt erhitzen",
      "Grundwerkstoff gleichmäßig erwärmen",
      "Rohr sofort mit Wasser abschrecken",
      "Flamme immer in das Rohr halten"
    ],
    "r": 1,
    "e": "Das Lot soll durch die Wärme des Grundwerkstoffs fließen, nicht durch direktes Verbrennen in der Flamme."
  },
  {
    "t": "Löten / K65 Rohr",
    "q": "Welche Gefahr entsteht, wenn beim Löten Kältemittelreste im Rohr sind?",
    "a": [
      "Es wird nur lauter",
      "Es können giftige Zersetzungsprodukte entstehen",
      "Der Druck sinkt dauerhaft",
      "Das Kupfer wird magnetisch"
    ],
    "r": 1,
    "e": "Kältemittelreste können bei Hitze gefährliche Zersetzungsprodukte bilden. Anlage vorher fachgerecht entleeren/spülen."
  },
  {
    "t": "Löten / K65 Rohr",
    "q": "Was beschreibt die Kapillarwirkung beim Löten?",
    "a": [
      "Lot wird durch den engen Spalt in die Verbindung gezogen",
      "Stickstoff wird aus dem Rohr gedrückt",
      "Das Rohr dehnt sich nicht aus",
      "Das Lot bleibt außen am Rohr"
    ],
    "r": 0,
    "e": "Bei passendem Spaltmaß zieht die Kapillarwirkung das flüssige Lot in den Fügespalt."
  },
  {
    "t": "Löten / K65 Rohr",
    "q": "Was ist bei K65-Rohr besonders zu beachten?",
    "a": [
      "Es ist ein hochfestes Kupferrohr für CO₂-Anwendungen",
      "Es darf nie gebogen werden",
      "Es besteht aus Kunststoff",
      "Es wird nur weichgelötet"
    ],
    "r": 0,
    "e": "K65 ist hochfestes Kupfer-Eisen-Rohr, häufig für höhere Drücke, zum Beispiel CO₂-Anlagen."
  },
  {
    "t": "Kältekreislauf",
    "q": "Welche Reihenfolge entspricht dem einfachen Kältekreislauf?",
    "a": [
      "Verdichter – Verflüssiger – Drosselorgan – Verdampfer",
      "Verdampfer – Verflüssiger – Verdichter – Sammler",
      "Drosselorgan – Verdichter – Verdampfer – Filter",
      "Verflüssiger – Verdampfer – Verdichter – Drosselorgan"
    ],
    "r": 0,
    "e": "Der Verdichter verdichtet, der Verflüssiger gibt Wärme ab, das Drosselorgan entspannt, der Verdampfer nimmt Wärme auf."
  },
  {
    "t": "Kältekreislauf",
    "q": "Welche Aufgabe hat der Verdampfer?",
    "a": [
      "Wärme aus dem Kühlraum aufnehmen",
      "Kältemittel verdichten",
      "Kältemittel verflüssigen",
      "Öl abscheiden"
    ],
    "r": 0,
    "e": "Im Verdampfer nimmt das Kältemittel Wärme auf und verdampft."
  },
  {
    "t": "Kältekreislauf",
    "q": "Welche Aufgabe hat der Verflüssiger?",
    "a": [
      "Wärme an die Umgebung abgeben",
      "Kältemittel entspannen",
      "Unterdruck erzeugen",
      "Kältemittel trocknen"
    ],
    "r": 0,
    "e": "Im Verflüssiger gibt heißes Kältemittel Wärme ab und kondensiert."
  },
  {
    "t": "Kältekreislauf",
    "q": "Warum darf flüssiges Kältemittel nicht in den Verdichter gelangen?",
    "a": [
      "Es kann Flüssigkeitsschläge verursachen",
      "Es erhöht den Wirkungsgrad immer",
      "Es macht den Motor leiser",
      "Es verbessert die Schmierung sicher"
    ],
    "r": 0,
    "e": "Flüssigkeit ist kaum kompressibel. Das kann Ventile, Pleuel oder Verdichter mechanisch zerstören."
  },
  {
    "t": "Kältekreislauf",
    "q": "Was bedeutet Überhitzung am Verdampferaustritt?",
    "a": [
      "Temperatur des Sauggases über der Verdampfungstemperatur",
      "Temperatur unter 0 °C",
      "Druckverlust im Filter",
      "Temperaturdifferenz zwischen Luft und Wasser"
    ],
    "r": 0,
    "e": "Überhitzung zeigt, dass das Kältemittel vollständig verdampft ist und zusätzlich erwärmt wurde."
  },
  {
    "t": "Kältekreislauf",
    "q": "Was bedeutet Unterkühlung in der Flüssigkeitsleitung?",
    "a": [
      "Flüssigkeit ist kälter als die Verflüssigungstemperatur",
      "Sauggas ist wärmer als Umgebung",
      "Verdampfer ist vereist",
      "Verdichter hat zu wenig Öl"
    ],
    "r": 0,
    "e": "Unterkühlung hilft sicherzustellen, dass vor dem Expansionsventil flüssiges Kältemittel ansteht."
  },
  {
    "t": "Dichtheitsprüfung",
    "q": "Womit wird eine Dichtheitsprüfung in Kälteanlagen typischerweise durchgeführt?",
    "a": [
      "Mit Sauerstoff",
      "Mit Stickstoff/formiergas geeignetem Prüfgas",
      "Mit Propan aus der Flasche",
      "Mit Druckluft immer ohne Einschränkung"
    ],
    "r": 1,
    "e": "Üblich ist trockener Stickstoff oder geeignetes Prüfgas. Sauerstoff ist wegen Brand- und Explosionsgefahr verboten."
  },
  {
    "t": "Dichtheitsprüfung",
    "q": "Warum darf Sauerstoff niemals zur Druckprüfung verwendet werden?",
    "a": [
      "Er ist zu billig",
      "Explosions- und Brandgefahr mit Öl/Fett",
      "Er zeigt keine Lecks",
      "Er kühlt zu stark"
    ],
    "r": 1,
    "e": "Sauerstoff kann mit Öl/Fett heftig reagieren. Das ist lebensgefährlich."
  },
  {
    "t": "Dichtheitsprüfung",
    "q": "Was zeigt ein fallender Prüfdruck nach Temperaturausgleich an?",
    "a": [
      "Mögliche Undichtheit",
      "Immer zu viel Kältemittel",
      "Verdichter ist elektrisch defekt",
      "Lüfter läuft falsch herum"
    ],
    "r": 0,
    "e": "Sinkt der Druck nach Temperaturangleichung weiter, ist eine Leckage wahrscheinlich."
  },
  {
    "t": "Dichtheitsprüfung",
    "q": "Was kommt nach bestandener Druck- und Dichtheitsprüfung vor dem Befüllen?",
    "a": [
      "Evakuieren",
      "Direkt Verdichter starten",
      "RCD ausbauen",
      "Öl ablassen"
    ],
    "r": 0,
    "e": "Nach der Dichtheitsprüfung wird evakuiert, um Luft und Feuchte zu entfernen."
  },
  {
    "t": "Kältemittel",
    "q": "Was bedeutet GWP?",
    "a": [
      "Ozonabbaupotenzial",
      "Treibhauspotenzial",
      "Verdampfungsdruck",
      "Brennbarkeitsklasse"
    ],
    "r": 1,
    "e": "GWP beschreibt das Treibhauspotenzial im Vergleich zu CO₂."
  },
  {
    "t": "Kältemittel",
    "q": "Was bedeutet ODP?",
    "a": [
      "Ozonabbaupotenzial",
      "Öldruckprüfung",
      "Oberflächen-Druckpunkt",
      "Optimale Druckprüfung"
    ],
    "r": 0,
    "e": "ODP beschreibt das Potenzial, die Ozonschicht zu schädigen."
  },
  {
    "t": "Kältemittel",
    "q": "Warum müssen Kältemittel abgesaugt und nicht abgelassen werden?",
    "a": [
      "Um Umwelt und Vorschriften einzuhalten",
      "Damit die Anlage lauter läuft",
      "Damit mehr Luft hineinkommt",
      "Weil Verdichter sonst nicht startet"
    ],
    "r": 0,
    "e": "Kältemittel dürfen nicht absichtlich in die Atmosphäre abgelassen werden."
  },
  {
    "t": "Kältemittel",
    "q": "Was sagt die Sicherheitsgruppe A2L grob aus?",
    "a": [
      "Geringere Giftigkeit, schwer entflammbar",
      "Hochgiftig und nicht brennbar",
      "Nur für Wasser geeignet",
      "Metallisches Kältemittel"
    ],
    "r": 0,
    "e": "A steht für geringere Toxizität, 2L für geringe Brennbarkeit/langsame Flammenausbreitung."
  },
  {
    "t": "Druck",
    "q": "Was passiert mit dem Druck in einem geschlossenen Kältemittelbehälter, wenn die Temperatur steigt?",
    "a": [
      "Er steigt",
      "Er fällt immer",
      "Er bleibt immer gleich",
      "Er wird negativ"
    ],
    "r": 0,
    "e": "Bei gesättigtem Kältemittel hängt der Druck stark von der Temperatur ab."
  },
  {
    "t": "Druck",
    "q": "Was ist die HD-Seite?",
    "a": [
      "Hochdruckseite zwischen Verdichterausgang und Drosselorgan",
      "Saugleitung vor Verdichter",
      "Nur Verdampfer",
      "Nur Kurbelgehäuse"
    ],
    "r": 0,
    "e": "Die Hochdruckseite umfasst Heißgasleitung, Verflüssiger und Flüssigkeitsleitung bis zum Drosselorgan."
  },
  {
    "t": "Druck",
    "q": "Was ist die ND-Seite?",
    "a": [
      "Niederdruckseite zwischen Drosselorgan und Verdichtereingang",
      "Nur Verflüssiger",
      "Nur Sammler",
      "Elektrischer Neutralleiter"
    ],
    "r": 0,
    "e": "Nach dem Drosselorgan bis zum Verdichter herrscht Niederdruck."
  },
  {
    "t": "Druck",
    "q": "Eine sehr hohe HD kann verursacht werden durch:",
    "a": [
      "Verschmutzten Verflüssiger oder defekten Lüfter",
      "Zu viel Verdampferfläche",
      "Zu niedrige Außentemperatur immer",
      "Zu wenig Spannung am Lichtschalter"
    ],
    "r": 0,
    "e": "Schlechter Wärmeabtransport am Verflüssiger erhöht den Verflüssigungsdruck."
  },
  {
    "t": "Pump down",
    "q": "Was ist das Ziel einer Pump-Down-Schaltung?",
    "a": [
      "Kältemittel aus dem Verdampfer/Saugseite in die Hochdruckseite absaugen",
      "Verdichter sofort mit Flüssigkeit füllen",
      "RCD prüfen",
      "Lüfter dauerhaft ausschalten"
    ],
    "r": 0,
    "e": "Das Magnetventil schließt, der Verdichter saugt die Niederdruckseite ab, bis der ND-Schalter abschaltet."
  },
  {
    "t": "Pump down",
    "q": "Welches Bauteil schließt bei Pump-Down zuerst, wenn Kühlung beendet wird?",
    "a": [
      "Magnetventil in der Flüssigkeitsleitung",
      "Verdichterventil mechanisch",
      "RCD",
      "MSS"
    ],
    "r": 0,
    "e": "Das Magnetventil sperrt die Flüssigkeitszufuhr. Danach sinkt der Saugdruck."
  },
  {
    "t": "Pump down",
    "q": "Welches Bauteil schaltet den Verdichter beim Pump-Down ab?",
    "a": [
      "Niederdruckschalter",
      "Hochdruckschalter immer",
      "Lichtschalter",
      "Abtauheizung"
    ],
    "r": 0,
    "e": "Der ND-Schalter öffnet bei erreichtem Abschaltdruck und stoppt den Verdichter."
  },
  {
    "t": "MV",
    "q": "Wie ist ein normales Magnetventil in der Flüssigkeitsleitung meist ausgeführt?",
    "a": [
      "Stromlos geschlossen",
      "Stromlos offen",
      "Immer mechanisch offen",
      "Nur handbetätigt"
    ],
    "r": 0,
    "e": "In vielen Kälteanlagen ist es stromlos geschlossen: Spannung an Spule öffnet das Ventil."
  },
  {
    "t": "MV",
    "q": "Was passiert bei Spannung an der Magnetventilspule?",
    "a": [
      "Magnetfeld hebt Anker, Ventil öffnet",
      "Spule kühlt das Kältemittel direkt",
      "Ventil wird undicht",
      "RCD löst immer aus"
    ],
    "r": 0,
    "e": "Die Spule erzeugt ein Magnetfeld, der Anker wird bewegt und der Durchfluss freigegeben."
  },
  {
    "t": "MV",
    "q": "Woran kann man eine defekte Magnetventilspule prüfen?",
    "a": [
      "Spannung an Adern und Spulenwiderstand messen",
      "Nur daran, ob sie glänzt",
      "Mit Feuer erwärmen",
      "Kältemittel ablassen"
    ],
    "r": 0,
    "e": "Man prüft, ob Spannung anliegt und ob die Spule elektrisch plausibel ist."
  },
  {
    "t": "Lüfter",
    "q": "Welche Folge hat ein defekter Verflüssigerlüfter?",
    "a": [
      "HD steigt",
      "ND steigt immer stark",
      "RCD wird zur Sicherung",
      "Verdampfer wird wärmer durch bessere Kühlung"
    ],
    "r": 0,
    "e": "Ohne ausreichenden Luftstrom kann der Verflüssiger Wärme schlecht abgeben."
  },
  {
    "t": "Lüfter",
    "q": "Welche Folge hat ein defekter Verdampferlüfter?",
    "a": [
      "Schlechter Wärmeübergang, Vereisung möglich",
      "HD sinkt immer auf 0 bar",
      "Kältemittel wird magnetisch",
      "RCD misst Druck"
    ],
    "r": 0,
    "e": "Zu wenig Luft am Verdampfer führt zu schlechter Kühlung und eventuell Eisbildung."
  },
  {
    "t": "h-x Diagramm",
    "q": "Wofür nutzt man das h-x-Diagramm?",
    "a": [
      "Zustand feuchter Luft bestimmen",
      "Elektrische Sicherungen dimensionieren",
      "Kältemittel direkt wiegen",
      "Motordrehrichtung festlegen"
    ],
    "r": 0,
    "e": "Im h-x-Diagramm lassen sich Temperatur, Feuchte, Enthalpie und Taupunkt feuchter Luft darstellen."
  },
  {
    "t": "h-x Diagramm",
    "q": "Was passiert, wenn Luft unter den Taupunkt abgekühlt wird?",
    "a": [
      "Wasserdampf kondensiert",
      "Luft wird elektrisch leitend",
      "Druck steigt explosionsartig",
      "Feuchte verschwindet ohne Kondensat"
    ],
    "r": 0,
    "e": "Unterhalb des Taupunkts kann die Luft Wasserdampf nicht mehr vollständig halten, Kondensat entsteht."
  },
  {
    "t": "Gemischte Schaltungen",
    "q": "Bei einer Reihenschaltung gilt:",
    "a": [
      "Strom ist überall gleich",
      "Spannung ist überall gleich",
      "Widerstand wird kleiner",
      "Leistung ist immer 0"
    ],
    "r": 0,
    "e": "In der Reihenschaltung fließt durch alle Bauteile derselbe Strom."
  },
  {
    "t": "Gemischte Schaltungen",
    "q": "Bei einer Parallelschaltung gilt:",
    "a": [
      "Spannung ist an allen Zweigen gleich",
      "Strom ist in allen Zweigen immer gleich",
      "Gesamtwiderstand ist Summe aller Widerstände",
      "Es gibt keinen Strom"
    ],
    "r": 0,
    "e": "In parallelen Zweigen liegt dieselbe Spannung an."
  },
  {
    "t": "Gemischte Schaltungen",
    "q": "Ohmsches Gesetz lautet:",
    "a": [
      "U = R · I",
      "P = m · c",
      "I = U · R",
      "R = U · I"
    ],
    "r": 0,
    "e": "Spannung U ist Widerstand R mal Strom I."
  },
  {
    "t": "MSS / MSR",
    "q": "Wofür steht MSS in der Praxis meist?",
    "a": [
      "Motorschutzschalter",
      "Mindest-Saugstrom-Schalter",
      "Magnetspulen-Sicherung",
      "Messstellen-Schraube"
    ],
    "r": 0,
    "e": "MSS wird häufig als Motorschutzschalter verwendet."
  },
  {
    "t": "MSS / MSR",
    "q": "Welche Aufgabe hat ein Motorschutzschalter?",
    "a": [
      "Motor gegen Überlast schützen",
      "Kältemittel trocknen",
      "Luftfeuchte messen",
      "Rohr biegen"
    ],
    "r": 0,
    "e": "Er löst bei zu hohem Motorstrom/Überlast aus und schützt Wicklungen."
  },
  {
    "t": "MSS / MSR",
    "q": "Warum stellt man den Motorschutz auf den Nennstrom ein?",
    "a": [
      "Damit er bei Überlast passend auslöst",
      "Damit der Motor schneller läuft",
      "Damit die Spannung sinkt",
      "Damit das Rohr dicht wird"
    ],
    "r": 0,
    "e": "Der Motorschutz muss zum Motor-Nennstrom passen, sonst löst er zu früh oder zu spät aus."
  },
  {
    "t": "Druckschalter",
    "q": "Was macht ein Hochdruckschalter?",
    "a": [
      "Schützt vor zu hohem Druck",
      "Regelt die Raumbeleuchtung",
      "Misst Luftfeuchte",
      "Ersetzt das Expansionsventil"
    ],
    "r": 0,
    "e": "Er schaltet bei unzulässig hohem Druck ab, um Anlage und Personen zu schützen."
  },
  {
    "t": "Druckschalter",
    "q": "Was macht ein Niederdruckschalter?",
    "a": [
      "Schaltet bei zu niedrigem Saugdruck ab oder regelt Pump-Down",
      "Erhöht den Druck mechanisch",
      "Erwärmt Öl",
      "Misst Spannung"
    ],
    "r": 0,
    "e": "ND-Schalter können Sicherheits- oder Regelfunktionen übernehmen, z. B. Pump-Down."
  },
  {
    "t": "Druckschalter",
    "q": "Was ist typisch für einen Sicherheitsdruckbegrenzer?",
    "a": [
      "Manueller Reset nach Auslösung",
      "Er ist immer ohne Kontakte",
      "Er öffnet nur bei Licht",
      "Er ersetzt den RCD"
    ],
    "r": 0,
    "e": "Sicherheitsdruckbegrenzer müssen nach Auslösung meist manuell zurückgesetzt werden."
  },
  {
    "t": "Schutzklassen",
    "q": "Was kennzeichnet Schutzklasse I?",
    "a": [
      "Schutzleiteranschluss vorhanden",
      "Schutz durch Kleinspannung ausschließlich",
      "Doppelte Isolierung ohne PE",
      "Nur Batteriebetrieb"
    ],
    "r": 0,
    "e": "Schutzklasse I besitzt einen Schutzleiter, der berührbare leitfähige Teile verbindet."
  },
  {
    "t": "Schutzklassen",
    "q": "Was kennzeichnet Schutzklasse II?",
    "a": [
      "Doppelte/verstärkte Isolierung, kein Schutzleiter nötig",
      "Immer Schutzleiterpflicht",
      "Nur in Kälteanlagen erlaubt",
      "Nur bei 400 V Motoren"
    ],
    "r": 0,
    "e": "Schutzklasse II schützt durch doppelte oder verstärkte Isolierung."
  },
  {
    "t": "Schutzklassen",
    "q": "Was kennzeichnet Schutzklasse III?",
    "a": [
      "Schutzkleinspannung",
      "Drehstrommotor",
      "Direkter Netzanschluss ohne Schutz",
      "Nur Metallgehäuse"
    ],
    "r": 0,
    "e": "Schutzklasse III arbeitet mit Schutzkleinspannung, z. B. SELV/PELV."
  },
  {
    "t": "RCD",
    "q": "Welche Aufgabe hat ein RCD?",
    "a": [
      "Fehlerströme erkennen und abschalten",
      "Kurzschlussstrom begrenzen wie ein Widerstand",
      "Druck im Verdampfer messen",
      "Motorleistung erhöhen"
    ],
    "r": 0,
    "e": "Ein RCD vergleicht Hin- und Rückstrom. Bei Differenz löst er aus."
  },
  {
    "t": "RCD",
    "q": "Was bedeutet ein RCD mit 30 mA?",
    "a": [
      "Bemessungsdifferenzstrom 30 mA",
      "Nennspannung 30 mA",
      "Schaltleistung 30 kW",
      "Druckverlust 30 mbar"
    ],
    "r": 0,
    "e": "30 mA ist der Differenzstrom, bei dem der RCD zum Personenschutz auslösen soll."
  },
  {
    "t": "RCD",
    "q": "Ersetzt ein RCD eine Sicherung gegen Überlast/Kurzschluss?",
    "a": [
      "Nein",
      "Ja immer",
      "Nur bei Kältemittel R134a",
      "Nur bei Motoren"
    ],
    "r": 0,
    "e": "RCD schützt gegen Fehlerstrom, nicht zuverlässig gegen Überlast/Kurzschluss. Dafür sind Sicherungen/LS nötig."
  },
  {
    "t": "Kühlzelle",
    "q": "Warum braucht eine Kühlzelle eine gute Türdichtung?",
    "a": [
      "Um Wärmeeintrag und Vereisung zu reduzieren",
      "Um Druckschalter zu ersetzen",
      "Damit Kältemittel verdampft",
      "Damit der RCD nicht auslöst"
    ],
    "r": 0,
    "e": "Undichte Türen bringen warme feuchte Luft ein: höhere Last, Eis, Kondensat, Energieverlust."
  },
  {
    "t": "Kühlzelle",
    "q": "Was ist eine Wärmebrücke?",
    "a": [
      "Stelle mit erhöhtem Wärmestrom durch die Dämmung",
      "Elektrische Brücke im RCD",
      "Ventil im Kältekreis",
      "Teil des h-x-Diagramms"
    ],
    "r": 0,
    "e": "Wärmebrücken verschlechtern die Dämmwirkung und können Kondensat/Eis verursachen."
  },
  {
    "t": "Kühlzelle",
    "q": "Warum ist Luftfeuchtigkeit in der Kühlzelle wichtig?",
    "a": [
      "Sie beeinflusst Austrocknung, Reifbildung und Produktqualität",
      "Sie bestimmt direkt den Motorstrom",
      "Sie ersetzt die Dichtheitsprüfung",
      "Sie macht Kältemittel ungiftig"
    ],
    "r": 0,
    "e": "Zu niedrige Feuchte trocknet Ware aus, zu hohe Feuchte kann Reif/Kondensat fördern."
  },
  {
    "t": "Gestreckte Länge",
    "q": "Was ist die gestreckte Länge eines gebogenen Rohres?",
    "a": [
      "Die gerade Rohrlänge, die für den Bogen benötigt wird",
      "Die Außenlänge ohne Biegeradius",
      "Nur der Rohrdurchmesser",
      "Die elektrische Leitungslänge"
    ],
    "r": 0,
    "e": "Für Biegen/Zuschnitt wird die abgewickelte Länge entlang der Rohrmittellinie benötigt."
  },
  {
    "t": "Gestreckte Länge",
    "q": "Welche Linie ist beim Berechnen von Rohrbogenlängen entscheidend?",
    "a": [
      "Rohrmittellinie",
      "Außenkante allein",
      "Innenkante allein",
      "Lötspalt"
    ],
    "r": 0,
    "e": "Bogenlängen werden üblicherweise über die neutrale Faser/Rohrmittellinie berechnet."
  },
  {
    "t": "Strom-Zeit-Diagramm",
    "q": "Was zeigt ein Strom-Zeit-Diagramm bei Schutzorganen?",
    "a": [
      "Auslösezeit in Abhängigkeit vom Strom",
      "Temperatur des Kältemittels",
      "Druck in bar über h",
      "Rohrlänge über Durchmesser"
    ],
    "r": 0,
    "e": "Es zeigt, wie schnell ein Schutzorgan bei welchem Überstrom auslöst."
  },
  {
    "t": "Strom-Zeit-Diagramm",
    "q": "Warum lösen Sicherungen bei hohem Kurzschlussstrom schneller aus?",
    "a": [
      "Wärme-/Magnetwirkung ist deutlich größer",
      "Weil Spannung immer 0 ist",
      "Weil RCD den Druck erkennt",
      "Weil Motoröl verdampft"
    ],
    "r": 0,
    "e": "Je größer der Fehlerstrom, desto schneller wirkt das Auslöseprinzip."
  },
  {
    "t": "Leistung Motor",
    "q": "Formel für elektrische Wirkleistung bei Gleichstrom/einphasig ohne cos φ?",
    "a": [
      "P = U · I",
      "P = R / U",
      "P = I / U",
      "P = m · g"
    ],
    "r": 0,
    "e": "Die Grundformel lautet P = U mal I, bei Wechselstrom ggf. mit Leistungsfaktor."
  },
  {
    "t": "Leistung Motor",
    "q": "Drehstrom-Wirkleistung berechnet man ideal mit:",
    "a": [
      "P = √3 · U · I · cos φ",
      "P = U + I + R",
      "P = m · c · ΔT",
      "P = p · V"
    ],
    "r": 0,
    "e": "Bei Drehstrom: P = Wurzel 3 mal Leiterspannung mal Strom mal cos φ."
  },
  {
    "t": "Leistung Motor",
    "q": "Ein Motor 400 V, 5 A, cos φ 0,8. Leistung ungefähr?",
    "a": [
      "2,77 kW",
      "400 W",
      "8 kW",
      "1,0 kW"
    ],
    "r": 0,
    "e": "√3 · 400 · 5 · 0,8 ≈ 2771 W = 2,77 kW."
  },
  {
    "t": "Abtauheizung",
    "q": "Warum braucht ein Verdampfer eine Abtauung?",
    "a": [
      "Eis verschlechtert Wärmeübergang und Luftdurchsatz",
      "Eis verbessert immer die Kühlung",
      "Damit Kältemittel flüssig in den Verdichter läuft",
      "Damit RCD nicht auslöst"
    ],
    "r": 0,
    "e": "Eis wirkt dämmend und blockiert Luft. Deshalb muss regelmäßig abgetaut werden."
  },
  {
    "t": "Abtauheizung",
    "q": "Was ist bei elektrischer Abtauheizung wichtig?",
    "a": [
      "Sicherheit gegen Übertemperatur und korrekte Abschaltung",
      "Heizung immer dauerhaft eingeschaltet",
      "Kein Schutzleiter nötig bei Metall",
      "Druckprüfung mit Sauerstoff"
    ],
    "r": 0,
    "e": "Abtauheizungen brauchen sichere Steuerung, Temperaturbegrenzung und fachgerechten elektrischen Schutz."
  },
  {
    "t": "Abtauheizung",
    "q": "Warum läuft der Verdampferlüfter beim Abtauen oft nicht?",
    "a": [
      "Damit keine warme feuchte Luft in den Raum geblasen wird",
      "Weil der RCD sonst defekt wird",
      "Damit der Verflüssiger vereist",
      "Damit die Heizung weniger Spannung hat"
    ],
    "r": 0,
    "e": "Lüfter werden häufig gesperrt, damit Wärme am Verdampfer bleibt und nicht in den Kühlraum geblasen wird."
  },
  {
    "t": "Druck",
    "q": "Anlage läuft, HD zu hoch, Verflüssiger sehr warm. Erste sinnvolle Prüfungen?",
    "a": [
      "Luftweg/Lüfter/Verflüssiger reinigen prüfen",
      "Kältemittel sofort ablassen",
      "RCD tauschen",
      "Verdampfer ausbauen"
    ],
    "r": 0,
    "e": "Bei hoher HD zuerst Wärmeabgabe prüfen: Lüfter, Lamellen, Luftweg, Außentemperatur, Füllmenge."
  },
  {
    "t": "Kältekreislauf",
    "q": "Saugleitung vereist bis zum Verdichter. Was ist kritisch?",
    "a": [
      "Gefahr von Flüssigkeit im Verdichter",
      "Zu hohe Unterkühlung immer gut",
      "RCD defekt sicher",
      "Motorleistung zu klein immer"
    ],
    "r": 0,
    "e": "Vereisung bis zum Verdichter kann auf falsche Überhitzung/Flüssigkeitsrücklauf hinweisen."
  },
  {
    "t": "Dichtheitsprüfung",
    "q": "Nach dem Evakuieren steigt das Vakuum schnell an. Was kann Ursache sein?",
    "a": [
      "Leck oder Feuchte/Ausgasung",
      "Zu hoher GWP",
      "RCD löst aus",
      "Lüfter läuft richtig"
    ],
    "r": 0,
    "e": "Steigt das Vakuum, können Undichtheiten oder Restfeuchte vorhanden sein."
  },
  {
    "t": "MV",
    "q": "Magnetventil bekommt Spannung, öffnet aber nicht. Was prüfst du sinnvoll?",
    "a": [
      "Spule, Spannung, Ventilrichtung, mechanisches Klemmen",
      "Nur Kältemittel-Farbe",
      "Nur Schutzklasse",
      "Nur h-x-Diagramm"
    ],
    "r": 0,
    "e": "Elektrisch und mechanisch prüfen: liegt Spannung an, ist Spule ok, ist Ventil richtig herum, klemmt der Anker?"
  },
  {
    "t": "RCD",
    "q": "Ein RCD löst beim Einschalten der Abtauheizung aus. Wahrscheinliche Richtung?",
    "a": [
      "Isolationsfehler/Feuchtigkeit an Heizung prüfen",
      "Mehr Kältemittel füllen",
      "Druckschalter höher stellen",
      "Lüfter abklemmen"
    ],
    "r": 0,
    "e": "Abtauheizungen können durch Feuchtigkeit/Isolationsfehler Fehlerströme verursachen."
  },
  {
    "t": "Leistung Motor",
    "q": "Motorstrom höher als Nennstrom. Was ist gefährlich?",
    "a": [
      "Wicklung kann überhitzen",
      "Kühlraum wird automatisch dichter",
      "Druck sinkt auf 0",
      "RCD misst Leistung"
    ],
    "r": 0,
    "e": "Überstrom führt zu Erwärmung. Motorschutz muss passend eingestellt sein."
  },
  {
    "t": "Kühlzelle",
    "q": "Verdampfer vereist stark, Tür wird oft geöffnet. Warum?",
    "a": [
      "Warme feuchte Luft gelangt hinein und kondensiert/friert",
      "Kältemittel hat kein GWP",
      "RCD ist zu klein",
      "MSS ist zu groß"
    ],
    "r": 0,
    "e": "Häufiges Öffnen bringt Feuchtigkeit in die Zelle. Diese friert am kalten Verdampfer an."
  },
  {
    "t": "Strom-Zeit-Diagramm",
    "q": "Was bedeutet träge Auslösung?",
    "a": [
      "Kurzzeitige Einschaltströme werden toleriert",
      "Schutz löst nie aus",
      "Druck steigt langsamer",
      "Kältemittel fließt rückwärts"
    ],
    "r": 0,
    "e": "Motoren haben hohe Anlaufströme. Träge Kennlinien verhindern unnötiges Auslösen."
  },
  {
    "t": "Gemischte Schaltungen",
    "q": "Zwei gleiche Widerstände parallel: Gesamtwiderstand ist...",
    "a": [
      "halb so groß wie ein einzelner",
      "doppelt so groß",
      "gleich groß",
      "unendlich"
    ],
    "r": 0,
    "e": "Bei zwei gleichen parallelen Widerständen halbiert sich der Gesamtwiderstand."
  },
  {
    "t": "Gestreckte Länge",
    "q": "Für einen 90°-Bogen mit Radius r gilt Bogenlänge etwa:",
    "a": [
      "π·r/2",
      "π·r",
      "2π·r",
      "r/π"
    ],
    "r": 0,
    "e": "90° ist ein Viertelkreis: 2πr/4 = πr/2."
  }
]
;
const byId = id => document.getElementById(id);
let pool=[], idx=0, selected=null, correct=0, answered=0, examAnswers=[];
const storeKey='kaelte_lernapp_wrong_v1';
function shuffle(a){return [...a].sort(()=>Math.random()-.5)}
function topics(){return ['Alle Themen',...new Set(questions.map(x=>x.t))]}
function init(){
  byId('topic').innerHTML=topics().map(t=>`<option>${t}</option>`).join('');
  byId('startBtn').onclick=start; byId('checkBtn').onclick=check; byId('nextBtn').onclick=next;
  byId('endBtn').onclick=end; byId('againBtn').onclick=()=>{byId('result').classList.add('hidden');byId('setup').classList.remove('hidden')};
  byId('resetBtn').onclick=()=>{localStorage.removeItem(storeKey);alert('Fortschritt gelöscht.');}
}
function start(){
  const topic=byId('topic').value, mode=byId('mode').value, count=+byId('count').value;
  let arr=questions.map((q,i)=>({...q,id:i}));
  if(topic!=='Alle Themen') arr=arr.filter(x=>x.t===topic);
  if(mode==='wrong'){
    const wrong=JSON.parse(localStorage.getItem(storeKey)||'[]');
    arr=arr.filter(x=>wrong.includes(x.id));
    if(!arr.length){alert('Noch keine falschen Fragen gespeichert.'); return;}
  }
  pool=shuffle(arr).slice(0,count); idx=0; selected=null; correct=0; answered=0; examAnswers=[];
  byId('setup').classList.add('hidden'); byId('result').classList.add('hidden'); byId('quiz').classList.remove('hidden'); render();
}
function render(){
  const x=pool[idx]; selected=null;
  byId('progress').textContent=`Frage ${idx+1} von ${pool.length}`; byId('topicLabel').textContent=x.t;
  byId('question').textContent=x.q; byId('right').textContent=correct; byId('done').textContent=answered;
  byId('feedback').className='feedback hidden'; byId('checkBtn').classList.remove('hidden'); byId('nextBtn').classList.add('hidden');
  byId('answers').innerHTML=x.a.map((a,i)=>`<button class="answer" data-i="${i}">${String.fromCharCode(65+i)}) ${a}</button>`).join('');
  document.querySelectorAll('.answer').forEach(b=>b.onclick=()=>{document.querySelectorAll('.answer').forEach(c=>c.classList.remove('selected'));b.classList.add('selected');selected=+b.dataset.i;});
}
function updateWrong(id, isWrong){
  let wrong=JSON.parse(localStorage.getItem(storeKey)||'[]');
  wrong=wrong.filter(x=>x!==id); if(isWrong) wrong.push(id);
  localStorage.setItem(storeKey,JSON.stringify(wrong));
}
function check(){
  if(selected===null){alert('Bitte Antwort auswählen.');return;}
  const x=pool[idx], mode=byId('mode').value;
  if(mode==='exam') { examAnswers[idx]=selected; answered++; byId('done').textContent=answered; return next(); }
  const ok=selected===x.r; if(ok) correct++; answered++; updateWrong(x.id,!ok);
  document.querySelectorAll('.answer').forEach(b=>{const i=+b.dataset.i; if(i===x.r)b.classList.add('correct'); if(i===selected && !ok)b.classList.add('wrong'); b.disabled=true;});
  const fb=byId('feedback'); fb.className='feedback '+(ok?'good':'bad'); fb.innerHTML=`<b>${ok?'Richtig':'Falsch'}</b><br>Richtige Antwort: ${String.fromCharCode(65+x.r)}) ${x.a[x.r]}<br><br>${x.e}`;
  byId('right').textContent=correct; byId('done').textContent=answered; byId('checkBtn').classList.add('hidden'); byId('nextBtn').classList.remove('hidden');
}
function next(){ if(idx<pool.length-1){idx++;render()} else end(); }
function end(){
  if(byId('mode').value==='exam'){
    correct=0; pool.forEach((x,i)=>{const ok=examAnswers[i]===x.r; if(ok) correct++; updateWrong(x.id,!ok);});
  }
  byId('quiz').classList.add('hidden'); byId('result').classList.remove('hidden');
  const pct=Math.round((correct/pool.length)*100)||0;
  byId('resultText').innerHTML=`<p><b>${correct} von ${pool.length}</b> richtig (${pct}%).</p><p>${pct>=85?'Sehr stark – prüfungsnah weiter üben.':pct>=60?'Solide, aber falsche Fragen wiederholen.':'Noch viel Potenzial: Thema einzeln lernen und falsche Fragen wiederholen.'}</p>`;
}
init();
