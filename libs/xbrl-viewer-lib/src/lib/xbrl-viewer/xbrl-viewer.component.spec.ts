import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XBRLViewerComponent } from './xbrl-viewer.component';

describe('XBRLViewerComponent', () => {
  let component: XBRLViewerComponent;
  let fixture: ComponentFixture<XBRLViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XBRLViewerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XBRLViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
