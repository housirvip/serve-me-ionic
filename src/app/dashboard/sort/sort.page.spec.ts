import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SortPage } from './sort.page';

describe('SortPage', () => {
  let component: SortPage;
  let fixture: ComponentFixture<SortPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SortPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
