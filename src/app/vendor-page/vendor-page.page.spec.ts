import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VendorPagePage } from './vendor-page.page';

describe('VendorPagePage', () => {
  let component: VendorPagePage;
  let fixture: ComponentFixture<VendorPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VendorPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
