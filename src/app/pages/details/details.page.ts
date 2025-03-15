import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonIcon,
  IonButton,
} from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';
import { CharactersService } from 'src/app/services/characters.service';
import { DetailsResponse } from 'src/app/models/details.model';
import { NavController } from '@ionic/angular';

import { addIcons } from 'ionicons';
import { arrowBackOutline, addCircle } from 'ionicons/icons';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
  standalone: true,
  imports: [
    IonIcon,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonButton,
  ],
})
export class DetailsPage implements OnInit {
  character: DetailsResponse | null = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private characterService: CharactersService,
    private router: NavController
  ) {
    addIcons({ arrowBackOutline, addCircle });
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params) => {
      console.log(params);
      this.getThisCharacter(params['id']);
    });
  }

  async getThisCharacter(id: number) {
    this.character = await this.characterService.getCharacterById(id);
  }

  irHaciaAtras() {
    this.router.back();
  }
}
