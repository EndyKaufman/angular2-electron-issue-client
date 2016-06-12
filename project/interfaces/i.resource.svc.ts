import 'rxjs/add/operator/toPromise'
import {Http} from '@angular/http'

export interface IResourceSvc {
    post(item: any): Promise<any>
    put(item: any)
    delete(item: any)
    save(item: any): Promise<any>
    getList(query: any): Promise<any[]>
    getItem(id: number)
}