var n,u,i,t,r,o,f,e={},c=[],s=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i;function a(n,l){for(var u in l){ n[u]=l[u]; }return n}function v(n){var l=n.parentNode;l&&l.removeChild(n);}function h(n,l,u){var i,t=arguments,r={};for(i in l){ "key"!==i&&"ref"!==i&&(r[i]=l[i]); }if(arguments.length>3){ for(u=[u],i=3;i<arguments.length;i++){ u.push(t[i]); } }if(null!=u&&(r.children=u),"function"==typeof n&&null!=n.defaultProps){ for(i in n.defaultProps){ void 0===r[i]&&(r[i]=n.defaultProps[i]); } }return p(n,r,l&&l.key,l&&l.ref,null)}function p(l,u,i,t,r){var o={type:l,props:u,key:i,ref:t,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:r};return null==r&&(o.__v=o),n.vnode&&n.vnode(o),o}function d(n){return n.children}function m(n,l){this.props=n,this.context=l;}function w(n,l){if(null==l){ return n.__?w(n.__,n.__.__k.indexOf(n)+1):null; }for(var u;l<n.__k.length;l++){ if(null!=(u=n.__k[l])&&null!=u.__e){ return u.__e; } }return "function"==typeof n.type?w(n):null}function k(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++){ if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break} }return k(n)}}function g(l){(!l.__d&&(l.__d=!0)&&u.push(l)&&!i++||r!==n.debounceRendering)&&((r=n.debounceRendering)||t)(_);}function _(){for(var n;i=u.length;){ n=u.sort(function(n,l){return n.__v.__b-l.__v.__b}),u=[],n.some(function(n){var l,u,i,t,r,o,f;n.__d&&(o=(r=(l=n).__v).__e,(f=l.__P)&&(u=[],(i=a({},r)).__v=i,t=A(f,r,i,l.__n,void 0!==f.ownerSVGElement,null,u,null==o?w(r):o),T(u,r),t!=o&&k(r)));}); }}function b(n,l,u,i,t,r,o,f,s){var a,h,p,y,d,m,k,g=u&&u.__k||c,_=g.length;if(f==e&&(f=null!=r?r[0]:_?w(u,0):null),a=0,l.__k=x(l.__k,function(u){if(null!=u){if(u.__=l,u.__b=l.__b+1,null===(p=g[a])||p&&u.key==p.key&&u.type===p.type){ g[a]=void 0; }else { for(h=0;h<_;h++){if((p=g[h])&&u.key==p.key&&u.type===p.type){g[h]=void 0;break}p=null;} }if(y=A(n,u,p=p||e,i,t,r,o,f,s),(h=u.ref)&&p.ref!=h&&(k||(k=[]),p.ref&&k.push(p.ref,null,u),k.push(h,u.__c||y,u)),null!=y){var c;if(null==m&&(m=y),void 0!==u.__d){ c=u.__d,u.__d=void 0; }else if(r==p||y!=f||null==y.parentNode){n:if(null==f||f.parentNode!==n){ n.appendChild(y),c=null; }else {for(d=f,h=0;(d=d.nextSibling)&&h<_;h+=2){ if(d==y){ break n; } }n.insertBefore(y,f),c=f;}"option"==l.type&&(n.value="");}f=void 0!==c?c:y.nextSibling,"function"==typeof l.type&&(l.__d=f);}else { f&&p.__e==f&&f.parentNode!=n&&(f=w(p)); }}return a++,u}),l.__e=m,null!=r&&"function"!=typeof l.type){ for(a=r.length;a--;){ null!=r[a]&&v(r[a]); } }for(a=_;a--;){ null!=g[a]&&D(g[a],g[a]); }if(k){ for(a=0;a<k.length;a++){ j(k[a],k[++a],k[++a]); } }}function x(n,l,u){if(null==u&&(u=[]),null==n||"boolean"==typeof n){ l&&u.push(l(null)); }else if(Array.isArray(n)){ for(var i=0;i<n.length;i++){ x(n[i],l,u); } }else { u.push(l?l("string"==typeof n||"number"==typeof n?p(null,n,null,null,n):null!=n.__e||null!=n.__c?p(n.type,n.props,n.key,null,n.__v):n):n); }return u}function P(n,l,u,i,t){var r;for(r in u){ "children"===r||"key"===r||r in l||N(n,r,null,u[r],i); }for(r in l){ t&&"function"!=typeof l[r]||"children"===r||"key"===r||"value"===r||"checked"===r||u[r]===l[r]||N(n,r,l[r],u[r],i); }}function C(n,l,u){"-"===l[0]?n.setProperty(l,u):n[l]="number"==typeof u&&!1===s.test(l)?u+"px":null==u?"":u;}function N(n,l,u,i,t){var r,o,f,e,c;if(t?"className"===l&&(l="class"):"class"===l&&(l="className"),"style"===l){ if(r=n.style,"string"==typeof u){ r.cssText=u; }else {if("string"==typeof i&&(r.cssText="",i=null),i){ for(e in i){ u&&e in u||C(r,e,""); } }if(u){ for(c in u){ i&&u[c]===i[c]||C(r,c,u[c]); } }} }else { "o"===l[0]&&"n"===l[1]?(o=l!==(l=l.replace(/Capture$/,"")),f=l.toLowerCase(),l=(f in n?f:l).slice(2),u?(i||n.addEventListener(l,z,o),(n.l||(n.l={}))[l]=u):n.removeEventListener(l,z,o)):"list"!==l&&"tagName"!==l&&"form"!==l&&"type"!==l&&"size"!==l&&!t&&l in n?n[l]=null==u?"":u:"function"!=typeof u&&"dangerouslySetInnerHTML"!==l&&(l!==(l=l.replace(/^xlink:?/,""))?null==u||!1===u?n.removeAttributeNS("http://www.w3.org/1999/xlink",l.toLowerCase()):n.setAttributeNS("http://www.w3.org/1999/xlink",l.toLowerCase(),u):null==u||!1===u&&!/^ar/.test(l)?n.removeAttribute(l):n.setAttribute(l,u)); }}function z(l){this.l[l.type](n.event?n.event(l):l);}function A(l,u,i,t,r,o,f,e,c){var s,v,h,p,y,w,k,g,_,x,P=u.type;if(void 0!==u.constructor){ return null; }(s=n.__b)&&s(u);try{n:if("function"==typeof P){if(g=u.props,_=(s=P.contextType)&&t[s.__c],x=s?_?_.props.value:s.__:t,i.__c?k=(v=u.__c=i.__c).__=v.__E:("prototype"in P&&P.prototype.render?u.__c=v=new P(g,x):(u.__c=v=new m(g,x),v.constructor=P,v.render=E),_&&_.sub(v),v.props=g,v.state||(v.state={}),v.context=x,v.__n=t,h=v.__d=!0,v.__h=[]),null==v.__s&&(v.__s=v.state),null!=P.getDerivedStateFromProps&&(v.__s==v.state&&(v.__s=a({},v.__s)),a(v.__s,P.getDerivedStateFromProps(g,v.__s))),p=v.props,y=v.state,h){ null==P.getDerivedStateFromProps&&null!=v.componentWillMount&&v.componentWillMount(),null!=v.componentDidMount&&v.__h.push(v.componentDidMount); }else {if(null==P.getDerivedStateFromProps&&g!==p&&null!=v.componentWillReceiveProps&&v.componentWillReceiveProps(g,x),!v.__e&&null!=v.shouldComponentUpdate&&!1===v.shouldComponentUpdate(g,v.__s,x)||u.__v===i.__v&&!v.__){for(v.props=g,v.state=v.__s,u.__v!==i.__v&&(v.__d=!1),v.__v=u,u.__e=i.__e,u.__k=i.__k,v.__h.length&&f.push(v),s=0;s<u.__k.length;s++){ u.__k[s]&&(u.__k[s].__=u); }break n}null!=v.componentWillUpdate&&v.componentWillUpdate(g,v.__s,x),null!=v.componentDidUpdate&&v.__h.push(function(){v.componentDidUpdate(p,y,w);});}v.context=x,v.props=g,v.state=v.__s,(s=n.__r)&&s(u),v.__d=!1,v.__v=u,v.__P=l,s=v.render(v.props,v.state,v.context),u.__k=null!=s&&s.type==d&&null==s.key?s.props.children:Array.isArray(s)?s:[s],null!=v.getChildContext&&(t=a(a({},t),v.getChildContext())),h||null==v.getSnapshotBeforeUpdate||(w=v.getSnapshotBeforeUpdate(p,y)),b(l,u,i,t,r,o,f,e,c),v.base=u.__e,v.__h.length&&f.push(v),k&&(v.__E=v.__=null),v.__e=!1;}else { null==o&&u.__v===i.__v?(u.__k=i.__k,u.__e=i.__e):u.__e=$(i.__e,u,i,t,r,o,f,c); }(s=n.diffed)&&s(u);}catch(l){u.__v=null,n.__e(l,u,i);}return u.__e}function T(l,u){n.__c&&n.__c(u,l),l.some(function(u){try{l=u.__h,u.__h=[],l.some(function(n){n.call(u);});}catch(l){n.__e(l,u.__v);}});}function $(n,l,u,i,t,r,o,f){var s,a,v,h,p,y=u.props,d=l.props;if(t="svg"===l.type||t,null!=r){ for(s=0;s<r.length;s++){ if(null!=(a=r[s])&&((null===l.type?3===a.nodeType:a.localName===l.type)||n==a)){n=a,r[s]=null;break} } }if(null==n){if(null===l.type){ return document.createTextNode(d); }n=t?document.createElementNS("http://www.w3.org/2000/svg",l.type):document.createElement(l.type,d.is&&{is:d.is}),r=null,f=!1;}if(null===l.type){ y!==d&&n.data!=d&&(n.data=d); }else {if(null!=r&&(r=c.slice.call(n.childNodes)),v=(y=u.props||e).dangerouslySetInnerHTML,h=d.dangerouslySetInnerHTML,!f){if(y===e){ for(y={},p=0;p<n.attributes.length;p++){ y[n.attributes[p].name]=n.attributes[p].value; } }(h||v)&&(h&&v&&h.__html==v.__html||(n.innerHTML=h&&h.__html||""));}P(n,d,y,t,f),h?l.__k=[]:(l.__k=l.props.children,b(n,l,u,i,"foreignObject"!==l.type&&t,r,o,e,f)),f||("value"in d&&void 0!==(s=d.value)&&s!==n.value&&N(n,"value",s,y.value,!1),"checked"in d&&void 0!==(s=d.checked)&&s!==n.checked&&N(n,"checked",s,y.checked,!1));}return n}function j(l,u,i){try{"function"==typeof l?l(u):l.current=u;}catch(l){n.__e(l,i);}}function D(l,u,i){var t,r,o;if(n.unmount&&n.unmount(l),(t=l.ref)&&(t.current&&t.current!==l.__e||j(t,null,u)),i||"function"==typeof l.type||(i=null!=(r=l.__e)),l.__e=l.__d=void 0,null!=(t=l.__c)){if(t.componentWillUnmount){ try{t.componentWillUnmount();}catch(l){n.__e(l,u);} }t.base=t.__P=null;}if(t=l.__k){ for(o=0;o<t.length;o++){ t[o]&&D(t[o],u,i); } }null!=r&&v(r);}function E(n,l,u){return this.constructor(n,u)}function H(l,u,i){var t,r,f;n.__&&n.__(l,u),r=(t=i===o)?null:i&&i.__k||u.__k,l=h(d,null,[l]),f=[],A(u,(t?u:i||u).__k=l,r||e,e,void 0!==u.ownerSVGElement,i&&!t?[i]:r?null:c.slice.call(u.childNodes),f,i||e,t),T(f,l);}n={__e:function(n,l){for(var u,i;l=l.__;){ if((u=l.__c)&&!u.__){ try{if(u.constructor&&null!=u.constructor.getDerivedStateFromError&&(i=!0,u.setState(u.constructor.getDerivedStateFromError(n))),null!=u.componentDidCatch&&(i=!0,u.componentDidCatch(n)),i){ return g(u.__E=u) }}catch(l){n=l;} } }throw n}},m.prototype.setState=function(n,l){var u;u=this.__s!==this.state?this.__s:this.__s=a({},this.state),"function"==typeof n&&(n=n(u,this.props)),n&&a(u,n),null!=n&&this.__v&&(l&&this.__h.push(l),g(this));},m.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),g(this));},m.prototype.render=d,u=[],i=0,t="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,o=e,f=0;

