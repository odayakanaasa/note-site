webpackJsonp([0x67ef26645b2ab800,0x36dfee11ec260a00],{"./node_modules/json-loader/index.js!./.cache/json/layout-index.json":function(e,t){e.exports={layoutContext:{}}},'./node_modules/babel-loader/lib/index.js?{"presets":["/home/peng/develop/workspace/stone-site/node_modules/babel-preset-react/lib/index.js","/home/peng/develop/workspace/stone-site/node_modules/babel-preset-es2015/lib/index.js","/home/peng/develop/workspace/stone-site/node_modules/babel-preset-stage-1/lib/index.js",["/home/peng/develop/workspace/stone-site/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/home/peng/develop/workspace/stone-site/node_modules/babel-preset-stage-0/lib/index.js","/home/peng/develop/workspace/stone-site/node_modules/babel-preset-react/lib/index.js"],"plugins":["/home/peng/develop/workspace/stone-site/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/home/peng/develop/workspace/stone-site/node_modules/babel-plugin-add-module-exports/lib/index.js","/home/peng/develop/workspace/stone-site/node_modules/babel-plugin-add-module-exports/lib/index.js","/home/peng/develop/workspace/stone-site/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"cacheDirectory":true}!./.cache/layouts/index.js':function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},s=n("./node_modules/react/react.js"),i=o(s),a=n("./src/layouts/index.js"),l=o(a),d=n("./node_modules/json-loader/index.js!./.cache/json/layout-index.json"),c=o(d);t.default=function(e){return i.default.createElement(l.default,r({},e,c.default))},e.exports=t.default},"./node_modules/element-resize-event/index.js":function(e,t){function n(e){var t=e.target||e.srcElement;t.__resizeRAF__&&r(t.__resizeRAF__),t.__resizeRAF__=o(function(){var n=t.__resizeTrigger__;n.__resizeListeners__.forEach(function(t){t.call(n,e)})})}var o=function(){var e=this,t=e.requestAnimationFrame||e.mozRequestAnimationFrame||e.webkitRequestAnimationFrame||function(t){return e.setTimeout(t,20)};return function(e){return t(e)}}(),r=function(){var e=this,t=e.cancelAnimationFrame||e.mozCancelAnimationFrame||e.webkitCancelAnimationFrame||e.clearTimeout;return function(e){return t(e)}}(),t=function(e,t){function o(){this.contentDocument.defaultView.__resizeTrigger__=this.__resizeElement__,this.contentDocument.defaultView.addEventListener("resize",n)}var r,s=this,i=s.document,a=i.attachEvent;if("undefined"!=typeof navigator&&(r=navigator.userAgent.match(/Trident/)||navigator.userAgent.match(/Edge/)),!e.__resizeListeners__)if(e.__resizeListeners__=[],a)e.__resizeTrigger__=e,e.attachEvent("onresize",n);else{"static"===getComputedStyle(e).position&&(e.style.position="relative");var l=e.__resizeTrigger__=i.createElement("object");l.setAttribute("style","display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; pointer-events: none; z-index: -1; opacity: 0;"),l.setAttribute("class","resize-sensor"),l.__resizeElement__=e,l.onload=o,l.type="text/html",r&&e.appendChild(l),l.data="about:blank",r||e.appendChild(l)}e.__resizeListeners__.push(t)};e.exports="undefined"==typeof window?t:t.bind(window),e.exports.unbind=function(e,t){var o=document.attachEvent;t?e.__resizeListeners__.splice(e.__resizeListeners__.indexOf(t),1):e.__resizeListeners__=[],e.__resizeListeners__.length||(o?e.detachEvent("onresize",n):(e.__resizeTrigger__.contentDocument.defaultView.removeEventListener("resize",n),delete e.__resizeTrigger__.contentDocument.defaultView.__resizeTrigger__,e.__resizeTrigger__=!e.removeChild(e.__resizeTrigger__)),delete e.__resizeListeners__)}},"./node_modules/raf/index.js":function(e,t,n){for(var o=n("./node_modules/raf/node_modules/performance-now/lib/performance-now.js"),r="undefined"==typeof window?{}:window,s=["moz","webkit"],i="AnimationFrame",a=r["request"+i],l=r["cancel"+i]||r["cancelRequest"+i],d=!0,c=0;c<s.length&&!a;c++)a=r[s[c]+"Request"+i],l=r[s[c]+"Cancel"+i]||r[s[c]+"CancelRequest"+i];if(!a||!l){d=!1;var u=0,p=0,m=[],h=1e3/60;a=function(e){if(0===m.length){var t=o(),n=Math.max(0,h-(t-u));u=n+t,setTimeout(function(){var e=m.slice(0);m.length=0;for(var t=0;t<e.length;t++)if(!e[t].cancelled)try{e[t].callback(u)}catch(e){setTimeout(function(){throw e},0)}},Math.round(n))}return m.push({handle:++p,callback:e,cancelled:!1}),p},l=function(e){for(var t=0;t<m.length;t++)m[t].handle===e&&(m[t].cancelled=!0)}}e.exports=function(e){return d?a.call(r,function(){try{e.apply(this,arguments)}catch(e){setTimeout(function(){throw e},0)}}):a.call(r,e)},e.exports.cancel=function(){l.apply(r,arguments)}},"./node_modules/raf/node_modules/performance-now/lib/performance-now.js":function(e,t,n){(function(t){(function(){var n,o,r;"undefined"!=typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:"undefined"!=typeof t&&null!==t&&t.hrtime?(e.exports=function(){return(n()-r)/1e6},o=t.hrtime,n=function(){var e;return e=o(),1e9*e[0]+e[1]},r=n()):Date.now?(e.exports=function(){return Date.now()-r},r=Date.now()):(e.exports=function(){return(new Date).getTime()-r},r=(new Date).getTime())}).call(this)}).call(t,n("./node_modules/process/browser.js"))},"./node_modules/react-component-width-mixin/index.js":function(e,t,n){var o=n("./node_modules/react-dom/index.js"),r=n("./node_modules/element-resize-event/index.js");e.exports={getInitialState:function(){return void 0!==this.props.initialComponentWidth&&null!==this.props.initialComponentWidth?{componentWidth:this.props.initialComponentWidth}:{}},componentDidMount:function(){this.setState({componentWidth:o.findDOMNode(this).getBoundingClientRect().width}),r(o.findDOMNode(this),this.onResize)},componentDidUpdate:function(){0===o.findDOMNode(this).getElementsByClassName("resize-sensor").length&&r(o.findDOMNode(this),this.onResize)},onResize:function(){this.setState({componentWidth:o.findDOMNode(this).getBoundingClientRect().width})}}},"./node_modules/react-page-width/dist/index.js":function(e,t,n){var o;o=n("./node_modules/react-page-width/dist/resizeListener.js"),e.exports={getInitialState:function(){return this.props.initialPageWidth?{pageWidth:this.props.initialPageWidth}:{}},componentDidMount:function(){return o.on(this.onResize)},componentWillUnmount:function(){return o.off(this.onResize)},onResize:function(e){return this.setState({pageWidth:e})}}},"./node_modules/react-page-width/dist/resizeListener.js":function(e,t,n){var o,r,s,i,a,l;s=n("./node_modules/raf/index.js"),o=void 0,i=[],a=!1,"undefined"!=typeof window&&null!==window&&(o=window.innerWidth),r=function(){if(!a)return a=!0,s(l)},l=function(){var e,t,n;for(o=window.innerWidth,e=0,t=i.length;e<t;e++)(n=i[e])(o);return a=!1},"undefined"!=typeof window&&null!==window&&window.addEventListener("resize",r),e.exports={on:function(e){return e(o),i.push(e)},off:function(e){return i.splice(i.indexOf(e),1)}}},"./node_modules/react-responsive-grid/dist/components/Breakpoint.js":function(e,t,n){var o,r,s,i,a,l;i=n("./node_modules/react/react.js"),a=n("./node_modules/react-component-width-mixin/index.js"),s=n("./node_modules/react-page-width/dist/index.js"),l=n("./node_modules/object-assign/index.js"),o=i.createClass({displayName:"Breakpoint",mixins:[a],propTypes:{minWidth:i.PropTypes.number,maxWidth:i.PropTypes.number},getDefaultProps:function(){return{minWidth:0,maxWidth:1e21}},renderChildren:function(){return i.Children.map(this.props.children,function(e){return function(t){var n;return"Span"===(null!=t&&null!=(n=t.type)?n.displayName:void 0)?i.cloneElement(t,{context:e.props.context}):t}}(this))},render:function(){var e,t;return e=l({},this.props),delete e.maxWidth,delete e.minWidth,delete e.widthMethod,this.state.componentWidth&&this.props.minWidth<=(t=this.state.componentWidth)&&t<this.props.maxWidth?i.createElement("div",Object.assign({},e),this.renderChildren()):i.createElement("div",null)}}),r=i.createClass({displayName:"Breakpoint",mixins:[s],propTypes:{minWidth:i.PropTypes.number,maxWidth:i.PropTypes.number},getDefaultProps:function(){return{minWidth:0,maxWidth:1e21}},renderChildren:function(){return i.Children.map(this.props.children,function(e){return function(t){var n;return"Span"===(null!=(n=t.type)?n.displayName:void 0)?i.cloneElement(t,{context:e.props.context}):t}}(this))},render:function(){var e,t;return e=l({},this.props),delete e.maxWidth,delete e.minWidth,delete e.widthMethod,this.state.pageWidth&&this.props.minWidth<=(t=this.state.pageWidth)&&t<this.props.maxWidth?i.createElement("div",Object.assign({},e),this.renderChildren()):i.createElement("div",null)}}),e.exports=i.createClass({displayName:"Breakpoint",propTypes:{widthMethod:i.PropTypes.string.isRequired,minWidth:i.PropTypes.number,maxWidth:i.PropTypes.number},getDefaultProps:function(){return{widthMethod:"pageWidth"}},render:function(){return"pageWidth"===this.props.widthMethod?i.createElement(r,Object.assign({},this.props)):"componentWidth"===this.props.widthMethod?i.createElement(o,Object.assign({},this.props)):void 0}})},"./node_modules/react-responsive-grid/dist/components/Container.js":function(e,t,n){var o,r;o=n("./node_modules/react/react.js"),r=n("./node_modules/object-assign/index.js"),e.exports=o.createClass({displayName:"Container",render:function(){var e,t,n,s;return t={maxWidth:"960px",marginLeft:"auto",marginRight:"auto"},s=r(t,this.props.style),e=this.props.children,n=r({},this.props),delete n.children,delete n.style,o.createElement("div",Object.assign({},n,{style:s}),e,o.createElement("span",{style:{display:"block",clear:"both"}}," "))}})},"./node_modules/react-responsive-grid/dist/components/Grid.js":function(e,t,n){var o,r;o=n("./node_modules/react/react.js"),r=n("./node_modules/object-assign/index.js"),e.exports=o.createClass({displayName:"Grid",propTypes:{columns:o.PropTypes.number,gutterRatio:o.PropTypes.number},getDefaultProps:function(){return{columns:12,gutterRatio:.25}},renderChildren:function(){return o.Children.map(this.props.children,function(e){return function(t){var n,r;return"Breakpoint"===(n=null!=(r=t.type)?r.displayName:void 0)||"Span"===n?o.cloneElement(t,{context:{columns:e.props.columns,gutterRatio:e.props.gutterRatio}}):t}}(this))},render:function(){var e;return e=r({},this.props),delete e.gutterRatio,delete e.columns,o.createElement("div",Object.assign({},e),this.renderChildren(),o.createElement("span",{style:{display:"block",clear:"both"}}," "))}})},"./node_modules/react-responsive-grid/dist/components/Span.js":function(e,t,n){var o,r,s;o=n("./node_modules/react/react.js"),r=n("./node_modules/object-assign/index.js"),s=n("./node_modules/react-responsive-grid/dist/utils/SpanCalculate.js"),e.exports=o.createClass({displayName:"Span",propTypes:{context:o.PropTypes.object,columns:o.PropTypes.number,at:o.PropTypes.number,pre:o.PropTypes.number,post:o.PropTypes.number,squish:o.PropTypes.number,last:o.PropTypes.bool,break:o.PropTypes.bool},getDefaultProps:function(){return{at:0,pre:0,post:0,squish:0,last:!1,first:!1,break:!1}},renderChildren:function(){return o.Children.map(this.props.children,function(e){return function(t){var n;return"Span"===(null!=t&&null!=(n=t.type)?n.displayName:void 0)?o.cloneElement(t,{context:{columns:e.props.columns,gutterRatio:e.props.context.gutterRatio}}):t}}(this))},render:function(){var e,t;return t=s({contextColumns:this.props.context.columns,gutterRatio:this.props.context.gutterRatio,columns:this.props.columns,at:this.props.at,pre:this.props.pre,post:this.props.post,squish:this.props.squish,last:this.props.last,break:this.props.break}),t=r(t,this.props.style),e=r({},this.props,{style:t}),delete e.at,delete e.break,delete e.columns,delete e.context,delete e.first,delete e.last,delete e.post,delete e.pre,delete e.squish,delete e.style,o.createElement("div",Object.assign({},e,{style:t}),this.renderChildren(),o.createElement("span",{style:{display:"block",clear:"both"}}," "))}})},"./node_modules/react-responsive-grid/dist/index.js":function(e,t,n){t.Container=n("./node_modules/react-responsive-grid/dist/components/Container.js"),t.Grid=n("./node_modules/react-responsive-grid/dist/components/Grid.js"),t.Breakpoint=n("./node_modules/react-responsive-grid/dist/components/Breakpoint.js"),t.Span=n("./node_modules/react-responsive-grid/dist/components/Span.js")},"./node_modules/react-responsive-grid/dist/utils/SpanCalculate.js":function(e,t,n){var o;o=n("./node_modules/object-assign/index.js"),e.exports=function(e){var t,n,r,s,i,a,l,d,c,u;return r={columns:3,at:0,pre:0,post:0,squish:0,contextColumns:12,gutterRatio:.25,first:!1,last:!1},c=o(r,e),d=100/(c.contextColumns+(c.contextColumns-1)*c.gutterRatio),i=c.gutterRatio*d,n=function(e){return d*e+i*(e-1)},t=function(e){return 0===e?0:n(e)+i},u=n(c.columns),a=0===c.at&&0===c.pre&&0===c.squish?0:t(c.at)+t(c.pre)+t(c.squish),c.last&&0===c.post&&0===c.squish?l=0:0!==c.post||0!==c.squish?(l=t(c.post)+t(c.squish),c.last||(l+=i)):l=i,s=c.last?"right":"left",u+="%",a+="%",l+="%",{float:s,marginLeft:a,marginRight:l,width:u,clear:c.break?"both":"none"}}},"./src/components/GoTop.js":function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var a=n("./node_modules/react/react.js"),l=o(a),d=function(e){function t(){r(this,t);var n=s(this,e.call(this));return n.getScrollTarget=function(){if("undefined"!=typeof document)return document.scrollingElement||document.documentElement},n.onScroll=function(){n.setState({show:n.scrollTarget.scrollTop>n.offsetTop})},n.onClick=function(){n.scrollUp()},n.scrollUp=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100;n.scrollTarget.scrollTop-=e,n.scrollTarget.scrollTop>0?setTimeout(n.scrollUp,1e3/60):n.scrollTarget.scrollTop=0},n.scrollTarget=n.getScrollTarget(),n.offsetTop=150,n.state={},n}return i(t,e),t.prototype.componentDidMount=function(){window.addEventListener("scroll",this.onScroll)},t.prototype.componentWillUnmount=function(){window.removeEventListener("scroll",this.onScroll)},t.prototype.render=function(){var e=this.state.show?{}:{display:"none"};return l.default.createElement("div",{className:"corner-container",style:e},l.default.createElement("button",{className:"corner-button",type:"button",onClick:this.onClick},l.default.createElement("svg",{fill:"currentColor",viewBox:"0 0 24 24",width:"24",height:"24"},l.default.createElement("path",{d:"M16.036 19.59a1 1 0 0 1-.997.995H9.032a.996.996 0 0 1-.997-.996v-7.005H5.03c-1.1 0-1.36-.633-.578-1.416L11.33 4.29a1.003 1.003 0 0 1 1.412 0l6.878 6.88c.782.78.523 1.415-.58 1.415h-3.004v7.005z"}))))},t}(l.default.Component);t.default=d,e.exports=t.default},"./src/css/components.css":function(e,t){},"./src/css/entry.css":function(e,t){},"./src/css/prism.css":function(e,t){},"./src/layouts/index.js":function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var a=n("./node_modules/react/react.js"),l=o(a),d=n("./node_modules/gatsby-link/index.js"),c=o(d),u=n("./node_modules/react-responsive-grid/dist/index.js"),p=n("./src/components/GoTop.js"),m=o(p);n("./src/css/prism.css"),n("./src/css/entry.css"),n("./src/css/components.css");var h=function(e){function t(){return r(this,t),s(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){var e=this.props,t=e.location,n=e.children,o="Note Site",r="/"===t.pathname||"/note-site/"===t.pathname,s=l.default.createElement("h1",{style:r?{fontSize:"40px"}:{fontSize:"20px"}},l.default.createElement(c.default,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},o));return l.default.createElement(u.Container,{style:{maxWidth:"48rem",padding:"2rem 1.6rem"}},s,n(),l.default.createElement(m.default,null))},t}(l.default.Component);h.propTypes={children:l.default.PropTypes.func,location:l.default.PropTypes.object,route:l.default.PropTypes.object},t.default=h,e.exports=t.default}});
//# sourceMappingURL=component---src-layouts-index-js-7c1dde895f10aa358e7f.js.map