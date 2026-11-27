// Which study resources exist for a chapter.
import { getCollection } from 'astro:content';

// Flashcards: src/data/flashcards/<spec>/<chapter>.json
export interface Card {
  tag?: string;
  q: string[];
  a: string[];
}
export interface Deck {
  chapterTitle: string;
  sections: { title: string; spec: string; cards: Card[] }[];
}

const decks = import.meta.glob<Deck>('../data/flashcards/*/*.json', { eager: true, import: 'default' });

export const getDeck = (specSlug: string, chapterSlug: string): Deck | undefined => {
  const key = Object.keys(decks).find((k) => k.endsWith(`/${specSlug}/${chapterSlug}.json`));
  return key ? decks[key] : undefined;
};
export const cardCount = (deck?: Deck) => (deck ? deck.sections.reduce((n, s) => n + s.cards.length, 0) : 0);

// Practice questions: src/content/practice/<spec>/<chapter>.md  (entry id = "<spec>/<chapter>")
export const getPractice = async (specSlug: string, chapterSlug: string) => {
  const all = await getCollection('practice');
  return all.find((e) => e.id === `${specSlug}/${chapterSlug}`);
};

export interface ChapterResources {
  deck?: Deck;
  cards: number;
  hasPractice: boolean;
}
export const resourcesFor = async (specSlug: string, chapterSlug: string): Promise<ChapterResources> => {
  const deck = getDeck(specSlug, chapterSlug);
  return { deck, cards: cardCount(deck), hasPractice: !!(await getPractice(specSlug, chapterSlug)) };
};
