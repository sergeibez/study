import { ModuleWithProviders } from "@angular/core";
import { RouterModule } from "@angular/router";
import { UserDetailsComponent } from "./user-details/user-details.component";
import { UserMainComponent } from "./user-main/user-main.component";
import { UserSectionComponent } from "./user-section/user-section.component";
import { UsersResolve } from "./users-resolve.service";
import { UserResolve } from "./user.resolve-service";

const userRoutes = [
    {
        path: '',
        component: UserSectionComponent,
        children: [
            {
                path: '',
                component: UserMainComponent,
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