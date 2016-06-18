"use strict";
/// <reference path="../jquery/jquery.d.ts" />
/// <reference path="./semantic-ui-modal.d.ts" />
require('rxjs/add/operator/toPromise');
var SemanticUiModal = (function () {
    function SemanticUiModal() {
    }
    SemanticUiModal.prototype.show = function (componentName, otherAction) {
        var modal = $(componentName + '>.ui.modal');
        return new Promise(function (resolve, reject) {
            window.setTimeout(function () {
                modal.modal({
                    //blurring: true,
                    detachable: false,
                    allowMultiple: true,
                    observeChanges: true,
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
            }, 100);
        });
    };
    SemanticUiModal.prototype.hide = function (componentName) {
        var modal = $(componentName + '>.ui.modal');
        modal.modal('hide');
    };
    return SemanticUiModal;
}());
exports.SemanticUiModal = SemanticUiModal;
//# sourceMappingURL=semantic-ui-modal.js.map