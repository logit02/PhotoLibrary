import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {BehaviorSubject} from "rxjs";
import {ImageBucketService} from "../../image-browsing/services/image-bucket.service";

@Component({
  selector: 'app-single-image-view',
  templateUrl: './single-image-view.component.html',
  styleUrls: ['./single-image-view.component.scss']
})
export class SingleImageViewComponent implements OnInit{
  selectedImageId: string;
  currentImage: BehaviorSubject<string> = new BehaviorSubject('');
  constructor(
    private service: ImageBucketService,
    private route: ActivatedRoute
  ) {
    this.selectedImageId = this.route.snapshot.paramMap.get('id') ?? '';
  }

  ngOnInit(): void {
    this.currentImage.next(this.service
      .getFavoriteImages()
      .find(item => item.id == +this.selectedImageId)?.img);
  }

  removeFromFavorites() {
    this.service.removeImageFromFavorites(this.selectedImageId);
  }
}
