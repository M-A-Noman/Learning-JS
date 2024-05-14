import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, MaybeAsync, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";

import { ServersService } from "../servers.service";

interface server{
    id: number,
    name: string,
    status: string;
}

@Injectable()
export class ServerResolver implements Resolve<server>{
    constructor(private serverService: ServersService) { }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<server>|Promise<server>|server {
        return this.serverService.getServer(+route.params['id']);
    }
}