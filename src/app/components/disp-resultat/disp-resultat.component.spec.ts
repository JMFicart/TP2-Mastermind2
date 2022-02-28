import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DispResultatComponent } from './disp-resultat.component';

describe('DispResultatComponent', () => {
  let component: DispResultatComponent;
  let fixture: ComponentFixture<DispResultatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DispResultatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DispResultatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
