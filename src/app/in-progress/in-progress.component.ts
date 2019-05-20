import {Component, OnInit} from '@angular/core';
import {MepBackService} from '../shared/mep-back.service';
import {Mep} from '../shared/Mep';
import {Observable} from 'rxjs';

@Component({
    selector: 'app-in-progressÒ',
    templateUrl: './in-progress.component.html',
    styleUrls: ['./in-progress.component.css']
})
export class InProgressComponent implements OnInit {

    meps: Observable<Array<Mep>>;

    constructor(public mepBackService: MepBackService) {
    }

    ngOnInit(): void {
        this.meps = this.mepBackService.meps;
    }


}
