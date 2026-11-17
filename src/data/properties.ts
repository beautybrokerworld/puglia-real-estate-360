import galleryAssets from './property-galleries.json';

export type Lang = 'it' | 'en';
type Localized = Record<Lang, string>;
type Photo = { src: string; srcset: string; width: number; height: number };

const copy = [
  {
    id: 'lecce-giardino', place: 'Lecce', title: { it: 'Villetta indipendente con giardino', en: 'Independent villa with a garden' },
    detail: { it: 'A Lecce, 500 m² di giardino e 320 m² coperti.', en: 'In Lecce, with a 500 m² garden and 320 m² of covered space.' },
    description: {
      it: 'Una casa indipendente a Lecce, con tre camere da letto, tre bagni e un giardino di 500 m². I 320 m² coperti comprendono gli ambienti interni e una terrazza riparata. La scheda della proprietà cita anche camino, pozzo artesiano, pannelli solari, infissi nuovi e tre box auto.',
      en: 'An independent home in Lecce, with three bedrooms, three bathrooms and a 500 m² garden. The 320 m² of covered space include the interior rooms and a sheltered terrace. The property listing also mentions a fireplace, an artesian well, solar panels, new windows and three garages.'
    },
    feature: { it: 'Giardino · 500 m²', en: 'Garden · 500 m²' }, image: 'lecce-giardino',
    alt: { it: 'Terrazza coperta della villetta con giardino a Lecce', en: 'Covered terrace at the villa with a garden in Lecce' }, source: '/belvedere',
    photoAlt: {
      it: ['Terrazza coperta e giardino della villetta', 'Camera da letto con coperta a righe', 'Seconda vista della camera con poltrona rossa', 'Terrazza esterna con pavimento in piastrelle', 'Cameretta con lettino e porta finestra', 'Bagno con lavabo e doccia', 'Giardino verde sotto il pergolato', 'Soggiorno con divani e tavolino', 'Soggiorno visto dal lato opposto', 'Zona giorno con finestre sul giardino', 'Sala da pranzo accanto alla portafinestra', 'Tavolo da pranzo e soggiorno', 'Sala da pranzo con arredi in legno', 'Camino e zona pranzo'],
      en: ['Covered terrace and garden at the villa', 'Bedroom with a striped bedspread', 'Second view of the bedroom with a red armchair', 'Outdoor terrace with tiled flooring', 'Small bedroom with a cot and French doors', 'Bathroom with washbasin and shower', 'Green garden beneath the pergola', 'Living room with sofas and a coffee table', 'Living room from the opposite side', 'Living area with windows onto the garden', 'Dining area beside the French doors', 'Dining table and living room', 'Dining room with wooden furniture', 'Fireplace and dining area']
    }
  },
  {
    id: 'otranto-mare', place: 'Otranto', title: { it: 'Otranto sul mare', en: 'Otranto by the sea' },
    detail: { it: 'Un appartamento a Otranto con box auto.', en: 'An apartment in Otranto with a private garage.' },
    description: {
      it: 'Un appartamento a Otranto per una vacanza sul mare, con box auto. Le fotografie mostrano gli ambienti della casa; per date, disponibilità e dettagli aggiornati del soggiorno puoi contattarci direttamente.',
      en: 'An apartment in Otranto for a stay by the sea, with a private garage. The photographs show the home’s rooms; contact us directly for dates, availability and current details about your stay.'
    },
    feature: { it: 'Sul mare · Box auto', en: 'By the sea · Private garage' }, image: 'otranto-mare',
    alt: { it: 'Camera da letto dell’appartamento a Otranto', en: 'Bedroom in the Otranto apartment' }, source: '/rosa-dei-venti',
    photoAlt: {
      it: ['Camera matrimoniale con testiera decorata', 'Sala da pranzo con tavolo e credenza', 'Soggiorno con accesso al balcone', 'Ingresso e corridoio dell’appartamento', 'Cucina attrezzata', 'Zona pranzo con tavolo in legno', 'Cucina con piano cottura e forno', 'Camera con porta finestra sul balcone', 'Bagno con lavabo e doccia', 'Angolo salotto accanto alla finestra', 'Ripostiglio con lavatrice', 'Camera matrimoniale con balcone', 'Letto matrimoniale con testiera a ventaglio'],
      en: ['Double bedroom with a decorative headboard', 'Dining room with a table and cabinet', 'Living room with access to the balcony', 'Apartment entrance and hallway', 'Fitted kitchen', 'Dining area with a wooden table', 'Kitchen with hob and oven', 'Bedroom with a French door to the balcony', 'Bathroom with washbasin and shower', 'Seating area beside the window', 'Utility area with a washing machine', 'Double bedroom with a balcony', 'Double bed with a fan-shaped headboard']
    }
  },
  {
    id: 'galugnano-piscina', place: 'Galugnano', title: { it: 'Villetta con piscina', en: 'Villa with a swimming pool' },
    detail: { it: 'Una villetta a Galugnano con piscina e spazi all’aperto.', en: 'A villa in Galugnano with a pool and outdoor space.' },
    description: {
      it: 'A Galugnano, una villetta con piscina e spazi all’aperto. La galleria raccoglie la zona piscina, le stanze e gli ambienti della casa, per farti conoscere la soluzione prima di scriverci. Chiedici disponibilità e informazioni sul soggiorno.',
      en: 'In Galugnano, a villa with a swimming pool and outdoor space. The gallery brings together the pool area, bedrooms and rooms of the home, so you can get to know the property before getting in touch. Ask us about availability and your stay.'
    },
    feature: { it: 'Piscina · Galugnano', en: 'Swimming pool · Galugnano' }, image: 'galugnano-piscina',
    alt: { it: 'Piscina della villetta a Galugnano', en: 'Swimming pool at the villa in Galugnano' }, source: '/appartamento-magnolia',
    photoAlt: {
      it: ['Piscina e solarium della villetta', 'Bagno con lavabo e doccia', 'Bagno con vasca e finestra', 'Lavabo e specchio del bagno', 'Soggiorno con divano e televisore', 'Doccia e lavabo', 'Box doccia in vetro', 'Tavolo da pranzo all’aperto sotto la pergola', 'Spazio esterno accanto alla piscina', 'Camera da letto con letto matrimoniale', 'Camera da letto con finestra', 'Soggiorno con divano e zona TV', 'Ingresso esterno e giardino', 'Camera con letto matrimoniale', 'Lavanderia con lavatrice', 'Cucina e zona pranzo luminose'],
      en: ['Swimming pool and sun terrace at the villa', 'Bathroom with washbasin and shower', 'Bathroom with a bathtub and window', 'Bathroom washbasin and mirror', 'Living room with a sofa and television', 'Shower and washbasin', 'Glass shower enclosure', 'Outdoor dining table beneath the pergola', 'Outdoor area beside the pool', 'Bedroom with a double bed', 'Bedroom with a window', 'Living room with sofa and TV area', 'Exterior entrance and garden', 'Bedroom with a double bed', 'Utility room with a washing machine', 'Bright kitchen and dining area']
    }
  },
  {
    id: 'lecce-aria-sana', place: 'Lecce · Aria Sana', title: { it: 'Villetta indipendente in zona Aria Sana', en: 'Independent villa in the Aria Sana area' },
    detail: { it: 'Tre camere, due bagni e 120 m² di area esterna a Lecce.', en: 'Three bedrooms, two bathrooms and 120 m² of outdoor space in Lecce.' },
    description: {
      it: 'Una casa in un tranquillo contesto bifamiliare nella zona Aria Sana di Lecce. Dispone di tre camere da letto, due bagni, cucina con camino, area pranzo, terrazzo con verde, balcone e lavanderia. Gli spazi esterni misurano 120 m²; in zona è disponibile parcheggio gratuito.',
      en: 'A home in a quiet two-family property in Lecce’s Aria Sana area. It has three bedrooms, two bathrooms, a kitchen with a fireplace, a dining area, a planted terrace, a balcony and a laundry area. The outdoor space covers 120 m², and free parking is available nearby.'
    },
    feature: { it: '3 camere · 2 bagni · 120 m² esterni', en: '3 bedrooms · 2 bathrooms · 120 m² outdoors' }, image: 'lecce-aria-sana',
    alt: { it: 'Spazio esterno con pergolato nella villetta in zona Aria Sana', en: 'Outdoor pergola at the villa in the Aria Sana area' }, source: '/la-terrazza-di-otranto',
    photoAlt: {
      it: ['Pergolato e spazio esterno della villetta', 'Terrazzo con piante sotto il pergolato', 'Veranda vetrata con lavatrice e zona lavanderia', 'Corridoio giallo di accesso alle stanze', 'Terrazzo con grande vaso e piante', 'Cucina in legno con camino e divano', 'Zona pranzo luminosa con tavolo e finestre', 'Camera matrimoniale con parete blu', 'Stanza con scrivania e scaffali', 'Camera con letto singolo e armadi', 'Cucina attrezzata con piano cottura e forno', 'Affaccio sul balcone e sugli alberi', 'Cameretta con scrivania e scaffali', 'Seconda vista della camera con parete blu', 'Bagno con vasca e finestra', 'Bagno con doccia e rivestimenti blu', 'Bagno rivestito in piastrelle chiare'],
      en: ['Pergola and outdoor space at the villa', 'Planted terrace beneath the pergola', 'Glazed veranda with a washing machine and laundry area', 'Yellow hallway leading to the rooms', 'Terrace with a large planter and plants', 'Wooden kitchen with a fireplace and sofa', 'Bright dining area with a table and windows', 'Double bedroom with a blue wall', 'Room with a desk and shelving', 'Bedroom with a single bed and wardrobes', 'Fitted kitchen with hob and oven', 'View onto the balcony and trees', 'Small bedroom with a desk and shelving', 'Second view of the bedroom with a blue wall', 'Bathroom with a bathtub and window', 'Bathroom with a shower and blue tiles', 'Bathroom with light-coloured tiles']
    }
  },
  {
    id: 'tramontana', place: 'Otranto', title: { it: 'Tramontana', en: 'Tramontana' },
    detail: { it: 'Una casa nel centro storico di Otranto.', en: 'A home in the historic centre of Otranto.' },
    description: {
      it: 'Tramontana è una casa nel centro storico di Otranto. La galleria mostra l’edificio, gli ambienti interni e alcuni affacci sul porto; scrivici per verificare la disponibilità e ricevere i dettagli del soggiorno.',
      en: 'Tramontana is a home in Otranto’s historic centre. The gallery shows the building, its interiors and views over the harbour; get in touch to check availability and ask for details about your stay.'
    },
    feature: { it: 'Centro storico · Otranto', en: 'Historic centre · Otranto' }, image: 'tramontana',
    alt: { it: 'Facciata chiara della casa Tramontana a Otranto', en: 'Light-coloured façade of the Tramontana home in Otranto' }, source: '/vacanze-copy-copy-copy-copy-copy-copy-copy-copy-copy-copy',
    photoAlt: {
      it: ['Facciata della casa nel centro di Otranto', 'Zona giorno accanto alla portafinestra', 'Sala da pranzo con soffitto decorato', 'Camera da letto con coperta gialla', 'Affaccio sul porto di Otranto', 'Vista del porto e delle barche', 'Seconda camera con coperta gialla', 'Soggiorno con vista verso il mare', 'Camera e zona salotto'],
      en: ['Façade of the home in central Otranto', 'Living area beside the French doors', 'Dining room with a decorative ceiling', 'Bedroom with a yellow bedspread', 'View over Otranto harbour', 'Harbour view with boats', 'Second bedroom with a yellow bedspread', 'Living room looking towards the sea', 'Bedroom and seating area']
    }
  },
  {
    id: 'la-terrazza', place: 'Otranto', title: { it: 'La Terrazza', en: 'La Terrazza' },
    detail: { it: 'Una casa a Otranto con terrazza privata.', en: 'A home in Otranto with a private terrace.' },
    description: {
      it: 'La Terrazza è una casa a Otranto con uno spazio esterno privato, adatto a fermarsi per un pasto o una pausa all’aperto. Le foto mostrano gli ambienti e gli affacci sul porto. Scrivici per date e disponibilità.',
      en: 'La Terrazza is a home in Otranto with a private outdoor area for a meal or a quiet pause outside. The photographs show the interiors and views over the harbour. Contact us about dates and availability.'
    },
    feature: { it: 'Terrazza privata · Otranto', en: 'Private terrace · Otranto' }, image: 'la-terrazza',
    alt: { it: 'Zona notte e salotto della casa La Terrazza', en: 'Sleeping and sitting area at La Terrazza' }, source: '/vacanze-copy-copy-copy-copy-copy-copy-copy-copy-copy-copy-copy',
    photoAlt: {
      it: ['Zona notte con letto giallo e sedute', 'Terrazza con sedie e affaccio sul porto', 'Vista sul porto e sulle barche', 'Letto giallo nella camera da letto', 'Zona giorno con soffitto a volta', 'Sala da pranzo e cucina'],
      en: ['Sleeping area with a yellow bed and chairs', 'Terrace with chairs overlooking the harbour', 'View over the harbour and boats', 'Yellow bed in the bedroom', 'Living area with vaulted ceiling', 'Dining room and kitchen']
    }
  }
];

