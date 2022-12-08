import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, catchError, delay, EMPTY, Observable, repeat} from "rxjs";
import {ErrorHandlerService} from "../../shared/services/error-handler.service";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class ImageBucketService {

  favoriteImages: BehaviorSubject<{ id: number, img: string }[]> = new BehaviorSubject<any[]>(this.getFavoriteImages());
  readonly IMAGE_GENERATION_API: string = 'https://picsum.photos/200/300';
  readonly favoriteImagesKey: string = 'FAVORITES';

  constructor(
    private errorHandlerService: ErrorHandlerService,
    private httpClient: HttpClient,
    private router: Router,
    private bar: MatSnackBar,
  ) { }


  getNewImages(limit: number): Observable<any> {
    return this.httpClient.get(this.IMAGE_GENERATION_API, { responseType: 'blob' }).pipe(
      repeat(limit),
      // to randomly select number in range 200ms-300ms for the delay
      delay((Math.random() * 100) + 200),
      catchError(
      err => {
        this.errorHandlerService.reportError(err);
        return EMPTY;
      }));
  }

  convertAndStoreImages(image: Blob, imagesList: BehaviorSubject<any[]>): void {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
      imagesList.next([...imagesList.value,reader.result]);
    }, false);
    if (image) {
      reader.readAsDataURL(image);
    }
  }

  getFavoriteImages(): any[] {
    return JSON.parse(localStorage.getItem(this.favoriteImagesKey) ?? '[]')
  }

  addFavoriteImage(img: any): void {
    const possibleMatch = this.favoriteImages.value.find(item => item.img == img);
    if(possibleMatch) {
      this.errorHandlerService.reportError('This image is already in favorites');
      return;
    }
    this.favoriteImages.next([...this.favoriteImages.value,
      {
        id: this.favoriteImages.value.length,
        img
      }
    ]);
    localStorage.setItem(this.favoriteImagesKey, JSON.stringify(this.favoriteImages.value));
    this.bar.open('The image was added to favorites', '', {duration: 3000});
  }

  removeImageFromFavorites(selectedImageId: string) {
    this.favoriteImages.next([...this.favoriteImages.value.filter(img => img.id !== +selectedImageId)]);
    localStorage.setItem(this.favoriteImagesKey, JSON.stringify(this.favoriteImages.value));
    this.router.navigate(['favorites']);
  }
}
