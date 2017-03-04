import { Component, Input, EventEmitter, Output } from "@angular/core";
import { User } from "../../shared/models/user";

@Component({
    selector: 'user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
    @Input() users: User[];
    @Input() activeUser: User;

    @Output() userSelected = new EventEmitter();

    selectUser(user) {
        this.userSelected.emit({user: user});
    }
}
