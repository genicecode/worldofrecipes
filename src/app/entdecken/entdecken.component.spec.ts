import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntdeckenComponent } from './entdecken.component';

describe('EntdeckenComponent', () => {
  let component: EntdeckenComponent;
  let fixture: ComponentFixture<EntdeckenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntdeckenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntdeckenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
