webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./styles/Home.module.scss":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-3-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-3-2!(webpack)/resolve-url-loader??ref--5-oneOf-3-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-3-4!./styles/Home.module.scss ***!
  \*******************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n___CSS_LOADER_EXPORT___.push([module.i, \"@import url(https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@100&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".Home_home__Crkqx {\\n  display: grid;\\n  grid-template-columns: 1fr 2fr 1fr;\\n  margin-top: 200px;\\n}\\n.Home_home__header__2jgAG {\\n  font-size: 68px;\\n  color: #050505;\\n  grid-column: 2/3;\\n  padding-left: 100px;\\n}\\n.Home_home__btn__2qHFE {\\n  grid-column: 2/3;\\n  border: 1px solid black;\\n  border-radius: 8px;\\n  margin-top: 50px;\\n  margin-bottom: 50px;\\n}\\n.Home_home__btn__content__1JlMA {\\n  padding-left: 300px;\\n  color: #050505;\\n  padding-top: 20px;\\n  padding-bottom: 20px;\\n}\\n.Home_home__input__1pMFQ {\\n  grid-column: 2/3;\\n  display: flex;\\n}\\n.Home_home__input__1pMFQ input {\\n  border: 0;\\n  outline: 0;\\n  background: transparent;\\n  border-bottom: 1px solid black;\\n  padding-right: 200px;\\n  display: flex;\\n}\\n.Home_home__input__1pMFQ input::-webkit-input-placeholder {\\n  font-family: \\\"IBM Plex Mono\\\", monospace;\\n}\\n.Home_home__input__1pMFQ input:-moz-placeholder {\\n  font-family: \\\"IBM Plex Mono\\\", monospace;\\n}\\n.Home_home__input__1pMFQ input::-moz-placeholder {\\n  font-family: \\\"IBM Plex Mono\\\", monospace;\\n}\\n.Home_home__input__1pMFQ input:-ms-input-placeholder {\\n  font-family: \\\"IBM Plex Mono\\\", monospace;\\n}\\n.Home_home__input__btn__2f-Sk {\\n  border: 1px solid black;\\n  border-radius: 8px;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://Home.module.scss\",\"webpack://abstarct/_variables.scss\",\"webpack://abstarct/_mixin.scss\"],\"names\":[],\"mappings\":\"AACA;EACE,aAAA;EACA,kCAAA;EAEA,iBAAA;AAAF;AACE;EACE,eAAA;EACA,cCNI;EDOJ,gBAAA;EACA,mBAAA;AACJ;AACE;EACE,gBAAA;EACA,uBAAA;EACA,kBAAA;EACA,gBAAA;EACA,mBAAA;AACJ;AACI;EACE,mBAAA;EACA,cCnBE;EDoBF,iBAAA;EACA,oBAAA;AACN;AAEE;EACE,gBAAA;EACA,aAAA;AAAJ;AAEI;EACE,SAAA;EACA,UAAA;EACA,uBAAA;EACA,8BAAA;EACA,oBAAA;EACA,aAAA;AAAN;AEnCE;EFsCM,uCCtCM;ADsCd;AEnCE;EFmCM,uCCtCM;ADyCd;AEnCE;EFgCM,uCCtCM;AD4Cd;AEnCE;EF6BM,uCCtCM;AD+Cd;AANI;EACE,uBAAA;EACA,kBAAA;AAQN\",\"sourcesContent\":[\"@import \\\"../styles/abstarct/variables\\\", \\\"../styles/abstarct/mixin\\\";\\n.home {\\n  display: grid;\\n  grid-template-columns: 1fr 2fr 1fr;\\n\\n  margin-top: 200px;\\n  &__header {\\n    font-size: 68px;\\n    color: $black;\\n    grid-column: 2/3;\\n    padding-left: 100px;\\n  }\\n  &__btn {\\n    grid-column: 2/3;\\n    border: 1px solid black;\\n    border-radius: 8px;\\n    margin-top: 50px;\\n    margin-bottom: 50px;\\n\\n    &__content {\\n      padding-left: 300px;\\n      color: $black;\\n      padding-top: 20px;\\n      padding-bottom: 20px;\\n    }\\n  }\\n  &__input {\\n    grid-column: 2/3;\\n    display: flex;\\n\\n    input {\\n      border: 0;\\n      outline: 0;\\n      background: transparent;\\n      border-bottom: 1px solid black;\\n      padding-right: 200px;\\n      display: flex;\\n\\n      @include placeholder {\\n        font-family: $font-family;\\n      }\\n    }\\n    &__btn {\\n      border: 1px solid black;\\n      border-radius: 8px;\\n      &__content {\\n      }\\n    }\\n  }\\n\\n  //   &__footer {\\n  //     margin-top: 250px;\\n  //     grid-column: 3/4;\\n  //     color: $blue;\\n  //   }\\n}\\n\",\"@import url(\\\"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@100&display=swap\\\");\\n$font-family: \\\"IBM Plex Mono\\\", monospace;\\n$black: #050505;\\n$blue: #1e40b2;\\n\",\"@mixin placeholder {\\n  &::-webkit-input-placeholder {\\n    @content;\\n  }\\n  &:-moz-placeholder {\\n    @content;\\n  }\\n  &::-moz-placeholder {\\n    @content;\\n  }\\n  &:-ms-input-placeholder {\\n    @content;\\n  }\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"home\": \"Home_home__Crkqx\",\n\t\"home__header\": \"Home_home__header__2jgAG\",\n\t\"home__btn\": \"Home_home__btn__2qHFE\",\n\t\"home__btn__content\": \"Home_home__btn__content__1JlMA\",\n\t\"home__input\": \"Home_home__input__1pMFQ\",\n\t\"home__input__btn\": \"Home_home__input__btn__2f-Sk\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL0hvbWUubW9kdWxlLnNjc3M/ZTIzNSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLGlIQUFzRDtBQUNoRztBQUNBLDhCQUE4QixRQUFTLDZGQUE2RjtBQUNwSTtBQUNBLDhCQUE4QixRQUFTLHNCQUFzQixrQkFBa0IsdUNBQXVDLHNCQUFzQixHQUFHLDZCQUE2QixvQkFBb0IsbUJBQW1CLHFCQUFxQix3QkFBd0IsR0FBRywwQkFBMEIscUJBQXFCLDRCQUE0Qix1QkFBdUIscUJBQXFCLHdCQUF3QixHQUFHLG1DQUFtQyx3QkFBd0IsbUJBQW1CLHNCQUFzQix5QkFBeUIsR0FBRyw0QkFBNEIscUJBQXFCLGtCQUFrQixHQUFHLGtDQUFrQyxjQUFjLGVBQWUsNEJBQTRCLG1DQUFtQyx5QkFBeUIsa0JBQWtCLEdBQUcsNkRBQTZELDhDQUE4QyxHQUFHLG1EQUFtRCw4Q0FBOEMsR0FBRyxvREFBb0QsOENBQThDLEdBQUcsd0RBQXdELDhDQUE4QyxHQUFHLGlDQUFpQyw0QkFBNEIsdUJBQXVCLEdBQUcsT0FBTyx1SkFBdUosVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFlBQVksV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxLQUFLLE1BQU0sYUFBYSxNQUFNLE1BQU0sYUFBYSxNQUFNLE1BQU0sYUFBYSxNQUFNLE1BQU0sYUFBYSxNQUFNLEtBQUssV0FBVyxXQUFXLGdHQUFnRyxTQUFTLGtCQUFrQix1Q0FBdUMsd0JBQXdCLGVBQWUsc0JBQXNCLG9CQUFvQix1QkFBdUIsMEJBQTBCLEtBQUssWUFBWSx1QkFBdUIsOEJBQThCLHlCQUF5Qix1QkFBdUIsMEJBQTBCLG9CQUFvQiw0QkFBNEIsc0JBQXNCLDBCQUEwQiw2QkFBNkIsT0FBTyxLQUFLLGNBQWMsdUJBQXVCLG9CQUFvQixlQUFlLGtCQUFrQixtQkFBbUIsZ0NBQWdDLHVDQUF1Qyw2QkFBNkIsc0JBQXNCLGdDQUFnQyxvQ0FBb0MsU0FBUyxPQUFPLGNBQWMsZ0NBQWdDLDJCQUEyQixvQkFBb0IsU0FBUyxPQUFPLEtBQUssc0JBQXNCLDZCQUE2Qiw0QkFBNEIsd0JBQXdCLFVBQVUsR0FBRyxtR0FBbUcsNkNBQTZDLGtCQUFrQixpQkFBaUIseUJBQXlCLGtDQUFrQyxlQUFlLEtBQUssd0JBQXdCLGVBQWUsS0FBSyx5QkFBeUIsZUFBZSxLQUFLLDZCQUE2QixlQUFlLEtBQUssR0FBRyxxQkFBcUI7QUFDdDFHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8hLi9zdHlsZXMvSG9tZS5tb2R1bGUuc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUlCTStQbGV4K01vbm86d2dodEAxMDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLkhvbWVfaG9tZV9fQ3JrcXgge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmciAxZnI7XFxuICBtYXJnaW4tdG9wOiAyMDBweDtcXG59XFxuLkhvbWVfaG9tZV9faGVhZGVyX18yamdBRyB7XFxuICBmb250LXNpemU6IDY4cHg7XFxuICBjb2xvcjogIzA1MDUwNTtcXG4gIGdyaWQtY29sdW1uOiAyLzM7XFxuICBwYWRkaW5nLWxlZnQ6IDEwMHB4O1xcbn1cXG4uSG9tZV9ob21lX19idG5fXzJxSEZFIHtcXG4gIGdyaWQtY29sdW1uOiAyLzM7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIG1hcmdpbi10b3A6IDUwcHg7XFxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcbn1cXG4uSG9tZV9ob21lX19idG5fX2NvbnRlbnRfXzFKbE1BIHtcXG4gIHBhZGRpbmctbGVmdDogMzAwcHg7XFxuICBjb2xvcjogIzA1MDUwNTtcXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XFxufVxcbi5Ib21lX2hvbWVfX2lucHV0X18xcE1GUSB7XFxuICBncmlkLWNvbHVtbjogMi8zO1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuLkhvbWVfaG9tZV9faW5wdXRfXzFwTUZRIGlucHV0IHtcXG4gIGJvcmRlcjogMDtcXG4gIG91dGxpbmU6IDA7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXG4gIHBhZGRpbmctcmlnaHQ6IDIwMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuLkhvbWVfaG9tZV9faW5wdXRfXzFwTUZRIGlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSUJNIFBsZXggTW9ub1xcXCIsIG1vbm9zcGFjZTtcXG59XFxuLkhvbWVfaG9tZV9faW5wdXRfXzFwTUZRIGlucHV0Oi1tb3otcGxhY2Vob2xkZXIge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJJQk0gUGxleCBNb25vXFxcIiwgbW9ub3NwYWNlO1xcbn1cXG4uSG9tZV9ob21lX19pbnB1dF9fMXBNRlEgaW5wdXQ6Oi1tb3otcGxhY2Vob2xkZXIge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJJQk0gUGxleCBNb25vXFxcIiwgbW9ub3NwYWNlO1xcbn1cXG4uSG9tZV9ob21lX19pbnB1dF9fMXBNRlEgaW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSUJNIFBsZXggTW9ub1xcXCIsIG1vbm9zcGFjZTtcXG59XFxuLkhvbWVfaG9tZV9faW5wdXRfX2J0bl9fMmYtU2sge1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9Ib21lLm1vZHVsZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vYWJzdGFyY3QvX3ZhcmlhYmxlcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vYWJzdGFyY3QvX21peGluLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQ0E7RUFDRSxhQUFBO0VBQ0Esa0NBQUE7RUFFQSxpQkFBQTtBQUFGO0FBQ0U7RUFDRSxlQUFBO0VBQ0EsY0NOSTtFRE9KLGdCQUFBO0VBQ0EsbUJBQUE7QUFDSjtBQUNFO0VBQ0UsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUNKO0FBQ0k7RUFDRSxtQkFBQTtFQUNBLGNDbkJFO0VEb0JGLGlCQUFBO0VBQ0Esb0JBQUE7QUFDTjtBQUVFO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0FBQUo7QUFFSTtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7RUFDQSw4QkFBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtBQUFOO0FFbkNFO0VGc0NNLHVDQ3RDTTtBRHNDZDtBRW5DRTtFRm1DTSx1Q0N0Q007QUR5Q2Q7QUVuQ0U7RUZnQ00sdUNDdENNO0FENENkO0FFbkNFO0VGNkJNLHVDQ3RDTTtBRCtDZDtBQU5JO0VBQ0UsdUJBQUE7RUFDQSxrQkFBQTtBQVFOXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgXFxcIi4uL3N0eWxlcy9hYnN0YXJjdC92YXJpYWJsZXNcXFwiLCBcXFwiLi4vc3R5bGVzL2Fic3RhcmN0L21peGluXFxcIjtcXG4uaG9tZSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyIDFmcjtcXG5cXG4gIG1hcmdpbi10b3A6IDIwMHB4O1xcbiAgJl9faGVhZGVyIHtcXG4gICAgZm9udC1zaXplOiA2OHB4O1xcbiAgICBjb2xvcjogJGJsYWNrO1xcbiAgICBncmlkLWNvbHVtbjogMi8zO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEwMHB4O1xcbiAgfVxcbiAgJl9fYnRuIHtcXG4gICAgZ3JpZC1jb2x1bW46IDIvMztcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgbWFyZ2luLXRvcDogNTBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcXG5cXG4gICAgJl9fY29udGVudCB7XFxuICAgICAgcGFkZGluZy1sZWZ0OiAzMDBweDtcXG4gICAgICBjb2xvcjogJGJsYWNrO1xcbiAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xcbiAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xcbiAgICB9XFxuICB9XFxuICAmX19pbnB1dCB7XFxuICAgIGdyaWQtY29sdW1uOiAyLzM7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuXFxuICAgIGlucHV0IHtcXG4gICAgICBib3JkZXI6IDA7XFxuICAgICAgb3V0bGluZTogMDtcXG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxuICAgICAgcGFkZGluZy1yaWdodDogMjAwcHg7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG5cXG4gICAgICBAaW5jbHVkZSBwbGFjZWhvbGRlciB7XFxuICAgICAgICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xcbiAgICAgIH1cXG4gICAgfVxcbiAgICAmX19idG4ge1xcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgICAmX19jb250ZW50IHtcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG5cXG4gIC8vICAgJl9fZm9vdGVyIHtcXG4gIC8vICAgICBtYXJnaW4tdG9wOiAyNTBweDtcXG4gIC8vICAgICBncmlkLWNvbHVtbjogMy80O1xcbiAgLy8gICAgIGNvbG9yOiAkYmx1ZTtcXG4gIC8vICAgfVxcbn1cXG5cIixcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUlCTStQbGV4K01vbm86d2dodEAxMDAmZGlzcGxheT1zd2FwXFxcIik7XFxuJGZvbnQtZmFtaWx5OiBcXFwiSUJNIFBsZXggTW9ub1xcXCIsIG1vbm9zcGFjZTtcXG4kYmxhY2s6ICMwNTA1MDU7XFxuJGJsdWU6ICMxZTQwYjI7XFxuXCIsXCJAbWl4aW4gcGxhY2Vob2xkZXIge1xcbiAgJjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XFxuICAgIEBjb250ZW50O1xcbiAgfVxcbiAgJjotbW96LXBsYWNlaG9sZGVyIHtcXG4gICAgQGNvbnRlbnQ7XFxuICB9XFxuICAmOjotbW96LXBsYWNlaG9sZGVyIHtcXG4gICAgQGNvbnRlbnQ7XFxuICB9XFxuICAmOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XFxuICAgIEBjb250ZW50O1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJob21lXCI6IFwiSG9tZV9ob21lX19DcmtxeFwiLFxuXHRcImhvbWVfX2hlYWRlclwiOiBcIkhvbWVfaG9tZV9faGVhZGVyX18yamdBR1wiLFxuXHRcImhvbWVfX2J0blwiOiBcIkhvbWVfaG9tZV9fYnRuX18ycUhGRVwiLFxuXHRcImhvbWVfX2J0bl9fY29udGVudFwiOiBcIkhvbWVfaG9tZV9fYnRuX19jb250ZW50X18xSmxNQVwiLFxuXHRcImhvbWVfX2lucHV0XCI6IFwiSG9tZV9ob21lX19pbnB1dF9fMXBNRlFcIixcblx0XCJob21lX19pbnB1dF9fYnRuXCI6IFwiSG9tZV9ob21lX19pbnB1dF9fYnRuX18yZi1Ta1wiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./styles/Home.module.scss\n");

/***/ })

})