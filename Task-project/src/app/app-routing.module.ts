import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignInComponent } from './login-page/sign-in/sign-in.component';
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

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginPageComponent},
  {path: 'sign-in', component: SignInComponent},
  {path: 'package-subscription', component: PackageSubscriptionComponent},
  {path: 'view-balance', component: ViewBalanceComponent},
  {path: 'Recharge', component: RechargeComponent},
  {path: 'view-packs', component:ViewPacksComponent},
  {path: 'subscribe-basepack', component: SubscribeBasepackComponent},
  {path: 'add-channels', component: AddChannelsComponent},
  {path: 'special-service', component: SpecialServiceComponent},
  {path: 'subscription-details', component:SubDetailsComponent},
  {path: 'update-details', component: UpdateDetailsComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const rountingComponents = [LoginPageComponent, SignInComponent,PageNotFoundComponent,PackageSubscriptionComponent];
