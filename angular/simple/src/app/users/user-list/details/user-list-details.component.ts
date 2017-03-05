import { Component, Input } from "@angular/core";
import { User } from "../../../shared/models/user";

@Component({
    selector: 'user-list-details',
    templateUrl: './user-list-details.component.html',
    styleUrls: ['./user-list-details.component.css']
})
export class UserListDetailsComponent {
    @Input() user: User;
}