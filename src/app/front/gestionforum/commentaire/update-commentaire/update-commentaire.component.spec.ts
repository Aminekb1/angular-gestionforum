import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCommentaireComponent } from './update-commentaire.component';

describe('UpdateCommentaireComponent', () => {
  let component: UpdateCommentaireComponent;
  let fixture: ComponentFixture<UpdateCommentaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCommentaireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateCommentaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
