"use strict";
var core_1 = require('@angular/core');
require('rxjs/add/operator/toPromise');
var ItemsSvc = (function () {
    function ItemsSvc(http) {
        this.http = http;
        this.itemsLoaded = false;
        this.itemSelected$ = new core_1.EventEmitter();
    }
    ItemsSvc.prototype.onSelect = function (item) {
        console.log(item);
        this.selectedItem = item;
        this.itemSelected$.emit(this.selectedItem);
    };
    ItemsSvc.prototype.getList = function (query) {
        var $this = this;
        return new Promise(function (resolve) {
            if ($this.itemsLoaded) {
                if ($this.items.length > 0)
                    $this.onSelect($this.items[0]);
                else
                    $this.onSelect({});
                resolve($this.items);
            }
            else {
                $this.resource.getList(query).then(function (items) {
                    $this.items = items;
                    $this.itemsLoaded = true;
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