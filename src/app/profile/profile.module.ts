import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ProfileService } from './services/profile.service';
import { CreateProfileComponent } from './components/profile/create-profile/create-profile.component';
import { FormsModule } from '@angular/forms';
import { httpInterceptors } from '../shared/interceptors';
import { AddEduComponent } from './components/exp/add-edu/add-edu.component';
import { AddExpComponent } from './components/exp/add-exp/add-exp.component';
import { DisplayProfileComponent } from './components/profile/display-profile/display-profile.component';
import { DisplayProfileItemsComponent } from './components/profile/display-profile-items/display-profile-items.component';
import { DisplayProfilesComponent } from './components/profile/display-profiles/display-profiles.component';
import { ProfileAboutComponent } from './components/profile/display-profile/profile-about/profile-about.component';
import { ProfileCredsComponent } from './components/profile/display-profile/profile-creds/profile-creds.component';
import { ProfileEducationComponent } from './components/profile/display-profile/profile-education/profile-education.component';
import { ProfileExperienceComponent } from './components/profile/display-profile/profile-experience/profile-experience.component';
import { ProfileGithubComponent } from './components/profile/display-profile/profile-github/profile-github.component';
import { ProfileHeaderComponent } from './components/profile/display-profile/profile-header/profile-header.component';

@NgModule({
  declarations: [CreateProfileComponent, AddEduComponent, AddExpComponent, DisplayProfileComponent, DisplayProfileItemsComponent, DisplayProfilesComponent, ProfileAboutComponent, ProfileCredsComponent, ProfileEducationComponent, ProfileExperienceComponent, ProfileGithubComponent, ProfileHeaderComponent],
  imports: [CommonModule, FormsModule, HttpClientModule, ProfileRoutingModule],
  providers: [ProfileService, httpInterceptors],
})
export class ProfileModule {}
