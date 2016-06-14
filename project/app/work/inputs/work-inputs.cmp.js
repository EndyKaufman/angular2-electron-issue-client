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
var work_inputs_svc_1 = require('../../../service/work/work-inputs.svc');
var work_type_svc_1 = require('../../../service/work-type/work-type.svc');
var project_svc_1 = require('../../../service/project/project.svc');
var task_svc_1 = require('../../../service/task/task.svc');
var work_svc_1 = require('../../../service/work/work.svc');
var WorkInputsCmp = (function () {
    function WorkInputsCmp(projectSvc, taskSvc, workSvc, workTypeSvc, workInputsSvc) {
        this.projectSvc = projectSvc;
        this.taskSvc = taskSvc;
        this.workSvc = workSvc;
        this.workTypeSvc = workTypeSvc;
        this.workInputsSvc = workInputsSvc;
    }
    WorkInputsCmp.prototype.onChangeProject = function () {
        this.workSvc.editItem.task_id = 0;
        this.workSvc.editItem.work_type_id = this.workInputsSvc.workTypesByProject[this.workSvc.editItem.project_id][0].id;
    };
    WorkInputsCmp.prototype.onChangeTask = function () {
        this.workSvc.editItem.work_type_id = this.workInputsSvc.workTypesByProject[this.workSvc.editItem.project_id][0].id;
    };
    WorkInputsCmp = __decorate([
        core_1.Component({
            selector: 'work-inputs',
            templateUrl: 'project/app/work/inputs/work-inputs.cmp.html'
        }), 
        __metadata('design:paramtypes', [project_svc_1.ProjectSvc, task_svc_1.TaskSvc, work_svc_1.WorkSvc, work_type_svc_1.WorkTypeSvc, work_inputs_svc_1.WorkInputsSvc])
    ], WorkInputsCmp);
    return WorkInputsCmp;
}());
exports.WorkInputsCmp = WorkInputsCmp;
//# sourceMappingURL=work-inputs.cmp.js.map