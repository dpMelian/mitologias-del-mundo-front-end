export interface WPPageSEO {
  title?: string;
  metaDesc?: string;
  canonical?: string;
}

export interface WPPage {
  id: string;
  title: string;
  slug: string;
  content: string;
  blocks: any[];
  seo?: WPPageSEO;
}

export interface GetAllPagesResponse {
  pages: {
    nodes: WPPage[];
  };
}
