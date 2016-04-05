//см. инструкцию внизу этого файла
var _css_,_js_,_jshead_,_lazy_,_lazyhead_; /*head.load - v1.0.3*/(function(n,t){"use strict";function w(){}function u(n,t){if(n){typeof n=="object"&&(n=[].slice.call(n));for(var i=0,r=n.length;i<r;i++)t.call(n,n[i],i)}}function it(n,i){var r=Object.prototype.toString.call(i).slice(8,-1);return i!==t&&i!==null&&r===n}function s(n){return it("Function",n)}function a(n){return it("Array",n)}function et(n){var i=n.split("/"),t=i[i.length-1],r=t.indexOf("?");return r!==-1?t.substring(0,r):t}function f(n){(n=n||w,n._done)||(n(),n._done=1)}function ot(n,t,r,u){var f=typeof n=="object"?n:{test:n,success:!t?!1:a(t)?t:[t],failure:!r?!1:a(r)?r:[r],callback:u||w},e=!!f.test;return e&&!!f.success?(f.success.push(f.callback),i.load.apply(null,f.success)):e||!f.failure?u():(f.failure.push(f.callback),i.load.apply(null,f.failure)),i}function v(n){var t={},i,r;if(typeof n=="object")for(i in n)!n[i]||(t={name:i,url:n[i]});else t={name:et(n),url:n};return(r=c[t.name],r&&r.url===t.url)?r:(c[t.name]=t,t)}function y(n){n=n||c;for(var t in n)if(n.hasOwnProperty(t)&&n[t].state!==l)return!1;return!0}function st(n){n.state=ft;u(n.onpreload,function(n){n.call()})}function ht(n){n.state===t&&(n.state=nt,n.onpreload=[],rt({url:n.url,type:"cache"},function(){st(n)}))}function ct(){var n=arguments,t=n[n.length-1],r=[].slice.call(n,1),f=r[0];return(s(t)||(t=null),a(n[0]))?(n[0].push(t),i.load.apply(null,n[0]),i):(f?(u(r,function(n){s(n)||!n||ht(v(n))}),b(v(n[0]),s(f)?f:function(){i.load.apply(null,r)})):b(v(n[0])),i)}function lt(){var n=arguments,t=n[n.length-1],r={};return(s(t)||(t=null),a(n[0]))?(n[0].push(t),i.load.apply(null,n[0]),i):(u(n,function(n){n!==t&&(n=v(n),r[n.name]=n)}),u(n,function(n){n!==t&&(n=v(n),b(n,function(){y(r)&&f(t)}))}),i)}function b(n,t){if(t=t||w,n.state===l){t();return}if(n.state===tt){i.ready(n.name,t);return}if(n.state===nt){n.onpreload.push(function(){b(n,t)});return}n.state=tt;rt(n,function(){n.state=l;t();u(h[n.name],function(n){f(n)});o&&y()&&u(h.ALL,function(n){f(n)})})}function at(n){n=n||"";var t=n.split("?")[0].split(".");return t[t.length-1].toLowerCase()}function rt(t,i){function e(t){t=t||n.event;u.onload=u.onreadystatechange=u.onerror=null;i()}function o(f){f=f||n.event;(f.type==="load"||/loaded|complete/.test(u.readyState)&&(!r.documentMode||r.documentMode<9))&&(n.clearTimeout(t.errorTimeout),n.clearTimeout(t.cssTimeout),u.onload=u.onreadystatechange=u.onerror=null,i())}function s(){if(t.state!==l&&t.cssRetries<=20){for(var i=0,f=r.styleSheets.length;i<f;i++)if(r.styleSheets[i].href===u.href){o({type:"load"});return}t.cssRetries++;t.cssTimeout=n.setTimeout(s,250)}}var u,h,f;i=i||w;h=at(t.url);h==="css"?(u=r.createElement("link"),u.type="text/"+(t.type||"css"),u.rel="stylesheet",u.href=t.url,t.cssRetries=0,t.cssTimeout=n.setTimeout(s,500)):(u=r.createElement("script"),u.type="text/"+(t.type||"javascript"),u.src=t.url);u.onload=u.onreadystatechange=o;u.onerror=e;u.async=!1;u.defer=!1;t.errorTimeout=n.setTimeout(function(){e({type:"timeout"})},7e3);f=r.head||r.getElementsByTagName("head")[0];f.insertBefore(u,f.lastChild)}function vt(){for(var t,u=r.getElementsByTagName("script"),n=0,f=u.length;n<f;n++)if(t=u[n].getAttribute("data-headjs-load"),!!t){i.load(t);return}}function yt(n,t){var v,p,e;return n===r?(o?f(t):d.push(t),i):(s(n)&&(t=n,n="ALL"),a(n))?(v={},u(n,function(n){v[n]=c[n];i.ready(n,function(){y(v)&&f(t)})}),i):typeof n!="string"||!s(t)?i:(p=c[n],p&&p.state===l||n==="ALL"&&y()&&o)?(f(t),i):(e=h[n],e?e.push(t):e=h[n]=[t],i)}function e(){if(!r.body){n.clearTimeout(i.readyTimeout);i.readyTimeout=n.setTimeout(e,50);return}o||(o=!0,vt(),u(d,function(n){f(n)}))}function k(){r.addEventListener?(r.removeEventListener("DOMContentLoaded",k,!1),e()):r.readyState==="complete"&&(r.detachEvent("onreadystatechange",k),e())}var r=n.document,d=[],h={},c={},ut="async"in r.createElement("script")||"MozAppearance"in r.documentElement.style||n.opera,o,g=n.head_conf&&n.head_conf.head||"head",i=n[g]=n[g]||function(){i.ready.apply(null,arguments)},nt=1,ft=2,tt=3,l=4,p;if(r.readyState==="complete")e();else if(r.addEventListener)r.addEventListener("DOMContentLoaded",k,!1),n.addEventListener("load",e,!1);else{r.attachEvent("onreadystatechange",k);n.attachEvent("onload",e);p=!1;try{p=!n.frameElement&&r.documentElement}catch(wt){}p&&p.doScroll&&function pt(){if(!o){try{p.doScroll("left")}catch(t){n.clearTimeout(i.readyTimeout);i.readyTimeout=n.setTimeout(pt,50);return}e()}}()}i.load=i.js=ut?lt:ct;i.test=ot;i.ready=yt;i.ready(r,function(){y()&&u(h.ALL,function(n){f(n)});i.feature&&i.feature("domloaded",!0)})})(window);

