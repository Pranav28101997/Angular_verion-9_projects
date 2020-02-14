import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribeBasepackComponent } from './subscribe-basepack.component';

describe('SubscribeBasepackComponent', () => {
  let component: SubscribeBasepackComponent;
  let fixture: ComponentFixture<SubscribeBasepackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscribeBasepackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscribeBasepackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
