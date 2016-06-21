export class WorkTypeMockSvc {
    private items = [
        { id: 1, title: 'Type 1' },
        { id: 2, title: 'Type 2' }
    ]
    public getList() {
        return this.items
    }
}