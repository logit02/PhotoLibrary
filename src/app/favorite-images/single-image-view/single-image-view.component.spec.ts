import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleImageViewComponent } from './single-image-view.component';
import {ImageBucketService} from "../../image-browsing/services/image-bucket.service";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {SharedModule} from "../../shared/shared.module";
import {ImageViewComponent} from "../image-view/image-view.component";

describe('SingleImageViewComponent', () => {
  let component: SingleImageViewComponent;
  let fixture: ComponentFixture<SingleImageViewComponent>;
  let service: ImageBucketService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleImageViewComponent ],
      imports: [MatSnackBarModule,
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([{path: 'favorites', component: ImageViewComponent}]),
        SharedModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleImageViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(ImageBucketService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#onInit', () => {
    it('should get favorite images', () => {
      spyOn(service, 'getFavoriteImages').and.callThrough();
      component.ngOnInit();
      expect(service.getFavoriteImages).toHaveBeenCalled();
    })
  });

  describe('#removeFromFavorites', () => {
    it('should call removeImageFromFavorites', () => {
      spyOn(service, 'removeImageFromFavorites').and.callThrough();
      component.removeFromFavorites();
      expect(service.removeImageFromFavorites).toHaveBeenCalled();
    })
  })
});
