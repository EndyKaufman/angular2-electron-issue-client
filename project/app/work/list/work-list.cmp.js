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
var project_svc_1 = require('../../../service/project/project.svc');
var work_svc_1 = require('../../../service/work/work.svc');
var task_svc_1 = require('../../../service/task/task.svc');
var work_type_svc_1 = require('../../../service/work-type/work-type.svc');
var WorkListCmp = (function () {
    function WorkListCmp(workSvc, taskSvc, projectSvc, workTypeSvc) {
        var _this = this;
        this.workSvc = workSvc;
        this.taskSvc = taskSvc;
        this.projectSvc = projectSvc;
        this.workTypeSvc = workTypeSvc;
        this.firstLoad = true;
        taskSvc.itemSelected$.subscribe(function (item) { _this.firstLoad = true; _this.getList(); });
        taskSvc.itemChecked$.subscribe(function (items) { _this.firstLoad = true; _this.getList(); });
        workSvc.onFiltered$.subscribe(function (items) { return _this.getList(); });
        workSvc.onCreated$.subscribe(function (items) { return _this.getList(); });
        workSvc.onEdited$.subscribe(function (items) { return _this.getList(); });
        workSvc.onDeleted$.subscribe(function (items) { return _this.getList(); });
    }
    WorkListCmp.prototype.getList = function () {
        console.log('WorkListCmp:getList');
        var query = {};
        var checkedIds = this.taskSvc.getCheckedItemsIds();
        if (this.taskSvc.selectedItem.id) {
            query = {
                task_id: '0|' + this.taskSvc.selectedItem.id
            };
        }
        else {
            if (checkedIds.length)
                query = { task_id: '0|' + checkedIds.join('|') };
            else
                query = { task_id: '0' };
        }
        checkedIds = this.projectSvc.getCheckedItemsIds();
        if (this.projectSvc.selectedItem.id) {
            query.project_id = '0|' + this.projectSvc.selectedItem.id;
        }
        else {
            if (checkedIds.length)
                query.project_id = '0|' + checkedIds.join('|');
            else
                query.project_id = '0';
        }
        if (this.firstLoad) {
            this.workSvc.filteredWorkType = this.projectSvc.getCheckedsWorkTypeIds();
            this.firstLoad = false;
        }
        if (this.workSvc.filteredWorkType.length)
            query.work_type_id = this.workSvc.filteredWorkType.join('|');
        else
            query.work_type_id = '0';
        this.workSvc.loaded = false;
        this.workSvc.getList(query);
    };
    WorkListCmp = __decorate([
        core_1.Component({
            selector: 'work-list',
            templateUrl: 'project/app/work/list/work-list.cmp.html'
        }), 
        __metadata('design:paramtypes', [work_svc_1.WorkSvc, task_svc_1.TaskSvc, project_svc_1.ProjectSvc, work_type_svc_1.WorkTypeSvc])
    ], WorkListCmp);
    return WorkListCmp;
}());
exports.WorkListCmp = WorkListCmp;
//# sourceMappingURL=work-list.cmp.js.map