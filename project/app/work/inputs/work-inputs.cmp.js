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
var WorkInputsCmp = (function () {
    function WorkInputsCmp(workSvc) {
        this.workSvc = workSvc;
        this.projects = {};
        this.tasksByProject = {};
        this.workTypesByProject = {};
    }
    WorkInputsCmp.prototype.onChangeProject = function () {
        this.workSvc.editItem.task_id = 0;
        this.workSvc.editItem.work_type_id = this.workTypesByProject[this.workSvc.editItem.project_id][0].id;
    };
    WorkInputsCmp.prototype.onChangeTask = function () {
        this.workSvc.editItem.work_type_id = this.workTypesByProject[this.workSvc.editItem.project_id][0].id;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], WorkInputsCmp.prototype, "projects", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], WorkInputsCmp.prototype, "tasksByProject", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], WorkInputsCmp.prototype, "workTypesByProject", void 0);
    WorkInputsCmp = __decorate([
        core_1.Component({
            selector: 'work-inputs',
            templateUrl: 'project/app/work/inputs/work-inputs.cmp.html'
        }), 
        __metadata('design:paramtypes', [work_svc_1.WorkSvc])
    ], WorkInputsCmp);
    return WorkInputsCmp;
}());
exports.WorkInputsCmp = WorkInputsCmp;
//# sourceMappingURL=work-inputs.cmp.js.map