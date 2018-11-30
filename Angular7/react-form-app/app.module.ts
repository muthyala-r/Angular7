import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PipesComponent } from './pipes/pipes.component';
import { HttpRequestComponent } from './http-request/http-request.component';
import {ReactiveFormsModule} from '@angular/forms'
import { ServersService } from './http-request/servers.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule  } from '@angular/common/http';
import { ShortenPipe } from './pipes/shorten.pipe';
import {FormsModule} from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe';
import { DirectiveComponent } from './directive/directive.component';
import { BasicHighlightDirective } from './directive/basic-highlight.directive';
import { BetterHighlightDirective } from './directive/better-highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    PipesComponent,
    HttpRequestComponent,
    ShortenPipe,
    FilterPipe,
    DirectiveComponent,
    BasicHighlightDirective,
    BetterHighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    FormsModule 
    
  ],
  providers: [ServersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
