import { Component, Output, EventEmitter } from "@angular/core";
import { User } from "../../../shared/models/user";

@Component({
    selector: 'user-list-form',
    templateUrl: './user-list-form.component.html',
    styleUrls: ['./user-list-form.component.css']
})
export class UserListFormComponent {
    @Output() userCreated = new EventEmitter();

    newUser: User = new User();
    active: boolean = true;

    onSubmit() {
        this.userCreated.emit({user: this.newUser});

        this.newUser = new User();
        this.active = false;
        setTimeout(() => this.active = true, 0);
    }
}
