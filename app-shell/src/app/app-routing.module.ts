import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Components/about/about.component';
import { EventsComponent } from './Components/events/events.component';
import { HomeComponent } from './Components/home/home.component';
import { NopageComponent } from './Components/nopage/nopage.component';
import { VisitUsComponent } from './Components/visit-us/visit-us.component';

const routes: Routes = [
  
  {path:'', pathMatch:'full' ,title: 'Belief Ministries',component:HomeComponent},
  {path:'Home', pathMatch:'full',title: 'Belief Ministries',component:HomeComponent},
  {path:'About',title: 'Belief Ministries | About',component:AboutComponent},
  {path:'Events',title: 'Belief Ministries | Events',component:EventsComponent},
  {path:'Visit-Us',title: 'Visit Belief Ministries',component:VisitUsComponent},
  {path:'**',title: 'NoPage',component:NopageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
