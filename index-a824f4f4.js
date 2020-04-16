const e=(e,t)=>e===t,t=Symbol("error"),n={},r={owned:null,cleanups:null,context:null,owner:null};let o=null,i=null,s=null,l=null,c=[],a=0;function u(e,n){n&&(o=n);const s=i,l=o,a=0===e.length?r:{owned:null,cleanups:null,context:null,owner:l};let u;o=a,i=null;try{u=e(()=>N(a))}catch(e){const n=O(o,t);if(!n)throw e;n.forEach(t=>t(e))}finally{for(;c.length;)c.shift()();i=s,o=l}return u}function f(e,t){const r={value:e,observers:null,observerSlots:null,pending:n,comparator:t};return[A.bind(r),k.bind(r)]}function d(e,t){C(S(e,t))}function h(e,t,r){const o=S(e,t);return o.pending=n,o.observers=null,o.observerSlots=null,o.comparator=r,C(o),A.bind(o)}function g(e){let t=s,r=s=[];const o=e();return s=t,P(()=>{for(let e=0;e<r.length;e+=1){const t=r[e];if(t.pending!==n){const e=t.pending;t.pending=n,k.call(t,e)}}}),o}function p(e){let t,n=i;return i=null,t=e(),i=n,t}function v(e){c.push(e)}function y(e){return null===o?console.warn("cleanups created outside a `createRoot` or `render` will never be run"):null===o.cleanups?o.cleanups=[e]:o.cleanups.push(e),e}function m(){return null!==i}function b(e){const t=Symbol("context");return{id:t,Provider:x(t),defaultValue:e}}function w(e){return O(o,e.id)||e.defaultValue}function A(){if(this.state&&this.sources){const e=l;l=null,1===this.state?C(this):function e(t){t.state=0;for(let n=0;n<t.sources.length;n+=1){const r=t.sources[n];r.sources&&(1===r.state?j(r):2===r.state&&e(r))}}(this),l=e}if(i){const e=this.observers?this.observers.length:0;i.sources?(i.sources.push(this),i.sourceSlots.push(e)):(i.sources=[this],i.sourceSlots=[e]),this.observers?(this.observers.push(i),this.observerSlots.push(i.sources.length-1)):(this.observers=[i],this.observerSlots=[i.sources.length-1])}return this.value}function k(e){if(!this.comparator||!this.comparator(this.value,e)){if(s)return this.pending===n&&s.push(this),void(this.pending=e);this.value=e,!this.observers||l&&!this.observers.length||P(()=>{for(let e=0;e<this.observers.length;e+=1){const t=this.observers[e];if(t.observers&&2!==t.state&&$(t),t.state=1,l.length>1e6)throw new Error("Potential Infinite Loop Detected.");l.push(t)}})}}function C(e){if(!e.fn)return;N(e);const t=o,n=i,r=a;i=o=e;const s=e.fn(e.value);(!e.updatedAt||e.updatedAt<=r)&&(e.observers&&e.observers.length?k.call(e,s):e.value=s,e.updatedAt=r),i=n,o=t}function S(e,t){const n={fn:e,state:0,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:o,context:null};return null===o?console.warn("computations created outside a `createRoot` or `render` will never be disposed"):o!==r&&(o.owned?o.owned.push(n):o.owned=[n]),n}function j(e){let t=1===e.state&&e;for(;e=e.owner;)1===e.state&&(t=e);t&&C(t)}function P(e){if(l)return e();l=[],a++;try{e();for(let e=0;e<l.length;e+=1)try{j(l[e])}catch(e){const n=O(o,t);if(!n)throw e;n.forEach(t=>t(e))}}finally{for(l=null;c.length;)c.shift()()}}function $(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=2,n.observers&&$(n))}}function N(e){let t;if(e.sources){for(;e.sources.length;){const t=e.sources.pop(),n=e.sourceSlots.pop(),r=t.observers;if(r&&r.length){const e=r.pop(),o=t.observerSlots.pop();n<r.length&&(e.sourceSlots[o]=n,r[n]=e,t.observerSlots[n]=o)}}e.state=0}if(e.owned){for(t=0;t<e.owned.length;t++)N(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}}function O(e,t){return e&&(e.context&&e.context[t]||e.owner&&O(e.owner,t))}function x(e){return function(t){let n;return d(()=>{o.context={[e]:t.value},n=p(()=>function e(t){if("function"==typeof t)return h(()=>e(t()));if(Array.isArray(t)){const n=[];for(let r=0;r<t.length;r++){let o=e(t[r]);Array.isArray(o)?n.push.apply(n,o):n.push(o)}return n}return t}(t.children))}),n}}const _=Symbol("state-raw"),T=Symbol("state-node"),B=Symbol("state-proxy");function U(e,t){return e[B]||(e[B]=new Proxy(e,t||z))}function M(e){return null!=e&&"object"==typeof e&&(e.__proto__===Object.prototype||Array.isArray(e))}function L(e){let t,n,r;if(t=null!=e&&e[_])return t;if(!M(e))return e;if(Array.isArray(e)){Object.isFrozen(e)&&(e=e.slice(0));for(let t=0,o=e.length;t<o;t++)r=e[t],(n=L(r))!==r&&(e[t]=n)}else{Object.isFrozen(e)&&(e=Object.assign({},e));let t=Object.keys(e);for(let o=0,i=t.length;o<i;o++)r=e[t[o]],(n=L(r))!==r&&(e[t[o]]=n)}return e}function E(e){let t=e[T];return t||(e[T]=t={}),t}const z={get(e,t){if(t===_)return e;if(t===B||t===T)return;const n=e[t],r=M(n);if(m()&&("function"!=typeof n||e.hasOwnProperty(t))){let o,i;r&&(o=E(n))&&(i=o._||(o._=f()),i[0]()),o=E(e),i=o[t]||(o[t]=f()),i[0]()}return r?U(n):n},set:()=>!0,deleteProperty:()=>!0},F={get(e,t){if(t===_)return e;const n=e[t];return M(n)?new Proxy(n,F):n},set:(e,t,n)=>(H(e,t,L(n)),!0),deleteProperty:(e,t)=>(H(e,t,void 0),!0)};function H(e,t,n,r){if(!r&&e[t]===n)return;const o=Array.isArray(e)||!(t in e);void 0===n?delete e[t]:e[t]=n;let i,s=E(e);(i=s[t])&&i[1](),o&&(i=s._)&&i[1]()}function I(e,t,n=[]){let r,o=e;if(t.length>1){r=t.shift();const i=typeof r,s=Array.isArray(e);if(Array.isArray(r)){for(let o=0;o<r.length;o++)I(e,[r[o]].concat(t),[r[o]].concat(n));return}if(s&&"function"===i){for(let o=0;o<e.length;o++)r(e[o],o)&&I(e,[o].concat(t),[o].concat(n));return}if(s&&"object"===i){const{from:o=0,to:i=e.length-1,by:s=1}=r;for(let r=o;r<=i;r+=s)I(e,[r].concat(t),[r].concat(n));return}if(t.length>1)return void I(e[r],t,[r].concat(n));o=e[r],n=[r].concat(n)}let i=t[0];if("function"==typeof i){const e=void 0===r||M(o)?new Proxy(o,F):o;if(i=i(e,n),i===e||void 0===i)return}i=L(i),void 0===r||M(o)&&M(i)&&!Array.isArray(i)?function(e,t,n){const r=Object.keys(t);for(let o=0;o<r.length;o+=1){const i=r[o];H(e,i,t[i],n)}}(o,i):H(e,r,i)}function R(e){const t=L(e||{});return[U(t),function(...e){g(()=>I(t,e))}]}const D=Symbol("fallback");const V={};function J(e){V.hydrate=e}function q(){let e=0;const[t,n]=f(!1);return[t,()=>0==e++&&n(!0),()=>--e<=0&&n(!1)]}const G=b({}),[K,Q,W]=q();function X(e){const[t,n]=f(e),[r,o]=f(),[i,s]=f(),l=new Set;let c,a=!1,u=null;function d(e){c=void 0,g(()=>{n(e),a&&(a=!1,s());for(let e of l.keys())e.decrement();l.clear()})}return[function(){const e=w(G),n=t();if(u)throw u;return r(),c&&e.increment&&!l.has(e)&&(e.increment(),l.add(e)),n},function(e){return u=null,null!=e&&"object"==typeof e&&"then"in e?(c=e,a||(a=!0,g(()=>{s(),o()})),e.then(t=>{c===e&&d(t)},t=>{c===e&&(u=t,d(void 0))})):(c=void 0,d(e)),()=>(i(),a)}]}function Y(e){const t=f(),[n,r]=X(e);return[()=>(n(),t[0]()),t[1],r]}G.active=K,G.increment=Q,G.decrement=W;const Z={get(e,t){if(t===_)return e;if(t===B||t===T)return;const n=e[t],r=M(n);if(m()&&("function"!=typeof n||e.hasOwnProperty(t))){let o,i;r&&(o=E(n))&&(i=o._||(o._=f()),i[0]()),o=E(e),i=o[t]||(o[t]=Y(n)),i[0]()}return r?U(n):n},set:()=>!0,deleteProperty:()=>!0};function ee(e){const t=L(e||{}),n=U(t,Z),r={};function o(...e){g(()=>I(t,e))}return[n,function(e,n){const i=E(t),s=Object.keys(e);for(let l=0;l<s.length;l++){const c=s[l],a=e[c],u=e=>(n?o(c,n(e)):H(t,c,e),e),f=(i[c]||(i[c]=Y(t[c])))[2](a&&"object"==typeof a&&"then"in a?a.then(u):u(a));!(c in r)&&Object.defineProperty(r,c,{get:()=>f()})}return r},o]}function te(e){return t=>{const n=V.hydrate&&V.hydrate.registry,r=V.hydrate?{id:`${V.hydrate.id}.${V.hydrate.count++}`,count:0,registry:V.hydrate.registry}:void 0;let o,i,s,l;return n?([o,i]=f(),e().then(e=>i(e.default))):([o,s]=X(),s(e().then(e=>e.default))),h(()=>(l=o())&&p(()=>{if(!r)return l(t);const e=V.hydrate;J(r);const n=l(t);return!e&&J(),n}))}}function ne(e){const[t,n,r]=q();return[t,t=>{const o=G.transition;G.transition={timeoutMs:e.timeoutMs,increment:n,decrement:r},n(),t(),r(),v(()=>G.transition=o)}]}function re(e){const{state:t}=w(G);let n;return t?()=>"suspended"===t()?n:n=e():e}const oe=new Set,ie=V;function se(e,t,n){const r=document.createElement("template");r.innerHTML=e,t&&r.innerHTML.split("<").length-1!==t&&console.warn(`Template html does not match input:\n${r.innerHTML}\n\n${e}`);let o=r.content.firstChild;return n&&(o=o.firstChild),o}function le(e,t,n){if(n)for(let e=0;e<n.length;e++)fe(t,n[e]);return p(()=>e(t))}function ce(e){for(let t=0,n=e.length;t<n;t++){const n=e[t];oe.has(n)||(oe.add(n),document.addEventListener(n,de))}}function ae(e,t,n){const r=Object.keys(t);for(let o=0,i=r.length;o<i;o++){const i=r[o],s=!!t[i],l=i.split(/\s+/);if(i&&(!n||n[i]!==s))for(let t=0,n=l.length;t<n;t++)e.classList.toggle(l[t],s)}}function ue(e,t,n,r){if(void 0===n||r||(r=[]),"function"!=typeof t)return pe(e,t,r,n);d(r=>pe(e,t(),r,n),r)}function fe(e,t){const n=e[t];Object.defineProperty(e,t,{get:()=>n(),enumerable:!0})}function de(e){const t="__"+e.type;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get:()=>n});null!==n;){const r=n[t];if(r){const o=n[t+"Data"];if(o?r(o,e):r(e),e.cancelBubble)return}n=n.host&&n.host instanceof Node?n.host:n.parentNode}}function he(e,t,n){for(let r=0,o=t.length;r<o;r++)e.insertBefore(t[r],n)}function ge(e,t,n,r){if(void 0===n)return e.textContent="";const o=r||document.createTextNode("");if(t.length){o!==t[0]&&e.replaceChild(o,t[0]);for(let n=t.length-1;n>0;n--)e.removeChild(t[n])}else e.insertBefore(o,n);return[o]}function pe(e,t,n,r,o){for(;"function"==typeof n;)n=n();if(t===n)return n;const i=typeof t,s=void 0!==r;if(e=s&&n[0]&&n[0].parentNode||e,"string"===i||"number"===i)if("number"===i&&(t=t.toString()),s){let o=n[0];o&&3===o.nodeType?o.data=t:o=document.createTextNode(t),n=ge(e,n,r,o)}else n=""!==n&&"string"==typeof n?e.firstChild.data=t:e.textContent=t;else if(null==t||"boolean"===i){if(ie.hydrate&&ie.hydrate.registry)return n;n=ge(e,n,r)}else{if("function"===i)return d(()=>n=pe(e,t(),n,r)),()=>n;if(Array.isArray(t)){const i=[];if(function e(t,n,r){let o=!1;for(let i=0,s=n.length;i<s;i++){let s,l=n[i];if(l instanceof Node)t.push(l);else if(null==l||!0===l||!1===l);else if(Array.isArray(l))o=e(t,l)||o;else if("string"==(s=typeof l))t.push(document.createTextNode(l));else if("function"===s)if(r){const n=l();o=e(t,Array.isArray(n)?n:[n])||o}else t.push(l),o=!0;else t.push(document.createTextNode(l.toString()))}return o}(i,t,o))return d(()=>n=pe(e,i,n,r,!0)),()=>n;if(ie.hydrate&&ie.hydrate.registry)return n;if(0===i.length){if(n=ge(e,n,r),s)return n}else Array.isArray(n)?0===n.length?he(e,i,r):ve(e,n,i):null==n||""===n?he(e,i):ve(e,s&&n||[e.firstChild],i);n=i}else if(t instanceof Node){if(Array.isArray(n)){if(s)return n=ge(e,n,r,t);ge(e,n,null,t)}else null==n||""===n?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function ve(e,t,n){let r=n.length,o=t.length,i=r,s=0,l=0,c=t[o-1].nextSibling,a=null;for(;s<o||l<i;)if(o===s){const t=i<r?l?n[l-1].nextSibling:n[i-l]:c;for(;l<i;)e.insertBefore(n[l++],t)}else if(i===l)for(;s<o;)a&&a.has(t[s])||e.removeChild(t[s]),s++;else if(t[s]===n[l])s++,l++;else if(t[o-1]===n[i-1])o--,i--;else{if(o-s==1&&i-l==1){a&&a.has(t[s])?e.insertBefore(n[l],i<r?n[i]:c):e.replaceChild(n[l],t[s]);break}if(t[s]===n[i-1]&&n[l]===t[o-1]){const r=t[--o].nextSibling;e.insertBefore(n[l++],t[s++].nextSibling),e.insertBefore(n[--i],r),t[o]=n[i]}else{if(!a){a=new Map;let e=l;for(;e<i;)a.set(n[e],e++)}if(a.has(t[s])){const r=a.get(t[s]);if(l<r&&r<i){let c=s,u=1;for(;++c<o&&c<i&&a.has(t[c])&&a.get(t[c])===r+u;)u++;if(u>r-l){const o=t[s];for(;l<r;)e.insertBefore(n[l++],o)}else e.replaceChild(n[l++],t[s++])}else s++}else e.removeChild(t[s++])}}return n}const ye=b();function me(t){let n,r,o,i,s=0;const[l,c]=f("running",e),a={increment:()=>{1==++s&&(a.initializing?c("fallback"):G.transition?(!i&&(i=G.transition).increment(),n=setTimeout(()=>c("fallback"),G.transition.timeoutMs),c("suspended")):c("fallback"),G.increment())},decrement:()=>{0==--s&&(n&&clearTimeout(n),i&&i.decrement(),i=void 0,c("running"),v(()=>G.decrement()))},state:l,initializing:!0},u=w(ye);return u&&([r,o]=u.register(a.state)),le(G.Provider,{value:a,children:()=>{const e=p(()=>t.children);return()=>{const n=a.state(),i=!r||r(),s=!o||o();return a.initializing&&(a.initializing=!1),"running"===n&&i||"suspended"===n?e:s?t.fallback:void 0}}},["children"])}function be(t){return h(t,void 0,e)}function we(e){const t="fallback"in e&&{fallback:()=>e.fallback};return re(h(function(e,t,n){return"function"!=typeof t?(n=t||{},t=e,r):(n||(n={}),r(e));function r(e){let r=[],o=[],i=[],s=0;return y(()=>{for(let e=0,t=i.length;e<t;e++)i[e]()}),()=>{let l,c,a=e()||[];return p(()=>{let e,t,d,h,g,p,v,y,m=a.length;if(0===m){if(0!==s){for(l=0;l<s;l++)i[l]();i=[],r=[],o=[],s=0}n.fallback&&(r=[D],o[0]=u(e=>(i[0]=e,n.fallback())),s=1)}else if(0===s){for(c=0;c<m;c++)r[c]=a[c],o[c]=u(f);s=m}else{for(d=new Array(m),h=new Array(m),g=0,p=Math.min(s,m);g<p&&r[g]===a[g];g++);for(p=s-1,v=m-1;p>=g&&v>=g&&r[p]===a[v];p--,v--)d[v]=o[p],h[v]=i[p];if(g>v){for(c=p;g<=c;c--)i[c]();const e=p-g+1;return e>0&&(o.splice(g,e),i.splice(g,e)),r=a.slice(0),s=m,o}if(g>p){for(c=g;c<=v;c++)o[c]=u(f);for(;c<m;c++)o[c]=d[c],i[c]=h[c];return r=a.slice(0),s=m,o}for(e=new Map,t=new Array(v+1),c=v;c>=g;c--)y=a[c],l=e.get(y),t[c]=void 0===l?-1:l,e.set(y,c);for(l=g;l<=p;l++)y=r[l],c=e.get(y),void 0!==c&&-1!==c?(d[c]=o[l],h[c]=i[l],c=t[c],e.set(y,c)):i[l]();for(c=g;c<m;c++)c in d?(o[c]=d[c],i[c]=h[c]):o[c]=u(f);s=o.length=m,r=a.slice(0)}return o});function f(e){return i[c]=e,t(a[c],c)}}}}(()=>e.each,e.children,t||void 0)))}function Ae(t){const n="fallback"in t,r=h(()=>!!t.when,void 0,e);return re(h(()=>r()?p(()=>t.children):n?p(()=>t.fallback):void 0))}function ke(t){let n=t.children;Array.isArray(n)||(n=[n]);const r="fallback"in t,o=h(()=>{for(let e=0;e<n.length;e++)if(n[e].when)return e;return-1},void 0,e);return re(h(()=>{const e=o();return p(()=>e<0?r&&t.fallback:n[e].children)}))}function Ce(e){return e}const Se=encodeURIComponent;function je(e,t,n,r,o){const[i,s]=t;t[1]={...s,setPage:e=>r({page:e}),loadArticles(t){const o=function(t){return t.myFeed?e.Articles.feed(i.page,10):t.favoritedBy?e.Articles.favoritedBy(t.favoritedBy,i.page,10):t.tag?e.Articles.byTag(t.tag,i.page,10):t.author?e.Articles.byAuthor(t.author,i.page,10):e.Articles.all(i.page,10,t)}(t).then(({articles:e,articlesCount:t})=>(r({totalPagesCount:Math.ceil(t/10)}),e.reduce((e,t)=>(e[t.slug]=t,e),{})));n({articles:o})},async loadArticle(t,{acceptCached:n=!1}={}){if(n){const e=i.articles[t];if(e)return e}o({[t]:e.Articles.get(t)})},async makeFavorite(t){const n=i.articles[t];if(n&&!n.favorited){r("articles",t,e=>({favorited:!0,favoritesCount:e.favoritesCount+1}));try{await e.Articles.favorite(t)}catch(e){throw r("articles",t,e=>({favorited:!1,favoritesCount:e.favoritesCount-1})),e}}},async unmakeFavorite(t){const n=i.articles[t];if(n&&n.favorited){r("articles",t,e=>({favorited:!1,favoritesCount:e.favoritesCount-1}));try{await e.Articles.unfavorite(t)}catch(e){throw r("articles",t,e=>({favorited:!0,favoritesCount:e.favoritesCount+1})),e}}},async createArticle(t){const{article:n,errors:o}=await e.Articles.create(t);if(o)throw o;return r("articles",{[n.slug]:n}),n},async updateArticle(t){const{article:n,errors:o}=await e.Articles.update(t);if(o)throw o;return r("articles",{[n.slug]:n}),n},async deleteArticle(t){const n=i.articles[t];r("articles",{[t]:void 0});try{await e.Articles.del(t)}catch(e){throw r("articles",{[t]:n}),e}}}}const Pe=["children"],$e=b(),Ne=b();function Oe(e){const[t,n]=ee(),[r,o,i]=ee({articles:t,page:0,totalPagesCount:0,token:localStorage.getItem("jwt"),appName:"conduit"}),s=[r,{}],l=function(e){const[t,n]=f(window.location.hash.slice(2)||e),[r,o]=f(),i=()=>n(window.location.hash.slice(2));let s;return window.addEventListener("hashchange",i),y(()=>window.removeEventListener("hashchange",i)),{location:t,match:(e,n)=>{const r=t().split("?")[0],i=n.exec(r);return i&&(s={params:i.slice(1),routeName:e},o()),!!i},getParams:()=>(r(),s)}}(""),c=function([e,t]){async function n(n,r,o,i){const s={},l={method:n,headers:s};void 0!==o&&(s["Content-Type"]="application/json",l.body=JSON.stringify(o)),e.token&&(s.Authorization="Token "+e.token);try{const e=await fetch("https://conduit.productionready.io/api"+r,l),t=await e.json();return i?t[i]:t}catch(e){return e&&e.response&&401===e.response.status&&t.logout(),e}}const r=(e,t)=>`limit=${e}&offset=${t?t*e:0}`,o=e=>Object.assign({},e,{slug:void 0});return{Articles:{all:(e,t=10)=>n("get","/articles?"+r(t,e)),byAuthor:(e,t)=>n("get",`/articles?author=${Se(e)}&${r(5,t)}`),byTag:(e,t,o=10)=>n("get",`/articles?tag=${Se(e)}&${r(o,t)}`),del:e=>n("delete","/articles/"+e),favorite:e=>n("post",`/articles/${e}/favorite`),favoritedBy:(e,t)=>n("get",`/articles?favorited=${Se(e)}&${r(5,t)}`),feed:()=>n("get","/articles/feed?limit=10&offset=0"),get:e=>n("get","/articles/"+e,void 0,"article"),unfavorite:e=>n("delete",`/articles/${e}/favorite`),update:e=>n("put","/articles/"+e.slug,{article:o(e)}),create:e=>n("post","/articles",{article:e})},Auth:{current:()=>n("get","/user",void 0,"user"),login:(e,t)=>n("post","/users/login",{user:{email:e,password:t}}),register:(e,t,r)=>n("post","/users",{user:{username:e,email:t,password:r}}),save:e=>n("put","/user",{user:e})},Comments:{create:(e,t)=>n("post",`/articles/${e}/comments`,{comment:t}),delete:(e,t)=>n("delete",`/articles/${e}/comments/${t}`),forArticle:e=>n("get",`/articles/${e}/comments`,void 0,"comments")},Profile:{follow:e=>n("post",`/profiles/${e}/follow`),get:e=>n("get","/profiles/"+e,void 0,"profile"),unfollow:e=>n("delete",`/profiles/${e}/follow`)},Tags:{getAll:()=>n("get","/tags",void 0,"tags")}}}(s);return je(c,s,o,i,n),function(e,t,n,r){let[o,i]=t;t[1]=i={...i,loadComments(t){o.articleSlug!==t&&r({articleSlug:t}),n({comments:e.Comments.forArticle(t)})},async createComment(t){const{errors:n}=await e.Comments.create(o.articleSlug,t);if(n)throw n},async deleteComment(t){r("comments",e=>e.filter(e=>e.id!==t));try{await e.Comments.delete(o.articleSlug,t)}catch(e){throw i.loadComments(o.articleSlug),e}}}}(c,s,o,i),function(e,t,n,r){const[o,i]=t;n({tags:e.Tags.getAll().then(e=>e.map(e=>e.toLowerCase()))}),d(()=>{o.token?localStorage.setItem("jwt",o.token):localStorage.removeItem("jwt")}),t[1]={...i,setToken(e){r({token:e})}}}(c,s,o,i),function(e,t,n,r){const[o,i]=t;t[1]={...i,loadProfile(t){n({profile:e.Profile.get(t)})},async follow(){if(o.profile&&!o.profile.following){r("profile","following",!0);try{await e.Profile.follow(o.profile.username)}catch(e){r("profile","following",!1)}}},async unfollow(){if(o.profile&&o.profile.following){r("profile","following",!1);try{await e.Profile.unfollow(o.profile.username)}catch(e){r("profile","following",!0)}}}}}(c,s,o,i),function(e,t,n,r){let[,o]=t;t[1]=o={...o,async login(t,n){const{user:r,errors:i}=await e.Auth.login(t,n);if(i)throw i;o.setToken(r.token),o.pullUser()},async register(t,n,r){const{user:i,errors:s}=await e.Auth.register(t,n,r);if(s)throw s;o.setToken(i.token),o.pullUser()},logout(){r({token:void 0,currentUser:void 0})},pullUser(){let t;return n({currentUser:t=e.Auth.current()}),t},async updateUser(t){const{user:n,errors:o}=await e.Auth.save(t);if(o)throw o;r({currentUser:n})}}}(c,s,o,i),le(Ne.Provider,{value:l,children:()=>le($e.Provider,{value:s,children:()=>e.children},Pe)},Pe)}function xe(){return w($e)}function _e(){return w(Ne)}const Te=se("<a></a>",2);var Be=e=>{const{getParams:t}=_e(),[,n]=ne({timeoutMs:250});return function(){const r=Te.cloneNode(!0);return r.__click=()=>n(()=>window.scrollTo(0,0)),ue(r,()=>e.children),d(n=>{var o;const i=e.class,s={active:e.active||(null===(o=t())||void 0===o?void 0:o.routeName)===e.route},l=n._v$2,c="#/"+(e.href||e.route);return i!==n._v$&&(r.className=n._v$=i),s!==n._v$2&&ae(r,n._v$2=s,l),c!==n._v$4&&r.setAttribute("href",n._v$4=c),n},{_v$:void 0,_v$2:void 0,_v$4:void 0}),r}()};ce(["click"]);const Ue=se('<i class="ion-compose"></i>',2),Me=se('<li class="nav-item"></li>',2),Le=se('<i class="ion-gear-a"></i>',2),Ee=se('<nav class="navbar navbar-light"><div class="container"><ul class="nav navbar-nav pull-xs-right"><li class="nav-item"></li></ul></div></nav>',8),ze=["children"],Fe=["children","href"],He=["children","fallback","when"];var Ie=()=>{const[e]=xe();return function(){const t=Ee.cloneNode(!0),n=t.firstChild,r=n.firstChild,o=r.firstChild;return ue(n,le(Be,{class:"navbar-brand",route:"",children:()=>e.appName},ze),r),ue(o,le(Be,{class:"nav-link",route:"",children:"Home"})),ue(r,le(Ae,{when:()=>e.currentUser,fallback:()=>[(()=>{const e=Me.cloneNode(!0);return ue(e,le(Be,{class:"nav-link",route:"login",children:"Sign in"})),e})(),(()=>{const e=Me.cloneNode(!0);return ue(e,le(Be,{class:"nav-link",route:"register",children:"Sign up"})),e})()],children:()=>[(()=>{const e=Me.cloneNode(!0);return ue(e,le(Be,{class:"nav-link",route:"editor",children:()=>[Ue.cloneNode(!0)," New Post"]},ze)),e})(),(()=>{const e=Me.cloneNode(!0);return ue(e,le(Be,{class:"nav-link",route:"settings",children:()=>[Le.cloneNode(!0)," Settings"]},ze)),e})(),(()=>{const t=Me.cloneNode(!0);return ue(t,le(Be,{class:"nav-link",route:"profile",href:()=>"@"+e.currentUser.username,children:()=>e.currentUser.username},Fe)),t})()]},He),null),t}()};const Re=te(()=>import("./Home-39fb7c72.js"));function De(){const[e,{loadArticles:t,setPage:n}]=xe(),{token:r,appName:o}=e,{location:i}=_e(),s=h(()=>{const e=i().split("?")[1];return e?new URLSearchParams(e).get("tab"):r?"feed":"all"}),[,l]=ne({timeoutMs:250}),c=()=>{switch(s()){case"feed":return{myFeed:!0};case"all":return{};default:return{tag:s()}}};return d(()=>l(()=>t(c()))),Re({handleSetPage:e=>{l(()=>{n(e),t(c())})},appName:o,token:r,tab:s,store:e})}const Ve=te(()=>import("./Article-ae6b7e29.js"));function Je(e){const[,{loadArticle:t,loadComments:n}]=xe(),r=e.params[0];return t(r,{acceptCached:!0}),n(r),Ve({slug:r})}const qe=["username"],Ge=te(()=>import("./Profile-dc1672b5.js"));function Ke(e){const[,{loadProfile:t,loadArticles:n}]=xe(),{location:r}=_e();return d(()=>t(e.params[0])),d(()=>r().includes("/favorites")?n({favoritedBy:e.params[0]}):n({author:e.params[0]})),le(Ge,{username:()=>e.params[0]},qe)}const Qe=te(()=>import("./Editor-c825d9e8.js"));function We(e){const[,{loadArticle:t}]=xe(),n=e.params[0];return n&&t(n,{acceptCached:!0}),Qe({slug:n})}const Xe=se('<div class="container">Loading...</div>',2),Ye=["children","when"],Ze=["children"],et=["children","fallback"],tt=te(()=>import("./Settings-8bba29ff.js")),nt=te(()=>import("./Auth-3718f7e8.js"));var rt=()=>{const[e,{pullUser:t}]=xe(),[n,r]=f(!1),{match:o,getParams:i}=_e();return e.token?t().finally(()=>r(!0)):r(!0),[le(Ie,{}),le(Ae,{when:()=>n(),children:()=>le(me,{fallback:()=>Xe.cloneNode(!0),children:()=>le(ke,{children:()=>[le(Ce,{when:()=>o("editor",/^editor\/?(.*)/),children:()=>le(We,Object.assign(Object.keys(i()).reduce((e,t)=>(e[t]=()=>i()[t],e),{}),{}),Object.keys(i()))},Ye),le(Ce,{when:()=>o("settings",/^settings/),children:()=>le(tt,{})},Ye),le(Ce,{when:()=>o("login",/^login/),children:()=>le(nt,{})},Ye),le(Ce,{when:()=>o("register",/^register/),children:()=>le(nt,{})},Ye),le(Ce,{when:()=>o("article",/^article\/(.*)/),children:()=>le(Je,Object.assign(Object.keys(i()).reduce((e,t)=>(e[t]=()=>i()[t],e),{}),{}),Object.keys(i()))},Ye),le(Ce,{when:()=>o("profile",/^@([^/]*)\/?(favorites)?/),children:()=>le(Ke,Object.assign(Object.keys(i()).reduce((e,t)=>(e[t]=()=>i()[t],e),{}),{}),Object.keys(i()))},Ye),le(Ce,{when:()=>o("",/^#?$/),children:()=>le(De,{})},Ye)]},Ze)},et)},Ye)]};const ot=["children"];!function(e,t){let n;u(r=>{n=r,ue(t,e())})}(()=>le(Oe,{children:()=>le(rt,{})},ot),document.body);export{we as F,Be as N,Ae as S,le as a,d as b,R as c,ce as d,me as e,ne as f,_e as g,ae as h,ue as i,se as t,xe as u,be as w};
