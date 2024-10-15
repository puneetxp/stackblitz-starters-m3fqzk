import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedlightComponent } from './redlight.component';

describe('RedlightComponent', () => {
  let component: RedlightComponent;
  let fixture: ComponentFixture<RedlightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RedlightComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RedlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
