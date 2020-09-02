import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CustomerSupportPagePage } from './customer-support-page.page';

describe('CustomerSupportPagePage', () => {
  let component: CustomerSupportPagePage;
  let fixture: ComponentFixture<CustomerSupportPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerSupportPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CustomerSupportPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
