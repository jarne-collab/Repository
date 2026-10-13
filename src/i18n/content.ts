// Alle teksten NL + EN. Alles met "TODO" is een placeholder die Jarne nog invult.
export type Lang = 'nl' | 'en';

// Paden per pagina en taal
export type PageId = 'home' | 'team' | 'story';
export const paths: Record<PageId, Record<Lang, string>> = {
  home: { nl: '/', en: '/en/' },
  team: { nl: '/coaches/', en: '/en/coaches/' },
  story: { nl: '/verhaal/', en: '/en/story/' },
};
// Jarne begeleidt in de bergen sinds 2014; het aantal jaren wordt bij elke build bijgewerkt
const YEARS = new Date().getFullYear() - 2014;
// Inschrijfformulier winterretreat (Pauline / De Wildernis Club)
const FORM_WINTER = 'https://forms.gle/aEp6BE9HyNaGrPVs8';

const nl = {
  meta: {
    title: 'Grounded Climbing — klimretreats & personal training',
    description: 'Klimretreats in de natuur en personal training in het klimmen, met Jarne. Joy over grades.',
  },
  nav: { retreats: 'Retreats', about: 'Over mij', offer: 'Aanbod', training: 'Training', story: 'Verhaal', team: 'Team', contact: 'Contact', book: 'Boek via WhatsApp' },
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
      { title: 'Winterretreat', place: 'Maurienne, Frankrijk', date: '12–19 dec 2026', price: 'Vanaf € 999', note: 'Max. 9 deelnemers · yoga, sneeuwschoenwandelen, volpension', partner: 'In samenwerking met De Wildernis Club', partnerUrl: 'https://www.dewildernisclub.be', bookUrl: FORM_WINTER, photo: 'Staande foto: winter in de Maurienne', image: '/img/retreat-winter.jpg', alt: 'Avondlicht op de toppen van de Aiguilles d’Arves boven een chalet' },
      { title: 'Retreat 02', place: 'Locatie volgt', date: 'Datum volgt', price: '€ —', note: '', partner: '', partnerUrl: '', bookUrl: '', photo: 'Staande foto: avondlicht', image: '', alt: '' },
      { title: 'Retreat 03', place: 'Locatie volgt', date: 'Datum volgt', price: '€ —', note: '', partner: '', partnerUrl: '', bookUrl: '', photo: 'Staande foto: ochtendmist', image: '', alt: '' },
    ],
    includes: ['Verblijf in een huis of tent in het bos', 'Yoga ’s ochtends en ’s avonds met Pauline', 'Begeleid klimmen met Jarne', 'Voedzame vegetarische maaltijden'],
    more: 'Meer info & beschikbaarheid',
    book: 'Boek je plek',
  },
  about: {
    label: 'Over mij',
    title: 'Met passie voor avontuur en oog voor de persoon begeleid ik je om te groeien, vertrouwen op te bouwen en je eigen grenzen te verkennen.',
    // Korte versie uit Jarnes eigen verhaal (content/verhaal-jarne.md); kan nog aangepast worden
    text: 'Hey, ik ben Jarne. Ik word gelukkig van bewegen, buiten zijn en samen met anderen op avontuur gaan. Sinds 2014 begeleid ik mensen in de bergen, vooral bij canyoning, maar ook bij klimmen en via ferrata. Klimmen is mijn ankerpunt: de ruis in mijn hoofd wordt zachter. Grounded is voor mij geen eindpunt, maar een weg.',
    stats: [{ v: `${YEARS}`, l: 'jaar begeleiding in de bergen' }, { v: '7', l: 'diploma’s en certificaten' }],
    photo: 'Portret Jarne',
    image: '/img/about-jarne.jpg',
    alt: 'Jarne lacht in een gele jas met rugzak en wandelstokken in de bergen',
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
      { name: 'Jarne', role: 'Canyoning guide & klimcoach', bio: 'Begeleidt sinds 2014 mensen in de bergen: canyoning, klimmen en via ferrata.' },
      { name: 'Pauline', role: 'Yoga', bio: 'Leidt yoga ’s ochtends en ’s avonds. Bio volgt.' },
      { name: 'Caro', role: 'Partner', bio: 'Bio volgt.' },
    ],
    hint: 'Tik voor meer',
    all: 'Ontmoet het team',
  },
  map: { label: 'Kaart', title: 'Vanuit Gent naar de bergen', home: 'Gent', retreat: 'Saint-Jean-de-Maurienne', cta: 'Bekijk de retreat' },
  gift: { label: 'Cadeaubon', title: 'Geef een dag vertrouwen cadeau', text: 'Een cadeaubon voor een klimdag, sessie of retreat.', cta: 'Vraag een cadeaubon aan' },
  contact: {
    label: 'Contact',
    title: 'Laten we praten',
    form: { name: 'Naam', email: 'E-mail', topic: 'Waarover?', topics: ['Retreat', 'Personal training', 'Cadeaubon', 'Iets anders'], message: 'Bericht', send: 'Verstuur', sent: 'Bedankt! Ik reageer snel.' },
    or: 'of via WhatsApp',
  },
  footer: { rights: 'Grounded Climbing', follow: 'Volg op Instagram' },
  team: {
    meta: { title: 'Team & partners — Grounded Climbing', description: 'Ontmoet Jarne, Pauline en Caro, en de partners achter Grounded Climbing.' },
    label: 'Team', title: 'Wie je onderweg ontmoet',
    labels: { facts: 'Diploma’s en certificaten', training: 'Bijscholing' },
    intro: 'Een klein team met één overtuiging: klimmen en bewegen zijn er om je te verbinden, niet om te bewijzen.',
    // TODO: bio's, rollen en foto's bevestigen; akkoord Pauline en Caro voor naam en foto
    people: [
      { name: 'Jarne', role: 'Canyoning guide & klimcoach', bio: 'Leerkracht lichamelijke opvoeding en gepassioneerd outdoorbegeleider. Sinds 2014 neemt Jarne mensen mee de bergen in, vooral voor canyoning, maar ook voor klimmen en via ferrata, en af en toe voor een bergwandeling. Op een veilige en enthousiaste manier. Hij is een geboren motivator die mensen graag uitdaagt om met vertrouwen hun grenzen te verleggen.', facts: ['Diploma Lichamelijke Opvoeding en Bewegingsrecreatie', 'Canyoning Guide (2015)', 'Initiator Canyoning (2017)', 'Initiator Sportklimmen (sinds 2017)', 'Klimvaardigheidsbewijs 3, outdoor voorklimmen (2018)', 'Safeguarding Athletes from Harassment and Abuse (certificaat)', 'Coaching Youth Climbers, Coach Education Class (certificaat van deelname, 2024)'], training: ['Weerkunde voor bergsporters (workshop)', 'Dag van de Trainer 2024: de weg van beginner tot Olympische Spelen in sportklimmen, het perspectief als coach', 'Workshop routebouwen boulderen (2025)'], photo: 'Portret Jarne', image: '/img/about-jarne.jpg', alt: 'Jarne lacht in een gele jas met rugzak en wandelstokken in de bergen' },
      { name: 'Pauline', role: 'Yoga & ademwerk', bio: 'Gecertificeerd yogadocent, ademcoach en psycholoog van opleiding. Oprichtster van De Wildernis Club, waar ze via beweging, ademhaling en natuur werkt aan (veer)kracht. Pauline begeleidt je naar meer rust, flexibiliteit en groei.', facts: ['Gecertificeerd yogadocent', 'Ademcoach', 'Psycholoog van opleiding'], training: [], photo: 'Portret Pauline', image: '', alt: '' },
      { name: 'Maud', role: 'Kinesitherapeut & klimscreenings', bio: 'Kinesitherapeut sinds 2020 en oprichtster van Crux Kinesitherapie. Tijdens haar opleiding aan de UGent groeide haar interesse in het menselijk lichaam. Wat ze vooral meenam: klachten hebben zelden één oorzaak. Ook stress, gewoontes en levensstijl spelen een rol.', facts: ['Kinesitherapeut sinds 2020', 'Master Revalidatiewetenschappen en Kinesitherapie, musculoskeletale revalidatie (UGent)', 'Postgraduaat manuele therapie', 'Oprichtster van Crux Kinesitherapie'], training: [], photo: 'Portret Maud', image: '', alt: '' },
      { name: 'Caro', role: 'Partner', bio: 'Bio volgt.', facts: [], training: [], photo: 'Portret Caro', image: '', alt: '' },
    ],
    partners: {
      label: 'Partners', title: 'Samen onderweg',
      items: [{ name: 'De Wildernis Club', text: 'Retreats en bewegen in de natuur, opgericht door Pauline. Samen organiseren we de winterretreat in de Maurienne.', url: 'https://www.dewildernisclub.be', cta: 'Naar De Wildernis Club' }],
    },
    cta: { title: 'Benieuwd of we bij elkaar passen?', text: 'Stuur een bericht of plan een kennismaking.', button: 'Neem contact op' },
  },
  switch: { to: 'EN', label: 'English' },
  story: {
    label: 'Mijn verhaal',
    title: 'Grounded is een weg, geen eindpunt',
  },
};

