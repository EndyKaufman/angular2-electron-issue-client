"use strict";
require('rxjs/add/operator/toPromise');
var ItemsSvc = (function () {
    function ItemsSvc(http) {
        this.http = http;
        this.itemsLoaded = false;
    }
    ;
    ItemsSvc.prototype.onSelect = function (item) {
        console.log(item);
        this.selectedItem = item;
    };
    ;
    ItemsSvc.prototype.getList = function () {
        var $this = this;
        return new Promise(function (resolve) {
            if ($this.itemsLoaded) {
                resolve($this.items);
            }
            else {
                $this.resource.getList().then(function (items) {
                    $this.items = items;
                    $this.itemsLoaded = true;
                    if (items.length > 0)
                        $this.onSelect($this.items[0]);
                    resolve($this.items);
                });
            }
        });
    };
    return ItemsSvc;
}());
exports.ItemsSvc = ItemsSvc;
//# sourceMappingURL=items.svc.js.map