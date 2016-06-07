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
var router_deprecated_1 = require('@angular/router-deprecated');
var work_svc_1 = require('../../../service/work/work.svc');
var task_svc_1 = require('../../../service/task/task.svc');
var WorkListCmp = (function () {
    function WorkListCmp(router, workSvc, taskSvc) {
        var _this = this;
        this.router = router;
        this.workSvc = workSvc;
        this.taskSvc = taskSvc;
        taskSvc.itemSelected$.subscribe(function (item) { return _this.onTaskSelected(item); });
    }
    WorkListCmp.prototype.getList = function () {
        var query = {
            task_id: this.taskSvc.selectedItem.id
        };
        this.workSvc.itemsLoaded = false;
        this.workSvc.getList(query);
    };
    WorkListCmp.prototype.ngOnInit = function () {
        this.getList();
    };
    WorkListCmp.prototype.onTaskSelected = function (project) {
        this.getList();
    };
    WorkListCmp = __decorate([
        core_1.Component({
            selector: 'work-list',
            templateUrl: 'project/app/work/list/work-list.cmp.html'
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router, work_svc_1.WorkSvc, task_svc_1.TaskSvc])
    ], WorkListCmp);
    return WorkListCmp;
}());
exports.WorkListCmp = WorkListCmp;
//# sourceMappingURL=work-list.cmp.js.map