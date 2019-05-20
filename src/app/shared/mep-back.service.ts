import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs';
import {Mep} from './Mep';
import { environment } from './../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class MepBackService {

    private _statuses: BehaviorSubject<Array<String>>;
    private _meps: BehaviorSubject<Array<Mep>>;

    private dataStore: {  // This is where we will store our data in memory
        statuses: Array<String>,
        meps: Array<Mep>
    };

    constructor(private http: HttpClient) {
        this.dataStore = { statuses: new Array<String>(), meps: new Array<Mep>() }
        this._statuses = <BehaviorSubject<Array<String>>> new BehaviorSubject(new Array<String>());
        this._meps = <BehaviorSubject<Array<Mep>>> new BehaviorSubject(new Array<Mep>());

    }

    get statuses() {
        return this._statuses.asObservable();
    }

    get meps() {
        return this._meps.asObservable();
    }

    loadAll() {
        this.getStatuses();
        this.getMeps();
    }

    getStatuses() {
        this.http.get<Array<String>>(environment.apiUrl + '/statuses').subscribe(data => {
            this.dataStore.statuses = data;
            this._statuses.next(Object.assign({}, this.dataStore).statuses);
        }, error => console.log('Could not load statuses'));
    }

    getMeps() {
        this.http.get<Array<Mep>>(environment.apiUrl + '/meps').subscribe(data => {
            this.dataStore.meps = data;
            this._meps.next(Object.assign({}, this.dataStore).meps);
        }, error => console.log('Could not load meps'));
    }

}
