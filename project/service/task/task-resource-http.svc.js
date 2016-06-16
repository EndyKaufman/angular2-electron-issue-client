"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var resource_http_svc_1 = require('../../class/resource-http.svc');
var TaskResourceHttpSvc = (function (_super) {
    __extends(TaskResourceHttpSvc, _super);
    function TaskResourceHttpSvc(http) {
        _super.call(this, http);
        this.http = http;
        this.resourceUrl = 'app/task';
    }
    TaskResourceHttpSvc.prototype.post = function (item) {
        return _super.prototype.post.call(this, item);
    };
    TaskResourceHttpSvc.prototype.put = function (item) {
        return _super.prototype.put.call(this, item);
    };
    TaskResourceHttpSvc.prototype.delete = function (item) {
        return _super.prototype.delete.call(this, item);
    };
    TaskResourceHttpSvc.prototype.getList = function (query) {
        return _super.prototype.getList.call(this, query);
    };
    return TaskResourceHttpSvc;
}(resource_http_svc_1.ResourceHttpSvc));
exports.TaskResourceHttpSvc = TaskResourceHttpSvc;
//# sourceMappingURL=task-resource-http.svc.js.map