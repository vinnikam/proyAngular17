import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquiposformComponent } from './equiposform.component';

describe('EquiposformComponent', () => {
  let component: EquiposformComponent;
  let fixture: ComponentFixture<EquiposformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EquiposformComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EquiposformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
