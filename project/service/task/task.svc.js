"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var items_svc_1 = require('../../class/items.svc');
var http_2 = require('../../resource/http');
var task_1 = require('./task');
var TaskSvc = (function (_super) {
    __extends(TaskSvc, _super);
    function TaskSvc(http, resource) {
        var _this = this;
        _super.call(this, http);
        this.http = http;
        this.resource = resource;
        this.items = [];
        this.filteredStatus = [];
        this.selectedItem = new task_1.Task();
        this.itemSelected$.subscribe(function (item) {
            _this.updateCheckedsTitle();
        });
        this.itemChecked$.subscribe(function (items) {
            _this.updateCheckedsTitle();
        });
    }
    TaskSvc.prototype.updateCheckedsTitle = function () {
        var _this = this;
        this.checkedsTitle = this.selectedItem.title ? this.getTitle(this.selectedItem) : this.checkedItems.map(function (item) { return _this.getTitle(item); }).join(', ');
    };
    TaskSvc.prototype.getTitle = function (item) {
        if (item)
            return '#' + item.id;
        return 'No task';
    };
    TaskSvc.prototype.getList = function (query) {
        return _super.prototype.getList.call(this, query);
    };
    TaskSvc.prototype.isFilterStatus = function (status_id) {
        return this.filteredStatus && (this.filteredStatus.indexOf(status_id) != -1 || status_id == 0);
    };
    TaskSvc.prototype.onFilterStatus = function (status_id) {
        var index = this.filteredStatus.indexOf(status_id);
        if (index == -1)
            this.filteredStatus.push(status_id);
        else {
            this.filteredStatus.splice(index, 1);
        }
        this.onFiltered$.emit(true);
    };
    TaskSvc = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, http_2.TaskResourceHttpSvc])
    ], TaskSvc);
    return TaskSvc;
}(items_svc_1.ItemsSvc));
exports.TaskSvc = TaskSvc;
//# sourceMappingURL=task.svc.js.map