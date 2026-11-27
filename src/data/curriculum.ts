// The book order of the course. Add new units / chapters here.
// A chapter's lessons are the Markdown files inside its folder:
//   src/content/lessons/igcse/<unit.slug>/<chapter.slug>/*.md

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

export const IGCSE: Unit[] = [
  {
    n: 1,
    slug: 'unit-1',
    title: 'Unit 1',
    subtitle: 'Modular Physics · Topics 1–4 (Edexcel 4WPH1)',
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
    subtitle: 'Modular Physics · Topics 5–9 (Edexcel 4WPH2)',
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

export const findChapter = (unitSlug: string, chapterSlug: string) => {
  const unit = IGCSE.find((u) => u.slug === unitSlug);
  const chapter = unit?.chapters.find((c) => c.slug === chapterSlug);
  return unit && chapter ? { unit, chapter } : undefined;
};

// Tailwind classes per colour (written out in full so Tailwind keeps them).
export const COLORS = {
  sky: { soft: 'bg-sky-soft', text: 'text-sky', badge: 'bg-sky text-white' },
  sun: { soft: 'bg-sun-soft', text: 'text-amber-600', badge: 'bg-sun text-ink' },
  mint: { soft: 'bg-mint-soft', text: 'text-emerald-700', badge: 'bg-mint text-white' },
  coral: { soft: 'bg-coral-soft', text: 'text-coral', badge: 'bg-coral text-white' },
  grape: { soft: 'bg-grape-soft', text: 'text-violet-700', badge: 'bg-grape text-white' },
} as const;
