import { Component, Input, OnInit } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';
import { SingleCharacter } from 'src/app/models/characters.model';

@Component({
  selector: 'app-single-character',
  templateUrl: './single-character.component.html',
  styleUrls: ['./single-character.component.scss'],
})
export class SingleCharacterComponent implements OnInit {
  @Input() character: SingleCharacter | null = null;

  constructor(private router: NavController) {}

  ngOnInit() {}

  goToDetails() {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        id: this.character?.id.toString(),
      },
    };

    this.router.navigateForward(['/details'], navigationExtras);
  }
}
