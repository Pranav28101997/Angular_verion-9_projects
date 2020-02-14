import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule} from './app-routing.module';
import {rountingComponents} from './app-routing.module'
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginPageComponent } from './login-page/login-page.component';
import { from } from 'rxjs';
import { SignInComponent } from './login-page/sign-in/sign-in.component';
import { FormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PackageSubscriptionComponent } from './package-subscription/package-subscription.component';
import { ViewBalanceComponent } from './package-subscription/view-balance/view-balance.component';
import { RechargeComponent } from './package-subscription/recharge/recharge.component';
import { ViewPacksComponent } from './package-subscription/view-packs/view-packs.component';
import { SubscribeBasepackComponent } from './package-subscription/subscribe-basepack/subscribe-basepack.component';
import { AddChannelsComponent } from './package-subscription/add-channels/add-channels.component';
import { SpecialServiceComponent } from './package-subscription/special-service/special-service.component';
import { SubDetailsComponent } from './package-subscription/sub-details/sub-details.component';
import { UpdateDetailsComponent } from './package-subscription/update-details/update-details.component';
import { MaterialModule } from '../app/material/material.module';


@NgModule({
  declarations: [
    AppComponent,
    rountingComponents,
    PageNotFoundComponent,
    PackageSubscriptionComponent,
    ViewBalanceComponent,
    RechargeComponent,
    ViewPacksComponent,
    SubscribeBasepackComponent,
    AddChannelsComponent,
    SpecialServiceComponent,
    SubDetailsComponent,
    UpdateDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
