import { Injectable }    from '@angular/core'
import { Http } from '@angular/http'

import 'rxjs/add/operator/toPromise'

import { ItemsSvc } from '../items.svc'
import { ProjectResourceSvc } from './project-resource.svc'
import { Project } from './project'

@Injectable()
export class ProjectSvc extends ItemsSvc {
    items: Project[]
    selectedItem: Project
    resource: ProjectResourceSvc

    constructor(private http: Http) {
        super(http)
        this.selectedItem = new Project();
        this.resource = new ProjectResourceSvc(http)
    }

    getList(query: any): Promise<Project[]> {
        return super.getList(query)
    }    
    
    getCheckedItemsTitles() {
        if (this.checkedItems)
            return  this.checkedItems.map(item=>item.title)
        return []
    }
}