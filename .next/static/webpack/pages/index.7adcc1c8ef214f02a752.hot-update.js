webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./styles/Home.module.scss":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-3-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-3-2!(webpack)/resolve-url-loader??ref--5-oneOf-3-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-3-4!./styles/Home.module.scss ***!
  \*******************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n___CSS_LOADER_EXPORT___.push([module.i, \"@import url(https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@100&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".Home_home__Crkqx {\\n  display: grid;\\n  grid-template-columns: 1fr 2fr 1fr;\\n  margin-top: 200px;\\n}\\n.Home_home__header__2jgAG {\\n  font-size: 68px;\\n  color: #050505;\\n  grid-column: 2/3;\\n  margin-left: 150px;\\n}\\n.Home_home__btn__2qHFE {\\n  grid-column: 2/3;\\n  border: 1px solid black;\\n  border-radius: 8px;\\n  margin-top: 50px;\\n  margin-bottom: 50px;\\n  margin-left: 80px;\\n}\\n.Home_home__btn__content__1JlMA {\\n  padding-left: 275px;\\n  color: #050505;\\n  padding-top: 20px;\\n  padding-bottom: 20px;\\n}\\n.Home_home__input__1pMFQ {\\n  grid-column: 2/3;\\n  display: flex;\\n  margin-left: 80px;\\n}\\n.Home_home__input__1pMFQ input {\\n  border: 0;\\n  outline: 0;\\n  background: transparent;\\n  border-bottom: 1px solid black;\\n  display: flex;\\n}\\n.Home_home__input__1pMFQ input::-webkit-input-placeholder {\\n  font-family: \\\"IBM Plex Mono\\\", monospace;\\n}\\n.Home_home__input__1pMFQ input:-moz-placeholder {\\n  font-family: \\\"IBM Plex Mono\\\", monospace;\\n}\\n.Home_home__input__1pMFQ input::-moz-placeholder {\\n  font-family: \\\"IBM Plex Mono\\\", monospace;\\n}\\n.Home_home__input__1pMFQ input:-ms-input-placeholder {\\n  font-family: \\\"IBM Plex Mono\\\", monospace;\\n}\\n.Home_home__input__1pMFQ input__div {\\n  border: 1px solid black;\\n  border-radius: 8px;\\n}\\n.Home_home__footer__1iHql {\\n  margin-top: 150px;\\n  grid-column: 3/4;\\n  color: #1e40b2;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://Home.module.scss\",\"webpack://abstarct/_variables.scss\",\"webpack://abstarct/_mixin.scss\"],\"names\":[],\"mappings\":\"AACA;EACE,aAAA;EACA,kCAAA;EAEA,iBAAA;AAAF;AACE;EACE,eAAA;EACA,cCNI;EDOJ,gBAAA;EACA,kBAAA;AACJ;AACE;EACE,gBAAA;EACA,uBAAA;EACA,kBAAA;EACA,gBAAA;EACA,mBAAA;EACA,iBAAA;AACJ;AAAI;EACE,mBAAA;EACA,cCnBE;EDoBF,iBAAA;EACA,oBAAA;AAEN;AACE;EACE,gBAAA;EACA,aAAA;EACA,iBAAA;AACJ;AAAI;EACE,SAAA;EACA,UAAA;EACA,uBAAA;EACA,8BAAA;EAEA,aAAA;AACN;AEpCE;EFsCM,uCCtCM;ADuCd;AEpCE;EFmCM,uCCtCM;AD0Cd;AEpCE;EFgCM,uCCtCM;AD6Cd;AEpCE;EF6BM,uCCtCM;ADgDd;AARM;EACE,uBAAA;EACA,kBAAA;AAUR;AALE;EACE,iBAAA;EACA,gBAAA;EACA,cChDG;ADuDP\",\"sourcesContent\":[\"@import \\\"../styles/abstarct/variables\\\", \\\"../styles/abstarct/mixin\\\";\\n.home {\\n  display: grid;\\n  grid-template-columns: 1fr 2fr 1fr;\\n\\n  margin-top: 200px;\\n  &__header {\\n    font-size: 68px;\\n    color: $black;\\n    grid-column: 2/3;\\n    margin-left: 150px;\\n  }\\n  &__btn {\\n    grid-column: 2/3;\\n    border: 1px solid black;\\n    border-radius: 8px;\\n    margin-top: 50px;\\n    margin-bottom: 50px;\\n    margin-left: 80px;\\n    &__content {\\n      padding-left: 275px;\\n      color: $black;\\n      padding-top: 20px;\\n      padding-bottom: 20px;\\n    }\\n  }\\n  &__input {\\n    grid-column: 2/3;\\n    display: flex;\\n    margin-left: 80px;\\n    input {\\n      border: 0;\\n      outline: 0;\\n      background: transparent;\\n      border-bottom: 1px solid black;\\n\\n      display: flex;\\n\\n      @include placeholder {\\n        font-family: $font-family;\\n      }\\n      &__div {\\n        border: 1px solid black;\\n        border-radius: 8px;\\n      }\\n    }\\n  }\\n\\n  &__footer {\\n    margin-top: 150px;\\n    grid-column: 3/4;\\n    color: $blue;\\n  }\\n}\\n\",\"@import url(\\\"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@100&display=swap\\\");\\n$font-family: \\\"IBM Plex Mono\\\", monospace;\\n$black: #050505;\\n$blue: #1e40b2;\\n\",\"@mixin placeholder {\\n  &::-webkit-input-placeholder {\\n    @content;\\n  }\\n  &:-moz-placeholder {\\n    @content;\\n  }\\n  &::-moz-placeholder {\\n    @content;\\n  }\\n  &:-ms-input-placeholder {\\n    @content;\\n  }\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"home\": \"Home_home__Crkqx\",\n\t\"home__header\": \"Home_home__header__2jgAG\",\n\t\"home__btn\": \"Home_home__btn__2qHFE\",\n\t\"home__btn__content\": \"Home_home__btn__content__1JlMA\",\n\t\"home__input\": \"Home_home__input__1pMFQ\",\n\t\"home__footer\": \"Home_home__footer__1iHql\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL0hvbWUubW9kdWxlLnNjc3M/ZTIzNSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLGlIQUFzRDtBQUNoRztBQUNBLDhCQUE4QixRQUFTLDZGQUE2RjtBQUNwSTtBQUNBLDhCQUE4QixRQUFTLHNCQUFzQixrQkFBa0IsdUNBQXVDLHNCQUFzQixHQUFHLDZCQUE2QixvQkFBb0IsbUJBQW1CLHFCQUFxQix1QkFBdUIsR0FBRywwQkFBMEIscUJBQXFCLDRCQUE0Qix1QkFBdUIscUJBQXFCLHdCQUF3QixzQkFBc0IsR0FBRyxtQ0FBbUMsd0JBQXdCLG1CQUFtQixzQkFBc0IseUJBQXlCLEdBQUcsNEJBQTRCLHFCQUFxQixrQkFBa0Isc0JBQXNCLEdBQUcsa0NBQWtDLGNBQWMsZUFBZSw0QkFBNEIsbUNBQW1DLGtCQUFrQixHQUFHLDZEQUE2RCw4Q0FBOEMsR0FBRyxtREFBbUQsOENBQThDLEdBQUcsb0RBQW9ELDhDQUE4QyxHQUFHLHdEQUF3RCw4Q0FBOEMsR0FBRyx1Q0FBdUMsNEJBQTRCLHVCQUF1QixHQUFHLDZCQUE2QixzQkFBc0IscUJBQXFCLG1CQUFtQixHQUFHLE9BQU8sdUpBQXVKLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFlBQVksV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxLQUFLLE1BQU0sYUFBYSxNQUFNLE1BQU0sYUFBYSxNQUFNLE1BQU0sYUFBYSxNQUFNLE1BQU0sYUFBYSxNQUFNLEtBQUssV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxpR0FBaUcsU0FBUyxrQkFBa0IsdUNBQXVDLHdCQUF3QixlQUFlLHNCQUFzQixvQkFBb0IsdUJBQXVCLHlCQUF5QixLQUFLLFlBQVksdUJBQXVCLDhCQUE4Qix5QkFBeUIsdUJBQXVCLDBCQUEwQix3QkFBd0Isa0JBQWtCLDRCQUE0QixzQkFBc0IsMEJBQTBCLDZCQUE2QixPQUFPLEtBQUssY0FBYyx1QkFBdUIsb0JBQW9CLHdCQUF3QixhQUFhLGtCQUFrQixtQkFBbUIsZ0NBQWdDLHVDQUF1Qyx3QkFBd0IsZ0NBQWdDLG9DQUFvQyxTQUFTLGdCQUFnQixrQ0FBa0MsNkJBQTZCLFNBQVMsT0FBTyxLQUFLLGlCQUFpQix3QkFBd0IsdUJBQXVCLG1CQUFtQixLQUFLLEdBQUcsbUdBQW1HLDZDQUE2QyxrQkFBa0IsaUJBQWlCLHlCQUF5QixrQ0FBa0MsZUFBZSxLQUFLLHdCQUF3QixlQUFlLEtBQUsseUJBQXlCLGVBQWUsS0FBSyw2QkFBNkIsZUFBZSxLQUFLLEdBQUcscUJBQXFCO0FBQ3IrRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/IS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/IS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/IS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9zYXNzLWxvYWRlci9janMuanM/IS4vc3R5bGVzL0hvbWUubW9kdWxlLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1JQk0rUGxleCtNb25vOndnaHRAMTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5Ib21lX2hvbWVfX0Nya3F4IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnIgMWZyO1xcbiAgbWFyZ2luLXRvcDogMjAwcHg7XFxufVxcbi5Ib21lX2hvbWVfX2hlYWRlcl9fMmpnQUcge1xcbiAgZm9udC1zaXplOiA2OHB4O1xcbiAgY29sb3I6ICMwNTA1MDU7XFxuICBncmlkLWNvbHVtbjogMi8zO1xcbiAgbWFyZ2luLWxlZnQ6IDE1MHB4O1xcbn1cXG4uSG9tZV9ob21lX19idG5fXzJxSEZFIHtcXG4gIGdyaWQtY29sdW1uOiAyLzM7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIG1hcmdpbi10b3A6IDUwcHg7XFxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcbiAgbWFyZ2luLWxlZnQ6IDgwcHg7XFxufVxcbi5Ib21lX2hvbWVfX2J0bl9fY29udGVudF9fMUpsTUEge1xcbiAgcGFkZGluZy1sZWZ0OiAyNzVweDtcXG4gIGNvbG9yOiAjMDUwNTA1O1xcbiAgcGFkZGluZy10b3A6IDIwcHg7XFxuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcXG59XFxuLkhvbWVfaG9tZV9faW5wdXRfXzFwTUZRIHtcXG4gIGdyaWQtY29sdW1uOiAyLzM7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWFyZ2luLWxlZnQ6IDgwcHg7XFxufVxcbi5Ib21lX2hvbWVfX2lucHV0X18xcE1GUSBpbnB1dCB7XFxuICBib3JkZXI6IDA7XFxuICBvdXRsaW5lOiAwO1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4uSG9tZV9ob21lX19pbnB1dF9fMXBNRlEgaW5wdXQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJJQk0gUGxleCBNb25vXFxcIiwgbW9ub3NwYWNlO1xcbn1cXG4uSG9tZV9ob21lX19pbnB1dF9fMXBNRlEgaW5wdXQ6LW1vei1wbGFjZWhvbGRlciB7XFxuICBmb250LWZhbWlseTogXFxcIklCTSBQbGV4IE1vbm9cXFwiLCBtb25vc3BhY2U7XFxufVxcbi5Ib21lX2hvbWVfX2lucHV0X18xcE1GUSBpbnB1dDo6LW1vei1wbGFjZWhvbGRlciB7XFxuICBmb250LWZhbWlseTogXFxcIklCTSBQbGV4IE1vbm9cXFwiLCBtb25vc3BhY2U7XFxufVxcbi5Ib21lX2hvbWVfX2lucHV0X18xcE1GUSBpbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJJQk0gUGxleCBNb25vXFxcIiwgbW9ub3NwYWNlO1xcbn1cXG4uSG9tZV9ob21lX19pbnB1dF9fMXBNRlEgaW5wdXRfX2RpdiB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuLkhvbWVfaG9tZV9fZm9vdGVyX18xaUhxbCB7XFxuICBtYXJnaW4tdG9wOiAxNTBweDtcXG4gIGdyaWQtY29sdW1uOiAzLzQ7XFxuICBjb2xvcjogIzFlNDBiMjtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL0hvbWUubW9kdWxlLnNjc3NcIixcIndlYnBhY2s6Ly9hYnN0YXJjdC9fdmFyaWFibGVzLnNjc3NcIixcIndlYnBhY2s6Ly9hYnN0YXJjdC9fbWl4aW4uc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDQTtFQUNFLGFBQUE7RUFDQSxrQ0FBQTtFQUVBLGlCQUFBO0FBQUY7QUFDRTtFQUNFLGVBQUE7RUFDQSxjQ05JO0VET0osZ0JBQUE7RUFDQSxrQkFBQTtBQUNKO0FBQ0U7RUFDRSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFDSjtBQUFJO0VBQ0UsbUJBQUE7RUFDQSxjQ25CRTtFRG9CRixpQkFBQTtFQUNBLG9CQUFBO0FBRU47QUFDRTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FBQ0o7QUFBSTtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7RUFDQSw4QkFBQTtFQUVBLGFBQUE7QUFDTjtBRXBDRTtFRnNDTSx1Q0N0Q007QUR1Q2Q7QUVwQ0U7RUZtQ00sdUNDdENNO0FEMENkO0FFcENFO0VGZ0NNLHVDQ3RDTTtBRDZDZDtBRXBDRTtFRjZCTSx1Q0N0Q007QURnRGQ7QUFSTTtFQUNFLHVCQUFBO0VBQ0Esa0JBQUE7QUFVUjtBQUxFO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNDaERHO0FEdURQXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgXFxcIi4uL3N0eWxlcy9hYnN0YXJjdC92YXJpYWJsZXNcXFwiLCBcXFwiLi4vc3R5bGVzL2Fic3RhcmN0L21peGluXFxcIjtcXG4uaG9tZSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyIDFmcjtcXG5cXG4gIG1hcmdpbi10b3A6IDIwMHB4O1xcbiAgJl9faGVhZGVyIHtcXG4gICAgZm9udC1zaXplOiA2OHB4O1xcbiAgICBjb2xvcjogJGJsYWNrO1xcbiAgICBncmlkLWNvbHVtbjogMi8zO1xcbiAgICBtYXJnaW4tbGVmdDogMTUwcHg7XFxuICB9XFxuICAmX19idG4ge1xcbiAgICBncmlkLWNvbHVtbjogMi8zO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcbiAgICBtYXJnaW4tbGVmdDogODBweDtcXG4gICAgJl9fY29udGVudCB7XFxuICAgICAgcGFkZGluZy1sZWZ0OiAyNzVweDtcXG4gICAgICBjb2xvcjogJGJsYWNrO1xcbiAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xcbiAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xcbiAgICB9XFxuICB9XFxuICAmX19pbnB1dCB7XFxuICAgIGdyaWQtY29sdW1uOiAyLzM7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1hcmdpbi1sZWZ0OiA4MHB4O1xcbiAgICBpbnB1dCB7XFxuICAgICAgYm9yZGVyOiAwO1xcbiAgICAgIG91dGxpbmU6IDA7XFxuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xcblxcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuXFxuICAgICAgQGluY2x1ZGUgcGxhY2Vob2xkZXIge1xcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcXG4gICAgICB9XFxuICAgICAgJl9fZGl2IHtcXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcblxcbiAgJl9fZm9vdGVyIHtcXG4gICAgbWFyZ2luLXRvcDogMTUwcHg7XFxuICAgIGdyaWQtY29sdW1uOiAzLzQ7XFxuICAgIGNvbG9yOiAkYmx1ZTtcXG4gIH1cXG59XFxuXCIsXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1JQk0rUGxleCtNb25vOndnaHRAMTAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcbiRmb250LWZhbWlseTogXFxcIklCTSBQbGV4IE1vbm9cXFwiLCBtb25vc3BhY2U7XFxuJGJsYWNrOiAjMDUwNTA1O1xcbiRibHVlOiAjMWU0MGIyO1xcblwiLFwiQG1peGluIHBsYWNlaG9sZGVyIHtcXG4gICY6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xcbiAgICBAY29udGVudDtcXG4gIH1cXG4gICY6LW1vei1wbGFjZWhvbGRlciB7XFxuICAgIEBjb250ZW50O1xcbiAgfVxcbiAgJjo6LW1vei1wbGFjZWhvbGRlciB7XFxuICAgIEBjb250ZW50O1xcbiAgfVxcbiAgJjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xcbiAgICBAY29udGVudDtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiaG9tZVwiOiBcIkhvbWVfaG9tZV9fQ3JrcXhcIixcblx0XCJob21lX19oZWFkZXJcIjogXCJIb21lX2hvbWVfX2hlYWRlcl9fMmpnQUdcIixcblx0XCJob21lX19idG5cIjogXCJIb21lX2hvbWVfX2J0bl9fMnFIRkVcIixcblx0XCJob21lX19idG5fX2NvbnRlbnRcIjogXCJIb21lX2hvbWVfX2J0bl9fY29udGVudF9fMUpsTUFcIixcblx0XCJob21lX19pbnB1dFwiOiBcIkhvbWVfaG9tZV9faW5wdXRfXzFwTUZRXCIsXG5cdFwiaG9tZV9fZm9vdGVyXCI6IFwiSG9tZV9ob21lX19mb290ZXJfXzFpSHFsXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./styles/Home.module.scss\n");

/***/ })

})