var RGBtoHSL = function (rgb) {
  // Make r, g, and b fractions of 1
  var r = rgb[0] / 255;
  var g = rgb[1] / 255;
  var b = rgb[2] / 255;

  // Find greatest and smallest channel values
  var cmin = Math.min(r, g, b);
  var cmax = Math.max(r, g, b);
  var delta = cmax - cmin;
  var h = 0;
  var s = 0;
  var l = 0;

  if (delta === 0) {
    h = 0;
  } else if (cmax === r) {
    h = ((g - b) / delta) % 6;
  } else if (cmax === g) {
    h = (b - r) / delta + 2;
  } else {
    h = (r - g) / delta + 4;
  }

  h = Math.round(h * 60);

  // Make negative hues positive behind 360°
  if (h < 0) { h += 360; }

  l = (cmax + cmin) / 2;

  // Calculate saturation
  s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

  // Multiply l and s by 100
  s = +(s * 100).toFixed(1);
  l = +(l * 100).toFixed(1);

  return [ Math.floor(h), Math.floor(s), Math.floor(l), 255 ]
};

var HSLtoRGB = function (hsl) {
  var h = hsl[0];
  var s = hsl[1] / 100;
  var l = hsl[2] / 100;

  var c = (1 - Math.abs(2 * l - 1)) * s;
  var x = c * (1 - Math.abs((hsl[0] / 60) % 2 - 1));
  var m = l - c / 2;
  var r = 0;
  var g = 0;
  var b = 0;

  if (h >= 0 && h < 60) {
    r = c; g = x; b = 0;
  } else if (h >= 60 && h < 120) {
    r = x; g = c; b = 0;
  } else if (h >= 120 && h < 180) {
    r = 0; g = c; b = x;
  } else if (h >= 180 && h < 240) {
    r = 0; g = x; b = c;
  } else if (h >= 240 && h < 300) {
    r = x; g = 0; b = c;
  } else if (h >= 300 && h < 360) {
    r = c; g = 0; b = x;
  }

  r = Math.round((r + m) * 255);
  g = Math.round((g + m) * 255);
  b = Math.round((b + m) * 255);

  return [ r, g, b, 255 ]
};

var APP = {};
var VIEW = { render: undefined };
var canvases = ['canvasSelection', 'canvasPreview', 'canvasTemp', 'canvasFinal', 'canvasView'];

var initAppDefault = function (w, h) {
  APP.width = w;
  APP.height = h;
  APP.tool = 'pencil';

  APP.frameActive = 0;
  APP.layerActive = 0;
  APP.frameCount = 1; 
  APP.layerCount = 1;  
  APP.layers = [
    {
      name: 'Layer 1',
      hidden: false,
      frames: [new ImageData(w, h)]
    }
  ];
  
  APP.color = {};
  APP.color.rgb = [100, 188, 156, 255];
  APP.color.hsl = RGBtoHSL(APP.color.rgb);

  APP.palette = [
    [26, 188, 156, 255],
    [46, 204, 113, 255],
    [52, 152, 219, 255],
    [155, 89, 182, 255],
    [52, 73, 94, 255],
    [22, 160, 133, 255],
    [39, 174, 96, 255],
    [41, 128, 185, 255],
    [142, 68, 173, 255],
    [44, 62, 80, 255],
    [241, 196, 15, 255],
    [230, 126, 34, 255],
    [231, 76, 60, 255],
    [236, 240, 241, 255],
    [149, 165, 166, 255],
    [243, 156, 18, 255],
    [211, 84, 0, 255],
    [192, 57, 43, 255],
    [189, 195, 199, 255],
    [127, 140, 141, 255]
  ];
  
  Object.seal(APP);
};

var initCanvases = function () {
  canvases.forEach(function (canvas) {
    VIEW[canvas].dom = canvas === 'canvasView' ? document.querySelector('#canvas-view') : document.createElement('canvas');
    VIEW[canvas].dom.width = APP.width;
    VIEW[canvas].dom.height = APP.height;
    VIEW[canvas].ctx = VIEW[canvas].dom.getContext('2d');
    VIEW[canvas].imgData = VIEW[canvas].ctx.getImageData(0, 0, APP.width, APP.height);
  });
};

var initViewDefault = function (preventOnMount) {
  VIEW.file = { open: false };
  VIEW.color = { open: false };
  VIEW.newCanvas = { open: false, w: 32, h: 32 };
  VIEW.downloadCanvas = { open: false, size: 2, type: 'frame' };

  VIEW.window = {
    request: '',
    mouseDown: false,
    startX: 0,
    startY: 0,
    prevX: 0,
    prevY: 0,
    currX: 0,
    currY: 0
  };

  VIEW.brushSize = 0;

  VIEW.timerID = undefined;
  VIEW.isPlaying = false;
  VIEW.onionSkinning = false;

  VIEW.undo = [];
  VIEW.undoPos = -1;
  VIEW.currUndoRef = {};

  // need to reset these on new project
  canvases.forEach(function (canvas) {
    VIEW[canvas] = {
      dom: undefined,
      ctx: undefined,
      imgData: undefined
    };
  });

  if (preventOnMount !== true) {
    initCanvases();
  }

  Object.seal(VIEW);
};

var newData = function (w, h, preventOnMount) {
  initAppDefault(w, h);
  initViewDefault(preventOnMount);
};

var addToUndo = function (action, type) {
  if ( type === void 0 ) type = '';

  VIEW.undo.splice(0, VIEW.undoPos + 1, {
    icon: (action + ".svg"),
    action: (action + " " + type),
    undo: undo,
    redo: redo
  });

  if (VIEW.undoPos >= 0) { VIEW.undoPos = -1; }  
  if (VIEW.undo.length > 50) { VIEW.undo.pop(); }

  VIEW.currUndoRef = VIEW.undo[VIEW.undoPos + 1];
};

var undo = function () {
  if (VIEW.undoPos + 1 === VIEW.undo.length) { return }

  VIEW.undoPos += 1;
  VIEW.undo[VIEW.undoPos].undo();

  VIEW.render();
};

var redo = function () {
  if (VIEW.undoPos - 1 === -2) { return }

  if (VIEW.undo[VIEW.undoPos].redo) { VIEW.undo[VIEW.undoPos].redo(); }
  VIEW.undoPos -= 1;

  VIEW.render();
};

