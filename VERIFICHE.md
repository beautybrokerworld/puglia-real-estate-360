GATE: OFF (no build active)

## Dati dell’attività nei footer — 17 novembre 2026

- Su richiesta del cliente, il footer condiviso IT/EN riporta i dati dell’intermediaria presenti nel documento fornito in chat: Federica Arsieni, Via Balsamo 9B, 73100 Lecce, P. IVA 05396800756 e REA LE363839, associati al marchio Puglia Real Estate 360. Il vecchio indirizzo è stato sostituito anche nel blocco contatti.
- I dati sono centralizzati in `src/data/business.ts`; il documento integrale, il codice fiscale personale e i dati del venditore non sono stati aggiunti al progetto. L’indirizzo viene riportato senza attribuirgli qualifiche non indicate dal cliente.
- I dati dell’attività e la riga con copyright, privacy e firma sviluppatore restano al fondo della pagina. Le nuove informazioni si dispongono su righe separate sui telefoni.
- Build riuscita: 18 pagine. Verificata la presenza dei nuovi dati in tutti i file HTML generati e l’assenza del vecchio indirizzo. Controllati visivamente il footer italiano a 1440×900 e quello inglese a 390×844; dati leggibili e crediti al fondo della pagina. `git diff --check` senza rilievi. Il gate integrale resta OFF; i dati reali del cliente prevalgono sulle convenzioni per recapiti dimostrativi della skill.

## Completamento Aria Sana dalla pagina corretta — 17 novembre 2026

- Fonte indicata dal cliente: `https://www.pugliarealestate360.com/la-terrazza-di-otranto`. Verificati l'HTML italiano e la corrispondenza della pergola, del corridoio giallo, della cucina e della zona pranzo con lo screenshot. Il vecchio set “Maestrale” non è stato usato.
- Il carosello contiene 20 posizioni con 17 file diversi. Mantenuta la copertina già confermata e importate le altre 16 fotografie, tutte locali in WebP con varianti responsive. Aria Sana ora ha una galleria unica di 16 immagini oltre alla copertina; totale del catalogo: 75 foto.
- Rimossa la descrizione provvisoria che parlava di una sola immagine. La nuova scheda IT/EN riporta i dati del testo italiano: tre camere, due bagni, 120 m² esterni, cucina con camino, zona pranzo, terrazzo con verde, balcone, lavanderia e parcheggio gratuito in zona. Il contenuto inglese del vecchio Wix reindirizza a dati non corrispondenti e non è stato usato come fonte della descrizione.
- `PROPERTY-SOURCES.json` e `ASSET-SOURCES.json` registrano il nuovo URL e i singoli file. Le etichette alternative IT/EN sono state scritte dopo la revisione visiva delle 17 foto.
- Build riuscita: 18 pagine. Controllati l'HTML delle dodici schede, tutti i file e le varianti responsive: 150 riferimenti fotografici complessivi nelle due lingue, nessuna immagine mancante. Screenshot Aria Sana verificati a 1440×900 e 390×844: presentazione e galleria si caricano con le immagini corrette. `git diff --check` senza rilievi. Il gate integrale resta OFF.

## Gallerie unificate e copertine delle strutture — 17 novembre 2026

- Le fotografie di ogni casa sono raccolte in una sola griglia «Foto della struttura», senza la seconda sezione «Altri scorci della proprietà» e senza cambio di sfondo. La galleria cresce con il numero di immagini; la copertina è mostrata nella presentazione della casa e non ripetuta nella griglia.
- Copertine scelte dopo la revisione dei provini e delle fotografie originali: giardino per Lecce; camera con balcone per Otranto sul mare; piscina per Galugnano; unica pergola confermata per Aria Sana; sala con volte in pietra per Tramontana; terrazza vista mare per La Terrazza. La stessa selezione alimenta catalogo, pagina di dettaglio e immagine di condivisione della struttura. Il file orizzontale di La Terrazza ha una cornice proporzionata anche nel dettaglio.
- Ogni immagine conserva la descrizione IT/EN associata al proprio file, indipendentemente dalla scelta della copertina. Per Aria Sana resta escluso il set non confermato con vista mare.
- Build riuscita: 18 pagine. Controllo dell'HTML di tutte le dodici schede: 118 riferimenti fotografici, corrispondenti alle 59 foto in ciascuna lingua, nessun file perso; una sola galleria quando esistono foto oltre la copertina. `git diff --check` senza rilievi.
- Controllati visivamente su desktop il catalogo con tutte le sei copertine, la presentazione della villetta di Lecce e l'intera galleria continua. Il gate integrale resta OFF: queste sono verifiche mirate, non un nuovo PASS completo della skill.

