webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	// Imports for loading & configuring the in-memory web api
	var core_1 = __webpack_require__(1);
	var http_1 = __webpack_require__(97);
	var platform_browser_dynamic_1 = __webpack_require__(118);
	var http_2 = __webpack_require__(97);
	var angular2_in_memory_web_api_1 = __webpack_require__(301);
	var mock_svc_1 = __webpack_require__(313);
	var http_3 = __webpack_require__(319);
	var app_1 = __webpack_require__(327);
	core_1.enableProdMode();
	platform_browser_dynamic_1.bootstrap(app_1.AppCmp, [
	    http_2.HTTP_PROVIDERS,
	    core_1.provide(http_1.XHRBackend, { useClass: angular2_in_memory_web_api_1.InMemoryBackendService }),
	    core_1.provide(angular2_in_memory_web_api_1.SEED_DATA, { useClass: mock_svc_1.MockSvc }),
	    http_3.RESOURCE_PROVIDERS
	]);


/***/ },

/***/ 301:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(302));
	__export(__webpack_require__(312));
	//# sourceMappingURL=index.js.map

/***/ },

/***/ 302:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var __param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};
	var core_1 = __webpack_require__(1);
	var http_1 = __webpack_require__(97);
	var Observable_1 = __webpack_require__(35);
	__webpack_require__(303);
	var http_status_codes_1 = __webpack_require__(312);
	/**
	* Seed data for in-memory database
	* Must implement InMemoryDbService.
	*/
	exports.SEED_DATA = new core_1.OpaqueToken('seedData');
	/**
	*  InMemoryBackendService configuration options
	*  Usage:
	*    provide(InMemoryBackendConfig, {useValue: {delay:600}}),
	*/
	var InMemoryBackendConfig = (function () {
	    function InMemoryBackendConfig(config) {
	        if (config === void 0) { config = {}; }
	        Object.assign(this, {
	            defaultResponseOptions: new http_1.BaseResponseOptions(),
	            delay: 500,
	            delete404: false
	        }, config);
	    }
	    return InMemoryBackendConfig;
	}());
	exports.InMemoryBackendConfig = InMemoryBackendConfig;
	exports.isSuccess = function (status) { return (status >= 200 && status < 300); };
	/**
	 * Simulate the behavior of a RESTy web api
	 * backed by the simple in-memory data store provided by the injected InMemoryDataService service.
	 * Conforms mostly to behavior described here:
	 * http://www.restapitutorial.com/lessons/httpmethods.html
	 *
	 * ### Usage
	 *
	 * Create InMemoryDataService class the implements InMemoryDataService.
	 * Register both this service and the seed data as in:
	 * ```
	 * // other imports
	 * import { HTTPPROVIDERS, XHRBackend } from 'angular2/http';
	 * import { InMemoryBackendConfig, InMemoryBackendService, SEEDDATA } from '../in-memory-backend/in-memory-backend.service';
	 * import { InMemoryStoryService } from '../api/in-memory-story.service';
	 *
	 * @Component({
	 *   selector: ...,
	 *   templateUrl: ...,
	 *   providers: [
	 *     HTTPPROVIDERS,
	 *     provide(XHRBackend, { useClass: InMemoryBackendService }),
	 *     provide(SEEDDATA, { useClass: InMemoryStoryService }),
	 *     provide(InMemoryBackendConfig, { useValue: { delay: 600 } }),
	 *   ]
	 * })
	 * export class AppComponent { ... }
	 * ```
	 */
	var InMemoryBackendService = (function () {
	    function InMemoryBackendService(seedData, config) {
	        this.seedData = seedData;
	        this.config = new InMemoryBackendConfig();
	        this.resetDb();
	        var loc = this.getLocation('./');
	        this.config.host = loc.host;
	        this.config.rootPath = loc.pathname;
	        Object.assign(this.config, config);
	    }
	    InMemoryBackendService.prototype.createConnection = function (req) {
	        var res = this.handleRequest(req);
	        var response = new Observable_1.Observable(function (responseObserver) {
	            if (exports.isSuccess(res.status)) {
	                responseObserver.next(res);
	                responseObserver.complete();
	            }
	            else {
	                responseObserver.error(res);
	            }
	            return function () { }; // unsubscribe function
	        });
	        response = response.delay(this.config.delay || 500);
	        return {
	            readyState: http_1.ReadyState.Done,
	            request: req,
	            response: response
	        };
	    };
	    ////  protected /////
	    /**
	     * Process Request and return an Http Response object
	     * in the manner of a RESTy web api.
	     *
	     * Expect URI pattern in the form :base/:collectionName/:id?
	     * Examples:
	     *   // for store with a 'characters' collection
	     *   GET api/characters          // all characters
	     *   GET api/characters/42       // the character with id=42
	     *   GET api/characters?name=^j  // 'j' is a regex; returns characters whose name contains 'j' or 'J'
	     *   GET api/characters.json/42  // ignores the ".json"
	     *
	     *   POST commands/resetDb  // resets the "database"
	     */
	    InMemoryBackendService.prototype.handleRequest = function (req) {
	        var _a = this.parseUrl(req.url), base = _a.base, collectionName = _a.collectionName, id = _a.id, resourceUrl = _a.resourceUrl, query = _a.query;
	        var collection = this.db[collectionName];
	        var reqInfo = {
	            req: req,
	            base: base,
	            collection: collection,
	            collectionName: collectionName,
	            headers: new http_1.Headers({ 'Content-Type': 'application/json' }),
	            id: this.parseId(collection, id),
	            query: query,
	            resourceUrl: resourceUrl
	        };
	        var options;
	        try {
	            if ('commands' === reqInfo.base.toLowerCase()) {
	                options = this.commands(reqInfo);
	            }
	            else if (reqInfo.collection) {
	                switch (req.method) {
	                    case http_1.RequestMethod.Get:
	                        options = this.get(reqInfo);
	                        break;
	                    case http_1.RequestMethod.Post:
	                        options = this.post(reqInfo);
	                        break;
	                    case http_1.RequestMethod.Put:
	                        options = this.put(reqInfo);
	                        break;
	                    case http_1.RequestMethod.Delete:
	                        options = this.delete(reqInfo);
	                        break;
	                    default:
	                        options = this.createErrorResponse(http_status_codes_1.STATUS.METHOD_NOT_ALLOWED, 'Method not allowed');
	                        break;
	                }
	            }
	            else {
	                options = this.createErrorResponse(http_status_codes_1.STATUS.NOT_FOUND, "Collection '" + collectionName + "' not found");
	            }
	        }
	        catch (error) {
	            var err = error.message || error;
	            options = this.createErrorResponse(http_status_codes_1.STATUS.INTERNAL_SERVER_ERROR, "" + err);
	        }
	        options = this.setStatusText(options);
	        if (this.config.defaultResponseOptions) {
	            options = this.config.defaultResponseOptions.merge(options);
	        }
	        return new http_1.Response(options);
	    };
	    /**
	     * Apply query/search parameters as a filter over the collection
	     * This impl only supports RegExp queries on string properties of the collection
	     * ANDs the conditions together
	     */
	    InMemoryBackendService.prototype.applyQuery = function (collection, query) {
	        // extract filtering conditions - {propertyName, RegExps) - from query/search parameters
	        var conditions = [];
	        query.paramsMap.forEach(function (value, name) {
	            value.forEach(function (v) { return conditions.push({ name: name, rx: new RegExp(decodeURI(v), 'i') }); });
	        });
	        var len = conditions.length;
	        if (!len) {
	            return collection;
	        }
	        // AND the RegExp conditions
	        return collection.filter(function (row) {
	            var ok = true;
	            var i = len;
	            while (ok && i) {
	                i -= 1;
	                var cond = conditions[i];
	                ok = cond.rx.test(row[cond.name]);
	            }
	            return ok;
	        });
	    };
	    InMemoryBackendService.prototype.clone = function (data) {
	        return JSON.parse(JSON.stringify(data));
	    };
	    /**
	     * When the `base`="commands", the `collectionName` is the command
	     * Example URLs:
	     *   commands/resetdb   // Reset the "database" to its original state
	     *   commands/config (GET) // Return this service's config object
	     *   commands/config (!GET) // Update the config (e.g. delay)
	     *
	     * Usage:
	     *   http.post('commands/resetdb', null);
	     *   http.get('commands/config');
	     *   http.post('commands/config', '{"delay":1000}');
	     */
	    InMemoryBackendService.prototype.commands = function (reqInfo) {
	        var command = reqInfo.collectionName.toLowerCase();
	        var method = reqInfo.req.method;
	        var options;
	        switch (command) {
	            case 'resetdb':
	                this.resetDb();
	                options = new http_1.ResponseOptions({ status: http_status_codes_1.STATUS.OK });
	                break;
	            case 'config':
	                if (method === http_1.RequestMethod.Get) {
	                    options = new http_1.ResponseOptions({
	                        body: this.clone(this.config),
	                        status: http_status_codes_1.STATUS.OK
	                    });
	                }
	                else {
	                    // Be nice ... any other method is a config update
	                    var body = JSON.parse(reqInfo.req.text() || '{}');
	                    Object.assign(this.config, body);
	                    options = new http_1.ResponseOptions({ status: http_status_codes_1.STATUS.NO_CONTENT });
	                }
	                break;
	            default:
	                options = this.createErrorResponse(http_status_codes_1.STATUS.INTERNAL_SERVER_ERROR, "Unknown command \"" + command + "\"");
	        }
	        return options;
	    };
	    InMemoryBackendService.prototype.createErrorResponse = function (status, message) {
	        return new http_1.ResponseOptions({
	            body: { 'error': "" + message },
	            headers: new http_1.Headers({ 'Content-Type': 'application/json' }),
	            status: status
	        });
	    };
	    InMemoryBackendService.prototype.delete = function (_a) {
	        var id = _a.id, collection = _a.collection, collectionName = _a.collectionName, headers = _a.headers;
	        if (!id) {
	            return this.createErrorResponse(http_status_codes_1.STATUS.NOT_FOUND, "Missing \"" + collectionName + "\" id");
	        }
	        var exists = this.removeById(collection, id);
	        return new http_1.ResponseOptions({
	            headers: headers,
	            status: (exists || !this.config.delete404) ? http_status_codes_1.STATUS.NO_CONTENT : http_status_codes_1.STATUS.NOT_FOUND
	        });
	    };
	    InMemoryBackendService.prototype.findById = function (collection, id) {
	        return collection.find(function (item) { return item.id === id; });
	    };
	    InMemoryBackendService.prototype.genId = function (collection) {
	        // assumes numeric ids
	        var maxId = 0;
	        collection.reduce(function (prev, item) {
	            maxId = Math.max(maxId, typeof item.id === 'number' ? item.id : maxId);
	        }, null);
	        return maxId + 1;
	    };
	    InMemoryBackendService.prototype.get = function (_a) {
	        var id = _a.id, query = _a.query, collection = _a.collection, collectionName = _a.collectionName, headers = _a.headers;
	        var data = collection;
	        if (id) {
	            data = this.findById(collection, id);
	        }
	        else if (query) {
	            data = this.applyQuery(collection, query);
	        }
	        if (!data) {
	            return this.createErrorResponse(http_status_codes_1.STATUS.NOT_FOUND, "'" + collectionName + "' with id='" + id + "' not found");
	        }
	        return new http_1.ResponseOptions({
	            body: { data: this.clone(data) },
	            headers: headers,
	            status: http_status_codes_1.STATUS.OK
	        });
	    };
	    InMemoryBackendService.prototype.getLocation = function (href) {
	        var l = document.createElement('a');
	        l.href = href;
	        return l;
	    };
	    ;
	    InMemoryBackendService.prototype.indexOf = function (collection, id) {
	        return collection.findIndex(function (item) { return item.id === id; });
	    };
	    // tries to parse id as number if collection item.id is a number.
	    // returns the original param id otherwise.
	    InMemoryBackendService.prototype.parseId = function (collection, id) {
	        if (!id) {
	            return null;
	        }
	        var isNumberId = collection[0] && typeof collection[0].id === 'number';
	        if (isNumberId) {
	            var idNum = parseFloat(id);
	            return isNaN(idNum) ? id : idNum;
	        }
	        return id;
	    };
	    InMemoryBackendService.prototype.parseUrl = function (url) {
	        try {
	            var loc = this.getLocation(url);
	            var drop = this.config.rootPath.length;
	            var urlRoot = '';
	            if (loc.host !== this.config.host) {
	                // url for a server on a different host!
	                // assume it's collection is actually here too.
	                drop = 1; // the leading slash
	                urlRoot = loc.protocol + '//' + loc.host + '/';
	            }
	            var path = loc.pathname.substring(drop);
	            var _a = path.split('/'), base = _a[0], collectionName = _a[1], id = _a[2];
	            var resourceUrl = urlRoot + base + '/' + collectionName + '/';
	            collectionName = collectionName.split('.')[0]; // ignore anything after the '.', e.g., '.json'
	            var query = loc.search && new http_1.URLSearchParams(loc.search.substr(1));
	            return { base: base, id: id, collectionName: collectionName, resourceUrl: resourceUrl, query: query };
	        }
	        catch (err) {
	            var msg = "unable to parse url '" + url + "'; original error: " + err.message;
	            throw new Error(msg);
	        }
	    };
	    InMemoryBackendService.prototype.post = function (_a) {
	        var collection = _a.collection, headers = _a.headers, id = _a.id, req = _a.req, resourceUrl = _a.resourceUrl;
	        var item = JSON.parse(req.text());
	        if (!item.id) {
	            item.id = id || this.genId(collection);
	        }
	        // ignore the request id, if any. Alternatively,
	        // could reject request if id differs from item.id
	        id = item.id;
	        var existingIx = this.indexOf(collection, id);
	        if (existingIx > -1) {
	            collection[existingIx] = item;
	            return new http_1.ResponseOptions({
	                headers: headers,
	                status: http_status_codes_1.STATUS.NO_CONTENT
	            });
	        }
	        else {
	            collection.push(item);
	            headers.set('Location', resourceUrl + '/' + id);
	            return new http_1.ResponseOptions({
	                headers: headers,
	                body: { data: this.clone(item) },
	                status: http_status_codes_1.STATUS.CREATED
	            });
	        }
	    };
	    InMemoryBackendService.prototype.put = function (_a) {
	        var id = _a.id, collection = _a.collection, collectionName = _a.collectionName, headers = _a.headers, req = _a.req;
	        var item = JSON.parse(req.text());
	        if (!id) {
	            return this.createErrorResponse(http_status_codes_1.STATUS.NOT_FOUND, "Missing '" + collectionName + "' id");
	        }
	        if (id !== item.id) {
	            return this.createErrorResponse(http_status_codes_1.STATUS.BAD_REQUEST, "\"" + collectionName + "\" id does not match item.id");
	        }
	        var existingIx = this.indexOf(collection, id);
	        if (existingIx > -1) {
	            collection[existingIx] = item;
	            return new http_1.ResponseOptions({
	                headers: headers,
	                status: http_status_codes_1.STATUS.NO_CONTENT // successful; no content
	            });
	        }
	        else {
	            collection.push(item);
	            return new http_1.ResponseOptions({
	                body: { data: this.clone(item) },
	                headers: headers,
	                status: http_status_codes_1.STATUS.CREATED
	            });
	        }
	    };
	    InMemoryBackendService.prototype.removeById = function (collection, id) {
	        var ix = this.indexOf(collection, id);
	        if (ix > -1) {
	            collection.splice(ix, 1);
	            return true;
	        }
	        return false;
	    };
	    /**
	     * Reset the "database" to its original state
	     */
	    InMemoryBackendService.prototype.resetDb = function () {
	        this.db = this.seedData.createDb();
	    };
	    InMemoryBackendService.prototype.setStatusText = function (options) {
	        try {
	            var statusCode = http_status_codes_1.STATUS_CODE_INFO[options.status];
	            options['statusText'] = statusCode ? statusCode.text : 'Unknown Status';
	            return options;
	        }
	        catch (err) {
	            return new http_1.ResponseOptions({
	                status: http_status_codes_1.STATUS.INTERNAL_SERVER_ERROR,
	                statusText: 'Invalid Server Operation'
	            });
	        }
	    };
	    InMemoryBackendService = __decorate([
	        __param(0, core_1.Inject(exports.SEED_DATA)),
	        __param(1, core_1.Inject(InMemoryBackendConfig)),
	        __param(1, core_1.Optional()), 
	        __metadata('design:paramtypes', [Object, Object])
	    ], InMemoryBackendService);
	    return InMemoryBackendService;
	}());
	exports.InMemoryBackendService = InMemoryBackendService;
	//# sourceMappingURL=in-memory-backend.service.js.map

