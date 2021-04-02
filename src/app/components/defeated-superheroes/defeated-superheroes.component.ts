import {Component, Input, OnInit} from '@angular/core';
import {SuperheroModel} from '../../models/superhero.model';

@Component({
  selector: 'app-defeated-superheroes',
  templateUrl: './defeated-superheroes.component.html',
  styleUrls: ['./defeated-superheroes.component.css']
})
export class DefeatedSuperheroesComponent implements OnInit {
  @Input() heroes: SuperheroModel[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }

}
