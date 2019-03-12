import { TestBed } from '@angular/core/testing';

import { DetalleConsumoService } from './detalle-consumo.service';

describe('DetalleConsumoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DetalleConsumoService = TestBed.get(DetalleConsumoService);
    expect(service).toBeTruthy();
  });
});
