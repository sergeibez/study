import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { NotFoundComponent } from "./not-found/not-found.component";

const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full'
    },
    {
        path: 'user',
        loadChildren: 'app/users/user.module#UserModule'
    },
    {path: 'about', component: AboutComponent},
    {path: '**', component: NotFoundComponent},
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
