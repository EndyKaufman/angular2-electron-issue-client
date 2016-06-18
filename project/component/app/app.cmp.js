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
var router_deprecated_1 = require('@angular/router-deprecated');
var semantic_ui_1 = require('../../ui/semantic-ui');
var status_1 = require('../../service/status');
var work_type_1 = require('../../service/work-type');
var project_1 = require('../../service/project');
var task_1 = require('../../service/task');
var work_1 = require('../../service/work');
var header_1 = require('../header');
var project_2 = require('../project');
var task_2 = require('../task');
var work_2 = require('../work');
var AppCmp = (function () {
    function AppCmp(taskSvc, statusSvc, workTypeSvc) {
        this.taskSvc = taskSvc;
        this.statusSvc = statusSvc;
        this.workTypeSvc = workTypeSvc;
    }
    AppCmp.prototype.getStatusList = function () {
        this.statusSvc.loaded = false;
        this.statusSvc.getList({});
    };
    AppCmp.prototype.getWorkTypeList = function () {
        this.workTypeSvc.loaded = false;
        this.workTypeSvc.getList({});
    };
    AppCmp.prototype.ngOnInit = function () {
        this.getStatusList();
        this.getWorkTypeList();
    };
    AppCmp = __decorate([
        core_1.Component({
            selector: 'app',
            templateUrl: 'project/component/app/app.cmp.html',
            directives: [header_1.HeaderLogoCmp, project_2.ProjectButtonsCmp, task_2.TaskCmp, work_2.WorkCmp, router_deprecated_1.ROUTER_DIRECTIVES],
            providers: [
                semantic_ui_1.SEMANTIC_UI_PROVIDERS,
                router_deprecated_1.ROUTER_PROVIDERS,
                status_1.STATUS_PROVIDERS,
                work_type_1.WORK_TYPE_PROVIDERS,
                project_1.PROJECT_PROVIDERS,
                task_1.TASK_PROVIDERS,
                work_1.WORK_PROVIDERS
            ]
        }), 
        __metadata('design:paramtypes', [task_1.TaskSvc, status_1.StatusSvc, work_type_1.WorkTypeSvc])
    ], AppCmp);
    return AppCmp;
}());
exports.AppCmp = AppCmp;
//# sourceMappingURL=app.cmp.js.map