import { Injectable } from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  constructor(
    private bar: MatSnackBar,
  ) { }

  reportError(err: any) {
    this.bar.open(err, '', {duration: 3000});
  }
}
