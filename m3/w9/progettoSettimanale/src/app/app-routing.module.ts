import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivePostsComponent } from './components/active-posts/active-posts.component';
import { InactivePostsComponent } from './components/inactive-posts/inactive-posts.component';
import { HomeComponent } from './components/home/home.component';
import { DettaglioComponent } from './components/dettaglio/dettaglio.component';
import { UsersComponent } from './components/users/users.component';
import { UserChildComponent } from './components/user-child/user-child.component';

const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "active",
        component: ActivePostsComponent
    },
    {
        path: "inactive",
        component: InactivePostsComponent
    },
    {
        path: "active/:id",
        component: DettaglioComponent
    },
    {
        path: "inactive/:id",
        component: DettaglioComponent
    },
    {
        path: "users",
        component: UsersComponent,
        children: [
            {
                path: ":id",
                component: UserChildComponent
            }
        ]
    },
    {
        path: "**",
        redirectTo: ""
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
