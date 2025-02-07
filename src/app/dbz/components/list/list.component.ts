
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  standalone: false,
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})

export class ListComponent {

  @Input()
  public characterList: Character[] = [{
    id: '',
    name:'Trunk',
    power: 10
  }]

  @Output()
  public onDeleteId: EventEmitter<string>  = new EventEmitter();

  onDeletedCharacter(id?:string): void {
    //TODO
    if(!id) return;
    console.log(id)
    this.onDeleteId.emit(id);
  }
}
