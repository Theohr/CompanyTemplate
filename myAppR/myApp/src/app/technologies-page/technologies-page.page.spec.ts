import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TechnologiesPagePage } from './technologies-page.page';

describe('TechnologiesPagePage', () => {
  let component: TechnologiesPagePage;
  let fixture: ComponentFixture<TechnologiesPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnologiesPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TechnologiesPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
