import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPacksComponent } from './view-packs.component';

describe('ViewPacksComponent', () => {
  let component: ViewPacksComponent;
  let fixture: ComponentFixture<ViewPacksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPacksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
