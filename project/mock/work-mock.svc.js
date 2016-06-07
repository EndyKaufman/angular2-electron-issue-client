"use strict";
var WorkMockSvc = (function () {
    function WorkMockSvc() {
        this.items = [
            { id: 1, comment: 'Comment 1', spent_on: new Date(1985, 4, 11), hours: 1, task_id: 1, type_id: 1 },
            { id: 2, comment: 'Comment 2', spent_on: new Date(1990, 1, 14), hours: 2, task_id: 2, type_id: 2 }
        ];
    }
    WorkMockSvc.prototype.getList = function () {
        return this.items;
    };
    return WorkMockSvc;
}());
exports.WorkMockSvc = WorkMockSvc;
//# sourceMappingURL=work-mock.svc.js.map