/***/ },

/***/ 312:
/***/ function(module, exports) {

	"use strict";
	exports.STATUS = {
	    CONTINUE: 100,
	    SWITCHING_PROTOCOLS: 101,
	    OK: 200,
	    CREATED: 201,
	    ACCEPTED: 202,
	    NON_AUTHORITATIVE_INFORMATION: 203,
	    NO_CONTENT: 204,
	    RESET_CONTENT: 205,
	    PARTIAL_CONTENT: 206,
	    MULTIPLE_CHOICES: 300,
	    MOVED_PERMANTENTLY: 301,
	    FOUND: 302,
	    SEE_OTHER: 303,
	    NOT_MODIFIED: 304,
	    USE_PROXY: 305,
	    TEMPORARY_REDIRECT: 307,
	    BAD_REQUEST: 400,
	    UNAUTHORIZED: 401,
	    PAYMENT_REQUIRED: 402,
	    FORBIDDEN: 403,
	    NOT_FOUND: 404,
	    METHOD_NOT_ALLOWED: 405,
	    NOT_ACCEPTABLE: 406,
	    PROXY_AUTHENTICATION_REQUIRED: 407,
	    REQUEST_TIMEOUT: 408,
	    CONFLICT: 409,
	    GONE: 410,
	    LENGTH_REQUIRED: 411,
	    PRECONDITION_FAILED: 412,
	    PAYLOAD_TO_LARGE: 413,
	    URI_TOO_LONG: 414,
	    UNSUPPORTED_MEDIA_TYPE: 415,
	    RANGE_NOT_SATISFIABLE: 416,
	    EXPECTATION_FAILED: 417,
	    IM_A_TEAPOT: 418,
	    UPGRADE_REQUIRED: 426,
	    INTERNAL_SERVER_ERROR: 500,
	    NOT_IMPLEMENTED: 501,
	    BAD_GATEWAY: 502,
	    SERVICE_UNAVAILABLE: 503,
	    GATEWAY_TIMEOUT: 504,
	    HTTP_VERSION_NOT_SUPPORTED: 505,
	    PROCESSING: 102,
	    MULTI_STATUS: 207,
	    IM_USED: 226,
	    PERMANENT_REDIRECT: 308,
	    UNPROCESSABLE_ENTRY: 422,
	    LOCKED: 423,
	    FAILED_DEPENDENCY: 424,
	    PRECONDITION_REQUIRED: 428,
	    TOO_MANY_REQUESTS: 429,
	    REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
	    UNAVAILABLE_FOR_LEGAL_REASONS: 451,
	    VARIANT_ALSO_NEGOTIATES: 506,
	    INSUFFICIENT_STORAGE: 507,
	    NETWORK_AUTHENTICATION_REQUIRED: 511
	};
	/*tslint:disable:quotemark max-line-length one-line */
	exports.STATUS_CODE_INFO = {
	    "100": {
	        "code": 100,
	        "text": "Continue",
	        "description": "\"The initial part of a request has been received and has not yet been rejected by the server.\"",
	        "spec_title": "RFC7231#6.2.1",
	        "spec_href": "http://tools.ietf.org/html/rfc7231#section-6.2.1"
	    },
	    "101": {
	        "code": 101,
	        "text": "Switching Protocols",
	        "description": "\"The server understands and is willing to comply with the client's request, via the Upgrade header field, for a change in the application protocol being used on this connection.\"",
	        "spec_title": "RFC7231#6.2.2",
	        "spec_href": "http://tools.ietf.org/html/rfc7231#section-6.2.2"
	    },
	    "200": {
	        "code": 200,
	        "text": "OK",
	        "description": "\"The request has succeeded.\"",
	        "spec_title": "RFC7231#6.3.1",
	        "spec_href": "http://tools.ietf.org/html/rfc7231#section-6.3.1"
	    },
	    "201": {
	        "code": 201,
	        "text": "Created",
	        "description": "\"The request has been fulfilled and has resulted in one or more new resources being created.\"",
	        "spec_title": "RFC7231#6.3.2",
	        "spec_href": "http://tools.ietf.org/html/rfc7231#section-6.3.2"
	    },
	    "202": {
	        "code": 202,
	        "text": "Accepted",
	        "description": "\"The request has been accepted for processing, but the processing has not been completed.\"",
	        "spec_title": "RFC7231#6.3.3",
	        "spec_href": "http://tools.ietf.org/html/rfc7231#section-6.3.3"
	    },
	    "203": {
	        "code": 203,
	        "text": "Non-Authoritative Information",
	        "description": "\"The request was successful but the enclosed payload has been modified from that of the origin server's 200 (OK) response by a transforming proxy.\"",
	        "spec_title": "RFC7231#6.3.4",
	        "spec_href": "http://tools.ietf.org/html/rfc7231#section-6.3.4"
	    },
	    "204": {
	        "code": 204,
	        "text": "No Content",
	        "description": "\"The server has successfully fulfilled the request and that there is no additional content to send in the response payload body.\"",
	        "spec_title": "RFC7231#6.3.5",
	        "spec_href": "http://tools.ietf.org/html/rfc7231#section-6.3.5"
	    },
	    "205": {
	        "code": 205,
	        "text": "Reset Content",
	        "description": "\"The server has fulfilled the request and desires that the user agent reset the \"document view\", which caused the request to be sent, to its original state as received from the origin server.\"",
	        "spec_title": "RFC7231#6.3.6",
	        "spec_href": "http://tools.ietf.org/html/rfc7231#section-6.3.6"
	    },
	    "206": {
	        "code": 206,
	        "text": "Partial Content",
	        "description": "\"The server is successfully fulfilling a range request for the target resource by transferring one or more parts of the selected representation that correspond to the satisfiable ranges found in the requests's Range header field.\"",
	        "spec_title": "RFC7233#4.1",
	        "spec_href": "http://tools.ietf.org/html/rfc7233#section-4.1"
	    },
	    "300": {
	        "code": 300,
	        "text": "Multiple Choices",
	        "description": "\"The target resource has more than one representation, each with its own more specific identifier, and information about the alternatives is being provided so that the user (or user agent) can select a preferred representation by redirecting its request to one or more of those identifiers.\"",
	        "spec_title": "RFC7231#6.4.1",
	        "spec_href": "http://tools.ietf.org/html/rfc7231#section-6.4.1"
	    },
	    "301": {
	        "code": 301,
	        "text": "Moved Permanently",
	        "description": "\"The target resource has been assigned a new permanent URI and any future references to this resource ought to use one of the enclosed URIs.\"",
	        "spec_title": "RFC7231#6.4.2",
	        "spec_href": "http://tools.ietf.org/html/rfc7231#section-6.4.2"
	    },
	    "302": {
	        "code": 302,
	        "text": "Found",
	        "description": "\"The target resource resides temporarily under a different URI.\"",
	        "spec_title": "RFC7231#6.4.3",
	        "spec_href": "http://tools.ietf.org/html/rfc7231#section-6.4.3"
	    },
	    "303": {
	        "code": 303,
	        "text": "See Other",
	        "description": "\"The server is redirecting the user agent to a different resource, as indicated by a URI in the Location header field, that is intended to provide an indirect response to the original request.\"",
	        "spec_title": "RFC7231#6.4.4",
	        "spec_href": "http://tools.ietf.org/html/rfc7231#section-6.4.4"
	    },
	    "304": {
	        "code": 304,
	        "text": "Not Modified",
	        "description": "\"A conditional GET request has been received and would have resulted in a 200 (OK) response if it were not for the fact that the condition has evaluated to false.\"",
	        "spec_title": "RFC7232#4.1",
	        "spec_href": "http://tools.ietf.org/html/rfc7232#section-4.1"
	    },
	    "305": {
	        "code": 305,
	        "text": "Use Proxy",
	        "description": "*deprecated*",
	        "spec_title": "RFC7231#6.4.5",
	        "spec_href": "http://tools.ietf.org/html/rfc7231#section-6.4.5"
	    },
	    "307": {
	        "code": 307,
	        "text": "Temporary Redirect",
	        "description": "\"The target resource resides temporarily under a different URI and the user agent MUST NOT change the request method if it performs an automatic redirection to that URI.\"",
	        "spec_title": "RFC7231#6.4.7",
	        "spec_href": "http://tools.ietf.org/html/rfc7231#section-6.4.7"
	    },
	    "400": {
	        "code": 400,
	        "text": "Bad Request",
	        "description": "\"The server cannot or will not process the request because the received syntax is invalid, nonsensical, or exceeds some limitation on what the server is willing to process.\"",
	        "spec_title": "RFC7231#6.5.1",
	        "spec_href": "http://tools.ietf.org/html/rfc7231#section-6.5.1"
	    },
	    "401": {
	        "code": 401,
	        "text": "Unauthorized",
	        "description": "\"The request has not been applied because it lacks valid authentication credentials for the target resource.\"",
	        "spec_title": "RFC7235#6.3.1",
	        "spec_href": "http://tools.ietf.org/html/rfc7235#section-3.1"
	    },
	    "402": {
	        "code": 402,
	        "text": "Payment Required",
	        "description": "*reserved*",
	        "spec_title": "RFC7231#6.5.2",
	        "spec_href": "http://tools.ietf.org/html/rfc7231#section-6.5.2"
	    },
	    "403": {
	        "code": 403,
	        "text": "Forbidden",
	        "description": "\"The server understood the request but refuses to authorize it.\"",
	        "spec_title": "RFC7231#6.5.3",
	        "spec_href": "http://tools.ietf.org/html/rfc7231#section-6.5.3"
	    },
	    "404": {
	        "code": 404,
	        "text": "Not Found",
	        "description": "\"The origin server did not find a current representation for the target resource or is not willing to disclose that one exists.\"",
	        "spec_title": "RFC7231#6.5.4",
	        "spec_href": "http://tools.ietf.org/html/rfc7231#section-6.5.4"
	    },
	    "405": {
	        "code": 405,
	        "text": "Method Not Allowed",
	        "description": "\"The method specified in the request-line is known by the origin server but not supported by the target resource.\"",
	        "spec_title": "RFC7231#6.5.5",
	        "spec_href": "http://tools.ietf.org/html/rfc7231#section-6.5.5"
	    },
	    "406": {
	        "code": 406,
	        "text": "Not Acceptable",
	        "description": "\"The target resource does not have a current representation that would be acceptable to the user agent, according to the proactive negotiation header fields received in the request, and the server is unwilling to supply a default representation.\"",
	        "spec_title": "RFC7231#6.5.6",
	        "spec_href": "http://tools.ietf.org/html/rfc7231#section-6.5.6"
	    },
	    "407": {
	        "code": 407,
	        "text": "Proxy Authentication Required",
	        "description": "\"The client needs to authenticate itself in order to use a proxy.\"",
	        "spec_title": "RFC7231#6.3.2",
	        "spec_href": "http://tools.ietf.org/html/rfc7231#section-6.3.2"
	    },
	    "408": {
	        "code": 408,
	        "text": "Request Timeout",
	        "description": "\"The server did not receive a complete request message within the time that it was prepared to wait.\"",
	        "spec_title": "RFC7231#6.5.7",
	        "spec_href": "http://tools.ietf.org/html/rfc7231#section-6.5.7"
	    },
	    "409": {
	        "code": 409,
	        "text": "Conflict",
	        "description": "\"The request could not be completed due to a conflict with the current state of the resource.\"",
	        "spec_title": "RFC7231#6.5.8",
	        "spec_href": "http://tools.ietf.org/html/rfc7231#section-6.5.8"
	    },
	    "410": {
	        "code": 410,
	        "text": "Gone",
	        "description": "\"Access to the target resource is no longer available at the origin server and that this condition is likely to be permanent.\"",
	        "spec_title": "RFC7231#6.5.9",
	        "spec_href": "http://tools.ietf.org/html/rfc7231#section-6.5.9"
	    },
	    "411": {
	        "code": 411,
	        "text": "Length Required",
	        "description": "\"The server refuses to accept the request without a defined Content-Length.\"",
	        "spec_title": "RFC7231#6.5.10",
	        "spec_href": "http://tools.ietf.org/html/rfc7231#section-6.5.10"
	    },
	    "412": {
	        "code": 412,
	        "text": "Precondition Failed",
	        "description": "\"One or more preconditions given in the request header fields evaluated to false when tested on the server.\"",
	        "spec_title": "RFC7232#4.2",
	        "spec_href": "http://tools.ietf.org/html/rfc7232#section-4.2"
	    },
	    "413": {
	        "code": 413,
	        "text": "Payload Too Large",
	        "description": "\"The server is refusing to process a request because the request payload is larger than the server is willing or able to process.\"",
	        "spec_title": "RFC7231#6.5.11",
	        "spec_href": "http://tools.ietf.org/html/rfc7231#section-6.5.11"
	    },
	    "414": {
	        "code": 414,
	        "text": "URI Too Long",
	        "description": "\"The server is refusing to service the request because the request-target is longer than the server is willing to interpret.\"",
	        "spec_title": "RFC7231#6.5.12",
	        "spec_href": "http://tools.ietf.org/html/rfc7231#section-6.5.12"
	    },
	    "415": {
	        "code": 415,
	        "text": "Unsupported Media Type",
	        "description": "\"The origin server is refusing to service the request because the payload is in a format not supported by the target resource for this method.\"",
	        "spec_title": "RFC7231#6.5.13",
	        "spec_href": "http://tools.ietf.org/html/rfc7231#section-6.5.13"
	    },
	    "416": {
	        "code": 416,
	        "text": "Range Not Satisfiable",
	        "description": "\"None of the ranges in the request's Range header field overlap the current extent of the selected resource or that the set of ranges requested has been rejected due to invalid ranges or an excessive request of small or overlapping ranges.\"",
	        "spec_title": "RFC7233#4.4",
	        "spec_href": "http://tools.ietf.org/html/rfc7233#section-4.4"
	    },
	    "417": {
	        "code": 417,
	        "text": "Expectation Failed",
	        "description": "\"The expectation given in the request's Expect header field could not be met by at least one of the inbound servers.\"",
	        "spec_title": "RFC7231#6.5.14",
	        "spec_href": "http://tools.ietf.org/html/rfc7231#section-6.5.14"
	    },
	    "418": {
	        "code": 418,
	        "text": "I'm a teapot",
	        "description": "\"1988 April Fools Joke. Returned by tea pots requested to brew coffee.\"",
	        "spec_title": "RFC 2324",
	        "spec_href": "https://tools.ietf.org/html/rfc2324"
	    },
	    "426": {
	        "code": 426,
	        "text": "Upgrade Required",
	        "description": "\"The server refuses to perform the request using the current protocol but might be willing to do so after the client upgrades to a different protocol.\"",
	        "spec_title": "RFC7231#6.5.15",
	        "spec_href": "http://tools.ietf.org/html/rfc7231#section-6.5.15"
	    },
	    "500": {
	        "code": 500,
	        "text": "Internal Server Error",
	        "description": "\"The server encountered an unexpected condition that prevented it from fulfilling the request.\"",
	        "spec_title": "RFC7231#6.6.1",
	        "spec_href": "http://tools.ietf.org/html/rfc7231#section-6.6.1"
	    },
	    "501": {
	        "code": 501,
	        "text": "Not Implemented",
	        "description": "\"The server does not support the functionality required to fulfill the request.\"",
	        "spec_title": "RFC7231#6.6.2",
	        "spec_href": "http://tools.ietf.org/html/rfc7231#section-6.6.2"
	    },
	    "502": {
	        "code": 502,
	        "text": "Bad Gateway",
	        "description": "\"The server, while acting as a gateway or proxy, received an invalid response from an inbound server it accessed while attempting to fulfill the request.\"",
	        "spec_title": "RFC7231#6.6.3",
	        "spec_href": "http://tools.ietf.org/html/rfc7231#section-6.6.3"
	    },
	    "503": {
	        "code": 503,
	        "text": "Service Unavailable",
	        "description": "\"The server is currently unable to handle the request due to a temporary overload or scheduled maintenance, which will likely be alleviated after some delay.\"",
	        "spec_title": "RFC7231#6.6.4",
	        "spec_href": "http://tools.ietf.org/html/rfc7231#section-6.6.4"
	    },
	    "504": {
	        "code": 504,
	        "text": "Gateway Time-out",
	        "description": "\"The server, while acting as a gateway or proxy, did not receive a timely response from an upstream server it needed to access in order to complete the request.\"",
	        "spec_title": "RFC7231#6.6.5",
	        "spec_href": "http://tools.ietf.org/html/rfc7231#section-6.6.5"
	    },
	    "505": {
	        "code": 505,
	        "text": "HTTP Version Not Supported",
	        "description": "\"The server does not support, or refuses to support, the protocol version that was used in the request message.\"",
	        "spec_title": "RFC7231#6.6.6",
	        "spec_href": "http://tools.ietf.org/html/rfc7231#section-6.6.6"
	    },
	    "102": {
	        "code": 102,
	        "text": "Processing",
	        "description": "\"An interim response to inform the client that the server has accepted the complete request, but has not yet completed it.\"",
	        "spec_title": "RFC5218#10.1",
	        "spec_href": "http://tools.ietf.org/html/rfc2518#section-10.1"
	    },
	    "207": {
	        "code": 207,
	        "text": "Multi-Status",
	        "description": "\"Status for multiple independent operations.\"",
	        "spec_title": "RFC5218#10.2",
	        "spec_href": "http://tools.ietf.org/html/rfc2518#section-10.2"
	    },
	    "226": {
	        "code": 226,
	        "text": "IM Used",
	        "description": "\"The server has fulfilled a GET request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance.\"",
	        "spec_title": "RFC3229#10.4.1",
	        "spec_href": "http://tools.ietf.org/html/rfc3229#section-10.4.1"
	    },
	    "308": {
	        "code": 308,
	        "text": "Permanent Redirect",
	        "description": "\"The target resource has been assigned a new permanent URI and any future references to this resource SHOULD use one of the returned URIs. [...] This status code is similar to 301 Moved Permanently (Section 7.3.2 of rfc7231), except that it does not allow rewriting the request method from POST to GET.\"",
	        "spec_title": "RFC7238",
	        "spec_href": "http://tools.ietf.org/html/rfc7238"
	    },
	    "422": {
	        "code": 422,
	        "text": "Unprocessable Entity",
	        "description": "\"The server understands the content type of the request entity (hence a 415(Unsupported Media Type) status code is inappropriate), and the syntax of the request entity is correct (thus a 400 (Bad Request) status code is inappropriate) but was unable to process the contained instructions.\"",
	        "spec_title": "RFC5218#10.3",
	        "spec_href": "http://tools.ietf.org/html/rfc2518#section-10.3"
	    },
	    "423": {
	        "code": 423,
	        "text": "Locked",
	        "description": "\"The source or destination resource of a method is locked.\"",
	        "spec_title": "RFC5218#10.4",
	        "spec_href": "http://tools.ietf.org/html/rfc2518#section-10.4"
	    },
	    "424": {
	        "code": 424,
	        "text": "Failed Dependency",
	        "description": "\"The method could not be performed on the resource because the requested action depended on another action and that action failed.\"",
	        "spec_title": "RFC5218#10.5",
	        "spec_href": "http://tools.ietf.org/html/rfc2518#section-10.5"
	    },
	    "428": {
	        "code": 428,
	        "text": "Precondition Required",
	        "description": "\"The origin server requires the request to be conditional.\"",
	        "spec_title": "RFC6585#3",
	        "spec_href": "http://tools.ietf.org/html/rfc6585#section-3"
	    },
	    "429": {
	        "code": 429,
	        "text": "Too Many Requests",
	        "description": "\"The user has sent too many requests in a given amount of time (\"rate limiting\").\"",
	        "spec_title": "RFC6585#4",
	        "spec_href": "http://tools.ietf.org/html/rfc6585#section-4"
	    },
	    "431": {
	        "code": 431,
	        "text": "Request Header Fields Too Large",
	        "description": "\"The server is unwilling to process the request because its header fields are too large.\"",
	        "spec_title": "RFC6585#5",
	        "spec_href": "http://tools.ietf.org/html/rfc6585#section-5"
	    },
	    "451": {
	        "code": 451,
	        "text": "Unavailable For Legal Reasons",
	        "description": "\"The server is denying access to the resource in response to a legal demand.\"",
	        "spec_title": "draft-ietf-httpbis-legally-restricted-status",
	        "spec_href": "http://tools.ietf.org/html/draft-ietf-httpbis-legally-restricted-status"
	    },
	    "506": {
	        "code": 506,
	        "text": "Variant Also Negotiates",
	        "description": "\"The server has an internal configuration error: the chosen variant resource is configured to engage in transparent content negotiation itself, and is therefore not a proper end point in the negotiation process.\"",
	        "spec_title": "RFC2295#8.1",
	        "spec_href": "http://tools.ietf.org/html/rfc2295#section-8.1"
	    },
	    "507": {
	        "code": 507,
	        "text": "Insufficient Storage",
	        "description": "\The method could not be performed on the resource because the server is unable to store the representation needed to successfully complete the request.\"",
	        "spec_title": "RFC5218#10.6",
	        "spec_href": "http://tools.ietf.org/html/rfc2518#section-10.6"
	    },
	    "511": {
	        "code": 511,
	        "text": "Network Authentication Required",
	        "description": "\"The client needs to authenticate to gain network access.\"",
	        "spec_title": "RFC6585#6",
	        "spec_href": "http://tools.ietf.org/html/rfc6585#section-6"
	    }
	};
	//# sourceMappingURL=http-status-codes.js.map

/***/ },

