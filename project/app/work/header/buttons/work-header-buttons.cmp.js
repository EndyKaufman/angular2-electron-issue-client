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
var work_type_svc_1 = require('../../../../service/work-type/work-type.svc');
var project_svc_1 = require('../../../../service/project/project.svc');
var task_svc_1 = require('../../../../service/task/task.svc');
var work_svc_1 = require('../../../../service/work/work.svc');
var WorkHeaderButtonsCmp = (function () {
    function WorkHeaderButtonsCmp(projectSvc, taskSvc, workTypeSvc, workSvc) {
        var _this = this;
        this.projectSvc = projectSvc;
        this.taskSvc = taskSvc;
        this.workTypeSvc = workTypeSvc;
        this.workSvc = workSvc;
        this.firstUpdateFilteredWorkType = true;
        this.taskSvc.itemSelected$.subscribe(function (item) { return _this.updateFilteredWorkType(); });
        this.taskSvc.itemChecked$.subscribe(function (items) { return _this.updateFilteredWorkType(); });
    }
    WorkHeaderButtonsCmp.prototype.updateFilteredWorkType = function () {
        if (!this.firstUpdateFilteredWorkType)
            return;
        this.firstUpdateFilteredWorkType = false;
        for (var _i = 0, _a = this.projectSvc.checkedsWorkTypeIds; _i < _a.length; _i++) {
            var work_type_id = _a[_i];
            this.workSvc.onFilterWorkType(work_type_id);
        }
    };
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
            templateUrl: 'project/app/work/header/buttons/work-header-buttons.cmp.html'
        }), 
        __metadata('design:paramtypes', [project_svc_1.ProjectSvc, task_svc_1.TaskSvc, work_type_svc_1.WorkTypeSvc, work_svc_1.WorkSvc])
    ], WorkHeaderButtonsCmp);
    return WorkHeaderButtonsCmp;
}());
exports.WorkHeaderButtonsCmp = WorkHeaderButtonsCmp;
//# sourceMappingURL=work-header-buttons.cmp.js.map