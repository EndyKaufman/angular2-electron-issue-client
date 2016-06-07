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
var task_svc_1 = require('../../../service/task/task.svc');
var project_svc_1 = require('../../../service/project/project.svc');
var TaskListCmp = (function () {
    function TaskListCmp(router, taskSvc, projectSvc) {
        var _this = this;
        this.router = router;
        this.taskSvc = taskSvc;
        this.projectSvc = projectSvc;
        projectSvc.itemSelected$.subscribe(function (item) { return _this.onProjectSelected(item); });
    }
    TaskListCmp.prototype.getList = function () {
        var _this = this;
        var query = {};
        if (this.projectSvc.selectedItem) {
            query = {
                project_id: this.projectSvc.selectedItem.id
            };
        }
        else {
            query = {
                project_id: -1
            };
        }
        this.taskSvc.itemsLoaded = false;
        this.taskSvc.getList(query).then(function (items) { return _this.items = items; });
    };
    ;
    TaskListCmp.prototype.ngOnInit = function () {
        this.getList();
    };
    ;
    TaskListCmp.prototype.onProjectSelected = function (project) {
        this.getList();
    };
    TaskListCmp = __decorate([
        core_1.Component({
            selector: 'task-list',
            templateUrl: 'project/app/task/list/task-list.cmp.html'
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router, task_svc_1.TaskSvc, project_svc_1.ProjectSvc])
    ], TaskListCmp);
    return TaskListCmp;
}());
exports.TaskListCmp = TaskListCmp;
//# sourceMappingURL=task-list.cmp.js.map