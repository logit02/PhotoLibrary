import { Component } from '@angular/core';
import {ImageBucketService} from "../../image-browsing/services/image-bucket.service";

@Component({
  selector: 'app-image-view',
  templateUrl: './image-view.component.html',
  styleUrls: ['./image-view.component.scss']
})
export class ImageViewComponent {
  imagesList = this.imageBucketService.getFavoriteImages();

  constructor(
    private imageBucketService: ImageBucketService
  ) {
  }
}
