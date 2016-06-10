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
var status_svc_1 = require('../service/status/status.svc');
var work_type_svc_1 = require('../service/work-type/work-type.svc');
var project_svc_1 = require('../service/project/project.svc');
var task_svc_1 = require('../service/task/task.svc');
var work_svc_1 = require('../service/work/work.svc');
var header_logo_cmp_1 = require('./header/logo/header-logo.cmp');
var project_buttons_cmp_1 = require('./project/buttons/project-buttons.cmp');
var task_cmp_1 = require('./task/task.cmp');
var work_cmp_1 = require('./work/work.cmp');
var AppCmp = (function () {
    function AppCmp(projectSvc, taskSvc, workSvc, statusSvc, workTypeSvc) {
        this.projectSvc = projectSvc;
        this.taskSvc = taskSvc;
        this.workSvc = workSvc;
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
            templateUrl: 'project/app/app.cmp.html',
            directives: [header_logo_cmp_1.HeaderLogoCmp, project_buttons_cmp_1.ProjectButtonsCmp, task_cmp_1.TaskCmp, work_cmp_1.WorkCmp, router_deprecated_1.ROUTER_DIRECTIVES],
            providers: [
                router_deprecated_1.ROUTER_PROVIDERS,
                status_svc_1.StatusSvc,
                work_type_svc_1.WorkTypeSvc,
                project_svc_1.ProjectSvc,
                task_svc_1.TaskSvc,
                work_svc_1.WorkSvc
            ]
        }), 
        __metadata('design:paramtypes', [project_svc_1.ProjectSvc, task_svc_1.TaskSvc, work_svc_1.WorkSvc, status_svc_1.StatusSvc, work_type_svc_1.WorkTypeSvc])
    ], AppCmp);
    return AppCmp;
}());
exports.AppCmp = AppCmp;
//# sourceMappingURL=app.cmp.js.map