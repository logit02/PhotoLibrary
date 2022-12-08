import {Component, HostListener, OnInit} from '@angular/core';
import {ImageBucketService} from "../../services/image-bucket.service";
import {BehaviorSubject} from "rxjs";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-image-browsing',
  templateUrl: './image-browsing.component.html',
  styleUrls: ['./image-browsing.component.scss']
})
export class ImageBrowsingComponent implements OnInit{

  imageToShow: any;
  imagesList: BehaviorSubject<ArrayBuffer[]> = new BehaviorSubject<ArrayBuffer[]>([]);
  loading: BehaviorSubject<boolean> = new BehaviorSubject(true);
  constructor(
    private imageBucketService: ImageBucketService
  ) {
  }

  @HostListener('window:scroll', ['$event'])
  listenToScrollEvent(): void {
    let currentHeight = document.documentElement.scrollTop + document.documentElement.offsetHeight;
    let maxScrollHeight = document.documentElement.scrollHeight - 100;
    if(currentHeight >= maxScrollHeight )   {
      this.getImageData(3);
    }
  }

  ngOnInit(): void {
    this.getImageData(15);
  }


  addImageToFavorites(e: any): void {
    this.imageBucketService.addFavoriteImage(e);
  }

  private getImageData(limit: number): void {
    this.loading.next(true);
    this.imageBucketService.getNewImages(limit)
      .subscribe((res: Blob) => {
        this.imageBucketService.convertAndStoreImages(res, this.imagesList);
        this.loading.next(false);
      });
  }

}
