import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MobileApplicationPagePage } from './mobile-application-page.page';

describe('MobileApplicationPagePage', () => {
  let component: MobileApplicationPagePage;
  let fixture: ComponentFixture<MobileApplicationPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileApplicationPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MobileApplicationPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
