# Puglia Real Estate 360

Sito bilingue per case vacanza in Salento. Astro + TypeScript, pagine statiche e modulo di contatto collegato a FormSubmit. Stile Mediterraneo editoriale approvato dal cliente.

## Avvio

```sh
nvm use
npm ci
npm run dev
```

Richiede Node 24. In questo ambiente di lavoro è disponibile anche Node 26; se `npm` richiama una vecchia versione di Node, correggere il PATH o usare `nvm use` prima di avviare gli script. Non è un problema di Astro né va risolto abbassando la versione del progetto.

```sh
npm run build
npm run preview
```

Il modulo invia direttamente a FormSubmit anche da `astro dev` o dall'anteprima statica servita via HTTP. Non serve una funzione Vercel locale. Un invio dal modulo è reale: per le verifiche automatiche non inviare dati al servizio.

## Pagine

| Italiano | English |
|---|---|
| `/` | `/en/` |
| `/soluzioni/` | `/en/properties/` |
| `/privacy/` | `/en/privacy/` |
| `/grazie/` | `/en/thank-you/` |

Il selettore lingua mantiene la pagina equivalente. Ogni scheda preseleziona l'immobile nel modulo. È supportato anche `?property=ID#contatti`, utile per i vecchi indirizzi.

Ogni soluzione ha una pagina di dettaglio in entrambe le lingue: `/soluzioni/{id}/` e `/en/properties/{id}/`.

## Aggiornare le case

Modificare `src/data/properties.ts`; le descrizioni e gli alt text sono bilingui e associati allo stesso identificativo. Le gallerie sono elencate in `src/data/property-galleries.json`; le foto locali si trovano in `public/images/properties/` e le fonti in `PROPERTY-SOURCES.json` e `ASSET-SOURCES.json`. Le immagini `.webp` sono ottimizzate e il sito non dipende dal CDN Wix.

Tutte le sei proprietà hanno una galleria locale associata alla relativa scheda: 75 fotografie complessive. Per Aria Sana sono state recuperate 17 immagini dalla pagina italiana `/la-terrazza-di-otranto`, indicata dal cliente; le immagini vista mare della pagina “Maestrale” restano escluse. La scheda Aria Sana riporta tre camere, due bagni e 120 m² esterni, verificati sul testo italiano originale. Prezzi, posti letto e distanze non vengono pubblicati senza conferma.

Non pubblicare prezzi, capienza, camere o distanze senza conferma. L'associazione fra URL Wix e nome italiano è conservata nel file dati; gli URL inglesi di Wix avevano contenuti diversi e non sono stati automaticamente associati alle stesse case.

## Invio email su Vercel

1. Collegare il repository GitHub a un progetto Vercel.
2. Usare preset Astro, `npm run build`, directory `dist`, Node 24.
3. Impostare queste variabili nei contesti appropriati:

| Variabile | Valore |
|---|---|
| `SITE_URL` | Origine del sito, senza percorso; in produzione `https://www.pugliarealestate360.com` |
| `PUBLIC_INDEXABLE` | `false` nelle anteprime; `true` solo sul dominio finale approvato |

`SITE_URL` determina canonical, hreflang e sitemap. Nelle anteprime impostarlo all'URL dell'ambiente che si sta verificando. Il ritorno dal modulo usa automaticamente il dominio aperto nel browser.

4. Dopo il deploy, inviare una prima richiesta di prova dal sito. FormSubmit manda un'email di attivazione a **pugliarealestate360@gmail.com**: aprire Gmail, controllare anche lo spam e confermare il link ricevuto.
5. Inviare una seconda richiesta e verificare che arrivi nella casella Gmail e che il pulsante Rispondi usi l'email dell'ospite. Ripetere la verifica sul dominio definitivo, completando l'eventuale attivazione richiesta dal servizio.

Il destinatario è impostato nell'attributo `action` di `src/components/Contact.astro`: `https://formsubmit.co/pugliarealestate360@gmail.com`. Non servono chiavi API, verifica di un dominio mittente o variabili email. Eventuali vecchie variabili `RESEND_API_KEY`, `CONTACT_FROM` e `CONTACT_TO` possono essere eliminate da Vercel.

Il browser controlla campi obbligatori, email, lunghezze e lettura privacy; il servizio esterno gestisce l'invio e l'antispam. reCAPTCHA resta attivo nella pagina di FormSubmit e il campo `_honey` aggiunge un honeypot. Il campo `email` abilita la risposta diretta all'ospite; `_subject` e `_template=table` impostano oggetto e presentazione dell'email. Non è configurata una risposta automatica all'ospite.

Dopo l'invio, FormSubmit riporta alla conferma nella lingua del modulo (`/grazie/` oppure `/en/thank-you/`), senza conferme simulate in JavaScript. Senza JavaScript, il modulo mantiene l'invio nativo e usa la pagina di conferma di FormSubmit. Le due conferme del sito sono sempre `noindex`. Le schermate di attivazione, reCAPTCHA ed errore restano gestite dal servizio.

L'endpoint Resend e i relativi test server sono stati rimossi perché non fanno più parte del flusso. Verificare il recapito reale dopo l'attivazione: la build e le verifiche locali non dimostrano la consegna su Gmail.

Documentazione ufficiale: [configurazione e funzionalità di FormSubmit](https://formsubmit.co/documentation), [attivazione iniziale](https://formsubmit.co/), [privacy del servizio](https://formsubmit.co/privacy.pdf).

## Prima del dominio definitivo

- Verificare tutti i dati delle sei soluzioni e i diritti d'uso delle fotografie.
- Approvare l'informativa privacy completa: la pagina presente è una base descrittiva, non un testo legale completo. Mancano dati del titolare, tempi di conservazione e dettagli da concordare sui fornitori e sui diritti.
- Controllare gli URL da reindirizzare in `vercel.json`, inclusi quelli inglesi da verificare separatamente.
- Collegare il dominio e preservare gli eventuali record della posta.
- Attivare `PUBLIC_INDEXABLE=true` soltanto in produzione.
- Disattivare Wix soltanto dopo aver verificato pagine, HTTPS e recapito delle richieste.

## Proprietà e firma

Footer richiesto: **Sviluppato da Aldosimone**, collegato a https://aldosimone99.github.io. Progetto autonomo, senza dipendenze operative da Wix.

Il piano completo e il registro delle verifiche si trovano nei file `PROJECT-PLAN.md` e `VERIFICHE.md`.
