import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleConsumoComponent } from './detalle-consumo.component';

describe('DetalleConsumoComponent', () => {
  let component: DetalleConsumoComponent;
  let fixture: ComponentFixture<DetalleConsumoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleConsumoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleConsumoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
