import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AboutKostasPage } from './about-kostas.page';

describe('AboutKostasPage', () => {
  let component: AboutKostasPage;
  let fixture: ComponentFixture<AboutKostasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutKostasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AboutKostasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