/***/ 313:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var project_mock_svc_1 = __webpack_require__(314);
	var status_mock_svc_1 = __webpack_require__(315);
	var task_mock_svc_1 = __webpack_require__(316);
	var work_mock_svc_1 = __webpack_require__(317);
	var work_type_mock_svc_1 = __webpack_require__(318);
	var MockSvc = (function () {
	    function MockSvc() {
	    }
	    MockSvc.prototype.createDb = function () {
	        var project = new project_mock_svc_1.ProjectMockSvc().getList();
	        var status = new status_mock_svc_1.StatusMockSvc().getList();
	        var task = new task_mock_svc_1.TaskMockSvc().getList();
	        var work = new work_mock_svc_1.WorkMockSvc().getList();
	        var work_type = new work_type_mock_svc_1.WorkTypeMockSvc().getList();
	        return { project: project, status: status, task: task, work: work, work_type: work_type };
	    };
	    return MockSvc;
	}());
	exports.MockSvc = MockSvc;


/***/ },

/***/ 314:
/***/ function(module, exports) {

	"use strict";
	var ProjectMockSvc = (function () {
	    function ProjectMockSvc() {
	        this.items = [
	            { id: 1, title: 'Project 1', description: 'Project 1 description', status: [1, 2, 3], work_type: [1, 2] },
	            { id: 2, title: 'Project 2', description: 'Project 2 description', status: [1, 2, 6], work_type: [2] },
	            { id: 3, title: 'Project 3', description: 'Project 3 description', status: [2, 4, 5], work_type: [1, 2] }
	        ];
	    }
	    ProjectMockSvc.prototype.getList = function () {
	        return this.items;
	    };
	    return ProjectMockSvc;
	}());
	exports.ProjectMockSvc = ProjectMockSvc;


/***/ },

/***/ 315:
/***/ function(module, exports) {

	"use strict";
	var StatusMockSvc = (function () {
	    function StatusMockSvc() {
	        this.items = [
	            { id: 1, title: 'Status 1', description: 'Status 1 description', color: 'red' },
	            { id: 2, title: 'Status 2', description: 'Status 2 description', color: 'pink' },
	            { id: 3, title: 'Status 3', description: 'Status 3 description', color: 'green' },
	            { id: 4, title: 'Status 4', description: 'Status 4 description', color: 'orange' },
	            { id: 5, title: 'Status 5', description: 'Status 5 description', color: 'black' },
	            { id: 6, title: 'Status 6', description: 'Status 6 description', color: 'blue' }
	        ];
	    }
	    StatusMockSvc.prototype.getList = function () {
	        return this.items;
	    };
	    return StatusMockSvc;
	}());
	exports.StatusMockSvc = StatusMockSvc;


/***/ },

/***/ 316:
/***/ function(module, exports) {

	"use strict";
	var TaskMockSvc = (function () {
	    function TaskMockSvc() {
	        this.items = [
	            { id: 1, title: 'Task 1', description: 'Task 1 description', status_id: 1, project_id: 1 },
	            { id: 2, title: 'Task 2', description: 'Task 2 description', status_id: 2, project_id: 2 },
	            { id: 3, title: 'Task 3', description: 'Task 3 description', status_id: 2, project_id: 1 }
	        ];
	    }
	    TaskMockSvc.prototype.getList = function () {
	        return this.items;
	    };
	    return TaskMockSvc;
	}());
	exports.TaskMockSvc = TaskMockSvc;


/***/ },

/***/ 317:
/***/ function(module, exports) {

	"use strict";
	var WorkMockSvc = (function () {
	    function WorkMockSvc() {
	        this.items = [
	            { id: 1, comment: 'Comment 1', spent_on: new Date(1985, 4, 11), hours: 1, task_id: 1, work_type_id: 1, project_id: 1 },
	            { id: 2, comment: 'Comment 2', spent_on: new Date(1990, 1, 14), hours: 2, task_id: 2, work_type_id: 2, project_id: 2 }
	        ];
	    }
	    WorkMockSvc.prototype.getList = function () {
	        return this.items;
	    };
	    return WorkMockSvc;
	}());
	exports.WorkMockSvc = WorkMockSvc;


/***/ },

