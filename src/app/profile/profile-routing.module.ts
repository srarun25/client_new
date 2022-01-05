import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEduComponent } from './components/exp/add-edu/add-edu.component';
import { AddExpComponent } from './components/exp/add-exp/add-exp.component';
import { CreateProfileComponent } from './components/profile/create-profile/create-profile.component';
import { DisplayProfileItemsComponent } from './components/profile/display-profile-items/display-profile-items.component';
import { DisplayProfileComponent } from './components/profile/display-profile/display-profile.component';
import { DisplayProfilesComponent } from './components/profile/display-profiles/display-profiles.component';

const routes: Routes = [
  {
    path: 'create-profile',
    component: CreateProfileComponent,
  },
  {
    path: 'add-exp',
    component: AddExpComponent,
  },
  {
    path: 'add-edu',
    component: AddEduComponent,
  },
  {
    path: 'display-profile/:id',
    component: DisplayProfileComponent,
  },
  { path: 'display-profiles', component: DisplayProfilesComponent },
  { path: 'display-profile-items', component: DisplayProfileItemsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}
