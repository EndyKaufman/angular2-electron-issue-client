import { Injectable }    from '@angular/core'

@Injectable()
export class UiSvc {
    showModal(componentName:string){
        $(componentName+'>.ui.modal').modal({detachable:false}).modal('show');
    }
}