// Verhaal van Jarne (bron: content/verhaal-jarne.md). *tekst* wordt cursief weergegeven.
// Hoofdstuktitels en de Engelse vertaling zijn voorstellen; TODO: Jarne controleert.
import type { Lang } from './content';

export type Chapter = {
  id: string;
  label: string;
  title: string;
  paras: string[];
  photo?: { label: string; src?: string; alt?: string; portrait?: boolean };
};

type Story = {
  meta: { title: string; description: string };
  label: string;
  title: string;
  intro: string;
  chapters: Chapter[];
  why: {
    id: string; label: string; title: string; paras: string[];
    valuesIntro: string; values: { word: string; text: string }[];
    after: string[];
  };
  closing: { name: string; tagline: string; retreats: string; contact: string };
  teaser: { text: string; button: string; alt: string };
};

const nl: Story = {
  meta: { title: 'Mijn verhaal — Grounded Climbing', description: 'Het verhaal achter Grounded Climbing: van avontuur en burn-out naar vertragen, klimmen als ankerpunt en samen groeien.' },
  label: 'Mijn verhaal',
  title: 'Het verhaal achter Grounded Climbing',
  intro: 'Hey, ik ben Jarne, de oprichter van Grounded Climbing.',
  chapters: [
    {
      id: 'onderweg', label: 'Onderweg', title: 'Met beide voeten op de grond',
      paras: [
        'Ik ben iemand die gelukkig wordt van bewegen, buiten zijn en samen met anderen op avontuur gaan. De natuur geeft me rust en vrijheid, maar zet me ook regelmatig met beide voeten op de grond. Wanneer je in de Himalaya naast een gigantische bergwand staat of afdaalt van een waterval van 200 meter, besef je toch even hoe klein je als mens bent. En hoe relatief sommige dingen zijn waar we ons in het dagelijkse leven zo druk over maken.',
        'Mijn liefde voor avontuur bracht me in 2018 bij Mountain Moments, een organisatie die avontuurlijke reizen organiseert voor kinderen, jongeren, gezinnen en volwassenen. Een van de mooiste organisaties waarvoor ik ooit gewerkt heb. Ik vond er veel van wat mij energie geeft: buiten zijn, samen dingen beleven, mensen verbinden en anderen helpen om hun eigen grenzen te verkennen. Ik hoop dat daar in de toekomst nog mooie avonturen bij komen.',
      ],
      photo: { label: 'Onderweg', src: '/img/story-onderweg.jpg', alt: 'Jarne hangt aan een touw naast een hoge waterval in een groene kloof', portrait: true },
    },
    {
      id: 'terug', label: 'Terug in België', title: 'Een droom die dicht bij mijn hart lag',
      paras: [
        'Na enkele jaren onderweg te zijn geweest, keerde ik terug naar België om hier opnieuw een leven op te bouwen. Ik kwam terecht in een job waar ik de kans kreeg om een jeugdteam uit te bouwen. Een droom die heel dicht bij mijn hart lag en waar ik met veel enthousiasme aan begon.',
      ],
      photo: { label: 'Terug in België', src: '/img/story-terug.jpg', alt: 'Zicht op een klimmuur met gekleurde grepen, vanuit zittend perspectief tussen twee benen', portrait: true },
    },
    {
      id: 'vertragen', label: 'Vertragen', title: 'Even een stap terug',
      paras: [
        'Toch liep het uiteindelijk anders dan ik had gehoopt. Een periode waarin ik veel van mezelf vroeg, bracht me stilaan uit balans. Uiteindelijk belandde ik in een burn-out en kreeg ik ook te maken met een hernia. Het dwong me om stil te staan bij iets wat ik niet zo goed kende: vertragen, mijn lichaam de ruimte geven en aanvaarden dat vooruitgaan soms betekent dat je even een stap terugzet.',
        'Ik ben iemand die niet zo goed kon stilzitten. Altijd iets te doen, iets om naar uit te kijken, een nieuw avontuur of een volgend doel. Rustiger aan doen, luisteren naar mijn lichaam en soms gewoon eens niets doen, bleken niet altijd vanzelfsprekend. Ik probeer bewuster met mijn lichaam en geest om te gaan, mijn dag rustig te starten met wat stretching of yoga en af en toe tijd te maken om even stil te staan.',
        'Betekent dat dat ik ondertussen dagelijks mediteer en een halve monnik ben geworden? Zeker niet! Ik ben zelf nog volop aan het groeien. En soms vraag ik me ook af: *wtf Jarne, wat voor een naam heb jij gekozen voor iemand die zo kan stressen over een kleurtje op zijn website?*',
        'Maar net dat hoort er voor mij bij. Ik hoef niet alles al te kunnen of altijd in balans te zijn om stappen vooruit te zetten.',
      ],
      photo: { label: 'Vertragen', src: '/img/story-vertragen.jpg', alt: 'Jarne mediteert op een rotsblok boven een bergdal met meer' },
    },
    {
      id: 'ankerpunt', label: 'Klimmen als ankerpunt', title: 'Klimmen als ankerpunt',
      paras: [
        'In die moeilijke periode werd nog duidelijker hoe belangrijk klimmen en buiten zijn voor mij zijn.',
        'Wanneer ik klim, gebeurt er iets bijzonders. De ruis in mijn hoofd wordt zachter. Mijn aandacht verschuift naar de muur, naar de volgende greep, naar wat er op dat moment voor mij ligt. Even is er niet zoveel anders dan dat.',
        'Klimmen is voor mij veel meer dan een sport. Het is een plek waar ik kan spelen, mezelf uitdagen en leren omgaan met angst en frustratie. Waar ik soms tot het uiterste ga, maar evengoed leer wanneer ik beter een stap terugzet.',
        'Het is ook een sport die me veel heeft geleerd over groeien. Soms werk je dagenlang aan één route. Je probeert, valt, probeert opnieuw en lijkt soms geen meter vooruit te komen. Tot je op een dag plots boven staat. En zelfs als dat niet lukt, heb je onderweg iets geleerd.',
        'Dat herken ik ook in mijn herstel. Na een hernia opnieuw vertrouwen krijgen in je lichaam vraagt tijd. Kleine stapjes vooruit zijn soms ontzettend waardevol. En soms is een dag rust nemen precies wat je nodig hebt om verder te kunnen.',
        'Daarnaast blijft het gewoon heerlijk om als een aap aan een muur te hangen en te kunnen zeggen: dit is mijn sport!',
        'En dan heb ik het nog niet eens over de mensen die je onderweg ontmoet. De klimcommunity, de gedeelde pogingen, het elkaar aanmoedigen en de momenten waarop je samen iets beleeft dat je niet snel vergeet. Daar zit voor mij een groot deel van de magie.',
      ],
      photo: { label: 'Klimmen als ankerpunt', src: '/img/story-ankerpunt.jpg', alt: 'Een klimmer hoog op een overhangende rode zandsteenwand, met groene bomen en blauwe lucht', portrait: true },
    },
  ],
  why: {
    id: 'waarom', label: 'Waarom', title: 'Waarom Grounded Climbing?',
    paras: [
      'Met Grounded Climbing wil ik die passie en ervaringen delen.',
      'Ik wil mensen samenbrengen rond beweging, avontuur en natuur. Mensen laten ontdekken wat klimmen en buiten zijn voor hen kunnen betekenen. Niet door iedereen naar hetzelfde doel te duwen, maar door ruimte te creëren om op je eigen tempo te groeien.',
      'Soms betekent dat een stap buiten je comfortzone zetten. Soms betekent het net luisteren naar je lichaam, je grenzen respecteren of ontdekken dat je meer tijd nodig hebt dan je had verwacht.',
      'Ik geloof dat avontuur ons dichter bij onszelf en bij elkaar kan brengen. Dat we kunnen groeien door nieuwe dingen te proberen, maar ook door te aanvaarden waar we vandaag staan.',
    ],
    valuesIntro: 'Daarom wil ik met Grounded Climbing werken vanuit drie eenvoudige waarden:',
    values: [
      { word: 'Play', text: 'plezier maken, experimenteren en de speelsheid van bewegen terugvinden. Niet alles hoeft een prestatie te zijn.' },
      { word: 'Trust', text: 'vertrouwen opbouwen in jezelf, je lichaam en de mensen rondom je. Een omgeving creëren waarin je jezelf kunt zijn, vragen mag stellen en uitdagingen kunt aangaan zonder iets te moeten bewijzen.' },
      { word: 'Grow', text: 'jezelf uitdagen, nieuwe dingen ontdekken en stap voor stap groeien. Op jouw tempo, met ruimte om fouten te maken en opnieuw te proberen.' },
    ],
    after: [
      'Dat wil ik doen via persoonlijke klimcoaching, buitendagen, retreats en avonturen in de natuur. Met persoonlijke aandacht, respect voor ieders grenzen en vooral veel goesting om samen op pad te gaan.',
      'Op langere termijn droom ik van een hechte community waarin mensen elkaar vinden, samen op avontuur gaan en elkaar blijven inspireren. Misschien groeit dat ooit uit tot een eigen plek met een kleine boulderwand, ruimte voor persoonlijke coaching en yoga. Een plek waar beweging, natuur en verbinding samenkomen.',
      'Ik weet nog niet precies waar die weg naartoe zal leiden. En misschien hoeft dat ook niet.',
      'Ik wil vooral iets opbouwen dat klopt met wie ik ben en waar ik in geloof. Een plek waar mensen niet alleen komen om beter te leren klimmen, maar ook om plezier te maken, nieuwe mensen te ontmoeten en zichzelf op hun eigen manier uit te dagen.',
      'Want uiteindelijk gaat het voor mij niet alleen over hoger geraken op een muur of verder trekken in de bergen. Het gaat ook over wat je onderweg ontdekt, wie je ontmoet en wat je meeneemt naar huis.',
    ],
  },
  closing: { name: 'Grounded Climbing.', tagline: 'Hoger klimmen, dieper landen.', retreats: 'Bekijk de retreats', contact: 'Neem contact op' },
  teaser: { text: 'Van avontuur en een burn-out naar vertragen, klimmen als ankerpunt en samen groeien. Het volledige verhaal achter Grounded Climbing.', button: 'Lees mijn verhaal', alt: 'Jarne mediteert op een rotsblok boven een bergdal met meer' },
};

