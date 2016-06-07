"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var resource_svc_1 = require('../resource.svc');
var TaskResourceSvc = (function (_super) {
    __extends(TaskResourceSvc, _super);
    function TaskResourceSvc(http) {
        _super.call(this, http);
        this.http = http;
        this.resourceUrl = 'app/task';
    }
    TaskResourceSvc.prototype.post = function (item) {
        return _super.prototype.post.call(this, item);
    };
    TaskResourceSvc.prototype.put = function (item) {
        return _super.prototype.put.call(this, item);
    };
    TaskResourceSvc.prototype.save = function (item) {
        return _super.prototype.put.call(this, item);
    };
    TaskResourceSvc.prototype.delete = function (item) {
        return _super.prototype.delete.call(this, item);
    };
    TaskResourceSvc.prototype.getList = function (query) {
        return _super.prototype.getList.call(this, query);
    };
    return TaskResourceSvc;
}(resource_svc_1.ResourceSvc));
exports.TaskResourceSvc = TaskResourceSvc;
//# sourceMappingURL=task-resource.svc.js.map