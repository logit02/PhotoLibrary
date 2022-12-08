import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowsingItemComponent} from "./components/browsing-item/browsing-item.component";
import {RouterModule} from "@angular/router";
import {TranslateFromJsonPipe} from "./pipes/translate-from-json.pipe";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";



@NgModule({
  declarations: [
    BrowsingItemComponent,
    TranslateFromJsonPipe
  ],
    imports: [
        CommonModule,
        RouterModule,
        MatSnackBarModule,
        BrowserAnimationsModule
    ],
  exports: [BrowsingItemComponent, TranslateFromJsonPipe]
})
export class SharedModule { }
