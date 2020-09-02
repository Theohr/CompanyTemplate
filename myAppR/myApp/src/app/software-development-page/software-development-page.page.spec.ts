import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SoftwareDevelopmentPagePage } from './software-development-page.page';

describe('SoftwareDevelopmentPagePage', () => {
  let component: SoftwareDevelopmentPagePage;
  let fixture: ComponentFixture<SoftwareDevelopmentPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoftwareDevelopmentPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SoftwareDevelopmentPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