// Colors
var colorSetHSL = function (hsl) {
  APP.color.hsl = hsl;
  APP.color.rgb = HSLtoRGB(hsl);

  VIEW.render();
};

var colorSetRGB = function (rgb) {
  APP.color.rgb = rgb;
  APP.color.hsl = RGBtoHSL(rgb);

  VIEW.render();
};

var paletteAdd = function () {
  APP.palette.push(APP.color.rgb);
  
  VIEW.render();
};

var paletteDelete = function (i) {
  var index = APP.palette.indexOf(APP.color.rgb);

  if (index !== -1) {
    APP.palette.splice(index, 1);
    VIEW.render();
  } 
};

var Color = function () {
  return (
    h( 'div', null, 
      h( 'div', { class: 'h-30 bg-mid bord-dark-b fl fl-center-y p-h-10' }, 
        h( 'small', null, h( 'b', null, "Color" ) )
      ), 
      h( 'div', { class: 'fl fl-justify-between' }, 
        h( 'div', { class: 'fl-1 fl fl-center-y p-h-10 bord-dark-b h-30 bord-dark-b' }, 
          h( 'div', {
            class: 'no-ptr h-30', style: ("min-height: 18px; width: 18px; border-radius: 100%; background: rgba(" + (APP.color.rgb[0]) + ", " + (APP.color.rgb[1]) + ", " + (APP.color.rgb[2]) + ", 255);") })
        ), 
        h( 'div', { class: 'fl bord-dark-b h-30' }, 
          APP.palette.filter(function (c) { return APP.color.rgb[0] === c[0] &&
            APP.color.rgb[1] === c[1] &&
            APP.color.rgb[2] === c[2] &&
            APP.color.rgb[3] === c[3]; })
            .length === 0 &&
              h( 'button', {
                onClick: function () { paletteAdd(); }, class: 'w-30 fl fl-center rel bord-dark-l' }, 
                h( 'img', { src: "img/insert.svg" })
              ), 
          APP.palette.filter(function (c) { return APP.color.rgb[0] === c[0] &&
            APP.color.rgb[1] === c[1] &&
            APP.color.rgb[2] === c[2] &&
            APP.color.rgb[3] === c[3]; })
            .length !== 0 &&
            h( 'button', {
              onClick: function () { paletteDelete(); }, class: 'w-30 fl fl-center bord-dark-l' }, 
              h( 'img', { src: "img/delete.svg" })
            )
        )
          
      ), 
      h( 'div', {
        onInput: function (e) {
          var hsl = [APP.color.hsl[0], APP.color.hsl[1], APP.color.hsl[2], APP.color.hsl[3]];
          hsl[parseInt(e.target.dataset.index)] = parseInt(e.target.value);
          
          colorSetHSL(hsl);
        }, class: 'bg-light fl-column p-10 b-r-2 overflow-none' }, 
        h( 'div', { class: 'b-r-2 overflow-none' }, 
          h( 'div', { class: 'fl-column' }, 
            h( 'form', { class: 'fl-column', autocomplete: 'off' }, 
              h( 'input', {
                id: 'hsl', 'data-index': '0', type: 'range', class: 'w-full m-0', style: 'height: 25px; background: linear-gradient(to right, #ff0000 0%, #ffff00 17%, #00ff00 33%, #00ffff 50%, #0000ff 67%, #ff00ff 83%, #ff0000 100%);', min: '0', max: '359', value: APP.color.hsl[0] })
            )
          ), 
          h( 'div', { class: 'fl-column' }, 
            h( 'form', { class: 'fl-column', autocomplete: 'off' }, 
              h( 'input', {
                value: APP.color.hsl[1], 'data-index': '1', type: 'range', class: 'w-full m-0', style: ("height: 25px; background: linear-gradient(to right, hsl(" + (APP.color.hsl[0]) + ", 0%, 50%) 0%,hsl(" + (APP.color.hsl[0]) + ", 100%, 50%) 100%);") })
            )
          ), 
          h( 'div', { class: 'fl-column' }, 
            h( 'form', { class: 'fl-column', autocomplete: 'off' }, 
              h( 'input', {
                value: APP.color.hsl[2], 'data-index': '2', type: 'range', class: 'w-full m-0', style: ("height: 25px; background: linear-gradient(to right, hsl(" + (APP.color.hsl[0]) + ", 100%, 0%) 0%, hsl(" + (APP.color.hsl[0]) + ", 100%, 50%) 50%, hsl(" + (APP.color.hsl[0]) + ", 100%, 100%) 100%)") })
            )
        )
        )
      ), 
      h( 'div', { class: 'p-h-10 bord-dark-b', style: 'padding-bottom: 10px;' }, 
        h( 'div', { class: 'fl fl-wrap b-r-2 overflow-none', style: 'align-content: baseline;' }, 
          APP.palette.map(function (c) { return h( 'button', {
                onClick: function () {
                  colorSetRGB(c);
                }, class: 'm-0', style: ("\n                  width: 44px;\n                  min-height: 25px;\n                  background: rgba(" + (c[0]) + ", " + (c[1]) + ", " + (c[2]) + ", " + (c[3]) + ");\n                  border: " + (APP.color.rgb[0] === c[0] &&
                    APP.color.rgb[1] === c[1] &&
                    APP.color.rgb[2] === c[2] &&
                    APP.color.rgb[3] === c[3] ? '2px solid rgba(61,61,61, 1)' : '2px solid rgba(61,61,61, 0)') + ";\n                  box-shadow: inset 0px 0px 0px 1px rgba(255, 255, 255, " + (APP.color.rgb[0] === c[0] &&
                    APP.color.rgb[1] === c[1] &&
                    APP.color.rgb[2] === c[2] &&
                    APP.color.rgb[3] === c[3] ? '255' : '0') + ");\n                ") }); }
            )
        )
      )
    )
  )
};

var setTool = function (tool) {
  APP.tool = tool;
  VIEW.render();
};

var getPoint = function (imgDataArr, x, y, w, h) {
  if (!imgDataArr) { throw Error(("setPoint: " + imgDataArr + " undefined")) }
  if (!imgDataArr.length) { throw Error(("setPoint: " + imgDataArr + " not a valid array")) }

  if (x >= 0 && x < w && y >= 0 && y < h) { // check bounds
    var i = (x + w * y) * 4;
    return [
      imgDataArr[i + 0],
      imgDataArr[i + 1],
      imgDataArr[i + 2],
      imgDataArr[i + 3]
    ]
  }

  return [0, 0, 0, 0]
};

var setPoint = function (imgDataArr, x, y, w, h, color) {
  if (!imgDataArr) { throw Error(("setPoint: " + imgDataArr + " undefined")) }
  if (!imgDataArr.length) { throw Error(("setPoint: " + imgDataArr + " not a valid array")) }
  
  if (x >= 0 && x < w && y >= 0 && y < h) { // check bounds
    var i = (x + w * y) * 4;
    imgDataArr[i + 0] = color[0];
    imgDataArr[i + 1] = color[1];
    imgDataArr[i + 2] = color[2];
    imgDataArr[i + 3] = color[3];
  }
};

var areRGBAsEqual = function (c1, a, c2, b) {
  return (
    c1[a + 0] === c2[b + 0] &&
    c1[a + 1] === c2[b + 1] &&
    c1[a + 2] === c2[b + 2] &&
    c1[a + 3] === c2[b + 3]
  )
};

var getColorAtPixel = function (data, x, y, w) {
  var linearCord = (y * w + x) * 4;

  return [
    data[linearCord + 0],
    data[linearCord + 1],
    data[linearCord + 2],
    data[linearCord + 3]
  ]
};

var fill = function (canvasImgData, startX, startY, w, h, color) { // http://www.williammalone.com/articles/html5-canvas-javascript-paint-bucket-tool/
  var linear_cords = (startY * w + startX) * 4;

  var pixel_stack = [{ x: startX, y: startY }];
  var original_color = getColorAtPixel(canvasImgData, startX, startY, w);

  if (areRGBAsEqual(color, 0, original_color, 0)) {
    return
  }

  while (pixel_stack.length > 0) {
    var new_pixel = pixel_stack.shift();
    var x = new_pixel.x;
    var y = new_pixel.y;

    linear_cords = (y * w + x) * 4;

    while (
      y-- >= 0 &&
      canvasImgData[linear_cords + 0] === original_color[0] &&
      canvasImgData[linear_cords + 1] === original_color[1] &&
      canvasImgData[linear_cords + 2] === original_color[2] &&
      canvasImgData[linear_cords + 3] === original_color[3]) {
        linear_cords -= w * 4;
    }

    linear_cords += w * 4;
    y++;

    var reached_left = false;
    var reached_right = false;

    while (
      y++ < h &&
      canvasImgData[linear_cords + 0] === original_color[0] &&
      canvasImgData[linear_cords + 1] === original_color[1] &&
      canvasImgData[linear_cords + 2] === original_color[2] &&
      canvasImgData[linear_cords + 3] === original_color[3]
    ) {
      canvasImgData[linear_cords + 0] = color[0];
      canvasImgData[linear_cords + 1] = color[1];
      canvasImgData[linear_cords + 2] = color[2];
      canvasImgData[linear_cords + 3] = color[3];

      if (x > 0) {
        if (
          canvasImgData[linear_cords - 4 + 0] === original_color[0] &&
          canvasImgData[linear_cords - 4 + 1] === original_color[1] &&
          canvasImgData[linear_cords - 4 + 2] === original_color[2] &&
          canvasImgData[linear_cords - 4 + 3] === original_color[3]
        ) {
          if (!reached_left) {
            pixel_stack.push({ x: x - 1, y: y });
            reached_left = true;
          }
        } else if (reached_left) {
          reached_left = false;
        }
      }
  
      if (x < w - 1) {
        if (
          canvasImgData[linear_cords + 4 + 0] === original_color[0] &&
          canvasImgData[linear_cords + 4 + 1] === original_color[1] &&
          canvasImgData[linear_cords + 4 + 2] === original_color[2] &&
          canvasImgData[linear_cords + 4 + 3] === original_color[3]
        ) {
          if (!reached_right) {
            pixel_stack.push({ x: x + 1, y: y });
            reached_right = true;
          }
        } else if (reached_right) {
          reached_right = false;
        }
      }
      
      linear_cords += w * 4;
    }
  }
};