/***/ 318:
/***/ function(module, exports) {

	"use strict";
	var WorkTypeMockSvc = (function () {
	    function WorkTypeMockSvc() {
	        this.items = [
	            { id: 1, title: 'Type 1' },
	            { id: 2, title: 'Type 2' }
	        ];
	    }
	    WorkTypeMockSvc.prototype.getList = function () {
	        return this.items;
	    };
	    return WorkTypeMockSvc;
	}());
	exports.WorkTypeMockSvc = WorkTypeMockSvc;


/***/ },

/***/ 319:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var project_resource_http_svc_1 = __webpack_require__(320);
	var status_resource_http_svc_1 = __webpack_require__(323);
	var task_resource_http_svc_1 = __webpack_require__(324);
	var work_resource_http_svc_1 = __webpack_require__(325);
	var work_type_resource_http_svc_1 = __webpack_require__(326);
	var project_resource_http_svc_2 = __webpack_require__(320);
	exports.ProjectResourceHttpSvc = project_resource_http_svc_2.ProjectResourceHttpSvc;
	var status_resource_http_svc_2 = __webpack_require__(323);
	exports.StatusResourceHttpSvc = status_resource_http_svc_2.StatusResourceHttpSvc;
	var task_resource_http_svc_2 = __webpack_require__(324);
	exports.TaskResourceHttpSvc = task_resource_http_svc_2.TaskResourceHttpSvc;
	var work_resource_http_svc_2 = __webpack_require__(325);
	exports.WorkResourceHttpSvc = work_resource_http_svc_2.WorkResourceHttpSvc;
	var work_type_resource_http_svc_2 = __webpack_require__(326);
	exports.WorkTypeResourceHttpSvc = work_type_resource_http_svc_2.WorkTypeResourceHttpSvc;
	exports.RESOURCE_PROVIDERS = [project_resource_http_svc_1.ProjectResourceHttpSvc, status_resource_http_svc_1.StatusResourceHttpSvc, task_resource_http_svc_1.TaskResourceHttpSvc, work_resource_http_svc_1.WorkResourceHttpSvc, work_type_resource_http_svc_1.WorkTypeResourceHttpSvc];


/***/ },

/***/ 320:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var http_1 = __webpack_require__(97);
	var core_1 = __webpack_require__(1);
	var resource_http_svc_1 = __webpack_require__(321);
	var ProjectResourceHttpSvc = (function (_super) {
	    __extends(ProjectResourceHttpSvc, _super);
	    function ProjectResourceHttpSvc(http) {
	        _super.call(this, http);
	        this.http = http;
	        this.resourceUrl = 'app/project';
	    }
	    ProjectResourceHttpSvc.prototype.post = function (item) {
	        return _super.prototype.post.call(this, item);
	    };
	    ProjectResourceHttpSvc.prototype.put = function (item) {
	        return _super.prototype.put.call(this, item);
	    };
	    ProjectResourceHttpSvc.prototype.delete = function (item) {
	        return _super.prototype.delete.call(this, item);
	    };
	    ProjectResourceHttpSvc.prototype.getList = function (query) {
	        return _super.prototype.getList.call(this, query);
	    };
	    ProjectResourceHttpSvc = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [http_1.Http])
	    ], ProjectResourceHttpSvc);
	    return ProjectResourceHttpSvc;
	}(resource_http_svc_1.ResourceHttpSvc));
	exports.ProjectResourceHttpSvc = ProjectResourceHttpSvc;


/***/ },

/***/ 321:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var http_1 = __webpack_require__(97);
	__webpack_require__(322);
	var ResourceHttpSvc = (function () {
	    function ResourceHttpSvc(http) {
	        this.http = http;
	        this.resourceUrl = ''; // URL to web api
	    }
	    ResourceHttpSvc.prototype.handleError = function (error) {
	        console.error('An error occurred', error);
	        return Promise.reject(error.message || error);
	    };
	    // Add new any
	    ResourceHttpSvc.prototype.post = function (item) {
	        var headers = new http_1.Headers({
	            'Content-Type': 'application/json'
	        });
	        return this.http
	            .post(this.resourceUrl, JSON.stringify(item), { headers: headers })
	            .toPromise()
	            .then(function (res) { return res.json().data; })
	            .catch(this.handleError);
	    };
	    // Update existing any
	    ResourceHttpSvc.prototype.put = function (item) {
	        var headers = new http_1.Headers();
	        headers.append('Content-Type', 'application/json');
	        var url = this.resourceUrl + "/" + item.id;
	        return this.http
	            .put(url, JSON.stringify(item), { headers: headers })
	            .toPromise()
	            .then(function () { return item; })
	            .catch(this.handleError);
	    };
	    ResourceHttpSvc.prototype.delete = function (item) {
	        var headers = new http_1.Headers();
	        headers.append('Content-Type', 'application/json');
	        var url = this.resourceUrl + "/" + item.id;
	        return this.http
	            .delete(url, headers)
	            .toPromise()
	            .catch(this.handleError);
	    };
	    ResourceHttpSvc.prototype.save = function (item) {
	        if (item.id) {
	            return this.put(item);
	        }
	        return this.post(item);
	    };
	    ResourceHttpSvc.prototype.getList = function (query) {
	        var params = new http_1.URLSearchParams();
	        for (var key in query) {
	            params.set(key, query[key]);
	        }
	        return this.http.get(this.resourceUrl, {
	            search: params
	        })
	            .toPromise()
	            .then(function (response) { return response.json().data; })
	            .catch(this.handleError);
	    };
	    ResourceHttpSvc.prototype.getItem = function (id) {
	        return this.getList({})
	            .then(function (items) { return items.filter(function (item) { return item.id === id; })[0]; });
	    };
	    return ResourceHttpSvc;
	}());
	exports.ResourceHttpSvc = ResourceHttpSvc;


/***/ },

/***/ 323:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var http_1 = __webpack_require__(97);
	var core_1 = __webpack_require__(1);
	var resource_http_svc_1 = __webpack_require__(321);
	var StatusResourceHttpSvc = (function (_super) {
	    __extends(StatusResourceHttpSvc, _super);
	    function StatusResourceHttpSvc(http) {
	        _super.call(this, http);
	        this.http = http;
	        this.resourceUrl = 'app/status';
	    }
	    StatusResourceHttpSvc.prototype.post = function (item) {
	        return _super.prototype.post.call(this, item);
	    };
	    StatusResourceHttpSvc.prototype.put = function (item) {
	        return _super.prototype.put.call(this, item);
	    };
	    StatusResourceHttpSvc.prototype.delete = function (item) {
	        return _super.prototype.delete.call(this, item);
	    };
	    StatusResourceHttpSvc.prototype.getList = function (query) {
	        return _super.prototype.getList.call(this, query);
	    };
	    StatusResourceHttpSvc = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [http_1.Http])
	    ], StatusResourceHttpSvc);
	    return StatusResourceHttpSvc;
	}(resource_http_svc_1.ResourceHttpSvc));
	exports.StatusResourceHttpSvc = StatusResourceHttpSvc;


/***/ },

/***/ 324:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var http_1 = __webpack_require__(97);
	var core_1 = __webpack_require__(1);
	var resource_http_svc_1 = __webpack_require__(321);
	var TaskResourceHttpSvc = (function (_super) {
	    __extends(TaskResourceHttpSvc, _super);
	    function TaskResourceHttpSvc(http) {
	        _super.call(this, http);
	        this.http = http;
	        this.resourceUrl = 'app/task';
	    }
	    TaskResourceHttpSvc.prototype.post = function (item) {
	        return _super.prototype.post.call(this, item);
	    };
	    TaskResourceHttpSvc.prototype.put = function (item) {
	        return _super.prototype.put.call(this, item);
	    };
	    TaskResourceHttpSvc.prototype.delete = function (item) {
	        return _super.prototype.delete.call(this, item);
	    };
	    TaskResourceHttpSvc.prototype.getList = function (query) {
	        return _super.prototype.getList.call(this, query);
	    };
	    TaskResourceHttpSvc = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [http_1.Http])
	    ], TaskResourceHttpSvc);
	    return TaskResourceHttpSvc;
	}(resource_http_svc_1.ResourceHttpSvc));
	exports.TaskResourceHttpSvc = TaskResourceHttpSvc;


/***/ },

/***/ 325:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var http_1 = __webpack_require__(97);
	var core_1 = __webpack_require__(1);
	var resource_http_svc_1 = __webpack_require__(321);
	var WorkResourceHttpSvc = (function (_super) {
	    __extends(WorkResourceHttpSvc, _super);
	    function WorkResourceHttpSvc(http) {
	        _super.call(this, http);
	        this.http = http;
	        this.resourceUrl = 'app/work';
	    }
	    WorkResourceHttpSvc.prototype.post = function (item) {
	        return _super.prototype.post.call(this, item);
	    };
	    WorkResourceHttpSvc.prototype.put = function (item) {
	        return _super.prototype.put.call(this, item);
	    };
	    WorkResourceHttpSvc.prototype.delete = function (item) {
	        return _super.prototype.delete.call(this, item);
	    };
	    WorkResourceHttpSvc.prototype.getList = function (query) {
	        return _super.prototype.getList.call(this, query);
	    };
	    WorkResourceHttpSvc = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [http_1.Http])
	    ], WorkResourceHttpSvc);
	    return WorkResourceHttpSvc;
	}(resource_http_svc_1.ResourceHttpSvc));
	exports.WorkResourceHttpSvc = WorkResourceHttpSvc;


/***/ },

/***/ 326:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var http_1 = __webpack_require__(97);
	var core_1 = __webpack_require__(1);
	var resource_http_svc_1 = __webpack_require__(321);
	var WorkTypeResourceHttpSvc = (function (_super) {
	    __extends(WorkTypeResourceHttpSvc, _super);
	    function WorkTypeResourceHttpSvc(http) {
	        _super.call(this, http);
	        this.http = http;
	        this.resourceUrl = 'app/work_type';
	    }
	    WorkTypeResourceHttpSvc.prototype.post = function (item) {
	        return _super.prototype.post.call(this, item);
	    };
	    WorkTypeResourceHttpSvc.prototype.put = function (item) {
	        return _super.prototype.put.call(this, item);
	    };
	    WorkTypeResourceHttpSvc.prototype.delete = function (item) {
	        return _super.prototype.delete.call(this, item);
	    };
	    WorkTypeResourceHttpSvc.prototype.getList = function (query) {
	        return _super.prototype.getList.call(this, query);
	    };
	    WorkTypeResourceHttpSvc = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [http_1.Http])
	    ], WorkTypeResourceHttpSvc);
	    return WorkTypeResourceHttpSvc;
	}(resource_http_svc_1.ResourceHttpSvc));
	exports.WorkTypeResourceHttpSvc = WorkTypeResourceHttpSvc;


/***/ },

/***/ 327:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var app_cmp_1 = __webpack_require__(328);
	var app_cmp_2 = __webpack_require__(328);
	exports.AppCmp = app_cmp_2.AppCmp;
	exports.APP_DIRECTIVES = [app_cmp_1.AppCmp];


/***/ },

/***/ 328:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var router_deprecated_1 = __webpack_require__(329);
	var semantic_ui_1 = __webpack_require__(361);
	var status_1 = __webpack_require__(364);
	var work_type_1 = __webpack_require__(368);
	var project_1 = __webpack_require__(371);
	var task_1 = __webpack_require__(376);
	var work_1 = __webpack_require__(377);
	var header_1 = __webpack_require__(380);
	var project_2 = __webpack_require__(383);
	var task_2 = __webpack_require__(386);
	var work_2 = __webpack_require__(395);
	var AppCmp = (function () {
	    function AppCmp(taskSvc, statusSvc, workTypeSvc) {
	        this.taskSvc = taskSvc;
	        this.statusSvc = statusSvc;
	        this.workTypeSvc = workTypeSvc;
	    }
	    AppCmp.prototype.getStatusList = function () {
	        this.statusSvc.loaded = false;
	        this.statusSvc.getList({});
	    };
	    AppCmp.prototype.getWorkTypeList = function () {
	        this.workTypeSvc.loaded = false;
	        this.workTypeSvc.getList({});
	    };
	    AppCmp.prototype.ngOnInit = function () {
	        this.getStatusList();
	        this.getWorkTypeList();
	    };
	    AppCmp = __decorate([
	        core_1.Component({
	            template: __webpack_require__(414),
	            selector: 'app',
	            directives: [header_1.HeaderLogoCmp, project_2.ProjectButtonsCmp, task_2.TaskCmp, work_2.WorkCmp, router_deprecated_1.ROUTER_DIRECTIVES],
	            providers: [
	                semantic_ui_1.SEMANTIC_UI_PROVIDERS,
	                router_deprecated_1.ROUTER_PROVIDERS,
	                status_1.STATUS_PROVIDERS,
	                work_type_1.WORK_TYPE_PROVIDERS,
	                project_1.PROJECT_PROVIDERS,
	                task_1.TASK_PROVIDERS,
	                work_1.WORK_PROVIDERS
	            ]
	        }), 
	        __metadata('design:paramtypes', [task_1.TaskSvc, status_1.StatusSvc, work_type_1.WorkTypeSvc])
	    ], AppCmp);
	    return AppCmp;
	}());
	exports.AppCmp = AppCmp;


/***/ },

/***/ 361:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var semantic_ui_modal_1 = __webpack_require__(362);
	var semantic_ui_modal_2 = __webpack_require__(362);
	exports.SemanticUiModal = semantic_ui_modal_2.SemanticUiModal;
	exports.SEMANTIC_UI_PROVIDERS = [semantic_ui_modal_1.SemanticUiModal];


/***/ },

