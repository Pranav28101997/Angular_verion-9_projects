import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubDetailsComponent } from './sub-details.component';

describe('SubDetailsComponent', () => {
  let component: SubDetailsComponent;
  let fixture: ComponentFixture<SubDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
