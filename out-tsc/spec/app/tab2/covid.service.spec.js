import { TestBed } from '@angular/core/testing';
import { CovidService } from './covid.service';
describe('CovidService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));
    it('should be created', () => {
        const service = TestBed.get(CovidService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=covid.service.spec.js.map