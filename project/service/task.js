"use strict";
var task_svc_1 = require('./task/task.svc');
var task_1 = require('./task/task');
exports.Task = task_1.Task;
var task_svc_2 = require('./task/task.svc');
exports.TaskSvc = task_svc_2.TaskSvc;
exports.TASK_PROVIDERS = [task_svc_1.TaskSvc];
//# sourceMappingURL=task.js.map