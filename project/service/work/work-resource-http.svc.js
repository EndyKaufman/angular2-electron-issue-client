"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var resource_http_svc_1 = require('../../class/resource-http.svc');
var WorkResourceHttpSvc = (function (_super) {
    __extends(WorkResourceHttpSvc, _super);
    function WorkResourceHttpSvc(http) {
        _super.call(this, http);
        this.http = http;
        this.resourceUrl = 'app/work';
    }
    WorkResourceHttpSvc.prototype.post = function (item) {
        return _super.prototype.post.call(this, item);
    };
    WorkResourceHttpSvc.prototype.put = function (item) {
        return _super.prototype.put.call(this, item);
    };
    WorkResourceHttpSvc.prototype.delete = function (item) {
        return _super.prototype.delete.call(this, item);
    };
    WorkResourceHttpSvc.prototype.getList = function (query) {
        return _super.prototype.getList.call(this, query);
    };
    return WorkResourceHttpSvc;
}(resource_http_svc_1.ResourceHttpSvc));
exports.WorkResourceHttpSvc = WorkResourceHttpSvc;
//# sourceMappingURL=work-resource-http.svc.js.map