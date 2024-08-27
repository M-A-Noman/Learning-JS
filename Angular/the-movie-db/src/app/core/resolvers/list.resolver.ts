import { inject} from "@angular/core";
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from "@angular/router";

import { ListFacadeService } from "../../feature/List/services/list-facade.service";

// @Injectable()
export const ListResolver: ResolveFn<any>=(route:ActivatedRouteSnapshot,state:RouterStateSnapshot)=>{
    let type:string=route.paramMap.get('list-type');
    let subtype:string=(route.paramMap.get('list-subtype'));
    const listFacade=inject(ListFacadeService);
    let page=1;
    listFacade.loadData(type,subtype,`language=en-US&page=${page}`);
    listFacade.loadGenres(type);
    // listFacade.isFilterItem.next(false);
    // listFacade.queryParams.next('');
}