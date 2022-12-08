import { TestBed } from '@angular/core/testing';

import { ErrorHandlerService } from './error-handler.service';
import {MatSnackBar, MatSnackBarModule} from "@angular/material/snack-bar";

const mockMatSnackBar = {
  open: () => {}
};

describe('ErrorHandlerService', () => {
  let service: ErrorHandlerService;
  let matSnackBar: MatSnackBar;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: MatSnackBar , useValue: mockMatSnackBar }],
      imports: [MatSnackBarModule]
    });
    service = TestBed.inject(ErrorHandlerService);
    matSnackBar = TestBed.inject(MatSnackBar);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#reportError', () => {
    it('should call snackbar open method', () => {
      const snackBar = spyOn(matSnackBar, 'open').and.stub();
      service.reportError(new Error());
      expect(snackBar.calls.count()).toBe(1);
    })
  })
});
