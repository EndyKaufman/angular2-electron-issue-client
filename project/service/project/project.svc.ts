import { Injectable }    from '@angular/core'
import { Http } from '@angular/http'

import 'rxjs/add/operator/toPromise'

import { ItemsSvc } from '../items.svc'
import { ProjectResourceSvc } from './project-resource.svc'
import { Project } from './project'

@Injectable()
export class ProjectSvc extends ItemsSvc {
    items: Project[] = []
    selectedItem: Project
    resource: ProjectResourceSvc
    checkedProjectsTitle: string
    checkedProjectsStatusIds: number[] = []

    constructor(private http: Http) {
        super(http)
        this.selectedItem = new Project();
        this.resource = new ProjectResourceSvc(http)

        this.itemSelected$.subscribe(item => {
            this.updateCheckedProjectsTitle()
            this.updateCheckedProjectsStatusIds()
        })
        this.itemChecked$.subscribe(items => {
            this.updateCheckedProjectsTitle()
            this.updateCheckedProjectsStatusIds()
        })
    }

    updateCheckedProjectsTitle() {
        this.checkedProjectsTitle = this.selectedItem.title ? this.selectedItem.title : this.checkedItems.map(item => item.title).join(', ')
    }

    updateCheckedProjectsStatusIds() {
        let projectsStatusList = this.selectedItem.id ? this.selectedItem.status : this.checkedItems.map(item => item.status)
        let checkedProjectStatusIds = []
        for (let status of projectsStatusList)
            checkedProjectStatusIds = checkedProjectStatusIds.concat(status)
        this.checkedProjectsStatusIds = checkedProjectStatusIds.filter(function (item, pos, self) {
            return self.indexOf(item) == pos;
        })
    }

    getList(query: any): Promise<Project[]> {
        return super.getList(query)
    }
}