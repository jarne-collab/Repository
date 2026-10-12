// Alle teksten NL + EN. Alles met "TODO" is een placeholder die Jarne nog invult.
export type Lang = 'nl' | 'en';
// Inschrijfformulier winterretreat (Pauline / De Wildernis Club)
const FORM_WINTER = 'https://forms.gle/aEp6BE9HyNaGrPVs8';

const nl = {
  meta: {
    title: 'Grounded Climbing — klimretreats & personal training',
    description: 'Klimretreats in de natuur en personal training in het klimmen, met Jarne. Joy over grades.',
  },
  nav: { retreats: 'Retreats', about: 'Over mij', offer: 'Aanbod', training: 'Training', story: 'Verhaal', contact: 'Contact', book: 'Boek via WhatsApp' },
  intro: { skip: 'Overslaan' },
  hero: { word: 'Grounded', line: 'Klimmen zonder te bewijzen. Joy over grades.', cta: 'Ontdek de retreats' },
  values: {
    label: 'Kernwaarden',
    items: [
      { n: '01', word: 'Play', sub: 'Spel · Plezier · Nieuwsgierigheid', text: 'Klimmen mag uitdagend zijn, maar ook speels. Ruimte om te experimenteren, fouten te maken en plezier te beleven aan beweging.' },
      { n: '02', word: 'Trust', sub: 'Vertrouwen · Veiligheid · Verbinding', text: 'Vertrouwen in jezelf, je lichaam, anderen en het proces. Een omgeving waarin je jezelf mag uitdagen zonder jezelf te moeten bewijzen.' },
      { n: '03', word: 'Grow', sub: 'Groei · Bewustzijn · Ontwikkeling', text: 'Fysiek en mentaal groeien, je grenzen leren kennen en ontdekken wat voor jou mogelijk is. Niet alleen naar de top, maar ook onderweg.' },
    ],
  },
  retreats: {
    label: 'Retreats',
    title: 'Vertragen. Klimmen. Verbinden.',
    intro: 'Klimretreats in een natuurlijke omgeving: boulders, yoga, vegetarische maaltijden en een groep die je steunt.',
    // Retreat 01 = winterretreat (brochure De Wildernis Club). TODO: retreat 02 en 03
    items: [
      { title: 'Winterretreat', place: 'Maurienne, Frankrijk', date: '12–19 dec 2026', price: 'Vanaf € 999', note: 'Max. 9 deelnemers · yoga, sneeuwschoenwandelen, volpension', partner: 'In samenwerking met De Wildernis Club', partnerUrl: 'https://www.dewildernisclub.be', bookUrl: FORM_WINTER, photo: 'Staande foto: winter in de Maurienne' },
      { title: 'Retreat 02', place: 'Locatie volgt', date: 'Datum volgt', price: '€ —', note: '', partner: '', partnerUrl: '', bookUrl: '', photo: 'Staande foto: avondlicht' },
      { title: 'Retreat 03', place: 'Locatie volgt', date: 'Datum volgt', price: '€ —', note: '', partner: '', partnerUrl: '', bookUrl: '', photo: 'Staande foto: ochtendmist' },
    ],
    includes: ['Verblijf in een huis of tent in het bos', 'Yoga ’s ochtends en ’s avonds met Pauline', 'Begeleid klimmen met Jarne', 'Voedzame vegetarische maaltijden'],
    more: 'Meer info & beschikbaarheid',
    book: 'Boek je plek',
  },
  about: {
    label: 'Over mij',
    title: 'Ik begeleid je op een weg die ik zelf nog afleg.',
    // TODO: tekst en twee cijfers door Jarne
    text: 'Ik ben Jarne. Klimmen werd mijn houvast, en later mijn manier om anderen te laten ervaren wat vertrouwen en speelsheid in beweging kan betekenen.',
    stats: [{ v: '00', l: 'Cijfer 1 — TODO' }, { v: '00', l: 'Cijfer 2 — TODO' }],
    photo: 'Portret Jarne',
  },
  offer: {
    label: 'Aanbod',
    title: 'Wat we samen kunnen doen',
    // TODO: echte aanbod, prijzen
    cards: [
      { n: '01', title: 'Winterretreat', price: 'Vanaf € 999', meta: ['Maurienne, Frankrijk', '12–19 dec 2026', 'Max. 9 deelnemers', 'Yoga & vegetarisch'], photo: 'Retreat' },
      { n: '02', title: 'Personal training klimmen', price: '€ — / sessie', meta: ['Zaal of rots', 'Maandelijks of wekelijks', '1-op-1', 'Eigen schema'], photo: 'Training' },
      { n: '03', title: 'Klimdag in de natuur', price: '€ — / dag', meta: ['Rond Gent', 'Terugkerend', 'Kleine groep', 'Begeleid door Jarne'], photo: 'Klimdag' },
    ],
    tap: 'Tik voor een foto',
  },
  training: {
    label: 'Personal training',
    title: 'Zo werkt personal training',
    steps: [
      { t: 'Doelen', d: 'We bepalen wat jij wilt: sterker, speelser of gewoon meer plezier.' },
      { t: 'Kennismaking', d: 'Een intake om je klimgeschiedenis, lichaam en ritme te leren kennen.' },
      { t: 'Eigen schema', d: 'Een programma op jouw maat, opgebouwd in golven met ruimte voor rust.' },
      { t: 'Klimmen & reflecteren', d: 'We klimmen, kijken terug en sturen bij. Geen graden als maatstaf.' },
    ],
  },
  booking: {
    label: 'Boeken',
    title: 'Zo boek je een retreat',
    steps: [
      { t: 'Kies je retreat', d: 'Bekijk data en prijzen en kies wat bij je past.' },
      { t: 'Verblijf', d: 'Huis of tent: jij kiest hoe je slaapt.' },
      { t: 'Extra’s', d: 'Voeg bijvoorbeeld massage of extra begeleiding toe.' },
      { t: 'Voorschot', d: 'Met een voorschot is je plek gereserveerd.' },
    ],
    cta: 'Stuur een bericht op WhatsApp',
  },
  people: {
    label: 'Onderweg',
    title: 'Wie je onderweg ontmoet',
    // TODO: bio's en cijfers; akkoord Pauline en Caro nodig
    items: [
      { name: 'Jarne', role: 'Klimcoach', bio: 'Begeleidt retreats en personal training. Bio volgt.' },
      { name: 'Pauline', role: 'Yoga', bio: 'Leidt yoga ’s ochtends en ’s avonds. Bio volgt.' },
      { name: 'Caro', role: 'Partner', bio: 'Bio volgt.' },
    ],
    hint: 'Tik voor meer',
  },
  map: { label: 'Kaart', title: 'Vanuit Gent, overal waar de rots ons roept', home: 'Gent' },
  gift: { label: 'Cadeaubon', title: 'Geef een dag vertrouwen cadeau', text: 'Een cadeaubon voor een klimdag, sessie of retreat.', cta: 'Vraag een cadeaubon aan' },
  contact: {
    label: 'Contact',
    title: 'Laten we praten',
    form: { name: 'Naam', email: 'E-mail', topic: 'Waarover?', topics: ['Retreat', 'Personal training', 'Cadeaubon', 'Iets anders'], message: 'Bericht', send: 'Verstuur', sent: 'Bedankt! Ik reageer snel.' },
    or: 'of via WhatsApp',
  },
  footer: { rights: 'Grounded Climbing', follow: 'Volg op Instagram' },
  switch: { to: 'EN', href: '/en/', label: 'English' },
  story: {
    label: 'Mijn verhaal',
    title: 'Grounded is een weg, geen eindpunt',
    // TODO: Jarne bepaalt hoeveel persoonlijks erin komt; zachte versie als startpunt
    chapters: [
      { t: 'Klimmen als houvast', d: 'Na het einde van een lange relatie werd klimmen mijn houvast.' },
      { t: 'Opnieuw opbouwen', d: 'Een hernia nam het klimmen even weg. Rustig en bewust terugkomen: grounded klimmen.' },
      { t: 'Delen', d: 'Werken in de klimzaal en een jeugdteam opstarten.' },
      { t: 'Op mijn eigen manier', d: 'Een zware periode en de wens om het anders en zelf te doen.' },
      { t: 'Nog altijd onderweg', d: '“Dat is niet echt grounded.” Pijnlijk, maar waar. Ik leer elke dag bij.' },
    ],
  },
};

