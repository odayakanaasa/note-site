webpackJsonp([0x7bcd1db9de9f9800],{"./src/components/Tag.js":function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l=o("./node_modules/react/react.js"),u=n(l),p=o("./node_modules/gatsby-link/index.js"),i=n(p),c=o("./node_modules/lodash/kebabCase.js"),d=n(c);o("./src/less/component/tag.less");var f=function(e){function t(){return s(this,t),a(this,e.apply(this,arguments))}return r(t,e),t.prototype.render=function(){var e=this.props.name,t=this.props.count||"",o=this.props.linkTo||"/tags/"+(0,d.default)(e)+"/";return u.default.createElement(i.default,{to:o,className:"tag-component"},u.default.createElement("span",{className:"tag-name"},e),t&&u.default.createElement("span",{className:"tag-count"},t))},t}(u.default.Component);t.default=f,f.propTypes={name:u.default.PropTypes.string,count:u.default.PropTypes.number,linkTo:u.default.PropTypes.string},e.exports=t.default},"./src/less/component/tag.less":function(e,t){},"./src/less/template/tag-route.less":function(e,t){},'./node_modules/babel-loader/lib/index.js?{"presets":["/home/peng/HUE/WorkSpace/selfDevelop/note-site/node_modules/babel-preset-react/lib/index.js","/home/peng/HUE/WorkSpace/selfDevelop/note-site/node_modules/babel-preset-es2015/lib/index.js","/home/peng/HUE/WorkSpace/selfDevelop/note-site/node_modules/babel-preset-stage-1/lib/index.js",["/home/peng/HUE/WorkSpace/selfDevelop/note-site/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/home/peng/HUE/WorkSpace/selfDevelop/note-site/node_modules/babel-preset-stage-0/lib/index.js","/home/peng/HUE/WorkSpace/selfDevelop/note-site/node_modules/babel-preset-react/lib/index.js"],"plugins":["/home/peng/HUE/WorkSpace/selfDevelop/note-site/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/home/peng/HUE/WorkSpace/selfDevelop/note-site/node_modules/babel-plugin-add-module-exports/lib/index.js","/home/peng/HUE/WorkSpace/selfDevelop/note-site/node_modules/babel-plugin-add-module-exports/lib/index.js","/home/peng/HUE/WorkSpace/selfDevelop/note-site/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"cacheDirectory":true}!./src/templates/tag-route.js':function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.pageQuery=void 0;var l=o("./node_modules/react/react.js"),u=n(l),p=o("./node_modules/gatsby-link/index.js"),i=n(p),c=o("./src/components/Tag.js"),d=n(c);o("./src/less/template/tag-route.less");var f=function(e){function t(){return s(this,t),a(this,e.apply(this,arguments))}return r(t,e),t.prototype.render=function(){var e=this.props.data.allMarkdownRemark.edges,t=e.map(function(e,t){return u.default.createElement("li",{key:t,className:"tag-list-item"},u.default.createElement(i.default,{to:e.node.frontmatter.path},e.node.frontmatter.title))});return u.default.createElement("div",{className:"tag-route-template"},u.default.createElement("div",{className:"tag-header-panel"},u.default.createElement(d.default,{name:this.props.pathContext.tag,count:this.props.data.allMarkdownRemark.totalCount})),u.default.createElement("ul",{className:"tag-content-list"},t),u.default.createElement("p",null,u.default.createElement(i.default,{to:"/tags/"},"查看全部标签")))},t}(u.default.Component);t.default=f;t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-templates-tag-route-js-5448f45d6781dec0165a.js.map