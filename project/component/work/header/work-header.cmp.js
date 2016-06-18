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
var task_1 = require('../../../service/task');
var WorkHeaderCmp = (function () {
    function WorkHeaderCmp(taskSvc) {
        this.taskSvc = taskSvc;
    }
    WorkHeaderCmp = __decorate([
        core_1.Component({
            selector: 'work-header',
            templateUrl: 'project/component/work/header/work-header.cmp.html'
        }), 
        __metadata('design:paramtypes', [task_1.TaskSvc])
    ], WorkHeaderCmp);
    return WorkHeaderCmp;
}());
exports.WorkHeaderCmp = WorkHeaderCmp;
//# sourceMappingURL=work-header.cmp.js.map