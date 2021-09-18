import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { XBRLViewerModule } from '@xbrl-tools/viewer-lib';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;
  let de: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [XBRLViewerModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    de = fixture.debugElement;
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it('should render xbrl-tools-viewer component', () => {
    const el = de.query(By.css('xbrl-tools-viewer')).nativeElement;
    expect(el).toBeTruthy();
  });
});
