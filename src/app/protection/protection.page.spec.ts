import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProtectionPage } from './protection.page';

describe('ProtectionPage', () => {
  let component: ProtectionPage;
  let fixture: ComponentFixture<ProtectionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProtectionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProtectionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
