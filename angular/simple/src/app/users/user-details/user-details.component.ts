import { Component, OnInit } from "@angular/core";
import { User } from "../../shared/models/user";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
    selector: 'user-details',
    templateUrl: './user-details.component.html'
})
export class UserDetailsComponent implements OnInit{
    user: User;

    constructor(
        private route: ActivatedRoute,
        private router: Router) {
    }

    ngOnInit(): void {
        this.user = this.route.snapshot.data['user'];
    }

    goBack() {
        window.history.back();
    }

    goAbout() {
        this.router.navigate(['/about'])
    }
}
