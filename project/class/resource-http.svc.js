"use strict";
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
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
//# sourceMappingURL=resource-http.svc.js.map