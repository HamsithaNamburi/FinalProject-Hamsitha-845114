import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnblockuserBuyerComponent } from './unblockuser-buyer.component';

describe('UnblockuserBuyerComponent', () => {
  let component: UnblockuserBuyerComponent;
  let fixture: ComponentFixture<UnblockuserBuyerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnblockuserBuyerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnblockuserBuyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
