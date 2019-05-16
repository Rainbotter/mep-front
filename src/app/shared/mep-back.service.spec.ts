import {TestBed} from '@angular/core/testing';

import {MepBackService} from './mep-back.service';

describe('MepBackService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: MepBackService = TestBed.get(MepBackService);
        expect(service).toBeTruthy();
    });
});
