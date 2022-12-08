import { TestBed } from '@angular/core/testing';

import { ImageBucketService } from './image-bucket.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {HttpClient} from "@angular/common/http";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {Router} from "@angular/router";
import {CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from "@angular/core";
import {ErrorHandlerService} from "../../shared/services/error-handler.service";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";

describe('ImageBucketService', () => {
  let service: ImageBucketService;
  let httpMock: HttpTestingController;
  let httpClient: HttpClient;
  let errorService: ErrorHandlerService;
  let router = {
    navigate: jasmine.createSpy('navigate')
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: Router, useValue: router }],
      imports: [MatSnackBarModule, HttpClientTestingModule, NoopAnimationsModule],
      schemas: [ NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA ]
    });
    service = TestBed.inject(ImageBucketService);
    httpMock = TestBed.inject(HttpTestingController);
    httpClient = TestBed.inject(HttpClient);
    errorService = TestBed.inject(ErrorHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#getNewImages', () => {
    it('should do api call with correct request url and type', () => {
      service.getNewImages(3).subscribe();
      const mock = httpMock.expectOne(service.IMAGE_GENERATION_API);
      expect(mock.request.url).toEqual(service.IMAGE_GENERATION_API);
      expect(mock.request.responseType).toEqual('blob');
      expect(mock.request.method).toEqual("GET");
    });
  });

  describe('#getFavoriteImages', () => {
    it('should return data from localstorage if it exists', () => {
      service.addFavoriteImage('test');
      expect(service.getFavoriteImages().find(item => item.img === 'test')).toBeDefined();
    });
    it('should return data from service if storage is empty', () => {
      service.favoriteImages.next([{id:0, img: 'test'}]);
      expect(service.getFavoriteImages().find(item => item.img === 'test')).toBeDefined();
    });
  });

  describe('#addFavoriteImage', () => {
    it('should add the image', () => {
      service.favoriteImages.next([]);
      service.addFavoriteImage('test3');
      expect(service.favoriteImages.value).toEqual([{id:0, img: 'test3'}]);
    });
    it('should set to localstorage', () => {
      const spy = spyOn(localStorage, 'setItem').and.callThrough();
      service.addFavoriteImage('test3');
      expect(spy).toHaveBeenCalled()
    });
  });

  describe('#removeImageFromFavorites', () => {
    it('should remove the image and navigate to favorites', () => {
      service.favoriteImages.next([]);
      service.addFavoriteImage('test3');
      service.removeImageFromFavorites('0');
      expect(service.favoriteImages.value).toEqual([]);
      expect(router.navigate).toHaveBeenCalledWith(['favorites']);
    });
  })
});
