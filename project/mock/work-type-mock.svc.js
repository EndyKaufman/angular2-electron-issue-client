"use strict";
var WorkTypeMockSvc = (function () {
    function WorkTypeMockSvc() {
        this.items = [
            { id: 1, title: 'Type 1' },
            { id: 2, title: 'Type 2' }
        ];
    }
    WorkTypeMockSvc.prototype.getList = function () {
        return this.items;
    };
    return WorkTypeMockSvc;
}());
exports.WorkTypeMockSvc = WorkTypeMockSvc;
//# sourceMappingURL=work-type-mock.svc.js.map