var pathToRoot = "components/"; function _loaders_(pathToComponent){return head.load(pathToRoot + pathToComponent)} _css_=_js_=_jshead_=_lazy_=_lazyhead_ = _loaders_;


/*GLOBAL*/

//_css_("dev-comments/before.css");
//_js_("dev-comments/before.js");

//autouncomment//_jshead_("l.js/l.min.js") //this uncomment automatically

//_jshead_("head/head.core.min.js");
//_jshead_("head/head.load.js");



_css_("fonts/fonts.css");

_css_("normalize/normalize.css");

_css_("tags/tags.css");


//UTILITIES

_css_("lucy-flash-drive/lucy.helper.min.css");

_css_("lucy-flash-drive/lucy.grid.min.css");


//BLOCKS

_css_("button/button.css");

_css_("table/table.css");

_css_("navbar/navbar.css");

_css_("flexvideo/flexvideo.css");


_css_("cms-requirements/cms-requirements.css");

_css_("custom-code/custom-code.css");
_js_("custom-code/custom-code.js");

//WIDGETS

//_css_("YoutubeDelayed/YoutubeDelayed.css");
//_js_("YoutubeDelayed/YoutubeDelayed.min.js");

//_css_("slick/slick.css");
//_css_("slick/slick-theme.css");
//_js_("slick/slick.min.js");

