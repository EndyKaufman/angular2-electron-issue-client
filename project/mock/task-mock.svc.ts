export class TaskMockSvc {
    private items = [
        { id: 1, title: 'Task 1', description: 'Task 1 description', status_id: 1 , project_id: 1},
        { id: 2, title: 'Task 2', description: 'Task 2 description', status_id: 2 , project_id: 2}
    ];
    public getList() {
        return this.items;
    }
}