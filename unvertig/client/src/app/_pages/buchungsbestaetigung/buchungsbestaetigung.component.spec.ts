import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuchungsbestaetigungComponent } from './buchungsbestaetigung.component';

describe('BuchungsbestaetigungComponent', () => {
  let component: BuchungsbestaetigungComponent;
  let fixture: ComponentFixture<BuchungsbestaetigungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuchungsbestaetigungComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuchungsbestaetigungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
