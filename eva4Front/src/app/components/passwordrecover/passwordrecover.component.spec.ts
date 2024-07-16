import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordrecoverComponent } from './passwordrecover.component';

describe('PasswordrecoverComponent', () => {
  let component: PasswordrecoverComponent;
  let fixture: ComponentFixture<PasswordrecoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PasswordrecoverComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasswordrecoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
