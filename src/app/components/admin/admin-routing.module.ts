import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminDashboardComponent} from './components/admin-dashboard/admin-dashboard.component';
import {HomeComponent} from './components/home/home.component';
import {ContactsComponent} from './components/contacts/contacts.component';
import {AboutComponent} from './components/about/about.component';
import {AuthGuard} from '../../guards/auth.guard';

const routes: Routes = [
  {path: '', component: AdminDashboardComponent,
     children: [
      {path: 'home', component: HomeComponent},
      {path: 'about', component: AboutComponent},
      {path: 'contacts', component: ContactsComponent},
      {path: '', redirectTo: '/admin/home', pathMatch: 'full'},
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
