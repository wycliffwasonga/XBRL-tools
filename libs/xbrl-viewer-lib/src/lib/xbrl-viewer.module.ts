import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XBRLViewerComponent } from './xbrl-viewer/xbrl-viewer.component';

@NgModule({
  declarations: [XBRLViewerComponent],
  imports: [CommonModule],
  exports: [XBRLViewerComponent]
})
export class XBRLViewerModule {}