var line = function (startX, startY, endX, endY, func) {
  var dx = Math.abs(endX - startX);
  var dy = Math.abs(endY - startY);

  var xDir = endX - startX >= 0 ? 1 : -1;
  var yDir = endY - startY >= 0 ? 1 : -1;
  
  var lineX = startX;
  var lineY = startY;

  var step = dx >= dy ? dx : dy;

  dx = dx / step;
  dy = dy / step;
  
  var i = 0;
  while (i < step) {
    func(Math.floor(lineX), Math.floor(lineY));

    lineX += (dx * xDir);
    lineY += (dy * yDir);
    i += 1;
  }

  func(Math.floor(lineX), Math.floor(lineY));
};

var circle = function (xCenter, yCenter, currX, currY, func) {
  var radius = Math.floor(Math.sqrt(Math.pow((currX - xCenter), 2) + Math.pow((currY - yCenter), 2)));

  if (radius <= 0) { return }

  var x = 0;
  var y = radius;
  var p = 1 - radius;

  var circlePlot = function () {
    func(xCenter + x, yCenter + y);
    func(xCenter + y, yCenter + x);
    func(xCenter - x, yCenter + y);
    func(xCenter - y, yCenter + x);
    func(xCenter + x, yCenter - y);
    func(xCenter + y, yCenter - x);
    func(xCenter - x, yCenter - y);
    func(xCenter - y, yCenter - x);
  };

  // Plot first set of points
  circlePlot();

  while (x <= y) {
    x++;
    if (p < 0) {
      p += 2 * x + 1; // Mid point is inside therefore y remains same
    } else { // Mid point is outside the circle so y decreases
      y--;
      p += 2 * (x - y) + 1;
    }

    circlePlot();
  }
};

function squareFilled (startX, startY, endX, endY, w, h, color, func) {
  var points = [];

  var dx = Math.abs(endX - startX);
  var dy = Math.abs(endY - startY);

  var xDir = endX - startX >= 0 ? 1 : -1;
  var yDir = endY - startY >= 0 ? 1 : -1;

  var lineX = startX;
  var lineY = startY;

  var xStep = 0;
  var yStep = 0;

  while (xStep <= dx) {
    yStep = 0;
    lineY = startY;

    while (yStep <= dy) {
      func(lineX, lineY);
      //points.push({ x: lineX, y: lineY })

      lineY += (1 * yDir);
      yStep += 1;
    }

    lineX += (1 * xDir);
    xStep += 1;
  }

  return points
}

var square = function (startX, startY, endX, endY, func) {
  var dx = Math.abs(endX - startX);
  var dy = Math.abs(endY - startY);

  var xDir = endX - startX >= 0 ? 1 : -1;
  var yDir = endY - startY >= 0 ? 1 : -1;

  var lineX = startX;
  var lineY = startY;
  var i = 0;

  func(lineX, lineY);

  while (i < dx) {
    lineX += (1 * xDir);
    func(lineX, startY);
    func(lineX, (startY + (dy * yDir)));
    i += 1;
  }

  i = 0;

  while (i < dy) {
    lineY += (1 * yDir);
    func(startX, lineY);
    func((startX + (dx * xDir)), lineY);
    i += 1;
  }
};

var paintCanvas = function (gestureEvent) {
  // Reset
  VIEW.canvasPreview.ctx.clearRect(0, 0, APP.width, APP.height);
  VIEW.canvasPreview.imgData = VIEW.canvasPreview.ctx.getImageData(0, 0, APP.width, APP.height);

  // Whole or Selection
  var target = APP.layers[APP.layerActive].frames[APP.frameActive].data; // or selection buffer
  var preview = VIEW.canvasPreview.imgData.data;

  // Translate coordinates based on current screen position and canvas scale
  var bb = VIEW.canvasView.dom.getBoundingClientRect();

  var scaleX = bb.width / VIEW.canvasView.dom.width;
  var scaleY = bb.height / VIEW.canvasView.dom.height;

  var startX = Math.floor((VIEW.window.startX - bb.x) / scaleX);
  var startY = Math.floor((VIEW.window.startY - bb.y) / scaleY);
  var prevX = Math.floor((VIEW.window.prevX - bb.x) / scaleX);
  var prevY = Math.floor((VIEW.window.prevY - bb.y) / scaleY);
  var currX = Math.floor((VIEW.window.currX - bb.x) / scaleX);
  var currY = Math.floor((VIEW.window.currY - bb.y) / scaleY);

  var setBrushPoints = function (canvas, x, y, w, h, color) {
    squareFilled(x - VIEW.brushSize, y - VIEW.brushSize, x + VIEW.brushSize, y + VIEW.brushSize, w, h, color, function (x, y) {
      setPoint(canvas, x, y, w, h, color);
    });
  };

  if (gestureEvent === 'hover' && APP.tool !== 'eye-dropper' && APP.tool !== 'move') {
    setBrushPoints(preview, currX, currY, APP.width, APP.height, APP.tool !== 'eraser' ? APP.color.rgb : [0, 0, 0, 50]);
    VIEW.render();

    return
  }

  // Setup Undo
  if (gestureEvent === 'start' && APP.tool !== 'eye-dropper') {
    var copy = new ImageData(APP.width, APP.height);
    copy.data.set(APP.layers[APP.layerActive].frames[APP.frameActive].data);
    var layerActive = APP.layerActive;
    var frameActive = APP.frameActive;
    
    addToUndo(APP.tool);

    VIEW.currUndoRef.undo = function () {
      APP.frameActive = frameActive;
      APP.layerActive = layerActive;
      APP.layers[layerActive].frames[frameActive].data.set(copy.data);
    };
  }
  
  // Eye dropper
  if (gestureEvent === 'end' && APP.tool === 'eye-dropper') {
    var color = getPoint(target, currX, currY, APP.width, APP.height);
    
    if (color[3] !== 0) {
      colorSetRGB(color);
    }
  }

  // Fill
  if (gestureEvent === 'end' && APP.tool === 'fill') {
    fill(target, currX, currY, APP.width, APP.height, APP.color.rgb);
  }

  // Points
  if (APP.tool === 'pencil' || APP.tool === 'eraser') {
    if (APP.tool === 'eraser') {
      setBrushPoints(preview, currX, currY, APP.width, APP.height, [0, 0, 0, 50]);
    }
    
    line(prevX, prevY, currX, currY, function (x, y) {
      setBrushPoints(target, x, y, APP.width, APP.height, APP.tool === 'pencil' ? APP.color.rgb : [0, 0, 0, 0]);
    });
  }

  // Geometry
  if (APP.tool === 'line' || APP.tool === 'circle' || APP.tool === 'square') {
    var funcs = { 'line': line, 'circle': circle, 'square': square };
    
    funcs[APP.tool](startX, startY, currX, currY, function (x, y) {
      setBrushPoints(gestureEvent === 'start' || gestureEvent === 'resume' ? preview : target, x, y, APP.width, APP.height, APP.color.rgb);
    });
  }

  // Move
  if (APP.tool === 'move') {
    if (gestureEvent === 'start') {
      // Frame to Selection
      VIEW.canvasSelection.ctx.putImageData(APP.layers[APP.layerActive].frames[APP.frameActive], 0, 0);
      VIEW.canvasSelection.imgData = VIEW.canvasSelection.ctx.getImageData(0, 0, APP.width, APP.height);

      // Selection to Preview
      VIEW.canvasPreview.ctx.putImageData(VIEW.canvasSelection.imgData, 0, 0);
      VIEW.canvasPreview.imgData = VIEW.canvasPreview.ctx.getImageData(0, 0, APP.width, APP.height);

      // Clear main canvas
      APP.layers[APP.layerActive].frames[APP.frameActive] = new ImageData(APP.width, APP.height);
    }

    if (gestureEvent === 'resume') {
      // Selection to Preview
      VIEW.canvasPreview.ctx.putImageData(VIEW.canvasSelection.imgData, prevX - startX, prevY - startY);
      VIEW.canvasPreview.imgData = VIEW.canvasPreview.ctx.getImageData(0, 0, APP.width, APP.height);
    }

    if (gestureEvent === 'end') {
      // Selection to Preview
      VIEW.canvasPreview.ctx.putImageData(VIEW.canvasSelection.imgData, prevX - startX, prevY - startY);
      VIEW.canvasPreview.imgData = VIEW.canvasPreview.ctx.getImageData(0, 0, APP.width, APP.height);

      // Preview to Main
      APP.layers[APP.layerActive].frames[APP.frameActive] = VIEW.canvasPreview.ctx.getImageData(0, 0, APP.width, APP.height);

      VIEW.canvasPreview.ctx.clearRect(0, 0, APP.width, APP.height);
      VIEW.canvasPreview.imgData = VIEW.canvasPreview.ctx.getImageData(0, 0, APP.width, APP.height);
    }
  }

  // Setup Redo
  if (gestureEvent === 'end' && APP.tool !== 'eye-dropper') {
    var copy$1 = new ImageData(APP.width, APP.height);
    copy$1.data.set(APP.layers[APP.layerActive].frames[APP.frameActive].data);
    var layerActive$1 = APP.layerActive;
    var frameActive$1 = APP.frameActive;

    VIEW.currUndoRef.redo = function () {
      APP.frameActive = frameActive$1;
      APP.layerActive = layerActive$1;
      APP.layers[layerActive$1].frames[frameActive$1].data.set(copy$1.data);
    };
  }

  VIEW.render();
};

