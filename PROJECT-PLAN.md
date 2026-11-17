# Puglia Real Estate 360 — piano operativo

## Obiettivo concordato

Ricostruire il sito fuori da Wix, con lo stile «Mediterraneo editoriale» scelto dal cliente. Sito semplice per affitti vacanze: landing, pagina con sei soluzioni, modulo di richiesta, italiano e inglese. Nessun pagamento, prenotazione automatica, database o CMS nella prima versione.

## Architettura

- Astro + TypeScript, pagine statiche, CSS del progetto e componenti riutilizzabili.
- Hosting Vercel; repository GitHub di proprietà del cliente.
- `/`: landing italiana; `/soluzioni/`: sei immobili.
- `/en/`: landing inglese; `/en/properties/`: sei immobili.
- Pagine privacy nelle due lingue, da approvare prima del lancio.
- Dati immobili in `src/data/properties.ts`, traduzioni condivise nei componenti.
- Modulo a fine pagina con funzione Vercel `/api/contact`, provider email Resend configurabile con variabili d'ambiente.
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
- [x] Rendere fotografie e font locali, evitando dipendenze dal CDN Wix al lancio.

### 3. Contatto
- [x] Campi nome, email, telefono facoltativo, immobile, messaggio; informativa privacy accessibile.
- [x] Errori sotto i campi, focus sul primo errore, stato invio e conferma soltanto dopo risposta positiva del servizio.
- [x] Validazione server, limiti lunghezza e dimensione richiesta, controllo origine e honeypot.
- [ ] Configurare `RESEND_API_KEY`, `CONTACT_FROM`, `CONTACT_TO`, `SITE_URL` su Vercel (mai nel repository).
- [ ] Verificare il mittente nel servizio email e provare un invio reale al destinatario autorizzato prima del lancio.
- [ ] Valutare la protezione antispam aggiuntiva sulla base dei log prima di esporre il modulo pubblico.

### 4. Qualità
- [x] Build di produzione riuscita.
- [x] Test mirati del server: dati validi, errori, honeypot, provider non configurato, fallimento provider.
- [ ] Verifica collegamenti, traduzioni, preselezione immobile, menu e uso da tastiera.
- [x] Screenshot e controllo a 1440, 1024, 820, 768, 390; overflow a 320 nel gate della homepage (vedere limiti in VERIFICHE.md).
- [x] Verifiche della skill design-taste-frontend eseguite; stato, limiti e deroga riportati in `VERIFICHE.md`.
- [ ] Verificare testo privacy con il titolare: identità, conservazione, fornitori e diritti non vanno inventati.

### 5. GitHub e Vercel
- [ ] Inizializzare Git e creare il primo commit dopo la verifica.
- [ ] Creare il repository GitHub e caricare il progetto quando l'accesso è disponibile.
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
- Resend: https://resend.com/docs/api-reference/emails/send-email

## Stato

Piano avviato il 17 novembre 2026. Le caselle verranno aggiornate sulla base delle verifiche realmente eseguite. Pubblicazione, invio email e passaggio DNS non vanno dichiarati completati senza riscontro.

## Aggiornamento di esecuzione

Prima implementazione completata: 6 pagine statiche, 8 fotografie reali locali anche in WebP, font locali, modulo con 9 test server passati, collegamenti e asset interni verificati. Nessuna email reale inviata. La pagina privacy è una base da completare con il titolare. Il browser Safari risulta collegato a GitHub come `beautybrokerworld`: scelta dell’account richiesta prima di creare il repository remoto.

Verifiche aggiornate: copy-lint senza FAIL o WARN nelle quattro pagine principali; controllo della landing senza rilievi a 1440, 1024, 820, 768 e 390; catalogo inglese senza rilievi a 1440 e 390. Primo gate della homepage corretto fino a PASS, con una deroga per il numero telefonico reale fornito dal cliente. Il controllo prestazioni della homepage non rileva FAIL, segnala soltanto immagini più grandi del necessario sui telefoni.

Ottimizzazione finale: immagini responsive a 700/1050px. Homepage e catalogo superano il controllo prestazioni sia desktop sia mobile senza FAIL o WARN. Riferimento completo: `VERIFICHE.md`.
