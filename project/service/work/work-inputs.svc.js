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
var work_type_svc_1 = require('../work-type/work-type.svc');
var project_svc_1 = require('../project/project.svc');
var task_svc_1 = require('../task/task.svc');
var work_svc_1 = require('../work/work.svc');
var WorkInputsSvc = (function () {
    function WorkInputsSvc(projectSvc, taskSvc, workSvc, workTypeSvc) {
        this.projectSvc = projectSvc;
        this.taskSvc = taskSvc;
        this.workSvc = workSvc;
        this.workTypeSvc = workTypeSvc;
    }
    WorkInputsSvc.prototype.onInit = function () {
        this.projects = this.projectSvc.items;
        this.tasksByProject = { 0: [] };
        this.workTypesByProject = { 0: [] };
        var _loop_1 = function(project) {
            this_1.tasksByProject[project.id] = this_1.taskSvc.items.filter(function (item) { return item.project_id == project.id; });
            this_1.workTypesByProject[project.id] = this_1.workTypeSvc.items.filter(function (item) { return project.work_type.indexOf(item.id) != -1; });
        };
        var this_1 = this;
        for (var _i = 0, _a = this.projectSvc.items; _i < _a.length; _i++) {
            var project = _a[_i];
            _loop_1(project);
        }
        if (this.projectSvc.items.length && !this.workSvc.editItem.project_id) {
            var project = this.projectSvc.items[0];
            this.workSvc.editItem.project_id = project.id;
            if (this.tasksByProject[project.id][0])
                this.workSvc.editItem.task_id = this.tasksByProject[project.id][0].id;
            else
                this.workSvc.editItem.task_id = 0;
            if (this.workTypesByProject[project.id][0])
                this.workSvc.editItem.work_type_id = this.workTypesByProject[project.id][0].id;
            else
                this.workSvc.editItem.work_type_id = 0;
        }
    };
    WorkInputsSvc = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [project_svc_1.ProjectSvc, task_svc_1.TaskSvc, work_svc_1.WorkSvc, work_type_svc_1.WorkTypeSvc])
    ], WorkInputsSvc);
    return WorkInputsSvc;
}());
exports.WorkInputsSvc = WorkInputsSvc;
//# sourceMappingURL=work-inputs.svc.js.map