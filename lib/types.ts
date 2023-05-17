export type MotoPageData = {
  slug: string;
  name: string;
  category: string;
  phrase: string;
  prices: {
    dollars?: number;
    pen?: number;
  };
  colors: { rgb: string; pictureUrl: string; description: string }[];
  description: {
    paragraphs: string[];
  };
};
