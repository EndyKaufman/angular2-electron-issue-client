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
var status_1 = require('../../../../service/status');
var project_1 = require('../../../../service/project');
var task_1 = require('../../../../service/task');
var TaskHeaderButtonsCmp = (function () {
    function TaskHeaderButtonsCmp(projectSvc, statusSvc, taskSvc) {
        this.projectSvc = projectSvc;
        this.statusSvc = statusSvc;
        this.taskSvc = taskSvc;
    }
    TaskHeaderButtonsCmp.prototype.getStatusButtonColor = function (status_id) {
        var color = this.taskSvc.isFilterStatus(status_id) ? this.statusSvc.getItemById(status_id).color : 'basic';
        if (color != 'blue' && this.projectSvc.selectedItem.id && !this.taskSvc.isFilterStatus(status_id))
            color += ' blue';
        else if (color != 'green' && !this.projectSvc.selectedItem.id && !this.taskSvc.isFilterStatus(status_id))
            color += ' green';
        return color;
    };
    TaskHeaderButtonsCmp = __decorate([
        core_1.Component({
            selector: 'task-header-buttons',
            templateUrl: 'project/app/task/header/buttons/task-header-buttons.cmp.html'
        }), 
        __metadata('design:paramtypes', [project_1.ProjectSvc, status_1.StatusSvc, task_1.TaskSvc])
    ], TaskHeaderButtonsCmp);
    return TaskHeaderButtonsCmp;
}());
exports.TaskHeaderButtonsCmp = TaskHeaderButtonsCmp;
//# sourceMappingURL=task-header-buttons.cmp.js.map