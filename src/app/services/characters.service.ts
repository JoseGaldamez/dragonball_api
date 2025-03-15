import { Injectable } from '@angular/core';
import { CharactersResponse } from '../models/characters.model';
import { DetailsResponse } from '../models/details.model';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  constructor() {}

  async getAllCharacters(page: number) {
    const response = await fetch(
      'https://dragonball-api.com/api/characters?page=' + page
    );
    const responseJson: CharactersResponse = await response.json();
    return responseJson.items;
  }

  async getCharacterById(id: number) {
    const response = await fetch(
      'https://dragonball-api.com/api/characters/' + id
    );
    const responseJson: DetailsResponse = await response.json();
    return responseJson;
  }
}
