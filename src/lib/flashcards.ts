// Flashcard decks live in src/data/flashcards/<chapter-slug>.json
export interface Card {
  tag?: string;
  q: string[];
  a: string[];
}
export interface Deck {
  chapterTitle: string;
  sections: { title: string; spec: string; cards: Card[] }[];
}

const files = import.meta.glob<Deck>('../data/flashcards/*.json', { eager: true, import: 'default' });

export const getDeck = (chapterSlug: string): Deck | undefined => {
  const key = Object.keys(files).find((k) => k.endsWith(`/${chapterSlug}.json`));
  return key ? files[key] : undefined;
};

export const cardCount = (deck?: Deck) => (deck ? deck.sections.reduce((n, s) => n + s.cards.length, 0) : 0);
