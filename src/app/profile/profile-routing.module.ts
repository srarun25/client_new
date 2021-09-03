import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEduComponent } from './components/exp/add-edu/add-edu.component';
import { AddExpComponent } from './components/exp/add-exp/add-exp.component';
import { CreateProfileComponent } from './components/profile/create-profile/create-profile.component';

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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}
