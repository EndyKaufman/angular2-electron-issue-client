"use strict";
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var ResourceSvc = (function () {
    function ResourceSvc(http) {
        this.http = http;
        this.resourceUrl = ''; // URL to web api
    }
    ResourceSvc.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    // Add new any
    ResourceSvc.prototype.post = function (item) {
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
    ResourceSvc.prototype.put = function (item) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var url = this.resourceUrl + "/" + item.id;
        return this.http
            .put(url, JSON.stringify(item), { headers: headers })
            .toPromise()
            .then(function () { return item; })
            .catch(this.handleError);
    };
    ResourceSvc.prototype.delete = function (item) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var url = this.resourceUrl + "/" + item.id;
        return this.http
            .delete(url, headers)
            .toPromise()
            .catch(this.handleError);
    };
    ResourceSvc.prototype.save = function (item) {
        if (item.id) {
            return this.put(item);
        }
        return this.post(item);
    };
    ResourceSvc.prototype.getList = function () {
        return this.http.get(this.resourceUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    ResourceSvc.prototype.getItem = function (id) {
        return this.getList()
            .then(function (items) { return items.filter(function (item) { return item.id === id; })[0]; });
    };
    return ResourceSvc;
}());
exports.ResourceSvc = ResourceSvc;
//# sourceMappingURL=resource.svc.js.map