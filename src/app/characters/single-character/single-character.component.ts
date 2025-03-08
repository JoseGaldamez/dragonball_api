import { Component, Input, OnInit } from '@angular/core';
import { SingleCharacter } from 'src/app/models/characters.model';

@Component({
  selector: 'app-single-character',
  templateUrl: './single-character.component.html',
  styleUrls: ['./single-character.component.scss'],
})
export class SingleCharacterComponent implements OnInit {
  @Input() character: SingleCharacter | null = null;

  constructor() {}

  ngOnInit() {}
}
