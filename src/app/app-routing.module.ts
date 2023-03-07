import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogComponent } from './log/log.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { RegisterComponent } from './register/register.component';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';
import { KidsComponent } from './kids/kids.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { PayComponent } from './pay/pay.component';
import { CodComponent } from './cod/cod.component';
import { RegardsComponent } from './regards/regards.component';
import { TrackComponent } from './track/track.component';

const routes: Routes = [
   {
    path :'', redirectTo : 'main', pathMatch : 'full'
   },
   {
    path:'main',component:MainComponent
   },
  //  {
  // path:'header',component : HeaderComponent
  //  },
  //  {
  //   path:'footer',component : FooterComponent
  //    },
  {
    path :'log',component:LogComponent
  },
  {
    path :'register',component:RegisterComponent
  },
  {
    path :'men',component:MenComponent
  },
  {
    path :'women',component:WomenComponent
  },
  {
    path :'kids',component:KidsComponent
  },
  {
    path :'contact',component:ContactComponent
  },
  {
    path :'about',component:AboutComponent
  },
  {
    path :'pay',component:PayComponent
  },
  {
    path :'cod',component:CodComponent
  },
  {
    path :'regards',component:RegardsComponent
  },
  {
    path :'track',component:TrackComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
