import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageViewComponent } from './image-view.component';
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('ImageViewComponent', () => {
  let component: ImageViewComponent;
  let fixture: ComponentFixture<ImageViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageViewComponent ],
      imports: [MatSnackBarModule, HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
