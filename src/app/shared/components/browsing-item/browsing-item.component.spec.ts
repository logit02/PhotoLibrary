import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowsingItemComponent } from './browsing-item.component';

describe('BrowsingItemComponent', () => {
  let component: BrowsingItemComponent;
  let fixture: ComponentFixture<BrowsingItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrowsingItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrowsingItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#addToFavorites', () => {
    it('should emit event with current image', () => {
      const spy = spyOn(component.imageSavingEvent, 'emit').and.callThrough();
      component.addToFavorites();
      expect(spy).toHaveBeenCalledOnceWith(component.item);
    })
  })
});
