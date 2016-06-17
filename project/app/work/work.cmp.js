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
var task_1 = require('../../service/task');
var work_header_cmp_1 = require('./header/work-header.cmp');
var work_header_buttons_cmp_1 = require('./header/buttons/work-header-buttons.cmp');
var work_list_cmp_1 = require('./list/work-list.cmp');
var work_modal_cmp_1 = require('./modal/work-modal.cmp');
var WorkCmp = (function () {
    function WorkCmp(taskSvc) {
        this.taskSvc = taskSvc;
    }
    WorkCmp = __decorate([
        core_1.Component({
            selector: 'work',
            templateUrl: 'project/app/work/work.cmp.html',
            directives: [work_header_cmp_1.WorkHeaderCmp, work_list_cmp_1.WorkListCmp, work_header_buttons_cmp_1.WorkHeaderButtonsCmp, work_modal_cmp_1.WorkModalCmp]
        }), 
        __metadata('design:paramtypes', [task_1.TaskSvc])
    ], WorkCmp);
    return WorkCmp;
}());
exports.WorkCmp = WorkCmp;
//# sourceMappingURL=work.cmp.js.map