const en: typeof nl = {
  meta: {
    title: 'Grounded Climbing — climbing retreats & personal training',
    description: 'Climbing retreats in nature and personal climbing coaching with Jarne. Joy over grades.',
  },
  nav: { retreats: 'Retreats', about: 'About', offer: 'Offer', training: 'Training', story: 'Story', team: 'Team', contact: 'Contact', book: 'Book on WhatsApp' },
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
      { title: 'Winter retreat', place: 'Maurienne, France', date: '12–19 Dec 2026', price: 'From € 999', note: 'Max. 9 participants · yoga, snowshoeing, full board', partner: 'In collaboration with De Wildernis Club', partnerUrl: 'https://www.dewildernisclub.be', bookUrl: FORM_WINTER, photo: 'Portrait photo: winter in the Maurienne', image: '/img/retreat-winter.jpg', alt: 'Evening light on the peaks of the Aiguilles d’Arves above a chalet' },
      { title: 'Retreat 02', place: 'Location soon', date: 'Date soon', price: '€ —', note: '', partner: '', partnerUrl: '', bookUrl: '', photo: 'Portrait photo: evening light', image: '', alt: '' },
      { title: 'Retreat 03', place: 'Location soon', date: 'Date soon', price: '€ —', note: '', partner: '', partnerUrl: '', bookUrl: '', photo: 'Portrait photo: morning mist', image: '', alt: '' },
    ],
    includes: ['A stay in a house or tent in the forest', 'Yoga every morning and evening with Pauline', 'Guided climbing with Jarne', 'Nourishing vegetarian meals'],
    more: 'More info & availability',
    book: 'Book your spot',
  },
  about: {
    label: 'About me',
    title: 'With a passion for adventure and an eye for the person, I guide you to grow, build trust and explore your own limits.',
    text: 'Hey, I’m Jarne. Moving, being outdoors and heading out on adventures with others makes me happy. Since 2014 I have guided people in the mountains, mostly canyoning, but also climbing and via ferrata. Climbing is my anchor: the noise in my head gets quieter. For me, grounded is not a destination, but a road.',
    stats: [{ v: `${YEARS}`, l: 'years guiding in the mountains' }, { v: '7', l: 'diplomas and certificates' }],
    photo: 'Portrait Jarne',
    image: '/img/about-jarne.jpg',
    alt: 'Jarne laughing in a yellow jacket with backpack and trekking poles in the mountains',
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
      { name: 'Jarne', role: 'Canyoning guide & climbing coach', bio: 'Has guided people in the mountains since 2014: canyoning, climbing and via ferrata.' },
      { name: 'Pauline', role: 'Yoga', bio: 'Leads yoga every morning and evening. Bio soon.' },
      { name: 'Caro', role: 'Partner', bio: 'Bio soon.' },
    ],
    hint: 'Tap for more',
    all: 'Meet the team',
  },
  map: { label: 'Map', title: 'From Ghent to the mountains', home: 'Ghent', retreat: 'Saint-Jean-de-Maurienne', cta: 'See the retreat' },
  gift: { label: 'Gift card', title: 'Give a day of trust', text: 'A gift card for a climbing day, session or retreat.', cta: 'Request a gift card' },
  contact: {
    label: 'Contact',
    title: 'Let’s talk',
    form: { name: 'Name', email: 'Email', topic: 'About?', topics: ['Retreat', 'Personal training', 'Gift card', 'Something else'], message: 'Message', send: 'Send', sent: 'Thanks! I’ll reply soon.' },
    or: 'or on WhatsApp',
  },
  footer: { rights: 'Grounded Climbing', follow: 'Follow on Instagram' },
  team: {
    meta: { title: 'Team & partners — Grounded Climbing', description: 'Meet Jarne, Pauline and Caro, and the partners behind Grounded Climbing.' },
    label: 'Team', title: 'Who you’ll meet along the way',
    labels: { facts: 'Diplomas and certificates', training: 'Further training' },
    intro: 'A small team with one belief: climbing and movement are there to connect you, not to prove yourself.',
    people: [
      { name: 'Jarne', role: 'Canyoning guide & climbing coach', bio: 'Physical education teacher and passionate outdoor guide. Since 2014 Jarne has taken people into the mountains, mostly for canyoning, but also for climbing and via ferrata, and occasionally for a mountain hike. In a safe and enthusiastic way. He is a born motivator who loves to challenge people to push their limits with confidence.', facts: ['Degree in Physical Education and Movement Recreation', 'Canyoning Guide (2015)', 'Canyoning Instructor (2017)', 'Sport Climbing Instructor (since 2017)', 'Climbing Skills Certificate 3, outdoor lead climbing (2018)', 'Safeguarding Athletes from Harassment and Abuse (certificate)', 'Coaching Youth Climbers, Coach Education Class (certificate of participation, 2024)'], training: ['Weather for mountain athletes (workshop)', 'Coaches’ Day 2024: from beginner to the Olympic Games in sport climbing, the coach’s perspective', 'Bouldering route-setting workshop (2025)'], photo: 'Portrait Jarne', image: '/img/about-jarne.jpg', alt: 'Jarne laughing in a yellow jacket with backpack and trekking poles in the mountains' },
      { name: 'Pauline', role: 'Yoga & breathwork', bio: 'Certified yoga teacher, breath coach and psychologist by training. Founder of De Wildernis Club, where she works on resilience through movement, breathing and nature. Pauline guides you towards more calm, flexibility and growth.', facts: ['Certified yoga teacher', 'Breath coach', 'Psychologist by training'], training: [], photo: 'Portrait Pauline', image: '', alt: '' },
      { name: 'Maud', role: 'Physiotherapist & climbing screenings', bio: 'Physiotherapist since 2020 and founder of Crux Kinesitherapie. Together with Jarne she does climbing screenings. During her studies at Ghent University her interest in the human body grew. What she took away above all: complaints rarely have a single cause. Stress, habits and lifestyle also play a role.', facts: ['Physiotherapist since 2020', 'Master in Rehabilitation Sciences and Physiotherapy, musculoskeletal rehabilitation (Ghent University)', 'Postgraduate in manual therapy', 'Founder of Crux Kinesitherapie'], training: [], photo: 'Portrait Maud', image: '', alt: '' },
      { name: 'Caro', role: 'Partner', bio: 'Bio soon.', facts: [], training: [], photo: 'Portrait Caro', image: '', alt: '' },
    ],
    partners: {
      label: 'Partners', title: 'On the way together',
      items: [{ name: 'De Wildernis Club', text: 'Retreats and movement in nature, founded by Pauline. Together we run the winter retreat in the Maurienne.', url: 'https://www.dewildernisclub.be', cta: 'Visit De Wildernis Club' }],
    },
    cta: { title: 'Curious if we’re a fit?', text: 'Send a message or plan an intro call.', button: 'Get in touch' },
  },
  switch: { to: 'NL', label: 'Nederlands' },
  story: {
    label: 'My story',
    title: 'Grounded is a road, not a destination',
  },
};

export const content = { nl, en };
export const WHATSAPP = 'https://wa.me/32468324833';
export const INSTAGRAM = 'https://www.instagram.com/grounded.climbing/';
