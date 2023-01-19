import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampoSenhaComponent } from './field-input.component';

describe('CampoSenhaComponent', () => {
  let component: CampoSenhaComponent;
  let fixture: ComponentFixture<CampoSenhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampoSenhaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CampoSenhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
