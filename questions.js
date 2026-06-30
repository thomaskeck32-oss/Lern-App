const QUESTIONS = [
  {
    "topic": "Kältekreislauf",
    "difficulty": 3,
    "q": "Welche Reihenfolge beschreibt den einfachen Kältekreislauf richtig?",
    "a": [
      "Verdampfer → Verflüssiger → Verdichter → Expansionsorgan",
      "Verdichter → Verflüssiger → Expansionsorgan → Verdampfer",
      "Verdichter → Verdampfer → Expansionsorgan → Verflüssiger",
      "Expansionsorgan → Verflüssiger → Verdampfer → Verdichter"
    ],
    "c": 1,
    "e": "Nach dem Verdichter folgt die Wärmeabgabe im Verflüssiger, dann Entspannung und Wärmeaufnahme im Verdampfer."
  },
  {
    "topic": "Kältekreislauf",
    "difficulty": 3,
    "q": "Welche Aufgabe hat der Verdichter?",
    "a": [
      "Er bindet Feuchtigkeit im Kältemittel.",
      "Er nimmt Wärme aus dem Kühlraum auf.",
      "Er erhöht Druck und Temperatur des Kältemitteldampfes.",
      "Er senkt den Druck des flüssigen Kältemittels."
    ],
    "c": 2,
    "e": "Der Verdichter saugt gasförmiges Kältemittel an und verdichtet es."
  },
  {
    "topic": "Kältekreislauf",
    "difficulty": 3,
    "q": "Welche Aufgabe hat der Verflüssiger?",
    "a": [
      "Er regelt den Fehlerstrom.",
      "Er erhöht den Saugdruck.",
      "Er gibt Wärme ab und verflüssigt Kältemittel.",
      "Er nimmt Wärme auf und verdampft Kältemittel."
    ],
    "c": 2,
    "e": "Im Verflüssiger kondensiert Kältemittel unter Wärmeabgabe."
  },
  {
    "topic": "Kältekreislauf",
    "difficulty": 3,
    "q": "Welche Aufgabe hat der Verdampfer?",
    "a": [
      "Er gibt Wärme ab und verflüssigt Kältemittel.",
      "Er nimmt Wärme auf und verdampft Kältemittel.",
      "Er erhöht den Hochdruck.",
      "Er trennt Öl aus dem Heißgas."
    ],
    "c": 1,
    "e": "Im Verdampfer verdampft Kältemittel und nimmt Wärme auf."
  },
  {
    "topic": "Kältekreislauf",
    "difficulty": 4,
    "q": "Was bedeutet Überhitzung?",
    "a": [
      "Hochdruck minus Niederdruck.",
      "Verflüssigungstemperatur minus Flüssigkeitstemperatur.",
      "Sauggastemperatur minus Verdampfungstemperatur.",
      "Raumtemperatur minus Außentemperatur."
    ],
    "c": 2,
    "e": "Überhitzung zeigt, wie weit das Sauggas über der Sättigungstemperatur liegt."
  },
  {
    "topic": "Kältekreislauf",
    "difficulty": 4,
    "q": "Was bedeutet Unterkühlung?",
    "a": [
      "Verflüssigungstemperatur minus Flüssigkeitstemperatur.",
      "Verdichterstrom minus Nennstrom.",
      "Verdampfertemperatur minus Raumtemperatur.",
      "Sauggastemperatur minus Verdampfungstemperatur."
    ],
    "c": 0,
    "e": "Unterkühlung zeigt, wie weit flüssiges Kältemittel unter seiner Sättigungstemperatur liegt."
  },
  {
    "topic": "Kältekreislauf",
    "difficulty": 4,
    "q": "Warum ist zu geringe Überhitzung gefährlich?",
    "a": [
      "Der RCD verliert seine Schutzfunktion.",
      "Der GWP-Wert steigt dadurch sofort.",
      "Flüssiges Kältemittel kann zum Verdichter gelangen.",
      "Der Verflüssiger wird dadurch automatisch sauberer."
    ],
    "c": 2,
    "e": "Flüssigkeit im Verdichter kann Flüssigkeitsschlag und Schäden verursachen."
  },
  {
    "topic": "Kältekreislauf",
    "difficulty": 4,
    "q": "Welche Kombination passt zu Kältemittelmangel?",
    "a": [
      "Niedriger Saugdruck, hohe Überhitzung, geringe Leistung.",
      "Normaldruck und ausschließlich Fehlerstrom.",
      "Hoher Hochdruck, hohe Unterkühlung, überfüllter Sammler.",
      "Hoher Saugdruck, niedrige Überhitzung, nasses Sauggas."
    ],
    "c": 0,
    "e": "Mangel führt oft zur Unterversorgung des Verdampfers."
  },
  {
    "topic": "Bauteile",
    "difficulty": 3,
    "q": "Welche Aufgabe hat ein Filtertrockner?",
    "a": [
      "Kältemittel verdichten.",
      "Verdampfer abtauen.",
      "Fehlerstrom abschalten.",
      "Feuchtigkeit und Partikel im Kältekreis aufnehmen."
    ],
    "c": 3,
    "e": "Der Filtertrockner schützt Ventile und Verdichter vor Feuchte und Schmutz."
  },
  {
    "topic": "Bauteile",
    "difficulty": 3,
    "q": "Welche Aufgabe hat ein Schauglas mit Feuchteindikator?",
    "a": [
      "Hinweise auf Flüssigkeitszustand und Feuchtigkeit geben.",
      "Den Verdichterstrom begrenzen.",
      "Den Motorschutz ersetzen.",
      "Den Prüfdruck erzeugen."
    ],
    "c": 0,
    "e": "Das Schauglas zeigt optisch Zustand und teilweise Feuchtigkeit an."
  },
  {
    "topic": "Bauteile",
    "difficulty": 4,
    "q": "Welche Aufgabe hat ein Flüssigkeitssammler?",
    "a": [
      "Fehlerstrom messen.",
      "Feuchtigkeit aus Raumluft entfernen.",
      "Sauggas mechanisch verdichten.",
      "Flüssiges Kältemittel speichern und Füllmengen ausgleichen."
    ],
    "c": 3,
    "e": "Der Sammler dient als Vorrat für flüssiges Kältemittel."
  },
  {
    "topic": "Bauteile",
    "difficulty": 4,
    "q": "Welche Aufgabe hat ein Ölabscheider?",
    "a": [
      "Fehlerstrom zur Erde erkennen.",
      "Kältemittel in den Verdampfer dosieren.",
      "Öl aus dem Heißgas trennen und zum Verdichter zurückführen.",
      "Luft im Kühlraum entfeuchten."
    ],
    "c": 2,
    "e": "Ölabscheider verringern Öltransport in der Anlage und helfen bei der Ölrückführung."
  },
  {
    "topic": "Bauteile",
    "difficulty": 4,
    "q": "Welche Aufgabe hat ein Flüssigkeitsabscheider in der Saugleitung?",
    "a": [
      "Er ersetzt den Filtertrockner.",
      "Er misst den GWP-Wert.",
      "Er erhöht den Hochdruck.",
      "Er schützt den Verdichter vor flüssigem Kältemittel."
    ],
    "c": 3,
    "e": "Er hält Flüssigkeit zurück, damit der Verdichter möglichst nur Gas ansaugt."
  },
  {
    "topic": "Bauteile",
    "difficulty": 3,
    "q": "Welche Aufgabe hat ein Magnetventil?",
    "a": [
      "Es misst absolute Feuchte.",
      "Es verdichtet Kältemittel.",
      "Es öffnet oder sperrt den Durchfluss elektrisch.",
      "Es verflüssigt Kältemittel."
    ],
    "c": 2,
    "e": "Eine Spule bewegt einen Anker und öffnet oder schließt den Durchfluss."
  },
  {
    "topic": "TEV/EEV",
    "difficulty": 4,
    "q": "Welche Aufgabe hat ein thermostatisches Expansionsventil?",
    "a": [
      "Öl aus dem Verdichter abscheiden.",
      "Kältemittel verflüssigen.",
      "Kältemittel dosieren und Überhitzung regeln.",
      "Fehlerstrom erkennen."
    ],
    "c": 2,
    "e": "Das TEV regelt die Einspritzmenge anhand der Überhitzung."
  },
  {
    "topic": "TEV/EEV",
    "difficulty": 4,
    "q": "Was bewirkt eine zu geringe Einspritzung am Expansionsventil?",
    "a": [
      "Nasse Saugleitung mit Flüssigkeitsschlag sicher.",
      "Hohe Überhitzung und geringe Verdampferleistung.",
      "Zu hoher Fehlerstrom am RCD.",
      "Dauerhaft hohe Unterkühlung ohne Ursache."
    ],
    "c": 1,
    "e": "Unterversorgung führt zu hoher Überhitzung und schwacher Leistung."
  },
  {
    "topic": "TEV/EEV",
    "difficulty": 4,
    "q": "Warum muss der Fühler eines TEV korrekt sitzen?",
    "a": [
      "Er verhindert jeden Flüssigkeitsschlag allein.",
      "Er ersetzt den Filtertrockner.",
      "Er beeinflusst die Überhitzungsregelung.",
      "Er misst den Hochdruck elektrisch."
    ],
    "c": 2,
    "e": "Falsche Fühlerlage kann die Einspritzung verfälschen."
  },
  {
    "topic": "TEV/EEV",
    "difficulty": 4,
    "q": "Was ist ein Vorteil eines elektronischen Expansionsventils?",
    "a": [
      "Es ersetzt den Verdichter.",
      "Es braucht nie Sensoren.",
      "Es macht Evakuieren überflüssig.",
      "Es kann sehr genau und dynamisch regeln."
    ],
    "c": 3,
    "e": "EEV können mit Sensoren präzise auf Betriebszustände reagieren."
  },
  {
    "topic": "Druck/Pump-Down",
    "difficulty": 3,
    "q": "Was passiert beim Pump-Down zuerst?",
    "a": [
      "Der Verdichter wird zuerst abgeschaltet.",
      "Der Hochdruckschalter wird überbrückt.",
      "Das Magnetventil in der Flüssigkeitsleitung schließt.",
      "Der RCD löst aus."
    ],
    "c": 2,
    "e": "Das Magnetventil schließt, der Verdichter saugt die Niederdruckseite leer."
  },
  {
    "topic": "Druck/Pump-Down",
    "difficulty": 4,
    "q": "Welches Bauteil beendet den Pump-Down üblicherweise?",
    "a": [
      "Filtertrockner.",
      "Hochdruckschalter.",
      "Türkontakt.",
      "Niederdruckschalter."
    ],
    "c": 3,
    "e": "Der ND-Schalter schaltet bei niedrigem Saugdruck den Verdichter ab."
  },
  {
    "topic": "Druck/Pump-Down",
    "difficulty": 3,
    "q": "Welche Aufgabe hat ein Hochdruckschalter?",
    "a": [
      "Messung des Fehlerstroms.",
      "Schutz vor jedem Kältemittelmangel.",
      "Regelung der Luftfeuchte.",
      "Schutz vor unzulässig hohem Verflüssigungsdruck."
    ],
    "c": 3,
    "e": "HD-Schalter schützen Anlage und Personen vor zu hohem Druck."
  },
  {
    "topic": "Druck/Pump-Down",
    "difficulty": 4,
    "q": "Was darf bei wiederholtem Hochdruckabschalten nicht gemacht werden?",
    "a": [
      "Hochdruckschalter überbrücken und weiterbetreiben.",
      "Messwerte dokumentieren.",
      "Lüfterfunktion prüfen.",
      "Verflüssiger reinigen."
    ],
    "c": 0,
    "e": "Sicherheitsbauteile dürfen nicht überbrückt werden."
  },
  {
    "topic": "Druck/Pump-Down",
    "difficulty": 4,
    "q": "Welche Ursache passt zu hohem Hochdruck?",
    "a": [
      "Zu hohe Überhitzung allein.",
      "Zu kleiner RCD-Auslösestrom.",
      "Schlechte Wärmeabgabe am Verflüssiger.",
      "Zu niedrige Raumfeuchte."
    ],
    "c": 2,
    "e": "Wenn Wärme nicht abgeführt wird, steigt der Verflüssigungsdruck."
  },
  {
    "topic": "Druck/Pump-Down",
    "difficulty": 3,
    "q": "Was passiert mit der Siedetemperatur bei steigendem Druck?",
    "a": [
      "Sie steigt.",
      "Sie bleibt gleich.",
      "Sie sinkt immer auf 0 °C.",
      "Sie verschwindet."
    ],
    "c": 0,
    "e": "Höherer Druck bedeutet höhere Siedetemperatur."
  },
  {
    "topic": "Dichtheit/Vakuum",
    "difficulty": 3,
    "q": "Warum wird für Druckprüfungen trockener Stickstoff genutzt?",
    "a": [
      "Er ist trocken und reaktionsträge.",
      "Er ersetzt jede Evakuierung.",
      "Er senkt den Betriebsdruck dauerhaft.",
      "Er ist brennbar und zeigt Leckagen."
    ],
    "c": 0,
    "e": "Stickstoff bringt keine Feuchte ein und reagiert nicht gefährlich."
  },
  {
    "topic": "Dichtheit/Vakuum",
    "difficulty": 4,
    "q": "Warum ist Druckluft für die Dichtheitsprüfung ungeeignet?",
    "a": [
      "Sie ist nicht komprimierbar.",
      "Sie ist zu trocken.",
      "Sie ist nicht messbar.",
      "Sie enthält Sauerstoff und Feuchtigkeit."
    ],
    "c": 3,
    "e": "Feuchte und Sauerstoff können Schäden und Gefahren verursachen."
  },
  {
    "topic": "Dichtheit/Vakuum",
    "difficulty": 4,
    "q": "Was bedeutet Druckabfall bei einer Druckprüfung?",
    "a": [
      "Die Anlage ist sicher dicht.",
      "Der Verdichter muss starten.",
      "Leckage oder Temperaturänderung muss geprüft werden.",
      "Das TEV muss schließen."
    ],
    "c": 2,
    "e": "Druckänderungen dürfen nicht ignoriert werden."
  },
  {
    "topic": "Dichtheit/Vakuum",
    "difficulty": 3,
    "q": "Warum wird evakuiert?",
    "a": [
      "Hochdruck einstellen.",
      "Kältemittel verdichten.",
      "Öl nachfüllen.",
      "Luft und Feuchtigkeit entfernen."
    ],
    "c": 3,
    "e": "Evakuieren entfernt Luft und Feuchte vor der Befüllung."
  },
  {
    "topic": "Dichtheit/Vakuum",
    "difficulty": 4,
    "q": "Warum ersetzt Evakuieren keine Druckprüfung?",
    "a": [
      "Druckprüfung ist nur bei R290 nötig.",
      "Vakuum zeigt GWP an.",
      "Vakuum findet nicht alle Lecks sicher und prüft nicht mit Betriebsbelastung.",
      "Vakuum ist höher als Prüfdruck."
    ],
    "c": 2,
    "e": "Dichtheitsprüfung und Evakuieren haben unterschiedliche Aufgaben."
  },
  {
    "topic": "Dichtheit/Vakuum",
    "difficulty": 4,
    "q": "Was kann ein Druckanstieg in der Vakuum-Standzeit bedeuten?",
    "a": [
      "Richtige Füllmenge.",
      "Gute Unterkühlung.",
      "Undichtheit oder ausgasende Feuchtigkeit.",
      "Sichere Dichtheit."
    ],
    "c": 2,
    "e": "Druckanstieg im Vakuum muss bewertet werden."
  },
  {
    "topic": "Kältemittel/Umwelt",
    "difficulty": 3,
    "q": "Was beschreibt GWP?",
    "a": [
      "Prüfdruck.",
      "Ozonabbaupotenzial.",
      "Treibhauspotenzial im Vergleich zu CO₂.",
      "Ölanteil."
    ],
    "c": 2,
    "e": "GWP beschreibt die Klimawirkung."
  },
  {
    "topic": "Kältemittel/Umwelt",
    "difficulty": 3,
    "q": "Was beschreibt ODP?",
    "a": [
      "Optimaler Druckwert.",
      "Dichte.",
      "Öldruckpunkt.",
      "Ozonabbaupotenzial."
    ],
    "c": 3,
    "e": "ODP beschreibt die Wirkung auf die Ozonschicht."
  },
  {
    "topic": "Kältemittel/Umwelt",
    "difficulty": 3,
    "q": "Welche Aussage zu R290 ist richtig?",
    "a": [
      "R290 ist Ammoniak.",
      "R290 ist CO₂.",
      "R290 ist Wasser.",
      "R290 ist Propan und brennbar."
    ],
    "c": 3,
    "e": "R290 ist Propan, daher brennbar."
  },
  {
    "topic": "Kältemittel/Umwelt",
    "difficulty": 3,
    "q": "Welche Aussage zu R744 ist richtig?",
    "a": [
      "R744 ist Propan.",
      "R744 ist Wasser.",
      "R744 ist Ammoniak.",
      "R744 ist CO₂ und arbeitet mit hohen Drücken."
    ],
    "c": 3,
    "e": "CO₂-Anlagen erfordern druckfeste Bauteile."
  },
  {
    "topic": "Kältemittel/Umwelt",
    "difficulty": 3,
    "q": "Welche Aussage zu R717 ist richtig?",
    "a": [
      "R717 ist Wasser.",
      "R717 ist CO₂.",
      "R717 ist Ammoniak.",
      "R717 ist Propan."
    ],
    "c": 2,
    "e": "R717 steht für Ammoniak."
  },
  {
    "topic": "Kältemittel/Umwelt",
    "difficulty": 4,
    "q": "Warum muss Kältemittel sortenrein zurückgewonnen werden?",
    "a": [
      "Für fachgerechte Wiederaufbereitung oder Entsorgung.",
      "Damit der GWP automatisch sinkt.",
      "Damit es unbrennbar wird.",
      "Damit der Hochdruck sinkt."
    ],
    "c": 0,
    "e": "Gemischte Kältemittel sind schwer verwertbar."
  },
  {
    "topic": "Hartlöten/Rohr",
    "difficulty": 3,
    "q": "Warum wird beim Hartlöten mit Stickstoff gespült?",
    "a": [
      "Oxidation und Zunder im Rohrinneren vermeiden.",
      "Druck erhöhen.",
      "Lot kühlen.",
      "Öl verdampfen."
    ],
    "c": 0,
    "e": "Stickstoff verdrängt Sauerstoff."
  },
  {
    "topic": "Hartlöten/Rohr",
    "difficulty": 4,
    "q": "Warum wird das Grundmaterial erwärmt und nicht nur das Lot?",
    "a": [
      "Das Lot darf nie warm werden.",
      "Stickstoff muss schmelzen.",
      "Kupfer muss magnetisch werden.",
      "Das Lot soll durch Werkstücktemperatur kapillar fließen."
    ],
    "c": 3,
    "e": "Das Werkstück muss Arbeitstemperatur erreichen."
  },
  {
    "topic": "Hartlöten/Rohr",
    "difficulty": 4,
    "q": "Was kann ein zu großer Lötspalt verursachen?",
    "a": [
      "Schlechte Kapillarwirkung und unsichere Verbindung.",
      "Automatisch höhere Druckfestigkeit.",
      "Bessere Unterkühlung.",
      "Niedrigen GWP."
    ],
    "c": 0,
    "e": "Kapillarwirkung braucht passenden Spalt."
  },
  {
    "topic": "Hartlöten/Rohr",
    "difficulty": 3,
    "q": "Warum muss ein Rohr entgratet werden?",
    "a": [
      "Es senkt GWP.",
      "Es ersetzt Dichtheitsprüfung.",
      "Späne und Grate können Bauteile beschädigen.",
      "Es erhöht Schutzklasse."
    ],
    "c": 2,
    "e": "Saubere Rohrenden verhindern Probleme im Kältekreis."
  },
  {
    "topic": "Hartlöten/Rohr",
    "difficulty": 4,
    "q": "Was kann ein geknicktes Rohr verursachen?",
    "a": [
      "Druckverlust und geringeren Massenstrom.",
      "Niedrigeren Fehlerstrom.",
      "Höheren COP immer.",
      "Bessere Unterkühlung."
    ],
    "c": 0,
    "e": "Knicke verengen den Querschnitt."
  },
  {
    "topic": "Hartlöten/Rohr",
    "difficulty": 3,
    "q": "Wofür wird die gestreckte Rohrlänge benötigt?",
    "a": [
      "Zum Trocknen von Kältemittel.",
      "Zum Messen des GWP.",
      "Zum Einstellen des RCD.",
      "Zum Bestimmen der Rohrlänge vor dem Biegen."
    ],
    "c": 3,
    "e": "Vor dem Biegen muss die benötigte Ausgangslänge bekannt sein."
  },
  {
    "topic": "Elektrotechnik",
    "difficulty": 3,
    "q": "Welche Formel ist das Ohmsche Gesetz?",
    "a": [
      "I = R · U",
      "U = R · I",
      "R = P · U",
      "P = U · I"
    ],
    "c": 1,
    "e": "Ohmsches Gesetz: U = R · I."
  },
  {
    "topic": "Elektrotechnik",
    "difficulty": 3,
    "q": "Welche Formel beschreibt elektrische Leistung?",
    "a": [
      "P = U · I",
      "P = R / U",
      "P = U / I",
      "P = I / U"
    ],
    "c": 0,
    "e": "Leistung ist Spannung mal Strom."
  },
  {
    "topic": "Elektrotechnik",
    "difficulty": 4,
    "q": "230 V und 5 A bei cos φ = 1 ergeben welche Leistung?",
    "a": [
      "5000 W",
      "235 W",
      "46 W",
      "1150 W"
    ],
    "c": 3,
    "e": "P = 230 · 5 = 1150 W."
  },
  {
    "topic": "Elektrotechnik",
    "difficulty": 3,
    "q": "Was ist in einer Reihenschaltung gleich?",
    "a": [
      "Der Widerstand.",
      "Die Spannung.",
      "Der Strom.",
      "Die Leistung."
    ],
    "c": 2,
    "e": "In Reihe fließt überall derselbe Strom."
  },
  {
    "topic": "Elektrotechnik",
    "difficulty": 3,
    "q": "Was ist in einer Parallelschaltung gleich?",
    "a": [
      "Der Widerstand.",
      "Die Spannung.",
      "Der Strom.",
      "Die Leistung."
    ],
    "c": 1,
    "e": "Parallel liegt dieselbe Spannung an."
  },
  {
    "topic": "Elektrotechnik",
    "difficulty": 4,
    "q": "Was zeigt ein Strom-Zeit-Diagramm eines Motors gut?",
    "a": [
      "Anlaufstrom und Betriebsstrom.",
      "GWP.",
      "Luftfeuchte.",
      "Unterkühlung."
    ],
    "c": 0,
    "e": "Motoren haben oft einen erhöhten Anlaufstrom."
  },
  {
    "topic": "Schutz/MSR",
    "difficulty": 3,
    "q": "Was vergleicht ein RCD?",
    "a": [
      "Hoch- und Niederdruck.",
      "Hin- und zurückfließenden Strom.",
      "Überhitzung und Unterkühlung.",
      "GWP und ODP."
    ],
    "c": 1,
    "e": "Ein RCD löst bei Differenzstrom aus."
  },
  {
    "topic": "Schutz/MSR",
    "difficulty": 4,
    "q": "Schützt ein RCD vor Motorüberlast?",
    "a": [
      "Nein, dafür sind Sicherung oder Motorschutz zuständig.",
      "Nur im Pump-Down.",
      "Ja, immer.",
      "Nur bei R744."
    ],
    "c": 0,
    "e": "RCD schützt vor Fehlerstrom, nicht vor Überlast."
  },
  {
    "topic": "Schutz/MSR",
    "difficulty": 3,
    "q": "Was bedeutet Schutzklasse II?",
    "a": [
      "Doppelte oder verstärkte Isolierung.",
      "Schutzkleinspannung.",
      "Hochdruckschutz.",
      "Schutzleiteranschluss."
    ],
    "c": 0,
    "e": "Schutzklasse II ist schutzisoliert."
  },
  {
    "topic": "Schutz/MSR",
    "difficulty": 3,
    "q": "Wofür steht MSR?",
    "a": [
      "Masse, Spannung, Rohr.",
      "Messen, Steuern, Regeln.",
      "Manometer, Schütz, Relais.",
      "Motor, Sammler, Rückschlagventil."
    ],
    "c": 1,
    "e": "MSR bedeutet Messen, Steuern, Regeln."
  },
  {
    "topic": "Schutz/MSR",
    "difficulty": 4,
    "q": "Was ist ein geschlossener Regelkreis?",
    "a": [
      "Istwert wird gemessen und mit Sollwert verglichen.",
      "Verdichter läuft ohne Rückmeldung.",
      "Manometer zeigt nur Druck.",
      "Sicherung schaltet nur Kurzschluss."
    ],
    "c": 0,
    "e": "Regeln benötigt Rückmeldung."
  },
  {
    "topic": "Abtauung/Kühlzelle",
    "difficulty": 3,
    "q": "Warum muss ein Verdampfer abgetaut werden?",
    "a": [
      "Eis verhindert Mangel.",
      "Eis behindert Wärmeübertragung und Luftstrom.",
      "Eis ersetzt Unterkühlung.",
      "Eis erhöht COP immer."
    ],
    "c": 1,
    "e": "Eis isoliert und blockiert Luft."
  },
  {
    "topic": "Abtauung/Kühlzelle",
    "difficulty": 4,
    "q": "Warum ist Abtauendtemperatur sinnvoll?",
    "a": [
      "Sie beendet Abtauung bei ausreichend eisfreiem Verdampfer.",
      "Sie ersetzt HD-Schalter.",
      "Sie erhöht GWP.",
      "Sie misst Fehlerstrom."
    ],
    "c": 0,
    "e": "Abtauung soll nicht unnötig lange laufen."
  },
  {
    "topic": "Abtauung/Kühlzelle",
    "difficulty": 3,
    "q": "Warum muss eine Kühlzellentür von innen zu öffnen sein?",
    "a": [
      "Damit eingeschlossene Personen herauskommen.",
      "Damit Kältemittel rein bleibt.",
      "Damit COP steigt.",
      "Damit Hochdruck sinkt."
    ],
    "c": 0,
    "e": "Das ist eine Sicherheitsanforderung."
  },
  {
    "topic": "Abtauung/Kühlzelle",
    "difficulty": 4,
    "q": "Was bewirkt eine defekte Türdichtung?",
    "a": [
      "Automatisch bessere Unterkühlung.",
      "RCD-Auslösetest.",
      "Warmluft- und Feuchteeintrag.",
      "Niedriger GWP."
    ],
    "c": 2,
    "e": "Feuchte und Wärme erhöhen Last und Eisbildung."
  },
  {
    "topic": "h-x/Wärmepumpe",
    "difficulty": 3,
    "q": "Wofür nutzt man das h-x-Diagramm?",
    "a": [
      "Zur Löttemperatur.",
      "Zur Füllmenge.",
      "Zur Beurteilung feuchter Luft.",
      "Zur Auswahl des RCD."
    ],
    "c": 2,
    "e": "Das h-x-Diagramm zeigt Luftzustände."
  },
  {
    "topic": "h-x/Wärmepumpe",
    "difficulty": 4,
    "q": "Was bedeutet x im h-x-Diagramm?",
    "a": [
      "Absoluter Wassergehalt der Luft.",
      "Druckverlust.",
      "Kältemittelstrom.",
      "Blindstrom."
    ],
    "c": 0,
    "e": "x beschreibt den Wassergehalt."
  },
  {
    "topic": "h-x/Wärmepumpe",
    "difficulty": 4,
    "q": "Was passiert unter dem Taupunkt?",
    "a": [
      "Wasserdampf kondensiert.",
      "Kältemittel wird fest.",
      "RCD löst aus.",
      "Relative Feuchte wird 0 %."
    ],
    "c": 0,
    "e": "Unter dem Taupunkt fällt Kondensat aus."
  },
  {
    "topic": "h-x/Wärmepumpe",
    "difficulty": 3,
    "q": "Was beschreibt COP?",
    "a": [
      "Wärmeleistung geteilt durch elektrische Leistung.",
      "GWP geteilt durch ODP.",
      "Druck geteilt durch Strom.",
      "Masse pro Rohrmeter."
    ],
    "c": 0,
    "e": "COP beschreibt Effizienz einer Wärmepumpe."
  },
  {
    "topic": "h-x/Wärmepumpe",
    "difficulty": 4,
    "q": "Warum sinkt COP bei niedriger Außentemperatur oft?",
    "a": [
      "Kupfer wird isolierend.",
      "Der Temperaturhub wird größer.",
      "Kältemittel verliert Siedepunkt.",
      "RCD misst weniger."
    ],
    "c": 1,
    "e": "Größerer Temperaturhub erfordert mehr Verdichterarbeit."
  },
  {
    "topic": "Fehlersuche",
    "difficulty": 4,
    "q": "Niedriger Saugdruck, hohe Überhitzung, Blasen im Schauglas: Was passt?",
    "a": [
      "Zu hoher GWP.",
      "Defekter RCD.",
      "Überfluteter Verdampfer.",
      "Mangel oder Unterversorgung."
    ],
    "c": 3,
    "e": "Die Kombination passt zu Mangel oder Drosselstelle."
  },
  {
    "topic": "Fehlersuche",
    "difficulty": 4,
    "q": "Hochdruck steigt, Verflüssigerlüfter läuft nicht. Was prüfst du zuerst?",
    "a": [
      "GWP.",
      "Türdichtung.",
      "Bördelmaß.",
      "Lüfter, Spannung und Ansteuerung."
    ],
    "c": 3,
    "e": "Ohne Lüfter wird Wärme nicht abgeführt."
  },
  {
    "topic": "Fehlersuche",
    "difficulty": 4,
    "q": "RCD löst nur bei Abtauung aus. Was ist plausibel?",
    "a": [
      "Feuchte oder defekte Abtauheizung.",
      "Zu niedriger Hochdruck.",
      "Kältemittelmangel.",
      "Zu hohe Unterkühlung."
    ],
    "c": 0,
    "e": "RCD-Auslösung deutet auf Fehlerstrom."
  },
  {
    "topic": "Fehlersuche",
    "difficulty": 4,
    "q": "Verdampfer vereist und Luftmenge ist gering. Was passt?",
    "a": [
      "Hohe Schutzklasse.",
      "Zu viel Kapillarwirkung.",
      "Verschmutzter Verdampfer oder defekter Lüfter.",
      "Niedriger GWP."
    ],
    "c": 2,
    "e": "Schlechter Luftstrom begünstigt Vereisung."
  },
  {
    "topic": "Fehlersuche",
    "difficulty": 4,
    "q": "Motorschutz löst nach kurzer Laufzeit aus. Was prüfst du?",
    "a": [
      "Nur h-x-Diagramm.",
      "Nur Türdichtung.",
      "Stromaufnahme, Phasen, Spannung und Einstellung.",
      "Nur Kältemittel nachfüllen."
    ],
    "c": 2,
    "e": "Motorschutz-Auslösung verlangt elektrische Prüfung."
  },
  {
    "topic": "Rechnen",
    "difficulty": 3,
    "q": "1 m³ entspricht wie vielen Litern?",
    "a": [
      "10 l",
      "1000 l",
      "100 l",
      "1 l"
    ],
    "c": 1,
    "e": "1 m³ = 1000 l."
  },
  {
    "topic": "Rechnen",
    "difficulty": 3,
    "q": "Wie viele Sekunden hat eine Stunde?",
    "a": [
      "3600 s",
      "60 s",
      "1000 s",
      "600 s"
    ],
    "c": 0,
    "e": "60 · 60 = 3600."
  },
  {
    "topic": "Rechnen",
    "difficulty": 4,
    "q": "Welche Formel beschreibt Dichte?",
    "a": [
      "ρ = U · I",
      "ρ = m / V",
      "ρ = R / A",
      "ρ = p · V"
    ],
    "c": 1,
    "e": "Dichte ist Masse pro Volumen."
  },
  {
    "topic": "Rechnen",
    "difficulty": 4,
    "q": "Welche Formel beschreibt Strömungsgeschwindigkeit?",
    "a": [
      "v = p / F",
      "v = V̇ / A",
      "v = A / V̇",
      "v = U · I"
    ],
    "c": 1,
    "e": "Geschwindigkeit ist Volumenstrom durch Fläche."
  },
  {
    "topic": "Rechnen",
    "difficulty": 4,
    "q": "Welche Formel beschreibt Kreisfläche mit Durchmesser d?",
    "a": [
      "A = π · d² / 4",
      "A = d / π",
      "A = π · d / 4",
      "A = 2 · π · d"
    ],
    "c": 0,
    "e": "Kreisfläche über Durchmesser: π d² / 4."
  },
  {
    "topic": "Rechnen",
    "difficulty": 4,
    "q": "Wie berechnet man Widerstand aus Spannung und Strom?",
    "a": [
      "R = U / I",
      "R = I / U",
      "R = P · U",
      "R = U · I"
    ],
    "c": 0,
    "e": "Aus U = R · I folgt R = U / I."
  },
  {
    "topic": "Prüfungsfallen",
    "difficulty": 5,
    "q": "Welche Aussage zu Sicherheitsbauteilen ist gefährlich falsch?",
    "a": [
      "Messwerte sollen bewertet werden.",
      "Ursachen müssen behoben werden.",
      "HD-Schalter darf zur Fehlersuche überbrückt weiterlaufen.",
      "HD-Schalter schützt vor zu hohem Druck."
    ],
    "c": 2,
    "e": "Sicherheitsbauteile dürfen nicht überbrückt betrieben werden."
  },
  {
    "topic": "Prüfungsfallen",
    "difficulty": 5,
    "q": "Welche Aussage zur Dichtheitsprüfung ist falsch?",
    "a": [
      "Stickstoff ist für Druckprüfung geeignet.",
      "Ein gutes Vakuum ersetzt die Druckprüfung vollständig.",
      "Druckluft bringt Feuchtigkeit ein.",
      "Druckabfall muss bewertet werden."
    ],
    "c": 1,
    "e": "Evakuieren ersetzt keine Dichtheitsprüfung."
  },
  {
    "topic": "Prüfungsfallen",
    "difficulty": 5,
    "q": "Welche Aussage zur Überhitzung ist gefährlich falsch?",
    "a": [
      "Überhitzung wird mit Sättigungstemperatur berechnet.",
      "Zu hohe Überhitzung kann Unterversorgung zeigen.",
      "Überhitzung schützt vor Flüssigkeit.",
      "Je niedriger die Überhitzung, desto sicherer ist der Verdichter immer geschützt."
    ],
    "c": 3,
    "e": "Zu niedrige Überhitzung kann Flüssigkeitsschlag begünstigen."
  },
  {
    "topic": "Prüfungsfallen",
    "difficulty": 5,
    "q": "Welche Aussage zu Druckluft ist falsch?",
    "a": [
      "Sauerstoff kann gefährlich sein.",
      "Stickstoff ist üblich.",
      "Druckluft enthält Feuchte.",
      "Druckluft ist genauso geeignet wie trockener Stickstoff."
    ],
    "c": 3,
    "e": "Druckluft ist für Kälteanlagen ungeeignet."
  },
  {
    "topic": "Prüfungsfallen",
    "difficulty": 5,
    "q": "Welche Aussage zu Kältemittel ist falsch?",
    "a": [
      "Kältemittel muss zurückgewonnen werden.",
      "Gemischtes Kältemittel darf problemlos abgelassen werden.",
      "Sortenreinheit ist wichtig.",
      "GWP beschreibt Klimawirkung."
    ],
    "c": 1,
    "e": "Kältemittel darf nicht absichtlich abgelassen werden."
  }
];