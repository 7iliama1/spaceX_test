/*! For license information please see main.76394f3bf1331ef005d7.js.LICENSE.txt */
(()=>{"use strict";var e,n,t,i={487:(e,n,t)=>{var i=t(378),r=t(634),o=t(165),a=t(246);const l=function(){return(0,a.jsx)("section",{className:"info",children:(0,a.jsxs)("div",{className:"info__wrapper",children:[(0,a.jsxs)("div",{className:"info__column info__column_position_left",children:[(0,a.jsxs)("h1",{className:"info__title",children:[(0,a.jsx)("span",{className:"info__title-uppercase",children:"Путешествие "}),"на красную планету"]}),(0,a.jsx)("button",{className:"info__btn-start",type:"button",children:"Начать путешествие"})]}),(0,a.jsx)("div",{className:"info__column info__column_position_right",children:(0,a.jsxs)("ul",{className:"info__list",children:[(0,a.jsx)("li",{className:"info__list-item",children:(0,a.jsxs)(o.rU,{to:"/",className:"info__link info__link_position_left info__link_position_top",children:[(0,a.jsx)("span",{className:"info__text-accent-small",children:"мы"}),(0,a.jsx)("span",{className:"info__text-accent-big",children:" 1 "}),"на рынке"]})}),(0,a.jsx)("li",{className:"info__list-item",children:(0,a.jsxs)(o.rU,{to:"/",className:"info__link info__link_position_top",children:["гарантируем",(0,a.jsx)("span",{className:"info__text-accent-big",children:" 50% "}),"безопасность"]})}),(0,a.jsx)("li",{className:"info__list-item",children:(0,a.jsxs)(o.rU,{to:"/",className:"info__link info__link_position_left info__link_position_bottom",children:["календарик за",(0,a.jsxs)("span",{className:"info__text-accent-big",children:[" ","2001",(0,a.jsx)("span",{className:"info__text-accent-small-bold",children:"г. "})]}),"в подарок"]})}),(0,a.jsx)("li",{className:"info__list-item",children:(0,a.jsxs)(o.rU,{to:"/",className:"info__link info__link_position_bottom",children:["путешествие",(0,a.jsx)("span",{className:"info__text-accent-big",children:" 597 "}),"дней"]})})]})})]})})};const s=function(e){var n=e.isSideMenu,t=e.onClose;return(0,a.jsx)("nav",{className:"navigation ".concat(n?"":"navigation_hidden"),children:(0,a.jsxs)("ul",{className:"navigation__list ".concat(n?"navigation__list_direction_column":""),children:[(0,a.jsx)("li",{className:"navigation__item",children:(0,a.jsx)(o.rU,{to:"/",className:"navigation__link ".concat(n?"navigation__link_place_burger-menu":""),onClick:t,children:"Главная"})}),(0,a.jsx)("li",{className:"navigation__item",children:(0,a.jsx)(o.rU,{to:"/",className:"navigation__link ".concat(n?"navigation__link_place_burger-menu":""),onClick:t,children:"Технология"})}),(0,a.jsx)("li",{className:"navigation__item",children:(0,a.jsx)(o.rU,{to:"/",className:"navigation__link ".concat(n?"navigation__link_place_burger-menu":""),onClick:t,children:"График полётов"})}),(0,a.jsx)("li",{className:"navigation__item",children:(0,a.jsx)(o.rU,{to:"/",className:"navigation__link ".concat(n?"navigation__link_place_burger-menu":""),onClick:t,children:"Гарантии"})}),(0,a.jsx)("li",{className:"navigation__item",children:(0,a.jsx)(o.rU,{to:"/",className:"navigation__link ".concat(n?"navigation__link_place_burger-menu":""),onClick:t,children:"О компании"})}),(0,a.jsx)("li",{className:"navigation__item",children:(0,a.jsx)(o.rU,{to:"/",className:"navigation__link ".concat(n?"navigation__link_place_burger-menu":""),onClick:t,children:"Контакты"})})]})})},c=t.p+"images/logo.516d256b533013e633e4.png";const _=function(e){var n=e.onBurgerClick;return(0,a.jsx)("header",{className:"header",children:(0,a.jsxs)("div",{className:"header__wrapper",style:{color:"#fff"},children:[(0,a.jsx)(o.rU,{to:"/",className:"header__link",children:(0,a.jsx)("img",{src:c,alt:"Лого SpaceX",className:"header__logo"})}),(0,a.jsx)(s,{}),(0,a.jsx)("button",{className:"header__btn-burger",type:"button","aria-label":"Меню навигации",onClick:n})]})})};var u=["isActive","onClose"];function f(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}const d=function(e){var n=e.isActive,t=e.onClose,r=f(e,u);return(0,i.useEffect)((function(){function e(e){"Escape"===e.key&&t()}if(n)return document.addEventListener("keydown",e),function(){return document.removeEventListener("keydown",e)}}),[n,t]),(0,a.jsx)("div",{className:"overlay ".concat(n?"overlay_active":""),onMouseDown:function(e){e.target===e.currentTarget&&t()},children:r.children})};const m=function(e){var n=e.isBurgerMenu,t=e.onClose;return(0,a.jsx)(d,{isActive:n,onClose:t,children:(0,a.jsxs)("div",{className:"burger-menu ".concat(n?"burger-menu_active":""),children:[(0,a.jsx)("button",{className:"burger-menu__btn-close hover-button",type:"button","aria-label":"Закрыть меню",onClick:t}),(0,a.jsx)(s,{isSideMenu:!0,onClose:t})]})})};function p(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var i,r,o,a,l=[],s=!0,c=!1;try{if(o=(t=t.call(e)).next,0===n){if(Object(t)!==t)return;s=!1}else for(;!(s=(i=o.call(t)).done)&&(l.push(i.value),l.length!==n);s=!0);}catch(e){c=!0,r=e}finally{try{if(!s&&null!=t.return&&(a=t.return(),Object(a)!==a))return}finally{if(c)throw r}}return l}}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return h(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return h(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,i=new Array(n);t<n;t++)i[t]=e[t];return i}const v=function(){var e=p((0,i.useState)(!1),2),n=e[0],t=e[1];return(0,a.jsxs)("div",{className:"app__content",children:[(0,a.jsx)(_,{onBurgerClick:function(){t(!n)}}),(0,a.jsx)(l,{}),(0,a.jsx)(m,{isBurgerMenu:n,onClose:function(){t(!1)}})]})};r.createRoot(document.getElementById("root")).render((0,a.jsx)(i.StrictMode,{children:(0,a.jsx)(o.UT,{children:(0,a.jsx)(v,{})})}))}},r={};function o(e){var n=r[e];if(void 0!==n)return n.exports;var t=r[e]={exports:{}};return i[e](t,t.exports,o),t.exports}o.m=i,e=[],o.O=(n,t,i,r)=>{if(!t){var a=1/0;for(_=0;_<e.length;_++){for(var[t,i,r]=e[_],l=!0,s=0;s<t.length;s++)(!1&r||a>=r)&&Object.keys(o.O).every((e=>o.O[e](t[s])))?t.splice(s--,1):(l=!1,r<a&&(a=r));if(l){e.splice(_--,1);var c=i();void 0!==c&&(n=c)}}return n}r=r||0;for(var _=e.length;_>0&&e[_-1][2]>r;_--)e[_]=e[_-1];e[_]=[t,i,r]},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,o.t=function(e,i){if(1&i&&(e=this(e)),8&i)return e;if("object"==typeof e&&e){if(4&i&&e.__esModule)return e;if(16&i&&"function"==typeof e.then)return e}var r=Object.create(null);o.r(r);var a={};n=n||[null,t({}),t([]),t(t)];for(var l=2&i&&e;"object"==typeof l&&!~n.indexOf(l);l=t(l))Object.getOwnPropertyNames(l).forEach((n=>a[n]=()=>e[n]));return a.default=()=>e,o.d(r,a),r},o.d=(e,n)=>{for(var t in n)o.o(n,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;o.g.importScripts&&(e=o.g.location+"");var n=o.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var t=n.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e+"../../"})(),(()=>{var e={179:0};o.O.j=n=>0===e[n];var n=(n,t)=>{var i,r,[a,l,s]=t,c=0;if(a.some((n=>0!==e[n]))){for(i in l)o.o(l,i)&&(o.m[i]=l[i]);if(s)var _=s(o)}for(n&&n(t);c<a.length;c++)r=a[c],o.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return o.O(_)},t=self.webpackChunk=self.webpackChunk||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))})();var a=o.O(void 0,[930],(()=>o(487)));a=o.O(a)})();