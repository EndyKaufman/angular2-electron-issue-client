import { EventEmitter } from '@angular/core'
import { Http } from '@angular/http'

import 'rxjs/add/operator/toPromise'

export class ItemsSvc {
    items: any[]
    itemsIndexById: any = {}
    selectedItem: any
    checkedItems: any[]
    resource: any

    loaded: boolean = false

    itemSelected$: EventEmitter<any>
    itemChecked$: EventEmitter<any>
    itemsLoaded$: EventEmitter<any>

    constructor(private http: Http) {
        this.itemSelected$ = new EventEmitter()
        this.itemChecked$ = new EventEmitter()
        this.itemsLoaded$ = new EventEmitter()
    }

    onSelect(item: any) {
        this.checkedItems = []
        this.selectedItem = item
        this.itemSelected$.emit(this.selectedItem)
    }

    onCheck(item: any) {
        if (this.selectedItem.id)
            this.checkedItems.push(this.selectedItem)
        let index = this.checkedItems.indexOf(item)
        if (index == -1)
            this.checkedItems.push(item)
        else
            if (this.checkedItems.length > 1) {
                this.checkedItems.splice(index, 1)
            }
        if (this.checkedItems.length == 1) {
            this.onSelect(this.checkedItems[0])
        } else {
            this.selectedItem = {}
            this.itemChecked$.emit(this.checkedItems)
        }
    }

    getCheckedItemsIds() {
        if (this.checkedItems)
            return this.checkedItems.map(item => item.id)
        return []
    }

    getItemById(id: number) {
        return this.items.find(item => item.id == id)
    }

    getList(query: any): Promise<any[]> {
        let $this = this
        return new Promise(resolve => {
            if ($this.loaded) {
                if ($this.items.length > 0)
                    $this.onSelect($this.items[0])
                else
                    $this.onSelect({})
                resolve($this.items)
            } else {
                $this.resource.getList(query).then(function (items) {
                    $this.items = items
                    $this.loaded = true
                    $this.itemsLoaded$.emit($this.items)
                    if ($this.items.length > 0)
                        $this.onSelect($this.items[0])
                    else
                        $this.onSelect({})
                    resolve($this.items)
                })
            }
        })
    }
}