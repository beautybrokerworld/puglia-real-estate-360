# Puglia Real Estate 360

Sito bilingue per sei case vacanza in Salento. Astro + TypeScript, pagine statiche e una funzione Vercel per il modulo di contatto. Stile Mediterraneo editoriale approvato dal cliente.

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
npm test
```

`astro dev` mostra le pagine. L'endpoint `/api/contact` viene eseguito da Vercel: per provarlo insieme alle pagine usare `vercel dev`, con le variabili di ambiente configurate. L'anteprima statica locale non simula l'invio e non mostra conferme fittizie.

## Pagine

| Italiano | English |
|---|---|
| `/` | `/en/` |
| `/soluzioni/` | `/en/properties/` |
| `/privacy/` | `/en/privacy/` |

Il selettore lingua mantiene la pagina equivalente. Ogni scheda preseleziona l'immobile nel modulo. È supportato anche `?property=ID#contatti`, utile per i vecchi indirizzi.

## Aggiornare le case

Modificare `src/data/properties.ts`; i testi italiani e inglesi sono associati allo stesso identificativo. Le immagini sono in `public/images`. Le fonti originali sono documentate in `ASSET-SOURCES.json`; i file `.webp` sono le versioni ottimizzate delle foto reali del vecchio sito. I mockup generati non sono usati come fotografie degli immobili.

Non pubblicare prezzi, capienza, camere o distanze senza conferma. L'associazione fra URL Wix e nome italiano è conservata nel file dati; gli URL inglesi di Wix avevano contenuti diversi e non sono stati automaticamente associati alle stesse case.

## Invio email su Vercel

1. Collegare il repository GitHub a un progetto Vercel.
2. Usare preset Astro, `npm run build`, directory `dist`, Node 24.
3. Verificare un dominio mittente su Resend.
4. Impostare queste variabili nei contesti appropriati:

| Variabile | Valore |
|---|---|
| `RESEND_API_KEY` | Chiave del servizio, solo server |
| `CONTACT_FROM` | Mittente verificato, ad esempio `Puglia Real Estate 360 <sito@DOMINIO-VERIFICATO>` |
| `CONTACT_TO` | `pugliarealestate360@gmail.com` |
| `SITE_URL` | Origine del sito, senza percorso; in produzione `https://www.pugliarealestate360.com` |
| `PUBLIC_INDEXABLE` | `false` nelle anteprime; `true` solo sul dominio finale approvato |

`SITE_URL` determina canonical, hreflang, sitemap e controllo dell'origine del modulo. Nelle anteprime impostarlo all'URL dell'ambiente che si sta verificando. L'endpoint è same-origin e non espone la chiave al browser.

La funzione valida origine, formato, dimensione del corpo anche in streaming, campi, immobile e lettura privacy; rifiuta il campo honeypot compilato. Gli invii identici entro una finestra di dieci minuti usano una chiave di idempotenza. Il destinatario è deciso sul server, la risposta all'ospite usa `reply_to`. Una risposta positiva richiede un ID email restituito da Resend. Non vengono registrati messaggi o recapiti nei log dell'applicazione.

Il controllo origine e l'honeypot sono protezioni di base, non sostituiscono un limite distribuito di frequenza. Prima dell'esposizione pubblica configurare una regola sul firewall Vercel per `/api/contact` oppure un controllo antispam server verificato. Nessuna dipendenza da memoria locale della funzione per contatori persistenti.

Provare l'invio reale e la ricezione prima del lancio. I test automatici usano un provider simulato e non spediscono email.

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
