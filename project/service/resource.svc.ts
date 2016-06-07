import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

export class ResourceSvc {
    private resourceUrl = '';  // URL to web api

    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
    // Add new any
    private post(item: any): Promise<any> {
        let headers = new Headers({
            'Content-Type': 'application/json'
        });

        return this.http
            .post(this.resourceUrl, JSON.stringify(item), { headers: headers })
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }
    // Update existing any
    private put(item: any) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let url = `${this.resourceUrl}/${item.id}`;

        return this.http
            .put(url, JSON.stringify(item), { headers: headers })
            .toPromise()
            .then(() => item)
            .catch(this.handleError);
    }

    constructor(private http: Http) { }

    delete(item: any) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let url = `${this.resourceUrl}/${item.id}`;

        return this.http
            .delete(url, headers)
            .toPromise()
            .catch(this.handleError);
    }
    save(item: any): Promise<any> {
        if (item.id) {
            return this.put(item);
        }
        return this.post(item);
    }
    getList(): Promise<any[]> {
        return this.http.get(this.resourceUrl)
            .toPromise()
            .then(response => response.json().data)
            .catch(this.handleError);
    }
    getItem(id: number) {
        return this.getList()
            .then(items => items.filter(item => item.id === id)[0]);
    }
}
