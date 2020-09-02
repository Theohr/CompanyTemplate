import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AboutTheoPage } from './about-theo.page';

describe('AboutTheoPage', () => {
  let component: AboutTheoPage;
  let fixture: ComponentFixture<AboutTheoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutTheoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AboutTheoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
