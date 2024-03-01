import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoCloudComponent } from './logo-cloud.component';

describe('LogoCloudComponent', () => {
  let component: LogoCloudComponent;
  let fixture: ComponentFixture<LogoCloudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoCloudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoCloudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
