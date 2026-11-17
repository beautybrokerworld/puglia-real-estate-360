# Puglia Real Estate 360 — piano operativo

## Obiettivo concordato

Ricostruire il sito fuori da Wix, con lo stile «Mediterraneo editoriale» scelto dal cliente. Sito semplice per affitti vacanze: landing, pagina con sei soluzioni, modulo di richiesta, italiano e inglese. Nessun pagamento, prenotazione automatica, database o CMS nella prima versione.

## Architettura

- Astro + TypeScript, pagine statiche, CSS del progetto e componenti riutilizzabili.
- Hosting Vercel; repository GitHub di proprietà del cliente.
- `/`: landing italiana; `/soluzioni/`: sei immobili.
- `/en/`: landing inglese; `/en/properties/`: sei immobili.
- Schede di dettaglio bilingui: `/soluzioni/{id}/` e `/en/properties/{id}/`, una per alloggio.
- Pagine privacy nelle due lingue, da approvare prima del lancio.
- Dati immobili in `src/data/properties.ts`, traduzioni condivise nei componenti.
- Gallerie locali in `src/data/property-galleries.json`; fonti e trasformazioni documentate in `PROPERTY-SOURCES.json` e `ASSET-SOURCES.json`.
- Modulo a fine pagina con invio nativo a FormSubmit e conferma bilingue; nessuna funzione email o chiave API su Vercel.
- Footer: «Sviluppato da Aldosimone» / «Developed by Aldosimone», link `https://aldosimone99.github.io`.
- Destinatario richieste confermato: `pugliarealestate360@gmail.com`.

## Le sei soluzioni (fonte: screenshot e sito italiano)

1. Villetta indipendente, Lecce centro urbano, giardino.
2. Otranto sul mare, box auto.
3. Galugnano, villetta con piscina.
4. Villetta indipendente, Lecce zona Aria Sana.
5. Tramontana.
6. La Terrazza.

Non dedurre camere, ospiti, prezzi o distanze dalle vecchie schede: il sito Wix presenta incongruenze. Conservare solo dati verificati, fotografie associate nel catalogo italiano e riferimenti alle fonti. Nessun collegamento obbligatorio al vecchio Wix nel nuovo percorso.

## Fasi e criteri di completamento

### 1. Preparazione
- [x] Confermare il perimetro, stile e framework.
- [x] Creare questo piano e una cartella di progetto autonoma.
- [x] Confermare firma sviluppatore e destinatario email.
- [x] Archiviare dati, immagini originali e fonti del catalogo italiano.
- [x] Separare fotografie reali da mockup generati: le immagini dei mockup non diventano fotografie degli immobili.

### 2. Progetto e contenuti
- [x] Inizializzare Astro e TypeScript, script npm, lockfile e `.gitignore`.
- [x] Implementare componenti header, footer, modulo, hero e immobili.
- [x] Applicare avorio, oliva e carbone; titoli serif, testi sans serif; foto dominanti, margini coerenti, animazioni discrete.
- [x] Creare le quattro pagine principali e il cambio lingua equivalente pagina per pagina.
- [x] Inserire i sei immobili con azione che preseleziona la soluzione nel modulo.
- [x] Creare le dodici schede di dettaglio localizzate e collegarle dal catalogo.
- [x] Scrivere descrizioni in italiano e inglese senza aggiungere prezzi, capienze o distanze non verificati.
- [x] Importare e ottimizzare le gallerie per tutti i sei immobili; Aria Sana completata con le 17 fotografie della pagina italiana `/la-terrazza-di-otranto`, indicata dal cliente.
- [x] Rendere fotografie e font locali, evitando dipendenze dal CDN Wix al lancio.

