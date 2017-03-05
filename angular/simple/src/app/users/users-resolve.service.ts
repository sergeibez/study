import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot } from "@angular/router";
import { User } from "../shared/models/user";
import { UserService } from "../shared/services/user.service";
import { Observable } from "rxjs";

@Injectable()
export class UsersResolve implements Resolve<User[]> {
    constructor(private service: UserService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<User[]> {
        return this.service.getUsers();
    }
}