## Catalogo subito visibile e crediti a fondo pagina — 17 novembre 2026

- Rimosso dal catalogo IT/EN il blocco di copertina, inclusi fotografia e pulsante «Scopri le case». La pagina apre con un'introduzione compatta e le fotografie delle strutture già nel primo viewport. Le prime tre immagini sono caricate subito; i titoli delle schede sono H2 sotto l'H1 della pagina.
- Nella chiusura condivisa, il testo e il modulo sono centrati nell'area disponibile; copyright, Privacy e firma Aldosimone occupano una riga separata in fondo, con 12 px di margine dal bordo della pagina. Su telefono il contenuto segue l'altezza naturale del modulo e dei crediti impilati.
- Build di produzione riuscita: 18 pagine. `git diff --check` senza rilievi. Screenshot desktop del catalogo e della chiusura controllati visivamente a 1440×900. Il gate integrale resta OFF; non si dichiara un nuovo PASS della skill.

## Centratura homepage e nuova copertina — 17 novembre 2026

- «Una casa, il tuo Salento» e «I nostri servizi» centrano verticalmente l'intero contenuto nello spazio sotto la navigazione. Le altezze interne del primo blocco seguono ora testo e fotografia, anziché occupare artificialmente tutta la sezione.
- Rimossa la fotografia dai servizi. Titolo, griglia e pulsante sono raccolti al centro; il testo delle singole voci conserva l'allineamento a sinistra per la leggibilità.
- La nuova copertina è la foto reale del mare e delle barche nel porto di Otranto, dalla galleria La Terrazza. Un componente condiviso la applica alla home e al catalogo IT/EN. Il ritaglio CSS è adattato alla copertina, mantenendo i file WebP responsive esistenti.
- Build Astro riuscita, 18 pagine. `git diff --check` senza rilievi. Screenshot della homepage su schermo grande (2112×1170) e telefono (390×844) controllati visivamente: copertina caricata, contenuti delle due sezioni al centro su desktop, fotografia assente nei servizi, colonne impilate e contenuto leggibile sul telefono. Il gate integrale resta OFF, come descritto sopra.

## Servizi, immagine soggiorno e contatti — 17 novembre 2026

- Aggiunti alla homepage i quattro servizi dello screenshot, in italiano e inglese: valutazione senza impegno, progetti di ristrutturazione, gestione B&B/case vacanza/masserie, facility management per hotel. La navigazione ora include il collegamento alla sezione servizi. Il link a Vacation Apulia Properties riprende quello dello screenshot; il pulsante di richiesta servizi apre un'email, senza inviarla automaticamente.
- Nella sezione «Il soggiorno comincia da qui» la camera è stata sostituita con la fotografia reale del mare di Otranto con il veliero in miniatura. Fotografia e colonna di testo condividono il bordo superiore e inferiore; nessuno zoom fuori dalle pagine struttura.
- La sezione contatti condivisa centra verticalmente il gruppo testo/modulo/crediti nel viewport disponibile. Il footer segue il modulo con uno spazio definito, senza essere spinto in fondo da `space-between`. Sul telefono il contenuto cresce in modo naturale.
- Anche il catalogo unico cresce con le sue righe, senza imporre due viewport e lasciare spazio inutilizzato sotto le schede.
- Build di produzione riuscita: 18 pagine. Copy-lint delle homepage italiana e inglese: zero FAIL e zero WARN. `git diff --check` senza rilievi.
- Eseguito il layout checker della skill su home e catalogo a 1440×900, 1024×768, 768×1024 e 390×844. Le segnalazioni sul ritmo «una o due schermate esatte», sul contenuto centrato e sulla presenza della sezione successiva sono incompatibili con le modifiche espressamente richieste dal cliente: elenco continuo e contatti raccolti. Si mantengono quindi le altezze naturali. Il layout fotografico dei servizi, con immagine a sinistra e testo a destra, genera anche il rilievo `one-sided`; è una composizione intenzionale, non contenuto fuori dal contenitore. Gli allineamenti interni segnalati nella prima esecuzione sono stati successivamente ricondotti alle colonne della griglia.
- Controllati visivamente gli screenshot desktop e telefono del blocco soggiorno e del modulo; le foto si caricano, la colonna immagine si allinea al testo e i crediti rimangono vicini al modulo. Nessun invio reale del form è stato eseguito.
- Il gate integrale resta OFF dopo la precedente chiusura; non viene presentato un nuovo PASS. Le verifiche qui descritte sono controlli mirati della revisione, non una nuova certificazione di tutte le schede immobiliari.

