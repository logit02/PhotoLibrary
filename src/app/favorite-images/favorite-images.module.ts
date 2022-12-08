import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ImageViewComponent} from './image-view/image-view.component';
import {FAVORITE_IMAGES_ROUTES} from "../app.routing";
import {RouterModule} from "@angular/router";
import {SharedModule} from "../shared/shared.module";
import { SingleImageViewComponent } from './single-image-view/single-image-view.component';
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    ImageViewComponent,
    SingleImageViewComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(FAVORITE_IMAGES_ROUTES),
    SharedModule,
    MatButtonModule,
  ]
})
export class FavoriteImagesModule {
}
