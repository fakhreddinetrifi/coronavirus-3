import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { VolunteerPage } from './volunteer.page';
describe('VolunteerPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [VolunteerPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(VolunteerPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=volunteer.page.spec.js.map