/***/ 362:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {"use strict";
	/// <reference path="../jquery/jquery.d.ts" />
	/// <reference path="./semantic-ui-modal.d.ts" />
	__webpack_require__(322);
	var SemanticUiModal = (function () {
	    function SemanticUiModal() {
	    }
	    SemanticUiModal.prototype.show = function (componentName, otherAction) {
	        var modal = $(componentName + '>.ui.modal');
	        return new Promise(function (resolve, reject) {
	            window.setTimeout(function () {
	                modal.modal({
	                    //blurring: true,
	                    detachable: false,
	                    allowMultiple: true,
	                    observeChanges: true,
	                    onApprove: function (el) {
	                        var result = true;
	                        console.log('ok');
	                        var action = $(el).data('action');
	                        if (!action)
	                            action = 'ok';
	                        if (action != 'ok' && otherAction)
	                            result = otherAction(action);
	                        resolve(action);
	                        return result;
	                    },
	                    onDeny: function (el) {
	                        var result = true;
	                        console.log('cancel');
	                        var action = $(el).data('action');
	                        if (!action)
	                            action = 'cancel';
	                        if (action != 'cancel' && otherAction)
	                            result = otherAction(action);
	                        reject(action);
	                        return result;
	                    },
	                    onHidden: function () {
	                        console.log('cancel');
	                        var action = 'cancel';
	                        reject(action);
	                    }
	                }).modal('show');
	            }, 100);
	        });
	    };
	    SemanticUiModal.prototype.hide = function (componentName) {
	        var modal = $(componentName + '>.ui.modal');
	        modal.modal('hide');
	    };
	    return SemanticUiModal;
	}());
	exports.SemanticUiModal = SemanticUiModal;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(363)))

/***/ },

/***/ 364:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var status_svc_1 = __webpack_require__(365);
	var status_1 = __webpack_require__(367);
	exports.Status = status_1.Status;
	var status_svc_2 = __webpack_require__(365);
	exports.StatusSvc = status_svc_2.StatusSvc;
	exports.STATUS_PROVIDERS = [status_svc_1.StatusSvc];


/***/ },

/***/ 365:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var http_1 = __webpack_require__(97);
	__webpack_require__(322);
	var items_svc_1 = __webpack_require__(366);
	var http_2 = __webpack_require__(319);
	var status_1 = __webpack_require__(367);
	var StatusSvc = (function (_super) {
	    __extends(StatusSvc, _super);
	    function StatusSvc(http, resource) {
	        _super.call(this, http);
	        this.http = http;
	        this.resource = resource;
	        this.items = [];
	        this.selectedItem = new status_1.Status();
	    }
	    StatusSvc.prototype.getList = function (query) {
	        return _super.prototype.getList.call(this, query);
	    };
	    StatusSvc = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [http_1.Http, http_2.StatusResourceHttpSvc])
	    ], StatusSvc);
	    return StatusSvc;
	}(items_svc_1.ItemsSvc));
	exports.StatusSvc = StatusSvc;


/***/ },

/***/ 366:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(1);
	__webpack_require__(322);
	var ItemsSvc = (function () {
	    function ItemsSvc(http) {
	        this.http = http;
	        this.items = [];
	        this.itemsIndexById = {};
	        this.checkedItems = [];
	        this.loaded = false;
	        this.itemSelected$ = new core_1.EventEmitter();
	        this.itemChecked$ = new core_1.EventEmitter();
	        this.itemsLoaded$ = new core_1.EventEmitter();
	        this.onFiltered$ = new core_1.EventEmitter();
	        this.onCreate$ = new core_1.EventEmitter();
	        this.onEdit$ = new core_1.EventEmitter();
	        this.onDelete$ = new core_1.EventEmitter();
	        this.onCreated$ = new core_1.EventEmitter();
	        this.onEdited$ = new core_1.EventEmitter();
	        this.onDeleted$ = new core_1.EventEmitter();
	    }
	    ItemsSvc.prototype.create = function (item) {
	        var $this = this;
	        $this.resource.post(item).then(function (item) { return $this.onCreated$.emit(item); });
	    };
	    ItemsSvc.prototype.edit = function (item) {
	        var $this = this;
	        $this.resource.put(item).then(function (item) { return $this.onEdited$.emit(item); });
	    };
	    ItemsSvc.prototype.delete = function (item) {
	        var $this = this;
	        $this.resource.delete(item).then(function (item) { return $this.onDeleted$.emit(item); });
	    };
	    ItemsSvc.prototype.onSelect = function (item) {
	        this.checkedItems = [];
	        this.selectedItem = item;
	        this.itemSelected$.emit(this.selectedItem);
	    };
	    ItemsSvc.prototype.onCheck = function (item) {
	        if (this.selectedItem.id)
	            this.checkedItems.push(this.selectedItem);
	        var index = this.checkedItems.indexOf(item);
	        if (index == -1)
	            this.checkedItems.push(item);
	        else if (this.checkedItems.length > 1) {
	            this.checkedItems.splice(index, 1);
	        }
	        if (this.checkedItems.length == 1) {
	            this.onSelect(this.checkedItems[0]);
	        }
	        else {
	            this.selectedItem = {};
	            this.itemChecked$.emit(this.checkedItems);
	        }
	    };
	    ItemsSvc.prototype.unCheckIfChecked = function (item) {
	        var index = this.checkedItems.indexOf(item);
	        if (index == -1) {
	            this.checkedItems.push(item);
	        }
	        this.onCheck(item);
	    };
	    ItemsSvc.prototype.getCheckedItemsIds = function () {
	        if (this.checkedItems)
	            return this.checkedItems.map(function (item) { return item.id; });
	        return [];
	    };
	    ItemsSvc.prototype.getItemById = function (id) {
	        return this.items.find(function (item) { return item.id == id; });
	    };
	    ItemsSvc.prototype.getList = function (query) {
	        var $this = this;
	        $this.lastQuery = query;
	        return new Promise(function (resolve) {
	            if ($this.loaded) {
	                if ($this.items.length > 0)
	                    $this.onSelect($this.items[0]);
	                else
	                    $this.onSelect({});
	                resolve($this.items);
	            }
	            else {
	                $this.resource.getList(query).then(function (items) {
	                    console.log($this, items);
	                    $this.items = items;
	                    $this.loaded = true;
	                    $this.itemsLoaded$.emit($this.items);
	                    if ($this.items.length > 0)
	                        $this.onSelect($this.items[0]);
	                    else
	                        $this.onSelect({});
	                    resolve($this.items);
	                });
	            }
	        });
	    };
	    return ItemsSvc;
	}());
	exports.ItemsSvc = ItemsSvc;


/***/ },

/***/ 367:
/***/ function(module, exports) {

	"use strict";
	var Status = (function () {
	    function Status() {
	    }
	    return Status;
	}());
	exports.Status = Status;


/***/ },

/***/ 368:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var work_type_svc_1 = __webpack_require__(369);
	var work_type_1 = __webpack_require__(370);
	exports.WorkType = work_type_1.WorkType;
	var work_type_svc_2 = __webpack_require__(369);
	exports.WorkTypeSvc = work_type_svc_2.WorkTypeSvc;
	exports.WORK_TYPE_PROVIDERS = [work_type_svc_1.WorkTypeSvc];


/***/ },

/***/ 369:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var http_1 = __webpack_require__(97);
	__webpack_require__(322);
	var items_svc_1 = __webpack_require__(366);
	var http_2 = __webpack_require__(319);
	var work_type_1 = __webpack_require__(370);
	var WorkTypeSvc = (function (_super) {
	    __extends(WorkTypeSvc, _super);
	    function WorkTypeSvc(http, resource) {
	        _super.call(this, http);
	        this.http = http;
	        this.resource = resource;
	        this.items = [];
	        this.selectedItem = new work_type_1.WorkType();
	    }
	    WorkTypeSvc.prototype.getList = function (query) {
	        return _super.prototype.getList.call(this, query);
	    };
	    WorkTypeSvc = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [http_1.Http, http_2.WorkTypeResourceHttpSvc])
	    ], WorkTypeSvc);
	    return WorkTypeSvc;
	}(items_svc_1.ItemsSvc));
	exports.WorkTypeSvc = WorkTypeSvc;


/***/ },

/***/ 370:
/***/ function(module, exports) {

	"use strict";
	var WorkType = (function () {
	    function WorkType() {
	    }
	    return WorkType;
	}());
	exports.WorkType = WorkType;


/***/ },

/***/ 371:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var project_svc_1 = __webpack_require__(372);
	var project_1 = __webpack_require__(373);
	exports.Project = project_1.Project;
	var project_svc_2 = __webpack_require__(372);
	exports.ProjectSvc = project_svc_2.ProjectSvc;
	exports.PROJECT_PROVIDERS = [project_svc_1.ProjectSvc];


/***/ },

/***/ 372:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var http_1 = __webpack_require__(97);
	__webpack_require__(322);
	var items_svc_1 = __webpack_require__(366);
	var http_2 = __webpack_require__(319);
	var project_1 = __webpack_require__(373);
	var work_type_svc_1 = __webpack_require__(369);
	var task_svc_1 = __webpack_require__(374);
	var ProjectSvc = (function (_super) {
	    __extends(ProjectSvc, _super);
	    function ProjectSvc(http, taskSvc, workTypeSvc, resource) {
	        var _this = this;
	        _super.call(this, http);
	        this.http = http;
	        this.taskSvc = taskSvc;
	        this.workTypeSvc = workTypeSvc;
	        this.resource = resource;
	        this.items = [];
	        this.checkedsWorkTypeIds = [];
	        this.checkedsStatusIds = [];
	        this.selectedItem = new project_1.Project();
	        this.itemSelected$.subscribe(function (item) {
	            _this.checkedsStatusIds = _this.getCheckedsStatusIds();
	            _this.checkedsWorkTypeIds = _this.getCheckedsWorkTypeIds();
	            _this.updateCheckedsTitle();
	        });
	        this.itemChecked$.subscribe(function (items) {
	            _this.checkedsStatusIds = _this.getCheckedsStatusIds();
	            _this.checkedsWorkTypeIds = _this.getCheckedsWorkTypeIds();
	            _this.updateCheckedsTitle();
	        });
	    }
	    ProjectSvc.prototype.updateCheckedsTitle = function () {
	        this.checkedsTitle = this.selectedItem.title ? this.selectedItem.title : this.checkedItems.map(function (item) { return item.title; }).join(', ');
	    };
	    ProjectSvc.prototype.getCheckedsStatusIds = function () {
	        console.log('getCheckedsStatusIds');
	        var projectsStatusList = this.selectedItem.id ? this.selectedItem.status : this.checkedItems.map(function (item) { return item.status; });
	        var checkedProjectStatusIds = [];
	        for (var _i = 0, projectsStatusList_1 = projectsStatusList; _i < projectsStatusList_1.length; _i++) {
	            var status_1 = projectsStatusList_1[_i];
	            checkedProjectStatusIds = checkedProjectStatusIds.concat(status_1);
	        }
	        return checkedProjectStatusIds.filter(function (item, pos, self) {
	            return self.indexOf(item) == pos;
	        });
	    };
	    ProjectSvc.prototype.getCheckedsWorkTypeIds = function () {
	        var projectsWorkTypeList = this.selectedItem.id ? this.selectedItem.work_type : this.checkedItems.map(function (item) { return item.work_type; });
	        var checkedProjectWorkTypeIds = [];
	        for (var _i = 0, projectsWorkTypeList_1 = projectsWorkTypeList; _i < projectsWorkTypeList_1.length; _i++) {
	            var work_type = projectsWorkTypeList_1[_i];
	            checkedProjectWorkTypeIds = checkedProjectWorkTypeIds.concat(work_type);
	        }
	        console.log('getCheckedsWorkTypeIds', checkedProjectWorkTypeIds);
	        return checkedProjectWorkTypeIds.filter(function (item, pos, self) {
	            return self.indexOf(item) == pos;
	        });
	    };
	    ProjectSvc.prototype.getList = function (query) {
	        return _super.prototype.getList.call(this, query);
	    };
	    ProjectSvc.prototype.getWorkTypesByProjectId = function (project_id) {
	        var _this = this;
	        return this.workTypeSvc.items.filter(function (item) { return _this.getItemById(project_id).work_type.indexOf(item.id) != -1; });
	    };
	    ProjectSvc.prototype.getTasksByProjectId = function (project_id) {
	        return this.taskSvc.items.filter(function (item) { return item.project_id == project_id; });
	    };
	    ProjectSvc = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [http_1.Http, task_svc_1.TaskSvc, work_type_svc_1.WorkTypeSvc, http_2.ProjectResourceHttpSvc])
	    ], ProjectSvc);
	    return ProjectSvc;
	}(items_svc_1.ItemsSvc));
	exports.ProjectSvc = ProjectSvc;


/***/ },

/***/ 373:
/***/ function(module, exports) {

	"use strict";
	var Project = (function () {
	    function Project() {
	    }
	    return Project;
	}());
	exports.Project = Project;


/***/ },

/***/ 374:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var http_1 = __webpack_require__(97);
	__webpack_require__(322);
	var items_svc_1 = __webpack_require__(366);
	var http_2 = __webpack_require__(319);
	var task_1 = __webpack_require__(375);
	var TaskSvc = (function (_super) {
	    __extends(TaskSvc, _super);
	    function TaskSvc(http, resource) {
	        var _this = this;
	        _super.call(this, http);
	        this.http = http;
	        this.resource = resource;
	        this.items = [];
	        this.filteredStatus = [];
	        this.selectedItem = new task_1.Task();
	        this.itemSelected$.subscribe(function (item) {
	            _this.updateCheckedsTitle();
	        });
	        this.itemChecked$.subscribe(function (items) {
	            _this.updateCheckedsTitle();
	        });
	    }
	    TaskSvc.prototype.updateCheckedsTitle = function () {
	        var _this = this;
	        this.checkedsTitle = this.selectedItem.title ? this.getTitle(this.selectedItem) : this.checkedItems.map(function (item) { return _this.getTitle(item); }).join(', ');
	    };
	    TaskSvc.prototype.getTitle = function (item) {
	        if (item)
	            return '#' + item.id;
	        return 'No task';
	    };
	    TaskSvc.prototype.getList = function (query) {
	        return _super.prototype.getList.call(this, query);
	    };
	    TaskSvc.prototype.isFilterStatus = function (status_id) {
	        return this.filteredStatus && (this.filteredStatus.indexOf(status_id) != -1 || status_id == 0);
	    };
	    TaskSvc.prototype.onFilterStatus = function (status_id) {
	        var index = this.filteredStatus.indexOf(status_id);
	        if (index == -1)
	            this.filteredStatus.push(status_id);
	        else {
	            this.filteredStatus.splice(index, 1);
	        }
	        this.onFiltered$.emit(true);
	    };
	    TaskSvc = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [http_1.Http, http_2.TaskResourceHttpSvc])
	    ], TaskSvc);
	    return TaskSvc;
	}(items_svc_1.ItemsSvc));
	exports.TaskSvc = TaskSvc;


