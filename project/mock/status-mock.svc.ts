export class StatusMockSvc {
    private items = [
        { id: 1, title: 'Status 1', description: 'Status 1 description'},
        { id: 2, title: 'Status 2', description: 'Status 2 description'},
        { id: 3, title: 'Status 3', description: 'Status 3 description'},
        { id: 4, title: 'Status 4', description: 'Status 4 description'}
    ]
    public getList() {
        return this.items
    }
}