"use strict";
var project_mock_svc_1 = require('./project-mock.svc');
var status_mock_svc_1 = require('./status-mock.svc');
var task_mock_svc_1 = require('./task-mock.svc');
var MockSvc = (function () {
    function MockSvc() {
    }
    MockSvc.prototype.createDb = function () {
        var project = new project_mock_svc_1.ProjectMockSvc().getList();
        var status = new status_mock_svc_1.StatusMockSvc().getList();
        var task = new task_mock_svc_1.TaskMockSvc().getList();
        return { project: project, status: status, task: task };
    };
    return MockSvc;
}());
exports.MockSvc = MockSvc;
//# sourceMappingURL=mock.svc.js.map