### 3. Contatto
- [x] Campi nome, email, telefono facoltativo, immobile, messaggio; informativa privacy accessibile.
- [x] Errori sotto i campi e focus sul primo errore; conferma bilingue raggiunta dopo il ritorno da FormSubmit.
- [x] Collegare FormSubmit al destinatario confermato, con reCAPTCHA attivo e honeypot; rimuovere l'endpoint e la configurazione Resend.
- [ ] Configurare `SITE_URL` e `PUBLIC_INDEXABLE` su Vercel per l'ambiente corretto.
- [ ] Attivare FormSubmit dal link ricevuto su Gmail dopo il primo invio.
- [ ] Provare un secondo invio e verificare ricezione e risposta all'ospite prima del lancio.

### 4. Qualità
- [x] Build di produzione riuscita.
- [x] Build aggiornata con 18 pagine e dodici route di dettaglio.
- [ ] Controllo visivo delle nuove schede a desktop e telefono; il PASS del gate precedente riguarda la homepage, non queste pagine.
- [x] Test mirati della prima versione server, poi rimossi insieme all'endpoint dopo il passaggio a FormSubmit; non verificano il flusso attuale.
- [x] Build FormSubmit: 20 pagine, 16 moduli diretti e 48 verifiche del ritorno per lingua e origine. Nessun invio reale eseguito.
- [ ] Verifica collegamenti, traduzioni, preselezione immobile, menu e uso da tastiera.
- [x] Screenshot e controllo a 1440, 1024, 820, 768, 390; overflow a 320 nel gate della homepage (vedere limiti in VERIFICHE.md).
- [x] Verifiche della skill design-taste-frontend eseguite; stato, limiti e deroga riportati in `VERIFICHE.md`.
- [ ] Verificare testo privacy con il titolare: identità, conservazione, fornitori e diritti non vanno inventati.

### 5. GitHub e Vercel
- [x] Inizializzare Git e creare il primo commit dopo la verifica.
- [x] Creare il repository privato GitHub `beautybrokerworld/puglia-real-estate-360` e caricare il progetto (azione completata dal cliente).
- [ ] Importare il repository in Vercel (framework Astro, comando `npm run build`, output `dist`).
- [ ] Aggiungere le variabili d'ambiente e verificare l'anteprima pubblicata.
- [ ] Usare il piano Vercel adatto all'uso commerciale, verificandone le condizioni prima dell'attivazione.

### 6. Migrazione dominio
- [ ] Esportare la configurazione DNS esistente, inclusi record email.
- [ ] Approvare contenuti, dati immobili, immagini, privacy e contatti.
- [ ] Mappare gli URL effettivamente esistenti ai nuovi percorsi con redirect permanenti; non mandare pagine diverse a immobili non corrispondenti.
- [ ] Collegare il dominio a Vercel e verificare HTTPS, www, canonical e hreflang.
- [ ] Verificare sitemap e robots: anteprime non indicizzabili, produzione indicizzabile.
- [ ] Provare il modulo reale dopo il cambio dominio e controllare gli errori.
- [ ] Disattivare il piano Wix solo dopo il completamento del passaggio, mantenendo separata la gestione di dominio ed email.

## Decisioni di design rispetto alla skill

Kind: service, site-kind other. Servizio di selezione e assistenza per case vacanza in Salento.

Palette e caratteri derivano dal mockup approvato, che prevale sull'estrazione casuale: `#F5F1E8`, `#626B51`, `#282923`, Instrument Serif / Instrument Sans. Hero editoriale con titolo sopra la fotografia; nessun effetto WebGL. Interazione fotografica `picture-develops`, estratta dopo avere escluso le sequenze di capitoli incompatibili con il sito compatto richiesto. Firma sviluppatore espressamente richiesta.

Voce: concreta e ospitale, località e caratteristiche verificate; niente recensioni o prezzi inventati. Contatti reali autorizzati dagli screenshot e dalla conferma del cliente. Non applicare i recapiti `.example` del kit a questo progetto reale.

## Fonti

