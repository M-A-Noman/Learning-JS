import { Injectable } from '@angular/core';
import { ListService } from './list.service';
import { Store } from '@ngrx/store';
import { listModuleState } from '../models/list-state.model';

@Injectable({
  providedIn: 'root',
})
export class ListFacadeService {

  constructor(private listService: ListService, private store:Store<listModuleState>) {}
 
  loadData(type: string, subtype: string,pageNo:number) {
    this.listService.loadStoreData(type,subtype,pageNo)
  }
  
  selectSelectorData(loadingSelector, dataSelector, errorSelector) {
    return this.listService.selectListData(loadingSelector,dataSelector,errorSelector)
  }
  
  getList(type: string, subType: string, pageNumber: number) {
    return this.listService.getListData(type, subType, pageNumber);
  }

  getSelectedStoreData(type:string,subtype:string){
    return this.listService.selectStoreData(type,subtype);
  }
}
