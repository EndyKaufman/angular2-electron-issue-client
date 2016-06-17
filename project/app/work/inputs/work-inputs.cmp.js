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
var work_type_1 = require('../../../service/work-type');
var project_1 = require('../../../service/project');
var task_1 = require('../../../service/task');
var work_1 = require('../../../service/work');
var WorkInputsCmp = (function () {
    function WorkInputsCmp(projectSvc, taskSvc, workSvc, workTypeSvc) {
        this.projectSvc = projectSvc;
        this.taskSvc = taskSvc;
        this.workSvc = workSvc;
        this.workTypeSvc = workTypeSvc;
    }
    WorkInputsCmp.prototype.onChangeProject = function () {
        this.item.task_id = 0;
        this.onChangeTask();
    };
    WorkInputsCmp.prototype.onChangeTask = function () {
        var work_types = this.projectSvc.getWorkTypesByProjectId(this.item.project_id);
        if (work_types && work_types.length)
            this.item.work_type_id = work_types[0].id;
        else
            this.item.work_type_id = 0;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', work_1.Work)
    ], WorkInputsCmp.prototype, "item", void 0);
    WorkInputsCmp = __decorate([
        core_1.Component({
            selector: 'work-inputs',
            templateUrl: 'project/app/work/inputs/work-inputs.cmp.html'
        }), 
        __metadata('design:paramtypes', [project_1.ProjectSvc, task_1.TaskSvc, work_1.WorkSvc, work_type_1.WorkTypeSvc])
    ], WorkInputsCmp);
    return WorkInputsCmp;
}());
exports.WorkInputsCmp = WorkInputsCmp;
//# sourceMappingURL=work-inputs.cmp.js.map