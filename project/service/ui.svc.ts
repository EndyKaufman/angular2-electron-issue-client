import { Injectable }    from '@angular/core'
import 'rxjs/add/operator/toPromise'

@Injectable()
export class UiSvc {
    showModal(componentName:string){
        let modal=$(componentName+'>.ui.modal')         
        return new Promise((resolve, reject) => {
            modal.modal({
                detachable:false,
                onApprove:resolve,
                onDeny:reject
            }).modal('show')
        })
        
    }
}