import { Injectable }    from '@angular/core'
import 'rxjs/add/operator/toPromise'

@Injectable()
export class UiSvc {
    showModal(componentName: string, otherAction?: any) {
        let modal = $(componentName + '>.ui.modal')
        return new Promise((resolve, reject) => {
            window.setTimeout(() => {
                modal.modal({
                    //blurring: true
                    detachable: false,
                    allowMultiple: true,
                    observeChanges: true,
                    onApprove: (el) => {
                        let result = true
                        console.log('ok')
                        let action = $(el).data('action')
                        if (!action)
                            action = 'ok'
                        if (action != 'ok' && otherAction)
                            result = otherAction(action)
                        resolve(action)
                        return result
                    },
                    onDeny: (el) => {
                        let result = true
                        console.log('cancel')
                        let action = $(el).data('action')
                        if (!action)
                            action = 'cancel'
                        if (action != 'cancel' && otherAction)
                            result = otherAction(action)
                        reject(action)
                        return result
                    },
                    onHidden: () => {
                        console.log('cancel')
                        let action = 'cancel'
                        reject(action)
                    }
                }).modal('show')
            }, 100);
        })
    }

    hideModal(componentName: string) {
        let modal = $(componentName + '>.ui.modal')
        modal.modal('hide')
    }
}