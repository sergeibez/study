import { Component, OnInit } from "@angular/core";
import { User } from "../../../shared/models/user";
import { UserService } from "../../../shared/services/user.service";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'user-list-main',
    templateUrl: './user-list-main.component.html'
})
export class UserListMainComponent implements OnInit {
    users: User[];

    activeUser: User;

    constructor(
        private service: UserService,
        private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.users = this.route.snapshot.data['users'];
    }

    selectUser(event) {
        this.activeUser = event.user;
    }

    onUserCreated(event) {
        console.log("UserMainComponent.onUserCreated");
        this.service.addUser(event.user);
    }
}
