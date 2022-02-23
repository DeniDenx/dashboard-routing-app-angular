import { UserResolver } from './resolvers/user.resolver';
import { ContactsDetailsComponent } from './components/contacts-details/contacts-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { AboutComponent } from './components/about/about.component';
import {UsersResolver} from './resolvers/users.resolver';


const routes: Routes = [
  {
    path: '', component: AdminDashboardComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'contacts', component: ContactsComponent, resolve: {
        users: UsersResolver
        } },
      {
        path: 'contacts/user/:id', component: ContactsDetailsComponent, resolve: {
          user: UserResolver
        }
      },
      { path: 'contacts/user', redirectTo: '/admin/contacts', pathMatch: 'full' },
      { path: '', redirectTo: '/admin/home', pathMatch: 'full' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
