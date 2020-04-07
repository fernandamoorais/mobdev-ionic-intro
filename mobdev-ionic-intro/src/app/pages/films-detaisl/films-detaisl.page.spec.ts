import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FilmsDetaislPage } from './films-detaisl.page';

describe('FilmsDetaislPage', () => {
  let component: FilmsDetaislPage;
  let fixture: ComponentFixture<FilmsDetaislPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmsDetaislPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FilmsDetaislPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
