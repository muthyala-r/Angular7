import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { CokpitComponent } from './cokpit/cokpit.component';
import { ServerContentComponent } from './server-content/server-content.component';

@NgModule({
  declarations: [
    AppComponent,
    CokpitComponent,
    ServerContentComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
