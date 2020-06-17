import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RequestGigPage } from './request-gig.page';

describe('RequestGigPage', () => {
  let component: RequestGigPage;
  let fixture: ComponentFixture<RequestGigPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestGigPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RequestGigPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
