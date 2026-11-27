// The whole site is organised as:  Level > Specification > Unit > Chapter > Topic (lesson)
//
// To add a new specification:
//   1. Add an entry to SPECS below (set status: 'live' once it has content).
//   2. Put its lessons in      src/content/lessons/<spec.slug>/<unit.slug>/<chapter.slug>/*.md
//   3. Put its flashcards in   src/data/flashcards/<spec.slug>/<chapter.slug>.json
//   4. Put its practice in     src/content/practice/<spec.slug>/<chapter.slug>.md

export type LevelSlug = 'o-level' | 'a-level';

export interface Chapter {
  n: number;
  slug: string; // must match the folder name
  title: string;
  emoji: string;
  color: 'sky' | 'sun' | 'mint' | 'coral' | 'grape';
  spec: string;
  blurb: string;
}

export interface Unit {
  n: number;
  slug: string;
  title: string;
  subtitle: string;
  chapters: Chapter[];
}

export interface Spec {
  level: LevelSlug;
  board: 'Edexcel' | 'Cambridge';
  slug: string; // folder name + URL part
  name: string;
  code: string;
  status: 'live' | 'soon';
  blurb: string;
  units: Unit[];
}

export const LEVELS: Record<LevelSlug, { title: string; long: string; emoji: string; blurb: string }> = {
  'o-level': {
    title: 'O Level',
    long: 'O Level / IGCSE Physics',
    emoji: '🌱',
    blurb: 'IGCSE and O Level Physics for Edexcel and Cambridge, organised by specification.',
  },
  'a-level': {
    title: 'A Level',
    long: 'A Level Physics',
    emoji: '🚀',
    blurb: 'AS and A Level Physics for Edexcel and Cambridge, organised by specification.',
  },
};

const edexcelModularUnits: Unit[] = [
  {
    n: 1,
    slug: 'unit-1',
    title: 'Unit 1',
    subtitle: 'Modular Physics · Topics 1–4 (4WPH1)',
    chapters: [
      {
        n: 1,
        slug: 'topic-1-forces-and-motion',
        title: 'Forces and Motion',
        emoji: '🚗',
        color: 'sky',
        spec: '1.1 – 1.33P',
        blurb: 'Units, speed, acceleration, graphs, forces, Newton’s laws, momentum and moments.',
      },
      {
        n: 2,
        slug: 'topic-2-electricity',
        title: 'Electricity',
        emoji: '⚡',
        color: 'sun',
        spec: '2.1 – 2.28P',
        blurb: 'Circuits, resistance, I–V graphs, sensors, power, energy, charge and static.',
      },
      {
        n: 3,
        slug: 'topic-3-energy-resources-and-energy-transfer',
        title: 'Energy Resources and Energy Transfer',
        emoji: '🔋',
        color: 'mint',
        spec: '3.1 – 3.19P',
        blurb: 'Energy stores, pathways, conservation, efficiency and energy resources.',
      },
      {
        n: 4,
        slug: 'topic-4-solids-liquids-and-gases',
        title: 'Solids, Liquids and Gases (Part 1)',
        emoji: '🧊',
        color: 'coral',
        spec: '4.1 – 4.15P',
        blurb: 'Density, pressure, states of matter, upthrust and heat.',
      },
    ],
  },
  {
    n: 2,
    slug: 'unit-2',
    title: 'Unit 2',
    subtitle: 'Modular Physics · Topics 5–9 (4WPH2)',
    chapters: [
      {
        n: 5,
        slug: 'topic-5-waves',
        title: 'Waves',
        emoji: '🌊',
        color: 'sky',
        spec: '5.1 – 5.29P',
        blurb: 'Wave basics, the wave equation, the EM spectrum, reflection, refraction, total internal reflection and sound.',
      },
      {
        n: 6,
        slug: 'topic-6-solids-liquids-and-gases-part-2',
        title: 'Solids, Liquids and Gases (Part 2)',
        emoji: '🎈',
        color: 'mint',
        spec: '6.1 – 6.8',
        blurb: 'Kinetic theory, gas pressure, absolute zero, the Kelvin scale, the pressure law and Boyle’s law.',
      },
      {
        n: 7,
        slug: 'topic-7-magnetism-and-electromagnetism',
        title: 'Magnetism and Electromagnetism',
        emoji: '🧲',
        color: 'coral',
        spec: '7.1 – 7.20P',
        blurb: 'Magnets and fields, electromagnets, the motor effect, induction, generators and transformers.',
      },
      {
        n: 8,
        slug: 'topic-8-radioactivity-and-particles',
        title: 'Radioactivity and Particles',
        emoji: '☢️',
        color: 'sun',
        spec: '8.1 – 8.26',
        blurb: 'Atoms, isotopes, radiation, nuclear equations, half-life, fission and fusion.',
      },
      {
        n: 9,
        slug: 'topic-9-astrophysics',
        title: 'Astrophysics',
        emoji: '🔭',
        color: 'grape',
        spec: '9.1 – 9.18P',
        blurb: 'Gravity and orbits, the life cycle of stars, the HR diagram, the Big Bang and red-shift.',
      },
    ],
  },
];

