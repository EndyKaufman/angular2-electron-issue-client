"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var resource_svc_1 = require('../resource.svc');
var WorkResourceSvc = (function (_super) {
    __extends(WorkResourceSvc, _super);
    function WorkResourceSvc(http) {
        _super.call(this, http);
        this.http = http;
        this.resourceUrl = 'app/work';
    }
    WorkResourceSvc.prototype.post = function (item) {
        return _super.prototype.post.call(this, item);
    };
    WorkResourceSvc.prototype.put = function (item) {
        return _super.prototype.put.call(this, item);
    };
    WorkResourceSvc.prototype.delete = function (item) {
        return _super.prototype.delete.call(this, item);
    };
    WorkResourceSvc.prototype.getList = function (query) {
        return _super.prototype.getList.call(this, query);
    };
    return WorkResourceSvc;
}(resource_svc_1.ResourceSvc));
exports.WorkResourceSvc = WorkResourceSvc;
//# sourceMappingURL=work-resource.svc.js.map