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
var status_svc_1 = require('../../../../service/status/status.svc');
var project_svc_1 = require('../../../../service/project/project.svc');
var task_svc_1 = require('../../../../service/task/task.svc');
var TaskHeaderButtonsCmp = (function () {
    function TaskHeaderButtonsCmp(projectSvc, statusSvc, taskSvc) {
        var _this = this;
        this.projectSvc = projectSvc;
        this.statusSvc = statusSvc;
        this.taskSvc = taskSvc;
        this.firstUpdateFilteredStatus = true;
        this.projectSvc.itemSelected$.subscribe(function (item) { return _this.updateFilteredStatus(); });
        this.projectSvc.itemChecked$.subscribe(function (items) { return _this.updateFilteredStatus(); });
    }
    TaskHeaderButtonsCmp.prototype.updateFilteredStatus = function () {
        if (!this.firstUpdateFilteredStatus)
            return;
        this.firstUpdateFilteredStatus = false;
        for (var _i = 0, _a = this.projectSvc.checkedProjectsStatusIds; _i < _a.length; _i++) {
            var status_id = _a[_i];
            this.taskSvc.onFilterStatus(status_id);
        }
    };
    TaskHeaderButtonsCmp = __decorate([
        core_1.Component({
            selector: 'task-header-buttons',
            templateUrl: 'project/app/task/header/buttons/task-header-buttons.cmp.html'
        }), 
        __metadata('design:paramtypes', [project_svc_1.ProjectSvc, status_svc_1.StatusSvc, task_svc_1.TaskSvc])
    ], TaskHeaderButtonsCmp);
    return TaskHeaderButtonsCmp;
}());
exports.TaskHeaderButtonsCmp = TaskHeaderButtonsCmp;
//# sourceMappingURL=task-header-buttons.cmp.js.map