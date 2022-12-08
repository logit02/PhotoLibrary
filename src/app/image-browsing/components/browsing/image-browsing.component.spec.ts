import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageBrowsingComponent } from './image-browsing.component';
import {ImageBucketService} from "../../services/image-bucket.service";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {MatSnackBarModule} from "@angular/material/snack-bar";

describe('ImageBrowsingComponent', () => {
  let component: ImageBrowsingComponent;
  let fixture: ComponentFixture<ImageBrowsingComponent>;
  let service: ImageBucketService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageBrowsingComponent ],
      providers: [ImageBucketService],
      imports: [HttpClientTestingModule, MatSnackBarModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageBrowsingComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(ImageBucketService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#onInit', () => {
    it('should call getImages, set loading to true', () => {
      component.ngOnInit();
      expect(component.loading.value).toBeTruthy();
    });
    it('should call getImages, set loading to true', () => {
      spyOn(service, 'getNewImages').and.callThrough();
      component.ngOnInit();
      expect(service.getNewImages).toHaveBeenCalled();
    });
  });

});
