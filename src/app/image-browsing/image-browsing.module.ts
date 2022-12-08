import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ImageBrowsingComponent} from './components/browsing/image-browsing.component';
import {RouterModule} from "@angular/router";
import {IMAGE_BROWSING_ROUTES} from "../app.routing";
import {MatIconModule} from "@angular/material/icon";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {SharedModule} from "../shared/shared.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


@NgModule({
  declarations: [
    ImageBrowsingComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    RouterModule.forChild(IMAGE_BROWSING_ROUTES),
    MatIconModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    SharedModule,
  ],
  providers: [MatSnackBarModule],

})
export class ImageBrowsingModule {
}
