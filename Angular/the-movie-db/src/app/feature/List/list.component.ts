import { Component, OnInit } from '@angular/core';
import { ListFacadeService } from './services/list-facade.service';
import * as MovieListSelector from './state/selectors/movie-list.selectors';
import * as TVListSelector from './state/selectors/tv-list.selectors';
import * as PeopleListSelector from './state/selectors/people-list.selectors';
import { ActivatedRoute } from '@angular/router';
import { listSelectorState } from './models/list-state.model';
import { PageSingleCardViewModel } from '../home/model/cardModel';
import {
  BehaviorSubject,
  combineLatest,
  merge,
  Observable,
  of,
  switchMap,
} from 'rxjs';
import { SharedFacadeService } from '../../shared/services/shared.facade.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent implements OnInit {
  type: string;
  subtype: string;
  listData: listSelectorState;
  listViewContent: PageSingleCardViewModel[];
  pageNo: number = 1;
  queryParams: string = '';
  loading$: Observable<boolean>;
  isFilterClicked: boolean = false;
  queryParamObject = {};
  isUrlChange = new BehaviorSubject<boolean>(false);
  constructor(
    private listFacade: ListFacadeService,
    private sharedFacadeService: SharedFacadeService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.isUrlChange.next(false);
    if (this.route.params) {
      this.route.paramMap.subscribe((params) => {
        this.type = params.get('list-type');
        this.subtype = params.get('list-subtype');
        this.isUrlChange.next(true);
      });
      

      this.route.queryParamMap.subscribe((queryParams) => {
        this.queryParamObject = {};
        queryParams.keys.forEach((key) => {
          this.queryParamObject[key] = queryParams.get(key);
        });
        // console.log(this.route.snapshot.paramMap.get('list-type'));
        if(this.type===this.route.snapshot.paramMap.get('list-type'))
          this.listFacade.loadData(
            this.type,
            this.subtype,
            this.sharedFacadeService.getAPIParams(
              this.listFacade.getQueryListObject(this.queryParamObject)
            )
          );
        })
        this.isUrlChange.next(true);
  
      
  
      this.isUrlChange.subscribe((res) => {
        if (res) this.selectData();
      });
    }

    
  }

  selectData() {
    this.listData = this.listFacade.getSelectedStoreData(
      this.type,
      this.subtype
    );
    if (this.listData) this.loading$ = this.listData.loading$;
    this.listData.data$.subscribe((res) => {
      if (res) {
        this.listViewContent =
          this.sharedFacadeService.getSinglePageCardViewData(res.results);
        for (let i = 0; i < this.listViewContent.length; i++) {
          this.listViewContent[i].cardType = this.type;
        }
      }
    });
  }

  OnClickLoadMore() {
   
    let qParam = { ...this.queryParamObject };
    this.pageNo++;
    qParam['page'] = this.pageNo;
    console.log('load for query params', qParam);
    this.listFacade.loadMoreData(
      this.type,
      this.subtype,
      this.sharedFacadeService.getAPIParams(
        this.listFacade.getQueryListObject(qParam)
      )
    );
    
  }
}
