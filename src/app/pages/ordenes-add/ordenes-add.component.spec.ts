import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenesAddComponent } from './ordenes-add.component';

describe('OrdenesAddComponent', () => {
  let component: OrdenesAddComponent;
  let fixture: ComponentFixture<OrdenesAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrdenesAddComponent]
    });
    fixture = TestBed.createComponent(OrdenesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
