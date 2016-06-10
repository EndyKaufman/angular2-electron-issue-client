export class WorkMockSvc {
    private items = [
        { id: 1, comment: 'Comment 1', spent_on: new Date(1985, 4, 11), hours: 1, task_id: 1, work_type_id: 1 },
        { id: 2, comment: 'Comment 2', spent_on: new Date(1990, 1, 14), hours: 2, task_id: 2, work_type_id: 2 }
    ]
    public getList() {
        return this.items
    }
}