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
var status_svc_1 = require('../../../service/status/status.svc');
var task_svc_1 = require('../../../service/task/task.svc');
var project_svc_1 = require('../../../service/project/project.svc');
var TaskListCmp = (function () {
    function TaskListCmp(taskSvc, projectSvc, statusSvc) {
        var _this = this;
        this.taskSvc = taskSvc;
        this.projectSvc = projectSvc;
        this.statusSvc = statusSvc;
        this.firstLoad = true;
        projectSvc.itemSelected$.subscribe(function (item) { _this.firstLoad = true; _this.getList(); });
        projectSvc.itemChecked$.subscribe(function (items) { _this.firstLoad = true; _this.getList(); });
        taskSvc.onFiltered$.subscribe(function (items) { return _this.getList(); });
    }
    TaskListCmp.prototype.getList = function () {
        console.log('TaskListCmp:getList');
        var query = {};
        var checkedIds = this.projectSvc.getCheckedItemsIds();
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
            this.taskSvc.filteredStatus = this.projectSvc.getCheckedsStatusIds();
            this.firstLoad = false;
        }
        if (this.taskSvc.filteredStatus.length)
            query.status_id = this.taskSvc.filteredStatus.join('|');
        else
            query.status_id = '0';
        this.taskSvc.loaded = false;
        this.taskSvc.getList(query);
    };
    TaskListCmp = __decorate([
        core_1.Component({
            selector: 'task-list',
            templateUrl: 'project/app/task/list/task-list.cmp.html'
        }), 
        __metadata('design:paramtypes', [task_svc_1.TaskSvc, project_svc_1.ProjectSvc, status_svc_1.StatusSvc])
    ], TaskListCmp);
    return TaskListCmp;
}());
exports.TaskListCmp = TaskListCmp;
//# sourceMappingURL=task-list.cmp.js.map