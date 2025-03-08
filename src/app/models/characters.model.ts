export interface CharactersResponse {
  items: SingleCharacter[];
  meta: Meta;
  links: Links;
}

export interface SingleCharacter {
  id: number;
  name: string;
  ki: string;
  maxKi: string;
  race: string;
  gender: string;
  description: string;
  image: string;
  affiliation: string;
  deletedAt: null;
}

export interface Links {
  first: string;
  previous: string;
  next: string;
  last: string;
}

export interface Meta {
  totalItems: number;
  itemCount: number;
  itemsPerPage: number;
  totalPages: number;
  currentPage: number;
}
