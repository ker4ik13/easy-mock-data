!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("mock-data",[],t):"object"==typeof exports?exports["mock-data"]=t():e["mock-data"]=t()}("undefined"==typeof self?this:self,(()=>(()=>{"use strict";var e={872:(e,t)=>{function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function a(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==r(e)||null===e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var n=a.call(e,"string");if("object"!==r(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===r(o)?o:String(o)),n)}var o}Object.defineProperty(t,"__esModule",{value:!0});var n=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,r;return t=e,(r=[{key:"string",value:function(e,t){for(var r="",a=0;a<e;a++){var n=Math.floor(62*Math.random());r+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(n)}return(null==t?void 0:t.isUpperCase)&&(r=r.split("").map((function(e){return e.toUpperCase()})).join("")),(null==t?void 0:t.isFirstLetterCapitalized)&&(r=r[0].toUpperCase()+r.slice(1)),r}},{key:"text",value:function(e,t){for(var r="",a=["apple","banana","cherry","date","wildberry","fig","grape","honeydew","kiwi","lemon","mango","nectarine"],n=a.length,o=0;o<e;o++){var i=a[Math.floor(Math.random()*n)],s=i;(0===o&&(null==t?void 0:t.capitalizeFirstLetter)||(null==t?void 0:t.everyWordIsCapitalized))&&(s=i.charAt(0).toUpperCase()+i.slice(1)),r+=s,o<e-1&&(r+=" ")}return(null==t?void 0:t.uppercaseWords)&&(r=r.toUpperCase()),r}},{key:"number",value:function(e){var t=Math.pow(10,e-1),r=Math.pow(10,e)-1;return Math.floor(Math.random()*(r-t+1))+t}},{key:"numberArray",value:function(e){for(var t=[],r=0;r<e;r++)r%2==0?t.push(this.number(5)):t.push(this.number(4));return t}},{key:"stringArray",value:function(e){for(var t=[],r=0;r<e;r++)r%2==0?t.push(this.string(7)):t.push(this.string(9));return t}},{key:"numberInRange",value:function(e,t){return Math.floor(Math.random()*(t-e+1))+e}},{key:"dateInRange",value:function(e,t,r){var a=this.numberInRange(e.getTime(),t.getTime());return r.returnIsoDate?new Date(a).toISOString():r.returnSeconds?new Date(a).getTime():new Date(a)}},{key:"name",value:function(){var e=["John","Michael","Robert","David","James","William","Charles","Joseph","Richard","Daniel","Thomas","Matthew","Christopher","Andrew","Brian","Kevin","Anthony","Steven","Mark","Paul","Mary","Patricia","Jennifer","Linda","Elizabeth","Barbara","Susan","Jessica","Sarah","Karen","Nancy","Lisa","Margaret","Betty","Dorothy","Sandra","Ashley","Kimberly","Donna","Emily"];return e[this.numberInRange(0,e.length-1)]}},{key:"lastName",value:function(){var e=["Smith","Johnson","Williams","Jones","Brown","Davis","Miller","Wilson","Moore","Taylor","Anderson","Thomas","Jackson","White","Harris","Martin","Thompson","Garcia","Martinez","Robinson"];return e[this.numberInRange(0,e.length-1)]}},{key:"fullName",value:function(){var e=this.lastName(),t=this.name();return"".concat(t," ").concat(e)}},{key:"address",value:function(){var e=["Main St","Oak Ave","Elm St","Maple Rd","Cedar Ln"],t=Math.floor(Math.random()*e.length);return{country:["USA","Canada","UK","Australia","Germany"][t],state:["NY","CA","IL","TX","FL"][t],city:["New York","Los Angeles","Chicago","Houston","Miami"][t],street:e[t],postalCode:["10001","90001","60601","77001","33101"][t]}}},{key:"password",value:function(){for(var e="",t=Math.floor(9*Math.random())+8,r=0;r<t;r++)e+="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*?"[Math.floor(70*Math.random())];return e}},{key:"email",value:function(e){var t=["example.com","test.net","sample.org","website.dev","myapp.io","company.biz","blog.info","store.shop","portfolio.design","community.online","gmail.com","yandex.ru","mail.ru"],r=this.numberInRange(0,t.length-1),a=this.name().toLowerCase();return e?"".concat(e.toLowerCase(),"@").concat(t[r]):"".concat(a,"@").concat(t[r])}},{key:"phoneNumber",value:function(){var e="";switch(Math.floor(4*Math.random())){case 0:e="+1".concat(Math.floor(1e10*Math.random()).toString().padStart(10,"0"));break;case 1:e="+44".concat(Math.floor(1e10*Math.random()).toString().padStart(10,"0"));break;case 2:default:e="+7".concat(Math.floor(1e10*Math.random()).toString().padStart(10,"0"));break;case 3:e="+375".concat(Math.floor(1e9*Math.random()).toString().padStart(9,"0"))}return e}},{key:"user",value:function(){var e=this.name();return{firstName:e,lastName:this.lastName(),phoneNumber:this.phoneNumber(),email:this.email(e),password:this.password(),address:this.address()}}},{key:"product",value:function(){var e=["Electronics","Clothing","Home","Beauty","Sports"],t=e[Math.floor(Math.random()*e.length)];return{name:this.string(5),category:t,price:Math.floor(1e4*Math.random())+100,description:this.text(20,{capitalizeFirstLetter:!0})}}}])&&a(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}());t.default=n}},t={};function r(a){var n=t[a];if(void 0!==n)return n.exports;var o=t[a]={exports:{}};return e[a](o,o.exports,r),o.exports}var a={};return(()=>{var e=a,t=r(872);t.default,e.default={mockData:t.default}})(),a.default})()));