"use strict";
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
var work_svc_1 = require('../../../service/work/work.svc');
var task_svc_1 = require('../../../service/task/task.svc');
var work_type_svc_1 = require('../../../service/work-type/work-type.svc');
var WorkListCmp = (function () {
    function WorkListCmp(workSvc, taskSvc, workTypeSvc) {
        var _this = this;
        this.workSvc = workSvc;
        this.taskSvc = taskSvc;
        this.workTypeSvc = workTypeSvc;
        taskSvc.itemSelected$.subscribe(function (item) { return _this.onTaskSelected(item); });
        taskSvc.itemChecked$.subscribe(function (items) { return _this.onTaskSelected(items); });
    }
    WorkListCmp.prototype.getList = function () {
        var query = {};
        var checkedIds = this.taskSvc.getCheckedItemsIds();
        if (this.taskSvc.selectedItem.id) {
            query = {
                task_id: this.taskSvc.selectedItem.id
            };
        }
        else {
            if (checkedIds.length)
                query = { task_id: checkedIds.join('|') };
            else
                query = { task_id: -1 };
        }
        this.workSvc.loaded = false;
        this.workSvc.getList(query);
    };
    WorkListCmp.prototype.ngOnInit = function () {
        //this.getList()
    };
    WorkListCmp.prototype.onTaskSelected = function (project) {
        this.getList();
    };
    WorkListCmp = __decorate([
        core_1.Component({
            selector: 'work-list',
            templateUrl: 'project/app/work/list/work-list.cmp.html'
        }), 
        __metadata('design:paramtypes', [work_svc_1.WorkSvc, task_svc_1.TaskSvc, work_type_svc_1.WorkTypeSvc])
    ], WorkListCmp);
    return WorkListCmp;
}());
exports.WorkListCmp = WorkListCmp;
//# sourceMappingURL=work-list.cmp.js.map