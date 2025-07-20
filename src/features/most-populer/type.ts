export interface IMostPopulerArticles {
  results: Result[];
}

export interface Result {
  uri: string;
  url: string;
  id: number;
  asset_id: number;
  source: string;
  published_date: string;
  updated: string;
  section: string;
  subsection: string;
  nytdsection: string;
  adx_keywords: string;
  column: any;
  byline: string;
  type: string;
  title: string;
  abstract: string;
  des_facet: string[];
  org_facet: any[];
  per_facet: any[];
  geo_facet: any[];
  media: Medum[];
  eta_id: number;
}

export interface Medum {
  type: string;
  subtype: string;
  caption: string;
  copyright: string;
  approved_for_syndication: number;
  "media-metadata": Metadaum[];
}

export interface Metadaum {
  url: string;
  format: string;
  height: number;
  width: number;
}
