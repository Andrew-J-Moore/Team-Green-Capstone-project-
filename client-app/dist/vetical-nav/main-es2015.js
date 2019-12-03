(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/broadcast/broadcast.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/broadcast/broadcast.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n  <mat-carousel\r\n    timings=\"250ms ease-in\"\r\n    [autoplay]=\"true\"\r\n    interval=\"3000\"\r\n    color=\"#800029\"\r\n    maxWidth=\"auto\"\r\n    [loop]=\"true\"\r\n    [hideArrows]=\"false\"\r\n    [hideIndicators]=\"true\"\r\n    [useKeyboard]=\"true\"\r\n    [useMouseWheel]=\"false\"\r\n    proportion=\"50\"\r\n    orientation=\"ltr\"\r\n  >\r\n    <mat-carousel-slide\r\n      #matCarouselSlide\r\n      *ngFor=\"let slide of newImgs\"\r\n      [image]=\"slide\"\r\n      overlayColor=\"#00000040\"\r\n      [hideOverlay]=\"true\"\r\n    ></mat-carousel-slide>\r\n  </mat-carousel>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/change-password/change-password.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/change-password/change-password.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <mat-card class=\"example-card\">\r\n    <mat-card-content>\r\n      <h3>Change password</h3>\r\n      <form\r\n        class=\"example-form\"\r\n        [formGroup]=\"forgotPasswordForm\"\r\n        (ngSubmit)=\"onSubmit()\"\r\n      >\r\n        <mat-form-field class=\"example-full-width\">\r\n          <input\r\n            matInput\r\n            placeholder=\"New password\"\r\n            formControlName=\"newPassword\"\r\n            type=\"password\"\r\n          />\r\n          <mat-error\r\n            *ngIf=\"\r\n              forgotPasswordForm.controls['newPassword'].hasError('required')\r\n            \"\r\n          >\r\n            Please enter a new password\r\n          </mat-error>\r\n        </mat-form-field>\r\n\r\n        <mat-form-field class=\"example-full-width\">\r\n          <input\r\n            matInput\r\n            placeholder=\"Confirm password\"\r\n            formControlName=\"confirmNewPassword\"\r\n            type=\"password\"\r\n          />\r\n\r\n          <mat-error\r\n            *ngIf=\"\r\n              forgotPasswordForm.controls['confirmNewPassword'].hasError(\r\n                'required'\r\n              )\r\n            \"\r\n          >\r\n            Please confirm your new password\r\n          </mat-error>\r\n        </mat-form-field>\r\n\r\n        <div style=\"padding-top: 5px\">\r\n          <button mat-raised-button type=\"submit\" class=\"primary\">\r\n            Change password\r\n          </button>\r\n        </div>\r\n      </form>\r\n    </mat-card-content>\r\n  </mat-card>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/error-page/error-page.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/error-page/error-page.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/administration/administration.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/administration/administration.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-tab-group dynamicHeight>\r\n  <mat-tab label=\"Register Users\">\r\n    <div style=\"max-width: 40%; margin: 10px\">\r\n      <app-register-users></app-register-users>\r\n    </div>\r\n  </mat-tab>\r\n  <mat-tab label=\"Register individual users\">\r\n    <div style=\"max-width: 60%; margin: 10px\">\r\n      <app-register></app-register>\r\n    </div>\r\n  </mat-tab>\r\n  <mat-tab label=\"Delete Users\">\r\n    <div style=\"max-width: 60%; margin: 10px\">\r\n      <app-delete-users></app-delete-users>\r\n    </div>\r\n  </mat-tab>\r\n  <mat-tab label=\"Update roles\">\r\n    <div style=\"max-width: 60%; margin: 10px\">\r\n      <app-update-roles></app-update-roles>\r\n    </div>\r\n  </mat-tab>\r\n  <mat-tab label=\"Upload Courses\">\r\n    <div style=\"max-width: 60%; margin: 10px\">\r\n      <app-upload-major></app-upload-major>\r\n    </div>\r\n  </mat-tab>\r\n  <mat-tab label=\"Broadcast Management\">\r\n    <div style=\"max-width: 100%; margin: 10px\">\r\n      <app-broadcast-management></app-broadcast-management>\r\n    </div>\r\n  </mat-tab>\r\n</mat-tab-group>\r\n<!-- <div\r\n  fxLayout\r\n  fxLayout.xs=\"column\"\r\n  fxLayoutAlign=\"flex-start\"\r\n  fxLayoutGap=\"10px\"\r\n  fxLayoutGap.xs=\"10px\"\r\n  style=\"margin: 10px;\"\r\n>\r\n  <div fxFlex=\"35%\">\r\n    <app-register-users></app-register-users>\r\n    <br />\r\n    <app-delete-users></app-delete-users>\r\n    <br>\r\n    <app-upload-courses></app-upload-courses>\r\n  </div>\r\n  <app-register fxFlex=\"30%\"></app-register>\r\n  <app-update-roles fxFlex=\"35%\" class=\"update-roles\"></app-update-roles>\r\n</div> -->\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/administration/broadcast-management/broadcast-management.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/administration/broadcast-management/broadcast-management.component.html ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n  <mat-card style=\" margin: 10px\">\r\n    <mat-card-header>\r\n      <mat-card-title>\r\n        Broadcast Management\r\n      </mat-card-title>\r\n    </mat-card-header>\r\n    <mat-card-content>\r\n      <form\r\n        class=\"example-container\"\r\n        [formGroup]=\"imageForm\"\r\n        enctype=\"multipart/form-data\"\r\n      >\r\n        <mat-form-field style=\"cursor: pointer;width:60%;\">\r\n          <ngx-mat-file-input\r\n            #removableInput\r\n            formControlName=\"image\"\r\n            placeholder=\"upload an image\"\r\n            accept=\"image/*\"\r\n            (change)=\"upload($event)\"\r\n            multiple\r\n          ></ngx-mat-file-input>\r\n          <button\r\n            mat-icon-button\r\n            matSuffix\r\n            *ngIf=\"removableInput.empty\"\r\n            (click)=\"removableInput.clear($event)\"\r\n          >\r\n            <mat-icon>folder</mat-icon>\r\n          </button>\r\n          <mat-error *ngIf=\"imageForm.get('image').hasError('required')\">\r\n            Please select a file\r\n          </mat-error>\r\n\r\n          <button\r\n            mat-icon-button\r\n            matSuffix\r\n            *ngIf=\"!removableInput.empty\"\r\n            (click)=\"removableInput.clear($event)\"\r\n          >\r\n            <mat-icon>delete</mat-icon>\r\n          </button>\r\n        </mat-form-field>\r\n        <mat-error\r\n          *ngIf=\"isInvalid && !imageForm.get('image').hasError('required')\"\r\n        >\r\n          {{ invalidExtension }}\r\n        </mat-error>\r\n        &nbsp;\r\n        <button\r\n          type=\"button\"\r\n          (click)=\"saveForm(imageForm)\"\r\n          mat-raised-button\r\n          class=\"button-maroon\"\r\n        >\r\n          Confirm\r\n        </button>\r\n      </form>\r\n    </mat-card-content>\r\n  </mat-card>\r\n  <div\r\n    class=\"img-wrap\"\r\n    fxLayout=\"row wrap\"\r\n    fxLayout.xs=\"column\"\r\n    fxLayoutAlign=\"center\"\r\n    fxLayoutGap=\"10px\"\r\n    fxLayoutGap.xs=\"10px\"\r\n    style=\"margin: 10px;\"\r\n  >\r\n    <div class=\"card\" *ngFor=\"let image of newImgs; let i = index\" fxFlex=\"20%\">\r\n      <mat-card fxFlex=\"100%\" style=\"margin-bottom:10px\">\r\n        <img\r\n          mat-card-image\r\n          [src]=\"image\"\r\n          alt=\"Image Not Found\"\r\n          style=\"height:250px;\"\r\n        />\r\n        <mat-card-footer>\r\n          <button\r\n            mat-raised-button\r\n            type=\"button\"\r\n            (click)=\"delete(i)\"\r\n            color=\"warn\"\r\n            style=\"margin:10px\"\r\n          >\r\n            Delete\r\n          </button>\r\n        </mat-card-footer>\r\n      </mat-card>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/administration/delete-users/delete-users.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/administration/delete-users/delete-users.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n  <mat-toolbar style=\"width:100%;\">\r\n    <mat-toolbar-row>\r\n      <h5>\r\n        Delete Users\r\n      </h5>\r\n      <span class=\"spacer\"></span>\r\n      <mat-form-field style=\"width:50%;\">\r\n        <input\r\n          type=\"text\"\r\n          matInput\r\n          [(ngModel)]=\"searchText\"\r\n          placeholder=\"Search\"\r\n        />\r\n        <mat-icon matSuffix>search</mat-icon>\r\n      </mat-form-field>\r\n      <!-- <span class=\"spacer\"></span> -->\r\n      <!-- <button\r\n        mat-raised-button\r\n        color=\"warn\"\r\n        (click)=\"onSubmit()\"\r\n        class=\"submit-button\"\r\n      >\r\n        OK\r\n      </button> -->\r\n    </mat-toolbar-row>\r\n  </mat-toolbar>\r\n  <mat-card-content class=\"users-wrap\">\r\n    <section *ngFor=\"let user of users | filterMember: searchText\">\r\n      <mat-checkbox color=\"warn\" (click)=\"addUser(user.name, user.email)\"\r\n        >{{ user.name }} ({{ user.email }})</mat-checkbox\r\n      >\r\n    </section>\r\n  </mat-card-content>\r\n  <mat-card-actions>\r\n    <button\r\n      mat-raised-button\r\n      color=\"warn\"\r\n      (click)=\"onSubmit()\"\r\n      class=\"submit-button\"\r\n    >\r\n      OK\r\n    </button>\r\n  </mat-card-actions>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/administration/delete-users/user-delete-confirm.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/administration/delete-users/user-delete-confirm.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\r\n  <mat-toolbar-row>\r\n    <p>Are you sure you want to delete these users?</p>\r\n    <span class=\"spacer\"></span>\r\n    <mat-icon (click)=\"close()\" matTooltip=\"close\" style=\"cursor:pointer\"\r\n      >clear</mat-icon\r\n    >\r\n  </mat-toolbar-row>\r\n</mat-toolbar>\r\n<div class=\"user-wrap\">\r\n  <p class=\"user\" *ngFor=\"let user of data\">\r\n    <mat-icon>person_outline</mat-icon>\r\n    {{ user.name }} - {{ user.email }}\r\n  </p>\r\n</div>\r\n<mat-toolbar>\r\n  <mat-toolbar-row>\r\n    <mat-hint>Close this dialog if you need to make any changes.</mat-hint>\r\n    <span class=\"spacer\"></span>\r\n    <button mat-raised-button class=\"button-maroon\" (click)=\"confirm()\">\r\n      Confirm\r\n    </button>\r\n  </mat-toolbar-row>\r\n</mat-toolbar>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/administration/register-users/register-users.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/administration/register-users/register-users.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n  <mat-card-header>\r\n    <mat-card-title>\r\n      User File Upload\r\n    </mat-card-title>\r\n  </mat-card-header>\r\n  <mat-card-content>\r\n    <form\r\n      class=\"example-container\"\r\n      [formGroup]=\"uploadForm\"\r\n      (ngSubmit)=\"onSubmit()\"\r\n      enctype=\"multipart/form-data\"\r\n    >\r\n      <mat-form-field>\r\n        <mat-label>Role</mat-label>\r\n        <mat-select formControlName=\"role\">\r\n          <mat-option value=\"students\">Student</mat-option>\r\n          <mat-option value=\"faculty\">Faculty</mat-option>\r\n          <mat-option value=\"admin\">Admin</mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n      <mat-form-field style=\"cursor: pointer;width:60%;\">\r\n        <ngx-mat-file-input\r\n          #removableInput\r\n          formControlName=\"uploadFile\"\r\n          placeholder=\"upload an excel file\"\r\n          accept=\".xlsx,.csv\"\r\n          (change)=\"upload($event)\"\r\n        ></ngx-mat-file-input>\r\n        <button\r\n          mat-icon-button\r\n          matSuffix\r\n          *ngIf=\"removableInput.empty\"\r\n          (click)=\"removableInput.clear($event)\"\r\n        >\r\n          <mat-icon>folder</mat-icon>\r\n        </button>\r\n        <mat-error *ngIf=\"uploadForm.get('uploadFile').hasError('required')\">\r\n          Please select a file\r\n        </mat-error>\r\n\r\n        <button\r\n          mat-icon-button\r\n          matSuffix\r\n          *ngIf=\"!removableInput.empty\"\r\n          (click)=\"removableInput.clear($event)\"\r\n        >\r\n          <mat-icon>delete</mat-icon>\r\n        </button>\r\n      </mat-form-field>\r\n      <mat-error\r\n        *ngIf=\"isInvalid && !uploadForm.get('uploadFile').hasError('required')\"\r\n      >\r\n        {{ invalidExtension }}\r\n      </mat-error>\r\n      &nbsp;\r\n      <button type=\"submit\" mat-raised-button class=\"button-maroon\" [disabled]=\"!uploadForm.valid\">\r\n        Ok\r\n      </button>\r\n    </form>\r\n  </mat-card-content>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/administration/update-roles/role-confirm.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/administration/update-roles/role-confirm.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\r\n    <mat-toolbar-row>\r\n        <p>Please confirm these updated roles</p>\r\n        <span class=\"spacer\"></span>\r\n        <mat-icon (click)=\"cancel()\" matTooltip=\"cancel\" style=\"cursor:pointer\">clear</mat-icon>\r\n    </mat-toolbar-row>\r\n</mat-toolbar>\r\n<div class=\"user-wrap\">\r\n    <mat-list>\r\n        <mat-list-item *ngFor=\"let user of data\">\r\n            <mat-icon mat-list-icon>person_outline</mat-icon>\r\n            <h4 mat-line>\r\n                {{user.name}} \r\n            </h4>\r\n            <p *ngIf=\"user.roles==='ROLE_ADMIN'\" mat-line>Admin</p>\r\n            <p *ngIf=\"user.roles==='ROLE_PM'\" mat-line>Faculty</p>\r\n            <p *ngIf=\"user.roles==='ROLE_MODERATOR'\" mat-line>Moderator</p>\r\n            <p *ngIf=\"user.roles==='ROLE_USER'\" mat-line>Student</p>\r\n        </mat-list-item>\r\n    </mat-list>\r\n</div>\r\n<mat-toolbar>\r\n    <mat-toolbar-row>\r\n        <mat-hint>Close this dialog if you need to make any changes.</mat-hint>\r\n        <span class=\"spacer\"></span>\r\n        <button mat-raised-button class=\"button-maroon\" (click)=\"confirm()\">Confirm</button>\r\n    </mat-toolbar-row>\r\n</mat-toolbar>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/administration/update-roles/update-roles.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/administration/update-roles/update-roles.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n  <!-- <mat-card-header>\r\n        <mat-card-title>\r\n            Change User Roles\r\n        </mat-card-title>\r\n    </mat-card-header>\r\n    <mat-card-content class=\"users-wrap\">\r\n        <div *ngFor=\"let user of users | filterMember: searchText\">\r\n            <p>{{user.name}}({{user.email}}) &nbsp;&nbsp;\r\n            <mat-form-field style=\"width:20%\">\r\n                <mat-label>Role</mat-label>\r\n                <mat-select [(value)]=\"user.roles\">\r\n                    <mat-option value=\"ROLE_ADMIN\" (click)=\"addUser(user.name,user.email,'ROLE_ADMIN')\">Admin</mat-option>\r\n                    <mat-option value=\"ROLE_PM\" (click)=\"addUser(user.name,user.email,'ROLE_PM')\">Faculty</mat-option>\r\n                    <mat-option value=\"ROLE_MODERATOR\" (click)=\"addUser(user.name,user.email,'ROLE_MODERATOR')\">Moderator</mat-option>\r\n                    <mat-option value=\"ROLE_USER\" (click)=\"addUser(user.name,user.email,'ROLE_USER')\">Student</mat-option>\r\n                </mat-select>   \r\n            </mat-form-field>\r\n            </p>\r\n        </div>\r\n    </mat-card-content>\r\n    <mat-toolbar>\r\n    </mat-card-header> -->\r\n\r\n  <mat-toolbar-row style=\"width:100%;\">\r\n    <h5>\r\n      Change user roles\r\n    </h5>\r\n    <span class=\"spacer\"></span>\r\n    <mat-form-field style=\"width:50%;\">\r\n      <input\r\n        type=\"text\"\r\n        matInput\r\n        [(ngModel)]=\"searchText\"\r\n        placeholder=\"Search\"\r\n      />\r\n      <mat-icon matSuffix>search</mat-icon>\r\n    </mat-form-field>\r\n    <!-- <span class=\"spacer\"></span> -->\r\n    <!-- <button\r\n              mat-raised-button\r\n              color=\"warn\"\r\n              (click)=\"onSubmit()\"\r\n              class=\"submit-button\"\r\n            >\r\n              OK\r\n            </button> -->\r\n  </mat-toolbar-row>\r\n  <mat-card-content class=\"users-wrap\">\r\n    <div *ngFor=\"let user of users | filterMember: searchText\">\r\n      <p>\r\n        {{ user.name }}({{ user.email }}) &nbsp;&nbsp;\r\n        <mat-form-field style=\"width:20%\">\r\n          <mat-label>Role</mat-label>\r\n          <mat-select [(value)]=\"user.roles\">\r\n            <mat-option\r\n              value=\"ROLE_ADMIN\"\r\n              (click)=\"addUser(user.name, user.email, 'ROLE_ADMIN')\"\r\n              >Admin</mat-option\r\n            >\r\n            <mat-option\r\n              value=\"ROLE_PM\"\r\n              (click)=\"addUser(user.name, user.email, 'ROLE_PM')\"\r\n              >Faculty</mat-option\r\n            >\r\n            <mat-option\r\n              value=\"ROLE_MODERATOR\"\r\n              (click)=\"addUser(user.name, user.email, 'ROLE_MODERATOR')\"\r\n              >Moderator</mat-option\r\n            >\r\n            <mat-option\r\n              value=\"ROLE_USER\"\r\n              (click)=\"addUser(user.name, user.email, 'ROLE_USER')\"\r\n              >Student</mat-option\r\n            >\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </p>\r\n    </div>\r\n  </mat-card-content>\r\n  <!-- <mat-toolbar>\r\n        <mat-toolbar-row>\r\n           <button mat-raised-button class=\"primary submit-button\" (click)=\"onSubmit()\">OK</button><span class=\"spacer\"></span>\r\n            <mat-form-field class=\"example-full-width\">\r\n                <input\r\n                    type=\"text\"\r\n                    matInput\r\n                    [(ngModel)]=\"searchText\"\r\n                    placeholder=\"Search\"\r\n                />\r\n                <mat-icon matSuffix>search</mat-icon>\r\n            </mat-form-field> \r\n        </mat-toolbar-row>\r\n    </mat-toolbar> -->\r\n\r\n  <mat-card-actions>\r\n    <button mat-raised-button class=\"button-maroon\" (click)=\"onSubmit()\">\r\n      OK\r\n    </button>\r\n  </mat-card-actions>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/administration/upload-courses/upload-courses.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/administration/upload-courses/upload-courses.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n    <mat-card-header>\n      <mat-card-title>\n        Upload Courses\n      </mat-card-title>\n    </mat-card-header>\n    <mat-card-content>\n      <form\n        class=\"example-container\"\n        [formGroup]=\"uploadForm\"\n        (ngSubmit)=\"onSubmit()\"\n        enctype=\"multipart/form-data\"\n      >\n      <mat-form-field style=\"cursor: pointer;width:50%;\">\n        <mat-label>Select Major</mat-label>\n        <mat-select\n          formControlName=\"major\"\n        >\n          <mat-option>--</mat-option>\n          <mat-option *ngFor=\"let major of majors\" [value]=\"major.name\">\n            {{ major.name }}\n          </mat-option>\n        </mat-select>\n        <mat-error *ngIf=\"uploadForm.controls['major'].hasError('required')\"\n          >Please choose a Major</mat-error\n        >\n      </mat-form-field>\n        <mat-form-field style=\"cursor: pointer;width:60%;\">\n          <ngx-mat-file-input\n            #removableInput\n            formControlName=\"uploadFile\"\n            placeholder=\"upload an excel file\"\n            accept=\".xlsx,.csv\"\n            (change)=\"upload($event)\"\n          ></ngx-mat-file-input>\n          <button\n            mat-icon-button\n            matSuffix\n            *ngIf=\"removableInput.empty\"\n            (click)=\"removableInput.clear($event)\"\n          >\n            <mat-icon>folder</mat-icon>\n          </button>\n          <mat-error *ngIf=\"uploadForm.get('uploadFile').hasError('required')\">\n            Please select a file\n          </mat-error>\n  \n          <button\n            mat-icon-button\n            matSuffix\n            *ngIf=\"!removableInput.empty\"\n            (click)=\"removableInput.clear($event)\"\n          >\n            <mat-icon>delete</mat-icon>\n          </button>\n        </mat-form-field>\n        <mat-error\n          *ngIf=\"isInvalid && !uploadForm.get('uploadFile').hasError('required')\"\n        >\n          {{ invalidExtension }}\n        </mat-error>\n        &nbsp;\n        <button type=\"submit\" mat-raised-button class=\"button-maroon\" [disabled]=\"!uploadForm.valid\">\n          Ok\n        </button>\n      </form>\n    </mat-card-content>\n  </mat-card>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/administration/upload-major/upload-major.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/administration/upload-major/upload-major.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n  <mat-card-header>\r\n    <mat-card-title>\r\n      Course Upload\r\n    </mat-card-title>\r\n  </mat-card-header>\r\n  <mat-card-content>\r\n    <form\r\n      class=\"example-container\"\r\n      [formGroup]=\"uploadForm\"\r\n      (ngSubmit)=\"onSubmit()\"\r\n      enctype=\"multipart/form-data\"\r\n    >\r\n      <mat-form-field style=\"cursor: pointer;\" class=\"view-less-width\">\r\n        <mat-label>Select Majors</mat-label>\r\n        <mat-select formControlName=\"major\">\r\n          <mat-option *ngFor=\"let major of allMajors\" [value]=\"major.name\">\r\n            {{ major.name }}\r\n          </mat-option>\r\n        </mat-select>\r\n        <mat-error *ngIf=\"uploadForm.controls['major'].hasError('required')\"\r\n          >Please choose a major type</mat-error\r\n        >\r\n      </mat-form-field>\r\n      <br />\r\n      <mat-form-field style=\"cursor: pointer;width:60%;\">\r\n        <ngx-mat-file-input\r\n          #removableInput\r\n          formControlName=\"uploadFile\"\r\n          placeholder=\"upload an excel file\"\r\n          accept=\".xlsx,.csv\"\r\n          (change)=\"upload($event)\"\r\n        ></ngx-mat-file-input>\r\n        <button\r\n          mat-icon-button\r\n          matSuffix\r\n          *ngIf=\"removableInput.empty\"\r\n          (click)=\"removableInput.clear($event)\"\r\n        >\r\n          <mat-icon>folder</mat-icon>\r\n        </button>\r\n        <mat-error *ngIf=\"uploadForm.get('uploadFile').hasError('required')\">\r\n          Please select a file\r\n        </mat-error>\r\n\r\n        <button\r\n          mat-icon-button\r\n          matSuffix\r\n          *ngIf=\"!removableInput.empty\"\r\n          (click)=\"removableInput.clear($event)\"\r\n        >\r\n          <mat-icon>delete</mat-icon>\r\n        </button>\r\n      </mat-form-field>\r\n      <mat-error\r\n        *ngIf=\"isInvalid && !uploadForm.get('uploadFile').hasError('required')\"\r\n      >\r\n        {{ invalidExtension }}\r\n      </mat-error>\r\n\r\n      &nbsp;\r\n      <button type=\"submit\" mat-raised-button class=\"button-maroon\">\r\n        Ok\r\n      </button>\r\n    </form>\r\n  </mat-card-content>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/appointment/appointment-create/appointment-create.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/appointment/appointment-create/appointment-create.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-http-loader\r\n  [backgroundColor]=\"'#800029'\"\r\n  [minDuration]=\"300\"\r\n></ng-http-loader>\r\n\r\n<form\r\n  class=\"example-container\"\r\n  [formGroup]=\"appointmentForm\"\r\n  (ngSubmit)=\"onSubmit()\"\r\n>\r\n  <mat-form-field style=\"width: 50%;\">\r\n    <input matInput placeholder=\"Appointment Title\" formControlName=\"title\" />\r\n  </mat-form-field>\r\n\r\n  <mat-form-field>\r\n    <textarea\r\n      matInput\r\n      placeholder=\"Appointment Description\"\r\n      formControlName=\"description\"\r\n    ></textarea>\r\n  </mat-form-field>\r\n\r\n  <mat-form-field>\r\n    <input matInput placeholder=\"Location\" formControlName=\"location\" />\r\n  </mat-form-field>\r\n  <div>\r\n    <mat-form-field class=\"example-chip-list\" style=\"width: 50%;\">\r\n      <mat-chip-list #chipList aria-label=\"adding emails\">\r\n        <mat-chip\r\n          *ngFor=\"let email of emails\"\r\n          [selectable]=\"selectable\"\r\n          [removable]=\"removable\"\r\n          (removed)=\"remove(email)\"\r\n        >\r\n          <mat-icon mat-list-icon>person_outline</mat-icon> {{ email }}\r\n          <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\r\n        </mat-chip>\r\n        <input\r\n          placeholder=\"Enter Emails\"\r\n          #userInput\r\n          [formControl]=\"email\"\r\n          [matAutocomplete]=\"auto\"\r\n          [matChipInputFor]=\"chipList\"\r\n          [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\r\n          [matChipInputAddOnBlur]=\"addOnBlur\"\r\n          (matChipInputTokenEnd)=\"add($event)\"\r\n        />\r\n      </mat-chip-list>\r\n\r\n      <mat-autocomplete\r\n        #auto=\"matAutocomplete\"\r\n        (optionSelected)=\"selected($event)\"\r\n      >\r\n        <mat-option\r\n          *ngFor=\"let user of filteredUserList | async\"\r\n          [value]=\"user\"\r\n        >\r\n          {{ user }}\r\n        </mat-option>\r\n      </mat-autocomplete>\r\n      <mat-hint>Use comma or hit ENTER to enter multiple emails!</mat-hint>\r\n    </mat-form-field>\r\n\r\n    &nbsp; &nbsp;\r\n    <button\r\n      mat-raised-button\r\n      type=\"button\"\r\n      class=\"button-maroon\"\r\n      (click)=\"groupSelect()\"\r\n      style=\"width:20%;\"\r\n    >\r\n      Select Groups\r\n    </button>\r\n  </div>\r\n  <br />\r\n  <div *ngIf=\"editMode\">\r\n    <mat-card-content *ngFor=\"let time of appointments\">\r\n      Date: {{ time.date }}\r\n\r\n      <div style=\"margin-top: 10px;\">\r\n        <div *ngFor=\"let timeSlot of time.response\">\r\n          <button\r\n            mat-raised-button\r\n            class=\"primary\"\r\n            type=\"button\"\r\n            style=\"margin-bottom: 10px;\"\r\n          >\r\n            {{ timeSlot.startTime }} - {{ timeSlot.endTime }}\r\n          </button>\r\n          - &nbsp;Selected by: &nbsp; {{ timeSlot.selectorName }}\r\n        </div>\r\n        <br />\r\n      </div>\r\n    </mat-card-content>\r\n  </div>\r\n  <div *ngIf=\"!editMode\">\r\n    <div\r\n      formArrayName=\"dateRange\"\r\n      *ngFor=\"\r\n        let date of appointmentForm.get('dateRange').controls;\r\n        let i = index\r\n      \"\r\n    >\r\n      <div class=\"date\" [formGroupName]=\"i\">\r\n        <mat-form-field style=\"width:25%;margin-left:15px;margin-top:10px\">\r\n          <mat-label>Date</mat-label>\r\n          <input matInput [matDatepicker]=\"picker\" formControlName=\"date\" />\r\n\r\n          <mat-datepicker-toggle\r\n            matSuffix\r\n            [for]=\"picker\"\r\n          ></mat-datepicker-toggle>\r\n          <mat-datepicker touchUi #picker></mat-datepicker> </mat-form-field\r\n        >&nbsp;\r\n\r\n        <span class=\"example-spacer\"></span>\r\n        <button\r\n          mat-icon-button\r\n          (click)=\"deleteDate(i)\"\r\n          *ngIf=\"appointmentForm.get('dateRange').controls.length > 1\"\r\n        >\r\n          <mat-icon>delete</mat-icon>\r\n        </button>\r\n        <div formArrayName=\"time\">\r\n          <div\r\n            class=\"time\"\r\n            *ngFor=\"let time of date.get('time').controls; let x = index\"\r\n            style=\"padding-bottom: 10px ;\"\r\n            [formGroupName]=\"x\"\r\n          >\r\n            <button\r\n              mat-icon-button\r\n              type=\"button\"\r\n              (click)=\"deleteTime(date, x)\"\r\n              *ngIf=\"date.get('time').controls.length > 1\"\r\n            >\r\n              <mat-icon>clear</mat-icon>\r\n            </button>\r\n            <mat-form-field style=\"width:15%\">\r\n              <mat-label>Start Time</mat-label>\r\n              <input\r\n                matInput\r\n                formControlName=\"start\"\r\n                aria-label=\"default time\"\r\n                [ngxTimepicker]=\"starttime\"\r\n                readonly\r\n              />\r\n              <ngx-material-timepicker\r\n                #starttime\r\n                [minutesGap]=\"5\"\r\n                [theme]=\"timeTheme\"\r\n                [appendToInput]=\"true\"\r\n              ></ngx-material-timepicker>\r\n              <mat-icon matSuffix>access_time</mat-icon> </mat-form-field\r\n            >&nbsp;\r\n            <mat-form-field style=\"width:15%\">\r\n              <mat-label>End Time</mat-label>\r\n              <input\r\n                matInput\r\n                formControlName=\"end\"\r\n                aria-label=\"default time\"\r\n                [ngxTimepicker]=\"endtime\"\r\n                readonly\r\n              />\r\n              <ngx-material-timepicker\r\n                #endtime\r\n                [minutesGap]=\"5\"\r\n                [theme]=\"timeTheme\"\r\n                [appendToInput]=\"true\"\r\n              ></ngx-material-timepicker>\r\n              <mat-icon matSuffix>access_time</mat-icon> </mat-form-field\r\n            >&nbsp;\r\n            <mat-form-field style=\"width:23%\">\r\n              <mat-label>Length</mat-label>\r\n              <input matInput formControlName=\"interval\" type=\"number\" />\r\n              <mat-hint>Length of each time slots in MINUTES.</mat-hint>\r\n            </mat-form-field>\r\n          </div>\r\n          <mat-toolbar>\r\n            <mat-toolbar-row>\r\n              <button\r\n                mat-raised-button\r\n                type=\"button\"\r\n                class=\"button-maroon\"\r\n                (click)=\"addTime(date)\"\r\n                style=\"margin: 10px\"\r\n              >\r\n                Add Time\r\n              </button>\r\n              <span class=\"example-spacer\"></span>\r\n            </mat-toolbar-row>\r\n          </mat-toolbar>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <mat-toolbar>\r\n      <mat-toolbar-row>\r\n        <button\r\n          type=\"button\"\r\n          class=\"button-maroon\"\r\n          mat-raised-button\r\n          (click)=\"addDate()\"\r\n        >\r\n          Add Date\r\n        </button>\r\n        <span class=\"example-spacer\"></span>\r\n      </mat-toolbar-row>\r\n    </mat-toolbar>\r\n  </div>\r\n  <mat-divider></mat-divider>\r\n\r\n  <mat-toolbar>\r\n    <mat-toolbar-row>\r\n      <span class=\"example-spacer\"></span>\r\n      <button mat-raised-button color=\"warn\" (click)=\"cancel()\">\r\n        Cancel\r\n      </button>\r\n      &nbsp; &nbsp;\r\n      <button type=\"submit\" mat-raised-button class=\"button-maroon\">\r\n        {{ editMode ? \"Update Appointment\" : \"Create Appointment\" }}\r\n      </button>\r\n    </mat-toolbar-row>\r\n  </mat-toolbar>\r\n</form>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/appointment/appointment-detail/appointment-detail.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/appointment/appointment-detail/appointment-detail.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!isScheduledAppointmentEmpty; else elseBlock\">\r\n  <mat-card style=\"margin-top: 82px; border: #800029 solid 1px; \">\r\n    <mat-card-header>\r\n      <mat-card-title>{{ appointmentName }}</mat-card-title>\r\n      <mat-card-subtitle>{{ appointmentDesc }}</mat-card-subtitle>\r\n    </mat-card-header>\r\n\r\n    <div style=\"padding-left: 10px;\">\r\n      <p>Location: &nbsp;{{ appointmentLocation }}</p>\r\n      <p\r\n        *ngIf=\"\r\n          currentRole == 'ROLE_USER' ||\r\n          currentRole == 'ROLE_MODERATOR' ||\r\n          ((currentRole === 'ROLE_ADMIN' || currentRole === 'ROLE_PM') &&\r\n            appointmentType === 'received')\r\n        \"\r\n      >\r\n        Please select any one of the time slots below:\r\n      </p>\r\n      <mat-card-content *ngFor=\"let time of appointments\">\r\n        Date: {{ time.date }}\r\n\r\n        <div\r\n          *ngIf=\"\r\n            (currentRole === 'ROLE_ADMIN' || currentRole === 'ROLE_PM') &&\r\n            appointmentType === 'sent'\r\n          \"\r\n          style=\"margin-top: 10px;\"\r\n        >\r\n          <div *ngFor=\"let timeSlot of time.response\">\r\n            <button\r\n              mat-raised-button\r\n              class=\"primary\"\r\n              style=\"margin-bottom: 10px;\"\r\n            >\r\n              {{ timeSlot.startTime }} - {{ timeSlot.endTime }}\r\n            </button>\r\n            - &nbsp;Selected by: &nbsp; {{ timeSlot.selectorName }}\r\n          </div>\r\n          <br />\r\n        </div>\r\n        <div\r\n          *ngIf=\"\r\n            currentRole == 'ROLE_USER' ||\r\n            currentRole == 'ROLE_MODERATOR' ||\r\n            ((currentRole === 'ROLE_ADMIN' || currentRole==='ROLE_PM') && appointmentType === 'received')\r\n          \"\r\n          style=\"margin-top: 10px;\"\r\n        >\r\n          <div *ngFor=\"let timeSlot of time.response\">\r\n            <button\r\n              mat-raised-button\r\n              class=\"primary\"\r\n              [matMenuTriggerFor]=\"menu\"\r\n              matTooltip=\"Please click to confirm\"\r\n              style=\"margin-bottom: 10px;\"\r\n              type=\"button\"\r\n            >\r\n              {{ timeSlot.startTime }} - {{ timeSlot.endTime }}\r\n            </button>\r\n            <mat-menu #menu=\"matMenu\">\r\n              <button mat-menu-item (click)=\"onConfirm(timeSlot.id)\">\r\n                confirm\r\n              </button>\r\n              <button mat-menu-item>cancel</button>\r\n            </mat-menu>\r\n          </div>\r\n        </div>\r\n      </mat-card-content>\r\n\r\n      <mat-accordion\r\n        *ngIf=\"\r\n          (currentRole === 'ROLE_ADMIN' || currentRole === 'ROLE_PM') &&\r\n          appointmentType === 'sent'\r\n        \"\r\n      >\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title> Pending recipients </mat-panel-title>\r\n            <mat-panel-description>\r\n              All recipients who didn't confirm appointment\r\n            </mat-panel-description>\r\n          </mat-expansion-panel-header>\r\n          <mat-selection-list\r\n            #users\r\n            (selectionChange)=\"onSelectChange(users.selectedOptions.selected)\"\r\n          >\r\n            <mat-list-option\r\n              *ngFor=\"let user of pendingUsers\"\r\n              [value]=\"user.email\"\r\n            >\r\n              <mat-icon mat-list-icon>person_outline</mat-icon>\r\n              <p mat-line>{{ user.name }}</p>\r\n              <h4 mat-line>{{ user.email }}</h4>\r\n            </mat-list-option>\r\n          </mat-selection-list>\r\n\r\n          <p>\r\n            Pending users selected:&nbsp;\r\n            {{ users.selectedOptions.selected.length }}\r\n          </p>\r\n          <button\r\n            mat-raised-button\r\n            class=\"button-maroon\"\r\n            (click)=\"messageSelectedRecipients()\"\r\n            matTooltip=\"click to message selected recipients\"\r\n          >\r\n            <mat-icon mat-list-icon>email</mat-icon> &nbsp; Email selected\r\n            recipients\r\n          </button>\r\n        </mat-expansion-panel>\r\n      </mat-accordion>\r\n      <br />\r\n      <button\r\n        mat-raised-button\r\n        class=\"primary\"\r\n        [matMenuTriggerFor]=\"manage\"\r\n        *ngIf=\"\r\n          (currentRole === 'ROLE_ADMIN' || currentRole === 'ROLE_PM') &&\r\n          appointmentType === 'sent'\r\n        \"\r\n        matTooltip=\"Please click to delete or update\"\r\n      >\r\n        Manage<mat-icon>expand_more </mat-icon>\r\n      </button>\r\n      <mat-menu #manage=\"matMenu\">\r\n        <button\r\n          mat-menu-item\r\n          style=\"cursor: pointer;\"\r\n          (click)=\"onDeleteAppointment(id)\"\r\n        >\r\n          <mat-icon>delete</mat-icon>Delete\r\n        </button>\r\n        <button\r\n          mat-menu-item\r\n          style=\"cursor: pointer;\"\r\n          (click)=\"onEditAppointment()\"\r\n        >\r\n          <mat-icon>edit</mat-icon>Edit\r\n        </button>\r\n      </mat-menu>\r\n    </div>\r\n  </mat-card>\r\n</div>\r\n<ng-template #elseBlock>\r\n  <div style=\" margin-top: 92px;\">\r\n    <strong\r\n      >You have already confirmed this appointment. Please check your scheduled\r\n      appointments.</strong\r\n    >\r\n  </div>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/appointment/appointment-item/appointment-item.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/appointment/appointment-item/appointment-item.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-list\r\n  class=\"example-card-width\"\r\n  (click)=\"showDetails(id)\"\r\n  style=\"cursor: pointer;\"\r\n>\r\n  <mat-list-item>\r\n    <mat-icon mat-list-icon>insert_invitation</mat-icon>\r\n    <h5 mat-line>\r\n      <strong>{{ appointmentName }}</strong>\r\n    </h5>\r\n    <p mat-line>{{ appointmentDescription }}</p>\r\n    <p mat-line>\r\n      {{ appointmentDate }}\r\n    </p>\r\n    <p mat-line>\r\n      <mat-icon mat-list-icon style=\"font-size: 14px; width: 15px;\"\r\n        >room</mat-icon\r\n      >{{ appointmentLocation }}\r\n    </p>\r\n  </mat-list-item>\r\n</mat-list>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/appointment/appointment-list/appointment-list.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/appointment/appointment-list/appointment-list.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!isAppointmentEmpty; else elseBlock\">\r\n  <mat-form-field style=\" margin-left: 10px; padding: 10px;\">\r\n    <input\r\n      type=\"text\"\r\n      matInput\r\n      [(ngModel)]=\"searchText\"\r\n      placeholder=\"Search Appointments\"\r\n    />\r\n    <mat-icon matSuffix>search</mat-icon>\r\n    <mat-hint>Search by Appointment name or description</mat-hint>\r\n  </mat-form-field>\r\n  <div class=\"appt-wrap\" *ngIf=\"appointments?.length > 0\">\r\n    <app-appointment-item\r\n      *ngFor=\"\r\n        let appointment of appointments\r\n          | appointmentFilter: searchText\r\n          | paginate: { itemsPerPage: 4, currentPage: p }\r\n      \"\r\n      [appointmentName]=\"appointment.name\"\r\n      [appointmentDescription]=\"appointment.description\"\r\n      [appointmentLocation]=\"appointment.location\"\r\n      [id]=\"appointment.id\"\r\n      [dates]=\"appointment.date\"\r\n    >\r\n    </app-appointment-item>\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"pagination-center\">\r\n      <div>\r\n        <pagination-controls\r\n          autoHide=\"true\"\r\n          (pageChange)=\"p = $event\"\r\n        ></pagination-controls>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<ng-template #elseBlock>\r\n  <div style=\" margin: 10px;\">\r\n    <strong\r\n      >You have not created any appointments yet.</strong\r\n    >\r\n  </div>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/appointment/appointment-navigation/appointment-navigation.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/appointment/appointment-navigation/appointment-navigation.component.html ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"currentRole == 'ROLE_ADMIN' || currentRole === 'ROLE_PM'\">\r\n  <div\r\n    class=\"container\"\r\n    fxLayout=\"row\"\r\n    fxLayout.xs=\"column\"\r\n    fxLayoutAlign=\"flex-start\"\r\n    fxLayoutGap=\"5px\"\r\n    fxLayoutGap.xs=\"0\"\r\n  >\r\n    <div fxFlex>\r\n      <button\r\n        mat-stroked-button\r\n        class=\"button-maroon\"\r\n        (click)=\"create()\"\r\n        *ngIf=\"currentRole == 'ROLE_ADMIN' || currentRole == 'ROLE_PM'\"\r\n        matTooltip=\"create appointments\"\r\n      >\r\n        <mat-icon>add </mat-icon>Create Appointment\r\n      </button>\r\n    </div>\r\n    &nbsp;\r\n\r\n    <div fxFlex>\r\n      <button\r\n        mat-stroked-button\r\n        class=\"primary\"\r\n        [matMenuTriggerFor]=\"type\"\r\n        aria-label=\"Example icon-button with a menu\"\r\n        matTooltip=\"check sent and received appointments\"\r\n      >\r\n        All Appointments <mat-icon>expand_more </mat-icon>\r\n      </button>\r\n      <mat-menu #type=\"matMenu\">\r\n        <button mat-menu-item (click)=\"navigateToReceive()\">\r\n          <span><mat-icon>assignment_returned</mat-icon> Created for you</span>\r\n        </button>\r\n        <button mat-menu-item (click)=\"navigateToSent()\">\r\n          <mat-icon>assignment_turned_in</mat-icon>\r\n          <span>Created by you</span>\r\n        </button>\r\n      </mat-menu>\r\n    </div>\r\n    &nbsp;\r\n    <div fxFlex>\r\n      <button\r\n        mat-stroked-button\r\n        class=\"primary\"\r\n        [matMenuTriggerFor]=\"schedule\"\r\n        aria-label=\"Example icon-button with a menu\"\r\n        matTooltip=\"check your all scheduled appointments\"\r\n      >\r\n        Scheduled Appointments<mat-icon>expand_more </mat-icon>\r\n      </button>\r\n\r\n      <mat-menu #schedule=\"matMenu\">\r\n        <button mat-menu-item (click)=\"navigateToScheduled()\">\r\n          <mat-icon>schedule</mat-icon>\r\n\r\n          <span>Created for you</span>\r\n        </button>\r\n        <button mat-menu-item (click)=\"navigateToScheduledRecipients()\">\r\n          <mat-icon>schedule</mat-icon>\r\n          <span>Created by you</span>\r\n        </button>\r\n      </mat-menu>\r\n    </div>\r\n    <span fxFlex=\"grow\"></span>\r\n  </div>\r\n</div>\r\n\r\n<div *ngIf=\"currentRole == 'ROLE_USER' || currentRole === 'ROLE_MODERATOR'\">\r\n  <div\r\n    class=\"container\"\r\n    fxLayout=\"row\"\r\n    fxLayout.xs=\"column\"\r\n    fxLayoutAlign=\"flex-start\"\r\n    fxLayoutGap=\"5px\"\r\n    fxLayoutGap.xs=\"0\"\r\n  >\r\n    <div fxFlex>\r\n      <button\r\n        mat-stroked-button\r\n        class=\"primary\"\r\n        aria-label=\"Example icon-button with a menu\"\r\n        matTooltip=\"Click to check your appointments\"\r\n        (click)=\"userAppointments()\"\r\n      >\r\n        All Appointments\r\n      </button>\r\n    </div>\r\n    &nbsp;\r\n\r\n    <div fxFlex>\r\n      <button\r\n        mat-stroked-button\r\n        class=\"primary\"\r\n        aria-label=\"Example icon-button with a menu\"\r\n        matTooltip=\"Click to see your scheduled appointments\"\r\n        (click)=\"userScheduledAppointments()\"\r\n      >\r\n        Scheduled Appointments\r\n      </button>\r\n    </div>\r\n    <span fxFlex=\"grow\"></span>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/appointment/appointment-types/appointment-received/appointment-received.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/appointment/appointment-types/appointment-received/appointment-received.component.html ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\r\n  class=\"container\"\r\n  fxLayout\r\n  fxLayout.xs=\"column\"\r\n  fxLayoutAlign=\"flex-start\"\r\n  fxLayoutGap=\"10px\"\r\n  fxLayoutGap.xs=\"0\"\r\n>\r\n  <div fxFlex=\"30%\"><app-appointment-list></app-appointment-list></div>\r\n  <div fxFlex=\"50%\"><router-outlet></router-outlet></div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/appointment/appointment-types/appointment-sent/appointment-sent.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/appointment/appointment-types/appointment-sent/appointment-sent.component.html ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\r\n  class=\"container\"\r\n  fxLayout=\"row\"\r\n  fxLayout.xs=\"column\"\r\n  fxLayoutAlign=\"flex-start\"\r\n  fxLayoutGap=\"10px\"\r\n  fxLayoutGap.xs=\"0\"\r\n>\r\n  <div fxFlex=\"40%\">\r\n    <app-appointment-list></app-appointment-list>\r\n  </div>\r\n  <div fxFlex=\"50%\"><router-outlet></router-outlet></div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/appointment/appointment-types/appointment-start/appointment-start.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/appointment/appointment-types/appointment-start/appointment-start.component.html ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"primary\">\r\n  <h4>Please select any options from Appointment Types or Scheduled Types!</h4>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/appointment/appointment/appointment.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/appointment/appointment/appointment.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-appointment-navigation></app-appointment-navigation>\r\n\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/appointment/scheduled-appointments/scheduled-appointments-received/scheduled-appointments-received.component.html":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/appointment/scheduled-appointments/scheduled-appointments-received/scheduled-appointments-received.component.html ***!
  \******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\r\n  class=\"container\"\r\n  fxLayout\r\n  fxLayout.xs=\"column\"\r\n  fxLayout.sm=\"column\"\r\n  fxLayoutAlign=\"flex-start\"\r\n  fxLayoutGap=\"10px\"\r\n  fxLayoutGap.xs=\"0\"\r\n>\r\n  <div fxFlex=\"40%\">\r\n    <div style=\" margin-left: 10px; padding: 10px;\">\r\n      <mat-form-field class=\"example-full-width\">\r\n        <input\r\n          type=\"text\"\r\n          matInput\r\n          [(ngModel)]=\"searchText\"\r\n          placeholder=\"Search Appointments\"\r\n        />\r\n        <mat-icon matSuffix>search</mat-icon>\r\n        <mat-hint>Search by Appointment name or description</mat-hint>\r\n      </mat-form-field>\r\n    </div>\r\n    <div\r\n      *ngFor=\"let time of appointments | scheduledAppointmentSent: searchText\"\r\n    >\r\n      <mat-card>\r\n        <mat-card-content>\r\n          <h4>{{ time.appointmentName }}</h4>\r\n          <p>{{ time.appointmentDescription }}</p>\r\n          <p><strong>For: </strong> &nbsp;{{ time.appointmentCreatorName }}</p>\r\n          <p>\r\n            <strong>Date & Time: </strong> &nbsp;{{ time.date | date }} &nbsp;\r\n            <button mat-raised-button class=\"primary\">\r\n              {{ time.startTime }} - {{ time.endTime }}\r\n            </button>\r\n          </p>\r\n        </mat-card-content>\r\n      </mat-card>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/appointment/scheduled-appointments/scheduled-appointments-sent/scheduled-appointments-sent.component.html":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/appointment/scheduled-appointments/scheduled-appointments-sent/scheduled-appointments-sent.component.html ***!
  \**********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\r\n  class=\"container\"\r\n  fxLayout\r\n  fxLayout.xs=\"column\"\r\n  fxLayout.sm=\"column\"\r\n  fxLayoutAlign=\"flex-start\"\r\n  fxLayoutGap=\"10px\"\r\n  fxLayoutGap.xs=\"0\"\r\n>\r\n  <div fxFlex=\"40%\">\r\n    <div style=\" margin-left: 10px; padding: 10px;\">\r\n      <mat-form-field class=\"example-full-width\">\r\n        <input\r\n          type=\"text\"\r\n          matInput\r\n          [(ngModel)]=\"searchText\"\r\n          placeholder=\"Search Appointments\"\r\n        />\r\n        <mat-icon matSuffix>search</mat-icon>\r\n        <mat-hint>Search by Appointment name or description</mat-hint>\r\n      </mat-form-field>\r\n    </div>\r\n    <div\r\n      *ngFor=\"let time of appointments | scheduledAppointmentSent: searchText\"\r\n    >\r\n      <div *ngIf=\"currentRole == 'ROLE_ADMIN' || currentRole === 'ROLE_PM'\">\r\n        <mat-card>\r\n          <mat-card-content>\r\n            <h4>{{ time.appointmentName }}</h4>\r\n            <p>{{ time.appointmentDescription }}</p>\r\n            <p>\r\n              <strong>Date & Time: </strong> &nbsp;\r\n              {{ time.date | date }} &nbsp; &nbsp;<button\r\n                mat-raised-button\r\n                class=\"primary\"\r\n              >\r\n                {{ time.startTime }} - {{ time.endTime }}\r\n              </button>\r\n            </p>\r\n            <p>\r\n              <strong>Selected by:</strong> &nbsp;\r\n              {{ time.selectorName }} &nbsp;({{ time.selectorEmail }})\r\n            </p>\r\n          </mat-card-content>\r\n        </mat-card>\r\n      </div>\r\n      <div *ngIf=\"currentRole == 'ROLE_USER' || currentRole==='ROLE_MODERATOR'\">\r\n        <mat-card>\r\n          <mat-card-content>\r\n            <h4>{{ time.appointmentName }}</h4>\r\n            <p>{{ time.appointmentDescription }}</p>\r\n            <p>\r\n              <strong>For: </strong> &nbsp;{{ time.appointmentCreatorName }}\r\n            </p>\r\n            <p>\r\n              <strong>Date & Time: </strong> &nbsp;{{ time.date | date }} &nbsp;\r\n              <button mat-raised-button class=\"primary\">\r\n                {{ time.startTime }} - {{ time.endTime }}\r\n              </button>\r\n            </p>\r\n          </mat-card-content>\r\n        </mat-card>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/appointment/shared-appointment/appointment-snackbar/appointment-snackbar.component.html":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/appointment/shared-appointment/appointment-snackbar/appointment-snackbar.component.html ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  <strong>{{ data }}</strong>\r\n</p>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/calendar/calendar-create/calendar-create.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/calendar/calendar-create/calendar-create.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class=\"top-detail-row\">\r\n    <div>New Calendar</div><span class=\"spacer\"></span><mat-icon (click)=\"close()\" class=\"close-button\" matTooltip=\"Close\">clear</mat-icon>\r\n</mat-toolbar>\r\n<div mat-dialog-content>\r\n    <form [formGroup]=\"calForm\" (ngSubmit)=\"onSubmit()\">\r\n        <mat-form-field>\r\n            <input matInput formControlName=\"name\" placeholder=\"Calendar Name\">\r\n        </mat-form-field><br>\r\n        <mat-form-field class=\"example-chip-list\" style=\"width:100%\">\r\n                <mat-chip-list #chipList aria-label=\"adding emails\">\r\n                    <mat-chip\r\n                        *ngFor=\"let email of emails\"\r\n                        [selectable]=\"selectable\"\r\n                        [removable]=\"removable\"\r\n                        (removed)=\"remove(email)\"\r\n                    >\r\n                        <mat-icon mat-list-icon>person_outline</mat-icon>\r\n                        {{ email }}\r\n                        <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\r\n                    </mat-chip>\r\n                    <input\r\n                    placeholder=\"Enter Emails\"\r\n                    matInput\r\n                    [formControl]=\"email\"\r\n                    [matAutocomplete]=\"auto\"\r\n                    [matChipInputFor]=\"chipList\"\r\n                    [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\r\n                    [matChipInputAddOnBlur]=\"addOnBlur\"\r\n                    (matChipInputTokenEnd)=\"add($event)\"\r\n                  />\r\n                    </mat-chip-list>\r\n                    <mat-autocomplete\r\n                    #auto=\"matAutocomplete\"\r\n                    (optionSelected)=\"selected($event)\"\r\n                    >\r\n                    <mat-option\r\n                        *ngFor=\"let user of filteredUserList | async\"\r\n                        [value]=\"user\"\r\n                    >\r\n                        {{ user }}\r\n                    </mat-option>\r\n                    </mat-autocomplete>\r\n                    <mat-error *ngIf=\"!isEmailValid\">{{ errorMessage }}</mat-error>\r\n                    <mat-autocomplete\r\n                        #auto=\"matAutocomplete\"\r\n                        (optionSelected)=\"selected($event)\"\r\n                    >\r\n                        <mat-option\r\n                        *ngFor=\"let user of filteredUserList | async\"\r\n                        [value]=\"user\"\r\n                        >\r\n                        {{ user }}\r\n                        </mat-option>\r\n                    </mat-autocomplete>\r\n                    <mat-hint>Use commas or hit ENTER for multiple emails.</mat-hint>\r\n        </mat-form-field><br>\r\n        <mat-form-field>\r\n            <input\r\n                matInput\r\n                formControlName=\"color\"\r\n                [(colorPicker)]=\"color\"\r\n                [style.background]=\"color\"\r\n                [cpFallbackColor]=\"'#5484ed'\"\r\n                [style.color]=\"'white'\"\r\n                [value]=\"color\"\r\n                placeholder=\"Calendar Color\"\r\n                [cpOutputFormat]=\"'hex'\"\r\n                (colorPickerClose)=\"setPrimary(color)\"\r\n                [cpPosition]=\"'top-right'\"\r\n                [cpPresetColors]=\"[\r\n                '#5484ed',\r\n                '#a4bdfc',\r\n                '#46d6db',\r\n                '#7ae7bf',\r\n                '#51b749',\r\n                '#fbd75b',\r\n                '#ffb878',\r\n                '#ff887c',\r\n                '#dc2127',\r\n                '#dbadff',\r\n                '#585858'\r\n                ]\"\r\n                [cpOKButton]=\"true\"\r\n                [cpColorMode]=\"'presets'\"\r\n                [cpPresetLabel]=\"'Calendar Color'\"\r\n                readonly\r\n            />\r\n        </mat-form-field>\r\n        <mat-toolbar>\r\n            <button mat-raised-button type=\"submit\" class=\"button-maroon\" [disabled]=\"!calForm.valid\">Save</button>&nbsp;&nbsp;\r\n            <button mat-raised-button type=\"button\" (click)=\"groupSelect()\" class=\"button-maroon\" *ngIf=\"role !== 'ROLE_USER'\">Select Groups</button>\r\n        </mat-toolbar>  \r\n    </form>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/calendar/calendar-list/calendar-item/cal-rename.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/calendar/calendar-list/calendar-item/cal-rename.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class=\"top-detail-row\">\r\n    <mat-toolbar-row>\r\n        <p mat-dialog-content>Edit Calendar: {{cal.name}}</p>\r\n        <span class=\"spacer\"></span><mat-icon (click)=\"close()\" class=\"close-button\" matTooltip=\"Close\">clear</mat-icon>\r\n    </mat-toolbar-row>\r\n</mat-toolbar>\r\n<div mat-dialog-content>\r\n    <form [formGroup]=\"nameForm\" (ngSubmit)=\"onSubmit()\">\r\n        <mat-form-field>\r\n            <mat-label>Name</mat-label>\r\n            <input matInput formControlName=\"name\">\r\n        </mat-form-field><br><span class=\"spacer\"></span>\r\n        <mat-form-field class=\"example-chip-list\" style=\"width:90%\">\r\n            <mat-chip-list #chipList aria-label=\"adding emails\">\r\n                <mat-chip\r\n                  *ngFor=\"let email of emails\"\r\n                  [selectable]=\"selectable\"\r\n                  [removable]=\"removable\"\r\n                  (removed)=\"remove(email)\"\r\n                >\r\n                  <mat-icon mat-list-icon>person_outline</mat-icon>\r\n                  {{ email }}\r\n                  <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\r\n                </mat-chip>\r\n                <input\r\n                    placeholder=\"Enter Emails\"\r\n                    matInput\r\n                    [formControl]=\"email\"\r\n                    [matAutocomplete]=\"auto\"\r\n                    [matChipInputFor]=\"chipList\"\r\n                    [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\r\n                    [matChipInputAddOnBlur]=\"addOnBlur\"\r\n                    (matChipInputTokenEnd)=\"add($event)\"\r\n                  />\r\n                    </mat-chip-list>\r\n                    <mat-autocomplete\r\n                    #auto=\"matAutocomplete\"\r\n                    (optionSelected)=\"selected($event)\"\r\n                    >\r\n                    <mat-option\r\n                        *ngFor=\"let user of filteredUserList | async\"\r\n                        [value]=\"user\"\r\n                    >\r\n                        {{ user }}\r\n                    </mat-option>\r\n                    </mat-autocomplete>\r\n                    <mat-error *ngIf=\"!isEmailValid\">{{ errorMessage }}</mat-error>\r\n                    <mat-autocomplete\r\n                        #auto=\"matAutocomplete\"\r\n                        (optionSelected)=\"selected($event)\"\r\n                    >\r\n                        <mat-option\r\n                        *ngFor=\"let user of filteredUserList | async\"\r\n                        [value]=\"user\"\r\n                        >\r\n                        {{ user }}\r\n                        </mat-option>\r\n                    </mat-autocomplete>\r\n              <mat-hint>Use commas or hit ENTER for multiple emails.</mat-hint>\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n            <input\r\n                matInput\r\n                formControlName=\"color\"\r\n                [(colorPicker)]=\"color\"\r\n                [style.background]=\"primaryColor\"\r\n                [cpFallbackColor]=\"'#5484ed'\"\r\n                [style.color]=\"'white'\"\r\n                [value]=\"primaryColor\"\r\n                placeholder=\"Calendar Color\"\r\n                [cpOutputFormat]=\"'hex'\"\r\n                (colorPickerClose)=\"setPrimary(color)\"\r\n                [cpPosition]=\"'top-right'\"\r\n                [cpPresetColors]=\"[\r\n                '#5484ed',\r\n                '#a4bdfc',\r\n                '#46d6db',\r\n                '#7ae7bf',\r\n                '#51b749',\r\n                '#fbd75b',\r\n                '#ffb878',\r\n                '#ff887c',\r\n                '#dc2127',\r\n                '#dbadff',\r\n                '#585858'\r\n                ]\"\r\n                [cpOKButton]=\"true\"\r\n                [cpColorMode]=\"'presets'\"\r\n                [cpPresetLabel]=\"'Calendar Color'\"\r\n                readonly\r\n            />\r\n        </mat-form-field>\r\n        <mat-toolbar>\r\n            <mat-toolbar-row>\r\n                <button mat-raised-button type=\"submit\" class=\"button-maroon\" [disabled]=\"!nameForm.valid\">Save</button>&nbsp;&nbsp;\r\n                <button mat-raised-button type=\"button\" class=\"button-maroon\" (click)=\"groupSelect()\" *ngIf=\"role !== 'ROLE_USER'\">Select Groups</button>\r\n            </mat-toolbar-row>\r\n        </mat-toolbar>\r\n    </form>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/calendar/calendar-list/calendar-item/calendar-item.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/calendar/calendar-list/calendar-item/calendar-item.component.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class=\"cal-item\">\r\n    <mat-checkbox style=\"cursor:pointer\" [(ngModel)]=\"checked\" color=\"primary\" (click)=\"toggleCal()\" [style.color]=\"calendar.color\">{{calendar.name}}</mat-checkbox>\r\n    <span class=\"spacer\"></span>\r\n    <mat-icon class=\"cal-menu\" matTooltip=\"Calendar Options\" [matMenuTriggerFor]=\"options\" *ngIf=\"calendar.createdBy.email === username && !calendar.defaultCalendar\">more_vert</mat-icon>\r\n    <mat-menu #options>\r\n        <button\r\n        mat-menu-item\r\n        (click)=\"renameCal()\">\r\n            Edit\r\n        </button>\r\n        <button\r\n        mat-menu-item\r\n        (click)=\"shareCal()\">\r\n            Share\r\n        </button>\r\n        <button\r\n        mat-menu-item\r\n        (click)=\"deleteCal()\">\r\n            Delete\r\n        </button>\r\n    </mat-menu><br>\r\n</mat-toolbar>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/calendar/calendar-list/calendar-item/delete-confirm.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/calendar/calendar-list/calendar-item/delete-confirm.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <h3 mat-dialog-content>Are you sure you want to delete this calendar?</h3>\r\n    <mat-toolbar>\r\n        <button mat-raised-button color=\"warn\" (click)=\"delete()\">\r\n            Delete\r\n        </button><span class=\"spacer\"></span>\r\n        <button mat-raised-button (click)=\"close()\" class=\"button-maroon\">\r\n            Cancel\r\n        </button>\r\n    </mat-toolbar>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/calendar/calendar-list/calendar-list.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/calendar/calendar-list/calendar-list.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<mat-expansion-panel class=\"cal-list\" [expanded]=\"true\">\r\n    <mat-expansion-panel-header [expandedHeight]=\"'48px'\">\r\n        <mat-panel-title style=\"font-size: 0.8em;\">\r\n            Your Calendars\r\n        </mat-panel-title>\r\n    </mat-expansion-panel-header>\r\n    <app-calendar-item \r\n    *ngFor=\"let cal of calendars\"\r\n    [calendar]=\"cal\"\r\n    class=\"calendar-item\"\r\n    ></app-calendar-item>\r\n</mat-expansion-panel>\r\n\r\n<mat-expansion-panel class=\"cal-list\" [expanded]=\"true\">\r\n    <mat-expansion-panel-header [expandedHeight]=\"'48px'\">\r\n        <mat-panel-title style=\"font-size: 0.8em;\">\r\n            Custom Calendars\r\n        </mat-panel-title>\r\n    </mat-expansion-panel-header>\r\n    <app-calendar-item\r\n    *ngFor= \"let cal of customCals\"\r\n    [calendar]=\"cal\"\r\n    class=\"calendar-item\">\r\n    </app-calendar-item>\r\n</mat-expansion-panel>\r\n\r\n<mat-expansion-panel class=\"cal-list\" [expanded]=\"true\">\r\n        <mat-expansion-panel-header [expandedHeight]=\"'48px'\">\r\n            <mat-panel-title style=\"font-size: 0.8em;\">\r\n                Shared With You\r\n            </mat-panel-title>\r\n        </mat-expansion-panel-header>\r\n        <app-calendar-item\r\n        *ngFor= \"let cal of sharedCals\"\r\n        [calendar]=\"cal\"\r\n        class=\"calendar-item\">\r\n        </app-calendar-item>\r\n    </mat-expansion-panel>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/calendar/calendar.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/calendar/calendar.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\" fxLayoutAlign=\"center\">\r\n  <!-- Left Side of Calendar -->\r\n  <mat-sidenav-container>\r\n    <mat-sidenav #calDrawer mode=\"side\" opened=\"true\" autosize=\"true\">\r\n      <mat-toolbar class=\"menutoggle\">\r\n        <!-- Button for event creation -->\r\n        <button\r\n          mat-raised-button\r\n          matTooltip=\"Create Event\"\r\n          (click)=\"createEvent()\"\r\n          class=\"button-maroon top-row\"\r\n        >\r\n          <mat-icon>add</mat-icon><span>Create</span>\r\n        </button>\r\n        <span class=\"spacer\"></span>\r\n        <!-- Toggles the side view -->\r\n        <button\r\n          type=\"button\"\r\n          mat-icon-button\r\n          (click)=\"calDrawer.toggle()\"\r\n          matTooltip=\"Toggle Menu\"\r\n          class=\"close-button\"\r\n        >\r\n          <mat-icon *ngIf=\"calDrawer.opened\">clear</mat-icon>\r\n        </button>\r\n      </mat-toolbar>\r\n      <div class=\"left-view\">\r\n        <br />\r\n        <!-- Button for calendar creation -->\r\n        <button mat-button (click)=\"newCal()\" type=\"button\">\r\n          New Calendar <mat-icon>add</mat-icon>\r\n        </button>\r\n        <div class=\"cal-list\">\r\n          <!-- List of calendars -->\r\n          <app-calendar-list></app-calendar-list>\r\n        </div>\r\n      </div>\r\n    </mat-sidenav>\r\n    <!-- Toggles side view -->\r\n    <mat-sidenav-content class=\"side-nav-toggle\" *ngIf=\"!calDrawer.opened\">\r\n      <button\r\n        type=\"button\"\r\n        mat-icon-button\r\n        (click)=\"calDrawer.toggle()\"\r\n        matTooltip=\"Toggle Menu\"\r\n        class=\"toggle-button\"\r\n      >\r\n        <mat-icon>apps</mat-icon>\r\n      </button>\r\n    </mat-sidenav-content>\r\n  </mat-sidenav-container>\r\n  \r\n\r\n  <!-- Calendar -->\r\n  <full-calendar\r\n    id=\"calendar\"\r\n    fxFlex=\"85%\"\r\n    defaultView=\"dayGridMonth\"\r\n    [plugins]=\"calendarPlugins\"\r\n    [events]=\"compatEvents\"\r\n    [nextDayThreshold]=\"'00:00:00'\"\r\n    [themeSystem]=\"'standard'\"\r\n    [eventLimit]=\"true\"\r\n    [height]=\"'parent'\"\r\n    [header]=\"{\r\n      left: 'prev,today,next',\r\n      center: 'title',\r\n      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'\r\n    }\"\r\n    [weekends]=\"weekends\"\r\n    (eventClick)=\"eventClicked($event.event)\"\r\n  ></full-calendar>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/calendar/create-event/create-event.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/calendar/create-event/create-event.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container\" fxLayoutAlign=\"center\">\r\n  <form [formGroup]=\"eventForm\" (ngSubmit)=\"onSubmit()\">\r\n    <mat-form-field class=\"cal-select\" required>\r\n      <mat-label>Select Calendar</mat-label>\r\n      <mat-select formControlName=\"calendar\" [disableOptionCentering]=\"true\">\r\n        <mat-option\r\n          *ngFor=\"let cal of calendars\"\r\n          [value]=\"cal.name\"\r\n          (click)=\"selectCalendar(cal.id)\"\r\n          >{{ cal.name }}</mat-option\r\n        >\r\n      </mat-select>\r\n      <mat-error *ngIf=\"eventForm.controls['calendar'].hasError('required')\">Please choose a calendar</mat-error>\r\n    </mat-form-field>\r\n    <mat-form-field>\r\n      <input\r\n        matInput\r\n        placeholder=\"Event Title\"\r\n        formControlName=\"title\"\r\n      /> \r\n        <mat-error *ngIf=\"eventForm.controls['title'].hasError('required')\">Title is required</mat-error>\r\n      </mat-form-field\r\n    ><br />\r\n\r\n\r\n    <mat-form-field style=\"width:60%\">\r\n      <textarea\r\n        matInput\r\n        cdkTextareaAutosize\r\n        cdkAutosizeMinRows=\"2\"\r\n        cdkAutosizeMaxRows=\"5\"\r\n        placeholder=\"Event Description\"\r\n        cols=\"50\"\r\n        formControlName=\"description\"\r\n      ></textarea> </mat-form-field\r\n    ><br />\r\n\r\n    <mat-form-field>\r\n      <input\r\n        matInput\r\n        placeholder=\"Event Location\"\r\n        formControlName=\"location\"\r\n      /> </mat-form-field\r\n    ><br />\r\n    <mat-form-field id=\"end-date\">\r\n      <input\r\n        matInput\r\n        placeholder=\"Start Date\"\r\n        formControlName=\"startDate\"\r\n        [matDatepicker]=\"startpicker\"\r\n        readonly\r\n      />\r\n      <mat-datepicker-toggle\r\n        matSuffix\r\n        [for]=\"startpicker\"\r\n      ></mat-datepicker-toggle>\r\n      <mat-datepicker touchUi #startpicker></mat-datepicker>\r\n    </mat-form-field>\r\n    <mat-form-field *ngIf=\"!allDay\">\r\n      <mat-label>Start Time</mat-label>\r\n      <input\r\n        matInput\r\n        formControlName=\"startTime\"\r\n        aria-label=\"default time\"\r\n        [ngxTimepicker]=\"starttime\"\r\n        readonly\r\n      />\r\n      <ngx-material-timepicker\r\n        #starttime\r\n        [minutesGap]=\"5\"\r\n        [theme]=\"timeTheme\"\r\n        [appendToInput]=\"true\"\r\n      ></ngx-material-timepicker> </mat-form-field\r\n    ><br />\r\n    <mat-form-field id=\"end-date\">\r\n      <input\r\n        matInput\r\n        placeholder=\"End Date\"\r\n        formControlName=\"endDate\"\r\n        [matDatepicker]=\"endpicker\"\r\n        readonly\r\n      />\r\n      <mat-datepicker-toggle\r\n        matSuffix\r\n        [for]=\"endpicker\"\r\n      ></mat-datepicker-toggle>\r\n      <mat-datepicker touchUi #endpicker></mat-datepicker>\r\n    </mat-form-field>\r\n    <mat-form-field *ngIf=\"!allDay\">\r\n      <mat-label>End Time</mat-label>\r\n      <input\r\n        matInput\r\n        formControlName=\"endTime\"\r\n        aria-label=\"default time\"\r\n        [ngxTimepicker]=\"endtime\"\r\n        readonly\r\n      />\r\n      <ngx-material-timepicker\r\n        #endtime\r\n        [minutesGap]=\"5\"\r\n        [theme]=\"timeTheme\"\r\n        [appendToInput]=\"true\"\r\n      ></ngx-material-timepicker> </mat-form-field\r\n    ><br />\r\n    <mat-form-field id=\"primary-color\">\r\n      <input\r\n        matInput\r\n        formControlName=\"primary\"\r\n        [(colorPicker)]=\"color\"\r\n        [style.background]=\"primaryColor\"\r\n        [cpFallbackColor]=\"'#5484ed'\"\r\n        [style.color]=\"'white'\"\r\n        [value]=\"primaryColor\"\r\n        placeholder=\"Event Color\"\r\n        [cpOutputFormat]=\"'hex'\"\r\n        (colorPickerClose)=\"setPrimary(color)\"\r\n        [cpPosition]=\"'top-right'\"\r\n        [cpPresetColors]=\"[\r\n          '#5484ed',\r\n          '#a4bdfc',\r\n          '#46d6db',\r\n          '#7ae7bf',\r\n          '#51b749',\r\n          '#fbd75b',\r\n          '#ffb878',\r\n          '#ff887c',\r\n          '#dc2127',\r\n          '#dbadff',\r\n          '#585858'\r\n        ]\"\r\n        [cpOKButton]=\"true\"\r\n        [cpColorMode]=\"'presets'\"\r\n        [cpPresetLabel]=\"'Event Color'\"\r\n        readonly\r\n      />\r\n    </mat-form-field>\r\n    <mat-form-field class=\"example-chip-list\" style=\"width:50%\">\r\n      <mat-chip-list #chipList aria-label=\"adding emails\">\r\n        <mat-chip\r\n          *ngFor=\"let email of emails\"\r\n          [selectable]=\"selectable\"\r\n          [removable]=\"removable\"\r\n          (removed)=\"remove(email)\"\r\n        >\r\n          <mat-icon mat-list-icon>person_outline</mat-icon>\r\n          {{ email }}\r\n          <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\r\n        </mat-chip>\r\n        <input\r\n        placeholder=\"Enter Emails\"\r\n        matInput\r\n        [formControl]=\"email\"\r\n        [matAutocomplete]=\"auto\"\r\n        [matChipInputFor]=\"chipList\"\r\n        [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\r\n        [matChipInputAddOnBlur]=\"addOnBlur\"\r\n        (matChipInputTokenEnd)=\"add($event)\"\r\n      />\r\n        </mat-chip-list>\r\n        <mat-autocomplete\r\n        #auto=\"matAutocomplete\"\r\n        (optionSelected)=\"selected($event)\"\r\n        >\r\n        <mat-option\r\n            *ngFor=\"let user of filteredUserList | async\"\r\n            [value]=\"user\"\r\n        >\r\n            {{ user }}\r\n        </mat-option>\r\n        </mat-autocomplete>\r\n        <mat-error *ngIf=\"!isEmailValid\">{{ errorMessage }}</mat-error>\r\n        <mat-autocomplete\r\n            #auto=\"matAutocomplete\"\r\n            (optionSelected)=\"selected($event)\"\r\n        >\r\n            <mat-option\r\n            *ngFor=\"let user of filteredUserList | async\"\r\n            [value]=\"user\"\r\n            >\r\n            {{ user }}\r\n            </mat-option>\r\n        </mat-autocomplete>\r\n      <mat-hint>Use commas or hit ENTER for multiple emails.</mat-hint>\r\n    </mat-form-field>&nbsp;\r\n    \r\n    &nbsp;&nbsp;\r\n\r\n    <mat-toolbar>\r\n      <mat-toolbar-row>\r\n        <button type=\"submit\" mat-raised-button class=\"button-maroon\" [disabled]=\"!eventForm.valid\" style=\"margin-right:15px;\">\r\n          Confirm\r\n        </button>\r\n        <button mat-raised-button type=\"button\" class=\"button-maroon\" (click)=\"groupSelect()\" *ngIf=\"role !== 'ROLE_USER'\" style=\"margin-right:15px;\">Select Groups</button>\r\n        <button\r\n          mat-raised-button\r\n          color=\"warn\"\r\n          (click)=\"onNoClick()\"\r\n          class=\"cancel-button\"\r\n        >\r\n          Cancel\r\n        </button>\r\n        <mat-checkbox formControlName=\"allDay\" (click)=\"allday()\" color=\"primary\" style=\"margin-left:15px;\"\r\n        >All Day</mat-checkbox>\r\n        <span class=\"example-spacer\"></span>\r\n      </mat-toolbar-row>\r\n    </mat-toolbar>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/calendar/create-event/edit-event/edit-event.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/calendar/create-event/edit-event/edit-event.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container\" fxLayoutAlign=\"center\">\r\n    <form\r\n    [formGroup]=\"eventForm\"\r\n    (ngSubmit)=\"onSubmit()\"\r\n    >\r\n      <mat-form-field class=\"cal-select\" required>\r\n        <mat-label>Select Calendar</mat-label>\r\n        <mat-select [disableOptionCentering]=\"true\" [(value)]=\"selectedCal\">\r\n          <mat-option *ngFor=\"let cal of calendars\" [value]=\"cal.id\" (click)=\"selectCalendar(cal.id)\">{{ cal.name }}</mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Event Title\" formControlName=\"title\" />\r\n      </mat-form-field><br>\r\n  \r\n      <mat-form-field style=\"width:60%;\">\r\n        <textarea\r\n          matInput\r\n          cdkTextareaAutosize\r\n          cdkAutosizeMinRows=\"2\"\r\n          cdkAutosizeMaxRows=\"5\"\r\n          placeholder=\"Event Description\"\r\n          cols=\"50\"\r\n          formControlName=\"description\"\r\n        ></textarea>\r\n      </mat-form-field><br>\r\n  \r\n      <mat-form-field>\r\n        <input\r\n          matInput\r\n          placeholder=\"Event Location\"\r\n          formControlName=\"location\"\r\n        />\r\n      </mat-form-field><br>\r\n  \r\n      <!-- <mat-form-field>\r\n        <input\r\n          matInput\r\n          placeholder=\"Recipient Email\"\r\n          formControlName=\"email\"\r\n        />\r\n        <mat-error *ngIf=\"email.invalid\">{{ getErrorMessage() }}</mat-error>\r\n      </mat-form-field><br> -->\r\n      <mat-form-field id=\"end-date\">\r\n        <input\r\n        matInput\r\n        placeholder=\"Start Date\"\r\n        formControlName=\"startDate\"\r\n        [matDatepicker]=\"startpicker\"\r\n        readonly>\r\n        <mat-datepicker-toggle matSuffix [for]=\"startpicker\"></mat-datepicker-toggle>\r\n        <mat-datepicker touchUi #startpicker></mat-datepicker>\r\n      </mat-form-field>\r\n      <mat-form-field *ngIf=\"!allDay\">\r\n        <mat-label>Start Time</mat-label>\r\n        <input\r\n        matInput\r\n        formControlName=\"startTime\"\r\n        aria-label=\"default time\"\r\n        [value]=\"event.start.toLocaleTimeString([], {hour: '2-digit',  minute:'2-digit'})\"\r\n        [ngxTimepicker]=\"starttime\"\r\n        readonly>\r\n        <ngx-material-timepicker #starttime [minutesGap]=\"5\" [appendToInput]=\"true\" [theme]=\"timeTheme\"></ngx-material-timepicker>\r\n      </mat-form-field><br>\r\n      <mat-form-field id=\"end-date\">\r\n        <input\r\n        matInput\r\n        placeholder=\"End Date\"\r\n        formControlName=\"endDate\"\r\n        [matDatepicker]=\"endpicker\"\r\n        readonly>\r\n        <mat-datepicker-toggle matSuffix [for]=\"endpicker\"></mat-datepicker-toggle>\r\n        <mat-datepicker touchUi #endpicker></mat-datepicker>\r\n      </mat-form-field>\r\n      <mat-form-field *ngIf=\"!allDay\">\r\n        <mat-label>End Time</mat-label>\r\n        <input\r\n        matInput\r\n        formControlName=\"endTime\"\r\n        aria-label=\"default time\"\r\n        [value]=\"event.end.toLocaleTimeString([], {hour: '2-digit',  minute:'2-digit'})\"\r\n        [ngxTimepicker]=\"endtime\"\r\n        readonly>\r\n        <ngx-material-timepicker #endtime [minutesGap]=\"5\" [appendToInput]=\"true\" [theme]=\"timeTheme\"></ngx-material-timepicker>\r\n      </mat-form-field><br>\r\n      <mat-form-field id=\"primary-color\">\r\n        <input\r\n        matInput\r\n        formControlName=\"primary\"\r\n        [style.background]=\"primaryColor\"\r\n        [value]=\"primaryColor\"\r\n        [style.color]=\"'white'\"\r\n        placeholder=\"Event Color\"\r\n        [cpOutputFormat]=\"'hex'\"\r\n        (colorPickerClose)=\"setPrimary(color)\"\r\n        [cpPosition]=\"'top-right'\"\r\n        [cpPresetColors]=\"['#5484ed','#a4bdfc','#46d6db','#7ae7bf','#51b749','#fbd75b','#ffb878','#ff887c','#dc2127','#dbadff','#585858']\"\r\n        [cpOKButton]=\"true\"\r\n        [cpColorMode] = \"'presets'\"\r\n        [cpFallbackColor]=\"primaryColor\"\r\n        [cpPresetLabel]=\"'Event Color'\"\r\n        [(colorPicker)]=\"color\"\r\n        readonly>\r\n      </mat-form-field>\r\n      <mat-form-field class=\"example-chip-list\">\r\n        <mat-chip-list #chipList aria-label=\"adding emails\">\r\n          <mat-chip\r\n            *ngFor=\"let email of emails\"\r\n            [selectable]=\"selectable\"\r\n            [removable]=\"removable\"\r\n            (removed)=\"remove(email)\"\r\n          >\r\n            {{ email }}\r\n            <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\r\n          </mat-chip>\r\n          <input\r\n          placeholder=\"Enter Emails\"\r\n          matInput\r\n          [formControl]=\"email\"\r\n          [matAutocomplete]=\"auto\"\r\n          [matChipInputFor]=\"chipList\"\r\n          [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\r\n          [matChipInputAddOnBlur]=\"addOnBlur\"\r\n          (matChipInputTokenEnd)=\"add($event)\"\r\n        />\r\n          </mat-chip-list>\r\n          <mat-autocomplete\r\n          #auto=\"matAutocomplete\"\r\n          (optionSelected)=\"selected($event)\"\r\n          >\r\n          <mat-option\r\n              *ngFor=\"let user of filteredUserList | async\"\r\n              [value]=\"user\"\r\n          >\r\n              {{ user }}\r\n          </mat-option>\r\n          </mat-autocomplete>\r\n          <mat-error *ngIf=\"!isEmailValid\">{{ errorMessage }}</mat-error>\r\n          <mat-autocomplete\r\n              #auto=\"matAutocomplete\"\r\n              (optionSelected)=\"selected($event)\"\r\n          >\r\n              <mat-option\r\n              *ngFor=\"let user of filteredUserList | async\"\r\n              [value]=\"user\"\r\n              >\r\n              {{ user }}\r\n              </mat-option>\r\n          </mat-autocomplete>\r\n        <mat-hint>Use commas or hit ENTER for multiple emails.</mat-hint>\r\n      </mat-form-field>\r\n      <mat-checkbox formControlName=\"allDay\" (click)=\"allday()\" color=\"primary\">All Day</mat-checkbox>\r\n  \r\n      <!-- <mat-toolbar>\r\n        <mat-toolbar-row>\r\n          <span class=\"example-spacer\"></span>\r\n          <button\r\n            type=\"button\"\r\n            class=\"primary\"\r\n            mat-raised-button\r\n            (click)=\"openDateRangeDialog()\"\r\n          >\r\n            Add date and time\r\n          </button>\r\n        </mat-toolbar-row>\r\n      </mat-toolbar>\r\n      <mat-divider></mat-divider> -->\r\n  \r\n      <mat-toolbar>\r\n        <mat-toolbar-row>\r\n          <!-- <button type=\"button\" mat-raised-button color=\"primary\">\r\n            Add Recipients\r\n          </button> -->\r\n          <button type=\"button\" mat-raised-button class=\"button-maroon\" (click)=\"groupSelect()\" *ngIf=\"role !== 'ROLE_USER'\">Select Groups</button>&nbsp;&nbsp;\r\n          <button type=\"submit\" mat-raised-button class=\"button-maroon\" [disabled]=\"!eventForm.valid\">\r\n            Confirm\r\n          </button>\r\n          <button mat-raised-button color=\"warn\" (click)=\"onNoClick()\" class=\"cancel-button\">Cancel</button>\r\n          \r\n          <span class=\"example-spacer\"></span>\r\n\r\n        </mat-toolbar-row>\r\n      </mat-toolbar>\r\n    </form>\r\n  \r\n  </div>\r\n  "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/calendar/event-detail/event-delete-confirm.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/calendar/event-detail/event-delete-confirm.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <h3 mat-dialog-content>Are you sure you want to delete this event? This can NOT be undone</h3>\r\n    <mat-toolbar>\r\n        <button mat-raised-button color=\"warn\" (click)=\"delete()\">\r\n            Delete\r\n        </button><span class=\"spacer\"></span>\r\n        <button mat-raised-button (click)=\"close()\" class=\"button-maroon\">\r\n            Cancel\r\n        </button>\r\n    </mat-toolbar>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/calendar/event-detail/event-detail.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/calendar/event-detail/event-detail.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class=\"top-detail-row\">\r\n    <mat-toolbar-row>\r\n        <h5>{{event.title}}</h5>\r\n        <span class=\"spacer\"></span>\r\n        <mat-form-field class=\"example-full-width\" *ngIf=\"viewAttendees\">\r\n            <input\r\n                type=\"text\"\r\n                class=\"search-bar\"\r\n                matInput\r\n                [(ngModel)]=\"searchText\"\r\n                placeholder=\"Search guests\"\r\n            />\r\n            <mat-icon matSuffix>search</mat-icon>\r\n        </mat-form-field>\r\n        <span class=\"spacer\"></span><mat-icon (click)=\"close()\" class=\"close-button\" matTooltip=\"Close\">clear</mat-icon>\r\n    </mat-toolbar-row>\r\n</mat-toolbar>\r\n\r\n<div mat-dialog-content class=\"content\">\r\n    <div class=\"event-wrap\" *ngIf=\"!viewAttendees\">\r\n        <small *ngIf=\"event.allDay\">* All Day</small>\r\n        <div *ngIf=\"!event.allDay\">\r\n            <p>{{ event.start.toLocaleString([], {month:'2-digit', day:'2-digit', year:'2-digit', hour: '2-digit',  minute:'2-digit'}) }} - \r\n            {{event.end.toLocaleString([], {month:'2-digit', day:'2-digit', year:'2-digit', hour: '2-digit',  minute:'2-digit'}) }}</p>\r\n        </div>\r\n        <div *ngIf=\"event.allDay && event.start !== newEnd && event.end !== null\">\r\n            <p>{{event.start.toLocaleDateString()}} - {{newEnd.toLocaleDateString()}}</p>\r\n        </div>\r\n        <div *ngIf=\"!event.end\">\r\n            <p>{{event.start.toLocaleDateString()}}</p>\r\n        </div>\r\n        <p *ngIf=\"event.extendedProps.location != ''\"><b>Location:</b> {{ event.extendedProps.location }}</p>\r\n        <p *ngIf=\"event.extendedProps.description != ''\"><b>Description:</b> {{ event.extendedProps.description }}</p>\r\n    </div>\r\n    <div *ngIf=\"viewAttendees\">\r\n        <p *ngIf=\"event.extendedProps.recipients.length === 0\">This event has no recipients.</p>\r\n        <div class=\"user-wrap\" *ngIf=\"viewAll\">\r\n            <mat-selection-list\r\n            #users\r\n            (selectionChange)=\"onSelectChange(users.selectedOptions.selected)\">\r\n                <mat-list-option *ngFor=\"let user of guests | filterMember: searchText\" [value]=\"user.email\">\r\n                    <mat-icon mat-list-icon>person_outline</mat-icon>\r\n                    <h4 mat-line>{{user.name}}</h4>\r\n                    <p mat-line>{{user.email}}</p>\r\n                </mat-list-option>\r\n            </mat-selection-list>\r\n        </div>\r\n        <div class=\"user-wrap\" *ngIf=\"viewConfirmed\">\r\n            <mat-selection-list\r\n            #confirmed\r\n            (selectionChange)=\"onSelectChange(confirmed.selectedOptions.selected)\"\r\n            >\r\n                <mat-list-option *ngFor=\"let user of event.extendedProps.recipients | filterMember: searchText\" [value]=\"user.email\">\r\n                    <mat-icon mat-list-icon>person_outline</mat-icon>\r\n                    <h4 mat-line>{{user.name}}</h4>\r\n                    <p mat-line>{{user.email}}</p>\r\n                </mat-list-option>\r\n            </mat-selection-list>\r\n        </div> \r\n        <div class=\"user-wrap\" *ngIf=\"viewPending\">\r\n            <mat-selection-list\r\n            #confirmed\r\n            (selectionChange)=\"onSelectChange(confirmed.selectedOptions.selected)\"\r\n            >\r\n                <mat-list-option *ngFor=\"let user of pending | filterMember: searchText\" [value]=\"user.email\">\r\n                    <mat-icon mat-list-icon>person_outline</mat-icon>\r\n                    <h4 mat-line>{{user.name}}</h4>\r\n                    <p mat-line>{{user.email}}</p>\r\n                </mat-list-option>\r\n            </mat-selection-list>\r\n        </div> \r\n    </div>\r\n    \r\n</div>\r\n\r\n<mat-toolbar class=\"bottom-row\">\r\n    <mat-toolbar-row>\r\n        <button mat-raised-button [matMenuTriggerFor]=\"menu\" class=\"button-maroon\"\r\n        *ngIf=\"!isAppt && (event.extendedProps.createdBy.email===username || invitees.includes(username))\">Options</button> \r\n        <mat-menu #menu class=\"options-button primary\">\r\n            <button mat-menu-item (click)=\"editEvent()\" *ngIf=\"event.extendedProps.createdBy.email === username\" class=\"option\">Edit Event</button>\r\n            <button mat-menu-item (click)=\"deleteEvent()\" *ngIf=\"event.extendedProps.createdBy.email === username\" class=\"option\">Delete</button>\r\n            <button mat-menu-item (click)=\"shareEvent()\" *ngIf=\"event.extendedProps.createdBy.email===username\" class=\"option\">Share</button>\r\n            <button mat-menu-item *ngIf=\"event.extendedProps.createdBy.email !== username\" class=\"option\" (click)=\"confirmAttendance()\">Confirm Attendance</button>\r\n            <button mat-menu-item *ngIf=\"event.extendedProps.createdBy.email === username && !viewAttendees\" class=\"option\" (click)=\"viewGuests()\">View Attendees</button>\r\n            <button mat-menu-item *ngIf=\"event.extendedProps.createdBy.email === username && viewAttendees\" class=\"option\" (click)=\"viewGuests()\">View Details</button>\r\n        </mat-menu>&nbsp;\r\n        <mat-chip-list *ngIf=\"event.extendedProps.createdBy.email === username && (viewAttendees)\">\r\n            <mat-chip (click)=\"switchToPending()\">Pending</mat-chip>\r\n            <mat-chip (click)=\"switchToConfirmed()\">All</mat-chip>\r\n            <mat-chip (click)=\"switchToAll()\">Going</mat-chip>\r\n        </mat-chip-list>&nbsp;\r\n        <button\r\n            mat-raised-button\r\n            class=\"button-maroon\"\r\n            (click)=\"messageSelectedRecipients()\"\r\n            matTooltip=\"click to message selected recipients\"\r\n            *ngIf=\"viewAttendees && selectedRecipients.length>0\"\r\n          >\r\n            <mat-icon mat-list-icon>email</mat-icon> &nbsp; Email Selected\r\n          </button>\r\n        <mat-hint *ngIf=\"isAppt\">Please see the appointments section for more information.</mat-hint>\r\n    </mat-toolbar-row>\r\n</mat-toolbar>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/calendar/event-detail/share-event.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/calendar/event-detail/share-event.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button mat-icon-button (click)=\"close()\" matTooltip=\"Cancel\"><mat-icon>clear</mat-icon></button>\r\n<form [formGroup]=\"shareForm\" (ngSubmit)=\"onSubmit()\">\r\n        <mat-form-field class=\"example-chip-list\" style=\"width:90%\">\r\n            <mat-chip-list #chipList aria-label=\"adding emails\">\r\n                <mat-chip\r\n                *ngFor=\"let email of emails\"\r\n                [selectable]=\"selectable\"\r\n                [removable]=\"removable\"\r\n                (removed)=\"remove(email)\"\r\n                >\r\n                {{ email }}\r\n                <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\r\n                </mat-chip>\r\n                <input\r\n                placeholder=\"Add Recipients\"\r\n                [matChipInputFor]=\"chipList\"\r\n                [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\r\n                [matChipInputAddOnBlur]=\"addOnBlur\"\r\n                (matChipInputTokenEnd)=\"add($event)\"\r\n                />\r\n            </mat-chip-list>\r\n        </mat-form-field>\r\n    <mat-toolbar>\r\n        <button\r\n        mat-raised-button\r\n        type=\"submit\"\r\n        class=\"button-maroon\">Share</button>&nbsp;&nbsp;\r\n        <button mat-raised-button type=\"button\" (click)=\"groupSelect()\" class=\"button-maroon\" *ngIf=\"role !== 'ROLE_USER'\">Select Groups</button>\r\n    </mat-toolbar>\r\n</form>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/calendar/share-calendar/share-calendar.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/calendar/share-calendar/share-calendar.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class=\"top-detail-row\">\r\n    <p>Share Calendar: {{data.name}}</p><span class=\"spacer\"></span><mat-icon (click)=\"close()\" class=\"close-button\" matTooltip=\"Close\">clear</mat-icon>\r\n</mat-toolbar>\r\n<div mat-dialog-content>\r\n    <form [formGroup]=\"shareForm\" (ngSubmit)=\"onSubmit()\">\r\n      <mat-form-field style=\"width:80%\">\r\n        <mat-chip-list #chipList aria-label=\"adding emails\">\r\n            <mat-chip\r\n              *ngFor=\"let email of emails\"\r\n              [selectable]=\"selectable\"\r\n              [removable]=\"removable\"\r\n              (removed)=\"remove(email)\"\r\n            >\r\n              <mat-icon mat-list-icon>person_outline</mat-icon>\r\n              {{ email }}\r\n              <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\r\n            </mat-chip>\r\n            <input\r\n        placeholder=\"Enter Emails\"\r\n        matInput\r\n        [formControl]=\"email\"\r\n        [matAutocomplete]=\"auto\"\r\n        [matChipInputFor]=\"chipList\"\r\n        [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\r\n        [matChipInputAddOnBlur]=\"addOnBlur\"\r\n        (matChipInputTokenEnd)=\"add($event)\"\r\n      />\r\n        </mat-chip-list>\r\n        <mat-autocomplete\r\n        #auto=\"matAutocomplete\"\r\n        (optionSelected)=\"selected($event)\"\r\n        >\r\n        <mat-option\r\n            *ngFor=\"let user of filteredUserList | async\"\r\n            [value]=\"user\"\r\n        >\r\n            {{ user }}\r\n        </mat-option>\r\n        </mat-autocomplete>\r\n        <mat-error *ngIf=\"!isEmailValid\">{{ errorMessage }}</mat-error>\r\n        <mat-autocomplete\r\n            #auto=\"matAutocomplete\"\r\n            (optionSelected)=\"selected($event)\"\r\n        >\r\n            <mat-option\r\n            *ngFor=\"let user of filteredUserList | async\"\r\n            [value]=\"user\"\r\n            >\r\n            {{ user }}\r\n            </mat-option>\r\n        </mat-autocomplete>\r\n          <mat-error *ngIf=\"!isEmailValid\">{{ errorMessage }}</mat-error>\r\n          <mat-hint>Use commas or hit ENTER for multiple emails.</mat-hint>\r\n      </mat-form-field>\r\n        <mat-toolbar>\r\n          <mat-toolbar-row>\r\n            <button\r\n            mat-raised-button\r\n            type=\"submit\"\r\n            class=\"button-maroon\">Share</button>&nbsp;&nbsp;\r\n            <button mat-raised-button type=\"button\" (click)=\"groupSelect()\" class=\"button-maroon\" *ngIf=\"role !== 'ROLE_USER'\">Select Groups</button>\r\n          </mat-toolbar-row>\r\n            \r\n        </mat-toolbar>\r\n    </form>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/dashboard/dashboard.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/dashboard/dashboard.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"carousel\">\r\n  <app-broadcast></app-broadcast>\r\n</div>\r\n<mat-divider></mat-divider>\r\n<div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"heading\">\r\n  <h3>Welcome, {{ name }}. Here are your upcoming events.</h3>\r\n</div>\r\n<mat-list class=\"example-card-width\">\r\n  <h3 mat-subheader>Upcoming Events</h3>\r\n  <mat-list-item\r\n    *ngFor=\"let event of events | paginate: { itemsPerPage: 4, currentPage: p }\"\r\n  >\r\n    <mat-icon mat-list-icon>event</mat-icon>\r\n    <h4 mat-line>{{ event.title }}</h4>\r\n    <p mat-line>{{ event.description }}</p>\r\n    <p mat-line>{{ event.start }} - {{ event.end }}</p>\r\n    <p mat-line>\r\n      <mat-icon mat-list-icon style=\"font-size: 14px; width: 15px;\"\r\n        >room</mat-icon\r\n      >{{ event.location }}\r\n    </p>\r\n  </mat-list-item>\r\n  <mat-divider></mat-divider>\r\n</mat-list>\r\n<div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"pagination-center\">\r\n  <div>\r\n    <pagination-controls\r\n      autoHide=\"true\"\r\n      (pageChange)=\"p = $event\"\r\n    ></pagination-controls>\r\n  </div>\r\n</div>\r\n<!-- <div class=\"accordion-style\">\r\n  <mat-accordion>\r\n    <mat-expansion-panel>\r\n      <mat-expansion-panel-header>\r\n        <mat-panel-title> Welcome, {{ name }}! </mat-panel-title>\r\n        <mat-panel-description>\r\n          All events and Appointments\r\n        </mat-panel-description>\r\n      </mat-expansion-panel-header>\r\n      <mat-list class=\"example-card-width\">\r\n        <h3 mat-subheader>Folders</h3>\r\n        <mat-list-item *ngFor=\"let folder of folders\">\r\n          <mat-icon mat-list-icon>folder</mat-icon>\r\n          <h4 mat-line>{{ folder.name }}</h4>\r\n          <p mat-line>{{ folder.updated | date }}</p>\r\n        </mat-list-item>\r\n        <mat-divider></mat-divider>\r\n        <h3 mat-subheader>Notes</h3>\r\n        <mat-list-item *ngFor=\"let note of notes\">\r\n          <mat-icon mat-list-icon>note</mat-icon>\r\n          <h4 mat-line>{{ note.name }}</h4>\r\n          <p mat-line>{{ note.updated | date }}</p>\r\n        </mat-list-item>\r\n      </mat-list>\r\n    </mat-expansion-panel>\r\n  </mat-accordion>\r\n</div> -->\r\n<!-- <div class=\"wrapper\">\r\n    <h3 class=\"heading\">\r\n      Welcome, {{ name }}. Here are your Events and Appointments for today:\r\n    </h3>\r\n    <full-calendar\r\n      id=\"calendar\"\r\n      defaultView=\"timeGridDay\"\r\n      [plugins]=\"calendarPlugins\"\r\n      [events]=\"events\"\r\n      [nextDayThreshold]=\"'00:00:00'\"\r\n      [themeSystem]=\"'standard'\"\r\n      [eventLimit]=\"false\"\r\n      [height]=\"'parent'\"\r\n      [header]=\"{\r\n        left: none,\r\n        center: 'title',\r\n        right: none\r\n      }\"\r\n    ></full-calendar>\r\n  </div>\r\n  <div class=\"space\"></div> -->\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/group/create-group/create-group.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/group/create-group/create-group.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"margin-top: 10px\">\r\n  <form\r\n    class=\"example-container example-container-width \"\r\n    [formGroup]=\"groupForm\"\r\n    (ngSubmit)=\"onSubmit()\"\r\n  >\r\n    <mat-form-field\r\n      *ngIf=\"isCourseGroup\"\r\n      style=\"cursor: pointer;\"\r\n      class=\"view-less-width\"\r\n    >\r\n      <mat-label>Group Type</mat-label>\r\n      <mat-select formControlName=\"groupType\">\r\n        <mat-option\r\n          *ngFor=\"let grpType of groupTypes\"\r\n          [value]=\"grpType\"\r\n          disabled\r\n        >\r\n          {{ grpType }}\r\n        </mat-option>\r\n      </mat-select>\r\n      <mat-error *ngIf=\"groupForm.controls['groupType'].hasError('required')\"\r\n        >Please choose a group type</mat-error\r\n      >\r\n    </mat-form-field>\r\n\r\n    <mat-form-field\r\n      *ngIf=\"isCourseGroup\"\r\n      style=\"cursor: pointer;\"\r\n      class=\"view-more-width\"\r\n    >\r\n      <mat-label>Select Major</mat-label>\r\n      <mat-select\r\n        formControlName=\"majorControl\"\r\n        (selectionChange)=\"onMajorChanged($event)\"\r\n      >\r\n        <mat-option>--</mat-option>\r\n        <mat-option *ngFor=\"let major of allMajors\" [value]=\"major.name\">\r\n          {{ major.name }}\r\n        </mat-option>\r\n      </mat-select>\r\n      <mat-error *ngIf=\"groupForm.controls['majorControl'].hasError('required')\"\r\n        >Please choose a Major</mat-error\r\n      >\r\n    </mat-form-field>\r\n    <mat-form-field\r\n      *ngIf=\"isCourseGroup\"\r\n      style=\"cursor: pointer;\"\r\n      class=\"view-more-width\"\r\n    >\r\n      <mat-label>Title</mat-label>\r\n      <mat-select\r\n        formControlName=\"title\"\r\n        (selectionChange)=\"onTitleChanged($event)\"\r\n      >\r\n        <mat-option>--</mat-option>\r\n        <mat-option *ngFor=\"let course of courseDetails\" [value]=\"course.title\">\r\n          {{ course.title }}\r\n        </mat-option>\r\n      </mat-select>\r\n      <mat-error *ngIf=\"groupForm.controls['title'].hasError('required')\"\r\n        >Please choose a Major</mat-error\r\n      >\r\n    </mat-form-field>\r\n\r\n    <mat-form-field\r\n      *ngIf=\"isCourseGroup\"\r\n      style=\"cursor: pointer;\"\r\n      class=\"view-more-width\"\r\n    >\r\n      <mat-label>Description</mat-label>\r\n      <mat-select formControlName=\"description\">\r\n        <mat-option>--</mat-option>\r\n        <mat-option\r\n          *ngFor=\"let desc of courseDetails\"\r\n          [value]=\"desc.description\"\r\n          disabled\r\n        >\r\n          {{ desc.description }}\r\n        </mat-option>\r\n      </mat-select>\r\n      <mat-error *ngIf=\"groupForm.controls['description'].hasError('required')\"\r\n        >Please choose a Major</mat-error\r\n      >\r\n    </mat-form-field>\r\n\r\n    <mat-form-field *ngIf=\"!isCourseGroup\" class=\"view-less-width\">\r\n      <mat-label>Group Type</mat-label>\r\n      <mat-select formControlName=\"groupType\">\r\n        <mat-option\r\n          *ngFor=\"let grpType of groupTypes\"\r\n          [value]=\"grpType\"\r\n          disabled\r\n        >\r\n          {{ grpType }}\r\n        </mat-option>\r\n      </mat-select>\r\n      <mat-error\r\n        *ngIf=\"\r\n          groupForm.controls['groupType'].hasError('required') && !editMode\r\n        \"\r\n        >Please choose a group type</mat-error\r\n      >\r\n    </mat-form-field>\r\n\r\n    <mat-form-field *ngIf=\"!isCourseGroup\" class=\"view-more-width\">\r\n      <input matInput placeholder=\"Group Title\" formControlName=\"title\" />\r\n      <mat-error *ngIf=\"groupForm.controls['title'].hasError('required')\"\r\n        >Please enter group title</mat-error\r\n      >\r\n    </mat-form-field>\r\n\r\n    <mat-form-field *ngIf=\"!isCourseGroup\" class=\"view-more-width\">\r\n      <textarea\r\n        matInput\r\n        placeholder=\"Group Description\"\r\n        formControlName=\"description\"\r\n      ></textarea>\r\n      <mat-error *ngIf=\"groupForm.controls['description'].hasError('required')\"\r\n        >Please enter group description</mat-error\r\n      >\r\n    </mat-form-field>\r\n\r\n    <mat-form-field class=\"view-more-width\" *ngIf=\"!editMode\">\r\n      <mat-label>Group member emails</mat-label>\r\n      <mat-select [(value)]=\"selectedOption\">\r\n        <mat-option value=\"email\">Enter Emails</mat-option>\r\n        <mat-option value=\"file\">Upload File</mat-option>\r\n      </mat-select>\r\n      <mat-hint>select to enter emails manually or by uploading file</mat-hint>\r\n    </mat-form-field>\r\n    <mat-form-field\r\n      *ngIf=\"selectedOption === 'email'\"\r\n      class=\"example-chip-list\"\r\n      class=\"view-more-width\"\r\n      style=\" cursor: pointer;\"\r\n    >\r\n      <mat-chip-list #chipList aria-label=\"adding emails\">\r\n        <mat-chip\r\n          *ngFor=\"let email of groupMembersEmails\"\r\n          [selectable]=\"selectable\"\r\n          [removable]=\"removable\"\r\n          (removed)=\"remove(email)\"\r\n        >\r\n          <mat-icon mat-list-icon>person_outline</mat-icon> {{ email }}\r\n          <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\r\n        </mat-chip>\r\n        <input\r\n          placeholder=\"Enter Emails\"\r\n          #userInput\r\n          [formControl]=\"email\"\r\n          [matAutocomplete]=\"auto\"\r\n          [matChipInputFor]=\"chipList\"\r\n          [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\r\n          [matChipInputAddOnBlur]=\"addOnBlur\"\r\n          (matChipInputTokenEnd)=\"add($event)\"\r\n        />\r\n      </mat-chip-list>\r\n      <mat-autocomplete\r\n        #auto=\"matAutocomplete\"\r\n        (optionSelected)=\"selected($event)\"\r\n      >\r\n        <mat-option\r\n          *ngFor=\"let user of filteredUserList | async\"\r\n          [value]=\"user\"\r\n        >\r\n          {{ user }}\r\n        </mat-option>\r\n      </mat-autocomplete>\r\n      <mat-error *ngIf=\"!isEmailValid\">{{ errorMessage }}</mat-error>\r\n\r\n      <mat-hint>Use comma or hit ENTER to enter multiple emails!</mat-hint>\r\n    </mat-form-field>\r\n    <mat-form-field\r\n      style=\"cursor: pointer;\"\r\n      class=\"view-more-width\"\r\n      *ngIf=\"!editMode && selectedOption === 'file'\"\r\n    >\r\n      <ngx-mat-file-input\r\n        #removableInput\r\n        formControlName=\"uploadFile\"\r\n        placeholder=\"upload an excel file\"\r\n        accept=\".xlsx,.csv\"\r\n        (change)=\"upload($event)\"\r\n      ></ngx-mat-file-input>\r\n      <button\r\n        mat-icon-button\r\n        matSuffix\r\n        *ngIf=\"removableInput.empty\"\r\n        (click)=\"removableInput.clear($event)\"\r\n      >\r\n        <mat-icon>folder</mat-icon>\r\n      </button>\r\n      <mat-error *ngIf=\"groupForm.get('uploadFile').hasError('required')\">\r\n        Please select a file\r\n      </mat-error>\r\n\r\n      <button\r\n        mat-icon-button\r\n        matSuffix\r\n        *ngIf=\"!removableInput.empty\"\r\n        (click)=\"removableInput.clear($event)\"\r\n      >\r\n        <mat-icon>delete</mat-icon>\r\n      </button>\r\n    </mat-form-field>\r\n    <mat-error\r\n      *ngIf=\"isInvalid && !groupForm.get('uploadFile').hasError('required')\"\r\n    >\r\n      {{ invalidExtension }}\r\n    </mat-error>\r\n    <mat-form-field style=\"cursor: pointer;\" class=\"view-less-width\">\r\n      <mat-label>Semester Term</mat-label>\r\n      <mat-select formControlName=\"semesterTerm\">\r\n        <mat-option>--</mat-option>\r\n        <mat-option *ngFor=\"let term of semesterTerm\" [value]=\"term\">\r\n          {{ term }}\r\n        </mat-option>\r\n      </mat-select>\r\n      <mat-error *ngIf=\"groupForm.controls['semesterTerm'].hasError('required')\"\r\n        >Please choose a Semester Term</mat-error\r\n      >\r\n    </mat-form-field>\r\n\r\n    <mat-form-field style=\"cursor: pointer;\" class=\"view-less-width\">\r\n      <mat-label>Semester Year</mat-label>\r\n      <mat-select formControlName=\"semesterYear\">\r\n        <mat-option>--</mat-option>\r\n        <mat-option *ngFor=\"let year of semesterYear\" [value]=\"year\">\r\n          {{ year }}\r\n        </mat-option>\r\n      </mat-select>\r\n      <mat-error *ngIf=\"groupForm.controls['semesterYear'].hasError('required')\"\r\n        >Please choose a Semester Year</mat-error\r\n      >\r\n    </mat-form-field>\r\n    <mat-toolbar>\r\n      <mat-toolbar-row>\r\n        <span class=\"example-spacer\"></span>\r\n        <button mat-raised-button color=\"warn\" (click)=\"cancel()\">\r\n          Cancel\r\n        </button>\r\n        &nbsp; &nbsp;\r\n        <button type=\"submit\" mat-raised-button class=\"button-maroon\">\r\n          {{ editMode ? \"Update Group\" : \"Create Group\" }}\r\n        </button>\r\n      </mat-toolbar-row>\r\n    </mat-toolbar>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/group/group-detail/group-detail.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/group/group-detail/group-detail.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-detail\">\r\n  <div\r\n    class=\"container\"\r\n    fxLayout=\"row\"\r\n    fxLayout.xs=\"column\"\r\n    fxLayoutAlign=\"flex-end\"\r\n    fxLayoutGap.xs=\"0\"\r\n  >\r\n    <span fxFlex=\"grow\"></span>\r\n    <div fxFlex>\r\n      <button\r\n        mat-raised-button\r\n        class=\"button-maroon\"\r\n        *ngIf=\"groupType === 'custom'\"\r\n        (click)=\"shareGroup()\"\r\n        matTooltip=\"Share group to other admin or faculty\"\r\n      >\r\n        <mat-icon mat-list-icon>share</mat-icon> &nbsp;Share group\r\n      </button>\r\n    </div>\r\n    &nbsp;\r\n    <div fxFlex>\r\n      <button\r\n        mat-raised-button\r\n        class=\"button-maroon\"\r\n        *ngIf=\"selectedGroupMembers.length > 0\"\r\n        (click)=\"emailSelectedMembers()\"\r\n        matTooltip=\"Email selected members\"\r\n      >\r\n        <mat-icon mat-list-icon>email</mat-icon> &nbsp; Email Selected members\r\n      </button>\r\n    </div>\r\n    &nbsp;\r\n    <div fxFlex>\r\n      <button\r\n        mat-raised-button\r\n        class=\"button-maroon\"\r\n        (click)=\"messageGroup()\"\r\n        matTooltip=\"Email this group\"\r\n      >\r\n        <mat-icon mat-list-icon>email</mat-icon> &nbsp; Email group\r\n      </button>\r\n    </div>\r\n  </div>\r\n\r\n  <mat-card class=\"primary\">\r\n    <mat-card-header>\r\n      <!-- <div mat-card-avatar class=\"example-header-image\"></div> -->\r\n      <mat-card-title>{{ groupName }}</mat-card-title>\r\n      <mat-card-subtitle>{{ groupDesc }}</mat-card-subtitle>\r\n    </mat-card-header>\r\n    <!-- <h5>{{ groupName }}</h5>\r\n    <p>{{ groupDesc }}</p> -->\r\n\r\n    <mat-list>\r\n      <mat-toolbar>\r\n        <mat-toolbar-row>\r\n          <span\r\n            ><h3 mat-subheader>{{ numOfmembers }} &nbsp; members</h3></span\r\n          >\r\n          <span class=\"example-spacer\"></span>\r\n          <mat-form-field class=\"example-full-width\">\r\n            <input\r\n              type=\"text\"\r\n              matInput\r\n              [(ngModel)]=\"searchText\"\r\n              placeholder=\"Search members\"\r\n            />\r\n            <mat-icon matSuffix>search</mat-icon>\r\n          </mat-form-field>\r\n        </mat-toolbar-row>\r\n      </mat-toolbar>\r\n      <mat-selection-list\r\n        #users\r\n        (selectionChange)=\"onSelectChange(users.selectedOptions.selected)\"\r\n      >\r\n        <mat-list-option\r\n          *ngFor=\"let email of groupemails | filterMember: searchText\"\r\n          [value]=\"email.email\"\r\n        >\r\n          <mat-icon mat-list-icon>person_outline</mat-icon>\r\n          <p mat-line>{{ email.name }}</p>\r\n          <h4 mat-line>{{ email.email }}</h4>\r\n        </mat-list-option>\r\n      </mat-selection-list>\r\n\r\n      <!-- <mat-list-item\r\n        *ngFor=\"let email of groupemails | filterMember: searchText\"\r\n      >\r\n        <mat-icon mat-list-icon>person_outline</mat-icon>\r\n        <p mat-line>{{ email.name }}</p>\r\n        <h4 mat-line>{{ email.email }}</h4>\r\n      </mat-list-item> -->\r\n    </mat-list>\r\n\r\n    <button\r\n      mat-raised-button\r\n      class=\"primary\"\r\n      [matMenuTriggerFor]=\"manage\"\r\n      matTooltip=\"click to delete or edit group\"\r\n      style=\"margin-left: 10px;\"\r\n    >\r\n      Manage\r\n      <mat-icon>expand_more </mat-icon>\r\n    </button>\r\n    <mat-menu #manage=\"matMenu\">\r\n      <button mat-menu-item (click)=\"editGroup()\">\r\n        <a style=\"cursor: pointer;\"><mat-icon>edit</mat-icon>Edit</a>\r\n      </button>\r\n\r\n      <button mat-menu-item (click)=\"deleteGroup(id)\">\r\n        <a style=\"cursor: pointer;\"><mat-icon>delete</mat-icon>Delete</a>\r\n      </button>\r\n    </mat-menu>\r\n  </mat-card>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/group/group-detail/share-group-dialog.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/group/group-detail/share-group-dialog.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div mat-dialog-content>\r\n  <div>\r\n    <!-- <mat-form-field class=\"example-chip-list\" [formControl]=\"email\"> -->\r\n    <mat-form-field class=\"example-chip-list\" style=\"width: 100%;\">\r\n      <mat-chip-list #chipList aria-label=\"adding emails\">\r\n        <mat-chip\r\n          *ngFor=\"let email of emails\"\r\n          [selectable]=\"selectable\"\r\n          [removable]=\"removable\"\r\n          (removed)=\"remove(email)\"\r\n        >\r\n          <mat-icon mat-list-icon>person_outline</mat-icon>{{ email }}\r\n          <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\r\n        </mat-chip>\r\n        <input\r\n          placeholder=\"Enter Emails\"\r\n          [matChipInputFor]=\"chipList\"\r\n          [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\r\n          [matChipInputAddOnBlur]=\"addOnBlur\"\r\n          (matChipInputTokenEnd)=\"add($event)\"\r\n        />\r\n      </mat-chip-list>\r\n      <mat-hint>Use comma or hit ENTER to enter multiple emails!</mat-hint>\r\n      <!-- <mat-error *ngIf=\"email.invalid\">{{ getErrorMessage() }}</mat-error> -->\r\n    </mat-form-field>\r\n  </div>\r\n</div>\r\n<div mat-dialog-actions>\r\n  <button type=\"button\" mat-raised-button (click)=\"onNoClick()\" color=\"warn\">\r\n    Cancel\r\n  </button>\r\n\r\n  <button\r\n    mat-button\r\n    class=\"button-maroon\"\r\n    (click)=\"saveDialogData()\"\r\n    cdkFocusInitial\r\n  >\r\n    Ok\r\n  </button>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/group/group-edit/group-edit.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/group/group-edit/group-edit.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"groupForm\" (ngSubmit)=\"onSubmit()\" class=\"example-container\">\n    <mat-form-field>\n        <mat-label>Group Name</mat-label>\n        <input matInput [value]=\"group.name\" [readonly]=\"group.type==='Course'\">\n    </mat-form-field><br>\n    <mat-form-field>\n        <mat-label>Description</mat-label>\n        <textarea matInput [value]=\"group.description\" [readonly]=\"group.type==='Course'\"></textarea>\n    </mat-form-field><br>\n    <mat-form-field class=\"example-chip-list\">\n        <mat-chip-list #chipList aria-label=\"adding emails\">\n            <mat-chip\n            *ngFor=\"let email of emails\"\n            [selectable]=\"selectable\"\n            [removable]=\"removable\"\n            (removed)=\"remove(email)\"\n            >\n            {{ email }}\n            <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\n            </mat-chip>\n            <input\n            placeholder=\"Enter Emails\"\n            [matChipInputFor]=\"chipList\"\n            [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\n            [matChipInputAddOnBlur]=\"addOnBlur\"\n            (matChipInputTokenEnd)=\"add($event)\"\n            />\n        </mat-chip-list>\n        <mat-hint>Use comma or hit ENTER to enter multiple emails!</mat-hint>\n    </mat-form-field> <br> \n    <mat-form-field>\n        <mat-label>Semester Term</mat-label>\n        <mat-select formControlName=\"semesterTerm\" [(value)]=\"group.semesterTerm\">\n            <mat-option>--</mat-option>\n            <mat-option *ngFor=\"let term of semesterTerm\" [value]=\"term\">{{term}}</mat-option>\n        </mat-select>\n    </mat-form-field><br>\n    <mat-form-field>\n        <mat-label>Semester Year</mat-label>\n        <mat-select formControlName=\"semesterYear\" [(value)]=\"group.semesterYear\">\n            <mat-option>--</mat-option>\n            <mat-option\n            *ngFor=\"let year of semesterYear\" [value]=\"year\">{{year}}</mat-option>\n        </mat-select>\n    </mat-form-field>\n    <mat-toolbar>\n        <mat-toolbar-row>\n            <span class=\"spacer\"></span>\n            <button mat-raised-button color=\"warn\" (click)=\"cancel()\">Cancel</button>\n            &nbsp;&nbsp;\n            <button type=\"submit\" mat-raised-button class=\"primary\">Update</button>\n        </mat-toolbar-row>\n    </mat-toolbar>\n</form>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/group/group-item/group-item.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/group/group-item/group-item.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-list\r\n  class=\"example-card-width\"\r\n  (click)=\"showDetails(id)\"\r\n  style=\"cursor: pointer;\"\r\n>\r\n  <mat-list-item>\r\n    <mat-icon mat-list-icon>group</mat-icon>\r\n    <h5 mat-line>\r\n      <strong>{{ eachGroup.name }}</strong>\r\n    </h5>\r\n    <p mat-line>{{ eachGroup.description }}</p>\r\n    <p mat-line>{{ semester }}- {{ semesterYear }}</p>\r\n  </mat-list-item>\r\n</mat-list>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/group/group-list/group-list.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/group/group-list/group-list.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div style=\" margin: 10px;\">\r\n  <button\r\n    mat-stroked-button\r\n    class=\"primary\"\r\n    [matMenuTriggerFor]=\"createGroup\"\r\n    aria-label=\"Example icon-button with a menu\"\r\n    matTooltip=\"create course or custom group\"\r\n  >\r\n    Create group<mat-icon>expand_more </mat-icon>\r\n  </button>\r\n\r\n  <mat-menu #createGroup=\"matMenu\">\r\n    <button mat-menu-item (click)=\"createCourseGroup()\">\r\n      <mat-icon>school</mat-icon>\r\n\r\n      <span>Course Group</span>\r\n    </button>\r\n    <button mat-menu-item (click)=\"createCustomGroup()\">\r\n      <mat-icon>build </mat-icon>\r\n      <span>Custom Group</span>\r\n    </button>\r\n  </mat-menu>\r\n</div> -->\r\n\r\n<div *ngIf=\"!isGroupEmpty; else elseBlock\">\r\n  <mat-form-field style=\" margin-left: 10px; padding: 10px;\">\r\n    <input\r\n      type=\"text\"\r\n      matInput\r\n      [(ngModel)]=\"searchText\"\r\n      placeholder=\"Search group\"\r\n    />\r\n    <mat-icon matSuffix>search</mat-icon>\r\n    <mat-hint>Search by group name or description</mat-hint>\r\n  </mat-form-field>\r\n\r\n  <app-group-item\r\n    *ngFor=\"\r\n      let g of group\r\n        | groupFilter: searchText\r\n        | paginate: { itemsPerPage: 5, currentPage: p };\r\n      let i = index\r\n    \"\r\n    [eachGroup]=\"g\"\r\n    [id]=\"g.id\"\r\n    [semester]=\"g.semesterTerm\"\r\n    [semesterYear]=\"g.semesterYear\"\r\n  >\r\n  </app-group-item>\r\n  <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"pagination-center\">\r\n    <div>\r\n      <pagination-controls\r\n        autoHide=\"true\"\r\n        (pageChange)=\"p = $event\"\r\n      ></pagination-controls>\r\n    </div>\r\n  </div>\r\n</div>\r\n<ng-template #elseBlock>\r\n  <div style=\" margin: 10px;\">\r\n    <strong>You have not created any groups yet.</strong>\r\n  </div>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/group/group-start/group-start.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/group/group-start/group-start.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-start\" *ngIf=\"isGroupEmpty\">\r\n  <h3>Please select any group or create new group!</h3>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/group/group/group.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/group/group/group.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\" margin: 10px;\">\r\n  <button\r\n    mat-stroked-button\r\n    class=\"primary\"\r\n    [matMenuTriggerFor]=\"createGroup\"\r\n    aria-label=\"Example icon-button with a menu\"\r\n    matTooltip=\"create course or custom group\"\r\n  >\r\n    Create group<mat-icon>expand_more </mat-icon>\r\n  </button>\r\n\r\n  <mat-menu #createGroup=\"matMenu\">\r\n    <button mat-menu-item (click)=\"createCourseGroup()\">\r\n      <mat-icon>school</mat-icon>\r\n\r\n      <span>Course Group</span>\r\n    </button>\r\n    <button mat-menu-item (click)=\"createCustomGroup()\">\r\n      <mat-icon>build </mat-icon>\r\n      <span>Custom Group</span>\r\n    </button>\r\n  </mat-menu>\r\n  &nbsp;\r\n  <!-- <button\r\n    mat-stroked-button\r\n    class=\"button-maroon\"\r\n    (click)=\"navigateToYourGroup()\"\r\n    aria-label=\"Example icon-button with a menu\"\r\n    matTooltip=\"check your group\"\r\n  >\r\n    <mat-icon mat-list-icon>group</mat-icon> Your groups\r\n  </button> -->\r\n</div>\r\n\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/group/message-group/message-group.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/group/message-group/message-group.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\r\n  <mat-toolbar-row>\r\n    <p>Message</p>\r\n    <span class=\"spacer\"></span>\r\n    <mat-icon (click)=\"cancel()\" style=\"cursor:pointer\">clear</mat-icon>\r\n  </mat-toolbar-row>\r\n</mat-toolbar>\r\n<form [formGroup]=\"messageForm\" (ngSubmit)=\"onSubmit()\">\r\n  <mat-form-field>\r\n    <mat-label>Message Subject</mat-label>\r\n    <input matInput formControlName=\"title\" />\r\n  </mat-form-field>\r\n  <mat-form-field style=\"width:100%\">\r\n    <mat-label>Message Content</mat-label>\r\n    <textarea matInput formControlName=\"message\"></textarea>\r\n  </mat-form-field>\r\n  <mat-toolbar>\r\n    <mat-toolbar-row>\r\n      <button mat-raised-button type=\"button\" (click)=\"cancel()\" color=\"warn\">\r\n        Cancel</button\r\n      >&nbsp;\r\n      <button mat-raised-button type=\"submit\" class=\"button-maroon\">\r\n        Send\r\n      </button>\r\n    </mat-toolbar-row>\r\n  </mat-toolbar>\r\n</form>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/group/your-group/your-group.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/group/your-group/your-group.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\r\n  class=\"container\"\r\n  fxLayout\r\n  fxLayout.xs=\"column\"\r\n  fxLayoutAlign=\"flex-start\"\r\n  fxLayoutGap=\"10px\"\r\n  fxLayoutGap.xs=\"0\"\r\n>\r\n  <div fxFlex=\"30%\">\r\n    <app-group-list></app-group-list>\r\n  </div>\r\n  <div fxFlex=\"65%\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/shared/group-selection.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/shared/group-selection.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p><strong>Select group</strong></p>\r\n<mat-form-field style=\" margin-left: 10px; padding: 10px;\">\r\n  <input\r\n    type=\"text\"\r\n    matInput\r\n    [(ngModel)]=\"searchText\"\r\n    placeholder=\"Search group\"\r\n  />\r\n  <mat-icon matSuffix>search</mat-icon>\r\n  <mat-hint>Search by group name or description</mat-hint>\r\n</mat-form-field>\r\n<div class=\"group-select-wrap example-card\">\r\n  <div *ngIf=\"groups.length > 0; else elseBlock\">\r\n    <mat-selection-list #users>\r\n      <mat-list-option\r\n        *ngFor=\"let group of groups | groupFilter: searchText\"\r\n        (click)=\"addGroup(group.id)\"\r\n        [value]=\"group.name\"\r\n      >\r\n        <mat-icon mat-list-icon>group</mat-icon>\r\n        <p mat-line><strong>{{ group.name }}</strong></p>\r\n        <h4 mat-line>{{ group.semesterTerm }}-{{ group.semesterYear }}</h4>\r\n      </mat-list-option>\r\n    </mat-selection-list>\r\n  </div>\r\n</div>\r\n<mat-toolbar>\r\n  <mat-toolbar-row>\r\n    <span class=\"example-spacer\"></span>\r\n    <button (click)=\"close()\" mat-raised-button class=\"button-maroon\" type=\"button\">\r\n      OK\r\n    </button>&nbsp;&nbsp;\r\n    <button mat-raised-button color=\"warn\" type=\"button\" (click)=\"cancel()\">Cancel</button>\r\n    <!-- <mat-icon (click)=\"close()\" style=\"cursor:pointer\" aria-hidden=\"false\"\r\n      >clear</mat-icon\r\n    > -->\r\n  </mat-toolbar-row>\r\n</mat-toolbar>\r\n<ng-template #elseBlock>\r\n  <p>You have no group yet!</p>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/update-password/update-password.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/update-password/update-password.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <mat-card class=\"example-card\">\r\n    <mat-card-content>\r\n      <h3>Change password</h3>\r\n      <form\r\n        class=\"example-form\"\r\n        [formGroup]=\"updatePasswordForm\"\r\n        (ngSubmit)=\"onSubmit()\"\r\n      >\r\n        <mat-form-field class=\"example-full-width\">\r\n          <input\r\n            matInput\r\n            placeholder=\"Your New password\"\r\n            formControlName=\"newPassword\"\r\n            type=\"password\"\r\n          />\r\n          <mat-error\r\n            *ngIf=\"\r\n              updatePasswordForm.controls['newPassword'].hasError('required')\r\n            \"\r\n          >\r\n            Please enter a new password\r\n          </mat-error>\r\n        </mat-form-field>\r\n\r\n        <mat-form-field class=\"example-full-width\">\r\n          <input\r\n            matInput\r\n            placeholder=\"Confirm new password\"\r\n            formControlName=\"confirmNewPassword\"\r\n            type=\"password\"\r\n          />\r\n\r\n          <mat-error\r\n            *ngIf=\"\r\n              updatePasswordForm.controls['confirmNewPassword'].hasError(\r\n                'required'\r\n              )\r\n            \"\r\n          >\r\n            Please confirm your new password\r\n          </mat-error>\r\n        </mat-form-field>\r\n\r\n        <div style=\"padding-top: 5px\">\r\n          <button mat-raised-button type=\"submit\" class=\"primary\">\r\n            Change password\r\n          </button>\r\n        </div>\r\n      </form>\r\n    </mat-card-content>\r\n  </mat-card>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/vertical-navigation/user-manual/admin/admin.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/vertical-navigation/user-manual/admin/admin.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h2 class=\"heading\">Site Administration</h2>\n    <p >The administration section of this website allows you to register new users (from a file or individually), update the permissions of users, upload courses\n        to be used in Course Group Creation, and delete users.\n    </p>\n    <h3 class=\"heading\">Registering Users</h3>\n    <h5 class=\"subheading\">Registering from a file</h5>\n    <p>Users can be registered either from a file, for multiple users, or directly through a form, for individual users. When registering users\n        from a file, it is important to make sure the file is in the correct format. The types of files this site is capable of registering users from\n        are the same as the ones that can be downloaded from a Moodle course (see figure 1). Both .csv and .xlsx file types are acceptable. \n    </p>\n    <img src=\"..\\..\\..\\..\\..\\assets\\images\\example-file-format.PNG\" alt=\"Image Not Found\" class=\"image\">\n    <small>Figure 1: User File Format</small>\n    <p>To register uses from this file type, simply upload the file to the section labeled 'Register Users from File', click OK, and let \n        the system take care of the rest. When the accounts are created, the users will be sent an email informing them of the new account. Their\n        usernames will be set as their email addresses and the default password will be there CWID. It is important to have the new users reset their password\n        to ensure maximum account security.\n    </p>\n    <h5 class=\"subheading\">Registering Individual Users</h5>\n    <p>If, for some reason, you need to register an individual user, it may be easier to register them through a form instead of a file.\n        To do this, fill out the form in the section labeled 'Register Individual User' with the appropriate information and click confirm. The user\n        will be notified of their new account but you will need to inform of them of the password you set for them.\n    </p>\n    <h3 class=\"heading\">Changing User Roles</h3>\n    <p>User roles are important to this system. They determine what users can can't interact with. There are four roles: Admins, Faculty \n        Members, Moderators, and Students.\n    </p>\n    <ol class=\"list\">\n        <li>Admins: The same permissions as you. Admins have full permissions on the system</li>\n        <li>Faculty: Faculty members can do everything you can do except view/interact with the Administration section or Broadcast management Section</li>\n        <li>Moderator: Moderators have the same permissions as students but with the ability to create groups. This is useful if you have a student, \n            such as a club officer, who may need to be able to create groups to share calendars/events or message other users.\n        </li>\n        <li>Student: Students are only able to confirm appointment slots but have the same calendar permissions as other users, with the exception\n            that they can not share calendars or events to groups, since they do not have access to any groups.\n        </li>\n    </ol>\n    <p>To update the role of any users, select the menu next to their name in the 'Change User Roles' section and choose their new\n        role. You can reduce the number of users in the list by typing their name or email address into the search bar. The list will be automatically filtered\n        to reflect your input. When you are happy with your changes, click OK. A popup will appear asking you to confirm the roles. If you are happy \n        with the changes, click confirm. If you want to make more changes, close the popup by clicking the 'x'. Your changes will be saved unless\n        you overwrite them or refresh the page.\n    </p>\n    <h3 class=\"heading\">Uploading Courses</h3>\n    <p>To create groups for certain courses, the system needs to know which courses are available for which major. For now, a limited number of\n        Computer Science courses are available. As the need for more courses grows, you can update the list of available courses for each major\n        by uploading a file (see Figure 2) with the course information. Simply choose a major from the dropdown menu, upload the file, and submit it. The available \n        courses will then be available for Course Group creation. \n    </p>\n    <img src=\"..\\..\\..\\..\\..\\assets\\images\\course-file.PNG\" alt=\"Image Not Found\">\n    <small>Figure 2: Course File Format</small>\n    <h3 class=\"heading\">\n        Deleting Users\n    </h3>\n    <p>When a user leaves the University, it may become necessary to delete their account. This should only done if you are absolutely certain\n        it is necessary, as it can not be undone. All the data associated with that user will be deleted. To delete user accounts, click the check box\n        next to their name in the 'Delete Users' section. This list can be filtered in the same way as the list in the 'Update User Roles' section.\n        When you are happy with your changes, click OK. A popup will open asking you to confirm. To finalize deleting the accounts, click Confirm. If \n        you want to make more changes, close the popup and continue. Your changes will be saved unless you overwrite them or refresh the page. \n    </p>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/vertical-navigation/user-manual/appt/appt.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/vertical-navigation/user-manual/appt/appt.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h2 class=\"heading\">Appointments</h2>\n    <p>Creating appointments is a useful way for users to sign up for things such as advising. You can create time slots for users to sign up\n        for, which will be displayed in both your calendar and theirs. When you first visit the appointment page, you will see a list of appointments\n        <span *ngIf=\"role==='ROLE_ADMIN'||role==='ROLE_PM'; else elseBlock\">that you have created. To view \n            appointments that have been created for you, click Your Appointments, then Created For You in the menu. To view Your scheduled appointments,\n            click Scheduled Appointments, then either Created By You or Created For you in the menu.\n        </span> <ng-template #elseBlock>that have been created for you. To view your scheduled appointments, click Scheduled Appointments at the top.</ng-template>\n        Click one of these appointments to view its details. \n    </p>\n    <div *ngIf=\"role==='ROLE_ADMIN' || role==='ROLE_PM'\">\n        <h3 class=\"heading\">Creating an Appointment</h3>\n        <p>To create an appointment select the create appointment button at the top. A form will be shown\n            prompting you to enter a title, description, location, and emails. A button to select groups is also shown. Clicking the select \n            groups button will open a popup of any group available to you. Select any of the groups and the email field will be populated with the email\n            addresses of the members of that group. \n        </p>\n        <img src=\"..\\..\\..\\..\\..\\assets\\images\\Appt Create.PNG\" alt=\"\" class=\"image\" style=\"height:36em;\">\n        <small>Figure 1: Appointment Creation Form</small>\n        <h4 class=\"subheading\">Selecting the date and times</h4>\n        <p>Under the appointment information described above, a sub-form for dates and times will be shown. You click the add date button to add more dates\n            for your appointment. Clicking the add time button on each date will add more times to that date (see Figure 2). This is not representative of the individual time\n            slots that users will confirm. If you set 1:00 PM to 2:00 PM and enter 15 into the length field, 4 slots will be created for that date and time. \n        </p>\n        <img src=\"..\\..\\..\\..\\..\\assets\\images\\appt-form.PNG\" alt=\"Image Not Found\" class=\"image\" style=\"height:24em\">\n        <small>Figure 2: Date and time form</small>\n        <p>Once all appointment information is filled in the way you want, click the create button and the appointment time slots will be automatically\n            created and sent to your calendar. Invitees will receive an email and will be able to confirm time slots. \n        </p>\n        <h3 class=\"heading\">Editing an Appointment</h3>\n        <p>To edit an appointment, view its details and click the manage button. A menu will appear. Click Edit on the menu and you will be\n            directed to a form with the Appointment information filled in. From here you can add recipients and remove ones who have not selected a \n            time slot. You can also update the title, description and location. To confirm your changes, click the update button. \n        </p>\n        <h3 class=\"heading\">Deleting an Appointment</h3>\n        <p>To delete an appointment, click delete in the manage menu. This can not be undone and will remove the appointment from your calendar, \n            and the calendars of anyone who has selected a time slot. Make sure you are deleting the correct appointment.\n        </p>\n    </div>\n    <h3 class=\"heading\">Selecting a Time Slot</h3>\n    <p>When viewing the details of an appointment that has been created for you, available time slots will be shown if you have not already selected one.\n        When you click a time slot, a menu for cancel and confirm will appear. Clicking cancel will simply close the menu. Clicking confirm will select that\n        time slot for you and automatically send it to your calendar for display.\n    </p>\n\n    \n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/vertical-navigation/user-manual/brdcast/brdcast.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/vertical-navigation/user-manual/brdcast/brdcast.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h2 class=\"heading\">Managing the Image Broadcast</h2>\n    <p>The image broadcast can be displayed on any computer or internet enabled display by navigating to the website url plus '/broadcast', no log in required. To \n        manage the images that are displayed, simply upload an image in the broadcast management section and click ok. You will need to refresh the page\n        of the device viewing the broadcast, however. To delete an image from the list of displayed images, click the delete button under the image you \n        wish to delete in the broadcast management page. \n    </p>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/vertical-navigation/user-manual/cal/cal.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/vertical-navigation/user-manual/cal/cal.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h2 class=\"heading\">Calendar</h2>\n    <p>The calendar allows users to create events for themselves and others, create calendars to organize events, and displays appointments\n        once they have been confirmed. When your account was created, three default calendars were created for you. You can add events to these \n        calendars if you wish, but you can not edit or delete them. The Appointment Calendar is where your appointments will go when you have confirmed them,\n        the Shared Events calendar is where events that are shared to you will go, and the Main Calendar is just a default calendar that is there to\n        give you a starting point. To the left of the calendar, you will see a maroon button labeled 'Create', a 'New Calendar' button, and three sections for calendars you have \n        created (Custom Calendars), your default calendars (Your Calendars), and calendars that have been shared with you (Shared With You). The two calendar sections can be collapsed, as well as the entire left sidebar, if desired. Clicking the check boxes next to any of the calendars will toggle their events in/out of\n        the display. This is useful for reducing the number of events displayed, if there start to be too many. There are also navigation buttons at the top,\n        along with buttons to change between Month, Week, Day, and List views.\n    </p>\n    <h3 class=\"heading\">Events</h3>\n    <h4 class=\"subheading\">Creating an Event</h4>\n    <p>To create an event, click the maroon create button to the left of the calendar. You will be redirected to a form for event creation. \n        Fill in the information as desired, selecting which calendar you want the event to show up in. When everything is as you like, click confirm.\n        You will be redirected back to the calendar and the event will show up. To view the details of the event, click it in the calendar and a popup will\n        appear with all the information.\n    </p>\n    <img src=\"..\\..\\..\\..\\..\\assets\\images\\Event Create.PNG\" alt=\"\" class=\"image\" style=\"height:36em\">\n    <small>Figure 1: Event Creation Form</small>\n    <h4 class=\"subheading\">Event Options</h4>\n    <p>When you click an event to view its details, an options button will be available. If you created the event, you will be able to edit, delete, and share\n        the event, as well as view people who have confirmed attendance to the event, if you shared it with anyone. If the event is one that was shared\n        with you, you will only be able to confirm your attendance. It is important to note that appointments being displayed on the calendar will not\n        have the options menu available.\n    </p>\n    <h4 class=\"subheading\">Editing an Event</h4>\n    <p>To edit an event, choose edit under the options menu. You will be redirected to the event creation page, but all the event's information\n        will be filled in. You can change this information as you like, including adding or removing recipients, then click confirm. You will be \n        taken back to the calendar, and the event will be displayed with its newly updated information. \n    </p>\n    <h4 class=\"subheading\">Sharing an Event</h4>\n    <p>If you wish to share an event that has already been created with other users, you can either edit the event as described above, or click on\n        Share under the options menu. If you click on share under the menu, a popup will appear prompting you to enter emails of users. A button to\n        select groups is also availble. Choosing select groups will open another popup with a list of groups available to you, select any number of groups\n        from the list and the email addresses of the members will be added to the email field. You can add or remove email addresses as you like. When you\n        are done, click Share. Users will now be able to view the event and confirm attendance. Note: If the group selection popup does not contain any groups,\n        you have either not created any groups or do not have access to groups. If you believe this is a mistake, contact the system adminstrator. \n    </p>\n    <h4 class=\"subheading\">Deleting an Event</h4>\n    <p>If you wish to delete an event, you can do so under the options menu. Click the delete button and a popup will appear asking you to confirm.\n        If you click cancel, the popup will close and the event will not be deleted. If you click confirm, the event will be deleted. It will no longer \n        appear in your calendar or the calendars of anyone you've shared that event to. This can not be undone so make sure you are deleting the correct event.\n    </p>\n    <h3 class=\"heading\">Calendars</h3>\n    <p>Calendars are a great way to organize the way events show up in the calendar display. You can share these calendars with other users to \n        have a quick way of sharing events with them for viewing. \n    </p>\n    <h4 class=\"subheading\">Creating a Calendar</h4>\n    <p>To create a calendar, click the 'New Calendar' button to the left of the calendar view. A popup will appear asking you to enter the calendar\n        title and color, as well as users to share the calendar with. An option to select groups is also available. Fill the information in as desired\n        and click save. The calendar will now be available for putting events into. Events created for that calendar will be shown with a border color\n        of whatever color you chose for the calendar. Note: If the group selection popup does not contain any groups,\n        you have either not created any groups or do not have access to groups. If you believe this is a mistake, contact the system adminstrator. \n    </p>\n    <img src=\"..\\..\\..\\..\\..\\assets\\images\\Cal Create.PNG\" alt=\"\" class=\"image\" style=\"width:25%;height:20em;\">\n    <small>Figure 2: Calendar Creation Form</small>\n    <h4 class=\"subheading\">Calendar Options</h4>\n    <p>To edit, share, or delete calendars, hover your cursor over the calendar in the list you wish to update. An icon will appear if the calendar is one you crated and not one that was shared to you. Clicking the \n        icon will show a menu for editing, sharing, and deleting the calendar.\n    </p>\n    <h4 class=\"subheading\">Editing a Calendar</h4>\n    <p>If you need to edit a calendar, you can do so by clicking edit in the options menu. A popup will appear similar to the calendar creation \n        popup but the calendar information will already be filled in. From here, you can change the calendar title, color, or add and remove recipients.\n        Clicking save will update the calendar information with any changes you have made. Clicking cancel will not save any changes and will close the popup.\n    </p>\n    <h4 class=\"subheading\">Deleting a Calendar</h4>\n    <p>Deleting a calendar will remove it from the calendar displays of both yourself, and anyone who you have shared that calendar with. This can not\n        be undone so you should make sure you are deleting the correct calendar. To delete a calendar, click delete in the options menu and click confirm\n        in the popup that appears asking for your confirmation. Clicking cancel in the popup will not delete the calendar. \n    </p>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/vertical-navigation/user-manual/grps/grps.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/vertical-navigation/user-manual/grps/grps.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h2 class=\"heading\">Groups</h2>\n    <p>Groups are a useful way to organize groups of users for sharing events/calendars and creating appointments. You can also message the members\n        of a group to communicate with them. When you first navigate to the Groups page, you will see a list of you groups. Click any of them to\n        view the deatils including the list of members.\n    </p>\n    <h3 class=\"heading\">Creating a Group</h3>\n    <p>To create a group, click the 'Create Group' button in the top left. A dropdown will appear with choices for custom or course groups.\n        Choose the one you want to make and a form will appear.\n    </p>\n    <h4 class=\"subheading\">Course Groups</h4>\n    <p>Course groups are useful when you need to share things with students of a particular course, such as events or calendars. It is \n        important to note that created a course group will allow it to be viewed by all faculty members. Only you can edit or delete the group though.\n    </p>\n    <img src=\"../../../../../assets//images/Custom Group Form.PNG\" alt=\"\" class=\"image\" style=\"height:36em;\">\n    <small>Figure 2: Custom Group Form</small>\n    <h4 class=\"subheading\">Custom Groups</h4>\n    <p>Custom groups are best suited for organizing users based on some quality other than a course they are taking. For example, a group for your\n        advisees would be useful when creating adivising appointments or a group for members of an organization would be useful in sharing events or \n        calendars. \n    </p>\n    <img src=\"../../../../../assets//images/Course Group Form.PNG\" alt=\"\" class=\"image\" style=\"height:36em\">\n    <h4 class=\"subheading\">Creating from a file</h4>\n    <p>If you have a larger number of users for which you wish to create a group, you can upload a file with their information. The system will\n        automatically use that file to add them to your group. If the users in the file do not have accounts yet, those accounts will be created for them. Otherwise\n        they will just be added to the group. The format of the file is the same as one you can download from a Moodle Course (see Figure 3). Both \n        .csv and .xlsx file types are acceptable. \n    </p>\n    <img src=\"..\\..\\..\\..\\..\\assets\\images\\example-file-format.PNG\" alt=\"Image Not Found\" class=\"image\">\n    <small>Figure 3: User File Format</small>\n    <p>To finish creating your group, click the create group button. The form will disappear and the list will update.</p>\n    <h3 class=\"heading\">Messaging a Group</h3>\n    <p>To message a group, click the group, then click the message group button. A popup will appear with fields for the message subject\n        and content. Fill in the information as desired and click send. The message will be sent to the email addresses of the group members.\n        You can also send a message to a select number of group members by clicking the checkboxes next to them in the group details. \n    </p>\n    <h3 class=\"heading\">Sharing a Group</h3>\n    <p>If you wish to allow other users to be able to share events, appointments, and calendars to a group you have created or to be able to \n        message the members of your group, you can do so by clicking share under the manage menu. A popup will appear prompting you to enter the \n        email addresses of the users you wish to share the group with. Click share and they will then have access to your group. Only you will \n        be able to edit or delete the group though. \n    </p>\n    <h3 class=\"heading\">Editing a group</h3>\n    <p>If you need to change a group, you can do so by clicking the manage button on the group details. You will be redirected to the group \n        creation form but the group's information will be filled in. You can change whatever information you like, including adding or removing \n        members, and click update. The form will dissappear, and the group will be updated to reflect your changes. \n    </p>\n    <h3 class=\"heading\">Deleting a Group</h3>\n    <p>If you wish to delete a group, you can do so by clicking the manage button on the group details then clicking delete. \n        The group will be deleted and removed from the list. This can not be undone so make sure you are deleting the correct group. \n    </p>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/vertical-navigation/user-manual/manual-nav/manual-nav.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/vertical-navigation/user-manual/manual-nav/manual-nav.component.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\n  class=\"container\"\n  fxLayout\n  fxLayout.xs=\"column\"\n  fxLayoutAlign=\"flex-start\"\n  fxLayoutGap=\"10px\"\n  fxLayoutGap.xs=\"10px\"\n>\n  <button\n    mat-stroked-button\n    class=\"button-maroon\"\n    (click)=\"admin()\"\n    *ngIf=\"currentRole == 'ROLE_ADMIN'\"\n    \n  >Administration\n  </button>&nbsp;\n  <button\n    mat-stroked-button\n    class=\"button-maroon\"\n    (click)=\"calendar()\"\n    \n  >Calendar\n  </button>&nbsp;\n  <button\n    mat-stroked-button\n    class=\"button-maroon\"\n    (click)=\"appointment()\"\n    \n  >Appointments\n  </button>&nbsp;\n  <button\n    mat-stroked-button\n    class=\"button-maroon\"\n    (click)=\"groups()\"\n    *ngIf=\"currentRole == 'ROLE_ADMIN' || currentRole == 'ROLE_PM' || currentRole=='ROLE_MODERATOR'\"\n    \n  >Groups\n  </button>&nbsp;\n  <button\n    mat-stroked-button\n    class=\"button-maroon\"\n    (click)=\"broadcast()\"\n    *ngIf=\"currentRole == 'ROLE_ADMIN'\"\n    \n  >Broadcast\n  </button>&nbsp;\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/vertical-navigation/user-manual/manual-start/manual-start.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/vertical-navigation/user-manual/manual-start/manual-start.component.html ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h2 class=\"heading\">Welcome</h2>\n    <p>Thank you for using the Skylight Communication System. Please click any of the above buttons to navigate between sections of this manual.\n        Each section describes use of the various components available to you.\n    </p>    \n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/vertical-navigation/user-manual/user-manual.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/vertical-navigation/user-manual/user-manual.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\n    class=\"container\"\n    fxLayout=\"row\"\n    fxLayout.xs=\"column\"\n    fxLayoutAlign=\"flex-start\"\n    fxLayoutGap=\"5px\"\n    fxLayoutGap.xs=\"0\"\n  >\n    <app-manual-nav></app-manual-nav>\n</div>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/vertical-navigation/vertical-navigation.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/vertical-navigation/vertical-navigation.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ng-http-loader [backgroundColor]=\"'#800029'\"></ng-http-loader> -->\r\n<mat-sidenav-container class=\"sidenav-container\">\r\n  <mat-sidenav\r\n    #drawer\r\n    class=\"sidenav\"\r\n    attr.role=\"navigation\"\r\n    mode=\"over\"\r\n    opened=\"false\"\r\n  >\r\n    <mat-toolbar class=\"maroon\">\r\n      <mat-icon aria-hidden=\"false\" aria-label=\"Example home icon\"\r\n        >home</mat-icon\r\n      >Menu</mat-toolbar\r\n    >\r\n    <mat-nav-list>\r\n      <a mat-list-item routerLink=\"/home/dashboard\" (click)=\"drawer.close()\">\r\n        <mat-icon aria-hidden=\"false\" aria-label=\"Example dashboard icon\"\r\n          >dashboard</mat-icon\r\n        >\r\n\r\n        Dashboard</a\r\n      >\r\n      <a mat-list-item routerLink=\"/home/calendar\" (click)=\"drawer.close()\"\r\n        ><mat-icon aria-hidden=\"false\" aria-label=\"Example calendar icon\"\r\n          >calendar_today</mat-icon\r\n        >Calendar</a\r\n      >\r\n      <a mat-list-item routerLink=\"/home/appointment\" (click)=\"drawer.close()\">\r\n        <mat-icon aria-hidden=\"false\" aria-label=\"Example appointment icon\"\r\n          >assignment</mat-icon\r\n        >\r\n        Appointments</a\r\n      >\r\n      <a\r\n        mat-list-item\r\n        routerLink=\"/home/group\"\r\n        (click)=\"drawer.close()\"\r\n        *ngIf=\"userRole !== 'ROLE_USER'\"\r\n      >\r\n        <mat-icon aria-hidden=\"false\" aria-label=\"Example group icon\"\r\n          >group</mat-icon\r\n        >\r\n\r\n        Groups</a\r\n      >\r\n      <a\r\n        mat-list-item\r\n        routerLink=\"/home/admin\"\r\n        (click)=\"drawer.close()\"\r\n        *ngIf=\"userRole === 'ROLE_ADMIN'\"\r\n      >\r\n        <mat-icon aria-hidden=\"false\" aria-label=\"Example person add icon\"\r\n          >usb\r\n        </mat-icon>\r\n\r\n        Administration</a\r\n      >\r\n    </mat-nav-list>\r\n  </mat-sidenav>\r\n  <mat-sidenav-content>\r\n    <mat-toolbar color=\"primary\">\r\n      <mat-toolbar-row>\r\n        <button\r\n          type=\"button\"\r\n          aria-label=\"Toggle sidenav\"\r\n          mat-icon-button\r\n          (click)=\"drawer.toggle()\"\r\n        >\r\n          <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\r\n        </button>\r\n        <span>Skylight@ULM</span>\r\n\r\n        <span class=\"example-spacer\"></span>\r\n        <button\r\n          mat-raised-button\r\n          [matMenuTriggerFor]=\"user\"\r\n          aria-label=\"Example icon-button with a menu\"\r\n        >\r\n          {{ nameOfUser }} <mat-icon>expand_more </mat-icon>\r\n        </button>\r\n        <mat-menu #user=\"matMenu\">\r\n          <button mat-menu-item (click)=\"userManual()\">\r\n            <span>User Manual</span>\r\n          </button>\r\n          <button mat-menu-item (click)=\"updatePassword()\">\r\n            <span>Change password</span>\r\n          </button>\r\n          <button mat-menu-item (click)=\"logout()\">\r\n            <span>Sign Out</span>\r\n          </button>\r\n        </mat-menu>\r\n      </mat-toolbar-row>\r\n\r\n      <!-- <button class=\"logout\">logout</button> -->\r\n    </mat-toolbar>\r\n\r\n    <router-outlet></router-outlet>\r\n  </mat-sidenav-content>\r\n</mat-sidenav-container>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/loading-spinner/loading-spinner.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/loading-spinner/loading-spinner.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"lds-ring\">\r\n  <div></div>\r\n  <div></div>\r\n  <div></div>\r\n  <div></div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div *ngIf=\"isLoggedIn && !isLoading; else loggedOut\">\r\n  Logged in as {{ roles }}.\r\n</div> -->\r\n<!-- <div class=\"alert alert-danger\" *ngIf=\"errorMessage\">\r\n  <p>\r\n    {{ errorMessage }}\r\n  </p>\r\n</div>\r\n<div *ngIf=\"isLoading\">\r\n  <app-loading-spinner></app-loading-spinner>\r\n</div>\r\n\r\n<div class=\"container \">\r\n  <div class=\"row\" style=\"display: flex;\">\r\n    <div class=\"col-md-3 login-container \">\r\n      <h2>Login</h2>\r\n      <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\r\n        <div class=\"form-group\">\r\n          <label for=\"username\"> <h6>Username:</h6> </label> -->\r\n<!-- <input type=\"text\" class=\"form-control\" formControlName=\"username\" id=\"username\" autocomplete=\"off\"> -->\r\n<!-- <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            formControlName=\"username\"\r\n            id=\"username\"\r\n            placeholder=\"Enter your username\"\r\n          />\r\n\r\n          <div\r\n            class=\"error\"\r\n            *ngIf=\"\r\n              loginForm.controls['username'].hasError('required') &&\r\n              loginForm.controls['username'].touched\r\n            \"\r\n          >\r\n            Username is required\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"pwd\"> <h6>Password:</h6> </label>\r\n          <input\r\n            type=\"password\"\r\n            class=\"form-control\"\r\n            formControlName=\"password\"\r\n            id=\"pwd\"\r\n            placeholder=\"Enter your password\"\r\n          />\r\n          <div\r\n            class=\"error\"\r\n            *ngIf=\"\r\n              loginForm.controls['password'].hasError('required') &&\r\n              loginForm.controls['password'].touched\r\n            \"\r\n          >\r\n            Password is required\r\n          </div>\r\n          <span> <a href=\"#\">forgot password?</a> </span>\r\n        </div>\r\n        <div class=\"d-flex justify-content-center\">\r\n          <button class=\"btn btn-success\" [disabled]=\"loginForm.invalid\">\r\n            Login\r\n          </button>\r\n        </div>\r\n\r\n       \r\n        <hr />\r\n        <div class=\"d-flex justify-content-center\">\r\n          <h6>Doesn't have an account?</h6>\r\n        </div>\r\n        <div class=\"d-flex justify-content-center\">\r\n          <button class=\"btn btn-info\" routerLink=\"/signup\">\r\n            Sign up\r\n          </button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div> -->\r\n<div class=\"container\">\r\n  <mat-card class=\"example-card\">\r\n    <mat-card-content>\r\n      <h3>Please login</h3>\r\n\r\n      <form\r\n        class=\"example-form\"\r\n        [formGroup]=\"loginForm\"\r\n        (ngSubmit)=\"onSubmit()\"\r\n      >\r\n        <mat-form-field class=\"example-full-width\">\r\n          <input\r\n            matInput\r\n            placeholder=\"Enter your email\"\r\n            formControlName=\"email\"\r\n          />\r\n          <mat-error\r\n            *ngIf=\"\r\n              loginForm.controls['email'].hasError('email') &&\r\n              !loginForm.controls['email'].hasError('required')\r\n            \"\r\n          >\r\n            Please enter a valid email address\r\n          </mat-error>\r\n          <mat-error *ngIf=\"loginForm.controls['email'].hasError('required')\">\r\n            Email is <strong>required</strong>\r\n          </mat-error>\r\n        </mat-form-field>\r\n\r\n        <mat-form-field class=\"example-full-width\">\r\n          <input\r\n            matInput\r\n            placeholder=\"Enter your password\"\r\n            type=\"password\"\r\n            formControlName=\"password\"\r\n          />\r\n          <mat-error\r\n            *ngIf=\"loginForm.controls['password'].hasError('required')\"\r\n          >\r\n            Password is <strong>required</strong>\r\n          </mat-error>\r\n        </mat-form-field>\r\n        <span\r\n          ><a style=\"cursor: pointer;\" (click)=\"forgotPassword()\"\r\n            >forgot password?</a\r\n          ></span\r\n        >\r\n        <!-- <mat-error *ngIf=\"isLoginFailed\"\r\n          >Incorrect email or password.</mat-error\r\n        > -->\r\n        <div style=\"padding-top: 5px\">\r\n          <button mat-raised-button type=\"submit\" class=\"primary\">Login</button>\r\n        </div>\r\n      </form>\r\n      <!-- <mat-spinner [style.display]=\"showSpinner ? 'block' : 'none'\"></mat-spinner> -->\r\n    </mat-card-content>\r\n  </mat-card>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/register/register.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/register/register.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"example-card\">\r\n  <mat-card-header>\r\n    <mat-card-title>\r\n      Register Individual User\r\n    </mat-card-title>\r\n  </mat-card-header>\r\n  <mat-card-content>\r\n    <form [formGroup]=\"signupForm\" (ngSubmit)=\"onSubmit()\">\r\n      <mat-form-field>\r\n        <mat-label>Role</mat-label>\r\n        <mat-select formControlName=\"role\">\r\n          <mat-option value=\"user\">Student</mat-option>\r\n          <mat-option value=\"moderator\">Moderator</mat-option>\r\n          <mat-option value=\"pm\">Faculty</mat-option>\r\n          <mat-option value=\"admin\">Admin</mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n      <mat-form-field>\r\n        <input\r\n          matInput\r\n          formControlName=\"fname\"\r\n          placeholder=\"First Name\"\r\n        /> </mat-form-field\r\n      ><br />\r\n      <mat-form-field>\r\n        <input\r\n          matInput\r\n          formControlName=\"lname\"\r\n          placeholder=\"Last Name\"\r\n        /> </mat-form-field\r\n      ><br />\r\n      <mat-form-field>\r\n        <input\r\n          matInput\r\n          formControlName=\"email\"\r\n          placeholder=\"E-mail\"\r\n        /> </mat-form-field\r\n      ><br />\r\n      <!-- <mat-form-field>\r\n                <input matInput\r\n                formControlName=\"username\"\r\n                placeholder=\"Username\">\r\n            </mat-form-field><br> -->\r\n      <mat-form-field>\r\n        <input\r\n          matInput\r\n          formControlName=\"password\"\r\n          type=\"password\"\r\n          placeholder=\"Password\"\r\n        /> </mat-form-field\r\n      ><br />\r\n      <mat-form-field>\r\n        <input\r\n          matInput\r\n          formControlName=\"confirmPwd\"\r\n          type=\"password\"\r\n          placeholder=\"Confirm Password\"\r\n        /> </mat-form-field\r\n      ><br />\r\n      <button\r\n        mat-raised-button\r\n        type=\"submit\"\r\n        class=\"button-maroon\"\r\n        [disabled]=\"!signupForm.valid\"\r\n      >\r\n        Confirm\r\n      </button>\r\n      &nbsp;\r\n      <button\r\n        mat-raised-button\r\n        type=\"button\"\r\n        color=\"warn\"\r\n        (click)=\"clearForm()\"\r\n      >\r\n        Clear\r\n      </button>\r\n    </form>\r\n  </mat-card-content>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/email-dialog/email-dialog.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/email-dialog/email-dialog.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"example-form\">\r\n  <div style=\"margin-bottom: 10px;\">\r\n    <strong>Enter email to reset your password</strong>\r\n  </div>\r\n  <form (ngSubmit)=\"onSubmit()\">\r\n    <mat-form-field class=\"example-full-width\">\r\n      <input matInput placeholder=\"Email\" [formControl]=\"emailFormControl\" />\r\n      <mat-error\r\n        *ngIf=\"\r\n          emailFormControl.hasError('email') &&\r\n          !emailFormControl.hasError('required')\r\n        \"\r\n      >\r\n        Please enter a valid email address\r\n      </mat-error>\r\n      <mat-error *ngIf=\"emailFormControl.hasError('required')\">\r\n        Email is <strong>required</strong>\r\n      </mat-error>\r\n    </mat-form-field>\r\n\r\n    <button mat-raised-button type=\"submit\" class=\"button-maroon\">\r\n      Submit\r\n    </button>\r\n    &nbsp;\r\n    <button mat-raised-button type=\"button\" color=\"warn\" (click)=\"cancel()\">\r\n      Cancel\r\n    </button>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");
/* harmony import */ var _home_vertical_navigation_vertical_navigation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/vertical-navigation/vertical-navigation.component */ "./src/app/home/vertical-navigation/vertical-navigation.component.ts");
/* harmony import */ var _home_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/dashboard/dashboard.component */ "./src/app/home/dashboard/dashboard.component.ts");
/* harmony import */ var _home_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/calendar/calendar.component */ "./src/app/home/calendar/calendar.component.ts");
/* harmony import */ var _home_calendar_create_event_create_event_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/calendar/create-event/create-event.component */ "./src/app/home/calendar/create-event/create-event.component.ts");
/* harmony import */ var _home_appointment_appointment_appointment_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/appointment/appointment/appointment.component */ "./src/app/home/appointment/appointment/appointment.component.ts");
/* harmony import */ var _home_appointment_appointment_create_appointment_create_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/appointment/appointment-create/appointment-create.component */ "./src/app/home/appointment/appointment-create/appointment-create.component.ts");
/* harmony import */ var _home_appointment_appointment_detail_appointment_detail_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/appointment/appointment-detail/appointment-detail.component */ "./src/app/home/appointment/appointment-detail/appointment-detail.component.ts");
/* harmony import */ var _home_calendar_event_detail_event_detail_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home/calendar/event-detail/event-detail.component */ "./src/app/home/calendar/event-detail/event-detail.component.ts");
/* harmony import */ var _home_appointment_appointment_types_appointment_sent_appointment_sent_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./home/appointment/appointment-types/appointment-sent/appointment-sent.component */ "./src/app/home/appointment/appointment-types/appointment-sent/appointment-sent.component.ts");
/* harmony import */ var _home_appointment_appointment_types_appointment_received_appointment_received_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./home/appointment/appointment-types/appointment-received/appointment-received.component */ "./src/app/home/appointment/appointment-types/appointment-received/appointment-received.component.ts");
/* harmony import */ var _home_calendar_create_event_edit_event_edit_event_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./home/calendar/create-event/edit-event/edit-event.component */ "./src/app/home/calendar/create-event/edit-event/edit-event.component.ts");
/* harmony import */ var _home_appointment_scheduled_appointments_scheduled_appointments_sent_scheduled_appointments_sent_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./home/appointment/scheduled-appointments/scheduled-appointments-sent/scheduled-appointments-sent.component */ "./src/app/home/appointment/scheduled-appointments/scheduled-appointments-sent/scheduled-appointments-sent.component.ts");
/* harmony import */ var _home_appointment_scheduled_appointments_scheduled_appointments_received_scheduled_appointments_received_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./home/appointment/scheduled-appointments/scheduled-appointments-received/scheduled-appointments-received.component */ "./src/app/home/appointment/scheduled-appointments/scheduled-appointments-received/scheduled-appointments-received.component.ts");
/* harmony import */ var _home_group_group_group_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./home/group/group/group.component */ "./src/app/home/group/group/group.component.ts");
/* harmony import */ var _home_group_group_start_group_start_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./home/group/group-start/group-start.component */ "./src/app/home/group/group-start/group-start.component.ts");
/* harmony import */ var _home_group_create_group_create_group_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./home/group/create-group/create-group.component */ "./src/app/home/group/create-group/create-group.component.ts");
/* harmony import */ var _home_group_group_detail_group_detail_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./home/group/group-detail/group-detail.component */ "./src/app/home/group/group-detail/group-detail.component.ts");
/* harmony import */ var _home_administration_administration_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./home/administration/administration.component */ "./src/app/home/administration/administration.component.ts");
/* harmony import */ var _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./change-password/change-password.component */ "./src/app/change-password/change-password.component.ts");
/* harmony import */ var _broadcast_broadcast_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./broadcast/broadcast.component */ "./src/app/broadcast/broadcast.component.ts");
/* harmony import */ var _home_vertical_navigation_user_manual_user_manual_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./home/vertical-navigation/user-manual/user-manual.component */ "./src/app/home/vertical-navigation/user-manual/user-manual.component.ts");
/* harmony import */ var _home_vertical_navigation_user_manual_admin_admin_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./home/vertical-navigation/user-manual/admin/admin.component */ "./src/app/home/vertical-navigation/user-manual/admin/admin.component.ts");
/* harmony import */ var _home_vertical_navigation_user_manual_appt_appt_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./home/vertical-navigation/user-manual/appt/appt.component */ "./src/app/home/vertical-navigation/user-manual/appt/appt.component.ts");
/* harmony import */ var _home_vertical_navigation_user_manual_brdcast_brdcast_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./home/vertical-navigation/user-manual/brdcast/brdcast.component */ "./src/app/home/vertical-navigation/user-manual/brdcast/brdcast.component.ts");
/* harmony import */ var _home_vertical_navigation_user_manual_cal_cal_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./home/vertical-navigation/user-manual/cal/cal.component */ "./src/app/home/vertical-navigation/user-manual/cal/cal.component.ts");
/* harmony import */ var _home_vertical_navigation_user_manual_grps_grps_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./home/vertical-navigation/user-manual/grps/grps.component */ "./src/app/home/vertical-navigation/user-manual/grps/grps.component.ts");
/* harmony import */ var _home_vertical_navigation_user_manual_manual_start_manual_start_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./home/vertical-navigation/user-manual/manual-start/manual-start.component */ "./src/app/home/vertical-navigation/user-manual/manual-start/manual-start.component.ts");
/* harmony import */ var _home_group_your_group_your_group_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./home/group/your-group/your-group.component */ "./src/app/home/group/your-group/your-group.component.ts");
/* harmony import */ var _shared_email_dialog_email_dialog_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./shared/email-dialog/email-dialog.component */ "./src/app/shared/email-dialog/email-dialog.component.ts");
/* harmony import */ var _home_update_password_update_password_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./home/update-password/update-password.component */ "./src/app/home/update-password/update-password.component.ts");
/* harmony import */ var _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./error-page/error-page.component */ "./src/app/error-page/error-page.component.ts");



// import { DashboardComponent } from "./dashboard/dashboard.component";
// import { CalendarComponent } from "./calendar/calendar.component";
// import { AppointmentComponent } from "./appointment/appointment/appointment.component";
// import { AppointmentTypeComponent } from "./appointment/appointment-type/appointment-type.component";
// import { ScheduledAppointmentComponent } from "./appointment/scheduled-appointment/scheduled-appointment.component";
// import { AppointmentStartComponent } from "./appointment/appointment-start/appointment-start.component";
// import { AppointmentDetailComponent } from "./appointment/appointment-detail/appointment-detail.component";
// import { AppointmentCreateComponent } from "./appointment/appointment-create/appointment-create.component";
// import { CreateEventComponent } from "./calendar/create-event/create-event.component";

































const routes = [
    {
        path: "",
        redirectTo: "login",
        pathMatch: "full"
    },
    {
        path: "login",
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    },
    {
        path: "forgot-password",
        component: _shared_email_dialog_email_dialog_component__WEBPACK_IMPORTED_MODULE_33__["EmailDialogComponent"]
    },
    {
        path: "reset-password",
        component: _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_23__["ChangePasswordComponent"]
    },
    {
        path: "home",
        component: _home_vertical_navigation_vertical_navigation_component__WEBPACK_IMPORTED_MODULE_5__["VerticalNavigationComponent"],
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
        children: [
            { path: "", redirectTo: "dashboard", pathMatch: "full" },
            { path: "dashboard", component: _home_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"] },
            { path: "update-password", component: _home_update_password_update_password_component__WEBPACK_IMPORTED_MODULE_34__["UpdatePasswordComponent"] },
            {
                path: "user-manual",
                component: _home_vertical_navigation_user_manual_user_manual_component__WEBPACK_IMPORTED_MODULE_25__["UserManualComponent"],
                children: [
                    { path: "", component: _home_vertical_navigation_user_manual_manual_start_manual_start_component__WEBPACK_IMPORTED_MODULE_31__["ManualStartComponent"] },
                    { path: "administration", component: _home_vertical_navigation_user_manual_admin_admin_component__WEBPACK_IMPORTED_MODULE_26__["AdminComponent"] },
                    { path: "appointments", component: _home_vertical_navigation_user_manual_appt_appt_component__WEBPACK_IMPORTED_MODULE_27__["ApptComponent"] },
                    { path: "broadcast", component: _home_vertical_navigation_user_manual_brdcast_brdcast_component__WEBPACK_IMPORTED_MODULE_28__["BrdcastComponent"] },
                    { path: "calendar", component: _home_vertical_navigation_user_manual_cal_cal_component__WEBPACK_IMPORTED_MODULE_29__["CalComponent"] },
                    { path: "groups", component: _home_vertical_navigation_user_manual_grps_grps_component__WEBPACK_IMPORTED_MODULE_30__["GrpsComponent"] }
                ]
            },
            { path: "admin", component: _home_administration_administration_component__WEBPACK_IMPORTED_MODULE_22__["AdministrationComponent"] },
            { path: "calendar", component: _home_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_7__["CalendarComponent"] },
            { path: "event/:id", component: _home_calendar_event_detail_event_detail_component__WEBPACK_IMPORTED_MODULE_12__["EventDetailComponent"] },
            { path: "create-event", component: _home_calendar_create_event_create_event_component__WEBPACK_IMPORTED_MODULE_8__["CreateEventComponent"] },
            { path: "edit-event/:id", component: _home_calendar_create_event_edit_event_edit_event_component__WEBPACK_IMPORTED_MODULE_15__["EditEventComponent"] },
            {
                path: "appointment",
                component: _home_appointment_appointment_appointment_component__WEBPACK_IMPORTED_MODULE_9__["AppointmentComponent"],
                children: [
                    { path: "", redirectTo: "sent", pathMatch: "full" },
                    {
                        path: "create",
                        component: _home_appointment_appointment_create_appointment_create_component__WEBPACK_IMPORTED_MODULE_10__["AppointmentCreateComponent"]
                    },
                    {
                        path: "sent",
                        component: _home_appointment_appointment_types_appointment_sent_appointment_sent_component__WEBPACK_IMPORTED_MODULE_13__["AppointmentSentComponent"],
                        children: [
                            {
                                path: ":id",
                                component: _home_appointment_appointment_detail_appointment_detail_component__WEBPACK_IMPORTED_MODULE_11__["AppointmentDetailComponent"]
                            }
                        ]
                    },
                    {
                        path: "edit-appointment/:id",
                        component: _home_appointment_appointment_create_appointment_create_component__WEBPACK_IMPORTED_MODULE_10__["AppointmentCreateComponent"]
                    },
                    {
                        path: "received",
                        component: _home_appointment_appointment_types_appointment_received_appointment_received_component__WEBPACK_IMPORTED_MODULE_14__["AppointmentReceivedComponent"],
                        children: [
                            {
                                path: ":id",
                                component: _home_appointment_appointment_detail_appointment_detail_component__WEBPACK_IMPORTED_MODULE_11__["AppointmentDetailComponent"]
                            }
                        ]
                    },
                    { path: "scheduled", component: _home_appointment_scheduled_appointments_scheduled_appointments_sent_scheduled_appointments_sent_component__WEBPACK_IMPORTED_MODULE_16__["ScheduledAppointmentsSentComponent"] },
                    {
                        path: "scheduled-appointments-received",
                        component: _home_appointment_scheduled_appointments_scheduled_appointments_received_scheduled_appointments_received_component__WEBPACK_IMPORTED_MODULE_17__["ScheduledAppointmentsReceivedComponent"]
                    },
                    {
                        path: "scheduled-appointments-sent",
                        component: _home_appointment_scheduled_appointments_scheduled_appointments_sent_scheduled_appointments_sent_component__WEBPACK_IMPORTED_MODULE_16__["ScheduledAppointmentsSentComponent"]
                    }
                ]
            },
            {
                path: "group",
                component: _home_group_group_group_component__WEBPACK_IMPORTED_MODULE_18__["GroupComponent"],
                children: [
                    { path: "", redirectTo: "your-group", pathMatch: "full" },
                    { path: "create-group", component: _home_group_create_group_create_group_component__WEBPACK_IMPORTED_MODULE_20__["CreateGroupComponent"] },
                    {
                        path: "your-group",
                        component: _home_group_your_group_your_group_component__WEBPACK_IMPORTED_MODULE_32__["YourGroupComponent"],
                        children: [
                            { path: "", component: _home_group_group_start_group_start_component__WEBPACK_IMPORTED_MODULE_19__["GroupStartComponent"], pathMatch: "full" },
                            { path: "create-group", component: _home_group_create_group_create_group_component__WEBPACK_IMPORTED_MODULE_20__["CreateGroupComponent"] },
                            { path: ":id", component: _home_group_group_detail_group_detail_component__WEBPACK_IMPORTED_MODULE_21__["GroupDetailComponent"] }
                            // { path: ":id/edit", component: CreateGroupComponent }
                        ]
                    },
                    { path: "edit-group/:id", component: _home_group_create_group_create_group_component__WEBPACK_IMPORTED_MODULE_20__["CreateGroupComponent"] }
                ]
            }
        ]
    },
    { path: "broadcast", component: _broadcast_broadcast_component__WEBPACK_IMPORTED_MODULE_24__["BroadcastComponent"] },
    { path: "**", component: _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_35__["ErrorPageComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'vetical-nav';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_material_file_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-material-file-input */ "./node_modules/ngx-material-file-input/fesm2015/ngx-material-file-input.js");
/* harmony import */ var ng_http_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-http-loader */ "./node_modules/ng-http-loader/fesm2015/ng-http-loader.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm2015/layout.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm2015/checkbox.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm2015/sidenav.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm2015/grid-list.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm2015/datepicker.js");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/fesm2015/angular-calendar.js");
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! angular-calendar/date-adapters/date-fns */ "./node_modules/angular-calendar/date-adapters/date-fns/index.js");
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm2015/expansion.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm2015/chips.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm2015/tabs.js");
/* harmony import */ var _home_vertical_navigation_vertical_navigation_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./home/vertical-navigation/vertical-navigation.component */ "./src/app/home/vertical-navigation/vertical-navigation.component.ts");
/* harmony import */ var ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ngx-material-timepicker */ "./node_modules/ngx-material-timepicker/fesm2015/ngx-material-timepicker.js");
/* harmony import */ var _home_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./home/dashboard/dashboard.component */ "./src/app/home/dashboard/dashboard.component.ts");
/* harmony import */ var _home_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./home/calendar/calendar.component */ "./src/app/home/calendar/calendar.component.ts");
/* harmony import */ var _home_appointment_appointment_appointment_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./home/appointment/appointment/appointment.component */ "./src/app/home/appointment/appointment/appointment.component.ts");
/* harmony import */ var _home_appointment_appointment_item_appointment_item_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./home/appointment/appointment-item/appointment-item.component */ "./src/app/home/appointment/appointment-item/appointment-item.component.ts");
/* harmony import */ var _home_appointment_appointment_navigation_appointment_navigation_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./home/appointment/appointment-navigation/appointment-navigation.component */ "./src/app/home/appointment/appointment-navigation/appointment-navigation.component.ts");
/* harmony import */ var _home_appointment_appointment_detail_appointment_detail_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./home/appointment/appointment-detail/appointment-detail.component */ "./src/app/home/appointment/appointment-detail/appointment-detail.component.ts");
/* harmony import */ var _home_appointment_appointment_list_appointment_list_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./home/appointment/appointment-list/appointment-list.component */ "./src/app/home/appointment/appointment-list/appointment-list.component.ts");
/* harmony import */ var _home_appointment_appointment_create_appointment_create_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./home/appointment/appointment-create/appointment-create.component */ "./src/app/home/appointment/appointment-create/appointment-create.component.ts");
/* harmony import */ var _home_appointment_appointment_types_appointment_start_appointment_start_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./home/appointment/appointment-types/appointment-start/appointment-start.component */ "./src/app/home/appointment/appointment-types/appointment-start/appointment-start.component.ts");
/* harmony import */ var _home_appointment_appointment_types_appointment_sent_appointment_sent_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./home/appointment/appointment-types/appointment-sent/appointment-sent.component */ "./src/app/home/appointment/appointment-types/appointment-sent/appointment-sent.component.ts");
/* harmony import */ var _home_appointment_appointment_types_appointment_received_appointment_received_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./home/appointment/appointment-types/appointment-received/appointment-received.component */ "./src/app/home/appointment/appointment-types/appointment-received/appointment-received.component.ts");
/* harmony import */ var _home_appointment_scheduled_appointments_scheduled_appointments_sent_scheduled_appointments_sent_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./home/appointment/scheduled-appointments/scheduled-appointments-sent/scheduled-appointments-sent.component */ "./src/app/home/appointment/scheduled-appointments/scheduled-appointments-sent/scheduled-appointments-sent.component.ts");
/* harmony import */ var _home_appointment_scheduled_appointments_scheduled_appointments_received_scheduled_appointments_received_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./home/appointment/scheduled-appointments/scheduled-appointments-received/scheduled-appointments-received.component */ "./src/app/home/appointment/scheduled-appointments/scheduled-appointments-received/scheduled-appointments-received.component.ts");
/* harmony import */ var _home_calendar_create_event_create_event_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./home/calendar/create-event/create-event.component */ "./src/app/home/calendar/create-event/create-event.component.ts");
/* harmony import */ var _home_calendar_calendar_list_calendar_list_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./home/calendar/calendar-list/calendar-list.component */ "./src/app/home/calendar/calendar-list/calendar-list.component.ts");
/* harmony import */ var _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! @fullcalendar/angular */ "./node_modules/@fullcalendar/angular/fesm2015/fullcalendar-angular.js");
/* harmony import */ var _home_calendar_calendar_list_calendar_item_calendar_item_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./home/calendar/calendar-list/calendar-item/calendar-item.component */ "./src/app/home/calendar/calendar-list/calendar-item/calendar-item.component.ts");
/* harmony import */ var _home_shared_group_selection__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./home/shared/group-selection */ "./src/app/home/shared/group-selection.ts");
/* harmony import */ var ngx_color_picker__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ngx-color-picker */ "./node_modules/ngx-color-picker/dist/ngx-color-picker.es5.js");
/* harmony import */ var _home_calendar_events_service__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./home/calendar/events.service */ "./src/app/home/calendar/events.service.ts");
/* harmony import */ var _home_calendar_calendar_list_calendar_service__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./home/calendar/calendar-list/calendar.service */ "./src/app/home/calendar/calendar-list/calendar.service.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./loading-spinner/loading-spinner.component */ "./src/app/loading-spinner/loading-spinner.component.ts");
/* harmony import */ var _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./auth/auth-interceptor */ "./src/app/auth/auth-interceptor.ts");
/* harmony import */ var _home_calendar_event_detail_event_detail_component__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./home/calendar/event-detail/event-detail.component */ "./src/app/home/calendar/event-detail/event-detail.component.ts");
/* harmony import */ var _home_calendar_calendar_create_calendar_create_component__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./home/calendar/calendar-create/calendar-create.component */ "./src/app/home/calendar/calendar-create/calendar-create.component.ts");
/* harmony import */ var _home_calendar_share_calendar_share_calendar_component__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./home/calendar/share-calendar/share-calendar.component */ "./src/app/home/calendar/share-calendar/share-calendar.component.ts");
/* harmony import */ var _home_calendar_create_event_edit_event_edit_event_component__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./home/calendar/create-event/edit-event/edit-event.component */ "./src/app/home/calendar/create-event/edit-event/edit-event.component.ts");
/* harmony import */ var _home_group_group_list_group_list_component__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./home/group/group-list/group-list.component */ "./src/app/home/group/group-list/group-list.component.ts");
/* harmony import */ var _home_group_create_group_create_group_component__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./home/group/create-group/create-group.component */ "./src/app/home/group/create-group/create-group.component.ts");
/* harmony import */ var _home_group_group_item_group_item_component__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./home/group/group-item/group-item.component */ "./src/app/home/group/group-item/group-item.component.ts");
/* harmony import */ var _home_group_group_start_group_start_component__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ./home/group/group-start/group-start.component */ "./src/app/home/group/group-start/group-start.component.ts");
/* harmony import */ var _home_group_group_detail_group_detail_component__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ./home/group/group-detail/group-detail.component */ "./src/app/home/group/group-detail/group-detail.component.ts");
/* harmony import */ var _home_group_group_group_component__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ./home/group/group/group.component */ "./src/app/home/group/group/group.component.ts");
/* harmony import */ var _home_administration_register_users_register_users_component__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! ./home/administration/register-users/register-users.component */ "./src/app/home/administration/register-users/register-users.component.ts");
/* harmony import */ var _home_administration_administration_component__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! ./home/administration/administration.component */ "./src/app/home/administration/administration.component.ts");
/* harmony import */ var _home_administration_update_roles_update_roles_component__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! ./home/administration/update-roles/update-roles.component */ "./src/app/home/administration/update-roles/update-roles.component.ts");
/* harmony import */ var _home_administration_delete_users_delete_users_component__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! ./home/administration/delete-users/delete-users.component */ "./src/app/home/administration/delete-users/delete-users.component.ts");
/* harmony import */ var _home_group_group_detail_filter_member_pipe__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! ./home/group/group-detail/filter-member.pipe */ "./src/app/home/group/group-detail/filter-member.pipe.ts");
/* harmony import */ var _home_appointment_appointment_list_appointment_filter_pipe__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! ./home/appointment/appointment-list/appointment-filter.pipe */ "./src/app/home/appointment/appointment-list/appointment-filter.pipe.ts");
/* harmony import */ var _home_appointment_scheduled_appointments_scheduled_appointments_sent_scheduled_appointment_sent_pipe__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! ./home/appointment/scheduled-appointments/scheduled-appointments-sent/scheduled-appointment-sent.pipe */ "./src/app/home/appointment/scheduled-appointments/scheduled-appointments-sent/scheduled-appointment-sent.pipe.ts");
/* harmony import */ var _home_group_group_edit_group_edit_component__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! ./home/group/group-edit/group-edit.component */ "./src/app/home/group/group-edit/group-edit.component.ts");
/* harmony import */ var _home_group_message_group_message_group_component__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! ./home/group/message-group/message-group.component */ "./src/app/home/group/message-group/message-group.component.ts");
/* harmony import */ var _home_appointment_scheduled_appointments_scheduled_appointment_received_pipe__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! ./home/appointment/scheduled-appointments/scheduled-appointment-received.pipe */ "./src/app/home/appointment/scheduled-appointments/scheduled-appointment-received.pipe.ts");
/* harmony import */ var _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! ./change-password/change-password.component */ "./src/app/change-password/change-password.component.ts");
/* harmony import */ var _home_calendar_event_detail_share_event__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(/*! ./home/calendar/event-detail/share-event */ "./src/app/home/calendar/event-detail/share-event.ts");
/* harmony import */ var _home_group_group_list_group_filter_pipe__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(/*! ./home/group/group-list/group-filter.pipe */ "./src/app/home/group/group-list/group-filter.pipe.ts");
/* harmony import */ var _home_administration_upload_courses_upload_courses_component__WEBPACK_IMPORTED_MODULE_84__ = __webpack_require__(/*! ./home/administration/upload-courses/upload-courses.component */ "./src/app/home/administration/upload-courses/upload-courses.component.ts");
/* harmony import */ var _home_administration_broadcast_management_broadcast_management_component__WEBPACK_IMPORTED_MODULE_85__ = __webpack_require__(/*! ./home/administration/broadcast-management/broadcast-management.component */ "./src/app/home/administration/broadcast-management/broadcast-management.component.ts");
/* harmony import */ var _broadcast_broadcast_component__WEBPACK_IMPORTED_MODULE_86__ = __webpack_require__(/*! ./broadcast/broadcast.component */ "./src/app/broadcast/broadcast.component.ts");
/* harmony import */ var _ngmodule_material_carousel__WEBPACK_IMPORTED_MODULE_87__ = __webpack_require__(/*! @ngmodule/material-carousel */ "./node_modules/@ngmodule/material-carousel/fesm2015/ngmodule-material-carousel.js");
/* harmony import */ var _home_vertical_navigation_user_manual_user_manual_component__WEBPACK_IMPORTED_MODULE_88__ = __webpack_require__(/*! ./home/vertical-navigation/user-manual/user-manual.component */ "./src/app/home/vertical-navigation/user-manual/user-manual.component.ts");
/* harmony import */ var _home_vertical_navigation_user_manual_admin_admin_component__WEBPACK_IMPORTED_MODULE_89__ = __webpack_require__(/*! ./home/vertical-navigation/user-manual/admin/admin.component */ "./src/app/home/vertical-navigation/user-manual/admin/admin.component.ts");
/* harmony import */ var _home_vertical_navigation_user_manual_cal_cal_component__WEBPACK_IMPORTED_MODULE_90__ = __webpack_require__(/*! ./home/vertical-navigation/user-manual/cal/cal.component */ "./src/app/home/vertical-navigation/user-manual/cal/cal.component.ts");
/* harmony import */ var _home_vertical_navigation_user_manual_appt_appt_component__WEBPACK_IMPORTED_MODULE_91__ = __webpack_require__(/*! ./home/vertical-navigation/user-manual/appt/appt.component */ "./src/app/home/vertical-navigation/user-manual/appt/appt.component.ts");
/* harmony import */ var _home_vertical_navigation_user_manual_grps_grps_component__WEBPACK_IMPORTED_MODULE_92__ = __webpack_require__(/*! ./home/vertical-navigation/user-manual/grps/grps.component */ "./src/app/home/vertical-navigation/user-manual/grps/grps.component.ts");
/* harmony import */ var _home_vertical_navigation_user_manual_brdcast_brdcast_component__WEBPACK_IMPORTED_MODULE_93__ = __webpack_require__(/*! ./home/vertical-navigation/user-manual/brdcast/brdcast.component */ "./src/app/home/vertical-navigation/user-manual/brdcast/brdcast.component.ts");
/* harmony import */ var _home_vertical_navigation_user_manual_manual_nav_manual_nav_component__WEBPACK_IMPORTED_MODULE_94__ = __webpack_require__(/*! ./home/vertical-navigation/user-manual/manual-nav/manual-nav.component */ "./src/app/home/vertical-navigation/user-manual/manual-nav/manual-nav.component.ts");
/* harmony import */ var _home_appointment_shared_appointment_appointment_snackbar_appointment_snackbar_component__WEBPACK_IMPORTED_MODULE_95__ = __webpack_require__(/*! ./home/appointment/shared-appointment/appointment-snackbar/appointment-snackbar.component */ "./src/app/home/appointment/shared-appointment/appointment-snackbar/appointment-snackbar.component.ts");
/* harmony import */ var _home_vertical_navigation_user_manual_manual_start_manual_start_component__WEBPACK_IMPORTED_MODULE_96__ = __webpack_require__(/*! ./home/vertical-navigation/user-manual/manual-start/manual-start.component */ "./src/app/home/vertical-navigation/user-manual/manual-start/manual-start.component.ts");
/* harmony import */ var _home_administration_upload_major_upload_major_component__WEBPACK_IMPORTED_MODULE_97__ = __webpack_require__(/*! ./home/administration/upload-major/upload-major.component */ "./src/app/home/administration/upload-major/upload-major.component.ts");
/* harmony import */ var _home_group_your_group_your_group_component__WEBPACK_IMPORTED_MODULE_98__ = __webpack_require__(/*! ./home/group/your-group/your-group.component */ "./src/app/home/group/your-group/your-group.component.ts");
/* harmony import */ var _shared_email_dialog_email_dialog_component__WEBPACK_IMPORTED_MODULE_99__ = __webpack_require__(/*! ./shared/email-dialog/email-dialog.component */ "./src/app/shared/email-dialog/email-dialog.component.ts");
/* harmony import */ var _home_update_password_update_password_component__WEBPACK_IMPORTED_MODULE_100__ = __webpack_require__(/*! ./home/update-password/update-password.component */ "./src/app/home/update-password/update-password.component.ts");
/* harmony import */ var _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_101__ = __webpack_require__(/*! ./error-page/error-page.component */ "./src/app/error-page/error-page.component.ts");


















// import { MatTabsModule } from "@angular/material/tabs";




















































































let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
            _home_appointment_appointment_appointment_component__WEBPACK_IMPORTED_MODULE_38__["AppointmentComponent"],
            _home_appointment_appointment_item_appointment_item_component__WEBPACK_IMPORTED_MODULE_39__["AppointmentItemComponent"],
            _home_appointment_appointment_navigation_appointment_navigation_component__WEBPACK_IMPORTED_MODULE_40__["AppointmentNavigationComponent"],
            _home_appointment_appointment_detail_appointment_detail_component__WEBPACK_IMPORTED_MODULE_41__["AppointmentDetailComponent"],
            _home_appointment_appointment_list_appointment_list_component__WEBPACK_IMPORTED_MODULE_42__["AppointmentListComponent"],
            _home_appointment_appointment_create_appointment_create_component__WEBPACK_IMPORTED_MODULE_43__["AppointmentCreateComponent"],
            _home_appointment_appointment_types_appointment_start_appointment_start_component__WEBPACK_IMPORTED_MODULE_44__["AppointmentStartComponent"],
            _home_appointment_appointment_types_appointment_sent_appointment_sent_component__WEBPACK_IMPORTED_MODULE_45__["AppointmentSentComponent"],
            _home_appointment_appointment_types_appointment_received_appointment_received_component__WEBPACK_IMPORTED_MODULE_46__["AppointmentReceivedComponent"],
            _home_appointment_scheduled_appointments_scheduled_appointments_sent_scheduled_appointments_sent_component__WEBPACK_IMPORTED_MODULE_47__["ScheduledAppointmentsSentComponent"],
            _home_appointment_scheduled_appointments_scheduled_appointments_received_scheduled_appointments_received_component__WEBPACK_IMPORTED_MODULE_48__["ScheduledAppointmentsReceivedComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_57__["LoginComponent"],
            _register_register_component__WEBPACK_IMPORTED_MODULE_58__["RegisterComponent"],
            _loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_59__["LoadingSpinnerComponent"],
            _home_vertical_navigation_vertical_navigation_component__WEBPACK_IMPORTED_MODULE_34__["VerticalNavigationComponent"],
            _home_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_36__["DashboardComponent"],
            _home_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_37__["CalendarComponent"],
            _home_calendar_create_event_create_event_component__WEBPACK_IMPORTED_MODULE_49__["CreateEventComponent"],
            _home_calendar_calendar_list_calendar_list_component__WEBPACK_IMPORTED_MODULE_50__["CalendarListComponent"],
            _home_calendar_calendar_list_calendar_item_calendar_item_component__WEBPACK_IMPORTED_MODULE_52__["CalendarItemComponent"],
            _home_calendar_event_detail_event_detail_component__WEBPACK_IMPORTED_MODULE_61__["EventDetailComponent"],
            _home_calendar_calendar_create_calendar_create_component__WEBPACK_IMPORTED_MODULE_62__["CalendarCreateComponent"],
            _home_calendar_calendar_list_calendar_item_calendar_item_component__WEBPACK_IMPORTED_MODULE_52__["CalRename"],
            _home_shared_group_selection__WEBPACK_IMPORTED_MODULE_53__["GroupSelection"],
            _home_calendar_calendar_list_calendar_item_calendar_item_component__WEBPACK_IMPORTED_MODULE_52__["DeleteConfirm"],
            _home_calendar_share_calendar_share_calendar_component__WEBPACK_IMPORTED_MODULE_63__["ShareCalendarComponent"],
            _home_administration_delete_users_delete_users_component__WEBPACK_IMPORTED_MODULE_74__["DeleteUsers"],
            _home_calendar_create_event_edit_event_edit_event_component__WEBPACK_IMPORTED_MODULE_64__["EditEventComponent"],
            _home_calendar_event_detail_event_detail_component__WEBPACK_IMPORTED_MODULE_61__["EventDeleteConfirm"],
            _home_administration_register_users_register_users_component__WEBPACK_IMPORTED_MODULE_71__["RegisterUsersComponent"],
            _home_administration_administration_component__WEBPACK_IMPORTED_MODULE_72__["AdministrationComponent"],
            _home_administration_update_roles_update_roles_component__WEBPACK_IMPORTED_MODULE_73__["UpdateRolesComponent"],
            _home_administration_delete_users_delete_users_component__WEBPACK_IMPORTED_MODULE_74__["DeleteUsersComponent"],
            _home_calendar_event_detail_share_event__WEBPACK_IMPORTED_MODULE_82__["ShareEvent"],
            _home_group_group_list_group_list_component__WEBPACK_IMPORTED_MODULE_65__["GroupListComponent"],
            _home_group_create_group_create_group_component__WEBPACK_IMPORTED_MODULE_66__["CreateGroupComponent"],
            _home_group_group_item_group_item_component__WEBPACK_IMPORTED_MODULE_67__["GroupItemComponent"],
            _home_group_group_start_group_start_component__WEBPACK_IMPORTED_MODULE_68__["GroupStartComponent"],
            _home_group_group_detail_group_detail_component__WEBPACK_IMPORTED_MODULE_69__["GroupDetailComponent"],
            _home_group_group_group_component__WEBPACK_IMPORTED_MODULE_70__["GroupComponent"],
            _home_group_group_detail_filter_member_pipe__WEBPACK_IMPORTED_MODULE_75__["FilterMemberPipe"],
            _home_appointment_appointment_list_appointment_filter_pipe__WEBPACK_IMPORTED_MODULE_76__["AppointmentFilterPipe"],
            _home_appointment_scheduled_appointments_scheduled_appointments_sent_scheduled_appointment_sent_pipe__WEBPACK_IMPORTED_MODULE_77__["ScheduledAppointmentSentPipe"],
            _home_group_group_detail_group_detail_component__WEBPACK_IMPORTED_MODULE_69__["DialogShareGroup"],
            _home_group_group_edit_group_edit_component__WEBPACK_IMPORTED_MODULE_78__["GroupEditComponent"],
            _home_group_message_group_message_group_component__WEBPACK_IMPORTED_MODULE_79__["MessageGroupComponent"],
            _home_administration_update_roles_update_roles_component__WEBPACK_IMPORTED_MODULE_73__["RoleConfirm"],
            _home_appointment_scheduled_appointments_scheduled_appointment_received_pipe__WEBPACK_IMPORTED_MODULE_80__["ScheduledAppointmentReceivedPipe"],
            _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_81__["ChangePasswordComponent"],
            _home_administration_upload_courses_upload_courses_component__WEBPACK_IMPORTED_MODULE_84__["UploadCoursesComponent"],
            _home_group_group_list_group_filter_pipe__WEBPACK_IMPORTED_MODULE_83__["GroupFilterPipe"],
            _home_administration_broadcast_management_broadcast_management_component__WEBPACK_IMPORTED_MODULE_85__["BroadcastManagementComponent"],
            _broadcast_broadcast_component__WEBPACK_IMPORTED_MODULE_86__["BroadcastComponent"],
            _home_vertical_navigation_user_manual_user_manual_component__WEBPACK_IMPORTED_MODULE_88__["UserManualComponent"],
            _home_vertical_navigation_user_manual_admin_admin_component__WEBPACK_IMPORTED_MODULE_89__["AdminComponent"],
            _home_vertical_navigation_user_manual_cal_cal_component__WEBPACK_IMPORTED_MODULE_90__["CalComponent"],
            _home_vertical_navigation_user_manual_appt_appt_component__WEBPACK_IMPORTED_MODULE_91__["ApptComponent"],
            _home_vertical_navigation_user_manual_grps_grps_component__WEBPACK_IMPORTED_MODULE_92__["GrpsComponent"],
            _home_vertical_navigation_user_manual_brdcast_brdcast_component__WEBPACK_IMPORTED_MODULE_93__["BrdcastComponent"],
            _home_vertical_navigation_user_manual_manual_nav_manual_nav_component__WEBPACK_IMPORTED_MODULE_94__["ManualNavComponent"],
            _home_appointment_shared_appointment_appointment_snackbar_appointment_snackbar_component__WEBPACK_IMPORTED_MODULE_95__["AppointmentSnackbarComponent"],
            _home_vertical_navigation_user_manual_manual_start_manual_start_component__WEBPACK_IMPORTED_MODULE_96__["ManualStartComponent"],
            _home_administration_upload_major_upload_major_component__WEBPACK_IMPORTED_MODULE_97__["UploadMajorComponent"],
            _home_group_your_group_your_group_component__WEBPACK_IMPORTED_MODULE_98__["YourGroupComponent"],
            _shared_email_dialog_email_dialog_component__WEBPACK_IMPORTED_MODULE_99__["EmailDialogComponent"],
            _home_update_password_update_password_component__WEBPACK_IMPORTED_MODULE_100__["UpdatePasswordComponent"],
            _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_101__["ErrorPageComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__["FlexLayoutModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            ng_http_loader__WEBPACK_IMPORTED_MODULE_6__["NgHttpLoaderModule"].forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
            ngx_color_picker__WEBPACK_IMPORTED_MODULE_54__["ColorPickerModule"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_10__["LayoutModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__["MatToolbarModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_25__["NgxPaginationModule"],
            ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_35__["NgxMaterialTimepickerModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_15__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatAutocompleteModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__["MatCheckboxModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_18__["MatGridListModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_19__["MatCardModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__["MatFormFieldModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatInputModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_22__["MatDatepickerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatNativeDateModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_26__["MatDialogModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_27__["MatExpansionModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_28__["MatMenuModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_29__["MatSelectModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_30__["MatTooltipModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_31__["MatSnackBarModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_32__["MatChipsModule"],
            _ngmodule_material_carousel__WEBPACK_IMPORTED_MODULE_87__["MatCarouselModule"].forRoot(),
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_33__["MatTabsModule"],
            ngx_material_file_input__WEBPACK_IMPORTED_MODULE_5__["MaterialFileInputModule"],
            angular_calendar__WEBPACK_IMPORTED_MODULE_23__["CalendarModule"].forRoot({
                provide: angular_calendar__WEBPACK_IMPORTED_MODULE_23__["DateAdapter"],
                useFactory: angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_24__["adapterFactory"]
            }),
            _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_51__["FullCalendarModule"]
        ],
        entryComponents: [
            _home_calendar_event_detail_event_detail_component__WEBPACK_IMPORTED_MODULE_61__["EventDetailComponent"],
            _home_calendar_calendar_create_calendar_create_component__WEBPACK_IMPORTED_MODULE_62__["CalendarCreateComponent"],
            _home_calendar_calendar_list_calendar_item_calendar_item_component__WEBPACK_IMPORTED_MODULE_52__["CalRename"],
            _home_calendar_calendar_list_calendar_item_calendar_item_component__WEBPACK_IMPORTED_MODULE_52__["DeleteConfirm"],
            _home_calendar_share_calendar_share_calendar_component__WEBPACK_IMPORTED_MODULE_63__["ShareCalendarComponent"],
            _home_calendar_event_detail_event_detail_component__WEBPACK_IMPORTED_MODULE_61__["EventDeleteConfirm"],
            _home_shared_group_selection__WEBPACK_IMPORTED_MODULE_53__["GroupSelection"],
            _home_group_group_detail_group_detail_component__WEBPACK_IMPORTED_MODULE_69__["DialogShareGroup"],
            _home_group_message_group_message_group_component__WEBPACK_IMPORTED_MODULE_79__["MessageGroupComponent"],
            _home_administration_delete_users_delete_users_component__WEBPACK_IMPORTED_MODULE_74__["DeleteUsers"],
            _home_calendar_event_detail_share_event__WEBPACK_IMPORTED_MODULE_82__["ShareEvent"],
            _home_administration_update_roles_update_roles_component__WEBPACK_IMPORTED_MODULE_73__["RoleConfirm"],
            _home_appointment_shared_appointment_appointment_snackbar_appointment_snackbar_component__WEBPACK_IMPORTED_MODULE_95__["AppointmentSnackbarComponent"]
        ],
        providers: [
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_22__["MatDatepickerModule"],
            _home_calendar_events_service__WEBPACK_IMPORTED_MODULE_55__["EventService"],
            _home_calendar_calendar_list_calendar_service__WEBPACK_IMPORTED_MODULE_56__["CalendarService"],
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_60__["AuthInterceptor"], multi: true },
            { provide: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_26__["MAT_DIALOG_DEFAULT_OPTIONS"], useValue: { hasBackdrop: false } }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/auth/auth-interceptor.ts":
/*!******************************************!*\
  !*** ./src/app/auth/auth-interceptor.ts ***!
  \******************************************/
/*! exports provided: AuthInterceptor, httpInterceptorProviders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "httpInterceptorProviders", function() { return httpInterceptorProviders; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _token_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./token-storage.service */ "./src/app/auth/token-storage.service.ts");




const TOKEN_HEADER_KEY = 'Authorization';
let AuthInterceptor = class AuthInterceptor {
    constructor(token) {
        this.token = token;
    }
    intercept(req, next) {
        let authReq = req;
        const token = this.token.getToken();
        if (token != null) {
            authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token) });
        }
        return next.handle(authReq);
    }
};
AuthInterceptor.ctorParameters = () => [
    { type: _token_storage_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"] }
];
AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_token_storage_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"]])
], AuthInterceptor);

const httpInterceptorProviders = [
    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"], useClass: AuthInterceptor, multi: true }
];


/***/ }),

/***/ "./src/app/auth/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _token_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./token-storage.service */ "./src/app/auth/token-storage.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");





let AuthGuard = class AuthGuard {
    constructor(router, tokenStorageService, authServices) {
        this.router = router;
        this.tokenStorageService = tokenStorageService;
        this.authServices = authServices;
    }
    canActivate(route, state) {
        if (this.authServices.isUserLoggedIn()) {
            return true;
        }
        else {
            this.router.createUrlTree(["/login"]);
            return false;
        }
    }
};
AuthGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _token_storage_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _token_storage_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"],
        _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
], AuthGuard);



/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _token_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./token-storage.service */ "./src/app/auth/token-storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");








const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ "Content-Type": "application/json" })
};
let AuthService = class AuthService {
    constructor(http, tokenStorage, router, _snackbar) {
        this.http = http;
        this.tokenStorage = tokenStorage;
        this.router = router;
        this._snackbar = _snackbar;
        this.loginUrl = "http://ec2-100-26-194-180.compute-1.amazonaws.com:8181/api/auth/signin";
        this.signupUrl = "http://ec2-100-26-194-180.compute-1.amazonaws.com:8181/api/auth/signup";
        this.userRoleSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]({});
        this.usernameSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]({});
        this.nameSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]({});
        this.userRole = this.userRoleSubject.asObservable();
        this.isLoggedin = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](true);
        this.isLoggedIn = this.isLoggedin.asObservable();
        this.isLoadingSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
        this.isLoading = this.isLoadingSubject.asObservable();
    }
    get user() {
        this.userRoleSubject.next(this.tokenStorage.getAuthority());
        return this.userRoleSubject.value;
    }
    get username() {
        this.usernameSubject.next(this.tokenStorage.getUsername());
        return this.usernameSubject.value;
    }
    get name() {
        this.nameSubject.next(this.tokenStorage.getName());
        return this.nameSubject.value;
    }
    attemptAuth(credentials) {
        return this.http
            .post(this.loginUrl, credentials, httpOptions)
            .subscribe((data) => {
            if (data) {
                if (data.result) {
                    this.tokenStorage.saveToken(data.result.accessToken);
                    this.tokenStorage.saveUsername(data.result.name);
                    this.tokenStorage.saveName(data.result.username);
                    this.tokenStorage.saveAuthority(data.result.role);
                    this.userRoleSubject.next(this.tokenStorage.getAuthority());
                    this.usernameSubject.next(this.tokenStorage.getUsername());
                    console.log(data.result.role);
                    this.isLoggedin.next(true);
                    this._snackbar.open("Login Successful!", "close", {
                        duration: 4000,
                        panelClass: ["standard"]
                    });
                    // this.router.navigate(["home"]);
                }
                else {
                    this._snackbar.open(data.message, "close", {
                        duration: 4000,
                        panelClass: ["delete"]
                    });
                }
                // if (data.status == 403) {
                //   this._snackbar.openFromComponent(AppointmentSnackbarComponent, {
                //     duration: 4000,
                //     panelClass: ["delete"],
                //     data: data.message
                //   });
                //   this.isLoggedin.next(false);
                // }
                console.log(data);
                console.log(data.result);
                this.tokenStorage.saveToken(data.result.accessToken);
                this.tokenStorage.saveUsername(data.result.name);
                this.tokenStorage.saveName(data.result.username);
                this.tokenStorage.saveAuthority(data.result.role);
                this.userRoleSubject.next(this.tokenStorage.getAuthority());
                this.usernameSubject.next(this.tokenStorage.getUsername());
                console.log(data.result.role);
                this.isLoggedin.next(true);
                this.router.navigate(["home"]);
            }
            else {
                this.isLoggedin.next(false);
            }
        });
    }
    signUp(info) {
        return this.http
            .post(this.signupUrl, info, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    handleError(errorRes) {
        let errorMessage = "An unknown error occured!";
        if (!errorRes.error || !errorRes.error.error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
        }
        errorMessage = errorRes.error.error.message;
        // switch (errorRes.error.error.message) {
        //   case "...":
        //     errorMessage = "...";
        // }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
    }
    isUserLoggedIn() {
        return !!this.tokenStorage.getToken();
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _token_storage_service__WEBPACK_IMPORTED_MODULE_5__["TokenStorageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
        _token_storage_service__WEBPACK_IMPORTED_MODULE_5__["TokenStorageService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
        _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"]])
], AuthService);



/***/ }),

/***/ "./src/app/auth/signup-info.ts":
/*!*************************************!*\
  !*** ./src/app/auth/signup-info.ts ***!
  \*************************************/
/*! exports provided: SignUpInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpInfo", function() { return SignUpInfo; });
class SignUpInfo {
    // verified: boolean;
    constructor(name, username, email, password, role) {
        this.name = name;
        this.username = username;
        this.email = email;
        this.password = password;
        this.role = role;
    }
}
SignUpInfo.ctorParameters = () => [
    { type: String },
    { type: String },
    { type: String },
    { type: String },
    { type: Array }
];


/***/ }),

/***/ "./src/app/auth/token-storage.service.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/token-storage.service.ts ***!
  \***********************************************/
/*! exports provided: TokenStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenStorageService", function() { return TokenStorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


const TOKEN_KEY = "AuthToken";
// const USERNAME_KEY = "AuthUsername";
const USERNAME_KEY = "AuthName";
// const AUTHORITIES_KEY = "AuthAuthorities";
const AUTHORITY_KEY = "AuthAuthorities";
const NAME_KEY = "AuthUsername";
let TokenStorageService = class TokenStorageService {
    // private roles: Array<string> = [];
    // tokenExists: boolean;
    constructor() { }
    signOut() {
        window.localStorage.clear();
        // this.tokenExists = false;
    }
    saveToken(token) {
        window.localStorage.removeItem(TOKEN_KEY);
        window.localStorage.setItem(TOKEN_KEY, token);
        // this.tokenExists = true;
    }
    getToken() {
        return localStorage.getItem(TOKEN_KEY);
    }
    saveUsername(username) {
        window.localStorage.removeItem(USERNAME_KEY);
        window.localStorage.setItem(USERNAME_KEY, username);
    }
    getUsername() {
        return localStorage.getItem(USERNAME_KEY);
    }
    saveName(name) {
        window.localStorage.removeItem(NAME_KEY);
        window.localStorage.setItem(NAME_KEY, name);
    }
    getName() {
        return localStorage.getItem(NAME_KEY);
    }
    saveAuthority(authority) {
        window.localStorage.removeItem(AUTHORITY_KEY);
        window.localStorage.setItem(AUTHORITY_KEY, authority);
    }
    getAuthority() {
        return localStorage.getItem(AUTHORITY_KEY);
    }
};
TokenStorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], TokenStorageService);



/***/ }),

/***/ "./src/app/broadcast/broadcast.component.css":
/*!***************************************************!*\
  !*** ./src/app/broadcast/broadcast.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\r\n  background-color: black;\r\n  height: 100%;\r\n}\r\n\r\n.maroon {\r\n  color: #800029 !important;\r\n}\r\n\r\n.mat-button.mat-accent,\r\n.mat-icon-button.mat-accent,\r\n.mat-stroked-button.mat-accent {\r\n  color: #800029 !important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnJvYWRjYXN0L2Jyb2FkY2FzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTs7O0VBR0UseUJBQXlCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvYnJvYWRjYXN0L2Jyb2FkY2FzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLm1hcm9vbiB7XHJcbiAgY29sb3I6ICM4MDAwMjkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1hdC1idXR0b24ubWF0LWFjY2VudCxcclxuLm1hdC1pY29uLWJ1dHRvbi5tYXQtYWNjZW50LFxyXG4ubWF0LXN0cm9rZWQtYnV0dG9uLm1hdC1hY2NlbnQge1xyXG4gIGNvbG9yOiAjODAwMDI5ICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/broadcast/broadcast.component.ts":
/*!**************************************************!*\
  !*** ./src/app/broadcast/broadcast.component.ts ***!
  \**************************************************/
/*! exports provided: BroadcastComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BroadcastComponent", function() { return BroadcastComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _home_shared_data_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../home/shared/data-storage.service */ "./src/app/home/shared/data-storage.service.ts");



let BroadcastComponent = class BroadcastComponent {
    constructor(dataStorage) {
        this.dataStorage = dataStorage;
    }
    ngOnInit() {
        this.images = [];
        this.newImgs = [];
        this.dataStorage.getImages().subscribe(result => {
            this.images = result.result;
            for (let img of this.images) {
                const date = new Date().valueOf();
                const newUrl = this.dataURItoBlob(img);
                let text = '';
                const possibleText = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                for (let i = 0; i < 5; i++) {
                    text += possibleText.charAt(Math.floor(Math.random() * possibleText.length));
                }
                // Replace extension according to your media type
                const imageName = date + '.' + text + '.jpeg';
                const imageFile = new File([newUrl], imageName, { type: 'image/jpeg' });
                const reader = new FileReader();
                reader.readAsDataURL(imageFile);
                reader.onloadend = (_event) => {
                    this.newImgs.push(reader.result);
                };
            }
            console.log(this.newImgs);
        });
    }
    dataURItoBlob(dataURI) {
        const byteString = window.atob(dataURI);
        const arrayBuffer = new ArrayBuffer(byteString.length);
        const int8Array = new Uint8Array(arrayBuffer);
        for (let i = 0; i < byteString.length; i++) {
            int8Array[i] = byteString.charCodeAt(i);
        }
        const blob = new Blob([int8Array], { type: 'image/jpeg' });
        return blob;
    }
};
BroadcastComponent.ctorParameters = () => [
    { type: _home_shared_data_storage_service__WEBPACK_IMPORTED_MODULE_2__["DataStorageService"] }
];
BroadcastComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-broadcast',
        template: __webpack_require__(/*! raw-loader!./broadcast.component.html */ "./node_modules/raw-loader/index.js!./src/app/broadcast/broadcast.component.html"),
        styles: [__webpack_require__(/*! ./broadcast.component.css */ "./src/app/broadcast/broadcast.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_home_shared_data_storage_service__WEBPACK_IMPORTED_MODULE_2__["DataStorageService"]])
], BroadcastComponent);



/***/ }),

/***/ "./src/app/change-password/change-password.component.css":
/*!***************************************************************!*\
  !*** ./src/app/change-password/change-password.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".primary {\r\n  color: white;\r\n  background-color: #800029\r\n    /* border: #800029 solid 1px; */\r\n    /* background-color: blanchedalmond; */\r\n    /* width: 10%; */\r\n}\r\n\r\n.example-card {\r\n  box-shadow: 3px 3px 0px 1px #BD955A;\r\n  border: 2px solid #800029;\r\n  width: 250px;\r\n  margin: 30px auto;\r\n  padding: 20px;\r\n\r\n  /* padding-top: 20px; */\r\n}\r\n\r\n.example-full-width {\r\n  width: 100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhbmdlLXBhc3N3b3JkL2NoYW5nZS1wYXNzd29yZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLHdCQUF3QjtJQUN0QiwrQkFBK0I7SUFDL0Isc0NBQXNDO0lBQ3RDLGdCQUFnQjtBQUNwQjs7QUFFQTtFQUNFLG1DQUFtQztFQUNuQyx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixhQUFhOztFQUViLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2NoYW5nZS1wYXNzd29yZC9jaGFuZ2UtcGFzc3dvcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcmltYXJ5IHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzgwMDAyOVxyXG4gICAgLyogYm9yZGVyOiAjODAwMDI5IHNvbGlkIDFweDsgKi9cclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGJsYW5jaGVkYWxtb25kOyAqL1xyXG4gICAgLyogd2lkdGg6IDEwJTsgKi9cclxufVxyXG5cclxuLmV4YW1wbGUtY2FyZCB7XHJcbiAgYm94LXNoYWRvdzogM3B4IDNweCAwcHggMXB4ICNCRDk1NUE7XHJcbiAgYm9yZGVyOiAycHggc29saWQgIzgwMDAyOTtcclxuICB3aWR0aDogMjUwcHg7XHJcbiAgbWFyZ2luOiAzMHB4IGF1dG87XHJcbiAgcGFkZGluZzogMjBweDtcclxuXHJcbiAgLyogcGFkZGluZy10b3A6IDIwcHg7ICovXHJcbn1cclxuXHJcbi5leGFtcGxlLWZ1bGwtd2lkdGgge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/change-password/change-password.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/change-password/change-password.component.ts ***!
  \**************************************************************/
/*! exports provided: ChangePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function() { return ChangePasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _auth_token_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/token-storage.service */ "./src/app/auth/token-storage.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_shared_data_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../home/shared/data-storage.service */ "./src/app/home/shared/data-storage.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");








let ChangePasswordComponent = class ChangePasswordComponent {
    // constructor(private route: ActivatedRoute) {
    //   console.log('Called Constructor');
    //   this.route.queryParams.subscribe(params => {
    //       this.param1 = params['param1'];
    //       this.param2 = params['param2'];
    //   });
    // }
    constructor(authService, tokenStorage, formBuilder, router, route, dataStorageService, _snackbar) {
        this.authService = authService;
        this.tokenStorage = tokenStorage;
        this.formBuilder = formBuilder;
        this.router = router;
        this.route = route;
        this.dataStorageService = dataStorageService;
        this._snackbar = _snackbar;
        this.route.queryParams.subscribe(params => {
            this.resetToken = params["resetToken"];
            console.log(this.resetToken);
        });
    }
    ngOnInit() {
        this.forgotPasswordForm = this.formBuilder.group({
            newPassword: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            confirmNewPassword: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    }
    onSubmit() {
        const formValues = this.forgotPasswordForm.value;
        if (this.forgotPasswordForm.invalid) {
            return;
        }
        const changePasswordObject = {
            password: formValues.newPassword,
            resetToken: this.resetToken
        };
        console.log(changePasswordObject);
        this.dataStorageService
            .submitPassword(changePasswordObject)
            .subscribe(result => {
            console.log(result);
            if (result) {
                if (result.result) {
                    this._snackbar.open("Your password have been changed successfully. Please login!", "close", {
                        duration: 5000,
                        panelClass: ["standard"]
                    });
                    this.router.navigate(["login"]);
                }
            }
            else {
                this._snackbar.open(result.message, "close", {
                    duration: 5000,
                    panelClass: ["delete"]
                });
            }
        });
    }
};
ChangePasswordComponent.ctorParameters = () => [
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _auth_token_storage_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _home_shared_data_storage_service__WEBPACK_IMPORTED_MODULE_6__["DataStorageService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"] }
];
ChangePasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-change-password",
        template: __webpack_require__(/*! raw-loader!./change-password.component.html */ "./node_modules/raw-loader/index.js!./src/app/change-password/change-password.component.html"),
        styles: [__webpack_require__(/*! ./change-password.component.css */ "./src/app/change-password/change-password.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
        _auth_token_storage_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
        _home_shared_data_storage_service__WEBPACK_IMPORTED_MODULE_6__["DataStorageService"],
        _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"]])
], ChangePasswordComponent);



/***/ }),

/***/ "./src/app/error-page/error-page.component.css":
/*!*****************************************************!*\
  !*** ./src/app/error-page/error-page.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Vycm9yLXBhZ2UvZXJyb3ItcGFnZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/error-page/error-page.component.ts":
/*!****************************************************!*\
  !*** ./src/app/error-page/error-page.component.ts ***!
  \****************************************************/
/*! exports provided: ErrorPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorPageComponent", function() { return ErrorPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let ErrorPageComponent = class ErrorPageComponent {
    constructor(snackbar, router) {
        this.snackbar = snackbar;
        this.router = router;
    }
    ngOnInit() {
        this.snackbar.open('An unknown error occurred. Please try again later.', 'close', { duration: 3000, panelClass: ["delete"] });
        this.router.navigate(["home/dashboard"]);
    }
};
ErrorPageComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
ErrorPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-error-page',
        template: __webpack_require__(/*! raw-loader!./error-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/error-page/error-page.component.html"),
        styles: [__webpack_require__(/*! ./error-page.component.css */ "./src/app/error-page/error-page.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], ErrorPageComponent);



/***/ }),

/***/ "./src/app/home/administration/administration.component.css":
/*!******************************************************************!*\
  !*** ./src/app/home/administration/administration.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\r\n  padding-left: 5vw;\r\n  padding-right: 5vw;\r\n  padding-top: 5vh;\r\n  overflow-y: hidden;\r\n  height: 100%;\r\n}\r\n\r\n/* .admin-wrap{\r\n\r\n} */\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9hZG1pbmlzdHJhdGlvbi9hZG1pbmlzdHJhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFFQTs7R0FFRyIsImZpbGUiOiJzcmMvYXBwL2hvbWUvYWRtaW5pc3RyYXRpb24vYWRtaW5pc3RyYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyIHtcclxuICBwYWRkaW5nLWxlZnQ6IDV2dztcclxuICBwYWRkaW5nLXJpZ2h0OiA1dnc7XHJcbiAgcGFkZGluZy10b3A6IDV2aDtcclxuICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4vKiAuYWRtaW4td3JhcHtcclxuXHJcbn0gKi9cclxuIl19 */"

/***/ }),

/***/ "./src/app/home/administration/administration.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/home/administration/administration.component.ts ***!
  \*****************************************************************/
/*! exports provided: AdministrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdministrationComponent", function() { return AdministrationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let AdministrationComponent = class AdministrationComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ngOnInit() {
        this.role = this.authService.user;
        if (this.role !== 'ROLE_ADMIN') {
            this.router.navigate(['home/dashboard']);
        }
    }
};
AdministrationComponent.ctorParameters = () => [
    { type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
AdministrationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-administration',
        template: __webpack_require__(/*! raw-loader!./administration.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/administration/administration.component.html"),
        styles: [__webpack_require__(/*! ./administration.component.css */ "./src/app/home/administration/administration.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], AdministrationComponent);



/***/ }),

/***/ "./src/app/home/administration/broadcast-management/broadcast-management.component.css":
/*!*********************************************************************************************!*\
  !*** ./src/app/home/administration/broadcast-management/broadcast-management.component.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container{\r\n    width:50%;\r\n}\r\n.img-wrap{\r\n    margin-top:15px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9hZG1pbmlzdHJhdGlvbi9icm9hZGNhc3QtbWFuYWdlbWVudC9icm9hZGNhc3QtbWFuYWdlbWVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksU0FBUztBQUNiO0FBQ0E7SUFDSSxlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9hZG1pbmlzdHJhdGlvbi9icm9hZGNhc3QtbWFuYWdlbWVudC9icm9hZGNhc3QtbWFuYWdlbWVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtY29udGFpbmVye1xyXG4gICAgd2lkdGg6NTAlO1xyXG59XHJcbi5pbWctd3JhcHtcclxuICAgIG1hcmdpbi10b3A6MTVweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/administration/broadcast-management/broadcast-management.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/home/administration/broadcast-management/broadcast-management.component.ts ***!
  \********************************************************************************************/
/*! exports provided: BroadcastManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BroadcastManagementComponent", function() { return BroadcastManagementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_data_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/data-storage.service */ "./src/app/home/shared/data-storage.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _appointment_shared_appointment_appointment_snackbar_appointment_snackbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../appointment/shared-appointment/appointment-snackbar/appointment-snackbar.component */ "./src/app/home/appointment/shared-appointment/appointment-snackbar/appointment-snackbar.component.ts");








let BroadcastManagementComponent = class BroadcastManagementComponent {
    constructor(formBuilder, router, dataStorage, _snackBar, sanitizer) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.dataStorage = dataStorage;
        this._snackBar = _snackBar;
        this.sanitizer = sanitizer;
        this.validFileExtensions = ["png", "jpg", "webp", "jpeg", "PNG", "JPG", "WEBP", "JPEG", "jfif"];
        this.isInvalid = false;
        this.userFile = File;
    }
    ngOnInit() {
        this.images = [];
        this.tempArr = [];
        this.newImgs = [];
        this.dataStorage.getImages().subscribe(result => {
            if (result.result) {
                this.images = result.result;
                for (let img of this.images) {
                    const date = new Date().valueOf();
                    const newUrl = this.dataURItoBlob(img);
                    let text = '';
                    const possibleText = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                    for (let i = 0; i < 5; i++) {
                        text += possibleText.charAt(Math.floor(Math.random() * possibleText.length));
                    }
                    // Replace extension according to your media type
                    const imageName = date + '.' + text + '.jpeg';
                    const imageFile = new File([newUrl], imageName, { type: 'image/jpeg' });
                    this.tempArr.push(imageFile);
                    const reader = new FileReader();
                    reader.readAsDataURL(imageFile);
                    reader.onloadend = (_event) => {
                        this.newImgs.push(reader.result);
                    };
                }
            }
            else {
                this._snackBar.open('Something went wrong. Please try again later.');
            }
            console.log(this.newImgs);
        });
        this.imageForm = this.formBuilder.group({
            image: [undefined, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    dataURItoBlob(dataURI) {
        const byteString = window.atob(dataURI);
        const arrayBuffer = new ArrayBuffer(byteString.length);
        const int8Array = new Uint8Array(arrayBuffer);
        for (let i = 0; i < byteString.length; i++) {
            int8Array[i] = byteString.charCodeAt(i);
        }
        const blob = new Blob([int8Array], { type: 'image/png' });
        return blob;
    }
    upload(event) {
        const files = event.target.files;
        for (let file of files) {
            if (this.validateFile(file.name)) {
                const reader = new FileReader();
                this.tempArr.push(file);
                console.log(this.tempArr);
                reader.readAsDataURL(file);
                reader.onloadend = (_event) => {
                    this.newImgs.push(reader.result);
                };
                console.log(file);
                this.userFile = file;
            }
        }
    }
    delete(index) {
        this.newImgs.splice(index, 1);
        this.tempArr.splice(index, 1);
    }
    validateFile(name) {
        var fileExt = name.substring(name.lastIndexOf(".") + 1);
        for (let ext of this.validFileExtensions) {
            if (fileExt.toLowerCase() == ext) {
                return true;
            }
        }
        return false;
    }
    onSubmit() {
        this.dataStorage.uploadImage(this.tempArr).subscribe(result => {
            this._snackBar.open(result.message, '', { duration: 5000 });
        });
    }
    saveForm(submitForm) {
        this.dataStorage.uploadImage(this.tempArr).subscribe(result => {
            if (result) {
                this._snackBar.openFromComponent(_appointment_shared_appointment_appointment_snackbar_appointment_snackbar_component__WEBPACK_IMPORTED_MODULE_7__["AppointmentSnackbarComponent"], { duration: 4000, panelClass: ["standard"], data: result.message });
            }
            else {
                this._snackBar.openFromComponent(_appointment_shared_appointment_appointment_snackbar_appointment_snackbar_component__WEBPACK_IMPORTED_MODULE_7__["AppointmentSnackbarComponent"], { duration: 4000, panelClass: ["standard"], data: 'Something went wrong.' });
            }
        });
    }
    ngOnDestroy() {
        this.dataStorage.uploadImage(this.tempArr);
    }
};
BroadcastManagementComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _shared_data_storage_service__WEBPACK_IMPORTED_MODULE_4__["DataStorageService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"] }
];
BroadcastManagementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-broadcast-management',
        template: __webpack_require__(/*! raw-loader!./broadcast-management.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/administration/broadcast-management/broadcast-management.component.html"),
        styles: [__webpack_require__(/*! ./broadcast-management.component.css */ "./src/app/home/administration/broadcast-management/broadcast-management.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _shared_data_storage_service__WEBPACK_IMPORTED_MODULE_4__["DataStorageService"],
        _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"]])
], BroadcastManagementComponent);



/***/ }),

/***/ "./src/app/home/administration/delete-users/delete-users.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/home/administration/delete-users/delete-users.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".users-wrap {\r\n  overflow-y: auto;\r\n  height: 74%;\r\n  padding: 3px;\r\n  padding-left: 8px;\r\n}\r\n\r\nmat-toolbar {\r\n  font-size: 1em;\r\n  color: #800029;\r\n  height: 1em;\r\n}\r\n\r\n.spacer {\r\n  flex: 1 1 auto;\r\n}\r\n\r\n/* .submit-button {\r\n  height: 2.5em;\r\n} */\r\n\r\n.mat-card>.mat-card-actions:last-child {\r\n  margin-bottom: auto;\r\n  padding-bottom: 0;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9hZG1pbmlzdHJhdGlvbi9kZWxldGUtdXNlcnMvZGVsZXRlLXVzZXJzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsY0FBYztFQUNkLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7O0dBRUc7O0FBRUg7RUFDRSxtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9hZG1pbmlzdHJhdGlvbi9kZWxldGUtdXNlcnMvZGVsZXRlLXVzZXJzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXNlcnMtd3JhcCB7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICBoZWlnaHQ6IDc0JTtcclxuICBwYWRkaW5nOiAzcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XHJcbn1cclxuXHJcbm1hdC10b29sYmFyIHtcclxuICBmb250LXNpemU6IDFlbTtcclxuICBjb2xvcjogIzgwMDAyOTtcclxuICBoZWlnaHQ6IDFlbTtcclxufVxyXG5cclxuLnNwYWNlciB7XHJcbiAgZmxleDogMSAxIGF1dG87XHJcbn1cclxuXHJcbi8qIC5zdWJtaXQtYnV0dG9uIHtcclxuICBoZWlnaHQ6IDIuNWVtO1xyXG59ICovXHJcblxyXG4ubWF0LWNhcmQ+Lm1hdC1jYXJkLWFjdGlvbnM6bGFzdC1jaGlsZCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcclxuICBwYWRkaW5nLWJvdHRvbTogMDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/home/administration/delete-users/delete-users.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/home/administration/delete-users/delete-users.component.ts ***!
  \****************************************************************************/
/*! exports provided: DeleteUsersComponent, DeleteUsers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteUsersComponent", function() { return DeleteUsersComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteUsers", function() { return DeleteUsers; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _shared_data_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/data-storage.service */ "./src/app/home/shared/data-storage.service.ts");




let DeleteUsersComponent = class DeleteUsersComponent {
    constructor(dialog, dataStorage, snackbar) {
        this.dialog = dialog;
        this.dataStorage = dataStorage;
        this.snackbar = snackbar;
        this.searchText = "";
        this.users = [];
    }
    ngOnInit() {
        this.updates = [];
        this.updateEmails = [];
        this.dataStorage.fetchUsers();
        this.dataStorage.isLoading.subscribe(loading => {
            if (!loading) {
                this.users = this.dataStorage.users;
            }
        });
        this.users.sort((a, b) => a.name.toLowerCase() < b.name.toLowerCase()
            ? -1
            : a.name.toLowerCase() > b.name.toLowerCase()
                ? 1
                : 0);
    }
    addUser(name, email) {
        if (this.updateEmails.includes(email)) {
            this.updateEmails.splice(this.updateEmails.indexOf(email), 1);
            this.updates.splice(this.updateEmails.indexOf(email), 1);
        }
        else {
            this.updates.push({
                name: name,
                email: email
            });
            this.updateEmails.push(email);
        }
        console.log(this.updateEmails);
        console.log(this.updates);
    }
    onSubmit() {
        if (this.updateEmails.length === 0) {
            alert("Please make at least one selection first.");
        }
        else {
            const dialogRef = this.dialog.open(DeleteUsers, {
                width: "650px",
                height: "400px",
                data: this.updates
            });
            dialogRef.afterClosed().subscribe(result => {
                if (result === "confirmed") {
                    const obj = {
                        "emails": this.updateEmails
                    };
                    this.dataStorage.deleteUsers(this.updateEmails).subscribe(result => {
                        console.log(result);
                        if (result) {
                            this.snackbar.open(result.message, '', { duration: 3000, panelClass: ["standard"] });
                            this.dataStorage.fetchUsers();
                        }
                        else {
                            this.snackbar.open('Something went wrong. Please try again later', '', { duration: 3000, panelClass: ["standard"] });
                        }
                    });
                    this.updates = [];
                    this.updateEmails = [];
                }
            });
        }
    }
};
DeleteUsersComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: _shared_data_storage_service__WEBPACK_IMPORTED_MODULE_3__["DataStorageService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] }
];
DeleteUsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-delete-users",
        template: __webpack_require__(/*! raw-loader!./delete-users.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/administration/delete-users/delete-users.component.html"),
        styles: [__webpack_require__(/*! ./delete-users.component.css */ "./src/app/home/administration/delete-users/delete-users.component.css"), __webpack_require__(/*! ../register-users/register-users.component.css */ "./src/app/home/administration/register-users/register-users.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
        _shared_data_storage_service__WEBPACK_IMPORTED_MODULE_3__["DataStorageService"],
        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
], DeleteUsersComponent);

let DeleteUsers = class DeleteUsers {
    constructor(dialog, data) {
        this.dialog = dialog;
        this.data = data;
    }
    close() {
        this.dialog.close("cancel");
    }
    confirm() {
        console.log(this.data);
        this.dialog.close("confirmed");
    }
};
DeleteUsers.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
DeleteUsers = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "user-delete",
        template: __webpack_require__(/*! raw-loader!./user-delete-confirm.html */ "./node_modules/raw-loader/index.js!./src/app/home/administration/delete-users/user-delete-confirm.html"),
        styles: [__webpack_require__(/*! ./user-delete-confirm.css */ "./src/app/home/administration/delete-users/user-delete-confirm.css"), __webpack_require__(/*! ./delete-users.component.css */ "./src/app/home/administration/delete-users/delete-users.component.css"), __webpack_require__(/*! ../register-users/register-users.component.css */ "./src/app/home/administration/register-users/register-users.component.css"), __webpack_require__(/*! ../update-roles/role-confirm.css */ "./src/app/home/administration/update-roles/role-confirm.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
], DeleteUsers);



/***/ }),

/***/ "./src/app/home/administration/delete-users/user-delete-confirm.css":
/*!**************************************************************************!*\
  !*** ./src/app/home/administration/delete-users/user-delete-confirm.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvYWRtaW5pc3RyYXRpb24vZGVsZXRlLXVzZXJzL3VzZXItZGVsZXRlLWNvbmZpcm0uY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/administration/register-users/register-users.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/home/administration/register-users/register-users.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".primary {\r\n  color: #800029;\r\n  border: #800029 solid 1px;\r\n  /* background-color: blanchedalmond; */\r\n  /* width: 10%; */\r\n}\r\n\r\n.primary.submit-button{\r\n  margin:10px;\r\n}\r\n\r\nmat-card-actions{\r\n  padding-left:10px;\r\n}\r\n\r\nmat-card{\r\n  padding: 10px;\r\n  color: #800029;\r\n  border: solid 1pt rgba(169, 169, 169, 0.486);\r\n}\r\n\r\nmat-toolbar-row{\r\n  background-color:white;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9hZG1pbmlzdHJhdGlvbi9yZWdpc3Rlci11c2Vycy9yZWdpc3Rlci11c2Vycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLHlCQUF5QjtFQUN6QixzQ0FBc0M7RUFDdEMsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLGNBQWM7RUFDZCw0Q0FBNEM7QUFDOUM7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2FkbWluaXN0cmF0aW9uL3JlZ2lzdGVyLXVzZXJzL3JlZ2lzdGVyLXVzZXJzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJpbWFyeSB7XHJcbiAgY29sb3I6ICM4MDAwMjk7XHJcbiAgYm9yZGVyOiAjODAwMDI5IHNvbGlkIDFweDtcclxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBibGFuY2hlZGFsbW9uZDsgKi9cclxuICAvKiB3aWR0aDogMTAlOyAqL1xyXG59XHJcblxyXG4ucHJpbWFyeS5zdWJtaXQtYnV0dG9ue1xyXG4gIG1hcmdpbjoxMHB4O1xyXG59XHJcblxyXG5tYXQtY2FyZC1hY3Rpb25ze1xyXG4gIHBhZGRpbmctbGVmdDoxMHB4O1xyXG59XHJcblxyXG5tYXQtY2FyZHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGNvbG9yOiAjODAwMDI5O1xyXG4gIGJvcmRlcjogc29saWQgMXB0IHJnYmEoMTY5LCAxNjksIDE2OSwgMC40ODYpO1xyXG59XHJcblxyXG5tYXQtdG9vbGJhci1yb3d7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/administration/register-users/register-users.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/home/administration/register-users/register-users.component.ts ***!
  \********************************************************************************/
/*! exports provided: RegisterUsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterUsersComponent", function() { return RegisterUsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shared_data_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/data-storage.service */ "./src/app/home/shared/data-storage.service.ts");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







// import { FileValidator } from "ngx-material-file-input";
let RegisterUsersComponent = class RegisterUsersComponent {
    constructor(formBuilder, dataStorage, role, _snackBar, router) {
        this.formBuilder = formBuilder;
        this.dataStorage = dataStorage;
        this.role = role;
        this._snackBar = _snackBar;
        this.router = router;
        this.validFileExtensions = ["xlsx", "csv"];
        this.isInvalid = false;
    }
    ngOnInit() {
        this.currentRole = this.role.user;
        console.log(this.role.user);
        this.uploadForm = this.formBuilder.group({
            uploadFile: [undefined, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            role: ["students", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    // selectFile(event: any) {
    //   this.selectedFiles = event.target.files;
    // }
    // upload() {
    //   this.currentFile = this.selectedFiles.item(0);
    //   this.dataStorage.registerUsers(this.currentFile).subscribe(response => {
    //     console.log(response);
    //   });
    // }
    onSubmit() {
        if (this.isInvalid) {
            this.invalidExtension = "not supported file type!!!";
        }
        else {
            console.log("submitted");
            this.currentFileUpload = this.selectedFiles.item(0);
            console.log(this.currentFileUpload);
            this.dataStorage
                .registerUsers(this.currentFileUpload, this.uploadForm.get("role").value)
                .subscribe(result => {
                console.log(result);
                if (result) {
                    let snackBarRef = this._snackBar.open(result.message, "", { duration: 5000, panelClass: ["standard"] });
                    snackBarRef
                        .onAction()
                        .subscribe(() => this.router.navigate(["/home/admin"]));
                }
                else {
                    this._snackBar.open('Something went wrong.', 'close', { duration: 5000 });
                }
            });
            this.uploadForm.reset();
            this.uploadForm.clearAsyncValidators();
            this.uploadForm.clearValidators();
            this.router.navigate(["/home/admin"]);
        }
    }
    upload(event) {
        this.selectedFiles = event.target.files;
        this.isInvalid = false;
        //check file is valid
        if (!this.validateFile(this.selectedFiles[0].name)) {
            this.isInvalid = true;
            // console.log('Selected file format is not supported');
            // this.invalidExtension = "not supported file type!!!";
            console.log(this.invalidExtension);
            this.invalidExtension = "not supported file type!!!";
            // return this.invalidExtension;
            // return this.isInvalid;
        }
    }
    validateFile(name) {
        var fileExt = name.substring(name.lastIndexOf(".") + 1);
        console.log("Input files extension: " + fileExt);
        for (let ext of this.validFileExtensions) {
            if (fileExt.toLowerCase() == ext) {
                return true;
            }
        }
        return false;
    }
};
RegisterUsersComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _shared_data_storage_service__WEBPACK_IMPORTED_MODULE_3__["DataStorageService"] },
    { type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
RegisterUsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-register-users",
        template: __webpack_require__(/*! raw-loader!./register-users.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/administration/register-users/register-users.component.html"),
        styles: [__webpack_require__(/*! ./register-users.component.css */ "./src/app/home/administration/register-users/register-users.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _shared_data_storage_service__WEBPACK_IMPORTED_MODULE_3__["DataStorageService"],
        src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
], RegisterUsersComponent);



/***/ }),

/***/ "./src/app/home/administration/update-roles/role-confirm.css":
/*!*******************************************************************!*\
  !*** ./src/app/home/administration/update-roles/role-confirm.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".spacer {\r\n  flex: 1 1 auto;\r\n}\r\n\r\nmat-toolbar {\r\n  background-color: white;\r\n  font-size: 1em;\r\n  height: 20%;\r\n}\r\n\r\n.user-wrap {\r\n  margin-left: 15px;\r\n  overflow-y: auto;\r\n  height: 60%;\r\n}\r\n\r\n.user {\r\n  color: '#800029';\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9hZG1pbmlzdHJhdGlvbi91cGRhdGUtcm9sZXMvcm9sZS1jb25maXJtLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsY0FBYztFQUNkLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9hZG1pbmlzdHJhdGlvbi91cGRhdGUtcm9sZXMvcm9sZS1jb25maXJtLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zcGFjZXIge1xyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG59XHJcblxyXG5tYXQtdG9vbGJhciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAxZW07XHJcbiAgaGVpZ2h0OiAyMCU7XHJcbn1cclxuXHJcbi51c2VyLXdyYXAge1xyXG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgaGVpZ2h0OiA2MCU7XHJcbn1cclxuXHJcbi51c2VyIHtcclxuICBjb2xvcjogJyM4MDAwMjknO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/home/administration/update-roles/update-roles.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/home/administration/update-roles/update-roles.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".users-wrap {\r\n  overflow-y: auto;\r\n  height: 74%;\r\n  padding: 3px;\r\n  padding-left: 8px;\r\n}\r\n\r\nmat-toolbar {\r\n  font-size: 1em;\r\n  color: #800029;\r\n}\r\n\r\n.spacer {\r\n  flex: 1 1 auto;\r\n}\r\n\r\n.mat-card>.mat-card-actions:last-child {\r\n  margin-bottom: auto;\r\n  padding-bottom: 0;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9hZG1pbmlzdHJhdGlvbi91cGRhdGUtcm9sZXMvdXBkYXRlLXJvbGVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9hZG1pbmlzdHJhdGlvbi91cGRhdGUtcm9sZXMvdXBkYXRlLXJvbGVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXNlcnMtd3JhcCB7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICBoZWlnaHQ6IDc0JTtcclxuICBwYWRkaW5nOiAzcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XHJcbn1cclxuXHJcbm1hdC10b29sYmFyIHtcclxuICBmb250LXNpemU6IDFlbTtcclxuICBjb2xvcjogIzgwMDAyOTtcclxufVxyXG5cclxuLnNwYWNlciB7XHJcbiAgZmxleDogMSAxIGF1dG87XHJcbn1cclxuXHJcbi5tYXQtY2FyZD4ubWF0LWNhcmQtYWN0aW9uczpsYXN0LWNoaWxkIHtcclxuICBtYXJnaW4tYm90dG9tOiBhdXRvO1xyXG4gIHBhZGRpbmctYm90dG9tOiAwO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/home/administration/update-roles/update-roles.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/home/administration/update-roles/update-roles.component.ts ***!
  \****************************************************************************/
/*! exports provided: UpdateRolesComponent, RoleConfirm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateRolesComponent", function() { return UpdateRolesComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleConfirm", function() { return RoleConfirm; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _shared_data_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/data-storage.service */ "./src/app/home/shared/data-storage.service.ts");




let UpdateRolesComponent = class UpdateRolesComponent {
    constructor(dialog, dataStorage, snackbar) {
        this.dialog = dialog;
        this.dataStorage = dataStorage;
        this.snackbar = snackbar;
        this.users = [];
        this.searchText = "";
    }
    ngOnInit() {
        this.updates = [];
        this.updateEmails = [];
        this.dataStorage.fetchUsers();
        this.dataStorage.isLoading.subscribe(loading => {
            if (!loading) {
                this.users = this.dataStorage.users;
                console.log(this.users);
            }
        });
        this.users.sort((a, b) => a.name.toLowerCase() < b.name.toLowerCase()
            ? -1
            : a.name.toLowerCase() > b.name.toLowerCase()
                ? 1
                : 0);
    }
    addUser(name, email, role) {
        if (this.updateEmails.includes(email)) {
            this.updates.splice(this.updateEmails.indexOf(email), 1);
            this.updates.push({
                name: name,
                email: email,
                roles: role
            });
        }
        else {
            this.updates.push({
                name: name,
                email: email,
                roles: role
            });
            this.updateEmails.push(email);
        }
        console.log(this.updateEmails);
        console.log(this.updates);
    }
    onSubmit() {
        console.log(this.updateEmails.length);
        if (this.updateEmails.length !== 0) {
            const dialogRef = this.dialog.open(RoleConfirm, {
                width: "650px",
                height: "400px",
                data: this.updates
            });
            dialogRef.afterClosed().subscribe(result => {
                if (result === "confirmed") {
                    this.dataStorage.updateRoles(this.updates).subscribe(result => {
                        if (result) {
                            this.snackbar.open(result.message, 'close', { duration: 4000, panelClass: ["standard"] });
                            this.dataStorage.fetchUsers();
                        }
                        else {
                            this.snackbar.open('Something went wrong.', 'close', { duration: 4000, panelClass: ["standard"] });
                        }
                    });
                    this.updateEmails = [];
                    this.updates = [];
                    console.log('fetched');
                }
            });
        }
        else {
            alert("Please make some changes first");
        }
    }
};
UpdateRolesComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: _shared_data_storage_service__WEBPACK_IMPORTED_MODULE_3__["DataStorageService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] }
];
UpdateRolesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-update-roles",
        template: __webpack_require__(/*! raw-loader!./update-roles.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/administration/update-roles/update-roles.component.html"),
        styles: [__webpack_require__(/*! ./update-roles.component.css */ "./src/app/home/administration/update-roles/update-roles.component.css"), __webpack_require__(/*! ../register-users/register-users.component.css */ "./src/app/home/administration/register-users/register-users.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
        _shared_data_storage_service__WEBPACK_IMPORTED_MODULE_3__["DataStorageService"],
        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
], UpdateRolesComponent);

let RoleConfirm = class RoleConfirm {
    constructor(dialog, data) {
        this.dialog = dialog;
        this.data = data;
    }
    confirm() {
        console.log(this.data);
        this.dialog.close("confirmed");
    }
    cancel() {
        this.dialog.close("cancel");
    }
};
RoleConfirm.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
RoleConfirm = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "role-confirm-dialog",
        template: __webpack_require__(/*! raw-loader!./role-confirm.html */ "./node_modules/raw-loader/index.js!./src/app/home/administration/update-roles/role-confirm.html"),
        styles: [__webpack_require__(/*! ./role-confirm.css */ "./src/app/home/administration/update-roles/role-confirm.css"), __webpack_require__(/*! ./update-roles.component.css */ "./src/app/home/administration/update-roles/update-roles.component.css"), __webpack_require__(/*! ../register-users/register-users.component.css */ "./src/app/home/administration/register-users/register-users.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Array])
], RoleConfirm);



/***/ }),

/***/ "./src/app/home/administration/upload-courses/upload-courses.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/home/administration/upload-courses/upload-courses.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".primary {\r\n    color: #800029;\r\n    border: #800029 solid 1px;\r\n    /* background-color: blanchedalmond; */\r\n    /* width: 10%; */\r\n  }\r\n  \r\n  .primary.submit-button{\r\n    margin:10px;\r\n  }\r\n  \r\n  mat-card-actions{\r\n    padding-left:10px;\r\n  }\r\n  \r\n  mat-card{\r\n    padding: 10px;\r\n    color: #800029;\r\n    border: solid 1pt rgba(169, 169, 169, 0.486);\r\n  }\r\n  \r\n  mat-toolbar-row{\r\n    background-color:white;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9hZG1pbmlzdHJhdGlvbi91cGxvYWQtY291cnNlcy91cGxvYWQtY291cnNlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLHlCQUF5QjtJQUN6QixzQ0FBc0M7SUFDdEMsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsYUFBYTtJQUNiLGNBQWM7SUFDZCw0Q0FBNEM7RUFDOUM7O0VBRUE7SUFDRSxzQkFBc0I7RUFDeEIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2FkbWluaXN0cmF0aW9uL3VwbG9hZC1jb3Vyc2VzL3VwbG9hZC1jb3Vyc2VzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJpbWFyeSB7XHJcbiAgICBjb2xvcjogIzgwMDAyOTtcclxuICAgIGJvcmRlcjogIzgwMDAyOSBzb2xpZCAxcHg7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBibGFuY2hlZGFsbW9uZDsgKi9cclxuICAgIC8qIHdpZHRoOiAxMCU7ICovXHJcbiAgfVxyXG4gIFxyXG4gIC5wcmltYXJ5LnN1Ym1pdC1idXR0b257XHJcbiAgICBtYXJnaW46MTBweDtcclxuICB9XHJcbiAgXHJcbiAgbWF0LWNhcmQtYWN0aW9uc3tcclxuICAgIHBhZGRpbmctbGVmdDoxMHB4O1xyXG4gIH1cclxuICBcclxuICBtYXQtY2FyZHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBjb2xvcjogIzgwMDAyOTtcclxuICAgIGJvcmRlcjogc29saWQgMXB0IHJnYmEoMTY5LCAxNjksIDE2OSwgMC40ODYpO1xyXG4gIH1cclxuICBcclxuICBtYXQtdG9vbGJhci1yb3d7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/home/administration/upload-courses/upload-courses.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/home/administration/upload-courses/upload-courses.component.ts ***!
  \********************************************************************************/
/*! exports provided: UploadCoursesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadCoursesComponent", function() { return UploadCoursesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shared_data_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/data-storage.service */ "./src/app/home/shared/data-storage.service.ts");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







let UploadCoursesComponent = class UploadCoursesComponent {
    constructor(formBuilder, dataStorage, role, _snackBar, router) {
        this.formBuilder = formBuilder;
        this.dataStorage = dataStorage;
        this.role = role;
        this._snackBar = _snackBar;
        this.router = router;
        this.validFileExtensions = ["xlsx", "csv"];
        this.isInvalid = false;
    }
    ngOnInit() {
        this.majors = [];
        this.dataStorage.getMajors();
        this.dataStorage.isLoading.subscribe(loading => {
            if (!loading) {
                this.majors = this.dataStorage.majors;
            }
        });
        this.currentRole = this.role.user;
        console.log(this.role.user);
        this.uploadForm = this.formBuilder.group({
            uploadFile: [undefined, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            major: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        console.log(this.majors);
    }
    onSubmit() {
        if (this.isInvalid) {
            this.invalidExtension = "not supported file type!!!";
        }
        else {
            console.log("submitted");
            this.currentFileUpload = this.selectedFiles.item(0);
            console.log(this.currentFileUpload);
            const formData = new FormData();
            formData.append("major", this.uploadForm.value["major"]);
            formData.append("file", this.currentFileUpload);
            this.dataStorage.addCourses(formData).subscribe(result => {
                console.log(result);
                if (result) {
                    this._snackBar.open(result.message, 'close', { duration: 4000, panelClass: ["standard"] });
                }
                else {
                    this._snackBar.open('Something went wrong.', 'close', { duration: 4000, panelClass: ["standard"] });
                }
            });
        }
    }
    upload(event) {
        this.selectedFiles = event.target.files;
        this.isInvalid = false;
        //check file is valid
        if (!this.validateFile(this.selectedFiles[0].name)) {
            this.isInvalid = true;
            // console.log('Selected file format is not supported');
            // this.invalidExtension = "not supported file type!!!";
            console.log(this.invalidExtension);
            // return this.invalidExtension;
            // return this.isInvalid;
        }
    }
    validateFile(name) {
        var fileExt = name.substring(name.lastIndexOf(".") + 1);
        console.log("Input files extension: " + fileExt);
        for (let ext of this.validFileExtensions) {
            if (fileExt.toLowerCase() == ext) {
                return true;
            }
        }
        return false;
    }
};
UploadCoursesComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _shared_data_storage_service__WEBPACK_IMPORTED_MODULE_3__["DataStorageService"] },
    { type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
UploadCoursesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-upload-courses",
        template: __webpack_require__(/*! raw-loader!./upload-courses.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/administration/upload-courses/upload-courses.component.html"),
        styles: [__webpack_require__(/*! ./upload-courses.component.css */ "./src/app/home/administration/upload-courses/upload-courses.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _shared_data_storage_service__WEBPACK_IMPORTED_MODULE_3__["DataStorageService"],
        src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
], UploadCoursesComponent);



/***/ }),

/***/ "./src/app/home/administration/upload-major/upload-major.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/home/administration/upload-major/upload-major.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvYWRtaW5pc3RyYXRpb24vdXBsb2FkLW1ham9yL3VwbG9hZC1tYWpvci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/administration/upload-major/upload-major.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/home/administration/upload-major/upload-major.component.ts ***!
  \****************************************************************************/
/*! exports provided: UploadMajorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadMajorComponent", function() { return UploadMajorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shared_data_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/data-storage.service */ "./src/app/home/shared/data-storage.service.ts");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _group_group_data_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../group/group-data-storage.service */ "./src/app/home/group/group-data-storage.service.ts");








let UploadMajorComponent = class UploadMajorComponent {
    constructor(formBuilder, dataStorage, role, _snackBar, router, groupDataStorage) {
        this.formBuilder = formBuilder;
        this.dataStorage = dataStorage;
        this.role = role;
        this._snackBar = _snackBar;
        this.router = router;
        this.groupDataStorage = groupDataStorage;
        this.validFileExtensions = ["xlsx", "csv"];
        this.isInvalid = false;
        this.allMajors = [];
    }
    ngOnInit() {
        this.groupDataStorage.getAllMajors();
        this.groupDataStorage.isLoading.subscribe(loading => {
            if (!loading) {
                this.allMajors = this.groupDataStorage.majors;
                console.log(this.allMajors);
            }
        });
        this.currentRole = this.role.user;
        console.log(this.role.user);
        this.uploadForm = this.formBuilder.group({
            uploadFile: [undefined, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            major: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
    }
    onSubmit() {
        if (this.isInvalid) {
            this.invalidExtension = "not supported file type";
        }
        else {
            console.log("submitted");
            this.currentFileUpload = this.selectedFiles.item(0);
            console.log(this.currentFileUpload);
            const formData = new FormData();
            formData.append("major", this.uploadForm.value.major);
            formData.append("file", this.currentFileUpload);
            this.dataStorage.uploadMajors(formData).subscribe(result => {
                console.log(result);
                if (result) {
                    this._snackBar.open(result.message, 'close', { duration: 4000, panelClass: ["standard"] });
                }
                else {
                    this._snackBar.open('Something went wrong.', 'close', { duration: 4000, panelClass: ["standard"] });
                }
            });
            this.uploadForm.reset();
            this.uploadForm.clearAsyncValidators();
            this.uploadForm.clearValidators();
        }
    }
    upload(event) {
        this.selectedFiles = event.target.files;
        this.isInvalid = false;
        if (!this.validateFile(this.selectedFiles[0].name)) {
            this.isInvalid = true;
            this.invalidExtension = "not supported file type. Upload .xlsx file!";
            console.log(this.invalidExtension);
        }
    }
    validateFile(name) {
        var fileExt = name.substring(name.lastIndexOf(".") + 1);
        console.log("Input files extension: " + fileExt);
        for (let ext of this.validFileExtensions) {
            if (fileExt.toLowerCase() == ext) {
                return true;
            }
        }
        return false;
    }
};
UploadMajorComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _shared_data_storage_service__WEBPACK_IMPORTED_MODULE_3__["DataStorageService"] },
    { type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _group_group_data_storage_service__WEBPACK_IMPORTED_MODULE_7__["GroupDataStorageService"] }
];
UploadMajorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-upload-major",
        template: __webpack_require__(/*! raw-loader!./upload-major.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/administration/upload-major/upload-major.component.html"),
        styles: [__webpack_require__(/*! ./upload-major.component.css */ "./src/app/home/administration/upload-major/upload-major.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _shared_data_storage_service__WEBPACK_IMPORTED_MODULE_3__["DataStorageService"],
        src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
        _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
        _group_group_data_storage_service__WEBPACK_IMPORTED_MODULE_7__["GroupDataStorageService"]])
], UploadMajorComponent);



/***/ }),

/***/ "./src/app/home/appointment/appointment-create/appointment-create.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/home/appointment/appointment-create/appointment-create.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin: 20px;\r\n  padding: 10px;\r\n  width: 80%;\r\n  color: #800029;\r\n  border: #800029 solid 1px;\r\n  background-color: white;\r\n}\r\n\r\n.example-container>* {\r\n  width: 100%;\r\n}\r\n\r\n.example-spacer {\r\n  flex: 1 1 auto;\r\n}\r\n\r\n.mat-toolbar {\r\n  font: inherit;\r\n  background-color: white;\r\n  color: #800029;\r\n\r\n}\r\n\r\n.mat-toolbar-row {\r\n  padding: 0;\r\n\r\n}\r\n\r\n.date {\r\n  border: solid 0.5pt #800029;\r\n  border-radius: 5px;\r\n  width: 100%;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.time {\r\n  margin-left: 10px;\r\n}\r\n\r\n.mat-form-width {\r\n  width: 50%\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9hcHBvaW50bWVudC9hcHBvaW50bWVudC1jcmVhdGUvYXBwb2ludG1lbnQtY3JlYXRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixhQUFhO0VBQ2IsVUFBVTtFQUNWLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsY0FBYzs7QUFFaEI7O0FBRUE7RUFDRSxVQUFVOztBQUVaOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0U7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvYXBwb2ludG1lbnQvYXBwb2ludG1lbnQtY3JlYXRlL2FwcG9pbnRtZW50LWNyZWF0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgbWFyZ2luOiAyMHB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBjb2xvcjogIzgwMDAyOTtcclxuICBib3JkZXI6ICM4MDAwMjkgc29saWQgMXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uZXhhbXBsZS1jb250YWluZXI+KiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5leGFtcGxlLXNwYWNlciB7XHJcbiAgZmxleDogMSAxIGF1dG87XHJcbn1cclxuXHJcbi5tYXQtdG9vbGJhciB7XHJcbiAgZm9udDogaW5oZXJpdDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBjb2xvcjogIzgwMDAyOTtcclxuXHJcbn1cclxuXHJcbi5tYXQtdG9vbGJhci1yb3cge1xyXG4gIHBhZGRpbmc6IDA7XHJcblxyXG59XHJcblxyXG4uZGF0ZSB7XHJcbiAgYm9yZGVyOiBzb2xpZCAwLjVwdCAjODAwMDI5O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbi50aW1lIHtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG5cclxuLm1hdC1mb3JtLXdpZHRoIHtcclxuICB3aWR0aDogNTAlXHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/home/appointment/appointment-create/appointment-create.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/home/appointment/appointment-create/appointment-create.component.ts ***!
  \*************************************************************************************/
/*! exports provided: AppointmentCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentCreateComponent", function() { return AppointmentCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm2015/autocomplete.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_data_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/data-storage.service */ "./src/app/home/shared/data-storage.service.ts");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm2015/keycodes.js");
/* harmony import */ var _shared_group_selection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/group-selection */ "./src/app/home/shared/group-selection.ts");
/* harmony import */ var _shared_appointment_data_storage_appointment_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared-appointment/data-storage-appointment.service */ "./src/app/home/appointment/shared-appointment/data-storage-appointment.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");












let AppointmentCreateComponent = class AppointmentCreateComponent {
    constructor(formBuilder, router, dialog, route, dataStorage, dataStorageAppointment, _snackBar) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.dialog = dialog;
        this.route = route;
        this.dataStorage = dataStorage;
        this.dataStorageAppointment = dataStorageAppointment;
        this._snackBar = _snackBar;
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.editMode = false;
        this.timeslots = [];
        this.pendingUsers = [];
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__["COMMA"]];
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]);
        this.dateRangeArray = [];
        this.emails = [];
        this.userList = [];
        //theme for time picker
        this.timeTheme = {
            container: {
                bodyBackgroundColor: "darkgrey",
                buttonColor: "white"
            },
            dial: {
                dialBackgroundColor: "rgb(185, 163, 90)"
            },
            clockFace: {
                clockHandColor: "#800029"
            }
        };
        this.userList = [];
        this.dataStorage.getEmails();
        this.dataStorage.emails.subscribe((result) => {
            console.log(result);
            if (result.length > 0) {
                result.forEach(o => {
                    if (!this.userList.includes(o.email)) {
                        this.userList.push(o.email);
                    }
                });
            }
            // else {
            //   console.log("no users!");
            // }
        });
        this.filteredUserList = this.email.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])((user) => user ? this.filter(user) : this.userList.slice()));
    }
    get date() {
        return this.formBuilder.group({
            date: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            time: this.formBuilder.array([this.time])
        });
    }
    get time() {
        return this.formBuilder.group({
            start: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            end: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            interval: [
                "",
                [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^[1-9]+[0-9]*$/)]
            ]
        });
    }
    filter(value) {
        const filterValue = value.toLocaleLowerCase();
        return this.userList.filter(user => user.toLocaleLowerCase().includes(filterValue));
    }
    ngOnInit() {
        let title = "";
        let description = "";
        let location = "";
        let email = this.email;
        let dateRange = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"]([this.date]);
        this.appointmentForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](title, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](description),
            location: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](location),
            email: email,
            dateRange: dateRange
        });
        this.route.params.subscribe((params) => {
            this.id = +params["id"];
            console.log(this.id);
            this.editMode = params["id"] != null;
            console.log(this.editMode);
            this.initForm();
        });
        // let dateRange = new FormArray([this.date]);
        // this.appointmentForm = this.formBuilder.group({
        //   title: ["", Validators.required],
        //   description: ["", Validators.required],
        //   location: [""],
        //   email: this.email,
        //   dateRange: dateRange
        // });
        // let dateRange = new FormArray([this.date]);
        // this.appointmentForm = this.formBuilder.group({
        //   title: ["", Validators.required],
        //   description: ["", Validators.required],
        //   location: [""],
        //   email: this.email,
        //   dateRange: dateRange
        // });
        // this.initForm();
    }
    initForm() {
        if (this.editMode) {
            this.dataStorageAppointment
                .displayAppointmentDetails(this.id)
                .subscribe(result => {
                console.log(result);
                this.detailResponse = result.result;
                console.log(this.detailResponse);
                this.pendingUsers = this.detailResponse.pendingUsers;
                console.log(this.pendingUsers);
                for (let user of this.pendingUsers) {
                    this.emails.push(user.email);
                }
                this.appointments = this.detailResponse.response;
                for (let i of this.appointments) {
                    console.log(i);
                    this.timeslots.push(i.response);
                    this.appointmentLocation = i.location;
                    for (let x of i.response) {
                        if (x.selectorEmail !== 'Not selected') {
                            this.emails.push(x.selectorEmail);
                            this.pendingUsers.push(x.selectorEmail);
                        }
                    }
                }
                // console.log(this.pendingUsers);
                // console.log(this.appointments);
                console.log(this.timeslots);
                for (let timeslot of this.timeslots) {
                    this.appointmentName = timeslot[0].appointmentName;
                    this.appointmentDesc = timeslot[0].appointmentDescription;
                }
                // let title = this.appointmentName;
                // let description = this.appointmentDesc;
                // let location = this.appointmentLocation;
                // let email = this.email;
                let dateRange = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"]([this.date]);
                this.appointmentForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
                    title: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.appointmentName),
                    description: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.appointmentDesc),
                    location: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.appointmentLocation),
                    email: this.email,
                    dateRange: dateRange
                });
            });
        }
        // else {
        // let title = "";
        // let description = "";
        // let location = "";
        // let email = this.email;
        // let dateRange = new FormArray([this.date]);
        // this.appointmentForm = new FormGroup({
        //   title: new FormControl(title, [Validators.required]),
        //   description: new FormControl(description),
        //   location: new FormControl(location),
        //   email: email,
        //   dateRange: dateRange
        // });
        // this.emails = this.pendingUsers;
        // let dateRange = new FormArray([this.date]);
        // this.appointmentForm = this.formBuilder.group({
        //   title: [this.appointmentName],
        //   description: [this.appointmentDesc],
        //   location: [this.appointmentLocation],
        //   email: this.email,
        //   dateRange: dateRange
        // });
        // }
    }
    selected(event) {
        if (!this.emails.includes(event.option.value)) {
            this.emails.push(event.option.value);
            this.userInput.nativeElement.value = "";
            this.email.setValue(null);
        }
    }
    cancel() {
        this.router.navigate(["/home/appointment/sent"]);
    }
    addDate() {
        this.appointmentForm.get("dateRange").push(this.date);
    }
    deleteDate(index) {
        this.appointmentForm.get("dateRange").removeAt(index);
    }
    addTime(date) {
        date.get("time").push(this.time);
    }
    deleteTime(date, time) {
        date.get("time").removeAt(time);
    }
    // addEmails() {
    //   this.emails.push(this.appointmentForm.value.email);
    //   console.log(this.emails);
    //   this.email.reset();
    // }
    add(event) {
        if (!this.matAutocomplete.isOpen) {
            const input = event.input;
            const value = event.value;
            // Add emails
            if (value.trim()) {
                // this.emails.push(value.trim());
            }
            // Reset the input value
            if (input) {
                input.value = "";
            }
            this.email.setValue(null);
        }
    }
    remove(email) {
        const index = this.emails.indexOf(email);
        if (index >= 0) {
            this.emails.splice(index, 1);
        }
    }
    getErrorMessage() {
        return this.email.hasError("required")
            ? "You must enter a valid email address"
            : this.email.hasError("email")
                ? "Not a valid email"
                : "";
    }
    onSubmit() {
        const appointmentFormValues = this.appointmentForm.value;
        console.log(appointmentFormValues);
        if (this.editMode) {
            this.appointmentName = appointmentFormValues.title;
            this.appointmentDesc = appointmentFormValues.description;
            this.appointmentLocation = appointmentFormValues.location;
            const updatedAppointmentObject = {
                name: this.appointmentName,
                description: this.appointmentDesc,
                recepients: this.emails,
                location: this.appointmentLocation
            };
            console.log(updatedAppointmentObject);
            this.dataStorageAppointment
                .updateAppointment(updatedAppointmentObject, this.id)
                .subscribe(result => {
                console.log(result);
                if (result.result) {
                    this._snackBar.open(result.message, "close", {
                        duration: 5000,
                        panelClass: ["standard"]
                    });
                }
                else {
                    this._snackBar.open(result.message, "close", {
                        duration: 5000,
                        panelClass: ["delete"]
                    });
                }
            });
        }
        else {
            console.log(appointmentFormValues.dateRange);
            for (let date of appointmentFormValues.dateRange) {
                for (let time of date.time) {
                    if (time.start.substring(1, 2) === ":") {
                        time.start = "0".concat(time.start);
                    }
                    if (time.end.substring(1, 2) === ":") {
                        time.end = "0".concat(time.end);
                    }
                    this.dateRangeArray.push({
                        date: date.date.toLocaleDateString(),
                        apptimes: [
                            {
                                startTime: time.start,
                                endTime: time.end,
                                interv: time.interval
                            }
                        ]
                    });
                }
            }
            this.appointmentName = appointmentFormValues.title;
            this.appointmentDesc = appointmentFormValues.description;
            this.appointmentLocation = appointmentFormValues.location;
            const obj = {
                name: this.appointmentName,
                description: this.appointmentDesc,
                recepients: this.emails,
                location: this.appointmentLocation,
                appdates: this.dateRangeArray
            };
            this.dataStorageAppointment.storeAppointment(obj).subscribe(result => {
                if (result) {
                    console.log(result);
                    if (result.result) {
                        console.log(result.result.id);
                        this.idOfAppointmentCreated = result.result.id;
                        console.log(this.idOfAppointmentCreated);
                        this.dataStorageAppointment
                            .sendApptToCal(this.idOfAppointmentCreated)
                            .subscribe((result) => {
                            console.log(result);
                            if (result.result) {
                                this._snackBar.open("Appointment has been successfully created and sent to calendar!", "close", {
                                    duration: 5000,
                                    panelClass: ["standard"]
                                });
                                this.router.navigate(["home/appointment/sent"]);
                            }
                            else {
                                this._snackBar.open(result.message, "close", {
                                    duration: 5000,
                                    panelClass: ["delete"]
                                });
                            }
                        });
                    }
                    else {
                        this._snackBar.open(result.message, "close", {
                            duration: 5000,
                            panelClass: ["delete"]
                        });
                    }
                }
            });
            this.dateRangeArray = [];
        }
    }
    getFormValidationErrors() {
        Object.keys(this.appointmentForm.controls).forEach(key => {
            const controlErrors = this.appointmentForm.get(key)
                .errors;
            if (controlErrors != null) {
                Object.keys(controlErrors).forEach(keyError => {
                    return ("Key control: " +
                        key +
                        ", keyError: " +
                        keyError +
                        ", err value: " +
                        controlErrors[keyError]);
                });
            }
        });
    }
    groupSelect() {
        const dialogRef = this.dialog.open(_shared_group_selection__WEBPACK_IMPORTED_MODULE_8__["GroupSelection"], {
            width: "500px"
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log(result);
            for (let group of result) {
                console.log(group);
                for (let email of group.emails) {
                    console.log(email);
                    if (!this.emails.includes(email.email)) {
                        this.emails.push(email.email);
                    }
                }
            }
        });
    }
};
AppointmentCreateComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _shared_data_storage_service__WEBPACK_IMPORTED_MODULE_6__["DataStorageService"] },
    { type: _shared_appointment_data_storage_appointment_service__WEBPACK_IMPORTED_MODULE_9__["DataStorageAppointmentService"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__["MatSnackBar"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("userInput", { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], AppointmentCreateComponent.prototype, "userInput", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("auto", { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__["MatAutocomplete"])
], AppointmentCreateComponent.prototype, "matAutocomplete", void 0);
AppointmentCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-appointment-create",
        template: __webpack_require__(/*! raw-loader!./appointment-create.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/appointment/appointment-create/appointment-create.component.html"),
        styles: [__webpack_require__(/*! ./appointment-create.component.css */ "./src/app/home/appointment/appointment-create/appointment-create.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
        _shared_data_storage_service__WEBPACK_IMPORTED_MODULE_6__["DataStorageService"],
        _shared_appointment_data_storage_appointment_service__WEBPACK_IMPORTED_MODULE_9__["DataStorageAppointmentService"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__["MatSnackBar"]])
], AppointmentCreateComponent);



/***/ }),

/***/ "./src/app/home/appointment/appointment-detail/appointment-detail.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/home/appointment/appointment-detail/appointment-detail.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".primary {\r\n  color: #800029;\r\n  border: #800029 solid 1px;\r\n\r\n}\r\n\r\n.mat-menu-item .mat-icon-no-color,\r\n.mat-menu-item-submenu-trigger::after {\r\n  color: inherit;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9hcHBvaW50bWVudC9hcHBvaW50bWVudC1kZXRhaWwvYXBwb2ludG1lbnQtZGV0YWlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QseUJBQXlCOztBQUUzQjs7QUFFQTs7RUFFRSxjQUFjO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9hcHBvaW50bWVudC9hcHBvaW50bWVudC1kZXRhaWwvYXBwb2ludG1lbnQtZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJpbWFyeSB7XHJcbiAgY29sb3I6ICM4MDAwMjk7XHJcbiAgYm9yZGVyOiAjODAwMDI5IHNvbGlkIDFweDtcclxuXHJcbn1cclxuXHJcbi5tYXQtbWVudS1pdGVtIC5tYXQtaWNvbi1uby1jb2xvcixcclxuLm1hdC1tZW51LWl0ZW0tc3VibWVudS10cmlnZ2VyOjphZnRlciB7XHJcbiAgY29sb3I6IGluaGVyaXQ7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/home/appointment/appointment-detail/appointment-detail.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/home/appointment/appointment-detail/appointment-detail.component.ts ***!
  \*************************************************************************************/
/*! exports provided: AppointmentDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentDetailComponent", function() { return AppointmentDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_data_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/data-storage.service */ "./src/app/home/shared/data-storage.service.ts");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _shared_appointment_appointments_navigation_admin_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared-appointment/appointments-navigation-admin.service */ "./src/app/home/appointment/shared-appointment/appointments-navigation-admin.service.ts");
/* harmony import */ var _shared_appointment_data_storage_appointment_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared-appointment/data-storage-appointment.service */ "./src/app/home/appointment/shared-appointment/data-storage-appointment.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _group_message_group_message_group_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../group/message-group/message-group.component */ "./src/app/home/group/message-group/message-group.component.ts");











let AppointmentDetailComponent = class AppointmentDetailComponent {
    constructor(route, router, dataServiceAppointment, authService, dataStorage, _snackBar, appointmentNavigationAdmin, dialog) {
        this.route = route;
        this.router = router;
        this.dataServiceAppointment = dataServiceAppointment;
        this.authService = authService;
        this.dataStorage = dataStorage;
        this._snackBar = _snackBar;
        this.appointmentNavigationAdmin = appointmentNavigationAdmin;
        this.dialog = dialog;
        this.pendingUser = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]();
        this.timeslots = [];
        this.pendingUsers = [];
        this.selectedPendingRecipients = [];
        this.isScheduledAppointmentEmpty = false;
    }
    ngOnInit() {
        this.route.params.subscribe((params) => {
            this.id = +params["id"];
            this.currentRole = this.authService.user;
            this.appointmentNavigationAdmin.appointmentStatusDetail.subscribe(type => {
                console.log(type);
                this.appointmentType = type;
            });
            // this.appointmentDataCoomunication.appointmentData.subscribe(data => {
            //   this.appointmentName = data.title;
            //   this.appointmentDesc = data.description;
            //   this.appointmentLocation = data.location;
            // });
            if (this.currentRole === "ROLE_ADMIN" || this.currentRole === "ROLE_PM") {
                console.log("admin data here!");
                if (this.appointmentType === "sent") {
                    this.dataServiceAppointment
                        .displayAppointmentDetails(this.id)
                        .subscribe(result => {
                        this.detailResponse = result.result;
                        console.log(result);
                        console.log(this.detailResponse);
                        this.pendingUsers = this.detailResponse.pendingUsers;
                        this.appointments = this.detailResponse.response;
                        for (let i of this.appointments) {
                            this.timeslots.push(i.response);
                            this.appointmentLocation = i.location;
                        }
                        console.log(this.pendingUsers);
                        console.log(this.appointments);
                        console.log(this.timeslots);
                        for (let timeslot of this.timeslots) {
                            this.appointmentName = timeslot[0].appointmentName;
                            this.appointmentDesc = timeslot[0].appointmentDescription;
                        }
                        console.log(this.appointmentName);
                    });
                }
                else {
                    // debugger;
                    this.dataServiceAppointment
                        .displayUserAppointmentDetails(this.id)
                        .subscribe(result => {
                        if (result.result == null) {
                            console.log(result.message);
                            this.isScheduledAppointmentEmpty = true;
                        }
                        else {
                            this.isScheduledAppointmentEmpty = false;
                            this.appointments = result.result;
                            for (let i of this.appointments) {
                                this.timeslots.push(i.response);
                                this.appointmentLocation = i.location;
                            }
                            console.log(this.appointments);
                            console.log(this.timeslots);
                            for (let timeslot of this.timeslots) {
                                this.appointmentName = timeslot[0].appointmentName;
                                this.appointmentDesc = timeslot[0].appointmentDescription;
                            }
                        }
                    });
                }
            }
            else {
                console.log("user data here!!!");
                this.dataServiceAppointment
                    .displayUserAppointmentDetails(this.id)
                    .subscribe(result => {
                    if (result.result == null) {
                        console.log(result.message);
                        this.isScheduledAppointmentEmpty = true;
                    }
                    else {
                        this.appointments = result.result;
                        for (let i of this.appointments) {
                            this.timeslots.push(i.response);
                            this.appointmentLocation = i.location;
                        }
                        console.log(this.appointments);
                        console.log(this.timeslots);
                        for (let timeslot of this.timeslots) {
                            this.appointmentName = timeslot[0].appointmentName;
                            this.appointmentDesc = timeslot[0].appointmentDescription;
                        }
                    }
                });
            }
        });
    }
    onConfirm(id) {
        this.dataServiceAppointment.userSelectTimeSlot(id).subscribe(result => {
            console.log(result);
            if (result.result) {
                this._snackBar.open("Your appointment has been successfully confirmed!", "close", {
                    duration: 5000,
                    panelClass: ["standard"]
                });
            }
        });
        if (this.appointmentType === "sent") {
            this.router.navigate(["./home/appointment/sent"]);
        }
        else {
            this.router.navigate(["./home/appointment/received"]);
        }
    }
    onSelectChange(options) {
        console.log(options.map(o => o.value));
        this.selectedPendingRecipients = options.map(o => o.value);
        // console.log(this.selectedPendingRecipients);
    }
    messageSelectedRecipients() {
        console.log(this.selectedPendingRecipients);
        const dialogRef = this.dialog.open(_group_message_group_message_group_component__WEBPACK_IMPORTED_MODULE_10__["MessageGroupComponent"], {
            width: "400px",
            data: {}
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log(result);
            result.recipients = this.selectedPendingRecipients;
            console.log(result);
            if (result) {
                this.dataStorage.emailSelectedMembers(result).subscribe(result => {
                    console.log(result);
                    if (result.result) {
                        this._snackBar.open("An email has been successfully to selected members!", "close", {
                            duration: 5000,
                            panelClass: ["standard"]
                        });
                    }
                    else {
                        this._snackBar.open("Something went wrong, please contact admin!", "close", {
                            duration: 5000,
                            panelClass: ["delete"]
                        });
                    }
                });
            }
        });
    }
    onDeleteAppointment(id) {
        this.dataServiceAppointment.deleteAppointment(id).subscribe(result => {
            console.log(result);
            console.log(result.result);
            if (result.result) {
                this._snackBar.open(result.message, "close", {
                    duration: 5000,
                    panelClass: ["delete"]
                });
            }
            else {
                this._snackBar.open("Something went wrong. Please contact admin!", "close", {
                    duration: 5000,
                    panelClass: ["delete"]
                });
            }
            this.dataServiceAppointment.fetchAppointment();
        });
        this.router.navigate(["./home/appointment/sent"]);
    }
    onEditAppointment() {
        this.router.navigate(["home/appointment/edit-appointment/", this.id]);
    }
};
AppointmentDetailComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _shared_appointment_data_storage_appointment_service__WEBPACK_IMPORTED_MODULE_7__["DataStorageAppointmentService"] },
    { type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _shared_data_storage_service__WEBPACK_IMPORTED_MODULE_4__["DataStorageService"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] },
    { type: _shared_appointment_appointments_navigation_admin_service__WEBPACK_IMPORTED_MODULE_6__["AppointmentsNavigationAdminService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDialog"] }
];
AppointmentDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-appointment-detail",
        template: __webpack_require__(/*! raw-loader!./appointment-detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/appointment/appointment-detail/appointment-detail.component.html"),
        styles: [__webpack_require__(/*! ./appointment-detail.component.css */ "./src/app/home/appointment/appointment-detail/appointment-detail.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _shared_appointment_data_storage_appointment_service__WEBPACK_IMPORTED_MODULE_7__["DataStorageAppointmentService"],
        src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
        _shared_data_storage_service__WEBPACK_IMPORTED_MODULE_4__["DataStorageService"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"],
        _shared_appointment_appointments_navigation_admin_service__WEBPACK_IMPORTED_MODULE_6__["AppointmentsNavigationAdminService"],
        _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDialog"]])
], AppointmentDetailComponent);



/***/ }),

/***/ "./src/app/home/appointment/appointment-item/appointment-item.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/home/appointment/appointment-item/appointment-item.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .example-card {\r\n  max-width: 100%;\r\n  margin: 10px;\r\n  border: #800029 solid 1px;\r\n} */\r\n\r\n.mat-list .mat-list-item:hover {\r\n  color: white;\r\n  background: #800029;\r\n  border: #BD955A solid 1px;\r\n\r\n\r\n}\r\n\r\n.mat-list-base .mat-list-item {\r\n  padding-top: 0;\r\n  margin: 10px;\r\n  border: #800029 solid 1px;\r\n  max-width: 100%;\r\n\r\n}\r\n\r\n@media screen and (min-width: 1200px) {\r\n\r\n  .example-card-width {\r\n    max-width: 90%\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 992px) and (max-width: 1199px) {\r\n\r\n\r\n  .example-card-width {\r\n    max-width: 90%\r\n  }\r\n}\r\n\r\n/* On screens that are 992px wide or less */\r\n\r\n@media screen and (min-width: 600px) and (max-width: 991px) {\r\n\r\n  .example-card-width {\r\n    max-width: 80%\r\n  }\r\n}\r\n\r\n/* On screens that are 600px wide or less */\r\n\r\n@media screen and (max-width: 600px) {\r\n\r\n\r\n  .example-card-width {\r\n    max-width: 90%\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9hcHBvaW50bWVudC9hcHBvaW50bWVudC1pdGVtL2FwcG9pbnRtZW50LWl0ZW0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHOztBQUVIO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQix5QkFBeUI7OztBQUczQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGVBQWU7O0FBRWpCOztBQUdBOztFQUVFO0lBQ0U7RUFDRjtBQUNGOztBQUVBOzs7RUFHRTtJQUNFO0VBQ0Y7QUFDRjs7QUFHQSwyQ0FBMkM7O0FBQzNDOztFQUVFO0lBQ0U7RUFDRjtBQUNGOztBQUVBLDJDQUEyQzs7QUFDM0M7OztFQUdFO0lBQ0U7RUFDRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9hcHBvaW50bWVudC9hcHBvaW50bWVudC1pdGVtL2FwcG9pbnRtZW50LWl0ZW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC5leGFtcGxlLWNhcmQge1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDEwcHg7XHJcbiAgYm9yZGVyOiAjODAwMDI5IHNvbGlkIDFweDtcclxufSAqL1xyXG5cclxuLm1hdC1saXN0IC5tYXQtbGlzdC1pdGVtOmhvdmVyIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZDogIzgwMDAyOTtcclxuICBib3JkZXI6ICNCRDk1NUEgc29saWQgMXB4O1xyXG5cclxuXHJcbn1cclxuXHJcbi5tYXQtbGlzdC1iYXNlIC5tYXQtbGlzdC1pdGVtIHtcclxuICBwYWRkaW5nLXRvcDogMDtcclxuICBtYXJnaW46IDEwcHg7XHJcbiAgYm9yZGVyOiAjODAwMDI5IHNvbGlkIDFweDtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcblxyXG59XHJcblxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSB7XHJcblxyXG4gIC5leGFtcGxlLWNhcmQtd2lkdGgge1xyXG4gICAgbWF4LXdpZHRoOiA5MCVcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7XHJcblxyXG5cclxuICAuZXhhbXBsZS1jYXJkLXdpZHRoIHtcclxuICAgIG1heC13aWR0aDogOTAlXHJcbiAgfVxyXG59XHJcblxyXG5cclxuLyogT24gc2NyZWVucyB0aGF0IGFyZSA5OTJweCB3aWRlIG9yIGxlc3MgKi9cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xyXG5cclxuICAuZXhhbXBsZS1jYXJkLXdpZHRoIHtcclxuICAgIG1heC13aWR0aDogODAlXHJcbiAgfVxyXG59XHJcblxyXG4vKiBPbiBzY3JlZW5zIHRoYXQgYXJlIDYwMHB4IHdpZGUgb3IgbGVzcyAqL1xyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG5cclxuXHJcbiAgLmV4YW1wbGUtY2FyZC13aWR0aCB7XHJcbiAgICBtYXgtd2lkdGg6IDkwJVxyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/home/appointment/appointment-item/appointment-item.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/home/appointment/appointment-item/appointment-item.component.ts ***!
  \*********************************************************************************/
/*! exports provided: AppointmentItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentItemComponent", function() { return AppointmentItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_appointment_appointments_navigation_admin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared-appointment/appointments-navigation-admin.service */ "./src/app/home/appointment/shared-appointment/appointments-navigation-admin.service.ts");




let AppointmentItemComponent = class AppointmentItemComponent {
    constructor(router, appointmentNavigationAdmin) {
        this.router = router;
        this.appointmentNavigationAdmin = appointmentNavigationAdmin;
        this.counter = 1;
        this.appointmentDate = "";
    }
    ngOnInit() {
        this.formatDate(this.dates);
        console.log(this.dates);
        this.appointmentTypeSubscription = this.appointmentNavigationAdmin.appointmentStatusItem.subscribe(status => {
            this.status = status;
        });
    }
    // formatDate(dates: string[]) {
    //   let length = dates.length;
    //   for (let date of dates) {
    //     if (length == 1) {
    //       this.appointmentDate += date;
    //       console.log(this.appointmentDate);
    //     } else if (this.counter <= length - 1 && !dates.includes(date)) {
    //       this.appointmentDate += date + " " + "|" + " ";
    //       console.log(this.appointmentDate);
    //       this.counter++;
    //     } else if (this.counter <= length - 1 && dates.includes(date)) {
    //       this.appointmentDate += this.appointmentDate + " ";
    //       console.log(this.appointmentDate);
    //       this.counter++;
    //     }
    //   }
    // }
    unique(date) {
        var arr = [];
        for (var i = 0; i < date.length; i++) {
            if (!arr.includes(date[i])) {
                arr.push(date[i]);
            }
        }
        return arr;
    }
    formatDate(date) {
        if (date.length > 0) {
            var arr = this.unique(date);
            for (let d of arr) {
                this.appointmentDate += d + " " + "|" + " ";
            }
        }
        this.appointmentDate = this.appointmentDate.slice(0, this.appointmentDate.length - 2);
    }
    showDetails(index) {
        if (this.status === "sent") {
            this.router.navigate(["home/appointment/sent", index]);
        }
        else {
            this.router.navigate(["home/appointment/received", index]);
        }
    }
    ngOnDestroy() {
        this.appointmentTypeSubscription.unsubscribe();
    }
};
AppointmentItemComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _shared_appointment_appointments_navigation_admin_service__WEBPACK_IMPORTED_MODULE_3__["AppointmentsNavigationAdminService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], AppointmentItemComponent.prototype, "appointmentName", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], AppointmentItemComponent.prototype, "appointmentDescription", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], AppointmentItemComponent.prototype, "appointmentLocation", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], AppointmentItemComponent.prototype, "id", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], AppointmentItemComponent.prototype, "dates", void 0);
AppointmentItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-appointment-item",
        template: __webpack_require__(/*! raw-loader!./appointment-item.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/appointment/appointment-item/appointment-item.component.html"),
        styles: [__webpack_require__(/*! ./appointment-item.component.css */ "./src/app/home/appointment/appointment-item/appointment-item.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _shared_appointment_appointments_navigation_admin_service__WEBPACK_IMPORTED_MODULE_3__["AppointmentsNavigationAdminService"]])
], AppointmentItemComponent);



/***/ }),

/***/ "./src/app/home/appointment/appointment-list/appointment-filter.pipe.ts":
/*!******************************************************************************!*\
  !*** ./src/app/home/appointment/appointment-list/appointment-filter.pipe.ts ***!
  \******************************************************************************/
/*! exports provided: AppointmentFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentFilterPipe", function() { return AppointmentFilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppointmentFilterPipe = class AppointmentFilterPipe {
    transform(items, searchText) {
        if (!items)
            return [];
        if (!searchText)
            return items;
        searchText = searchText.toLowerCase();
        return items.filter(appointment => {
            if (appointment.name.toLowerCase().includes(searchText)) {
                return appointment.name.toLowerCase().includes(searchText);
            }
            else if (appointment.description.toLowerCase().includes(searchText)) {
                return appointment.description.toLowerCase().includes(searchText);
            }
        });
    }
};
AppointmentFilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: "appointmentFilter"
    })
], AppointmentFilterPipe);



/***/ }),

/***/ "./src/app/home/appointment/appointment-list/appointment-list.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/home/appointment/appointment-list/appointment-list.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".primary {\r\n  color: #800029;\r\n  border: #800029 solid 1px;\r\n  /* background-color: blanchedalmond; */\r\n  /* width: 10%; */\r\n}\r\n\r\n.mat-toolbar {\r\n  background: white;\r\n}\r\n\r\n.mat-form-field {\r\n  font-size: 13px;\r\n  font-weight: 400;\r\n  width: 52%;\r\n}\r\n\r\n.example-spacer {\r\n  flex: 1 1 auto;\r\n}\r\n\r\n.appt-wrap {\r\n  height: 90%;\r\n  overflow: auto;\r\n}\r\n\r\n.pagination-center {\r\n  margin-right: 80px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9hcHBvaW50bWVudC9hcHBvaW50bWVudC1saXN0L2FwcG9pbnRtZW50LWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsc0NBQXNDO0VBQ3RDLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9hcHBvaW50bWVudC9hcHBvaW50bWVudC1saXN0L2FwcG9pbnRtZW50LWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcmltYXJ5IHtcclxuICBjb2xvcjogIzgwMDAyOTtcclxuICBib3JkZXI6ICM4MDAwMjkgc29saWQgMXB4O1xyXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IGJsYW5jaGVkYWxtb25kOyAqL1xyXG4gIC8qIHdpZHRoOiAxMCU7ICovXHJcbn1cclxuXHJcbi5tYXQtdG9vbGJhciB7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbn1cclxuXHJcbi5tYXQtZm9ybS1maWVsZCB7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgd2lkdGg6IDUyJTtcclxufVxyXG5cclxuLmV4YW1wbGUtc3BhY2VyIHtcclxuICBmbGV4OiAxIDEgYXV0bztcclxufVxyXG5cclxuLmFwcHQtd3JhcCB7XHJcbiAgaGVpZ2h0OiA5MCU7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuXHJcbi5wYWdpbmF0aW9uLWNlbnRlciB7XHJcbiAgbWFyZ2luLXJpZ2h0OiA4MHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/home/appointment/appointment-list/appointment-list.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/home/appointment/appointment-list/appointment-list.component.ts ***!
  \*********************************************************************************/
/*! exports provided: AppointmentListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentListComponent", function() { return AppointmentListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_data_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/data-storage.service */ "./src/app/home/shared/data-storage.service.ts");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _shared_appointment_appointments_navigation_admin_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared-appointment/appointments-navigation-admin.service */ "./src/app/home/appointment/shared-appointment/appointments-navigation-admin.service.ts");
/* harmony import */ var _shared_appointment_data_storage_appointment_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared-appointment/data-storage-appointment.service */ "./src/app/home/appointment/shared-appointment/data-storage-appointment.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");








let AppointmentListComponent = class AppointmentListComponent {
    constructor(router, dataStorage, role, appointmentNavigationAdmin, dataStorageAppointment, dialog, _snackBar) {
        this.router = router;
        this.dataStorage = dataStorage;
        this.role = role;
        this.appointmentNavigationAdmin = appointmentNavigationAdmin;
        this.dataStorageAppointment = dataStorageAppointment;
        this.dialog = dialog;
        this._snackBar = _snackBar;
        this.appointments = [];
        this.dates = [];
        this.searchText = "";
        this.status = "";
        this.p = 1;
        this.isAppointmentEmpty = false;
    }
    ngOnInit() {
        this.currentRole = this.role.user;
        console.log(this.role.user);
        if (this.currentRole === "ROLE_USER" ||
            this.currentRole === "ROLE_MODERATOR") {
            console.log("user data here!!!");
            this.dataStorageAppointment.fetchUserAppointment();
            this.dataStorageAppointment.isLoading.subscribe(loading => {
                console.log(loading);
                if (!loading) {
                    console.log(this.dataStorageAppointment.appointmentLists);
                    this.appointments = this.dataStorageAppointment.appointmentLists;
                }
            });
        }
        else {
            console.log("admin data here!!!");
            this.appointmentTypeSubscription = this.appointmentNavigationAdmin.appointmentStatus.subscribe(status => {
                if (status) {
                    this.status = status;
                    // console.log(this.status);
                }
            });
            console.log(this.status);
            if (this.status != null) {
                if (this.status === "sent") {
                    this.dataStorageAppointment.fetchAppointment();
                    this.dataStorageAppointment.isLoading.subscribe(loading => {
                        if (!loading) {
                            this.appointments = this.dataStorageAppointment.appointmentLists;
                            console.log(this.appointments);
                            if (this.appointments.length <= 0) {
                                this.isAppointmentEmpty = true;
                                // this._snackBar.openFromComponent(AppointmentSnackbarComponent, {
                                //   duration: 4000,
                                //   panelClass: ["delete"],
                                //   data: "No appointments found. Please create appointments!"
                                // });
                            }
                        }
                        console.log(this.isAppointmentEmpty);
                    });
                }
                else if (this.status === "received") {
                    this.dataStorageAppointment.fetchUserAppointment();
                    this.dataStorageAppointment.isLoading.subscribe(loading => {
                        if (!loading) {
                            this.appointments = this.dataStorageAppointment.appointmentLists;
                        }
                    });
                }
            }
        }
    }
    ngOnDestroy() {
        // this.appointmentTypeSubscription.unsubscribe();
    }
};
AppointmentListComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _shared_data_storage_service__WEBPACK_IMPORTED_MODULE_3__["DataStorageService"] },
    { type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _shared_appointment_appointments_navigation_admin_service__WEBPACK_IMPORTED_MODULE_5__["AppointmentsNavigationAdminService"] },
    { type: _shared_appointment_data_storage_appointment_service__WEBPACK_IMPORTED_MODULE_6__["DataStorageAppointmentService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"] }
];
AppointmentListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-appointment-list",
        template: __webpack_require__(/*! raw-loader!./appointment-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/appointment/appointment-list/appointment-list.component.html"),
        styles: [__webpack_require__(/*! ./appointment-list.component.css */ "./src/app/home/appointment/appointment-list/appointment-list.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _shared_data_storage_service__WEBPACK_IMPORTED_MODULE_3__["DataStorageService"],
        src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
        _shared_appointment_appointments_navigation_admin_service__WEBPACK_IMPORTED_MODULE_5__["AppointmentsNavigationAdminService"],
        _shared_appointment_data_storage_appointment_service__WEBPACK_IMPORTED_MODULE_6__["DataStorageAppointmentService"],
        _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"],
        _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"]])
], AppointmentListComponent);



/***/ }),

/***/ "./src/app/home/appointment/appointment-navigation/appointment-navigation.component.css":
/*!**********************************************************************************************!*\
  !*** ./src/app/home/appointment/appointment-navigation/appointment-navigation.component.css ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".primary {\r\n  color: #800029;\r\n  border: #800029 solid 1px;\r\n\r\n}\r\n\r\n.mat-menu-item:hover:not([disabled]) {\r\n  color: white;\r\n  background: #800029;\r\n}\r\n\r\n.mat-menu-item .mat-icon-no-color,\r\n.mat-menu-item-submenu-trigger::after {\r\n  color: inherit;\r\n}\r\n\r\n.container {\r\n  margin-top: 10px;\r\n  margin-left: 10px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9hcHBvaW50bWVudC9hcHBvaW50bWVudC1uYXZpZ2F0aW9uL2FwcG9pbnRtZW50LW5hdmlnYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCx5QkFBeUI7O0FBRTNCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFHQTs7RUFFRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvYXBwb2ludG1lbnQvYXBwb2ludG1lbnQtbmF2aWdhdGlvbi9hcHBvaW50bWVudC1uYXZpZ2F0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJpbWFyeSB7XHJcbiAgY29sb3I6ICM4MDAwMjk7XHJcbiAgYm9yZGVyOiAjODAwMDI5IHNvbGlkIDFweDtcclxuXHJcbn1cclxuXHJcbi5tYXQtbWVudS1pdGVtOmhvdmVyOm5vdChbZGlzYWJsZWRdKSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQ6ICM4MDAwMjk7XHJcbn1cclxuXHJcblxyXG4ubWF0LW1lbnUtaXRlbSAubWF0LWljb24tbm8tY29sb3IsXHJcbi5tYXQtbWVudS1pdGVtLXN1Ym1lbnUtdHJpZ2dlcjo6YWZ0ZXIge1xyXG4gIGNvbG9yOiBpbmhlcml0O1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/home/appointment/appointment-navigation/appointment-navigation.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/home/appointment/appointment-navigation/appointment-navigation.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: AppointmentNavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentNavigationComponent", function() { return AppointmentNavigationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/auth/auth.service */ "./src/app/auth/auth.service.ts");




let AppointmentNavigationComponent = class AppointmentNavigationComponent {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    ngOnInit() {
        this.currentRole = this.authService.user;
        console.log(this.currentRole);
    }
    navigateToSent() {
        this.router.navigate(["/home/appointment/sent"]);
    }
    navigateToReceive() {
        this.router.navigate(["/home/appointment/received"]);
    }
    navigateToScheduled() {
        this.router.navigate(["home/appointment/scheduled-appointments-received"]);
    }
    navigateToScheduledRecipients() {
        this.router.navigate(["home/appointment/scheduled-appointments-sent"]);
    }
    userAppointments() {
        console.log("user appointments!");
        this.router.navigate(["/home/appointment/sent"]);
    }
    userScheduledAppointments() {
        // this.router.navigate(["/home/appointment/scheduled"]);
        this.router.navigate(["home/appointment/scheduled-appointments-sent"]);
        console.log("scheduled appointments!");
    }
    create() {
        this.router.navigate(["home/appointment/create"]);
    }
};
AppointmentNavigationComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
AppointmentNavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-appointment-navigation",
        template: __webpack_require__(/*! raw-loader!./appointment-navigation.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/appointment/appointment-navigation/appointment-navigation.component.html"),
        styles: [__webpack_require__(/*! ./appointment-navigation.component.css */ "./src/app/home/appointment/appointment-navigation/appointment-navigation.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
], AppointmentNavigationComponent);



/***/ }),

/***/ "./src/app/home/appointment/appointment-types/appointment-received/appointment-received.component.css":
/*!************************************************************************************************************!*\
  !*** ./src/app/home/appointment/appointment-types/appointment-received/appointment-received.component.css ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvYXBwb2ludG1lbnQvYXBwb2ludG1lbnQtdHlwZXMvYXBwb2ludG1lbnQtcmVjZWl2ZWQvYXBwb2ludG1lbnQtcmVjZWl2ZWQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/home/appointment/appointment-types/appointment-received/appointment-received.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/home/appointment/appointment-types/appointment-received/appointment-received.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: AppointmentReceivedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentReceivedComponent", function() { return AppointmentReceivedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_appointment_appointments_navigation_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared-appointment/appointments-navigation-admin.service */ "./src/app/home/appointment/shared-appointment/appointments-navigation-admin.service.ts");



let AppointmentReceivedComponent = class AppointmentReceivedComponent {
    constructor(appointmentNavigationAdmin) {
        this.appointmentNavigationAdmin = appointmentNavigationAdmin;
    }
    ngOnInit() {
        this.appointmentNavigationAdmin.changeAppointmentStatus("received");
        this.appointmentNavigationAdmin.changeAppointmentStatusForDetail("received");
        this.appointmentNavigationAdmin.changeAppointmentStatusForItem("received");
    }
};
AppointmentReceivedComponent.ctorParameters = () => [
    { type: _shared_appointment_appointments_navigation_admin_service__WEBPACK_IMPORTED_MODULE_2__["AppointmentsNavigationAdminService"] }
];
AppointmentReceivedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-appointment-received",
        template: __webpack_require__(/*! raw-loader!./appointment-received.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/appointment/appointment-types/appointment-received/appointment-received.component.html"),
        styles: [__webpack_require__(/*! ./appointment-received.component.css */ "./src/app/home/appointment/appointment-types/appointment-received/appointment-received.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_appointment_appointments_navigation_admin_service__WEBPACK_IMPORTED_MODULE_2__["AppointmentsNavigationAdminService"]])
], AppointmentReceivedComponent);



/***/ }),

/***/ "./src/app/home/appointment/appointment-types/appointment-sent/appointment-sent.component.css":
/*!****************************************************************************************************!*\
  !*** ./src/app/home/appointment/appointment-types/appointment-sent/appointment-sent.component.css ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\r\n  width: auto;\r\n  height: 500px;\r\n  margin: 10px;\r\n  /* border: 1px solid #555; */\r\n}\r\n\r\n.example-drawer {\r\n  width: 500px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9hcHBvaW50bWVudC9hcHBvaW50bWVudC10eXBlcy9hcHBvaW50bWVudC1zZW50L2FwcG9pbnRtZW50LXNlbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsWUFBWTtFQUNaLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2hvbWUvYXBwb2ludG1lbnQvYXBwb2ludG1lbnQtdHlwZXMvYXBwb2ludG1lbnQtc2VudC9hcHBvaW50bWVudC1zZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1jb250YWluZXIge1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIGhlaWdodDogNTAwcHg7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkICM1NTU7ICovXHJcbn1cclxuXHJcbi5leGFtcGxlLWRyYXdlciB7XHJcbiAgd2lkdGg6IDUwMHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/home/appointment/appointment-types/appointment-sent/appointment-sent.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/home/appointment/appointment-types/appointment-sent/appointment-sent.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: AppointmentSentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentSentComponent", function() { return AppointmentSentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_appointment_appointments_navigation_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared-appointment/appointments-navigation-admin.service */ "./src/app/home/appointment/shared-appointment/appointments-navigation-admin.service.ts");



let AppointmentSentComponent = class AppointmentSentComponent {
    constructor(appointmentNavigationAdmin) {
        this.appointmentNavigationAdmin = appointmentNavigationAdmin;
    }
    ngOnInit() {
        this.appointmentNavigationAdmin.changeAppointmentStatus("sent");
        this.appointmentNavigationAdmin.changeAppointmentStatusForDetail("sent");
        this.appointmentNavigationAdmin.changeAppointmentStatusForItem("sent");
    }
};
AppointmentSentComponent.ctorParameters = () => [
    { type: _shared_appointment_appointments_navigation_admin_service__WEBPACK_IMPORTED_MODULE_2__["AppointmentsNavigationAdminService"] }
];
AppointmentSentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-appointment-sent",
        template: __webpack_require__(/*! raw-loader!./appointment-sent.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/appointment/appointment-types/appointment-sent/appointment-sent.component.html"),
        styles: [__webpack_require__(/*! ./appointment-sent.component.css */ "./src/app/home/appointment/appointment-types/appointment-sent/appointment-sent.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_appointment_appointments_navigation_admin_service__WEBPACK_IMPORTED_MODULE_2__["AppointmentsNavigationAdminService"]])
], AppointmentSentComponent);



/***/ }),

/***/ "./src/app/home/appointment/appointment-types/appointment-start/appointment-start.component.css":
/*!******************************************************************************************************!*\
  !*** ./src/app/home/appointment/appointment-types/appointment-start/appointment-start.component.css ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".primary {\r\n  color: #800029;\r\n  margin-left: 10px;\r\n  padding-left: 10px\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9hcHBvaW50bWVudC9hcHBvaW50bWVudC10eXBlcy9hcHBvaW50bWVudC1zdGFydC9hcHBvaW50bWVudC1zdGFydC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtFQUNqQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9hcHBvaW50bWVudC9hcHBvaW50bWVudC10eXBlcy9hcHBvaW50bWVudC1zdGFydC9hcHBvaW50bWVudC1zdGFydC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByaW1hcnkge1xyXG4gIGNvbG9yOiAjODAwMDI5O1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIHBhZGRpbmctbGVmdDogMTBweFxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/home/appointment/appointment-types/appointment-start/appointment-start.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/home/appointment/appointment-types/appointment-start/appointment-start.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: AppointmentStartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentStartComponent", function() { return AppointmentStartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppointmentStartComponent = class AppointmentStartComponent {
    constructor() { }
    ngOnInit() {
    }
};
AppointmentStartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-appointment-start',
        template: __webpack_require__(/*! raw-loader!./appointment-start.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/appointment/appointment-types/appointment-start/appointment-start.component.html"),
        styles: [__webpack_require__(/*! ./appointment-start.component.css */ "./src/app/home/appointment/appointment-types/appointment-start/appointment-start.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AppointmentStartComponent);



/***/ }),

/***/ "./src/app/home/appointment/appointment/appointment.component.css":
/*!************************************************************************!*\
  !*** ./src/app/home/appointment/appointment/appointment.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-grid-tile {\r\n  background: lightblue;\r\n  /* padding: 20px; */\r\n  /* margin-left: 20px;\r\n  margin-right: 20px; */\r\n\r\n}\r\n\r\n.mat-grid-list {\r\n  display: block;\r\n  position: relative;\r\n  margin: 10px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9hcHBvaW50bWVudC9hcHBvaW50bWVudC9hcHBvaW50bWVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQjt1QkFDcUI7O0FBRXZCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9ob21lL2FwcG9pbnRtZW50L2FwcG9pbnRtZW50L2FwcG9pbnRtZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZ3JpZC10aWxlIHtcclxuICBiYWNrZ3JvdW5kOiBsaWdodGJsdWU7XHJcbiAgLyogcGFkZGluZzogMjBweDsgKi9cclxuICAvKiBtYXJnaW4tbGVmdDogMjBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7ICovXHJcblxyXG59XHJcblxyXG4ubWF0LWdyaWQtbGlzdCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbjogMTBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/home/appointment/appointment/appointment.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/home/appointment/appointment/appointment.component.ts ***!
  \***********************************************************************/
/*! exports provided: AppointmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentComponent", function() { return AppointmentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppointmentComponent = class AppointmentComponent {
    constructor() { }
    ngOnInit() {
    }
};
AppointmentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-appointment',
        template: __webpack_require__(/*! raw-loader!./appointment.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/appointment/appointment/appointment.component.html"),
        styles: [__webpack_require__(/*! ./appointment.component.css */ "./src/app/home/appointment/appointment/appointment.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AppointmentComponent);



/***/ }),

/***/ "./src/app/home/appointment/scheduled-appointments/scheduled-appointment-received.pipe.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/home/appointment/scheduled-appointments/scheduled-appointment-received.pipe.ts ***!
  \************************************************************************************************/
/*! exports provided: ScheduledAppointmentReceivedPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduledAppointmentReceivedPipe", function() { return ScheduledAppointmentReceivedPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ScheduledAppointmentReceivedPipe = class ScheduledAppointmentReceivedPipe {
    transform(items, searchText) {
        if (!items)
            return [];
        if (!searchText)
            return items;
        searchText = searchText.toLowerCase();
        function getMonthInWord(date) {
            const monthNames = [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December"
            ];
            var m = date.getMonth();
            return monthNames[m];
        }
        return items.filter(appointment => {
            if (appointment.appointmentName.toLowerCase().includes(searchText)) {
                return appointment.appointmentName.toLowerCase().includes(searchText);
            }
            else if (appointment.appointmentDescription.toLowerCase().includes(searchText)) {
                return appointment.appointmentDescription
                    .toLowerCase()
                    .includes(searchText);
            }
            else if (appointment.appointmentCreatorName.toLowerCase().includes(searchText)) {
                return appointment.appointmentCreatorName
                    .toLowerCase()
                    .includes(searchText);
            }
            else if (appointment.date.includes(searchText)) {
                return appointment.date.includes(searchText);
            }
            else if (!isNaN(Date.parse(appointment.date))) {
                let mon = getMonthInWord(new Date(appointment.date));
                return mon.toLowerCase().includes(searchText);
            }
        });
    }
};
ScheduledAppointmentReceivedPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: "scheduledAppointmentReceived"
    })
], ScheduledAppointmentReceivedPipe);



/***/ }),

/***/ "./src/app/home/appointment/scheduled-appointments/scheduled-appointments-received/scheduled-appointments-received.component.css":
/*!***************************************************************************************************************************************!*\
  !*** ./src/app/home/appointment/scheduled-appointments/scheduled-appointments-received/scheduled-appointments-received.component.css ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-card {\r\n\r\n  padding: 16px;\r\n  border-radius: 4px;\r\n  border: 1px solid maroon;\r\n  margin: 10px;\r\n  /* width: 30%; */\r\n}\r\n\r\n.mat-form-field {\r\n  font-size: 13px;\r\n  font-weight: 400;\r\n  width: 52%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9hcHBvaW50bWVudC9zY2hlZHVsZWQtYXBwb2ludG1lbnRzL3NjaGVkdWxlZC1hcHBvaW50bWVudHMtcmVjZWl2ZWQvc2NoZWR1bGVkLWFwcG9pbnRtZW50cy1yZWNlaXZlZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsd0JBQXdCO0VBQ3hCLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFVBQVU7QUFDWiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvYXBwb2ludG1lbnQvc2NoZWR1bGVkLWFwcG9pbnRtZW50cy9zY2hlZHVsZWQtYXBwb2ludG1lbnRzLXJlY2VpdmVkL3NjaGVkdWxlZC1hcHBvaW50bWVudHMtcmVjZWl2ZWQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtY2FyZCB7XHJcblxyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIG1hcm9vbjtcclxuICBtYXJnaW46IDEwcHg7XHJcbiAgLyogd2lkdGg6IDMwJTsgKi9cclxufVxyXG5cclxuLm1hdC1mb3JtLWZpZWxkIHtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICB3aWR0aDogNTIlO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/home/appointment/scheduled-appointments/scheduled-appointments-received/scheduled-appointments-received.component.ts":
/*!**************************************************************************************************************************************!*\
  !*** ./src/app/home/appointment/scheduled-appointments/scheduled-appointments-received/scheduled-appointments-received.component.ts ***!
  \**************************************************************************************************************************************/
/*! exports provided: ScheduledAppointmentsReceivedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduledAppointmentsReceivedComponent", function() { return ScheduledAppointmentsReceivedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_appointment_data_storage_appointment_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared-appointment/data-storage-appointment.service */ "./src/app/home/appointment/shared-appointment/data-storage-appointment.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");




let ScheduledAppointmentsReceivedComponent = class ScheduledAppointmentsReceivedComponent {
    constructor(dataStorageAppointment, _snackbar) {
        this.dataStorageAppointment = dataStorageAppointment;
        this._snackbar = _snackbar;
        this.searchText = "";
    }
    ngOnInit() {
        this.dataStorageAppointment
            .userScheduledAppointments()
            .subscribe(result => {
            if (result.result) {
                this.appointments = result.result;
            }
            else {
                this._snackbar.open(result.message, "close", {
                    duration: 5000,
                    panelClass: ["delete"]
                });
            }
            // if (result.status == 200) {
            //   this.appointments = result.result;
            // }
            // if (result.status == 404) {
            //   this._snackbar.openFromComponent(AppointmentSnackbarComponent, {
            //     duration: 4000,
            //     panelClass: ["delete"],
            //     data: result.message
            //   });
            // }
            console.log(result);
        });
    }
};
ScheduledAppointmentsReceivedComponent.ctorParameters = () => [
    { type: _shared_appointment_data_storage_appointment_service__WEBPACK_IMPORTED_MODULE_2__["DataStorageAppointmentService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] }
];
ScheduledAppointmentsReceivedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-scheduled-appointments-received",
        template: __webpack_require__(/*! raw-loader!./scheduled-appointments-received.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/appointment/scheduled-appointments/scheduled-appointments-received/scheduled-appointments-received.component.html"),
        styles: [__webpack_require__(/*! ./scheduled-appointments-received.component.css */ "./src/app/home/appointment/scheduled-appointments/scheduled-appointments-received/scheduled-appointments-received.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_appointment_data_storage_appointment_service__WEBPACK_IMPORTED_MODULE_2__["DataStorageAppointmentService"],
        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])
], ScheduledAppointmentsReceivedComponent);



/***/ }),

/***/ "./src/app/home/appointment/scheduled-appointments/scheduled-appointments-sent/scheduled-appointment-sent.pipe.ts":
/*!************************************************************************************************************************!*\
  !*** ./src/app/home/appointment/scheduled-appointments/scheduled-appointments-sent/scheduled-appointment-sent.pipe.ts ***!
  \************************************************************************************************************************/
/*! exports provided: ScheduledAppointmentSentPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduledAppointmentSentPipe", function() { return ScheduledAppointmentSentPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ScheduledAppointmentSentPipe = class ScheduledAppointmentSentPipe {
    transform(items, searchText) {
        if (!items)
            return [];
        if (!searchText)
            return items;
        searchText = searchText.toLowerCase();
        function getMonthInWord(date) {
            const monthNames = [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December"
            ];
            var m = date.getMonth();
            return monthNames[m];
        }
        return items.filter(appointment => {
            if (appointment.appointmentName.toLowerCase().includes(searchText)) {
                return appointment.appointmentName.toLowerCase().includes(searchText);
            }
            else if (appointment.appointmentDescription.toLowerCase().includes(searchText)) {
                return appointment.appointmentDescription
                    .toLowerCase()
                    .includes(searchText);
            }
            else if (appointment.selectorName.toLowerCase().includes(searchText)) {
                return appointment.selectorName.toLowerCase().includes(searchText);
            }
            else if (appointment.appointmentCreatorName.toLowerCase().includes(searchText)) {
                return appointment.appointmentCreatorName
                    .toLowerCase()
                    .includes(searchText);
            }
            else if (appointment.date.includes(searchText)) {
                return appointment.date.includes(searchText);
            }
            else if (!isNaN(Date.parse(appointment.date))) {
                let mon = getMonthInWord(new Date(appointment.date));
                return mon.toLowerCase().includes(searchText);
            }
        });
    }
};
ScheduledAppointmentSentPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: "scheduledAppointmentSent"
    })
], ScheduledAppointmentSentPipe);



/***/ }),

/***/ "./src/app/home/appointment/scheduled-appointments/scheduled-appointments-sent/scheduled-appointments-sent.component.css":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/home/appointment/scheduled-appointments/scheduled-appointments-sent/scheduled-appointments-sent.component.css ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-card {\r\n\r\n  padding: 16px;\r\n  border-radius: 4px;\r\n  border: 1px solid maroon;\r\n  margin: 10px;\r\n  /* width: 30%; */\r\n}\r\n\r\n.mat-form-field {\r\n  font-size: 13px;\r\n  font-weight: 400;\r\n  width: 52%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9hcHBvaW50bWVudC9zY2hlZHVsZWQtYXBwb2ludG1lbnRzL3NjaGVkdWxlZC1hcHBvaW50bWVudHMtc2VudC9zY2hlZHVsZWQtYXBwb2ludG1lbnRzLXNlbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLHdCQUF3QjtFQUN4QixZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixVQUFVO0FBQ1oiLCJmaWxlIjoic3JjL2FwcC9ob21lL2FwcG9pbnRtZW50L3NjaGVkdWxlZC1hcHBvaW50bWVudHMvc2NoZWR1bGVkLWFwcG9pbnRtZW50cy1zZW50L3NjaGVkdWxlZC1hcHBvaW50bWVudHMtc2VudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1jYXJkIHtcclxuXHJcbiAgcGFkZGluZzogMTZweDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgbWFyb29uO1xyXG4gIG1hcmdpbjogMTBweDtcclxuICAvKiB3aWR0aDogMzAlOyAqL1xyXG59XHJcblxyXG4ubWF0LWZvcm0tZmllbGQge1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIHdpZHRoOiA1MiU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/home/appointment/scheduled-appointments/scheduled-appointments-sent/scheduled-appointments-sent.component.ts":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/home/appointment/scheduled-appointments/scheduled-appointments-sent/scheduled-appointments-sent.component.ts ***!
  \******************************************************************************************************************************/
/*! exports provided: ScheduledAppointmentsSentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduledAppointmentsSentComponent", function() { return ScheduledAppointmentsSentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _shared_appointment_data_storage_appointment_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared-appointment/data-storage-appointment.service */ "./src/app/home/appointment/shared-appointment/data-storage-appointment.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");





let ScheduledAppointmentsSentComponent = class ScheduledAppointmentsSentComponent {
    constructor(authService, dataStorageAppointment, _snackbar) {
        this.authService = authService;
        this.dataStorageAppointment = dataStorageAppointment;
        this._snackbar = _snackbar;
        this.searchText = "";
    }
    ngOnInit() {
        this.currentRole = this.authService.user;
        if (this.currentRole === "ROLE_ADMIN" || this.currentRole === "ROLE_PM") {
            console.log("admin data here!");
            this.dataStorageAppointment
                .adminScheduledAppointmentsRecipients()
                .subscribe(result => {
                console.log(result);
                console.log(result.result);
                this.appointments = result.result;
                if (result.result) {
                    this.appointments = result.result;
                }
                else {
                    this._snackbar.open(result.message, "close", {
                        duration: 5000,
                        panelClass: ["delete"]
                    });
                }
            });
        }
        else {
            console.log("user data here!!!");
            this.dataStorageAppointment
                .userScheduledAppointments()
                .subscribe(result => {
                if (result.result) {
                    this.appointments = result.result;
                }
                else {
                    this._snackbar.open(result.message, "close", {
                        duration: 5000,
                        panelClass: ["delete"]
                    });
                }
                console.log(result);
            });
        }
    }
};
ScheduledAppointmentsSentComponent.ctorParameters = () => [
    { type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _shared_appointment_data_storage_appointment_service__WEBPACK_IMPORTED_MODULE_3__["DataStorageAppointmentService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] }
];
ScheduledAppointmentsSentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-scheduled-appointments-sent",
        template: __webpack_require__(/*! raw-loader!./scheduled-appointments-sent.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/appointment/scheduled-appointments/scheduled-appointments-sent/scheduled-appointments-sent.component.html"),
        styles: [__webpack_require__(/*! ./scheduled-appointments-sent.component.css */ "./src/app/home/appointment/scheduled-appointments/scheduled-appointments-sent/scheduled-appointments-sent.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
        _shared_appointment_data_storage_appointment_service__WEBPACK_IMPORTED_MODULE_3__["DataStorageAppointmentService"],
        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]])
], ScheduledAppointmentsSentComponent);



/***/ }),

/***/ "./src/app/home/appointment/shared-appointment/appointment-snackbar/appointment-snackbar.component.css":
/*!*************************************************************************************************************!*\
  !*** ./src/app/home/appointment/shared-appointment/appointment-snackbar/appointment-snackbar.component.css ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvYXBwb2ludG1lbnQvc2hhcmVkLWFwcG9pbnRtZW50L2FwcG9pbnRtZW50LXNuYWNrYmFyL2FwcG9pbnRtZW50LXNuYWNrYmFyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/home/appointment/shared-appointment/appointment-snackbar/appointment-snackbar.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/home/appointment/shared-appointment/appointment-snackbar/appointment-snackbar.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: AppointmentSnackbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentSnackbarComponent", function() { return AppointmentSnackbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");



let AppointmentSnackbarComponent = class AppointmentSnackbarComponent {
    constructor(data) {
        this.data = data;
    }
    ngOnInit() { }
};
AppointmentSnackbarComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MAT_SNACK_BAR_DATA"],] }] }
];
AppointmentSnackbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-appointment-snackbar",
        template: __webpack_require__(/*! raw-loader!./appointment-snackbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/appointment/shared-appointment/appointment-snackbar/appointment-snackbar.component.html"),
        styles: [__webpack_require__(/*! ./appointment-snackbar.component.css */ "./src/app/home/appointment/shared-appointment/appointment-snackbar/appointment-snackbar.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MAT_SNACK_BAR_DATA"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
], AppointmentSnackbarComponent);



/***/ }),

/***/ "./src/app/home/appointment/shared-appointment/appointments-navigation-admin.service.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/home/appointment/shared-appointment/appointments-navigation-admin.service.ts ***!
  \**********************************************************************************************/
/*! exports provided: AppointmentsNavigationAdminService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentsNavigationAdminService", function() { return AppointmentsNavigationAdminService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let AppointmentsNavigationAdminService = class AppointmentsNavigationAdminService {
    constructor() {
        this.appointmentStatusSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]("nodata");
        this.appointmentStatus = this.appointmentStatusSubject.asObservable();
        this.appointmentStatusDetailSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]("nodata");
        this.appointmentStatusDetail = this.appointmentStatusDetailSubject.asObservable();
        this.appointmentStatusItemSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]("nodata");
        this.appointmentStatusItem = this.appointmentStatusItemSubject.asObservable();
    }
    changeAppointmentStatus(status) {
        this.appointmentStatusSubject.next(status);
    }
    changeAppointmentStatusForDetail(status) {
        this.appointmentStatusDetailSubject.next(status);
    }
    changeAppointmentStatusForItem(status) {
        this.appointmentStatusItemSubject.next(status);
    }
};
AppointmentsNavigationAdminService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AppointmentsNavigationAdminService);



/***/ }),

/***/ "./src/app/home/appointment/shared-appointment/data-storage-appointment.service.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/home/appointment/shared-appointment/data-storage-appointment.service.ts ***!
  \*****************************************************************************************/
/*! exports provided: DataStorageAppointmentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataStorageAppointmentService", function() { return DataStorageAppointmentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let DataStorageAppointmentService = class DataStorageAppointmentService {
    constructor(http) {
        this.http = http;
        this.baseUrlAppointment = "http://ec2-100-26-194-180.compute-1.amazonaws.com:8181/api/appointment/";
        this.isLoadingSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.isLoading = this.isLoadingSubject.asObservable();
        this.appointmentSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({});
    }
    get appointmentLists() {
        if (!this.appointmentSubject.value) {
            return [];
        }
        else {
            return this.appointmentSubject.value;
        }
    }
    storeAppointment(obj) {
        this.isLoadingSubject.next(true);
        return this.http
            .post(this.baseUrlAppointment + "set", obj)
            .pipe((Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(data => data), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(() => this.isLoadingSubject.next(false)));
    }
    deleteAppointment(id) {
        this.isLoadingSubject.next(true);
        return this.http
            .delete(this.baseUrlAppointment + "delete/" + id)
            .pipe((Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(data => data), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(() => this.isLoadingSubject.next(false)));
    }
    userSelectTimeSlot(id) {
        this.isLoadingSubject.next(true);
        return this.http
            .post(this.baseUrlAppointment + "timeslots/postSlot/" + id, id)
            .pipe((Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(data => data), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(() => this.isLoadingSubject.next(false)));
    }
    fetchAppointment() {
        this.isLoadingSubject.next(true);
        this.http
            .get(this.baseUrlAppointment + "created/allAppointments")
            .pipe((Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(data => data),
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error)),
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(() => this.isLoadingSubject.next(false))))
            .subscribe((result) => {
            console.log(result);
            if (result.status == 200 && result.result) {
                this.appointmentSubject.next(result.result);
            }
            else {
                this.appointmentSubject.next([]);
            }
        });
    }
    fetchUserAppointment() {
        this.isLoadingSubject.next(true);
        this.http
            .get(this.baseUrlAppointment + "received/allAppointments")
            .pipe((Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(data => data),
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])("there was an error" + error)),
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(() => this.isLoadingSubject.next(false))))
            .subscribe((result) => {
            if (result.status == 200 && result.result) {
                this.appointmentSubject.next(result.result);
                this.isLoadingSubject.next(false);
                // this.adminAppointmentReceived.next(true);
            }
            else {
                this.appointmentSubject.next([]);
            }
        });
    }
    fetchUserAppointmentForCal() {
        this.isLoadingSubject.next(true);
        this.http
            .get(this.baseUrlAppointment + "calendar/user")
            .pipe((Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(data => data),
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])("there was an error" + error)),
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(() => this.isLoadingSubject.next(false))))
            .subscribe((result) => {
            if (result.status == 200 && result.result) {
                //console.log(result.result);
                this.appointmentSubject.next(result.result);
            }
        });
    }
    displayAppointmentDetails(id) {
        this.isLoadingSubject.next(true);
        return this.http
            .get(this.baseUrlAppointment + "timeslots/faculty/" + id)
            .pipe((Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(data => data),
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error)),
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(() => this.isLoadingSubject.next(false))));
    }
    displayUserAppointmentDetails(id) {
        this.isLoadingSubject.next(true);
        return this.http
            .get(this.baseUrlAppointment + "timeslots/user/" + id)
            .pipe((Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(data => data),
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error)),
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(() => this.isLoadingSubject.next(false))));
    }
    adminScheduledAppointmentsRecipients() {
        this.isLoadingSubject.next(true);
        return this.http
            .get(this.baseUrlAppointment + "getScheduledAppointmentsForAdmin")
            .pipe((Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(data => data),
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error)),
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(() => this.isLoadingSubject.next(false))));
    }
    userScheduledAppointments() {
        this.isLoadingSubject.next(true);
        return this.http
            .get(this.baseUrlAppointment + "getScheduledAppointmentsForUsers")
            .pipe((Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(data => data),
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error)),
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(() => this.isLoadingSubject.next(false))));
    }
    // send appointments to calendar
    sendApptToCal(id) {
        this.isLoadingSubject.next(true);
        return this.http
            .post(this.baseUrlAppointment + "sendToCalendar/" + id, id)
            .pipe((Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(data => data), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(() => this.isLoadingSubject.next(false)));
    }
    updateAppointment(obj, id) {
        {
            this.isLoadingSubject.next(true);
            return this.http
                .put(this.baseUrlAppointment + "edit/" + id, obj)
                .pipe((Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(data => data), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(() => this.isLoadingSubject.next(false)));
        }
    }
};
DataStorageAppointmentService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
DataStorageAppointmentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], DataStorageAppointmentService);



/***/ }),

/***/ "./src/app/home/calendar/calendar-create/calendar-create.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/home/calendar/calendar-create/calendar-create.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".spacer{\r\n    flex: 1 1 auto;\r\n}\r\nmat-toolbar{\r\n    height: 2em;\r\n    background-color: white;\r\n}\r\ndiv{\r\n    margin-bottom: 10px;\r\n}\r\n.submit{\r\n    background-color: rgb(25, 204, 25);\r\n    color: white;\r\n}\r\n.close-button{\r\n    color: darkgrey;\r\n    cursor:pointer;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9jYWxlbmRhci9jYWxlbmRhci1jcmVhdGUvY2FsZW5kYXItY3JlYXRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGtDQUFrQztJQUNsQyxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvY2FsZW5kYXIvY2FsZW5kYXItY3JlYXRlL2NhbGVuZGFyLWNyZWF0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNwYWNlcntcclxuICAgIGZsZXg6IDEgMSBhdXRvO1xyXG59XHJcbm1hdC10b29sYmFye1xyXG4gICAgaGVpZ2h0OiAyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5kaXZ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbi5zdWJtaXR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUsIDIwNCwgMjUpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5jbG9zZS1idXR0b257XHJcbiAgICBjb2xvcjogZGFya2dyZXk7XHJcbiAgICBjdXJzb3I6cG9pbnRlcjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/calendar/calendar-create/calendar-create.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/home/calendar/calendar-create/calendar-create.component.ts ***!
  \****************************************************************************/
/*! exports provided: CalendarCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarCreateComponent", function() { return CalendarCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shared_data_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/data-storage.service */ "./src/app/home/shared/data-storage.service.ts");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm2015/keycodes.js");
/* harmony import */ var _shared_group_selection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/group-selection */ "./src/app/home/shared/group-selection.ts");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");









let CalendarCreateComponent = class CalendarCreateComponent {
    constructor(ref, dataStorage, dialog, snackbar, authService) {
        this.ref = ref;
        this.dataStorage = dataStorage;
        this.dialog = dialog;
        this.snackbar = snackbar;
        this.authService = authService;
        this.color = '#5484ed';
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]);
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["COMMA"]];
        this.userList = [];
        this.dataStorage.getEmails();
        this.dataStorage.emails.subscribe((result) => {
            if (result.length > 0) {
                result.forEach(o => this.userList.push(o.email));
            }
        });
        this.filteredUserList = this.email.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])((user) => user ? this.filter(user) : this.userList.slice()));
    }
    filter(value) {
        const filterValue = value.toLocaleLowerCase();
        return this.userList.filter(user => user.toLocaleLowerCase().includes(filterValue));
    }
    selected(event) {
        if (!this.emails.includes(event.option.value)) {
            this.emails.push(event.option.value);
            this.userInput.nativeElement.value = "";
            this.email.setValue(null);
        }
    }
    ngOnInit() {
        this.role = this.authService.user;
        this.emails = [];
        this.calForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            email: this.email,
            color: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]()
        });
    }
    close() {
        this.ref.close();
    }
    setPrimary(color) {
        this.color = color;
    }
    onSubmit() {
        const obj = {
            name: this.calForm.value['name'],
            recipients: this.emails,
            color: this.color
        };
        this.dataStorage.newCalendar(obj).subscribe(result => {
            if (result) {
                this.snackbar.open(result.message, 'close', { duration: 4000, panelClass: ["standard"] });
                if (result.status === 201) {
                    this.dataStorage.fetchCalendars();
                    this.ref.close();
                }
            }
            else {
                this.snackbar.open('Something went wrong.', 'close', { duration: 4000, panelClass: ["standard"] });
            }
        });
    }
    add(event) {
        const input = event.input;
        // const value = event.value;
        this.email.setValue(event.value);
        console.log(this.email.hasError("email"));
        if (!this.email.hasError("email")) {
            // if (!this.email.hasError("email")) {
            if (this.email.value.trim()) {
                this.isEmailValid = true;
                this.emails.push(this.email.value.trim());
                this.emails.sort((a, b) => a.toLowerCase() < b.toLowerCase()
                    ? -1
                    : a.toLowerCase() > b.toLowerCase()
                        ? 1
                        : 0);
                console.log(this.emails);
            }
            else if (this.email.value === "" && this.emails.length < 0) {
                this.chipList.errorState = true;
                this.isEmailValid = false;
                this.errorMessage = "please enter a valid email address";
            }
            else {
                this.chipList.errorState = false;
            }
        }
        else {
            this.chipList.errorState = true;
            this.isEmailValid = false;
            this.errorMessage = "please enter a valid email address";
        }
        // Reset the input value
        if (input) {
            input.value = "";
        }
    }
    remove(email) {
        const index = this.emails.indexOf(email);
        if (index >= 0) {
            this.emails.splice(index, 1);
        }
    }
    groupSelect() {
        const dialogRef = this.dialog.open(_shared_group_selection__WEBPACK_IMPORTED_MODULE_6__["GroupSelection"], {
            width: "500px"
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log(result);
            for (let group of result) {
                console.log(group);
                for (let email of group.emails) {
                    console.log(email);
                    if (!this.emails.includes(email.email)) {
                        this.emails.push(email.email);
                    }
                }
            }
        });
    }
};
CalendarCreateComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: _shared_data_storage_service__WEBPACK_IMPORTED_MODULE_4__["DataStorageService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] },
    { type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("chipList", { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], CalendarCreateComponent.prototype, "chipList", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("userInput", { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], CalendarCreateComponent.prototype, "userInput", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("auto", { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatAutocomplete"])
], CalendarCreateComponent.prototype, "matAutocomplete", void 0);
CalendarCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-calendar-create',
        template: __webpack_require__(/*! raw-loader!./calendar-create.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/calendar/calendar-create/calendar-create.component.html"),
        styles: [__webpack_require__(/*! ./calendar-create.component.css */ "./src/app/home/calendar/calendar-create/calendar-create.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
        _shared_data_storage_service__WEBPACK_IMPORTED_MODULE_4__["DataStorageService"],
        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"],
        src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]])
], CalendarCreateComponent);



/***/ }),

/***/ "./src/app/home/calendar/calendar-list/calendar-item/calendar-item.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/home/calendar/calendar-list/calendar-item/calendar-item.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cal-item{\r\n    height: 2em;\r\n    background-color: white;\r\n    font-size: 0.8em;\r\n    padding: 0;\r\n}\r\n.cal-menu{\r\n    opacity: 0;\r\n    cursor:pointer;\r\n}\r\ndiv{\r\n    padding-bottom: 10px;\r\n}\r\nmat-toolbar{\r\n    background-color: white;\r\n    height: 1em;\r\n    margin-top: 15px;\r\n}\r\n.close-button{\r\n    cursor: pointer;\r\n}\r\n.cal-item:hover .cal-menu{\r\n    opacity: 100;\r\n}\r\n.spacer{\r\n    flex: 1 1 auto;\r\n}\r\n.submit{\r\n    border-color: #800029;\r\n    color: #800029;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9jYWxlbmRhci9jYWxlbmRhci1saXN0L2NhbGVuZGFyLWl0ZW0vY2FsZW5kYXItaXRlbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsVUFBVTtBQUNkO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsY0FBYztBQUNsQjtBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCO0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsV0FBVztJQUNYLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUVBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksY0FBYztBQUNsQjtBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGNBQWM7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2NhbGVuZGFyL2NhbGVuZGFyLWxpc3QvY2FsZW5kYXItaXRlbS9jYWxlbmRhci1pdGVtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FsLWl0ZW17XHJcbiAgICBoZWlnaHQ6IDJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAwLjhlbTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuLmNhbC1tZW51e1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIGN1cnNvcjpwb2ludGVyO1xyXG59XHJcblxyXG5kaXZ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxubWF0LXRvb2xiYXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGhlaWdodDogMWVtO1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxufVxyXG4uY2xvc2UtYnV0dG9ue1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uY2FsLWl0ZW06aG92ZXIgLmNhbC1tZW51e1xyXG4gICAgb3BhY2l0eTogMTAwO1xyXG59XHJcbi5zcGFjZXJ7XHJcbiAgICBmbGV4OiAxIDEgYXV0bztcclxufVxyXG5cclxuLnN1Ym1pdHtcclxuICAgIGJvcmRlci1jb2xvcjogIzgwMDAyOTtcclxuICAgIGNvbG9yOiAjODAwMDI5O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/home/calendar/calendar-list/calendar-item/calendar-item.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/home/calendar/calendar-list/calendar-item/calendar-item.component.ts ***!
  \**************************************************************************************/
/*! exports provided: CalendarItemComponent, CalRename, DeleteConfirm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarItemComponent", function() { return CalendarItemComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalRename", function() { return CalRename; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteConfirm", function() { return DeleteConfirm; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _calendar_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../calendar.model */ "./src/app/home/calendar/calendar-list/calendar.model.ts");
/* harmony import */ var _calendar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../calendar.service */ "./src/app/home/calendar/calendar-list/calendar.service.ts");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _share_calendar_share_calendar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../share-calendar/share-calendar.component */ "./src/app/home/calendar/share-calendar/share-calendar.component.ts");
/* harmony import */ var src_app_home_shared_data_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/home/shared/data-storage.service */ "./src/app/home/shared/data-storage.service.ts");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm2015/keycodes.js");
/* harmony import */ var src_app_home_shared_group_selection__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/home/shared/group-selection */ "./src/app/home/shared/group-selection.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_home_appointment_shared_appointment_appointment_snackbar_appointment_snackbar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/home/appointment/shared-appointment/appointment-snackbar/appointment-snackbar.component */ "./src/app/home/appointment/shared-appointment/appointment-snackbar/appointment-snackbar.component.ts");













let CalendarItemComponent = class CalendarItemComponent {
    constructor(calService, dataStorage, authService, dialog, snackbar) {
        this.calService = calService;
        this.dataStorage = dataStorage;
        this.authService = authService;
        this.dialog = dialog;
        this.snackbar = snackbar;
        this.checked = true;
    }
    ngOnInit() {
        this.username = this.authService.name;
    }
    toggleCal() {
        this.calService.toggleCalendar(this.calendar);
    }
    deleteCal() {
        const dialogRef = this.dialog.open(DeleteConfirm, {
            width: "250px"
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result === 'confirmed') {
                this.dataStorage.deleteCalendar(this.calendar.id).subscribe(result => {
                    if (result) {
                        console.log(result);
                        this.snackbar.openFromComponent(src_app_home_appointment_shared_appointment_appointment_snackbar_appointment_snackbar_component__WEBPACK_IMPORTED_MODULE_12__["AppointmentSnackbarComponent"], { duration: 5000, panelClass: ["delete"], data: result.message });
                        if (result.status === 200) {
                            this.dataStorage.fetchCalendars();
                        }
                    }
                    else {
                        this.snackbar.openFromComponent(src_app_home_appointment_shared_appointment_appointment_snackbar_appointment_snackbar_component__WEBPACK_IMPORTED_MODULE_12__["AppointmentSnackbarComponent"], { duration: 4000, panelClass: ["standard"], data: 'Something went wrong.' });
                    }
                });
            }
        });
    }
    renameCal() {
        this.dialog.open(CalRename, {
            width: "500px",
            data: this.calendar
        });
    }
    shareCal() {
        this.dialog.open(_share_calendar_share_calendar_component__WEBPACK_IMPORTED_MODULE_7__["ShareCalendarComponent"], {
            width: "500px",
            height: "300px",
            data: this.calendar
        });
    }
};
CalendarItemComponent.ctorParameters = () => [
    { type: _calendar_service__WEBPACK_IMPORTED_MODULE_3__["CalendarService"] },
    { type: src_app_home_shared_data_storage_service__WEBPACK_IMPORTED_MODULE_8__["DataStorageService"] },
    { type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], CalendarItemComponent.prototype, "index", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _calendar_model__WEBPACK_IMPORTED_MODULE_2__["Calendar"])
], CalendarItemComponent.prototype, "calendar", void 0);
CalendarItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-calendar-item',
        template: __webpack_require__(/*! raw-loader!./calendar-item.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/calendar/calendar-list/calendar-item/calendar-item.component.html"),
        styles: [__webpack_require__(/*! ./calendar-item.component.css */ "./src/app/home/calendar/calendar-list/calendar-item/calendar-item.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_calendar_service__WEBPACK_IMPORTED_MODULE_3__["CalendarService"],
        src_app_home_shared_data_storage_service__WEBPACK_IMPORTED_MODULE_8__["DataStorageService"],
        src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
        _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"],
        _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]])
], CalendarItemComponent);

let CalRename = class CalRename {
    constructor(ref, dataStorage, dialog, snackbar, authService, data) {
        this.ref = ref;
        this.dataStorage = dataStorage;
        this.dialog = dialog;
        this.snackbar = snackbar;
        this.authService = authService;
        this.data = data;
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].email]);
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__["COMMA"]];
        this.userList = [];
        this.dataStorage.getEmails();
        this.dataStorage.emails.subscribe((result) => {
            if (result.length > 0) {
                result.forEach(o => this.userList.push(o.email));
            }
        });
        this.filteredUserList = this.email.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["map"])((user) => user ? this.filter(user) : this.userList.slice()));
    }
    filter(value) {
        const filterValue = value.toLocaleLowerCase();
        return this.userList.filter(user => user.toLocaleLowerCase().includes(filterValue));
    }
    selected(event) {
        if (!this.emails.includes(event.option.value)) {
            this.emails.push(event.option.value);
            this.userInput.nativeElement.value = "";
            this.email.setValue(null);
        }
    }
    ngOnInit() {
        this.role = this.authService.user;
        this.cal = this.data;
        console.log(this.cal);
        this.emails = [];
        for (let user of this.cal.shareduser) {
            this.emails.push(user.email);
        }
        this.primaryColor = this.cal.color;
        this.nameForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](this.cal.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]),
            email: this.email,
            color: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]()
        });
    }
    onSubmit() {
        const nameFormValues = this.nameForm.value;
        const obj = {
            name: nameFormValues.name,
            color: this.primaryColor,
            recipients: this.emails
        };
        this.dataStorage.updateCalendar(obj, this.cal.id).subscribe(result => {
            if (result) {
                console.log(result);
                this.snackbar.open(result.message, 'close', { duration: 4000, panelClass: ["standard"] });
                if (result.status === 200) {
                    this.ref.close();
                    this.dataStorage.fetchCalendars();
                }
            }
            else {
                this.snackbar.open('Something went wrong.', 'close', { duration: 4000, panelClass: ["standard"] });
            }
        });
    }
    add(event) {
        const input = event.input;
        // const value = event.value;
        this.email.setValue(event.value);
        console.log(this.email.hasError("email"));
        if (!this.email.hasError("email")) {
            // if (!this.email.hasError("email")) {
            if (this.email.value.trim()) {
                this.isEmailValid = true;
                this.emails.push(this.email.value.trim());
                this.emails.sort((a, b) => a.toLowerCase() < b.toLowerCase()
                    ? -1
                    : a.toLowerCase() > b.toLowerCase()
                        ? 1
                        : 0);
                console.log(this.emails);
            }
            else if (this.email.value === "" && this.emails.length < 0) {
                this.chipList.errorState = true;
                this.isEmailValid = false;
                this.errorMessage = "please enter a valid email address";
            }
            else {
                this.chipList.errorState = false;
            }
        }
        else {
            this.chipList.errorState = true;
            this.isEmailValid = false;
            this.errorMessage = "please enter a valid email address";
        }
        // Reset the input value
        if (input) {
            input.value = "";
        }
    }
    groupSelect() {
        const dialogRef = this.dialog.open(src_app_home_shared_group_selection__WEBPACK_IMPORTED_MODULE_10__["GroupSelection"], {
            width: "500px"
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log(result);
            for (let group of result) {
                console.log(group);
                for (let email of group.emails) {
                    console.log(email);
                    if (!this.emails.includes(email.email)) {
                        this.emails.push(email.email);
                    }
                }
            }
        });
    }
    remove(email) {
        const index = this.emails.indexOf(email);
        if (index >= 0) {
            this.emails.splice(index, 1);
        }
    }
    setPrimary(color) {
        this.primaryColor = color;
    }
    close() {
        this.ref.close();
    }
};
CalRename.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"] },
    { type: src_app_home_shared_data_storage_service__WEBPACK_IMPORTED_MODULE_8__["DataStorageService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] },
    { type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _calendar_model__WEBPACK_IMPORTED_MODULE_2__["Calendar"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"],] }] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("chipList", { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], CalRename.prototype, "chipList", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("userInput", { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], CalRename.prototype, "userInput", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("auto", { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatAutocomplete"])
], CalRename.prototype, "matAutocomplete", void 0);
CalRename = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cal-rename',
        template: __webpack_require__(/*! raw-loader!./cal-rename.html */ "./node_modules/raw-loader/index.js!./src/app/home/calendar/calendar-list/calendar-item/cal-rename.html"),
        styles: [__webpack_require__(/*! ./calendar-item.component.css */ "./src/app/home/calendar/calendar-list/calendar-item/calendar-item.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"],
        src_app_home_shared_data_storage_service__WEBPACK_IMPORTED_MODULE_8__["DataStorageService"],
        _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"],
        _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"],
        src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
        _calendar_model__WEBPACK_IMPORTED_MODULE_2__["Calendar"]])
], CalRename);

let DeleteConfirm = class DeleteConfirm {
    constructor(ref) {
        this.ref = ref;
    }
    close() {
        this.ref.close('cancel');
    }
    delete() {
        this.ref.close('confirmed');
    }
};
DeleteConfirm.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"] }
];
DeleteConfirm = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-delete-confirm',
        template: __webpack_require__(/*! raw-loader!./delete-confirm.html */ "./node_modules/raw-loader/index.js!./src/app/home/calendar/calendar-list/calendar-item/delete-confirm.html"),
        styles: [__webpack_require__(/*! ./calendar-item.component.css */ "./src/app/home/calendar/calendar-list/calendar-item/calendar-item.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"]])
], DeleteConfirm);



/***/ }),

/***/ "./src/app/home/calendar/calendar-list/calendar-list.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/home/calendar/calendar-list/calendar-list.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cal-list{\r\n    width:90%;\r\n    border: 1pt solid rgba(169, 169, 169, 0.445);\r\n    margin-top: 8px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9jYWxlbmRhci9jYWxlbmRhci1saXN0L2NhbGVuZGFyLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFNBQVM7SUFDVCw0Q0FBNEM7SUFDNUMsZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvY2FsZW5kYXIvY2FsZW5kYXItbGlzdC9jYWxlbmRhci1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FsLWxpc3R7XHJcbiAgICB3aWR0aDo5MCU7XHJcbiAgICBib3JkZXI6IDFwdCBzb2xpZCByZ2JhKDE2OSwgMTY5LCAxNjksIDAuNDQ1KTtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/calendar/calendar-list/calendar-list.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/home/calendar/calendar-list/calendar-list.component.ts ***!
  \************************************************************************/
/*! exports provided: CalendarListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarListComponent", function() { return CalendarListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _calendar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calendar.service */ "./src/app/home/calendar/calendar-list/calendar.service.ts");
/* harmony import */ var _events_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../events.service */ "./src/app/home/calendar/events.service.ts");
/* harmony import */ var _shared_data_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/data-storage.service */ "./src/app/home/shared/data-storage.service.ts");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/auth/auth.service */ "./src/app/auth/auth.service.ts");






let CalendarListComponent = class CalendarListComponent {
    constructor(calendarService, eventService, dataStorage, authService) {
        this.calendarService = calendarService;
        this.eventService = eventService;
        this.dataStorage = dataStorage;
        this.authService = authService;
    }
    ngOnInit() {
        this.dataStorage.fetchCalendars();
        this.username = this.authService.name;
        this.dataStorage.isLoading.subscribe(loading => {
            if (!loading) {
                this.calendars = this.calendarService.getCalendars().filter(cal => cal.defaultCalendar && cal.createdBy.email === this.username);
                this.customCals = this.calendarService.getCalendars().filter(cal => cal.createdBy.email === this.username && !cal.defaultCalendar);
                this.sharedCals = this.calendarService.getCalendars().filter(cal => cal.createdBy.email !== this.username);
                console.log(this.sharedCals);
            }
        }); //gets calendars from service
    }
};
CalendarListComponent.ctorParameters = () => [
    { type: _calendar_service__WEBPACK_IMPORTED_MODULE_2__["CalendarService"] },
    { type: _events_service__WEBPACK_IMPORTED_MODULE_3__["EventService"] },
    { type: _shared_data_storage_service__WEBPACK_IMPORTED_MODULE_4__["DataStorageService"] },
    { type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }
];
CalendarListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-calendar-list',
        template: __webpack_require__(/*! raw-loader!./calendar-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/calendar/calendar-list/calendar-list.component.html"),
        styles: [__webpack_require__(/*! ./calendar-list.component.css */ "./src/app/home/calendar/calendar-list/calendar-list.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_calendar_service__WEBPACK_IMPORTED_MODULE_2__["CalendarService"],
        _events_service__WEBPACK_IMPORTED_MODULE_3__["EventService"],
        _shared_data_storage_service__WEBPACK_IMPORTED_MODULE_4__["DataStorageService"],
        src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
], CalendarListComponent);



/***/ }),

/***/ "./src/app/home/calendar/calendar-list/calendar.model.ts":
/*!***************************************************************!*\
  !*** ./src/app/home/calendar/calendar-list/calendar.model.ts ***!
  \***************************************************************/
/*! exports provided: Calendar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Calendar", function() { return Calendar; });
class Calendar {
    constructor(id, defaultCalendar, name, events, createdBy, color, shown, shareduser) {
        this.id = id;
        this.defaultCalendar = defaultCalendar;
        this.name = name;
        this.events = events;
        this.createdBy = createdBy;
        this.color = color;
        this.shown = shown;
        this.shareduser = shareduser;
    }
}
Calendar.ctorParameters = () => [
    { type: Number },
    { type: Boolean },
    { type: String },
    { type: Array },
    { type: undefined },
    { type: String },
    { type: Boolean },
    { type: Array }
];


/***/ }),

/***/ "./src/app/home/calendar/calendar-list/calendar.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/home/calendar/calendar-list/calendar.service.ts ***!
  \*****************************************************************/
/*! exports provided: CalendarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarService", function() { return CalendarService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal/Subject */ "./node_modules/rxjs/internal/Subject.js");
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_2__);



let CalendarService = class CalendarService {
    constructor() {
        this.eventsChanged = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.newCals = [];
        this.calendars = [];
        //     {
        //         id: 1,
        //         name: "Main",
        //         events: [{
        //             id: 0,
        //             title: "The best event",
        //             description: "This is a test",
        //             location: "Test Location",
        //             start: new Date("10/11/2019"),
        //             end: new Date("10/11/2019"),
        //             backgroundColor: "#800029",
        //             borderColor: "#800029",
        //             allDay: true
        //         },
        //         {
        //             id: 1,
        //             title: "The best event 2",
        //             description: "This is a test",
        //             location: "Test Location",
        //             start: new Date("10/11/2019 2:00 PM"),
        //             end: new Date("10/11/2019 4:00 PM"),
        //             backgroundColor: "#800029",
        //             borderColor: "#800029",
        //             allDay: false
        //         }],
        //         shown: true,
        //         createdBy: "moorea1"
        //     },
        //     {
        //         id: 2,
        //         name: "Main 2",
        //         events: [{
        //             id: 3,
        //             title: "The best event 3",
        //             description: "This is a test",
        //             location: "Test Location",
        //             start: new Date("10/12/2019"),
        //             end: new Date("10/12/2019"),
        //             backgroundColor: "#800029",
        //             borderColor: "#800029",
        //             allDay: true
        //         },
        //         {
        //             id: 4,
        //             title: "The best event 4",
        //             description: "This is a test",
        //             location: "Test Location",
        //             start: new Date("10/31/2019 1:00 PM"),
        //             end: new Date("10/31/2019 4:00 PM"),
        //             backgroundColor: "#800029",
        //             borderColor: "#800029",
        //             allDay: false
        //         }],
        //         shown: true,
        //         createdBy: "student"
        //     }
        // ];
        this.events = [];
    }
    //returns calendars
    getCalendars() {
        return this.calendars.slice();
    }
    getCalendars2(name) {
        this.newCals = [];
        for (let cal of this.calendars) {
            if (cal.createdBy.username === name) {
                this.newCals.push(cal);
            }
        }
        return this.newCals;
    }
    //sets calendar list
    setCalendars(cals) {
        this.calendars = cals;
    }
    getEvents() {
        this.events = [];
        for (let cal of this.calendars) {
            if (cal.shown) {
                for (let event of cal.events) {
                    this.events.push(event);
                }
            }
        }
        return this.events.slice();
    }
    updateEvents() {
        this.events = [];
        for (let cal of this.calendars) {
            if (cal.shown) {
                for (let event of cal.events) {
                    this.events.push(event);
                }
            }
        }
        this.eventsChanged.next(this.events);
    }
    toggleCalendar(cal) {
        cal.shown = !cal.shown;
        this.updateEvents();
    }
    getEvent(id) {
        const event = this.events.find(event => event.id === id);
        return event;
    }
    addEvent(event) {
        this.events.push(event);
    }
    getEventCal(event) {
        const cal = this.calendars.find(calendar => calendar.events.includes(event));
        return cal.id;
    }
};
CalendarService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], CalendarService);



/***/ }),

/***/ "./src/app/home/calendar/calendar.component.css":
/*!******************************************************!*\
  !*** ./src/app/home/calendar/calendar.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\r\n  width: 100%;\r\n  height: 90%;\r\n  background-color: white;\r\n}\r\n\r\n.right-view {\r\n  margin-top: 10px;\r\n  margin-left: 10px;\r\n  padding-left: 5px;\r\n  height: 88vh;\r\n  border-left: 0.5pt solid darkgrey;\r\n}\r\n\r\n.left-view {\r\n  height: 88vh;\r\n}\r\n\r\n.cal-month-view .cal-event {\r\n  opacity: 0%;\r\n}\r\n\r\n#cal-heading {\r\n  font-size: 1rem;\r\n  font-weight: bold;\r\n  height: 3em;\r\n  background-color: white;\r\n}\r\n\r\n.top-row-wrap {\r\n  background-color: white;\r\n}\r\n\r\n.spacer {\r\n  flex: 1 1 auto;\r\n}\r\n\r\n.today-button {\r\n  color: #800029;\r\n}\r\n\r\n.today-button:hover {\r\n  background-color: darkgrey\r\n}\r\n\r\n.view-button {\r\n  color: #800029;\r\n  text-transform: capitalize;\r\n}\r\n\r\n.view-button:hover {\r\n  background-color: darkgrey\r\n}\r\n\r\n#calendar {\r\n  margin-top: 5px;\r\n  margin-left: 5px;\r\n  margin-right: 5px;\r\n}\r\n\r\n.top-row {\r\n  display: inline-block;\r\n  margin-top: 10px;\r\n}\r\n\r\n.events-list {\r\n  height: 40%;\r\n}\r\n\r\n.event-wrapper:hover {\r\n  cursor: pointer;\r\n  background-color: rgba(216, 214, 214, 0.514);\r\n}\r\n\r\n.day-title {\r\n  margin-left: 6px;\r\n  margin-right: 6px;\r\n  margin-top: 15px;\r\n  text-align: center;\r\n}\r\n\r\n.menutoggle {\r\n  height: 2em;\r\n  background-color: white;\r\n  padding: 2px;\r\n}\r\n\r\n.create-button{\r\n    background-color: white;\r\n    margin-left:5px;\r\n    color: #800029;\r\n    border: solid 1px #800029;\r\n}\r\n\r\n/* .create-button{\r\n    background-color: rgb(25, 204, 25);\r\n    margin-left:5px;\r\n    color:white;\r\n} */\r\n\r\n.side-nav-toggle {\r\n  background-color: white;\r\n}\r\n\r\n.toggle-button {\r\n  vertical-align: middle;\r\n  color: darkgrey;\r\n}\r\n\r\n.close-button {\r\n  color: darkgrey;\r\n  margin-top: 10px;\r\n}\r\n\r\n.event-times {\r\n  font-size: 0.8em;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9jYWxlbmRhci9jYWxlbmRhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRTtBQUNGOztBQUVBO0VBQ0UsY0FBYztFQUNkLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFO0FBQ0Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsNENBQTRDO0FBQzlDOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLHVCQUF1QjtFQUN2QixZQUFZO0FBQ2Q7O0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLGNBQWM7SUFDZCx5QkFBeUI7QUFDN0I7O0FBRUE7Ozs7R0FJRzs7QUFFSDtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvY2FsZW5kYXIvY2FsZW5kYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDkwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnJpZ2h0LXZpZXcge1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgaGVpZ2h0OiA4OHZoO1xyXG4gIGJvcmRlci1sZWZ0OiAwLjVwdCBzb2xpZCBkYXJrZ3JleTtcclxufVxyXG5cclxuLmxlZnQtdmlldyB7XHJcbiAgaGVpZ2h0OiA4OHZoO1xyXG59XHJcblxyXG4uY2FsLW1vbnRoLXZpZXcgLmNhbC1ldmVudCB7XHJcbiAgb3BhY2l0eTogMCU7XHJcbn1cclxuXHJcbiNjYWwtaGVhZGluZyB7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGhlaWdodDogM2VtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4udG9wLXJvdy13cmFwIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnNwYWNlciB7XHJcbiAgZmxleDogMSAxIGF1dG87XHJcbn1cclxuXHJcbi50b2RheS1idXR0b24ge1xyXG4gIGNvbG9yOiAjODAwMDI5O1xyXG59XHJcblxyXG4udG9kYXktYnV0dG9uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JleVxyXG59XHJcblxyXG4udmlldy1idXR0b24ge1xyXG4gIGNvbG9yOiAjODAwMDI5O1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG59XHJcblxyXG4udmlldy1idXR0b246aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmV5XHJcbn1cclxuXHJcbiNjYWxlbmRhciB7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn1cclxuXHJcbi50b3Atcm93IHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLmV2ZW50cy1saXN0IHtcclxuICBoZWlnaHQ6IDQwJTtcclxufVxyXG5cclxuLmV2ZW50LXdyYXBwZXI6aG92ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIxNiwgMjE0LCAyMTQsIDAuNTE0KTtcclxufVxyXG5cclxuLmRheS10aXRsZSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDZweDtcclxuICBtYXJnaW4tcmlnaHQ6IDZweDtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLm1lbnV0b2dnbGUge1xyXG4gIGhlaWdodDogMmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDJweDtcclxufVxyXG4uY3JlYXRlLWJ1dHRvbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luLWxlZnQ6NXB4O1xyXG4gICAgY29sb3I6ICM4MDAwMjk7XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjODAwMDI5O1xyXG59XHJcblxyXG4vKiAuY3JlYXRlLWJ1dHRvbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNSwgMjA0LCAyNSk7XHJcbiAgICBtYXJnaW4tbGVmdDo1cHg7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxufSAqL1xyXG5cclxuLnNpZGUtbmF2LXRvZ2dsZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi50b2dnbGUtYnV0dG9uIHtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIGNvbG9yOiBkYXJrZ3JleTtcclxufVxyXG5cclxuLmNsb3NlLWJ1dHRvbiB7XHJcbiAgY29sb3I6IGRhcmtncmV5O1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5ldmVudC10aW1lcyB7XHJcbiAgZm9udC1zaXplOiAwLjhlbTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/home/calendar/calendar.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/home/calendar/calendar.component.ts ***!
  \*****************************************************/
/*! exports provided: CalendarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarComponent", function() { return CalendarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_data_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/data-storage.service */ "./src/app/home/shared/data-storage.service.ts");
/* harmony import */ var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fullcalendar/daygrid */ "./node_modules/@fullcalendar/daygrid/main.esm.js");
/* harmony import */ var _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fullcalendar/timegrid */ "./node_modules/@fullcalendar/timegrid/main.esm.js");
/* harmony import */ var _fullcalendar_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fullcalendar/list */ "./node_modules/@fullcalendar/list/main.esm.js");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _calendar_list_calendar_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./calendar-list/calendar.service */ "./src/app/home/calendar/calendar-list/calendar.service.ts");
/* harmony import */ var _event_detail_event_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./event-detail/event-detail.component */ "./src/app/home/calendar/event-detail/event-detail.component.ts");
/* harmony import */ var _calendar_create_calendar_create_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./calendar-create/calendar-create.component */ "./src/app/home/calendar/calendar-create/calendar-create.component.ts");












let CalendarComponent = class CalendarComponent {
    constructor(router, dataStorage, authService, dialog, calService) {
        this.router = router;
        this.dataStorage = dataStorage;
        this.authService = authService;
        this.dialog = dialog;
        this.calService = calService;
        this.activeDayIsOpen = false;
        this.role = this.authService.user;
        this.panelOpen = false;
        this.calendarPlugins = [_fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_4__["default"], _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_5__["default"], _fullcalendar_list__WEBPACK_IMPORTED_MODULE_6__["default"]];
        this.compatEvents = [];
    }
    //apptEvents: any[] = [];
    ngOnInit() {
        //get calendars from database
        this.dataStorage.fetchCalendars();
        this.dataStorage.isLoading.subscribe(loading => {
            if (!loading) {
                this.compatEvents = this.calService.getEvents();
                for (let event of this.compatEvents) {
                    event.start = new Date(event.start);
                    event.end = new Date(event.end);
                }
            }
        });
        this.viewDate = new Date();
        this.subscription = this.calService.eventsChanged.subscribe((events) => {
            this.compatEvents = events;
        });
    }
    //opens event detail dialog
    eventClicked(event) {
        this.dialog.open(_event_detail_event_detail_component__WEBPACK_IMPORTED_MODULE_10__["EventDetailComponent"], {
            width: "600px",
            height: "350px",
            data: event
        });
    }
    // navigates to event creation form
    createEvent() {
        this.router.navigate(["home/create-event"]);
    }
    //opens calendar creation dialog
    newCal() {
        this.dialog.open(_calendar_create_calendar_create_component__WEBPACK_IMPORTED_MODULE_11__["CalendarCreateComponent"], {
            width: "400px"
        });
    }
};
CalendarComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _shared_data_storage_service__WEBPACK_IMPORTED_MODULE_3__["DataStorageService"] },
    { type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"] },
    { type: _calendar_list_calendar_service__WEBPACK_IMPORTED_MODULE_9__["CalendarService"] }
];
CalendarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-calendar",
        template: __webpack_require__(/*! raw-loader!./calendar.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/calendar/calendar.component.html"),
        styles: [__webpack_require__(/*! ./calendar.component.css */ "./src/app/home/calendar/calendar.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _shared_data_storage_service__WEBPACK_IMPORTED_MODULE_3__["DataStorageService"],
        src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"],
        _calendar_list_calendar_service__WEBPACK_IMPORTED_MODULE_9__["CalendarService"]])
], CalendarComponent);



/***/ }),

/***/ "./src/app/home/calendar/create-event/create-event.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/home/calendar/create-event/create-event.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\r\n    width:60%;\r\n    margin: 20px;\r\n    padding: 10px;\r\n    color: #800029;\r\n    border: #800029 solid 1px;\r\n    border-radius: 10px;\r\n    background-color: white;\r\n    box-shadow: 5px 10px 18px #888888\r\n  }\r\n  \r\n  .example-container>* {\r\n    width: 100%;\r\n  }\r\n  \r\n  .cal-select{\r\n    margin-right: 2em;\r\n  }\r\n  \r\n  #start-date,#end-date,#primary-color{\r\n    margin-right:2em;\r\n  }\r\n  \r\n  .cancel-button{\r\n    margin-left:20px;\r\n  }\r\n  \r\n  .example-chip-list{\r\n    width:60%;\r\n    margin-right:5px;\r\n  }\r\n  \r\n  .example-spacer {\r\n    flex: 1 1 auto;\r\n  }\r\n  \r\n  .mat-toolbar {\r\n    font: inherit;\r\n    background-color: white;\r\n  \r\n  }\r\n  \r\n  .mat-toolbar-row {\r\n    padding: 0;\r\n  \r\n  }\r\n  \r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9jYWxlbmRhci9jcmVhdGUtZXZlbnQvY3JlYXRlLWV2ZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxTQUFTO0lBQ1QsWUFBWTtJQUNaLGFBQWE7SUFDYixjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkI7RUFDRjs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLFNBQVM7SUFDVCxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLHVCQUF1Qjs7RUFFekI7O0VBRUE7SUFDRSxVQUFVOztFQUVaIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9jYWxlbmRhci9jcmVhdGUtZXZlbnQvY3JlYXRlLWV2ZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1jb250YWluZXIge1xyXG4gICAgd2lkdGg6NjAlO1xyXG4gICAgbWFyZ2luOiAyMHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGNvbG9yOiAjODAwMDI5O1xyXG4gICAgYm9yZGVyOiAjODAwMDI5IHNvbGlkIDFweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJveC1zaGFkb3c6IDVweCAxMHB4IDE4cHggIzg4ODg4OFxyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1jb250YWluZXI+KiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5jYWwtc2VsZWN0e1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyZW07XHJcbiAgfVxyXG5cclxuICAjc3RhcnQtZGF0ZSwjZW5kLWRhdGUsI3ByaW1hcnktY29sb3J7XHJcbiAgICBtYXJnaW4tcmlnaHQ6MmVtO1xyXG4gIH1cclxuXHJcbiAgLmNhbmNlbC1idXR0b257XHJcbiAgICBtYXJnaW4tbGVmdDoyMHB4O1xyXG4gIH1cclxuXHJcbiAgLmV4YW1wbGUtY2hpcC1saXN0e1xyXG4gICAgd2lkdGg6NjAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OjVweDtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtc3BhY2VyIHtcclxuICAgIGZsZXg6IDEgMSBhdXRvO1xyXG4gIH1cclxuICBcclxuICAubWF0LXRvb2xiYXIge1xyXG4gICAgZm9udDogaW5oZXJpdDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIFxyXG4gIH1cclxuICBcclxuICAubWF0LXRvb2xiYXItcm93IHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgXHJcbiAgfVxyXG4gIFxyXG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/home/calendar/create-event/create-event.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/home/calendar/create-event/create-event.component.ts ***!
  \**********************************************************************/
/*! exports provided: CreateEventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateEventComponent", function() { return CreateEventComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _calendar_list_calendar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../calendar-list/calendar.service */ "./src/app/home/calendar/calendar-list/calendar.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _shared_data_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/data-storage.service */ "./src/app/home/shared/data-storage.service.ts");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm2015/keycodes.js");
/* harmony import */ var _shared_group_selection__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/group-selection */ "./src/app/home/shared/group-selection.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");











let CreateEventComponent = class CreateEventComponent {
    constructor(router, authService, dialog, dataStorage, calService, snackbar) {
        this.router = router;
        this.authService = authService;
        this.dialog = dialog;
        this.dataStorage = dataStorage;
        this.calService = calService;
        this.snackbar = snackbar;
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]);
        this.dateRangeArray = [];
        this.primaryColor = "#5484ed";
        this.secondaryColor = "";
        this.allDay = false;
        this.defaultTime = new Date();
        this.defaultTime2 = new Date();
        this.emails = [];
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["COMMA"]];
        this.isEmailValid = true;
        this.userList = [];
        //theme for time picker
        this.timeTheme = {
            container: {
                bodyBackgroundColor: 'darkgrey',
                buttonColor: 'white'
            },
            dial: {
                dialBackgroundColor: 'rgb(185, 163, 90)'
            },
            clockFace: {
                clockHandColor: '#800029',
            }
        };
        this.dataStorage.getEmails();
        this.dataStorage.emails.subscribe((result) => {
            if (result.length > 0) {
                result.forEach(o => this.userList.push(o.email));
            }
        });
        this.filteredUserList = this.email.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])((user) => user ? this.filter(user) : this.userList.slice()));
    }
    ngOnInit() {
        this.emails = [];
        this.username = this.authService.name;
        this.role = this.authService.user;
        console.log(this.username);
        this.calendars = this.calService
            .getCalendars()
            .filter(cal => cal.createdBy.email === this.username);
        console.log(this.calendars);
        this.eventForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            location: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            email: this.email,
            startDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](new Date(), [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            startTime: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            endDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](new Date(), [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            endTime: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            primary: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            allDay: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            calendar: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
        });
    }
    filter(value) {
        const filterValue = value.toLocaleLowerCase();
        return this.userList.filter(user => user.toLocaleLowerCase().includes(filterValue));
    }
    selected(event) {
        if (!this.emails.includes(event.option.value)) {
            this.emails.push(event.option.value);
            this.userInput.nativeElement.value = "";
            this.email.setValue(null);
        }
    }
    getErrorMessage() {
        return this.email.hasError("email") ? "Not a valid email" : "";
    }
    allday() {
        this.allDay = !this.allDay;
        console.log(this.allDay);
    }
    onSubmit() {
        const eventFormValues = this.eventForm.value;
        if (eventFormValues.email) {
            this.emails = eventFormValues.email.split(",");
        }
        if (!this.allDay) {
            this.startDate = new Date(eventFormValues.startDate
                .toDateString()
                .concat(" ")
                .concat(eventFormValues.startTime));
            this.endDate = new Date(eventFormValues.endDate
                .toDateString()
                .concat(" ")
                .concat(eventFormValues.endTime));
        }
        else {
            this.startDate = new Date(eventFormValues.startDate.toLocaleDateString());
            this.endDate = new Date(eventFormValues.endDate.toLocaleDateString());
        }
        console.log(this.startDate, this.endDate);
        //checking if start comes before end
        if ((this.startDate <= this.endDate && this.allDay) || (this.startDate < this.endDate && !this.allDay)) {
            //creating event object based on allDay
            if (!this.allDay) {
                this.obj = {
                    calendarId: this.selectedCal,
                    title: eventFormValues.title,
                    description: eventFormValues.description,
                    start: this.startDate.toLocaleString(),
                    end: this.endDate.toLocaleString(),
                    recipients: this.emails,
                    location: eventFormValues.location,
                    backgroundColor: this.primaryColor,
                    borderColor: this.primaryColor,
                    allDay: this.allDay
                };
            }
            else {
                eventFormValues.endDate.setDate(eventFormValues.endDate.getDate() + 1);
                this.obj = {
                    calendarId: this.selectedCal,
                    title: eventFormValues.title,
                    description: eventFormValues.description,
                    start: eventFormValues.startDate.toLocaleString(),
                    end: eventFormValues.endDate.toLocaleString(),
                    recipients: this.emails,
                    location: eventFormValues.location,
                    backgroundColor: this.primaryColor,
                    borderColor: this.primaryColor,
                    allDay: this.allDay
                };
            }
            console.log(this.obj);
            //sending to database
            this.dataStorage.storeEvent(this.obj).subscribe(result => {
                if (result) {
                    this.dataStorage.fetchCalendars();
                    this.snackbar.open(result.message, 'close', { duration: 4000, panelClass: ["standard"] });
                }
                else {
                    this.snackbar.open('Something went wrong.', 'close', { duration: 4000, panelClass: ["standard"] });
                }
            });
            this.router.navigate(["home/calendar"]);
        }
        else {
            //warning for start not being before end
            this.snackbar.open('Start must come before end.', 'close', { duration: 4000, panelClass: ["standard"] });
        }
    }
    //set event color
    setPrimary(color) {
        this.primaryColor = color;
    }
    //cancel event creation
    onNoClick() {
        this.router.navigate(["home/calendar"]);
    }
    //setting calendar for event
    selectCalendar(id) {
        this.selectedCal = id;
        console.log(this.selectedCal);
    }
    add(event) {
        const input = event.input;
        // const value = event.value;
        this.email.setValue(event.value);
        console.log(this.email.hasError("email"));
        if (!this.email.hasError("email")) {
            // if (!this.email.hasError("email")) {
            if (this.email.value.trim()) {
                this.isEmailValid = true;
                this.emails.push(this.email.value.trim());
                console.log(this.emails);
            }
            else if (this.email.value === "" && this.emails.length < 0) {
                this.chipList.errorState = true;
                this.isEmailValid = false;
                this.errorMessage = "please enter a valid email address";
            }
            else {
                this.chipList.errorState = false;
            }
        }
        else {
            this.chipList.errorState = true;
            this.isEmailValid = false;
            this.errorMessage = "please enter a valid email address";
        }
        // Reset the input value
        if (input) {
            input.value = "";
        }
    }
    //removing email from list
    remove(email) {
        const index = this.emails.indexOf(email);
        if (index >= 0) {
            this.emails.splice(index, 1);
        }
    }
    groupSelect() {
        const dialogRef = this.dialog.open(_shared_group_selection__WEBPACK_IMPORTED_MODULE_9__["GroupSelection"], {
            width: "500px"
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log(result);
            for (let group of result) {
                console.log(group);
                for (let email of group.emails) {
                    console.log(email);
                    if (!this.emails.includes(email.email)) {
                        this.emails.push(email.email);
                    }
                }
            }
        });
    }
};
CreateEventComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
    { type: _shared_data_storage_service__WEBPACK_IMPORTED_MODULE_6__["DataStorageService"] },
    { type: _calendar_list_calendar_service__WEBPACK_IMPORTED_MODULE_4__["CalendarService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("chipList", { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], CreateEventComponent.prototype, "chipList", void 0);
CreateEventComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-create-event",
        template: __webpack_require__(/*! raw-loader!./create-event.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/calendar/create-event/create-event.component.html"),
        styles: [__webpack_require__(/*! ./create-event.component.css */ "./src/app/home/calendar/create-event/create-event.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
        _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"],
        _shared_data_storage_service__WEBPACK_IMPORTED_MODULE_6__["DataStorageService"],
        _calendar_list_calendar_service__WEBPACK_IMPORTED_MODULE_4__["CalendarService"],
        _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]])
], CreateEventComponent);



/***/ }),

/***/ "./src/app/home/calendar/create-event/edit-event/edit-event.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/home/calendar/create-event/edit-event/edit-event.component.ts ***!
  \*******************************************************************************/
/*! exports provided: EditEventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditEventComponent", function() { return EditEventComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _calendar_list_calendar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../calendar-list/calendar.service */ "./src/app/home/calendar/calendar-list/calendar.service.ts");
/* harmony import */ var src_app_home_shared_data_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/home/shared/data-storage.service */ "./src/app/home/shared/data-storage.service.ts");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm2015/keycodes.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_home_shared_group_selection__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/home/shared/group-selection */ "./src/app/home/shared/group-selection.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");











let EditEventComponent = class EditEventComponent {
    constructor(route, router, authService, dataStorage, calService, snackbar, dialog) {
        this.route = route;
        this.router = router;
        this.authService = authService;
        this.dataStorage = dataStorage;
        this.calService = calService;
        this.snackbar = snackbar;
        this.dialog = dialog;
        this.primaryColor = '';
        this.allDay = false;
        this.defaultTime = new Date();
        this.defaultTime2 = new Date();
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].email]);
        this.emails = [];
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__["COMMA"]];
        this.userList = [];
        //theme for time picker
        this.timeTheme = {
            container: {
                bodyBackgroundColor: 'darkgrey',
                buttonColor: 'white'
            },
            dial: {
                dialBackgroundColor: 'rgb(185, 163, 90)'
            },
            clockFace: {
                clockHandColor: '#800029',
            }
        };
        this.dataStorage.getEmails();
        this.dataStorage.emails.subscribe((result) => {
            if (result.length > 0) {
                result.forEach(o => this.userList.push(o.email));
            }
        });
        this.filteredUserList = this.email.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])((user) => user ? this.filter(user) : this.userList.slice()));
    }
    filter(value) {
        const filterValue = value.toLocaleLowerCase();
        return this.userList.filter(user => user.toLocaleLowerCase().includes(filterValue));
    }
    selected(event) {
        if (!this.emails.includes(event.option.value)) {
            this.emails.push(event.option.value);
            this.userInput.nativeElement.value = "";
            this.email.setValue(null);
        }
    }
    ngOnInit() {
        this.role = this.authService.user;
        this.dataStorage.fetchCalendars();
        this.dataStorage.isLoading.subscribe(loading => {
            if (!loading) {
                this.calendars = this.calService.getCalendars();
            }
        });
        this.route.params.subscribe((params) => {
            this.id = +params["id"];
        });
        this.event = this.calService.getEvent(this.id);
        console.log(this.event);
        this.newEnd = this.event.end;
        if (this.event.allDay) {
            this.newEnd.setDate(this.newEnd.getDate() - 1);
        }
        this.primaryColor = this.event.backgroundColor;
        this.username = this.authService.name;
        this.calendars = this.calService.getCalendars().filter(cal => cal.createdBy.email === this.username);
        this.selectedCal = this.calService.getEventCal(this.event);
        console.log(this.selectedCal);
        this.allDay = (this.event.allDay);
        console.log(this.allDay);
        this.eventForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](this.event.title, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]),
            location: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](this.event.location, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](this.event.description, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]),
            email: this.email,
            startDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](this.event.start, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]),
            endDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](this.newEnd, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]),
            startTime: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](this.event.start.toLocaleTimeString()),
            endTime: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](this.event.end.toLocaleTimeString()),
            primary: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](this.event.backgroundColor),
            allDay: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](this.event.allDay),
            calendar: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]),
        });
        for (let user of this.event.recipients) {
            this.emails.push(user.email);
        }
    }
    getErrorMessage() {
        return this.email.hasError("email")
            ? "Not a valid email"
            : "";
    }
    allday() {
        this.allDay = !this.allDay;
        console.log(this.allDay);
    }
    onSubmit() {
        const eventFormValues = this.eventForm.value;
        if (eventFormValues.email) {
            this.emails = eventFormValues.email.split(",");
        }
        if (!this.allDay) {
            this.startDate = new Date(eventFormValues.startDate
                .toDateString()
                .concat(" ")
                .concat(eventFormValues.startTime));
            this.endDate = new Date(eventFormValues.endDate
                .toDateString()
                .concat(" ")
                .concat(eventFormValues.endTime));
        }
        else {
            this.startDate = new Date(eventFormValues.startDate.toLocaleDateString());
            this.endDate = new Date(eventFormValues.endDate.toLocaleDateString());
        }
        console.log(this.startDate, this.endDate);
        //checking if start comes before end
        if ((this.startDate <= this.endDate && this.allDay) || (this.startDate < this.endDate && !this.allDay)) {
            //creating event object based on allDay
            if (!this.allDay) {
                this.obj = {
                    calendarId: this.selectedCal,
                    title: eventFormValues.title,
                    description: eventFormValues.description,
                    start: this.startDate.toLocaleString(),
                    end: this.endDate.toLocaleString(),
                    recipients: this.emails,
                    location: eventFormValues.location,
                    backgroundColor: this.primaryColor,
                    borderColor: this.primaryColor,
                    allDay: this.allDay
                };
            }
            else {
                eventFormValues.endDate.setDate(eventFormValues.endDate.getDate() + 1);
                this.obj = {
                    calendarId: this.selectedCal,
                    title: eventFormValues.title,
                    description: eventFormValues.description,
                    start: eventFormValues.startDate.toLocaleDateString(),
                    end: eventFormValues.endDate.toLocaleDateString(),
                    recipients: this.emails,
                    location: eventFormValues.location,
                    backgroundColor: this.primaryColor,
                    borderColor: this.primaryColor,
                    allDay: this.allDay
                };
            }
            console.log(this.obj);
            this.dataStorage.editEvent(this.event.id, this.obj).subscribe(result => {
                if (result) {
                    this.dataStorage.fetchCalendars();
                    this.snackbar.open(result.message, 'close', { duration: 4000, panelClass: ["standard"] });
                    this.router.navigate(["home/calendar"]);
                }
                else {
                    this.snackbar.open('Something went wrong.', 'close', { duration: 4000, panelClass: ["standard"] });
                }
            });
            this.router.navigate(["home/calendar"]);
        }
        else {
            //warning for start not being before end
            this.snackbar.open('Start must come before end.', 'close', { duration: 4000, panelClass: ["standard"] });
        }
    }
    setPrimary(color) {
        this.primaryColor = color;
    }
    onNoClick() {
        this.router.navigate(["home/calendar"]);
    }
    selectCalendar(id) {
        this.selectedCal = id;
    }
    add(event) {
        const input = event.input;
        // const value = event.value;
        this.email.setValue(event.value);
        console.log(this.email.hasError("email"));
        if (!this.email.hasError("email")) {
            // if (!this.email.hasError("email")) {
            if (this.email.value.trim()) {
                this.isEmailValid = true;
                this.emails.push(this.email.value.trim());
                this.emails.sort((a, b) => a.toLowerCase() < b.toLowerCase()
                    ? -1
                    : a.toLowerCase() > b.toLowerCase()
                        ? 1
                        : 0);
                console.log(this.emails);
            }
            else if (this.email.value === "" && this.emails.length < 0) {
                this.chipList.errorState = true;
                this.isEmailValid = false;
                this.errorMessage = "please enter a valid email address";
            }
            else {
                this.chipList.errorState = false;
            }
        }
        else {
            this.chipList.errorState = true;
            this.isEmailValid = false;
            this.errorMessage = "please enter a valid email address";
        }
        // Reset the input value
        if (input) {
            input.value = "";
        }
    }
    remove(email) {
        const index = this.emails.indexOf(email);
        if (index >= 0) {
            this.emails.splice(index, 1);
        }
    }
    groupSelect() {
        const dialogRef = this.dialog.open(src_app_home_shared_group_selection__WEBPACK_IMPORTED_MODULE_9__["GroupSelection"], {
            width: "500px"
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log(result);
            for (let group of result) {
                console.log(group);
                for (let email of group.emails) {
                    console.log(email);
                    if (!this.emails.includes(email.email)) {
                        this.emails.push(email.email);
                    }
                }
            }
        });
    }
};
EditEventComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: src_app_home_shared_data_storage_service__WEBPACK_IMPORTED_MODULE_4__["DataStorageService"] },
    { type: _calendar_list_calendar_service__WEBPACK_IMPORTED_MODULE_3__["CalendarService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialog"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("userInput", { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], EditEventComponent.prototype, "userInput", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("chipList", { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], EditEventComponent.prototype, "chipList", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("auto", { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatAutocomplete"])
], EditEventComponent.prototype, "matAutocomplete", void 0);
EditEventComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-event',
        template: __webpack_require__(/*! raw-loader!./edit-event.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/calendar/create-event/edit-event/edit-event.component.html"),
        styles: [__webpack_require__(/*! ../create-event.component.css */ "./src/app/home/calendar/create-event/create-event.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
        src_app_home_shared_data_storage_service__WEBPACK_IMPORTED_MODULE_4__["DataStorageService"],
        _calendar_list_calendar_service__WEBPACK_IMPORTED_MODULE_3__["CalendarService"],
        _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"],
        _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialog"]])
], EditEventComponent);



/***/ }),

/***/ "./src/app/home/calendar/event-detail/event-detail.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/home/calendar/event-detail/event-detail.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".close-button{\r\n    color: darkgrey;\r\n    cursor:pointer;\r\n}\r\n.options-button{\r\n    margin-bottom: 10px;\r\n    color: #800029;\r\n}\r\n.option:hover{\r\n    background-color: #800029;\r\n    color: white;\r\n}\r\n.content{\r\n    width: 60%;\r\n    height: 50%;\r\n    overflow-y:auto;\r\n    margin-left:15px;\r\n}\r\n.spacer{\r\n    flex: 1 1 auto;\r\n}\r\n.top-detail-row, .bottom-row{\r\n    background-color: white;\r\n    height: 10%;\r\n}\r\n.search-bar{\r\n    font-size: 1em;\r\n    color: rgb(122, 121, 121);\r\n}\r\n.example-full-width{\r\n    font-size: 0.75em;\r\n    color: rgb(122, 121, 121);\r\n}\r\nmat-toolbar{\r\n    background-color: white;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9jYWxlbmRhci9ldmVudC1kZXRhaWwvZXZlbnQtZGV0YWlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztBQUNsQjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLGNBQWM7QUFDbEI7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCO0FBRUE7SUFDSSxVQUFVO0lBQ1YsV0FBVztJQUNYLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QixXQUFXO0FBQ2Y7QUFFQTtJQUNJLGNBQWM7SUFDZCx5QkFBeUI7QUFDN0I7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQix5QkFBeUI7QUFDN0I7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvY2FsZW5kYXIvZXZlbnQtZGV0YWlsL2V2ZW50LWRldGFpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNsb3NlLWJ1dHRvbntcclxuICAgIGNvbG9yOiBkYXJrZ3JleTtcclxuICAgIGN1cnNvcjpwb2ludGVyO1xyXG59XHJcbi5vcHRpb25zLWJ1dHRvbntcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBjb2xvcjogIzgwMDAyOTtcclxufVxyXG5cclxuLm9wdGlvbjpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4MDAwMjk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5jb250ZW50e1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICAgIGhlaWdodDogNTAlO1xyXG4gICAgb3ZlcmZsb3cteTphdXRvO1xyXG4gICAgbWFyZ2luLWxlZnQ6MTVweDtcclxufVxyXG5cclxuLnNwYWNlcntcclxuICAgIGZsZXg6IDEgMSBhdXRvO1xyXG59XHJcbi50b3AtZGV0YWlsLXJvdywgLmJvdHRvbS1yb3d7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGhlaWdodDogMTAlO1xyXG59XHJcblxyXG4uc2VhcmNoLWJhcntcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgY29sb3I6IHJnYigxMjIsIDEyMSwgMTIxKTtcclxufVxyXG5cclxuLmV4YW1wbGUtZnVsbC13aWR0aHtcclxuICAgIGZvbnQtc2l6ZTogMC43NWVtO1xyXG4gICAgY29sb3I6IHJnYigxMjIsIDEyMSwgMTIxKTtcclxufVxyXG5cclxubWF0LXRvb2xiYXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/home/calendar/event-detail/event-detail.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/home/calendar/event-detail/event-detail.component.ts ***!
  \**********************************************************************/
/*! exports provided: EventDetailComponent, EventDeleteConfirm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventDetailComponent", function() { return EventDetailComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventDeleteConfirm", function() { return EventDeleteConfirm; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _calendar_list_calendar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../calendar-list/calendar.service */ "./src/app/home/calendar/calendar-list/calendar.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _events_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../events.model */ "./src/app/home/calendar/events.model.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _shared_data_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/data-storage.service */ "./src/app/home/shared/data-storage.service.ts");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _share_event__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./share-event */ "./src/app/home/calendar/event-detail/share-event.ts");
/* harmony import */ var _group_message_group_message_group_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../group/message-group/message-group.component */ "./src/app/home/group/message-group/message-group.component.ts");










let EventDetailComponent = class EventDetailComponent {
    constructor(calService, router, ref, authService, dialog, snackbar, dataStorage, data) {
        this.calService = calService;
        this.router = router;
        this.ref = ref;
        this.authService = authService;
        this.dialog = dialog;
        this.snackbar = snackbar;
        this.dataStorage = dataStorage;
        this.data = data;
    }
    ngOnInit() {
        this.viewAttendees = false;
        this.viewConfirmed = false;
        this.selectedRecipients = [];
        this.invitees = [];
        this.guestEmails = [];
        this.pending = [];
        this.event = this.data;
        this.username = this.authService.name;
        if (this.event.allDay && this.event.end) {
            this.newEnd = this.event.end;
            this.newEnd.setDate(this.event.end.getDate() - 1);
        }
        if (this.event.extendedProps.timeSlotId) {
            this.isAppt = true;
        }
        else {
            this.isAppt = false;
        }
        this.guests = this.event.extendedProps.confirmedBy;
        for (let guest of this.guests) {
            this.guestEmails.push(guest.email);
        }
        for (let user of this.event.extendedProps.recipients) {
            if (!this.guestEmails.includes(user.email)) {
                this.pending.push(user);
            }
            this.invitees.push(user.email);
        }
        console.log(this.guests);
        console.log(this.event);
    }
    close() {
        this.ref.close();
    }
    onNoClick() {
        this.ref.close();
    }
    onSelectChange(options) {
        console.log(options.map(o => o.value));
        this.selectedRecipients = options.map(o => o.value);
        // console.log(this.selectedPendingRecipients);
    }
    viewGuests() {
        this.viewAttendees = !this.viewAttendees;
        this.switchToConfirmed();
    }
    switchToConfirmed() {
        this.viewConfirmed = true;
        this.viewAll = false;
        this.viewPending = false;
    }
    switchToAll() {
        this.viewConfirmed = false;
        this.viewAll = true;
        this.viewPending = false;
    }
    switchToPending() {
        this.viewConfirmed = false;
        this.viewAll = false;
        this.viewPending = true;
    }
    editEvent() {
        this.ref.close();
        this.router.navigate(["home/edit-event", this.event.id]);
    }
    deleteEvent() {
        const dialogRef = this.dialog.open(EventDeleteConfirm, {
            width: "300px"
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result === 'confirmed') {
                this.dataStorage.deleteEvent(this.event.id).subscribe(result => {
                    this.snackbar.open(result.message, 'close', { duration: 4000, panelClass: ["delete"] });
                    this.ref.close();
                    this.dataStorage.fetchCalendars();
                });
            }
        });
    }
    shareEvent() {
        const dialogRef = this.dialog.open(_share_event__WEBPACK_IMPORTED_MODULE_8__["ShareEvent"], {
            width: "400px",
            height: "350px"
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result !== 'cancel') {
                const obj = {
                    eventId: +this.event.id,
                    recipients: result
                };
                this.dataStorage.shareEvent(obj).subscribe(result => {
                    if (result) {
                        this.snackbar.open(result.message, 'close', { duration: 4000, panelClass: ["standard"] });
                    }
                    else {
                        this.snackbar.open('Something went wrong.', 'close', { duration: 4000, panelClass: ["standard"] });
                    }
                });
                this.dataStorage.fetchCalendars();
            }
        });
    }
    confirmAttendance() {
        this.dataStorage.userConfirmEvent(this.event.id).subscribe(result => {
            if (result) {
                this.snackbar.open(result.message, 'close', { duration: 4000, panelClass: ["standard"] });
            }
            else {
                this.snackbar.open('Something went wrong.', 'close', { duration: 4000, panelClass: ["standard"] });
            }
        });
    }
    messageSelectedRecipients() {
        console.log(this.selectedRecipients);
        const dialogRef = this.dialog.open(_group_message_group_message_group_component__WEBPACK_IMPORTED_MODULE_9__["MessageGroupComponent"], {
            width: "400px",
            data: {}
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log(result);
            result.recipients = this.selectedRecipients;
            console.log(result);
            if (result) {
                this.dataStorage.emailSelectedMembers(result).subscribe(result => {
                    console.log(result);
                    if (result.result) {
                        this.snackbar.open("An email has been successfully to selected members!", "close", {
                            duration: 5000,
                            panelClass: ["standard"]
                        });
                    }
                    else {
                        this.snackbar.open("Something went wrong, please contact admin!", "close", {
                            duration: 5000,
                            panelClass: ["delete"]
                        });
                    }
                });
            }
        });
    }
};
EventDetailComponent.ctorParameters = () => [
    { type: _calendar_list_calendar_service__WEBPACK_IMPORTED_MODULE_2__["CalendarService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"] },
    { type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] },
    { type: _shared_data_storage_service__WEBPACK_IMPORTED_MODULE_6__["DataStorageService"] },
    { type: _events_model__WEBPACK_IMPORTED_MODULE_4__["CalEvent"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"],] }] }
];
EventDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-event-detail',
        template: __webpack_require__(/*! raw-loader!./event-detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/calendar/event-detail/event-detail.component.html"),
        styles: [__webpack_require__(/*! ./event-detail.component.css */ "./src/app/home/calendar/event-detail/event-detail.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](7, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_calendar_list_calendar_service__WEBPACK_IMPORTED_MODULE_2__["CalendarService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"],
        src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
        _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"],
        _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"],
        _shared_data_storage_service__WEBPACK_IMPORTED_MODULE_6__["DataStorageService"],
        _events_model__WEBPACK_IMPORTED_MODULE_4__["CalEvent"]])
], EventDetailComponent);

let EventDeleteConfirm = class EventDeleteConfirm {
    constructor(ref, authService) {
        this.ref = ref;
        this.authService = authService;
    }
    delete() {
        this.ref.close('confirmed');
    }
    close() {
        this.ref.close('cancel');
    }
};
EventDeleteConfirm.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"] },
    { type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] }
];
EventDeleteConfirm = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'confirm-event-delete',
        template: __webpack_require__(/*! raw-loader!./event-delete-confirm.html */ "./node_modules/raw-loader/index.js!./src/app/home/calendar/event-detail/event-delete-confirm.html"),
        styles: [__webpack_require__(/*! ./event-detail.component.css */ "./src/app/home/calendar/event-detail/event-detail.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"],
        src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]])
], EventDeleteConfirm);



/***/ }),

/***/ "./src/app/home/calendar/event-detail/share-event.ts":
/*!***********************************************************!*\
  !*** ./src/app/home/calendar/event-detail/share-event.ts ***!
  \***********************************************************/
/*! exports provided: ShareEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareEvent", function() { return ShareEvent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _shared_group_selection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/group-selection */ "./src/app/home/shared/group-selection.ts");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm2015/keycodes.js");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/auth/auth.service */ "./src/app/auth/auth.service.ts");







let ShareEvent = class ShareEvent {
    constructor(ref, dialog, authService) {
        this.ref = ref;
        this.dialog = dialog;
        this.authService = authService;
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["COMMA"]];
    }
    ngOnInit() {
        this.emails = [];
        this.shareForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            recipients: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
        });
        this.role = this.authService.user;
    }
    groupSelect() {
        const dialogRef = this.dialog.open(_shared_group_selection__WEBPACK_IMPORTED_MODULE_4__["GroupSelection"], {
            width: "500px"
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log(result);
            for (let group of result) {
                console.log(group);
                for (let email of group.emails) {
                    console.log(email);
                    if (!this.emails.includes(email.email)) {
                        this.emails.push(email.email);
                    }
                }
            }
        });
    }
    add(event) {
        const input = event.input;
        const value = event.value;
        // Add emails
        if (value.trim()) {
            this.emails.push(value.trim());
        }
        // Reset the input value
        if (input) {
            input.value = "";
        }
    }
    remove(email) {
        const index = this.emails.indexOf(email);
        if (index >= 0) {
            this.emails.splice(index, 1);
        }
    }
    close() {
        this.ref.close('cancel');
    }
    onSubmit() {
        this.ref.close(this.emails);
    }
};
ShareEvent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
    { type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] }
];
ShareEvent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'share-event',
        template: __webpack_require__(/*! raw-loader!./share-event.html */ "./node_modules/raw-loader/index.js!./src/app/home/calendar/event-detail/share-event.html"),
        styles: [__webpack_require__(/*! ./event-detail.component.css */ "./src/app/home/calendar/event-detail/event-detail.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"],
        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
        src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]])
], ShareEvent);



/***/ }),

/***/ "./src/app/home/calendar/events.model.ts":
/*!***********************************************!*\
  !*** ./src/app/home/calendar/events.model.ts ***!
  \***********************************************/
/*! exports provided: CalEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalEvent", function() { return CalEvent; });
class CalEvent {
    constructor(id, title, description, location, backgroundColor, borderColor, start, end, allDay, timeSlotId, recipients) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.location = location;
        this.backgroundColor = backgroundColor;
        this.borderColor = borderColor;
        this.start = start;
        this.end = end;
        this.allDay = allDay;
        this.timeSlotId = timeSlotId;
        this.recipients = recipients;
    }
}
CalEvent.ctorParameters = () => [
    { type: Number },
    { type: String },
    { type: String },
    { type: String },
    { type: String },
    { type: String },
    { type: Date },
    { type: Date },
    { type: Boolean },
    { type: Number },
    { type: Array }
];


/***/ }),

/***/ "./src/app/home/calendar/events.service.ts":
/*!*************************************************!*\
  !*** ./src/app/home/calendar/events.service.ts ***!
  \*************************************************/
/*! exports provided: EventService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventService", function() { return EventService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _calendar_list_calendar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calendar-list/calendar.service */ "./src/app/home/calendar/calendar-list/calendar.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _shared_data_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/data-storage.service */ "./src/app/home/shared/data-storage.service.ts");





let EventService = class EventService {
    constructor(calendarService, dataService) {
        this.calendarService = calendarService;
        this.dataService = dataService;
        this.eventsChanged = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.calendars = this.calendarService.getCalendars();
        this.tempTimes = {
            startTime: "1:00 PM",
            endTime: "2:00 PM",
            interv: 60
        };
        this.tempDate = {
            date: "Tue Oct 01 2019 16:16:23 GMT-0500 (Central Daylight Time)",
            apptimes: [this.tempTimes]
        };
        this.events = [
        // new CalEvent(
        //     0,
        //     'test',
        //     'test',
        //     'test',
        //     ['andrew.moore9497@gmail.com'],
        //     [this.tempDate]
        // )
        ];
        this.tempEvents = this.events;
    }
    // returns events
    getEvents() {
        // for(let event of this.events){
        //     if(event.calendar.shown){
        //         ev.push(event);
        //     }
        // }
        return this.events.slice();
    }
    //add events to list
    addEvent(e) {
        this.events.push(e);
        this.updateEvents();
    }
    //change events list
    setEvents(eventList) {
        this.events = eventList;
    }
    //updates list for hiding calendars
    updateEvents() {
        const newEvents = [];
        // for(let event of this.events){
        //     if(event.calendar.shown){
        //         newEvents.push(event);
        //     }
        // }
        this.tempEvents = newEvents;
        return this.eventsChanged.next(this.tempEvents.slice());
    }
};
EventService.ctorParameters = () => [
    { type: _calendar_list_calendar_service__WEBPACK_IMPORTED_MODULE_2__["CalendarService"] },
    { type: _shared_data_storage_service__WEBPACK_IMPORTED_MODULE_4__["DataStorageService"] }
];
EventService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_calendar_list_calendar_service__WEBPACK_IMPORTED_MODULE_2__["CalendarService"],
        _shared_data_storage_service__WEBPACK_IMPORTED_MODULE_4__["DataStorageService"]])
], EventService);



/***/ }),

/***/ "./src/app/home/calendar/share-calendar/share-calendar.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/home/calendar/share-calendar/share-calendar.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".spacer{\r\n    flex: 1 1 auto;\r\n}\r\nmat-toolbar{\r\n    height: 2em;\r\n    background-color: white;\r\n}\r\ndiv{\r\n    margin-bottom: 10px;\r\n}\r\n.submit{\r\n    background-color: rgb(25, 204, 25);\r\n    color: white;\r\n}\r\n.close-button{\r\n    color: darkgrey;\r\n    cursor:pointer;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9jYWxlbmRhci9zaGFyZS1jYWxlbmRhci9zaGFyZS1jYWxlbmRhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztBQUNsQjtBQUNBO0lBQ0ksV0FBVztJQUNYLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxrQ0FBa0M7SUFDbEMsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2NhbGVuZGFyL3NoYXJlLWNhbGVuZGFyL3NoYXJlLWNhbGVuZGFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3BhY2Vye1xyXG4gICAgZmxleDogMSAxIGF1dG87XHJcbn1cclxubWF0LXRvb2xiYXJ7XHJcbiAgICBoZWlnaHQ6IDJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcbmRpdntcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuLnN1Ym1pdHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNSwgMjA0LCAyNSk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLmNsb3NlLWJ1dHRvbntcclxuICAgIGNvbG9yOiBkYXJrZ3JleTtcclxuICAgIGN1cnNvcjpwb2ludGVyO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/home/calendar/share-calendar/share-calendar.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/home/calendar/share-calendar/share-calendar.component.ts ***!
  \**************************************************************************/
/*! exports provided: ShareCalendarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareCalendarComponent", function() { return ShareCalendarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shared_data_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/data-storage.service */ "./src/app/home/shared/data-storage.service.ts");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm2015/keycodes.js");
/* harmony import */ var _shared_group_selection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/group-selection */ "./src/app/home/shared/group-selection.ts");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");









let ShareCalendarComponent = class ShareCalendarComponent {
    constructor(ref, dataStorage, dialog, snackbar, authService, data) {
        this.ref = ref;
        this.dataStorage = dataStorage;
        this.dialog = dialog;
        this.snackbar = snackbar;
        this.authService = authService;
        this.data = data;
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]);
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["COMMA"]];
        this.userList = [];
        this.dataStorage.getEmails();
        this.dataStorage.emails.subscribe((result) => {
            if (result.length > 0) {
                result.forEach(o => this.userList.push(o.email));
            }
        });
        this.filteredUserList = this.email.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])((user) => user ? this.filter(user) : this.userList.slice()));
    }
    ngOnInit() {
        this.role = this.authService.user;
        this.emails = [];
        console.log(this.data);
        this.shareForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email])
        });
    }
    filter(value) {
        const filterValue = value.toLocaleLowerCase();
        return this.userList.filter(user => user.toLocaleLowerCase().includes(filterValue));
    }
    selected(event) {
        if (!this.emails.includes(event.option.value)) {
            this.emails.push(event.option.value);
            this.userInput.nativeElement.value = "";
            this.email.setValue(null);
        }
    }
    onSubmit() {
        const obj = {
            calendarId: this.data.id,
            recipients: this.emails
        };
        this.dataStorage.shareCalenar(obj).subscribe(result => {
            console.log(result);
            this.snackbar.open(result.message, '', { duration: 5000 });
        });
        this.dataStorage.isLoading.subscribe(result => {
            console.log(obj);
            if (result) {
                console.log('done');
            }
        });
        this.ref.close();
    }
    close() {
        this.ref.close();
    }
    add(event) {
        const input = event.input;
        // const value = event.value;
        this.email.setValue(event.value);
        console.log(this.email.hasError("email"));
        if (!this.email.hasError("email")) {
            // if (!this.email.hasError("email")) {
            if (this.email.value.trim()) {
                this.isEmailValid = true;
                this.emails.push(this.email.value.trim());
                this.emails.sort((a, b) => a.toLowerCase() < b.toLowerCase()
                    ? -1
                    : a.toLowerCase() > b.toLowerCase()
                        ? 1
                        : 0);
                console.log(this.emails);
            }
            else if (this.email.value === "" && this.emails.length < 0) {
                this.chipList.errorState = true;
                this.isEmailValid = false;
                this.errorMessage = "please enter a valid email address";
            }
            else {
                this.chipList.errorState = false;
            }
        }
        else {
            this.chipList.errorState = true;
            this.isEmailValid = false;
            this.errorMessage = "please enter a valid email address";
        }
        // Reset the input value
        if (input) {
            input.value = "";
        }
    }
    remove(email) {
        const index = this.emails.indexOf(email);
        if (index >= 0) {
            this.emails.splice(index, 1);
        }
    }
    groupSelect() {
        const dialogRef = this.dialog.open(_shared_group_selection__WEBPACK_IMPORTED_MODULE_6__["GroupSelection"], {
            width: "500px"
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log(result);
            for (let group of result) {
                console.log(group);
                for (let email of group.emails) {
                    console.log(email);
                    if (!this.emails.includes(email.email)) {
                        this.emails.push(email.email);
                    }
                }
            }
        });
    }
};
ShareCalendarComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: _shared_data_storage_service__WEBPACK_IMPORTED_MODULE_4__["DataStorageService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] },
    { type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("chipList", { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ShareCalendarComponent.prototype, "chipList", void 0);
ShareCalendarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-share-calendar',
        template: __webpack_require__(/*! raw-loader!./share-calendar.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/calendar/share-calendar/share-calendar.component.html"),
        styles: [__webpack_require__(/*! ./share-calendar.component.css */ "./src/app/home/calendar/share-calendar/share-calendar.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
        _shared_data_storage_service__WEBPACK_IMPORTED_MODULE_4__["DataStorageService"],
        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"],
        src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"], Object])
], ShareCalendarComponent);



/***/ }),

/***/ "./src/app/home/dashboard/dashboard.component.css":
/*!********************************************************!*\
  !*** ./src/app/home/dashboard/dashboard.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\r\n  margin-left: 15%;\r\n  margin-right: 15%;\r\n  margin-top: 75px;\r\n  margin-bottom: 40px;\r\n  height: 65%;\r\n}\r\n\r\n.broadcast-wrap{\r\n    height:70%;\r\n    margin-left:10%;\r\n    margin-right:10%;\r\n}\r\n\r\n.carousel-slide {\r\n  height: 100%;\r\n  width: 80%;\r\n}\r\n\r\n.space {\r\n  height: 25px;\r\n}\r\n\r\n#calendar {\r\n  margin-bottom: 25px;\r\n}\r\n\r\n.carousel {\r\n  color: #800029;\r\n  margin: 10px;\r\n  width:75%;\r\n  margin-left:auto;\r\n  margin-right:auto;\r\n}\r\n\r\n.heading {\r\n  background: #800029;\r\n  color: white;\r\n  margin: 10px;\r\n  border: rgb(185, 163, 90) solid 1px;\r\n}\r\n\r\n.event {\r\n  background: rgb(185, 163, 90);\r\n  color: white;\r\n  margin: 10px 90px;\r\n  padding: 5px;\r\n  max-width: 100%;\r\n  border: #800029 solid 1px;\r\n}\r\n\r\n.mat-list .mat-list-item:hover {\r\n  color: white;\r\n  background: #800029;\r\n  border: #BD955A solid 1px;\r\n\r\n\r\n}\r\n\r\n.mat-list-base .mat-list-item {\r\n  margin: 5px 10px;\r\n  border: #800029 solid 1px;\r\n  max-width: 100%;\r\n\r\n}\r\n\r\n@media screen and (min-width: 1200px) {\r\n\r\n  .example-card-width {\r\n    max-width: 98%\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 992px) and (max-width: 1199px) {\r\n\r\n\r\n  .example-card-width {\r\n    max-width: 98%\r\n  }\r\n}\r\n\r\n/* On screens that are 992px wide or less */\r\n\r\n@media screen and (min-width: 600px) and (max-width: 991px) {\r\n\r\n  .example-card-width {\r\n    max-width: 95%\r\n  }\r\n}\r\n\r\n/* On screens that are 600px wide or less */\r\n\r\n@media screen and (max-width: 600px) {\r\n\r\n\r\n  .example-card-width {\r\n    max-width: 90%\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsV0FBVztBQUNiOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osVUFBVTtBQUNaOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsY0FBYztFQUNkLFlBQVk7RUFDWixTQUFTO0VBQ1QsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osWUFBWTtFQUNaLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixlQUFlO0VBQ2YseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQix5QkFBeUI7OztBQUczQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsZUFBZTs7QUFFakI7O0FBSUE7O0VBRUU7SUFDRTtFQUNGO0FBQ0Y7O0FBRUE7OztFQUdFO0lBQ0U7RUFDRjtBQUNGOztBQUdBLDJDQUEyQzs7QUFDM0M7O0VBRUU7SUFDRTtFQUNGO0FBQ0Y7O0FBRUEsMkNBQTJDOztBQUMzQzs7O0VBR0U7SUFDRTtFQUNGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9ob21lL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyIHtcclxuICBtYXJnaW4tbGVmdDogMTUlO1xyXG4gIG1hcmdpbi1yaWdodDogMTUlO1xyXG4gIG1hcmdpbi10b3A6IDc1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICBoZWlnaHQ6IDY1JTtcclxufVxyXG5cclxuLmJyb2FkY2FzdC13cmFwe1xyXG4gICAgaGVpZ2h0OjcwJTtcclxuICAgIG1hcmdpbi1sZWZ0OjEwJTtcclxuICAgIG1hcmdpbi1yaWdodDoxMCU7XHJcbn1cclxuXHJcbi5jYXJvdXNlbC1zbGlkZSB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiA4MCU7XHJcbn1cclxuXHJcbi5zcGFjZSB7XHJcbiAgaGVpZ2h0OiAyNXB4O1xyXG59XHJcblxyXG4jY2FsZW5kYXIge1xyXG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbn1cclxuXHJcbi5jYXJvdXNlbCB7XHJcbiAgY29sb3I6ICM4MDAwMjk7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIHdpZHRoOjc1JTtcclxuICBtYXJnaW4tbGVmdDphdXRvO1xyXG4gIG1hcmdpbi1yaWdodDphdXRvO1xyXG59XHJcblxyXG4uaGVhZGluZyB7XHJcbiAgYmFja2dyb3VuZDogIzgwMDAyOTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIGJvcmRlcjogcmdiKDE4NSwgMTYzLCA5MCkgc29saWQgMXB4O1xyXG59XHJcblxyXG4uZXZlbnQge1xyXG4gIGJhY2tncm91bmQ6IHJnYigxODUsIDE2MywgOTApO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW46IDEwcHggOTBweDtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlcjogIzgwMDAyOSBzb2xpZCAxcHg7XHJcbn1cclxuXHJcbi5tYXQtbGlzdCAubWF0LWxpc3QtaXRlbTpob3ZlciB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQ6ICM4MDAwMjk7XHJcbiAgYm9yZGVyOiAjQkQ5NTVBIHNvbGlkIDFweDtcclxuXHJcblxyXG59XHJcblxyXG4ubWF0LWxpc3QtYmFzZSAubWF0LWxpc3QtaXRlbSB7XHJcbiAgbWFyZ2luOiA1cHggMTBweDtcclxuICBib3JkZXI6ICM4MDAwMjkgc29saWQgMXB4O1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuXHJcbn1cclxuXHJcblxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSB7XHJcblxyXG4gIC5leGFtcGxlLWNhcmQtd2lkdGgge1xyXG4gICAgbWF4LXdpZHRoOiA5OCVcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7XHJcblxyXG5cclxuICAuZXhhbXBsZS1jYXJkLXdpZHRoIHtcclxuICAgIG1heC13aWR0aDogOTglXHJcbiAgfVxyXG59XHJcblxyXG5cclxuLyogT24gc2NyZWVucyB0aGF0IGFyZSA5OTJweCB3aWRlIG9yIGxlc3MgKi9cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xyXG5cclxuICAuZXhhbXBsZS1jYXJkLXdpZHRoIHtcclxuICAgIG1heC13aWR0aDogOTUlXHJcbiAgfVxyXG59XHJcblxyXG4vKiBPbiBzY3JlZW5zIHRoYXQgYXJlIDYwMHB4IHdpZGUgb3IgbGVzcyAqL1xyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG5cclxuXHJcbiAgLmV4YW1wbGUtY2FyZC13aWR0aCB7XHJcbiAgICBtYXgtd2lkdGg6IDkwJVxyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/home/dashboard/dashboard.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/home/dashboard/dashboard.component.ts ***!
  \*******************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _shared_data_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/data-storage.service */ "./src/app/home/shared/data-storage.service.ts");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _calendar_calendar_list_calendar_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../calendar/calendar-list/calendar.service */ "./src/app/home/calendar/calendar-list/calendar.service.ts");
/* harmony import */ var _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fullcalendar/timegrid */ "./node_modules/@fullcalendar/timegrid/main.esm.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");








let DashboardComponent = class DashboardComponent {
    // subscription: Subscription;
    constructor(http, dataStorage, authService, calService, dialog) {
        this.http = http;
        this.dataStorage = dataStorage;
        this.authService = authService;
        this.calService = calService;
        this.dialog = dialog;
        this.calendarPlugins = [_fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_6__["default"]];
    }
    ngOnInit() {
        this.events = [];
        this.dataStorage.fetchUpcomingEvents();
        this.name = this.authService.username;
        this.dataStorage.isLoading.subscribe(loading => {
            if (!loading) {
                this.events = this.dataStorage.upcomingEventsList;
                console.log(this.events);
            }
        });
        this.events.sort((a, b) => new Date(a.start) < new Date(b.start) ? -1 : new Date(a.start) > new Date(b.start) ? 1 : 0);
        // this.subscription = this.calService.eventsChanged.subscribe(
        //   (events: any[]) => {
        //     this.events = events;
        //   }
        // );
        this.userRole = this.authService.user;
    }
};
DashboardComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _shared_data_storage_service__WEBPACK_IMPORTED_MODULE_3__["DataStorageService"] },
    { type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _calendar_calendar_list_calendar_service__WEBPACK_IMPORTED_MODULE_5__["CalendarService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] }
];
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-dashboard",
        template: __webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/dashboard/dashboard.component.html"),
        styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/home/dashboard/dashboard.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
        _shared_data_storage_service__WEBPACK_IMPORTED_MODULE_3__["DataStorageService"],
        src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
        _calendar_calendar_list_calendar_service__WEBPACK_IMPORTED_MODULE_5__["CalendarService"],
        _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]])
], DashboardComponent);



/***/ }),

/***/ "./src/app/home/group/create-group/create-group.component.css":
/*!********************************************************************!*\
  !*** ./src/app/home/group/create-group/create-group.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin: 20px;\r\n  padding: 10px;\r\n  /* width: 60%; */\r\n  color: #800029;\r\n  border: #800029 solid 1px;\r\n  background-color: white;\r\n}\r\n\r\n/* .example-container>* {\r\n  width: 100%;\r\n} */\r\n\r\n.example-spacer {\r\n  flex: 1 1 auto;\r\n}\r\n\r\n.mat-toolbar {\r\n  font: inherit;\r\n  background-color: white;\r\n  color: #800029;\r\n\r\n}\r\n\r\n.mat-toolbar-row {\r\n  padding: 0;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ncm91cC9jcmVhdGUtZ3JvdXAvY3JlYXRlLWdyb3VwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsdUJBQXVCO0FBQ3pCOztBQUVBOztHQUVHOztBQUVIO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsY0FBYzs7QUFFaEI7O0FBRUE7RUFDRSxVQUFVO0FBQ1oiLCJmaWxlIjoic3JjL2FwcC9ob21lL2dyb3VwL2NyZWF0ZS1ncm91cC9jcmVhdGUtZ3JvdXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIG1hcmdpbjogMjBweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIC8qIHdpZHRoOiA2MCU7ICovXHJcbiAgY29sb3I6ICM4MDAwMjk7XHJcbiAgYm9yZGVyOiAjODAwMDI5IHNvbGlkIDFweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLyogLmV4YW1wbGUtY29udGFpbmVyPioge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59ICovXHJcblxyXG4uZXhhbXBsZS1zcGFjZXIge1xyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG59XHJcblxyXG4ubWF0LXRvb2xiYXIge1xyXG4gIGZvbnQ6IGluaGVyaXQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgY29sb3I6ICM4MDAwMjk7XHJcblxyXG59XHJcblxyXG4ubWF0LXRvb2xiYXItcm93IHtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/home/group/create-group/create-group.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/home/group/create-group/create-group.component.ts ***!
  \*******************************************************************/
/*! exports provided: CreateGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateGroupComponent", function() { return CreateGroupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm2015/keycodes.js");
/* harmony import */ var _group_data_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../group-data-storage.service */ "./src/app/home/group/group-data-storage.service.ts");
/* harmony import */ var _group_group_create_navigation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../group/group-create-navigation.service */ "./src/app/home/group/group/group-create-navigation.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _shared_data_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/data-storage.service */ "./src/app/home/shared/data-storage.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");










let CreateGroupComponent = class CreateGroupComponent {
    constructor(formBuilder, router, groupDataStorageService, groupTypeNavigation, route, _snackBar, dataStorage) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.groupDataStorageService = groupDataStorageService;
        this.groupTypeNavigation = groupTypeNavigation;
        this.route = route;
        this._snackBar = _snackBar;
        this.dataStorage = dataStorage;
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.selectedOption = "";
        this.userList = [];
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__["COMMA"]];
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]);
        this.groupMembersEmails = [];
        this.groupTypes = ["Course", "Custom"];
        this.semesterTerm = ["Fall", "Spring"];
        this.currentYear = new Date().getFullYear();
        this.semesterYear = [
            this.currentYear - 2,
            this.currentYear - 1,
            this.currentYear,
            this.currentYear + 1,
            this.currentYear + 2
        ];
        this.isCourseGroup = false;
        this.editMode = false;
        this.isEmailValid = false;
        this.customGroupEmails = [];
        this.courseGroupEmails = [];
        this.validFileExtensions = ["xlsx", "csv"];
        this.isInvalid = false;
        this.allMajors = [];
        this.courseDetails = [];
        this.dataStorage.getEmails();
        this.dataStorage.emails.subscribe((result) => {
            if (result && result.length > 0) {
                result.forEach(o => {
                    if (!this.userList.includes(o.email)) {
                        this.userList.push(o.email);
                    }
                });
            }
        });
        this.filteredUserList = this.email.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])((user) => user ? this.filter(user) : this.userList.slice()));
    }
    filter(value) {
        const filterValue = value.toLocaleLowerCase();
        return this.userList.filter(user => user.toLocaleLowerCase().includes(filterValue));
    }
    ngOnInit() {
        this.groupDataStorageService.getAllMajors();
        this.groupDataStorageService.isLoading.subscribe(loading => {
            if (!loading) {
                this.allMajors = this.groupDataStorageService.majors;
                // console.log(this.allMajors);
            }
        });
        this.groupForm = this.formBuilder.group({
            title: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            description: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            groupType: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: this.email,
            semesterTerm: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            semesterYear: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            majorControl: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            editEmail: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            uploadFile: [undefined, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
        this.groupTypeNavigation.groupType.subscribe(type => {
            this.groupType = type;
            if (this.groupType === "course") {
                this.isCourseGroup = true;
                this.groupForm.get("groupType").setValue("Course");
            }
            else {
                this.isCourseGroup = false;
                this.groupForm.get("groupType").setValue("Custom");
            }
        });
        this.route.params.subscribe((params) => {
            this.id = +params["id"];
            this.editMode = params["id"] != null;
            console.log(this.editMode);
            this.initForm();
        });
    }
    initForm() {
        if (this.editMode) {
            this.groupDataStorageService
                .displayGroupDetails(this.id)
                .subscribe(result => {
                console.log(result);
                this.groupToEdit = result.result;
                console.log(this.groupToEdit);
                if (this.groupToEdit.type === "Custom") {
                    this.selectedOption = "email";
                    this.isCourseGroup = false;
                    this.groupForm.get("groupType").setValue(this.groupToEdit.type);
                    const customGroupMembers = this.groupToEdit.members;
                    for (let member of customGroupMembers) {
                        this.groupMembersEmails.push(member.email);
                    }
                    this.groupForm = this.formBuilder.group({
                        groupType: [this.groupToEdit.type],
                        title: [this.groupToEdit.name],
                        description: [this.groupToEdit.description],
                        semesterTerm: [this.groupToEdit.semesterTerm],
                        semesterYear: [this.groupToEdit.semesterYear]
                    });
                }
                else {
                    this.selectedOption = "email";
                    this.isCourseGroup = true;
                    this.groupForm.get("groupType").setValue("Course");
                    console.log(this.groupToEdit.major.name);
                    const major = this.groupToEdit.major.name;
                    this.onMajorChanged(new _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSelectChange"](this.source, major));
                    const courseGroupMembers = this.groupToEdit.members;
                    for (let member of courseGroupMembers) {
                        this.groupMembersEmails.push(member.email);
                        // console.log(this.emails);
                    }
                    this.groupForm = this.formBuilder.group({
                        groupType: [this.groupToEdit.type],
                        title: [this.groupToEdit.name],
                        description: [this.groupToEdit.description],
                        semesterTerm: [this.groupToEdit.semesterTerm],
                        semesterYear: [this.groupToEdit.semesterYear],
                        majorControl: [this.groupToEdit.major.name]
                    });
                }
            });
        }
    }
    deleteEmail(index) {
        this.customGroupEmails.splice(index, 1);
    }
    selected(event) {
        if (!this.groupMembersEmails.includes(event.option.value)) {
            this.groupMembersEmails.push(event.option.value);
            this.userInput.nativeElement.value = "";
            this.email.setValue(null);
        }
    }
    add(event) {
        if (!this.matAutocomplete.isOpen) {
            const input = event.input;
            const value = event.value;
            // Add emails
            if (value.trim()) {
                // this.emails.push(value.trim());
            }
            // Reset the input value
            if (input) {
                input.value = "";
            }
            this.email.setValue(null);
        }
        // const input = event.input;
        // this.email.setValue(event.value);
        // console.log(this.email.hasError("email"));
        // if (!this.email.hasError("email")) {
        //   if (this.email.value.trim()) {
        //     this.isEmailValid = true;
        //     this.groupMembersEmails.push(this.email.value.trim());
        //     this.customGroupEmails.push(this.email.value.trim());
        //     console.log(this.groupMembersEmails);
        //   } else if (
        //     this.email.value === "" &&
        //     this.groupMembersEmails.length <= 0
        //   ) {
        //     this.chipList.errorState = true;
        //     this.isEmailValid = false;
        //     this.errorMessage = "please enter a valid email address";
        //   } else {
        //     this.chipList.errorState = false;
        //   }
        // } else {
        //   this.chipList.errorState = true;
        //   this.isEmailValid = false;
        //   this.errorMessage = "please enter a valid email address";
        // }
        // // Reset the input value
        // if (input) {
        //   input.value = "";
        // }
    }
    remove(email) {
        const index = this.groupMembersEmails.indexOf(email);
        if (index >= 0) {
            this.groupMembersEmails.splice(index, 1);
        }
    }
    cancel() {
        this.router.navigate(["/home/group/your-group"]);
    }
    onMajorChanged(event) {
        const majorSelected = event.value;
        const currentMajorObj = this.allMajors.find(obj => obj.name === majorSelected);
        const majorId = currentMajorObj.id;
        this.groupDataStorageService.getCourseDetails(majorId).subscribe(result => {
            if (result.status == 200) {
                this.courseDetails = result.result.courses;
            }
        });
    }
    onTitleChanged(event) {
        this.selectedTitle = event.value;
        this.selectedCourseGroupDetail = this.courseDetails.find(i => i.title === this.selectedTitle);
        this.groupForm
            .get("description")
            .setValue(this.selectedCourseGroupDetail.description);
    }
    upload(event) {
        this.selectedFiles = event.target.files;
        console.log(this.selectedFiles.length);
        this.isInvalid = false;
        if (!this.validateFile(this.selectedFiles[0].name)) {
            this.isInvalid = true;
            this.invalidExtension = "file type not supported. upload .xlsx file!  ";
        }
    }
    onSubmit() {
        const groupFormValues = this.groupForm.value;
        if (this.editMode) {
            const obj = {
                name: groupFormValues.title,
                description: groupFormValues.description,
                recipients: this.groupMembersEmails,
                type: groupFormValues.groupType,
                semesterTerm: groupFormValues.semesterTerm,
                semesterYear: groupFormValues.semesterYear,
                major: groupFormValues.majorControl
            };
            console.log(obj);
            this.groupDataStorageService
                .updateGroup(obj, this.id)
                .subscribe(result => {
                if (result.result) {
                    this._snackBar.open(result.message, "close", {
                        duration: 4000,
                        panelClass: ["standard"]
                    });
                    this.groupDataStorageService.fetchGroup();
                    this.router.navigate(["/home/group/your-group"]);
                }
                else {
                    this._snackBar.open(result.message, "close", {
                        duration: 4000,
                        panelClass: ["delete"]
                    });
                }
            });
        }
        else {
            if (this.groupMembersEmails.length > 0) {
                const obj = {
                    name: groupFormValues.title,
                    description: groupFormValues.description,
                    recipients: this.groupMembersEmails,
                    type: groupFormValues.groupType,
                    semesterTerm: groupFormValues.semesterTerm,
                    semesterYear: groupFormValues.semesterYear,
                    major: groupFormValues.majorControl
                };
                this.groupDataStorageService.createGroup(obj).subscribe(result => {
                    if (result) {
                        console.log(result);
                        if (result.result) {
                            this._snackBar.open(result.message, "close", {
                                duration: 5000,
                                panelClass: ["standard"]
                            });
                        }
                        else {
                            this._snackBar.open(result.message, "close", {
                                duration: 5000,
                                panelClass: ["delete"]
                            });
                        }
                        this.groupDataStorageService.fetchGroup();
                        this.router.navigate(["/home/group/your-group"]);
                    }
                });
            }
            else if (this.selectedFiles.length == 1) {
                const objUser = {
                    name: groupFormValues.title,
                    description: groupFormValues.description,
                    type: groupFormValues.groupType,
                    semesterTerm: groupFormValues.semesterTerm,
                    semesterYear: groupFormValues.semesterYear,
                    major: groupFormValues.majorControl
                };
                console.log(objUser);
                this.currentFileUpload = this.selectedFiles.item(0);
                console.log(this.currentFileUpload);
                const formData = new FormData();
                formData.append("user", JSON.stringify(objUser));
                formData.append("file", this.currentFileUpload);
                this.groupDataStorageService
                    .createGroupWithFile(formData)
                    .subscribe(result => {
                    if (result) {
                        console.log(result);
                        if (result.result) {
                            this._snackBar.open(result.message, "close", {
                                duration: 4000,
                                panelClass: ["standard"]
                            });
                            this.groupDataStorageService.fetchGroup();
                            this.router.navigate(["/home/group/your-group"]);
                        }
                        else {
                            this._snackBar.open(result.message, "close", {
                                duration: 4000,
                                panelClass: ["delete"]
                            });
                        }
                    }
                });
            }
        }
    }
    validateFile(name) {
        var fileExt = name.substring(name.lastIndexOf(".") + 1);
        console.log("Input files extension: " + fileExt);
        for (let ext of this.validFileExtensions) {
            if (fileExt.toLowerCase() == ext) {
                return true;
            }
        }
        return false;
    }
};
CreateGroupComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _group_data_storage_service__WEBPACK_IMPORTED_MODULE_5__["GroupDataStorageService"] },
    { type: _group_group_create_navigation_service__WEBPACK_IMPORTED_MODULE_6__["GroupCreateNavigationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"] },
    { type: _shared_data_storage_service__WEBPACK_IMPORTED_MODULE_8__["DataStorageService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("userInput", { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], CreateGroupComponent.prototype, "userInput", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("auto", { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatAutocomplete"])
], CreateGroupComponent.prototype, "matAutocomplete", void 0);
CreateGroupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-create-group",
        template: __webpack_require__(/*! raw-loader!./create-group.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/group/create-group/create-group.component.html"),
        styles: [__webpack_require__(/*! ./create-group.component.css */ "./src/app/home/group/create-group/create-group.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _group_data_storage_service__WEBPACK_IMPORTED_MODULE_5__["GroupDataStorageService"],
        _group_group_create_navigation_service__WEBPACK_IMPORTED_MODULE_6__["GroupCreateNavigationService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"],
        _shared_data_storage_service__WEBPACK_IMPORTED_MODULE_8__["DataStorageService"]])
], CreateGroupComponent);



/***/ }),

/***/ "./src/app/home/group/group-data-storage.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/home/group/group-data-storage.service.ts ***!
  \**********************************************************/
/*! exports provided: GroupDataStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupDataStorageService", function() { return GroupDataStorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");







let GroupDataStorageService = class GroupDataStorageService {
    constructor(http, authService, _snackbar) {
        this.http = http;
        this.authService = authService;
        this._snackbar = _snackbar;
        this.baseUrlGroup = "http://ec2-100-26-194-180.compute-1.amazonaws.com:8181/api/group/";
        this.isLoadingSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.isLoading = this.isLoadingSubject.asObservable();
        this.groupSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({});
        this.majorSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({});
    }
    get groupLists() {
        // console.log(this.groupSubject.value);
        if (!this.groupSubject.value) {
            return [];
        }
        else {
            return this.groupSubject.value;
        }
    }
    get majors() {
        // console.log(this.majorSubject.value);
        if (!this.majorSubject.value) {
            return [];
        }
        else {
            return this.majorSubject.value;
        }
    }
    createGroup(obj) {
        this.isLoadingSubject.next(true);
        return this.http
            .post(this.baseUrlGroup + "createFromList", obj)
            .pipe((Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(data => data), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(() => this.isLoadingSubject.next(false)));
    }
    createGroupWithFile(formData) {
        return this.http
            .post("http://ec2-100-26-194-180.compute-1.amazonaws.com:8181/api/group/createFromFile", formData)
            .pipe((Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(data => data), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(() => this.isLoadingSubject.next(false)));
    }
    fetchGroup() {
        this.isLoadingSubject.next(true);
        return this.http
            .get(this.baseUrlGroup + "fetch")
            .pipe((Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(data => data),
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error)),
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(() => this.isLoadingSubject.next(false))))
            .subscribe((result) => {
            console.log("Group received!");
            console.log(result);
            if (result.status == 200 && result.result) {
                this.groupSubject.next(result.result);
            }
            else {
                this._snackbar.open("You do not have any group yet. Please create group!", "close", {
                    duration: 5000,
                    panelClass: ["standard"]
                });
                this.groupSubject.next([]);
            }
        });
    }
    displayGroupDetails(id) {
        this.isLoadingSubject.next(true);
        return this.http
            .get(this.baseUrlGroup + "getDetails/" + id)
            .pipe((Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(data => data),
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error)),
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(() => this.isLoadingSubject.next(false))));
    }
    shareGroup(obj) {
        this.isLoadingSubject.next(true);
        return this.http.post(this.baseUrlGroup + "share", obj).pipe((Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(data => data), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(() => this.isLoadingSubject.next(false)));
    }
    deleteGroup(id) {
        this.isLoadingSubject.next(true);
        return this.http
            .delete(this.baseUrlGroup + "delete/" + id)
            .pipe((Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(data => data), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(() => this.isLoadingSubject.next(false)));
    }
    sendEmail(obj) {
        this.isLoadingSubject.next(true);
        return this.http
            .post(this.baseUrlGroup + "sendEmail", obj)
            .pipe((Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(data => data), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(() => this.isLoadingSubject.next(false)));
    }
    updateGroup(obj, id) {
        {
            this.isLoadingSubject.next(true);
            return this.http
                .put(this.baseUrlGroup + "edit/" + id, obj)
                .pipe((Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(data => data), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(() => this.isLoadingSubject.next(false)));
        }
    }
    postMajors() {
        this.isLoadingSubject.next(true);
        return this.http
            .post("http://ec2-100-26-194-180.compute-1.amazonaws.com:8181/api/admin/", null)
            .pipe((Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(data => data), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(() => this.isLoadingSubject.next(false)))
            .subscribe(r => console.log(r));
    }
    getAllMajors() {
        this.isLoadingSubject.next(true);
        this.http
            .get(this.baseUrlGroup + "getAllMajors")
            .pipe((Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(data => data),
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error)),
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(() => this.isLoadingSubject.next(false))))
            .subscribe((result) => {
            console.log("Major received!");
            console.log(result);
            if (result.status == 200 && result.result) {
                this.majorSubject.next(result.result);
            }
            else {
                this.majorSubject.next([]);
            }
        });
    }
    getCourseDetails(id) {
        this.isLoadingSubject.next(true);
        return this.http
            .get(this.baseUrlGroup + "getAllCourses/" + id)
            .pipe((Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(data => data),
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error)),
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(() => this.isLoadingSubject.next(false))));
    }
};
GroupDataStorageService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"] }
];
GroupDataStorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
        src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]])
], GroupDataStorageService);



/***/ }),

/***/ "./src/app/home/group/group-detail/filter-member.pipe.ts":
/*!***************************************************************!*\
  !*** ./src/app/home/group/group-detail/filter-member.pipe.ts ***!
  \***************************************************************/
/*! exports provided: FilterMemberPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterMemberPipe", function() { return FilterMemberPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FilterMemberPipe = class FilterMemberPipe {
    transform(items, searchText) {
        if (!items)
            return [];
        if (!searchText)
            return items;
        searchText = searchText.toLowerCase();
        return items.filter(group => {
            if (group.name.toLowerCase().includes(searchText)) {
                return group.name.toLowerCase().includes(searchText);
            }
            else if (group.email.toLowerCase().includes(searchText)) {
                return group.email.toLowerCase().includes(searchText);
            }
        });
    }
};
FilterMemberPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: "filterMember"
    })
], FilterMemberPipe);



/***/ }),

/***/ "./src/app/home/group/group-detail/group-detail.component.css":
/*!********************************************************************!*\
  !*** ./src/app/home/group/group-detail/group-detail.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".primary {\r\n  color: #800029;\r\n  border: #800029 solid 1px;\r\n\r\n\r\n}\r\n\r\n.mat-menu-item:hover:not([disabled]) {\r\n  color: white;\r\n  background: #800029;\r\n}\r\n\r\n.example-tooltip-red {\r\n  background: #800029;\r\n}\r\n\r\nexample-icon {\r\n  padding: 0 14px;\r\n}\r\n\r\n.example-spacer {\r\n  flex: 1 1 auto;\r\n}\r\n\r\n.mat-toolbar {\r\n  background: white;\r\n}\r\n\r\n.mat-form-field {\r\n  font-size: 14px;\r\n  font-weight: 400;\r\n}\r\n\r\n.mat-menu-item .mat-icon-no-color,\r\n.mat-menu-item-submenu-trigger::after {\r\n  color: inherit;\r\n}\r\n\r\n.container-detail {\r\n  margin: 44px auto;\r\n}\r\n\r\n.container {\r\n  margin: 15px auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ncm91cC9ncm91cC1kZXRhaWwvZ3JvdXAtZGV0YWlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QseUJBQXlCOzs7QUFHM0I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBOztFQUVFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2dyb3VwL2dyb3VwLWRldGFpbC9ncm91cC1kZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcmltYXJ5IHtcclxuICBjb2xvcjogIzgwMDAyOTtcclxuICBib3JkZXI6ICM4MDAwMjkgc29saWQgMXB4O1xyXG5cclxuXHJcbn1cclxuXHJcbi5tYXQtbWVudS1pdGVtOmhvdmVyOm5vdChbZGlzYWJsZWRdKSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQ6ICM4MDAwMjk7XHJcbn1cclxuXHJcbi5leGFtcGxlLXRvb2x0aXAtcmVkIHtcclxuICBiYWNrZ3JvdW5kOiAjODAwMDI5O1xyXG59XHJcblxyXG5leGFtcGxlLWljb24ge1xyXG4gIHBhZGRpbmc6IDAgMTRweDtcclxufVxyXG5cclxuLmV4YW1wbGUtc3BhY2VyIHtcclxuICBmbGV4OiAxIDEgYXV0bztcclxufVxyXG5cclxuLm1hdC10b29sYmFyIHtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxufVxyXG5cclxuLm1hdC1mb3JtLWZpZWxkIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxuLm1hdC1tZW51LWl0ZW0gLm1hdC1pY29uLW5vLWNvbG9yLFxyXG4ubWF0LW1lbnUtaXRlbS1zdWJtZW51LXRyaWdnZXI6OmFmdGVyIHtcclxuICBjb2xvcjogaW5oZXJpdDtcclxufVxyXG5cclxuLmNvbnRhaW5lci1kZXRhaWwge1xyXG4gIG1hcmdpbjogNDRweCBhdXRvO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBtYXJnaW46IDE1cHggYXV0bztcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/home/group/group-detail/group-detail.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/home/group/group-detail/group-detail.component.ts ***!
  \*******************************************************************/
/*! exports provided: GroupDetailComponent, DialogShareGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupDetailComponent", function() { return GroupDetailComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogShareGroup", function() { return DialogShareGroup; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _group_data_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../group-data-storage.service */ "./src/app/home/group/group-data-storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm2015/keycodes.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _message_group_message_group_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../message-group/message-group.component */ "./src/app/home/group/message-group/message-group.component.ts");
/* harmony import */ var _shared_data_storage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/data-storage.service */ "./src/app/home/shared/data-storage.service.ts");










let GroupDetailComponent = class GroupDetailComponent {
    constructor(groupDataStorage, route, authService, dialog, router, _snackBar, dataStorage) {
        this.groupDataStorage = groupDataStorage;
        this.route = route;
        this.authService = authService;
        this.dialog = dialog;
        this.router = router;
        this._snackBar = _snackBar;
        this.dataStorage = dataStorage;
        this.editMode = false;
        this.searchText = "";
        this.selectedGroupMembers = [];
    }
    ngOnInit() {
        this.route.params.subscribe((params) => {
            this.id = +params["id"];
            this.currentRole = this.authService.user;
            this.groupDataStorage.displayGroupDetails(this.id).subscribe(result => {
                this.group = result.result;
                console.log(result);
                this.groupName = this.group.name;
                this.groupDesc = this.group.description;
                this.numOfmembers = this.group.members.length;
                this.groupemails = this.group.members;
                this.groupType = this.group.type.toLowerCase();
                console.log(this.groupType);
            });
        });
    }
    onSelectChange(options) {
        console.log(options.map(o => o.value));
        this.selectedGroupMembers = options.map(o => o.value);
        console.log(this.selectedGroupMembers);
    }
    shareGroup() {
        console.log("shrae dialog");
        const dialogRef = this.dialog.open(DialogShareGroup, {
            width: "400px"
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log(result);
            this.groupSharedEmails = result;
            const shareObj = {
                id: this.id,
                emails: this.groupSharedEmails
            };
            console.log(shareObj);
            this.groupDataStorage.shareGroup(shareObj).subscribe(result => {
                console.log(result);
                const sharedMsg = "This group has been successfully shared!";
                if (result.result) {
                    this._snackBar.open(sharedMsg, "close", {
                        duration: 4000,
                        panelClass: ["standard"]
                    });
                }
            });
        });
    }
    deleteGroup(id) {
        console.log("deleted");
        this.groupDataStorage.deleteGroup(id).subscribe(result => {
            console.log(result);
            if (result.result) {
                const deletedMsg = result.result.name + " group has been successfully deleted!";
                this._snackBar.open(deletedMsg, "close", {
                    duration: 4000,
                    panelClass: ["delete"]
                });
            }
            else {
                this._snackBar.open(result.message, "close", {
                    duration: 4000,
                    panelClass: ["delete"]
                });
            }
            this.groupDataStorage.fetchGroup();
        });
        this.router.navigate(["/home/group/your-group"]);
    }
    editGroup() {
        this.router.navigate(["home/group/edit-group/", this.id]);
    }
    emailSelectedMembers() {
        const dialogRef = this.dialog.open(_message_group_message_group_component__WEBPACK_IMPORTED_MODULE_8__["MessageGroupComponent"], {
            width: "400px",
            data: {}
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log(result);
            if (result) {
                result.recipients = this.selectedGroupMembers;
                this.dataStorage.emailSelectedMembers(result).subscribe(result => {
                    console.log(result);
                    if (result) {
                        this._snackBar.open("An email has been successfully to selected members!", "close", {
                            duration: 5000,
                            panelClass: ["standard"]
                        });
                    }
                });
            }
        });
    }
    messageGroup() {
        const dialogRef = this.dialog.open(_message_group_message_group_component__WEBPACK_IMPORTED_MODULE_8__["MessageGroupComponent"], {
            width: "400px",
            data: {
                id: this.id,
                name: this.group.name
            }
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log(result);
            if (result) {
                this.groupDataStorage.sendEmail(result).subscribe(result => {
                    if (result.result) {
                        this._snackBar.open("An email has been successfully to " + this.group.name + "!", "close", {
                            duration: 5000,
                            panelClass: ["standard"]
                        });
                    }
                });
            }
        });
    }
};
GroupDetailComponent.ctorParameters = () => [
    { type: _group_data_storage_service__WEBPACK_IMPORTED_MODULE_2__["GroupDataStorageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"] },
    { type: _shared_data_storage_service__WEBPACK_IMPORTED_MODULE_9__["DataStorageService"] }
];
GroupDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-group-detail",
        template: __webpack_require__(/*! raw-loader!./group-detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/group/group-detail/group-detail.component.html"),
        styles: [__webpack_require__(/*! ./group-detail.component.css */ "./src/app/home/group/group-detail/group-detail.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_group_data_storage_service__WEBPACK_IMPORTED_MODULE_2__["GroupDataStorageService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"],
        _shared_data_storage_service__WEBPACK_IMPORTED_MODULE_9__["DataStorageService"]])
], GroupDetailComponent);

let DialogShareGroup = class DialogShareGroup {
    constructor(dialogRef, dialog) {
        this.dialogRef = dialogRef;
        this.dialog = dialog;
        // email = new FormControl("", [Validators.required, Validators.email]);
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["COMMA"]];
        this.emails = [];
    }
    ngOnInit() { }
    add(event) {
        const input = event.input;
        const value = event.value;
        // Add emails
        if (value.trim()) {
            this.emails.push(value.trim());
        }
        // Reset the input value
        if (input) {
            input.value = "";
        }
    }
    remove(email) {
        const index = this.emails.indexOf(email);
        if (index >= 0) {
            this.emails.splice(index, 1);
        }
    }
    // getErrorMessage() {
    //   return this.email.hasError("required")
    //     ? "You must enter a value"
    //     : this.email.hasError("email")
    //     ? "Not a valid email"
    //     : "";
    // }
    onNoClick() {
        this.dialogRef.close();
    }
    saveDialogData() {
        console.log("Email Array: " + this.emails);
        this.dialogRef.close(this.emails);
    }
};
DialogShareGroup.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogRef"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] }
];
DialogShareGroup = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "dialog-share-group",
        template: __webpack_require__(/*! raw-loader!./share-group-dialog.html */ "./node_modules/raw-loader/index.js!./src/app/home/group/group-detail/share-group-dialog.html"),
        styles: [__webpack_require__(/*! ./group-detail.component.css */ "./src/app/home/group/group-detail/group-detail.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogRef"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]])
], DialogShareGroup);



/***/ }),

/***/ "./src/app/home/group/group-edit/group-edit.component.css":
/*!****************************************************************!*\
  !*** ./src/app/home/group/group-edit/group-edit.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvZ3JvdXAvZ3JvdXAtZWRpdC9ncm91cC1lZGl0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/home/group/group-edit/group-edit.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/home/group/group-edit/group-edit.component.ts ***!
  \***************************************************************/
/*! exports provided: GroupEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupEditComponent", function() { return GroupEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _group_data_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../group-data-storage.service */ "./src/app/home/group/group-data-storage.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm2015/keycodes.js");






let GroupEditComponent = class GroupEditComponent {
    constructor(route, router, dataStorage, formBuilder) {
        this.route = route;
        this.router = router;
        this.dataStorage = dataStorage;
        this.formBuilder = formBuilder;
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]);
        this.emails = [];
        this.semesterTerm = ["Fall", "Spring"];
        this.semesterYear = [2019, 2020, 2021];
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["COMMA"]];
    }
    ngOnInit() {
        this.route.params.subscribe((params) => {
            this.id = +params["id"];
            console.log(this.id);
        });
        this.dataStorage.displayGroupDetails(this.id).subscribe(result => {
            this.dataStorage.isLoading.subscribe((loading) => {
                if (!loading) {
                    this.group = result.result;
                    console.log(this.group);
                }
            });
        });
        this.emails = this.group.members;
        console.log(this.emails);
        this.groupForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.group.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.group.description, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            groupType: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            email: this.email,
            semesterTerm: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            semesterYear: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            majorControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])
        });
    }
    onSubmit() {
        console.log(this.groupForm.value);
    }
    cancel() {
        this.router.navigate(['home/group/', this.id]);
    }
    add(event) {
        const input = event.input;
        const value = event.value;
        // Add emails
        if (value.trim()) {
            this.emails.push(value.trim());
        }
        // Reset the input value
        if (input) {
            input.value = "";
        }
    }
    remove(email) {
        const index = this.emails.indexOf(email);
        if (index >= 0) {
            this.emails.splice(index, 1);
        }
    }
};
GroupEditComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _group_data_storage_service__WEBPACK_IMPORTED_MODULE_3__["GroupDataStorageService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
];
GroupEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-group-edit',
        template: __webpack_require__(/*! raw-loader!./group-edit.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/group/group-edit/group-edit.component.html"),
        styles: [__webpack_require__(/*! ./group-edit.component.css */ "./src/app/home/group/group-edit/group-edit.component.css"), __webpack_require__(/*! ../create-group/create-group.component.css */ "./src/app/home/group/create-group/create-group.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _group_data_storage_service__WEBPACK_IMPORTED_MODULE_3__["GroupDataStorageService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
], GroupEditComponent);



/***/ }),

/***/ "./src/app/home/group/group-item/group-item.component.css":
/*!****************************************************************!*\
  !*** ./src/app/home/group/group-item/group-item.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-list .mat-list-item:hover {\r\n  color: white;\r\n  background: #800029;\r\n  border: #BD955A solid 1px;\r\n\r\n\r\n}\r\n\r\n.mat-list-base .mat-list-item {\r\n  padding-top: 0;\r\n  margin: 10px;\r\n  border: #800029 solid 1px;\r\n  max-width: 100%;\r\n\r\n}\r\n\r\n@media screen and (min-width: 1200px) {\r\n\r\n  .example-card-width {\r\n    max-width: 90%\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 992px) and (max-width: 1199px) {\r\n\r\n\r\n  .example-card-width {\r\n    max-width: 90%\r\n  }\r\n}\r\n\r\n/* On screens that are 992px wide or less */\r\n\r\n@media screen and (min-width: 600px) and (max-width: 991px) {\r\n\r\n  .example-card-width {\r\n    max-width: 80%\r\n  }\r\n}\r\n\r\n/* On screens that are 600px wide or less */\r\n\r\n@media screen and (max-width: 600px) {\r\n\r\n\r\n  .example-card-width {\r\n    max-width: 90%\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ncm91cC9ncm91cC1pdGVtL2dyb3VwLWl0ZW0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIseUJBQXlCOzs7QUFHM0I7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixlQUFlOztBQUVqQjs7QUFHQTs7RUFFRTtJQUNFO0VBQ0Y7QUFDRjs7QUFFQTs7O0VBR0U7SUFDRTtFQUNGO0FBQ0Y7O0FBR0EsMkNBQTJDOztBQUMzQzs7RUFFRTtJQUNFO0VBQ0Y7QUFDRjs7QUFFQSwyQ0FBMkM7O0FBQzNDOzs7RUFHRTtJQUNFO0VBQ0Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvZ3JvdXAvZ3JvdXAtaXRlbS9ncm91cC1pdGVtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWxpc3QgLm1hdC1saXN0LWl0ZW06aG92ZXIge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kOiAjODAwMDI5O1xyXG4gIGJvcmRlcjogI0JEOTU1QSBzb2xpZCAxcHg7XHJcblxyXG5cclxufVxyXG5cclxuLm1hdC1saXN0LWJhc2UgLm1hdC1saXN0LWl0ZW0ge1xyXG4gIHBhZGRpbmctdG9wOiAwO1xyXG4gIG1hcmdpbjogMTBweDtcclxuICBib3JkZXI6ICM4MDAwMjkgc29saWQgMXB4O1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuXHJcbn1cclxuXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuXHJcbiAgLmV4YW1wbGUtY2FyZC13aWR0aCB7XHJcbiAgICBtYXgtd2lkdGg6IDkwJVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcclxuXHJcblxyXG4gIC5leGFtcGxlLWNhcmQtd2lkdGgge1xyXG4gICAgbWF4LXdpZHRoOiA5MCVcclxuICB9XHJcbn1cclxuXHJcblxyXG4vKiBPbiBzY3JlZW5zIHRoYXQgYXJlIDk5MnB4IHdpZGUgb3IgbGVzcyAqL1xyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcblxyXG4gIC5leGFtcGxlLWNhcmQtd2lkdGgge1xyXG4gICAgbWF4LXdpZHRoOiA4MCVcclxuICB9XHJcbn1cclxuXHJcbi8qIE9uIHNjcmVlbnMgdGhhdCBhcmUgNjAwcHggd2lkZSBvciBsZXNzICovXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcblxyXG5cclxuICAuZXhhbXBsZS1jYXJkLXdpZHRoIHtcclxuICAgIG1heC13aWR0aDogOTAlXHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/home/group/group-item/group-item.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/home/group/group-item/group-item.component.ts ***!
  \***************************************************************/
/*! exports provided: GroupItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupItemComponent", function() { return GroupItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _models_group_group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models-group/group */ "./src/app/home/group/models-group/group.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _group_data_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../group-data-storage.service */ "./src/app/home/group/group-data-storage.service.ts");





let GroupItemComponent = class GroupItemComponent {
    constructor(router, groupDataStorage) {
        this.router = router;
        this.groupDataStorage = groupDataStorage;
    }
    ngOnInit() { }
    showDetails(id) {
        this.router.navigate(["home/group/your-group", id]);
    }
};
GroupItemComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _group_data_storage_service__WEBPACK_IMPORTED_MODULE_4__["GroupDataStorageService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _models_group_group__WEBPACK_IMPORTED_MODULE_2__["Group"])
], GroupItemComponent.prototype, "eachGroup", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], GroupItemComponent.prototype, "id", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], GroupItemComponent.prototype, "semester", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], GroupItemComponent.prototype, "semesterYear", void 0);
GroupItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-group-item",
        template: __webpack_require__(/*! raw-loader!./group-item.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/group/group-item/group-item.component.html"),
        styles: [__webpack_require__(/*! ./group-item.component.css */ "./src/app/home/group/group-item/group-item.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _group_data_storage_service__WEBPACK_IMPORTED_MODULE_4__["GroupDataStorageService"]])
], GroupItemComponent);



/***/ }),

/***/ "./src/app/home/group/group-list/group-filter.pipe.ts":
/*!************************************************************!*\
  !*** ./src/app/home/group/group-list/group-filter.pipe.ts ***!
  \************************************************************/
/*! exports provided: GroupFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupFilterPipe", function() { return GroupFilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let GroupFilterPipe = class GroupFilterPipe {
    transform(items, searchText) {
        if (!items)
            return [];
        if (!searchText)
            return items;
        searchText = searchText.toLowerCase();
        return items.filter(group => {
            if (group.name.toLowerCase().includes(searchText)) {
                return group.name.toLowerCase().includes(searchText);
            }
            else if (group.description.toLowerCase().includes(searchText)) {
                return group.description.toLowerCase().includes(searchText);
            }
        });
    }
};
GroupFilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: "groupFilter"
    })
], GroupFilterPipe);



/***/ }),

/***/ "./src/app/home/group/group-list/group-list.component.css":
/*!****************************************************************!*\
  !*** ./src/app/home/group/group-list/group-list.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".primary {\r\n  color: #800029;\r\n  border: #800029 solid 1px;\r\n\r\n}\r\n\r\n.mat-menu-item:hover:not([disabled]) {\r\n  color: white;\r\n  background: #800029;\r\n}\r\n\r\n.mat-menu-item .mat-icon-no-color,\r\n.mat-menu-item-submenu-trigger::after {\r\n  color: inherit;\r\n}\r\n\r\n/* .group-wrap {\r\n  height: 80%;\r\n  overflow: auto;\r\n} */\r\n\r\n.pagination-center {\r\n  margin-right: 80px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ncm91cC9ncm91cC1saXN0L2dyb3VwLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCx5QkFBeUI7O0FBRTNCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFHQTs7RUFFRSxjQUFjO0FBQ2hCOztBQUVBOzs7R0FHRzs7QUFFSDtFQUNFLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvZ3JvdXAvZ3JvdXAtbGlzdC9ncm91cC1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJpbWFyeSB7XHJcbiAgY29sb3I6ICM4MDAwMjk7XHJcbiAgYm9yZGVyOiAjODAwMDI5IHNvbGlkIDFweDtcclxuXHJcbn1cclxuXHJcbi5tYXQtbWVudS1pdGVtOmhvdmVyOm5vdChbZGlzYWJsZWRdKSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQ6ICM4MDAwMjk7XHJcbn1cclxuXHJcblxyXG4ubWF0LW1lbnUtaXRlbSAubWF0LWljb24tbm8tY29sb3IsXHJcbi5tYXQtbWVudS1pdGVtLXN1Ym1lbnUtdHJpZ2dlcjo6YWZ0ZXIge1xyXG4gIGNvbG9yOiBpbmhlcml0O1xyXG59XHJcblxyXG4vKiAuZ3JvdXAtd3JhcCB7XHJcbiAgaGVpZ2h0OiA4MCU7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbn0gKi9cclxuXHJcbi5wYWdpbmF0aW9uLWNlbnRlciB7XHJcbiAgbWFyZ2luLXJpZ2h0OiA4MHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/home/group/group-list/group-list.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/home/group/group-list/group-list.component.ts ***!
  \***************************************************************/
/*! exports provided: GroupListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupListComponent", function() { return GroupListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _group_data_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../group-data-storage.service */ "./src/app/home/group/group-data-storage.service.ts");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _group_group_create_navigation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../group/group-create-navigation.service */ "./src/app/home/group/group/group-create-navigation.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");







let GroupListComponent = class GroupListComponent {
    constructor(router, groupDataStorage, role, route, groupTypeNavigation, _snackbar) {
        this.router = router;
        this.groupDataStorage = groupDataStorage;
        this.role = role;
        this.route = route;
        this.groupTypeNavigation = groupTypeNavigation;
        this._snackbar = _snackbar;
        this.group = [];
        this.isGroupEmpty = false;
        this.searchText = "";
        this.groupExists = false;
    }
    ngOnInit() {
        this.currentRole = this.role.user;
        console.log(this.role.user);
        this.groupDataStorage.fetchGroup();
        console.log(this.groupDataStorage.groupLists);
        this.groupDataStorage.isLoading.subscribe(loading => {
            console.log(loading);
            if (!loading) {
                if (this.groupDataStorage.groupLists.length > 0) {
                    this.group = this.groupDataStorage.groupLists;
                }
                else {
                    this.isGroupEmpty = true;
                }
            }
        });
    }
};
GroupListComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _group_data_storage_service__WEBPACK_IMPORTED_MODULE_3__["GroupDataStorageService"] },
    { type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _group_group_create_navigation_service__WEBPACK_IMPORTED_MODULE_5__["GroupCreateNavigationService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"] }
];
GroupListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-group-list",
        template: __webpack_require__(/*! raw-loader!./group-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/group/group-list/group-list.component.html"),
        styles: [__webpack_require__(/*! ./group-list.component.css */ "./src/app/home/group/group-list/group-list.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _group_data_storage_service__WEBPACK_IMPORTED_MODULE_3__["GroupDataStorageService"],
        src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _group_group_create_navigation_service__WEBPACK_IMPORTED_MODULE_5__["GroupCreateNavigationService"],
        _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]])
], GroupListComponent);



/***/ }),

/***/ "./src/app/home/group/group-start/group-start.component.css":
/*!******************************************************************!*\
  !*** ./src/app/home/group/group-start/group-start.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-start {\r\n  margin: 10px 15px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ncm91cC9ncm91cC1zdGFydC9ncm91cC1zdGFydC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ncm91cC9ncm91cC1zdGFydC9ncm91cC1zdGFydC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1zdGFydCB7XHJcbiAgbWFyZ2luOiAxMHB4IDE1cHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/home/group/group-start/group-start.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/home/group/group-start/group-start.component.ts ***!
  \*****************************************************************/
/*! exports provided: GroupStartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupStartComponent", function() { return GroupStartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _group_data_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../group-data-storage.service */ "./src/app/home/group/group-data-storage.service.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");




let GroupStartComponent = class GroupStartComponent {
    constructor(groupDataStorage, _snackbar) {
        this.groupDataStorage = groupDataStorage;
        this._snackbar = _snackbar;
        this.isGroupEmpty = false;
    }
    ngOnInit() {
        this.groupDataStorage.fetchGroup();
        console.log(this.groupDataStorage.groupLists);
        this.groupDataStorage.isLoading.subscribe(loading => {
            console.log(loading);
            if (!loading) {
                if (this.groupDataStorage.groupLists.length > 0) {
                    this.isGroupEmpty = true;
                }
                else {
                    this.isGroupEmpty = false;
                }
            }
        });
    }
};
GroupStartComponent.ctorParameters = () => [
    { type: _group_data_storage_service__WEBPACK_IMPORTED_MODULE_2__["GroupDataStorageService"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] }
];
GroupStartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-group-start",
        template: __webpack_require__(/*! raw-loader!./group-start.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/group/group-start/group-start.component.html"),
        styles: [__webpack_require__(/*! ./group-start.component.css */ "./src/app/home/group/group-start/group-start.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_group_data_storage_service__WEBPACK_IMPORTED_MODULE_2__["GroupDataStorageService"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])
], GroupStartComponent);



/***/ }),

/***/ "./src/app/home/group/group/group-create-navigation.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/home/group/group/group-create-navigation.service.ts ***!
  \*********************************************************************/
/*! exports provided: GroupCreateNavigationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupCreateNavigationService", function() { return GroupCreateNavigationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let GroupCreateNavigationService = class GroupCreateNavigationService {
    constructor() {
        this.groupTypeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]("nodata");
        this.groupType = this.groupTypeSubject.asObservable();
    }
    changeGroupType(status) {
        this.groupTypeSubject.next(status);
    }
};
GroupCreateNavigationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], GroupCreateNavigationService);



/***/ }),

/***/ "./src/app/home/group/group/group.component.css":
/*!******************************************************!*\
  !*** ./src/app/home/group/group/group.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".primary {\r\n  color: #800029;\r\n  border: #800029 solid 1px;\r\n\r\n}\r\n\r\n.mat-menu-item:hover:not([disabled]) {\r\n  color: white;\r\n  background: #800029;\r\n}\r\n\r\n.mat-menu-item .mat-icon-no-color,\r\n.mat-menu-item-submenu-trigger::after {\r\n  color: inherit;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ncm91cC9ncm91cC9ncm91cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLHlCQUF5Qjs7QUFFM0I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOztBQUdBOztFQUVFLGNBQWM7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2dyb3VwL2dyb3VwL2dyb3VwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJpbWFyeSB7XHJcbiAgY29sb3I6ICM4MDAwMjk7XHJcbiAgYm9yZGVyOiAjODAwMDI5IHNvbGlkIDFweDtcclxuXHJcbn1cclxuXHJcbi5tYXQtbWVudS1pdGVtOmhvdmVyOm5vdChbZGlzYWJsZWRdKSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQ6ICM4MDAwMjk7XHJcbn1cclxuXHJcblxyXG4ubWF0LW1lbnUtaXRlbSAubWF0LWljb24tbm8tY29sb3IsXHJcbi5tYXQtbWVudS1pdGVtLXN1Ym1lbnUtdHJpZ2dlcjo6YWZ0ZXIge1xyXG4gIGNvbG9yOiBpbmhlcml0O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/home/group/group/group.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/home/group/group/group.component.ts ***!
  \*****************************************************/
/*! exports provided: GroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupComponent", function() { return GroupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _group_create_navigation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./group-create-navigation.service */ "./src/app/home/group/group/group-create-navigation.service.ts");




let GroupComponent = class GroupComponent {
    constructor(router, groupTypeNavigation, route) {
        this.router = router;
        this.groupTypeNavigation = groupTypeNavigation;
        this.route = route;
    }
    ngOnInit() { }
    createCourseGroup() {
        this.router.navigate(["home/group/create-group"]);
        this.groupTypeNavigation.changeGroupType("course");
    }
    createCustomGroup() {
        this.router.navigate(["home/group/create-group"]);
        this.groupTypeNavigation.changeGroupType("custom");
    }
    navigateToYourGroup() {
        this.router.navigate(["your-group"], { relativeTo: this.route });
    }
};
GroupComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _group_create_navigation_service__WEBPACK_IMPORTED_MODULE_3__["GroupCreateNavigationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
GroupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-group",
        template: __webpack_require__(/*! raw-loader!./group.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/group/group/group.component.html"),
        styles: [__webpack_require__(/*! ./group.component.css */ "./src/app/home/group/group/group.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _group_create_navigation_service__WEBPACK_IMPORTED_MODULE_3__["GroupCreateNavigationService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
], GroupComponent);



/***/ }),

/***/ "./src/app/home/group/message-group/message-group.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/home/group/message-group/message-group.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-toolbar{\r\n    background-color: white;\r\n}\r\n.spacer{\r\n    flex: 1 1 auto;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ncm91cC9tZXNzYWdlLWdyb3VwL21lc3NhZ2UtZ3JvdXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvZ3JvdXAvbWVzc2FnZS1ncm91cC9tZXNzYWdlLWdyb3VwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtdG9vbGJhcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcbi5zcGFjZXJ7XHJcbiAgICBmbGV4OiAxIDEgYXV0bztcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/group/message-group/message-group.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/home/group/message-group/message-group.component.ts ***!
  \*********************************************************************/
/*! exports provided: MessageGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageGroupComponent", function() { return MessageGroupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _models_group_group__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models-group/group */ "./src/app/home/group/models-group/group.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");





let MessageGroupComponent = class MessageGroupComponent {
    constructor(ref, data) {
        this.ref = ref;
        this.data = data;
    }
    ngOnInit() {
        if (this.isEmpty(this.data)) {
            console.log("empty");
        }
        else {
            this.id = this.data.id;
            console.log(this.id);
        }
        console.log(this.data);
        this.messageForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            message: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])
        });
    }
    isEmpty(obj) {
        for (var key in obj) {
            if (obj.hasOwnProperty(key))
                return false;
        }
        return true;
    }
    onSubmit() {
        if (this.isEmpty(this.data)) {
            const selectedMemberObj = {
                title: this.messageForm.value["title"],
                message: this.messageForm.value["message"]
            };
            console.log(selectedMemberObj);
            this.ref.close(selectedMemberObj);
        }
        else {
            const groupEmailObj = {
                id: this.id,
                title: this.messageForm.value["title"],
                message: this.messageForm.value["message"]
            };
            console.log(groupEmailObj);
            this.ref.close(groupEmailObj);
        }
    }
    cancel() {
        this.ref.close();
    }
};
MessageGroupComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: _models_group_group__WEBPACK_IMPORTED_MODULE_3__["Group"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
MessageGroupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-message-group",
        template: __webpack_require__(/*! raw-loader!./message-group.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/group/message-group/message-group.component.html"),
        styles: [__webpack_require__(/*! ./message-group.component.css */ "./src/app/home/group/message-group/message-group.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
        _models_group_group__WEBPACK_IMPORTED_MODULE_3__["Group"]])
], MessageGroupComponent);



/***/ }),

/***/ "./src/app/home/group/models-group/group.ts":
/*!**************************************************!*\
  !*** ./src/app/home/group/models-group/group.ts ***!
  \**************************************************/
/*! exports provided: Group */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Group", function() { return Group; });
class Group {
    constructor(id, name, desc, emails, groupType, semesterTerm, semesterYear) {
        this.id = id;
        this.name = name;
        this.description = desc;
        this.recepients = emails;
        this.groupType = groupType;
        this.semesterTerm = semesterTerm;
        this.semesterYear = semesterYear;
    }
}
Group.ctorParameters = () => [
    { type: Number },
    { type: String },
    { type: String },
    { type: Array },
    { type: String },
    { type: String },
    { type: Number }
];


/***/ }),

/***/ "./src/app/home/group/your-group/your-group.component.css":
/*!****************************************************************!*\
  !*** ./src/app/home/group/your-group/your-group.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvZ3JvdXAveW91ci1ncm91cC95b3VyLWdyb3VwLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/home/group/your-group/your-group.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/home/group/your-group/your-group.component.ts ***!
  \***************************************************************/
/*! exports provided: YourGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YourGroupComponent", function() { return YourGroupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let YourGroupComponent = class YourGroupComponent {
    constructor() { }
    ngOnInit() { }
};
YourGroupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-your-group",
        template: __webpack_require__(/*! raw-loader!./your-group.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/group/your-group/your-group.component.html"),
        styles: [__webpack_require__(/*! ./your-group.component.css */ "./src/app/home/group/your-group/your-group.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], YourGroupComponent);



/***/ }),

/***/ "./src/app/home/shared/data-storage.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/home/shared/data-storage.service.ts ***!
  \*****************************************************/
/*! exports provided: DataStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataStorageService", function() { return DataStorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _calendar_calendar_list_calendar_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../calendar/calendar-list/calendar.service */ "./src/app/home/calendar/calendar-list/calendar.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");








let DataStorageService = class DataStorageService {
    constructor(http, authService, calService, _snackbar) {
        this.http = http;
        this.authService = authService;
        this.calService = calService;
        this._snackbar = _snackbar;
        this.baseUrlEvent = "http://ec2-100-26-194-180.compute-1.amazonaws.com:8181/api/event/";
        this.baseUrlCalendar = "http://ec2-100-26-194-180.compute-1.amazonaws.com:8181/api/calendar/";
        this.baseUrlAdmin = "http://ec2-100-26-194-180.compute-1.amazonaws.com:8181/api/admin/";
        this.isLoadingSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](false);
        this.isLoading = this.isLoadingSubject.asObservable();
        this.eventSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]({});
        this.upcomingEventsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]({});
        this.calSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]({});
        this.imageSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
        this.userSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
        this.emailSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
        this.emails = this.emailSubject.asObservable();
        this.upcomingEvents = this.upcomingEventsSubject.asObservable();
        this.adminAppointmentReceived = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
        this.majorSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]({});
        this.eventList = this.eventSubject.asObservable();
        // private handleError(errorRes: HttpErrorResponse) {
        //   let errorMessage = "An unknown error occured!";
        //   if (!errorRes.error || !errorRes.error.error) {
        //     return throwError(errorMessage);
        //   }
        //   errorMessage = errorRes.error.error.message;
        this.eventAPI = "";
    }
    get appointmentsReceived() {
        if (!this.adminAppointmentReceived.value) {
            return [];
        }
        else {
            return this.adminAppointmentReceived.value;
        }
    }
    get images() {
        return this.imageSubject.value;
    }
    get upcomingEventsList() {
        if (this.upcomingEventsSubject.value === {}) {
            return [];
        }
        else {
            return this.upcomingEventsSubject.value;
        }
    }
    get eventsList() {
        return this.eventSubject.value;
    }
    get calendars() {
        return this.calSubject.value;
    }
    get users() {
        console.log(this.userSubject.value === {});
        console.log(this.userSubject.value);
        if (this.userSubject.value !== {}) {
            return this.userSubject.value;
        }
        else {
            return [];
        }
    }
    get majors() {
        console.log(this.majorSubject.value);
        if (this.majorSubject.value !== {}) {
            return this.majorSubject.value;
        }
        else {
            return [];
        }
    }
    getEmails() {
        this.isLoadingSubject.next(true);
        this.http
            .get("http://ec2-100-26-194-180.compute-1.amazonaws.com:8181/api/admin/getAllUsers")
            .pipe((Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(data => data),
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error)),
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(() => this.isLoadingSubject.next(false))))
            .subscribe((result) => {
            console.log(result);
            if (result.status == 200) {
                this.emailSubject.next(result.result);
            }
            if (result.status == 404) {
                this.emailSubject.next([]);
            }
        });
    }
    resetPassword(email) {
        this.isLoadingSubject.next(true);
        var formdata = new FormData();
        formdata.append("email", email);
        return this.http
            .post("http://ec2-100-26-194-180.compute-1.amazonaws.com:8181/api/auth/forgot", formdata)
            .pipe((Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(data => data), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(() => this.isLoadingSubject.next(false)));
    }
    submitPassword(obj) {
        this.isLoadingSubject.next(true);
        return this.http
            .post("http://ec2-100-26-194-180.compute-1.amazonaws.com:8181/api/auth/processResetPassword", obj)
            .pipe((Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(data => data), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(() => this.isLoadingSubject.next(false)));
    }
    updatePassword(obj) {
        this.isLoadingSubject.next(true);
        return this.http
            .put("http://ec2-100-26-194-180.compute-1.amazonaws.com:8181/api/admin/changePassword", obj)
            .pipe((Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(data => data), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(() => this.isLoadingSubject.next(false)));
    }
    registerUsers(file, role) {
        this.isLoadingSubject.next(true);
        var formdata = new FormData();
        formdata.append("file", file);
        console.log(formdata);
        console.log("file upload!");
        return this.http
            .post("http://ec2-100-26-194-180.compute-1.amazonaws.com:8181/api/file/uploadUser/" + role, formdata)
            .pipe((Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(data => data), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(() => this.isLoadingSubject.next(false)));
    }
    uploadImage(images) {
        console.log(images);
        var temp = [];
        const formData = new FormData();
        // for (let i = 0 ; i < images.length ; i++) {
        //   formData.append("file", images[i]);
        // }
        for (let img of images) {
            formData.append("file", img);
        }
        console.log(formData.get("file"));
        //this.isLoadingSubject.next(true);
        // return this.http.post<ApiResponse>(this.baseUrlAdmin+'uploadImage', image).pipe(
        //   (map(data=>data)),
        //   catchError(error => throwError(error)),
        //   finalize(()=>this.isLoadingSubject.next(false))
        // ).subscribe(result => {
        //   this.imageSubject.next(result.result);
        // });
        console.log(formData.get("file"));
        this.isLoadingSubject.next(true);
        return this.http
            .post(this.baseUrlAdmin + "uploadImages", formData)
            .pipe((Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(data => data), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(() => this.isLoadingSubject.next(false)));
    }
    getImgName() {
        this.isLoadingSubject.next(true);
        return this.http.get(this.baseUrlAdmin + "getallfiles").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(data => data), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(() => this.isLoadingSubject.next(false)));
    }
    getImageByName(name) {
        return this.http.get(this.baseUrlAdmin + "files/" + name);
    }
    getImages() {
        return this.http.get('http://ec2-100-26-194-180.compute-1.amazonaws.com:8181/api/auth/getImages');
    }
    addCourses(formData) {
        this.isLoadingSubject.next(true);
        return this.http
            .post(this.baseUrlAdmin + "uploadCourses", formData)
            .pipe((Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(data => data), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(() => this.isLoadingSubject.next(false)));
    }
    fetchUpcomingEvents() {
        this.isLoadingSubject.next(true);
        this.http
            .get("http://ec2-100-26-194-180.compute-1.amazonaws.com:8181/api/event/" + "upCommingEvents")
            .pipe((Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(data => data),
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error)),
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(() => this.isLoadingSubject.next(false))))
            .subscribe((result) => {
            if (result) {
                console.log(result);
                console.log(result.result);
                this.upcomingEventsSubject.next(result.result);
            }
            else {
                this.upcomingEventsSubject.next([]);
            }
        });
    }
    getMajors() {
        this.isLoadingSubject.next(true);
        this.http.get('http://ec2-100-26-194-180.compute-1.amazonaws.com:8181/api/group/getAllMajors').pipe((Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(data => data), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(() => this.isLoadingSubject.next(false))).subscribe(result => {
            this.majorSubject.next(result.result);
        });
    }
    fetchEvents() {
        this.isLoadingSubject.next(true);
        if (this.authService.user === "ROLE_USER") {
            this.eventAPI = this.baseUrlEvent + "user/allEvents";
        }
        else {
            this.eventAPI = this.baseUrlEvent + "faculty/allEvents";
        }
        this.http
            .get(this.eventAPI)
            .pipe((Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(data => data),
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])("theres an error" + error)),
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(() => this.isLoadingSubject.next(false))))
            .subscribe((result) => {
            if (result.status == 200 && result.result) {
                console.log(result);
                console.log(result.result);
                this.eventSubject.next(result.result);
            }
        });
    }
    storeEvent(obj) {
        this.isLoadingSubject.next(true);
        return this.http.post(this.baseUrlEvent + "set", obj).pipe((Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(data => data), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(() => this.isLoadingSubject.next(false)));
    }
    shareEvent(obj) {
        console.log(obj);
        this.isLoadingSubject.next(true);
        return this.http.post(this.baseUrlEvent + "share", obj).pipe((Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(data => data), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(() => this.isLoadingSubject.next(false)));
    }
    fetchCalendars() {
        this.isLoadingSubject.next(true);
        this.http
            .get(this.baseUrlCalendar + "allCalendars")
            .pipe((Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(data => data),
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error)),
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(() => this.isLoadingSubject.next(false))))
            .subscribe((result) => {
            if (result.result) {
                this.calSubject.next(result.result);
                this.calService.setCalendars(result.result);
            }
        });
    }
    userConfirmEvent(id) {
        this.isLoadingSubject.next(true);
        const obj = {
            id: id
        };
        return this.http
            .post(this.baseUrlEvent + "confirm/" + id, obj)
            .pipe((Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(data => data), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(() => this.isLoadingSubject.next(false)));
    }
    uploadMajors(formdata) {
        return this.http
            .post("http://ec2-100-26-194-180.compute-1.amazonaws.com:8181/api/admin/uploadCourses", formdata)
            .pipe((Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(data => data), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(() => this.isLoadingSubject.next(false)));
    }
    newCalendar(obj) {
        this.isLoadingSubject.next(true);
        return this.http
            .post(this.baseUrlCalendar + "create", obj)
            .pipe((Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(data => data),
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error)),
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(() => this.isLoadingSubject.next(false))));
    }
    shareCalenar(obj) {
        this.isLoadingSubject.next(true);
        return this.http
            .post(this.baseUrlCalendar + "share", obj)
            .pipe((Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(data => data),
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error)),
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(() => this.isLoadingSubject.next(false))));
    }
    updateCalendar(obj, id) {
        this.isLoadingSubject.next(true);
        return this.http
            .put(this.baseUrlCalendar + "edit/" + id, obj)
            .pipe((Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(data => data),
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error)),
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(() => this.isLoadingSubject.next(false))));
    }
    updateRoles(obj) {
        console.log(obj);
        this.isLoadingSubject.next(true);
        return this.http
            .put(this.baseUrlAdmin + "changeRole", obj)
            .pipe((Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(data => data),
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error)),
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(() => this.isLoadingSubject.next(false))));
    }
    uploadMajors2() {
        this.isLoadingSubject.next(true);
        return this.http
            .post(this.baseUrlAdmin + "uploadMajor", "")
            .pipe((Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(data => data), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(() => this.isLoadingSubject.next(false)));
    }
    deleteUsers(obj) {
        console.log(obj);
        this.isLoadingSubject.next(true);
        return this.http.post(this.baseUrlAdmin + 'deleteUser', obj).pipe((Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(data => data),
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error)),
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(() => this.isLoadingSubject.next(false))));
    }
    fetchUsers() {
        this.isLoadingSubject.next(true);
        this.http
            .get(this.baseUrlAdmin + "getAllUsers")
            .pipe((Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(data => data),
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error)),
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(() => this.isLoadingSubject.next(false))))
            .subscribe((result) => {
            console.log(result.result);
            if (result.result) {
                this.userSubject.next(result.result);
            }
            else {
                this.userSubject.next([]);
            }
        });
    }
    editEvent(id, obj) {
        console.log(obj);
        this.isLoadingSubject.next(true);
        return this.http
            .put(this.baseUrlEvent + "edit/" + id, obj)
            .pipe((Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(data => data),
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error)),
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(() => this.isLoadingSubject.next(false))));
    }
    deleteEvent(id) {
        console.log(id);
        this.isLoadingSubject.next(false);
        return this.http
            .delete(this.baseUrlEvent + "delete/" + id)
            .pipe((Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(data => data), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(() => this.isLoadingSubject.next(false)));
    }
    deleteCalendar(id) {
        this.isLoadingSubject.next(true);
        return this.http
            .delete(this.baseUrlCalendar + "delete/" + id)
            .pipe((Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(data => data), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(() => this.isLoadingSubject.next(false)));
    }
    emailSelectedMembers(obj) {
        this.isLoadingSubject.next(true);
        return this.http
            .post("http://ec2-100-26-194-180.compute-1.amazonaws.com:8181/api/group/" + "sendEmailToFew", obj)
            .pipe((Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(data => data), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(() => this.isLoadingSubject.next(false)));
    }
};
DataStorageService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _calendar_calendar_list_calendar_service__WEBPACK_IMPORTED_MODULE_6__["CalendarService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"] }
];
DataStorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
        src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
        _calendar_calendar_list_calendar_service__WEBPACK_IMPORTED_MODULE_6__["CalendarService"],
        _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"]])
], DataStorageService);



/***/ }),

/***/ "./src/app/home/shared/group-selection.css":
/*!*************************************************!*\
  !*** ./src/app/home/shared/group-selection.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-card {\r\n  /* max-width: 100%; */\r\n  margin: 10px;\r\n  /* border: #800029 solid 1px; */\r\n}\r\n\r\n.example-spacer {\r\n  flex: 1 1 auto;\r\n}\r\n\r\n.mat-toolbar {\r\n  background: white;\r\n}\r\n\r\n.group-select-wrap {\r\n  height: 50%;\r\n  overflow: auto\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9zaGFyZWQvZ3JvdXAtc2VsZWN0aW9uLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7RUFDWDtBQUNGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9zaGFyZWQvZ3JvdXAtc2VsZWN0aW9uLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWNhcmQge1xyXG4gIC8qIG1heC13aWR0aDogMTAwJTsgKi9cclxuICBtYXJnaW46IDEwcHg7XHJcbiAgLyogYm9yZGVyOiAjODAwMDI5IHNvbGlkIDFweDsgKi9cclxufVxyXG5cclxuLmV4YW1wbGUtc3BhY2VyIHtcclxuICBmbGV4OiAxIDEgYXV0bztcclxufVxyXG5cclxuLm1hdC10b29sYmFyIHtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxufVxyXG5cclxuLmdyb3VwLXNlbGVjdC13cmFwIHtcclxuICBoZWlnaHQ6IDUwJTtcclxuICBvdmVyZmxvdzogYXV0b1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/home/shared/group-selection.ts":
/*!************************************************!*\
  !*** ./src/app/home/shared/group-selection.ts ***!
  \************************************************/
/*! exports provided: GroupSelection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupSelection", function() { return GroupSelection; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _group_group_data_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../group/group-data-storage.service */ "./src/app/home/group/group-data-storage.service.ts");




let GroupSelection = class GroupSelection {
    constructor(ref, dialog, groupDataStorage) {
        this.ref = ref;
        this.dialog = dialog;
        this.groupDataStorage = groupDataStorage;
        this.searchText = "";
    }
    ngOnInit() {
        this.groups = [];
        this.tempGroups = [];
        this.ids = [];
        this.members = [];
        this.groupDataStorage.fetchGroup();
        this.groupDataStorage.isLoading.subscribe(loading => {
            if (!loading) {
                this.groups = this.groupDataStorage.groupLists;
            }
        });
        console.log(this.groups);
    }
    close() {
        this.ref.close(this.tempGroups);
    }
    addGroup(id) {
        // if (!this.ids.includes(id)) {
        //   this.ids.push(id);
        // } else {
        //   this.ids.splice(this.ids.indexOf(id), 1);
        // }
        console.log(id);
        this.groupDataStorage.displayGroupDetails(id).subscribe(result => {
            const obj = {
                id: id,
                emails: result.result.members
            };
            console.log(obj);
            if (!this.ids.includes(obj.id)) {
                this.ids.push(obj.id);
                this.tempGroups.push(obj);
            }
            else {
                this.ids.splice(this.ids.indexOf(id), 1);
                this.tempGroups.splice(this.ids.indexOf(id), 1);
            }
            console.log(this.tempGroups);
        });
        // for (let id of this.ids) {
        //   this.groupDataStorage.displayGroupDetails(id).subscribe(result => {
        //     console.log(result.result.members);
        //     for (let member of result.result.members) {
        //       this.members.push(member.email);
        //     }
        //   });
        //   console.log(this.members);
        // }ocsmoor@fm
    }
    cancel() {
        this.ref.close([]);
    }
};
GroupSelection.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"] },
    { type: _group_group_data_storage_service__WEBPACK_IMPORTED_MODULE_3__["GroupDataStorageService"] }
];
GroupSelection = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "group-selection",
        template: __webpack_require__(/*! raw-loader!./group-selection.html */ "./node_modules/raw-loader/index.js!./src/app/home/shared/group-selection.html"),
        styles: [__webpack_require__(/*! ./group-selection.css */ "./src/app/home/shared/group-selection.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"],
        _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"],
        _group_group_data_storage_service__WEBPACK_IMPORTED_MODULE_3__["GroupDataStorageService"]])
], GroupSelection);



/***/ }),

/***/ "./src/app/home/update-password/update-password.component.css":
/*!********************************************************************!*\
  !*** ./src/app/home/update-password/update-password.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".primary {\r\n  color: white;\r\n  background-color: #800029\r\n    /* border: #800029 solid 1px; */\r\n    /* background-color: blanchedalmond; */\r\n    /* width: 10%; */\r\n}\r\n\r\n.example-card {\r\n  box-shadow: 3px 3px 0px 1px #BD955A;\r\n  border: 2px solid #800029;\r\n  width: 250px;\r\n  margin: 30px auto;\r\n  padding: 20px;\r\n\r\n  /* padding-top: 20px; */\r\n}\r\n\r\n.example-full-width {\r\n  width: 100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS91cGRhdGUtcGFzc3dvcmQvdXBkYXRlLXBhc3N3b3JkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osd0JBQXdCO0lBQ3RCLCtCQUErQjtJQUMvQixzQ0FBc0M7SUFDdEMsZ0JBQWdCO0FBQ3BCOztBQUVBO0VBQ0UsbUNBQW1DO0VBQ25DLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGFBQWE7O0VBRWIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvaG9tZS91cGRhdGUtcGFzc3dvcmQvdXBkYXRlLXBhc3N3b3JkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJpbWFyeSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM4MDAwMjlcclxuICAgIC8qIGJvcmRlcjogIzgwMDAyOSBzb2xpZCAxcHg7ICovXHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBibGFuY2hlZGFsbW9uZDsgKi9cclxuICAgIC8qIHdpZHRoOiAxMCU7ICovXHJcbn1cclxuXHJcbi5leGFtcGxlLWNhcmQge1xyXG4gIGJveC1zaGFkb3c6IDNweCAzcHggMHB4IDFweCAjQkQ5NTVBO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICM4MDAwMjk7XHJcbiAgd2lkdGg6IDI1MHB4O1xyXG4gIG1hcmdpbjogMzBweCBhdXRvO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcblxyXG4gIC8qIHBhZGRpbmctdG9wOiAyMHB4OyAqL1xyXG59XHJcblxyXG4uZXhhbXBsZS1mdWxsLXdpZHRoIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/home/update-password/update-password.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/home/update-password/update-password.component.ts ***!
  \*******************************************************************/
/*! exports provided: UpdatePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatePasswordComponent", function() { return UpdatePasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_data_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/data-storage.service */ "./src/app/home/shared/data-storage.service.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");






let UpdatePasswordComponent = class UpdatePasswordComponent {
    constructor(formBuilder, router, route, dataStorageService, _snackbar) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.route = route;
        this.dataStorageService = dataStorageService;
        this._snackbar = _snackbar;
    }
    ngOnInit() {
        this.updatePasswordForm = this.formBuilder.group({
            newPassword: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            confirmNewPassword: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    onSubmit() {
        const formValues = this.updatePasswordForm.value;
        if (this.updatePasswordForm.invalid) {
            return;
        }
        const updatePasswordObj = {
            password: formValues.confirmNewPassword
        };
        console.log(updatePasswordObj);
        this.dataStorageService
            .updatePassword(updatePasswordObj)
            .subscribe(result => {
            console.log(result);
            if (result) {
                this._snackbar.open(result.message, "close", {
                    duration: 5000,
                    panelClass: ["standard"]
                });
                this.router.navigate(["home"]);
            }
            else {
                this._snackbar.open(result.message, "close", {
                    duration: 5000,
                    panelClass: ["delete"]
                });
            }
        });
    }
};
UpdatePasswordComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _shared_data_storage_service__WEBPACK_IMPORTED_MODULE_4__["DataStorageService"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }
];
UpdatePasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-update-password",
        template: __webpack_require__(/*! raw-loader!./update-password.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/update-password/update-password.component.html"),
        styles: [__webpack_require__(/*! ./update-password.component.css */ "./src/app/home/update-password/update-password.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _shared_data_storage_service__WEBPACK_IMPORTED_MODULE_4__["DataStorageService"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]])
], UpdatePasswordComponent);



/***/ }),

/***/ "./src/app/home/vertical-navigation/user-manual/admin/admin.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/home/vertical-navigation/user-manual/admin/admin.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvdmVydGljYWwtbmF2aWdhdGlvbi91c2VyLW1hbnVhbC9hZG1pbi9hZG1pbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/vertical-navigation/user-manual/admin/admin.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/home/vertical-navigation/user-manual/admin/admin.component.ts ***!
  \*******************************************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AdminComponent = class AdminComponent {
    constructor() { }
    ngOnInit() {
    }
};
AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin',
        template: __webpack_require__(/*! raw-loader!./admin.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/vertical-navigation/user-manual/admin/admin.component.html"),
        styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/home/vertical-navigation/user-manual/admin/admin.component.css"), __webpack_require__(/*! ../user-manual.component.css */ "./src/app/home/vertical-navigation/user-manual/user-manual.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AdminComponent);



/***/ }),

/***/ "./src/app/home/vertical-navigation/user-manual/appt/appt.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/home/vertical-navigation/user-manual/appt/appt.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvdmVydGljYWwtbmF2aWdhdGlvbi91c2VyLW1hbnVhbC9hcHB0L2FwcHQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/home/vertical-navigation/user-manual/appt/appt.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/home/vertical-navigation/user-manual/appt/appt.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ApptComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApptComponent", function() { return ApptComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/auth/auth.service */ "./src/app/auth/auth.service.ts");



let ApptComponent = class ApptComponent {
    constructor(authService) {
        this.authService = authService;
    }
    ngOnInit() {
        this.role = this.authService.user;
    }
};
ApptComponent.ctorParameters = () => [
    { type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
ApptComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-appt',
        template: __webpack_require__(/*! raw-loader!./appt.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/vertical-navigation/user-manual/appt/appt.component.html"),
        styles: [__webpack_require__(/*! ./appt.component.css */ "./src/app/home/vertical-navigation/user-manual/appt/appt.component.css"), __webpack_require__(/*! ../user-manual.component.css */ "./src/app/home/vertical-navigation/user-manual/user-manual.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
], ApptComponent);



/***/ }),

/***/ "./src/app/home/vertical-navigation/user-manual/brdcast/brdcast.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/home/vertical-navigation/user-manual/brdcast/brdcast.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvdmVydGljYWwtbmF2aWdhdGlvbi91c2VyLW1hbnVhbC9icmRjYXN0L2JyZGNhc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/home/vertical-navigation/user-manual/brdcast/brdcast.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/home/vertical-navigation/user-manual/brdcast/brdcast.component.ts ***!
  \***********************************************************************************/
/*! exports provided: BrdcastComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrdcastComponent", function() { return BrdcastComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BrdcastComponent = class BrdcastComponent {
    constructor() { }
    ngOnInit() {
    }
};
BrdcastComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-brdcast',
        template: __webpack_require__(/*! raw-loader!./brdcast.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/vertical-navigation/user-manual/brdcast/brdcast.component.html"),
        styles: [__webpack_require__(/*! ./brdcast.component.css */ "./src/app/home/vertical-navigation/user-manual/brdcast/brdcast.component.css"), __webpack_require__(/*! ../user-manual.component.css */ "./src/app/home/vertical-navigation/user-manual/user-manual.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], BrdcastComponent);



/***/ }),

/***/ "./src/app/home/vertical-navigation/user-manual/cal/cal.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/home/vertical-navigation/user-manual/cal/cal.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvdmVydGljYWwtbmF2aWdhdGlvbi91c2VyLW1hbnVhbC9jYWwvY2FsLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/home/vertical-navigation/user-manual/cal/cal.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/home/vertical-navigation/user-manual/cal/cal.component.ts ***!
  \***************************************************************************/
/*! exports provided: CalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalComponent", function() { return CalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CalComponent = class CalComponent {
    constructor() { }
    ngOnInit() {
    }
};
CalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cal',
        template: __webpack_require__(/*! raw-loader!./cal.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/vertical-navigation/user-manual/cal/cal.component.html"),
        styles: [__webpack_require__(/*! ./cal.component.css */ "./src/app/home/vertical-navigation/user-manual/cal/cal.component.css"), __webpack_require__(/*! ../user-manual.component.css */ "./src/app/home/vertical-navigation/user-manual/user-manual.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CalComponent);



/***/ }),

/***/ "./src/app/home/vertical-navigation/user-manual/grps/grps.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/home/vertical-navigation/user-manual/grps/grps.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvdmVydGljYWwtbmF2aWdhdGlvbi91c2VyLW1hbnVhbC9ncnBzL2dycHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/home/vertical-navigation/user-manual/grps/grps.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/home/vertical-navigation/user-manual/grps/grps.component.ts ***!
  \*****************************************************************************/
/*! exports provided: GrpsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GrpsComponent", function() { return GrpsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let GrpsComponent = class GrpsComponent {
    constructor() { }
    ngOnInit() {
    }
};
GrpsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-grps',
        template: __webpack_require__(/*! raw-loader!./grps.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/vertical-navigation/user-manual/grps/grps.component.html"),
        styles: [__webpack_require__(/*! ./grps.component.css */ "./src/app/home/vertical-navigation/user-manual/grps/grps.component.css"), __webpack_require__(/*! ../user-manual.component.css */ "./src/app/home/vertical-navigation/user-manual/user-manual.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], GrpsComponent);



/***/ }),

/***/ "./src/app/home/vertical-navigation/user-manual/manual-nav/manual-nav.component.css":
/*!******************************************************************************************!*\
  !*** ./src/app/home/vertical-navigation/user-manual/manual-nav/manual-nav.component.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n    margin-top: 10px;\r\n    margin-left: 10px;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS92ZXJ0aWNhbC1uYXZpZ2F0aW9uL3VzZXItbWFudWFsL21hbnVhbC1uYXYvbWFudWFsLW5hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtFQUNuQiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvdmVydGljYWwtbmF2aWdhdGlvbi91c2VyLW1hbnVhbC9tYW51YWwtbmF2L21hbnVhbC1uYXYuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/home/vertical-navigation/user-manual/manual-nav/manual-nav.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/home/vertical-navigation/user-manual/manual-nav/manual-nav.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: ManualNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManualNavComponent", function() { return ManualNavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/auth/auth.service */ "./src/app/auth/auth.service.ts");




let ManualNavComponent = class ManualNavComponent {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    ngOnInit() {
        this.currentRole = this.authService.user;
    }
    admin() {
        this.router.navigate(["home/user-manual/administration"]);
    }
    appointment() {
        this.router.navigate(["home/user-manual/appointments"]);
    }
    calendar() {
        this.router.navigate(["home/user-manual/calendar"]);
    }
    broadcast() {
        this.router.navigate(["home/user-manual/broadcast"]);
    }
    groups() {
        this.router.navigate(["home/user-manual/groups"]);
    }
};
ManualNavComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
ManualNavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-manual-nav',
        template: __webpack_require__(/*! raw-loader!./manual-nav.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/vertical-navigation/user-manual/manual-nav/manual-nav.component.html"),
        styles: [__webpack_require__(/*! ./manual-nav.component.css */ "./src/app/home/vertical-navigation/user-manual/manual-nav/manual-nav.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
], ManualNavComponent);



/***/ }),

/***/ "./src/app/home/vertical-navigation/user-manual/manual-start/manual-start.component.css":
/*!**********************************************************************************************!*\
  !*** ./src/app/home/vertical-navigation/user-manual/manual-start/manual-start.component.css ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvdmVydGljYWwtbmF2aWdhdGlvbi91c2VyLW1hbnVhbC9tYW51YWwtc3RhcnQvbWFudWFsLXN0YXJ0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/home/vertical-navigation/user-manual/manual-start/manual-start.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/home/vertical-navigation/user-manual/manual-start/manual-start.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: ManualStartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManualStartComponent", function() { return ManualStartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ManualStartComponent = class ManualStartComponent {
    constructor() { }
    ngOnInit() {
    }
};
ManualStartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-manual-start',
        template: __webpack_require__(/*! raw-loader!./manual-start.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/vertical-navigation/user-manual/manual-start/manual-start.component.html"),
        styles: [__webpack_require__(/*! ./manual-start.component.css */ "./src/app/home/vertical-navigation/user-manual/manual-start/manual-start.component.css"), __webpack_require__(/*! ../user-manual.component.css */ "./src/app/home/vertical-navigation/user-manual/user-manual.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ManualStartComponent);



/***/ }),

/***/ "./src/app/home/vertical-navigation/user-manual/user-manual.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/home/vertical-navigation/user-manual/user-manual.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n    margin-left:15%;\r\n    margin-right:15%;\r\n    margin-bottom:2em;\r\n}\r\n\r\n.heading{\r\n    text-align:center;\r\n}\r\n\r\n.subheading{\r\n    font-size: 1em;\r\n}\r\n\r\n.image{\r\n    width: 75%;\r\n    height:12em;\r\n}\r\n\r\n.list{\r\n    width:75%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS92ZXJ0aWNhbC1uYXZpZ2F0aW9uL3VzZXItbWFudWFsL3VzZXItbWFudWFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsV0FBVztBQUNmOztBQUVBO0lBQ0ksU0FBUztBQUNiIiwiZmlsZSI6InNyYy9hcHAvaG9tZS92ZXJ0aWNhbC1uYXZpZ2F0aW9uL3VzZXItbWFudWFsL3VzZXItbWFudWFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xyXG4gICAgbWFyZ2luLWxlZnQ6MTUlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OjE1JTtcclxuICAgIG1hcmdpbi1ib3R0b206MmVtO1xyXG59XHJcblxyXG4uaGVhZGluZ3tcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG59XHJcblxyXG4uc3ViaGVhZGluZ3tcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG59XHJcblxyXG4uaW1hZ2V7XHJcbiAgICB3aWR0aDogNzUlO1xyXG4gICAgaGVpZ2h0OjEyZW07XHJcbn1cclxuXHJcbi5saXN0e1xyXG4gICAgd2lkdGg6NzUlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/home/vertical-navigation/user-manual/user-manual.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/home/vertical-navigation/user-manual/user-manual.component.ts ***!
  \*******************************************************************************/
/*! exports provided: UserManualComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserManualComponent", function() { return UserManualComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UserManualComponent = class UserManualComponent {
    constructor() { }
    ngOnInit() {
    }
};
UserManualComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-manual',
        template: __webpack_require__(/*! raw-loader!./user-manual.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/vertical-navigation/user-manual/user-manual.component.html"),
        styles: [__webpack_require__(/*! ./user-manual.component.css */ "./src/app/home/vertical-navigation/user-manual/user-manual.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], UserManualComponent);



/***/ }),

/***/ "./src/app/home/vertical-navigation/vertical-navigation.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/home/vertical-navigation/vertical-navigation.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav-container {\r\n  height: 100%;\r\n  /* margin: 10px */\r\n}\r\n\r\n.sidenav {\r\n  width: 200px;\r\n}\r\n\r\n.sidenav .mat-toolbar {\r\n  background: inherit;\r\n}\r\n\r\n.mat-toolbar.mat-primary {\r\n  position: -webkit-sticky;\r\n  position: sticky;\r\n  top: 0;\r\n  z-index: 1;\r\n}\r\n\r\n.mat-toolbar.mat-primary {\r\n  background: rgb(185, 163, 90);\r\n  color: #800029;\r\n  z-index: 999999;\r\n}\r\n\r\n.mat-list-base .mat-list-item {\r\n  color: #800029;\r\n  /* background-color: #BD955A; */\r\n\r\n}\r\n\r\n.maroon {\r\n  color: #800029;\r\n}\r\n\r\n.mat-raised-button {\r\n  color: rgb(243, 242, 241);\r\n  background: #800029;\r\n}\r\n\r\n.example-spacer {\r\n  flex: 1 1 auto;\r\n}\r\n\r\n.mat-menu-item:hover:not([disabled]) {\r\n  color: white;\r\n  background: #800029;\r\n}\r\n\r\n.mat-nav-list .mat-list-item:hover {\r\n  color: white;\r\n  background: #800029;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS92ZXJ0aWNhbC1uYXZpZ2F0aW9uL3ZlcnRpY2FsLW5hdmlnYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx3QkFBZ0I7RUFBaEIsZ0JBQWdCO0VBQ2hCLE1BQU07RUFDTixVQUFVO0FBQ1o7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsK0JBQStCOztBQUVqQzs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS92ZXJ0aWNhbC1uYXZpZ2F0aW9uL3ZlcnRpY2FsLW5hdmlnYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWRlbmF2LWNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIC8qIG1hcmdpbjogMTBweCAqL1xyXG59XHJcblxyXG4uc2lkZW5hdiB7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG59XHJcblxyXG4uc2lkZW5hdiAubWF0LXRvb2xiYXIge1xyXG4gIGJhY2tncm91bmQ6IGluaGVyaXQ7XHJcbn1cclxuXHJcbi5tYXQtdG9vbGJhci5tYXQtcHJpbWFyeSB7XHJcbiAgcG9zaXRpb246IHN0aWNreTtcclxuICB0b3A6IDA7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG5cclxuLm1hdC10b29sYmFyLm1hdC1wcmltYXJ5IHtcclxuICBiYWNrZ3JvdW5kOiByZ2IoMTg1LCAxNjMsIDkwKTtcclxuICBjb2xvcjogIzgwMDAyOTtcclxuICB6LWluZGV4OiA5OTk5OTk7XHJcbn1cclxuXHJcbi5tYXQtbGlzdC1iYXNlIC5tYXQtbGlzdC1pdGVtIHtcclxuICBjb2xvcjogIzgwMDAyOTtcclxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjQkQ5NTVBOyAqL1xyXG5cclxufVxyXG5cclxuLm1hcm9vbiB7XHJcbiAgY29sb3I6ICM4MDAwMjk7XHJcbn1cclxuXHJcbi5tYXQtcmFpc2VkLWJ1dHRvbiB7XHJcbiAgY29sb3I6IHJnYigyNDMsIDI0MiwgMjQxKTtcclxuICBiYWNrZ3JvdW5kOiAjODAwMDI5O1xyXG59XHJcblxyXG4uZXhhbXBsZS1zcGFjZXIge1xyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG59XHJcblxyXG4ubWF0LW1lbnUtaXRlbTpob3Zlcjpub3QoW2Rpc2FibGVkXSkge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kOiAjODAwMDI5O1xyXG59XHJcblxyXG4ubWF0LW5hdi1saXN0IC5tYXQtbGlzdC1pdGVtOmhvdmVyIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZDogIzgwMDAyOTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/home/vertical-navigation/vertical-navigation.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/home/vertical-navigation/vertical-navigation.component.ts ***!
  \***************************************************************************/
/*! exports provided: VerticalNavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerticalNavigationComponent", function() { return VerticalNavigationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/auth/token-storage.service */ "./src/app/auth/token-storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");






// import { Observable } from "rxjs";
// import { map, shareReplay } from "rxjs/operators";
let VerticalNavigationComponent = class VerticalNavigationComponent {
    // isHandset$: Observable<boolean> = this.breakpointObserver
    //   .observe(Breakpoints.Web)
    //   .pipe(
    //     map(result => result.matches),
    //     shareReplay()
    //   );
    // constructor(private breakpointObserver: BreakpointObserver) {}
    constructor(tokenStorageService, router, authService, _snackbar) {
        this.tokenStorageService = tokenStorageService;
        this.router = router;
        this.authService = authService;
        this._snackbar = _snackbar;
    }
    ngOnInit() {
        this.nameOfUser = this.authService.username;
        this.userRole = this.authService.user;
        console.log(this.nameOfUser);
    }
    logout() {
        this.tokenStorageService.signOut();
        this._snackbar.open("You have been successfully logged out!", "close", {
            duration: 4000,
            panelClass: ["standard"]
        });
        this.router.navigate(["/login"]);
    }
    userManual() {
        this.router.navigate(["home/user-manual"]);
    }
    updatePassword() {
        this.router.navigate(["forgot-password"]);
    }
};
VerticalNavigationComponent.ctorParameters = () => [
    { type: src_app_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }
];
VerticalNavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-vertical-navigation",
        template: __webpack_require__(/*! raw-loader!./vertical-navigation.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/vertical-navigation/vertical-navigation.component.html"),
        styles: [__webpack_require__(/*! ./vertical-navigation.component.css */ "./src/app/home/vertical-navigation/vertical-navigation.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
        _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]])
], VerticalNavigationComponent);



/***/ }),

/***/ "./src/app/loading-spinner/loading-spinner.component.css":
/*!***************************************************************!*\
  !*** ./src/app/loading-spinner/loading-spinner.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".lds-ring {\r\n  display: inline-block;\r\n  position: relative;\r\n  width: 64px;\r\n  height: 64px;\r\n}\r\n\r\n.lds-ring div {\r\n  box-sizing: border-box;\r\n  display: block;\r\n  position: absolute;\r\n  width: 51px;\r\n  height: 51px;\r\n  margin: 6px;\r\n  border: 6px solid #fff;\r\n  border-radius: 50%;\r\n  -webkit-animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\r\n          animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\r\n  border-color: #fff transparent transparent transparent;\r\n}\r\n\r\n.lds-ring div:nth-child(1) {\r\n  -webkit-animation-delay: -0.45s;\r\n          animation-delay: -0.45s;\r\n}\r\n\r\n.lds-ring div:nth-child(2) {\r\n  -webkit-animation-delay: -0.3s;\r\n          animation-delay: -0.3s;\r\n}\r\n\r\n.lds-ring div:nth-child(3) {\r\n  -webkit-animation-delay: -0.15s;\r\n          animation-delay: -0.15s;\r\n}\r\n\r\n@-webkit-keyframes lds-ring {\r\n  0% {\r\n    -webkit-transform: rotate(0deg);\r\n            transform: rotate(0deg);\r\n  }\r\n\r\n  100% {\r\n    -webkit-transform: rotate(360deg);\r\n            transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n@keyframes lds-ring {\r\n  0% {\r\n    -webkit-transform: rotate(0deg);\r\n            transform: rotate(0deg);\r\n  }\r\n\r\n  100% {\r\n    -webkit-transform: rotate(360deg);\r\n            transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9hZGluZy1zcGlubmVyL2xvYWRpbmctc3Bpbm5lci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixzRUFBOEQ7VUFBOUQsOERBQThEO0VBQzlELHNEQUFzRDtBQUN4RDs7QUFFQTtFQUNFLCtCQUF1QjtVQUF2Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSw4QkFBc0I7VUFBdEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsK0JBQXVCO1VBQXZCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFO0lBQ0UsK0JBQXVCO1lBQXZCLHVCQUF1QjtFQUN6Qjs7RUFFQTtJQUNFLGlDQUF5QjtZQUF6Qix5QkFBeUI7RUFDM0I7QUFDRjs7QUFSQTtFQUNFO0lBQ0UsK0JBQXVCO1lBQXZCLHVCQUF1QjtFQUN6Qjs7RUFFQTtJQUNFLGlDQUF5QjtZQUF6Qix5QkFBeUI7RUFDM0I7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2xvYWRpbmctc3Bpbm5lci9sb2FkaW5nLXNwaW5uZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sZHMtcmluZyB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogNjRweDtcclxuICBoZWlnaHQ6IDY0cHg7XHJcbn1cclxuXHJcbi5sZHMtcmluZyBkaXYge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiA1MXB4O1xyXG4gIGhlaWdodDogNTFweDtcclxuICBtYXJnaW46IDZweDtcclxuICBib3JkZXI6IDZweCBzb2xpZCAjZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBhbmltYXRpb246IGxkcy1yaW5nIDEuMnMgY3ViaWMtYmV6aWVyKDAuNSwgMCwgMC41LCAxKSBpbmZpbml0ZTtcclxuICBib3JkZXItY29sb3I6ICNmZmYgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5sZHMtcmluZyBkaXY6bnRoLWNoaWxkKDEpIHtcclxuICBhbmltYXRpb24tZGVsYXk6IC0wLjQ1cztcclxufVxyXG5cclxuLmxkcy1yaW5nIGRpdjpudGgtY2hpbGQoMikge1xyXG4gIGFuaW1hdGlvbi1kZWxheTogLTAuM3M7XHJcbn1cclxuXHJcbi5sZHMtcmluZyBkaXY6bnRoLWNoaWxkKDMpIHtcclxuICBhbmltYXRpb24tZGVsYXk6IC0wLjE1cztcclxufVxyXG5cclxuQGtleWZyYW1lcyBsZHMtcmluZyB7XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgfVxyXG5cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/loading-spinner/loading-spinner.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/loading-spinner/loading-spinner.component.ts ***!
  \**************************************************************/
/*! exports provided: LoadingSpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingSpinnerComponent", function() { return LoadingSpinnerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LoadingSpinnerComponent = class LoadingSpinnerComponent {
    constructor() { }
    ngOnInit() {
    }
};
LoadingSpinnerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-loading-spinner',
        template: __webpack_require__(/*! raw-loader!./loading-spinner.component.html */ "./node_modules/raw-loader/index.js!./src/app/loading-spinner/loading-spinner.component.html"),
        styles: [__webpack_require__(/*! ./loading-spinner.component.css */ "./src/app/loading-spinner/loading-spinner.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], LoadingSpinnerComponent);



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .error {\r\n  color: red\r\n}\r\n\r\n.success {\r\n  color: green\r\n}\r\n\r\n.login-container {\r\n  box-shadow: 3px 3px 0px 1px #BD955A;\r\n  border: 3px solid #800029;\r\n  width: 300px;\r\n  margin: 20px auto;\r\n  padding: 10px\r\n}\r\n\r\n.form-control:focus {\r\n  color: #495057;\r\n  background-color: #fff;\r\n  border-color: #800029;\r\n  outline: 0;\r\n  box-shadow: 0 0 0 0.1rem #BD955A;\r\n}\r\n\r\n.form-control {\r\n  border-color: #800029;\r\n\r\n}\r\n\r\n.container {\r\n  background-image: linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url(https://webservices.ulm.edu/apps/system/files/logos/ulm_academic_maroon_white.png);\r\n  background-size: contain;\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  background-attachment: scroll;\r\n  opacity: 0.4;\r\n} */\r\n\r\n.primary {\r\n  color: white;\r\n  background-color: #800029\r\n}\r\n\r\n.example-card {\r\n  box-shadow: 3px 3px 0px 1px #BD955A;\r\n  border: 2px solid #800029;\r\n  width: 250px;\r\n  margin: 30px auto;\r\n  padding: 20px;\r\n}\r\n\r\n.example-full-width {\r\n  width: 100%;\r\n}\r\n\r\n/* .container {\r\n  background-image: linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url(https://webservices.ulm.edu/apps/system/files/logos/ulm_academic_maroon_white.png);\r\n  background-size: contain;\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  background-attachment: scroll;\r\n  opacity: 0.4;\r\n} */\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBb0NHOztBQUVIO0VBQ0UsWUFBWTtFQUNaO0FBQ0Y7O0FBRUE7RUFDRSxtQ0FBbUM7RUFDbkMseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBOzs7Ozs7O0dBT0ciLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLmVycm9yIHtcclxuICBjb2xvcjogcmVkXHJcbn1cclxuXHJcbi5zdWNjZXNzIHtcclxuICBjb2xvcjogZ3JlZW5cclxufVxyXG5cclxuLmxvZ2luLWNvbnRhaW5lciB7XHJcbiAgYm94LXNoYWRvdzogM3B4IDNweCAwcHggMXB4ICNCRDk1NUE7XHJcbiAgYm9yZGVyOiAzcHggc29saWQgIzgwMDAyOTtcclxuICB3aWR0aDogMzAwcHg7XHJcbiAgbWFyZ2luOiAyMHB4IGF1dG87XHJcbiAgcGFkZGluZzogMTBweFxyXG59XHJcblxyXG4uZm9ybS1jb250cm9sOmZvY3VzIHtcclxuICBjb2xvcjogIzQ5NTA1NztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlci1jb2xvcjogIzgwMDAyOTtcclxuICBvdXRsaW5lOiAwO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMXJlbSAjQkQ5NTVBO1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9sIHtcclxuICBib3JkZXItY29sb3I6ICM4MDAwMjk7XHJcblxyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSkpLCB1cmwoaHR0cHM6Ly93ZWJzZXJ2aWNlcy51bG0uZWR1L2FwcHMvc3lzdGVtL2ZpbGVzL2xvZ29zL3VsbV9hY2FkZW1pY19tYXJvb25fd2hpdGUucG5nKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBzY3JvbGw7XHJcbiAgb3BhY2l0eTogMC40O1xyXG59ICovXHJcblxyXG4ucHJpbWFyeSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM4MDAwMjlcclxufVxyXG5cclxuLmV4YW1wbGUtY2FyZCB7XHJcbiAgYm94LXNoYWRvdzogM3B4IDNweCAwcHggMXB4ICNCRDk1NUE7XHJcbiAgYm9yZGVyOiAycHggc29saWQgIzgwMDAyOTtcclxuICB3aWR0aDogMjUwcHg7XHJcbiAgbWFyZ2luOiAzMHB4IGF1dG87XHJcbiAgcGFkZGluZzogMjBweDtcclxufVxyXG5cclxuLmV4YW1wbGUtZnVsbC13aWR0aCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi8qIC5jb250YWluZXIge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSksIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KSksIHVybChodHRwczovL3dlYnNlcnZpY2VzLnVsbS5lZHUvYXBwcy9zeXN0ZW0vZmlsZXMvbG9nb3MvdWxtX2FjYWRlbWljX21hcm9vbl93aGl0ZS5wbmcpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IHNjcm9sbDtcclxuICBvcGFjaXR5OiAwLjQ7XHJcbn0gKi9cclxuIl19 */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _auth_token_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../auth/token-storage.service */ "./src/app/auth/token-storage.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");







let LoginComponent = class LoginComponent {
    // isLoggedIn = false;
    // isLoginFailed = false;
    // isLoading = false;
    // errorMessage = "";
    // roles: string[] = [];
    constructor(authService, tokenStorage, formBuilder, dialog, router) {
        this.authService = authService;
        this.tokenStorage = tokenStorage;
        this.formBuilder = formBuilder;
        this.dialog = dialog;
        this.router = router;
    }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    }
    forgotPassword() {
        this.router.navigate(["forgot-password"]);
    }
    onSubmit() {
        const loginFormValues = this.loginForm.value;
        if (this.loginForm.invalid) {
            return;
        }
        const loginPayload = {
            username: loginFormValues.email,
            password: loginFormValues.password
        };
        this.authService.attemptAuth(loginPayload);
        this.authService.isLoggedIn.subscribe(result => {
            if (result) {
                // this.isLoginFailed = false;
                this.router.navigate(["home"]);
            }
            //  else if (!result) {
            //   console.log(this.isLoginFailed);
            //   this.isLoginFailed = true;
            //   console.log(this.isLoginFailed);
            // }
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _auth_token_storage_service__WEBPACK_IMPORTED_MODULE_5__["TokenStorageService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-login",
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
        _auth_token_storage_service__WEBPACK_IMPORTED_MODULE_5__["TokenStorageService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], LoginComponent);



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .container {\r\n  background-image: linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url(https://webservices.ulm.edu/apps/system/files/logos/ulm_academic_maroon_white.png);\r\n  background-size: contain;\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  background-attachment: scroll;\r\n  opacity:0.4;\r\n} */\r\n\r\n\r\n\r\n\r\n\r\n.wrap>*{\r\n  width:80%;\r\n  margin-left:10%;\r\n  margin-right: 10%;\r\n}\r\n\r\n\r\n\r\n\r\n\r\nmat-form-field{\r\n  width: 100%;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.bottom-row{\r\n  position:absolute;\r\n  bottom:0;\r\n  margin-bottom:7%;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n/* .example-card {\r\n  box-shadow: 3px 3px 0px 1px #BD955A;\r\n  border: 2px solid #800029;\r\n  width: 250px;\r\n  margin: 30px auto;\r\n  padding: 20px;\r\n} */\r\n\r\n\r\n\r\n\r\n\r\n.example-full-width {\r\n  width: 100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztHQU9HOzs7Ozs7QUFNSDtFQUNFLFNBQVM7RUFDVCxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COzs7Ozs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7Ozs7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsUUFBUTtFQUNSLGdCQUFnQjtBQUNsQjs7Ozs7O0FBRUE7Ozs7OztHQU1HOzs7Ozs7QUFFSDtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAuY29udGFpbmVyIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSkpLCB1cmwoaHR0cHM6Ly93ZWJzZXJ2aWNlcy51bG0uZWR1L2FwcHMvc3lzdGVtL2ZpbGVzL2xvZ29zL3VsbV9hY2FkZW1pY19tYXJvb25fd2hpdGUucG5nKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBzY3JvbGw7XHJcbiAgb3BhY2l0eTowLjQ7XHJcbn0gKi9cclxuXHJcblxyXG5cclxuXHJcblxyXG4ud3JhcD4qe1xyXG4gIHdpZHRoOjgwJTtcclxuICBtYXJnaW4tbGVmdDoxMCU7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMCU7XHJcbn1cclxuXHJcbm1hdC1mb3JtLWZpZWxke1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uYm90dG9tLXJvd3tcclxuICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICBib3R0b206MDtcclxuICBtYXJnaW4tYm90dG9tOjclO1xyXG59XHJcblxyXG4vKiAuZXhhbXBsZS1jYXJkIHtcclxuICBib3gtc2hhZG93OiAzcHggM3B4IDBweCAxcHggI0JEOTU1QTtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjODAwMDI5O1xyXG4gIHdpZHRoOiAyNTBweDtcclxuICBtYXJnaW46IDMwcHggYXV0bztcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59ICovXHJcblxyXG4uZXhhbXBsZS1mdWxsLXdpZHRoIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _auth_signup_info__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../auth/signup-info */ "./src/app/auth/signup-info.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var _home_shared_data_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../home/shared/data-storage.service */ "./src/app/home/shared/data-storage.service.ts");








let RegisterComponent = class RegisterComponent {
    constructor(authService, formBuilder, _snackBar, router, dataStorage) {
        this.authService = authService;
        this.formBuilder = formBuilder;
        this._snackBar = _snackBar;
        this.router = router;
        this.dataStorage = dataStorage;
        this.isSignedUp = false;
        this.isSignUpFailed = false;
        this.errorMessage = "";
        this.isLoading = false;
    }
    ngOnInit() {
        // this.signupForm = new FormGroup({
        //   fname: new FormControl("", [Validators.required]),
        //   lname: new FormControl("", [Validators.required]),
        //   email: new FormControl("", [Validators.required, Validators.email]),
        //   password: new FormControl("", [Validators.required]),
        //   confirmPwd: new FormControl("", [Validators.required])
        // });
        this.signupForm = this.formBuilder.group({
            role: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            fname: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            lname: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            confirmPwd: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
    }
    onSubmit() {
        const signupFormValues = this.signupForm.value;
        console.log(signupFormValues);
        if (this.signupForm.invalid) {
            return;
        }
        this.signupPayload = new _auth_signup_info__WEBPACK_IMPORTED_MODULE_5__["SignUpInfo"](signupFormValues.fname + " " + signupFormValues.lname, signupFormValues.email, signupFormValues.email, signupFormValues.password, [signupFormValues.role]);
        console.log(this.signupPayload);
        this.isLoading = true;
        this.authService.signUp(this.signupPayload).subscribe(data => {
            console.log(data);
            this._snackBar.open("Successfully registered!", "close", {
                duration: 3500,
                panelClass: ["standard"]
            });
            this.isSignedUp = true;
            this.isLoading = false;
            this.isSignUpFailed = false;
        }, error => {
            console.log(error);
            this.errorMessage = error.error.message;
            this.isLoading = false;
            this.isSignUpFailed = true;
        });
        this.signupForm.reset();
        this.signupForm.clearValidators();
        this.dataStorage.fetchUsers();
    }
    clearForm() {
        this.signupForm.reset();
        this.signupForm.clearValidators();
    }
};
RegisterComponent.ctorParameters = () => [
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _home_shared_data_storage_service__WEBPACK_IMPORTED_MODULE_7__["DataStorageService"] }
];
RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-register",
        template: __webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/index.js!./src/app/register/register.component.html"),
        styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css"), __webpack_require__(/*! ../home/administration/register-users/register-users.component.css */ "./src/app/home/administration/register-users/register-users.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _home_shared_data_storage_service__WEBPACK_IMPORTED_MODULE_7__["DataStorageService"]])
], RegisterComponent);



/***/ }),

/***/ "./src/app/shared/email-dialog/email-dialog.component.css":
/*!****************************************************************!*\
  !*** ./src/app/shared/email-dialog/email-dialog.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form {\r\n  box-shadow: 3px 3px 0px 1px #BD955A;\r\n  border: 2px solid #800029;\r\n  width: 400px;\r\n  margin: 30px auto;\r\n  padding: 20px;\r\n}\r\n\r\n.example-full-width {\r\n  width: 100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2VtYWlsLWRpYWxvZy9lbWFpbC1kaWFsb2cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1DQUFtQztFQUNuQyx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvZW1haWwtZGlhbG9nL2VtYWlsLWRpYWxvZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtZm9ybSB7XHJcbiAgYm94LXNoYWRvdzogM3B4IDNweCAwcHggMXB4ICNCRDk1NUE7XHJcbiAgYm9yZGVyOiAycHggc29saWQgIzgwMDAyOTtcclxuICB3aWR0aDogNDAwcHg7XHJcbiAgbWFyZ2luOiAzMHB4IGF1dG87XHJcbiAgcGFkZGluZzogMjBweDtcclxufVxyXG5cclxuLmV4YW1wbGUtZnVsbC13aWR0aCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/shared/email-dialog/email-dialog.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/email-dialog/email-dialog.component.ts ***!
  \***************************************************************/
/*! exports provided: EmailDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailDialogComponent", function() { return EmailDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_home_shared_data_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/home/shared/data-storage.service */ "./src/app/home/shared/data-storage.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_home_appointment_shared_appointment_appointment_snackbar_appointment_snackbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/home/appointment/shared-appointment/appointment-snackbar/appointment-snackbar.component */ "./src/app/home/appointment/shared-appointment/appointment-snackbar/appointment-snackbar.component.ts");







let EmailDialogComponent = class EmailDialogComponent {
    constructor(router, dataStorageService, _snackbar) {
        this.router = router;
        this.dataStorageService = dataStorageService;
        this._snackbar = _snackbar;
        this.emailFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email
        ]);
    }
    ngOnInit() { }
    // onNoClick(): void {
    //   this.dialogRef.close();
    // }
    onSubmit() {
        // console.log(this.emailFormControl.value);
        this.dataStorageService
            .resetPassword(this.emailFormControl.value)
            .subscribe(result => {
            console.log(result);
            if (result) {
                if (result.status == 200) {
                    this._snackbar.openFromComponent(src_app_home_appointment_shared_appointment_appointment_snackbar_appointment_snackbar_component__WEBPACK_IMPORTED_MODULE_6__["AppointmentSnackbarComponent"], {
                        duration: 5000,
                        panelClass: ["standard"],
                        data: result.message
                    });
                }
            }
        });
        this.router.navigate(["/login"]);
    }
    cancel() {
        this.router.navigate(["/login"]);
    }
};
EmailDialogComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_home_shared_data_storage_service__WEBPACK_IMPORTED_MODULE_4__["DataStorageService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }
];
EmailDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-email-dialog",
        template: __webpack_require__(/*! raw-loader!./email-dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/email-dialog/email-dialog.component.html"),
        styles: [__webpack_require__(/*! ./email-dialog.component.css */ "./src/app/shared/email-dialog/email-dialog.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        src_app_home_shared_data_storage_service__WEBPACK_IMPORTED_MODULE_4__["DataStorageService"],
        _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]])
], EmailDialogComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Code\Team-Green-Capstone-project-\client-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map