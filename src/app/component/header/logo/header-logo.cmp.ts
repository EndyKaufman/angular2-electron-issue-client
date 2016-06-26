import { Component }       from '@angular/core'

import { ComponentHelper }     from '../../../helpers'

@Component(ComponentHelper.getInstance().updateTemplate({
  moduleId: module.id,
  selector: 'header-logo',
  templateUrl: './header-logo.cmp.html'
},require))
export class HeaderLogoCmp {
}