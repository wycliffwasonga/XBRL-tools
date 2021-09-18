import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { XBRLViewerModule } from '@xbrl-tools/viewer-lib';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    XBRLViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
