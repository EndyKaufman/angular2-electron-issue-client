"use strict";
var StatusMockSvc = (function () {
    function StatusMockSvc() {
        this.items = [
            { id: 1, title: 'Status 1', description: 'Status 1 description' },
            { id: 2, title: 'Status 2', description: 'Status 2 description' },
            { id: 3, title: 'Status 3', description: 'Status 3 description' },
            { id: 4, title: 'Status 4', description: 'Status 4 description' }
        ];
    }
    StatusMockSvc.prototype.getList = function () {
        return this.items;
    };
    return StatusMockSvc;
}());
exports.StatusMockSvc = StatusMockSvc;
//# sourceMappingURL=status-mock.svc.js.map