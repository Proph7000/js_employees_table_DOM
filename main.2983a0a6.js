parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function e(e){return r(e)||o(e)||t(e)||n()}function n(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function t(e,n){if(e){if("string"==typeof e)return a(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?a(e,n):void 0}}function o(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function r(e){if(Array.isArray(e))return a(e)}function a(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,o=new Array(n);t<n;t++)o[t]=e[t];return o}var i=document.querySelector("table"),c=i.querySelector("tbody"),l=1,s="";function u(n,t){var o=e(n).slice(1,-1);return s===t?l=l?0:1:(l=0,s=t),o.sort(function(e,n){return l?d(t,n,e):d(t,e,n)})}function f(e){return+e.slice(1).split(",").join("")}function d(e,n,t){switch(e){case"Age":return+n.cells[3].innerText-+t.cells[3].innerText;case"Salary":return f(n.cells[4].innerText)-f(t.cells[4].innerText);case"Name":return n.cells[0].innerText.localeCompare(t.cells[0].innerText);case"Position":return n.cells[1].innerText.localeCompare(t.cells[1].innerText);case"Office":return n.cells[2].innerText.localeCompare(t.cells[2].innerText)}}i.addEventListener("click",function(n){var t=document.querySelectorAll("tr"),o=n.target.closest("th").innerText;o&&function(){for(var n=e(u(t,o)).map(function(n){return e(n.cells).map(function(e){return e.innerText})}),r=function(o){e(t[o].cells).forEach(function(e,t){e.innerText=n[o-1][t]})},a=1;a<t.length-1;a++)r(a)}()}),c.addEventListener("click",function(e){var n=e.target.closest("tr"),t=document.querySelectorAll(".active");n.classList.contains("active")||t.forEach(function(e){e.classList.remove("active")}),n.classList.toggle("active")}),i.insertAdjacentHTML("afterend",'\n  <form class="new-employee-form">\n    <label>Name: \n      <input data-qa="name" name="name" type="text" required>\n    </label>\n\n    <label>Position: \n      <input data-qa="position" name="position" type="text" required>\n    </label>\n\n    <label>Office: \n      <select data-qa="office" name="office" type="text">\n        <option value="Tokyo">Tokyo</option>\n        <option value="Singapore">Singapore</option>\n        <option value="London">London</option>\n        <option value="New York">New York</option>\n        <option value="Edinburgh">Edinburgh</option>\n        <option value="San Francisco">San Francisco</option>\n      </select>\n    </label>\n\n    <label>Age: \n      <input data-qa="age" name="age" type="number" required>\n    </label>\n\n    <label>Salary: \n      <input data-qa="salary" name="salary" type="number" required>\n    </label>\n\n    <button>Save to table</button>\n  </form>\n');var p=document.querySelector(".new-employee-form");function m(e){var n="",t=!1;e.get("name").length<4&&(n+="Name must have not less than 4 letters!<br><br>",t=!0),(+e.get("age")<18||+e.get("age")>90)&&(n+=" Age must be not less than 18 years old or less than 90 years old!<br><br>",t=!0),+e.get("salary")<0&&(n+="Salary cannot be negative!",t=!0),t?v("Error!",n,"error",8e3):(v("Success!","All data entered successfully! Added a new employee.","success",4e3),c.insertAdjacentHTML("beforeend","\n    <tr>\n      <td>\n        ".concat(y(e.get("name")),"\n      </td>\n\n      <td>\n        ").concat(y(e.get("position")),"\n      </td>\n\n      <td>\n        ").concat(e.get("office"),"\n      </td>\n\n      <td>\n        ").concat(e.get("age"),"\n      </td>\n\n      <td>\n        ").concat(g(e.get("salary")),"\n      </td>\n    </tr>\n  ")))}function g(e){return"$"+new Intl.NumberFormat("en-GB").format(e)}function y(e){return e.split(" ").map(function(e){return e.slice(0,1).toUpperCase()+e.slice(1)}).join(" ")}function b(){var e=document.querySelector(".notification"),n={},t=p;e&&(t=e);var o=t.getBoundingClientRect();return n.x=o.x+window.pageXOffset,n.y=o.bottom+15+window.pageYOffset,n}p.addEventListener("submit",function(e){var n=new FormData(p);e.preventDefault(),m(n),e.target.reset()});var v=function(e,n,t,o){var r=document.body,a=b();r.insertAdjacentHTML("afterbegin",'\n    <div data-qa="notification" class="notification '.concat(t,'">\n      <h2 class="title">\n        ').concat(e,"\n      </h2>\n      <p>\n        ").concat(n,"\n      </p>\n    </div>\n  "));var i=document.querySelector(".notification");i.style.top=a.y+"px",i.style.left=a.x+"px",i.style.zIndex=1,setTimeout(x,o,i)};function h(e){document.querySelectorAll(".notification").forEach(function(n){var t=n.getBoundingClientRect();n.style.top=t.y-e-15+"px"})}function x(e){var n=e.offsetHeight;e.remove(),h(n)}i.addEventListener("dblclick",function(e){var n=e.target.closest("td"),t=e.target.closest("tr"),o="",r=n.innerText,a="",i=getComputedStyle(n),c=n.clientWidth-parseInt(i.paddingLeft)-parseInt(i.paddingRight);switch(n.innerText="",n){case t.cells[0]:a="name",o="text";break;case t.cells[1]:a="position",o="text";break;case t.cells[2]:a="office",o="text";break;case t.cells[3]:a="age",o="number";break;case t.cells[4]:a="salary",o="number"}function l(){n.insertAdjacentHTML("afterbegin",'\n      <form id="format-cell">\n        <input class="cell-input" name="'.concat(a,'" type="').concat(o,'">\n      </form>\n    '))}var s="";switch(a){case"name":v("Worning!",s="Name must have not less than 4 letters!","worning",4e3),l();break;case"position":l();break;case"age":v("Worning!",s="Age must be not less than 18 years old or less than 90 years old!","worning",4e3),l();break;case"salary":v("Worning!",s="Salary cannot be negative!","worning",4e3),l();break;case"office":n.insertAdjacentHTML("afterbegin",'\n        <form id="format-cell">\n          <select class="cell-input" name="office" type="text">\n            <option value="Tokyo">Tokyo</option>\n            <option value="Singapore">Singapore</option>\n            <option value="London">London</option>\n            <option value="New York">New York</option>\n            <option value="Edinburgh">Edinburgh</option>\n            <option value="San Francisco">San Francisco</option>\n          </select>\n        </form>\n      ')}var u=document.querySelector("#format-cell"),f=document.querySelector(".cell-input");function d(){var e=new FormData(u);function t(e){u.remove(),v("Error!",e,"error",4e3),n.innerText=r}if("salary"===a&&e.get(a)<0)t(s);else if("name"===a&&e.get(a).length<4)t(s);else if("age"===a&&(+e.get(a)<18||+e.get(a)>90))t(s);else{var o="salary"===a?g(e.get(a)):e.get(a);""===e.get(a)?n.innerText=r:n.innerText=o}}u.addEventListener("dblclick",function(e){e.stopPropagation()}),f.style.width=c+"px",f.focus(),f.addEventListener("blur",function(){d()}),f.addEventListener("keydown",function(e){"Enter"===e.key&&d()}),"office"===a&&f.addEventListener("change",function(){d()})});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.2983a0a6.js.map