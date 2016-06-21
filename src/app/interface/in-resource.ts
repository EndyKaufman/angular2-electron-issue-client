import 'rxjs/add/operator/toPromise'

export interface InResource {
    post(item: any): Promise<any>
    put(item: any)
    delete(item: any)
    save(item: any): Promise<any>
    getList(query: any): Promise<any[]>
    getItem(id: number)
}