## Aggiornamento schede immobili — 17 novembre 2026

- La build Astro aggiornata produce 18 pagine statiche, incluse le dodici schede in italiano e inglese.
- Sono state aggiunte 59 fotografie locali alle sei gallerie: 14, 13, 16, 1 copertina, 9 e 6. Le immagini sono ottimizzate in WebP con varianti larghe 700 e 1200 pixel; non dipendono dal CDN Wix.
- La proprietà Aria Sana mostra solo la copertina: la galleria Wix “Maestrale” contiene foto con vista mare e non è stata attribuita alla villetta a Lecce.
- La build è riuscita dopo l'aggiunta delle schede. Non è stata ancora eseguita una revisione visiva completa delle dodici nuove pagine; il precedente `GATE: PASS` resta riferito alla homepage.
- Le descrizioni IT/EN non aggiungono tariffe, capienze o distanze non confermate. I dettagli della prima villetta provengono dallo screenshot della scheda fornito dal cliente.

L'ultimo gate completo della homepage è terminato con **GATE: PASS**, senza FAIL aperti e con una deroga motivata per il telefono reale. Il kit ha chiuso il build attivo dopo il PASS; il successivo richiamo ha restituito OFF. Come richiesto dalla skill, non è stato riavviato. Dopo il PASS sono stati completati ritocchi ai bersagli touch, spaziatura del catalogo, frecce dei link e immagini responsive, verificati con i controlli mirati descritti sotto. Non si presenta il PASS precedente come verifica integrale dell'ultima revisione.

## Risultato della prima implementazione

- Build Astro di produzione riuscita: sei pagine statiche, quattro principali più due privacy.
- Nove test del modulo superati; nessun messaggio reale inviato.
- Copy-lint delle quattro pagine principali: zero FAIL e zero WARN.
- Collegamenti interni e asset delle sei pagine verificati tramite lettura dell'HTML generato.
- Layout homepage verificato a 1440×900, 1024×768, 820×1180, 768×1024 e 390×844, senza rilievi nell'ultima esecuzione completa.
- Catalogo: desktop e tablet verificati alle stesse larghezze; allineamenti corretti. Dopo l'ultima riduzione delle immagini sulle schede, controllo a 390×844 senza rilievi.
- Catalogo inglese: controllo a 1440×900 e 390×844 senza rilievi.
- Screenshot completi della homepage alle cinque misure salvati e controllati; screenshot completo del catalogo a 1440. Il footer cresce sui telefoni per mantenere campi e testi leggibili.
- Gate homepage: controllo 1440/390 e overflow a 320 eseguito nel ciclo terminato con PASS. Non effettuata una seconda verifica integrale a 320 dopo i ritocchi finali.

## Prestazioni locali, ultima revisione

