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
var ui_svc_1 = require('../../../../service/ui.svc');
var work_inputs_svc_1 = require('../../../../service/work/work-inputs.svc');
var work_svc_1 = require('../../../../service/work/work.svc');
var project_svc_1 = require('../../../../service/project/project.svc');
var task_svc_1 = require('../../../../service/task/task.svc');
var work_inputs_cmp_1 = require('../../inputs/work-inputs.cmp');
var WorkModalEditCmp = (function () {
    function WorkModalEditCmp(projectSvc, taskSvc, workSvc, uiSvc, workInputsSvc) {
        var _this = this;
        this.projectSvc = projectSvc;
        this.taskSvc = taskSvc;
        this.workSvc = workSvc;
        this.uiSvc = uiSvc;
        this.workInputsSvc = workInputsSvc;
        workSvc.onEdit$.subscribe(function (item) { return _this.onEdit(item); });
    }
    WorkModalEditCmp.prototype.onEdit = function (item) {
        var _this = this;
        this.workInputsSvc.onInit();
        this.workSvc.editItem = item;
        this.workInputsSvc.spent_on_for_input = this.workSvc.getSpentOnForInput(item.spent_on);
        this.uiSvc.showModal('work-modal-edit').then(function (el) {
            console.log(_this.workInputsSvc.spent_on_for_input);
            _this.workSvc.editItem.spent_on = _this.workSvc.getSpentOnFromInput(_this.workInputsSvc.spent_on_for_input);
            _this.workSvc.edit(_this.workSvc.editItem);
        });
    };
    WorkModalEditCmp = __decorate([
        core_1.Component({
            selector: 'work-modal-edit',
            templateUrl: 'project/app/work/modal/edit/work-modal-edit.cmp.html',
            directives: [work_inputs_cmp_1.WorkInputsCmp]
        }), 
        __metadata('design:paramtypes', [project_svc_1.ProjectSvc, task_svc_1.TaskSvc, work_svc_1.WorkSvc, ui_svc_1.UiSvc, work_inputs_svc_1.WorkInputsSvc])
    ], WorkModalEditCmp);
    return WorkModalEditCmp;
}());
exports.WorkModalEditCmp = WorkModalEditCmp;
//# sourceMappingURL=work-modal-edit.cmp.js.map