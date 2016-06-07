"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var resource_svc_1 = require('../resource.svc');
var ProjectResourceSvc = (function (_super) {
    __extends(ProjectResourceSvc, _super);
    function ProjectResourceSvc(http) {
        _super.call(this, http);
        this.http = http;
        this.resourceUrl = 'app/project';
    }
    ProjectResourceSvc.prototype.post = function (item) {
        return _super.prototype.post.call(this, item);
    };
    ProjectResourceSvc.prototype.put = function (item) {
        return _super.prototype.put.call(this, item);
    };
    ProjectResourceSvc.prototype.save = function (item) {
        return _super.prototype.put.call(this, item);
    };
    ProjectResourceSvc.prototype.delete = function (item) {
        return _super.prototype.delete.call(this, item);
    };
    ProjectResourceSvc.prototype.getList = function (query) {
        return _super.prototype.getList.call(this, query);
    };
    return ProjectResourceSvc;
}(resource_svc_1.ResourceSvc));
exports.ProjectResourceSvc = ProjectResourceSvc;
//# sourceMappingURL=project-resource.svc.js.map