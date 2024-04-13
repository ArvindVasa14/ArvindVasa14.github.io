import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaOfIntrestCardComponent } from './area-of-intrest-card.component';

describe('AreaOfIntrestCardComponent', () => {
  let component: AreaOfIntrestCardComponent;
  let fixture: ComponentFixture<AreaOfIntrestCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaOfIntrestCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AreaOfIntrestCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
