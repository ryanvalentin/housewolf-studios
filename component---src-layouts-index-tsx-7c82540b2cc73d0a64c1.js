webpackJsonp([22676092666560,60335399758886],{183:function(e,t){e.exports={layoutContext:{}}},456:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=n(1),u=r(i),a=n(461),s=r(a),c=n(183),p=r(c);t.default=function(e){return u.default.createElement(s.default,o({},e,p.default))},e.exports=t.default},617:function(e,t){"use strict";var n={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,mixins:!0,propTypes:!0,type:!0},r={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},o=Object.defineProperty,i=Object.getOwnPropertyNames,u=Object.getOwnPropertySymbols,a=Object.getOwnPropertyDescriptor,s=Object.getPrototypeOf,c=s&&s(Object);e.exports=function e(t,p,f){if("string"!=typeof p){if(c){var d=s(p);d&&d!==c&&e(t,d,f)}var l=i(p);u&&(l=l.concat(u(p)));for(var h=0;h<l.length;++h){var y=l[h];if(!(n[y]||r[y]||f&&f[y])){var v=a(p,y);try{o(t,y,v)}catch(e){}}}return t}return t}},571:function(e,t){},822:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function a(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"store",n=arguments[1],r=n||t+"Subscription",a=function(e){function n(r,u){o(this,n);var a=i(this,e.call(this,r,u));return a[t]=r.store,a}return u(n,e),n.prototype.getChildContext=function(){var e;return e={},e[t]=this[t],e[r]=null,e},n.prototype.render=function(){return s.Children.only(this.props.children)},n}(s.Component);return a.propTypes={store:f.storeShape.isRequired,children:p.default.element.isRequired},a.childContextTypes=(e={},e[t]=f.storeShape.isRequired,e[r]=f.subscriptionShape,e),a}t.__esModule=!0,t.createProvider=a;var s=n(1),c=n(4),p=r(c),f=n(351),d=n(213);r(d);t.default=a()},349:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function a(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function s(){}function c(e,t){var n={run:function(r){try{var o=e(t.getState(),r);(o!==n.props||n.error)&&(n.shouldComponentUpdate=!0,n.props=o,n.error=null)}catch(e){n.shouldComponentUpdate=!0,n.error=e}}};return n}function p(e){var t,n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},p=r.getDisplayName,d=void 0===p?function(e){return"ConnectAdvanced("+e+")"}:p,h=r.methodName,b=void 0===h?"connectAdvanced":h,P=r.renderCountProp,S=void 0===P?void 0:P,g=r.shouldHandleStateChanges,E=void 0===g||g,M=r.storeKey,T=void 0===M?"store":M,C=r.withRef,j=void 0!==C&&C,I=a(r,["getDisplayName","methodName","renderCountProp","shouldHandleStateChanges","storeKey","withRef"]),x=T+"Subscription",N=_++,D=(t={},t[T]=w.storeShape,t[x]=w.subscriptionShape,t),R=(n={},n[x]=w.subscriptionShape,n);return function(t){(0,y.default)("function"==typeof t,"You must pass a component to the function returned by connect. Instead received "+JSON.stringify(t));var n=t.displayName||t.name||"Component",r=d(n),a=f({},I,{getDisplayName:d,methodName:b,renderCountProp:S,shouldHandleStateChanges:E,storeKey:T,withRef:j,displayName:r,wrappedComponentName:n,WrappedComponent:t}),p=function(n){function p(e,t){o(this,p);var u=i(this,n.call(this,e,t));return u.version=N,u.state={},u.renderCount=0,u.store=e[T]||t[T],u.propsMode=Boolean(e[T]),u.setWrappedInstance=u.setWrappedInstance.bind(u),(0,y.default)(u.store,'Could not find "'+T+'" in either the context or props of '+('"'+r+'". Either wrap the root component in a <Provider>, ')+('or explicitly pass "'+T+'" as a prop to "'+r+'".')),u.initSelector(),u.initSubscription(),u}return u(p,n),p.prototype.getChildContext=function(){var e,t=this.propsMode?null:this.subscription;return e={},e[x]=t||this.context[x],e},p.prototype.componentDidMount=function(){E&&(this.subscription.trySubscribe(),this.selector.run(this.props),this.selector.shouldComponentUpdate&&this.forceUpdate())},p.prototype.componentWillReceiveProps=function(e){this.selector.run(e)},p.prototype.shouldComponentUpdate=function(){return this.selector.shouldComponentUpdate},p.prototype.componentWillUnmount=function(){this.subscription&&this.subscription.tryUnsubscribe(),this.subscription=null,this.notifyNestedSubs=s,this.store=null,this.selector.run=s,this.selector.shouldComponentUpdate=!1},p.prototype.getWrappedInstance=function(){return(0,y.default)(j,"To access the wrapped instance, you need to specify "+("{ withRef: true } in the options argument of the "+b+"() call.")),this.wrappedInstance},p.prototype.setWrappedInstance=function(e){this.wrappedInstance=e},p.prototype.initSelector=function(){var t=e(this.store.dispatch,a);this.selector=c(t,this.store),this.selector.run(this.props)},p.prototype.initSubscription=function(){if(E){var e=(this.propsMode?this.props:this.context)[x];this.subscription=new m.default(this.store,e,this.onStateChange.bind(this)),this.notifyNestedSubs=this.subscription.notifyNestedSubs.bind(this.subscription)}},p.prototype.onStateChange=function(){this.selector.run(this.props),this.selector.shouldComponentUpdate?(this.componentDidUpdate=this.notifyNestedSubsOnComponentDidUpdate,this.setState(O)):this.notifyNestedSubs()},p.prototype.notifyNestedSubsOnComponentDidUpdate=function(){this.componentDidUpdate=void 0,this.notifyNestedSubs()},p.prototype.isSubscribed=function(){return Boolean(this.subscription)&&this.subscription.isSubscribed()},p.prototype.addExtraProps=function(e){if(!(j||S||this.propsMode&&this.subscription))return e;var t=f({},e);return j&&(t.ref=this.setWrappedInstance),S&&(t[S]=this.renderCount++),this.propsMode&&this.subscription&&(t[x]=this.subscription),t},p.prototype.render=function(){var e=this.selector;if(e.shouldComponentUpdate=!1,e.error)throw e.error;return(0,v.createElement)(t,this.addExtraProps(e.props))},p}(v.Component);return p.WrappedComponent=t,p.displayName=r,p.childContextTypes=R,p.contextTypes=D,p.propTypes=D,(0,l.default)(p,t)}}t.__esModule=!0;var f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.default=p;var d=n(617),l=r(d),h=n(108),y=r(h),v=n(1),b=n(829),m=r(b),w=n(351),_=0,O={}},823:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function i(e,t,n){for(var r=t.length-1;r>=0;r--){var o=t[r](e);if(o)return o}return function(t,r){throw new Error("Invalid value of type "+typeof e+" for "+n+" argument when connecting component "+r.wrappedComponentName+".")}}function u(e,t){return e===t}function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.connectHOC,n=void 0===t?p.default:t,r=e.mapStateToPropsFactories,a=void 0===r?v.default:r,c=e.mapDispatchToPropsFactories,f=void 0===c?h.default:c,l=e.mergePropsFactories,y=void 0===l?m.default:l,b=e.selectorFactory,w=void 0===b?_.default:b;return function(e,t,r){var c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},p=c.pure,l=void 0===p||p,h=c.areStatesEqual,v=void 0===h?u:h,b=c.areOwnPropsEqual,m=void 0===b?d.default:b,_=c.areStatePropsEqual,O=void 0===_?d.default:_,P=c.areMergedPropsEqual,S=void 0===P?d.default:P,g=o(c,["pure","areStatesEqual","areOwnPropsEqual","areStatePropsEqual","areMergedPropsEqual"]),E=i(e,a,"mapStateToProps"),M=i(t,f,"mapDispatchToProps"),T=i(r,y,"mergeProps");return n(w,s({methodName:"connect",getDisplayName:function(e){return"Connect("+e+")"},shouldHandleStateChanges:Boolean(e),initMapStateToProps:E,initMapDispatchToProps:M,initMergeProps:T,pure:l,areStatesEqual:v,areOwnPropsEqual:m,areStatePropsEqual:O,areMergedPropsEqual:S},g))}}t.__esModule=!0;var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.createConnect=a;var c=n(349),p=r(c),f=n(830),d=r(f),l=n(824),h=r(l),y=n(825),v=r(y),b=n(826),m=r(b),w=n(827),_=r(w);t.default=a()},824:function(e,t,n){"use strict";function r(e){return"function"==typeof e?(0,a.wrapMapToPropsFunc)(e,"mapDispatchToProps"):void 0}function o(e){return e?void 0:(0,a.wrapMapToPropsConstant)(function(e){return{dispatch:e}})}function i(e){return e&&"object"==typeof e?(0,a.wrapMapToPropsConstant)(function(t){return(0,u.bindActionCreators)(e,t)}):void 0}t.__esModule=!0,t.whenMapDispatchToPropsIsFunction=r,t.whenMapDispatchToPropsIsMissing=o,t.whenMapDispatchToPropsIsObject=i;var u=n(217),a=n(350);t.default=[r,o,i]},825:function(e,t,n){"use strict";function r(e){return"function"==typeof e?(0,i.wrapMapToPropsFunc)(e,"mapStateToProps"):void 0}function o(e){return e?void 0:(0,i.wrapMapToPropsConstant)(function(){return{}})}t.__esModule=!0,t.whenMapStateToPropsIsFunction=r,t.whenMapStateToPropsIsMissing=o;var i=n(350);t.default=[r,o]},826:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t,n){return s({},n,e,t)}function i(e){return function(t,n){var r=(n.displayName,n.pure),o=n.areMergedPropsEqual,i=!1,u=void 0;return function(t,n,a){var s=e(t,n,a);return i?r&&o(s,u)||(u=s):(i=!0,u=s),u}}}function u(e){return"function"==typeof e?i(e):void 0}function a(e){return e?void 0:function(){return o}}t.__esModule=!0;var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.defaultMergeProps=o,t.wrapMergePropsFunc=i,t.whenMergePropsIsFunction=u,t.whenMergePropsIsOmitted=a;var c=n(352);r(c);t.default=[u,a]},827:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function i(e,t,n,r){return function(o,i){return n(e(o,i),t(r,i),i)}}function u(e,t,n,r,o){function i(o,i){return h=o,y=i,v=e(h,y),b=t(r,y),m=n(v,b,y),l=!0,m}function u(){return v=e(h,y),t.dependsOnOwnProps&&(b=t(r,y)),m=n(v,b,y)}function a(){return e.dependsOnOwnProps&&(v=e(h,y)),t.dependsOnOwnProps&&(b=t(r,y)),m=n(v,b,y)}function s(){var t=e(h,y),r=!d(t,v);return v=t,r&&(m=n(v,b,y)),m}function c(e,t){var n=!f(t,y),r=!p(e,h);return h=e,y=t,n&&r?u():n?a():r?s():m}var p=o.areStatesEqual,f=o.areOwnPropsEqual,d=o.areStatePropsEqual,l=!1,h=void 0,y=void 0,v=void 0,b=void 0,m=void 0;return function(e,t){return l?c(e,t):i(e,t)}}function a(e,t){var n=t.initMapStateToProps,r=t.initMapDispatchToProps,a=t.initMergeProps,s=o(t,["initMapStateToProps","initMapDispatchToProps","initMergeProps"]),c=n(e,s),p=r(e,s),f=a(e,s),d=s.pure?u:i;return d(c,p,f,e,s)}t.__esModule=!0,t.impureFinalPropsSelectorFactory=i,t.pureFinalPropsSelectorFactory=u,t.default=a;var s=n(828);r(s)},828:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t,n){if(!e)throw new Error("Unexpected value for "+t+" in "+n+".");"mapStateToProps"!==t&&"mapDispatchToProps"!==t||e.hasOwnProperty("dependsOnOwnProps")||(0,a.default)("The selector for "+t+" of "+n+" did not specify a value for dependsOnOwnProps.")}function i(e,t,n,r){o(e,"mapStateToProps",r),o(t,"mapDispatchToProps",r),o(n,"mergeProps",r)}t.__esModule=!0,t.default=i;var u=n(213),a=r(u)},350:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){return function(t,n){function r(){return o}var o=e(t,n);return r.dependsOnOwnProps=!1,r}}function i(e){return null!==e.dependsOnOwnProps&&void 0!==e.dependsOnOwnProps?Boolean(e.dependsOnOwnProps):1!==e.length}function u(e,t){return function(t,n){var r=(n.displayName,function(e,t){return r.dependsOnOwnProps?r.mapToProps(e,t):r.mapToProps(e)});return r.dependsOnOwnProps=!0,r.mapToProps=function(t,n){r.mapToProps=e,r.dependsOnOwnProps=i(e);var o=r(t,n);return"function"==typeof o&&(r.mapToProps=o,r.dependsOnOwnProps=i(o),o=r(t,n)),o},r}}t.__esModule=!0,t.wrapMapToPropsConstant=o,t.getDependsOnOwnProps=i,t.wrapMapToPropsFunc=u;var a=n(352);r(a)},212:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.connect=t.connectAdvanced=t.createProvider=t.Provider=void 0;var o=n(822),i=r(o),u=n(349),a=r(u),s=n(823),c=r(s);t.Provider=i.default,t.createProvider=o.createProvider,t.connectAdvanced=a.default,t.connect=c.default},351:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.storeShape=t.subscriptionShape=void 0;var o=n(4),i=r(o);t.subscriptionShape=i.default.shape({trySubscribe:i.default.func.isRequired,tryUnsubscribe:i.default.func.isRequired,notifyNestedSubs:i.default.func.isRequired,isSubscribed:i.default.func.isRequired}),t.storeShape=i.default.shape({subscribe:i.default.func.isRequired,dispatch:i.default.func.isRequired,getState:i.default.func.isRequired})},829:function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(){var e=[],t=[];return{clear:function(){t=o,e=o},notify:function(){for(var n=e=t,r=0;r<n.length;r++)n[r]()},get:function(){return t},subscribe:function(n){var r=!0;return t===e&&(t=e.slice()),t.push(n),function(){r&&e!==o&&(r=!1,t===e&&(t=e.slice()),t.splice(t.indexOf(n),1))}}}}t.__esModule=!0;var o=null,i={notify:function(){}},u=function(){function e(t,r,o){n(this,e),this.store=t,this.parentSub=r,this.onStateChange=o,this.unsubscribe=null,this.listeners=i}return e.prototype.addNestedSub=function(e){return this.trySubscribe(),this.listeners.subscribe(e)},e.prototype.notifyNestedSubs=function(){this.listeners.notify()},e.prototype.isSubscribed=function(){return Boolean(this.unsubscribe)},e.prototype.trySubscribe=function(){this.unsubscribe||(this.unsubscribe=this.parentSub?this.parentSub.addNestedSub(this.onStateChange):this.store.subscribe(this.onStateChange),this.listeners=r())},e.prototype.tryUnsubscribe=function(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=null,this.listeners.clear(),this.listeners=i)},e}();t.default=u},830:function(e,t){"use strict";function n(e,t){return e===t?0!==e||0!==t||1/e===1/t:e!==e&&t!==t}function r(e,t){if(n(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var r=Object.keys(e),i=Object.keys(t);if(r.length!==i.length)return!1;for(var u=0;u<r.length;u++)if(!o.call(t,r[u])||!n(e[r[u]],t[r[u]]))return!1;return!0}t.__esModule=!0,t.default=r;var o=Object.prototype.hasOwnProperty},352:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t,n){(0,u.default)(e)||(0,s.default)(n+"() in "+t+" must return a plain object. Instead received "+e+".")}t.__esModule=!0,t.default=o;var i=n(57),u=r(i),a=n(213),s=r(a)},213:function(e,t){"use strict";function n(e){"undefined"!=typeof console&&"function"==typeof console.error&&console.error(e);try{throw new Error(e)}catch(e){}}t.__esModule=!0,t.default=n},855:function(e,t,n){"use strict";var r=n(217).compose;t.__esModule=!0,t.composeWithDevTools="undefined"!=typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(0!==arguments.length)return"object"==typeof arguments[0]?r:r.apply(null,arguments)},t.devToolsEnhancer="undefined"!=typeof window&&window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__:function(){return function(e){return e}}},856:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return function(n,r,o){var u=e(n,r,o),s=u.dispatch,c=[],p={getState:u.getState,dispatch:function(e){return s(e)}};return c=t.map(function(e){return e(p)}),s=a.default.apply(void 0,c)(u.dispatch),i({},u,{dispatch:s})}}}t.__esModule=!0;var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.default=o;var u=n(359),a=r(u)},857:function(e,t){"use strict";function n(e,t){return function(){return t(e.apply(void 0,arguments))}}function r(e,t){if("function"==typeof e)return n(e,t);if("object"!=typeof e||null===e)throw new Error("bindActionCreators expected an object or a function, instead received "+(null===e?"null":typeof e)+'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');for(var r=Object.keys(e),o={},i=0;i<r.length;i++){var u=r[i],a=e[u];"function"==typeof a&&(o[u]=n(a,t))}return o}t.__esModule=!0,t.default=r},858:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n=t&&t.type,r=n&&'"'+n.toString()+'"'||"an action";return"Given action "+r+', reducer "'+e+'" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'}function i(e){Object.keys(e).forEach(function(t){var n=e[t],r=n(void 0,{type:a.ActionTypes.INIT});if("undefined"==typeof r)throw new Error('Reducer "'+t+"\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");var o="@@redux/PROBE_UNKNOWN_ACTION_"+Math.random().toString(36).substring(7).split("").join(".");if("undefined"==typeof n(void 0,{type:o}))throw new Error('Reducer "'+t+'" returned undefined when probed with a random type. '+("Don't try to handle "+a.ActionTypes.INIT+' or other actions in "redux/*" ')+"namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.")})}function u(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++){var u=t[r];"function"==typeof e[u]&&(n[u]=e[u])}var a=Object.keys(n),s=void 0;try{i(n)}catch(e){s=e}return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments[1];if(s)throw s;for(var r=!1,i={},u=0;u<a.length;u++){var c=a[u],p=n[c],f=e[c],d=p(f,t);if("undefined"==typeof d){var l=o(c,t);throw new Error(l)}i[c]=d,r=r||d!==f}return r?i:e}}t.__esModule=!0,t.default=u;var a=n(360),s=n(57),c=(r(s),n(361));r(c)},359:function(e,t){"use strict";function n(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return 0===t.length?function(e){return e}:1===t.length?t[0]:t.reduce(function(e,t){return function(){return e(t.apply(void 0,arguments))}})}t.__esModule=!0,t.default=n},360:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t,n){function r(){b===v&&(b=v.slice())}function i(){return y}function a(e){if("function"!=typeof e)throw new Error("Expected listener to be a function.");var t=!0;return r(),b.push(e),function(){if(t){t=!1,r();var n=b.indexOf(e);b.splice(n,1)}}}function p(e){if(!(0,u.default)(e))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if("undefined"==typeof e.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(m)throw new Error("Reducers may not dispatch actions.");try{m=!0,y=h(y,e)}finally{m=!1}for(var t=v=b,n=0;n<t.length;n++){var r=t[n];r()}return e}function f(e){if("function"!=typeof e)throw new Error("Expected the nextReducer to be a function.");h=e,p({type:c.INIT})}function d(){var e,t=a;return e={subscribe:function(e){function n(){e.next&&e.next(i())}if("object"!=typeof e)throw new TypeError("Expected the observer to be an object.");n();var r=t(n);return{unsubscribe:r}}},e[s.default]=function(){return this},e}var l;if("function"==typeof t&&"undefined"==typeof n&&(n=t,t=void 0),"undefined"!=typeof n){if("function"!=typeof n)throw new Error("Expected the enhancer to be a function.");return n(o)(e,t)}if("function"!=typeof e)throw new Error("Expected the reducer to be a function.");var h=e,y=t,v=[],b=v,m=!1;return p({type:c.INIT}),l={dispatch:p,subscribe:a,getState:i,replaceReducer:f},l[s.default]=d,l}t.__esModule=!0,t.ActionTypes=void 0,t.default=o;var i=n(57),u=r(i),a=n(952),s=r(a),c=t.ActionTypes={INIT:"@@redux/INIT"}},217:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.compose=t.applyMiddleware=t.bindActionCreators=t.combineReducers=t.createStore=void 0;var o=n(360),i=r(o),u=n(858),a=r(u),s=n(857),c=r(s),p=n(856),f=r(p),d=n(359),l=r(d),h=n(361);r(h);t.createStore=i.default,t.combineReducers=a.default,t.bindActionCreators=c.default,t.applyMiddleware=f.default,t.compose=l.default},361:function(e,t){"use strict";function n(e){"undefined"!=typeof console&&"function"==typeof console.error&&console.error(e);try{throw new Error(e)}catch(e){}}t.__esModule=!0,t.default=n},952:function(e,t,n){e.exports=n(953)},953:function(e,t,n){(function(e,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i,u=n(954),a=o(u);i="undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof e?e:r;var s=(0,a.default)(i);t.default=s}).call(t,function(){return this}(),n(95)(e))},954:function(e,t){"use strict";function n(e){var t,n=e.Symbol;return"function"==typeof n?n.observable?t=n.observable:(t=n("observable"),n.observable=t):t="@@observable",t}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n},459:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),o=n(212),i=n(16),u=n(249);t.HeaderMenu=function(e){var t=e.items,n=e.pathname,o=e.Link,a=e.inverted,s=e.dispatch;return r.createElement(i.Container,null,r.createElement(i.Menu,{size:"large",pointing:!0,secondary:!0,inverted:a},r.createElement(i.Menu.Item,{as:"a",className:"mobile only",icon:"sidebar",onClick:function(){return s&&s(u.toggleSidebar())}}),r.createElement(i.Menu.Item,null,"Housewolf Studios"),t.map(function(e){var t=e.exact?n===e.path:n.startsWith(e.path);return r.createElement(i.Menu.Item,{as:o,className:"mobile hidden",name:e.name,to:e.path,key:e.path,active:t})})))},t.default=o.connect()(t.HeaderMenu)},460:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),o=n(212),i=n(16);t.SidebarMenu=function(e){var t=e.items,n=e.pathname,o=e.Link,u=e.visible,a=function(e){return e.exact?n===e.path:n.startsWith(e.path)},s=t.find(function(e){return a(e)})||{};return r.createElement(i.Sidebar,{as:i.Menu,animation:"slide along",width:"thin",visible:u,icon:"labeled",vertical:!0,inverted:s.inverted},t.map(function(e){var t=a(e);return r.createElement(i.Menu.Item,{as:o,to:e.path,active:t,key:e.path},r.createElement(i.Icon,{name:e.icon}),e.name)}))};var u=function(e){return{visible:e.isSidebarVisible}};t.default=o.connect(u)(t.SidebarMenu)},572:function(e,t){},573:function(e,t){},574:function(e,t){},461:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();Object.defineProperty(t,"__esModule",{value:!0});var a=n(86);n(571);var s=n(1),c=n(212),p=n(16),f=n(459),d=n(460);n(572),n(573),n(574);var l=n(249),h=(new Date).getFullYear();t.menuItems=[{name:"Home",path:"/",exact:!0,icon:"home",inverted:!0},{name:"Games",path:"/games/",exact:!0,icon:"gamepad"},{name:"About",path:"/about/",exact:!0,icon:"info circle"},{name:"Blog",path:"/blog/",exact:!1,icon:"newspaper"}];var y=function(e){function n(){return r(this,n),o(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return i(n,e),u(n,[{key:"render",value:function(){var e=this.props.location.pathname;return s.createElement(c.Provider,{store:l.store},s.createElement(p.Sidebar.Pushable,{as:p.Segment},s.createElement(d.default,{Link:a.default,pathname:e,items:t.menuItems,visible:!1}),s.createElement(p.Sidebar.Pusher,{style:{minHeight:"100vh"}},s.createElement(f.default,{Link:a.default,pathname:e,items:t.menuItems}),s.createElement("div",{style:{paddingBottom:60}},this.props.children()),s.createElement(p.Segment,{inverted:!0,vertical:!0,style:{position:"absolute",bottom:0,width:"100%"}},s.createElement(p.Container,{textAlign:"center"},s.createElement("p",null,"Copyright ",h," Housewolf Studios"))))))}}]),n}(s.PureComponent);t.default=y},249:function(e,t,n){"use strict";var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};Object.defineProperty(t,"__esModule",{value:!0});var o=n(217),i=n(855);t.TOGGLE_SIDEBAR="TOGGLE_SIDEBAR",t.toggleSidebar=function(){return{type:t.TOGGLE_SIDEBAR}},t.reducer=function(e,n){switch(n.type){case t.TOGGLE_SIDEBAR:return r({},e,{isSidebarVisible:!e.isSidebarVisible});default:return e}},t.initialState={isSidebarVisible:!1},t.store=o.createStore(t.reducer,t.initialState,i.devToolsEnhancer({}))}});
//# sourceMappingURL=component---src-layouts-index-tsx-7c82540b2cc73d0a64c1.js.map