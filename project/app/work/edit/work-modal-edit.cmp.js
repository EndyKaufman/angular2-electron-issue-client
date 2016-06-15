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
var work_svc_1 = require('../../../../service/work/work.svc');
var work_inputs_cmp_1 = require('../../inputs/work-inputs.cmp');
var WorkModalEditCmp = (function () {
    function WorkModalEditCmp(workSvc, uiSvc) {
        var _this = this;
        this.workSvc = workSvc;
        this.uiSvc = uiSvc;
        workSvc.onEdit$.subscribe(function (item) { return _this.onEdit(item); });
        workSvc.onDeleted$.subscribe(function (item) { return _this.uiSvc.hideModal('work-modal-edit'); });
    }
    WorkModalEditCmp.prototype.onEdit = function (item) {
        var _this = this;
        this.item = item;
        this.item.spent_on_for_input = this.workSvc.getSpentOnForInput(item.spent_on);
        this.uiSvc.showModal('work-modal-edit', function (action) {
            if (action == 'delete') {
                _this.workSvc.onDelete(_this.item);
                return false;
            }
            return true;
        }).then(function (action) {
            _this.item.spent_on = _this.workSvc.getSpentOnFromInput(_this.item.spent_on_for_input);
            _this.workSvc.edit(_this.item);
        }, function (action) { });
    };
    WorkModalEditCmp = __decorate([
        core_1.Component({
            selector: 'work-modal-edit',
            templateUrl: 'project/app/work/modal/edit/work-modal-edit.cmp.html',
            directives: [work_inputs_cmp_1.WorkInputsCmp]
        }), 
        __metadata('design:paramtypes', [work_svc_1.WorkSvc, ui_svc_1.UiSvc])
    ], WorkModalEditCmp);
    return WorkModalEditCmp;
}());
exports.WorkModalEditCmp = WorkModalEditCmp;
//# sourceMappingURL=work-modal-edit.cmp.js.map