import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconletterComponent } from './iconletter.component';

describe('IconletterComponent', () => {
  let component: IconletterComponent;
  let fixture: ComponentFixture<IconletterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconletterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconletterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