/***/ },

/***/ 375:
/***/ function(module, exports) {

	"use strict";
	var Task = (function () {
	    function Task() {
	    }
	    return Task;
	}());
	exports.Task = Task;


/***/ },

/***/ 376:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var task_svc_1 = __webpack_require__(374);
	var task_1 = __webpack_require__(375);
	exports.Task = task_1.Task;
	var task_svc_2 = __webpack_require__(374);
	exports.TaskSvc = task_svc_2.TaskSvc;
	exports.TASK_PROVIDERS = [task_svc_1.TaskSvc];


/***/ },

/***/ 377:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var work_svc_1 = __webpack_require__(378);
	var work_1 = __webpack_require__(379);
	exports.Work = work_1.Work;
	var work_svc_2 = __webpack_require__(378);
	exports.WorkSvc = work_svc_2.WorkSvc;
	exports.WORK_PROVIDERS = [work_svc_1.WorkSvc];


/***/ },

/***/ 378:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var http_1 = __webpack_require__(97);
	__webpack_require__(322);
	var items_svc_1 = __webpack_require__(366);
	var http_2 = __webpack_require__(319);
	var work_1 = __webpack_require__(379);
	var WorkSvc = (function (_super) {
	    __extends(WorkSvc, _super);
	    function WorkSvc(http, resource) {
	        _super.call(this, http);
	        this.http = http;
	        this.resource = resource;
	        this.items = [];
	        this.filteredWorkType = [];
	        this.selectedItem = new work_1.Work();
	    }
	    WorkSvc.prototype.getList = function (query) {
	        return _super.prototype.getList.call(this, query);
	    };
	    WorkSvc.prototype.isFilterWorkType = function (work_type_id) {
	        return this.filteredWorkType && (this.filteredWorkType.indexOf(work_type_id) != -1 || work_type_id == 0);
	    };
	    WorkSvc.prototype.getSpentOnAsString = function (spent_on) {
	        if (spent_on == '')
	            return spent_on;
	        var d = new Date(spent_on);
	        var curr_date = d.getDate();
	        var curr_month = d.getMonth() + 1;
	        var curr_year = d.getFullYear();
	        return (curr_date < 10 ? '0' : '') + curr_date + '.' + (curr_month < 10 ? '0' : '') + curr_month + '.' + curr_year;
	    };
	    WorkSvc.prototype.getSpentOnForInput = function (spent_on) {
	        if (spent_on == '')
	            return spent_on;
	        var d = new Date(spent_on);
	        var curr_date = d.getDate();
	        var curr_month = d.getMonth() + 1;
	        var curr_year = d.getFullYear();
	        return curr_year + '-' + (curr_month < 10 ? '0' : '') + curr_month + '-' + (curr_date < 10 ? '0' : '') + curr_date;
	    };
	    WorkSvc.prototype.getSpentOnFromInput = function (spent_on) {
	        if (spent_on == '')
	            return spent_on;
	        var parts = spent_on.split("-");
	        var d = new Date(parseInt(parts[0]), parseInt(parts[1]) - 1, parseInt(parts[2]));
	        return d.toString();
	    };
	    WorkSvc.prototype.onFilterWorkType = function (work_type_id) {
	        var index = this.filteredWorkType.indexOf(work_type_id);
	        if (index == -1)
	            this.filteredWorkType.push(work_type_id);
	        else {
	            this.filteredWorkType.splice(index, 1);
	        }
	        this.onFiltered$.emit(true);
	    };
	    WorkSvc.prototype.onDelete = function (item) {
	        this.onDelete$.emit(item);
	    };
	    WorkSvc.prototype.onEdit = function (item) {
	        this.onEdit$.emit(item);
	    };
	    WorkSvc.prototype.edit = function (item) {
	        if (item.project_id)
	            item.project_id = +item.project_id;
	        else
	            item.project_id = 0;
	        if (item.task_id)
	            item.task_id = +item.task_id;
	        else
	            item.task_id = 0;
	        if (item.work_type_id)
	            item.work_type_id = +item.work_type_id;
	        else
	            item.work_type_id = 0;
	        _super.prototype.edit.call(this, item);
	    };
	    WorkSvc.prototype.onCreate = function () {
	        this.onCreate$.emit(new work_1.Work());
	    };
	    WorkSvc.prototype.create = function (item) {
	        if (item.project_id)
	            item.project_id = +item.project_id;
	        else
	            item.project_id = 0;
	        if (item.task_id)
	            item.task_id = +item.task_id;
	        else
	            item.task_id = 0;
	        if (item.work_type_id)
	            item.work_type_id = +item.work_type_id;
	        else
	            item.work_type_id = 0;
	        _super.prototype.create.call(this, item);
	    };
	    WorkSvc = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [http_1.Http, http_2.WorkResourceHttpSvc])
	    ], WorkSvc);
	    return WorkSvc;
	}(items_svc_1.ItemsSvc));
	exports.WorkSvc = WorkSvc;


/***/ },

/***/ 379:
/***/ function(module, exports) {

	"use strict";
	var Work = (function () {
	    function Work() {
	    }
	    return Work;
	}());
	exports.Work = Work;


/***/ },

/***/ 380:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var header_logo_cmp_1 = __webpack_require__(381);
	var header_logo_cmp_2 = __webpack_require__(381);
	exports.HeaderLogoCmp = header_logo_cmp_2.HeaderLogoCmp;
	exports.HEADER_DIRECTIVES = [header_logo_cmp_1.HeaderLogoCmp];


/***/ },

/***/ 381:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var HeaderLogoCmp = (function () {
	    function HeaderLogoCmp() {
	    }
	    HeaderLogoCmp = __decorate([
	        core_1.Component({
	            selector: 'header-logo',
	            template: __webpack_require__(382)
	        }), 
	        __metadata('design:paramtypes', [])
	    ], HeaderLogoCmp);
	    return HeaderLogoCmp;
	}());
	exports.HeaderLogoCmp = HeaderLogoCmp;


/***/ },

/***/ 382:
/***/ function(module, exports) {

	module.exports = "<h2 class=\"ui header\">\n  <i class=\"cubes icon\"></i>\n  <div class=\"content\">\n    Issue Client    \n    <div class=\"sub header\">Angular2 Electron Issue Client</div>\n  </div>\n</h2>";

/***/ },

/***/ 383:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var project_buttons_cmp_1 = __webpack_require__(384);
	var project_buttons_cmp_2 = __webpack_require__(384);
	exports.ProjectButtonsCmp = project_buttons_cmp_2.ProjectButtonsCmp;
	exports.PROJECT_DIRECTIVES = [project_buttons_cmp_1.ProjectButtonsCmp];


/***/ },

/***/ 384:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var project_1 = __webpack_require__(371);
	var ProjectButtonsCmp = (function () {
	    function ProjectButtonsCmp(projectSvc) {
	        this.projectSvc = projectSvc;
	    }
	    ProjectButtonsCmp.prototype.getList = function () {
	        this.projectSvc.getList({});
	    };
	    ProjectButtonsCmp.prototype.ngOnInit = function () {
	        this.getList();
	    };
	    ProjectButtonsCmp = __decorate([
	        core_1.Component({
	            selector: 'project-buttons',
	            template: __webpack_require__(385)
	        }), 
	        __metadata('design:paramtypes', [project_1.ProjectSvc])
	    ], ProjectButtonsCmp);
	    return ProjectButtonsCmp;
	}());
	exports.ProjectButtonsCmp = ProjectButtonsCmp;


/***/ },

/***/ 385:
/***/ function(module, exports) {

	module.exports = "<div *ngFor=\"let item of projectSvc.items\" class=\"ui left labeled button\" tabindex=\"0\">\n    <a class=\"ui basic right pointing label\" \n    [class.blue]=\"item === projectSvc.selectedItem\" \n    [class.green]=\"projectSvc.checkedItems.indexOf(item)!=-1\" \n    (click)=\"projectSvc.onSelect(item)\">\n    {{item.title}}\n  </a>\n    <div class=\"ui button\" \n    [class.blue]=\"item === projectSvc.selectedItem\" \n    [class.green]=\"projectSvc.checkedItems.indexOf(item)!=-1\" \n    (click)=\"projectSvc.onCheck(item)\">\n        <i class=\"Checkmark icon\"></i>\n    </div>\n</div>\n<div class=\"ui button\" [class.green]=\"projectSvc.selectedItem.id\" [class.blue]=\"!projectSvc.selectedItem.id\">\n    <i class=\"plus icon\"></i> Create\n</div>";

/***/ },

/***/ 386:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var task_header_cmp_1 = __webpack_require__(387);
	var task_header_buttons_cmp_1 = __webpack_require__(389);
	var task_list_cmp_1 = __webpack_require__(391);
	var task_cmp_1 = __webpack_require__(393);
	var task_header_cmp_2 = __webpack_require__(387);
	exports.TaskHeaderCmp = task_header_cmp_2.TaskHeaderCmp;
	var task_header_buttons_cmp_2 = __webpack_require__(389);
	exports.TaskHeaderButtonsCmp = task_header_buttons_cmp_2.TaskHeaderButtonsCmp;
	var task_list_cmp_2 = __webpack_require__(391);
	exports.TaskListCmp = task_list_cmp_2.TaskListCmp;
	var task_cmp_2 = __webpack_require__(393);
	exports.TaskCmp = task_cmp_2.TaskCmp;
	exports.TASK_DIRECTIVES = [task_header_cmp_1.TaskHeaderCmp, task_header_buttons_cmp_1.TaskHeaderButtonsCmp, task_list_cmp_1.TaskListCmp, task_cmp_1.TaskCmp];


/***/ },

/***/ 387:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var project_1 = __webpack_require__(371);
	var TaskHeaderCmp = (function () {
	    function TaskHeaderCmp(projectSvc) {
	        this.projectSvc = projectSvc;
	    }
	    TaskHeaderCmp = __decorate([
	        core_1.Component({
	            selector: 'task-header',
	            template: __webpack_require__(388)
	        }), 
	        __metadata('design:paramtypes', [project_1.ProjectSvc])
	    ], TaskHeaderCmp);
	    return TaskHeaderCmp;
	}());
	exports.TaskHeaderCmp = TaskHeaderCmp;


/***/ },

/***/ 388:
/***/ function(module, exports) {

	module.exports = "<h3 class=\"ui header\" [class.blue]=\"projectSvc.selectedItem.id\" [class.green]=\"!projectSvc.selectedItem.id\">\n  <i class=\"cube icon\"></i>\n  <div class=\"content\">\n    {{projectSvc.checkedsTitle}}\n    <div class=\"sub header\">{{projectSvc.selectedItem.description}}</div>\n  </div>\n</h3>";

/***/ },

/***/ 389:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var status_1 = __webpack_require__(364);
	var project_1 = __webpack_require__(371);
	var task_1 = __webpack_require__(376);
	var TaskHeaderButtonsCmp = (function () {
	    function TaskHeaderButtonsCmp(projectSvc, statusSvc, taskSvc) {
	        this.projectSvc = projectSvc;
	        this.statusSvc = statusSvc;
	        this.taskSvc = taskSvc;
	    }
	    TaskHeaderButtonsCmp.prototype.getStatusButtonColor = function (status_id) {
	        var color = this.taskSvc.isFilterStatus(status_id) ? this.statusSvc.getItemById(status_id).color : 'basic';
	        if (color != 'blue' && this.projectSvc.selectedItem.id && !this.taskSvc.isFilterStatus(status_id))
	            color += ' blue';
	        else if (color != 'green' && !this.projectSvc.selectedItem.id && !this.taskSvc.isFilterStatus(status_id))
	            color += ' green';
	        return color;
	    };
	    TaskHeaderButtonsCmp = __decorate([
	        core_1.Component({
	            selector: 'task-header-buttons',
	            template: __webpack_require__(390)
	        }), 
	        __metadata('design:paramtypes', [project_1.ProjectSvc, status_1.StatusSvc, task_1.TaskSvc])
	    ], TaskHeaderButtonsCmp);
	    return TaskHeaderButtonsCmp;
	}());
	exports.TaskHeaderButtonsCmp = TaskHeaderButtonsCmp;


/***/ },

/***/ 390:
/***/ function(module, exports) {

	module.exports = "<div class=\"ui button {{getStatusButtonColor(status_id)}}\" *ngFor=\"let status_id of projectSvc.checkedsStatusIds\" (click)=\"taskSvc.onFilterStatus(status_id)\">\n    {{statusSvc.getItemById(status_id).title}}\n</div>";

/***/ },

/***/ 391:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var status_1 = __webpack_require__(364);
	var task_1 = __webpack_require__(376);
	var project_1 = __webpack_require__(371);
	var TaskListCmp = (function () {
	    function TaskListCmp(taskSvc, projectSvc, statusSvc) {
	        var _this = this;
	        this.taskSvc = taskSvc;
	        this.projectSvc = projectSvc;
	        this.statusSvc = statusSvc;
	        this.firstLoad = true;
	        projectSvc.itemSelected$.subscribe(function (item) { _this.firstLoad = true; _this.getList(); });
	        projectSvc.itemChecked$.subscribe(function (items) { _this.firstLoad = true; _this.getList(); });
	        taskSvc.onFiltered$.subscribe(function (items) { return _this.getList(); });
	    }
	    TaskListCmp.prototype.getList = function () {
	        console.log('TaskListCmp:getList');
	        var query = {};
	        var checkedIds = this.projectSvc.getCheckedItemsIds();
	        if (this.projectSvc.selectedItem.id) {
	            query.project_id = '0|' + this.projectSvc.selectedItem.id;
	        }
	        else {
	            if (checkedIds.length)
	                query.project_id = '0|' + checkedIds.join('|');
	            else
	                query.project_id = '0';
	        }
	        if (this.firstLoad) {
	            this.taskSvc.filteredStatus = this.projectSvc.getCheckedsStatusIds();
	            this.firstLoad = false;
	        }
	        if (this.taskSvc.filteredStatus.length)
	            query.status_id = this.taskSvc.filteredStatus.join('|');
	        else
	            query.status_id = '0';
	        this.taskSvc.loaded = false;
	        this.taskSvc.getList(query);
	    };
	    TaskListCmp = __decorate([
	        core_1.Component({
	            selector: 'task-list',
	            template: __webpack_require__(392)
	        }), 
	        __metadata('design:paramtypes', [task_1.TaskSvc, project_1.ProjectSvc, status_1.StatusSvc])
	    ], TaskListCmp);
	    return TaskListCmp;
	}());
	exports.TaskListCmp = TaskListCmp;