var Canvas = function () {
  return h( 'div', { id: 'canvas-inner-scroll', 'data-request': 'paintCanvas', 'data-hover': 'paintCanvas', class: 'fl fl-center fl-1', style: 'width: 1920px; height: 1920px;' }, 
    h( 'canvas', {                      
      id: 'canvas-view', width: APP.width, height: APP.height, style: 'width: 1920px; height: 1920px; transform: scale(.25); pointer-events: none;' })
  )
};

var keyMap = {
  metaKey: {
    z: undo
  },
  shiftKey: {
    metaKey: {
      z: redo
    }
  },
  b: function () {
    setTool('pencil');
  },
  e: function () {
    setTool('eraser');
  },
  u: function () {
    setTool('line');
  },
  g: function () {
    setTool('fill');
  },
  l: function () {
    setTool('eye-dropper');
  },
  v: function () {
    setTool('move');
  }
};

var shiftKeyMark = Date.now();
var metaKeyMark = Date.now();
var alphaKeyMark = Date.now();

var setupKeyListeners = function () {
  window.addEventListener('keydown', function (e) {
    var key = e.key.toLowerCase();
    
    if (!e.repeat && key === 'meta') {
      metaKeyMark = Date.now();
    } 

    if (!e.repeat && key === 'shift') {
      shiftKeyMark = Date.now();
    } 

    if (!e.repeat && key === 'z') {
      alphaKeyMark = Date.now();
    }

    if (e.shiftKey && e.metaKey) {
      if ((shiftKeyMark < metaKeyMark < alphaKeyMark) && key === 'z') {
        keyMap.shiftKey.metaKey['z']();
      }
    }
    
    if (!e.shiftKey && e.metaKey) {
      if ((metaKeyMark < alphaKeyMark) && key === 'z') {
        keyMap.metaKey['z']();
      }
    }

    if (e.shiftKey && !e.metaKey) ;

    if (!e.shiftKey && !e.metaKey && keyMap[e.key.toLowerCase()]) {
      keyMap[e.key.toLowerCase()]();
    }
  });
};

var setTargetCanvas = function (frame, layer) {
  if (frame === undefined) { console.error('setTargetCanvas - no frame given'); }
  if (layer === undefined) { console.error('setTargetCanvas - no layer given'); }

  APP.frameActive = frame;
  APP.layerActive = layer;

  VIEW.render();
};

var seq = function (request, type, data) {
  var inserting = request === 'insert' || request === 'duplicate';
  
  function action (req, ref, target, entry) {
    if (req === 'insert') { ref.splice(target + 1, 0, entry); }
    if (req === 'delete') { ref.splice(target, 1); }
  }

  if (type === 'layer') {
    if (request === 'insert') {
      action(request, APP.layers, APP.layerActive, data);
    }

    if (request === 'delete') {
      action(request, APP.layers, APP.layerActive);
    }
  }

  if (type === 'frame') {
    if (request === 'insert') {
      APP.layers.forEach(function (layer, i) {
        var entry = new ImageData(APP.width, APP.height);
        entry.data.set(data[i].data);
        action(request, layer.frames, APP.frameActive, entry);
      });
    }

    if (request === 'delete') {
      APP.layers.forEach(function (layer) {
        action(request, layer.frames, APP.frameActive);
      });
    }
  }

  APP[(type + "Count")] += (inserting ? 1 : -1);

  if (inserting) {
    APP[(type + "Active")] += 1;
  } 
  
  if (request === 'delete') {
    if (APP[(type + "Active")] === APP[(type + "Count")]) {
      APP[(type + "Active")] -= 1;
    } 
  }
};

var timelineManager = function (ref) {
  var type = ref.type;
  var request = ref.request;
  var requestType = ref.requestType;
  var data = ref.data;
  var disableUndoRedo = ref.disableUndoRedo;

  var layerActive = APP.layerActive;
  var frameActive = APP.frameActive;
  var layerCount = APP.layerCount;
  var frameCount = APP.frameCount;

  if (!disableUndoRedo) {
    addToUndo(request, type);

    VIEW.currUndoRef.redo = function () {
      APP.frameCount = frameCount;
      APP.layerCount = layerCount;
      APP.frameActive = frameActive;
      APP.layerActive = layerActive;
      timelineManager({ type: type, request: request, requestType: requestType, data: data, disableUndoRedo: true });
    };
  }

  var newData = type === 'layer' ? {
    name: ("Layer " + (layerCount + 1)),
    hidden: false,
    frames: new Array(frameCount).fill(undefined).map(function (frame) { return new ImageData(APP.width, APP.height); })
  } : new Array(APP.layerCount)
    .fill(undefined)
    .map(function (item) {
      return new ImageData(APP.width, APP.height)
    });
  
  var cloneData = type === 'layer' ? {
    name: ((APP.layers[layerActive].name) + " " + (requestType === 'clone' ? '(Copy)' : '')),
    hidden: false,
    frames: new Array(frameCount)
      .fill(undefined)
      .map(function (frame, frameI) {
        var imgData = new ImageData(APP.width, APP.height);
        imgData.data.set(APP.layers[layerActive].frames[frameI].data);
        return imgData
      })
  } : new Array(layerCount)
      .fill(undefined)
      .map(function (item, i) {
        var copy = new ImageData(APP.width, APP.height);
        copy.data.set(APP.layers[i].frames[frameActive].data);
        return copy
      });
  
  if ((type === 'layer' || type === 'frame') && (requestType === 'new' || requestType === 'clone')) {
    seq('insert', type, requestType === 'new' ? newData : cloneData);
  }

  if ((type === 'layer' || type === 'frame') && request === 'delete') {
    if (APP[(type + "Count")] - 1 === 0) {
      seq('delete', type);
      if (type === 'layer') { newData.name = 'Layer 1'; }
      seq('insert', type, newData);
    } else {
      seq('delete', type);
    }
  }

  var layerActiveAfter = APP.layerActive;
  var frameActiveAfter = APP.frameActive;
  var layerCountAfter = APP.layerCount;
  var frameCountAfter = APP.frameCount;
  
  if (!disableUndoRedo) {
    VIEW.currUndoRef.undo = function () {
      APP.frameCount = frameCountAfter;
      APP.layerCount = layerCountAfter;
  
      if (type === 'layer') {
        APP.frameActive = frameActiveAfter;
        
        if (request === 'insert') {
          APP.layerActive = layerActiveAfter;
          seq('delete', type);
        }
  
        if (request === 'delete' && layerCount !== 1) {
          APP.layerActive = layerActive - 1;
          seq('insert', type, cloneData);
        }

        if (request === 'delete' && layerCount === 1) {
          seq('delete', type);
          seq('insert', type, cloneData);
        }
      }

      if (type === 'frame') {
        APP.layerActive = layerActiveAfter;
        
        if (request === 'insert') {
          APP.frameActive = frameActiveAfter;
          seq('delete', type);
        }
  
        if (request === 'delete' && frameCount !== 1) {
          APP.frameActive = frameActive - 1;
          seq('insert', type, cloneData);
        }

        if (request === 'delete' && frameCount === 1) {
          seq('delete', type);
          seq('insert', type, cloneData);
        }
      }
    };
  }

  VIEW.render();
};

var swap = function (type, dir) {
  var step = dir === 'up' ? -1 : 1;
  var active = type === 'layer' ? 'layerActive' : 'frameActive';
  var length = type === 'layer' ? APP.layerCount : APP.frameCount;

  if (APP[active] + step === -1) { return }
  if (APP[active] + step === length) { return }

  if (type === 'layer') {
    var temp = APP.layers[APP.layerActive + step];
    APP.layers[APP.layerActive + step] = APP.layers[APP.layerActive];
    APP.layers[APP.layerActive] = temp;
  }

  if (type === 'frame') {
    APP.layers.forEach(function (layer) {
      var temp = layer.frames[APP.frameActive + step];
      layer.frames[APP.frameActive + step] = layer.frames[APP.frameActive];
      layer.frames[APP.frameActive] = temp;
    });
  }

  APP[active] += step;

  VIEW.render();
};

var layersEditHidden = function (i) {
  APP.layers[i].hidden = !APP.layers[i].hidden;
  VIEW.render();
};

var nextFrame = function () {
  APP.frameActive = (APP.frameActive + 1) % APP.frameCount;
  VIEW.render();
};

var lastFrame = function () {
  APP.frameActive = APP.frameActive - 1 === -1 ? APP.frameCount - 1 : APP.frameActive - 1;
  VIEW.render();
};

// Animation
var scheduler = function () {
  APP.frameActive = (APP.frameActive + 1) % APP.frameCount;
  VIEW.render();
  VIEW.timerID = setTimeout(scheduler, 100);
};

