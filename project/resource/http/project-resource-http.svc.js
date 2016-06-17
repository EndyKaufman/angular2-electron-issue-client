"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var resource_http_svc_1 = require('../../class/resource-http.svc');
var ProjectResourceHttpSvc = (function (_super) {
    __extends(ProjectResourceHttpSvc, _super);
    function ProjectResourceHttpSvc(http) {
        _super.call(this, http);
        this.http = http;
        this.resourceUrl = 'app/project';
    }
    ProjectResourceHttpSvc.prototype.post = function (item) {
        return _super.prototype.post.call(this, item);
    };
    ProjectResourceHttpSvc.prototype.put = function (item) {
        return _super.prototype.put.call(this, item);
    };
    ProjectResourceHttpSvc.prototype.delete = function (item) {
        return _super.prototype.delete.call(this, item);
    };
    ProjectResourceHttpSvc.prototype.getList = function (query) {
        return _super.prototype.getList.call(this, query);
    };
    return ProjectResourceHttpSvc;
}(resource_http_svc_1.ResourceHttpSvc));
exports.ProjectResourceHttpSvc = ProjectResourceHttpSvc;
//# sourceMappingURL=project-resource-http.svc.js.map