(()=>{"use strict";var e={982:(e,n,t)=>{t.d(n,{Z:()=>c});var a=t(81),o=t.n(a),r=t(645),i=t.n(r)()(o());i.push([e.id,'body {\n  margin: 0;\n  height: 99vh;\n  display: flex;\n  flex-direction: column;\n  font-family: "Courier New", Courier, monospace;\n}\n\n#content {\n  margin-left: 5%;\n  margin-top: 5%;\n}\n\n.navBarContainer {\n  display: flex;\n  justify-content: center;\n  gap: 3%;\n  position: fixed;\n  top: 2%;\n  height: 5%;\n  width: 100%;\n}\n\n.navBarContainer > * {\n  cursor: pointer;\n}\n\n.homePageContainer {\n  display: flex;\n}\n\n.imageContainer {\n  width: 80%;\n}\n.imageContainer img {\n  width: 90%;\n  border-radius: 5%;\n}\n\n.headerContainer {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n}\n\n.headerContainer .header {\n  font-size: 3rem;\n}\n\n.headerContainer .subHeader {\n  font-size: 2rem;\n}\n\n.headerContainer button {\n  margin-top: 5%;\n  width: 10%;\n  height: 40px;\n  border: none;\n  border-radius: 5%;\n  cursor: pointer;\n  background-color: orangered;\n  color: rgb(255, 255, 255);\n  font-weight: bold;\n}\n\n.headerContainer button:hover {\n  background-color: rgba(255, 68, 0, 0.559);\n}\n\n.headerContainer button:active {\n  transform: scale(0.95);\n}\n\n.menuPageContainer {\n  height: 90vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.menuPage {\n  position: relative;\n  display: grid;\n  gap: 5%;\n  grid-template-columns: 1fr 1fr;\n  background-color: white;\n  width: 50%;\n  height: 60%;\n}\n\n.menuPage .header {\n  position: absolute;\n  top: 0%;\n  left: 50%;\n  font-size: 1rem;\n  font-weight: bold;\n}\n\n.menuPage .card {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 2%;\n  align-items: center;\n}\n\n.menuPage .card > *:first-child {\n  font-size: 1rem;\n  font-weight: bold;\n  text-decoration: underline;\n  text-decoration-color: orangered;\n  text-decoration-style: solid;\n}\n\n.menuPage .card > *:nth-child(2) {\n  margin-left: 10%;\n  margin-right: 10%;\n  text-align: center;\n}\n\n.menuPage .card > :last-child {\n  font-weight: bold;\n}\n\n.aboutPageContainer {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 90vh;\n}\n.aboutPage {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n  background-color: pink;\n  border-radius: 10%;\n  width: 50%;\n  height: 60%;\n  overflow: auto;\n  gap: 2%;\n}\n\n.aboutPage .header {\n  font-size: 2rem;\n}\n\n.aboutPage .aboutBody {\n  font-size: 1.5vh;\n  display: flex;\n  flex-wrap: wrap;\n  margin-left: 10%;\n  margin-right: 10%;\n  flex-shrink: 1;\n}\n',""]);const c=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",a=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),a&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),a&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,a,o,r){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(a)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<e.length;d++){var u=[].concat(e[d]);a&&i[u[0]]||(void 0!==r&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=r),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),n.push(u))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,a=0;a<n.length;a++)if(n[a].identifier===e){t=a;break}return t}function a(e,a){for(var r={},i=[],c=0;c<e.length;c++){var s=e[c],d=a.base?s[0]+a.base:s[0],u=r[d]||0,l="".concat(d," ").concat(u);r[d]=u+1;var m=t(l),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==m)n[m].references++,n[m].updater(p);else{var h=o(p,a);a.byIndex=c,n.splice(c,0,{identifier:l,updater:h,references:1})}i.push(l)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var r=a(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<r.length;i++){var c=t(r[i]);n[c].references--}for(var s=a(e,o),d=0;d<r.length;d++){var u=t(r[d]);0===n[u].references&&(n[u].updater(),n.splice(u,1))}r=s}}},569:e=>{var n={};e.exports=function(e,t){var a=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var a="";t.supports&&(a+="@supports (".concat(t.supports,") {")),t.media&&(a+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(a+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),a+=t.css,o&&(a+="}"),t.media&&(a+="}"),t.supports&&(a+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),n.styleTagTransform(a,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(a){var o=n[a];if(void 0!==o)return o.exports;var r=n[a]={id:a,exports:{}};return e[a](r,r.exports,t),r.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var a in n)t.o(n,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:n[a]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{var e=t(379),n=t.n(e),a=t(795),o=t.n(a),r=t(569),i=t.n(r),c=t(565),s=t.n(c),d=t(216),u=t.n(d),l=t(589),m=t.n(l),p=t(982),h={};h.styleTagTransform=m(),h.setAttributes=s(),h.insert=i().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=u(),n()(p.Z,h),p.Z&&p.Z.locals&&p.Z.locals;const f=(e,n,t)=>({name:e,description:n,price:t}),g=[],v=f("Swedish Taco","The tastiest of Tacos","325$");g.push(v);const b=f("Volcanic Pizza","Straight outta Pompei","500$");g.push(b);const y=f("Home-Made Big Mac","Better Than The Original!","500$");g.push(y);const C=f("Chinese Pasta Al Fredo","No better Pasta than Pasta from the Middle-Kingdom","222$");g.push(C);const x=f("Deconstructed Avocado Toast","The toast that has put millions in povety","9999$");g.push(x);const E=f("Banh Mi","The Original, because you don't change Banh Mi","1$");function T(){const e=document.querySelector("#content"),n=document.createElement("div");e.appendChild(n),n.classList.add("menuPageContainer");const t=document.createElement("div");n.appendChild(t),t.className="menuPage";const a=document.createElement("div");a.innerText="Menu",a.className="header",t.appendChild(a),g.forEach((e=>{const n=document.createElement("div");n.className="card";const a=document.createElement("div");n.appendChild(a),a.innerText=e.name;const o=document.createElement("div");n.appendChild(o),o.innerText=e.description;const r=document.createElement("div");n.appendChild(r),r.innerText=e.price,t.appendChild(n)}))}function P(){const e=document.querySelector("#content"),n=document.createElement("div");n.classList.add("homePageContainer");const t=document.createElement("div");t.className="imageContainer";const a=document.createElement("img");a.src="../src/images/homePage.png",t.appendChild(a),n.appendChild(t);const o=document.createElement("div");o.className="headerContainer";const r=document.createElement("div");r.className="header",r.innerText="Welcome to the Bite";const i=document.createElement("div");i.className="subHeader",i.innerText="Discover your Tastes!",o.appendChild(r),o.appendChild(i),n.appendChild(o);const c=document.createElement("button");c.innerText="Menu",o.appendChild(c),c.addEventListener("click",(()=>{c.parentElement.parentElement.remove(),T()})),e.appendChild(n)}g.push(E),P(),function(){const e=document.createElement("div");e.className="navBarContainer",document.body.appendChild(e);const n=document.createElement("a");n.innerText="Home",e.appendChild(n);const t=document.createElement("a");t.innerText="Menu",e.appendChild(t);const a=document.createElement("a");a.innerText="About Us",e.appendChild(a),e.childNodes.forEach((e=>{e.addEventListener("click",(e=>{const n=document.querySelector("#content");n.parentElement.removeChild(n);const t=document.createElement("div");t.id="content",document.body.appendChild(t),"About Us"===e.target.innerText?function(){const e=document.querySelector("#content"),n=document.createElement("div");e.appendChild(n),n.classList.add("aboutPageContainer");const t=document.createElement("div");t.className="aboutPage",n.appendChild(t);const a=document.createElement("div");a.className="header",a.innerHTML="Contact Us",t.appendChild(a);const o=document.createElement("div");o.className="aboutBody",o.innerHTML="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",t.appendChild(o)}():"Home"===e.target.innerText?P():"Menu"===e.target.innerText&&T()}))}))}()})()})();