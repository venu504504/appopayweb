import { Routes } from '@angular/router';

// import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UserComponent } from './pages/user/user.component';
import { TableComponent } from './pages/table/table.component';
import { TypographyComponent } from './pages/typography/typography.component';
import { IconsComponent } from './pages/icons/icons.component';
import { MapsComponent } from './pages/maps/maps.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';
import { UpgradeComponent } from './pages/upgrade/upgrade.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LandingComponent } from './pages/landing/landing.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { PrivacynoticeComponent } from './pages/privacynotice/privacynotice.component';
import { TermsofuseComponent } from './pages/termsofuse/termsofuse.component';

import { ContactusComponent } from './pages/contactus/contactus.component';
import { MerchantapplicationComponent } from './pages/merchantapplication/merchantapplication.component';

 
import { ProcessingComponent } from './pages/processing/processing.component';
import { GatewayservicesComponent } from './pages/gatewayservices/gatewayservices.component';

export const AppRoutes: Routes = [
  { path: 'dashboard',      component: DashboardComponent },
  { path: 'user',           component: UserComponent },
  { path: 'table',          component: TableComponent },
  { path: 'typography',     component: TypographyComponent },
  { path: 'icons',          component: IconsComponent },
  { path: 'maps',           component: MapsComponent },
  { path: 'notifications',  component: NotificationsComponent },
  { path: 'upgrade',        component: UpgradeComponent },
  { path: 'login',          component: LoginComponent },
  { path: 'signup',          component: SignupComponent },
  { path: 'landing',          component: LandingComponent },
    { path: 'aboutus',          component: AboutusComponent },
	  { path: 'privacynotice',          component: PrivacynoticeComponent },
	   { path: 'termsofuse',          component: TermsofuseComponent },
	    { path: 'contactus',          component: ContactusComponent },
		{ path: 'merchantapplication',          component: MerchantapplicationComponent },
		    { path: 'processing',          component: ProcessingComponent },
		    { path: 'gatewayservices',          component: GatewayservicesComponent },
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full',
  },
  

  // {
  //   path: '',
  //   component: AdminLayoutComponent,
  //   children: [
  //       {
  //     path: '',
  //     loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
  // }]},
  {
    path: '**',
    redirectTo: 'landing'
  },
    {
    path: 'signup',
    redirectTo: 'signup'
  }
]

 