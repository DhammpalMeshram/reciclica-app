import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BootScreenPage } from './boot-screen.page';

describe('BootScreenPage', () => {
  let component: BootScreenPage;
  let fixture: ComponentFixture<BootScreenPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BootScreenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