| Pagina | Desktop | Telefono | Errori / avvisi |
|---|---:|---:|---|
| Homepage | 601,9 KiB | 469,9 KiB | 0 FAIL, 0 WARN |
| Catalogo | 1134,4 KiB | 960,7 KiB | 0 FAIL, 0 WARN |

Layout shift misurato: 0,000. Nessuna richiesta rotta; nessun contesto WebGL. I tempi locali misurati su Chrome non sono un benchmark delle prestazioni reali sulla rete mobile o su Vercel.

## Deroga e avvisi del gate

Unica deroga: `phone-number`, limitata a `contact-details`. Il numero è quello fornito negli screenshot e pubblicato sul sito del cliente, non un contatto inventato.

Gli avvisi non bloccanti rilevati nel gate precedente sono conservati nel registro del progetto; lettura e valutazione:

- `scroll-reveal`: riguarda esclusivamente `picture-develops`, momento fotografico consentito dalla skill, non le schede.
- `copy-buttons`: riconoscimento dei verbi italiani «Guarda» e «Invia» non previsto nella lista inglese del checker; le etichette restano comprensibili e specifiche.
- `copy-actions`: due etichette che portano al catalogo e azioni diverse fra ricerca della casa e invio del modulo. Scelta legata al percorso richiesto.
- `links`, `nav-labels`: «Contatti» porta al modulo nel footer, introdotto dal titolo «Parliamo del tuo soggiorno»; destinazione corretta.
- `section-gaps`: variazioni di respiro fra immagine iniziale, presentazione e modulo.
- `nav`: inset interno dei controlli finali della barra.
- `nav-family`, `tap-size`: al termine del gate la lingua aveva dimensioni diverse dal menu; successivamente portata a 15px e bersaglio di 44px. Il ritocco non è stato ricontrollato con un gate integrale; è visibile nelle anteprime finali.

Nessun avviso di copy-lint mantenuto. Nessun FAIL prestazioni o layout lasciato aperto nelle esecuzioni finali riportate.

## Design e materiali

Kind `service`, site-kind `other`: servizio di selezione e assistenza per case vacanza. Palette avorio `#F5F1E8`, oliva `#626B51`, carbone `#282923`; Instrument Serif / Instrument Sans. Il mockup selezionato dal cliente determina la palette e la composizione, prevalendo sul sorteggio. Navigazione lineare, hero editoriale con fotografia sotto il titolo, footer con contatti e firma Aldosimone. Nessun effetto, shader, scena o loop. Un momento fotografico `picture-develops` per pagina principale.

Voce: diretta e ospitale; sei alloggi e località verificati, nessun prezzo, recensione, capienza o tempo di risposta inventato. Non è stato coniato un nuovo nome. Nessun fatto commerciale assunto.

Le gallerie attuali contengono 75 fotografie recuperate dal sito italiano del cliente, conservate localmente e ottimizzate in WebP responsive. L'importazione aggiuntiva di Aria Sana è descritta nell'aggiornamento più recente sopra. Nessuna fotografia dei mockup generati è pubblicata come immobile reale. I font sono locali. Non servono asset esterni per mostrare le case.

## Cosa resta da completare

1. Revisione visiva delle dodici schede di dettaglio su desktop e telefono.
2. Galleria Aria Sana completata: 17 foto della pagina italiana indicata dal cliente; non resta un'attesa di fotografie per questa scheda.
3. Importazione in Vercel e configurazione del servizio email: chiave Resend, mittente verificato, destinatario confermato e URL ambiente.
4. Prova di invio e ricezione reale; il successo dei test simulati non equivale a recapito verificato.
5. Informativa privacy completa da concordare con il titolare: la pagina descrittiva presente non è un testo legale completo approvato.
6. Verifica finale dati e diritti fotografici, protezione antispam in produzione, dominio, DNS e redirect inglesi da mappare separatamente.

Il cliente ha creato e popolato il repository privato GitHub `beautybrokerworld/puglia-real-estate-360`. Non sono stati pubblicati il sito, inviati messaggi, modificati DNS o disattivato Wix. La versione locale non dipende da Wix per funzionare.
