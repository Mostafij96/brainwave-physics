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
    subtitle: 'Modular Physics (Edexcel 4XPH1)',
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
        title: 'Solids, Liquids and Gases',
        emoji: '🧊',
        color: 'coral',
        spec: '4.1 – 4.15P',
        blurb: 'Density, pressure, states of matter, upthrust and heat.',
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
