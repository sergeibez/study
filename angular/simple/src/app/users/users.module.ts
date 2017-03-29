import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { userRouting } from "./users.routing";
import { UsersSectionComponent } from "./section/users-section.component";
import { UserListMainComponent } from "./user-list/main/user-list-main.component";
import { UserListGridComponent } from "./user-list/grid/user-list-grid.component";
import { UserListDetailsComponent } from "./user-list/details/user-list-details.component";
import { UserListFormComponent } from "./user-list/form/user-list-form.component";
import { UserDetailsComponent } from "./user-details/user-details.component";
import { UserService } from "../shared/services/user.service";
import { UsersResolve } from "./users-resolve.service";
import { UserResolve } from "./user.resolve-service";

import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

@NgModule({
    declarations: [
        UsersSectionComponent,
        UserListMainComponent,
        UserListGridComponent,
        UserListDetailsComponent,
        UserListFormComponent,
        UserDetailsComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        userRouting
    ],
    providers: [
        UserService,
        UsersResolve,
        UserResolve
    ]
})
export class UsersModule {}
