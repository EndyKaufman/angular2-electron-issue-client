// Imports for loading & configuring the in-memory web api
import { provide }    from '@angular/core'
import { XHRBackend } from '@angular/http'

import { bootstrap }    from '@angular/platform-browser-dynamic'
import { HTTP_PROVIDERS } from '@angular/http'

import { InMemoryBackendService, SEED_DATA } from 'angular2-in-memory-web-api'
import { MockSvc }               from './app/mock/mock.svc'

import { RESOURCE_PROVIDERS} from './app/resource/http'

import { AppCmp } from './app/component/app/app.cmp'
bootstrap(AppCmp, [
    HTTP_PROVIDERS,
    provide(XHRBackend, { useClass: InMemoryBackendService }), // in-mem server
    provide(SEED_DATA, { useClass: MockSvc }),     // in-mem server data
    RESOURCE_PROVIDERS
    /*
    provide(ProjectResourceHttpSvc, { useClass: ProjectResourceHttpSvc }),
    provide(TaskResourceHttpSvc, { useClass: TaskResourceHttpSvc }),
    provide(StatusResourceHttpSvc, { useClass: StatusResourceHttpSvc }),
    provide(WorkResourceHttpSvc, { useClass: WorkResourceHttpSvc }),
    provide(WorkTypeResourceHttpSvc, { useClass: WorkTypeResourceHttpSvc })*/
])