const en: Story = {
  meta: { title: 'My story — Grounded Climbing', description: 'The story behind Grounded Climbing: from adventure and burnout to slowing down, climbing as an anchor and growing together.' },
  label: 'My story',
  title: 'The story behind Grounded Climbing',
  intro: 'Hey, I’m Jarne, the founder of Grounded Climbing.',
  chapters: [
    {
      id: 'onderweg', label: 'On the way', title: 'Both feet on the ground',
      paras: [
        'I’m someone who is happy when moving, being outdoors and heading out on adventures with others. Nature gives me calm and freedom, but it also regularly puts me firmly back on the ground. When you stand next to a gigantic mountain wall in the Himalayas or abseil down a 200-metre waterfall, you realise, even if just for a moment, how small you are as a human being. And how relative some of the things are that we worry about so much in daily life.',
        'My love of adventure brought me to Mountain Moments in 2018, an organisation that runs adventure trips for children, young people, families and adults. One of the best organisations I have ever worked for. There I found much of what gives me energy: being outdoors, experiencing things together, connecting people and helping others explore their own limits. I hope more great adventures will follow in the future.',
      ],
      photo: { label: 'On the way', src: '/img/story-onderweg.jpg', alt: 'Jarne on a rope beside a tall waterfall in a green gorge', portrait: true },
    },
    {
      id: 'terug', label: 'Back in Belgium', title: 'A dream close to my heart',
      paras: [
        'After a few years on the road, I returned to Belgium to build a life here again. I ended up in a job where I got the chance to build up a youth team. A dream very close to my heart, which I started with a lot of enthusiasm.',
      ],
      photo: { label: 'Back in Belgium', src: '/img/story-terug.jpg', alt: 'View of a climbing wall with coloured holds, seen from a seated position between two legs', portrait: true },
    },
    {
      id: 'vertragen', label: 'Slowing down', title: 'Taking a step back',
      paras: [
        'But in the end it turned out differently than I had hoped. A period in which I asked a lot of myself gradually knocked me out of balance. I ended up in a burnout and also had to deal with a herniated disc. It forced me to pause and face something I didn’t know well: slowing down, giving my body room, and accepting that moving forward sometimes means taking a step back.',
        'I’m someone who couldn’t sit still very well. Always something to do, something to look forward to, a new adventure or a next goal. Slowing down, listening to my body and sometimes just doing nothing turned out not to be that natural. I try to deal more consciously with my body and mind, start my day calmly with some stretching or yoga, and now and then make time to simply stand still.',
        'Does that mean I now meditate daily and have become half a monk? Certainly not! I’m still very much growing myself. And sometimes I also wonder: *wtf Jarne, what kind of name did you choose for someone who can stress so much about a little colour on his website?*',
        'But that is exactly what belongs to it for me. I don’t have to be able to do everything already, or always be in balance, to take steps forward.',
      ],
      photo: { label: 'Slowing down', src: '/img/story-vertragen.jpg', alt: 'Jarne meditating on a boulder above a mountain valley with a lake' },
    },
    {
      id: 'ankerpunt', label: 'Climbing as an anchor', title: 'Climbing as an anchor',
      paras: [
        'In that difficult period it became even clearer how important climbing and being outdoors are to me.',
        'When I climb, something special happens. The noise in my head gets softer. My attention shifts to the wall, to the next hold, to what is in front of me at that moment. For a moment, there is not much else.',
        'Climbing is much more than a sport to me. It is a place where I can play, challenge myself and learn to deal with fear and frustration. Where I sometimes go to the limit, but equally learn when it is better to take a step back.',
        'It is also a sport that has taught me a lot about growing. Sometimes you work on a single route for days. You try, fall, try again and sometimes seem not to move an inch. Until one day you suddenly top out. And even if that doesn’t happen, you have learned something along the way.',
        'I recognise that in my recovery too. Regaining trust in your body after a herniated disc takes time. Small steps forward are sometimes incredibly valuable. And sometimes taking a day of rest is exactly what you need to keep going.',
        'Besides, it simply remains wonderful to hang on a wall like a monkey and say: this is my sport!',
        'And I haven’t even mentioned the people you meet along the way. The climbing community, the shared attempts, the encouragement and the moments when you experience something together that you won’t quickly forget. For me, a big part of the magic lies there.',
      ],
      photo: { label: 'Climbing as an anchor', src: '/img/story-ankerpunt.jpg', alt: 'A climber high on an overhanging red sandstone wall, with green trees and blue sky', portrait: true },
    },
  ],
  why: {
    id: 'waarom', label: 'Why', title: 'Why Grounded Climbing?',
    paras: [
      'With Grounded Climbing I want to share that passion and those experiences.',
      'I want to bring people together around movement, adventure and nature. Let people discover what climbing and being outdoors can mean for them. Not by pushing everyone towards the same goal, but by creating space to grow at your own pace.',
      'Sometimes that means stepping outside your comfort zone. Sometimes it means listening to your body, respecting your limits or discovering that you need more time than you expected.',
      'I believe adventure can bring us closer to ourselves and to each other. That we can grow by trying new things, but also by accepting where we stand today.',
    ],
    valuesIntro: 'That’s why I want to work with Grounded Climbing from three simple values:',
    values: [
      { word: 'Play', text: 'having fun, experimenting and rediscovering the playfulness of movement. Not everything has to be a performance.' },
      { word: 'Trust', text: 'building trust in yourself, your body and the people around you. Creating an environment where you can be yourself, ask questions and take on challenges without having to prove anything.' },
      { word: 'Grow', text: 'challenging yourself, discovering new things and growing step by step. At your own pace, with room to make mistakes and try again.' },
    ],
    after: [
      'I want to do that through personal climbing coaching, outdoor days, retreats and adventures in nature. With personal attention, respect for everyone’s limits and above all a lot of appetite to hit the road together.',
      'In the longer term I dream of a close-knit community in which people find each other, go on adventures together and keep inspiring each other. Maybe it will someday grow into a place of its own with a small boulder wall, room for personal coaching and yoga. A place where movement, nature and connection come together.',
      'I don’t know yet exactly where that road will lead. And maybe that’s fine.',
      'Above all, I want to build something that fits who I am and what I believe in. A place where people don’t come only to learn to climb better, but also to have fun, meet new people and challenge themselves in their own way.',
      'Because in the end, for me it is not only about getting higher on a wall or trekking further in the mountains. It is also about what you discover along the way, who you meet and what you take home with you.',
    ],
  },
  closing: { name: 'Grounded Climbing.', tagline: 'Climb higher, land deeper.', retreats: 'See the retreats', contact: 'Get in touch' },
  teaser: { text: 'From adventure and burnout to slowing down, climbing as an anchor and growing together. The full story behind Grounded Climbing.', button: 'Read my story', alt: 'Jarne meditating on a boulder above a mountain valley with a lake' },
};

export const story: Record<Lang, Story> = { nl, en };
