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
var work_type_1 = require('../../../../service/work-type');
var project_1 = require('../../../../service/project');
var task_1 = require('../../../../service/task');
var work_1 = require('../../../../service/work');
var WorkHeaderButtonsCmp = (function () {
    function WorkHeaderButtonsCmp(projectSvc, taskSvc, workTypeSvc, workSvc) {
        this.projectSvc = projectSvc;
        this.taskSvc = taskSvc;
        this.workTypeSvc = workTypeSvc;
        this.workSvc = workSvc;
    }
    WorkHeaderButtonsCmp.prototype.getWorkTypeButtonColor = function (work_type_id) {
        var color = this.workSvc.isFilterWorkType(work_type_id) ? '' : 'basic';
        if (this.taskSvc.selectedItem.id)
            color += ' blue';
        else if (!this.taskSvc.selectedItem.id)
            color += ' green';
        return color;
    };
    WorkHeaderButtonsCmp = __decorate([
        core_1.Component({
            selector: 'work-header-buttons',
            templateUrl: 'project/component/work/header/buttons/work-header-buttons.cmp.html'
        }), 
        __metadata('design:paramtypes', [project_1.ProjectSvc, task_1.TaskSvc, work_type_1.WorkTypeSvc, work_1.WorkSvc])
    ], WorkHeaderButtonsCmp);
    return WorkHeaderButtonsCmp;
}());
exports.WorkHeaderButtonsCmp = WorkHeaderButtonsCmp;
//# sourceMappingURL=work-header-buttons.cmp.js.map