- Catalogo: https://www.pugliarealestate360.com/elenco-vacanze-otranto-appartamenti
- Astro su Vercel: https://docs.astro.build/en/guides/deploy/vercel/
- Vercel Functions: https://vercel.com/docs/functions
- FormSubmit: https://formsubmit.co/documentation

## Stato

Piano avviato il 17 novembre 2026. Le caselle verranno aggiornate sulla base delle verifiche realmente eseguite. Pubblicazione, invio email e passaggio DNS non vanno dichiarati completati senza riscontro.

## Aggiornamento di esecuzione

Aggiornamento modulo: il cliente ha scelto FormSubmit. Il modulo invia direttamente al servizio, con reCAPTCHA e honeypot, e torna alla conferma nella lingua selezionata. La funzione email Vercel è stata eliminata, insieme ai suoi test e alle variabili email. Restano da attivare la casella su FormSubmit e verificare un recapito reale. Le note successive sulla prima implementazione descrivono le verifiche storiche della versione precedente.

Prima implementazione completata: landing, catalogo, privacy in due lingue e modulo con 9 test server passati. La build corrente genera 18 pagine statiche, incluse le dodici schede immobiliari. Nessuna email reale inviata. La pagina privacy è una base da completare con il titolare. Il repository privato GitHub è stato creato e popolato dal cliente.

Verifiche aggiornate: copy-lint senza FAIL o WARN nelle quattro pagine principali; controllo della landing senza rilievi a 1440, 1024, 820, 768 e 390; catalogo inglese senza rilievi a 1440 e 390. Primo gate della homepage corretto fino a PASS, con una deroga per il numero telefonico reale fornito dal cliente. Il primo controllo prestazioni aveva segnalato immagini grandi sui telefoni; l’ottimizzazione responsive successiva ha risolto anche questo avviso.

Ottimizzazione finale: immagini responsive a 700/1050px per i blocchi esistenti e a 700/1200px per le gallerie. Homepage e catalogo hanno superato i controlli prestazioni precedenti su desktop e telefono. Riferimento completo: `VERIFICHE.md`.

Repository GitHub privato creato e popolato dal cliente su `beautybrokerworld/puglia-real-estate-360`; il checkout locale è collegato a `origin/main`. Nessun deploy Vercel o cambio DNS eseguito.

## Aggiornamento contenuti immobili

Richieste successive completate: copertina mare sulla home e sul catalogo; zoom limitato alle pagine struttura; catalogo in un'unica griglia continua; sezione servizi IT/EN recuperata dallo screenshot e link nel menu; nuova fotografia del mare allineata al testo del soggiorno; contatti e crediti raccolti e centrati verticalmente. Il catalogo e il footer usano altezze naturali per eliminare lo spazio vuoto richiesto dal cliente. Verifiche e limiti aggiornati in `VERIFICHE.md`.

Le sei schede del catalogo aprono pagine proprie in italiano e inglese. Sono presenti 75 fotografie locali: 14 per la villetta con giardino, 13 per Otranto sul mare, 16 per la villetta con piscina, 17 per Aria Sana, 9 per Tramontana e 6 per La Terrazza. Le immagini sono ottimizzate in WebP e non dipendono da Wix a runtime.

La prima associazione di Aria Sana alla pagina “Maestrale” era errata. Il cliente ha poi indicato `/la-terrazza-di-otranto`: il testo italiano e la galleria coincidono con la villetta e la pergola del catalogo. Importate tutte le 17 foto diverse, eliminando le ripetizioni del carosello. Descrizione IT/EN aggiornata con tre camere, due bagni, 120 m² esterni, camino, lavanderia e parcheggio in zona. La versione inglese del vecchio Wix presenta invece testo di un'altra struttura: non è stata usata per questi dati. Capacità, prezzi e distanze non confermati restano esclusi.

La build Astro aggiornata produce 18 pagine statiche. Le dodici nuove schede non hanno ancora ricevuto una revisione visiva completa su browser; il precedente PASS della skill rimane riferito alla homepage.
