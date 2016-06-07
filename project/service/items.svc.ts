import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

export class ItemsSvc {
    items: any[];
    selectedItem: any;
    resource: any;

    private itemsLoaded: boolean = false;

    constructor(private http: Http) {
    };

    onSelect(item: any) {
        console.log(item);
        this.selectedItem = item;
    };

    getList(): Promise<any[]> {
        let $this = this;
        return new Promise(resolve => {
            if ($this.itemsLoaded) {
                resolve($this.items);
            } else {
                $this.resource.getList().then(function (items) {
                    $this.items = items;
                    $this.itemsLoaded = true;
                    if (items.length > 0)
                        $this.onSelect($this.items[0]);
                    resolve($this.items);
                });
            }
        });
    }
}