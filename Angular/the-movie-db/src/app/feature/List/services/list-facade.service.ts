import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListFacadeService {

  constructor() { }

  loadData(type:string,subtype:string){
    switch(type){
      case 'movie':{
        break;
      }
      case 'tv':{
        break;
      }
      case 'people':{
        break;
      }
    }

  }
}
