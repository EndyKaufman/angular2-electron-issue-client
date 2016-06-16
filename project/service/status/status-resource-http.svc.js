"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var resource_http_svc_1 = require('../../class/resource-http.svc');
var StatusResourceHttpSvc = (function (_super) {
    __extends(StatusResourceHttpSvc, _super);
    function StatusResourceHttpSvc(http) {
        _super.call(this, http);
        this.http = http;
        this.resourceUrl = 'app/status';
    }
    StatusResourceHttpSvc.prototype.post = function (item) {
        return _super.prototype.post.call(this, item);
    };
    StatusResourceHttpSvc.prototype.put = function (item) {
        return _super.prototype.put.call(this, item);
    };
    StatusResourceHttpSvc.prototype.delete = function (item) {
        return _super.prototype.delete.call(this, item);
    };
    StatusResourceHttpSvc.prototype.getList = function (query) {
        return _super.prototype.getList.call(this, query);
    };
    return StatusResourceHttpSvc;
}(resource_http_svc_1.ResourceHttpSvc));
exports.StatusResourceHttpSvc = StatusResourceHttpSvc;
//# sourceMappingURL=status-resource-http.svc.js.map