var togglePlay = function () {
  if (APP.frameCount === 1) { return }

  if (VIEW.isPlaying) {
    clearTimeout(VIEW.timerID);
  } else {
    scheduler();
  }
  
  VIEW.isPlaying = !VIEW.isPlaying;
  VIEW.render();
};

var Timeline= function () {
  return (
    h( 'div', { class: 'bg-light bord-dark-t fl-column', style: 'height: 250px;' }, 
        h( 'div', { class: 'fl w-full bord-dark-b h-30' }, 
          h( 'div', { class: 'fl fl-justify-between bord-dark-r', style: 'width: 210px;' }
            /* <div style='width: 90px;' class='p-h-10 fl fl-center-y bord-dark-r'>
              <small><b>Layers</b></small>
            </div> */, 
            h( 'div', { class: 'fl' }, 
              h( 'button', {
                onClick: function () { if (APP.layerCount < 30) { timelineManager({ type:'layer', request: 'insert', requestType: 'new' }); } }, class: 'w-30 fl fl-center bord-dark-r' }, 
                h( 'img', { src: "img/insert.svg" })
              ), 
              h( 'button', {
                onClick: function () { timelineManager({ type:'layer', request: 'insert', requestType: 'clone' }); }, class: 'w-30 fl fl-center bord-dark-r' }, 
                h( 'img', { src: "img/clone.svg" })
              ), 
              h( 'button', {
                onClick: function () { swap('layer', 'down'); }, class: 'w-30 fl fl-center bord-dark-r' }, 
                h( 'img', { src: "img/up.svg" })
              ), 
              h( 'button', {
                onClick: function () { swap('layer', 'up'); }, class: 'w-30 fl fl-center bord-dark-r' }, 
                h( 'img', { src: "img/down.svg" })
              ), 
              h( 'button', {
                onClick: function () { timelineManager({ type:'layer', request: 'delete' }); }, class: 'w-30 fl fl-center bord-dark-r' }, 
                h( 'img', { src: "img/delete.svg" })
              )
            )
          ), 
          h( 'div', { class: 'fl fl-1' }, 
            h( 'div', { class: 'fl' }, 
              h( 'button', {
                onClick: function () { VIEW.onionSkinning = !VIEW.onionSkinning; VIEW.render(); }, class: "fl fl-center m-0 p-0 w-30 bord-dark-r", style: VIEW.onionSkinning ? 'background: rgba(52, 152, 219, 255);' : '' }, 
                h( 'img', { src: "img/onion.svg" })
              )
            ), 
            h( 'div', { class: 'fl-1 fl fl-justify-center' }, 
              h( 'div', { class: 'fl' }, 
                h( 'button', {
                  onClick: function () { lastFrame(); }, class: "fl fl-center m-0 p-0 w-30 bord-dark-r bord-dark-l" }, 
                  h( 'img', { src: "img/lastframe.svg" })
                ), 
                h( 'button', {
                  onClick: function () { togglePlay(); }, class: "fl fl-center m-0 p-0 w-30 bord-dark-r" }, 
                  h( 'img', { src: ("img/" + (VIEW.isPlaying ? 'stop.svg' : 'play.svg')) })
                ), 
                h( 'button', {
                  onClick: function () { nextFrame(); }, class: "fl fl-center m-0 p-0 w-30 bord-dark-r" }, 
                  h( 'img', { src: "img/nextframe.svg" })
                )
              )
            ), 
            h( 'div', { class: 'fl' }, 
              h( 'button', {
                onClick: function () { if (!VIEW.isPlaying && APP.frameCount < 50) { timelineManager({ type: 'frame', request: 'insert', requestType: 'new' }); } }, class: 'w-30 fl fl-center bord-dark-r bord-dark-l' }, 
                h( 'img', { src: "img/insert.svg" })
              ), 
              h( 'button', {
                onClick: function () { timelineManager({ type:'frame', request: 'insert', requestType: 'clone' }); }, class: 'w-30 fl fl-center bord-dark-r' }, 
                h( 'img', { src: "img/clone.svg" })
              ), 
              h( 'button', {
                onClick: function () { if (!VIEW.isPlaying) { swap('frame', 'up'); } }, class: 'w-30 fl fl-center bord-dark-r' }, 
                h( 'img', { src: "img/up.svg", style: 'transform: rotate(-90deg);' })
              ), 
              h( 'button', {
                onClick: function () { if (!VIEW.isPlaying) { swap('frame', 'down'); } }, class: 'w-30 fl fl-center bord-dark-r' }, 
                h( 'img', { src: "img/down.svg", style: 'transform: rotate(-90deg);' })
              ), 
              h( 'button', {
                onClick: function () { if (!VIEW.isPlaying) { timelineManager({ type:'frame', request: 'delete' }); } }, class: 'w-30 fl fl-center' }, 
                h( 'img', { src: "img/delete.svg" })
              )
            )
          )
        ), 
        h( 'div', { class: 'fl bg-mid', style: 'height: calc(100% - 30px);' }, 
          h( 'div', { id: 'layers', class: 'overflow hide-scroll', style: 'padding-bottom: 30px;' }, 
            h( 'div', { class: 'bord-dark-r fl-col-reverse', style: 'width: 210px;' }, 
              APP.layers.map(function (layer, li) {
                  return h( 'div', {
                    class: 'fl bord-dark-b h-30', style: ("background: " + (APP.layerActive === li ? 'rgb(100, 100, 100)' :'') + ";") }, 
                    h( 'button', {
                      style: ("" + (layer.hidden ? 'background: rgba(52, 152, 219, 255);' : '')), onClick: function () { layersEditHidden(li); }, class: 'w-30 h-30 fl fl-center bord-dark-b' }, 
                      h( 'img', { src: ("img/" + (layer.hidden ? 'eye-active.svg' : 'eye.svg')) })
                    ), 
                    h( 'button', {
                      onClick: function () { setTargetCanvas(APP.frameActive, li); }, class: 'fl-1 txt-left' }, 
                      h( 'small', { style: 'font-size: 11px;' }, h( 'b', null, layer.name ))
                    )
                  )
                })
            )
          ), 
          h( 'div', { id: 'frames', class: 'fl-1 overflow hide-scroll', style: 'padding-bottom: 30px;' }, 
            h( 'div', { class: 'fl-col-reverse' }, 
              APP.layers.map(function (layer, li) {
                  return h( 'div', {
                    class: 'fl' }, 
                    layer.frames.map(function (canvas, fi) {
                        return h( 'button', {
                          onClick: function () { setTargetCanvas(fi, li); }, class: 'w-30 h-30 fl fl-center bord-dark-r bord-dark-b bg-light rel', style: ("\n                            background: " + (APP.frameActive === fi && APP.layerActive === li
                                ? 'rgba(52, 152, 219, 255)'
                                : (APP.frameActive === fi || APP.layerActive === li)
                                  ? 'rgba(100, 100, 100, 255)'
                                  : 'rgba(0, 0, 0, 0)') + ";") }, 
                          h( 'div', { class: 'abs bottom right p-5' }, h( 'small', { style: 'font-size: 8px;' }, h( 'b', null, fi + 1 )))
                          /* <div class='bg-white' style='border-radius: 100%; width: 8px; height: 8px;' /> */
                        )
                      })
                  )
                })
            )
          )
        )
      )
  )
};

var loadData = function (ref) {
  var onLoaded = ref.onLoaded;
  var onError = ref.onError;

  //console.time('startRead')
  localforage.getItem('pixel-art-app').then(function (stored) {
    //console.timeEnd('startRead')
    for (var key in stored) {
      APP[key] = stored[key];
    }

    onLoaded();
  }).catch(function(err) {
    console.log(err);
    onError();
  });
};

var saveData = function () {
  //console.time('startwrite')
  localforage.setItem('pixel-art-app', APP).then(function(value) {
    // This will output `1`.
    //console.timeEnd('startwrite')
  }).catch(function(err) {
    // This code runs if there were any errors
    console.log(err);
  });
};

var downloadCanvas = function (e) {
  var c = document.createElement('canvas');
  var ctx = c.getContext('2d');
  var height = APP.height * VIEW.downloadCanvas.size;
  var width = APP.width * VIEW.downloadCanvas.size;

  if (VIEW.downloadCanvas.type === 'frame') {
    c.width = width;
    c.height = height;

    ctx.webkitImageSmoothingEnabled = false;
    ctx.mozImageSmoothingEnabled = false;
    ctx.imageSmoothingEnabled = false;

    APP.layers.forEach(function (layer) {
      VIEW.canvasTemp.ctx.putImageData(layer.frames[APP.frameActive], 0, 0);
      ctx.drawImage(VIEW.canvasView.dom, 0, 0, c.width, c.height);
    });
  }

  if (VIEW.downloadCanvas.type === 'spritesheet') {
    var totalWidth = APP.width * VIEW.downloadCanvas.size * APP.frameCount;
    c.width = totalWidth;
    c.height = height;

    ctx.webkitImageSmoothingEnabled = false;
    ctx.mozImageSmoothingEnabled = false;
    ctx.imageSmoothingEnabled = false;

    console.log(APP.frameCount);
    var loop = function ( frameI ) {
      APP.layers.forEach(function (layer) {
        VIEW.canvasTemp.ctx.putImageData(layer.frames[frameI], 0, 0);
        ctx.drawImage(VIEW.canvasTemp.dom, frameI * width, 0, width, height);
      });
    };

    for (var frameI = 0; frameI < APP.frameCount; frameI++) loop( frameI );
  }

  var image = c.toDataURL('image/png').replace('image/png', 'image/octet-stream');
  e.target.setAttribute('href', image);
};

