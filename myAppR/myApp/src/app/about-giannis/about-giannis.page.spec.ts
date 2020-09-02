import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AboutGiannisPage } from './about-giannis.page';

describe('AboutGiannisPage', () => {
  let component: AboutGiannisPage;
  let fixture: ComponentFixture<AboutGiannisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutGiannisPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AboutGiannisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
