import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownNavigationElementComponent } from './dropdown-navigation-element.component';

describe('DropdownNavigationElementComponent', () => {
  let component: DropdownNavigationElementComponent;
  let fixture: ComponentFixture<DropdownNavigationElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdownNavigationElementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropdownNavigationElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