var View = /*@__PURE__*/(function (Component) {
  function View () {
    Component.apply(this, arguments);
  }

  if ( Component ) View.__proto__ = Component;
  View.prototype = Object.create( Component && Component.prototype );
  View.prototype.constructor = View;

  View.prototype.componentDidMount = function componentDidMount () {
    var this$1 = this;

    VIEW.render = function () {
      this$1.setState({}, function () {
        VIEW.canvasTemp.ctx.clearRect(0, 0, APP.width, APP.height);
        VIEW.canvasFinal.ctx.clearRect(0, 0, APP.width, APP.height);
        VIEW.canvasView.ctx.clearRect(0, 0, APP.width, APP.height);

        APP.layers.forEach(function (layer, i) {
          VIEW.canvasView.ctx.globalAlpha = 1;

          if (layer.hidden) { return }

          // Onion skinning
          if (APP.layerActive === i && VIEW.onionSkinning && !VIEW.isPlaying) {
            var framesAhead = 3;
            var framesBehind = 3;
            var framesTotal = framesBehind + framesAhead;

            VIEW.canvasView.ctx.globalAlpha = .5;

            for (var a = framesAhead - framesTotal; a < framesAhead; a++) {
              if (!layer.frames[APP.frameActive - a]) { continue }

              var target$1 = layer.frames[APP.frameActive - a]; 
              VIEW.canvasTemp.ctx.putImageData(target$1, 0, 0);
              VIEW.canvasView.ctx.drawImage(VIEW.canvasTemp.dom, 0, 0);
            }
          }

          // Regular frame render
          VIEW.canvasView.ctx.globalAlpha = 1;

          var target = layer.frames[APP.frameActive];

          for (var b = 0; b < 2; b++) { // For whatever reason safari makes me do this twice
            // Target Canvas
            VIEW.canvasTemp.ctx.putImageData(target, 0, 0);
            VIEW.canvasView.ctx.drawImage(VIEW.canvasTemp.dom, 0, 0);
            
            // Preview Canvas
            if (APP.layerActive === i) {
              VIEW.canvasTemp.ctx.putImageData(VIEW.canvasPreview.imgData, 0, 0);
              VIEW.canvasView.ctx.drawImage(VIEW.canvasTemp.dom, 0, 0);
            }
          }
        });
      });
    };

    initCanvases();

    this.funcs = { paintCanvas: paintCanvas };

    // View control customization
    this.canvasOuterScroll = document.querySelector('#canvas-outer-scroll');
    this.canvasInnerScroll = document.querySelector('#canvas-inner-scroll');

    this.timelineScroll = {
      isSyncingLeftScroll: false,
      isSyncingRightScroll: false,
      leftDiv: document.querySelector('#layers'),
      rightDiv: document.querySelector('#frames')
    };

    this.timelineScrollController();
    this.centerCanvas();

    // Adding google analytics
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'UA-144729452-1');
  };

  View.prototype.centerCanvas = function centerCanvas () {
    var outerW = this.canvasOuterScroll.offsetWidth;
    var innerW = this.canvasInnerScroll.offsetWidth;
    var outerH = this.canvasOuterScroll.offsetHeight;
    var innerH = this.canvasInnerScroll.offsetHeight;
    
    this.canvasOuterScroll.scrollLeft = Math.floor((innerW - outerW) / 2) + 8;
    this.canvasOuterScroll.scrollTop = Math.floor((innerH - outerH) / 2) + 8;
  };

  View.prototype.timelineScrollController = function timelineScrollController () {
    var this$1 = this;

    this.timelineScroll.leftDiv.addEventListener('scroll', function (e) {
      if (!this$1.timelineScroll.isSyncingLeftScroll) {
        this$1.timelineScroll.isSyncingRightScroll = true;
        this$1.timelineScroll.rightDiv.scrollTop = e.target.scrollTop;
      }
      this$1.timelineScroll.isSyncingLeftScroll = false;
    });
    
    this.timelineScroll.rightDiv.addEventListener('scroll', function (e) {
      if (!this$1.timelineScroll.isSyncingRightScroll) {
        this$1.timelineScroll.isSyncingLeftScroll = true;
        this$1.timelineScroll.leftDiv.scrollTop = e.target.scrollTop;
      }
      this$1.timelineScroll.isSyncingRightScroll = false;
    });
  };

  View.prototype.onGestureDown = function onGestureDown (e) {
    if (!VIEW.isPlaying) 

    { VIEW.window.request = e.target.dataset.request || ''; }
    VIEW.window.mouseDown = true;
    VIEW.window.startX = (e.pageX === undefined) ? e.touches[0].pageX : e.pageX;
    VIEW.window.startY = (e.pageY === undefined) ? e.touches[0].pageY : e.pageY;
    VIEW.window.prevX = (e.pageX === undefined) ? e.touches[0].pageX : e.pageX;
    VIEW.window.prevY = (e.pageY === undefined) ? e.touches[0].pageY : e.pageY;
    VIEW.window.currX = (e.pageX === undefined) ? e.touches[0].pageX : e.pageX;
    VIEW.window.currY = (e.pageY === undefined) ? e.touches[0].pageY : e.pageY;

    if (VIEW.window.request) { this.funcs[VIEW.window.request]('start'); }
  };
  
  View.prototype.onGestureDrag = function onGestureDrag (e) {
    if (!VIEW.isPlaying) 

    { VIEW.window.prevX = VIEW.window.currX; }
    VIEW.window.prevY = VIEW.window.currY;
    VIEW.window.currX = (e.pageX === undefined) ? e.touches[0].pageX : e.pageX;
    VIEW.window.currY = (e.pageY === undefined) ? e.touches[0].pageY : e.pageY;
    
    if (VIEW.window.request) { this.funcs[VIEW.window.request]('resume'); }
  
    if (e.target.tagName !== 'INPUT') { // prevent block on input range elements
      e.preventDefault(); // block pull to refresh on mobile browsers
    }
  };

  View.prototype.onGestureEnd = function onGestureEnd (e) {
    if (!VIEW.isPlaying)

    { if (VIEW.window.request) { this.funcs[VIEW.window.request]('end'); } }

    VIEW.window.request = '';
    VIEW.window.mouseDown = false;
    VIEW.window.startX = 0;
    VIEW.window.startY = 0;
    VIEW.window.prevX = 0;
    VIEW.window.prevY = 0;
    VIEW.window.currX = 0;
    VIEW.window.currY = 0;

    setTimeout(function () {
      saveData();
    }, 50);
  };

  View.prototype.onGestureHover = function onGestureHover (e) {
    if (!VIEW.isPlaying)

    { VIEW.window.prevX = VIEW.window.currX; }
    VIEW.window.prevY = VIEW.window.currY;
    VIEW.window.currX = (e.pageX === undefined) ? e.touches[0].pageX : e.pageX;
    VIEW.window.currY = (e.pageY === undefined) ? e.touches[0].pageY : e.pageY;

    if (e.target.dataset.hover) { this.funcs[e.target.dataset.hover]('hover'); }
  };
  
  View.prototype.dragOrHover = function dragOrHover (e) {
    if (VIEW.window.mouseDown) {
      this.onGestureDrag(e);
    } else {
      this.onGestureHover(e);
    }
  };

  View.prototype.render = function render () {
    var this$1 = this;

    return (
      h( 'div', {
        class: 'h-full relative', onMouseDown: function (e) { if (e.which === 1) { this$1.onGestureDown(e); } }, onMouseMove: function (e) { this$1.dragOrHover(e); }, onMouseUp: function (e) { this$1.onGestureEnd(e); } }, 
        h( 'div', { class: 'h-40 bg-light bord-dark-b fl' }, 
          h( 'div', { class: "fl w-full" }, 
            h( 'div', { class: "fl-1 fl" }, 
              h( 'div', { class: "fl bord-dark-r rel w-40", onMouseLeave: function () {
                  VIEW.file.open = false;
                  VIEW.render();
                } }, 
                h( 'button', {
                  onClick: function () {
                    VIEW.file.open = !VIEW.file.open;
                    VIEW.render();
                  }, class: "fl fl-center m-0 p-0 w-40" }, 
                  h( 'img', { src: "img/bars.svg" })
                ), 
                h( 'div', {
                  class: "bg-light fl-column bord-dark abs z-5", style: ("visibility: " + (VIEW.file.open ? 'visible' : 'hidden') + "; top: 10px; left: 10px;") }, 
                    h( 'button', {
                      onClick: function () {
                        VIEW.newCanvas.open = true;
                        VIEW.file.open = false;
                        VIEW.render();
                      }, class: "m-0 p-h-15 h-40 fl fl-center-y" }, 
                      h( 'img', { src: "img/new.svg" }), 
                      h( 'small', { class: "bold p-h-10", style: 'text-transform: capitalize;' }, "New")
                    ), 
                    h( 'button', {
                      onClick: function () {
                        VIEW.downloadCanvas.open = true;
                        VIEW.file.open = false;
                        VIEW.render();
                      }, class: "m-0 p-h-15 h-40 fl fl-center-y" }, 
                      h( 'img', { src: "img/download.svg" }), 
                      h( 'small', { class: "bold p-h-10", style: 'text-transform: capitalize;' }, "download")
                    )
                )
              ), 
              h( 'div', { class: 'fl-1 fl fl-justify-center' }, 
                h( 'button', {
                  onClick: function () { undo(); }, class: "fl fl-center m-0 p-0 w-40 bord-dark-l bord-dark-r" }, 
                  h( 'img', { src: "img/undo.svg" })
                ), 
                h( 'button', {
                  onClick: function () { redo(); }, class: "fl fl-center m-0 p-0 w-40 bord-dark-r" }, 
                  h( 'img', { src: "img/redo.svg" })
                )
              )
            ), 
            h( 'div', { class: "fl", style: "max-width: 241px; min-width: 241px;" }
              
            )
          )
        ), 
        h( 'div', { class: 'fl', style: 'height: calc(100% - 40px); ' }, 
          h( 'div', { class: 'w-40 bg-light bord-dark-r' }, 
            ['pencil', 'eraser', 'line', 'circle', 'square', 'fill', 'eye-dropper', 'move'].map(function (tool) { return h( 'button', {
                  onClick: function () { setTool(tool); }, class: "fl fl-center m-0 p-0 w-40 h-40 bord-dark-r", style: ("" + (APP.tool === tool ? 'background: rgba(52, 152, 219, 255);' : '')) }, 
                  h( 'img', { src: ("img/" + tool + ".svg") })
                ); }
              )
          ), 
          h( 'div', { class: 'fl-column', style: 'width: calc(100% - 281px);' }, 
            h( 'div', {
              id: 'canvas-outer-scroll', class: ("overflow fl-1 cursor-" + (APP.tool)) }, 
              h( Canvas, null )
            ), 
            h( Timeline, null )
            /* <div class='fl-1 h-full fl'>
              <div class='fl-1 fl-column h-full' style='width: calc(100% - 281px);'>
                <Canvas />
                <Timeline />
              </div>
            </div> */
          ), 
          h( 'div', { class: 'bg-light bord-dark-l fl-column', style: "max-width: 241px; min-width: 241px;" }, 
            h( 'div', { class: 'bord-dark-b fl-column overflow' }, 
              h( 'div', { class: 'h-30 bg-mid bord-dark-b fl fl-center-y p-h-10' }, 
                h( 'small', null, h( 'b', null, "Tool" ) )
              ), 
              h( 'div', { class: 'fl-1 overflow' }, 
                h( 'div', { class: "fl fl-center p-10" }, 
                  h( 'small', { class: "bold", style: "width: 150px;" }, "Brush Size"), 
                  h( 'select', {
                    onInput: function (e) {
                      VIEW.brushSize = parseInt(e.target.value);
                    }, value: VIEW.brushSize, class: "w-full" }, 
                      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(function (size, i) {
                          return h( 'option', { value: i }, size)
                        })
                  )
                )
              )
            ), 
            h( Color, null ), 
            h( 'div', { class: 'fl-1 bord-dark-b fl-column overflow' }, 
              h( 'div', { class: 'h-30 bg-mid bord-dark-b fl fl-center-y p-h-10' }, 
                h( 'small', null, h( 'b', null, "History" ) )
              ), 
              h( 'div', { class: 'fl-1 overflow' }, 
                VIEW.undo.map(function (entry, i) {
                    return h( 'button', { class: ("p-h-10 h-30 w-full txt-left fl fl-center-y " + (VIEW.undoPos === i ? 'bg-xlight' : '')) }, 
                      h( 'img', { width: '10', height: '10', style: 'margin-right: 10px;', src: ("img/" + (entry.icon)) }), 
                      h( 'small', { style: 'text-transform: capitalize; font-size: 11px;' }, h( 'b', null, entry.action ))
                    )
                  })
              )
            ), 
            h( 'div', { style: 'min-height: 249px; max-height: 249px;' }, 
              h( 'div', { class: 'h-30 bg-mid bord-dark-b fl fl-center-y p-h-10' }, 
                h( 'small', null, h( 'b', null, "Timeline" ) )
              ), 
              h( 'div', { class: 'overflow fl-1' }
                
              )
            )
          )
        ), 
        VIEW.newCanvas.open && h( 'div', { class: "abs top left w-full h-full fl fl-justify-center", style: "z-index: 10;" }, 
          h( 'div', { class: "w-full overflow-hidden", style: "max-width: 300px; margin-top: 175px;" }, 
            h( 'div', { class: "fl fl-center bg-mid bord-dark p-v-5", style: 'border-top-right-radius: 5px; border-top-left-radius: 5px;' }, h( 'small', null, h( 'b', null, "New Canvas" ) )), 
            h( 'div', { class: "p-10 bg-light bord-dark-l bord-dark-r bord-dark-b", style: 'border-bottom-right-radius: 5px; border-bottom-left-radius: 5px;' }, 
              h( 'div', { class: "m-5 p-v-5" }, 
                h( 'div', { class: "fl fl-center" }, 
                  h( 'small', { class: "bold", style: "width: 150px;" }, "Dimensions"), 
                  h( 'select', {
                    onInput: function (e) {
                      var val = e.target.value.split('x');
                      VIEW.newCanvas.w = parseInt(val[0]);
                      VIEW.newCanvas.h = parseInt(val[1]);
                    }, class: "w-full" }, 
                    h( 'option', { value: "32x32" }, "32x32"), 
                    h( 'option', { value: "50x50" }, "50x50"), 
                    h( 'option', { value: "64x64" }, "64x64"), 
                    h( 'option', { value: "100x100" }, "100x100"), 
                    h( 'option', { value: "128x128" }, "128x128")
                  )
                )
              ), 
              h( 'div', { class: "fl", style: "padding-top: 5px;" }, 
                h( 'button', {
                  onClick: function () {
                    VIEW.newCanvas.open = false;
                    VIEW.render();
                  }, class: "b-r-2 bold p-5 w-full bg-red m-5" }, "Cancel"), 
                h( 'button', {
                  onClick: function () {
                    newData(VIEW.newCanvas.w, VIEW.newCanvas.h);
                    VIEW.newCanvas.open = false;
                    VIEW.render();
                  }, class: "b-r-2 bold p-5 w-full bg-green m-5" }, "Confirm")
              )
            )
          )
        ), 
        VIEW.downloadCanvas.open && h( 'div', { class: "abs top left w-full h-full fl fl-center-x", style: "z-index: 10;" }, 
          h( 'div', { class: "w-full", style: "max-width: 300px; overflow: hidden; margin-top: 175px;" }, 
              h( 'div', { class: "fl fl-center bg-mid bord-dark p-v-5", style: 'border-top-right-radius: 5px; border-top-left-radius: 5px;' }, h( 'small', { class: "bold" }, "Download")), 
              h( 'div', { class: "p-10 bg-light bord-dark-l bord-dark-r bord-dark-b", style: 'border-bottom-right-radius: 5px; border-bottom-left-radius: 5px;' }, 
                h( 'div', { class: "m-5 p-v-5" }, 
                  h( 'div', { class: "fl fl-center" }, 
                    h( 'small', { class: "bold", style: "width: 150px;" }, "Type"), 
                    h( 'select', {
                      onInput: function (e) {
                        VIEW.downloadCanvas.type = e.target.value;
                      }, value: VIEW.downloadCanvas.type, id: "config-download-size", class: "w-full" }, 
                        h( 'option', { value: "frame" }, "Frame"), 
                        h( 'option', { value: "spritesheet" }, "Spritesheet")
                    )
                  )
                ), 
                h( 'div', { class: "m-5 p-v-5" }, 
                    h( 'div', { class: "fl fl-center" }, 
                      h( 'small', { class: "bold", style: "width: 150px;" }, "Size"), 
                      h( 'select', {
                        onInput: function (e) {
                          VIEW.downloadCanvas.size = parseInt(e.target.value);
                        }, value: VIEW.downloadCanvas.size, id: "config-download-size", class: "w-full" }, 
                          h( 'option', { value: "2" }, "2x"), 
                          h( 'option', { value: "4" }, "4x"), 
                          h( 'option', { value: "8" }, "8x"), 
                          h( 'option', { value: "16" }, "16x"), 
                          h( 'option', { value: "32" }, "32x"), 
                          h( 'option', { value: "64" }, "64x")
                      )
                    )
                ), 
                h( 'div', { class: "fl", style: "padding-top: 5px;" }, 
                  h( 'button', {
                    onClick: function () {
                      VIEW.downloadCanvas.open = false;
                      VIEW.render();
                    }, class: "b-r-2 bold p-5 w-full bg-red m-5" }, "Cancel"), 
                  h( 'a', {
                    onClick: function (e) {
                      downloadCanvas(e);
                    }, class: "w-full m-5 clickable", download: "pixel-art.png", style: "display: inline-block;" }, 
                    h( 'button', { class: "b-r-2 bold p-5 w-full bg-green no-ptr" }, "Download")
                  )
                )
              )
          )
        )
      )
    )
  };

  return View;
}(m));

var onProgramStart = function () {
  console.log('Program started.');

  newData(64, 64, true);
  H(h( View, null ), document.body);
  
  loadData({
    onLoaded: function () {
      initCanvases();
      VIEW.render();
    },
    onError: function () {}
  });

  setupKeyListeners();
  
  window.addEventListener('keyup', function () {
    saveData();
  });  
};

window.addEventListener('load', onProgramStart);

window.addEventListener('beforeunload', function (event) {
  event.returnValue = "Are you sure you want to leave?";
});
//# sourceMappingURL=bundle.js.map
