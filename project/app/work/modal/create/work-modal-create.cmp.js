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
var semantic_ui_1 = require('../../../../ui/semantic-ui');
var work_svc_1 = require('../../../../service/work/work.svc');
var project_svc_1 = require('../../../../service/project/project.svc');
var task_svc_1 = require('../../../../service/task/task.svc');
var work_inputs_cmp_1 = require('../../inputs/work-inputs.cmp');
var WorkModalCreateCmp = (function () {
    function WorkModalCreateCmp(projectSvc, taskSvc, workSvc, modal) {
        var _this = this;
        this.projectSvc = projectSvc;
        this.taskSvc = taskSvc;
        this.workSvc = workSvc;
        this.modal = modal;
        workSvc.onCreate$.subscribe(function (item) { return _this.onCreate(item); });
    }
    WorkModalCreateCmp.prototype.onCreate = function (item) {
        var _this = this;
        if (this.projectSvc.selectedItem.id)
            item.project_id = this.projectSvc.selectedItem.id;
        if (this.taskSvc.selectedItem.id)
            item.task_id = this.taskSvc.selectedItem.id;
        if (this.workSvc.filteredWorkType.length)
            item.work_type_id = this.workSvc.filteredWorkType[0];
        this.item = item;
        this.item.spent_on_for_input = '';
        this.modal.show('work-modal-create').then(function (action) {
            item.spent_on = _this.workSvc.getSpentOnFromInput(_this.item.spent_on_for_input);
            _this.workSvc.create(_this.item);
        }, function (action) { });
    };
    WorkModalCreateCmp = __decorate([
        core_1.Component({
            selector: 'work-modal-create',
            templateUrl: 'project/app/work/modal/create/work-modal-create.cmp.html',
            directives: [work_inputs_cmp_1.WorkInputsCmp]
        }), 
        __metadata('design:paramtypes', [project_svc_1.ProjectSvc, task_svc_1.TaskSvc, work_svc_1.WorkSvc, semantic_ui_1.SemanticUiModal])
    ], WorkModalCreateCmp);
    return WorkModalCreateCmp;
}());
exports.WorkModalCreateCmp = WorkModalCreateCmp;
//# sourceMappingURL=work-modal-create.cmp.js.map