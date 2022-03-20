import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HOMEComponent } from './home/home.component';
import { TELANGANAComponent } from './telangana/telangana.component';
import { VisitingplacesComponent } from './visitingplaces/visitingplaces.component';
import { AdilabadComponent } from './visitingplaces/adilabad/adilabad.component';
import { KarimnagarComponent } from './visitingplaces/karimnagar/karimnagar.component';
import { NizamabadComponent } from './visitingplaces/nizamabad/nizamabad.component';
import { WarangalComponent } from './visitingplaces/warangal/warangal.component';
import { MedakComponent } from './visitingplaces/medak/medak.component';
import { HyderabadComponent } from './visitingplaces/hyderabad/hyderabad.component';
import { KhammamComponent } from './visitingplaces/khammam/khammam.component';
import { MahabubnagarComponent } from './visitingplaces/mahabubnagar/mahabubnagar.component';
import { NalgondaComponent } from './visitingplaces/nalgonda/nalgonda.component';
import { GalleryComponent } from './gallery/gallery.component';
import { BesttimetovisitComponent } from './besttimetovisit/besttimetovisit.component';
import { LanguagesComponent } from './languages/languages.component';
import { EnglishComponent } from './languages/english/english.component';
import { HindiComponent } from './languages/hindi/hindi.component';
import { TeluguComponent } from './languages/telugu/telugu.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { FooterComponent } from './footer/footer.component';
import { AdilabaddataComponent } from './adilabaddata/adilabaddata.component';
import { Adilabaddata1Component } from './vistingplaces/adilabad/adilabaddata1/adilabaddata1.component';
import { KarimnagardataComponent } from './vistingplaces/karimnagar/karimnagardata/karimnagardata.component';
import { NizamabaddataComponent } from './vistingplaces/nizamabad/nizamabaddata/nizamabaddata.component';
import { MedakdataComponent } from './vistingplaces/medak/medakdata/medakdata.component';
import { WarangaldataComponent } from './vistingplaces/warangal/warangaldata/warangaldata.component';
import { HyderabaddataComponent } from './vistingplaces/hyderbad/hyderabaddata/hyderabaddata.component';
import { MahabubnagardataComponent } from './vistingplaces/mahabubnagar/mahabubnagardata/mahabubnagardata.component';
import { NalgondadataComponent } from './vistingplaces/nalgonda/nalgondadata/nalgondadata.component';
import { Adilabaddata2Component } from './vistingplaces/adilabad/adilabaddata2/adilabaddata2.component';
import { AdilmoreComponent } from './visitingplaces/adilabad/adilmore/adilmore.component';
import { Karimanagar1Component } from './visitingplaces/karimnagar/karimanagar1/karimanagar1.component';

@NgModule({
  declarations: [
    AppComponent,
    HOMEComponent,
    TELANGANAComponent,
    VisitingplacesComponent,
    AdilabadComponent,
    KarimnagarComponent,
    NizamabadComponent,
    WarangalComponent,
    MedakComponent,
    HyderabadComponent,
    KhammamComponent,
    MahabubnagarComponent,
    NalgondaComponent,
    GalleryComponent,
    BesttimetovisitComponent,
    LanguagesComponent,
    EnglishComponent,
    HindiComponent,
    TeluguComponent,
    SigninComponent,
    SignupComponent,
    FooterComponent,
    AdilabaddataComponent,
    Adilabaddata1Component,
    KarimnagardataComponent,
    NizamabaddataComponent,
    MedakdataComponent,
    WarangaldataComponent,
    HyderabaddataComponent,
    MahabubnagardataComponent,
    NalgondadataComponent,
    Adilabaddata2Component,
    AdilmoreComponent,
    Karimanagar1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
