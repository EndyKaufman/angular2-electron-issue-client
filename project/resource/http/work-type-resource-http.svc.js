"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var resource_http_svc_1 = require('../../class/resource-http.svc');
var WorkTypeResourceHttpSvc = (function (_super) {
    __extends(WorkTypeResourceHttpSvc, _super);
    function WorkTypeResourceHttpSvc(http) {
        _super.call(this, http);
        this.http = http;
        this.resourceUrl = 'app/work_type';
    }
    WorkTypeResourceHttpSvc.prototype.post = function (item) {
        return _super.prototype.post.call(this, item);
    };
    WorkTypeResourceHttpSvc.prototype.put = function (item) {
        return _super.prototype.put.call(this, item);
    };
    WorkTypeResourceHttpSvc.prototype.delete = function (item) {
        return _super.prototype.delete.call(this, item);
    };
    WorkTypeResourceHttpSvc.prototype.getList = function (query) {
        return _super.prototype.getList.call(this, query);
    };
    return WorkTypeResourceHttpSvc;
}(resource_http_svc_1.ResourceHttpSvc));
exports.WorkTypeResourceHttpSvc = WorkTypeResourceHttpSvc;
//# sourceMappingURL=work-type-resource-http.svc.js.map