import { TestBed } from '@angular/core/testing';

import { RouteguardAdminGuard } from './routeguard-admin.guard';

describe('RouteguardAdminGuard', () => {
  let guard: RouteguardAdminGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RouteguardAdminGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