const galleries = galleryAssets as Record<string, Photo[]>;
// Gallery indexes are zero based; keep the original image and its description paired.
const coverSelections: Record<string, {index:number; position:string}> = {
  'lecce-giardino': {index:6,position:'50% 55%'},
  'otranto-mare': {index:7,position:'50% 55%'},
  'galugnano-piscina': {index:0,position:'50% 55%'},
  'lecce-aria-sana': {index:0,position:'50% 50%'},
  'tramontana': {index:2,position:'50% 35%'},
  'la-terrazza': {index:1,position:'50% 50%'}
};
export const properties = copy.map((property) => {
  const gallery=(galleries[property.id] ?? []).map((photo,index)=>({
    ...photo,
    alt:{it:property.photoAlt.it[index]??property.alt.it,en:property.photoAlt.en[index]??property.alt.en}
  }));
  const selection=coverSelections[property.id]??{index:0,position:'50% 50%'};
  const cover=gallery[selection.index]??gallery[0];
  if(!cover)throw new Error(`Missing photographs for property: ${property.id}`);
  return {...property,gallery,cover,coverPosition:selection.position};
});
export type Property = (typeof properties)[number];

export const routes = { it: { home: '/', properties: '/soluzioni/', privacy: '/privacy/' }, en: { home: '/en/', properties: '/en/properties/', privacy: '/en/privacy/' } };
export const propertyRoute = (lang: Lang, id: string) => lang === 'it' ? `/soluzioni/${id}/` : `/en/properties/${id}/`;
