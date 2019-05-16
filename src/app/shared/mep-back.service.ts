import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class MepBackService {

    apiURL = 'http://localhost:8080';

    constructor(private http: HttpClient) {
    }

    getStatuses(): Observable<Array<String>> {
        return this.http.get<String[]>(this.apiURL + '/statuses')
            .pipe(
                retry(1),
                catchError(this.handleError)
            );
    }

    handleError(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        } else {
            // Get server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        window.alert(errorMessage);
        return throwError(errorMessage);
    }

}
