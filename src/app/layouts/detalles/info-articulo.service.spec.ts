import { TestBed } from '@angular/core/testing';

import { InfoArticuloService } from './info-articulo.service';

describe('InfoArticuloService', () => {
  let service: InfoArticuloService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfoArticuloService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
