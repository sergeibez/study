import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { UserSectionComponent } from "./user-section/user-section.component";
import { UserMainComponent } from "./user-main/user-main.component";
import { UserListComponent } from "./user-list/user-list.component";
import { UserProfileComponent } from "./user-profile/user-profile.component";
import { UserDetailsComponent } from "./user-details/user-details.component";
import { UserFormComponent } from "./user-form/user-form.component";
import { UserService } from "../shared/services/user.service";
import { userRouting } from "./user.routing";
import { UsersResolve } from "./users-resolve.service";
import { UserResolve } from "./user.resolve-service";

@NgModule({
    declarations: [
        UserSectionComponent,
        UserMainComponent,
        UserListComponent,
        UserProfileComponent,
        UserDetailsComponent,
        UserFormComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        userRouting
    ],
    providers: [
        UserService,
        UsersResolve,
        UserResolve
    ]
})
export class UserModule {}
