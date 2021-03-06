import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, Router } from "@angular/router";
import { User } from "../shared/models/user";
import { UserService } from "../shared/services/user.service";
import { Observable } from "rxjs";

@Injectable()
export class UserResolve implements Resolve<User> {
    constructor(
        private service: UserService,
        private router: Router) {
    }

    resolve(route: ActivatedRouteSnapshot): Observable<User> {
        let userId = route.params['userId'];
        return this.service.getUser(userId);
        // return this.service.getUser(userId).then(user => {
        //     if (user) {
        //         return user;
        //     } else {
        //         // navigate the user back to the main page
        //         this.router.navigate(['/users']);
        //         return false;
        //     }
        // });
    }
}
