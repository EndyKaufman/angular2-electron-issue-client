"use strict";
var TaskMockSvc = (function () {
    function TaskMockSvc() {
        this.items = [
            { id: 1, title: 'Task 1', description: 'Task 1 description', status_id: 1, project_id: 1 },
            { id: 2, title: 'Task 2', description: 'Task 2 description', status_id: 2, project_id: 2 },
            { id: 3, title: 'Task 3', description: 'Task 3 description', status_id: 6, project_id: 1 }
        ];
    }
    TaskMockSvc.prototype.getList = function () {
        return this.items;
    };
    return TaskMockSvc;
}());
exports.TaskMockSvc = TaskMockSvc;
//# sourceMappingURL=task-mock.svc.js.map