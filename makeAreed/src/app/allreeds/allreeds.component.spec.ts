import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllreedsComponent } from './allreeds.component';

describe('AllreedsComponent', () => {
  let component: AllreedsComponent;
  let fixture: ComponentFixture<AllreedsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllreedsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllreedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
