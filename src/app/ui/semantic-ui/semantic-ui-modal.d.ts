
/// <reference path="../jquery/jquery.d.ts" />
interface InSemanticUiModal {
    blurring?: boolean
    detachable: boolean,
    allowMultiple: boolean,
    observeChanges: boolean,
    onApprove(el:any): void,
    onDeny(el:any): void,
    onHidden(): void
}
interface JQueryStatic {
    modal():JQueryStatic
    modal(options:InSemanticUiModal|string):JQueryStatic
}
interface JQuery {
    modal():JQuery
    modal(options:InSemanticUiModal|string):JQuery
}