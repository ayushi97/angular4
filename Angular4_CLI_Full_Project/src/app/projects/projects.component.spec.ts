import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetsComponent } from './projects.component';

describe('ProjetsComponent', () => {
  let component: ProjetsComponent;
  let fixture: ComponentFixture<ProjetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
