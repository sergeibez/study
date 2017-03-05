import { ModuleWithProviders } from "@angular/core";
import { RouterModule } from "@angular/router";
import { UserDetailsComponent } from "./user-details/user-details.component";
import { UserListMainComponent } from "./user-list/main/user-list-main.component";
import { UsersComponent } from "./users.component";
import { UsersResolve } from "./users-resolve.service";
import { UserResolve } from "./user.resolve-service";

const userRoutes = [
    {
        path: '',
        component: UsersComponent,
        children: [
            {
                path: '',
                component: UserListMainComponent,
                resolve: {
                    users: UsersResolve
                }
            },
            {
                path: ':userId',
                component: UserDetailsComponent,
                resolve: {
                    user: UserResolve
                }
            },
        ]
    }
];

export const userRouting: ModuleWithProviders = RouterModule.forChild(userRoutes);