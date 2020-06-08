import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToastrModule } from "ngx-toastr";
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { FixedPluginModule} from './shared/fixedplugin/fixedplugin.module';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';

//import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UserComponent } from './pages/user/user.component';
import { TableComponent } from './pages/table/table.component';
import { TypographyComponent } from './pages/typography/typography.component';
import { IconsComponent } from './pages/icons/icons.component';
import { MapsComponent } from './pages/maps/maps.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';
import { UpgradeComponent } from './pages/upgrade/upgrade.component';
import { LoginComponent } from './pages/login/login.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SignupComponent } from './pages/signup/signup.component';
import { LandingComponent } from './pages/landing/landing.component';
 import { AboutusComponent } from './pages/aboutus/aboutus.component';
 import { PrivacynoticeComponent } from './pages/privacynotice/privacynotice.component';
 import { TermsofuseComponent } from './pages/termsofuse/termsofuse.component';
 import { ContactusComponent } from './pages/contactus/contactus.component';
 import { MerchantapplicationComponent } from './pages/merchantapplication/merchantapplication.component';
 
import { ProcessingComponent } from './pages/processing/processing.component';
import { GatewayservicesComponent } from './pages/gatewayservices/gatewayservices.component';

import { BannerService } from '../app/services/banner.service';
import { ContactService } from '../app/services/contact.service';
import { MerchantService } from '../app/services/merchant.service';
import {HttpInterceptorService} from '../app/services/http-interceptor.service';
import { LocalStorageService } from 'ngx-webstorage';
@NgModule({
  declarations: [
    AppComponent,
    //AdminLayoutComponent,
    DashboardComponent,
    UserComponent,
    TableComponent,
    UpgradeComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    LoginComponent,
    SignupComponent,
    LandingComponent,
	AboutusComponent,
	PrivacynoticeComponent,
	TermsofuseComponent,
	ContactusComponent,
	MerchantapplicationComponent,
ProcessingComponent,
	GatewayservicesComponent,
	
  ],
  imports: [
    BrowserAnimationsModule,
	  HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
    RouterModule.forRoot(AppRoutes,{
      useHash: true
    }),
    SidebarModule,
    NavbarModule,
    ToastrModule.forRoot(),
    FooterModule,
    FixedPluginModule,
	  FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
   providers: [BannerService,HttpInterceptorService,ContactService,MerchantService],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}