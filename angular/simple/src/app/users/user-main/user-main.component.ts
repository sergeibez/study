import { Component, OnInit } from "@angular/core";
import { User } from "../../shared/models/user";
import { UserService } from "../../shared/services/user.service";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'user-main',
    templateUrl: './user-main.component.html'
})
export class UserMainComponent implements OnInit {
    users: User[];

    activeUser: User;

    constructor(
        private service: UserService,
        private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.route.data.forEach((data: {users: User[]}) => this.users = data.users);
    }

    selectUser(event) {
        this.activeUser = event.user;
    }

    onUserCreated(event) {
        this.service.addUser(event.user);
    }
}