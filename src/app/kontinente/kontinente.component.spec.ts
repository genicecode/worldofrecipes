import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KontinenteComponent } from './kontinente.component';

describe('KontinenteComponent', () => {
  let component: KontinenteComponent;
  let fixture: ComponentFixture<KontinenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KontinenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KontinenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
