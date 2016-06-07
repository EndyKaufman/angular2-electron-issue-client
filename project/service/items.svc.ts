import { EventEmitter } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

export class ItemsSvc {
    items: any[];
    selectedItem: any;
    resource: any;

    itemsLoaded: boolean = false;
    
    itemSelected$: EventEmitter<any>;

    constructor(private http: Http) {
        this.itemSelected$ = new EventEmitter();
    };

    onSelect(item: any) {
        console.log(item);
        this.selectedItem = item;
        this.itemSelected$.emit(this.selectedItem);
    };
    
    getList(query:any): Promise<any[]> {
        let $this = this;
        return new Promise(resolve => {
            if ($this.itemsLoaded) {
                resolve($this.items);
            } else {
                $this.resource.getList(query).then(function (items) {
                    $this.items = items;
                    $this.itemsLoaded = true;
                    if (items.length > 0)
                        $this.onSelect($this.items[0]);
                    resolve($this.items);
                });
            }
        });
    };
}