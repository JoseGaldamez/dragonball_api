import { Injectable } from '@angular/core';
import { CharactersResponse } from '../models/characters.model';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  constructor() {}

  async getAllCharacters() {
    const response = await fetch('https://dragonball-api.com/api/characters');
    const responseJson: CharactersResponse = await response.json();
    return responseJson.items;
  }
}
