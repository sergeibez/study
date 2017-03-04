import { Component, Input } from "@angular/core";
import { User } from "../../shared/models/user";

@Component({
    selector: 'user-profile',
    templateUrl: './user-profile.component.html',
    styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
    @Input() user: User;
}