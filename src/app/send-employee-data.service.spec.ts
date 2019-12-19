import { TestBed } from '@angular/core/testing';

import { SendEmployeeDataService } from './send-employee-data.service';

describe('SendEmployeeDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SendEmployeeDataService = TestBed.get(SendEmployeeDataService);
    expect(service).toBeTruthy();
  });
});
