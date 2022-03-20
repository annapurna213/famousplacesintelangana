import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BesttimetovisitComponent } from './besttimetovisit/besttimetovisit.component';

import { GalleryComponent } from './gallery/gallery.component';
import { HOMEComponent } from './home/home.component';
import { EnglishComponent } from './languages/english/english.component';
import { HindiComponent } from './languages/hindi/hindi.component';
import { LanguagesComponent } from './languages/languages.component';
import { TeluguComponent } from './languages/telugu/telugu.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { TELANGANAComponent } from './telangana/telangana.component';
import { AdilabadComponent } from './visitingplaces/adilabad/adilabad.component';
import { AdilmoreComponent } from './visitingplaces/adilabad/adilmore/adilmore.component';
import { HyderabadComponent } from './visitingplaces/hyderabad/hyderabad.component';
import { Karimanagar1Component } from './visitingplaces/karimnagar/karimanagar1/karimanagar1.component';
import { KarimnagarComponent } from './visitingplaces/karimnagar/karimnagar.component';
import { KhammamComponent } from './visitingplaces/khammam/khammam.component';
import { MahabubnagarComponent } from './visitingplaces/mahabubnagar/mahabubnagar.component';
import { MedakComponent } from './visitingplaces/medak/medak.component';
import { NalgondaComponent } from './visitingplaces/nalgonda/nalgonda.component';
import { NizamabadComponent } from './visitingplaces/nizamabad/nizamabad.component';
import { VisitingplacesComponent } from './visitingplaces/visitingplaces.component';
import { WarangalComponent } from './visitingplaces/warangal/warangal.component';




const routes: Routes = [
  {path:'home',component:HOMEComponent},
  {path:'telangana',component:TELANGANAComponent},
  {path:'visitingplaces',component:VisitingplacesComponent,children:[
  {path:'adilabad',component:AdilabadComponent,children:[
    {path:"adilmore",component:AdilmoreComponent}

  ]},
  



  
  {path:'karimnagar',component:KarimnagarComponent,children:[
    {path:"karimnagar1",component:Karimanagar1Component}]},
  {path:'nizamabad',component:NizamabadComponent},
  {path:'warangal',component:WarangalComponent},
  {path:'medak',component:MedakComponent},
  {path:'hyderabad',component:HyderabadComponent},
  {path:'khammam',component:KhammamComponent},
  {path:'mahabubnagar',component:MahabubnagarComponent},
  {path:'nalgonda',component:NalgondaComponent}
  ]},
  
  {path:'gallery',component:GalleryComponent},
  {path:'besttimetovisit',component:BesttimetovisitComponent},
  {path:'languages',component:LanguagesComponent,children:[
    {path:'english',component:EnglishComponent},
    {path:'hindi',component:HindiComponent},
    {path:'telugu',component:TeluguComponent}
  ]},
 
  {path:'signin',component:SigninComponent},
  {path:'signup',component:SignupComponent},
 
{path:'',redirectTo:'home',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
