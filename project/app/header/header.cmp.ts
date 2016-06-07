import { Component }       from '@angular/core'

import { HeaderLogoCmp } from './logo/header-logo.cmp'

@Component({
  selector: 'header',
  templateUrl: 'project/app/header/header.cmp.html',
  directives: [HeaderLogoCmp]
})
export class HeaderCmp {
  title = 'Tasks'
}