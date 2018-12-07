import { TestBed } from '@angular/core/testing';

import { AdminAuthGuardServicesService } from './admin-auth-guard-services.service';

describe('AdminAuthGuardServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminAuthGuardServicesService = TestBed.get(AdminAuthGuardServicesService);
    expect(service).toBeTruthy();
  });
});
