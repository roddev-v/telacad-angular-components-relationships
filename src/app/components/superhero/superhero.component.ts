import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SuperheroModel} from '../../models/superhero.model';

@Component({
  selector: 'app-superhero',
  templateUrl: './superhero.component.html',
  styleUrls: ['./superhero.component.css']
})
export class SuperheroComponent implements OnInit {
  @Input() hero: SuperheroModel;
  @Output() heroClick: EventEmitter<number> = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit(): void {
  }

  getColor(): string {
    if (this.hero.lifeScore > 60) {
      return 'green';
    } else if (this.hero.lifeScore > 40) {
      return 'orange';
    } else {
      return 'red';
    }
  }

  emitEvent(): void {
    this.heroClick.emit(this.hero.id);
  }
}
