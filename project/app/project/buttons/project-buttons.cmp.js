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
var project_svc_1 = require('../../../service/project/project.svc');
var ProjectButtonsCmp = (function () {
    function ProjectButtonsCmp(router, projectSvc) {
        this.router = router;
        this.projectSvc = projectSvc;
    }
    ProjectButtonsCmp.prototype.getList = function () {
        this.projectSvc.getList({});
    };
    ProjectButtonsCmp.prototype.ngOnInit = function () {
        this.getList();
    };
    ProjectButtonsCmp = __decorate([
        core_1.Component({
            selector: 'project-buttons',
            templateUrl: 'project/app/project/buttons/project-buttons.cmp.html'
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router, project_svc_1.ProjectSvc])
    ], ProjectButtonsCmp);
    return ProjectButtonsCmp;
}());
exports.ProjectButtonsCmp = ProjectButtonsCmp;
//# sourceMappingURL=project-buttons.cmp.js.map