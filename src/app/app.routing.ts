import {Routes} from "@angular/router";
import {ImageBrowsingComponent} from "./image-browsing/components/browsing/image-browsing.component";
import {ImageViewComponent} from "./favorite-images/image-view/image-view.component";
import {SingleImageViewComponent} from "./favorite-images/single-image-view/single-image-view.component";

export const APP_ROUTES: Routes = [
  {path: '', loadChildren: () => import('src/app/image-browsing/image-browsing.module').then(m => m.ImageBrowsingModule)},
  {path: 'favorites', loadChildren: () => import('src/app/favorite-images/favorite-images.module').then(m => m.FavoriteImagesModule)},
];

export const IMAGE_BROWSING_ROUTES: Routes = [{
  path: '', component: ImageBrowsingComponent
}]

export const FAVORITE_IMAGES_ROUTES: Routes = [
  {path: '', component: ImageViewComponent},
  {path: ':id', component: SingleImageViewComponent}
]

export const ROUTE_NAMES = {
  photos: './',
  favorites: '/favorites'
}
