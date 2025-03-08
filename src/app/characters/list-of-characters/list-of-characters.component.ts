import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SingleCharacterComponent } from '../single-character/single-character.component';
import { CharactersService } from 'src/app/services/characters.service';
import { SingleCharacter } from 'src/app/models/characters.model';

@Component({
  selector: 'app-list-of-characters',
  templateUrl: './list-of-characters.component.html',
  styleUrls: ['./list-of-characters.component.scss'],
  imports: [CommonModule, SingleCharacterComponent],
})
export class ListOfCharactersComponent implements OnInit {
  list: SingleCharacter[] = [];

  constructor(private characterService: CharactersService) {}

  ngOnInit() {
    this.getCharacters();
  }

  async getCharacters() {
    this.list = await this.characterService.getAllCharacters();
  }
}
