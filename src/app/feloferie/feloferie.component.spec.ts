import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeloferieComponent } from './feloferie.component';

describe('FeloferieComponent', () => {
  let component: FeloferieComponent;
  let fixture: ComponentFixture<FeloferieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeloferieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeloferieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
