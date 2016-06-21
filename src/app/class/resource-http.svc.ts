import { Injectable }    from '@angular/core'
import { Headers, Http, URLSearchParams } from '@angular/http'
import {InResource} from '../interface/in-resource'

import 'rxjs/add/operator/toPromise'

export class ResourceHttpSvc implements InResource{
    resourceUrl = ''  // URL to web api

    handleError(error: any) {
        console.error('An error occurred', error)
        return Promise.reject(error.message || error)
    }
    // Add new any
    post(item: any): Promise<any> {
        let headers = new Headers({
            'Content-Type': 'application/json'
        })

        return this.http
            .post(this.resourceUrl, JSON.stringify(item), { headers: headers })
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError)
    }
    // Update existing any
    put(item: any) {
        let headers = new Headers()
        headers.append('Content-Type', 'application/json')

        let url = `${this.resourceUrl}/${item.id}`

        return this.http
            .put(url, JSON.stringify(item), { headers: headers })
            .toPromise()
            .then(() => item)
            .catch(this.handleError)
    }

    constructor(public http: Http) { }

    delete(item: any) {
        let headers = new Headers()
        headers.append('Content-Type', 'application/json')

        let url = `${this.resourceUrl}/${item.id}`

        return this.http
            .delete(url, headers)
            .toPromise()
            .catch(this.handleError)
    }
    save(item: any): Promise<any> {
        if (item.id) {
            return this.put(item)
        }
        return this.post(item)
    }
    getList(query: any): Promise<any[]> {
        let params: URLSearchParams = new URLSearchParams()

        for (let key in query) {
            params.set(key, query[key])
        }
        return this.http.get(this.resourceUrl, {
            search: params
        })
            .toPromise()
            .then(response => response.json().data)
            .catch(this.handleError)
    }
    getItem(id: number) {
        return this.getList({})
            .then(items => items.filter(item => item.id === id)[0])
    }
}
