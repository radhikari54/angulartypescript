import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppComponent } from './app.component';
import { routes } from './app.routing';
import {FlexLayoutModule} from '@angular/flex-layout';
import {RouterModule} from '@angular/router';

import { MATERIAL_COMPATIBILITY_MODE } from '@angular/material/core';
import { ProductService } from './shared/services';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    FlexLayoutModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [{ provide: MATERIAL_COMPATIBILITY_MODE, useValue: true },
              ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
