import { TestBed } from '@angular/core/testing';

import { HerokuappProductosService } from './herokuapp-productos.service';

describe('HerokuappProductosService', () => {
  let service: HerokuappProductosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HerokuappProductosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