export const SPECS: Spec[] = [
  // ---------- O Level ----------
  {
    level: 'o-level',
    board: 'Edexcel',
    slug: 'edexcel-igcse-modular',
    name: 'Edexcel IGCSE Physics (Modular)',
    code: '4WPH1 & 4WPH2',
    status: 'live',
    blurb: 'Unit 1 (Topics 1–4) and Unit 2 (Topics 5–9) in specification order.',
    units: edexcelModularUnits,
  },
  {
    level: 'o-level',
    board: 'Edexcel',
    slug: 'edexcel-igcse-physics-4ph1',
    name: 'Edexcel IGCSE Physics',
    code: '4PH1',
    status: 'soon',
    blurb: 'The linear Edexcel IGCSE Physics specification.',
    units: [],
  },
  {
    level: 'o-level',
    board: 'Cambridge',
    slug: 'cambridge-igcse-physics-0625',
    name: 'Cambridge IGCSE Physics',
    code: '0625',
    status: 'soon',
    blurb: 'Cambridge IGCSE Physics.',
    units: [],
  },
  {
    level: 'o-level',
    board: 'Cambridge',
    slug: 'cambridge-o-level-physics-5054',
    name: 'Cambridge O Level Physics',
    code: '5054',
    status: 'soon',
    blurb: 'Cambridge O Level Physics.',
    units: [],
  },
  // ---------- A Level ----------
  {
    level: 'a-level',
    board: 'Edexcel',
    slug: 'edexcel-international-a-level-physics',
    name: 'Edexcel International A Level Physics',
    code: '',
    status: 'soon',
    blurb: 'Edexcel International AS and A Level Physics.',
    units: [],
  },
  {
    level: 'a-level',
    board: 'Cambridge',
    slug: 'cambridge-a-level-physics-9702',
    name: 'Cambridge International AS & A Level Physics',
    code: '9702',
    status: 'soon',
    blurb: 'Cambridge International AS and A Level Physics.',
    units: [],
  },
];

// ---------- helpers ----------
export const BOARDS = ['Edexcel', 'Cambridge'] as const;
export const specsFor = (level: LevelSlug) => SPECS.filter((s) => s.level === level);
export const findSpec = (slug: string) => SPECS.find((s) => s.slug === slug);
export const specPath = (s: Spec) => `${s.level}/${s.slug}`;
export const liveSpecs = () => SPECS.filter((s) => s.status === 'live');

export const findChapter = (specSlug: string, unitSlug: string, chapterSlug: string) => {
  const spec = findSpec(specSlug);
  const unit = spec?.units.find((u) => u.slug === unitSlug);
  const chapter = unit?.chapters.find((c) => c.slug === chapterSlug);
  return spec && unit && chapter ? { spec, unit, chapter } : undefined;
};

// Every (spec, unit, chapter) triple of the live specifications.
export const allChapters = () =>
  liveSpecs().flatMap((spec) => spec.units.flatMap((unit) => unit.chapters.map((chapter) => ({ spec, unit, chapter }))));

// Tailwind classes per colour (written out in full so Tailwind keeps them).
export const COLORS = {
  sky: { soft: 'bg-sky-soft', text: 'text-sky', badge: 'bg-sky text-white' },
  sun: { soft: 'bg-sun-soft', text: 'text-amber-600', badge: 'bg-sun text-ink' },
  mint: { soft: 'bg-mint-soft', text: 'text-emerald-700', badge: 'bg-mint text-white' },
  coral: { soft: 'bg-coral-soft', text: 'text-coral', badge: 'bg-coral text-white' },
  grape: { soft: 'bg-grape-soft', text: 'text-violet-700', badge: 'bg-grape text-white' },
} as const;