const en: typeof nl = {
  meta: {
    title: 'Grounded Climbing — climbing retreats & personal training',
    description: 'Climbing retreats in nature and personal climbing coaching with Jarne. Joy over grades.',
  },
  nav: { retreats: 'Retreats', about: 'About', offer: 'Offer', training: 'Training', story: 'Story', contact: 'Contact', book: 'Book on WhatsApp' },
  intro: { skip: 'Skip' },
  hero: { word: 'Grounded', line: 'Climbing with nothing to prove. Joy over grades.', cta: 'Discover the retreats' },
  values: {
    label: 'Core values',
    items: [
      { n: '01', word: 'Play', sub: 'Play · Joy · Curiosity', text: 'Climbing can be challenging, and playful too. Room to experiment, make mistakes and enjoy movement.' },
      { n: '02', word: 'Trust', sub: 'Trust · Safety · Connection', text: 'Trust in yourself, your body, others and the process. A place where you can challenge yourself without having to prove yourself.' },
      { n: '03', word: 'Grow', sub: 'Growth · Awareness · Development', text: 'Grow physically and mentally, learn your limits and discover what is possible for you. Not only to the top, but along the way.' },
    ],
  },
  retreats: {
    label: 'Retreats',
    title: 'Slow down. Climb. Connect.',
    intro: 'Climbing retreats in natural settings: boulders, yoga, vegetarian meals and a group that supports you.',
    items: [
      { title: 'Winter retreat', place: 'Maurienne, France', date: '12–19 Dec 2026', price: 'From € 999', note: 'Max. 9 participants · yoga, snowshoeing, full board', partner: 'In collaboration with De Wildernis Club', partnerUrl: 'https://www.dewildernisclub.be', bookUrl: FORM_WINTER, photo: 'Portrait photo: winter in the Maurienne' },
      { title: 'Retreat 02', place: 'Location soon', date: 'Date soon', price: '€ —', note: '', partner: '', partnerUrl: '', bookUrl: '', photo: 'Portrait photo: evening light' },
      { title: 'Retreat 03', place: 'Location soon', date: 'Date soon', price: '€ —', note: '', partner: '', partnerUrl: '', bookUrl: '', photo: 'Portrait photo: morning mist' },
    ],
    includes: ['A stay in a house or tent in the forest', 'Yoga every morning and evening with Pauline', 'Guided climbing with Jarne', 'Nourishing vegetarian meals'],
    more: 'More info & availability',
    book: 'Book your spot',
  },
  about: {
    label: 'About me',
    title: 'I guide you on a road I am still walking myself.',
    text: 'I’m Jarne. Climbing became my anchor, and later my way of helping others feel what trust and playfulness in movement can mean.',
    stats: [{ v: '00', l: 'Figure 1 — TODO' }, { v: '00', l: 'Figure 2 — TODO' }],
    photo: 'Portrait Jarne',
  },
  offer: {
    label: 'Offer',
    title: 'What we can do together',
    cards: [
      { n: '01', title: 'Winter retreat', price: 'From € 999', meta: ['Maurienne, France', '12–19 Dec 2026', 'Max. 9 participants', 'Yoga & vegetarian'], photo: 'Retreat' },
      { n: '02', title: 'Personal climbing coaching', price: '€ — / session', meta: ['Gym or rock', 'Weekly or monthly', '1-on-1', 'Your own plan'], photo: 'Coaching' },
      { n: '03', title: 'Climbing day in nature', price: '€ — / day', meta: ['Around Ghent', 'Recurring', 'Small group', 'Led by Jarne'], photo: 'Climbing day' },
    ],
    tap: 'Tap for a photo',
  },
  training: {
    label: 'Personal training',
    title: 'How personal training works',
    steps: [
      { t: 'Goals', d: 'We define what you want: stronger, more playful or simply more joy.' },
      { t: 'Intro', d: 'An intake to learn your climbing history, body and rhythm.' },
      { t: 'Your plan', d: 'A programme built around you, in waves with room for rest.' },
      { t: 'Climb & reflect', d: 'We climb, look back and adjust. Grades are not the yardstick.' },
    ],
  },
  booking: {
    label: 'Booking',
    title: 'How to book a retreat',
    steps: [
      { t: 'Pick a retreat', d: 'Check dates and prices and choose what fits.' },
      { t: 'Stay', d: 'House or tent: you choose how you sleep.' },
      { t: 'Extras', d: 'Add for example a massage or extra guidance.' },
      { t: 'Deposit', d: 'A deposit reserves your spot.' },
    ],
    cta: 'Message me on WhatsApp',
  },
  people: {
    label: 'On the way',
    title: 'Who you’ll meet along the way',
    items: [
      { name: 'Jarne', role: 'Climbing coach', bio: 'Guides retreats and personal training. Bio soon.' },
      { name: 'Pauline', role: 'Yoga', bio: 'Leads yoga every morning and evening. Bio soon.' },
      { name: 'Caro', role: 'Partner', bio: 'Bio soon.' },
    ],
    hint: 'Tap for more',
  },
  map: { label: 'Map', title: 'From Ghent, wherever the rock calls us', home: 'Ghent' },
  gift: { label: 'Gift card', title: 'Give a day of trust', text: 'A gift card for a climbing day, session or retreat.', cta: 'Request a gift card' },
  contact: {
    label: 'Contact',
    title: 'Let’s talk',
    form: { name: 'Name', email: 'Email', topic: 'About?', topics: ['Retreat', 'Personal training', 'Gift card', 'Something else'], message: 'Message', send: 'Send', sent: 'Thanks! I’ll reply soon.' },
    or: 'or on WhatsApp',
  },
  footer: { rights: 'Grounded Climbing', follow: 'Follow on Instagram' },
  switch: { to: 'NL', href: '/', label: 'Nederlands' },
  story: {
    label: 'My story',
    title: 'Grounded is a road, not a destination',
    chapters: [
      { t: 'Climbing as an anchor', d: 'After a long relationship ended, climbing became my anchor.' },
      { t: 'Rebuilding', d: 'A herniated disc took climbing away for a while. Coming back slowly and consciously: grounded climbing.' },
      { t: 'Sharing', d: 'Working at the climbing gym and starting a youth team.' },
      { t: 'My own way', d: 'A heavy period and the wish to do things differently, on my own.' },
      { t: 'Still on the way', d: '“That’s not really grounded.” Painful, but true. I keep learning.' },
    ],
  },
};

export const content = { nl, en };
// TODO: echt WhatsApp-nummer invullen
export const WHATSAPP = 'https://wa.me/32000000000';
export const INSTAGRAM = 'https://www.instagram.com/grounded.climbing/';
