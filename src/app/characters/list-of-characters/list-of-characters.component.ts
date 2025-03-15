import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SingleCharacterComponent } from '../single-character/single-character.component';
import { CharactersService } from 'src/app/services/characters.service';
import { SingleCharacter } from 'src/app/models/characters.model';

import {
  InfiniteScrollCustomEvent,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonList,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-list-of-characters',
  templateUrl: './list-of-characters.component.html',
  styleUrls: ['./list-of-characters.component.scss'],
  imports: [
    CommonModule,
    SingleCharacterComponent,
    IonInfiniteScroll,
    IonInfiniteScrollContent,
    IonList,
  ],
})
export class ListOfCharactersComponent implements OnInit {
  list: SingleCharacter[] = [];
  page: number;

  constructor(private characterService: CharactersService) {
    this.page = 1;
  }

  ngOnInit() {
    this.getCharacters();
  }

  async getCharacters() {
    const newCharactes = await this.characterService.getAllCharacters(
      this.page
    );
    this.list = [...this.list, ...newCharactes];
    this.page = this.page + 1;
  }

  // async obtenerAnterior() {
  //   if (this.page === 1) {
  //     return;
  //   }
  //   const whichPage = this.page - 1;
  //   const newCharactes = await this.characterService.getAllCharacters(
  //     whichPage
  //   );
  //   this.list = newCharactes;
  //   this.page = whichPage;
  // }
  // async obtenerSiguiente() {
  //   if (this.page === 6) {
  //     return;
  //   }
  //   const whichPage = this.page + 1;
  //   const newCharactes = await this.characterService.getAllCharacters(
  //     whichPage
  //   );
  //   this.list = newCharactes;
  //   this.page = whichPage;
  // }

  traerMasPersonajes(event: InfiniteScrollCustomEvent) {
    setTimeout(() => {
      this.getCharacters();
      event.target.complete();
    }, 1000);
  }
}
