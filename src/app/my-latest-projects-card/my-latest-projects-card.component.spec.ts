import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLatestProjectsCardComponent } from './my-latest-projects-card.component';

describe('MyLatestProjectsCardComponent', () => {
  let component: MyLatestProjectsCardComponent;
  let fixture: ComponentFixture<MyLatestProjectsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyLatestProjectsCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyLatestProjectsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
