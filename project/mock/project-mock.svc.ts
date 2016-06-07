export class ProjectMockSvc {
    private items = [
        { id: 1, title: 'Project 1', description: 'Project 1 description', status: [1, 2, 3] },
        { id: 2, title: 'Project 2', description: 'Project 2 description', status: [1, 2] },
        { id: 3, title: 'Project 3', description: 'Project 3 description', status: [2, 4] }
    ];
    public getList() {
        return this.items;
    }
}