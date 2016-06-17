"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var items_svc_1 = require('../../class/items.svc');
var project_resource_http_svc_1 = require('../../resource/http/project-resource-http.svc');
var project_1 = require('./project');
var work_type_svc_1 = require('../work-type/work-type.svc');
var task_svc_1 = require('../task/task.svc');
var ProjectSvc = (function (_super) {
    __extends(ProjectSvc, _super);
    function ProjectSvc(http, taskSvc, workTypeSvc) {
        var _this = this;
        _super.call(this, http);
        this.http = http;
        this.taskSvc = taskSvc;
        this.workTypeSvc = workTypeSvc;
        this.items = [];
        this.checkedsWorkTypeIds = [];
        this.checkedsStatusIds = [];
        this.selectedItem = new project_1.Project();
        this.resource = new project_resource_http_svc_1.ProjectResourceHttpSvc(http);
        this.itemSelected$.subscribe(function (item) {
            _this.checkedsStatusIds = _this.getCheckedsStatusIds();
            _this.checkedsWorkTypeIds = _this.getCheckedsWorkTypeIds();
            _this.updateCheckedsTitle();
        });
        this.itemChecked$.subscribe(function (items) {
            _this.checkedsStatusIds = _this.getCheckedsStatusIds();
            _this.checkedsWorkTypeIds = _this.getCheckedsWorkTypeIds();
            _this.updateCheckedsTitle();
        });
    }
    ProjectSvc.prototype.updateCheckedsTitle = function () {
        this.checkedsTitle = this.selectedItem.title ? this.selectedItem.title : this.checkedItems.map(function (item) { return item.title; }).join(', ');
    };
    ProjectSvc.prototype.getCheckedsStatusIds = function () {
        console.log('getCheckedsStatusIds');
        var projectsStatusList = this.selectedItem.id ? this.selectedItem.status : this.checkedItems.map(function (item) { return item.status; });
        var checkedProjectStatusIds = [];
        for (var _i = 0, projectsStatusList_1 = projectsStatusList; _i < projectsStatusList_1.length; _i++) {
            var status_1 = projectsStatusList_1[_i];
            checkedProjectStatusIds = checkedProjectStatusIds.concat(status_1);
        }
        return checkedProjectStatusIds.filter(function (item, pos, self) {
            return self.indexOf(item) == pos;
        });
    };
    ProjectSvc.prototype.getCheckedsWorkTypeIds = function () {
        var projectsWorkTypeList = this.selectedItem.id ? this.selectedItem.work_type : this.checkedItems.map(function (item) { return item.work_type; });
        var checkedProjectWorkTypeIds = [];
        for (var _i = 0, projectsWorkTypeList_1 = projectsWorkTypeList; _i < projectsWorkTypeList_1.length; _i++) {
            var work_type = projectsWorkTypeList_1[_i];
            checkedProjectWorkTypeIds = checkedProjectWorkTypeIds.concat(work_type);
        }
        console.log('getCheckedsWorkTypeIds', checkedProjectWorkTypeIds);
        return checkedProjectWorkTypeIds.filter(function (item, pos, self) {
            return self.indexOf(item) == pos;
        });
    };
    ProjectSvc.prototype.getList = function (query) {
        return _super.prototype.getList.call(this, query);
    };
    ProjectSvc.prototype.getWorkTypesByProjectId = function (project_id) {
        var _this = this;
        return this.workTypeSvc.items.filter(function (item) { return _this.getItemById(project_id).work_type.indexOf(item.id) != -1; });
    };
    ProjectSvc.prototype.getTasksByProjectId = function (project_id) {
        return this.taskSvc.items.filter(function (item) { return item.project_id == project_id; });
    };
    ProjectSvc = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, task_svc_1.TaskSvc, work_type_svc_1.WorkTypeSvc])
    ], ProjectSvc);
    return ProjectSvc;
}(items_svc_1.ItemsSvc));
exports.ProjectSvc = ProjectSvc;
//# sourceMappingURL=project.svc.js.map