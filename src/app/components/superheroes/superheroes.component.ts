import {Component, OnInit} from '@angular/core';
import {SuperheroModel} from '../../models/superhero.model';

@Component({
  selector: 'app-superheroes',
  templateUrl: './superheroes.component.html',
  styleUrls: ['./superheroes.component.css']
})
export class SuperheroesComponent implements OnInit {
  defeatedSuperheroes: SuperheroModel[] = [];
  superheroes: SuperheroModel[] = [
    {
      id: 1,
      name: 'Thanos',
      lifeScore: 100
    },
    {
      id: 2,
      name: 'Iron man',
      lifeScore: 100
    },
    {
      id: 3,
      name: 'Wanda',
      lifeScore: 90
    },
    {
      id: 4,
      name: 'Thor',
      lifeScore: 100
    }, {
      id: 5,
      name: 'Black panther',
      lifeScore: 100
    }, {
      id: 6,
      name: 'Captain America',
      lifeScore: 100
    },
    {
      id: 7,
      name: 'Blackwidow',
      lifeScore: 85
    },
    {
      id: 8,
      name: 'Vision',
      lifeScore: 100
    },
    {
      id: 9,
      name: 'Groot',
      lifeScore: 50
    },
    {
      id: 10,
      name: 'Gamora',
      lifeScore: 75
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  defeatHero(heroId: number): void {
    const index: number = this.superheroes.findIndex(hero => hero.id === heroId);
    const defeatedHero = this.superheroes.splice(index, 1);
    this.defeatedSuperheroes.push(defeatedHero[0]);
  }

}
