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
var work_inputs_cmp_1 = require('../../inputs/work-inputs.cmp');
var WorkModalDeleteCmp = (function () {
    function WorkModalDeleteCmp(workSvc, uiSvc, workInputsSvc) {
        var _this = this;
        this.workSvc = workSvc;
        this.uiSvc = uiSvc;
        this.workInputsSvc = workInputsSvc;
        workSvc.onDelete$.subscribe(function (item) { return _this.onDelete(item); });
    }
    WorkModalDeleteCmp.prototype.onDelete = function (item) {
        var _this = this;
        this.workInputsSvc.onInit();
        this.workSvc.editItem = item;
        this.uiSvc.showModal('work-modal-delete').then(function (action) {
            _this.workSvc.delete(_this.workSvc.editItem);
        }, function (action) { });
    };
    WorkModalDeleteCmp = __decorate([
        core_1.Component({
            selector: 'work-modal-delete',
            templateUrl: 'project/app/work/modal/delete/work-modal-delete.cmp.html',
            directives: [work_inputs_cmp_1.WorkInputsCmp]
        }), 
        __metadata('design:paramtypes', [work_svc_1.WorkSvc, ui_svc_1.UiSvc, work_inputs_svc_1.WorkInputsSvc])
    ], WorkModalDeleteCmp);
    return WorkModalDeleteCmp;
}());
exports.WorkModalDeleteCmp = WorkModalDeleteCmp;
//# sourceMappingURL=work-modal-delete.cmp.js.map