"use strict";
var core_1 = require('@angular/core');
require('rxjs/add/operator/toPromise');
var ItemsSvc = (function () {
    function ItemsSvc(http) {
        this.http = http;
        this.items = [];
        this.itemsIndexById = {};
        this.checkedItems = [];
        this.loaded = false;
        this.itemSelected$ = new core_1.EventEmitter();
        this.itemChecked$ = new core_1.EventEmitter();
        this.itemsLoaded$ = new core_1.EventEmitter();
        this.onCreate$ = new core_1.EventEmitter();
        this.onEdit$ = new core_1.EventEmitter();
        this.onDelete$ = new core_1.EventEmitter();
    }
    ItemsSvc.prototype.onCreate = function () {
        this.onCreate$.emit(true);
    };
    ItemsSvc.prototype.onEdit = function (item) {
        this.onEdit$.emit(item);
    };
    ItemsSvc.prototype.onDelete = function (item) {
        this.onDelete$.emit(item);
    };
    ItemsSvc.prototype.onSelect = function (item) {
        this.checkedItems = [];
        this.selectedItem = item;
        this.itemSelected$.emit(this.selectedItem);
    };
    ItemsSvc.prototype.onCheck = function (item) {
        if (this.selectedItem.id)
            this.checkedItems.push(this.selectedItem);
        var index = this.checkedItems.indexOf(item);
        if (index == -1)
            this.checkedItems.push(item);
        else if (this.checkedItems.length > 1) {
            this.checkedItems.splice(index, 1);
        }
        if (this.checkedItems.length == 1) {
            this.onSelect(this.checkedItems[0]);
        }
        else {
            this.selectedItem = {};
            this.itemChecked$.emit(this.checkedItems);
        }
    };
    ItemsSvc.prototype.unCheckIfChecked = function (item) {
        var index = this.checkedItems.indexOf(item);
        if (index == -1) {
            this.checkedItems.push(item);
        }
        this.onCheck(item);
    };
    ItemsSvc.prototype.getCheckedItemsIds = function () {
        if (this.checkedItems)
            return this.checkedItems.map(function (item) { return item.id; });
        return [];
    };
    ItemsSvc.prototype.getItemById = function (id) {
        return this.items.find(function (item) { return item.id == id; });
    };
    ItemsSvc.prototype.getList = function (query) {
        var $this = this;
        return new Promise(function (resolve) {
            if ($this.loaded) {
                if ($this.items.length > 0)
                    $this.onSelect($this.items[0]);
                else
                    $this.onSelect({});
                resolve($this.items);
            }
            else {
                $this.resource.getList(query).then(function (items) {
                    $this.items = items;
                    $this.loaded = true;
                    $this.itemsLoaded$.emit($this.items);
                    if ($this.items.length > 0)
                        $this.onSelect($this.items[0]);
                    else
                        $this.onSelect({});
                    resolve($this.items);
                });
            }
        });
    };
    return ItemsSvc;
}());
exports.ItemsSvc = ItemsSvc;
//# sourceMappingURL=items.svc.js.map