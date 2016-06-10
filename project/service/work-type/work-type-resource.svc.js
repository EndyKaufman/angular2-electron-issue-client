"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var resource_svc_1 = require('../resource.svc');
var WorkTypeResourceSvc = (function (_super) {
    __extends(WorkTypeResourceSvc, _super);
    function WorkTypeResourceSvc(http) {
        _super.call(this, http);
        this.http = http;
        this.resourceUrl = 'app/work_type';
    }
    WorkTypeResourceSvc.prototype.post = function (item) {
        return _super.prototype.post.call(this, item);
    };
    WorkTypeResourceSvc.prototype.put = function (item) {
        return _super.prototype.put.call(this, item);
    };
    WorkTypeResourceSvc.prototype.save = function (item) {
        return _super.prototype.put.call(this, item);
    };
    WorkTypeResourceSvc.prototype.delete = function (item) {
        return _super.prototype.delete.call(this, item);
    };
    WorkTypeResourceSvc.prototype.getList = function (query) {
        return _super.prototype.getList.call(this, query);
    };
    return WorkTypeResourceSvc;
}(resource_svc_1.ResourceSvc));
exports.WorkTypeResourceSvc = WorkTypeResourceSvc;
//# sourceMappingURL=work-type-resource.svc.js.map