/***/ },

/***/ 392:
/***/ function(module, exports) {

	module.exports = "<div class=\"ui middle aligned relaxed divided list\">\n    <div class=\"item\" *ngFor=\"let item of taskSvc.items\" [class.active]=\"item === taskSvc.selectedItem\">\n        <div class=\"three column row\">\n            <div class=\"left floated two column\">\n                <div class=\"content\">\n                    <a class=\"ui small label green\" *ngIf=\"!projectSvc.selectedItem.title\">{{projectSvc.getItemById(item.project_id).title}}</a>\n                    <a class=\"ui small label basic\" [class.blue]=\"item === taskSvc.selectedItem\" [class.green]=\"taskSvc.checkedItems.indexOf(item)!=-1\">\n                        {{taskSvc.getTitle(item)}}\n                    </a>\n                    {{item.title}}\n                </div>\n                <div class=\"description\">\n                    {{item.description}}\n                </div>\n            </div>\n            <div class=\"right floated right aligned one column\">\n                <div class=\"ui small button\">\n                    <i class=\"edit icon\"></i> Edit\n                </div>\n                <div class=\"ui left labeled small button\">\n                    <a class=\"ui basic right pointing label {{statusSvc.getItemById(item.status_id).color}}\">\n                        Status\n                    </a>\n                    <div class=\"ui small button {{statusSvc.getItemById(item.status_id).color}}\">\n                        {{statusSvc.getItemById(item.status_id).title}}\n                    </div>\n                </div>\n                <div class=\"ui left labeled small button\">\n                    <a class=\"ui basic right pointing label\" [class.blue]=\"item === taskSvc.selectedItem\" [class.green]=\"taskSvc.checkedItems.indexOf(item)!=-1\" (click)=\"taskSvc.onSelect(item)\">\n                        Select\n                    </a>\n                    <div class=\"ui small button\" [class.blue]=\"item === taskSvc.selectedItem\" [class.green]=\"taskSvc.checkedItems.indexOf(item)!=-1\" (click)=\"taskSvc.onCheck(item)\">\n                        <i class=\"Checkmark icon\"></i>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"ui clearing divider\"></div>\n<div class=\"ui small button\" [class.green]=\"projectSvc.selectedItem.id\" [class.blue]=\"!projectSvc.selectedItem.id\">\n    <i class=\"plus icon\"></i> Create\n</div>";

/***/ },

/***/ 393:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var project_1 = __webpack_require__(371);
	var task_header_cmp_1 = __webpack_require__(387);
	var task_header_buttons_cmp_1 = __webpack_require__(389);
	var task_list_cmp_1 = __webpack_require__(391);
	var TaskCmp = (function () {
	    function TaskCmp(projectSvc) {
	        this.projectSvc = projectSvc;
	    }
	    TaskCmp = __decorate([
	        core_1.Component({
	            selector: 'task',
	            template: __webpack_require__(394),
	            directives: [task_header_cmp_1.TaskHeaderCmp, task_header_buttons_cmp_1.TaskHeaderButtonsCmp, task_list_cmp_1.TaskListCmp]
	        }), 
	        __metadata('design:paramtypes', [project_1.ProjectSvc])
	    ], TaskCmp);
	    return TaskCmp;
	}());
	exports.TaskCmp = TaskCmp;


/***/ },

/***/ 394:
/***/ function(module, exports) {

	module.exports = "<div class=\"ui segment basic\">\n    <div class=\"ui segment\" [class.blue]=\"projectSvc.selectedItem && projectSvc.selectedItem.id\" [class.green]=\"projectSvc.selectedItem && !projectSvc.selectedItem.id\">\n        <div class=\"ui grid\">\n            <div class=\"two column row\">\n                <div class=\"left floated column\">\n                    <task-header></task-header>\n                </div>\n                <div class=\"right floated right aligned column\">\n                    <task-header-buttons></task-header-buttons>\n                </div>\n            </div>\n        </div>\n        <div class=\"ui clearing divider\"></div>\n        <task-list></task-list>\n    </div>\n</div>";

/***/ },

/***/ 395:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var work_header_cmp_1 = __webpack_require__(396);
	var work_header_buttons_cmp_1 = __webpack_require__(398);
	var work_list_cmp_1 = __webpack_require__(400);
	var work_inputs_cmp_1 = __webpack_require__(402);
	var work_cmp_1 = __webpack_require__(404);
	var work_header_cmp_2 = __webpack_require__(396);
	exports.WorkHeaderCmp = work_header_cmp_2.WorkHeaderCmp;
	var work_header_buttons_cmp_2 = __webpack_require__(398);
	exports.WorkHeaderButtonsCmp = work_header_buttons_cmp_2.WorkHeaderButtonsCmp;
	var work_list_cmp_2 = __webpack_require__(400);
	exports.WorkListCmp = work_list_cmp_2.WorkListCmp;
	var work_modal_cmp_1 = __webpack_require__(405);
	exports.WorkModalCmp = work_modal_cmp_1.WorkModalCmp;
	var work_inputs_cmp_2 = __webpack_require__(402);
	exports.WorkInputsCmp = work_inputs_cmp_2.WorkInputsCmp;
	var work_cmp_2 = __webpack_require__(404);
	exports.WorkCmp = work_cmp_2.WorkCmp;
	exports.WORK_DIRECTIVES = [work_header_cmp_1.WorkHeaderCmp, work_header_buttons_cmp_1.WorkHeaderButtonsCmp, work_list_cmp_1.WorkListCmp, work_inputs_cmp_1.WorkInputsCmp, work_cmp_1.WorkCmp];


/***/ },

/***/ 396:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var task_1 = __webpack_require__(376);
	var WorkHeaderCmp = (function () {
	    function WorkHeaderCmp(taskSvc) {
	        this.taskSvc = taskSvc;
	    }
	    WorkHeaderCmp = __decorate([
	        core_1.Component({
	            selector: 'work-header',
	            template: __webpack_require__(397)
	        }), 
	        __metadata('design:paramtypes', [task_1.TaskSvc])
	    ], WorkHeaderCmp);
	    return WorkHeaderCmp;
	}());
	exports.WorkHeaderCmp = WorkHeaderCmp;


/***/ },

/***/ 397:
/***/ function(module, exports) {

	module.exports = "<h4 class=\"ui header\" [class.blue]=\"taskSvc.selectedItem.id\" [class.green]=\"!taskSvc.selectedItem.id\">\n  <i class=\"check icon\"></i>\n  <div class=\"content\">\n    {{taskSvc.checkedsTitle}}\n    <div class=\"sub header\">{{taskSvc.selectedItem.description}}</div>\n  </div>\n</h4>";

/***/ },

/***/ 398:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var work_type_1 = __webpack_require__(368);
	var project_1 = __webpack_require__(371);
	var task_1 = __webpack_require__(376);
	var work_1 = __webpack_require__(377);
	var WorkHeaderButtonsCmp = (function () {
	    function WorkHeaderButtonsCmp(projectSvc, taskSvc, workTypeSvc, workSvc) {
	        this.projectSvc = projectSvc;
	        this.taskSvc = taskSvc;
	        this.workTypeSvc = workTypeSvc;
	        this.workSvc = workSvc;
	    }
	    WorkHeaderButtonsCmp.prototype.getWorkTypeButtonColor = function (work_type_id) {
	        var color = this.workSvc.isFilterWorkType(work_type_id) ? '' : 'basic';
	        if (this.taskSvc.selectedItem.id)
	            color += ' blue';
	        else if (!this.taskSvc.selectedItem.id)
	            color += ' green';
	        return color;
	    };
	    WorkHeaderButtonsCmp = __decorate([
	        core_1.Component({
	            selector: 'work-header-buttons',
	            template: __webpack_require__(399)
	        }), 
	        __metadata('design:paramtypes', [project_1.ProjectSvc, task_1.TaskSvc, work_type_1.WorkTypeSvc, work_1.WorkSvc])
	    ], WorkHeaderButtonsCmp);
	    return WorkHeaderButtonsCmp;
	}());
	exports.WorkHeaderButtonsCmp = WorkHeaderButtonsCmp;


/***/ },

/***/ 399:
/***/ function(module, exports) {

	module.exports = "<div class=\"ui button mini {{getWorkTypeButtonColor(work_type_id)}}\" *ngFor=\"let work_type_id of projectSvc.checkedsWorkTypeIds\" \n    (click)=\"workSvc.onFilterWorkType(work_type_id)\">\n    {{workTypeSvc.getItemById(work_type_id).title}}\n</div>";

/***/ },

/***/ 400:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var project_1 = __webpack_require__(371);
	var work_1 = __webpack_require__(377);
	var task_1 = __webpack_require__(376);
	var work_type_1 = __webpack_require__(368);
	var WorkListCmp = (function () {
	    function WorkListCmp(workSvc, taskSvc, projectSvc, workTypeSvc) {
	        var _this = this;
	        this.workSvc = workSvc;
	        this.taskSvc = taskSvc;
	        this.projectSvc = projectSvc;
	        this.workTypeSvc = workTypeSvc;
	        this.firstLoad = true;
	        taskSvc.itemSelected$.subscribe(function (item) { _this.firstLoad = true; _this.getList(); });
	        taskSvc.itemChecked$.subscribe(function (items) { _this.firstLoad = true; _this.getList(); });
	        workSvc.onFiltered$.subscribe(function (items) { return _this.getList(); });
	        workSvc.onCreated$.subscribe(function (items) { return _this.getList(); });
	        workSvc.onEdited$.subscribe(function (items) { return _this.getList(); });
	        workSvc.onDeleted$.subscribe(function (items) { return _this.getList(); });
	    }
	    WorkListCmp.prototype.getList = function () {
	        console.log('WorkListCmp:getList');
	        var query = {};
	        var checkedIds = this.taskSvc.getCheckedItemsIds();
	        if (this.taskSvc.selectedItem.id) {
	            query.task_id = '0|' + this.taskSvc.selectedItem.id;
	        }
	        else {
	            if (checkedIds.length)
	                query.task_id = '0|' + checkedIds.join('|');
	            else
	                query.task_id = '0';
	        }
	        checkedIds = this.projectSvc.getCheckedItemsIds();
	        if (this.projectSvc.selectedItem.id) {
	            query.project_id = '0|' + this.projectSvc.selectedItem.id;
	        }
	        else {
	            if (checkedIds.length)
	                query.project_id = '0|' + checkedIds.join('|');
	            else
	                query.project_id = '0';
	        }
	        if (this.firstLoad) {
	            this.workSvc.filteredWorkType = this.projectSvc.getCheckedsWorkTypeIds();
	            this.firstLoad = false;
	        }
	        if (this.workSvc.filteredWorkType.length)
	            query.work_type_id = this.workSvc.filteredWorkType.join('|');
	        else
	            query.work_type_id = '0';
	        this.workSvc.loaded = false;
	        this.workSvc.getList(query);
	    };
	    WorkListCmp = __decorate([
	        core_1.Component({
	            selector: 'work-list',
	            template: __webpack_require__(401)
	        }), 
	        __metadata('design:paramtypes', [work_1.WorkSvc, task_1.TaskSvc, project_1.ProjectSvc, work_type_1.WorkTypeSvc])
	    ], WorkListCmp);
	    return WorkListCmp;
	}());
	exports.WorkListCmp = WorkListCmp;


/***/ },

/***/ 401:
/***/ function(module, exports) {

	module.exports = "<div class=\"ui middle aligned relaxed divided list\">\n    <div class=\"item\" *ngFor=\"let item of workSvc.items\" [class.active]=\"item === taskSvc.selectedItem\">\n        <div class=\"three column row\">\n            <div class=\"left floated two column\">\n                <div class=\"content\">\n                    <a class=\"ui label mini green\" *ngIf=\"!taskSvc.selectedItem.title\">\n                        {{taskSvc.getTitle(taskSvc.getItemById(item.task_id))}}\n                    </a>\n                    <a class=\"ui label mini basic\" [class.blue]=\"item === workSvc.selectedItem\" [class.green]=\"workSvc.checkedItems.indexOf(item)!=-1\"\n                        *ngIf=\"item.spent_on\">\n                        <i class=\"calendar icon\"></i> {{workSvc.getSpentOnAsString(item.spent_on)}}\n                    </a>\n                    <a class=\"ui label mini basic\" [class.blue]=\"item === workSvc.selectedItem\" [class.green]=\"workSvc.checkedItems.indexOf(item)!=-1\"\n                        *ngIf=\"item.hours\">\n                        <i class=\"clock icon\"></i> {{item.hours}} h.\n                    </a>\n                    {{item.comment}}\n                </div>\n            </div>\n            <div class=\"right floated right aligned one column\">\n                <div class=\"ui mini button\" (click)=\"workSvc.onEdit(item)\">\n                    <i class=\"edit icon\"></i> Edit\n                </div>\n                <div class=\"ui left labeled mini button\">\n                    <a class=\"ui basic right pointing label\">\n                        Type\n                    </a>\n                    <div class=\"ui mini button\" *ngIf=\"item.work_type_id\">\n                        {{workTypeSvc.getItemById(item.work_type_id).title}}\n                    </div>\n                </div>\n                <div class=\"ui left labeled mini button\">\n                    <a class=\"ui basic right pointing label\" [class.blue]=\"item === workSvc.selectedItem\" [class.green]=\"workSvc.checkedItems.indexOf(item)!=-1\" (click)=\"workSvc.onSelect(item)\">\n                        Select\n                    </a>\n                    <div class=\"ui mini button\" [class.blue]=\"item === workSvc.selectedItem\" [class.green]=\"workSvc.checkedItems.indexOf(item)!=-1\" (click)=\"workSvc.onCheck(item)\">\n                        <i class=\"Checkmark icon\"></i>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"ui clearing divider\"></div>\n<div class=\"ui mini button\" [class.green]=\"taskSvc.selectedItem.id\" [class.blue]=\"!taskSvc.selectedItem.id\" (click)=\"workSvc.onCreate()\">\n    <i class=\"plus icon\"></i> Create\n</div>";

/***/ },