_css_("loader-gif/loader-gif.css");

//_css_("btn-callmephone/btn-callmephone.css");

//_css_("btn-callme/btn-callme.css");
//_css_("btn-callme/btn-callme--blue.css");
//_css_("btn-callme/btn-callme--red.css");
//_css_("btn-callme/btn-callme--gray.css");

//_css_("btn-3d/btn-3d.css");
//_css_("btn-3d/btn-3d--blue.css");
//_css_("btn-3d/btn-3d--red.css");

_css_("btn-mtrl/btn-mtrl.css");

_css_("jquery.modal/jquery.modal.css");
_js_("jquery.modal/jquery.modal.min.js");

//_js_("js-cookie/js-cookie.js");

//_js_("beforeCloseCookies/beforeCloseCookies.js");

//_js_("beforeCloseSession/beforeCloseSession.js");


//_css_("jquery.accordion/jquery.accordion.css");
//_js_("jquery.accordion/jquery.accordion.js");

//_css_("material-design-effects/material-design-effects.css");
//_js_("material-design-effects/material-design-effects.js");

_css_("jquery.backtop/jquery.backtop.css");
_js_("jquery.backtop/jquery.backtop.js");

//_css_("jquery.accordion/jquery.accordion.css");
//_jshead_("jquery.accordion/jquery.accordion.js");

//NON CSS

_js_("jquery.stickyjs/jquery.stickyjs.js");

_css_("vegas/vegas.css");
_js_("vegas/vegas.min.js");

_js_("scrollReveal/scrollReveal.min.js");

_js_("parallax/parallax.js");

_js_("layzr/layzr.min.js");

//_js_("sticky/sticky.js");

//_js_("smoothscroll/smoothscroll.min.js");

//_js_("scrollme/jquery.scrollme.min.js");

//_js_("jquery.pin/jquery.pin.min.js");

//_js_("mixitup/jquery.mixitup.min.js");

_js_("onScrollChangeClass/onScrollChangeClass.js");

//_js_("isotope/isotope.pkgd.min.js");

//_js_("changebg/changebg.js");

//_js_("calendar_kdg/calendar_kdg.js");



/*Этот файл - конфигурация для подключения файлов-модулей как при разработке, так и при сборке в продакшн.
 Что делать:
0) разобраться в назначении переменных:
    _css_      - (содержимое файла скопируется в _head.css)
    _jshead_   - (содержимое файла скопируется в _head.js)
    _js_       - (содержимое файла скопируется в _body.js)
    _lazy_     - (строка* будет скопирована в файл "_body.js", а содержимое
                        файла подгрузится динамически по условию в строке)
    _lazyhead_ - (строка** будет скопирована в файл "_head.js", а содержимое
                        файла подгрузится динамически по условию в строке)

* Например: $("#idButton").on{"click", function(){_lazy_("module/name.js")}}
** Например: if(document.getElementById("idDomElement")) {function(){_lazyhead_("module/name.js")}}

1) раскомментировать/добавить(по аналогии) пути к css/js файлам-модулям (которые 
будут использоваться для разработки) и верстать/скриптовать до необходимого результата;
2) нажать два раза файл "BUILD-PRODUCTION" для формирования файлов продакшна;
3) закомментировать в html
    <head> <!--<script src="_head.css"></script>--></head>
    и раскомментировать ссылки на файлы:
        <head>
            <script src="_head.css"></script>
            <script src="_head.js"></script>
        </head>
        <body>
            <script src="_body.js"></script>
        </body>

Подробности: при добавлении новых компонентов, между компонентами должны быть разделяющие пустые строки 
(внутри компонента все зависимости перечисляются без отступа строке).
В случае ленивой подгрузки, вся конструкция с условием и ссылкой на загружаемый файл пишется в одну строку.
*/
