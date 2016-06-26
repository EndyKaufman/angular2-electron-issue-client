export class ComponentHelper {

    private static instance: ComponentHelper
    private static isCreating: Boolean = false

    constructor() {
        if (!ComponentHelper.isCreating) {
            throw new Error("You can't call new in Singleton instances! Call ComponentHelper.getInstance() instead.")
        }
    }

    static getInstance() {
        if (ComponentHelper.instance == null) {
            ComponentHelper.isCreating = true
            ComponentHelper.instance = new ComponentHelper()
            ComponentHelper.isCreating = false
        }

        return ComponentHelper.instance
    }

    public updateTemplate(options: any, require_target:any): any {
        if (!options || !options.templateUrl) {
            throw new Error("Error: options.templateUrl not founded.")
        }
        let templateUrl = options['templateUrl']
        let templateOptions = {}
        if (window['webpackJsonp']) {
            templateOptions = { template: require_target(templateUrl) }
            delete options['templateUrl']
        } else {
            templateOptions = { templateUrl: templateUrl }
        }
        return Object.assign(options, templateOptions)
    }

}