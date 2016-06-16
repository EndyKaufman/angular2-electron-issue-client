import { EventEmitter } from '@angular/core'
import { Http } from '@angular/http'

import 'rxjs/add/operator/toPromise'

import {InResource} from '../interface/in-resource'

export class ItemsSvc {
    items: any[] = []
    lastQuery: any
    itemsIndexById: any = {}
    selectedItem: any
    checkedItems: any[] = []
    resource: InResource

    loaded: boolean = false

    itemSelected$: EventEmitter<any>
    itemChecked$: EventEmitter<any>
    itemsLoaded$: EventEmitter<any>

    onFiltered$: EventEmitter<any>
    onCreate$: EventEmitter<any>
    onEdit$: EventEmitter<any>
    onDelete$: EventEmitter<any>

    onCreated$: EventEmitter<any>
    onEdited$: EventEmitter<any>
    onDeleted$: EventEmitter<any>

    constructor(public http: Http) {
        this.itemSelected$ = new EventEmitter()
        this.itemChecked$ = new EventEmitter()
        this.itemsLoaded$ = new EventEmitter()


        this.onFiltered$ = new EventEmitter()
        this.onCreate$ = new EventEmitter()
        this.onEdit$ = new EventEmitter()
        this.onDelete$ = new EventEmitter()

        this.onCreated$ = new EventEmitter()
        this.onEdited$ = new EventEmitter()
        this.onDeleted$ = new EventEmitter()
    }

    create(item: any) {
        let $this = this
        $this.resource.post(item).then(item => $this.onCreated$.emit(item))
    }

    edit(item: any) {
        let $this = this
        $this.resource.put(item).then(item => $this.onEdited$.emit(item))
    }

    delete(item: any) {
        let $this = this
        $this.resource.delete(item).then(item => $this.onDeleted$.emit(item))
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

    unCheckIfChecked(item: any) {
        let index = this.checkedItems.indexOf(item)
        if (index == -1) {
            this.checkedItems.push(item)
        }
        this.onCheck(item)
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
        $this.lastQuery = query
        return new Promise(resolve => {
            if ($this.loaded) {
                if ($this.items.length > 0)
                    $this.onSelect($this.items[0])
                else
                    $this.onSelect({})
                resolve($this.items)
            } else {
                $this.resource.getList(query).then(function (items) {
                    console.log($this, items)
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