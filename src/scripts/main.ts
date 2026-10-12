import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const $ = <T extends Element>(s: string, r: ParentNode = document) => Array.from(r.querySelectorAll<T>(s));

// Menu
const burger = document.querySelector<HTMLButtonElement>('.burger')!;
const nav = document.querySelector<HTMLElement>('#nav')!;
burger.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  burger.setAttribute('aria-expanded', String(open));
});
nav.addEventListener('click', (e) => { if ((e.target as Element).closest('a')) { nav.classList.remove('open'); burger.setAttribute('aria-expanded', 'false'); } });

// Header achtergrond bij scrollen + actief menu-item
const header = document.querySelector('header.site')!;
addEventListener('scroll', () => header.classList.toggle('scrolled', scrollY > 40), { passive: true });
$<HTMLElement>('main section[id]').forEach((s) => {
  ScrollTrigger.create({ trigger: s, start: 'top 50%', end: 'bottom 50%', onToggle: (t) => {
    if (t.isActive) $('nav.main a').forEach((a) => a.classList.toggle('active', a.getAttribute('data-nav') === s.id));
  } });
});

// Intro: de twee foto's schuiven bij scrollen in tegengestelde richting weg (links naar beneden, rechts naar
// boven) en leggen de homepage vrij. Omhoog scrollen brengt ze terug (scrub).
const introA = document.querySelector<HTMLElement>('[data-intro-a]');
const introB = document.querySelector<HTMLElement>('[data-intro-b]');
if (introA && introB && !reduce) {
  const L = '#intro .panel.left', R = '#intro .panel.right', T = '#intro .intro-title', C = '#intro .scroll-cue';
  gsap.timeline({ defaults: { duration: 1.5, ease: 'power3.out' } })
    .from(L, { yPercent: -100 }, 0).from(R, { yPercent: 100 }, 0)
    .from(`${T} span`, { yPercent: 40, opacity: 0, duration: 1, stagger: .12 }, .7);
  gsap.timeline({ defaults: { ease: 'none', duration: 1 }, scrollTrigger: { trigger: '#intro-wrap', start: 'top top', end: 'bottom bottom', scrub: .5 } })
    .to(introA, { yPercent: 100 }, 0).to(introB, { yPercent: -100 }, 0)
    .to(T, { opacity: 0, yPercent: -25, duration: .45 }, 0).to(C, { opacity: 0, duration: .2 }, 0);
}

// Reveal
if (!reduce) {
  $<HTMLElement>('.reveal').forEach((el) => {
    gsap.to(el, { opacity: 1, y: 0, duration: .9, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 88%', once: true } });
  });
  // Parallax op grote foto's
  $<HTMLElement>('[data-parallax]').forEach((el) => {
    gsap.to(el, { yPercent: 14, ease: 'none', scrollTrigger: { trigger: el.parentElement!, start: 'top top', end: 'bottom top', scrub: true } });
  });
  // Kaart: stippellijntjes tekenen
  $<SVGPathElement>('[data-route]').forEach((p) => {
    const len = p.getTotalLength();
    gsap.fromTo(p, { strokeDasharray: `0 ${len}` }, { strokeDasharray: '4 5', duration: 1.6, ease: 'power1.inOut', scrollTrigger: { trigger: p, start: 'top 80%', once: true } });
  });
  // Kernwaarden: bolletje loopt rond de cirkel
  const dot = document.querySelector<SVGCircleElement>('[data-orbit]');
  if (dot) gsap.to(dot, { rotation: 360, svgOrigin: '50 50', duration: 24, repeat: -1, ease: 'none' });
}

// Kernwaarden-cirkel
const circle = document.querySelector('[data-circle]');
if (circle) {
  const words = $<HTMLButtonElement>('.word', circle);
  const select = (i: number) => {
    words.forEach((w, n) => w.setAttribute('aria-pressed', String(n === i)));
    $<HTMLElement>('[data-detail]', circle).forEach((d) => { d.hidden = Number(d.dataset.detail) !== i; });
  };
  words.forEach((w, i) => { w.addEventListener('click', () => select(i)); w.addEventListener('mouseenter', () => select(i)); });
}

// Kaarten en portretten: hover op desktop, tik op gsm
for (const sel of ['.card', '.person']) {
  $<HTMLElement>(sel).forEach((el) => el.addEventListener('click', () => {
    const open = el.classList.toggle('open');
    el.setAttribute('aria-expanded', String(open));
  }));
}

// Contactformulier (voorlopig geen backend)
const form = document.querySelector<HTMLFormElement>('[data-form]');
form?.addEventListener('submit', (e) => {
  e.preventDefault();
  form.querySelector<HTMLElement>('[data-sent]')!.hidden = false;
});
