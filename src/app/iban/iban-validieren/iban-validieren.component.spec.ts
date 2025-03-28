import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IbanValidierenComponent } from './iban-validieren.component';

describe('IbanValidierenComponent', () => {
  let component: IbanValidierenComponent;
  let fixture: ComponentFixture<IbanValidierenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IbanValidierenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IbanValidierenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
