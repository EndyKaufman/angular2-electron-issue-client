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
var items_svc_1 = require('../items.svc');
var work_resource_svc_1 = require('./work-resource.svc');
var work_1 = require('./work');
var WorkSvc = (function (_super) {
    __extends(WorkSvc, _super);
    function WorkSvc(http) {
        _super.call(this, http);
        this.http = http;
        this.items = [];
        this.filteredWorkType = [];
        this.selectedItem = new work_1.Work();
        this.resource = new work_resource_svc_1.WorkResourceSvc(http);
    }
    WorkSvc.prototype.getList = function (query) {
        return _super.prototype.getList.call(this, query);
    };
    WorkSvc.prototype.getItemsFilteredByWorkType = function () {
        var _this = this;
        return this.items.filter(function (item) { return item && _this.isFilterWorkType(item.work_type_id); });
    };
    WorkSvc.prototype.isFilterWorkType = function (work_type_id) {
        return this.filteredWorkType && (this.filteredWorkType.indexOf(work_type_id) != -1 || work_type_id == 0);
    };
    WorkSvc.prototype.getSpentOn = function (item) {
        var d = new Date(item.spent_on);
        var curr_date = d.getDate();
        var curr_month = d.getMonth() + 1;
        var curr_year = d.getFullYear();
        return curr_date + '.' + curr_month + '.' + curr_year;
    };
    WorkSvc.prototype.onFilterWorkType = function (work_type_id) {
        var index = this.filteredWorkType.indexOf(work_type_id);
        if (index == -1)
            this.filteredWorkType.push(work_type_id);
        else {
            this.filteredWorkType.splice(index, 1);
            for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
                var item = _a[_i];
                if (item.work_type_id == work_type_id)
                    this.unCheckIfChecked(item);
            }
        }
    };
    WorkSvc.prototype.onCreate = function () {
        this.editItem = new work_1.Work();
        _super.prototype.onCreate.call(this);
    };
    WorkSvc.prototype.create = function (item) {
        if (item.project_id)
            item.project_id = parseInt(item.project_id);
        else
            item.project_id = 0;
        if (item.task_id)
            item.task_id = parseInt(item.task_id);
        else
            item.task_id = 0;
        if (item.work_type_id)
            item.work_type_id = parseInt(item.work_type_id);
        else
            item.work_type_id = 0;
        _super.prototype.create.call(this, item);
    };
    WorkSvc = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], WorkSvc);
    return WorkSvc;
}(items_svc_1.ItemsSvc));
exports.WorkSvc = WorkSvc;
//# sourceMappingURL=work.svc.js.map