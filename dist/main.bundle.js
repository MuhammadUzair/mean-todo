webpackJsonp([1,4],{

/***/ 133:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 133;


/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(144);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__todos_service__ = __webpack_require__(84);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(201),
        styles: [__webpack_require__(198)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__todos_service__["a" /* TodosService */]]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__todos_todos_component__ = __webpack_require__(143);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var appRoutes = [
    { path: '',
        redirectTo: '/',
        pathMatch: 'full'
    },
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__todos_todos_component__["a" /* TodosComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__todos_service__ = __webpack_require__(84);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodosComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TodosComponent = (function () {
    function TodosComponent(_todoService) {
        this._todoService = _todoService;
    }
    TodosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.todos = [];
        this._todoService.getTodos()
            .subscribe(function (todos) {
            _this.todos = todos;
        });
    };
    TodosComponent.prototype.addTodo = function (event, todoText) {
        var _this = this;
        var result;
        var newTodo = {
            text: todoText.value,
            isCompleted: false
        };
        result = this._todoService.saveTodo(newTodo);
        result.subscribe(function (x) {
            _this.todos.push(newTodo);
            todoText.value = '';
        });
    };
    TodosComponent.prototype.setEditState = function (todo, state) {
        if (state) {
            todo.isEditMode = state;
        }
        else {
            delete todo.isEditMode;
        }
    };
    TodosComponent.prototype.updateStatus = function (todo) {
        var _todo = {
            _id: todo._id,
            text: todo.text,
            isCompleted: !todo.isCompleted
        };
        this._todoService.updateTodo(_todo)
            .subscribe(function (data) {
            todo.isCompleted = !todo.isCompleted;
        });
    };
    TodosComponent.prototype.updateTodoText = function (event, todo) {
        var _this = this;
        if (event.which === 13) {
            todo.text = event.target.value;
            var _todo = {
                _id: todo._id,
                text: todo.text,
                isCompleted: todo.isCompleted
            };
            this._todoService.updateTodo(_todo)
                .subscribe(function (data) {
                _this.setEditState(todo, false);
            });
        }
    };
    TodosComponent.prototype.deleteTodo = function (todo) {
        var todos = this.todos;
        this._todoService.deleteTodo(todo._id)
            .subscribe(function (data) {
            if (data.n == 1) {
                for (var i = 0; i < todos.length; i++) {
                    //if(todos[i].id == todo._id){
                    if (todo._id) {
                        todos.splice(i, 1);
                    }
                }
            }
        });
    };
    return TodosComponent;
}());
TodosComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-todos',
        template: __webpack_require__(202),
        styles: [__webpack_require__(199)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__todos_service__["a" /* TodosService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__todos_service__["a" /* TodosService */]) === "function" && _a || Object])
], TodosComponent);

var _a;
//# sourceMappingURL=todos.component.js.map

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 198:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(45)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 199:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(45)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 201:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\r\n      <div class=\"container\">\r\n        <div class=\"navbar-header\">\r\n          <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\r\n            <span class=\"sr-only\">Toggle navigation</span>\r\n            <span class=\"icon-bar\"></span>\r\n            <span class=\"icon-bar\"></span>\r\n            <span class=\"icon-bar\"></span>\r\n          </button>\r\n          <a class=\"navbar-brand\" href=\"#\">MEANTodos</a>\r\n        </div>\r\n        <div id=\"navbar\" class=\"collapse navbar-collapse\">\r\n          <ul class=\"nav navbar-nav\">\r\n           \r\n          </ul>\r\n        </div><!--/.nav-collapse -->\r\n      </div>\r\n    </nav>\r\n\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-8 col-md-offset-2\">\r\n            <router-outlet></router-outlet>\r\n            <app-todos></app-todos>\r\n        </div>\r\n      </div>\r\n\r\n    </div><!-- /.container -->\r\n\r\n"

/***/ }),

/***/ 202:
/***/ (function(module, exports) {

module.exports = "<div class=\"add-todo-form text-center\">\n    <h1>Add Todo</h1>\n    <div class=\"form-group\">\n        <input class=\"form-control input-lg\" placeholder=\"Add Todo...\" autofocus #todoText>\n        <br>\n        <button (click)=\"addTodo($event, todoText)\" class=\"btn btn-primary btn-block\">Create</button>    \n    </div>    \n</div>\n\n<div class=\"todo-list\">\n    <div *ngFor=\"let todo of todos\">\n        <div class=\"col-md-1\">\n            <input type=\"checkbox\" [checked]=\"todo.isCompleted\" (click)=\"updateStatus(todo)\">\n        </div>    \n        <div class=\"col-md-7\">\n            <span [class.hidden]=\"todo.isEditMode\">{{todo.text}}</span>\n            <input type=\"text\" [class.hidden]=\"!todo.isEditMode\" [value]=\"todo.text\" (keypress)=\"updateTodoText($event, todo)\">\n            <input type=\"button\" [class.hidden]=\"!todo.isEditMode\" value=\"Cancel\" (click)=\"setEditState(todo, false)\" class=\"btn btn-warning\">\n        </div>  \n        <div class=\"col-md-4 pull-right\">\n            <input (click)=\"deleteTodo(todo)\" type=\"button\" class=\"btn btn-danger btns\" value=\"Delete\"> \n            <input [class.disabled]=\"todo.isCompleted\" (click)=\"setEditState(todo, true)\" type=\"button\" class=\"btn btn-default pull-right btns\" value=\"Edit\"> \n        </div>  \n    </div>\n</div>"

/***/ }),

/***/ 468:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(134);


/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodosService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TodosService = (function () {
    function TodosService(_http) {
        this._http = _http;
    }
    TodosService.prototype.getTodos = function () {
        return this._http.get('/api/todos')
            .map(function (res) { return res.json(); });
    };
    TodosService.prototype.saveTodo = function (todo) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this._http.post('/api/todo', JSON.stringify(todo), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    TodosService.prototype.updateTodo = function (todo) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this._http.put('/api/todo/' + todo._id, JSON.stringify(todo), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    TodosService.prototype.deleteTodo = function (id) {
        return this._http.delete('/api/todo/' + id)
            .map(function (res) { return res.json(); });
    };
    return TodosService;
}());
TodosService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], TodosService);

var _a;
//# sourceMappingURL=todos.service.js.map

/***/ })

},[468]);
//# sourceMappingURL=main.bundle.js.map