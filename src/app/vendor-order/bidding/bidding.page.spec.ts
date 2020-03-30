import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BiddingPage } from './bidding.page';

describe('BiddingPage', () => {
  let component: BiddingPage;
  let fixture: ComponentFixture<BiddingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiddingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BiddingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
