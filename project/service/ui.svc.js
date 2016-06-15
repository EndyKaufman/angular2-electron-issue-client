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
require('rxjs/add/operator/toPromise');
var UiSvc = (function () {
    function UiSvc() {
    }
    UiSvc.prototype.showModal = function (componentName, otherAction) {
        var modal = $(componentName + '>.ui.modal');
        return new Promise(function (resolve, reject) {
            modal.modal({
                detachable: false,
                allowMultiple: true,
                onApprove: function (el) {
                    var result = true;
                    console.log('ok');
                    var action = $(el).data('action');
                    if (!action)
                        action = 'ok';
                    if (action != 'ok' && otherAction)
                        result = otherAction(action);
                    resolve(action);
                    return result;
                },
                onDeny: function (el) {
                    var result = true;
                    console.log('cancel');
                    var action = $(el).data('action');
                    if (!action)
                        action = 'cancel';
                    if (action != 'cancel' && otherAction)
                        result = otherAction(action);
                    reject(action);
                    return result;
                },
                onHidden: function () {
                    console.log('cancel');
                    var action = 'cancel';
                    reject(action);
                }
            }).modal('show');
        });
    };
    UiSvc.prototype.hideModal = function (componentName) {
        var modal = $(componentName + '>.ui.modal');
        modal.modal('hide');
    };
    UiSvc = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], UiSvc);
    return UiSvc;
}());
exports.UiSvc = UiSvc;
//# sourceMappingURL=ui.svc.js.map