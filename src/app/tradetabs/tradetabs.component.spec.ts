import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TradetabsComponent } from './tradetabs.component';

describe('TradetabsComponent', () => {
  let component: TradetabsComponent;
  let fixture: ComponentFixture<TradetabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TradetabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TradetabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
