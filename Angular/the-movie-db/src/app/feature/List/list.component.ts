import { Component, OnInit } from '@angular/core';
import { ListFacadeService } from './services/list-facade.service';
import * as MovieListSelector from './state/selectors/movie-list.selectors'
import * as TVListSelector from './state/selectors/tv-list.selectors'
import * as PeopleListSelector from './state/selectors/people-list.selectors'
import { ActivatedRoute } from '@angular/router';
import { listSelectorState } from './models/list-state.model';
import { PageSingleCardViewModel } from '../home/model/cardModel';
import { Observable, of } from 'rxjs';
import { SharedFacadeService } from '../../shared/services/shared.facade.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent implements OnInit{
  
  type:string;
  subtype:string;
  listData:listSelectorState;
  listViewContent:PageSingleCardViewModel[]
  pageNo:number=1;
  constructor(private listFacade:ListFacadeService,private sharedFacadeService:SharedFacadeService,private route:ActivatedRoute){}
  ngOnInit(): void {
      // let data=this.listFacade.selectSelectorData(MovieListSelector.selectPopularMovieListLoading,MovieListSelector.selectPopularMovieListData,MovieListSelector.selectPopularMovieListError)
     
    this.route.paramMap.subscribe((params)=>{
      this.type=params.get('list-type');
      this.subtype=params.get('list-subtype');
      this.listData=this.listFacade.getSelectedStoreData(this.type,this.subtype)
      this.listData.data$.subscribe((res)=>{
        if(res){
            this.listViewContent=(this.sharedFacadeService.getSinglePageCardViewData(res.results));
            for(let i=0;i<this.listViewContent.length;i++){
              this.listViewContent[i].cardType=this.type;
            }
        }
      })
    })


  }

  OnClickLoadMore(){
    this.pageNo++;
    this.listFacade.loadData(this.type,this.subtype,this.pageNo);
  }
}
