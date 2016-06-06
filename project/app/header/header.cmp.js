"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var header_logo_cmp_1 = require('./logo/header-logo.cmp');
var HeaderCmp = (function () {
    function HeaderCmp() {
        this.title = 'Tasks';
    }
    HeaderCmp = __decorate([
        core_1.Component({
            selector: 'header',
            templateUrl: 'project/app/header/header.cmp.html',
            directives: [header_logo_cmp_1.HeaderLogoCmp]
        }), 
        __metadata('design:paramtypes', [])
    ], HeaderCmp);
    return HeaderCmp;
}());
exports.HeaderCmp = HeaderCmp;
//# sourceMappingURL=header.cmp.js.map