export class StatusMockSvc {
    private items = [
        { id: 1, title: 'Status 1', description: 'Status 1 description', color: 'red' },
        { id: 2, title: 'Status 2', description: 'Status 2 description', color: 'pink' },
        { id: 3, title: 'Status 3', description: 'Status 3 description', color: 'green' },
        { id: 4, title: 'Status 4', description: 'Status 4 description', color: 'orange' },
        { id: 5, title: 'Status 5', description: 'Status 5 description', color: 'black' },
        { id: 6, title: 'Status 6', description: 'Status 6 description', color: 'blue' }        
    ]
    public getList() {
        return this.items
    }
}