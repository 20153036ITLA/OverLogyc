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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var AppComponent = (function () {
    function AppComponent(http) {
        this.http = http;
        this.name = 'Efrain';
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('api/OLApi').subscribe(function (data) {
            _this.resultado = JSON.parse(data.text());
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'prueba',
        template: "<h1>Hola {{name}}</h1>\n            <ul>\n           <li *ngFor=\"let persona of resultado\">\n            {{persona.id + \" \" + persona.Nombre}}    \n            </li>\n            </ul>\n             ",
    }),
    __metadata("design:paramtypes", [http_1.Http])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map