/***/ 402:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var project_1 = __webpack_require__(371);
	var work_1 = __webpack_require__(377);
	var WorkInputsCmp = (function () {
	    function WorkInputsCmp(projectSvc) {
	        this.projectSvc = projectSvc;
	    }
	    WorkInputsCmp.prototype.onChangeProject = function () {
	        this.item.task_id = 0;
	        this.onChangeTask();
	    };
	    WorkInputsCmp.prototype.onChangeTask = function () {
	        var work_types = this.projectSvc.getWorkTypesByProjectId(this.item.project_id);
	        if (work_types && work_types.length)
	            this.item.work_type_id = work_types[0].id;
	        else
	            this.item.work_type_id = 0;
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', work_1.Work)
	    ], WorkInputsCmp.prototype, "item", void 0);
	    WorkInputsCmp = __decorate([
	        core_1.Component({
	            selector: 'work-inputs',
	            template: __webpack_require__(403)
	        }), 
	        __metadata('design:paramtypes', [project_1.ProjectSvc])
	    ], WorkInputsCmp);
	    return WorkInputsCmp;
	}());
	exports.WorkInputsCmp = WorkInputsCmp;


/***/ },

/***/ 403:
/***/ function(module, exports) {

	module.exports = "<div class=\"fields\">\n    <div class=\"eight wide field\" *ngIf=\"projectSvc.items\">\n        <label>Project</label>\n        <select [(ngModel)]=\"item.project_id\" (change)=\"onChangeProject()\">\n            <option value=\"{{project.id}}\" *ngFor=\"let project of projectSvc.items\">{{project.title}}</option>\n        </select>\n    </div>\n    <div class=\"eight wide field\" *ngIf=\"projectSvc.getTasksByProjectId(item.project_id)\" (change)=\"onChangeTask()\">\n        <label>Task</label>\n        <select [(ngModel)]=\"item.task_id\">\n                        <option value=\"0\"></option>\n                        <option value=\"{{task.id}}\" *ngFor=\"let task of projectSvc.getTasksByProjectId(item.project_id)\">{{task.title}}</option>\n                    </select>\n    </div>\n</div>\n<div class=\"fields\">\n    <div class=\"ten wide field\" *ngIf=\"projectSvc.getTasksByProjectId(item.project_id)\">\n        <label>Work</label>\n        <select [(ngModel)]=\"item.work_type_id\">\n                        <option value=\"{{work_type.id}}\" *ngFor=\"let work_type of projectSvc.getWorkTypesByProjectId(item.project_id)\">{{work_type.title}}</option>\n                    </select>\n    </div>\n    <div class=\"three wide field\">\n        <label>Hours</label>\n        <input type=\"number\" [(ngModel)]=\"item.hours\">\n    </div>\n    <div class=\"three wide field\">\n        <label>Date</label>\n        <input type=\"date\" [(ngModel)]=\"item.spent_on_for_input\">\n    </div>\n</div>\n<div class=\"fields\">\n    <div class=\"sixteen wide field\">\n        <label>Comment</label>\n        <textarea [(ngModel)]=\"item.comment\"></textarea>\n    </div>\n</div>";

/***/ },

/***/ 404:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var task_1 = __webpack_require__(376);
	var work_header_cmp_1 = __webpack_require__(396);
	var work_header_buttons_cmp_1 = __webpack_require__(398);
	var work_list_cmp_1 = __webpack_require__(400);
	var work_modal_cmp_1 = __webpack_require__(405);
	var WorkCmp = (function () {
	    function WorkCmp(taskSvc) {
	        this.taskSvc = taskSvc;
	    }
	    WorkCmp = __decorate([
	        core_1.Component({
	            selector: 'work',
	            template: __webpack_require__(413),
	            directives: [work_header_cmp_1.WorkHeaderCmp, work_header_buttons_cmp_1.WorkHeaderButtonsCmp, work_list_cmp_1.WorkListCmp, work_modal_cmp_1.WorkModalCmp]
	        }), 
	        __metadata('design:paramtypes', [task_1.TaskSvc])
	    ], WorkCmp);
	    return WorkCmp;
	}());
	exports.WorkCmp = WorkCmp;


/***/ },

/***/ 405:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var work_1 = __webpack_require__(377);
	var work_modal_create_cmp_1 = __webpack_require__(406);
	var work_modal_edit_cmp_1 = __webpack_require__(408);
	var work_modal_delete_cmp_1 = __webpack_require__(410);
	var WorkModalCmp = (function () {
	    function WorkModalCmp(workSvc) {
	        this.workSvc = workSvc;
	    }
	    WorkModalCmp = __decorate([
	        core_1.Component({
	            selector: 'work-modal',
	            template: __webpack_require__(412),
	            directives: [work_modal_create_cmp_1.WorkModalCreateCmp, work_modal_edit_cmp_1.WorkModalEditCmp, work_modal_delete_cmp_1.WorkModalDeleteCmp]
	        }), 
	        __metadata('design:paramtypes', [work_1.WorkSvc])
	    ], WorkModalCmp);
	    return WorkModalCmp;
	}());
	exports.WorkModalCmp = WorkModalCmp;


/***/ },

/***/ 406:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var semantic_ui_1 = __webpack_require__(361);
	var work_1 = __webpack_require__(377);
	var project_1 = __webpack_require__(371);
	var task_1 = __webpack_require__(376);
	var work_inputs_cmp_1 = __webpack_require__(402);
	var WorkModalCreateCmp = (function () {
	    function WorkModalCreateCmp(projectSvc, taskSvc, workSvc, modal) {
	        var _this = this;
	        this.projectSvc = projectSvc;
	        this.taskSvc = taskSvc;
	        this.workSvc = workSvc;
	        this.modal = modal;
	        workSvc.onCreate$.subscribe(function (item) { return _this.onCreate(item); });
	    }
	    WorkModalCreateCmp.prototype.onCreate = function (item) {
	        var _this = this;
	        if (this.projectSvc.selectedItem.id)
	            item.project_id = this.projectSvc.selectedItem.id;
	        if (this.taskSvc.selectedItem.id)
	            item.task_id = this.taskSvc.selectedItem.id;
	        if (this.workSvc.filteredWorkType.length)
	            item.work_type_id = this.workSvc.filteredWorkType[0];
	        this.item = item;
	        this.item.spent_on_for_input = '';
	        this.modal.show('work-modal-create').then(function (action) {
	            item.spent_on = _this.workSvc.getSpentOnFromInput(_this.item.spent_on_for_input);
	            _this.workSvc.create(_this.item);
	        }, function (action) { });
	    };
	    WorkModalCreateCmp = __decorate([
	        core_1.Component({
	            selector: 'work-modal-create',
	            template: __webpack_require__(407),
	            directives: [work_inputs_cmp_1.WorkInputsCmp]
	        }), 
	        __metadata('design:paramtypes', [project_1.ProjectSvc, task_1.TaskSvc, work_1.WorkSvc, semantic_ui_1.SemanticUiModal])
	    ], WorkModalCreateCmp);
	    return WorkModalCreateCmp;
	}());
	exports.WorkModalCreateCmp = WorkModalCreateCmp;


/***/ },

/***/ 407:
/***/ function(module, exports) {

	module.exports = "<div class=\"ui modal\">\n    <i class=\"close icon\"></i>\n    <div class=\"header\">\n        Create new work\n    </div>\n    <div class=\"content\">\n        <div class=\"ui form\" *ngIf=\"item\">\n            <work-inputs [item]=\"item\"></work-inputs>\n        </div>\n    </div>    \n    <div class=\"actions\">\n        <div class=\"ui cancel button\">\n            Cancel\n        </div>\n        <div class=\"ui ok green right labeled icon button\">\n            Create\n            <i class=\"check icon\"></i>\n        </div>\n    </div>\n</div>";

/***/ },

/***/ 408:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var semantic_ui_1 = __webpack_require__(361);
	var work_1 = __webpack_require__(377);
	var work_inputs_cmp_1 = __webpack_require__(402);
	var WorkModalEditCmp = (function () {
	    function WorkModalEditCmp(workSvc, modal) {
	        var _this = this;
	        this.workSvc = workSvc;
	        this.modal = modal;
	        workSvc.onEdit$.subscribe(function (item) { return _this.onEdit(item); });
	        workSvc.onDeleted$.subscribe(function (item) { return _this.modal.hide('work-modal-edit'); });
	    }
	    WorkModalEditCmp.prototype.onEdit = function (item) {
	        var _this = this;
	        this.item = item;
	        this.item.spent_on_for_input = this.workSvc.getSpentOnForInput(item.spent_on);
	        this.modal.show('work-modal-edit', function (action) {
	            if (action == 'delete') {
	                _this.workSvc.onDelete(_this.item);
	                return false;
	            }
	            return true;
	        }).then(function (action) {
	            _this.item.spent_on = _this.workSvc.getSpentOnFromInput(_this.item.spent_on_for_input);
	            _this.workSvc.edit(_this.item);
	        }, function (action) { });
	    };
	    WorkModalEditCmp = __decorate([
	        core_1.Component({
	            selector: 'work-modal-edit',
	            template: __webpack_require__(409),
	            directives: [work_inputs_cmp_1.WorkInputsCmp]
	        }), 
	        __metadata('design:paramtypes', [work_1.WorkSvc, semantic_ui_1.SemanticUiModal])
	    ], WorkModalEditCmp);
	    return WorkModalEditCmp;
	}());
	exports.WorkModalEditCmp = WorkModalEditCmp;


/***/ },

/***/ 409:
/***/ function(module, exports) {

	module.exports = "<div class=\"ui modal\">\n    <i class=\"close icon\"></i>\n    <div class=\"header\">\n        Edit work\n    </div>\n    <div class=\"content\">\n        <div class=\"ui form\" *ngIf=\"item\">\n            <work-inputs [item]=\"item\"></work-inputs>\n        </div>\n    </div>\n    <div class=\"actions\">\n        <div class=\"ui left floated cancel red right labeled icon button\" data-action=\"delete\">\n            Delete\n            <i class=\"trash icon\"></i>\n        </div>\n        <div class=\"ui cancel button\">\n            Cancel\n        </div>        \n        <div class=\"ui ok green right labeled icon button\">\n            Save\n            <i class=\"save icon\"></i>\n        </div>\n    </div>\n</div>";

/***/ },

/***/ 410:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var semantic_ui_1 = __webpack_require__(361);
	var work_1 = __webpack_require__(377);
	var work_inputs_cmp_1 = __webpack_require__(402);
	var WorkModalDeleteCmp = (function () {
	    function WorkModalDeleteCmp(workSvc, modal) {
	        var _this = this;
	        this.workSvc = workSvc;
	        this.modal = modal;
	        workSvc.onDelete$.subscribe(function (item) { return _this.onDelete(item); });
	    }
	    WorkModalDeleteCmp.prototype.onDelete = function (item) {
	        var _this = this;
	        this.item = item;
	        this.modal.show('work-modal-delete').then(function (action) {
	            _this.workSvc.delete(_this.item);
	        }, function (action) { });
	    };
	    WorkModalDeleteCmp = __decorate([
	        core_1.Component({
	            selector: 'work-modal-delete',
	            template: __webpack_require__(411),
	            directives: [work_inputs_cmp_1.WorkInputsCmp]
	        }), 
	        __metadata('design:paramtypes', [work_1.WorkSvc, semantic_ui_1.SemanticUiModal])
	    ], WorkModalDeleteCmp);
	    return WorkModalDeleteCmp;
	}());
	exports.WorkModalDeleteCmp = WorkModalDeleteCmp;


/***/ },

/***/ 411:
/***/ function(module, exports) {

	module.exports = "<div class=\"ui modal small\">\n    <i class=\"close icon\"></i>\n    <div class=\"header\">\n        Delete work\n    </div>\n    <div class=\"content\">\n        <div class=\"ui form\" *ngIf=\"item\">\n            Are you sure you want to delete work?\n        </div>\n    </div>\n    <div class=\"actions\">\n        <div class=\"ui cancel button\">\n            No\n        </div>\n        <div class=\"ui ok green right labeled icon button\">\n            Yes\n            <i class=\"trash icon\"></i>\n        </div>\n    </div>\n</div>";

/***/ },

/***/ 412:
/***/ function(module, exports) {

	module.exports = "<work-modal-create></work-modal-create>\n<work-modal-edit></work-modal-edit>\n<work-modal-delete></work-modal-delete>";

/***/ },

/***/ 413:
/***/ function(module, exports) {

	module.exports = "<work-modal></work-modal>\n<div class=\"ui segment basic\">\n    <div class=\"ui segment\" [class.blue]=\"taskSvc.selectedItem && taskSvc.selectedItem.id\" [class.green]=\"taskSvc.selectedItem && !taskSvc.selectedItem.id\">\n        <div class=\"ui grid\">\n            <div class=\"two column row\">\n                <div class=\"left floated column\">\n                    <work-header></work-header>\n                </div>\n                <div class=\"right floated right aligned column\">\n                    <work-header-buttons></work-header-buttons>\n                </div>\n            </div>\n        </div>\n        <div class=\"ui clearing divider\"></div>\n        <work-list></work-list>\n    </div>\n</div>";

/***/ },

/***/ 414:
/***/ function(module, exports) {

	module.exports = "<div class=\"ui grid\">\n    <div class=\"two column row\">\n        <div class=\"left floated column\">\n            <div class=\"ui basic segment\">\n                <header-logo></header-logo>\n            </div>\n        </div>\n        <div class=\"right floated right aligned column\">\n            <div class=\"ui basic segment\">\n                <project-buttons></project-buttons>\n            </div>\n        </div>\n    </div>\n</div>\n<task></task>\n<work></work>";

/***/ }

});
//# sourceMappingURL=app.deff4130dc81e2920833.js.map