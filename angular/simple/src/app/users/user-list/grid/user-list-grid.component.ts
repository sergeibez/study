import { Component, Input, EventEmitter, Output } from "@angular/core";
import { User } from "../../../shared/models/user";

@Component({
    selector: 'user-list-grid',
    templateUrl: './user-list-grid.component.html',
    styleUrls: ['./user-list-grid.component.css']
})
export class UserListGridComponent {
    @Input() users: User[];
    @Input() activeUser: User;

    @Output() userSelected = new EventEmitter();

    selectUser(user) {
        this.userSelected.emit({user: user});
    }
}
