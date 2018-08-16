import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopnavComponent } from './topnav/topnav.component';
import { SectionComponent } from './section/section.component';
import {HttpClientModule} from '@angular/common/http';
import { GiphyComponent } from './giphy/giphy.component';

@NgModule({
  declarations: [
    AppComponent,
    TopnavComponent,
    SectionComponent,
    GiphyComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
