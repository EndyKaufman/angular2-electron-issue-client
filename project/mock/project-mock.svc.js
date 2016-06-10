"use strict";
var ProjectMockSvc = (function () {
    function ProjectMockSvc() {
        this.items = [
            { id: 1, title: 'Project 1', description: 'Project 1 description', status: [1, 2, 3] },
            { id: 2, title: 'Project 2', description: 'Project 2 description', status: [1, 2, 6] },
            { id: 3, title: 'Project 3', description: 'Project 3 description', status: [2, 4, 5] }
        ];
    }
    ProjectMockSvc.prototype.getList = function () {
        return this.items;
    };
    return ProjectMockSvc;
}());
exports.ProjectMockSvc = ProjectMockSvc;
//# sourceMappingURL=project-mock.svc.js.map