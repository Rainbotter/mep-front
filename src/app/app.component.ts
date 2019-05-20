import {Component, OnInit} from '@angular/core';
import {MepBackService} from './shared/mep-back.service';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    constructor(public mepBackService: MepBackService) {
    }

    ngOnInit() {
        this.mepBackService.loadAll();
    }

}
