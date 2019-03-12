import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDetalleConsumoComponent } from './modal-detalle-consumo.component';

describe('ModalDetalleConsumoComponent', () => {
  let component: ModalDetalleConsumoComponent;
  let fixture: ComponentFixture<ModalDetalleConsumoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalDetalleConsumoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDetalleConsumoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
