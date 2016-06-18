"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var http_1 = require('@angular/http');
var core_1 = require('@angular/core');
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
    TaskResourceHttpSvc = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], TaskResourceHttpSvc);
    return TaskResourceHttpSvc;
}(resource_http_svc_1.ResourceHttpSvc));
exports.TaskResourceHttpSvc = TaskResourceHttpSvc;
//# sourceMappingURL=task-resource-http.svc.js.map