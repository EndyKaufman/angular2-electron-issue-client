"use strict";
// Imports for loading & configuring the in-memory web api
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var http_2 = require('@angular/http');
var angular2_in_memory_web_api_1 = require('angular2-in-memory-web-api');
var mock_svc_1 = require('./mock/mock.svc');
var http_3 = require('./resource/http');
var app_cmp_1 = require('./component/app/app.cmp');
platform_browser_dynamic_1.bootstrap(app_cmp_1.AppCmp, [
    http_2.HTTP_PROVIDERS,
    core_1.provide(http_1.XHRBackend, { useClass: angular2_in_memory_web_api_1.InMemoryBackendService }),
    core_1.provide(angular2_in_memory_web_api_1.SEED_DATA, { useClass: mock_svc_1.MockSvc }),
    http_3.RESOURCE_PROVIDERS
]);
//# sourceMappingURL=main.js.map