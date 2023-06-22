import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VidaPage } from './vida.page';

describe('VidaPage', () => {
  let component: VidaPage;
  let fixture: ComponentFixture<VidaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VidaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
