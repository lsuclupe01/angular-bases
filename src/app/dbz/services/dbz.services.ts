import { Injectable } from '@angular/core';
import {v4 as uuid} from 'uuid';
import { Character } from '../interfaces/character.interface';


@Injectable({
  providedIn: 'root'
})
export class DbzService {
  public charactersMain:Character[] = [{
    id: uuid(),
    name:'Krillin',
    power:1000
  },{
    id: uuid(),
    name:'Goku',
    power:9500
  },{
    id: uuid(),
    name:'Vegeta',
    power:7500
  }
  ];

  addCharacter(character:Character ):void {
    const newCharacter: Character = {id: uuid(), ...character}

    console.log('Main Page');
    console.log(newCharacter);
    this.charactersMain.push(newCharacter);
  }
  /*
  onDeleteCharacter(index:number):void{
    console.log('Main Page delete');
    if(index<0) return;
    console.log(index);
    this.charactersMain.splice(index,1);
  }
*/
  onDeleteCharacterById(id:string){
    console.log('Main Page delete');
    console.log(id);
    this.charactersMain = this.charactersMain.filter(character => character.id!==id);
  }
}
