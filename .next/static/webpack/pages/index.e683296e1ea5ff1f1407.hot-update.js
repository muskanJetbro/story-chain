webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./styles/Home.module.scss":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-3-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-3-2!(webpack)/resolve-url-loader??ref--5-oneOf-3-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-3-4!./styles/Home.module.scss ***!
  \*******************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n___CSS_LOADER_EXPORT___.push([module.i, \"@import url(https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@100&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".Home_home__Crkqx {\\n  display: grid;\\n  grid-template-columns: 1fr 2fr 1fr;\\n  margin-top: 200px;\\n}\\n.Home_home__header__2jgAG {\\n  font-size: 68px;\\n  color: #050505;\\n  grid-column: 2/3;\\n  padding-left: 100px;\\n}\\n.Home_home__btn__2qHFE {\\n  grid-column: 2/3;\\n  border: 1px solid black;\\n  border-radius: 8px;\\n  margin-top: 50px;\\n  margin-bottom: 50px;\\n}\\n.Home_home__btn__content__1JlMA {\\n  padding-left: 300px;\\n  color: #050505;\\n  padding-top: 20px;\\n  padding-bottom: 20px;\\n}\\n.Home_home__input__1pMFQ {\\n  grid-column: 2/3;\\n  display: flex;\\n}\\n.Home_home__input__1pMFQ input {\\n  border: 0;\\n  outline: 0;\\n  background: transparent;\\n  border-bottom: 1px solid black;\\n  display: flex;\\n}\\n.Home_home__input__1pMFQ input::-webkit-input-placeholder {\\n  font-family: \\\"IBM Plex Mono\\\", monospace;\\n}\\n.Home_home__input__1pMFQ input:-moz-placeholder {\\n  font-family: \\\"IBM Plex Mono\\\", monospace;\\n}\\n.Home_home__input__1pMFQ input::-moz-placeholder {\\n  font-family: \\\"IBM Plex Mono\\\", monospace;\\n}\\n.Home_home__input__1pMFQ input:-ms-input-placeholder {\\n  font-family: \\\"IBM Plex Mono\\\", monospace;\\n}\\n.Home_home__input__1pMFQ input__div {\\n  border: 1px solid black;\\n  border-radius: 8px;\\n}\\n.Home_home__input__1pMFQ input__btn {\\n  padding-left: 10px;\\n}\\n.Home_home__footer__1iHql {\\n  margin-top: 250px;\\n  grid-column: 3/4;\\n  color: #1e40b2;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://Home.module.scss\",\"webpack://abstarct/_variables.scss\",\"webpack://abstarct/_mixin.scss\"],\"names\":[],\"mappings\":\"AACA;EACE,aAAA;EACA,kCAAA;EAEA,iBAAA;AAAF;AACE;EACE,eAAA;EACA,cCNI;EDOJ,gBAAA;EACA,mBAAA;AACJ;AACE;EACE,gBAAA;EACA,uBAAA;EACA,kBAAA;EACA,gBAAA;EACA,mBAAA;AACJ;AACI;EACE,mBAAA;EACA,cCnBE;EDoBF,iBAAA;EACA,oBAAA;AACN;AAEE;EACE,gBAAA;EACA,aAAA;AAAJ;AAEI;EACE,SAAA;EACA,UAAA;EACA,uBAAA;EACA,8BAAA;EAEA,aAAA;AADN;AElCE;EFsCM,uCCtCM;ADqCd;AElCE;EFmCM,uCCtCM;ADwCd;AElCE;EFgCM,uCCtCM;AD2Cd;AElCE;EF6BM,uCCtCM;AD8Cd;AANM;EACE,uBAAA;EACA,kBAAA;AAQR;AANM;EACE,kBAAA;AAQR;AAHE;EACE,iBAAA;EACA,gBAAA;EACA,cCnDG;ADwDP\",\"sourcesContent\":[\"@import \\\"../styles/abstarct/variables\\\", \\\"../styles/abstarct/mixin\\\";\\n.home {\\n  display: grid;\\n  grid-template-columns: 1fr 2fr 1fr;\\n\\n  margin-top: 200px;\\n  &__header {\\n    font-size: 68px;\\n    color: $black;\\n    grid-column: 2/3;\\n    padding-left: 100px;\\n  }\\n  &__btn {\\n    grid-column: 2/3;\\n    border: 1px solid black;\\n    border-radius: 8px;\\n    margin-top: 50px;\\n    margin-bottom: 50px;\\n\\n    &__content {\\n      padding-left: 300px;\\n      color: $black;\\n      padding-top: 20px;\\n      padding-bottom: 20px;\\n    }\\n  }\\n  &__input {\\n    grid-column: 2/3;\\n    display: flex;\\n\\n    input {\\n      border: 0;\\n      outline: 0;\\n      background: transparent;\\n      border-bottom: 1px solid black;\\n\\n      display: flex;\\n\\n      @include placeholder {\\n        font-family: $font-family;\\n      }\\n      &__div {\\n        border: 1px solid black;\\n        border-radius: 8px;\\n      }\\n      &__btn {\\n        padding-left: 10px;\\n      }\\n    }\\n  }\\n\\n  &__footer {\\n    margin-top: 250px;\\n    grid-column: 3/4;\\n    color: $blue;\\n  }\\n}\\n\",\"@import url(\\\"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@100&display=swap\\\");\\n$font-family: \\\"IBM Plex Mono\\\", monospace;\\n$black: #050505;\\n$blue: #1e40b2;\\n\",\"@mixin placeholder {\\n  &::-webkit-input-placeholder {\\n    @content;\\n  }\\n  &:-moz-placeholder {\\n    @content;\\n  }\\n  &::-moz-placeholder {\\n    @content;\\n  }\\n  &:-ms-input-placeholder {\\n    @content;\\n  }\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"home\": \"Home_home__Crkqx\",\n\t\"home__header\": \"Home_home__header__2jgAG\",\n\t\"home__btn\": \"Home_home__btn__2qHFE\",\n\t\"home__btn__content\": \"Home_home__btn__content__1JlMA\",\n\t\"home__input\": \"Home_home__input__1pMFQ\",\n\t\"home__footer\": \"Home_home__footer__1iHql\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL0hvbWUubW9kdWxlLnNjc3M/ZTIzNSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLGlIQUFzRDtBQUNoRztBQUNBLDhCQUE4QixRQUFTLDZGQUE2RjtBQUNwSTtBQUNBLDhCQUE4QixRQUFTLHNCQUFzQixrQkFBa0IsdUNBQXVDLHNCQUFzQixHQUFHLDZCQUE2QixvQkFBb0IsbUJBQW1CLHFCQUFxQix3QkFBd0IsR0FBRywwQkFBMEIscUJBQXFCLDRCQUE0Qix1QkFBdUIscUJBQXFCLHdCQUF3QixHQUFHLG1DQUFtQyx3QkFBd0IsbUJBQW1CLHNCQUFzQix5QkFBeUIsR0FBRyw0QkFBNEIscUJBQXFCLGtCQUFrQixHQUFHLGtDQUFrQyxjQUFjLGVBQWUsNEJBQTRCLG1DQUFtQyxrQkFBa0IsR0FBRyw2REFBNkQsOENBQThDLEdBQUcsbURBQW1ELDhDQUE4QyxHQUFHLG9EQUFvRCw4Q0FBOEMsR0FBRyx3REFBd0QsOENBQThDLEdBQUcsdUNBQXVDLDRCQUE0Qix1QkFBdUIsR0FBRyx1Q0FBdUMsdUJBQXVCLEdBQUcsNkJBQTZCLHNCQUFzQixxQkFBcUIsbUJBQW1CLEdBQUcsT0FBTyx1SkFBdUosVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFlBQVksV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsS0FBSyxNQUFNLGFBQWEsTUFBTSxNQUFNLGFBQWEsTUFBTSxNQUFNLGFBQWEsTUFBTSxNQUFNLGFBQWEsTUFBTSxLQUFLLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsaUdBQWlHLFNBQVMsa0JBQWtCLHVDQUF1Qyx3QkFBd0IsZUFBZSxzQkFBc0Isb0JBQW9CLHVCQUF1QiwwQkFBMEIsS0FBSyxZQUFZLHVCQUF1Qiw4QkFBOEIseUJBQXlCLHVCQUF1QiwwQkFBMEIsb0JBQW9CLDRCQUE0QixzQkFBc0IsMEJBQTBCLDZCQUE2QixPQUFPLEtBQUssY0FBYyx1QkFBdUIsb0JBQW9CLGVBQWUsa0JBQWtCLG1CQUFtQixnQ0FBZ0MsdUNBQXVDLHdCQUF3QixnQ0FBZ0Msb0NBQW9DLFNBQVMsZ0JBQWdCLGtDQUFrQyw2QkFBNkIsU0FBUyxnQkFBZ0IsNkJBQTZCLFNBQVMsT0FBTyxLQUFLLGlCQUFpQix3QkFBd0IsdUJBQXVCLG1CQUFtQixLQUFLLEdBQUcsbUdBQW1HLDZDQUE2QyxrQkFBa0IsaUJBQWlCLHlCQUF5QixrQ0FBa0MsZUFBZSxLQUFLLHdCQUF3QixlQUFlLEtBQUsseUJBQXlCLGVBQWUsS0FBSyw2QkFBNkIsZUFBZSxLQUFLLEdBQUcscUJBQXFCO0FBQ3JnSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/IS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/IS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/IS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9zYXNzLWxvYWRlci9janMuanM/IS4vc3R5bGVzL0hvbWUubW9kdWxlLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1JQk0rUGxleCtNb25vOndnaHRAMTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5Ib21lX2hvbWVfX0Nya3F4IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnIgMWZyO1xcbiAgbWFyZ2luLXRvcDogMjAwcHg7XFxufVxcbi5Ib21lX2hvbWVfX2hlYWRlcl9fMmpnQUcge1xcbiAgZm9udC1zaXplOiA2OHB4O1xcbiAgY29sb3I6ICMwNTA1MDU7XFxuICBncmlkLWNvbHVtbjogMi8zO1xcbiAgcGFkZGluZy1sZWZ0OiAxMDBweDtcXG59XFxuLkhvbWVfaG9tZV9fYnRuX18ycUhGRSB7XFxuICBncmlkLWNvbHVtbjogMi8zO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBtYXJnaW4tdG9wOiA1MHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcXG59XFxuLkhvbWVfaG9tZV9fYnRuX19jb250ZW50X18xSmxNQSB7XFxuICBwYWRkaW5nLWxlZnQ6IDMwMHB4O1xcbiAgY29sb3I6ICMwNTA1MDU7XFxuICBwYWRkaW5nLXRvcDogMjBweDtcXG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xcbn1cXG4uSG9tZV9ob21lX19pbnB1dF9fMXBNRlEge1xcbiAgZ3JpZC1jb2x1bW46IDIvMztcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5Ib21lX2hvbWVfX2lucHV0X18xcE1GUSBpbnB1dCB7XFxuICBib3JkZXI6IDA7XFxuICBvdXRsaW5lOiAwO1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4uSG9tZV9ob21lX19pbnB1dF9fMXBNRlEgaW5wdXQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJJQk0gUGxleCBNb25vXFxcIiwgbW9ub3NwYWNlO1xcbn1cXG4uSG9tZV9ob21lX19pbnB1dF9fMXBNRlEgaW5wdXQ6LW1vei1wbGFjZWhvbGRlciB7XFxuICBmb250LWZhbWlseTogXFxcIklCTSBQbGV4IE1vbm9cXFwiLCBtb25vc3BhY2U7XFxufVxcbi5Ib21lX2hvbWVfX2lucHV0X18xcE1GUSBpbnB1dDo6LW1vei1wbGFjZWhvbGRlciB7XFxuICBmb250LWZhbWlseTogXFxcIklCTSBQbGV4IE1vbm9cXFwiLCBtb25vc3BhY2U7XFxufVxcbi5Ib21lX2hvbWVfX2lucHV0X18xcE1GUSBpbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJJQk0gUGxleCBNb25vXFxcIiwgbW9ub3NwYWNlO1xcbn1cXG4uSG9tZV9ob21lX19pbnB1dF9fMXBNRlEgaW5wdXRfX2RpdiB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuLkhvbWVfaG9tZV9faW5wdXRfXzFwTUZRIGlucHV0X19idG4ge1xcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbn1cXG4uSG9tZV9ob21lX19mb290ZXJfXzFpSHFsIHtcXG4gIG1hcmdpbi10b3A6IDI1MHB4O1xcbiAgZ3JpZC1jb2x1bW46IDMvNDtcXG4gIGNvbG9yOiAjMWU0MGIyO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vSG9tZS5tb2R1bGUuc2Nzc1wiLFwid2VicGFjazovL2Fic3RhcmN0L192YXJpYWJsZXMuc2Nzc1wiLFwid2VicGFjazovL2Fic3RhcmN0L19taXhpbi5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUNBO0VBQ0UsYUFBQTtFQUNBLGtDQUFBO0VBRUEsaUJBQUE7QUFBRjtBQUNFO0VBQ0UsZUFBQTtFQUNBLGNDTkk7RURPSixnQkFBQTtFQUNBLG1CQUFBO0FBQ0o7QUFDRTtFQUNFLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFDSjtBQUNJO0VBQ0UsbUJBQUE7RUFDQSxjQ25CRTtFRG9CRixpQkFBQTtFQUNBLG9CQUFBO0FBQ047QUFFRTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtBQUFKO0FBRUk7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHVCQUFBO0VBQ0EsOEJBQUE7RUFFQSxhQUFBO0FBRE47QUVsQ0U7RUZzQ00sdUNDdENNO0FEcUNkO0FFbENFO0VGbUNNLHVDQ3RDTTtBRHdDZDtBRWxDRTtFRmdDTSx1Q0N0Q007QUQyQ2Q7QUVsQ0U7RUY2Qk0sdUNDdENNO0FEOENkO0FBTk07RUFDRSx1QkFBQTtFQUNBLGtCQUFBO0FBUVI7QUFOTTtFQUNFLGtCQUFBO0FBUVI7QUFIRTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQ25ERztBRHdEUFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IFxcXCIuLi9zdHlsZXMvYWJzdGFyY3QvdmFyaWFibGVzXFxcIiwgXFxcIi4uL3N0eWxlcy9hYnN0YXJjdC9taXhpblxcXCI7XFxuLmhvbWUge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmciAxZnI7XFxuXFxuICBtYXJnaW4tdG9wOiAyMDBweDtcXG4gICZfX2hlYWRlciB7XFxuICAgIGZvbnQtc2l6ZTogNjhweDtcXG4gICAgY29sb3I6ICRibGFjaztcXG4gICAgZ3JpZC1jb2x1bW46IDIvMztcXG4gICAgcGFkZGluZy1sZWZ0OiAxMDBweDtcXG4gIH1cXG4gICZfX2J0biB7XFxuICAgIGdyaWQtY29sdW1uOiAyLzM7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIG1hcmdpbi10b3A6IDUwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XFxuXFxuICAgICZfX2NvbnRlbnQge1xcbiAgICAgIHBhZGRpbmctbGVmdDogMzAwcHg7XFxuICAgICAgY29sb3I6ICRibGFjaztcXG4gICAgICBwYWRkaW5nLXRvcDogMjBweDtcXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcXG4gICAgfVxcbiAgfVxcbiAgJl9faW5wdXQge1xcbiAgICBncmlkLWNvbHVtbjogMi8zO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcblxcbiAgICBpbnB1dCB7XFxuICAgICAgYm9yZGVyOiAwO1xcbiAgICAgIG91dGxpbmU6IDA7XFxuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xcblxcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuXFxuICAgICAgQGluY2x1ZGUgcGxhY2Vob2xkZXIge1xcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcXG4gICAgICB9XFxuICAgICAgJl9fZGl2IHtcXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICAgIH1cXG4gICAgICAmX19idG4ge1xcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcblxcbiAgJl9fZm9vdGVyIHtcXG4gICAgbWFyZ2luLXRvcDogMjUwcHg7XFxuICAgIGdyaWQtY29sdW1uOiAzLzQ7XFxuICAgIGNvbG9yOiAkYmx1ZTtcXG4gIH1cXG59XFxuXCIsXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1JQk0rUGxleCtNb25vOndnaHRAMTAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcbiRmb250LWZhbWlseTogXFxcIklCTSBQbGV4IE1vbm9cXFwiLCBtb25vc3BhY2U7XFxuJGJsYWNrOiAjMDUwNTA1O1xcbiRibHVlOiAjMWU0MGIyO1xcblwiLFwiQG1peGluIHBsYWNlaG9sZGVyIHtcXG4gICY6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xcbiAgICBAY29udGVudDtcXG4gIH1cXG4gICY6LW1vei1wbGFjZWhvbGRlciB7XFxuICAgIEBjb250ZW50O1xcbiAgfVxcbiAgJjo6LW1vei1wbGFjZWhvbGRlciB7XFxuICAgIEBjb250ZW50O1xcbiAgfVxcbiAgJjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xcbiAgICBAY29udGVudDtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiaG9tZVwiOiBcIkhvbWVfaG9tZV9fQ3JrcXhcIixcblx0XCJob21lX19oZWFkZXJcIjogXCJIb21lX2hvbWVfX2hlYWRlcl9fMmpnQUdcIixcblx0XCJob21lX19idG5cIjogXCJIb21lX2hvbWVfX2J0bl9fMnFIRkVcIixcblx0XCJob21lX19idG5fX2NvbnRlbnRcIjogXCJIb21lX2hvbWVfX2J0bl9fY29udGVudF9fMUpsTUFcIixcblx0XCJob21lX19pbnB1dFwiOiBcIkhvbWVfaG9tZV9faW5wdXRfXzFwTUZRXCIsXG5cdFwiaG9tZV9fZm9vdGVyXCI6IFwiSG9tZV9ob21lX19mb290ZXJfXzFpSHFsXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./styles/Home.module.scss\n");

/***/ })

})