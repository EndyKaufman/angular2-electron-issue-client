"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var resource_svc_1 = require('../resource.svc');
var StatusResourceSvc = (function (_super) {
    __extends(StatusResourceSvc, _super);
    function StatusResourceSvc(http) {
        _super.call(this, http);
        this.http = http;
        this.resourceUrl = 'app/status';
    }
    StatusResourceSvc.prototype.post = function (item) {
        return _super.prototype.post.call(this, item);
    };
    StatusResourceSvc.prototype.put = function (item) {
        return _super.prototype.put.call(this, item);
    };
    StatusResourceSvc.prototype.save = function (item) {
        return _super.prototype.put.call(this, item);
    };
    StatusResourceSvc.prototype.delete = function (item) {
        return _super.prototype.delete.call(this, item);
    };
    StatusResourceSvc.prototype.getList = function (query) {
        return _super.prototype.getList.call(this, query);
    };
    return StatusResourceSvc;
}(resource_svc_1.ResourceSvc));
exports.StatusResourceSvc = StatusResourceSvc;
//# sourceMappingURL=status-resource.svc.js.map