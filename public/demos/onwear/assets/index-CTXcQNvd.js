function X_(r,n){for(var i=0;i<n.length;i++){const o=n[i];if(typeof o!="string"&&!Array.isArray(o)){for(const l in o)if(l!=="default"&&!(l in r)){const c=Object.getOwnPropertyDescriptor(o,l);c&&Object.defineProperty(r,l,c.get?c:{enumerable:!0,get:()=>o[l]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))o(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&o(u)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function o(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function V_(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var _p={exports:{}},Zl={};var vx;function F_(){if(vx)return Zl;vx=1;var r=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function i(o,l,c){var u=null;if(c!==void 0&&(u=""+c),l.key!==void 0&&(u=""+l.key),"key"in l){c={};for(var f in l)f!=="key"&&(c[f]=l[f])}else c=l;return l=c.ref,{$$typeof:r,type:o,key:u,ref:l!==void 0?l:null,props:c}}return Zl.Fragment=n,Zl.jsx=i,Zl.jsxs=i,Zl}var Sx;function Q_(){return Sx||(Sx=1,_p.exports=F_()),_p.exports}var E=Q_(),Tp={exports:{}},Kl={},Ep={exports:{}},Cp={};var wx;function Z_(){return wx||(wx=1,(function(r){function n(U,H){var X=U.length;U.push(H);e:for(;0<X;){var ue=X-1>>>1,pe=U[ue];if(0<l(pe,H))U[ue]=H,U[X]=pe,X=ue;else break e}}function i(U){return U.length===0?null:U[0]}function o(U){if(U.length===0)return null;var H=U[0],X=U.pop();if(X!==H){U[0]=X;e:for(var ue=0,pe=U.length,N=pe>>>1;ue<N;){var Y=2*(ue+1)-1,K=U[Y],oe=Y+1,ve=U[oe];if(0>l(K,X))oe<pe&&0>l(ve,K)?(U[ue]=ve,U[oe]=X,ue=oe):(U[ue]=K,U[Y]=X,ue=Y);else if(oe<pe&&0>l(ve,X))U[ue]=ve,U[oe]=X,ue=oe;else break e}}return H}function l(U,H){var X=U.sortIndex-H.sortIndex;return X!==0?X:U.id-H.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var u=Date,f=u.now();r.unstable_now=function(){return u.now()-f}}var h=[],g=[],m=1,x=null,S=3,T=!1,w=!1,b=!1,v=!1,D=typeof setTimeout=="function"?setTimeout:null,j=typeof clearTimeout=="function"?clearTimeout:null,A=typeof setImmediate<"u"?setImmediate:null;function z(U){for(var H=i(g);H!==null;){if(H.callback===null)o(g);else if(H.startTime<=U)o(g),H.sortIndex=H.expirationTime,n(h,H);else break;H=i(g)}}function R(U){if(b=!1,z(U),!w)if(i(h)!==null)w=!0,M||(M=!0,le());else{var H=i(g);H!==null&&we(R,H.startTime-U)}}var M=!1,k=-1,I=5,$=-1;function te(){return v?!0:!(r.unstable_now()-$<I)}function re(){if(v=!1,M){var U=r.unstable_now();$=U;var H=!0;try{e:{w=!1,b&&(b=!1,j(k),k=-1),T=!0;var X=S;try{t:{for(z(U),x=i(h);x!==null&&!(x.expirationTime>U&&te());){var ue=x.callback;if(typeof ue=="function"){x.callback=null,S=x.priorityLevel;var pe=ue(x.expirationTime<=U);if(U=r.unstable_now(),typeof pe=="function"){x.callback=pe,z(U),H=!0;break t}x===i(h)&&o(h),z(U)}else o(h);x=i(h)}if(x!==null)H=!0;else{var N=i(g);N!==null&&we(R,N.startTime-U),H=!1}}break e}finally{x=null,S=X,T=!1}H=void 0}}finally{H?le():M=!1}}}var le;if(typeof A=="function")le=function(){A(re)};else if(typeof MessageChannel<"u"){var ye=new MessageChannel,Se=ye.port2;ye.port1.onmessage=re,le=function(){Se.postMessage(null)}}else le=function(){D(re,0)};function we(U,H){k=D(function(){U(r.unstable_now())},H)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(U){U.callback=null},r.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<U?Math.floor(1e3/U):5},r.unstable_getCurrentPriorityLevel=function(){return S},r.unstable_next=function(U){switch(S){case 1:case 2:case 3:var H=3;break;default:H=S}var X=S;S=H;try{return U()}finally{S=X}},r.unstable_requestPaint=function(){v=!0},r.unstable_runWithPriority=function(U,H){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var X=S;S=U;try{return H()}finally{S=X}},r.unstable_scheduleCallback=function(U,H,X){var ue=r.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?ue+X:ue):X=ue,U){case 1:var pe=-1;break;case 2:pe=250;break;case 5:pe=1073741823;break;case 4:pe=1e4;break;default:pe=5e3}return pe=X+pe,U={id:m++,callback:H,priorityLevel:U,startTime:X,expirationTime:pe,sortIndex:-1},X>ue?(U.sortIndex=X,n(g,U),i(h)===null&&U===i(g)&&(b?(j(k),k=-1):b=!0,we(R,X-ue))):(U.sortIndex=pe,n(h,U),w||T||(w=!0,M||(M=!0,le()))),U},r.unstable_shouldYield=te,r.unstable_wrapCallback=function(U){var H=S;return function(){var X=S;S=H;try{return U.apply(this,arguments)}finally{S=X}}}})(Cp)),Cp}var _x;function K_(){return _x||(_x=1,Ep.exports=Z_()),Ep.exports}var kp={exports:{}},De={};var Tx;function J_(){if(Tx)return De;Tx=1;var r=Symbol.for("react.transitional.element"),n=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),S=Symbol.iterator;function T(N){return N===null||typeof N!="object"?null:(N=S&&N[S]||N["@@iterator"],typeof N=="function"?N:null)}var w={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,v={};function D(N,Y,K){this.props=N,this.context=Y,this.refs=v,this.updater=K||w}D.prototype.isReactComponent={},D.prototype.setState=function(N,Y){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,Y,"setState")},D.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function j(){}j.prototype=D.prototype;function A(N,Y,K){this.props=N,this.context=Y,this.refs=v,this.updater=K||w}var z=A.prototype=new j;z.constructor=A,b(z,D.prototype),z.isPureReactComponent=!0;var R=Array.isArray;function M(){}var k={H:null,A:null,T:null,S:null},I=Object.prototype.hasOwnProperty;function $(N,Y,K){var oe=K.ref;return{$$typeof:r,type:N,key:Y,ref:oe!==void 0?oe:null,props:K}}function te(N,Y){return $(N.type,Y,N.props)}function re(N){return typeof N=="object"&&N!==null&&N.$$typeof===r}function le(N){var Y={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(K){return Y[K]})}var ye=/\/+/g;function Se(N,Y){return typeof N=="object"&&N!==null&&N.key!=null?le(""+N.key):Y.toString(36)}function we(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(M,M):(N.status="pending",N.then(function(Y){N.status==="pending"&&(N.status="fulfilled",N.value=Y)},function(Y){N.status==="pending"&&(N.status="rejected",N.reason=Y)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function U(N,Y,K,oe,ve){var de=typeof N;(de==="undefined"||de==="boolean")&&(N=null);var _e=!1;if(N===null)_e=!0;else switch(de){case"bigint":case"string":case"number":_e=!0;break;case"object":switch(N.$$typeof){case r:case n:_e=!0;break;case m:return _e=N._init,U(_e(N._payload),Y,K,oe,ve)}}if(_e)return ve=ve(N),_e=oe===""?"."+Se(N,0):oe,R(ve)?(K="",_e!=null&&(K=_e.replace(ye,"$&/")+"/"),U(ve,Y,K,"",function(Be){return Be})):ve!=null&&(re(ve)&&(ve=te(ve,K+(ve.key==null||N&&N.key===ve.key?"":(""+ve.key).replace(ye,"$&/")+"/")+_e)),Y.push(ve)),1;_e=0;var be=oe===""?".":oe+":";if(R(N))for(var ke=0;ke<N.length;ke++)oe=N[ke],de=be+Se(oe,ke),_e+=U(oe,Y,K,de,ve);else if(ke=T(N),typeof ke=="function")for(N=ke.call(N),ke=0;!(oe=N.next()).done;)oe=oe.value,de=be+Se(oe,ke++),_e+=U(oe,Y,K,de,ve);else if(de==="object"){if(typeof N.then=="function")return U(we(N),Y,K,oe,ve);throw Y=String(N),Error("Objects are not valid as a React child (found: "+(Y==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":Y)+"). If you meant to render a collection of children, use an array instead.")}return _e}function H(N,Y,K){if(N==null)return N;var oe=[],ve=0;return U(N,oe,"","",function(de){return Y.call(K,de,ve++)}),oe}function X(N){if(N._status===-1){var Y=N._result;Y=Y(),Y.then(function(K){(N._status===0||N._status===-1)&&(N._status=1,N._result=K)},function(K){(N._status===0||N._status===-1)&&(N._status=2,N._result=K)}),N._status===-1&&(N._status=0,N._result=Y)}if(N._status===1)return N._result.default;throw N._result}var ue=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Y=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(Y))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)},pe={map:H,forEach:function(N,Y,K){H(N,function(){Y.apply(this,arguments)},K)},count:function(N){var Y=0;return H(N,function(){Y++}),Y},toArray:function(N){return H(N,function(Y){return Y})||[]},only:function(N){if(!re(N))throw Error("React.Children.only expected to receive a single React element child.");return N}};return De.Activity=x,De.Children=pe,De.Component=D,De.Fragment=i,De.Profiler=l,De.PureComponent=A,De.StrictMode=o,De.Suspense=h,De.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=k,De.__COMPILER_RUNTIME={__proto__:null,c:function(N){return k.H.useMemoCache(N)}},De.cache=function(N){return function(){return N.apply(null,arguments)}},De.cacheSignal=function(){return null},De.cloneElement=function(N,Y,K){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var oe=b({},N.props),ve=N.key;if(Y!=null)for(de in Y.key!==void 0&&(ve=""+Y.key),Y)!I.call(Y,de)||de==="key"||de==="__self"||de==="__source"||de==="ref"&&Y.ref===void 0||(oe[de]=Y[de]);var de=arguments.length-2;if(de===1)oe.children=K;else if(1<de){for(var _e=Array(de),be=0;be<de;be++)_e[be]=arguments[be+2];oe.children=_e}return $(N.type,ve,oe)},De.createContext=function(N){return N={$$typeof:u,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:c,_context:N},N},De.createElement=function(N,Y,K){var oe,ve={},de=null;if(Y!=null)for(oe in Y.key!==void 0&&(de=""+Y.key),Y)I.call(Y,oe)&&oe!=="key"&&oe!=="__self"&&oe!=="__source"&&(ve[oe]=Y[oe]);var _e=arguments.length-2;if(_e===1)ve.children=K;else if(1<_e){for(var be=Array(_e),ke=0;ke<_e;ke++)be[ke]=arguments[ke+2];ve.children=be}if(N&&N.defaultProps)for(oe in _e=N.defaultProps,_e)ve[oe]===void 0&&(ve[oe]=_e[oe]);return $(N,de,ve)},De.createRef=function(){return{current:null}},De.forwardRef=function(N){return{$$typeof:f,render:N}},De.isValidElement=re,De.lazy=function(N){return{$$typeof:m,_payload:{_status:-1,_result:N},_init:X}},De.memo=function(N,Y){return{$$typeof:g,type:N,compare:Y===void 0?null:Y}},De.startTransition=function(N){var Y=k.T,K={};k.T=K;try{var oe=N(),ve=k.S;ve!==null&&ve(K,oe),typeof oe=="object"&&oe!==null&&typeof oe.then=="function"&&oe.then(M,ue)}catch(de){ue(de)}finally{Y!==null&&K.types!==null&&(Y.types=K.types),k.T=Y}},De.unstable_useCacheRefresh=function(){return k.H.useCacheRefresh()},De.use=function(N){return k.H.use(N)},De.useActionState=function(N,Y,K){return k.H.useActionState(N,Y,K)},De.useCallback=function(N,Y){return k.H.useCallback(N,Y)},De.useContext=function(N){return k.H.useContext(N)},De.useDebugValue=function(){},De.useDeferredValue=function(N,Y){return k.H.useDeferredValue(N,Y)},De.useEffect=function(N,Y){return k.H.useEffect(N,Y)},De.useEffectEvent=function(N){return k.H.useEffectEvent(N)},De.useId=function(){return k.H.useId()},De.useImperativeHandle=function(N,Y,K){return k.H.useImperativeHandle(N,Y,K)},De.useInsertionEffect=function(N,Y){return k.H.useInsertionEffect(N,Y)},De.useLayoutEffect=function(N,Y){return k.H.useLayoutEffect(N,Y)},De.useMemo=function(N,Y){return k.H.useMemo(N,Y)},De.useOptimistic=function(N,Y){return k.H.useOptimistic(N,Y)},De.useReducer=function(N,Y,K){return k.H.useReducer(N,Y,K)},De.useRef=function(N){return k.H.useRef(N)},De.useState=function(N){return k.H.useState(N)},De.useSyncExternalStore=function(N,Y,K){return k.H.useSyncExternalStore(N,Y,K)},De.useTransition=function(){return k.H.useTransition()},De.version="19.2.5",De}var Ex;function Bh(){return Ex||(Ex=1,kp.exports=J_()),kp.exports}var Op={exports:{}},dn={};var Cx;function W_(){if(Cx)return dn;Cx=1;var r=Bh();function n(h){var g="https://react.dev/errors/"+h;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var m=2;m<arguments.length;m++)g+="&args[]="+encodeURIComponent(arguments[m])}return"Minified React error #"+h+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var o={d:{f:i,r:function(){throw Error(n(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(h,g,m){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:""+x,children:h,containerInfo:g,implementation:m}}var u=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(h,g){if(h==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return dn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,dn.createPortal=function(h,g){var m=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(n(299));return c(h,g,null,m)},dn.flushSync=function(h){var g=u.T,m=o.p;try{if(u.T=null,o.p=2,h)return h()}finally{u.T=g,o.p=m,o.d.f()}},dn.preconnect=function(h,g){typeof h=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,o.d.C(h,g))},dn.prefetchDNS=function(h){typeof h=="string"&&o.d.D(h)},dn.preinit=function(h,g){if(typeof h=="string"&&g&&typeof g.as=="string"){var m=g.as,x=f(m,g.crossOrigin),S=typeof g.integrity=="string"?g.integrity:void 0,T=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;m==="style"?o.d.S(h,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:x,integrity:S,fetchPriority:T}):m==="script"&&o.d.X(h,{crossOrigin:x,integrity:S,fetchPriority:T,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},dn.preinitModule=function(h,g){if(typeof h=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var m=f(g.as,g.crossOrigin);o.d.M(h,{crossOrigin:m,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&o.d.M(h)},dn.preload=function(h,g){if(typeof h=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var m=g.as,x=f(m,g.crossOrigin);o.d.L(h,m,{crossOrigin:x,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},dn.preloadModule=function(h,g){if(typeof h=="string")if(g){var m=f(g.as,g.crossOrigin);o.d.m(h,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:m,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else o.d.m(h)},dn.requestFormReset=function(h){o.d.r(h)},dn.unstable_batchedUpdates=function(h,g){return h(g)},dn.useFormState=function(h,g,m){return u.H.useFormState(h,g,m)},dn.useFormStatus=function(){return u.H.useHostTransitionStatus()},dn.version="19.2.5",dn}var kx;function rv(){if(kx)return Op.exports;kx=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(n){console.error(n)}}return r(),Op.exports=W_(),Op.exports}var Ox;function e5(){if(Ox)return Kl;Ox=1;var r=K_(),n=Bh(),i=rv();function o(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function u(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function f(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function h(e){if(c(e)!==e)throw Error(o(188))}function g(e){var t=e.alternate;if(!t){if(t=c(e),t===null)throw Error(o(188));return t!==e?null:e}for(var a=e,s=t;;){var d=a.return;if(d===null)break;var p=d.alternate;if(p===null){if(s=d.return,s!==null){a=s;continue}break}if(d.child===p.child){for(p=d.child;p;){if(p===a)return h(d),e;if(p===s)return h(d),t;p=p.sibling}throw Error(o(188))}if(a.return!==s.return)a=d,s=p;else{for(var y=!1,O=d.child;O;){if(O===a){y=!0,a=d,s=p;break}if(O===s){y=!0,s=d,a=p;break}O=O.sibling}if(!y){for(O=p.child;O;){if(O===a){y=!0,a=p,s=d;break}if(O===s){y=!0,s=p,a=d;break}O=O.sibling}if(!y)throw Error(o(189))}}if(a.alternate!==s)throw Error(o(190))}if(a.tag!==3)throw Error(o(188));return a.stateNode.current===a?e:t}function m(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=m(e),t!==null)return t;e=e.sibling}return null}var x=Object.assign,S=Symbol.for("react.element"),T=Symbol.for("react.transitional.element"),w=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),v=Symbol.for("react.strict_mode"),D=Symbol.for("react.profiler"),j=Symbol.for("react.consumer"),A=Symbol.for("react.context"),z=Symbol.for("react.forward_ref"),R=Symbol.for("react.suspense"),M=Symbol.for("react.suspense_list"),k=Symbol.for("react.memo"),I=Symbol.for("react.lazy"),$=Symbol.for("react.activity"),te=Symbol.for("react.memo_cache_sentinel"),re=Symbol.iterator;function le(e){return e===null||typeof e!="object"?null:(e=re&&e[re]||e["@@iterator"],typeof e=="function"?e:null)}var ye=Symbol.for("react.client.reference");function Se(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ye?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case b:return"Fragment";case D:return"Profiler";case v:return"StrictMode";case R:return"Suspense";case M:return"SuspenseList";case $:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case w:return"Portal";case A:return e.displayName||"Context";case j:return(e._context.displayName||"Context")+".Consumer";case z:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case k:return t=e.displayName||null,t!==null?t:Se(e.type)||"Memo";case I:t=e._payload,e=e._init;try{return Se(e(t))}catch{}}return null}var we=Array.isArray,U=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,X={pending:!1,data:null,method:null,action:null},ue=[],pe=-1;function N(e){return{current:e}}function Y(e){0>pe||(e.current=ue[pe],ue[pe]=null,pe--)}function K(e,t){pe++,ue[pe]=e.current,e.current=t}var oe=N(null),ve=N(null),de=N(null),_e=N(null);function be(e,t){switch(K(de,t),K(ve,e),K(oe,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?q1(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=q1(t),e=Y1(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Y(oe),K(oe,e)}function ke(){Y(oe),Y(ve),Y(de)}function Be(e){e.memoizedState!==null&&K(_e,e);var t=oe.current,a=Y1(t,e.type);t!==a&&(K(ve,e),K(oe,a))}function ze(e){ve.current===e&&(Y(oe),Y(ve)),_e.current===e&&(Y(_e),Xl._currentValue=X)}var Ue,at;function ct(e){if(Ue===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);Ue=t&&t[1]||"",at=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ue+e+at}var ut=!1;function ht(e,t){if(!e||ut)return"";ut=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(t){var se=function(){throw Error()};if(Object.defineProperty(se.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(se,[])}catch(W){var Z=W}Reflect.construct(e,[],se)}else{try{se.call()}catch(W){Z=W}e.call(se.prototype)}}else{try{throw Error()}catch(W){Z=W}(se=e())&&typeof se.catch=="function"&&se.catch(function(){})}}catch(W){if(W&&Z&&typeof W.stack=="string")return[W.stack,Z.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var d=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");d&&d.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var p=s.DetermineComponentFrameRoot(),y=p[0],O=p[1];if(y&&O){var B=y.split(`
`),F=O.split(`
`);for(d=s=0;s<B.length&&!B[s].includes("DetermineComponentFrameRoot");)s++;for(;d<F.length&&!F[d].includes("DetermineComponentFrameRoot");)d++;if(s===B.length||d===F.length)for(s=B.length-1,d=F.length-1;1<=s&&0<=d&&B[s]!==F[d];)d--;for(;1<=s&&0<=d;s--,d--)if(B[s]!==F[d]){if(s!==1||d!==1)do if(s--,d--,0>d||B[s]!==F[d]){var ae=`
`+B[s].replace(" at new "," at ");return e.displayName&&ae.includes("<anonymous>")&&(ae=ae.replace("<anonymous>",e.displayName)),ae}while(1<=s&&0<=d);break}}}finally{ut=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?ct(a):""}function ne(e,t){switch(e.tag){case 26:case 27:case 5:return ct(e.type);case 16:return ct("Lazy");case 13:return e.child!==t&&t!==null?ct("Suspense Fallback"):ct("Suspense");case 19:return ct("SuspenseList");case 0:case 15:return ht(e.type,!1);case 11:return ht(e.type.render,!1);case 1:return ht(e.type,!0);case 31:return ct("Activity");default:return""}}function Tt(e){try{var t="",a=null;do t+=ne(e,a),a=e,e=e.return;while(e);return t}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var At=Object.prototype.hasOwnProperty,gt=r.unstable_scheduleCallback,mt=r.unstable_cancelCallback,tt=r.unstable_shouldYield,Qt=r.unstable_requestPaint,Fe=r.unstable_now,ar=r.unstable_getCurrentPriorityLevel,wn=r.unstable_ImmediatePriority,xt=r.unstable_UserBlockingPriority,sn=r.unstable_NormalPriority,Un=r.unstable_LowPriority,ia=r.unstable_IdlePriority,Cr=r.log,In=r.unstable_setDisableYieldValue,kr=null,Et=null;function xn(e){if(typeof Cr=="function"&&In(e),Et&&typeof Et.setStrictMode=="function")try{Et.setStrictMode(kr,e)}catch{}}var Bt=Math.clz32?Math.clz32:$r,oa=Math.log,la=Math.LN2;function $r(e){return e>>>=0,e===0?32:31-(oa(e)/la|0)|0}var Or=256,Rr=262144,Ar=4194304;function cn(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Lr(e,t,a){var s=e.pendingLanes;if(s===0)return 0;var d=0,p=e.suspendedLanes,y=e.pingedLanes;e=e.warmLanes;var O=s&134217727;return O!==0?(s=O&~p,s!==0?d=cn(s):(y&=O,y!==0?d=cn(y):a||(a=O&~e,a!==0&&(d=cn(a))))):(O=s&~p,O!==0?d=cn(O):y!==0?d=cn(y):a||(a=s&~e,a!==0&&(d=cn(a)))),d===0?0:t!==0&&t!==d&&(t&p)===0&&(p=d&-d,a=t&-t,p>=a||p===32&&(a&4194048)!==0)?t:d}function ir(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Na(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function fe(){var e=Ar;return Ar<<=1,(Ar&62914560)===0&&(Ar=4194304),e}function ge(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function me(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function xe(e,t,a,s,d,p){var y=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var O=e.entanglements,B=e.expirationTimes,F=e.hiddenUpdates;for(a=y&~a;0<a;){var ae=31-Bt(a),se=1<<ae;O[ae]=0,B[ae]=-1;var Z=F[ae];if(Z!==null)for(F[ae]=null,ae=0;ae<Z.length;ae++){var W=Z[ae];W!==null&&(W.lane&=-536870913)}a&=~se}s!==0&&He(e,s,0),p!==0&&d===0&&e.tag!==0&&(e.suspendedLanes|=p&~(y&~t))}function He(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var s=31-Bt(t);e.entangledLanes|=t,e.entanglements[s]=e.entanglements[s]|1073741824|a&261930}function Q(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var s=31-Bt(a),d=1<<s;d&t|e[s]&t&&(e[s]|=t),a&=~d}}function ce(e,t){var a=t&-t;return a=(a&42)!==0?1:he(a),(a&(e.suspendedLanes|t))!==0?0:a}function he(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ee(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Me(){var e=H.p;return e!==0?e:(e=window.event,e===void 0?32:px(e.type))}function Ae(e,t){var a=H.p;try{return H.p=e,t()}finally{H.p=a}}var it=Math.random().toString(36).slice(2),Ie="__reactFiber$"+it,qe="__reactProps$"+it,un="__reactContainer$"+it,Xt="__reactEvents$"+it,NS="__reactListeners$"+it,jS="__reactHandles$"+it,A0="__reactResources$"+it,ll="__reactMarker$"+it;function hd(e){delete e[Ie],delete e[qe],delete e[Xt],delete e[NS],delete e[jS]}function Ki(e){var t=e[Ie];if(t)return t;for(var a=e.parentNode;a;){if(t=a[un]||a[Ie]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=K1(e);e!==null;){if(a=e[Ie])return a;e=K1(e)}return t}e=a,a=e.parentNode}return null}function Ji(e){if(e=e[Ie]||e[un]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function sl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(o(33))}function Wi(e){var t=e[A0];return t||(t=e[A0]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Zt(e){e[ll]=!0}var L0=new Set,z0={};function yi(e,t){eo(e,t),eo(e+"Capture",t)}function eo(e,t){for(z0[e]=t,e=0;e<t.length;e++)L0.add(t[e])}var US=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),D0={},M0={};function IS(e){return At.call(M0,e)?!0:At.call(D0,e)?!1:US.test(e)?M0[e]=!0:(D0[e]=!0,!1)}function qs(e,t,a){if(IS(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var s=t.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Ys(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function sa(e,t,a,s){if(s===null)e.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+s)}}function or(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function N0(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function BS(e,t,a){var s=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var d=s.get,p=s.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return d.call(this)},set:function(y){a=""+y,p.call(this,y)}}),Object.defineProperty(e,t,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(y){a=""+y},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function gd(e){if(!e._valueTracker){var t=N0(e)?"checked":"value";e._valueTracker=BS(e,t,""+e[t])}}function j0(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),s="";return e&&(s=N0(e)?e.checked?"true":"false":e.value),e=s,e!==a?(t.setValue(e),!0):!1}function Gs(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var HS=/[\n"\\]/g;function lr(e){return e.replace(HS,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function md(e,t,a,s,d,p,y,O){e.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?e.type=y:e.removeAttribute("type"),t!=null?y==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+or(t)):e.value!==""+or(t)&&(e.value=""+or(t)):y!=="submit"&&y!=="reset"||e.removeAttribute("value"),t!=null?xd(e,y,or(t)):a!=null?xd(e,y,or(a)):s!=null&&e.removeAttribute("value"),d==null&&p!=null&&(e.defaultChecked=!!p),d!=null&&(e.checked=d&&typeof d!="function"&&typeof d!="symbol"),O!=null&&typeof O!="function"&&typeof O!="symbol"&&typeof O!="boolean"?e.name=""+or(O):e.removeAttribute("name")}function U0(e,t,a,s,d,p,y,O){if(p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(e.type=p),t!=null||a!=null){if(!(p!=="submit"&&p!=="reset"||t!=null)){gd(e);return}a=a!=null?""+or(a):"",t=t!=null?""+or(t):a,O||t===e.value||(e.value=t),e.defaultValue=t}s=s??d,s=typeof s!="function"&&typeof s!="symbol"&&!!s,e.checked=O?e.checked:!!s,e.defaultChecked=!!s,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(e.name=y),gd(e)}function xd(e,t,a){t==="number"&&Gs(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function to(e,t,a,s){if(e=e.options,t){t={};for(var d=0;d<a.length;d++)t["$"+a[d]]=!0;for(a=0;a<e.length;a++)d=t.hasOwnProperty("$"+e[a].value),e[a].selected!==d&&(e[a].selected=d),d&&s&&(e[a].defaultSelected=!0)}else{for(a=""+or(a),t=null,d=0;d<e.length;d++){if(e[d].value===a){e[d].selected=!0,s&&(e[d].defaultSelected=!0);return}t!==null||e[d].disabled||(t=e[d])}t!==null&&(t.selected=!0)}}function I0(e,t,a){if(t!=null&&(t=""+or(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+or(a):""}function B0(e,t,a,s){if(t==null){if(s!=null){if(a!=null)throw Error(o(92));if(we(s)){if(1<s.length)throw Error(o(93));s=s[0]}a=s}a==null&&(a=""),t=a}a=or(t),e.defaultValue=a,s=e.textContent,s===a&&s!==""&&s!==null&&(e.value=s),gd(e)}function no(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var $S=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function H0(e,t,a){var s=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":s?e.setProperty(t,a):typeof a!="number"||a===0||$S.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function $0(e,t,a){if(t!=null&&typeof t!="object")throw Error(o(62));if(e=e.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||t!=null&&t.hasOwnProperty(s)||(s.indexOf("--")===0?e.setProperty(s,""):s==="float"?e.cssFloat="":e[s]="");for(var d in t)s=t[d],t.hasOwnProperty(d)&&a[d]!==s&&H0(e,d,s)}else for(var p in t)t.hasOwnProperty(p)&&H0(e,p,t[p])}function yd(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var PS=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),qS=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Xs(e){return qS.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ca(){}var bd=null;function vd(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ro=null,ao=null;function P0(e){var t=Ji(e);if(t&&(e=t.stateNode)){var a=e[qe]||null;e:switch(e=t.stateNode,t.type){case"input":if(md(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+lr(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var s=a[t];if(s!==e&&s.form===e.form){var d=s[qe]||null;if(!d)throw Error(o(90));md(s,d.value,d.defaultValue,d.defaultValue,d.checked,d.defaultChecked,d.type,d.name)}}for(t=0;t<a.length;t++)s=a[t],s.form===e.form&&j0(s)}break e;case"textarea":I0(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&to(e,!!a.multiple,t,!1)}}}var Sd=!1;function q0(e,t,a){if(Sd)return e(t,a);Sd=!0;try{var s=e(t);return s}finally{if(Sd=!1,(ro!==null||ao!==null)&&(Dc(),ro&&(t=ro,e=ao,ao=ro=null,P0(t),e)))for(t=0;t<e.length;t++)P0(e[t])}}function cl(e,t){var a=e.stateNode;if(a===null)return null;var s=a[qe]||null;if(s===null)return null;a=s[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(o(231,t,typeof a));return a}var ua=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),wd=!1;if(ua)try{var ul={};Object.defineProperty(ul,"passive",{get:function(){wd=!0}}),window.addEventListener("test",ul,ul),window.removeEventListener("test",ul,ul)}catch{wd=!1}var ja=null,_d=null,Vs=null;function Y0(){if(Vs)return Vs;var e,t=_d,a=t.length,s,d="value"in ja?ja.value:ja.textContent,p=d.length;for(e=0;e<a&&t[e]===d[e];e++);var y=a-e;for(s=1;s<=y&&t[a-s]===d[p-s];s++);return Vs=d.slice(e,1<s?1-s:void 0)}function Fs(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Qs(){return!0}function G0(){return!1}function _n(e){function t(a,s,d,p,y){this._reactName=a,this._targetInst=d,this.type=s,this.nativeEvent=p,this.target=y,this.currentTarget=null;for(var O in e)e.hasOwnProperty(O)&&(a=e[O],this[O]=a?a(p):p[O]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?Qs:G0,this.isPropagationStopped=G0,this}return x(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Qs)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Qs)},persist:function(){},isPersistent:Qs}),t}var bi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zs=_n(bi),dl=x({},bi,{view:0,detail:0}),YS=_n(dl),Td,Ed,fl,Ks=x({},dl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:kd,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==fl&&(fl&&e.type==="mousemove"?(Td=e.screenX-fl.screenX,Ed=e.screenY-fl.screenY):Ed=Td=0,fl=e),Td)},movementY:function(e){return"movementY"in e?e.movementY:Ed}}),X0=_n(Ks),GS=x({},Ks,{dataTransfer:0}),XS=_n(GS),VS=x({},dl,{relatedTarget:0}),Cd=_n(VS),FS=x({},bi,{animationName:0,elapsedTime:0,pseudoElement:0}),QS=_n(FS),ZS=x({},bi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),KS=_n(ZS),JS=x({},bi,{data:0}),V0=_n(JS),WS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ew={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},tw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function nw(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=tw[e])?!!t[e]:!1}function kd(){return nw}var rw=x({},dl,{key:function(e){if(e.key){var t=WS[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Fs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ew[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:kd,charCode:function(e){return e.type==="keypress"?Fs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Fs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),aw=_n(rw),iw=x({},Ks,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),F0=_n(iw),ow=x({},dl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:kd}),lw=_n(ow),sw=x({},bi,{propertyName:0,elapsedTime:0,pseudoElement:0}),cw=_n(sw),uw=x({},Ks,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),dw=_n(uw),fw=x({},bi,{newState:0,oldState:0}),pw=_n(fw),hw=[9,13,27,32],Od=ua&&"CompositionEvent"in window,pl=null;ua&&"documentMode"in document&&(pl=document.documentMode);var gw=ua&&"TextEvent"in window&&!pl,Q0=ua&&(!Od||pl&&8<pl&&11>=pl),Z0=" ",K0=!1;function J0(e,t){switch(e){case"keyup":return hw.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function W0(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var io=!1;function mw(e,t){switch(e){case"compositionend":return W0(t);case"keypress":return t.which!==32?null:(K0=!0,Z0);case"textInput":return e=t.data,e===Z0&&K0?null:e;default:return null}}function xw(e,t){if(io)return e==="compositionend"||!Od&&J0(e,t)?(e=Y0(),Vs=_d=ja=null,io=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Q0&&t.locale!=="ko"?null:t.data;default:return null}}var yw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function eg(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!yw[e.type]:t==="textarea"}function tg(e,t,a,s){ro?ao?ao.push(s):ao=[s]:ro=s,t=Hc(t,"onChange"),0<t.length&&(a=new Zs("onChange","change",null,a,s),e.push({event:a,listeners:t}))}var hl=null,gl=null;function bw(e){U1(e,0)}function Js(e){var t=sl(e);if(j0(t))return e}function ng(e,t){if(e==="change")return t}var rg=!1;if(ua){var Rd;if(ua){var Ad="oninput"in document;if(!Ad){var ag=document.createElement("div");ag.setAttribute("oninput","return;"),Ad=typeof ag.oninput=="function"}Rd=Ad}else Rd=!1;rg=Rd&&(!document.documentMode||9<document.documentMode)}function ig(){hl&&(hl.detachEvent("onpropertychange",og),gl=hl=null)}function og(e){if(e.propertyName==="value"&&Js(gl)){var t=[];tg(t,gl,e,vd(e)),q0(bw,t)}}function vw(e,t,a){e==="focusin"?(ig(),hl=t,gl=a,hl.attachEvent("onpropertychange",og)):e==="focusout"&&ig()}function Sw(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Js(gl)}function ww(e,t){if(e==="click")return Js(t)}function _w(e,t){if(e==="input"||e==="change")return Js(t)}function Tw(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Bn=typeof Object.is=="function"?Object.is:Tw;function ml(e,t){if(Bn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),s=Object.keys(t);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var d=a[s];if(!At.call(t,d)||!Bn(e[d],t[d]))return!1}return!0}function lg(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function sg(e,t){var a=lg(e);e=0;for(var s;a;){if(a.nodeType===3){if(s=e+a.textContent.length,e<=t&&s>=t)return{node:a,offset:t-e};e=s}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=lg(a)}}function cg(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?cg(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ug(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Gs(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Gs(e.document)}return t}function Ld(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Ew=ua&&"documentMode"in document&&11>=document.documentMode,oo=null,zd=null,xl=null,Dd=!1;function dg(e,t,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Dd||oo==null||oo!==Gs(s)||(s=oo,"selectionStart"in s&&Ld(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),xl&&ml(xl,s)||(xl=s,s=Hc(zd,"onSelect"),0<s.length&&(t=new Zs("onSelect","select",null,t,a),e.push({event:t,listeners:s}),t.target=oo)))}function vi(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var lo={animationend:vi("Animation","AnimationEnd"),animationiteration:vi("Animation","AnimationIteration"),animationstart:vi("Animation","AnimationStart"),transitionrun:vi("Transition","TransitionRun"),transitionstart:vi("Transition","TransitionStart"),transitioncancel:vi("Transition","TransitionCancel"),transitionend:vi("Transition","TransitionEnd")},Md={},fg={};ua&&(fg=document.createElement("div").style,"AnimationEvent"in window||(delete lo.animationend.animation,delete lo.animationiteration.animation,delete lo.animationstart.animation),"TransitionEvent"in window||delete lo.transitionend.transition);function Si(e){if(Md[e])return Md[e];if(!lo[e])return e;var t=lo[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in fg)return Md[e]=t[a];return e}var pg=Si("animationend"),hg=Si("animationiteration"),gg=Si("animationstart"),Cw=Si("transitionrun"),kw=Si("transitionstart"),Ow=Si("transitioncancel"),mg=Si("transitionend"),xg=new Map,Nd="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Nd.push("scrollEnd");function zr(e,t){xg.set(e,t),yi(t,[e])}var Ws=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},sr=[],so=0,jd=0;function ec(){for(var e=so,t=jd=so=0;t<e;){var a=sr[t];sr[t++]=null;var s=sr[t];sr[t++]=null;var d=sr[t];sr[t++]=null;var p=sr[t];if(sr[t++]=null,s!==null&&d!==null){var y=s.pending;y===null?d.next=d:(d.next=y.next,y.next=d),s.pending=d}p!==0&&yg(a,d,p)}}function tc(e,t,a,s){sr[so++]=e,sr[so++]=t,sr[so++]=a,sr[so++]=s,jd|=s,e.lanes|=s,e=e.alternate,e!==null&&(e.lanes|=s)}function Ud(e,t,a,s){return tc(e,t,a,s),nc(e)}function wi(e,t){return tc(e,null,null,t),nc(e)}function yg(e,t,a){e.lanes|=a;var s=e.alternate;s!==null&&(s.lanes|=a);for(var d=!1,p=e.return;p!==null;)p.childLanes|=a,s=p.alternate,s!==null&&(s.childLanes|=a),p.tag===22&&(e=p.stateNode,e===null||e._visibility&1||(d=!0)),e=p,p=p.return;return e.tag===3?(p=e.stateNode,d&&t!==null&&(d=31-Bt(a),e=p.hiddenUpdates,s=e[d],s===null?e[d]=[t]:s.push(t),t.lane=a|536870912),p):null}function nc(e){if(50<Bl)throw Bl=0,Vf=null,Error(o(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var co={};function Rw(e,t,a,s){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Hn(e,t,a,s){return new Rw(e,t,a,s)}function Id(e){return e=e.prototype,!(!e||!e.isReactComponent)}function da(e,t){var a=e.alternate;return a===null?(a=Hn(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function bg(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function rc(e,t,a,s,d,p){var y=0;if(s=e,typeof e=="function")Id(e)&&(y=1);else if(typeof e=="string")y=M_(e,a,oe.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case $:return e=Hn(31,a,t,d),e.elementType=$,e.lanes=p,e;case b:return _i(a.children,d,p,t);case v:y=8,d|=24;break;case D:return e=Hn(12,a,t,d|2),e.elementType=D,e.lanes=p,e;case R:return e=Hn(13,a,t,d),e.elementType=R,e.lanes=p,e;case M:return e=Hn(19,a,t,d),e.elementType=M,e.lanes=p,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case A:y=10;break e;case j:y=9;break e;case z:y=11;break e;case k:y=14;break e;case I:y=16,s=null;break e}y=29,a=Error(o(130,e===null?"null":typeof e,"")),s=null}return t=Hn(y,a,t,d),t.elementType=e,t.type=s,t.lanes=p,t}function _i(e,t,a,s){return e=Hn(7,e,s,t),e.lanes=a,e}function Bd(e,t,a){return e=Hn(6,e,null,t),e.lanes=a,e}function vg(e){var t=Hn(18,null,null,0);return t.stateNode=e,t}function Hd(e,t,a){return t=Hn(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Sg=new WeakMap;function cr(e,t){if(typeof e=="object"&&e!==null){var a=Sg.get(e);return a!==void 0?a:(t={value:e,source:t,stack:Tt(t)},Sg.set(e,t),t)}return{value:e,source:t,stack:Tt(t)}}var uo=[],fo=0,ac=null,yl=0,ur=[],dr=0,Ua=null,Pr=1,qr="";function fa(e,t){uo[fo++]=yl,uo[fo++]=ac,ac=e,yl=t}function wg(e,t,a){ur[dr++]=Pr,ur[dr++]=qr,ur[dr++]=Ua,Ua=e;var s=Pr;e=qr;var d=32-Bt(s)-1;s&=~(1<<d),a+=1;var p=32-Bt(t)+d;if(30<p){var y=d-d%5;p=(s&(1<<y)-1).toString(32),s>>=y,d-=y,Pr=1<<32-Bt(t)+d|a<<d|s,qr=p+e}else Pr=1<<p|a<<d|s,qr=e}function $d(e){e.return!==null&&(fa(e,1),wg(e,1,0))}function Pd(e){for(;e===ac;)ac=uo[--fo],uo[fo]=null,yl=uo[--fo],uo[fo]=null;for(;e===Ua;)Ua=ur[--dr],ur[dr]=null,qr=ur[--dr],ur[dr]=null,Pr=ur[--dr],ur[dr]=null}function _g(e,t){ur[dr++]=Pr,ur[dr++]=qr,ur[dr++]=Ua,Pr=t.id,qr=t.overflow,Ua=e}var Wt=null,yt=null,Xe=!1,Ia=null,fr=!1,qd=Error(o(519));function Ba(e){var t=Error(o(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw bl(cr(t,e)),qd}function Tg(e){var t=e.stateNode,a=e.type,s=e.memoizedProps;switch(t[Ie]=e,t[qe]=s,a){case"dialog":Pe("cancel",t),Pe("close",t);break;case"iframe":case"object":case"embed":Pe("load",t);break;case"video":case"audio":for(a=0;a<$l.length;a++)Pe($l[a],t);break;case"source":Pe("error",t);break;case"img":case"image":case"link":Pe("error",t),Pe("load",t);break;case"details":Pe("toggle",t);break;case"input":Pe("invalid",t),U0(t,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":Pe("invalid",t);break;case"textarea":Pe("invalid",t),B0(t,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||s.suppressHydrationWarning===!0||$1(t.textContent,a)?(s.popover!=null&&(Pe("beforetoggle",t),Pe("toggle",t)),s.onScroll!=null&&Pe("scroll",t),s.onScrollEnd!=null&&Pe("scrollend",t),s.onClick!=null&&(t.onclick=ca),t=!0):t=!1,t||Ba(e,!0)}function Eg(e){for(Wt=e.return;Wt;)switch(Wt.tag){case 5:case 31:case 13:fr=!1;return;case 27:case 3:fr=!0;return;default:Wt=Wt.return}}function po(e){if(e!==Wt)return!1;if(!Xe)return Eg(e),Xe=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||sp(e.type,e.memoizedProps)),a=!a),a&&yt&&Ba(e),Eg(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));yt=Z1(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));yt=Z1(e)}else t===27?(t=yt,Wa(e.type)?(e=pp,pp=null,yt=e):yt=t):yt=Wt?hr(e.stateNode.nextSibling):null;return!0}function Ti(){yt=Wt=null,Xe=!1}function Yd(){var e=Ia;return e!==null&&(kn===null?kn=e:kn.push.apply(kn,e),Ia=null),e}function bl(e){Ia===null?Ia=[e]:Ia.push(e)}var Gd=N(null),Ei=null,pa=null;function Ha(e,t,a){K(Gd,t._currentValue),t._currentValue=a}function ha(e){e._currentValue=Gd.current,Y(Gd)}function Xd(e,t,a){for(;e!==null;){var s=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,s!==null&&(s.childLanes|=t)):s!==null&&(s.childLanes&t)!==t&&(s.childLanes|=t),e===a)break;e=e.return}}function Vd(e,t,a,s){var d=e.child;for(d!==null&&(d.return=e);d!==null;){var p=d.dependencies;if(p!==null){var y=d.child;p=p.firstContext;e:for(;p!==null;){var O=p;p=d;for(var B=0;B<t.length;B++)if(O.context===t[B]){p.lanes|=a,O=p.alternate,O!==null&&(O.lanes|=a),Xd(p.return,a,e),s||(y=null);break e}p=O.next}}else if(d.tag===18){if(y=d.return,y===null)throw Error(o(341));y.lanes|=a,p=y.alternate,p!==null&&(p.lanes|=a),Xd(y,a,e),y=null}else y=d.child;if(y!==null)y.return=d;else for(y=d;y!==null;){if(y===e){y=null;break}if(d=y.sibling,d!==null){d.return=y.return,y=d;break}y=y.return}d=y}}function ho(e,t,a,s){e=null;for(var d=t,p=!1;d!==null;){if(!p){if((d.flags&524288)!==0)p=!0;else if((d.flags&262144)!==0)break}if(d.tag===10){var y=d.alternate;if(y===null)throw Error(o(387));if(y=y.memoizedProps,y!==null){var O=d.type;Bn(d.pendingProps.value,y.value)||(e!==null?e.push(O):e=[O])}}else if(d===_e.current){if(y=d.alternate,y===null)throw Error(o(387));y.memoizedState.memoizedState!==d.memoizedState.memoizedState&&(e!==null?e.push(Xl):e=[Xl])}d=d.return}e!==null&&Vd(t,e,a,s),t.flags|=262144}function ic(e){for(e=e.firstContext;e!==null;){if(!Bn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ci(e){Ei=e,pa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function en(e){return Cg(Ei,e)}function oc(e,t){return Ei===null&&Ci(e),Cg(e,t)}function Cg(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},pa===null){if(e===null)throw Error(o(308));pa=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else pa=pa.next=t;return a}var Aw=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,s){e.push(s)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},Lw=r.unstable_scheduleCallback,zw=r.unstable_NormalPriority,Ht={$$typeof:A,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Fd(){return{controller:new Aw,data:new Map,refCount:0}}function vl(e){e.refCount--,e.refCount===0&&Lw(zw,function(){e.controller.abort()})}var Sl=null,Qd=0,go=0,mo=null;function Dw(e,t){if(Sl===null){var a=Sl=[];Qd=0,go=Wf(),mo={status:"pending",value:void 0,then:function(s){a.push(s)}}}return Qd++,t.then(kg,kg),t}function kg(){if(--Qd===0&&Sl!==null){mo!==null&&(mo.status="fulfilled");var e=Sl;Sl=null,go=0,mo=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Mw(e,t){var a=[],s={status:"pending",value:null,reason:null,then:function(d){a.push(d)}};return e.then(function(){s.status="fulfilled",s.value=t;for(var d=0;d<a.length;d++)(0,a[d])(t)},function(d){for(s.status="rejected",s.reason=d,d=0;d<a.length;d++)(0,a[d])(void 0)}),s}var Og=U.S;U.S=function(e,t){d1=Fe(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Dw(e,t),Og!==null&&Og(e,t)};var ki=N(null);function Zd(){var e=ki.current;return e!==null?e:dt.pooledCache}function lc(e,t){t===null?K(ki,ki.current):K(ki,t.pool)}function Rg(){var e=Zd();return e===null?null:{parent:Ht._currentValue,pool:e}}var xo=Error(o(460)),Kd=Error(o(474)),sc=Error(o(542)),cc={then:function(){}};function Ag(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Lg(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(ca,ca),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Dg(e),e;default:if(typeof t.status=="string")t.then(ca,ca);else{if(e=dt,e!==null&&100<e.shellSuspendCounter)throw Error(o(482));e=t,e.status="pending",e.then(function(s){if(t.status==="pending"){var d=t;d.status="fulfilled",d.value=s}},function(s){if(t.status==="pending"){var d=t;d.status="rejected",d.reason=s}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Dg(e),e}throw Ri=t,xo}}function Oi(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ri=a,xo):a}}var Ri=null;function zg(){if(Ri===null)throw Error(o(459));var e=Ri;return Ri=null,e}function Dg(e){if(e===xo||e===sc)throw Error(o(483))}var yo=null,wl=0;function uc(e){var t=wl;return wl+=1,yo===null&&(yo=[]),Lg(yo,e,t)}function _l(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function dc(e,t){throw t.$$typeof===S?Error(o(525)):(e=Object.prototype.toString.call(t),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Mg(e){function t(G,q){if(e){var V=G.deletions;V===null?(G.deletions=[q],G.flags|=16):V.push(q)}}function a(G,q){if(!e)return null;for(;q!==null;)t(G,q),q=q.sibling;return null}function s(G){for(var q=new Map;G!==null;)G.key!==null?q.set(G.key,G):q.set(G.index,G),G=G.sibling;return q}function d(G,q){return G=da(G,q),G.index=0,G.sibling=null,G}function p(G,q,V){return G.index=V,e?(V=G.alternate,V!==null?(V=V.index,V<q?(G.flags|=67108866,q):V):(G.flags|=67108866,q)):(G.flags|=1048576,q)}function y(G){return e&&G.alternate===null&&(G.flags|=67108866),G}function O(G,q,V,ie){return q===null||q.tag!==6?(q=Bd(V,G.mode,ie),q.return=G,q):(q=d(q,V),q.return=G,q)}function B(G,q,V,ie){var Oe=V.type;return Oe===b?ae(G,q,V.props.children,ie,V.key):q!==null&&(q.elementType===Oe||typeof Oe=="object"&&Oe!==null&&Oe.$$typeof===I&&Oi(Oe)===q.type)?(q=d(q,V.props),_l(q,V),q.return=G,q):(q=rc(V.type,V.key,V.props,null,G.mode,ie),_l(q,V),q.return=G,q)}function F(G,q,V,ie){return q===null||q.tag!==4||q.stateNode.containerInfo!==V.containerInfo||q.stateNode.implementation!==V.implementation?(q=Hd(V,G.mode,ie),q.return=G,q):(q=d(q,V.children||[]),q.return=G,q)}function ae(G,q,V,ie,Oe){return q===null||q.tag!==7?(q=_i(V,G.mode,ie,Oe),q.return=G,q):(q=d(q,V),q.return=G,q)}function se(G,q,V){if(typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint")return q=Bd(""+q,G.mode,V),q.return=G,q;if(typeof q=="object"&&q!==null){switch(q.$$typeof){case T:return V=rc(q.type,q.key,q.props,null,G.mode,V),_l(V,q),V.return=G,V;case w:return q=Hd(q,G.mode,V),q.return=G,q;case I:return q=Oi(q),se(G,q,V)}if(we(q)||le(q))return q=_i(q,G.mode,V,null),q.return=G,q;if(typeof q.then=="function")return se(G,uc(q),V);if(q.$$typeof===A)return se(G,oc(G,q),V);dc(G,q)}return null}function Z(G,q,V,ie){var Oe=q!==null?q.key:null;if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return Oe!==null?null:O(G,q,""+V,ie);if(typeof V=="object"&&V!==null){switch(V.$$typeof){case T:return V.key===Oe?B(G,q,V,ie):null;case w:return V.key===Oe?F(G,q,V,ie):null;case I:return V=Oi(V),Z(G,q,V,ie)}if(we(V)||le(V))return Oe!==null?null:ae(G,q,V,ie,null);if(typeof V.then=="function")return Z(G,q,uc(V),ie);if(V.$$typeof===A)return Z(G,q,oc(G,V),ie);dc(G,V)}return null}function W(G,q,V,ie,Oe){if(typeof ie=="string"&&ie!==""||typeof ie=="number"||typeof ie=="bigint")return G=G.get(V)||null,O(q,G,""+ie,Oe);if(typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case T:return G=G.get(ie.key===null?V:ie.key)||null,B(q,G,ie,Oe);case w:return G=G.get(ie.key===null?V:ie.key)||null,F(q,G,ie,Oe);case I:return ie=Oi(ie),W(G,q,V,ie,Oe)}if(we(ie)||le(ie))return G=G.get(V)||null,ae(q,G,ie,Oe,null);if(typeof ie.then=="function")return W(G,q,V,uc(ie),Oe);if(ie.$$typeof===A)return W(G,q,V,oc(q,ie),Oe);dc(q,ie)}return null}function Te(G,q,V,ie){for(var Oe=null,Qe=null,Ce=q,je=q=0,Ge=null;Ce!==null&&je<V.length;je++){Ce.index>je?(Ge=Ce,Ce=null):Ge=Ce.sibling;var Ze=Z(G,Ce,V[je],ie);if(Ze===null){Ce===null&&(Ce=Ge);break}e&&Ce&&Ze.alternate===null&&t(G,Ce),q=p(Ze,q,je),Qe===null?Oe=Ze:Qe.sibling=Ze,Qe=Ze,Ce=Ge}if(je===V.length)return a(G,Ce),Xe&&fa(G,je),Oe;if(Ce===null){for(;je<V.length;je++)Ce=se(G,V[je],ie),Ce!==null&&(q=p(Ce,q,je),Qe===null?Oe=Ce:Qe.sibling=Ce,Qe=Ce);return Xe&&fa(G,je),Oe}for(Ce=s(Ce);je<V.length;je++)Ge=W(Ce,G,je,V[je],ie),Ge!==null&&(e&&Ge.alternate!==null&&Ce.delete(Ge.key===null?je:Ge.key),q=p(Ge,q,je),Qe===null?Oe=Ge:Qe.sibling=Ge,Qe=Ge);return e&&Ce.forEach(function(ai){return t(G,ai)}),Xe&&fa(G,je),Oe}function Re(G,q,V,ie){if(V==null)throw Error(o(151));for(var Oe=null,Qe=null,Ce=q,je=q=0,Ge=null,Ze=V.next();Ce!==null&&!Ze.done;je++,Ze=V.next()){Ce.index>je?(Ge=Ce,Ce=null):Ge=Ce.sibling;var ai=Z(G,Ce,Ze.value,ie);if(ai===null){Ce===null&&(Ce=Ge);break}e&&Ce&&ai.alternate===null&&t(G,Ce),q=p(ai,q,je),Qe===null?Oe=ai:Qe.sibling=ai,Qe=ai,Ce=Ge}if(Ze.done)return a(G,Ce),Xe&&fa(G,je),Oe;if(Ce===null){for(;!Ze.done;je++,Ze=V.next())Ze=se(G,Ze.value,ie),Ze!==null&&(q=p(Ze,q,je),Qe===null?Oe=Ze:Qe.sibling=Ze,Qe=Ze);return Xe&&fa(G,je),Oe}for(Ce=s(Ce);!Ze.done;je++,Ze=V.next())Ze=W(Ce,G,je,Ze.value,ie),Ze!==null&&(e&&Ze.alternate!==null&&Ce.delete(Ze.key===null?je:Ze.key),q=p(Ze,q,je),Qe===null?Oe=Ze:Qe.sibling=Ze,Qe=Ze);return e&&Ce.forEach(function(G_){return t(G,G_)}),Xe&&fa(G,je),Oe}function st(G,q,V,ie){if(typeof V=="object"&&V!==null&&V.type===b&&V.key===null&&(V=V.props.children),typeof V=="object"&&V!==null){switch(V.$$typeof){case T:e:{for(var Oe=V.key;q!==null;){if(q.key===Oe){if(Oe=V.type,Oe===b){if(q.tag===7){a(G,q.sibling),ie=d(q,V.props.children),ie.return=G,G=ie;break e}}else if(q.elementType===Oe||typeof Oe=="object"&&Oe!==null&&Oe.$$typeof===I&&Oi(Oe)===q.type){a(G,q.sibling),ie=d(q,V.props),_l(ie,V),ie.return=G,G=ie;break e}a(G,q);break}else t(G,q);q=q.sibling}V.type===b?(ie=_i(V.props.children,G.mode,ie,V.key),ie.return=G,G=ie):(ie=rc(V.type,V.key,V.props,null,G.mode,ie),_l(ie,V),ie.return=G,G=ie)}return y(G);case w:e:{for(Oe=V.key;q!==null;){if(q.key===Oe)if(q.tag===4&&q.stateNode.containerInfo===V.containerInfo&&q.stateNode.implementation===V.implementation){a(G,q.sibling),ie=d(q,V.children||[]),ie.return=G,G=ie;break e}else{a(G,q);break}else t(G,q);q=q.sibling}ie=Hd(V,G.mode,ie),ie.return=G,G=ie}return y(G);case I:return V=Oi(V),st(G,q,V,ie)}if(we(V))return Te(G,q,V,ie);if(le(V)){if(Oe=le(V),typeof Oe!="function")throw Error(o(150));return V=Oe.call(V),Re(G,q,V,ie)}if(typeof V.then=="function")return st(G,q,uc(V),ie);if(V.$$typeof===A)return st(G,q,oc(G,V),ie);dc(G,V)}return typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint"?(V=""+V,q!==null&&q.tag===6?(a(G,q.sibling),ie=d(q,V),ie.return=G,G=ie):(a(G,q),ie=Bd(V,G.mode,ie),ie.return=G,G=ie),y(G)):a(G,q)}return function(G,q,V,ie){try{wl=0;var Oe=st(G,q,V,ie);return yo=null,Oe}catch(Ce){if(Ce===xo||Ce===sc)throw Ce;var Qe=Hn(29,Ce,null,G.mode);return Qe.lanes=ie,Qe.return=G,Qe}}}var Ai=Mg(!0),Ng=Mg(!1),$a=!1;function Jd(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Wd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Pa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function qa(e,t,a){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,(Ke&2)!==0){var d=s.pending;return d===null?t.next=t:(t.next=d.next,d.next=t),s.pending=t,t=nc(e),yg(e,null,a),t}return tc(e,s,t,a),nc(e)}function Tl(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var s=t.lanes;s&=e.pendingLanes,a|=s,t.lanes=a,Q(e,a)}}function ef(e,t){var a=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var d=null,p=null;if(a=a.firstBaseUpdate,a!==null){do{var y={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};p===null?d=p=y:p=p.next=y,a=a.next}while(a!==null);p===null?d=p=t:p=p.next=t}else d=p=t;a={baseState:s.baseState,firstBaseUpdate:d,lastBaseUpdate:p,shared:s.shared,callbacks:s.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var tf=!1;function El(){if(tf){var e=mo;if(e!==null)throw e}}function Cl(e,t,a,s){tf=!1;var d=e.updateQueue;$a=!1;var p=d.firstBaseUpdate,y=d.lastBaseUpdate,O=d.shared.pending;if(O!==null){d.shared.pending=null;var B=O,F=B.next;B.next=null,y===null?p=F:y.next=F,y=B;var ae=e.alternate;ae!==null&&(ae=ae.updateQueue,O=ae.lastBaseUpdate,O!==y&&(O===null?ae.firstBaseUpdate=F:O.next=F,ae.lastBaseUpdate=B))}if(p!==null){var se=d.baseState;y=0,ae=F=B=null,O=p;do{var Z=O.lane&-536870913,W=Z!==O.lane;if(W?(Ye&Z)===Z:(s&Z)===Z){Z!==0&&Z===go&&(tf=!0),ae!==null&&(ae=ae.next={lane:0,tag:O.tag,payload:O.payload,callback:null,next:null});e:{var Te=e,Re=O;Z=t;var st=a;switch(Re.tag){case 1:if(Te=Re.payload,typeof Te=="function"){se=Te.call(st,se,Z);break e}se=Te;break e;case 3:Te.flags=Te.flags&-65537|128;case 0:if(Te=Re.payload,Z=typeof Te=="function"?Te.call(st,se,Z):Te,Z==null)break e;se=x({},se,Z);break e;case 2:$a=!0}}Z=O.callback,Z!==null&&(e.flags|=64,W&&(e.flags|=8192),W=d.callbacks,W===null?d.callbacks=[Z]:W.push(Z))}else W={lane:Z,tag:O.tag,payload:O.payload,callback:O.callback,next:null},ae===null?(F=ae=W,B=se):ae=ae.next=W,y|=Z;if(O=O.next,O===null){if(O=d.shared.pending,O===null)break;W=O,O=W.next,W.next=null,d.lastBaseUpdate=W,d.shared.pending=null}}while(!0);ae===null&&(B=se),d.baseState=B,d.firstBaseUpdate=F,d.lastBaseUpdate=ae,p===null&&(d.shared.lanes=0),Fa|=y,e.lanes=y,e.memoizedState=se}}function jg(e,t){if(typeof e!="function")throw Error(o(191,e));e.call(t)}function Ug(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)jg(a[e],t)}var bo=N(null),fc=N(0);function Ig(e,t){e=_a,K(fc,e),K(bo,t),_a=e|t.baseLanes}function nf(){K(fc,_a),K(bo,bo.current)}function rf(){_a=fc.current,Y(bo),Y(fc)}var $n=N(null),pr=null;function Ya(e){var t=e.alternate;K(Mt,Mt.current&1),K($n,e),pr===null&&(t===null||bo.current!==null||t.memoizedState!==null)&&(pr=e)}function af(e){K(Mt,Mt.current),K($n,e),pr===null&&(pr=e)}function Bg(e){e.tag===22?(K(Mt,Mt.current),K($n,e),pr===null&&(pr=e)):Ga()}function Ga(){K(Mt,Mt.current),K($n,$n.current)}function Pn(e){Y($n),pr===e&&(pr=null),Y(Mt)}var Mt=N(0);function pc(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||dp(a)||fp(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ga=0,Ne=null,ot=null,$t=null,hc=!1,vo=!1,Li=!1,gc=0,kl=0,So=null,Nw=0;function Lt(){throw Error(o(321))}function of(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!Bn(e[a],t[a]))return!1;return!0}function lf(e,t,a,s,d,p){return ga=p,Ne=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,U.H=e===null||e.memoizedState===null?wm:wf,Li=!1,p=a(s,d),Li=!1,vo&&(p=$g(t,a,s,d)),Hg(e),p}function Hg(e){U.H=Al;var t=ot!==null&&ot.next!==null;if(ga=0,$t=ot=Ne=null,hc=!1,kl=0,So=null,t)throw Error(o(300));e===null||Pt||(e=e.dependencies,e!==null&&ic(e)&&(Pt=!0))}function $g(e,t,a,s){Ne=e;var d=0;do{if(vo&&(So=null),kl=0,vo=!1,25<=d)throw Error(o(301));if(d+=1,$t=ot=null,e.updateQueue!=null){var p=e.updateQueue;p.lastEffect=null,p.events=null,p.stores=null,p.memoCache!=null&&(p.memoCache.index=0)}U.H=_m,p=t(a,s)}while(vo);return p}function jw(){var e=U.H,t=e.useState()[0];return t=typeof t.then=="function"?Ol(t):t,e=e.useState()[0],(ot!==null?ot.memoizedState:null)!==e&&(Ne.flags|=1024),t}function sf(){var e=gc!==0;return gc=0,e}function cf(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function uf(e){if(hc){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}hc=!1}ga=0,$t=ot=Ne=null,vo=!1,kl=gc=0,So=null}function yn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return $t===null?Ne.memoizedState=$t=e:$t=$t.next=e,$t}function Nt(){if(ot===null){var e=Ne.alternate;e=e!==null?e.memoizedState:null}else e=ot.next;var t=$t===null?Ne.memoizedState:$t.next;if(t!==null)$t=t,ot=e;else{if(e===null)throw Ne.alternate===null?Error(o(467)):Error(o(310));ot=e,e={memoizedState:ot.memoizedState,baseState:ot.baseState,baseQueue:ot.baseQueue,queue:ot.queue,next:null},$t===null?Ne.memoizedState=$t=e:$t=$t.next=e}return $t}function mc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ol(e){var t=kl;return kl+=1,So===null&&(So=[]),e=Lg(So,e,t),t=Ne,($t===null?t.memoizedState:$t.next)===null&&(t=t.alternate,U.H=t===null||t.memoizedState===null?wm:wf),e}function xc(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ol(e);if(e.$$typeof===A)return en(e)}throw Error(o(438,String(e)))}function df(e){var t=null,a=Ne.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var s=Ne.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(t={data:s.data.map(function(d){return d.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=mc(),Ne.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),s=0;s<e;s++)a[s]=te;return t.index++,a}function ma(e,t){return typeof t=="function"?t(e):t}function yc(e){var t=Nt();return ff(t,ot,e)}function ff(e,t,a){var s=e.queue;if(s===null)throw Error(o(311));s.lastRenderedReducer=a;var d=e.baseQueue,p=s.pending;if(p!==null){if(d!==null){var y=d.next;d.next=p.next,p.next=y}t.baseQueue=d=p,s.pending=null}if(p=e.baseState,d===null)e.memoizedState=p;else{t=d.next;var O=y=null,B=null,F=t,ae=!1;do{var se=F.lane&-536870913;if(se!==F.lane?(Ye&se)===se:(ga&se)===se){var Z=F.revertLane;if(Z===0)B!==null&&(B=B.next={lane:0,revertLane:0,gesture:null,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null}),se===go&&(ae=!0);else if((ga&Z)===Z){F=F.next,Z===go&&(ae=!0);continue}else se={lane:0,revertLane:F.revertLane,gesture:null,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null},B===null?(O=B=se,y=p):B=B.next=se,Ne.lanes|=Z,Fa|=Z;se=F.action,Li&&a(p,se),p=F.hasEagerState?F.eagerState:a(p,se)}else Z={lane:se,revertLane:F.revertLane,gesture:F.gesture,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null},B===null?(O=B=Z,y=p):B=B.next=Z,Ne.lanes|=se,Fa|=se;F=F.next}while(F!==null&&F!==t);if(B===null?y=p:B.next=O,!Bn(p,e.memoizedState)&&(Pt=!0,ae&&(a=mo,a!==null)))throw a;e.memoizedState=p,e.baseState=y,e.baseQueue=B,s.lastRenderedState=p}return d===null&&(s.lanes=0),[e.memoizedState,s.dispatch]}function pf(e){var t=Nt(),a=t.queue;if(a===null)throw Error(o(311));a.lastRenderedReducer=e;var s=a.dispatch,d=a.pending,p=t.memoizedState;if(d!==null){a.pending=null;var y=d=d.next;do p=e(p,y.action),y=y.next;while(y!==d);Bn(p,t.memoizedState)||(Pt=!0),t.memoizedState=p,t.baseQueue===null&&(t.baseState=p),a.lastRenderedState=p}return[p,s]}function Pg(e,t,a){var s=Ne,d=Nt(),p=Xe;if(p){if(a===void 0)throw Error(o(407));a=a()}else a=t();var y=!Bn((ot||d).memoizedState,a);if(y&&(d.memoizedState=a,Pt=!0),d=d.queue,mf(Gg.bind(null,s,d,e),[e]),d.getSnapshot!==t||y||$t!==null&&$t.memoizedState.tag&1){if(s.flags|=2048,wo(9,{destroy:void 0},Yg.bind(null,s,d,a,t),null),dt===null)throw Error(o(349));p||(ga&127)!==0||qg(s,t,a)}return a}function qg(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=Ne.updateQueue,t===null?(t=mc(),Ne.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function Yg(e,t,a,s){t.value=a,t.getSnapshot=s,Xg(t)&&Vg(e)}function Gg(e,t,a){return a(function(){Xg(t)&&Vg(e)})}function Xg(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!Bn(e,a)}catch{return!0}}function Vg(e){var t=wi(e,2);t!==null&&On(t,e,2)}function hf(e){var t=yn();if(typeof e=="function"){var a=e;if(e=a(),Li){xn(!0);try{a()}finally{xn(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ma,lastRenderedState:e},t}function Fg(e,t,a,s){return e.baseState=a,ff(e,ot,typeof s=="function"?s:ma)}function Uw(e,t,a,s,d){if(Sc(e))throw Error(o(485));if(e=t.action,e!==null){var p={payload:d,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){p.listeners.push(y)}};U.T!==null?a(!0):p.isTransition=!1,s(p),a=t.pending,a===null?(p.next=t.pending=p,Qg(t,p)):(p.next=a.next,t.pending=a.next=p)}}function Qg(e,t){var a=t.action,s=t.payload,d=e.state;if(t.isTransition){var p=U.T,y={};U.T=y;try{var O=a(d,s),B=U.S;B!==null&&B(y,O),Zg(e,t,O)}catch(F){gf(e,t,F)}finally{p!==null&&y.types!==null&&(p.types=y.types),U.T=p}}else try{p=a(d,s),Zg(e,t,p)}catch(F){gf(e,t,F)}}function Zg(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){Kg(e,t,s)},function(s){return gf(e,t,s)}):Kg(e,t,a)}function Kg(e,t,a){t.status="fulfilled",t.value=a,Jg(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,Qg(e,a)))}function gf(e,t,a){var s=e.pending;if(e.pending=null,s!==null){s=s.next;do t.status="rejected",t.reason=a,Jg(t),t=t.next;while(t!==s)}e.action=null}function Jg(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Wg(e,t){return t}function em(e,t){if(Xe){var a=dt.formState;if(a!==null){e:{var s=Ne;if(Xe){if(yt){t:{for(var d=yt,p=fr;d.nodeType!==8;){if(!p){d=null;break t}if(d=hr(d.nextSibling),d===null){d=null;break t}}p=d.data,d=p==="F!"||p==="F"?d:null}if(d){yt=hr(d.nextSibling),s=d.data==="F!";break e}}Ba(s)}s=!1}s&&(t=a[0])}}return a=yn(),a.memoizedState=a.baseState=t,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wg,lastRenderedState:t},a.queue=s,a=bm.bind(null,Ne,s),s.dispatch=a,s=hf(!1),p=Sf.bind(null,Ne,!1,s.queue),s=yn(),d={state:t,dispatch:null,action:e,pending:null},s.queue=d,a=Uw.bind(null,Ne,d,p,a),d.dispatch=a,s.memoizedState=e,[t,a,!1]}function tm(e){var t=Nt();return nm(t,ot,e)}function nm(e,t,a){if(t=ff(e,t,Wg)[0],e=yc(ma)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var s=Ol(t)}catch(y){throw y===xo?sc:y}else s=t;t=Nt();var d=t.queue,p=d.dispatch;return a!==t.memoizedState&&(Ne.flags|=2048,wo(9,{destroy:void 0},Iw.bind(null,d,a),null)),[s,p,e]}function Iw(e,t){e.action=t}function rm(e){var t=Nt(),a=ot;if(a!==null)return nm(t,a,e);Nt(),t=t.memoizedState,a=Nt();var s=a.queue.dispatch;return a.memoizedState=e,[t,s,!1]}function wo(e,t,a,s){return e={tag:e,create:a,deps:s,inst:t,next:null},t=Ne.updateQueue,t===null&&(t=mc(),Ne.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(s=a.next,a.next=e,e.next=s,t.lastEffect=e),e}function am(){return Nt().memoizedState}function bc(e,t,a,s){var d=yn();Ne.flags|=e,d.memoizedState=wo(1|t,{destroy:void 0},a,s===void 0?null:s)}function vc(e,t,a,s){var d=Nt();s=s===void 0?null:s;var p=d.memoizedState.inst;ot!==null&&s!==null&&of(s,ot.memoizedState.deps)?d.memoizedState=wo(t,p,a,s):(Ne.flags|=e,d.memoizedState=wo(1|t,p,a,s))}function im(e,t){bc(8390656,8,e,t)}function mf(e,t){vc(2048,8,e,t)}function Bw(e){Ne.flags|=4;var t=Ne.updateQueue;if(t===null)t=mc(),Ne.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function om(e){var t=Nt().memoizedState;return Bw({ref:t,nextImpl:e}),function(){if((Ke&2)!==0)throw Error(o(440));return t.impl.apply(void 0,arguments)}}function lm(e,t){return vc(4,2,e,t)}function sm(e,t){return vc(4,4,e,t)}function cm(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function um(e,t,a){a=a!=null?a.concat([e]):null,vc(4,4,cm.bind(null,t,e),a)}function xf(){}function dm(e,t){var a=Nt();t=t===void 0?null:t;var s=a.memoizedState;return t!==null&&of(t,s[1])?s[0]:(a.memoizedState=[e,t],e)}function fm(e,t){var a=Nt();t=t===void 0?null:t;var s=a.memoizedState;if(t!==null&&of(t,s[1]))return s[0];if(s=e(),Li){xn(!0);try{e()}finally{xn(!1)}}return a.memoizedState=[s,t],s}function yf(e,t,a){return a===void 0||(ga&1073741824)!==0&&(Ye&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=p1(),Ne.lanes|=e,Fa|=e,a)}function pm(e,t,a,s){return Bn(a,t)?a:bo.current!==null?(e=yf(e,a,s),Bn(e,t)||(Pt=!0),e):(ga&42)===0||(ga&1073741824)!==0&&(Ye&261930)===0?(Pt=!0,e.memoizedState=a):(e=p1(),Ne.lanes|=e,Fa|=e,t)}function hm(e,t,a,s,d){var p=H.p;H.p=p!==0&&8>p?p:8;var y=U.T,O={};U.T=O,Sf(e,!1,t,a);try{var B=d(),F=U.S;if(F!==null&&F(O,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var ae=Mw(B,s);Rl(e,t,ae,Gn(e))}else Rl(e,t,s,Gn(e))}catch(se){Rl(e,t,{then:function(){},status:"rejected",reason:se},Gn())}finally{H.p=p,y!==null&&O.types!==null&&(y.types=O.types),U.T=y}}function Hw(){}function bf(e,t,a,s){if(e.tag!==5)throw Error(o(476));var d=gm(e).queue;hm(e,d,t,X,a===null?Hw:function(){return mm(e),a(s)})}function gm(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:X,baseState:X,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ma,lastRenderedState:X},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ma,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function mm(e){var t=gm(e);t.next===null&&(t=e.alternate.memoizedState),Rl(e,t.next.queue,{},Gn())}function vf(){return en(Xl)}function xm(){return Nt().memoizedState}function ym(){return Nt().memoizedState}function $w(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=Gn();e=Pa(a);var s=qa(t,e,a);s!==null&&(On(s,t,a),Tl(s,t,a)),t={cache:Fd()},e.payload=t;return}t=t.return}}function Pw(e,t,a){var s=Gn();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Sc(e)?vm(t,a):(a=Ud(e,t,a,s),a!==null&&(On(a,e,s),Sm(a,t,s)))}function bm(e,t,a){var s=Gn();Rl(e,t,a,s)}function Rl(e,t,a,s){var d={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Sc(e))vm(t,d);else{var p=e.alternate;if(e.lanes===0&&(p===null||p.lanes===0)&&(p=t.lastRenderedReducer,p!==null))try{var y=t.lastRenderedState,O=p(y,a);if(d.hasEagerState=!0,d.eagerState=O,Bn(O,y))return tc(e,t,d,0),dt===null&&ec(),!1}catch{}if(a=Ud(e,t,d,s),a!==null)return On(a,e,s),Sm(a,t,s),!0}return!1}function Sf(e,t,a,s){if(s={lane:2,revertLane:Wf(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},Sc(e)){if(t)throw Error(o(479))}else t=Ud(e,a,s,2),t!==null&&On(t,e,2)}function Sc(e){var t=e.alternate;return e===Ne||t!==null&&t===Ne}function vm(e,t){vo=hc=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function Sm(e,t,a){if((a&4194048)!==0){var s=t.lanes;s&=e.pendingLanes,a|=s,t.lanes=a,Q(e,a)}}var Al={readContext:en,use:xc,useCallback:Lt,useContext:Lt,useEffect:Lt,useImperativeHandle:Lt,useLayoutEffect:Lt,useInsertionEffect:Lt,useMemo:Lt,useReducer:Lt,useRef:Lt,useState:Lt,useDebugValue:Lt,useDeferredValue:Lt,useTransition:Lt,useSyncExternalStore:Lt,useId:Lt,useHostTransitionStatus:Lt,useFormState:Lt,useActionState:Lt,useOptimistic:Lt,useMemoCache:Lt,useCacheRefresh:Lt};Al.useEffectEvent=Lt;var wm={readContext:en,use:xc,useCallback:function(e,t){return yn().memoizedState=[e,t===void 0?null:t],e},useContext:en,useEffect:im,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,bc(4194308,4,cm.bind(null,t,e),a)},useLayoutEffect:function(e,t){return bc(4194308,4,e,t)},useInsertionEffect:function(e,t){bc(4,2,e,t)},useMemo:function(e,t){var a=yn();t=t===void 0?null:t;var s=e();if(Li){xn(!0);try{e()}finally{xn(!1)}}return a.memoizedState=[s,t],s},useReducer:function(e,t,a){var s=yn();if(a!==void 0){var d=a(t);if(Li){xn(!0);try{a(t)}finally{xn(!1)}}}else d=t;return s.memoizedState=s.baseState=d,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:d},s.queue=e,e=e.dispatch=Pw.bind(null,Ne,e),[s.memoizedState,e]},useRef:function(e){var t=yn();return e={current:e},t.memoizedState=e},useState:function(e){e=hf(e);var t=e.queue,a=bm.bind(null,Ne,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:xf,useDeferredValue:function(e,t){var a=yn();return yf(a,e,t)},useTransition:function(){var e=hf(!1);return e=hm.bind(null,Ne,e.queue,!0,!1),yn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var s=Ne,d=yn();if(Xe){if(a===void 0)throw Error(o(407));a=a()}else{if(a=t(),dt===null)throw Error(o(349));(Ye&127)!==0||qg(s,t,a)}d.memoizedState=a;var p={value:a,getSnapshot:t};return d.queue=p,im(Gg.bind(null,s,p,e),[e]),s.flags|=2048,wo(9,{destroy:void 0},Yg.bind(null,s,p,a,t),null),a},useId:function(){var e=yn(),t=dt.identifierPrefix;if(Xe){var a=qr,s=Pr;a=(s&~(1<<32-Bt(s)-1)).toString(32)+a,t="_"+t+"R_"+a,a=gc++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=Nw++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:vf,useFormState:em,useActionState:em,useOptimistic:function(e){var t=yn();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=Sf.bind(null,Ne,!0,a),a.dispatch=t,[e,t]},useMemoCache:df,useCacheRefresh:function(){return yn().memoizedState=$w.bind(null,Ne)},useEffectEvent:function(e){var t=yn(),a={impl:e};return t.memoizedState=a,function(){if((Ke&2)!==0)throw Error(o(440));return a.impl.apply(void 0,arguments)}}},wf={readContext:en,use:xc,useCallback:dm,useContext:en,useEffect:mf,useImperativeHandle:um,useInsertionEffect:lm,useLayoutEffect:sm,useMemo:fm,useReducer:yc,useRef:am,useState:function(){return yc(ma)},useDebugValue:xf,useDeferredValue:function(e,t){var a=Nt();return pm(a,ot.memoizedState,e,t)},useTransition:function(){var e=yc(ma)[0],t=Nt().memoizedState;return[typeof e=="boolean"?e:Ol(e),t]},useSyncExternalStore:Pg,useId:xm,useHostTransitionStatus:vf,useFormState:tm,useActionState:tm,useOptimistic:function(e,t){var a=Nt();return Fg(a,ot,e,t)},useMemoCache:df,useCacheRefresh:ym};wf.useEffectEvent=om;var _m={readContext:en,use:xc,useCallback:dm,useContext:en,useEffect:mf,useImperativeHandle:um,useInsertionEffect:lm,useLayoutEffect:sm,useMemo:fm,useReducer:pf,useRef:am,useState:function(){return pf(ma)},useDebugValue:xf,useDeferredValue:function(e,t){var a=Nt();return ot===null?yf(a,e,t):pm(a,ot.memoizedState,e,t)},useTransition:function(){var e=pf(ma)[0],t=Nt().memoizedState;return[typeof e=="boolean"?e:Ol(e),t]},useSyncExternalStore:Pg,useId:xm,useHostTransitionStatus:vf,useFormState:rm,useActionState:rm,useOptimistic:function(e,t){var a=Nt();return ot!==null?Fg(a,ot,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:df,useCacheRefresh:ym};_m.useEffectEvent=om;function _f(e,t,a,s){t=e.memoizedState,a=a(s,t),a=a==null?t:x({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Tf={enqueueSetState:function(e,t,a){e=e._reactInternals;var s=Gn(),d=Pa(s);d.payload=t,a!=null&&(d.callback=a),t=qa(e,d,s),t!==null&&(On(t,e,s),Tl(t,e,s))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var s=Gn(),d=Pa(s);d.tag=1,d.payload=t,a!=null&&(d.callback=a),t=qa(e,d,s),t!==null&&(On(t,e,s),Tl(t,e,s))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=Gn(),s=Pa(a);s.tag=2,t!=null&&(s.callback=t),t=qa(e,s,a),t!==null&&(On(t,e,a),Tl(t,e,a))}};function Tm(e,t,a,s,d,p,y){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,p,y):t.prototype&&t.prototype.isPureReactComponent?!ml(a,s)||!ml(d,p):!0}function Em(e,t,a,s){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,s),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,s),t.state!==e&&Tf.enqueueReplaceState(t,t.state,null)}function zi(e,t){var a=t;if("ref"in t){a={};for(var s in t)s!=="ref"&&(a[s]=t[s])}if(e=e.defaultProps){a===t&&(a=x({},a));for(var d in e)a[d]===void 0&&(a[d]=e[d])}return a}function Cm(e){Ws(e)}function km(e){console.error(e)}function Om(e){Ws(e)}function wc(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(s){setTimeout(function(){throw s})}}function Rm(e,t,a){try{var s=e.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(d){setTimeout(function(){throw d})}}function Ef(e,t,a){return a=Pa(a),a.tag=3,a.payload={element:null},a.callback=function(){wc(e,t)},a}function Am(e){return e=Pa(e),e.tag=3,e}function Lm(e,t,a,s){var d=a.type.getDerivedStateFromError;if(typeof d=="function"){var p=s.value;e.payload=function(){return d(p)},e.callback=function(){Rm(t,a,s)}}var y=a.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(e.callback=function(){Rm(t,a,s),typeof d!="function"&&(Qa===null?Qa=new Set([this]):Qa.add(this));var O=s.stack;this.componentDidCatch(s.value,{componentStack:O!==null?O:""})})}function qw(e,t,a,s,d){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(t=a.alternate,t!==null&&ho(t,a,d,!0),a=$n.current,a!==null){switch(a.tag){case 31:case 13:return pr===null?Mc():a.alternate===null&&zt===0&&(zt=3),a.flags&=-257,a.flags|=65536,a.lanes=d,s===cc?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([s]):t.add(s),Zf(e,s,d)),!1;case 22:return a.flags|=65536,s===cc?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([s]):a.add(s)),Zf(e,s,d)),!1}throw Error(o(435,a.tag))}return Zf(e,s,d),Mc(),!1}if(Xe)return t=$n.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=d,s!==qd&&(e=Error(o(422),{cause:s}),bl(cr(e,a)))):(s!==qd&&(t=Error(o(423),{cause:s}),bl(cr(t,a))),e=e.current.alternate,e.flags|=65536,d&=-d,e.lanes|=d,s=cr(s,a),d=Ef(e.stateNode,s,d),ef(e,d),zt!==4&&(zt=2)),!1;var p=Error(o(520),{cause:s});if(p=cr(p,a),Il===null?Il=[p]:Il.push(p),zt!==4&&(zt=2),t===null)return!0;s=cr(s,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=d&-d,a.lanes|=e,e=Ef(a.stateNode,s,e),ef(a,e),!1;case 1:if(t=a.type,p=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Qa===null||!Qa.has(p))))return a.flags|=65536,d&=-d,a.lanes|=d,d=Am(d),Lm(d,e,a,s),ef(a,d),!1}a=a.return}while(a!==null);return!1}var Cf=Error(o(461)),Pt=!1;function tn(e,t,a,s){t.child=e===null?Ng(t,null,a,s):Ai(t,e.child,a,s)}function zm(e,t,a,s,d){a=a.render;var p=t.ref;if("ref"in s){var y={};for(var O in s)O!=="ref"&&(y[O]=s[O])}else y=s;return Ci(t),s=lf(e,t,a,y,p,d),O=sf(),e!==null&&!Pt?(cf(e,t,d),xa(e,t,d)):(Xe&&O&&$d(t),t.flags|=1,tn(e,t,s,d),t.child)}function Dm(e,t,a,s,d){if(e===null){var p=a.type;return typeof p=="function"&&!Id(p)&&p.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=p,Mm(e,t,p,s,d)):(e=rc(a.type,null,s,t,t.mode,d),e.ref=t.ref,e.return=t,t.child=e)}if(p=e.child,!Mf(e,d)){var y=p.memoizedProps;if(a=a.compare,a=a!==null?a:ml,a(y,s)&&e.ref===t.ref)return xa(e,t,d)}return t.flags|=1,e=da(p,s),e.ref=t.ref,e.return=t,t.child=e}function Mm(e,t,a,s,d){if(e!==null){var p=e.memoizedProps;if(ml(p,s)&&e.ref===t.ref)if(Pt=!1,t.pendingProps=s=p,Mf(e,d))(e.flags&131072)!==0&&(Pt=!0);else return t.lanes=e.lanes,xa(e,t,d)}return kf(e,t,a,s,d)}function Nm(e,t,a,s){var d=s.children,p=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((t.flags&128)!==0){if(p=p!==null?p.baseLanes|a:a,e!==null){for(s=t.child=e.child,d=0;s!==null;)d=d|s.lanes|s.childLanes,s=s.sibling;s=d&~p}else s=0,t.child=null;return jm(e,t,p,a,s)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&lc(t,p!==null?p.cachePool:null),p!==null?Ig(t,p):nf(),Bg(t);else return s=t.lanes=536870912,jm(e,t,p!==null?p.baseLanes|a:a,a,s)}else p!==null?(lc(t,p.cachePool),Ig(t,p),Ga(),t.memoizedState=null):(e!==null&&lc(t,null),nf(),Ga());return tn(e,t,d,a),t.child}function Ll(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function jm(e,t,a,s,d){var p=Zd();return p=p===null?null:{parent:Ht._currentValue,pool:p},t.memoizedState={baseLanes:a,cachePool:p},e!==null&&lc(t,null),nf(),Bg(t),e!==null&&ho(e,t,s,!0),t.childLanes=d,null}function _c(e,t){return t=Ec({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Um(e,t,a){return Ai(t,e.child,null,a),e=_c(t,t.pendingProps),e.flags|=2,Pn(t),t.memoizedState=null,e}function Yw(e,t,a){var s=t.pendingProps,d=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Xe){if(s.mode==="hidden")return e=_c(t,s),t.lanes=536870912,Ll(null,e);if(af(t),(e=yt)?(e=Q1(e,fr),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ua!==null?{id:Pr,overflow:qr}:null,retryLane:536870912,hydrationErrors:null},a=vg(e),a.return=t,t.child=a,Wt=t,yt=null)):e=null,e===null)throw Ba(t);return t.lanes=536870912,null}return _c(t,s)}var p=e.memoizedState;if(p!==null){var y=p.dehydrated;if(af(t),d)if(t.flags&256)t.flags&=-257,t=Um(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(o(558));else if(Pt||ho(e,t,a,!1),d=(a&e.childLanes)!==0,Pt||d){if(s=dt,s!==null&&(y=ce(s,a),y!==0&&y!==p.retryLane))throw p.retryLane=y,wi(e,y),On(s,e,y),Cf;Mc(),t=Um(e,t,a)}else e=p.treeContext,yt=hr(y.nextSibling),Wt=t,Xe=!0,Ia=null,fr=!1,e!==null&&_g(t,e),t=_c(t,s),t.flags|=4096;return t}return e=da(e.child,{mode:s.mode,children:s.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Tc(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(o(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function kf(e,t,a,s,d){return Ci(t),a=lf(e,t,a,s,void 0,d),s=sf(),e!==null&&!Pt?(cf(e,t,d),xa(e,t,d)):(Xe&&s&&$d(t),t.flags|=1,tn(e,t,a,d),t.child)}function Im(e,t,a,s,d,p){return Ci(t),t.updateQueue=null,a=$g(t,s,a,d),Hg(e),s=sf(),e!==null&&!Pt?(cf(e,t,p),xa(e,t,p)):(Xe&&s&&$d(t),t.flags|=1,tn(e,t,a,p),t.child)}function Bm(e,t,a,s,d){if(Ci(t),t.stateNode===null){var p=co,y=a.contextType;typeof y=="object"&&y!==null&&(p=en(y)),p=new a(s,p),t.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,p.updater=Tf,t.stateNode=p,p._reactInternals=t,p=t.stateNode,p.props=s,p.state=t.memoizedState,p.refs={},Jd(t),y=a.contextType,p.context=typeof y=="object"&&y!==null?en(y):co,p.state=t.memoizedState,y=a.getDerivedStateFromProps,typeof y=="function"&&(_f(t,a,y,s),p.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(y=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),y!==p.state&&Tf.enqueueReplaceState(p,p.state,null),Cl(t,s,p,d),El(),p.state=t.memoizedState),typeof p.componentDidMount=="function"&&(t.flags|=4194308),s=!0}else if(e===null){p=t.stateNode;var O=t.memoizedProps,B=zi(a,O);p.props=B;var F=p.context,ae=a.contextType;y=co,typeof ae=="object"&&ae!==null&&(y=en(ae));var se=a.getDerivedStateFromProps;ae=typeof se=="function"||typeof p.getSnapshotBeforeUpdate=="function",O=t.pendingProps!==O,ae||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(O||F!==y)&&Em(t,p,s,y),$a=!1;var Z=t.memoizedState;p.state=Z,Cl(t,s,p,d),El(),F=t.memoizedState,O||Z!==F||$a?(typeof se=="function"&&(_f(t,a,se,s),F=t.memoizedState),(B=$a||Tm(t,a,B,s,Z,F,y))?(ae||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount()),typeof p.componentDidMount=="function"&&(t.flags|=4194308)):(typeof p.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=s,t.memoizedState=F),p.props=s,p.state=F,p.context=y,s=B):(typeof p.componentDidMount=="function"&&(t.flags|=4194308),s=!1)}else{p=t.stateNode,Wd(e,t),y=t.memoizedProps,ae=zi(a,y),p.props=ae,se=t.pendingProps,Z=p.context,F=a.contextType,B=co,typeof F=="object"&&F!==null&&(B=en(F)),O=a.getDerivedStateFromProps,(F=typeof O=="function"||typeof p.getSnapshotBeforeUpdate=="function")||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(y!==se||Z!==B)&&Em(t,p,s,B),$a=!1,Z=t.memoizedState,p.state=Z,Cl(t,s,p,d),El();var W=t.memoizedState;y!==se||Z!==W||$a||e!==null&&e.dependencies!==null&&ic(e.dependencies)?(typeof O=="function"&&(_f(t,a,O,s),W=t.memoizedState),(ae=$a||Tm(t,a,ae,s,Z,W,B)||e!==null&&e.dependencies!==null&&ic(e.dependencies))?(F||typeof p.UNSAFE_componentWillUpdate!="function"&&typeof p.componentWillUpdate!="function"||(typeof p.componentWillUpdate=="function"&&p.componentWillUpdate(s,W,B),typeof p.UNSAFE_componentWillUpdate=="function"&&p.UNSAFE_componentWillUpdate(s,W,B)),typeof p.componentDidUpdate=="function"&&(t.flags|=4),typeof p.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof p.componentDidUpdate!="function"||y===e.memoizedProps&&Z===e.memoizedState||(t.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&Z===e.memoizedState||(t.flags|=1024),t.memoizedProps=s,t.memoizedState=W),p.props=s,p.state=W,p.context=B,s=ae):(typeof p.componentDidUpdate!="function"||y===e.memoizedProps&&Z===e.memoizedState||(t.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&Z===e.memoizedState||(t.flags|=1024),s=!1)}return p=s,Tc(e,t),s=(t.flags&128)!==0,p||s?(p=t.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:p.render(),t.flags|=1,e!==null&&s?(t.child=Ai(t,e.child,null,d),t.child=Ai(t,null,a,d)):tn(e,t,a,d),t.memoizedState=p.state,e=t.child):e=xa(e,t,d),e}function Hm(e,t,a,s){return Ti(),t.flags|=256,tn(e,t,a,s),t.child}var Of={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Rf(e){return{baseLanes:e,cachePool:Rg()}}function Af(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=Yn),e}function $m(e,t,a){var s=t.pendingProps,d=!1,p=(t.flags&128)!==0,y;if((y=p)||(y=e!==null&&e.memoizedState===null?!1:(Mt.current&2)!==0),y&&(d=!0,t.flags&=-129),y=(t.flags&32)!==0,t.flags&=-33,e===null){if(Xe){if(d?Ya(t):Ga(),(e=yt)?(e=Q1(e,fr),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ua!==null?{id:Pr,overflow:qr}:null,retryLane:536870912,hydrationErrors:null},a=vg(e),a.return=t,t.child=a,Wt=t,yt=null)):e=null,e===null)throw Ba(t);return fp(e)?t.lanes=32:t.lanes=536870912,null}var O=s.children;return s=s.fallback,d?(Ga(),d=t.mode,O=Ec({mode:"hidden",children:O},d),s=_i(s,d,a,null),O.return=t,s.return=t,O.sibling=s,t.child=O,s=t.child,s.memoizedState=Rf(a),s.childLanes=Af(e,y,a),t.memoizedState=Of,Ll(null,s)):(Ya(t),Lf(t,O))}var B=e.memoizedState;if(B!==null&&(O=B.dehydrated,O!==null)){if(p)t.flags&256?(Ya(t),t.flags&=-257,t=zf(e,t,a)):t.memoizedState!==null?(Ga(),t.child=e.child,t.flags|=128,t=null):(Ga(),O=s.fallback,d=t.mode,s=Ec({mode:"visible",children:s.children},d),O=_i(O,d,a,null),O.flags|=2,s.return=t,O.return=t,s.sibling=O,t.child=s,Ai(t,e.child,null,a),s=t.child,s.memoizedState=Rf(a),s.childLanes=Af(e,y,a),t.memoizedState=Of,t=Ll(null,s));else if(Ya(t),fp(O)){if(y=O.nextSibling&&O.nextSibling.dataset,y)var F=y.dgst;y=F,s=Error(o(419)),s.stack="",s.digest=y,bl({value:s,source:null,stack:null}),t=zf(e,t,a)}else if(Pt||ho(e,t,a,!1),y=(a&e.childLanes)!==0,Pt||y){if(y=dt,y!==null&&(s=ce(y,a),s!==0&&s!==B.retryLane))throw B.retryLane=s,wi(e,s),On(y,e,s),Cf;dp(O)||Mc(),t=zf(e,t,a)}else dp(O)?(t.flags|=192,t.child=e.child,t=null):(e=B.treeContext,yt=hr(O.nextSibling),Wt=t,Xe=!0,Ia=null,fr=!1,e!==null&&_g(t,e),t=Lf(t,s.children),t.flags|=4096);return t}return d?(Ga(),O=s.fallback,d=t.mode,B=e.child,F=B.sibling,s=da(B,{mode:"hidden",children:s.children}),s.subtreeFlags=B.subtreeFlags&65011712,F!==null?O=da(F,O):(O=_i(O,d,a,null),O.flags|=2),O.return=t,s.return=t,s.sibling=O,t.child=s,Ll(null,s),s=t.child,O=e.child.memoizedState,O===null?O=Rf(a):(d=O.cachePool,d!==null?(B=Ht._currentValue,d=d.parent!==B?{parent:B,pool:B}:d):d=Rg(),O={baseLanes:O.baseLanes|a,cachePool:d}),s.memoizedState=O,s.childLanes=Af(e,y,a),t.memoizedState=Of,Ll(e.child,s)):(Ya(t),a=e.child,e=a.sibling,a=da(a,{mode:"visible",children:s.children}),a.return=t,a.sibling=null,e!==null&&(y=t.deletions,y===null?(t.deletions=[e],t.flags|=16):y.push(e)),t.child=a,t.memoizedState=null,a)}function Lf(e,t){return t=Ec({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Ec(e,t){return e=Hn(22,e,null,t),e.lanes=0,e}function zf(e,t,a){return Ai(t,e.child,null,a),e=Lf(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Pm(e,t,a){e.lanes|=t;var s=e.alternate;s!==null&&(s.lanes|=t),Xd(e.return,t,a)}function Df(e,t,a,s,d,p){var y=e.memoizedState;y===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:d,treeForkCount:p}:(y.isBackwards=t,y.rendering=null,y.renderingStartTime=0,y.last=s,y.tail=a,y.tailMode=d,y.treeForkCount=p)}function qm(e,t,a){var s=t.pendingProps,d=s.revealOrder,p=s.tail;s=s.children;var y=Mt.current,O=(y&2)!==0;if(O?(y=y&1|2,t.flags|=128):y&=1,K(Mt,y),tn(e,t,s,a),s=Xe?yl:0,!O&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Pm(e,a,t);else if(e.tag===19)Pm(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(d){case"forwards":for(a=t.child,d=null;a!==null;)e=a.alternate,e!==null&&pc(e)===null&&(d=a),a=a.sibling;a=d,a===null?(d=t.child,t.child=null):(d=a.sibling,a.sibling=null),Df(t,!1,d,a,p,s);break;case"backwards":case"unstable_legacy-backwards":for(a=null,d=t.child,t.child=null;d!==null;){if(e=d.alternate,e!==null&&pc(e)===null){t.child=d;break}e=d.sibling,d.sibling=a,a=d,d=e}Df(t,!0,a,null,p,s);break;case"together":Df(t,!1,null,null,void 0,s);break;default:t.memoizedState=null}return t.child}function xa(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),Fa|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(ho(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,a=da(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=da(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function Mf(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&ic(e)))}function Gw(e,t,a){switch(t.tag){case 3:be(t,t.stateNode.containerInfo),Ha(t,Ht,e.memoizedState.cache),Ti();break;case 27:case 5:Be(t);break;case 4:be(t,t.stateNode.containerInfo);break;case 10:Ha(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,af(t),null;break;case 13:var s=t.memoizedState;if(s!==null)return s.dehydrated!==null?(Ya(t),t.flags|=128,null):(a&t.child.childLanes)!==0?$m(e,t,a):(Ya(t),e=xa(e,t,a),e!==null?e.sibling:null);Ya(t);break;case 19:var d=(e.flags&128)!==0;if(s=(a&t.childLanes)!==0,s||(ho(e,t,a,!1),s=(a&t.childLanes)!==0),d){if(s)return qm(e,t,a);t.flags|=128}if(d=t.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),K(Mt,Mt.current),s)break;return null;case 22:return t.lanes=0,Nm(e,t,a,t.pendingProps);case 24:Ha(t,Ht,e.memoizedState.cache)}return xa(e,t,a)}function Ym(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Pt=!0;else{if(!Mf(e,a)&&(t.flags&128)===0)return Pt=!1,Gw(e,t,a);Pt=(e.flags&131072)!==0}else Pt=!1,Xe&&(t.flags&1048576)!==0&&wg(t,yl,t.index);switch(t.lanes=0,t.tag){case 16:e:{var s=t.pendingProps;if(e=Oi(t.elementType),t.type=e,typeof e=="function")Id(e)?(s=zi(e,s),t.tag=1,t=Bm(null,t,e,s,a)):(t.tag=0,t=kf(null,t,e,s,a));else{if(e!=null){var d=e.$$typeof;if(d===z){t.tag=11,t=zm(null,t,e,s,a);break e}else if(d===k){t.tag=14,t=Dm(null,t,e,s,a);break e}}throw t=Se(e)||e,Error(o(306,t,""))}}return t;case 0:return kf(e,t,t.type,t.pendingProps,a);case 1:return s=t.type,d=zi(s,t.pendingProps),Bm(e,t,s,d,a);case 3:e:{if(be(t,t.stateNode.containerInfo),e===null)throw Error(o(387));s=t.pendingProps;var p=t.memoizedState;d=p.element,Wd(e,t),Cl(t,s,null,a);var y=t.memoizedState;if(s=y.cache,Ha(t,Ht,s),s!==p.cache&&Vd(t,[Ht],a,!0),El(),s=y.element,p.isDehydrated)if(p={element:s,isDehydrated:!1,cache:y.cache},t.updateQueue.baseState=p,t.memoizedState=p,t.flags&256){t=Hm(e,t,s,a);break e}else if(s!==d){d=cr(Error(o(424)),t),bl(d),t=Hm(e,t,s,a);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,yt=hr(e.firstChild),Wt=t,Xe=!0,Ia=null,fr=!0,a=Ng(t,null,s,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Ti(),s===d){t=xa(e,t,a);break e}tn(e,t,s,a)}t=t.child}return t;case 26:return Tc(e,t),e===null?(a=tx(t.type,null,t.pendingProps,null))?t.memoizedState=a:Xe||(a=t.type,e=t.pendingProps,s=$c(de.current).createElement(a),s[Ie]=t,s[qe]=e,nn(s,a,e),Zt(s),t.stateNode=s):t.memoizedState=tx(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Be(t),e===null&&Xe&&(s=t.stateNode=J1(t.type,t.pendingProps,de.current),Wt=t,fr=!0,d=yt,Wa(t.type)?(pp=d,yt=hr(s.firstChild)):yt=d),tn(e,t,t.pendingProps.children,a),Tc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Xe&&((d=s=yt)&&(s=S_(s,t.type,t.pendingProps,fr),s!==null?(t.stateNode=s,Wt=t,yt=hr(s.firstChild),fr=!1,d=!0):d=!1),d||Ba(t)),Be(t),d=t.type,p=t.pendingProps,y=e!==null?e.memoizedProps:null,s=p.children,sp(d,p)?s=null:y!==null&&sp(d,y)&&(t.flags|=32),t.memoizedState!==null&&(d=lf(e,t,jw,null,null,a),Xl._currentValue=d),Tc(e,t),tn(e,t,s,a),t.child;case 6:return e===null&&Xe&&((e=a=yt)&&(a=w_(a,t.pendingProps,fr),a!==null?(t.stateNode=a,Wt=t,yt=null,e=!0):e=!1),e||Ba(t)),null;case 13:return $m(e,t,a);case 4:return be(t,t.stateNode.containerInfo),s=t.pendingProps,e===null?t.child=Ai(t,null,s,a):tn(e,t,s,a),t.child;case 11:return zm(e,t,t.type,t.pendingProps,a);case 7:return tn(e,t,t.pendingProps,a),t.child;case 8:return tn(e,t,t.pendingProps.children,a),t.child;case 12:return tn(e,t,t.pendingProps.children,a),t.child;case 10:return s=t.pendingProps,Ha(t,t.type,s.value),tn(e,t,s.children,a),t.child;case 9:return d=t.type._context,s=t.pendingProps.children,Ci(t),d=en(d),s=s(d),t.flags|=1,tn(e,t,s,a),t.child;case 14:return Dm(e,t,t.type,t.pendingProps,a);case 15:return Mm(e,t,t.type,t.pendingProps,a);case 19:return qm(e,t,a);case 31:return Yw(e,t,a);case 22:return Nm(e,t,a,t.pendingProps);case 24:return Ci(t),s=en(Ht),e===null?(d=Zd(),d===null&&(d=dt,p=Fd(),d.pooledCache=p,p.refCount++,p!==null&&(d.pooledCacheLanes|=a),d=p),t.memoizedState={parent:s,cache:d},Jd(t),Ha(t,Ht,d)):((e.lanes&a)!==0&&(Wd(e,t),Cl(t,null,null,a),El()),d=e.memoizedState,p=t.memoizedState,d.parent!==s?(d={parent:s,cache:s},t.memoizedState=d,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=d),Ha(t,Ht,s)):(s=p.cache,Ha(t,Ht,s),s!==d.cache&&Vd(t,[Ht],a,!0))),tn(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(o(156,t.tag))}function ya(e){e.flags|=4}function Nf(e,t,a,s,d){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(d&335544128)===d)if(e.stateNode.complete)e.flags|=8192;else if(x1())e.flags|=8192;else throw Ri=cc,Kd}else e.flags&=-16777217}function Gm(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!ox(t))if(x1())e.flags|=8192;else throw Ri=cc,Kd}function Cc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?fe():536870912,e.lanes|=t,Co|=t)}function zl(e,t){if(!Xe)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function bt(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,s=0;if(t)for(var d=e.child;d!==null;)a|=d.lanes|d.childLanes,s|=d.subtreeFlags&65011712,s|=d.flags&65011712,d.return=e,d=d.sibling;else for(d=e.child;d!==null;)a|=d.lanes|d.childLanes,s|=d.subtreeFlags,s|=d.flags,d.return=e,d=d.sibling;return e.subtreeFlags|=s,e.childLanes=a,t}function Xw(e,t,a){var s=t.pendingProps;switch(Pd(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return bt(t),null;case 1:return bt(t),null;case 3:return a=t.stateNode,s=null,e!==null&&(s=e.memoizedState.cache),t.memoizedState.cache!==s&&(t.flags|=2048),ha(Ht),ke(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(po(t)?ya(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Yd())),bt(t),null;case 26:var d=t.type,p=t.memoizedState;return e===null?(ya(t),p!==null?(bt(t),Gm(t,p)):(bt(t),Nf(t,d,null,s,a))):p?p!==e.memoizedState?(ya(t),bt(t),Gm(t,p)):(bt(t),t.flags&=-16777217):(e=e.memoizedProps,e!==s&&ya(t),bt(t),Nf(t,d,e,s,a)),null;case 27:if(ze(t),a=de.current,d=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==s&&ya(t);else{if(!s){if(t.stateNode===null)throw Error(o(166));return bt(t),null}e=oe.current,po(t)?Tg(t):(e=J1(d,s,a),t.stateNode=e,ya(t))}return bt(t),null;case 5:if(ze(t),d=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==s&&ya(t);else{if(!s){if(t.stateNode===null)throw Error(o(166));return bt(t),null}if(p=oe.current,po(t))Tg(t);else{var y=$c(de.current);switch(p){case 1:p=y.createElementNS("http://www.w3.org/2000/svg",d);break;case 2:p=y.createElementNS("http://www.w3.org/1998/Math/MathML",d);break;default:switch(d){case"svg":p=y.createElementNS("http://www.w3.org/2000/svg",d);break;case"math":p=y.createElementNS("http://www.w3.org/1998/Math/MathML",d);break;case"script":p=y.createElement("div"),p.innerHTML="<script><\/script>",p=p.removeChild(p.firstChild);break;case"select":p=typeof s.is=="string"?y.createElement("select",{is:s.is}):y.createElement("select"),s.multiple?p.multiple=!0:s.size&&(p.size=s.size);break;default:p=typeof s.is=="string"?y.createElement(d,{is:s.is}):y.createElement(d)}}p[Ie]=t,p[qe]=s;e:for(y=t.child;y!==null;){if(y.tag===5||y.tag===6)p.appendChild(y.stateNode);else if(y.tag!==4&&y.tag!==27&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===t)break e;for(;y.sibling===null;){if(y.return===null||y.return===t)break e;y=y.return}y.sibling.return=y.return,y=y.sibling}t.stateNode=p;e:switch(nn(p,d,s),d){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}s&&ya(t)}}return bt(t),Nf(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==s&&ya(t);else{if(typeof s!="string"&&t.stateNode===null)throw Error(o(166));if(e=de.current,po(t)){if(e=t.stateNode,a=t.memoizedProps,s=null,d=Wt,d!==null)switch(d.tag){case 27:case 5:s=d.memoizedProps}e[Ie]=t,e=!!(e.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||$1(e.nodeValue,a)),e||Ba(t,!0)}else e=$c(e).createTextNode(s),e[Ie]=t,t.stateNode=e}return bt(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(s=po(t),a!==null){if(e===null){if(!s)throw Error(o(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(557));e[Ie]=t}else Ti(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;bt(t),e=!1}else a=Yd(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(Pn(t),t):(Pn(t),null);if((t.flags&128)!==0)throw Error(o(558))}return bt(t),null;case 13:if(s=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(d=po(t),s!==null&&s.dehydrated!==null){if(e===null){if(!d)throw Error(o(318));if(d=t.memoizedState,d=d!==null?d.dehydrated:null,!d)throw Error(o(317));d[Ie]=t}else Ti(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;bt(t),d=!1}else d=Yd(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=d),d=!0;if(!d)return t.flags&256?(Pn(t),t):(Pn(t),null)}return Pn(t),(t.flags&128)!==0?(t.lanes=a,t):(a=s!==null,e=e!==null&&e.memoizedState!==null,a&&(s=t.child,d=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(d=s.alternate.memoizedState.cachePool.pool),p=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(p=s.memoizedState.cachePool.pool),p!==d&&(s.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),Cc(t,t.updateQueue),bt(t),null);case 4:return ke(),e===null&&rp(t.stateNode.containerInfo),bt(t),null;case 10:return ha(t.type),bt(t),null;case 19:if(Y(Mt),s=t.memoizedState,s===null)return bt(t),null;if(d=(t.flags&128)!==0,p=s.rendering,p===null)if(d)zl(s,!1);else{if(zt!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(p=pc(e),p!==null){for(t.flags|=128,zl(s,!1),e=p.updateQueue,t.updateQueue=e,Cc(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)bg(a,e),a=a.sibling;return K(Mt,Mt.current&1|2),Xe&&fa(t,s.treeForkCount),t.child}e=e.sibling}s.tail!==null&&Fe()>Lc&&(t.flags|=128,d=!0,zl(s,!1),t.lanes=4194304)}else{if(!d)if(e=pc(p),e!==null){if(t.flags|=128,d=!0,e=e.updateQueue,t.updateQueue=e,Cc(t,e),zl(s,!0),s.tail===null&&s.tailMode==="hidden"&&!p.alternate&&!Xe)return bt(t),null}else 2*Fe()-s.renderingStartTime>Lc&&a!==536870912&&(t.flags|=128,d=!0,zl(s,!1),t.lanes=4194304);s.isBackwards?(p.sibling=t.child,t.child=p):(e=s.last,e!==null?e.sibling=p:t.child=p,s.last=p)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Fe(),e.sibling=null,a=Mt.current,K(Mt,d?a&1|2:a&1),Xe&&fa(t,s.treeForkCount),e):(bt(t),null);case 22:case 23:return Pn(t),rf(),s=t.memoizedState!==null,e!==null?e.memoizedState!==null!==s&&(t.flags|=8192):s&&(t.flags|=8192),s?(a&536870912)!==0&&(t.flags&128)===0&&(bt(t),t.subtreeFlags&6&&(t.flags|=8192)):bt(t),a=t.updateQueue,a!==null&&Cc(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),s=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),s!==a&&(t.flags|=2048),e!==null&&Y(ki),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),ha(Ht),bt(t),null;case 25:return null;case 30:return null}throw Error(o(156,t.tag))}function Vw(e,t){switch(Pd(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ha(Ht),ke(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return ze(t),null;case 31:if(t.memoizedState!==null){if(Pn(t),t.alternate===null)throw Error(o(340));Ti()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Pn(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));Ti()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Y(Mt),null;case 4:return ke(),null;case 10:return ha(t.type),null;case 22:case 23:return Pn(t),rf(),e!==null&&Y(ki),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ha(Ht),null;case 25:return null;default:return null}}function Xm(e,t){switch(Pd(t),t.tag){case 3:ha(Ht),ke();break;case 26:case 27:case 5:ze(t);break;case 4:ke();break;case 31:t.memoizedState!==null&&Pn(t);break;case 13:Pn(t);break;case 19:Y(Mt);break;case 10:ha(t.type);break;case 22:case 23:Pn(t),rf(),e!==null&&Y(ki);break;case 24:ha(Ht)}}function Dl(e,t){try{var a=t.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var d=s.next;a=d;do{if((a.tag&e)===e){s=void 0;var p=a.create,y=a.inst;s=p(),y.destroy=s}a=a.next}while(a!==d)}}catch(O){rt(t,t.return,O)}}function Xa(e,t,a){try{var s=t.updateQueue,d=s!==null?s.lastEffect:null;if(d!==null){var p=d.next;s=p;do{if((s.tag&e)===e){var y=s.inst,O=y.destroy;if(O!==void 0){y.destroy=void 0,d=t;var B=a,F=O;try{F()}catch(ae){rt(d,B,ae)}}}s=s.next}while(s!==p)}}catch(ae){rt(t,t.return,ae)}}function Vm(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{Ug(t,a)}catch(s){rt(e,e.return,s)}}}function Fm(e,t,a){a.props=zi(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(s){rt(e,t,s)}}function Ml(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var s=e.stateNode;break;case 30:s=e.stateNode;break;default:s=e.stateNode}typeof a=="function"?e.refCleanup=a(s):a.current=s}}catch(d){rt(e,t,d)}}function Yr(e,t){var a=e.ref,s=e.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(d){rt(e,t,d)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(d){rt(e,t,d)}else a.current=null}function Qm(e){var t=e.type,a=e.memoizedProps,s=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break e;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(d){rt(e,e.return,d)}}function jf(e,t,a){try{var s=e.stateNode;g_(s,e.type,a,t),s[qe]=t}catch(d){rt(e,e.return,d)}}function Zm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Wa(e.type)||e.tag===4}function Uf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Zm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Wa(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function If(e,t,a){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=ca));else if(s!==4&&(s===27&&Wa(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(If(e,t,a),e=e.sibling;e!==null;)If(e,t,a),e=e.sibling}function kc(e,t,a){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(s!==4&&(s===27&&Wa(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(kc(e,t,a),e=e.sibling;e!==null;)kc(e,t,a),e=e.sibling}function Km(e){var t=e.stateNode,a=e.memoizedProps;try{for(var s=e.type,d=t.attributes;d.length;)t.removeAttributeNode(d[0]);nn(t,s,a),t[Ie]=e,t[qe]=a}catch(p){rt(e,e.return,p)}}var ba=!1,qt=!1,Bf=!1,Jm=typeof WeakSet=="function"?WeakSet:Set,Kt=null;function Fw(e,t){if(e=e.containerInfo,op=Fc,e=ug(e),Ld(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var d=s.anchorOffset,p=s.focusNode;s=s.focusOffset;try{a.nodeType,p.nodeType}catch{a=null;break e}var y=0,O=-1,B=-1,F=0,ae=0,se=e,Z=null;t:for(;;){for(var W;se!==a||d!==0&&se.nodeType!==3||(O=y+d),se!==p||s!==0&&se.nodeType!==3||(B=y+s),se.nodeType===3&&(y+=se.nodeValue.length),(W=se.firstChild)!==null;)Z=se,se=W;for(;;){if(se===e)break t;if(Z===a&&++F===d&&(O=y),Z===p&&++ae===s&&(B=y),(W=se.nextSibling)!==null)break;se=Z,Z=se.parentNode}se=W}a=O===-1||B===-1?null:{start:O,end:B}}else a=null}a=a||{start:0,end:0}}else a=null;for(lp={focusedElem:e,selectionRange:a},Fc=!1,Kt=t;Kt!==null;)if(t=Kt,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Kt=e;else for(;Kt!==null;){switch(t=Kt,p=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)d=e[a],d.ref.impl=d.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&p!==null){e=void 0,a=t,d=p.memoizedProps,p=p.memoizedState,s=a.stateNode;try{var Te=zi(a.type,d);e=s.getSnapshotBeforeUpdate(Te,p),s.__reactInternalSnapshotBeforeUpdate=e}catch(Re){rt(a,a.return,Re)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)up(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":up(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(o(163))}if(e=t.sibling,e!==null){e.return=t.return,Kt=e;break}Kt=t.return}}function Wm(e,t,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:Sa(e,a),s&4&&Dl(5,a);break;case 1:if(Sa(e,a),s&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(y){rt(a,a.return,y)}else{var d=zi(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(d,t,e.__reactInternalSnapshotBeforeUpdate)}catch(y){rt(a,a.return,y)}}s&64&&Vm(a),s&512&&Ml(a,a.return);break;case 3:if(Sa(e,a),s&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Ug(e,t)}catch(y){rt(a,a.return,y)}}break;case 27:t===null&&s&4&&Km(a);case 26:case 5:Sa(e,a),t===null&&s&4&&Qm(a),s&512&&Ml(a,a.return);break;case 12:Sa(e,a);break;case 31:Sa(e,a),s&4&&n1(e,a);break;case 13:Sa(e,a),s&4&&r1(e,a),s&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=r_.bind(null,a),__(e,a))));break;case 22:if(s=a.memoizedState!==null||ba,!s){t=t!==null&&t.memoizedState!==null||qt,d=ba;var p=qt;ba=s,(qt=t)&&!p?wa(e,a,(a.subtreeFlags&8772)!==0):Sa(e,a),ba=d,qt=p}break;case 30:break;default:Sa(e,a)}}function e1(e){var t=e.alternate;t!==null&&(e.alternate=null,e1(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&hd(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var St=null,Tn=!1;function va(e,t,a){for(a=a.child;a!==null;)t1(e,t,a),a=a.sibling}function t1(e,t,a){if(Et&&typeof Et.onCommitFiberUnmount=="function")try{Et.onCommitFiberUnmount(kr,a)}catch{}switch(a.tag){case 26:qt||Yr(a,t),va(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:qt||Yr(a,t);var s=St,d=Tn;Wa(a.type)&&(St=a.stateNode,Tn=!1),va(e,t,a),ql(a.stateNode),St=s,Tn=d;break;case 5:qt||Yr(a,t);case 6:if(s=St,d=Tn,St=null,va(e,t,a),St=s,Tn=d,St!==null)if(Tn)try{(St.nodeType===9?St.body:St.nodeName==="HTML"?St.ownerDocument.body:St).removeChild(a.stateNode)}catch(p){rt(a,t,p)}else try{St.removeChild(a.stateNode)}catch(p){rt(a,t,p)}break;case 18:St!==null&&(Tn?(e=St,V1(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Mo(e)):V1(St,a.stateNode));break;case 4:s=St,d=Tn,St=a.stateNode.containerInfo,Tn=!0,va(e,t,a),St=s,Tn=d;break;case 0:case 11:case 14:case 15:Xa(2,a,t),qt||Xa(4,a,t),va(e,t,a);break;case 1:qt||(Yr(a,t),s=a.stateNode,typeof s.componentWillUnmount=="function"&&Fm(a,t,s)),va(e,t,a);break;case 21:va(e,t,a);break;case 22:qt=(s=qt)||a.memoizedState!==null,va(e,t,a),qt=s;break;default:va(e,t,a)}}function n1(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Mo(e)}catch(a){rt(t,t.return,a)}}}function r1(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Mo(e)}catch(a){rt(t,t.return,a)}}function Qw(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Jm),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Jm),t;default:throw Error(o(435,e.tag))}}function Oc(e,t){var a=Qw(e);t.forEach(function(s){if(!a.has(s)){a.add(s);var d=a_.bind(null,e,s);s.then(d,d)}})}function En(e,t){var a=t.deletions;if(a!==null)for(var s=0;s<a.length;s++){var d=a[s],p=e,y=t,O=y;e:for(;O!==null;){switch(O.tag){case 27:if(Wa(O.type)){St=O.stateNode,Tn=!1;break e}break;case 5:St=O.stateNode,Tn=!1;break e;case 3:case 4:St=O.stateNode.containerInfo,Tn=!0;break e}O=O.return}if(St===null)throw Error(o(160));t1(p,y,d),St=null,Tn=!1,p=d.alternate,p!==null&&(p.return=null),d.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)a1(t,e),t=t.sibling}var Dr=null;function a1(e,t){var a=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:En(t,e),Cn(e),s&4&&(Xa(3,e,e.return),Dl(3,e),Xa(5,e,e.return));break;case 1:En(t,e),Cn(e),s&512&&(qt||a===null||Yr(a,a.return)),s&64&&ba&&(e=e.updateQueue,e!==null&&(s=e.callbacks,s!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var d=Dr;if(En(t,e),Cn(e),s&512&&(qt||a===null||Yr(a,a.return)),s&4){var p=a!==null?a.memoizedState:null;if(s=e.memoizedState,a===null)if(s===null)if(e.stateNode===null){e:{s=e.type,a=e.memoizedProps,d=d.ownerDocument||d;t:switch(s){case"title":p=d.getElementsByTagName("title")[0],(!p||p[ll]||p[Ie]||p.namespaceURI==="http://www.w3.org/2000/svg"||p.hasAttribute("itemprop"))&&(p=d.createElement(s),d.head.insertBefore(p,d.querySelector("head > title"))),nn(p,s,a),p[Ie]=e,Zt(p),s=p;break e;case"link":var y=ax("link","href",d).get(s+(a.href||""));if(y){for(var O=0;O<y.length;O++)if(p=y[O],p.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&p.getAttribute("rel")===(a.rel==null?null:a.rel)&&p.getAttribute("title")===(a.title==null?null:a.title)&&p.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){y.splice(O,1);break t}}p=d.createElement(s),nn(p,s,a),d.head.appendChild(p);break;case"meta":if(y=ax("meta","content",d).get(s+(a.content||""))){for(O=0;O<y.length;O++)if(p=y[O],p.getAttribute("content")===(a.content==null?null:""+a.content)&&p.getAttribute("name")===(a.name==null?null:a.name)&&p.getAttribute("property")===(a.property==null?null:a.property)&&p.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&p.getAttribute("charset")===(a.charSet==null?null:a.charSet)){y.splice(O,1);break t}}p=d.createElement(s),nn(p,s,a),d.head.appendChild(p);break;default:throw Error(o(468,s))}p[Ie]=e,Zt(p),s=p}e.stateNode=s}else ix(d,e.type,e.stateNode);else e.stateNode=rx(d,s,e.memoizedProps);else p!==s?(p===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):p.count--,s===null?ix(d,e.type,e.stateNode):rx(d,s,e.memoizedProps)):s===null&&e.stateNode!==null&&jf(e,e.memoizedProps,a.memoizedProps)}break;case 27:En(t,e),Cn(e),s&512&&(qt||a===null||Yr(a,a.return)),a!==null&&s&4&&jf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(En(t,e),Cn(e),s&512&&(qt||a===null||Yr(a,a.return)),e.flags&32){d=e.stateNode;try{no(d,"")}catch(Te){rt(e,e.return,Te)}}s&4&&e.stateNode!=null&&(d=e.memoizedProps,jf(e,d,a!==null?a.memoizedProps:d)),s&1024&&(Bf=!0);break;case 6:if(En(t,e),Cn(e),s&4){if(e.stateNode===null)throw Error(o(162));s=e.memoizedProps,a=e.stateNode;try{a.nodeValue=s}catch(Te){rt(e,e.return,Te)}}break;case 3:if(Yc=null,d=Dr,Dr=Pc(t.containerInfo),En(t,e),Dr=d,Cn(e),s&4&&a!==null&&a.memoizedState.isDehydrated)try{Mo(t.containerInfo)}catch(Te){rt(e,e.return,Te)}Bf&&(Bf=!1,i1(e));break;case 4:s=Dr,Dr=Pc(e.stateNode.containerInfo),En(t,e),Cn(e),Dr=s;break;case 12:En(t,e),Cn(e);break;case 31:En(t,e),Cn(e),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,Oc(e,s)));break;case 13:En(t,e),Cn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Ac=Fe()),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,Oc(e,s)));break;case 22:d=e.memoizedState!==null;var B=a!==null&&a.memoizedState!==null,F=ba,ae=qt;if(ba=F||d,qt=ae||B,En(t,e),qt=ae,ba=F,Cn(e),s&8192)e:for(t=e.stateNode,t._visibility=d?t._visibility&-2:t._visibility|1,d&&(a===null||B||ba||qt||Di(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){B=a=t;try{if(p=B.stateNode,d)y=p.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{O=B.stateNode;var se=B.memoizedProps.style,Z=se!=null&&se.hasOwnProperty("display")?se.display:null;O.style.display=Z==null||typeof Z=="boolean"?"":(""+Z).trim()}}catch(Te){rt(B,B.return,Te)}}}else if(t.tag===6){if(a===null){B=t;try{B.stateNode.nodeValue=d?"":B.memoizedProps}catch(Te){rt(B,B.return,Te)}}}else if(t.tag===18){if(a===null){B=t;try{var W=B.stateNode;d?F1(W,!0):F1(B.stateNode,!1)}catch(Te){rt(B,B.return,Te)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}s&4&&(s=e.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,Oc(e,a))));break;case 19:En(t,e),Cn(e),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,Oc(e,s)));break;case 30:break;case 21:break;default:En(t,e),Cn(e)}}function Cn(e){var t=e.flags;if(t&2){try{for(var a,s=e.return;s!==null;){if(Zm(s)){a=s;break}s=s.return}if(a==null)throw Error(o(160));switch(a.tag){case 27:var d=a.stateNode,p=Uf(e);kc(e,p,d);break;case 5:var y=a.stateNode;a.flags&32&&(no(y,""),a.flags&=-33);var O=Uf(e);kc(e,O,y);break;case 3:case 4:var B=a.stateNode.containerInfo,F=Uf(e);If(e,F,B);break;default:throw Error(o(161))}}catch(ae){rt(e,e.return,ae)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function i1(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;i1(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Sa(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Wm(e,t.alternate,t),t=t.sibling}function Di(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Xa(4,t,t.return),Di(t);break;case 1:Yr(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&Fm(t,t.return,a),Di(t);break;case 27:ql(t.stateNode);case 26:case 5:Yr(t,t.return),Di(t);break;case 22:t.memoizedState===null&&Di(t);break;case 30:Di(t);break;default:Di(t)}e=e.sibling}}function wa(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var s=t.alternate,d=e,p=t,y=p.flags;switch(p.tag){case 0:case 11:case 15:wa(d,p,a),Dl(4,p);break;case 1:if(wa(d,p,a),s=p,d=s.stateNode,typeof d.componentDidMount=="function")try{d.componentDidMount()}catch(F){rt(s,s.return,F)}if(s=p,d=s.updateQueue,d!==null){var O=s.stateNode;try{var B=d.shared.hiddenCallbacks;if(B!==null)for(d.shared.hiddenCallbacks=null,d=0;d<B.length;d++)jg(B[d],O)}catch(F){rt(s,s.return,F)}}a&&y&64&&Vm(p),Ml(p,p.return);break;case 27:Km(p);case 26:case 5:wa(d,p,a),a&&s===null&&y&4&&Qm(p),Ml(p,p.return);break;case 12:wa(d,p,a);break;case 31:wa(d,p,a),a&&y&4&&n1(d,p);break;case 13:wa(d,p,a),a&&y&4&&r1(d,p);break;case 22:p.memoizedState===null&&wa(d,p,a),Ml(p,p.return);break;case 30:break;default:wa(d,p,a)}t=t.sibling}}function Hf(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&vl(a))}function $f(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&vl(e))}function Mr(e,t,a,s){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)o1(e,t,a,s),t=t.sibling}function o1(e,t,a,s){var d=t.flags;switch(t.tag){case 0:case 11:case 15:Mr(e,t,a,s),d&2048&&Dl(9,t);break;case 1:Mr(e,t,a,s);break;case 3:Mr(e,t,a,s),d&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&vl(e)));break;case 12:if(d&2048){Mr(e,t,a,s),e=t.stateNode;try{var p=t.memoizedProps,y=p.id,O=p.onPostCommit;typeof O=="function"&&O(y,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(B){rt(t,t.return,B)}}else Mr(e,t,a,s);break;case 31:Mr(e,t,a,s);break;case 13:Mr(e,t,a,s);break;case 23:break;case 22:p=t.stateNode,y=t.alternate,t.memoizedState!==null?p._visibility&2?Mr(e,t,a,s):Nl(e,t):p._visibility&2?Mr(e,t,a,s):(p._visibility|=2,_o(e,t,a,s,(t.subtreeFlags&10256)!==0||!1)),d&2048&&Hf(y,t);break;case 24:Mr(e,t,a,s),d&2048&&$f(t.alternate,t);break;default:Mr(e,t,a,s)}}function _o(e,t,a,s,d){for(d=d&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var p=e,y=t,O=a,B=s,F=y.flags;switch(y.tag){case 0:case 11:case 15:_o(p,y,O,B,d),Dl(8,y);break;case 23:break;case 22:var ae=y.stateNode;y.memoizedState!==null?ae._visibility&2?_o(p,y,O,B,d):Nl(p,y):(ae._visibility|=2,_o(p,y,O,B,d)),d&&F&2048&&Hf(y.alternate,y);break;case 24:_o(p,y,O,B,d),d&&F&2048&&$f(y.alternate,y);break;default:_o(p,y,O,B,d)}t=t.sibling}}function Nl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,s=t,d=s.flags;switch(s.tag){case 22:Nl(a,s),d&2048&&Hf(s.alternate,s);break;case 24:Nl(a,s),d&2048&&$f(s.alternate,s);break;default:Nl(a,s)}t=t.sibling}}var jl=8192;function To(e,t,a){if(e.subtreeFlags&jl)for(e=e.child;e!==null;)l1(e,t,a),e=e.sibling}function l1(e,t,a){switch(e.tag){case 26:To(e,t,a),e.flags&jl&&e.memoizedState!==null&&N_(a,Dr,e.memoizedState,e.memoizedProps);break;case 5:To(e,t,a);break;case 3:case 4:var s=Dr;Dr=Pc(e.stateNode.containerInfo),To(e,t,a),Dr=s;break;case 22:e.memoizedState===null&&(s=e.alternate,s!==null&&s.memoizedState!==null?(s=jl,jl=16777216,To(e,t,a),jl=s):To(e,t,a));break;default:To(e,t,a)}}function s1(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Ul(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var s=t[a];Kt=s,u1(s,e)}s1(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)c1(e),e=e.sibling}function c1(e){switch(e.tag){case 0:case 11:case 15:Ul(e),e.flags&2048&&Xa(9,e,e.return);break;case 3:Ul(e);break;case 12:Ul(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Rc(e)):Ul(e);break;default:Ul(e)}}function Rc(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var s=t[a];Kt=s,u1(s,e)}s1(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Xa(8,t,t.return),Rc(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Rc(t));break;default:Rc(t)}e=e.sibling}}function u1(e,t){for(;Kt!==null;){var a=Kt;switch(a.tag){case 0:case 11:case 15:Xa(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:vl(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,Kt=s;else e:for(a=e;Kt!==null;){s=Kt;var d=s.sibling,p=s.return;if(e1(s),s===a){Kt=null;break e}if(d!==null){d.return=p,Kt=d;break e}Kt=p}}}var Zw={getCacheForType:function(e){var t=en(Ht),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return en(Ht).controller.signal}},Kw=typeof WeakMap=="function"?WeakMap:Map,Ke=0,dt=null,$e=null,Ye=0,nt=0,qn=null,Va=!1,Eo=!1,Pf=!1,_a=0,zt=0,Fa=0,Mi=0,qf=0,Yn=0,Co=0,Il=null,kn=null,Yf=!1,Ac=0,d1=0,Lc=1/0,zc=null,Qa=null,Vt=0,Za=null,ko=null,Ta=0,Gf=0,Xf=null,f1=null,Bl=0,Vf=null;function Gn(){return(Ke&2)!==0&&Ye!==0?Ye&-Ye:U.T!==null?Wf():Me()}function p1(){if(Yn===0)if((Ye&536870912)===0||Xe){var e=Rr;Rr<<=1,(Rr&3932160)===0&&(Rr=262144),Yn=e}else Yn=536870912;return e=$n.current,e!==null&&(e.flags|=32),Yn}function On(e,t,a){(e===dt&&(nt===2||nt===9)||e.cancelPendingCommit!==null)&&(Oo(e,0),Ka(e,Ye,Yn,!1)),me(e,a),((Ke&2)===0||e!==dt)&&(e===dt&&((Ke&2)===0&&(Mi|=a),zt===4&&Ka(e,Ye,Yn,!1)),Gr(e))}function h1(e,t,a){if((Ke&6)!==0)throw Error(o(327));var s=!a&&(t&127)===0&&(t&e.expiredLanes)===0||ir(e,t),d=s?e_(e,t):Qf(e,t,!0),p=s;do{if(d===0){Eo&&!s&&Ka(e,t,0,!1);break}else{if(a=e.current.alternate,p&&!Jw(a)){d=Qf(e,t,!1),p=!1;continue}if(d===2){if(p=t,e.errorRecoveryDisabledLanes&p)var y=0;else y=e.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){t=y;e:{var O=e;d=Il;var B=O.current.memoizedState.isDehydrated;if(B&&(Oo(O,y).flags|=256),y=Qf(O,y,!1),y!==2){if(Pf&&!B){O.errorRecoveryDisabledLanes|=p,Mi|=p,d=4;break e}p=kn,kn=d,p!==null&&(kn===null?kn=p:kn.push.apply(kn,p))}d=y}if(p=!1,d!==2)continue}}if(d===1){Oo(e,0),Ka(e,t,0,!0);break}e:{switch(s=e,p=d,p){case 0:case 1:throw Error(o(345));case 4:if((t&4194048)!==t)break;case 6:Ka(s,t,Yn,!Va);break e;case 2:kn=null;break;case 3:case 5:break;default:throw Error(o(329))}if((t&62914560)===t&&(d=Ac+300-Fe(),10<d)){if(Ka(s,t,Yn,!Va),Lr(s,0,!0)!==0)break e;Ta=t,s.timeoutHandle=G1(g1.bind(null,s,a,kn,zc,Yf,t,Yn,Mi,Co,Va,p,"Throttled",-0,0),d);break e}g1(s,a,kn,zc,Yf,t,Yn,Mi,Co,Va,p,null,-0,0)}}break}while(!0);Gr(e)}function g1(e,t,a,s,d,p,y,O,B,F,ae,se,Z,W){if(e.timeoutHandle=-1,se=t.subtreeFlags,se&8192||(se&16785408)===16785408){se={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ca},l1(t,p,se);var Te=(p&62914560)===p?Ac-Fe():(p&4194048)===p?d1-Fe():0;if(Te=j_(se,Te),Te!==null){Ta=p,e.cancelPendingCommit=Te(_1.bind(null,e,t,p,a,s,d,y,O,B,ae,se,null,Z,W)),Ka(e,p,y,!F);return}}_1(e,t,p,a,s,d,y,O,B)}function Jw(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var d=a[s],p=d.getSnapshot;d=d.value;try{if(!Bn(p(),d))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ka(e,t,a,s){t&=~qf,t&=~Mi,e.suspendedLanes|=t,e.pingedLanes&=~t,s&&(e.warmLanes|=t),s=e.expirationTimes;for(var d=t;0<d;){var p=31-Bt(d),y=1<<p;s[p]=-1,d&=~y}a!==0&&He(e,a,t)}function Dc(){return(Ke&6)===0?(Hl(0),!1):!0}function Ff(){if($e!==null){if(nt===0)var e=$e.return;else e=$e,pa=Ei=null,uf(e),yo=null,wl=0,e=$e;for(;e!==null;)Xm(e.alternate,e),e=e.return;$e=null}}function Oo(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,y_(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Ta=0,Ff(),dt=e,$e=a=da(e.current,null),Ye=t,nt=0,qn=null,Va=!1,Eo=ir(e,t),Pf=!1,Co=Yn=qf=Mi=Fa=zt=0,kn=Il=null,Yf=!1,(t&8)!==0&&(t|=t&32);var s=e.entangledLanes;if(s!==0)for(e=e.entanglements,s&=t;0<s;){var d=31-Bt(s),p=1<<d;t|=e[d],s&=~p}return _a=t,ec(),a}function m1(e,t){Ne=null,U.H=Al,t===xo||t===sc?(t=zg(),nt=3):t===Kd?(t=zg(),nt=4):nt=t===Cf?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,qn=t,$e===null&&(zt=1,wc(e,cr(t,e.current)))}function x1(){var e=$n.current;return e===null?!0:(Ye&4194048)===Ye?pr===null:(Ye&62914560)===Ye||(Ye&536870912)!==0?e===pr:!1}function y1(){var e=U.H;return U.H=Al,e===null?Al:e}function b1(){var e=U.A;return U.A=Zw,e}function Mc(){zt=4,Va||(Ye&4194048)!==Ye&&$n.current!==null||(Eo=!0),(Fa&134217727)===0&&(Mi&134217727)===0||dt===null||Ka(dt,Ye,Yn,!1)}function Qf(e,t,a){var s=Ke;Ke|=2;var d=y1(),p=b1();(dt!==e||Ye!==t)&&(zc=null,Oo(e,t)),t=!1;var y=zt;e:do try{if(nt!==0&&$e!==null){var O=$e,B=qn;switch(nt){case 8:Ff(),y=6;break e;case 3:case 2:case 9:case 6:$n.current===null&&(t=!0);var F=nt;if(nt=0,qn=null,Ro(e,O,B,F),a&&Eo){y=0;break e}break;default:F=nt,nt=0,qn=null,Ro(e,O,B,F)}}Ww(),y=zt;break}catch(ae){m1(e,ae)}while(!0);return t&&e.shellSuspendCounter++,pa=Ei=null,Ke=s,U.H=d,U.A=p,$e===null&&(dt=null,Ye=0,ec()),y}function Ww(){for(;$e!==null;)v1($e)}function e_(e,t){var a=Ke;Ke|=2;var s=y1(),d=b1();dt!==e||Ye!==t?(zc=null,Lc=Fe()+500,Oo(e,t)):Eo=ir(e,t);e:do try{if(nt!==0&&$e!==null){t=$e;var p=qn;t:switch(nt){case 1:nt=0,qn=null,Ro(e,t,p,1);break;case 2:case 9:if(Ag(p)){nt=0,qn=null,S1(t);break}t=function(){nt!==2&&nt!==9||dt!==e||(nt=7),Gr(e)},p.then(t,t);break e;case 3:nt=7;break e;case 4:nt=5;break e;case 7:Ag(p)?(nt=0,qn=null,S1(t)):(nt=0,qn=null,Ro(e,t,p,7));break;case 5:var y=null;switch($e.tag){case 26:y=$e.memoizedState;case 5:case 27:var O=$e;if(y?ox(y):O.stateNode.complete){nt=0,qn=null;var B=O.sibling;if(B!==null)$e=B;else{var F=O.return;F!==null?($e=F,Nc(F)):$e=null}break t}}nt=0,qn=null,Ro(e,t,p,5);break;case 6:nt=0,qn=null,Ro(e,t,p,6);break;case 8:Ff(),zt=6;break e;default:throw Error(o(462))}}t_();break}catch(ae){m1(e,ae)}while(!0);return pa=Ei=null,U.H=s,U.A=d,Ke=a,$e!==null?0:(dt=null,Ye=0,ec(),zt)}function t_(){for(;$e!==null&&!tt();)v1($e)}function v1(e){var t=Ym(e.alternate,e,_a);e.memoizedProps=e.pendingProps,t===null?Nc(e):$e=t}function S1(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=Im(a,t,t.pendingProps,t.type,void 0,Ye);break;case 11:t=Im(a,t,t.pendingProps,t.type.render,t.ref,Ye);break;case 5:uf(t);default:Xm(a,t),t=$e=bg(t,_a),t=Ym(a,t,_a)}e.memoizedProps=e.pendingProps,t===null?Nc(e):$e=t}function Ro(e,t,a,s){pa=Ei=null,uf(t),yo=null,wl=0;var d=t.return;try{if(qw(e,d,t,a,Ye)){zt=1,wc(e,cr(a,e.current)),$e=null;return}}catch(p){if(d!==null)throw $e=d,p;zt=1,wc(e,cr(a,e.current)),$e=null;return}t.flags&32768?(Xe||s===1?e=!0:Eo||(Ye&536870912)!==0?e=!1:(Va=e=!0,(s===2||s===9||s===3||s===6)&&(s=$n.current,s!==null&&s.tag===13&&(s.flags|=16384))),w1(t,e)):Nc(t)}function Nc(e){var t=e;do{if((t.flags&32768)!==0){w1(t,Va);return}e=t.return;var a=Xw(t.alternate,t,_a);if(a!==null){$e=a;return}if(t=t.sibling,t!==null){$e=t;return}$e=t=e}while(t!==null);zt===0&&(zt=5)}function w1(e,t){do{var a=Vw(e.alternate,e);if(a!==null){a.flags&=32767,$e=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){$e=e;return}$e=e=a}while(e!==null);zt=6,$e=null}function _1(e,t,a,s,d,p,y,O,B){e.cancelPendingCommit=null;do jc();while(Vt!==0);if((Ke&6)!==0)throw Error(o(327));if(t!==null){if(t===e.current)throw Error(o(177));if(p=t.lanes|t.childLanes,p|=jd,xe(e,a,p,y,O,B),e===dt&&($e=dt=null,Ye=0),ko=t,Za=e,Ta=a,Gf=p,Xf=d,f1=s,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,i_(sn,function(){return O1(),null})):(e.callbackNode=null,e.callbackPriority=0),s=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||s){s=U.T,U.T=null,d=H.p,H.p=2,y=Ke,Ke|=4;try{Fw(e,t,a)}finally{Ke=y,H.p=d,U.T=s}}Vt=1,T1(),E1(),C1()}}function T1(){if(Vt===1){Vt=0;var e=Za,t=ko,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=U.T,U.T=null;var s=H.p;H.p=2;var d=Ke;Ke|=4;try{a1(t,e);var p=lp,y=ug(e.containerInfo),O=p.focusedElem,B=p.selectionRange;if(y!==O&&O&&O.ownerDocument&&cg(O.ownerDocument.documentElement,O)){if(B!==null&&Ld(O)){var F=B.start,ae=B.end;if(ae===void 0&&(ae=F),"selectionStart"in O)O.selectionStart=F,O.selectionEnd=Math.min(ae,O.value.length);else{var se=O.ownerDocument||document,Z=se&&se.defaultView||window;if(Z.getSelection){var W=Z.getSelection(),Te=O.textContent.length,Re=Math.min(B.start,Te),st=B.end===void 0?Re:Math.min(B.end,Te);!W.extend&&Re>st&&(y=st,st=Re,Re=y);var G=sg(O,Re),q=sg(O,st);if(G&&q&&(W.rangeCount!==1||W.anchorNode!==G.node||W.anchorOffset!==G.offset||W.focusNode!==q.node||W.focusOffset!==q.offset)){var V=se.createRange();V.setStart(G.node,G.offset),W.removeAllRanges(),Re>st?(W.addRange(V),W.extend(q.node,q.offset)):(V.setEnd(q.node,q.offset),W.addRange(V))}}}}for(se=[],W=O;W=W.parentNode;)W.nodeType===1&&se.push({element:W,left:W.scrollLeft,top:W.scrollTop});for(typeof O.focus=="function"&&O.focus(),O=0;O<se.length;O++){var ie=se[O];ie.element.scrollLeft=ie.left,ie.element.scrollTop=ie.top}}Fc=!!op,lp=op=null}finally{Ke=d,H.p=s,U.T=a}}e.current=t,Vt=2}}function E1(){if(Vt===2){Vt=0;var e=Za,t=ko,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=U.T,U.T=null;var s=H.p;H.p=2;var d=Ke;Ke|=4;try{Wm(e,t.alternate,t)}finally{Ke=d,H.p=s,U.T=a}}Vt=3}}function C1(){if(Vt===4||Vt===3){Vt=0,Qt();var e=Za,t=ko,a=Ta,s=f1;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Vt=5:(Vt=0,ko=Za=null,k1(e,e.pendingLanes));var d=e.pendingLanes;if(d===0&&(Qa=null),Ee(a),t=t.stateNode,Et&&typeof Et.onCommitFiberRoot=="function")try{Et.onCommitFiberRoot(kr,t,void 0,(t.current.flags&128)===128)}catch{}if(s!==null){t=U.T,d=H.p,H.p=2,U.T=null;try{for(var p=e.onRecoverableError,y=0;y<s.length;y++){var O=s[y];p(O.value,{componentStack:O.stack})}}finally{U.T=t,H.p=d}}(Ta&3)!==0&&jc(),Gr(e),d=e.pendingLanes,(a&261930)!==0&&(d&42)!==0?e===Vf?Bl++:(Bl=0,Vf=e):Bl=0,Hl(0)}}function k1(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,vl(t)))}function jc(){return T1(),E1(),C1(),O1()}function O1(){if(Vt!==5)return!1;var e=Za,t=Gf;Gf=0;var a=Ee(Ta),s=U.T,d=H.p;try{H.p=32>a?32:a,U.T=null,a=Xf,Xf=null;var p=Za,y=Ta;if(Vt=0,ko=Za=null,Ta=0,(Ke&6)!==0)throw Error(o(331));var O=Ke;if(Ke|=4,c1(p.current),o1(p,p.current,y,a),Ke=O,Hl(0,!1),Et&&typeof Et.onPostCommitFiberRoot=="function")try{Et.onPostCommitFiberRoot(kr,p)}catch{}return!0}finally{H.p=d,U.T=s,k1(e,t)}}function R1(e,t,a){t=cr(a,t),t=Ef(e.stateNode,t,2),e=qa(e,t,2),e!==null&&(me(e,2),Gr(e))}function rt(e,t,a){if(e.tag===3)R1(e,e,a);else for(;t!==null;){if(t.tag===3){R1(t,e,a);break}else if(t.tag===1){var s=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Qa===null||!Qa.has(s))){e=cr(a,e),a=Am(2),s=qa(t,a,2),s!==null&&(Lm(a,s,t,e),me(s,2),Gr(s));break}}t=t.return}}function Zf(e,t,a){var s=e.pingCache;if(s===null){s=e.pingCache=new Kw;var d=new Set;s.set(t,d)}else d=s.get(t),d===void 0&&(d=new Set,s.set(t,d));d.has(a)||(Pf=!0,d.add(a),e=n_.bind(null,e,t,a),t.then(e,e))}function n_(e,t,a){var s=e.pingCache;s!==null&&s.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,dt===e&&(Ye&a)===a&&(zt===4||zt===3&&(Ye&62914560)===Ye&&300>Fe()-Ac?(Ke&2)===0&&Oo(e,0):qf|=a,Co===Ye&&(Co=0)),Gr(e)}function A1(e,t){t===0&&(t=fe()),e=wi(e,t),e!==null&&(me(e,t),Gr(e))}function r_(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),A1(e,a)}function a_(e,t){var a=0;switch(e.tag){case 31:case 13:var s=e.stateNode,d=e.memoizedState;d!==null&&(a=d.retryLane);break;case 19:s=e.stateNode;break;case 22:s=e.stateNode._retryCache;break;default:throw Error(o(314))}s!==null&&s.delete(t),A1(e,a)}function i_(e,t){return gt(e,t)}var Uc=null,Ao=null,Kf=!1,Ic=!1,Jf=!1,Ja=0;function Gr(e){e!==Ao&&e.next===null&&(Ao===null?Uc=Ao=e:Ao=Ao.next=e),Ic=!0,Kf||(Kf=!0,l_())}function Hl(e,t){if(!Jf&&Ic){Jf=!0;do for(var a=!1,s=Uc;s!==null;){if(e!==0){var d=s.pendingLanes;if(d===0)var p=0;else{var y=s.suspendedLanes,O=s.pingedLanes;p=(1<<31-Bt(42|e)+1)-1,p&=d&~(y&~O),p=p&201326741?p&201326741|1:p?p|2:0}p!==0&&(a=!0,M1(s,p))}else p=Ye,p=Lr(s,s===dt?p:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(p&3)===0||ir(s,p)||(a=!0,M1(s,p));s=s.next}while(a);Jf=!1}}function o_(){L1()}function L1(){Ic=Kf=!1;var e=0;Ja!==0&&x_()&&(e=Ja);for(var t=Fe(),a=null,s=Uc;s!==null;){var d=s.next,p=z1(s,t);p===0?(s.next=null,a===null?Uc=d:a.next=d,d===null&&(Ao=a)):(a=s,(e!==0||(p&3)!==0)&&(Ic=!0)),s=d}Vt!==0&&Vt!==5||Hl(e),Ja!==0&&(Ja=0)}function z1(e,t){for(var a=e.suspendedLanes,s=e.pingedLanes,d=e.expirationTimes,p=e.pendingLanes&-62914561;0<p;){var y=31-Bt(p),O=1<<y,B=d[y];B===-1?((O&a)===0||(O&s)!==0)&&(d[y]=Na(O,t)):B<=t&&(e.expiredLanes|=O),p&=~O}if(t=dt,a=Ye,a=Lr(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s=e.callbackNode,a===0||e===t&&(nt===2||nt===9)||e.cancelPendingCommit!==null)return s!==null&&s!==null&&mt(s),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||ir(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(s!==null&&mt(s),Ee(a)){case 2:case 8:a=xt;break;case 32:a=sn;break;case 268435456:a=ia;break;default:a=sn}return s=D1.bind(null,e),a=gt(a,s),e.callbackPriority=t,e.callbackNode=a,t}return s!==null&&s!==null&&mt(s),e.callbackPriority=2,e.callbackNode=null,2}function D1(e,t){if(Vt!==0&&Vt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(jc()&&e.callbackNode!==a)return null;var s=Ye;return s=Lr(e,e===dt?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s===0?null:(h1(e,s,t),z1(e,Fe()),e.callbackNode!=null&&e.callbackNode===a?D1.bind(null,e):null)}function M1(e,t){if(jc())return null;h1(e,t,!0)}function l_(){b_(function(){(Ke&6)!==0?gt(wn,o_):L1()})}function Wf(){if(Ja===0){var e=go;e===0&&(e=Or,Or<<=1,(Or&261888)===0&&(Or=256)),Ja=e}return Ja}function N1(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Xs(""+e)}function j1(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function s_(e,t,a,s,d){if(t==="submit"&&a&&a.stateNode===d){var p=N1((d[qe]||null).action),y=s.submitter;y&&(t=(t=y[qe]||null)?N1(t.formAction):y.getAttribute("formAction"),t!==null&&(p=t,y=null));var O=new Zs("action","action",null,s,d);e.push({event:O,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(Ja!==0){var B=y?j1(d,y):new FormData(d);bf(a,{pending:!0,data:B,method:d.method,action:p},null,B)}}else typeof p=="function"&&(O.preventDefault(),B=y?j1(d,y):new FormData(d),bf(a,{pending:!0,data:B,method:d.method,action:p},p,B))},currentTarget:d}]})}}for(var ep=0;ep<Nd.length;ep++){var tp=Nd[ep],c_=tp.toLowerCase(),u_=tp[0].toUpperCase()+tp.slice(1);zr(c_,"on"+u_)}zr(pg,"onAnimationEnd"),zr(hg,"onAnimationIteration"),zr(gg,"onAnimationStart"),zr("dblclick","onDoubleClick"),zr("focusin","onFocus"),zr("focusout","onBlur"),zr(Cw,"onTransitionRun"),zr(kw,"onTransitionStart"),zr(Ow,"onTransitionCancel"),zr(mg,"onTransitionEnd"),eo("onMouseEnter",["mouseout","mouseover"]),eo("onMouseLeave",["mouseout","mouseover"]),eo("onPointerEnter",["pointerout","pointerover"]),eo("onPointerLeave",["pointerout","pointerover"]),yi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),yi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),yi("onBeforeInput",["compositionend","keypress","textInput","paste"]),yi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),yi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),yi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var $l="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),d_=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat($l));function U1(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var s=e[a],d=s.event;s=s.listeners;e:{var p=void 0;if(t)for(var y=s.length-1;0<=y;y--){var O=s[y],B=O.instance,F=O.currentTarget;if(O=O.listener,B!==p&&d.isPropagationStopped())break e;p=O,d.currentTarget=F;try{p(d)}catch(ae){Ws(ae)}d.currentTarget=null,p=B}else for(y=0;y<s.length;y++){if(O=s[y],B=O.instance,F=O.currentTarget,O=O.listener,B!==p&&d.isPropagationStopped())break e;p=O,d.currentTarget=F;try{p(d)}catch(ae){Ws(ae)}d.currentTarget=null,p=B}}}}function Pe(e,t){var a=t[Xt];a===void 0&&(a=t[Xt]=new Set);var s=e+"__bubble";a.has(s)||(I1(t,e,2,!1),a.add(s))}function np(e,t,a){var s=0;t&&(s|=4),I1(a,e,s,t)}var Bc="_reactListening"+Math.random().toString(36).slice(2);function rp(e){if(!e[Bc]){e[Bc]=!0,L0.forEach(function(a){a!=="selectionchange"&&(d_.has(a)||np(a,!1,e),np(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Bc]||(t[Bc]=!0,np("selectionchange",!1,t))}}function I1(e,t,a,s){switch(px(t)){case 2:var d=B_;break;case 8:d=H_;break;default:d=yp}a=d.bind(null,t,a,e),d=void 0,!wd||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(d=!0),s?d!==void 0?e.addEventListener(t,a,{capture:!0,passive:d}):e.addEventListener(t,a,!0):d!==void 0?e.addEventListener(t,a,{passive:d}):e.addEventListener(t,a,!1)}function ap(e,t,a,s,d){var p=s;if((t&1)===0&&(t&2)===0&&s!==null)e:for(;;){if(s===null)return;var y=s.tag;if(y===3||y===4){var O=s.stateNode.containerInfo;if(O===d)break;if(y===4)for(y=s.return;y!==null;){var B=y.tag;if((B===3||B===4)&&y.stateNode.containerInfo===d)return;y=y.return}for(;O!==null;){if(y=Ki(O),y===null)return;if(B=y.tag,B===5||B===6||B===26||B===27){s=p=y;continue e}O=O.parentNode}}s=s.return}q0(function(){var F=p,ae=vd(a),se=[];e:{var Z=xg.get(e);if(Z!==void 0){var W=Zs,Te=e;switch(e){case"keypress":if(Fs(a)===0)break e;case"keydown":case"keyup":W=aw;break;case"focusin":Te="focus",W=Cd;break;case"focusout":Te="blur",W=Cd;break;case"beforeblur":case"afterblur":W=Cd;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":W=X0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":W=XS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":W=lw;break;case pg:case hg:case gg:W=QS;break;case mg:W=cw;break;case"scroll":case"scrollend":W=YS;break;case"wheel":W=dw;break;case"copy":case"cut":case"paste":W=KS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":W=F0;break;case"toggle":case"beforetoggle":W=pw}var Re=(t&4)!==0,st=!Re&&(e==="scroll"||e==="scrollend"),G=Re?Z!==null?Z+"Capture":null:Z;Re=[];for(var q=F,V;q!==null;){var ie=q;if(V=ie.stateNode,ie=ie.tag,ie!==5&&ie!==26&&ie!==27||V===null||G===null||(ie=cl(q,G),ie!=null&&Re.push(Pl(q,ie,V))),st)break;q=q.return}0<Re.length&&(Z=new W(Z,Te,null,a,ae),se.push({event:Z,listeners:Re}))}}if((t&7)===0){e:{if(Z=e==="mouseover"||e==="pointerover",W=e==="mouseout"||e==="pointerout",Z&&a!==bd&&(Te=a.relatedTarget||a.fromElement)&&(Ki(Te)||Te[un]))break e;if((W||Z)&&(Z=ae.window===ae?ae:(Z=ae.ownerDocument)?Z.defaultView||Z.parentWindow:window,W?(Te=a.relatedTarget||a.toElement,W=F,Te=Te?Ki(Te):null,Te!==null&&(st=c(Te),Re=Te.tag,Te!==st||Re!==5&&Re!==27&&Re!==6)&&(Te=null)):(W=null,Te=F),W!==Te)){if(Re=X0,ie="onMouseLeave",G="onMouseEnter",q="mouse",(e==="pointerout"||e==="pointerover")&&(Re=F0,ie="onPointerLeave",G="onPointerEnter",q="pointer"),st=W==null?Z:sl(W),V=Te==null?Z:sl(Te),Z=new Re(ie,q+"leave",W,a,ae),Z.target=st,Z.relatedTarget=V,ie=null,Ki(ae)===F&&(Re=new Re(G,q+"enter",Te,a,ae),Re.target=V,Re.relatedTarget=st,ie=Re),st=ie,W&&Te)t:{for(Re=f_,G=W,q=Te,V=0,ie=G;ie;ie=Re(ie))V++;ie=0;for(var Oe=q;Oe;Oe=Re(Oe))ie++;for(;0<V-ie;)G=Re(G),V--;for(;0<ie-V;)q=Re(q),ie--;for(;V--;){if(G===q||q!==null&&G===q.alternate){Re=G;break t}G=Re(G),q=Re(q)}Re=null}else Re=null;W!==null&&B1(se,Z,W,Re,!1),Te!==null&&st!==null&&B1(se,st,Te,Re,!0)}}e:{if(Z=F?sl(F):window,W=Z.nodeName&&Z.nodeName.toLowerCase(),W==="select"||W==="input"&&Z.type==="file")var Qe=ng;else if(eg(Z))if(rg)Qe=_w;else{Qe=Sw;var Ce=vw}else W=Z.nodeName,!W||W.toLowerCase()!=="input"||Z.type!=="checkbox"&&Z.type!=="radio"?F&&yd(F.elementType)&&(Qe=ng):Qe=ww;if(Qe&&(Qe=Qe(e,F))){tg(se,Qe,a,ae);break e}Ce&&Ce(e,Z,F),e==="focusout"&&F&&Z.type==="number"&&F.memoizedProps.value!=null&&xd(Z,"number",Z.value)}switch(Ce=F?sl(F):window,e){case"focusin":(eg(Ce)||Ce.contentEditable==="true")&&(oo=Ce,zd=F,xl=null);break;case"focusout":xl=zd=oo=null;break;case"mousedown":Dd=!0;break;case"contextmenu":case"mouseup":case"dragend":Dd=!1,dg(se,a,ae);break;case"selectionchange":if(Ew)break;case"keydown":case"keyup":dg(se,a,ae)}var je;if(Od)e:{switch(e){case"compositionstart":var Ge="onCompositionStart";break e;case"compositionend":Ge="onCompositionEnd";break e;case"compositionupdate":Ge="onCompositionUpdate";break e}Ge=void 0}else io?J0(e,a)&&(Ge="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Ge="onCompositionStart");Ge&&(Q0&&a.locale!=="ko"&&(io||Ge!=="onCompositionStart"?Ge==="onCompositionEnd"&&io&&(je=Y0()):(ja=ae,_d="value"in ja?ja.value:ja.textContent,io=!0)),Ce=Hc(F,Ge),0<Ce.length&&(Ge=new V0(Ge,e,null,a,ae),se.push({event:Ge,listeners:Ce}),je?Ge.data=je:(je=W0(a),je!==null&&(Ge.data=je)))),(je=gw?mw(e,a):xw(e,a))&&(Ge=Hc(F,"onBeforeInput"),0<Ge.length&&(Ce=new V0("onBeforeInput","beforeinput",null,a,ae),se.push({event:Ce,listeners:Ge}),Ce.data=je)),s_(se,e,F,a,ae)}U1(se,t)})}function Pl(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Hc(e,t){for(var a=t+"Capture",s=[];e!==null;){var d=e,p=d.stateNode;if(d=d.tag,d!==5&&d!==26&&d!==27||p===null||(d=cl(e,a),d!=null&&s.unshift(Pl(e,d,p)),d=cl(e,t),d!=null&&s.push(Pl(e,d,p))),e.tag===3)return s;e=e.return}return[]}function f_(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function B1(e,t,a,s,d){for(var p=t._reactName,y=[];a!==null&&a!==s;){var O=a,B=O.alternate,F=O.stateNode;if(O=O.tag,B!==null&&B===s)break;O!==5&&O!==26&&O!==27||F===null||(B=F,d?(F=cl(a,p),F!=null&&y.unshift(Pl(a,F,B))):d||(F=cl(a,p),F!=null&&y.push(Pl(a,F,B)))),a=a.return}y.length!==0&&e.push({event:t,listeners:y})}var p_=/\r\n?/g,h_=/\u0000|\uFFFD/g;function H1(e){return(typeof e=="string"?e:""+e).replace(p_,`
`).replace(h_,"")}function $1(e,t){return t=H1(t),H1(e)===t}function lt(e,t,a,s,d,p){switch(a){case"children":typeof s=="string"?t==="body"||t==="textarea"&&s===""||no(e,s):(typeof s=="number"||typeof s=="bigint")&&t!=="body"&&no(e,""+s);break;case"className":Ys(e,"class",s);break;case"tabIndex":Ys(e,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Ys(e,a,s);break;case"style":$0(e,s,p);break;case"data":if(t!=="object"){Ys(e,"data",s);break}case"src":case"href":if(s===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=Xs(""+s),e.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof p=="function"&&(a==="formAction"?(t!=="input"&&lt(e,t,"name",d.name,d,null),lt(e,t,"formEncType",d.formEncType,d,null),lt(e,t,"formMethod",d.formMethod,d,null),lt(e,t,"formTarget",d.formTarget,d,null)):(lt(e,t,"encType",d.encType,d,null),lt(e,t,"method",d.method,d,null),lt(e,t,"target",d.target,d,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=Xs(""+s),e.setAttribute(a,s);break;case"onClick":s!=null&&(e.onclick=ca);break;case"onScroll":s!=null&&Pe("scroll",e);break;case"onScrollEnd":s!=null&&Pe("scrollend",e);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(o(61));if(a=s.__html,a!=null){if(d.children!=null)throw Error(o(60));e.innerHTML=a}}break;case"multiple":e.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":e.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){e.removeAttribute("xlink:href");break}a=Xs(""+s),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,""+s):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":s===!0?e.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,s):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?e.setAttribute(a,s):e.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?e.removeAttribute(a):e.setAttribute(a,s);break;case"popover":Pe("beforetoggle",e),Pe("toggle",e),qs(e,"popover",s);break;case"xlinkActuate":sa(e,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":sa(e,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":sa(e,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":sa(e,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":sa(e,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":sa(e,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":sa(e,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":sa(e,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":sa(e,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":qs(e,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=PS.get(a)||a,qs(e,a,s))}}function ip(e,t,a,s,d,p){switch(a){case"style":$0(e,s,p);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(o(61));if(a=s.__html,a!=null){if(d.children!=null)throw Error(o(60));e.innerHTML=a}}break;case"children":typeof s=="string"?no(e,s):(typeof s=="number"||typeof s=="bigint")&&no(e,""+s);break;case"onScroll":s!=null&&Pe("scroll",e);break;case"onScrollEnd":s!=null&&Pe("scrollend",e);break;case"onClick":s!=null&&(e.onclick=ca);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!z0.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(d=a.endsWith("Capture"),t=a.slice(2,d?a.length-7:void 0),p=e[qe]||null,p=p!=null?p[a]:null,typeof p=="function"&&e.removeEventListener(t,p,d),typeof s=="function")){typeof p!="function"&&p!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,s,d);break e}a in e?e[a]=s:s===!0?e.setAttribute(a,""):qs(e,a,s)}}}function nn(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Pe("error",e),Pe("load",e);var s=!1,d=!1,p;for(p in a)if(a.hasOwnProperty(p)){var y=a[p];if(y!=null)switch(p){case"src":s=!0;break;case"srcSet":d=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:lt(e,t,p,y,a,null)}}d&&lt(e,t,"srcSet",a.srcSet,a,null),s&&lt(e,t,"src",a.src,a,null);return;case"input":Pe("invalid",e);var O=p=y=d=null,B=null,F=null;for(s in a)if(a.hasOwnProperty(s)){var ae=a[s];if(ae!=null)switch(s){case"name":d=ae;break;case"type":y=ae;break;case"checked":B=ae;break;case"defaultChecked":F=ae;break;case"value":p=ae;break;case"defaultValue":O=ae;break;case"children":case"dangerouslySetInnerHTML":if(ae!=null)throw Error(o(137,t));break;default:lt(e,t,s,ae,a,null)}}U0(e,p,O,B,F,y,d,!1);return;case"select":Pe("invalid",e),s=y=p=null;for(d in a)if(a.hasOwnProperty(d)&&(O=a[d],O!=null))switch(d){case"value":p=O;break;case"defaultValue":y=O;break;case"multiple":s=O;default:lt(e,t,d,O,a,null)}t=p,a=y,e.multiple=!!s,t!=null?to(e,!!s,t,!1):a!=null&&to(e,!!s,a,!0);return;case"textarea":Pe("invalid",e),p=d=s=null;for(y in a)if(a.hasOwnProperty(y)&&(O=a[y],O!=null))switch(y){case"value":s=O;break;case"defaultValue":d=O;break;case"children":p=O;break;case"dangerouslySetInnerHTML":if(O!=null)throw Error(o(91));break;default:lt(e,t,y,O,a,null)}B0(e,s,d,p);return;case"option":for(B in a)a.hasOwnProperty(B)&&(s=a[B],s!=null)&&(B==="selected"?e.selected=s&&typeof s!="function"&&typeof s!="symbol":lt(e,t,B,s,a,null));return;case"dialog":Pe("beforetoggle",e),Pe("toggle",e),Pe("cancel",e),Pe("close",e);break;case"iframe":case"object":Pe("load",e);break;case"video":case"audio":for(s=0;s<$l.length;s++)Pe($l[s],e);break;case"image":Pe("error",e),Pe("load",e);break;case"details":Pe("toggle",e);break;case"embed":case"source":case"link":Pe("error",e),Pe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(F in a)if(a.hasOwnProperty(F)&&(s=a[F],s!=null))switch(F){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:lt(e,t,F,s,a,null)}return;default:if(yd(t)){for(ae in a)a.hasOwnProperty(ae)&&(s=a[ae],s!==void 0&&ip(e,t,ae,s,a,void 0));return}}for(O in a)a.hasOwnProperty(O)&&(s=a[O],s!=null&&lt(e,t,O,s,a,null))}function g_(e,t,a,s){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var d=null,p=null,y=null,O=null,B=null,F=null,ae=null;for(W in a){var se=a[W];if(a.hasOwnProperty(W)&&se!=null)switch(W){case"checked":break;case"value":break;case"defaultValue":B=se;default:s.hasOwnProperty(W)||lt(e,t,W,null,s,se)}}for(var Z in s){var W=s[Z];if(se=a[Z],s.hasOwnProperty(Z)&&(W!=null||se!=null))switch(Z){case"type":p=W;break;case"name":d=W;break;case"checked":F=W;break;case"defaultChecked":ae=W;break;case"value":y=W;break;case"defaultValue":O=W;break;case"children":case"dangerouslySetInnerHTML":if(W!=null)throw Error(o(137,t));break;default:W!==se&&lt(e,t,Z,W,s,se)}}md(e,y,O,B,F,ae,p,d);return;case"select":W=y=O=Z=null;for(p in a)if(B=a[p],a.hasOwnProperty(p)&&B!=null)switch(p){case"value":break;case"multiple":W=B;default:s.hasOwnProperty(p)||lt(e,t,p,null,s,B)}for(d in s)if(p=s[d],B=a[d],s.hasOwnProperty(d)&&(p!=null||B!=null))switch(d){case"value":Z=p;break;case"defaultValue":O=p;break;case"multiple":y=p;default:p!==B&&lt(e,t,d,p,s,B)}t=O,a=y,s=W,Z!=null?to(e,!!a,Z,!1):!!s!=!!a&&(t!=null?to(e,!!a,t,!0):to(e,!!a,a?[]:"",!1));return;case"textarea":W=Z=null;for(O in a)if(d=a[O],a.hasOwnProperty(O)&&d!=null&&!s.hasOwnProperty(O))switch(O){case"value":break;case"children":break;default:lt(e,t,O,null,s,d)}for(y in s)if(d=s[y],p=a[y],s.hasOwnProperty(y)&&(d!=null||p!=null))switch(y){case"value":Z=d;break;case"defaultValue":W=d;break;case"children":break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(o(91));break;default:d!==p&&lt(e,t,y,d,s,p)}I0(e,Z,W);return;case"option":for(var Te in a)Z=a[Te],a.hasOwnProperty(Te)&&Z!=null&&!s.hasOwnProperty(Te)&&(Te==="selected"?e.selected=!1:lt(e,t,Te,null,s,Z));for(B in s)Z=s[B],W=a[B],s.hasOwnProperty(B)&&Z!==W&&(Z!=null||W!=null)&&(B==="selected"?e.selected=Z&&typeof Z!="function"&&typeof Z!="symbol":lt(e,t,B,Z,s,W));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Re in a)Z=a[Re],a.hasOwnProperty(Re)&&Z!=null&&!s.hasOwnProperty(Re)&&lt(e,t,Re,null,s,Z);for(F in s)if(Z=s[F],W=a[F],s.hasOwnProperty(F)&&Z!==W&&(Z!=null||W!=null))switch(F){case"children":case"dangerouslySetInnerHTML":if(Z!=null)throw Error(o(137,t));break;default:lt(e,t,F,Z,s,W)}return;default:if(yd(t)){for(var st in a)Z=a[st],a.hasOwnProperty(st)&&Z!==void 0&&!s.hasOwnProperty(st)&&ip(e,t,st,void 0,s,Z);for(ae in s)Z=s[ae],W=a[ae],!s.hasOwnProperty(ae)||Z===W||Z===void 0&&W===void 0||ip(e,t,ae,Z,s,W);return}}for(var G in a)Z=a[G],a.hasOwnProperty(G)&&Z!=null&&!s.hasOwnProperty(G)&&lt(e,t,G,null,s,Z);for(se in s)Z=s[se],W=a[se],!s.hasOwnProperty(se)||Z===W||Z==null&&W==null||lt(e,t,se,Z,s,W)}function P1(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function m_(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var d=a[s],p=d.transferSize,y=d.initiatorType,O=d.duration;if(p&&O&&P1(y)){for(y=0,O=d.responseEnd,s+=1;s<a.length;s++){var B=a[s],F=B.startTime;if(F>O)break;var ae=B.transferSize,se=B.initiatorType;ae&&P1(se)&&(B=B.responseEnd,y+=ae*(B<O?1:(O-F)/(B-F)))}if(--s,t+=8*(p+y)/(d.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var op=null,lp=null;function $c(e){return e.nodeType===9?e:e.ownerDocument}function q1(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Y1(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function sp(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var cp=null;function x_(){var e=window.event;return e&&e.type==="popstate"?e===cp?!1:(cp=e,!0):(cp=null,!1)}var G1=typeof setTimeout=="function"?setTimeout:void 0,y_=typeof clearTimeout=="function"?clearTimeout:void 0,X1=typeof Promise=="function"?Promise:void 0,b_=typeof queueMicrotask=="function"?queueMicrotask:typeof X1<"u"?function(e){return X1.resolve(null).then(e).catch(v_)}:G1;function v_(e){setTimeout(function(){throw e})}function Wa(e){return e==="head"}function V1(e,t){var a=t,s=0;do{var d=a.nextSibling;if(e.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"||a==="/&"){if(s===0){e.removeChild(d),Mo(t);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")ql(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,ql(a);for(var p=a.firstChild;p;){var y=p.nextSibling,O=p.nodeName;p[ll]||O==="SCRIPT"||O==="STYLE"||O==="LINK"&&p.rel.toLowerCase()==="stylesheet"||a.removeChild(p),p=y}}else a==="body"&&ql(e.ownerDocument.body);a=d}while(a);Mo(t)}function F1(e,t){var a=e;e=0;do{var s=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=s}while(a)}function up(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":up(a),hd(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function S_(e,t,a,s){for(;e.nodeType===1;){var d=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!s&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(s){if(!e[ll])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(p=e.getAttribute("rel"),p==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(p!==d.rel||e.getAttribute("href")!==(d.href==null||d.href===""?null:d.href)||e.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin)||e.getAttribute("title")!==(d.title==null?null:d.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(p=e.getAttribute("src"),(p!==(d.src==null?null:d.src)||e.getAttribute("type")!==(d.type==null?null:d.type)||e.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin))&&p&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var p=d.name==null?null:""+d.name;if(d.type==="hidden"&&e.getAttribute("name")===p)return e}else return e;if(e=hr(e.nextSibling),e===null)break}return null}function w_(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=hr(e.nextSibling),e===null))return null;return e}function Q1(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=hr(e.nextSibling),e===null))return null;return e}function dp(e){return e.data==="$?"||e.data==="$~"}function fp(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function __(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var s=function(){t(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),e._reactRetry=s}}function hr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var pp=null;function Z1(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return hr(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function K1(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function J1(e,t,a){switch(t=$c(a),e){case"html":if(e=t.documentElement,!e)throw Error(o(452));return e;case"head":if(e=t.head,!e)throw Error(o(453));return e;case"body":if(e=t.body,!e)throw Error(o(454));return e;default:throw Error(o(451))}}function ql(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);hd(e)}var gr=new Map,W1=new Set;function Pc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Ea=H.d;H.d={f:T_,r:E_,D:C_,C:k_,L:O_,m:R_,X:L_,S:A_,M:z_};function T_(){var e=Ea.f(),t=Dc();return e||t}function E_(e){var t=Ji(e);t!==null&&t.tag===5&&t.type==="form"?mm(t):Ea.r(e)}var Lo=typeof document>"u"?null:document;function ex(e,t,a){var s=Lo;if(s&&typeof t=="string"&&t){var d=lr(t);d='link[rel="'+e+'"][href="'+d+'"]',typeof a=="string"&&(d+='[crossorigin="'+a+'"]'),W1.has(d)||(W1.add(d),e={rel:e,crossOrigin:a,href:t},s.querySelector(d)===null&&(t=s.createElement("link"),nn(t,"link",e),Zt(t),s.head.appendChild(t)))}}function C_(e){Ea.D(e),ex("dns-prefetch",e,null)}function k_(e,t){Ea.C(e,t),ex("preconnect",e,t)}function O_(e,t,a){Ea.L(e,t,a);var s=Lo;if(s&&e&&t){var d='link[rel="preload"][as="'+lr(t)+'"]';t==="image"&&a&&a.imageSrcSet?(d+='[imagesrcset="'+lr(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(d+='[imagesizes="'+lr(a.imageSizes)+'"]')):d+='[href="'+lr(e)+'"]';var p=d;switch(t){case"style":p=zo(e);break;case"script":p=Do(e)}gr.has(p)||(e=x({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),gr.set(p,e),s.querySelector(d)!==null||t==="style"&&s.querySelector(Yl(p))||t==="script"&&s.querySelector(Gl(p))||(t=s.createElement("link"),nn(t,"link",e),Zt(t),s.head.appendChild(t)))}}function R_(e,t){Ea.m(e,t);var a=Lo;if(a&&e){var s=t&&typeof t.as=="string"?t.as:"script",d='link[rel="modulepreload"][as="'+lr(s)+'"][href="'+lr(e)+'"]',p=d;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":p=Do(e)}if(!gr.has(p)&&(e=x({rel:"modulepreload",href:e},t),gr.set(p,e),a.querySelector(d)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Gl(p)))return}s=a.createElement("link"),nn(s,"link",e),Zt(s),a.head.appendChild(s)}}}function A_(e,t,a){Ea.S(e,t,a);var s=Lo;if(s&&e){var d=Wi(s).hoistableStyles,p=zo(e);t=t||"default";var y=d.get(p);if(!y){var O={loading:0,preload:null};if(y=s.querySelector(Yl(p)))O.loading=5;else{e=x({rel:"stylesheet",href:e,"data-precedence":t},a),(a=gr.get(p))&&hp(e,a);var B=y=s.createElement("link");Zt(B),nn(B,"link",e),B._p=new Promise(function(F,ae){B.onload=F,B.onerror=ae}),B.addEventListener("load",function(){O.loading|=1}),B.addEventListener("error",function(){O.loading|=2}),O.loading|=4,qc(y,t,s)}y={type:"stylesheet",instance:y,count:1,state:O},d.set(p,y)}}}function L_(e,t){Ea.X(e,t);var a=Lo;if(a&&e){var s=Wi(a).hoistableScripts,d=Do(e),p=s.get(d);p||(p=a.querySelector(Gl(d)),p||(e=x({src:e,async:!0},t),(t=gr.get(d))&&gp(e,t),p=a.createElement("script"),Zt(p),nn(p,"link",e),a.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},s.set(d,p))}}function z_(e,t){Ea.M(e,t);var a=Lo;if(a&&e){var s=Wi(a).hoistableScripts,d=Do(e),p=s.get(d);p||(p=a.querySelector(Gl(d)),p||(e=x({src:e,async:!0,type:"module"},t),(t=gr.get(d))&&gp(e,t),p=a.createElement("script"),Zt(p),nn(p,"link",e),a.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},s.set(d,p))}}function tx(e,t,a,s){var d=(d=de.current)?Pc(d):null;if(!d)throw Error(o(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=zo(a.href),a=Wi(d).hoistableStyles,s=a.get(t),s||(s={type:"style",instance:null,count:0,state:null},a.set(t,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=zo(a.href);var p=Wi(d).hoistableStyles,y=p.get(e);if(y||(d=d.ownerDocument||d,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},p.set(e,y),(p=d.querySelector(Yl(e)))&&!p._p&&(y.instance=p,y.state.loading=5),gr.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},gr.set(e,a),p||D_(d,e,a,y.state))),t&&s===null)throw Error(o(528,""));return y}if(t&&s!==null)throw Error(o(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Do(a),a=Wi(d).hoistableScripts,s=a.get(t),s||(s={type:"script",instance:null,count:0,state:null},a.set(t,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,e))}}function zo(e){return'href="'+lr(e)+'"'}function Yl(e){return'link[rel="stylesheet"]['+e+"]"}function nx(e){return x({},e,{"data-precedence":e.precedence,precedence:null})}function D_(e,t,a,s){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?s.loading=1:(t=e.createElement("link"),s.preload=t,t.addEventListener("load",function(){return s.loading|=1}),t.addEventListener("error",function(){return s.loading|=2}),nn(t,"link",a),Zt(t),e.head.appendChild(t))}function Do(e){return'[src="'+lr(e)+'"]'}function Gl(e){return"script[async]"+e}function rx(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var s=e.querySelector('style[data-href~="'+lr(a.href)+'"]');if(s)return t.instance=s,Zt(s),s;var d=x({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(e.ownerDocument||e).createElement("style"),Zt(s),nn(s,"style",d),qc(s,a.precedence,e),t.instance=s;case"stylesheet":d=zo(a.href);var p=e.querySelector(Yl(d));if(p)return t.state.loading|=4,t.instance=p,Zt(p),p;s=nx(a),(d=gr.get(d))&&hp(s,d),p=(e.ownerDocument||e).createElement("link"),Zt(p);var y=p;return y._p=new Promise(function(O,B){y.onload=O,y.onerror=B}),nn(p,"link",s),t.state.loading|=4,qc(p,a.precedence,e),t.instance=p;case"script":return p=Do(a.src),(d=e.querySelector(Gl(p)))?(t.instance=d,Zt(d),d):(s=a,(d=gr.get(p))&&(s=x({},a),gp(s,d)),e=e.ownerDocument||e,d=e.createElement("script"),Zt(d),nn(d,"link",s),e.head.appendChild(d),t.instance=d);case"void":return null;default:throw Error(o(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(s=t.instance,t.state.loading|=4,qc(s,a.precedence,e));return t.instance}function qc(e,t,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),d=s.length?s[s.length-1]:null,p=d,y=0;y<s.length;y++){var O=s[y];if(O.dataset.precedence===t)p=O;else if(p!==d)break}p?p.parentNode.insertBefore(e,p.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function hp(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function gp(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Yc=null;function ax(e,t,a){if(Yc===null){var s=new Map,d=Yc=new Map;d.set(a,s)}else d=Yc,s=d.get(a),s||(s=new Map,d.set(a,s));if(s.has(e))return s;for(s.set(e,null),a=a.getElementsByTagName(e),d=0;d<a.length;d++){var p=a[d];if(!(p[ll]||p[Ie]||e==="link"&&p.getAttribute("rel")==="stylesheet")&&p.namespaceURI!=="http://www.w3.org/2000/svg"){var y=p.getAttribute(t)||"";y=e+y;var O=s.get(y);O?O.push(p):s.set(y,[p])}}return s}function ix(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function M_(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function ox(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function N_(e,t,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var d=zo(s.href),p=t.querySelector(Yl(d));if(p){t=p._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Gc.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=p,Zt(p);return}p=t.ownerDocument||t,s=nx(s),(d=gr.get(d))&&hp(s,d),p=p.createElement("link"),Zt(p);var y=p;y._p=new Promise(function(O,B){y.onload=O,y.onerror=B}),nn(p,"link",s),a.instance=p}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Gc.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var mp=0;function j_(e,t){return e.stylesheets&&e.count===0&&Vc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var s=setTimeout(function(){if(e.stylesheets&&Vc(e,e.stylesheets),e.unsuspend){var p=e.unsuspend;e.unsuspend=null,p()}},6e4+t);0<e.imgBytes&&mp===0&&(mp=62500*m_());var d=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Vc(e,e.stylesheets),e.unsuspend)){var p=e.unsuspend;e.unsuspend=null,p()}},(e.imgBytes>mp?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(s),clearTimeout(d)}}:null}function Gc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Vc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Xc=null;function Vc(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Xc=new Map,t.forEach(U_,e),Xc=null,Gc.call(e))}function U_(e,t){if(!(t.state.loading&4)){var a=Xc.get(e);if(a)var s=a.get(null);else{a=new Map,Xc.set(e,a);for(var d=e.querySelectorAll("link[data-precedence],style[data-precedence]"),p=0;p<d.length;p++){var y=d[p];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(a.set(y.dataset.precedence,y),s=y)}s&&a.set(null,s)}d=t.instance,y=d.getAttribute("data-precedence"),p=a.get(y)||s,p===s&&a.set(null,d),a.set(y,d),this.count++,s=Gc.bind(this),d.addEventListener("load",s),d.addEventListener("error",s),p?p.parentNode.insertBefore(d,p.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(d,e.firstChild)),t.state.loading|=4}}var Xl={$$typeof:A,Provider:null,Consumer:null,_currentValue:X,_currentValue2:X,_threadCount:0};function I_(e,t,a,s,d,p,y,O,B){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ge(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ge(0),this.hiddenUpdates=ge(null),this.identifierPrefix=s,this.onUncaughtError=d,this.onCaughtError=p,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=B,this.incompleteTransitions=new Map}function lx(e,t,a,s,d,p,y,O,B,F,ae,se){return e=new I_(e,t,a,y,B,F,ae,se,O),t=1,p===!0&&(t|=24),p=Hn(3,null,null,t),e.current=p,p.stateNode=e,t=Fd(),t.refCount++,e.pooledCache=t,t.refCount++,p.memoizedState={element:s,isDehydrated:a,cache:t},Jd(p),e}function sx(e){return e?(e=co,e):co}function cx(e,t,a,s,d,p){d=sx(d),s.context===null?s.context=d:s.pendingContext=d,s=Pa(t),s.payload={element:a},p=p===void 0?null:p,p!==null&&(s.callback=p),a=qa(e,s,t),a!==null&&(On(a,e,t),Tl(a,e,t))}function ux(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function xp(e,t){ux(e,t),(e=e.alternate)&&ux(e,t)}function dx(e){if(e.tag===13||e.tag===31){var t=wi(e,67108864);t!==null&&On(t,e,67108864),xp(e,67108864)}}function fx(e){if(e.tag===13||e.tag===31){var t=Gn();t=he(t);var a=wi(e,t);a!==null&&On(a,e,t),xp(e,t)}}var Fc=!0;function B_(e,t,a,s){var d=U.T;U.T=null;var p=H.p;try{H.p=2,yp(e,t,a,s)}finally{H.p=p,U.T=d}}function H_(e,t,a,s){var d=U.T;U.T=null;var p=H.p;try{H.p=8,yp(e,t,a,s)}finally{H.p=p,U.T=d}}function yp(e,t,a,s){if(Fc){var d=bp(s);if(d===null)ap(e,t,s,Qc,a),hx(e,s);else if(P_(d,e,t,a,s))s.stopPropagation();else if(hx(e,s),t&4&&-1<$_.indexOf(e)){for(;d!==null;){var p=Ji(d);if(p!==null)switch(p.tag){case 3:if(p=p.stateNode,p.current.memoizedState.isDehydrated){var y=cn(p.pendingLanes);if(y!==0){var O=p;for(O.pendingLanes|=2,O.entangledLanes|=2;y;){var B=1<<31-Bt(y);O.entanglements[1]|=B,y&=~B}Gr(p),(Ke&6)===0&&(Lc=Fe()+500,Hl(0))}}break;case 31:case 13:O=wi(p,2),O!==null&&On(O,p,2),Dc(),xp(p,2)}if(p=bp(s),p===null&&ap(e,t,s,Qc,a),p===d)break;d=p}d!==null&&s.stopPropagation()}else ap(e,t,s,null,a)}}function bp(e){return e=vd(e),vp(e)}var Qc=null;function vp(e){if(Qc=null,e=Ki(e),e!==null){var t=c(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=u(t),e!==null)return e;e=null}else if(a===31){if(e=f(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Qc=e,null}function px(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ar()){case wn:return 2;case xt:return 8;case sn:case Un:return 32;case ia:return 268435456;default:return 32}default:return 32}}var Sp=!1,ei=null,ti=null,ni=null,Vl=new Map,Fl=new Map,ri=[],$_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function hx(e,t){switch(e){case"focusin":case"focusout":ei=null;break;case"dragenter":case"dragleave":ti=null;break;case"mouseover":case"mouseout":ni=null;break;case"pointerover":case"pointerout":Vl.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fl.delete(t.pointerId)}}function Ql(e,t,a,s,d,p){return e===null||e.nativeEvent!==p?(e={blockedOn:t,domEventName:a,eventSystemFlags:s,nativeEvent:p,targetContainers:[d]},t!==null&&(t=Ji(t),t!==null&&dx(t)),e):(e.eventSystemFlags|=s,t=e.targetContainers,d!==null&&t.indexOf(d)===-1&&t.push(d),e)}function P_(e,t,a,s,d){switch(t){case"focusin":return ei=Ql(ei,e,t,a,s,d),!0;case"dragenter":return ti=Ql(ti,e,t,a,s,d),!0;case"mouseover":return ni=Ql(ni,e,t,a,s,d),!0;case"pointerover":var p=d.pointerId;return Vl.set(p,Ql(Vl.get(p)||null,e,t,a,s,d)),!0;case"gotpointercapture":return p=d.pointerId,Fl.set(p,Ql(Fl.get(p)||null,e,t,a,s,d)),!0}return!1}function gx(e){var t=Ki(e.target);if(t!==null){var a=c(t);if(a!==null){if(t=a.tag,t===13){if(t=u(a),t!==null){e.blockedOn=t,Ae(e.priority,function(){fx(a)});return}}else if(t===31){if(t=f(a),t!==null){e.blockedOn=t,Ae(e.priority,function(){fx(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Zc(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=bp(e.nativeEvent);if(a===null){a=e.nativeEvent;var s=new a.constructor(a.type,a);bd=s,a.target.dispatchEvent(s),bd=null}else return t=Ji(a),t!==null&&dx(t),e.blockedOn=a,!1;t.shift()}return!0}function mx(e,t,a){Zc(e)&&a.delete(t)}function q_(){Sp=!1,ei!==null&&Zc(ei)&&(ei=null),ti!==null&&Zc(ti)&&(ti=null),ni!==null&&Zc(ni)&&(ni=null),Vl.forEach(mx),Fl.forEach(mx)}function Kc(e,t){e.blockedOn===t&&(e.blockedOn=null,Sp||(Sp=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,q_)))}var Jc=null;function xx(e){Jc!==e&&(Jc=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Jc===e&&(Jc=null);for(var t=0;t<e.length;t+=3){var a=e[t],s=e[t+1],d=e[t+2];if(typeof s!="function"){if(vp(s||a)===null)continue;break}var p=Ji(a);p!==null&&(e.splice(t,3),t-=3,bf(p,{pending:!0,data:d,method:a.method,action:s},s,d))}}))}function Mo(e){function t(B){return Kc(B,e)}ei!==null&&Kc(ei,e),ti!==null&&Kc(ti,e),ni!==null&&Kc(ni,e),Vl.forEach(t),Fl.forEach(t);for(var a=0;a<ri.length;a++){var s=ri[a];s.blockedOn===e&&(s.blockedOn=null)}for(;0<ri.length&&(a=ri[0],a.blockedOn===null);)gx(a),a.blockedOn===null&&ri.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var d=a[s],p=a[s+1],y=d[qe]||null;if(typeof p=="function")y||xx(a);else if(y){var O=null;if(p&&p.hasAttribute("formAction")){if(d=p,y=p[qe]||null)O=y.formAction;else if(vp(d)!==null)continue}else O=y.action;typeof O=="function"?a[s+1]=O:(a.splice(s,3),s-=3),xx(a)}}}function yx(){function e(p){p.canIntercept&&p.info==="react-transition"&&p.intercept({handler:function(){return new Promise(function(y){return d=y})},focusReset:"manual",scroll:"manual"})}function t(){d!==null&&(d(),d=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var p=navigation.currentEntry;p&&p.url!=null&&navigation.navigate(p.url,{state:p.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,d=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),d!==null&&(d(),d=null)}}}function wp(e){this._internalRoot=e}Wc.prototype.render=wp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));var a=t.current,s=Gn();cx(a,s,e,t,null,null)},Wc.prototype.unmount=wp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;cx(e.current,2,null,e,null,null),Dc(),t[un]=null}};function Wc(e){this._internalRoot=e}Wc.prototype.unstable_scheduleHydration=function(e){if(e){var t=Me();e={blockedOn:null,target:e,priority:t};for(var a=0;a<ri.length&&t!==0&&t<ri[a].priority;a++);ri.splice(a,0,e),a===0&&gx(e)}};var bx=n.version;if(bx!=="19.2.5")throw Error(o(527,bx,"19.2.5"));H.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=g(t),e=e!==null?m(e):null,e=e===null?null:e.stateNode,e};var Y_={bundleType:0,version:"19.2.5",rendererPackageName:"react-dom",currentDispatcherRef:U,reconcilerVersion:"19.2.5"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var eu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!eu.isDisabled&&eu.supportsFiber)try{kr=eu.inject(Y_),Et=eu}catch{}}return Kl.createRoot=function(e,t){if(!l(e))throw Error(o(299));var a=!1,s="",d=Cm,p=km,y=Om;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onUncaughtError!==void 0&&(d=t.onUncaughtError),t.onCaughtError!==void 0&&(p=t.onCaughtError),t.onRecoverableError!==void 0&&(y=t.onRecoverableError)),t=lx(e,1,!1,null,null,a,s,null,d,p,y,yx),e[un]=t.current,rp(e),new wp(t)},Kl.hydrateRoot=function(e,t,a){if(!l(e))throw Error(o(299));var s=!1,d="",p=Cm,y=km,O=Om,B=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(d=a.identifierPrefix),a.onUncaughtError!==void 0&&(p=a.onUncaughtError),a.onCaughtError!==void 0&&(y=a.onCaughtError),a.onRecoverableError!==void 0&&(O=a.onRecoverableError),a.formState!==void 0&&(B=a.formState)),t=lx(e,1,!0,t,a??null,s,d,B,p,y,O,yx),t.context=sx(null),a=t.current,s=Gn(),s=he(s),d=Pa(s),d.callback=null,qa(a,d,s),a=s,t.current.lanes=a,me(t,a),Gr(t),e[un]=t.current,rp(e),new Wc(t)},Kl.version="19.2.5",Kl}var Rx;function t5(){if(Rx)return Tp.exports;Rx=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(n){console.error(n)}}return r(),Tp.exports=e5(),Tp.exports}var n5=t5(),_=Bh();const us=V_(_),Ax=X_({__proto__:null,default:us},[_]);var Lx="popstate";function zx(r){return typeof r=="object"&&r!=null&&"pathname"in r&&"search"in r&&"hash"in r&&"state"in r&&"key"in r}function r5(r={}){function n(o,l){let c=l.state?.masked,{pathname:u,search:f,hash:h}=c||o.location;return oh("",{pathname:u,search:f,hash:h},l.state&&l.state.usr||null,l.state&&l.state.key||"default",c?{pathname:o.location.pathname,search:o.location.search,hash:o.location.hash}:void 0)}function i(o,l){return typeof l=="string"?l:vs(l)}return i5(n,i,null,r)}function _t(r,n){if(r===!1||r===null||typeof r>"u")throw new Error(n)}function Er(r,n){if(!r){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function a5(){return Math.random().toString(36).substring(2,10)}function Dx(r,n){return{usr:r.state,key:r.key,idx:n,masked:r.unstable_mask?{pathname:r.pathname,search:r.search,hash:r.hash}:void 0}}function oh(r,n,i=null,o,l){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof n=="string"?el(n):n,state:i,key:n&&n.key||o||a5(),unstable_mask:l}}function vs({pathname:r="/",search:n="",hash:i=""}){return n&&n!=="?"&&(r+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(r+=i.charAt(0)==="#"?i:"#"+i),r}function el(r){let n={};if(r){let i=r.indexOf("#");i>=0&&(n.hash=r.substring(i),r=r.substring(0,i));let o=r.indexOf("?");o>=0&&(n.search=r.substring(o),r=r.substring(0,o)),r&&(n.pathname=r)}return n}function i5(r,n,i,o={}){let{window:l=document.defaultView,v5Compat:c=!1}=o,u=l.history,f="POP",h=null,g=m();g==null&&(g=0,u.replaceState({...u.state,idx:g},""));function m(){return(u.state||{idx:null}).idx}function x(){f="POP";let v=m(),D=v==null?null:v-g;g=v,h&&h({action:f,location:b.location,delta:D})}function S(v,D){f="PUSH";let j=zx(v)?v:oh(b.location,v,D);g=m()+1;let A=Dx(j,g),z=b.createHref(j.unstable_mask||j);try{u.pushState(A,"",z)}catch(R){if(R instanceof DOMException&&R.name==="DataCloneError")throw R;l.location.assign(z)}c&&h&&h({action:f,location:b.location,delta:1})}function T(v,D){f="REPLACE";let j=zx(v)?v:oh(b.location,v,D);g=m();let A=Dx(j,g),z=b.createHref(j.unstable_mask||j);u.replaceState(A,"",z),c&&h&&h({action:f,location:b.location,delta:0})}function w(v){return o5(v)}let b={get action(){return f},get location(){return r(l,u)},listen(v){if(h)throw new Error("A history only accepts one active listener");return l.addEventListener(Lx,x),h=v,()=>{l.removeEventListener(Lx,x),h=null}},createHref(v){return n(l,v)},createURL:w,encodeLocation(v){let D=w(v);return{pathname:D.pathname,search:D.search,hash:D.hash}},push:S,replace:T,go(v){return u.go(v)}};return b}function o5(r,n=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),_t(i,"No window.location.(origin|href) available to create URL");let o=typeof r=="string"?r:vs(r);return o=o.replace(/ $/,"%20"),!n&&o.startsWith("//")&&(o=i+o),new URL(o,i)}function av(r,n,i="/"){return l5(r,n,i,!1)}function l5(r,n,i,o){let l=typeof n=="string"?el(n):n,c=Aa(l.pathname||"/",i);if(c==null)return null;let u=iv(r);s5(u);let f=null;for(let h=0;f==null&&h<u.length;++h){let g=b5(c);f=x5(u[h],g,o)}return f}function iv(r,n=[],i=[],o="",l=!1){let c=(u,f,h=l,g)=>{let m={relativePath:g===void 0?u.path||"":g,caseSensitive:u.caseSensitive===!0,childrenIndex:f,route:u};if(m.relativePath.startsWith("/")){if(!m.relativePath.startsWith(o)&&h)return;_t(m.relativePath.startsWith(o),`Absolute route path "${m.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),m.relativePath=m.relativePath.slice(o.length)}let x=ta([o,m.relativePath]),S=i.concat(m);u.children&&u.children.length>0&&(_t(u.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${x}".`),iv(u.children,n,S,x,h)),!(u.path==null&&!u.index)&&n.push({path:x,score:g5(x,u.index),routesMeta:S})};return r.forEach((u,f)=>{if(u.path===""||!u.path?.includes("?"))c(u,f);else for(let h of ov(u.path))c(u,f,!0,h)}),n}function ov(r){let n=r.split("/");if(n.length===0)return[];let[i,...o]=n,l=i.endsWith("?"),c=i.replace(/\?$/,"");if(o.length===0)return l?[c,""]:[c];let u=ov(o.join("/")),f=[];return f.push(...u.map(h=>h===""?c:[c,h].join("/"))),l&&f.push(...u),f.map(h=>r.startsWith("/")&&h===""?"/":h)}function s5(r){r.sort((n,i)=>n.score!==i.score?i.score-n.score:m5(n.routesMeta.map(o=>o.childrenIndex),i.routesMeta.map(o=>o.childrenIndex)))}var c5=/^:[\w-]+$/,u5=3,d5=2,f5=1,p5=10,h5=-2,Mx=r=>r==="*";function g5(r,n){let i=r.split("/"),o=i.length;return i.some(Mx)&&(o+=h5),n&&(o+=d5),i.filter(l=>!Mx(l)).reduce((l,c)=>l+(c5.test(c)?u5:c===""?f5:p5),o)}function m5(r,n){return r.length===n.length&&r.slice(0,-1).every((o,l)=>o===n[l])?r[r.length-1]-n[n.length-1]:0}function x5(r,n,i=!1){let{routesMeta:o}=r,l={},c="/",u=[];for(let f=0;f<o.length;++f){let h=o[f],g=f===o.length-1,m=c==="/"?n:n.slice(c.length)||"/",x=Du({path:h.relativePath,caseSensitive:h.caseSensitive,end:g},m),S=h.route;if(!x&&g&&i&&!o[o.length-1].route.index&&(x=Du({path:h.relativePath,caseSensitive:h.caseSensitive,end:!1},m)),!x)return null;Object.assign(l,x.params),u.push({params:l,pathname:ta([c,x.pathname]),pathnameBase:_5(ta([c,x.pathnameBase])),route:S}),x.pathnameBase!=="/"&&(c=ta([c,x.pathnameBase]))}return u}function Du(r,n){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[i,o]=y5(r.path,r.caseSensitive,r.end),l=n.match(i);if(!l)return null;let c=l[0],u=c.replace(/(.)\/+$/,"$1"),f=l.slice(1);return{params:o.reduce((g,{paramName:m,isOptional:x},S)=>{if(m==="*"){let w=f[S]||"";u=c.slice(0,c.length-w.length).replace(/(.)\/+$/,"$1")}const T=f[S];return x&&!T?g[m]=void 0:g[m]=(T||"").replace(/%2F/g,"/"),g},{}),pathname:c,pathnameBase:u,pattern:r}}function y5(r,n=!1,i=!0){Er(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let o=[],l="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(u,f,h,g,m)=>{if(o.push({paramName:f,isOptional:h!=null}),h){let x=m.charAt(g+u.length);return x&&x!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return r.endsWith("*")?(o.push({paramName:"*"}),l+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":r!==""&&r!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,n?void 0:"i"),o]}function b5(r){try{return r.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return Er(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${n}).`),r}}function Aa(r,n){if(n==="/")return r;if(!r.toLowerCase().startsWith(n.toLowerCase()))return null;let i=n.endsWith("/")?n.length-1:n.length,o=r.charAt(i);return o&&o!=="/"?null:r.slice(i)||"/"}var v5=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function S5(r,n="/"){let{pathname:i,search:o="",hash:l=""}=typeof r=="string"?el(r):r,c;return i?(i=i.replace(/\/\/+/g,"/"),i.startsWith("/")?c=Nx(i.substring(1),"/"):c=Nx(i,n)):c=n,{pathname:c,search:T5(o),hash:E5(l)}}function Nx(r,n){let i=n.replace(/\/+$/,"").split("/");return r.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function Rp(r,n,i,o){return`Cannot include a '${r}' character in a manually specified \`to.${n}\` field [${JSON.stringify(o)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function w5(r){return r.filter((n,i)=>i===0||n.route.path&&n.route.path.length>0)}function Hh(r){let n=w5(r);return n.map((i,o)=>o===n.length-1?i.pathname:i.pathnameBase)}function Gu(r,n,i,o=!1){let l;typeof r=="string"?l=el(r):(l={...r},_t(!l.pathname||!l.pathname.includes("?"),Rp("?","pathname","search",l)),_t(!l.pathname||!l.pathname.includes("#"),Rp("#","pathname","hash",l)),_t(!l.search||!l.search.includes("#"),Rp("#","search","hash",l)));let c=r===""||l.pathname==="",u=c?"/":l.pathname,f;if(u==null)f=i;else{let x=n.length-1;if(!o&&u.startsWith("..")){let S=u.split("/");for(;S[0]==="..";)S.shift(),x-=1;l.pathname=S.join("/")}f=x>=0?n[x]:"/"}let h=S5(l,f),g=u&&u!=="/"&&u.endsWith("/"),m=(c||u===".")&&i.endsWith("/");return!h.pathname.endsWith("/")&&(g||m)&&(h.pathname+="/"),h}var ta=r=>r.join("/").replace(/\/\/+/g,"/"),_5=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),T5=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,E5=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r,C5=class{constructor(r,n,i,o=!1){this.status=r,this.statusText=n||"",this.internal=o,i instanceof Error?(this.data=i.toString(),this.error=i):this.data=i}};function k5(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}function O5(r){return r.map(n=>n.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var lv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function sv(r,n){let i=r;if(typeof i!="string"||!v5.test(i))return{absoluteURL:void 0,isExternal:!1,to:i};let o=i,l=!1;if(lv)try{let c=new URL(window.location.href),u=i.startsWith("//")?new URL(c.protocol+i):new URL(i),f=Aa(u.pathname,n);u.origin===c.origin&&f!=null?i=f+u.search+u.hash:l=!0}catch{Er(!1,`<Link to="${i}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:o,isExternal:l,to:i}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var cv=["POST","PUT","PATCH","DELETE"];new Set(cv);var R5=["GET",...cv];new Set(R5);var tl=_.createContext(null);tl.displayName="DataRouter";var Xu=_.createContext(null);Xu.displayName="DataRouterState";var uv=_.createContext(!1);function A5(){return _.useContext(uv)}var dv=_.createContext({isTransitioning:!1});dv.displayName="ViewTransition";var L5=_.createContext(new Map);L5.displayName="Fetchers";var z5=_.createContext(null);z5.displayName="Await";var nr=_.createContext(null);nr.displayName="Navigation";var zs=_.createContext(null);zs.displayName="Location";var Ir=_.createContext({outlet:null,matches:[],isDataRoute:!1});Ir.displayName="Route";var $h=_.createContext(null);$h.displayName="RouteError";var fv="REACT_ROUTER_ERROR",D5="REDIRECT",M5="ROUTE_ERROR_RESPONSE";function N5(r){if(r.startsWith(`${fv}:${D5}:{`))try{let n=JSON.parse(r.slice(28));if(typeof n=="object"&&n&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.location=="string"&&typeof n.reloadDocument=="boolean"&&typeof n.replace=="boolean")return n}catch{}}function j5(r){if(r.startsWith(`${fv}:${M5}:{`))try{let n=JSON.parse(r.slice(40));if(typeof n=="object"&&n&&typeof n.status=="number"&&typeof n.statusText=="string")return new C5(n.status,n.statusText,n.data)}catch{}}function U5(r,{relative:n}={}){_t(nl(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:o}=_.useContext(nr),{hash:l,pathname:c,search:u}=Ds(r,{relative:n}),f=c;return i!=="/"&&(f=c==="/"?i:ta([i,c])),o.createHref({pathname:f,search:u,hash:l})}function nl(){return _.useContext(zs)!=null}function rr(){return _t(nl(),"useLocation() may be used only in the context of a <Router> component."),_.useContext(zs).location}var pv="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function hv(r){_.useContext(nr).static||_.useLayoutEffect(r)}function Br(){let{isDataRoute:r}=_.useContext(Ir);return r?J5():I5()}function I5(){_t(nl(),"useNavigate() may be used only in the context of a <Router> component.");let r=_.useContext(tl),{basename:n,navigator:i}=_.useContext(nr),{matches:o}=_.useContext(Ir),{pathname:l}=rr(),c=JSON.stringify(Hh(o)),u=_.useRef(!1);return hv(()=>{u.current=!0}),_.useCallback((h,g={})=>{if(Er(u.current,pv),!u.current)return;if(typeof h=="number"){i.go(h);return}let m=Gu(h,JSON.parse(c),l,g.relative==="path");r==null&&n!=="/"&&(m.pathname=m.pathname==="/"?n:ta([n,m.pathname])),(g.replace?i.replace:i.push)(m,g.state,g)},[n,i,c,l,r])}var B5=_.createContext(null);function H5(r){let n=_.useContext(Ir).outlet;return _.useMemo(()=>n&&_.createElement(B5.Provider,{value:r},n),[n,r])}function Ds(r,{relative:n}={}){let{matches:i}=_.useContext(Ir),{pathname:o}=rr(),l=JSON.stringify(Hh(i));return _.useMemo(()=>Gu(r,JSON.parse(l),o,n==="path"),[r,l,o,n])}function $5(r,n){return gv(r,n)}function gv(r,n,i){_t(nl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o}=_.useContext(nr),{matches:l}=_.useContext(Ir),c=l[l.length-1],u=c?c.params:{},f=c?c.pathname:"/",h=c?c.pathnameBase:"/",g=c&&c.route;{let v=g&&g.path||"";xv(f,!g||v.endsWith("*")||v.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${f}" (under <Route path="${v}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${v}"> to <Route path="${v==="/"?"*":`${v}/*`}">.`)}let m=rr(),x;if(n){let v=typeof n=="string"?el(n):n;_t(h==="/"||v.pathname?.startsWith(h),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${h}" but pathname "${v.pathname}" was given in the \`location\` prop.`),x=v}else x=m;let S=x.pathname||"/",T=S;if(h!=="/"){let v=h.replace(/^\//,"").split("/");T="/"+S.replace(/^\//,"").split("/").slice(v.length).join("/")}let w=av(r,{pathname:T});Er(g||w!=null,`No routes matched location "${x.pathname}${x.search}${x.hash}" `),Er(w==null||w[w.length-1].route.element!==void 0||w[w.length-1].route.Component!==void 0||w[w.length-1].route.lazy!==void 0,`Matched leaf route at location "${x.pathname}${x.search}${x.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let b=X5(w&&w.map(v=>Object.assign({},v,{params:Object.assign({},u,v.params),pathname:ta([h,o.encodeLocation?o.encodeLocation(v.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?h:ta([h,o.encodeLocation?o.encodeLocation(v.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:v.pathnameBase])})),l,i);return n&&b?_.createElement(zs.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",unstable_mask:void 0,...x},navigationType:"POP"}},b):b}function P5(){let r=K5(),n=k5(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),i=r instanceof Error?r.stack:null,o="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:o},c={padding:"2px 4px",backgroundColor:o},u=null;return console.error("Error handled by React Router default ErrorBoundary:",r),u=_.createElement(_.Fragment,null,_.createElement("p",null,"💿 Hey developer 👋"),_.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",_.createElement("code",{style:c},"ErrorBoundary")," or"," ",_.createElement("code",{style:c},"errorElement")," prop on your route.")),_.createElement(_.Fragment,null,_.createElement("h2",null,"Unexpected Application Error!"),_.createElement("h3",{style:{fontStyle:"italic"}},n),i?_.createElement("pre",{style:l},i):null,u)}var q5=_.createElement(P5,null),mv=class extends _.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,n){return n.location!==r.location||n.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:n.error,location:n.location,revalidation:r.revalidation||n.revalidation}}componentDidCatch(r,n){this.props.onError?this.props.onError(r,n):console.error("React Router caught the following error during render",r)}render(){let r=this.state.error;if(this.context&&typeof r=="object"&&r&&"digest"in r&&typeof r.digest=="string"){const i=j5(r.digest);i&&(r=i)}let n=r!==void 0?_.createElement(Ir.Provider,{value:this.props.routeContext},_.createElement($h.Provider,{value:r,children:this.props.component})):this.props.children;return this.context?_.createElement(Y5,{error:r},n):n}};mv.contextType=uv;var Ap=new WeakMap;function Y5({children:r,error:n}){let{basename:i}=_.useContext(nr);if(typeof n=="object"&&n&&"digest"in n&&typeof n.digest=="string"){let o=N5(n.digest);if(o){let l=Ap.get(n);if(l)throw l;let c=sv(o.location,i);if(lv&&!Ap.get(n))if(c.isExternal||o.reloadDocument)window.location.href=c.absoluteURL||c.to;else{const u=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(c.to,{replace:o.replace}));throw Ap.set(n,u),u}return _.createElement("meta",{httpEquiv:"refresh",content:`0;url=${c.absoluteURL||c.to}`})}}return r}function G5({routeContext:r,match:n,children:i}){let o=_.useContext(tl);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),_.createElement(Ir.Provider,{value:r},i)}function X5(r,n=[],i){let o=i?.state;if(r==null){if(!o)return null;if(o.errors)r=o.matches;else if(n.length===0&&!o.initialized&&o.matches.length>0)r=o.matches;else return null}let l=r,c=o?.errors;if(c!=null){let m=l.findIndex(x=>x.route.id&&c?.[x.route.id]!==void 0);_t(m>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(c).join(",")}`),l=l.slice(0,Math.min(l.length,m+1))}let u=!1,f=-1;if(i&&o){u=o.renderFallback;for(let m=0;m<l.length;m++){let x=l[m];if((x.route.HydrateFallback||x.route.hydrateFallbackElement)&&(f=m),x.route.id){let{loaderData:S,errors:T}=o,w=x.route.loader&&!S.hasOwnProperty(x.route.id)&&(!T||T[x.route.id]===void 0);if(x.route.lazy||w){i.isStatic&&(u=!0),f>=0?l=l.slice(0,f+1):l=[l[0]];break}}}}let h=i?.onError,g=o&&h?(m,x)=>{h(m,{location:o.location,params:o.matches?.[0]?.params??{},unstable_pattern:O5(o.matches),errorInfo:x})}:void 0;return l.reduceRight((m,x,S)=>{let T,w=!1,b=null,v=null;o&&(T=c&&x.route.id?c[x.route.id]:void 0,b=x.route.errorElement||q5,u&&(f<0&&S===0?(xv("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),w=!0,v=null):f===S&&(w=!0,v=x.route.hydrateFallbackElement||null)));let D=n.concat(l.slice(0,S+1)),j=()=>{let A;return T?A=b:w?A=v:x.route.Component?A=_.createElement(x.route.Component,null):x.route.element?A=x.route.element:A=m,_.createElement(G5,{match:x,routeContext:{outlet:m,matches:D,isDataRoute:o!=null},children:A})};return o&&(x.route.ErrorBoundary||x.route.errorElement||S===0)?_.createElement(mv,{location:o.location,revalidation:o.revalidation,component:b,error:T,children:j(),routeContext:{outlet:null,matches:D,isDataRoute:!0},onError:g}):j()},null)}function Ph(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function V5(r){let n=_.useContext(tl);return _t(n,Ph(r)),n}function F5(r){let n=_.useContext(Xu);return _t(n,Ph(r)),n}function Q5(r){let n=_.useContext(Ir);return _t(n,Ph(r)),n}function qh(r){let n=Q5(r),i=n.matches[n.matches.length-1];return _t(i.route.id,`${r} can only be used on routes that contain a unique "id"`),i.route.id}function Z5(){return qh("useRouteId")}function K5(){let r=_.useContext($h),n=F5("useRouteError"),i=qh("useRouteError");return r!==void 0?r:n.errors?.[i]}function J5(){let{router:r}=V5("useNavigate"),n=qh("useNavigate"),i=_.useRef(!1);return hv(()=>{i.current=!0}),_.useCallback(async(l,c={})=>{Er(i.current,pv),i.current&&(typeof l=="number"?await r.navigate(l):await r.navigate(l,{fromRouteId:n,...c}))},[r,n])}var jx={};function xv(r,n,i){!n&&!jx[r]&&(jx[r]=!0,Er(!1,i))}_.memo(W5);function W5({routes:r,future:n,state:i,isStatic:o,onError:l}){return gv(r,void 0,{state:i,isStatic:o,onError:l})}function e4({to:r,replace:n,state:i,relative:o}){_t(nl(),"<Navigate> may be used only in the context of a <Router> component.");let{static:l}=_.useContext(nr);Er(!l,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:c}=_.useContext(Ir),{pathname:u}=rr(),f=Br(),h=Gu(r,Hh(c),u,o==="path"),g=JSON.stringify(h);return _.useEffect(()=>{f(JSON.parse(g),{replace:n,state:i,relative:o})},[f,g,o,n,i]),null}function t4(r){return H5(r.context)}function Nr(r){_t(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function n4({basename:r="/",children:n=null,location:i,navigationType:o="POP",navigator:l,static:c=!1,unstable_useTransitions:u}){_t(!nl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=r.replace(/^\/*/,"/"),h=_.useMemo(()=>({basename:f,navigator:l,static:c,unstable_useTransitions:u,future:{}}),[f,l,c,u]);typeof i=="string"&&(i=el(i));let{pathname:g="/",search:m="",hash:x="",state:S=null,key:T="default",unstable_mask:w}=i,b=_.useMemo(()=>{let v=Aa(g,f);return v==null?null:{location:{pathname:v,search:m,hash:x,state:S,key:T,unstable_mask:w},navigationType:o}},[f,g,m,x,S,T,o,w]);return Er(b!=null,`<Router basename="${f}"> is not able to match the URL "${g}${m}${x}" because it does not start with the basename, so the <Router> won't render anything.`),b==null?null:_.createElement(nr.Provider,{value:h},_.createElement(zs.Provider,{children:n,value:b}))}function r4({children:r,location:n}){return $5(lh(r),n)}function lh(r,n=[]){let i=[];return _.Children.forEach(r,(o,l)=>{if(!_.isValidElement(o))return;let c=[...n,l];if(o.type===_.Fragment){i.push.apply(i,lh(o.props.children,c));return}_t(o.type===Nr,`[${typeof o.type=="string"?o.type:o.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),_t(!o.props.index||!o.props.children,"An index route cannot have child routes.");let u={id:o.props.id||c.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,middleware:o.props.middleware,loader:o.props.loader,action:o.props.action,hydrateFallbackElement:o.props.hydrateFallbackElement,HydrateFallback:o.props.HydrateFallback,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.hasErrorBoundary===!0||o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(u.children=lh(o.props.children,c)),i.push(u)}),i}var vu="get",Su="application/x-www-form-urlencoded";function Vu(r){return typeof HTMLElement<"u"&&r instanceof HTMLElement}function a4(r){return Vu(r)&&r.tagName.toLowerCase()==="button"}function i4(r){return Vu(r)&&r.tagName.toLowerCase()==="form"}function o4(r){return Vu(r)&&r.tagName.toLowerCase()==="input"}function l4(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function s4(r,n){return r.button===0&&(!n||n==="_self")&&!l4(r)}function sh(r=""){return new URLSearchParams(typeof r=="string"||Array.isArray(r)||r instanceof URLSearchParams?r:Object.keys(r).reduce((n,i)=>{let o=r[i];return n.concat(Array.isArray(o)?o.map(l=>[i,l]):[[i,o]])},[]))}function c4(r,n){let i=sh(r);return n&&n.forEach((o,l)=>{i.has(l)||n.getAll(l).forEach(c=>{i.append(l,c)})}),i}var tu=null;function u4(){if(tu===null)try{new FormData(document.createElement("form"),0),tu=!1}catch{tu=!0}return tu}var d4=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Lp(r){return r!=null&&!d4.has(r)?(Er(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Su}"`),null):r}function f4(r,n){let i,o,l,c,u;if(i4(r)){let f=r.getAttribute("action");o=f?Aa(f,n):null,i=r.getAttribute("method")||vu,l=Lp(r.getAttribute("enctype"))||Su,c=new FormData(r)}else if(a4(r)||o4(r)&&(r.type==="submit"||r.type==="image")){let f=r.form;if(f==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let h=r.getAttribute("formaction")||f.getAttribute("action");if(o=h?Aa(h,n):null,i=r.getAttribute("formmethod")||f.getAttribute("method")||vu,l=Lp(r.getAttribute("formenctype"))||Lp(f.getAttribute("enctype"))||Su,c=new FormData(f,r),!u4()){let{name:g,type:m,value:x}=r;if(m==="image"){let S=g?`${g}.`:"";c.append(`${S}x`,"0"),c.append(`${S}y`,"0")}else g&&c.append(g,x)}}else{if(Vu(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=vu,o=null,l=Su,u=r}return c&&l==="text/plain"&&(u=c,c=void 0),{action:o,method:i.toLowerCase(),encType:l,formData:c,body:u}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Yh(r,n){if(r===!1||r===null||typeof r>"u")throw new Error(n)}function yv(r,n,i,o){let l=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return i?l.pathname.endsWith("/")?l.pathname=`${l.pathname}_.${o}`:l.pathname=`${l.pathname}.${o}`:l.pathname==="/"?l.pathname=`_root.${o}`:n&&Aa(l.pathname,n)==="/"?l.pathname=`${n.replace(/\/$/,"")}/_root.${o}`:l.pathname=`${l.pathname.replace(/\/$/,"")}.${o}`,l}async function p4(r,n){if(r.id in n)return n[r.id];try{let i=await import(r.module);return n[r.id]=i,i}catch(i){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function h4(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function g4(r,n,i){let o=await Promise.all(r.map(async l=>{let c=n.routes[l.route.id];if(c){let u=await p4(c,i);return u.links?u.links():[]}return[]}));return b4(o.flat(1).filter(h4).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function Ux(r,n,i,o,l,c){let u=(h,g)=>i[g]?h.route.id!==i[g].route.id:!0,f=(h,g)=>i[g].pathname!==h.pathname||i[g].route.path?.endsWith("*")&&i[g].params["*"]!==h.params["*"];return c==="assets"?n.filter((h,g)=>u(h,g)||f(h,g)):c==="data"?n.filter((h,g)=>{let m=o.routes[h.route.id];if(!m||!m.hasLoader)return!1;if(u(h,g)||f(h,g))return!0;if(h.route.shouldRevalidate){let x=h.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:i[0]?.params||{},nextUrl:new URL(r,window.origin),nextParams:h.params,defaultShouldRevalidate:!0});if(typeof x=="boolean")return x}return!0}):[]}function m4(r,n,{includeHydrateFallback:i}={}){return x4(r.map(o=>{let l=n.routes[o.route.id];if(!l)return[];let c=[l.module];return l.clientActionModule&&(c=c.concat(l.clientActionModule)),l.clientLoaderModule&&(c=c.concat(l.clientLoaderModule)),i&&l.hydrateFallbackModule&&(c=c.concat(l.hydrateFallbackModule)),l.imports&&(c=c.concat(l.imports)),c}).flat(1))}function x4(r){return[...new Set(r)]}function y4(r){let n={},i=Object.keys(r).sort();for(let o of i)n[o]=r[o];return n}function b4(r,n){let i=new Set;return new Set(n),r.reduce((o,l)=>{let c=JSON.stringify(y4(l));return i.has(c)||(i.add(c),o.push({key:c,link:l})),o},[])}function Gh(){let r=_.useContext(tl);return Yh(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function v4(){let r=_.useContext(Xu);return Yh(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var Xh=_.createContext(void 0);Xh.displayName="FrameworkContext";function Vh(){let r=_.useContext(Xh);return Yh(r,"You must render this element inside a <HydratedRouter> element"),r}function S4(r,n){let i=_.useContext(Xh),[o,l]=_.useState(!1),[c,u]=_.useState(!1),{onFocus:f,onBlur:h,onMouseEnter:g,onMouseLeave:m,onTouchStart:x}=n,S=_.useRef(null);_.useEffect(()=>{if(r==="render"&&u(!0),r==="viewport"){let b=D=>{D.forEach(j=>{u(j.isIntersecting)})},v=new IntersectionObserver(b,{threshold:.5});return S.current&&v.observe(S.current),()=>{v.disconnect()}}},[r]),_.useEffect(()=>{if(o){let b=setTimeout(()=>{u(!0)},100);return()=>{clearTimeout(b)}}},[o]);let T=()=>{l(!0)},w=()=>{l(!1),u(!1)};return i?r!=="intent"?[c,S,{}]:[c,S,{onFocus:Jl(f,T),onBlur:Jl(h,w),onMouseEnter:Jl(g,T),onMouseLeave:Jl(m,w),onTouchStart:Jl(x,T)}]:[!1,S,{}]}function Jl(r,n){return i=>{r&&r(i),i.defaultPrevented||n(i)}}function w4({page:r,...n}){let i=A5(),{router:o}=Gh(),l=_.useMemo(()=>av(o.routes,r,o.basename),[o.routes,r,o.basename]);return l?i?_.createElement(T4,{page:r,matches:l,...n}):_.createElement(E4,{page:r,matches:l,...n}):null}function _4(r){let{manifest:n,routeModules:i}=Vh(),[o,l]=_.useState([]);return _.useEffect(()=>{let c=!1;return g4(r,n,i).then(u=>{c||l(u)}),()=>{c=!0}},[r,n,i]),o}function T4({page:r,matches:n,...i}){let o=rr(),{future:l}=Vh(),{basename:c}=Gh(),u=_.useMemo(()=>{if(r===o.pathname+o.search+o.hash)return[];let f=yv(r,c,l.unstable_trailingSlashAwareDataRequests,"rsc"),h=!1,g=[];for(let m of n)typeof m.route.shouldRevalidate=="function"?h=!0:g.push(m.route.id);return h&&g.length>0&&f.searchParams.set("_routes",g.join(",")),[f.pathname+f.search]},[c,l.unstable_trailingSlashAwareDataRequests,r,o,n]);return _.createElement(_.Fragment,null,u.map(f=>_.createElement("link",{key:f,rel:"prefetch",as:"fetch",href:f,...i})))}function E4({page:r,matches:n,...i}){let o=rr(),{future:l,manifest:c,routeModules:u}=Vh(),{basename:f}=Gh(),{loaderData:h,matches:g}=v4(),m=_.useMemo(()=>Ux(r,n,g,c,o,"data"),[r,n,g,c,o]),x=_.useMemo(()=>Ux(r,n,g,c,o,"assets"),[r,n,g,c,o]),S=_.useMemo(()=>{if(r===o.pathname+o.search+o.hash)return[];let b=new Set,v=!1;if(n.forEach(j=>{let A=c.routes[j.route.id];!A||!A.hasLoader||(!m.some(z=>z.route.id===j.route.id)&&j.route.id in h&&u[j.route.id]?.shouldRevalidate||A.hasClientLoader?v=!0:b.add(j.route.id))}),b.size===0)return[];let D=yv(r,f,l.unstable_trailingSlashAwareDataRequests,"data");return v&&b.size>0&&D.searchParams.set("_routes",n.filter(j=>b.has(j.route.id)).map(j=>j.route.id).join(",")),[D.pathname+D.search]},[f,l.unstable_trailingSlashAwareDataRequests,h,o,c,m,n,r,u]),T=_.useMemo(()=>m4(x,c),[x,c]),w=_4(x);return _.createElement(_.Fragment,null,S.map(b=>_.createElement("link",{key:b,rel:"prefetch",as:"fetch",href:b,...i})),T.map(b=>_.createElement("link",{key:b,rel:"modulepreload",href:b,...i})),w.map(({key:b,link:v})=>_.createElement("link",{key:b,nonce:i.nonce,...v,crossOrigin:v.crossOrigin??i.crossOrigin})))}function C4(...r){return n=>{r.forEach(i=>{typeof i=="function"?i(n):i!=null&&(i.current=n)})}}var k4=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{k4&&(window.__reactRouterVersion="7.14.0")}catch{}function O4({basename:r,children:n,unstable_useTransitions:i,window:o}){let l=_.useRef();l.current==null&&(l.current=r5({window:o,v5Compat:!0}));let c=l.current,[u,f]=_.useState({action:c.action,location:c.location}),h=_.useCallback(g=>{i===!1?f(g):_.startTransition(()=>f(g))},[i]);return _.useLayoutEffect(()=>c.listen(h),[c,h]),_.createElement(n4,{basename:r,children:n,location:u.location,navigationType:u.action,navigator:c,unstable_useTransitions:i})}var bv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Fh=_.forwardRef(function({onClick:n,discover:i="render",prefetch:o="none",relative:l,reloadDocument:c,replace:u,unstable_mask:f,state:h,target:g,to:m,preventScrollReset:x,viewTransition:S,unstable_defaultShouldRevalidate:T,...w},b){let{basename:v,navigator:D,unstable_useTransitions:j}=_.useContext(nr),A=typeof m=="string"&&bv.test(m),z=sv(m,v);m=z.to;let R=U5(m,{relative:l}),M=rr(),k=null;if(f){let we=Gu(f,[],M.unstable_mask?M.unstable_mask.pathname:"/",!0);v!=="/"&&(we.pathname=we.pathname==="/"?v:ta([v,we.pathname])),k=D.createHref(we)}let[I,$,te]=S4(o,w),re=z4(m,{replace:u,unstable_mask:f,state:h,target:g,preventScrollReset:x,relative:l,viewTransition:S,unstable_defaultShouldRevalidate:T,unstable_useTransitions:j});function le(we){n&&n(we),we.defaultPrevented||re(we)}let ye=!(z.isExternal||c),Se=_.createElement("a",{...w,...te,href:(ye?k:void 0)||z.absoluteURL||R,onClick:ye?le:n,ref:C4(b,$),target:g,"data-discover":!A&&i==="render"?"true":void 0});return I&&!A?_.createElement(_.Fragment,null,Se,_.createElement(w4,{page:R})):Se});Fh.displayName="Link";var R4=_.forwardRef(function({"aria-current":n="page",caseSensitive:i=!1,className:o="",end:l=!1,style:c,to:u,viewTransition:f,children:h,...g},m){let x=Ds(u,{relative:g.relative}),S=rr(),T=_.useContext(Xu),{navigator:w,basename:b}=_.useContext(nr),v=T!=null&&I4(x)&&f===!0,D=w.encodeLocation?w.encodeLocation(x).pathname:x.pathname,j=S.pathname,A=T&&T.navigation&&T.navigation.location?T.navigation.location.pathname:null;i||(j=j.toLowerCase(),A=A?A.toLowerCase():null,D=D.toLowerCase()),A&&b&&(A=Aa(A,b)||A);const z=D!=="/"&&D.endsWith("/")?D.length-1:D.length;let R=j===D||!l&&j.startsWith(D)&&j.charAt(z)==="/",M=A!=null&&(A===D||!l&&A.startsWith(D)&&A.charAt(D.length)==="/"),k={isActive:R,isPending:M,isTransitioning:v},I=R?n:void 0,$;typeof o=="function"?$=o(k):$=[o,R?"active":null,M?"pending":null,v?"transitioning":null].filter(Boolean).join(" ");let te=typeof c=="function"?c(k):c;return _.createElement(Fh,{...g,"aria-current":I,className:$,ref:m,style:te,to:u,viewTransition:f},typeof h=="function"?h(k):h)});R4.displayName="NavLink";var A4=_.forwardRef(({discover:r="render",fetcherKey:n,navigate:i,reloadDocument:o,replace:l,state:c,method:u=vu,action:f,onSubmit:h,relative:g,preventScrollReset:m,viewTransition:x,unstable_defaultShouldRevalidate:S,...T},w)=>{let{unstable_useTransitions:b}=_.useContext(nr),v=j4(),D=U4(f,{relative:g}),j=u.toLowerCase()==="get"?"get":"post",A=typeof f=="string"&&bv.test(f),z=R=>{if(h&&h(R),R.defaultPrevented)return;R.preventDefault();let M=R.nativeEvent.submitter,k=M?.getAttribute("formmethod")||u,I=()=>v(M||R.currentTarget,{fetcherKey:n,method:k,navigate:i,replace:l,state:c,relative:g,preventScrollReset:m,viewTransition:x,unstable_defaultShouldRevalidate:S});b&&i!==!1?_.startTransition(()=>I()):I()};return _.createElement("form",{ref:w,method:j,action:D,onSubmit:o?h:z,...T,"data-discover":!A&&r==="render"?"true":void 0})});A4.displayName="Form";function L4(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function vv(r){let n=_.useContext(tl);return _t(n,L4(r)),n}function z4(r,{target:n,replace:i,unstable_mask:o,state:l,preventScrollReset:c,relative:u,viewTransition:f,unstable_defaultShouldRevalidate:h,unstable_useTransitions:g}={}){let m=Br(),x=rr(),S=Ds(r,{relative:u});return _.useCallback(T=>{if(s4(T,n)){T.preventDefault();let w=i!==void 0?i:vs(x)===vs(S),b=()=>m(r,{replace:w,unstable_mask:o,state:l,preventScrollReset:c,relative:u,viewTransition:f,unstable_defaultShouldRevalidate:h});g?_.startTransition(()=>b()):b()}},[x,m,S,i,o,l,n,r,c,u,f,h,g])}function D4(r){Er(typeof URLSearchParams<"u","You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");let n=_.useRef(sh(r)),i=_.useRef(!1),o=rr(),l=_.useMemo(()=>c4(o.search,i.current?null:n.current),[o.search]),c=Br(),u=_.useCallback((f,h)=>{const g=sh(typeof f=="function"?f(new URLSearchParams(l)):f);i.current=!0,c("?"+g,h)},[c,l]);return[l,u]}var M4=0,N4=()=>`__${String(++M4)}__`;function j4(){let{router:r}=vv("useSubmit"),{basename:n}=_.useContext(nr),i=Z5(),o=r.fetch,l=r.navigate;return _.useCallback(async(c,u={})=>{let{action:f,method:h,encType:g,formData:m,body:x}=f4(c,n);if(u.navigate===!1){let S=u.fetcherKey||N4();await o(S,i,u.action||f,{unstable_defaultShouldRevalidate:u.unstable_defaultShouldRevalidate,preventScrollReset:u.preventScrollReset,formData:m,body:x,formMethod:u.method||h,formEncType:u.encType||g,flushSync:u.flushSync})}else await l(u.action||f,{unstable_defaultShouldRevalidate:u.unstable_defaultShouldRevalidate,preventScrollReset:u.preventScrollReset,formData:m,body:x,formMethod:u.method||h,formEncType:u.encType||g,replace:u.replace,state:u.state,fromRouteId:i,flushSync:u.flushSync,viewTransition:u.viewTransition})},[o,l,n,i])}function U4(r,{relative:n}={}){let{basename:i}=_.useContext(nr),o=_.useContext(Ir);_t(o,"useFormAction must be used inside a RouteContext");let[l]=o.matches.slice(-1),c={...Ds(r||".",{relative:n})},u=rr();if(r==null){c.search=u.search;let f=new URLSearchParams(c.search),h=f.getAll("index");if(h.some(m=>m==="")){f.delete("index"),h.filter(x=>x).forEach(x=>f.append("index",x));let m=f.toString();c.search=m?`?${m}`:""}}return(!r||r===".")&&l.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(c.pathname=c.pathname==="/"?i:ta([i,c.pathname])),vs(c)}function I4(r,{relative:n}={}){let i=_.useContext(dv);_t(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:o}=vv("useViewTransitionState"),l=Ds(r,{relative:n});if(!i.isTransitioning)return!1;let c=Aa(i.currentLocation.pathname,o)||i.currentLocation.pathname,u=Aa(i.nextLocation.pathname,o)||i.nextLocation.pathname;return Du(l.pathname,u)!=null||Du(l.pathname,c)!=null}var Fu=rv();function B4(r){if(r.sheet)return r.sheet;for(var n=0;n<document.styleSheets.length;n++)if(document.styleSheets[n].ownerNode===r)return document.styleSheets[n]}function H4(r){var n=document.createElement("style");return n.setAttribute("data-emotion",r.key),r.nonce!==void 0&&n.setAttribute("nonce",r.nonce),n.appendChild(document.createTextNode("")),n.setAttribute("data-s",""),n}var $4=(function(){function r(i){var o=this;this._insertTag=function(l){var c;o.tags.length===0?o.insertionPoint?c=o.insertionPoint.nextSibling:o.prepend?c=o.container.firstChild:c=o.before:c=o.tags[o.tags.length-1].nextSibling,o.container.insertBefore(l,c),o.tags.push(l)},this.isSpeedy=i.speedy===void 0?!0:i.speedy,this.tags=[],this.ctr=0,this.nonce=i.nonce,this.key=i.key,this.container=i.container,this.prepend=i.prepend,this.insertionPoint=i.insertionPoint,this.before=null}var n=r.prototype;return n.hydrate=function(o){o.forEach(this._insertTag)},n.insert=function(o){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(H4(this));var l=this.tags[this.tags.length-1];if(this.isSpeedy){var c=B4(l);try{c.insertRule(o,c.cssRules.length)}catch{}}else l.appendChild(document.createTextNode(o));this.ctr++},n.flush=function(){this.tags.forEach(function(o){var l;return(l=o.parentNode)==null?void 0:l.removeChild(o)}),this.tags=[],this.ctr=0},r})(),fn="-ms-",Mu="-moz-",Je="-webkit-",Sv="comm",Qh="rule",Zh="decl",P4="@import",wv="@keyframes",q4="@layer",Y4=Math.abs,Qu=String.fromCharCode,G4=Object.assign;function X4(r,n){return rn(r,0)^45?(((n<<2^rn(r,0))<<2^rn(r,1))<<2^rn(r,2))<<2^rn(r,3):0}function _v(r){return r.trim()}function V4(r,n){return(r=n.exec(r))?r[0]:r}function We(r,n,i){return r.replace(n,i)}function ch(r,n){return r.indexOf(n)}function rn(r,n){return r.charCodeAt(n)|0}function Ss(r,n,i){return r.slice(n,i)}function Zr(r){return r.length}function Kh(r){return r.length}function nu(r,n){return n.push(r),r}function F4(r,n){return r.map(n).join("")}var Zu=1,Xo=1,Tv=0,Nn=0,Gt=0,rl="";function Ku(r,n,i,o,l,c,u){return{value:r,root:n,parent:i,type:o,props:l,children:c,line:Zu,column:Xo,length:u,return:""}}function Wl(r,n){return G4(Ku("",null,null,"",null,null,0),r,{length:-r.length},n)}function Q4(){return Gt}function Z4(){return Gt=Nn>0?rn(rl,--Nn):0,Xo--,Gt===10&&(Xo=1,Zu--),Gt}function Jn(){return Gt=Nn<Tv?rn(rl,Nn++):0,Xo++,Gt===10&&(Xo=1,Zu++),Gt}function na(){return rn(rl,Nn)}function wu(){return Nn}function Ms(r,n){return Ss(rl,r,n)}function ws(r){switch(r){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Ev(r){return Zu=Xo=1,Tv=Zr(rl=r),Nn=0,[]}function Cv(r){return rl="",r}function _u(r){return _v(Ms(Nn-1,uh(r===91?r+2:r===40?r+1:r)))}function K4(r){for(;(Gt=na())&&Gt<33;)Jn();return ws(r)>2||ws(Gt)>3?"":" "}function J4(r,n){for(;--n&&Jn()&&!(Gt<48||Gt>102||Gt>57&&Gt<65||Gt>70&&Gt<97););return Ms(r,wu()+(n<6&&na()==32&&Jn()==32))}function uh(r){for(;Jn();)switch(Gt){case r:return Nn;case 34:case 39:r!==34&&r!==39&&uh(Gt);break;case 40:r===41&&uh(r);break;case 92:Jn();break}return Nn}function W4(r,n){for(;Jn()&&r+Gt!==57;)if(r+Gt===84&&na()===47)break;return"/*"+Ms(n,Nn-1)+"*"+Qu(r===47?r:Jn())}function e3(r){for(;!ws(na());)Jn();return Ms(r,Nn)}function t3(r){return Cv(Tu("",null,null,null,[""],r=Ev(r),0,[0],r))}function Tu(r,n,i,o,l,c,u,f,h){for(var g=0,m=0,x=u,S=0,T=0,w=0,b=1,v=1,D=1,j=0,A="",z=l,R=c,M=o,k=A;v;)switch(w=j,j=Jn()){case 40:if(w!=108&&rn(k,x-1)==58){ch(k+=We(_u(j),"&","&\f"),"&\f")!=-1&&(D=-1);break}case 34:case 39:case 91:k+=_u(j);break;case 9:case 10:case 13:case 32:k+=K4(w);break;case 92:k+=J4(wu()-1,7);continue;case 47:switch(na()){case 42:case 47:nu(n3(W4(Jn(),wu()),n,i),h);break;default:k+="/"}break;case 123*b:f[g++]=Zr(k)*D;case 125*b:case 59:case 0:switch(j){case 0:case 125:v=0;case 59+m:D==-1&&(k=We(k,/\f/g,"")),T>0&&Zr(k)-x&&nu(T>32?Bx(k+";",o,i,x-1):Bx(We(k," ","")+";",o,i,x-2),h);break;case 59:k+=";";default:if(nu(M=Ix(k,n,i,g,m,l,f,A,z=[],R=[],x),c),j===123)if(m===0)Tu(k,n,M,M,z,c,x,f,R);else switch(S===99&&rn(k,3)===110?100:S){case 100:case 108:case 109:case 115:Tu(r,M,M,o&&nu(Ix(r,M,M,0,0,l,f,A,l,z=[],x),R),l,R,x,f,o?z:R);break;default:Tu(k,M,M,M,[""],R,0,f,R)}}g=m=T=0,b=D=1,A=k="",x=u;break;case 58:x=1+Zr(k),T=w;default:if(b<1){if(j==123)--b;else if(j==125&&b++==0&&Z4()==125)continue}switch(k+=Qu(j),j*b){case 38:D=m>0?1:(k+="\f",-1);break;case 44:f[g++]=(Zr(k)-1)*D,D=1;break;case 64:na()===45&&(k+=_u(Jn())),S=na(),m=x=Zr(A=k+=e3(wu())),j++;break;case 45:w===45&&Zr(k)==2&&(b=0)}}return c}function Ix(r,n,i,o,l,c,u,f,h,g,m){for(var x=l-1,S=l===0?c:[""],T=Kh(S),w=0,b=0,v=0;w<o;++w)for(var D=0,j=Ss(r,x+1,x=Y4(b=u[w])),A=r;D<T;++D)(A=_v(b>0?S[D]+" "+j:We(j,/&\f/g,S[D])))&&(h[v++]=A);return Ku(r,n,i,l===0?Qh:f,h,g,m)}function n3(r,n,i){return Ku(r,n,i,Sv,Qu(Q4()),Ss(r,2,-2),0)}function Bx(r,n,i,o){return Ku(r,n,i,Zh,Ss(r,0,o),Ss(r,o+1,-1),o)}function $o(r,n){for(var i="",o=Kh(r),l=0;l<o;l++)i+=n(r[l],l,r,n)||"";return i}function r3(r,n,i,o){switch(r.type){case q4:if(r.children.length)break;case P4:case Zh:return r.return=r.return||r.value;case Sv:return"";case wv:return r.return=r.value+"{"+$o(r.children,o)+"}";case Qh:r.value=r.props.join(",")}return Zr(i=$o(r.children,o))?r.return=r.value+"{"+i+"}":""}function a3(r){var n=Kh(r);return function(i,o,l,c){for(var u="",f=0;f<n;f++)u+=r[f](i,o,l,c)||"";return u}}function i3(r){return function(n){n.root||(n=n.return)&&r(n)}}function kv(r){var n=Object.create(null);return function(i){return n[i]===void 0&&(n[i]=r(i)),n[i]}}var o3=function(n,i,o){for(var l=0,c=0;l=c,c=na(),l===38&&c===12&&(i[o]=1),!ws(c);)Jn();return Ms(n,Nn)},l3=function(n,i){var o=-1,l=44;do switch(ws(l)){case 0:l===38&&na()===12&&(i[o]=1),n[o]+=o3(Nn-1,i,o);break;case 2:n[o]+=_u(l);break;case 4:if(l===44){n[++o]=na()===58?"&\f":"",i[o]=n[o].length;break}default:n[o]+=Qu(l)}while(l=Jn());return n},s3=function(n,i){return Cv(l3(Ev(n),i))},Hx=new WeakMap,c3=function(n){if(!(n.type!=="rule"||!n.parent||n.length<1)){for(var i=n.value,o=n.parent,l=n.column===o.column&&n.line===o.line;o.type!=="rule";)if(o=o.parent,!o)return;if(!(n.props.length===1&&i.charCodeAt(0)!==58&&!Hx.get(o))&&!l){Hx.set(n,!0);for(var c=[],u=s3(i,c),f=o.props,h=0,g=0;h<u.length;h++)for(var m=0;m<f.length;m++,g++)n.props[g]=c[h]?u[h].replace(/&\f/g,f[m]):f[m]+" "+u[h]}}},u3=function(n){if(n.type==="decl"){var i=n.value;i.charCodeAt(0)===108&&i.charCodeAt(2)===98&&(n.return="",n.value="")}};function Ov(r,n){switch(X4(r,n)){case 5103:return Je+"print-"+r+r;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Je+r+r;case 5349:case 4246:case 4810:case 6968:case 2756:return Je+r+Mu+r+fn+r+r;case 6828:case 4268:return Je+r+fn+r+r;case 6165:return Je+r+fn+"flex-"+r+r;case 5187:return Je+r+We(r,/(\w+).+(:[^]+)/,Je+"box-$1$2"+fn+"flex-$1$2")+r;case 5443:return Je+r+fn+"flex-item-"+We(r,/flex-|-self/,"")+r;case 4675:return Je+r+fn+"flex-line-pack"+We(r,/align-content|flex-|-self/,"")+r;case 5548:return Je+r+fn+We(r,"shrink","negative")+r;case 5292:return Je+r+fn+We(r,"basis","preferred-size")+r;case 6060:return Je+"box-"+We(r,"-grow","")+Je+r+fn+We(r,"grow","positive")+r;case 4554:return Je+We(r,/([^-])(transform)/g,"$1"+Je+"$2")+r;case 6187:return We(We(We(r,/(zoom-|grab)/,Je+"$1"),/(image-set)/,Je+"$1"),r,"")+r;case 5495:case 3959:return We(r,/(image-set\([^]*)/,Je+"$1$`$1");case 4968:return We(We(r,/(.+:)(flex-)?(.*)/,Je+"box-pack:$3"+fn+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Je+r+r;case 4095:case 3583:case 4068:case 2532:return We(r,/(.+)-inline(.+)/,Je+"$1$2")+r;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Zr(r)-1-n>6)switch(rn(r,n+1)){case 109:if(rn(r,n+4)!==45)break;case 102:return We(r,/(.+:)(.+)-([^]+)/,"$1"+Je+"$2-$3$1"+Mu+(rn(r,n+3)==108?"$3":"$2-$3"))+r;case 115:return~ch(r,"stretch")?Ov(We(r,"stretch","fill-available"),n)+r:r}break;case 4949:if(rn(r,n+1)!==115)break;case 6444:switch(rn(r,Zr(r)-3-(~ch(r,"!important")&&10))){case 107:return We(r,":",":"+Je)+r;case 101:return We(r,/(.+:)([^;!]+)(;|!.+)?/,"$1"+Je+(rn(r,14)===45?"inline-":"")+"box$3$1"+Je+"$2$3$1"+fn+"$2box$3")+r}break;case 5936:switch(rn(r,n+11)){case 114:return Je+r+fn+We(r,/[svh]\w+-[tblr]{2}/,"tb")+r;case 108:return Je+r+fn+We(r,/[svh]\w+-[tblr]{2}/,"tb-rl")+r;case 45:return Je+r+fn+We(r,/[svh]\w+-[tblr]{2}/,"lr")+r}return Je+r+fn+r+r}return r}var d3=function(n,i,o,l){if(n.length>-1&&!n.return)switch(n.type){case Zh:n.return=Ov(n.value,n.length);break;case wv:return $o([Wl(n,{value:We(n.value,"@","@"+Je)})],l);case Qh:if(n.length)return F4(n.props,function(c){switch(V4(c,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return $o([Wl(n,{props:[We(c,/:(read-\w+)/,":"+Mu+"$1")]})],l);case"::placeholder":return $o([Wl(n,{props:[We(c,/:(plac\w+)/,":"+Je+"input-$1")]}),Wl(n,{props:[We(c,/:(plac\w+)/,":"+Mu+"$1")]}),Wl(n,{props:[We(c,/:(plac\w+)/,fn+"input-$1")]})],l)}return""})}},f3=[d3],p3=function(n){var i=n.key;if(i==="css"){var o=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(o,function(b){var v=b.getAttribute("data-emotion");v.indexOf(" ")!==-1&&(document.head.appendChild(b),b.setAttribute("data-s",""))})}var l=n.stylisPlugins||f3,c={},u,f=[];u=n.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+i+' "]'),function(b){for(var v=b.getAttribute("data-emotion").split(" "),D=1;D<v.length;D++)c[v[D]]=!0;f.push(b)});var h,g=[c3,u3];{var m,x=[r3,i3(function(b){m.insert(b)})],S=a3(g.concat(l,x)),T=function(v){return $o(t3(v),S)};h=function(v,D,j,A){m=j,T(v?v+"{"+D.styles+"}":D.styles),A&&(w.inserted[D.name]=!0)}}var w={key:i,sheet:new $4({key:i,container:u,nonce:n.nonce,speedy:n.speedy,prepend:n.prepend,insertionPoint:n.insertionPoint}),nonce:n.nonce,inserted:c,registered:{},insert:h};return w.sheet.hydrate(f),w};function dh(){return dh=Object.assign?Object.assign.bind():function(r){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var o in i)({}).hasOwnProperty.call(i,o)&&(r[o]=i[o])}return r},dh.apply(null,arguments)}var zp={exports:{}},et={};var $x;function h3(){if($x)return et;$x=1;var r=typeof Symbol=="function"&&Symbol.for,n=r?Symbol.for("react.element"):60103,i=r?Symbol.for("react.portal"):60106,o=r?Symbol.for("react.fragment"):60107,l=r?Symbol.for("react.strict_mode"):60108,c=r?Symbol.for("react.profiler"):60114,u=r?Symbol.for("react.provider"):60109,f=r?Symbol.for("react.context"):60110,h=r?Symbol.for("react.async_mode"):60111,g=r?Symbol.for("react.concurrent_mode"):60111,m=r?Symbol.for("react.forward_ref"):60112,x=r?Symbol.for("react.suspense"):60113,S=r?Symbol.for("react.suspense_list"):60120,T=r?Symbol.for("react.memo"):60115,w=r?Symbol.for("react.lazy"):60116,b=r?Symbol.for("react.block"):60121,v=r?Symbol.for("react.fundamental"):60117,D=r?Symbol.for("react.responder"):60118,j=r?Symbol.for("react.scope"):60119;function A(R){if(typeof R=="object"&&R!==null){var M=R.$$typeof;switch(M){case n:switch(R=R.type,R){case h:case g:case o:case c:case l:case x:return R;default:switch(R=R&&R.$$typeof,R){case f:case m:case w:case T:case u:return R;default:return M}}case i:return M}}}function z(R){return A(R)===g}return et.AsyncMode=h,et.ConcurrentMode=g,et.ContextConsumer=f,et.ContextProvider=u,et.Element=n,et.ForwardRef=m,et.Fragment=o,et.Lazy=w,et.Memo=T,et.Portal=i,et.Profiler=c,et.StrictMode=l,et.Suspense=x,et.isAsyncMode=function(R){return z(R)||A(R)===h},et.isConcurrentMode=z,et.isContextConsumer=function(R){return A(R)===f},et.isContextProvider=function(R){return A(R)===u},et.isElement=function(R){return typeof R=="object"&&R!==null&&R.$$typeof===n},et.isForwardRef=function(R){return A(R)===m},et.isFragment=function(R){return A(R)===o},et.isLazy=function(R){return A(R)===w},et.isMemo=function(R){return A(R)===T},et.isPortal=function(R){return A(R)===i},et.isProfiler=function(R){return A(R)===c},et.isStrictMode=function(R){return A(R)===l},et.isSuspense=function(R){return A(R)===x},et.isValidElementType=function(R){return typeof R=="string"||typeof R=="function"||R===o||R===g||R===c||R===l||R===x||R===S||typeof R=="object"&&R!==null&&(R.$$typeof===w||R.$$typeof===T||R.$$typeof===u||R.$$typeof===f||R.$$typeof===m||R.$$typeof===v||R.$$typeof===D||R.$$typeof===j||R.$$typeof===b)},et.typeOf=A,et}var Px;function g3(){return Px||(Px=1,zp.exports=h3()),zp.exports}var Dp,qx;function m3(){if(qx)return Dp;qx=1;var r=g3(),n={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},o={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},l={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},c={};c[r.ForwardRef]=o,c[r.Memo]=l;function u(w){return r.isMemo(w)?l:c[w.$$typeof]||n}var f=Object.defineProperty,h=Object.getOwnPropertyNames,g=Object.getOwnPropertySymbols,m=Object.getOwnPropertyDescriptor,x=Object.getPrototypeOf,S=Object.prototype;function T(w,b,v){if(typeof b!="string"){if(S){var D=x(b);D&&D!==S&&T(w,D,v)}var j=h(b);g&&(j=j.concat(g(b)));for(var A=u(w),z=u(b),R=0;R<j.length;++R){var M=j[R];if(!i[M]&&!(v&&v[M])&&!(z&&z[M])&&!(A&&A[M])){var k=m(b,M);try{f(w,M,k)}catch{}}}}return w}return Dp=T,Dp}m3();var x3=!0;function Rv(r,n,i){var o="";return i.split(" ").forEach(function(l){r[l]!==void 0?n.push(r[l]+";"):l&&(o+=l+" ")}),o}var Jh=function(n,i,o){var l=n.key+"-"+i.name;(o===!1||x3===!1)&&n.registered[l]===void 0&&(n.registered[l]=i.styles)},Wh=function(n,i,o){Jh(n,i,o);var l=n.key+"-"+i.name;if(n.inserted[i.name]===void 0){var c=i;do n.insert(i===c?"."+l:"",c,n.sheet,!0),c=c.next;while(c!==void 0)}};function y3(r){for(var n=0,i,o=0,l=r.length;l>=4;++o,l-=4)i=r.charCodeAt(o)&255|(r.charCodeAt(++o)&255)<<8|(r.charCodeAt(++o)&255)<<16|(r.charCodeAt(++o)&255)<<24,i=(i&65535)*1540483477+((i>>>16)*59797<<16),i^=i>>>24,n=(i&65535)*1540483477+((i>>>16)*59797<<16)^(n&65535)*1540483477+((n>>>16)*59797<<16);switch(l){case 3:n^=(r.charCodeAt(o+2)&255)<<16;case 2:n^=(r.charCodeAt(o+1)&255)<<8;case 1:n^=r.charCodeAt(o)&255,n=(n&65535)*1540483477+((n>>>16)*59797<<16)}return n^=n>>>13,n=(n&65535)*1540483477+((n>>>16)*59797<<16),((n^n>>>15)>>>0).toString(36)}var b3={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},v3=/[A-Z]|^ms/g,S3=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Av=function(n){return n.charCodeAt(1)===45},Yx=function(n){return n!=null&&typeof n!="boolean"},Mp=kv(function(r){return Av(r)?r:r.replace(v3,"-$&").toLowerCase()}),Gx=function(n,i){switch(n){case"animation":case"animationName":if(typeof i=="string")return i.replace(S3,function(o,l,c){return Kr={name:l,styles:c,next:Kr},l})}return b3[n]!==1&&!Av(n)&&typeof i=="number"&&i!==0?i+"px":i};function _s(r,n,i){if(i==null)return"";var o=i;if(o.__emotion_styles!==void 0)return o;switch(typeof i){case"boolean":return"";case"object":{var l=i;if(l.anim===1)return Kr={name:l.name,styles:l.styles,next:Kr},l.name;var c=i;if(c.styles!==void 0){var u=c.next;if(u!==void 0)for(;u!==void 0;)Kr={name:u.name,styles:u.styles,next:Kr},u=u.next;var f=c.styles+";";return f}return w3(r,n,i)}case"function":{if(r!==void 0){var h=Kr,g=i(r);return Kr=h,_s(r,n,g)}break}}var m=i;if(n==null)return m;var x=n[m];return x!==void 0?x:m}function w3(r,n,i){var o="";if(Array.isArray(i))for(var l=0;l<i.length;l++)o+=_s(r,n,i[l])+";";else for(var c in i){var u=i[c];if(typeof u!="object"){var f=u;n!=null&&n[f]!==void 0?o+=c+"{"+n[f]+"}":Yx(f)&&(o+=Mp(c)+":"+Gx(c,f)+";")}else if(Array.isArray(u)&&typeof u[0]=="string"&&(n==null||n[u[0]]===void 0))for(var h=0;h<u.length;h++)Yx(u[h])&&(o+=Mp(c)+":"+Gx(c,u[h])+";");else{var g=_s(r,n,u);switch(c){case"animation":case"animationName":{o+=Mp(c)+":"+g+";";break}default:o+=c+"{"+g+"}"}}}return o}var Xx=/label:\s*([^\s;{]+)\s*(;|$)/g,Kr;function Ju(r,n,i){if(r.length===1&&typeof r[0]=="object"&&r[0]!==null&&r[0].styles!==void 0)return r[0];var o=!0,l="";Kr=void 0;var c=r[0];if(c==null||c.raw===void 0)o=!1,l+=_s(i,n,c);else{var u=c;l+=u[0]}for(var f=1;f<r.length;f++)if(l+=_s(i,n,r[f]),o){var h=c;l+=h[f]}Xx.lastIndex=0;for(var g="",m;(m=Xx.exec(l))!==null;)g+="-"+m[1];var x=y3(l)+g;return{name:x,styles:l,next:Kr}}var _3=function(n){return n()},Lv=Ax.useInsertionEffect?Ax.useInsertionEffect:!1,zv=Lv||_3,Vx=Lv||_.useLayoutEffect,Dv=_.createContext(typeof HTMLElement<"u"?p3({key:"css"}):null);Dv.Provider;var e0=function(n){return _.forwardRef(function(i,o){var l=_.useContext(Dv);return n(i,l,o)})},t0=_.createContext({}),Ns={}.hasOwnProperty,fh="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",n0=function(n,i){var o={};for(var l in i)Ns.call(i,l)&&(o[l]=i[l]);return o[fh]=n,o},T3=function(n){var i=n.cache,o=n.serialized,l=n.isStringTag;return Jh(i,o,l),zv(function(){return Wh(i,o,l)}),null},E3=e0(function(r,n,i){var o=r.css;typeof o=="string"&&n.registered[o]!==void 0&&(o=n.registered[o]);var l=r[fh],c=[o],u="";typeof r.className=="string"?u=Rv(n.registered,c,r.className):r.className!=null&&(u=r.className+" ");var f=Ju(c,void 0,_.useContext(t0));u+=n.key+"-"+f.name;var h={};for(var g in r)Ns.call(r,g)&&g!=="css"&&g!==fh&&(h[g]=r[g]);return h.className=u,i&&(h.ref=i),_.createElement(_.Fragment,null,_.createElement(T3,{cache:n,serialized:f,isStringTag:typeof l=="string"}),_.createElement(l,h))}),r0=E3,ra=E.Fragment,C=function(n,i,o){return Ns.call(i,"css")?E.jsx(r0,n0(n,i),o):E.jsx(n,i,o)},ee=function(n,i,o){return Ns.call(i,"css")?E.jsxs(r0,n0(n,i),o):E.jsxs(n,i,o)},Fx=function(n,i){var o=arguments;if(i==null||!Ns.call(i,"css"))return _.createElement.apply(void 0,o);var l=o.length,c=new Array(l);c[0]=r0,c[1]=n0(n,i);for(var u=2;u<l;u++)c[u]=o[u];return _.createElement.apply(null,c)};(function(r){var n;n||(n=r.JSX||(r.JSX={}))})(Fx||(Fx={}));var C3=e0(function(r,n){var i=r.styles,o=Ju([i],void 0,_.useContext(t0)),l=_.useRef();return Vx(function(){var c=n.key+"-global",u=new n.sheet.constructor({key:c,nonce:n.sheet.nonce,container:n.sheet.container,speedy:n.sheet.isSpeedy}),f=!1,h=document.querySelector('style[data-emotion="'+c+" "+o.name+'"]');return n.sheet.tags.length&&(u.before=n.sheet.tags[0]),h!==null&&(f=!0,h.setAttribute("data-emotion",c),u.hydrate([h])),l.current=[u,f],function(){u.flush()}},[n]),Vx(function(){var c=l.current,u=c[0],f=c[1];if(f){c[1]=!1;return}if(o.next!==void 0&&Wh(n,o.next,!0),u.tags.length){var h=u.tags[u.tags.length-1].nextElementSibling;u.before=h,u.flush()}n.insert("",o,u,!1)},[n,o.name]),null});function L(){for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return Ju(n)}function Wu(){var r=L.apply(void 0,arguments),n="animation-"+r.name;return{name:n,styles:"@keyframes "+n+"{"+r.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}const Mv={DURATION:8e3,TREAD_LENGTH:8.913,TREAD_FRAGMENTS:40,LOGO_TEXT:"ON-WEAR"},Nv=_.createContext(void 0),jv=()=>{const r=_.useContext(Nv);if(!r)throw new Error("Logo components must be used within LogoProvider");return r},k3=()=>{const{DURATION:r,TREAD_LENGTH:n,TREAD_FRAGMENTS:i}=Mv,o=n/i,l=[],c=[];for(let u=0;u<i;++u){const f=u/i,h=u*o;l.push(E.jsx(Qx,{delay:-r+f*r,duration:r,moveX:-h,width:o},`back-${u}`)),c.push(E.jsx(Qx,{delay:-r+(f-.5)*r,duration:r,moveX:h,width:o},`front-${u}`))}return{backTreadArray:l,frontTreadArray:c}},O3=({children:r,value:n})=>{const[i]=_.useState(n);return E.jsx(Nv.Provider,{value:{text:i},children:r})};function Qx({delay:r,duration:n,moveX:i,width:o}){const{text:l}=jv(),c={animationDuration:`${n}ms`,animationDelay:`${r}ms`,width:`calc(${o}rem + 1px)`},u={transform:`translateX(${i}rem)`};return E.jsx("div",{className:"tot__tread",style:c,children:E.jsx("div",{className:"tot__tread-window","aria-hidden":"true","data-text":l,style:u})})}function Zx({layerFragments:r,ariaHidden:n}){const{text:i}=jv();return E.jsxs("div",{className:"tot__layer","aria-hidden":n,children:[i,r]})}function R3(){const{backTreadArray:r,frontTreadArray:n}=k3();return E.jsx(O3,{value:Mv.LOGO_TEXT,children:E.jsx(Fh,{to:"/main",style:{textDecoration:"none",color:"inherit"},children:E.jsxs("div",{className:"tot",style:{cursor:"pointer"},children:[E.jsx(Zx,{layerFragments:n}),E.jsx(Zx,{layerFragments:r,ariaHidden:!0})]})})})}const A3="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='24'%20viewBox='0%200%2024%2024'%20width='24'%3e%3cpath%20d='M22.56%2012.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26%201.37-1.04%202.53-2.21%203.31v2.77h3.57c2.08-1.92%203.28-4.74%203.28-8.09z'%20fill='%234285F4'/%3e%3cpath%20d='M12%2023c2.97%200%205.46-.98%207.28-2.66l-3.57-2.77c-.98.66-2.23%201.06-3.71%201.06-2.86%200-5.29-1.93-6.16-4.53H2.18v2.84C3.99%2020.53%207.7%2023%2012%2023z'%20fill='%2334A853'/%3e%3cpath%20d='M5.84%2014.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43%208.55%201%2010.22%201%2012s.43%203.45%201.18%204.93l2.85-2.22.81-.62z'%20fill='%23FBBC05'/%3e%3cpath%20d='M12%205.38c1.62%200%203.06.56%204.21%201.64l3.15-3.15C17.45%202.09%2014.97%201%2012%201%207.7%201%203.99%203.47%202.18%207.07l3.66%202.84c.87-2.6%203.3-4.53%206.16-4.53z'%20fill='%23EA4335'/%3e%3cpath%20d='M1%201h22v22H1z'%20fill='none'/%3e%3c/svg%3e",Kx=r=>{let n;const i=new Set,o=(g,m)=>{const x=typeof g=="function"?g(n):g;if(!Object.is(x,n)){const S=n;n=m??(typeof x!="object"||x===null)?x:Object.assign({},n,x),i.forEach(T=>T(n,S))}},l=()=>n,f={setState:o,getState:l,getInitialState:()=>h,subscribe:g=>(i.add(g),()=>i.delete(g))},h=n=r(o,l,f);return f},L3=(r=>r?Kx(r):Kx),z3=r=>r;function D3(r,n=z3){const i=us.useSyncExternalStore(r.subscribe,us.useCallback(()=>n(r.getState()),[r,n]),us.useCallback(()=>n(r.getInitialState()),[r,n]));return us.useDebugValue(i),i}const M3=r=>{const n=L3(r),i=o=>D3(n,o);return Object.assign(i,n),i},ed=(r=>M3);function N3(r,n){let i;try{i=r()}catch{return}return{getItem:l=>{var c;const u=h=>h===null?null:JSON.parse(h,void 0),f=(c=i.getItem(l))!=null?c:null;return f instanceof Promise?f.then(u):u(f)},setItem:(l,c)=>i.setItem(l,JSON.stringify(c,void 0)),removeItem:l=>i.removeItem(l)}}const ph=r=>n=>{try{const i=r(n);return i instanceof Promise?i:{then(o){return ph(o)(i)},catch(o){return this}}}catch(i){return{then(o){return this},catch(o){return ph(o)(i)}}}},j3=(r,n)=>(i,o,l)=>{let c={storage:N3(()=>window.localStorage),partialize:v=>v,version:0,merge:(v,D)=>({...D,...v}),...n},u=!1,f=0;const h=new Set,g=new Set;let m=c.storage;if(!m)return r((...v)=>{console.warn(`[zustand persist middleware] Unable to update item '${c.name}', the given storage is currently unavailable.`),i(...v)},o,l);const x=()=>{const v=c.partialize({...o()});return m.setItem(c.name,{state:v,version:c.version})},S=l.setState;l.setState=(v,D)=>(S(v,D),x());const T=r((...v)=>(i(...v),x()),o,l);l.getInitialState=()=>T;let w;const b=()=>{var v,D;if(!m)return;const j=++f;u=!1,h.forEach(z=>{var R;return z((R=o())!=null?R:T)});const A=((D=c.onRehydrateStorage)==null?void 0:D.call(c,(v=o())!=null?v:T))||void 0;return ph(m.getItem.bind(m))(c.name).then(z=>{if(z)if(typeof z.version=="number"&&z.version!==c.version){if(c.migrate){const R=c.migrate(z.state,z.version);return R instanceof Promise?R.then(M=>[!0,M]):[!0,R]}console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return[!1,z.state];return[!1,void 0]}).then(z=>{var R;if(j!==f)return;const[M,k]=z;if(w=c.merge(k,(R=o())!=null?R:T),i(w,!0),M)return x()}).then(()=>{j===f&&(A?.(o(),void 0),w=o(),u=!0,g.forEach(z=>z(w)))}).catch(z=>{j===f&&A?.(void 0,z)})};return l.persist={setOptions:v=>{c={...c,...v},v.storage&&(m=v.storage)},clearStorage:()=>{m?.removeItem(c.name)},getOptions:()=>c,rehydrate:()=>b(),hasHydrated:()=>u,onHydrate:v=>(h.add(v),()=>{h.delete(v)}),onFinishHydration:v=>(g.add(v),()=>{g.delete(v)})},c.skipHydration||b(),w||T},U3=j3,I3="modulepreload",B3=function(r){return"/demos/onwear/"+r},Jx={},H3=function(n,i,o){let l=Promise.resolve();if(i&&i.length>0){let g=function(m){return Promise.all(m.map(x=>Promise.resolve(x).then(S=>({status:"fulfilled",value:S}),S=>({status:"rejected",reason:S}))))};var u=g;document.getElementsByTagName("link");const f=document.querySelector("meta[property=csp-nonce]"),h=f?.nonce||f?.getAttribute("nonce");l=g(i.map(m=>{if(m=B3(m),m in Jx)return;Jx[m]=!0;const x=m.endsWith(".css"),S=x?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${m}"]${S}`))return;const T=document.createElement("link");if(T.rel=x?"stylesheet":I3,x||(T.as="script"),T.crossOrigin="",T.href=m,h&&T.setAttribute("nonce",h),document.head.appendChild(T),x)return new Promise((w,b)=>{T.addEventListener("load",w),T.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${m}`)))})}))}function c(f){const h=new Event("vite:preloadError",{cancelable:!0});if(h.payload=f,window.dispatchEvent(h),!h.defaultPrevented)throw f}return l.then(f=>{for(const h of f||[])h.status==="rejected"&&c(h.reason);return n().catch(c)})};function Uv(r,n){return function(){return r.apply(n,arguments)}}const{toString:$3}=Object.prototype,{getPrototypeOf:a0}=Object,{iterator:td,toStringTag:Iv}=Symbol,nd=(r=>n=>{const i=$3.call(n);return r[i]||(r[i]=i.slice(8,-1).toLowerCase())})(Object.create(null)),Hr=r=>(r=r.toLowerCase(),n=>nd(n)===r),rd=r=>n=>typeof n===r,{isArray:al}=Array,Vo=rd("undefined");function js(r){return r!==null&&!Vo(r)&&r.constructor!==null&&!Vo(r.constructor)&&Rn(r.constructor.isBuffer)&&r.constructor.isBuffer(r)}const Bv=Hr("ArrayBuffer");function P3(r){let n;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?n=ArrayBuffer.isView(r):n=r&&r.buffer&&Bv(r.buffer),n}const q3=rd("string"),Rn=rd("function"),Hv=rd("number"),Us=r=>r!==null&&typeof r=="object",Y3=r=>r===!0||r===!1,Eu=r=>{if(nd(r)!=="object")return!1;const n=a0(r);return(n===null||n===Object.prototype||Object.getPrototypeOf(n)===null)&&!(Iv in r)&&!(td in r)},G3=r=>{if(!Us(r)||js(r))return!1;try{return Object.keys(r).length===0&&Object.getPrototypeOf(r)===Object.prototype}catch{return!1}},X3=Hr("Date"),V3=Hr("File"),F3=r=>!!(r&&typeof r.uri<"u"),Q3=r=>r&&typeof r.getParts<"u",Z3=Hr("Blob"),K3=Hr("FileList"),J3=r=>Us(r)&&Rn(r.pipe);function W3(){return typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}}const Wx=W3(),ey=typeof Wx.FormData<"u"?Wx.FormData:void 0,eT=r=>{let n;return r&&(ey&&r instanceof ey||Rn(r.append)&&((n=nd(r))==="formdata"||n==="object"&&Rn(r.toString)&&r.toString()==="[object FormData]"))},tT=Hr("URLSearchParams"),[nT,rT,aT,iT]=["ReadableStream","Request","Response","Headers"].map(Hr),oT=r=>r.trim?r.trim():r.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Is(r,n,{allOwnKeys:i=!1}={}){if(r===null||typeof r>"u")return;let o,l;if(typeof r!="object"&&(r=[r]),al(r))for(o=0,l=r.length;o<l;o++)n.call(null,r[o],o,r);else{if(js(r))return;const c=i?Object.getOwnPropertyNames(r):Object.keys(r),u=c.length;let f;for(o=0;o<u;o++)f=c[o],n.call(null,r[f],f,r)}}function $v(r,n){if(js(r))return null;n=n.toLowerCase();const i=Object.keys(r);let o=i.length,l;for(;o-- >0;)if(l=i[o],n===l.toLowerCase())return l;return null}const Hi=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Pv=r=>!Vo(r)&&r!==Hi;function hh(){const{caseless:r,skipUndefined:n}=Pv(this)&&this||{},i={},o=(l,c)=>{if(c==="__proto__"||c==="constructor"||c==="prototype")return;const u=r&&$v(i,c)||c;Eu(i[u])&&Eu(l)?i[u]=hh(i[u],l):Eu(l)?i[u]=hh({},l):al(l)?i[u]=l.slice():(!n||!Vo(l))&&(i[u]=l)};for(let l=0,c=arguments.length;l<c;l++)arguments[l]&&Is(arguments[l],o);return i}const lT=(r,n,i,{allOwnKeys:o}={})=>(Is(n,(l,c)=>{i&&Rn(l)?Object.defineProperty(r,c,{value:Uv(l,i),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(r,c,{value:l,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:o}),r),sT=r=>(r.charCodeAt(0)===65279&&(r=r.slice(1)),r),cT=(r,n,i,o)=>{r.prototype=Object.create(n.prototype,o),Object.defineProperty(r.prototype,"constructor",{value:r,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(r,"super",{value:n.prototype}),i&&Object.assign(r.prototype,i)},uT=(r,n,i,o)=>{let l,c,u;const f={};if(n=n||{},r==null)return n;do{for(l=Object.getOwnPropertyNames(r),c=l.length;c-- >0;)u=l[c],(!o||o(u,r,n))&&!f[u]&&(n[u]=r[u],f[u]=!0);r=i!==!1&&a0(r)}while(r&&(!i||i(r,n))&&r!==Object.prototype);return n},dT=(r,n,i)=>{r=String(r),(i===void 0||i>r.length)&&(i=r.length),i-=n.length;const o=r.indexOf(n,i);return o!==-1&&o===i},fT=r=>{if(!r)return null;if(al(r))return r;let n=r.length;if(!Hv(n))return null;const i=new Array(n);for(;n-- >0;)i[n]=r[n];return i},pT=(r=>n=>r&&n instanceof r)(typeof Uint8Array<"u"&&a0(Uint8Array)),hT=(r,n)=>{const o=(r&&r[td]).call(r);let l;for(;(l=o.next())&&!l.done;){const c=l.value;n.call(r,c[0],c[1])}},gT=(r,n)=>{let i;const o=[];for(;(i=r.exec(n))!==null;)o.push(i);return o},mT=Hr("HTMLFormElement"),xT=r=>r.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(i,o,l){return o.toUpperCase()+l}),ty=(({hasOwnProperty:r})=>(n,i)=>r.call(n,i))(Object.prototype),yT=Hr("RegExp"),qv=(r,n)=>{const i=Object.getOwnPropertyDescriptors(r),o={};Is(i,(l,c)=>{let u;(u=n(l,c,r))!==!1&&(o[c]=u||l)}),Object.defineProperties(r,o)},bT=r=>{qv(r,(n,i)=>{if(Rn(r)&&["arguments","caller","callee"].indexOf(i)!==-1)return!1;const o=r[i];if(Rn(o)){if(n.enumerable=!1,"writable"in n){n.writable=!1;return}n.set||(n.set=()=>{throw Error("Can not rewrite read-only method '"+i+"'")})}})},vT=(r,n)=>{const i={},o=l=>{l.forEach(c=>{i[c]=!0})};return al(r)?o(r):o(String(r).split(n)),i},ST=()=>{},wT=(r,n)=>r!=null&&Number.isFinite(r=+r)?r:n;function _T(r){return!!(r&&Rn(r.append)&&r[Iv]==="FormData"&&r[td])}const TT=r=>{const n=new Array(10),i=(o,l)=>{if(Us(o)){if(n.indexOf(o)>=0)return;if(js(o))return o;if(!("toJSON"in o)){n[l]=o;const c=al(o)?[]:{};return Is(o,(u,f)=>{const h=i(u,l+1);!Vo(h)&&(c[f]=h)}),n[l]=void 0,c}}return o};return i(r,0)},ET=Hr("AsyncFunction"),CT=r=>r&&(Us(r)||Rn(r))&&Rn(r.then)&&Rn(r.catch),Yv=((r,n)=>r?setImmediate:n?((i,o)=>(Hi.addEventListener("message",({source:l,data:c})=>{l===Hi&&c===i&&o.length&&o.shift()()},!1),l=>{o.push(l),Hi.postMessage(i,"*")}))(`axios@${Math.random()}`,[]):i=>setTimeout(i))(typeof setImmediate=="function",Rn(Hi.postMessage)),kT=typeof queueMicrotask<"u"?queueMicrotask.bind(Hi):typeof process<"u"&&process.nextTick||Yv,OT=r=>r!=null&&Rn(r[td]),J={isArray:al,isArrayBuffer:Bv,isBuffer:js,isFormData:eT,isArrayBufferView:P3,isString:q3,isNumber:Hv,isBoolean:Y3,isObject:Us,isPlainObject:Eu,isEmptyObject:G3,isReadableStream:nT,isRequest:rT,isResponse:aT,isHeaders:iT,isUndefined:Vo,isDate:X3,isFile:V3,isReactNativeBlob:F3,isReactNative:Q3,isBlob:Z3,isRegExp:yT,isFunction:Rn,isStream:J3,isURLSearchParams:tT,isTypedArray:pT,isFileList:K3,forEach:Is,merge:hh,extend:lT,trim:oT,stripBOM:sT,inherits:cT,toFlatObject:uT,kindOf:nd,kindOfTest:Hr,endsWith:dT,toArray:fT,forEachEntry:hT,matchAll:gT,isHTMLForm:mT,hasOwnProperty:ty,hasOwnProp:ty,reduceDescriptors:qv,freezeMethods:bT,toObjectSet:vT,toCamelCase:xT,noop:ST,toFiniteNumber:wT,findKey:$v,global:Hi,isContextDefined:Pv,isSpecCompliantForm:_T,toJSONObject:TT,isAsyncFn:ET,isThenable:CT,setImmediate:Yv,asap:kT,isIterable:OT};let Le=class Gv extends Error{static from(n,i,o,l,c,u){const f=new Gv(n.message,i||n.code,o,l,c);return f.cause=n,f.name=n.name,n.status!=null&&f.status==null&&(f.status=n.status),u&&Object.assign(f,u),f}constructor(n,i,o,l,c){super(n),Object.defineProperty(this,"message",{value:n,enumerable:!0,writable:!0,configurable:!0}),this.name="AxiosError",this.isAxiosError=!0,i&&(this.code=i),o&&(this.config=o),l&&(this.request=l),c&&(this.response=c,this.status=c.status)}toJSON(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:J.toJSONObject(this.config),code:this.code,status:this.status}}};Le.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";Le.ERR_BAD_OPTION="ERR_BAD_OPTION";Le.ECONNABORTED="ECONNABORTED";Le.ETIMEDOUT="ETIMEDOUT";Le.ERR_NETWORK="ERR_NETWORK";Le.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";Le.ERR_DEPRECATED="ERR_DEPRECATED";Le.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";Le.ERR_BAD_REQUEST="ERR_BAD_REQUEST";Le.ERR_CANCELED="ERR_CANCELED";Le.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";Le.ERR_INVALID_URL="ERR_INVALID_URL";const RT=null;function gh(r){return J.isPlainObject(r)||J.isArray(r)}function Xv(r){return J.endsWith(r,"[]")?r.slice(0,-2):r}function Np(r,n,i){return r?r.concat(n).map(function(l,c){return l=Xv(l),!i&&c?"["+l+"]":l}).join(i?".":""):n}function AT(r){return J.isArray(r)&&!r.some(gh)}const LT=J.toFlatObject(J,{},null,function(n){return/^is[A-Z]/.test(n)});function ad(r,n,i){if(!J.isObject(r))throw new TypeError("target must be an object");n=n||new FormData,i=J.toFlatObject(i,{metaTokens:!0,dots:!1,indexes:!1},!1,function(b,v){return!J.isUndefined(v[b])});const o=i.metaTokens,l=i.visitor||m,c=i.dots,u=i.indexes,h=(i.Blob||typeof Blob<"u"&&Blob)&&J.isSpecCompliantForm(n);if(!J.isFunction(l))throw new TypeError("visitor must be a function");function g(w){if(w===null)return"";if(J.isDate(w))return w.toISOString();if(J.isBoolean(w))return w.toString();if(!h&&J.isBlob(w))throw new Le("Blob is not supported. Use a Buffer instead.");return J.isArrayBuffer(w)||J.isTypedArray(w)?h&&typeof Blob=="function"?new Blob([w]):Buffer.from(w):w}function m(w,b,v){let D=w;if(J.isReactNative(n)&&J.isReactNativeBlob(w))return n.append(Np(v,b,c),g(w)),!1;if(w&&!v&&typeof w=="object"){if(J.endsWith(b,"{}"))b=o?b:b.slice(0,-2),w=JSON.stringify(w);else if(J.isArray(w)&&AT(w)||(J.isFileList(w)||J.endsWith(b,"[]"))&&(D=J.toArray(w)))return b=Xv(b),D.forEach(function(A,z){!(J.isUndefined(A)||A===null)&&n.append(u===!0?Np([b],z,c):u===null?b:b+"[]",g(A))}),!1}return gh(w)?!0:(n.append(Np(v,b,c),g(w)),!1)}const x=[],S=Object.assign(LT,{defaultVisitor:m,convertValue:g,isVisitable:gh});function T(w,b){if(!J.isUndefined(w)){if(x.indexOf(w)!==-1)throw Error("Circular reference detected in "+b.join("."));x.push(w),J.forEach(w,function(D,j){(!(J.isUndefined(D)||D===null)&&l.call(n,D,J.isString(j)?j.trim():j,b,S))===!0&&T(D,b?b.concat(j):[j])}),x.pop()}}if(!J.isObject(r))throw new TypeError("data must be an object");return T(r),n}function ny(r){const n={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(r).replace(/[!'()~]|%20|%00/g,function(o){return n[o]})}function i0(r,n){this._pairs=[],r&&ad(r,this,n)}const Vv=i0.prototype;Vv.append=function(n,i){this._pairs.push([n,i])};Vv.toString=function(n){const i=n?function(o){return n.call(this,o,ny)}:ny;return this._pairs.map(function(l){return i(l[0])+"="+i(l[1])},"").join("&")};function zT(r){return encodeURIComponent(r).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function Fv(r,n,i){if(!n)return r;const o=i&&i.encode||zT,l=J.isFunction(i)?{serialize:i}:i,c=l&&l.serialize;let u;if(c?u=c(n,l):u=J.isURLSearchParams(n)?n.toString():new i0(n,l).toString(o),u){const f=r.indexOf("#");f!==-1&&(r=r.slice(0,f)),r+=(r.indexOf("?")===-1?"?":"&")+u}return r}class ry{constructor(){this.handlers=[]}use(n,i,o){return this.handlers.push({fulfilled:n,rejected:i,synchronous:o?o.synchronous:!1,runWhen:o?o.runWhen:null}),this.handlers.length-1}eject(n){this.handlers[n]&&(this.handlers[n]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(n){J.forEach(this.handlers,function(o){o!==null&&n(o)})}}const o0={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0},DT=typeof URLSearchParams<"u"?URLSearchParams:i0,MT=typeof FormData<"u"?FormData:null,NT=typeof Blob<"u"?Blob:null,jT={isBrowser:!0,classes:{URLSearchParams:DT,FormData:MT,Blob:NT},protocols:["http","https","file","blob","url","data"]},l0=typeof window<"u"&&typeof document<"u",mh=typeof navigator=="object"&&navigator||void 0,UT=l0&&(!mh||["ReactNative","NativeScript","NS"].indexOf(mh.product)<0),IT=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",BT=l0&&window.location.href||"http://localhost",HT=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:l0,hasStandardBrowserEnv:UT,hasStandardBrowserWebWorkerEnv:IT,navigator:mh,origin:BT},Symbol.toStringTag,{value:"Module"})),hn={...HT,...jT};function $T(r,n){return ad(r,new hn.classes.URLSearchParams,{visitor:function(i,o,l,c){return hn.isNode&&J.isBuffer(i)?(this.append(o,i.toString("base64")),!1):c.defaultVisitor.apply(this,arguments)},...n})}function PT(r){return J.matchAll(/\w+|\[(\w*)]/g,r).map(n=>n[0]==="[]"?"":n[1]||n[0])}function qT(r){const n={},i=Object.keys(r);let o;const l=i.length;let c;for(o=0;o<l;o++)c=i[o],n[c]=r[c];return n}function Qv(r){function n(i,o,l,c){let u=i[c++];if(u==="__proto__")return!0;const f=Number.isFinite(+u),h=c>=i.length;return u=!u&&J.isArray(l)?l.length:u,h?(J.hasOwnProp(l,u)?l[u]=[l[u],o]:l[u]=o,!f):((!l[u]||!J.isObject(l[u]))&&(l[u]=[]),n(i,o,l[u],c)&&J.isArray(l[u])&&(l[u]=qT(l[u])),!f)}if(J.isFormData(r)&&J.isFunction(r.entries)){const i={};return J.forEachEntry(r,(o,l)=>{n(PT(o),l,i,0)}),i}return null}function YT(r,n,i){if(J.isString(r))try{return(n||JSON.parse)(r),J.trim(r)}catch(o){if(o.name!=="SyntaxError")throw o}return(i||JSON.stringify)(r)}const Bs={transitional:o0,adapter:["xhr","http","fetch"],transformRequest:[function(n,i){const o=i.getContentType()||"",l=o.indexOf("application/json")>-1,c=J.isObject(n);if(c&&J.isHTMLForm(n)&&(n=new FormData(n)),J.isFormData(n))return l?JSON.stringify(Qv(n)):n;if(J.isArrayBuffer(n)||J.isBuffer(n)||J.isStream(n)||J.isFile(n)||J.isBlob(n)||J.isReadableStream(n))return n;if(J.isArrayBufferView(n))return n.buffer;if(J.isURLSearchParams(n))return i.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),n.toString();let f;if(c){if(o.indexOf("application/x-www-form-urlencoded")>-1)return $T(n,this.formSerializer).toString();if((f=J.isFileList(n))||o.indexOf("multipart/form-data")>-1){const h=this.env&&this.env.FormData;return ad(f?{"files[]":n}:n,h&&new h,this.formSerializer)}}return c||l?(i.setContentType("application/json",!1),YT(n)):n}],transformResponse:[function(n){const i=this.transitional||Bs.transitional,o=i&&i.forcedJSONParsing,l=this.responseType==="json";if(J.isResponse(n)||J.isReadableStream(n))return n;if(n&&J.isString(n)&&(o&&!this.responseType||l)){const u=!(i&&i.silentJSONParsing)&&l;try{return JSON.parse(n,this.parseReviver)}catch(f){if(u)throw f.name==="SyntaxError"?Le.from(f,Le.ERR_BAD_RESPONSE,this,null,this.response):f}}return n}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:hn.classes.FormData,Blob:hn.classes.Blob},validateStatus:function(n){return n>=200&&n<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};J.forEach(["delete","get","head","post","put","patch"],r=>{Bs.headers[r]={}});const GT=J.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),XT=r=>{const n={};let i,o,l;return r&&r.split(`
`).forEach(function(u){l=u.indexOf(":"),i=u.substring(0,l).trim().toLowerCase(),o=u.substring(l+1).trim(),!(!i||n[i]&&GT[i])&&(i==="set-cookie"?n[i]?n[i].push(o):n[i]=[o]:n[i]=n[i]?n[i]+", "+o:o)}),n},ay=Symbol("internals"),VT=r=>!/[\r\n]/.test(r);function Zv(r,n){if(!(r===!1||r==null)){if(J.isArray(r)){r.forEach(i=>Zv(i,n));return}if(!VT(String(r)))throw new Error(`Invalid character in header content ["${n}"]`)}}function es(r){return r&&String(r).trim().toLowerCase()}function FT(r){let n=r.length;for(;n>0;){const i=r.charCodeAt(n-1);if(i!==10&&i!==13)break;n-=1}return n===r.length?r:r.slice(0,n)}function Cu(r){return r===!1||r==null?r:J.isArray(r)?r.map(Cu):FT(String(r))}function QT(r){const n=Object.create(null),i=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let o;for(;o=i.exec(r);)n[o[1]]=o[2];return n}const ZT=r=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(r.trim());function jp(r,n,i,o,l){if(J.isFunction(o))return o.call(this,n,i);if(l&&(n=i),!!J.isString(n)){if(J.isString(o))return n.indexOf(o)!==-1;if(J.isRegExp(o))return o.test(n)}}function KT(r){return r.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(n,i,o)=>i.toUpperCase()+o)}function JT(r,n){const i=J.toCamelCase(" "+n);["get","set","has"].forEach(o=>{Object.defineProperty(r,o+i,{value:function(l,c,u){return this[o].call(this,n,l,c,u)},configurable:!0})})}let An=class{constructor(n){n&&this.set(n)}set(n,i,o){const l=this;function c(f,h,g){const m=es(h);if(!m)throw new Error("header name must be a non-empty string");const x=J.findKey(l,m);(!x||l[x]===void 0||g===!0||g===void 0&&l[x]!==!1)&&(Zv(f,h),l[x||h]=Cu(f))}const u=(f,h)=>J.forEach(f,(g,m)=>c(g,m,h));if(J.isPlainObject(n)||n instanceof this.constructor)u(n,i);else if(J.isString(n)&&(n=n.trim())&&!ZT(n))u(XT(n),i);else if(J.isObject(n)&&J.isIterable(n)){let f={},h,g;for(const m of n){if(!J.isArray(m))throw TypeError("Object iterator must return a key-value pair");f[g=m[0]]=(h=f[g])?J.isArray(h)?[...h,m[1]]:[h,m[1]]:m[1]}u(f,i)}else n!=null&&c(i,n,o);return this}get(n,i){if(n=es(n),n){const o=J.findKey(this,n);if(o){const l=this[o];if(!i)return l;if(i===!0)return QT(l);if(J.isFunction(i))return i.call(this,l,o);if(J.isRegExp(i))return i.exec(l);throw new TypeError("parser must be boolean|regexp|function")}}}has(n,i){if(n=es(n),n){const o=J.findKey(this,n);return!!(o&&this[o]!==void 0&&(!i||jp(this,this[o],o,i)))}return!1}delete(n,i){const o=this;let l=!1;function c(u){if(u=es(u),u){const f=J.findKey(o,u);f&&(!i||jp(o,o[f],f,i))&&(delete o[f],l=!0)}}return J.isArray(n)?n.forEach(c):c(n),l}clear(n){const i=Object.keys(this);let o=i.length,l=!1;for(;o--;){const c=i[o];(!n||jp(this,this[c],c,n,!0))&&(delete this[c],l=!0)}return l}normalize(n){const i=this,o={};return J.forEach(this,(l,c)=>{const u=J.findKey(o,c);if(u){i[u]=Cu(l),delete i[c];return}const f=n?KT(c):String(c).trim();f!==c&&delete i[c],i[f]=Cu(l),o[f]=!0}),this}concat(...n){return this.constructor.concat(this,...n)}toJSON(n){const i=Object.create(null);return J.forEach(this,(o,l)=>{o!=null&&o!==!1&&(i[l]=n&&J.isArray(o)?o.join(", "):o)}),i}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([n,i])=>n+": "+i).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(n){return n instanceof this?n:new this(n)}static concat(n,...i){const o=new this(n);return i.forEach(l=>o.set(l)),o}static accessor(n){const o=(this[ay]=this[ay]={accessors:{}}).accessors,l=this.prototype;function c(u){const f=es(u);o[f]||(JT(l,u),o[f]=!0)}return J.isArray(n)?n.forEach(c):c(n),this}};An.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);J.reduceDescriptors(An.prototype,({value:r},n)=>{let i=n[0].toUpperCase()+n.slice(1);return{get:()=>r,set(o){this[i]=o}}});J.freezeMethods(An);function Up(r,n){const i=this||Bs,o=n||i,l=An.from(o.headers);let c=o.data;return J.forEach(r,function(f){c=f.call(i,c,l.normalize(),n?n.status:void 0)}),l.normalize(),c}function Kv(r){return!!(r&&r.__CANCEL__)}let Hs=class extends Le{constructor(n,i,o){super(n??"canceled",Le.ERR_CANCELED,i,o),this.name="CanceledError",this.__CANCEL__=!0}};function Jv(r,n,i){const o=i.config.validateStatus;!i.status||!o||o(i.status)?r(i):n(new Le("Request failed with status code "+i.status,[Le.ERR_BAD_REQUEST,Le.ERR_BAD_RESPONSE][Math.floor(i.status/100)-4],i.config,i.request,i))}function WT(r){const n=/^([-+\w]{1,25})(:?\/\/|:)/.exec(r);return n&&n[1]||""}function e6(r,n){r=r||10;const i=new Array(r),o=new Array(r);let l=0,c=0,u;return n=n!==void 0?n:1e3,function(h){const g=Date.now(),m=o[c];u||(u=g),i[l]=h,o[l]=g;let x=c,S=0;for(;x!==l;)S+=i[x++],x=x%r;if(l=(l+1)%r,l===c&&(c=(c+1)%r),g-u<n)return;const T=m&&g-m;return T?Math.round(S*1e3/T):void 0}}function t6(r,n){let i=0,o=1e3/n,l,c;const u=(g,m=Date.now())=>{i=m,l=null,c&&(clearTimeout(c),c=null),r(...g)};return[(...g)=>{const m=Date.now(),x=m-i;x>=o?u(g,m):(l=g,c||(c=setTimeout(()=>{c=null,u(l)},o-x)))},()=>l&&u(l)]}const Nu=(r,n,i=3)=>{let o=0;const l=e6(50,250);return t6(c=>{const u=c.loaded,f=c.lengthComputable?c.total:void 0,h=u-o,g=l(h),m=u<=f;o=u;const x={loaded:u,total:f,progress:f?u/f:void 0,bytes:h,rate:g||void 0,estimated:g&&f&&m?(f-u)/g:void 0,event:c,lengthComputable:f!=null,[n?"download":"upload"]:!0};r(x)},i)},iy=(r,n)=>{const i=r!=null;return[o=>n[0]({lengthComputable:i,total:r,loaded:o}),n[1]]},oy=r=>(...n)=>J.asap(()=>r(...n)),n6=hn.hasStandardBrowserEnv?((r,n)=>i=>(i=new URL(i,hn.origin),r.protocol===i.protocol&&r.host===i.host&&(n||r.port===i.port)))(new URL(hn.origin),hn.navigator&&/(msie|trident)/i.test(hn.navigator.userAgent)):()=>!0,r6=hn.hasStandardBrowserEnv?{write(r,n,i,o,l,c,u){if(typeof document>"u")return;const f=[`${r}=${encodeURIComponent(n)}`];J.isNumber(i)&&f.push(`expires=${new Date(i).toUTCString()}`),J.isString(o)&&f.push(`path=${o}`),J.isString(l)&&f.push(`domain=${l}`),c===!0&&f.push("secure"),J.isString(u)&&f.push(`SameSite=${u}`),document.cookie=f.join("; ")},read(r){if(typeof document>"u")return null;const n=document.cookie.match(new RegExp("(?:^|; )"+r+"=([^;]*)"));return n?decodeURIComponent(n[1]):null},remove(r){this.write(r,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function a6(r){return typeof r!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(r)}function i6(r,n){return n?r.replace(/\/?\/$/,"")+"/"+n.replace(/^\/+/,""):r}function Wv(r,n,i){let o=!a6(n);return r&&(o||i==!1)?i6(r,n):n}const ly=r=>r instanceof An?{...r}:r;function Fi(r,n){n=n||{};const i={};function o(g,m,x,S){return J.isPlainObject(g)&&J.isPlainObject(m)?J.merge.call({caseless:S},g,m):J.isPlainObject(m)?J.merge({},m):J.isArray(m)?m.slice():m}function l(g,m,x,S){if(J.isUndefined(m)){if(!J.isUndefined(g))return o(void 0,g,x,S)}else return o(g,m,x,S)}function c(g,m){if(!J.isUndefined(m))return o(void 0,m)}function u(g,m){if(J.isUndefined(m)){if(!J.isUndefined(g))return o(void 0,g)}else return o(void 0,m)}function f(g,m,x){if(x in n)return o(g,m);if(x in r)return o(void 0,g)}const h={url:c,method:c,data:c,baseURL:u,transformRequest:u,transformResponse:u,paramsSerializer:u,timeout:u,timeoutMessage:u,withCredentials:u,withXSRFToken:u,adapter:u,responseType:u,xsrfCookieName:u,xsrfHeaderName:u,onUploadProgress:u,onDownloadProgress:u,decompress:u,maxContentLength:u,maxBodyLength:u,beforeRedirect:u,transport:u,httpAgent:u,httpsAgent:u,cancelToken:u,socketPath:u,responseEncoding:u,validateStatus:f,headers:(g,m,x)=>l(ly(g),ly(m),x,!0)};return J.forEach(Object.keys({...r,...n}),function(m){if(m==="__proto__"||m==="constructor"||m==="prototype")return;const x=J.hasOwnProp(h,m)?h[m]:l,S=x(r[m],n[m],m);J.isUndefined(S)&&x!==f||(i[m]=S)}),i}const e2=r=>{const n=Fi({},r);let{data:i,withXSRFToken:o,xsrfHeaderName:l,xsrfCookieName:c,headers:u,auth:f}=n;if(n.headers=u=An.from(u),n.url=Fv(Wv(n.baseURL,n.url,n.allowAbsoluteUrls),r.params,r.paramsSerializer),f&&u.set("Authorization","Basic "+btoa((f.username||"")+":"+(f.password?unescape(encodeURIComponent(f.password)):""))),J.isFormData(i)){if(hn.hasStandardBrowserEnv||hn.hasStandardBrowserWebWorkerEnv)u.setContentType(void 0);else if(J.isFunction(i.getHeaders)){const h=i.getHeaders(),g=["content-type","content-length"];Object.entries(h).forEach(([m,x])=>{g.includes(m.toLowerCase())&&u.set(m,x)})}}if(hn.hasStandardBrowserEnv&&(o&&J.isFunction(o)&&(o=o(n)),o||o!==!1&&n6(n.url))){const h=l&&c&&r6.read(c);h&&u.set(l,h)}return n},o6=typeof XMLHttpRequest<"u",l6=o6&&function(r){return new Promise(function(i,o){const l=e2(r);let c=l.data;const u=An.from(l.headers).normalize();let{responseType:f,onUploadProgress:h,onDownloadProgress:g}=l,m,x,S,T,w;function b(){T&&T(),w&&w(),l.cancelToken&&l.cancelToken.unsubscribe(m),l.signal&&l.signal.removeEventListener("abort",m)}let v=new XMLHttpRequest;v.open(l.method.toUpperCase(),l.url,!0),v.timeout=l.timeout;function D(){if(!v)return;const A=An.from("getAllResponseHeaders"in v&&v.getAllResponseHeaders()),R={data:!f||f==="text"||f==="json"?v.responseText:v.response,status:v.status,statusText:v.statusText,headers:A,config:r,request:v};Jv(function(k){i(k),b()},function(k){o(k),b()},R),v=null}"onloadend"in v?v.onloadend=D:v.onreadystatechange=function(){!v||v.readyState!==4||v.status===0&&!(v.responseURL&&v.responseURL.indexOf("file:")===0)||setTimeout(D)},v.onabort=function(){v&&(o(new Le("Request aborted",Le.ECONNABORTED,r,v)),v=null)},v.onerror=function(z){const R=z&&z.message?z.message:"Network Error",M=new Le(R,Le.ERR_NETWORK,r,v);M.event=z||null,o(M),v=null},v.ontimeout=function(){let z=l.timeout?"timeout of "+l.timeout+"ms exceeded":"timeout exceeded";const R=l.transitional||o0;l.timeoutErrorMessage&&(z=l.timeoutErrorMessage),o(new Le(z,R.clarifyTimeoutError?Le.ETIMEDOUT:Le.ECONNABORTED,r,v)),v=null},c===void 0&&u.setContentType(null),"setRequestHeader"in v&&J.forEach(u.toJSON(),function(z,R){v.setRequestHeader(R,z)}),J.isUndefined(l.withCredentials)||(v.withCredentials=!!l.withCredentials),f&&f!=="json"&&(v.responseType=l.responseType),g&&([S,w]=Nu(g,!0),v.addEventListener("progress",S)),h&&v.upload&&([x,T]=Nu(h),v.upload.addEventListener("progress",x),v.upload.addEventListener("loadend",T)),(l.cancelToken||l.signal)&&(m=A=>{v&&(o(!A||A.type?new Hs(null,r,v):A),v.abort(),v=null)},l.cancelToken&&l.cancelToken.subscribe(m),l.signal&&(l.signal.aborted?m():l.signal.addEventListener("abort",m)));const j=WT(l.url);if(j&&hn.protocols.indexOf(j)===-1){o(new Le("Unsupported protocol "+j+":",Le.ERR_BAD_REQUEST,r));return}v.send(c||null)})},s6=(r,n)=>{const{length:i}=r=r?r.filter(Boolean):[];if(n||i){let o=new AbortController,l;const c=function(g){if(!l){l=!0,f();const m=g instanceof Error?g:this.reason;o.abort(m instanceof Le?m:new Hs(m instanceof Error?m.message:m))}};let u=n&&setTimeout(()=>{u=null,c(new Le(`timeout of ${n}ms exceeded`,Le.ETIMEDOUT))},n);const f=()=>{r&&(u&&clearTimeout(u),u=null,r.forEach(g=>{g.unsubscribe?g.unsubscribe(c):g.removeEventListener("abort",c)}),r=null)};r.forEach(g=>g.addEventListener("abort",c));const{signal:h}=o;return h.unsubscribe=()=>J.asap(f),h}},c6=function*(r,n){let i=r.byteLength;if(i<n){yield r;return}let o=0,l;for(;o<i;)l=o+n,yield r.slice(o,l),o=l},u6=async function*(r,n){for await(const i of d6(r))yield*c6(i,n)},d6=async function*(r){if(r[Symbol.asyncIterator]){yield*r;return}const n=r.getReader();try{for(;;){const{done:i,value:o}=await n.read();if(i)break;yield o}}finally{await n.cancel()}},sy=(r,n,i,o)=>{const l=u6(r,n);let c=0,u,f=h=>{u||(u=!0,o&&o(h))};return new ReadableStream({async pull(h){try{const{done:g,value:m}=await l.next();if(g){f(),h.close();return}let x=m.byteLength;if(i){let S=c+=x;i(S)}h.enqueue(new Uint8Array(m))}catch(g){throw f(g),g}},cancel(h){return f(h),l.return()}},{highWaterMark:2})},cy=64*1024,{isFunction:ru}=J,f6=(({Request:r,Response:n})=>({Request:r,Response:n}))(J.global),{ReadableStream:uy,TextEncoder:dy}=J.global,fy=(r,...n)=>{try{return!!r(...n)}catch{return!1}},p6=r=>{r=J.merge.call({skipUndefined:!0},f6,r);const{fetch:n,Request:i,Response:o}=r,l=n?ru(n):typeof fetch=="function",c=ru(i),u=ru(o);if(!l)return!1;const f=l&&ru(uy),h=l&&(typeof dy=="function"?(w=>b=>w.encode(b))(new dy):async w=>new Uint8Array(await new i(w).arrayBuffer())),g=c&&f&&fy(()=>{let w=!1;const b=new uy,v=new i(hn.origin,{body:b,method:"POST",get duplex(){return w=!0,"half"}}).headers.has("Content-Type");return b.cancel(),w&&!v}),m=u&&f&&fy(()=>J.isReadableStream(new o("").body)),x={stream:m&&(w=>w.body)};l&&["text","arrayBuffer","blob","formData","stream"].forEach(w=>{!x[w]&&(x[w]=(b,v)=>{let D=b&&b[w];if(D)return D.call(b);throw new Le(`Response type '${w}' is not supported`,Le.ERR_NOT_SUPPORT,v)})});const S=async w=>{if(w==null)return 0;if(J.isBlob(w))return w.size;if(J.isSpecCompliantForm(w))return(await new i(hn.origin,{method:"POST",body:w}).arrayBuffer()).byteLength;if(J.isArrayBufferView(w)||J.isArrayBuffer(w))return w.byteLength;if(J.isURLSearchParams(w)&&(w=w+""),J.isString(w))return(await h(w)).byteLength},T=async(w,b)=>{const v=J.toFiniteNumber(w.getContentLength());return v??S(b)};return async w=>{let{url:b,method:v,data:D,signal:j,cancelToken:A,timeout:z,onDownloadProgress:R,onUploadProgress:M,responseType:k,headers:I,withCredentials:$="same-origin",fetchOptions:te}=e2(w),re=n||fetch;k=k?(k+"").toLowerCase():"text";let le=s6([j,A&&A.toAbortSignal()],z),ye=null;const Se=le&&le.unsubscribe&&(()=>{le.unsubscribe()});let we;try{if(M&&g&&v!=="get"&&v!=="head"&&(we=await T(I,D))!==0){let N=new i(b,{method:"POST",body:D,duplex:"half"}),Y;if(J.isFormData(D)&&(Y=N.headers.get("content-type"))&&I.setContentType(Y),N.body){const[K,oe]=iy(we,Nu(oy(M)));D=sy(N.body,cy,K,oe)}}J.isString($)||($=$?"include":"omit");const U=c&&"credentials"in i.prototype,H={...te,signal:le,method:v.toUpperCase(),headers:I.normalize().toJSON(),body:D,duplex:"half",credentials:U?$:void 0};ye=c&&new i(b,H);let X=await(c?re(ye,te):re(b,H));const ue=m&&(k==="stream"||k==="response");if(m&&(R||ue&&Se)){const N={};["status","statusText","headers"].forEach(ve=>{N[ve]=X[ve]});const Y=J.toFiniteNumber(X.headers.get("content-length")),[K,oe]=R&&iy(Y,Nu(oy(R),!0))||[];X=new o(sy(X.body,cy,K,()=>{oe&&oe(),Se&&Se()}),N)}k=k||"text";let pe=await x[J.findKey(x,k)||"text"](X,w);return!ue&&Se&&Se(),await new Promise((N,Y)=>{Jv(N,Y,{data:pe,headers:An.from(X.headers),status:X.status,statusText:X.statusText,config:w,request:ye})})}catch(U){throw Se&&Se(),U&&U.name==="TypeError"&&/Load failed|fetch/i.test(U.message)?Object.assign(new Le("Network Error",Le.ERR_NETWORK,w,ye,U&&U.response),{cause:U.cause||U}):Le.from(U,U&&U.code,w,ye,U&&U.response)}}},h6=new Map,t2=r=>{let n=r&&r.env||{};const{fetch:i,Request:o,Response:l}=n,c=[o,l,i];let u=c.length,f=u,h,g,m=h6;for(;f--;)h=c[f],g=m.get(h),g===void 0&&m.set(h,g=f?new Map:p6(n)),m=g;return g};t2();const s0={http:RT,xhr:l6,fetch:{get:t2}};J.forEach(s0,(r,n)=>{if(r){try{Object.defineProperty(r,"name",{value:n})}catch{}Object.defineProperty(r,"adapterName",{value:n})}});const py=r=>`- ${r}`,g6=r=>J.isFunction(r)||r===null||r===!1;function m6(r,n){r=J.isArray(r)?r:[r];const{length:i}=r;let o,l;const c={};for(let u=0;u<i;u++){o=r[u];let f;if(l=o,!g6(o)&&(l=s0[(f=String(o)).toLowerCase()],l===void 0))throw new Le(`Unknown adapter '${f}'`);if(l&&(J.isFunction(l)||(l=l.get(n))))break;c[f||"#"+u]=l}if(!l){const u=Object.entries(c).map(([h,g])=>`adapter ${h} `+(g===!1?"is not supported by the environment":"is not available in the build"));let f=i?u.length>1?`since :
`+u.map(py).join(`
`):" "+py(u[0]):"as no adapter specified";throw new Le("There is no suitable adapter to dispatch the request "+f,"ERR_NOT_SUPPORT")}return l}const n2={getAdapter:m6,adapters:s0};function Ip(r){if(r.cancelToken&&r.cancelToken.throwIfRequested(),r.signal&&r.signal.aborted)throw new Hs(null,r)}function hy(r){return Ip(r),r.headers=An.from(r.headers),r.data=Up.call(r,r.transformRequest),["post","put","patch"].indexOf(r.method)!==-1&&r.headers.setContentType("application/x-www-form-urlencoded",!1),n2.getAdapter(r.adapter||Bs.adapter,r)(r).then(function(o){return Ip(r),o.data=Up.call(r,r.transformResponse,o),o.headers=An.from(o.headers),o},function(o){return Kv(o)||(Ip(r),o&&o.response&&(o.response.data=Up.call(r,r.transformResponse,o.response),o.response.headers=An.from(o.response.headers))),Promise.reject(o)})}const r2="1.15.0",id={};["object","boolean","number","function","string","symbol"].forEach((r,n)=>{id[r]=function(o){return typeof o===r||"a"+(n<1?"n ":" ")+r}});const gy={};id.transitional=function(n,i,o){function l(c,u){return"[Axios v"+r2+"] Transitional option '"+c+"'"+u+(o?". "+o:"")}return(c,u,f)=>{if(n===!1)throw new Le(l(u," has been removed"+(i?" in "+i:"")),Le.ERR_DEPRECATED);return i&&!gy[u]&&(gy[u]=!0,console.warn(l(u," has been deprecated since v"+i+" and will be removed in the near future"))),n?n(c,u,f):!0}};id.spelling=function(n){return(i,o)=>(console.warn(`${o} is likely a misspelling of ${n}`),!0)};function x6(r,n,i){if(typeof r!="object")throw new Le("options must be an object",Le.ERR_BAD_OPTION_VALUE);const o=Object.keys(r);let l=o.length;for(;l-- >0;){const c=o[l],u=n[c];if(u){const f=r[c],h=f===void 0||u(f,c,r);if(h!==!0)throw new Le("option "+c+" must be "+h,Le.ERR_BAD_OPTION_VALUE);continue}if(i!==!0)throw new Le("Unknown option "+c,Le.ERR_BAD_OPTION)}}const ku={assertOptions:x6,validators:id},mr=ku.validators;let qi=class{constructor(n){this.defaults=n||{},this.interceptors={request:new ry,response:new ry}}async request(n,i){try{return await this._request(n,i)}catch(o){if(o instanceof Error){let l={};Error.captureStackTrace?Error.captureStackTrace(l):l=new Error;const c=(()=>{if(!l.stack)return"";const u=l.stack.indexOf(`
`);return u===-1?"":l.stack.slice(u+1)})();try{if(!o.stack)o.stack=c;else if(c){const u=c.indexOf(`
`),f=u===-1?-1:c.indexOf(`
`,u+1),h=f===-1?"":c.slice(f+1);String(o.stack).endsWith(h)||(o.stack+=`
`+c)}}catch{}}throw o}}_request(n,i){typeof n=="string"?(i=i||{},i.url=n):i=n||{},i=Fi(this.defaults,i);const{transitional:o,paramsSerializer:l,headers:c}=i;o!==void 0&&ku.assertOptions(o,{silentJSONParsing:mr.transitional(mr.boolean),forcedJSONParsing:mr.transitional(mr.boolean),clarifyTimeoutError:mr.transitional(mr.boolean),legacyInterceptorReqResOrdering:mr.transitional(mr.boolean)},!1),l!=null&&(J.isFunction(l)?i.paramsSerializer={serialize:l}:ku.assertOptions(l,{encode:mr.function,serialize:mr.function},!0)),i.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?i.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:i.allowAbsoluteUrls=!0),ku.assertOptions(i,{baseUrl:mr.spelling("baseURL"),withXsrfToken:mr.spelling("withXSRFToken")},!0),i.method=(i.method||this.defaults.method||"get").toLowerCase();let u=c&&J.merge(c.common,c[i.method]);c&&J.forEach(["delete","get","head","post","put","patch","common"],w=>{delete c[w]}),i.headers=An.concat(u,c);const f=[];let h=!0;this.interceptors.request.forEach(function(b){if(typeof b.runWhen=="function"&&b.runWhen(i)===!1)return;h=h&&b.synchronous;const v=i.transitional||o0;v&&v.legacyInterceptorReqResOrdering?f.unshift(b.fulfilled,b.rejected):f.push(b.fulfilled,b.rejected)});const g=[];this.interceptors.response.forEach(function(b){g.push(b.fulfilled,b.rejected)});let m,x=0,S;if(!h){const w=[hy.bind(this),void 0];for(w.unshift(...f),w.push(...g),S=w.length,m=Promise.resolve(i);x<S;)m=m.then(w[x++],w[x++]);return m}S=f.length;let T=i;for(;x<S;){const w=f[x++],b=f[x++];try{T=w(T)}catch(v){b.call(this,v);break}}try{m=hy.call(this,T)}catch(w){return Promise.reject(w)}for(x=0,S=g.length;x<S;)m=m.then(g[x++],g[x++]);return m}getUri(n){n=Fi(this.defaults,n);const i=Wv(n.baseURL,n.url,n.allowAbsoluteUrls);return Fv(i,n.params,n.paramsSerializer)}};J.forEach(["delete","get","head","options"],function(n){qi.prototype[n]=function(i,o){return this.request(Fi(o||{},{method:n,url:i,data:(o||{}).data}))}});J.forEach(["post","put","patch"],function(n){function i(o){return function(c,u,f){return this.request(Fi(f||{},{method:n,headers:o?{"Content-Type":"multipart/form-data"}:{},url:c,data:u}))}}qi.prototype[n]=i(),qi.prototype[n+"Form"]=i(!0)});let y6=class a2{constructor(n){if(typeof n!="function")throw new TypeError("executor must be a function.");let i;this.promise=new Promise(function(c){i=c});const o=this;this.promise.then(l=>{if(!o._listeners)return;let c=o._listeners.length;for(;c-- >0;)o._listeners[c](l);o._listeners=null}),this.promise.then=l=>{let c;const u=new Promise(f=>{o.subscribe(f),c=f}).then(l);return u.cancel=function(){o.unsubscribe(c)},u},n(function(c,u,f){o.reason||(o.reason=new Hs(c,u,f),i(o.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(n){if(this.reason){n(this.reason);return}this._listeners?this._listeners.push(n):this._listeners=[n]}unsubscribe(n){if(!this._listeners)return;const i=this._listeners.indexOf(n);i!==-1&&this._listeners.splice(i,1)}toAbortSignal(){const n=new AbortController,i=o=>{n.abort(o)};return this.subscribe(i),n.signal.unsubscribe=()=>this.unsubscribe(i),n.signal}static source(){let n;return{token:new a2(function(l){n=l}),cancel:n}}};function b6(r){return function(i){return r.apply(null,i)}}function v6(r){return J.isObject(r)&&r.isAxiosError===!0}const xh={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(xh).forEach(([r,n])=>{xh[n]=r});function i2(r){const n=new qi(r),i=Uv(qi.prototype.request,n);return J.extend(i,qi.prototype,n,{allOwnKeys:!0}),J.extend(i,n,null,{allOwnKeys:!0}),i.create=function(l){return i2(Fi(r,l))},i}const It=i2(Bs);It.Axios=qi;It.CanceledError=Hs;It.CancelToken=y6;It.isCancel=Kv;It.VERSION=r2;It.toFormData=ad;It.AxiosError=Le;It.Cancel=It.CanceledError;It.all=function(n){return Promise.all(n)};It.spread=b6;It.isAxiosError=v6;It.mergeConfig=Fi;It.AxiosHeaders=An;It.formToJSON=r=>Qv(J.isHTMLForm(r)?new FormData(r):r);It.getAdapter=n2.getAdapter;It.HttpStatusCode=xh;It.default=It;const{Axios:yM,AxiosError:Ou,CanceledError:bM,isCancel:vM,CancelToken:SM,VERSION:wM,all:_M,Cancel:TM,isAxiosError:EM,spread:CM,toFormData:kM,AxiosHeaders:OM,HttpStatusCode:RM,formToJSON:AM,getAdapter:LM,mergeConfig:zM}=It,S6="/demos/onwear/",vt=r=>`${S6}clothes/${r}`,Sr=[{productId:"demo-001",productImageUrl:vt("스웨이드 바이커 자켓_블랙.jpg"),productBrand:"키뮤어",productName:"[사은품 증정]스웨이드 바이커 자켓_블랙",productPrice:169900,productUrl:"https://example.com/products/demo-001",styleList:["시크","미니멀","스트릿"]},{productId:"demo-002",productImageUrl:vt("하이넥 벨티드 블루종 자켓_베이지.jpg"),productBrand:"크랭크",productName:"하이넥 벨티드 블루종 자켓_베이지",productPrice:175440,productUrl:"https://example.com/products/demo-002",styleList:["미니멀","시크","심플"]},{productId:"demo-003",productImageUrl:vt("EVA CORSET TOP (MOCHA).jpg"),productBrand:"2000아카이브스",productName:"EVA CORSET TOP (MOCHA)",productPrice:99360,productUrl:"https://example.com/products/demo-003",styleList:["시크","러블리","유니크"]},{productId:"demo-004",productImageUrl:vt("솔로 스우시 풀오버 후디 M.jpg"),productBrand:"나이키",productName:"솔로 스우시 풀오버 후디 M - 블랙:화이트 / HV1083-010",productPrice:96750,productUrl:"https://example.com/products/demo-004",styleList:["캐주얼","스트릿","스포티"]},{productId:"demo-005",productImageUrl:vt("포트 롱슬리브 원피스.jpg"),productBrand:"메리온",productName:"포트 롱슬리브 원피스",productPrice:186390,productUrl:"https://example.com/products/demo-005",styleList:["러블리","로맨틱","페미닌"]},{productId:"demo-006",productImageUrl:vt("보우 플레어 미니 원피스 블랙.jpg"),productBrand:"일리고",productName:"보우 플레어 미니 원피스 블랙",productPrice:73800,productUrl:"https://example.com/products/demo-006",styleList:["러블리","페미닌","데이트룩"]},{productId:"demo-007",productImageUrl:vt("25Damaged Washing Wide Denim (Washed Deep Blue).jpg"),productBrand:"플리즈노팔로우",productName:"25Damaged Washing Wide Denim (Washed Deep Blue)",productPrice:156600,productUrl:"https://example.com/products/demo-007",styleList:["스트릿","캐주얼","빈티지"]},{productId:"demo-008",productImageUrl:vt("BUTTON ROLL UP SHORTS NAVY.jpg"),productBrand:"론론",productName:"BUTTON ROLL UP SHORTS NAVY",productPrice:80190,productUrl:"https://example.com/products/demo-008",styleList:["캐주얼","프레피","심플"]},{productId:"demo-009",productImageUrl:vt("투턱 와이드 치노 코튼 팬츠 4Color.jpg"),productBrand:"언탭트 스튜디오",productName:"투턱 와이드 치노 코튼 팬츠 4Color",productPrice:34930,productUrl:"https://example.com/products/demo-009",styleList:["미니멀","심플","데일리"]},{productId:"demo-010",productImageUrl:vt("MOLLY One Tuck Bermuda Pants Black.jpg"),productBrand:"아모우",productName:"MOLLY One Tuck Bermuda Pants Black",productPrice:44200,productUrl:"https://example.com/products/demo-010",styleList:["캐주얼","스포티","데일리"]},{productId:"demo-011",productImageUrl:vt("릴렉스 세미 와이드 데님 팬츠 (5color).jpg"),productBrand:"워크온바디오프",productName:"릴렉스 세미 와이드 데님 팬츠 (5color)",productPrice:39900,productUrl:"https://example.com/products/demo-011",styleList:["캐주얼","데일리","심플"]},{productId:"demo-012",productImageUrl:vt("Vintage raw jean in Ice Blue.jpg"),productBrand:"오도어",productName:"Vintage raw jean in Ice Blue",productPrice:111780,productUrl:"https://example.com/products/demo-012",styleList:["빈티지","캐주얼","데님"]},{productId:"demo-013",productImageUrl:vt("럭비스프링카라니트 (TDSW251117).jpg"),productBrand:"피그먼트",productName:"럭비스프링카라니트 (TDSW251117)",productPrice:39510,productUrl:"https://example.com/products/demo-013",styleList:["캐주얼","프레피","러블리"]},{productId:"demo-014",productImageUrl:vt("시스루 헨리넥 풀오버 [IVORY].jpg"),productBrand:"제너럴아이디어",productName:"시스루 헨리넥 풀오버 [IVORY] / GF1LKP514",productPrice:35700,productUrl:"https://example.com/products/demo-014",styleList:["미니멀","심플","페미닌"]},{productId:"demo-015",productImageUrl:vt("데님 오버핏 데일리 셔츠 - 3color.jpg"),productBrand:"마인드브릿지",productName:"데님 오버핏 데일리 셔츠 - 3color",productPrice:55900,productUrl:"https://example.com/products/demo-015",styleList:["캐주얼","데일리","미니멀"]},{productId:"demo-016",productImageUrl:vt("[ON]워셔블 코튼 혼방 카라 반팔 니트 - 3color.jpg"),productBrand:"마인드브릿지",productName:"[ON]워셔블 코튼 혼방 카라 반팔 니트 - 3color",productPrice:31920,productUrl:"https://example.com/products/demo-016",styleList:["심플","프레피","데일리"]},{productId:"demo-017",productImageUrl:vt("[유인 PICKJLayered Bustier Long Sleeve (FL -105_Charcoal Melange).jpg"),productBrand:"플레어업",productName:"[유인 PICK]Layered Bustier Long Sleeve (FL-105_Charcoal Melange)",productPrice:67640,productUrl:"https://example.com/products/demo-017",styleList:["시크","유니크","페미닌"]},{productId:"demo-018",productImageUrl:vt("[우난 PICK]DOODLE HEART HALF T WHITE GREYISH BLUE.jpg"),productBrand:"메종미네드",productName:"[우난 PICK]DOODLE HEART HALF T WHITE GREYISH BLUE",productPrice:44250,productUrl:"https://example.com/products/demo-018",styleList:["캐주얼","스트릿","유니크"]},{productId:"demo-019",productImageUrl:vt("[서강준 PICK]도브 울 트러커 크롭 자켓 [BLACK].jpg"),productBrand:"드로우핏",productName:"[서강준 PICK]도브 울 트러커 크롭 자켓 [BLACK]",productPrice:145600,productUrl:"https://example.com/products/demo-019",styleList:["시크","미니멀","클래식"]}];function my(r){return Sr.find(n=>n.productId===r)??Sr[0]}const ts=new Set(["demo-004","demo-012","demo-018"]),w6=[{productId:"demo-012",productImageUrl:vt("Vintage raw jean in Ice Blue.jpg"),productCategory:"lowerDenim"},{productId:"demo-014",productImageUrl:vt("시스루 헨리넥 풀오버 [IVORY].jpg"),productCategory:"upperKnit"}],_6=[{coordinationId:1,upperImageUrl:vt("시스루 헨리넥 풀오버 [IVORY].jpg"),lowerImageUrl:vt("Vintage raw jean in Ice Blue.jpg"),upperId:"demo-014",lowerId:"demo-012"},{coordinationId:2,upperImageUrl:vt("[우난 PICK]DOODLE HEART HALF T WHITE GREYISH BLUE.jpg"),lowerImageUrl:vt("MOLLY One Tuck Bermuda Pants Black.jpg"),upperId:"demo-018",lowerId:"demo-010"}],T6=[{mannequinId:1,mannequinImageUrl:"default_mannequin_image"},{mannequinId:2,mannequinImageUrl:"default_mannequin_image"},{mannequinId:3,mannequinImageUrl:"default_mannequin_image"},{mannequinId:4,mannequinImageUrl:"default_mannequin_image"}],E6=["니트","데님","후디"],C6=["자켓","원피스","데님","미니멀","러블리","시크","프레피","스포티"],k6={upper:Sr.slice(0,9).map(r=>({id:r.productId,name:r.productName,brand:r.productBrand,price:r.productPrice,thumbnail:r.productImageUrl})),lower:Sr.slice(6).map(r=>({id:r.productId,name:r.productName,brand:r.productBrand,price:r.productPrice,thumbnail:r.productImageUrl}))};function jt(r,n,i=200){return{data:n,status:i,statusText:"OK",headers:{},config:r,request:{}}}function O6(r){const n=(r.baseURL??"http://demo.local/").replace(/\/+$/,""),i=r.url??"/",o=i.startsWith("http")?i:`${n}${i.startsWith("/")?"":"/"}${i}`;return new URL(o)}function au(r,n,i){const o=n*i,l=r.slice(o,o+i),c=r.length,u=o+i>=c,f=Math.max(1,Math.ceil(c/i));return{slice:l,total:c,last:u,totalPages:f}}function Xr(r){return(r??"").toLowerCase().replace(/\s+/g,"").replace(/[()[\]{}'"`~!@#$%^&*+=|\\:;,.?/<>_-]/g,"")}function R6(r){const n=new Map;for(const i of r)for(const o of i.styleList??[]){const l=o.trim();l&&n.set(l,(n.get(l)??0)+1)}return[...n.entries()].sort((i,o)=>o[1]-i[1])}function A6(r){const n="ㄱㄲㄴㄷㄸㄹㅁㅂㅃㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎ",i="ㅏㅐㅑㅒㅓㅔㅕㅖㅗㅘㅙㅚㅛㅜㅝㅞㅟㅠㅡㅢㅣ",o="\0ㄱㄲㄳㄴㄵㄶㄷㄹㄺㄻㄼㄽㄾㄿㅀㅁㅂㅄㅅㅆㅇㅈㅊㅋㅌㅍㅎ",l={r:"ㄱ",R:"ㄲ",s:"ㄴ",e:"ㄷ",E:"ㄸ",f:"ㄹ",a:"ㅁ",q:"ㅂ",Q:"ㅃ",t:"ㅅ",T:"ㅆ",d:"ㅇ",w:"ㅈ",W:"ㅉ",c:"ㅊ",z:"ㅋ",x:"ㅌ",v:"ㅍ",g:"ㅎ"},c={k:"ㅏ",o:"ㅐ",i:"ㅑ",O:"ㅒ",j:"ㅓ",p:"ㅔ",u:"ㅕ",P:"ㅖ",h:"ㅗ",y:"ㅛ",n:"ㅜ",b:"ㅠ",m:"ㅡ",l:"ㅣ"},u={hk:"ㅘ",ho:"ㅙ",hl:"ㅚ",nj:"ㅝ",np:"ㅞ",nl:"ㅟ",ml:"ㅢ"},f={rt:"ㄳ",sw:"ㄵ",sg:"ㄶ",fr:"ㄺ",fa:"ㄻ",fq:"ㄼ",ft:"ㄽ",fx:"ㄾ",fv:"ㄿ",fg:"ㅀ",qt:"ㅄ"},h=z=>z in l,g=z=>z in c,m=z=>n.indexOf(z),x=z=>i.indexOf(z),S=z=>o.indexOf(z),T=(z,R,M)=>String.fromCharCode(44032+(z*21+R)*28+M);let w="",b=-1,v=-1,D=0;const j=()=>{b!==-1&&v!==-1?(w+=T(b,v,D),b=-1,v=-1,D=0):b!==-1&&(w+=n[b],b=-1)},A=[...r];for(let z=0;z<A.length;z++){const R=A[z];if(!h(R)&&!g(R)){j(),w+=R;continue}if(g(R)){b===-1&&(b=m("ㅇ"));const te=A[z+1],re=R+(te??"");te&&g(te)&&u[re]?(v===-1?v=x(u[re]):(w+=T(b,v,D),b=m("ㅇ"),v=x(u[re]),D=0),z+=1):v===-1?v=x(c[R]):(w+=T(b,v,D),b=m("ㅇ"),v=x(c[R]),D=0);continue}const M=l[R],k=m(M);if(b===-1){b=k;continue}if(v===-1){w+=n[b],b=k;continue}const I=A[z+1];if(I&&h(I)){const te=R+I;if(f[te]){D=S(f[te]),z+=1,w+=T(b,v,D),b=-1,v=-1,D=0;continue}}const $=S(M);$>0?(D=$,w+=T(b,v,D),b=-1,v=-1,D=0):(w+=T(b,v,0),b=k,v=-1,D=0)}return j(),w}function xy(r,n){const i=(n??"").toLowerCase();if(!i||i==="all")return!0;const o=(r.productName??"").toLowerCase(),l=(r.productImageUrl??"").toLowerCase(),[c,u]=i.split("/"),f=/후디|hood|니트|knit|셔츠|shirt|tee|t\\s?shirt|long sleeve|bustier|카라|polo|풀오버|pullover|자켓|jacket|블루종|bomber|아우터|outer|원피스|dress/.test(o)||/hood|knit|shirt|tee|jacket|bomber|outer|dress/.test(l),h=/팬츠|pants|denim|jean|shorts|bermuda|치노|chino|cotton|코튼|leggings|레깅스|suit|training|데님/.test(o)||/denim|jean|pants|short/.test(l);if(c==="upper"&&!f||c==="lower"&&!h)return!1;if(!u)return!0;switch(u){case"hoodie":return/후디|hood|pullover/.test(o)||/hood/.test(l);case"knitSweater":return/니트|knit|스웨터|sweater|카라/.test(o)||/knit/.test(l);case"longSleeve":return/long sleeve|긴소매|롱슬리브|bustier/.test(o);case"shortSleeve":return/half t|반팔|short sleeve|카라 반팔/.test(o);case"shirtBlouse":return/셔츠|shirt|blouse/.test(o);case"short":return/shorts|버뮤다|bermuda|숏/.test(o)||/short/.test(l);case"denim":return/denim|jean|데님/.test(o)||/denim|jean/.test(l);case"cotton":return/치노|chino|cotton|코튼/.test(o)||/cotton|chino/.test(l);case"leggings":return/leggings|레깅스/.test(o);case"suit":return/suit|정장/.test(o);case"training":return/training|트레이닝/.test(o);default:return!0}}function c0(r){const n=async i=>{const o=(i.method??"get").toUpperCase(),{pathname:l,searchParams:c}=O6(i);if(r==="runpod")return l.endsWith("/products/image-search")&&o==="POST"?jt(i,k6):jt(i,{message:"demo runpod: not found"},404);if(r==="fast"){if(l.endsWith("/user/save")&&o==="POST")return jt(i,{success:!0,code:200,message:"ok"});if(l.endsWith("/recommend")&&o==="GET"){const u=Number(c.get("page")??"0"),f=Number(c.get("size")??"10"),{slice:h,total:g,totalPages:m}=au(Sr,u,f),x=R6(Sr).slice(0,8);return jt(i,{status:200,message:"ok",result:{recommended_products:h.map((S,T)=>({productId:S.productId,similarityScore:.85+T*.01,productName:S.productName,productBrand:S.productBrand,productPrice:S.productPrice,productImageUrl:S.productImageUrl,productUrl:S.productUrl,styleList:S.styleList,liked:ts.has(S.productId)})),styleTags:x,pagination:{current_page:u,page_size:f,total_items:g,total_pages:m,has_next:u+1<m}}})}if(l.endsWith("/products/rank")&&o==="GET"){const u=c.get("category")??"",f=Number(c.get("page")??"0"),h=Number(c.get("size")??"10"),g=u?Sr.filter(b=>xy(b,u)):Sr,{slice:m,total:x,last:S,totalPages:T}=au(g,f,h),w=m.map(b=>({...b,liked:ts.has(b.productId),styleList:b.styleList}));return jt(i,{success:!0,code:200,message:"ok",data:{popularClothes:{content:w,pageable:{sort:{sorted:!1,unsorted:!0,empty:!0},offset:f*h,pageNumber:f,pageSize:h,paged:!0,unpaged:!1},last:S,totalPages:T,totalElements:x,size:h,number:f,sort:{sorted:!1,unsorted:!0,empty:!0},first:f===0,numberOfElements:w.length,empty:w.length===0}}})}return jt(i,{message:"demo fast: not found"},404)}if(l.endsWith("/products/rank")&&o==="GET"){const u=c.get("category")??"",f=Number(c.get("page")??"0"),h=Number(c.get("size")??"30"),g=u?Sr.filter(b=>xy(b,u)):Sr,{slice:m,total:x,last:S,totalPages:T}=au(g,f,h),w=m.map(b=>({...b,liked:ts.has(b.productId),styleList:b.styleList}));return jt(i,{success:!0,code:200,message:"ok",data:{popularClothes:{content:w,pageable:{sort:{sorted:!1,unsorted:!0,empty:!0},offset:f*h,pageNumber:f,pageSize:h,paged:!0,unpaged:!1},last:S,totalPages:T,totalElements:x,size:h,number:f,sort:{sorted:!1,unsorted:!0,empty:!0},first:f===0,numberOfElements:w.length,empty:w.length===0}}})}if(l.startsWith("/products/likes/")&&o==="POST")return jt(i,{success:!0,code:200,message:"ok",data:null});if(l.endsWith("/my/likes")&&o==="GET"){const u=w6.map(f=>{const h=my(f.productId);return{productId:f.productId,productName:h.productName,productBrand:h.productBrand,productPrice:h.productPrice,productImageUrl:f.productImageUrl,productUrl:h.productUrl,styleList:h.styleList,productCategory:f.productCategory}});return jt(i,{success:!0,code:200,message:"ok",data:u})}if(l.endsWith("/my/coordination")&&o==="GET")return jt(i,{success:!0,code:200,message:"ok",data:_6});if(l.endsWith("/my/coordination")&&o==="POST")return jt(i,{success:!0,code:201,message:"saved"},201);if(l.startsWith("/my/coordination/")&&o==="DELETE")return jt(i,{success:!0,message:"deleted"});if(l.endsWith("/my/mannequins")&&o==="GET")return jt(i,{success:!0,code:200,message:"ok",data:T6});if(l.includes("/my/try-on")&&o==="POST")return jt(i,{UnionImageUrl:Sr[0].productImageUrl});if(l.startsWith("/products/detail/")&&o==="GET"){const u=l.split("/").pop()??"demo-001",f=my(u);return jt(i,{success:!0,code:200,message:"ok",data:{productId:f.productId,productImageUrl:f.productImageUrl,productBrand:f.productBrand,productName:f.productName,productPrice:f.productPrice,productUrl:f.productUrl,styleList:f.styleList,isLiked:ts.has(f.productId)}})}if(l.endsWith("/products/search")&&o==="GET"){const u=(c.get("keyword")??"").trim(),f=u.toLowerCase(),h=A6(u).toLowerCase(),g=Xr(u),m=Xr(h),x=Number(c.get("page")??"0"),S=Number(c.get("size")??"20"),T=u?Sr.filter(A=>A.productName.toLowerCase().includes(f)||A.productBrand.toLowerCase().includes(f)||A.styleList.some(z=>z.toLowerCase().includes(f))||A.productImageUrl.toLowerCase().includes(f)||A.productName.toLowerCase().includes(h)||A.productBrand.toLowerCase().includes(h)||A.styleList.some(z=>z.toLowerCase().includes(h))||A.productImageUrl.toLowerCase().includes(h)||Xr(A.productName).includes(g)||Xr(A.productBrand).includes(g)||A.styleList.some(z=>Xr(z).includes(g))||Xr(A.productImageUrl).includes(g)||Xr(A.productName).includes(m)||Xr(A.productBrand).includes(m)||A.styleList.some(z=>Xr(z).includes(m))||Xr(A.productImageUrl).includes(m)):[],{slice:w,total:b,last:v,totalPages:D}=au(T,x,S),j=w.map(A=>({...A,isLiked:ts.has(A.productId)}));return jt(i,{success:!0,code:200,message:"ok",data:{content:j,totalElements:b,totalPages:D,size:S,number:x,first:x===0,last:v,numberOfElements:j.length,empty:j.length===0}})}return l.endsWith("/search/history")&&o==="GET"?jt(i,{success:!0,code:200,message:"ok",data:E6}):l.endsWith("/search/history")&&o==="DELETE"?jt(i,{success:!0,code:200,message:"ok",data:null}):l.endsWith("/search/rank")&&o==="GET"?jt(i,{success:!0,code:200,message:"ok",data:C6}):l.endsWith("/auth/logout")&&o==="POST"?jt(i,{success:!0,code:200,message:"ok"}):jt(i,{message:"demo main: not found"},404)};return It.create({adapter:n,baseURL:`http://demo.${r}/`,timeout:1e4,headers:{"Content-Type":"application/json"}})}const Rt=c0("main"),L6=()=>{H3(async()=>{const{useAuthStore:r}=await Promise.resolve().then(()=>N6);return{useAuthStore:r}},[]).then(({useAuthStore:r})=>{r.getState().login("demo-token","demo",{memberId:1,memberEmail:"demo@onwear.local",memberName:"user"})})},z6=async r=>{try{const i=(await Rt.post("/auth/logout",{},{headers:{Authorization:`Bearer ${r}`}})).data;return i.success?!0:(console.error("로그아웃 API 오류:",i.message),!1)}catch(n){return console.error("로그아웃 API 호출 실패:",n),!1}};function D6(r){try{const n=r.split(".")[1];if(!n)return null;const i=n.replace(/-/g,"+").replace(/_/g,"/"),o=decodeURIComponent(atob(i).split("").map(function(c){return"%"+("00"+c.charCodeAt(0).toString(16)).slice(-2)}).join(""));return JSON.parse(o)}catch{return null}}function yy(r){const n=D6(r);if(!n)return null;const i=n.email||n.sub||"",o=n.name||n.given_name||(i?i.split("@")[0]:"User");return{email:i,name:o,id:n.sub||""}}const M6={show:!1,message:""},il=ed()(r=>({...M6,showToast:n=>{r({show:!0,message:n})},hideToast:()=>{r({show:!1,message:""})}})),by={isLoggedIn:!1,accessToken:null,member:null,grantType:null},Ft=ed()(U3((r,n)=>({...by,login:(i,o,l)=>{r({isLoggedIn:!0,accessToken:i,grantType:o,member:l})},logout:async()=>{const{accessToken:i}=n();if(i){try{await z6(i),sessionStorage.removeItem("user_actions")}catch(o){console.error("백엔드 로그아웃 API 호출 실패:",o)}il.getState().showToast("로그아웃 되었습니다")}r(by),localStorage.removeItem("auth-storage"),sessionStorage.setItem("toast_logout","1"),window.location.href="/main"},setAuthFromRedirect:i=>{try{let o;if(i.startsWith("redirect://")){const m=i.replace("redirect://","http://");o=new URL(m)}else o=new URL(i);const l=new URLSearchParams(o.search),c=l.get("grantType"),u=l.get("accessToken"),f=l.get("memberId"),h=l.get("memberEmail"),g=l.get("memberName");if(c&&u){const m=yy(u),x={memberId:f?parseInt(f,10):0,memberEmail:h||m?.email||"user@example.com",memberName:g||m?.name||"User"};return n().login(u,c,x),!0}return!1}catch(o){return console.error("리다이렉트 URL 파싱 오류:",o),!1}},updateUserInfoFromToken:()=>{const{accessToken:i,member:o}=n();if(i&&o){const l=yy(i);if(l&&l.email){const c={...o,memberEmail:l.email,memberName:l.name};r(u=>({...u,member:c}))}}}}),{name:"auth-storage",partialize:r=>({isLoggedIn:r.isLoggedIn,accessToken:r.accessToken,member:r.member,grantType:r.grantType})})),N6=Object.freeze(Object.defineProperty({__proto__:null,useAuthStore:Ft},Symbol.toStringTag,{value:"Module"}));const j6=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),U6=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(n,i,o)=>o?o.toUpperCase():i.toLowerCase()),vy=r=>{const n=U6(r);return n.charAt(0).toUpperCase()+n.slice(1)},o2=(...r)=>r.filter((n,i,o)=>!!n&&n.trim()!==""&&o.indexOf(n)===i).join(" ").trim(),I6=r=>{for(const n in r)if(n.startsWith("aria-")||n==="role"||n==="title")return!0};var B6={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const H6=_.forwardRef(({color:r="currentColor",size:n=24,strokeWidth:i=2,absoluteStrokeWidth:o,className:l="",children:c,iconNode:u,...f},h)=>_.createElement("svg",{ref:h,...B6,width:n,height:n,stroke:r,strokeWidth:o?Number(i)*24/Number(n):i,className:o2("lucide",l),...!c&&!I6(f)&&{"aria-hidden":"true"},...f},[...u.map(([g,m])=>_.createElement(g,m)),...Array.isArray(c)?c:[c]]));const ln=(r,n)=>{const i=_.forwardRef(({className:o,...l},c)=>_.createElement(H6,{ref:c,iconNode:n,className:o2(`lucide-${j6(vy(r))}`,`lucide-${r}`,o),...l}));return i.displayName=vy(r),i};const $6=[["path",{d:"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",key:"18u6gg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]],l2=ln("camera",$6);const P6=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],s2=ln("chevron-left",P6);const q6=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],c2=ln("chevron-right",q6);const Y6=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],od=ln("chevron-up",Y6);const G6=[["path",{d:"M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z",key:"1vdc57"}],["path",{d:"M5 21h14",key:"11awu3"}]],X6=ln("crown",G6);const V6=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],F6=ln("download",V6);const Q6=[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}],["path",{d:"M12 10v6",key:"1bos4e"}],["path",{d:"m9 13 3-3 3 3",key:"1pxg3c"}]],Z6=ln("folder-up",Q6);const K6=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],ld=ln("heart",K6);const J6=[["circle",{cx:"12",cy:"16",r:"1",key:"1au0dj"}],["rect",{x:"3",y:"10",width:"18",height:"12",rx:"2",key:"6s8ecr"}],["path",{d:"M7 10V7a5 5 0 0 1 10 0v3",key:"1pqi11"}]],W6=ln("lock-keyhole",J6);const eE=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],tE=ln("log-out",eE);const nE=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],rE=ln("refresh-cw",nE);const aE=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],iE=ln("search",aE);const oE=[["path",{d:"M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z",key:"1wgbhj"}]],u2=ln("shirt",oE);const lE=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],sE=ln("target",lE);const cE=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]],uE=ln("user-plus",cE);const dE=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"17",x2:"22",y1:"8",y2:"13",key:"3nzzx3"}],["line",{x1:"22",x2:"17",y1:"8",y2:"13",key:"1swrse"}]],fE=ln("user-x",dE);const pE=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],oi=ln("x",pE);function hE({onSearchClick:r}){const n=Br(),i=rr(),{isLoggedIn:o,logout:l}=Ft(),{showToast:c}=il(),u=f=>{const h=i.pathname.toLowerCase(),g=f.toLowerCase();return h.startsWith(g)||g==="/hotitems"&&h==="/"};return ee("nav",{css:gE,children:[C("div",{css:mE,children:C(R3,{})}),ee("div",{css:xE,children:[ee("button",{css:[Ni,i.pathname==="/search"&&No],onClick:r,children:[C(iE,{}),C("span",{className:"menu-text",children:"Search"})]}),ee("button",{css:[Ni,u("/fittingroom")&&No],onClick:()=>o?n("/fittingroom"):c("로그인이 필요한 서비스입니다."),children:[C(u2,{}),C("span",{className:"menu-text",children:"Fitting"})]}),ee("button",{css:[Ni,u("/recommend")&&No],onClick:()=>n("/recommend"),children:[C(sE,{}),C("span",{className:"menu-text",children:"Recommend"})]}),ee("button",{css:[Ni,u("/image-search")&&No],onClick:()=>n("/image-search"),children:[C(l2,{}),C("span",{className:"menu-text",children:"Image Search"})]}),ee("button",{css:[Ni,u("/hotitems")&&No],onClick:()=>n("/HotItems"),children:[C(X6,{}),C("span",{className:"menu-text",children:"Hot"})]})]}),C("div",{css:yE,children:o?ee("button",{css:Ni,onClick:l,children:[C(tE,{}),C("span",{className:"menu-text",children:"Logout"})]}):ee("button",{css:[Ni,i.pathname.includes("/fittingroom")&&No],onClick:L6,children:[C("img",{src:A3,alt:"Google Logo",css:bE}),C("span",{className:"menu-text",children:"Sign in with Google"})]})})]})}const gE=L`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 80px;
  height: 100%;
  background: #000;
  box-shadow: 2px 0 20px rgba(0, 0, 0, 0.7);
  transition: width 0.3s ease;
  position: fixed;
  left: 0;
  top: 0;

  &:hover {
    width: 200px;
  }
`,mE=L`
  padding: 12px;
  margin-bottom: 16px;
  display: flex;
  justify-content: center;
  overflow: hidden;
  width: 80px;
  min-width: 80px;
`,xE=L`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 0 14px;
`,Ni=L`
  width: 100%;
  text-align: left;
  padding: 12px;
  background: none;
  border: none;
  border-radius: 0;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.5);
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 12px;
  position: relative;
  overflow: hidden;
  white-space: nowrap;

  svg {
    width: 24px;
    height: 24px;
    min-width: 24px;
    filter: drop-shadow(0 0 12px rgba(255, 255, 255, 0.1));
  }

  .menu-text {
    opacity: 0;
    transform: translateX(-10px);
    transition: all 0.3s ease;
  }

  /* 기본 상태에서는 텍스트 숨김 */

  &:hover {
    background: rgba(30, 30, 30, 0.9);
    color: #fff;
    // text-shadow: 0 0 12px rgba(255, 255, 255, 0.5);

    svg {
      filter: drop-shadow(0 0 16px rgba(255, 255, 255, 0.4));
    }

    .menu-text {
      opacity: 1;
      transform: translateX(0);
    }
  }
`,No=L`
  background: rgba(40, 40, 40, 1);
  color: #fff;
  text-shadow: 0 0 16px rgba(255, 255, 255, 0.6);

  svg {
    filter: drop-shadow(0 0 20px rgba(255, 255, 255, 0.5));
  }

  /* 활성화된 메뉴는 nav 호버 시 텍스트 표시 */
  nav:hover & .menu-text {
    opacity: 1;
    transform: translateX(0);
  }

  &:hover {
    background: rgba(17, 24, 39, 1);
  }
`,yE=L`
  margin-top: auto;
  padding: 12px;
`,bE=L`
  width: 18px;
  height: 18px;
`;var vE=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,SE=kv(function(r){return vE.test(r)||r.charCodeAt(0)===111&&r.charCodeAt(1)===110&&r.charCodeAt(2)<91}),wE=SE,_E=function(n){return n!=="theme"},Sy=function(n){return typeof n=="string"&&n.charCodeAt(0)>96?wE:_E},wy=function(n,i,o){var l;if(i){var c=i.shouldForwardProp;l=n.__emotion_forwardProp&&c?function(u){return n.__emotion_forwardProp(u)&&c(u)}:c}return typeof l!="function"&&o&&(l=n.__emotion_forwardProp),l},TE=function(n){var i=n.cache,o=n.serialized,l=n.isStringTag;return Jh(i,o,l),zv(function(){return Wh(i,o,l)}),null},EE=function r(n,i){var o=n.__emotion_real===n,l=o&&n.__emotion_base||n,c,u;i!==void 0&&(c=i.label,u=i.target);var f=wy(n,i,o),h=f||Sy(l),g=!h("as");return function(){var m=arguments,x=o&&n.__emotion_styles!==void 0?n.__emotion_styles.slice(0):[];if(c!==void 0&&x.push("label:"+c+";"),m[0]==null||m[0].raw===void 0)x.push.apply(x,m);else{var S=m[0];x.push(S[0]);for(var T=m.length,w=1;w<T;w++)x.push(m[w],S[w])}var b=e0(function(v,D,j){var A=g&&v.as||l,z="",R=[],M=v;if(v.theme==null){M={};for(var k in v)M[k]=v[k];M.theme=_.useContext(t0)}typeof v.className=="string"?z=Rv(D.registered,R,v.className):v.className!=null&&(z=v.className+" ");var I=Ju(x.concat(R),D.registered,M);z+=D.key+"-"+I.name,u!==void 0&&(z+=" "+u);var $=g&&f===void 0?Sy(A):h,te={};for(var re in v)g&&re==="as"||$(re)&&(te[re]=v[re]);return te.className=z,j&&(te.ref=j),_.createElement(_.Fragment,null,_.createElement(TE,{cache:D,serialized:I,isStringTag:typeof A=="string"}),_.createElement(A,te))});return b.displayName=c!==void 0?c:"Styled("+(typeof l=="string"?l:l.displayName||l.name||"Component")+")",b.defaultProps=n.defaultProps,b.__emotion_real=b,b.__emotion_base=l,b.__emotion_styles=x,b.__emotion_forwardProp=f,Object.defineProperty(b,"toString",{value:function(){return"."+u}}),b.withComponent=function(v,D){var j=r(v,dh({},i,D,{shouldForwardProp:wy(b,D,!0)}));return j.apply(void 0,x)},b}},CE=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],P=EE.bind(null);CE.forEach(function(r){P[r]=P(r)});const ol=c0("fast"),u0=r=>{const{isLiked:n,...i}=r;return{...i,liked:n}},d2=async r=>{const{keyword:n,page:i=0,size:o=20}=r;try{return(await Rt.get("/products/search",{params:{keyword:n,page:i,size:o},paramsSerializer:c=>new URLSearchParams(Object.entries(c).map(([u,f])=>[u,String(f)])).toString()})).data}catch(l){const c=l;if(c.response?.status===404&&c.response?.data?.code===-10605)return{success:!1,code:-10605,message:"검색어에 일치하는 상품이 없습니다.",data:{content:[],totalElements:0,totalPages:0,size:o,number:i,first:!0,last:!0,numberOfElements:0,empty:!0}};throw l}},f2=async()=>(await Rt.get("/search/history")).data,yh=async r=>(await Rt.delete("/search/history",{params:{keyword:r},paramsSerializer:i=>new URLSearchParams(Object.entries(i).map(([o,l])=>[o,String(l)])).toString()})).data,kE=async()=>(await Rt.get("/search/rank")).data,OE=async(r=0,n=5,i)=>{const o=new URLSearchParams({page:r.toString(),size:n.toString()});return i!==void 0&&o.append("member_id",i.toString()),(await ol.get(`/recommend?${o.toString()}`)).data},RE=(r,n=[])=>{const i=new Set,o=new Set,l=new Set;if(!r||!Array.isArray(r))return[];r.forEach(f=>{f.productBrand?.trim()&&i.add(f.productBrand.trim()),f.productName.replace(/\[.*?\]/g,"").replace(/\(.*?\)/g,"").trim().split(/\s+/).filter(m=>m.length>1&&!/^\d+$/.test(m)&&!["케이블","반팔","긴팔","니트","티셔츠","셔츠","후드","자켓","코트","바지","청바지","스커트","원피스","가방","신발","스니커즈","부츠","샌들","슬리퍼","모자","스카프","벨트","시계","반지","목걸이","귀걸이","팔찌","안경","선글라스","마스크","장갑","양말","속옷","잠옷","수영복","운동복","정장","드레스","한복","기모","쭈리","오버핏","슬림핏","레귤러핏","와이드핏","스트레이트핏","테이퍼드핏","스키니핏","부츠컷핏","플레어핏","벨보텀핏","하이웨이스트핏","로우웨이스트핏","미드웨이스트핏","크롭핏","롱핏","숏핏","미니핏","맥시핏","미디핏"].includes(m)).forEach(m=>l.add(m)),Array.isArray(f.styleList)&&f.styleList.forEach(m=>{m&&m.length>1&&o.add(m)})}),n.forEach(([f])=>{f&&f.length>1&&o.add(f)});const c=[],u=[...i].sort((f,h)=>f.length-h.length);return u.length>0&&c.push(u[0]),c.push(...[...o].sort((f,h)=>f.length-h.length).slice(0,2)),c.push(...[...l].sort((f,h)=>f.length-h.length).slice(0,2)),c},AE=r=>Rt.post(`/products/likes/${r}`),LE=async()=>await Rt.get("/my/likes"),Bp=r=>ol.post("/user/save",r),bh=P.div`
  display: flex;
  align-items: center;
  padding: 8px 12px;
  cursor: pointer;
  border-radius: 0;
  transition: all 0.2s ease;
  background: transparent;
  border: none;

  &:hover {
    background: rgba(128, 128, 128, 0.1);
    transform: translateX(2px);
  }
`,vh=P.div`
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  color: ${r=>r.isHovered?"#a8e840":"#666"};
  border-radius: 0;
  font-size: 11px;
  font-weight: 600;
  margin-right: 10px;
  flex-shrink: 0;
  transition: all 0.2s ease;
  border: none;
`,Sh=P.div`
  font-size: 13px;
  color: #cccccc;
`,zE=P.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,DE=P.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px 16px;
`,_y=P.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,p2=P.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`,h2=P.div`
  font-size: 13px;
  color: #60a5fa;
`,g2=P.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 20px;
`,m2=P.div`
  font-size: 13px;
  color: #60a5fa;
  text-align: center;
`,x2=P.button`
  padding: 4px 8px;
  background: #60a5fa;
  color: #ffffff;
  border: none;
  border-radius: 0;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #a8e840;
  }
`,$i=P.h3`
  font-size: 14px;
  font-weight: 500;
  color: #ffffff;
  margin: 0 0 8px 0;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 85px;
    height: 2px;
    background: linear-gradient(
      90deg,
      #072bed 0%,
      #072bed 50%,
      rgba(7, 43, 237, 0.3) 80%,
      rgba(7, 43, 237, 0.1) 100%
    );
    // border-radius: 2px;
    box-shadow: 0 0 8px rgba(7, 43, 237, 0.4);
  }
`;function y2({onSearch:r}){const[n,i]=_.useState(null),[o,l]=_.useState([]),[c,u]=_.useState(!0),[f,h]=_.useState(null),g=Br(),m=async()=>{try{u(!0),h(null);const w=await kE();w.success?l(w.data):(h("인기 검색어를 불러올 수 없습니다."),l(["청바지","니트","코트","스니커즈","가방","원피스","셔츠","후드티"]))}catch(w){console.error("Failed to fetch popular searches:",w),h("인기 검색어를 불러올 수 없습니다."),l(["청바지","니트","코트","스니커즈","가방","원피스","셔츠","후드티"])}finally{u(!1)}};_.useEffect(()=>{m()},[]);const x=w=>{r?r(w):g(`/search?q=${encodeURIComponent(w)}`)},S=o.slice(0,Math.ceil(o.length/2)),T=o.slice(Math.ceil(o.length/2));return c?E.jsx(p2,{children:E.jsx(h2,{children:"인기 검색어를 불러오는 중..."})}):f?E.jsxs(g2,{children:[E.jsx(m2,{children:f}),E.jsx(x2,{onClick:m,children:"다시 시도"})]}):E.jsxs(DE,{children:[E.jsx(_y,{children:S.map((w,b)=>E.jsxs(bh,{onMouseEnter:()=>i(b),onMouseLeave:()=>i(null),onClick:()=>x(w),children:[E.jsx(vh,{isHovered:n===b,children:b+1}),E.jsx(Sh,{children:w})]},b))}),E.jsx(_y,{children:T.map((w,b)=>{const v=b+S.length;return E.jsxs(bh,{onMouseEnter:()=>i(v),onMouseLeave:()=>i(null),onClick:()=>x(w),children:[E.jsx(vh,{isHovered:n===v,children:v+1}),E.jsx(Sh,{children:w})]},v)})})]})}function b2({onSearch:r}){const n=["나이키","아디다스","캠프","빈티지","힙"],[i,o]=_.useState(null),[l,c]=_.useState(n),[u,f]=_.useState(!1),[h,g]=_.useState(null),m=Br(),x=Ft(b=>b.isLoggedIn),S=Ft(b=>b.member),T=_.useCallback(async()=>{try{f(!0),g(null);const b=await OE(0,5,S?.memberId),v=b.result?.recommended_products||[],D=b.result?.styleTags||[],j=RE(v,D);j.length>0?c(j):c(n)}catch(b){console.error("Failed to fetch recommended searches:",b),g("추천 검색어를 불러올 수 없습니다."),c(n)}finally{f(!1)}},[S?.memberId]);_.useEffect(()=>{x&&S?.memberId&&T()},[x,S?.memberId,T]);const w=b=>{try{r?r(b):m(`/search?q=${encodeURIComponent(b)}`)}catch(v){console.error("Error handling search click:",v),m(`/search?q=${encodeURIComponent(b)}`)}};return u?E.jsx(p2,{children:E.jsx(h2,{children:"추천 검색어를 불러오는 중..."})}):h?E.jsxs(g2,{children:[E.jsx(m2,{children:h}),E.jsx(x2,{onClick:T,children:"다시 시도"})]}):E.jsx(zE,{children:l.map((b,v)=>E.jsxs(bh,{onMouseEnter:()=>o(v),onMouseLeave:()=>o(null),onClick:()=>w(b),children:[E.jsx(vh,{isHovered:i===v,children:v+1}),E.jsx(Sh,{children:b})]},v))})}function ME({product:r,onToggleLike:n,onClick:i}){const{productId:o,productImageUrl:l,productName:c,productBrand:u,productPrice:f}=r,h=x=>{x.stopPropagation(),n?.(o)},g=x=>x.toLocaleString("ko-KR");return ee("li",{css:NE,children:[ee("div",{css:jE,onClick:()=>{i?.(o)},children:[C("img",{src:l,alt:c,css:UE,loading:"lazy"}),C("button",{type:"button",onClick:h,css:IE,"aria-label":"like",children:C(ld,{"aria-label":"like",size:16,css:BE(r.liked),color:r.liked?"#fa5252":"#adb5bd",fill:r.liked?"#fa5252":"transparent",style:{display:"block"}})})]}),ee("div",{css:HE,children:[C("div",{css:$E,children:u}),C("div",{css:PE,children:c}),C("div",{css:qE,children:`₩ ${g(f)}`})]})]})}const NE=L`
  background: rgb(17, 17, 17);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: all 0.2s ease-in-out;
  position: relative;

  &:hover {
    transform: translateY(-4px);
    z-index: 1;
    cursor: pointer;
  }
`,jE=L`
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1;
  background: rgb(17, 17, 17);
  overflow: hidden;
`,UE=L`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`,IE=L`
  position: absolute;
  top: 8px;
  right: 8px;
  border: 2px solid transparent;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 50%;
  width: 28px;
  height: 28px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  overflow: hidden;

  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, #ff4444, #ff4444);
    transition: transform 0.3s ease-in-out;
  }

  &:before {
    transform: translateX(-100%);
  }

  &:after {
    transform: translateX(100%);
  }

  &:hover {
    transform: scale(1.3);
    border: 2px solid #ff4444;

    &:before {
      transform: translateX(0%);
    }

    &:after {
      transform: translateX(0%);
    }
  }
`,BE=r=>L`
  stroke: ${r?"#fa5252":"#adb5bd"};
  fill: ${r?"#fa5252":"transparent"};
  transition: all 0.3s ease-in-out;
  position: relative;
  z-index: 1;

  button:hover & {
    stroke: white;
    fill: ${r?"white":"transparent"};
    transform: scale(1.2);
  }
`,HE=L`
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 16px;
  background: rgb(17, 17, 17);
  text-align: left;
`,$E=L`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.7);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 500;
  letter-spacing: 0.02em;
  margin: 0;
  max-width: 90%;
`,PE=L`
  font-size: 16px;
  font-weight: 600;
  color: #ffffff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  letter-spacing: -0.01em;
  margin: 4px 0;
  max-width: 90%;
`,qE=L`
  margin: 8px 0 0;
  font-size: 15px;
  font-weight: 500;
  color: #ffffff;
  max-width: 90%;
`,Qi=_.memo(ME);function YE({isOpen:r,onClose:n}){const{isLoggedIn:i}=Ft(),[o,l]=_.useState(""),[c,u]=_.useState([]),[f,h]=_.useState([]),[g,m]=_.useState(!1),x=Br(),S=_.useRef(null),T=_.useCallback(async()=>{if(i)try{const z=await f2();z.success&&u(z.data.slice(0,5))}catch(z){console.error("Failed to fetch search history:",z),u([])}else try{const z=sessionStorage.getItem("recentSearches");if(z){const R=JSON.parse(z);u(R.slice(0,5))}else u([])}catch(z){console.error("Failed to fetch session search history:",z),u([])}},[i]);if(_.useEffect(()=>{r&&(T(),l(""),h([]))},[r,T]),_.useEffect(()=>()=>{S.current&&clearTimeout(S.current)},[]),!r)return null;const w=z=>{z.target===z.currentTarget&&n()},b=z=>{z.key==="Escape"?n():z.key==="Enter"&&o.trim()&&j()},v=z=>{const R=z.target.value;l(R),S.current&&clearTimeout(S.current),R.trim()?S.current=setTimeout(()=>{D(R.trim())},300):(h([]),m(!1))},D=async z=>{m(!0);try{const R=await d2({keyword:z,page:0,size:6});if(R.success){h(R.data.content);try{await yh(z)}catch(M){console.warn("Failed to delete search history for real-time search:",M)}}else h([])}catch(R){console.error("Search error:",R);const M=R;(M.code==="ERR_NETWORK"||M.message?.includes("Network Error")||M.message?.includes("CORS"))&&console.warn("Network error in search modal, silently handling"),h([])}finally{m(!1)}},j=z=>{const R=z||o.trim();if(R){if(!i)try{const M=sessionStorage.getItem("recentSearches");let k=M?JSON.parse(M):[];k=k.filter(I=>I!==R),k.unshift(R),k=k.slice(0,10),sessionStorage.setItem("recentSearches",JSON.stringify(k))}catch(M){console.error("Failed to save search to session storage:",M)}x(`/search?q=${encodeURIComponent(R)}`),n()}},A=async(z,R)=>{if(R.stopPropagation(),i)try{(await yh(z)).success&&(u(k=>k.filter(I=>I!==z)),T())}catch(M){console.error("Failed to delete search history:",M)}else try{const M=sessionStorage.getItem("recentSearches");if(M){const I=JSON.parse(M).filter($=>$!==z);sessionStorage.setItem("recentSearches",JSON.stringify(I)),u($=>$.filter(te=>te!==z))}}catch(M){console.error("Failed to delete session search history:",M)}};return E.jsx(GE,{onClick:w,onKeyDown:b,tabIndex:-1,children:E.jsxs(XE,{children:[E.jsx(VE,{children:E.jsx(FE,{type:"text",placeholder:"검색어를 입력하세요",value:o,onChange:v,autoFocus:!0})}),E.jsx(QE,{children:o?E.jsxs("div",{children:[E.jsx($i,{children:"검색 결과"}),g?E.jsx(t8,{children:"검색 중..."}):f.length>0?E.jsx(r8,{children:f.map(z=>E.jsx(Qi,{product:u0(z),onClick:()=>{x(`/search?q=${encodeURIComponent(z.productName)}`),n()}},z.productId))}):E.jsx(n8,{children:"검색 결과가 없습니다"})]}):E.jsxs(E.Fragment,{children:[c.length>0&&E.jsxs(E.Fragment,{children:[E.jsx($i,{children:"최근 검색어"}),E.jsx(KE,{children:c.map((z,R)=>E.jsxs(JE,{onClick:()=>j(z),children:[E.jsx(WE,{children:z}),E.jsx(e8,{onClick:M=>A(z,M),children:E.jsx(oi,{size:12})})]},R))})]}),E.jsxs(ZE,{children:[E.jsxs(Ty,{children:[E.jsx($i,{children:"추천 검색어"}),E.jsx(b2,{onSearch:j})]}),E.jsxs(Ty,{children:[E.jsx($i,{children:"실시간 순위"}),E.jsx(y2,{onSearch:j})]})]})]})})]})})}const GE=P.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`,XE=P.div`
  background: #0f1115;
  border-radius: 3px;
  width: 95%;
  max-width: 700px;
  max-height: 86vh;
  overflow-y: auto;
  overscroll-behavior: contain;
  -webkit-overflow-scrolling: touch;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
  animation: slideDown 0.2s ease-out;
  border: 1px solid #072bed;

  /* 스크롤바 스타일링 */
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
    border-radius: 0;
  }

  &::-webkit-scrollbar-thumb {
    background: #072bed;
    border-radius: 0;
    border: 2px solid #0f1115;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #a8e840;
  }

  /* Firefox용 스크롤바 스타일링 */
  scrollbar-width: thin;
  scrollbar-color: #072bed transparent;

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`,VE=P.div`
  padding: 20px 24px;
  border-bottom: 1px solid rgb(80, 80, 80);
  display: flex;
  align-items: center;
  justify-content: space-between;
`,FE=P.input`
  flex: 1;
  border: none;
  outline: none;
  font-size: 16px;
  color: #ffffff;
  background: transparent;

  &::placeholder {
    color: #ffffff;
  }
`,QE=P.div`
  padding: 20px 24px;
`,ZE=P.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`,Ty=P.div`
  display: flex;
  flex-direction: column;
`,KE=P.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 15px;
  margin-bottom: 20px;
`,JE=P.div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 8px;
  background: transparent;
  border: 1px solid #666666;
  border-radius: 5px;
  cursor: pointer;
  font-size: 13px;
  color: #cccccc;
  &:hover {
    border-color: #a8e840;
    color: #ffffff;
  }
`,WE=P.span`
  font-size: 13px;
  color: inherit;
`,e8=P.span`
  color: #666666;
  cursor: pointer;
  transition: all 0.2s ease;
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0;
  background: transparent;

  &:hover {
    color: #ff6b6b;
    background: rgba(255, 107, 107, 0.1);
    transform: scale(1.1);
  }
`,t8=P.p`
  font-size: 14px;
  color: #072bed;
  margin: 10px 0;
  text-align: center;
`,n8=P.p`
  font-size: 14px;
  color: #072bed;
  margin: 10px 0;
  text-align: center;
`,r8=P.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 16px;
  margin-top: 16px;
`,a8=Wu`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`,i8=Wu`
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(100%);
    opacity: 0;
  }
`;function Ma({show:r,onClose:n,message:i="로그인이 필요합니다."}){return _.useEffect(()=>{if(r){const o=setTimeout(()=>{n()},2e3);return()=>clearTimeout(o)}},[r,n]),r?C("div",{css:o8,children:C("div",{css:l8(r),children:ee("div",{css:s8,children:[C(W6,{size:16,css:c8}),C("span",{css:u8,children:i})]})})}):null}const o8=L`
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  pointer-events: none;
`,l8=r=>L`
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 12px 20px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  animation: ${r?a8:i8} 0.3s ease-in-out;
  pointer-events: auto;
`,s8=L`
  display: flex;
  align-items: center;
  gap: 8px;
`,c8=L`
  color: white;
`,u8=L`
  font-size: 14px;
  font-weight: 500;
`;function d8(){const[r,n]=_.useState(!1),{show:i,message:o,hideToast:l,showToast:c}=il(),u=()=>{n(!0)},f=()=>{n(!1)};return _.useEffect(()=>{sessionStorage.getItem("toast_logout")&&(c("로그아웃 되었습니다"),sessionStorage.removeItem("toast_logout"))},[c]),ee("main",{css:f8,children:[C(hE,{onSearchClick:u}),C(t4,{}),C(YE,{isOpen:r,onClose:f}),C(Ma,{show:i,onClose:l,message:o})]})}const f8=L`
  width: 100%;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  position: relative;
`,iu="/demos/onwear/";function p8(){const r=Br(),{isLoggedIn:n}=Ft(),{showToast:i}=il(),o=c=>{switch(c){case"FITTING":n?r("/fittingroom"):i("로그인이 필요한 서비스입니다.");return;case"RECOMMEND":r("/recommend");return;case"Image Search":r("/image-search");return;case"HOT ITEMS":r("/HotItems");return;default:return}},l=[{category:"",title:`나만의 패션 큐레이터
ON-WEAR`,description:"당신의 취향을 반영한 맞춤형 추천",date:"",author:""},{category:"FITTING",title:"사진 속 나에게 옷을 입혀보다",description:"가상 피팅으로 미리 경험하는 새로운 스타일",date:"",author:""},{category:"RECOMMEND",title:"당신을 위한 맞춤 추천",description:"취향 분석을 통한 개인화된 상품 추천",date:"",author:""},{category:"Image Search",title:"사진과 유사한 옷들을 한 번에",description:"비슷한 스타일을 빠르고 간편하게 찾기",date:"",author:""},{category:"HOT ITEMS",title:"지금 가장 인기있는 아이템",description:"카테고리별 주목받는 상품들",date:"",author:""}];return C("div",{css:h8,children:ee("section",{css:g8,children:[C("div",{css:Ey,children:[0,2].map(c=>{const u=l[c+1];return C("article",{css:Cy,className:c===0?"featured-card":"third-card",onClick:()=>o(u.category),children:ee("div",{css:Hp,children:[C("div",{css:$p,children:u.category}),C("h3",{css:ky,children:u.title}),C("p",{css:Pp,children:u.description})]})},`left-col-${c}`)})}),C("article",{css:m8,onClick:()=>r("/"),children:ee("div",{css:[Hp,x8],children:[C("div",{css:$p,children:l[0].category}),C("h2",{css:y8,children:l[0].title}),C("p",{css:Pp,children:l[0].description})]})}),C("div",{css:Ey,children:[1,3].map(c=>{const u=l[c+1];return C("article",{css:Cy,className:c===1?"second-card":"fourth-card",onClick:()=>o(u.category),children:ee("div",{css:Hp,children:[C("div",{css:$p,children:u.category}),C("h3",{css:ky,children:u.title}),C("p",{css:Pp,children:u.description})]})},`right-col-${c}`)})})]})})}const h8=L`
  width: 100%;
  height: 100vh;
  background: #fff;
  overflow-y: hidden;
  overflow-x: hidden;
  scroll-behavior: smooth;
  scroll-snap-type: y mandatory;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: rgba(0, 0, 0, 0.3);
  }
`,g8=L`
  display: grid;
  grid-template-columns: 1fr 520px 1fr; /* 좌-중앙-우 */
  background: #eee;
  height: 100vh;
  scroll-snap-align: start;
  scroll-snap-stop: always;
`,Ey=L`
  display: grid;
  grid-template-rows: 1fr 1fr;
  height: 100vh;
  background: #eee;
  overflow: hidden;
`,m8=L`
  position: relative;
  overflow: hidden;
  cursor: default;
  transition: transform 0.3s ease;
  background: #a8e840;
  width: 520px;
  height: 100vh;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      180deg,
      // rgba(0, 0, 0, 0.2) 0%,
      // rgba(0, 0, 0, 0.4) 50%,
       // rgba(0, 0, 0, 0.8) 100%
    );
  }
`,Cy=L`
  position: relative;
  background: #f8f8f8;
  overflow: hidden;
  cursor: pointer;
  height: calc(100vh / 2);
  transition: transform 0.3s ease;

  &.featured-card {
    background: url('${iu}img/kanye1.avif') center/cover;
  }

  &.second-card {
    background: url('${iu}img/girl.png') center/cover;
  }

  &.third-card {
    background: url('${iu}img/izy.avif') center/cover;
  }

  &.fourth-card {
    background: url('${iu}img/tyler.avif') center/cover;
  }

  &:hover {
    transform: scale(1.02);
  }

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: transparent;
  }
`,Hp=L`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2rem;
  color: #fff;
`,x8=L`
  color: #000;
  font-weight: 800;
`,$p=L`
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
`,y8=L`
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
  line-height: 1.2;
  white-space: pre-line;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
`,ky=L`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  line-height: 1.3;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
`,Pp=L`
  font-size: 1.1rem;
  margin-bottom: 1rem;
  opacity: 0.9;
  margin-left: 3px;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
`;function Oy(){const r=rr(),[n,i]=_.useState(!1),{setAuthFromRedirect:o}=Ft();return _.useEffect(()=>{r.state&&r.state.showLoginToast&&(i(!0),window.history.replaceState({},document.title))},[r.state]),_.useEffect(()=>{const l=new URLSearchParams(r.search),c=l.get("grantType"),u=l.get("accessToken");c&&u&&o(window.location.href)&&window.history.replaceState({},document.title,window.location.pathname)},[r.search,o]),ee(ra,{children:[C("div",{css:b8,children:C(p8,{})}),C(Ma,{show:n,onClose:()=>i(!1),message:"로그인이 필요한 서비스입니다."})]})}const b8=L`
  position: absolute;
  left: 80px;
  right: 0;
  top: 0;
  bottom: 0;
  background: #fff;
  transition: left 0.3s ease;

  nav:hover ~ & {
    left: 200px;
  }
`,Xn="/demos/onwear/assets/default_mannequin2-OdBn73VC.png";function v8({isVisible:r}){const n=_.useRef(null),[i,o]=_.useState(!1),[l,c]=_.useState(!1),[u,f]=_.useState(""),[h,g]=_.useState(!1),m=_.useRef(null),x=_.useRef(1),S=_.useCallback(()=>{if(!n.current)return;const k=n.current;k.style.setProperty("--line-top-x","200%"),k.style.setProperty("--line-bottom-x","100%"),setTimeout(()=>{k.style.setProperty("--line-top-x","0%"),k.style.setProperty("--line-bottom-x","0%")},500)},[]),T=_.useCallback(()=>{m.current&&clearInterval(m.current);const k=1e3/x.current;m.current=setInterval(S,k),S()},[S]),w=_.useCallback(()=>{m.current&&(clearInterval(m.current),m.current=null)},[]),b=_.useCallback(k=>{x.current=k,T()},[T]),v=_.useCallback((k,I=200,$=0)=>n.current?new Promise(te=>{setTimeout(()=>{if(!n.current)return te();const re=n.current;Object.entries(k).forEach(([le,ye])=>{re.style.setProperty(le,ye)}),setTimeout(()=>te(),I)},$)}):Promise.resolve(),[]),D=_.useCallback(async()=>{i||(o(!0),g(!0),b(2),await Promise.all([v({"--skate-x":"-12px"},300),v({"--skate-y":"-32px"},400,200)]),await v({"--skate-x":"12px"},500),await Promise.all([v({"--skate-x":"0px"},500),v({"--skate-y":"0px"},200),v({"--arm-front":"40deg","--arm-front-end":"-12deg","--arm-back":"172deg","--arm-back-end":"38deg","--leg-front":"-8deg","--leg-front-end":"102deg","--leg-back":"103deg","--leg-back-end":"-16deg","--board-r":"-40deg","--body-r":"7deg","--body-y":"-90%","--body-x":"-160%"},200,200)]),await v({"--arm-front":"24deg","--arm-front-end":"-48deg","--arm-back":"164deg","--arm-back-end":"-50deg","--leg-front":"40deg","--leg-front-end":"30deg","--leg-back":"120deg","--leg-back-end":"-36deg","--board-r":"0deg","--body-r":"12deg","--body-y":"-65%","--body-x":"-85%"},400),o(!1),b(1))},[i,v,b]),j=_.useCallback(async()=>{i||(o(!0),g(!0),b(2.5),await Promise.all([v({"--skate-x":"12px"},300),v({"--arm-front":"24deg","--arm-front-end":"-48deg","--arm-back":"164deg","--arm-back-end":"-36deg","--leg-front":"-4deg","--leg-front-end":"66deg","--leg-back":"111deg","--leg-back-end":"-36deg","--board-r":"0deg","--body-r":"34deg","--body-y":"-53%","--body-x":"-28%"},200)]))},[i,v,b]),A=_.useCallback(async()=>{i||(o(!0),g(!0),b(.5),await Promise.all([v({"--skate-x":"-12px"},300),v({"--arm-front":"32deg","--arm-front-end":"20deg","--arm-back":"156deg","--arm-back-end":"-22deg","--leg-front":"19deg","--leg-front-end":"74deg","--leg-back":"134deg","--leg-back-end":"-29deg","--board-r":"-15deg","--body-r":"-8deg","--body-y":"-65%","--body-x":"-110%"},200)]))},[i,v,b]),z=_.useCallback(async()=>{i||(o(!0),g(!0),await v({"--arm-front":"-26deg","--arm-front-end":"-58deg","--arm-back":"204deg","--arm-back-end":"60deg","--leg-front":"40deg","--leg-front-end":"80deg","--leg-back":"150deg","--leg-back-end":"-96deg","--body-r":"180deg","--body-y":"-100%"},200))},[i,v]),R=_.useCallback(async()=>{i||(o(!0),c(!0),w(),await Promise.all([v({"--board-x":"60px"},500),(async()=>{await v({"--board-r":"-40deg"},150),await v({"--board-r":"0deg"},300)})(),(async()=>{await v({"--line-top-x":"-100%","--line-bottom-x":"-200%","--body-r":"-8deg","--leg-back-end":"24deg","--leg-back":"60deg","--leg-front-end":"30deg","--leg-front":"10deg","--arm-back-end":"-40deg","--arm-back":"54deg","--arm-front-end":"-28deg","--arm-front":"24deg"},200),await v({"--body-x":"-85%","--body-y":"36%","--body-r":"-26deg","--leg-back-end":"24deg","--leg-back":"20deg","--leg-front-end":"30deg","--leg-front":"-10deg","--arm-back-end":"-40deg","--arm-back":"164deg","--arm-front-end":"-28deg","--arm-front":"24deg"},200)})()]))},[i,v,w]),M=_.useCallback(async()=>{i&&(await Promise.all([v({"--skate-x":"0px"},300),v({"--arm-front":"24deg","--arm-front-end":"-48deg","--arm-back":"164deg","--arm-back-end":"-50deg","--leg-front":"40deg","--leg-front-end":"30deg","--leg-back":"120deg","--leg-back-end":"-36deg","--board-r":"0deg","--board-x":"0px","--body-r":"12deg","--body-y":"-65%","--body-x":"-85%"},200)]),o(!1),T(),b(1))},[i,v,T,b]);return _.useEffect(()=>{if(!r)return;T();const k=$=>{$.code==="ArrowRight"||$.keyCode===39?(j(),f("right")):$.code==="ArrowDown"||$.keyCode===40?(z(),f("down")):$.code==="ArrowLeft"||$.keyCode===37?(A(),f("left")):($.code==="KeyC"||$.keyCode===67)&&(R(),f("fall"),setTimeout(()=>f(""),400))},I=$=>{$.code==="Space"||$.code==="ArrowUp"||$.keyCode===32||$.keyCode===38?(l?(c(!1),M()):D(),f("up"),setTimeout(()=>f(""),400)):($.code==="ArrowDown"||$.code==="ArrowRight"||$.code==="ArrowLeft"||$.keyCode===40||$.keyCode===39||$.keyCode===37)&&(l||M(),f(""))};return document.addEventListener("keydown",k),document.addEventListener("keyup",I),()=>{document.removeEventListener("keydown",k),document.removeEventListener("keyup",I),w()}},[r,D,j,A,z,R,M,l,T,w]),r?ee("div",{css:S8,children:[C("div",{css:w8,ref:n,children:ee("div",{css:_8,children:[ee("div",{css:T8,children:[C("div",{css:[Ry,C8]}),C("div",{css:[Ry,E8]}),C("div",{css:[Ay,O8]}),C("div",{css:[Ay,k8]})]}),C("div",{css:R8,children:C("svg",{viewBox:"0 0 34 8",children:C("path",{d:"M0.897306 0.911767C1.22218 0.30263 1.97934 0.072188 2.58848 0.397061L2.91936 0.573532C3.75214 1.01768 4.68144 1.25 5.62525 1.25H28.3752C29.3191 1.25 30.2484 1.01768 31.0811 0.573532L31.412 0.397061C32.0212 0.072188 32.7783 0.30263 33.1032 0.911767C33.4281 1.5209 33.1976 2.27807 32.5885 2.60294L32.2576 2.77941C31.0627 3.41667 29.7294 3.75 28.3752 3.75H27.9692C28.5841 4.09118 29.0002 4.747 29.0002 5.5C29.0002 6.60457 28.1048 7.5 27.0002 7.5C25.8957 7.5 25.0002 6.60457 25.0002 5.5C25.0002 4.747 25.4164 4.09118 26.0312 3.75H7.96925C8.5841 4.09118 9.00025 4.747 9.00025 5.5C9.00025 6.60457 8.10482 7.5 7.00025 7.5C5.89568 7.5 5.00025 6.60457 5.00025 5.5C5.00025 4.747 5.41639 4.09118 6.03124 3.75H5.62525C4.27109 3.75 2.93774 3.41667 1.74289 2.77941L1.41201 2.60294C0.802874 2.27807 0.572432 1.5209 0.897306 0.911767Z"})})}),C("div",{css:[Ly,A8]}),C("div",{css:[Ly,L8]})]})}),ee("div",{css:z8,children:[C("button",{css:[ou,D8,u==="up"&&lu],onClick:()=>{l?(c(!1),M()):D()},children:C("svg",{viewBox:"0 0 8 8",children:C("path",{d:"M3.99953 1C3.83653 1 3.68353 1.0795 3.59003 1.2135L0.0900328 6.2135C-0.0169672 6.366 -0.0289672 6.5655 0.0560328 6.731C0.142533 6.8965 0.313033 7 0.499533 7H7.50003C7.68653 7 7.85753 6.8965 7.94353 6.731C8.02853 6.5655 8.01653 6.366 7.90953 6.2135L4.40953 1.2135C4.31653 1.0795 4.16353 1 4.00053 1C4.00003 1 4.00003 1 3.99953 1C4.00003 1 4.00003 1 3.99953 1Z"})})}),C("button",{css:[ou,M8,u==="left"&&lu],onPointerDown:()=>A(),onPointerUp:()=>!l&&M(),children:C("svg",{viewBox:"0 0 8 8",children:C("path",{d:"M1 4.00053C1 4.16353 1.0795 4.31653 1.2135 4.41003L6.2135 7.91003C6.366 8.01703 6.5655 8.02903 6.731 7.94403C6.8965 7.85753 7 7.68703 7 7.50053V0.499533C7 0.313033 6.8965 0.142033 6.731 0.0560328C6.5655 -0.0289672 6.366 -0.0169672 6.2135 0.0900328L1.2135 3.59003C1.0795 3.68353 1 3.83653 1 3.99953C1 4.00003 1 4.00003 1 4.00053C1 4.00003 1 4.00003 1 4.00053Z"})})}),C("button",{css:[ou,N8,u==="right"&&lu],onPointerDown:()=>j(),onPointerUp:()=>!l&&M(),children:C("svg",{viewBox:"0 0 8 8",children:C("path",{d:"M7 3.99953C7 3.83653 6.9205 3.68353 6.7865 3.59003L1.7865 0.0900328C1.6345 -0.0169672 1.4345 -0.0289672 1.269 0.0560328C1.1035 0.142533 1 0.313033 1 0.499533V7.50003C1 7.68653 1.1035 7.85753 1.269 7.94353C1.4345 8.02853 1.634 8.01653 1.7865 7.90953L6.7865 4.40953C6.9205 4.31653 7 4.16353 7 4.00053C7 4.00003 7 4.00003 7 3.99953C7 4.00003 7 4.00003 7 3.99953Z"})})}),C("button",{css:[ou,j8,u==="down"&&lu],onPointerDown:()=>z(),onPointerUp:()=>!l&&M(),children:C("svg",{viewBox:"0 0 8 8",children:C("path",{d:"M4.00053 7C4.16353 7 4.31653 6.9205 4.41003 6.7865L7.91003 1.7865C8.01703 1.634 8.02903 1.4345 7.94403 1.269C7.85753 1.1035 7.68703 1 7.50053 1H0.499533C0.313033 1 0.142533 1.1035 0.0560328 1.269C-0.0289672 1.4345 -0.0169672 1.634 0.0900328 1.7865L3.59003 6.7865C3.68353 6.9205 3.83653 7 3.99953 7C4.00003 7 4.00003 7 4.00053 7C4.00003 7 4.00003 7 4.00053 7Z"})})}),ee("span",{css:[U8,!h&&I8,u==="fall"&&B8],children:["Please don't press ",C("strong",{children:"C"})]})]})]}):null}const S8=L`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(36, 36, 40, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 20;
`,w8=L`
  --arm-front: 24deg;
  --arm-front-end: -48deg;
  --arm-back: 164deg;
  --arm-back-end: -50deg;
  --leg-front: 40deg;
  --leg-front-end: 30deg;
  --leg-back: 120deg;
  --leg-back-end: -36deg;
  --board-r: 0deg;
  --board-x: 0px;
  --body-r: 12deg;
  --body-y: -65%;
  --body-x: -85%;
  --skate-x: 0px;
  --skate-y: 0px;
  --color: #a8e840;
  --line-top-x: 0%;
  --line-bottom-x: 0%;
  position: relative;
`,_8=L`
  position: relative;
  width: 40px;
  height: 46px;
  transform: translate(var(--skate-x), var(--skate-y)) translateZ(0);
`,T8=L`
  background: var(--color);
  height: 15px;
  width: 7px;
  border-radius: 4px;
  transform-origin: 4px 11px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(var(--body-x), var(--body-y)) rotate(var(--body-r))
    translateZ(0);

  &:before {
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 4px;
    bottom: 16px;
    left: 0;
    position: absolute;
    background: var(--color);
    transform: translateY(-0.5px);
  }
`,Ry=L`
  content: '';
  width: 11px;
  height: 4px;
  top: 0;
  left: 2px;
  border-radius: 2px;
  transform-origin: 2px 2px;
  position: absolute;
  background: var(--color);

  &:before {
    content: '';
    width: 11px;
    height: 4px;
    left: 8px;
    border-radius: 2px;
    transform-origin: 2px 2px;
    position: absolute;
    background: var(--color);
  }
`,E8=L`
  transform: rotate(var(--arm-front));

  &:before {
    transform: rotate(var(--arm-front-end));
  }
`,C8=L`
  transform: rotate(var(--arm-back));

  &:before {
    transform: rotate(var(--arm-back-end));
  }
`,Ay=L`
  content: '';
  width: 11px;
  height: 4px;
  top: 11px;
  left: 2px;
  border-radius: 2px;
  transform-origin: 2px 2px;
  position: absolute;
  background: var(--color);

  &:before {
    content: '';
    width: 11px;
    height: 4px;
    top: 0;
    left: 8px;
    border-radius: 2px;
    transform-origin: 2px 2px;
    position: absolute;
    background: var(--color);
  }
`,k8=L`
  transform: rotate(var(--leg-front));

  &:before {
    transform: rotate(var(--leg-front-end));
  }
`,O8=L`
  left: 1px;
  transform: rotate(var(--leg-back));

  &:before {
    transform: rotate(var(--leg-back-end));
  }
`,R8=L`
  position: absolute;
  left: 2px;
  bottom: -1px;
  transform: translateX(var(--board-x)) rotate(var(--board-r)) translateZ(0);
  transform-origin: 7px 5.5px;

  svg {
    display: block;
    width: 34px;
    height: 8px;
    fill: var(--color);
  }
`,Ly=L`
  height: 3px;
  border-radius: 1px;
  overflow: hidden;
  position: absolute;
  right: 105%;
  top: 18px;
  width: 16px;
  transform: scaleY(0.75);
  transition: all 0.5s ease;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    border-radius: inherit;
    background: var(--color);
    transform: translateX(var(--x));
    transition: transform 0.5s ease;
  }
`,A8=L`
  &:before {
    transform: translateX(var(--line-top-x));
  }
`,L8=L`
  width: 13px;
  top: 24px;

  &:before {
    transform: translateX(var(--line-bottom-x));
  }
`,z8=L`
  display: grid;
  grid-gap: 8px;
  position: absolute;
  left: 50%;
  bottom: 32px;
  user-select: none;
  transform: translateX(-50%);
  scale: 0.8;

  @media (max-width: 480px) {
    scale: 0.7;
    bottom: 24px;
  }
`,ou=L`
  appearance: none;
  height: 36px;
  width: 40px;
  border-radius: 7px;
  background: #2c2c31;
  border: none;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: scale(1) translateZ(0);
  transition:
    transform 0.15s,
    background-color 0.15s;
  cursor: pointer;

  &:hover {
    background: #3a3a3f;
  }

  svg {
    display: block;
    width: 8px;
    height: 8px;
    fill: #7f7f85;
    transition: fill 0.15s;
  }
`,lu=L`
  transform: scale(0.95) translateZ(0);
  background: #3a3a3f;

  svg {
    fill: #fff;
  }
`,D8=L`
  grid-row: 1;
  grid-column: 2;
`,M8=L`
  grid-row: 2;
  grid-column: 1;
`,N8=L`
  grid-row: 2;
  grid-column: 3;
`,j8=L`
  grid-row: 2;
  grid-column: 2;
`,U8=L`
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  bottom: -24px;
  line-height: 16px;
  font-size: 12px;
  font-weight: 500;
  color: #7f7f85;
  text-align: center;
  transition: opacity 0.25s;

  strong {
    transition: color 0.15s;
    color: #7f7f85;
  }
`,I8=L`
  opacity: 0;
  pointer-events: none;
`,B8=L`
  strong {
    color: #fff;
  }
`,H8=({mannequinImage:r,currentAvatarIndex:n,avatarImages:i,onLeftArrow:o,onRightArrow:l,onThumbnailClick:c,isLoading:u=!1})=>{const[f,h]=_.useState(r);return _.useEffect(()=>{h(r)},[r]),E.jsxs($8,{children:[E.jsx(P8,{$imageUrl:f},f),E.jsx(v8,{isVisible:u}),E.jsxs(q8,{children:[E.jsx(v2,{onClick:o,children:E.jsx(zy,{children:"‹"})}),E.jsx(Y8,{onClick:l,children:E.jsx(zy,{children:"›"})})]}),E.jsx(G8,{children:i.map((g,m)=>E.jsx(X8,{$imageUrl:g,$isActive:m===n,$isLoading:!g,onClick:()=>g&&c(m)},m))})]})},$8=P.div`
  position: relative;
  width: 100%;
  height: 100%; /* 부모 컨테이너 높이에 맞춤 */
  background-color: #f8f8f8;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  /* margin-top 제거하여 완전한 높이 일치 */

  @media (max-width: 768px) {
    width: 280px;
    height: 390px;
  }

  @media (max-width: 480px) {
    width: calc(100vw - 32px);
    height: 400px;
  }
`,P8=P.div`
  width: 100%;
  height: 100%;
  background-image: url(${r=>r.$imageUrl});
  background-size: contain; /* contain으로 설정하여 이미지 전체가 보이도록 함 */
  background-position: center;
  background-repeat: no-repeat;
`,q8=P.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  pointer-events: none;
`,v2=P.button`
  width: 24px;
  height: 24px;
  background: rgba(255, 255, 255, 0.9);
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  pointer-events: all;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);

  &:hover {
    background: rgba(255, 255, 255, 1);
  }
`,Y8=P(v2)``,zy=P.span`
  font-size: 16px;
  color: #404040;
  line-height: 1;
`,G8=P.div`
  position: absolute;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
  z-index: 10;
`,X8=P.div`
  width: 32px;
  height: 43px;
  background-color: ${r=>r.$isLoading?"#f0f0f0":r.$isEmpty?"#ffffff":"#e0e0e0"};
  background-image: ${r=>r.$isLoading||r.$isEmpty?"none":r.$imageUrl?`url(${r.$imageUrl})`:`url(${Xn})`};
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  border: 2px solid
    ${r=>r.$isLoading?"#d0d0d0":r.$isActive?"#404040":"rgba(0, 0, 0, 0.69)"};
  border-radius: 5px;
  cursor: ${r=>r.$isLoading?"default":"pointer"};
  transition: border-color 0.2s ease;
  opacity: ${r=>r.$isLoading?.6:1};

  &:hover {
    border-color: ${r=>r.$isLoading?"#d0d0d0":"#404040"};
  }

  /* 로딩 상태일 때 점점이 애니메이션 효과 */
  ${r=>r.$isLoading&&`
    position: relative;
    &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 12px;
      height: 12px;
      margin: -6px 0 0 -6px;
      border: 2px solid #ccc;
      border-top-color: #666;
      border-radius: 50%;
      animation: thumbnail-loading 1s infinite linear;
    }

    @keyframes thumbnail-loading {
      to {
        transform: rotate(360deg);
      }
    }
  `}
`,qp=({children:r,content:n,position:i="top",disabled:o=!1})=>o?E.jsx(E.Fragment,{children:r}):E.jsxs(V8,{children:[r,E.jsx(F8,{position:i,"data-position":i,children:n})]}),V8=P.div`
  position: relative;
  display: inline-block;

  /* 호버 시 tooltip을 표시 - top/bottom 위치 */
  &:hover > div[data-position='top'],
  &:hover > div[data-position='bottom'] {
    opacity: 1;
    visibility: visible;
  }

  &:hover > div[data-position='top'] {
    transform: translateX(-50%) translateY(0);
  }

  &:hover > div[data-position='bottom'] {
    transform: translateX(-50%) translateY(0);
  }

  /* 호버 시 tooltip을 표시 - left/right 위치 */
  &:hover > div[data-position='left'],
  &:hover > div[data-position='right'] {
    opacity: 1;
    visibility: visible;
  }

  &:hover > div[data-position='left'] {
    transform: translateY(-50%) translateX(0);
  }

  &:hover > div[data-position='right'] {
    transform: translateY(-50%) translateX(0);
  }
`,F8=P.div`
  position: absolute;
  background: linear-gradient(
    135deg,
    rgba(99, 102, 241, 0.92) 0%,
    rgba(139, 92, 246, 0.92) 100%
  );
  backdrop-filter: blur(10px);
  color: white;
  padding: 12px 16px;
  border-radius: 12px;
  font-size: 13px;
  font-weight: 500;
  line-height: 1.4;
  white-space: nowrap;
  z-index: 1000;
  pointer-events: none;
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);

  /* 초기 상태는 보이지 않음 */
  opacity: 0;
  visibility: hidden;
  transform: translateY(4px);
  transition: all 0.2s ease-in-out;

  /* 위치별 스타일링 */
  ${({position:r})=>{switch(r){case"top":return L`
          bottom: calc(100% + 8px);
          left: 50%;
          transform: translateX(-50%) translateY(4px);

          /* 화살표 */
          &::after {
            content: '';
            position: absolute;
            top: 100%;
            left: 50%;
            transform: translateX(-50%);
            border: 6px solid transparent;
            border-top-color: rgba(99, 102, 241, 0.92);
          }
        `;case"bottom":return L`
          top: calc(100% + 8px);
          left: 50%;
          transform: translateX(-50%) translateY(-4px);

          /* 화살표 */
          &::after {
            content: '';
            position: absolute;
            bottom: 100%;
            left: 50%;
            transform: translateX(-50%);
            border: 6px solid transparent;
            border-bottom-color: rgba(99, 102, 241, 0.92);
          }
        `;case"left":return L`
          right: calc(100% + 8px);
          top: 50%;
          transform: translateY(-50%) translateX(4px);

          /* 화살표 */
          &::after {
            content: '';
            position: absolute;
            left: 100%;
            top: 50%;
            transform: translateY(-50%);
            border: 6px solid transparent;
            border-left-color: rgba(99, 102, 241, 0.92);
          }
        `;case"right":return L`
          left: calc(100% + 8px);
          top: 50%;
          transform: translateY(-50%) translateX(-4px);

          /* 화살표 */
          &::after {
            content: '';
            position: absolute;
            right: 100%;
            top: 50%;
            transform: translateY(-50%);
            border: 6px solid transparent;
            border-right-color: rgba(99, 102, 241, 0.92);
          }
        `;default:return""}}}

  /* 반응형 폰트 크기 */
  @media (max-width: 768px) {
    font-size: 12px;
    padding: 10px 14px;
  }

  @media (max-width: 480px) {
    font-size: 11px;
    padding: 8px 12px;
    max-width: 200px;
    white-space: normal;
  }
`,Q8=({onUploadClick:r,onDeleteClick:n,onDownloadClick:i,isUploading:o=!1,isDeleting:l=!1,isDownloading:c=!1,isDefaultMannequin:u=!1})=>E.jsxs(Z8,{children:[E.jsx(qp,{content:"나만의 마네킹 이미지를 업로드하여 가상 피팅을 체험해보세요",position:"right",disabled:o||l,children:E.jsx(Yp,{onClick:r,disabled:o||l,colorIndex:1,title:o?"변경 중...":"마네킹 이미지 등록",children:E.jsx(uE,{style:{width:"16px",height:"16px",color:"currentColor",strokeWidth:1.5,opacity:o?.6:1}})})}),E.jsx(qp,{content:"현재 등록된 마네킹 이미지를 삭제하고 기본 이미지로 되돌립니다",position:"right",disabled:l||o||u,children:E.jsx(Yp,{onClick:n,disabled:l||o||u,colorIndex:1,title:l?"삭제 중...":"마네킹 이미지 삭제",children:E.jsx(fE,{style:{width:"16px",height:"16px",color:"currentColor",strokeWidth:1.5,opacity:l?.6:1}})})}),E.jsx(qp,{content:"현재 마네킹 이미지를 내 기기에 저장합니다",position:"right",disabled:c,children:E.jsx(Yp,{onClick:i,disabled:c,title:c?"다운로드 중...":"마네킹 이미지 다운로드",colorIndex:1,children:E.jsx(F6,{style:{width:"14px",height:"14px",color:"currentColor",strokeWidth:1.5,opacity:c?.6:1}})})})]}),Yp=P.button`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  margin: 0;
  color: #b0b8c1;
  background: #2c3038;
  border: 1px solid #404650;
  cursor: ${r=>r.disabled?"not-allowed":"pointer"};
  font-family: 'NanumSquare', 'Raleway', sans-serif;
  font-weight: 600;
  opacity: ${r=>r.disabled?.5:1};
  pointer-events: ${r=>r.disabled?"none":"auto"};
  border-radius: 0;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  z-index: 1;

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }

  @media (max-width: 480px) {
    width: 36px;
    height: 36px;
  }

  &:hover:not(:disabled) {
    background: #404650;
    border-color: #5a6169;
    color: #ffffff;
    transform: translateY(-1px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
  }

  &:active:not(:disabled) {
    transform: translateY(0px);
    transition: all 0.1s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(13, 110, 253, 0.25);
  }

  &:focus:not(:focus-visible) {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  }

  /* Respect user's motion preferences */
  @media (prefers-reduced-motion: reduce) {
    transition: none;

    &:hover:not(:disabled) {
      transform: none;
    }

    &:active:not(:disabled) {
      transform: none;
    }
  }
`,Z8=P.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  position: absolute;
  top: 16px;
  left: 16px;
  z-index: 12;
  padding: 16px;
  background: #1a1d23;
  border-radius: 0;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.4);
  border: 1px solid #404650;

  @media (max-width: 768px) {
    padding: 12px;
    gap: 10px;
    top: 12px;
    left: 12px;
  }

  @media (max-width: 480px) {
    padding: 10px;
    gap: 8px;
    top: 10px;
    left: 10px;
    box-shadow: 0 2px 16px rgba(0, 0, 0, 0.3);
  }
`,K8=({activeTab:r,onTabClick:n})=>E.jsx(J8,{children:E.jsxs(W8,{children:[E.jsx(Dy,{$active:r==="wishlist",onClick:()=>n("wishlist"),children:"LIKES"}),E.jsx(Dy,{$active:r==="mycodi",onClick:()=>n("mycodi"),children:"OUTFITS"})]})}),J8=P.div`
  display: flex;
  justify-content: center;
  margin-bottom: 8px;
  background: transparent;
`,W8=P.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;

  /* 큰 화면 (width ≥ 1200px) - 4K, 큰 모니터 */
  @media (min-width: 1200px) {
    gap: 16px;
  }

  /* 중간 화면 (width: 1024px-1199px) - QHD, 큰 노트북 */
  @media (min-width: 1024px) and (max-width: 1199px) {
    gap: 12px;
  }

  /* 표준 화면 (width: 768px-1023px) - FHD, 표준 노트북 */
  @media (min-width: 768px) and (max-width: 1023px) {
    gap: 8px;
  }

  /* 작은 화면 (width: 480px-767px) - 태블릿 */
  @media (min-width: 480px) and (max-width: 767px) {
    gap: 6px;
  }

  /* 모바일 (width < 480px) */
  @media (max-width: 479px) {
    gap: 4px;
    flex-direction: column;
    width: 100%;
  }
`,Dy=P.button`
  padding: 16px 32px;
  border: none;
  background: transparent;
  color: ${r=>r.$active?"#FFFFFF":"#B0B8C1"};
  font-family: 'NanumSquare', sans-serif;
  font-weight: ${r=>r.$active?"700":"500"};
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  white-space: nowrap;
  min-width: 0;
  flex-shrink: 1;

  &:hover {
    color: #ffffff;
    background: transparent;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 4px;
    left: 50%;
    transform: translateX(-50%);
    width: ${r=>r.$active?"60%":"0"};
    height: 2px;
    background: #ffffff;
    transition: width 0.3s ease;
    border-radius: 1px;
  }

  &:hover::after {
    width: 60%;
  }

  /* 큰 화면 (width ≥ 1200px) - 4K, 큰 모니터 */
  @media (min-width: 1200px) {
    padding: 18px 36px;
    font-size: 18px;
    letter-spacing: 0.7px;
  }

  /* 중간 화면 (width: 1024px-1199px) - QHD, 큰 노트북 */
  @media (min-width: 1024px) and (max-width: 1199px) {
    padding: 12px 24px;
    font-size: 14px;
    letter-spacing: 0.3px;
  }

  /* 표준 화면 (width: 768px-1023px) - FHD, 표준 노트북 */
  @media (min-width: 768px) and (max-width: 1023px) {
    padding: 14px 28px;
    font-size: 15px;
    letter-spacing: 0.4px;
  }

  /* 작은 화면 (width: 480px-767px) - 태블릿 */
  @media (min-width: 480px) and (max-width: 767px) {
    padding: 12px 24px;
    font-size: 14px;
    letter-spacing: 0.3px;
  }

  /* 모바일 (width < 480px) */
  @media (max-width: 479px) {
    padding: 10px 20px;
    font-size: 13px;
    letter-spacing: 0.2px;
    width: 100%;
    max-width: 200px;
    margin: 0 auto;
  }

  /* 매우 작은 모바일 (width < 360px) */
  @media (max-width: 359px) {
    padding: 8px 16px;
    font-size: 12px;
    letter-spacing: 0.1px;
  }
`,eC=({activeCategory:r,onCategoryClick:n})=>E.jsx(tC,{children:E.jsxs(nC,{children:[E.jsx(Gp,{$active:r==="Total",onClick:()=>n("Total"),children:"Total"}),E.jsx(Gp,{$active:r==="Upper",onClick:()=>n("Upper"),children:"Upper"}),E.jsx(Gp,{$active:r==="Lower",onClick:()=>n("Lower"),children:"Lower"})]})}),tC=P.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  margin: 0 auto 10px auto; /* 중앙 정렬 강화를 위한 margin 추가 */
  padding: 6px 0;
  background: transparent;
  width: 100%; /* 전체 너비 활용 */
  text-align: center; /* 하위 요소 중앙 정렬 */

  /* 큰 화면 (height ≥ 1200px) - 4K, 큰 모니터 */
  @media (min-height: 1200px) {
    margin: 0 auto 16px auto; /* 중앙 정렬 유지 */
    padding: 8px 0;
    gap: 16px;
  }

  /* 중간 화면 (height: 900px-1199px) - QHD, 큰 노트북 */
  @media (min-height: 900px) and (max-height: 1199px) {
    margin: 0 auto 12px auto; /* 중앙 정렬 유지 */
    padding: 6px 0;
    gap: 14px;
  }

  /* 표준 화면 (height: 768px-899px) - FHD, 표준 노트북 */
  @media (min-height: 768px) and (max-height: 899px) {
    margin: 0 auto 8px auto; /* 중앙 정렬 유지 */
    padding: 4px 0;
    gap: 12px;
  }

  /* 작은 화면 (height < 768px) - HD, 작은 노트북, 태블릿 */
  @media (max-height: 767px) {
    margin: 0 auto 6px auto; /* 중앙 정렬 유지 */
    padding: 4px 0;
    gap: 10px;
  }

  /* 모바일 너비 추가 고려 */
  @media (max-width: 480px) {
    margin: 0 auto 8px auto; /* 중앙 정렬 유지 */
    padding: 4px 0;
    gap: 8px;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
  }
`,nC=P.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  width: 100%; /* 전체 너비 활용 */
  margin: 0 auto; /* 추가 중앙 정렬 */

  /* 큰 화면 (width ≥ 1200px) - 4K, 큰 모니터 */
  @media (min-width: 1200px) {
    gap: 14px;
  }

  /* 중간 화면 (width: 1024px-1199px) - QHD, 큰 노트북 */
  @media (min-width: 1024px) and (max-width: 1199px) {
    gap: 12px;
  }

  /* 표준 화면 (width: 768px-1023px) - FHD, 표준 노트북 */
  @media (min-width: 768px) and (max-width: 1023px) {
    gap: 8px;
  }

  /* 작은 화면 (width: 480px-767px) - 태블릿 */
  @media (min-width: 480px) and (max-width: 767px) {
    gap: 6px;
  }

  /* 모바일 (width < 480px) */
  @media (max-width: 479px) {
    gap: 4px;
    flex-wrap: wrap;
    justify-content: center;
  }
`,Gp=P.button`
  padding: 8px 20px;
  border: none;
  background: ${r=>r.$active?"#404650":"#2C3038"};
  color: ${r=>r.$active?"#FFFFFF":"#B0B8C1"};
  font-family: 'NanumSquare', sans-serif;
  font-weight: ${r=>r.$active?700:500};
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 1px solid ${r=>(r.$active,"#404650")};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  border-radius: 0;
  white-space: nowrap;
  min-width: 0;
  flex-shrink: 1;

  &:hover {
    background: ${r=>r.$active?"#5A6169":"#404650"};
    color: ${r=>(r.$active,"#FFFFFF")};
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  }

  &:active {
    transform: translateY(1px);
  }

  /* 큰 화면 (width ≥ 1200px) - 4K, 큰 모니터 */
  @media (min-width: 1200px) {
    padding: 10px 24px;
    font-size: 16px;
    letter-spacing: 0.5px;
  }

  /* 중간 화면 (width: 1024px-1199px) - QHD, 큰 노트북 */
  @media (min-width: 1024px) and (max-width: 1199px) {
    padding: 6px 16px;
    font-size: 12px;
    letter-spacing: 0.2px;
  }

  /* 표준 화면 (width: 768px-1023px) - FHD, 표준 노트북 */
  @media (min-width: 768px) and (max-width: 1023px) {
    padding: 8px 20px;
    font-size: 14px;
    letter-spacing: 0.2px;
  }

  /* 작은 화면 (width: 480px-767px) - 태블릿 */
  @media (min-width: 480px) and (max-width: 767px) {
    padding: 7px 18px;
    font-size: 13px;
    letter-spacing: 0.1px;
  }

  /* 모바일 (width < 480px) */
  @media (max-width: 479px) {
    padding: 6px 16px;
    font-size: 12px;
    letter-spacing: 0;
    min-width: 60px;
  }

  /* 매우 작은 모바일 (width < 360px) */
  @media (max-width: 359px) {
    padding: 5px 12px;
    font-size: 11px;
    min-width: 50px;
  }
`;function ka(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function S2(r,n){r.prototype=Object.create(n.prototype),r.prototype.constructor=r,r.__proto__=n}var Wn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Fo={duration:.5,overwrite:!1,delay:0},d0,on,wt,_r=1e8,pt=1/_r,wh=Math.PI*2,rC=wh/4,aC=0,w2=Math.sqrt,iC=Math.cos,oC=Math.sin,Jt=function(n){return typeof n=="string"},Dt=function(n){return typeof n=="function"},La=function(n){return typeof n=="number"},f0=function(n){return typeof n>"u"},aa=function(n){return typeof n=="object"},Ln=function(n){return n!==!1},p0=function(){return typeof window<"u"},su=function(n){return Dt(n)||Jt(n)},_2=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},mn=Array.isArray,lC=/random\([^)]+\)/g,sC=/,\s*/g,My=/(?:-?\.?\d|\.)+/gi,T2=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Io=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Xp=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,E2=/[+-]=-?[.\d]+/,cC=/[^,'"\[\]\s]+/gi,uC=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,kt,Qr,_h,h0,er={},ju={},C2,k2=function(n){return(ju=Qo(n,er))&&jn},g0=function(n,i){return console.warn("Invalid property",n,"set to",i,"Missing plugin? gsap.registerPlugin()")},Ts=function(n,i){return!i&&console.warn(n)},O2=function(n,i){return n&&(er[n]=i)&&ju&&(ju[n]=i)||er},Es=function(){return 0},dC={suppressEvents:!0,isStart:!0,kill:!1},Ru={suppressEvents:!0,kill:!1},fC={suppressEvents:!0},m0={},fi=[],Th={},R2,Vn={},Vp={},Ny=30,Au=[],x0="",y0=function(n){var i=n[0],o,l;if(aa(i)||Dt(i)||(n=[n]),!(o=(i._gsap||{}).harness)){for(l=Au.length;l--&&!Au[l].targetTest(i););o=Au[l]}for(l=n.length;l--;)n[l]&&(n[l]._gsap||(n[l]._gsap=new W2(n[l],o)))||n.splice(l,1);return n},Yi=function(n){return n._gsap||y0(Tr(n))[0]._gsap},A2=function(n,i,o){return(o=n[i])&&Dt(o)?n[i]():f0(o)&&n.getAttribute&&n.getAttribute(i)||o},zn=function(n,i){return(n=n.split(",")).forEach(i)||n},Ut=function(n){return Math.round(n*1e5)/1e5||0},Ct=function(n){return Math.round(n*1e7)/1e7||0},Po=function(n,i){var o=i.charAt(0),l=parseFloat(i.substr(2));return n=parseFloat(n),o==="+"?n+l:o==="-"?n-l:o==="*"?n*l:n/l},pC=function(n,i){for(var o=i.length,l=0;n.indexOf(i[l])<0&&++l<o;);return l<o},Uu=function(){var n=fi.length,i=fi.slice(0),o,l;for(Th={},fi.length=0,o=0;o<n;o++)l=i[o],l&&l._lazy&&(l.render(l._lazy[0],l._lazy[1],!0)._lazy=0)},b0=function(n){return!!(n._initted||n._startAt||n.add)},L2=function(n,i,o,l){fi.length&&!on&&Uu(),n.render(i,o,!!(on&&i<0&&b0(n))),fi.length&&!on&&Uu()},z2=function(n){var i=parseFloat(n);return(i||i===0)&&(n+"").match(cC).length<2?i:Jt(n)?n.trim():n},D2=function(n){return n},tr=function(n,i){for(var o in i)o in n||(n[o]=i[o]);return n},hC=function(n){return function(i,o){for(var l in o)l in i||l==="duration"&&n||l==="ease"||(i[l]=o[l])}},Qo=function(n,i){for(var o in i)n[o]=i[o];return n},jy=function r(n,i){for(var o in i)o!=="__proto__"&&o!=="constructor"&&o!=="prototype"&&(n[o]=aa(i[o])?r(n[o]||(n[o]={}),i[o]):i[o]);return n},Iu=function(n,i){var o={},l;for(l in n)l in i||(o[l]=n[l]);return o},ps=function(n){var i=n.parent||kt,o=n.keyframes?hC(mn(n.keyframes)):tr;if(Ln(n.inherit))for(;i;)o(n,i.vars.defaults),i=i.parent||i._dp;return n},gC=function(n,i){for(var o=n.length,l=o===i.length;l&&o--&&n[o]===i[o];);return o<0},M2=function(n,i,o,l,c){var u=n[l],f;if(c)for(f=i[c];u&&u[c]>f;)u=u._prev;return u?(i._next=u._next,u._next=i):(i._next=n[o],n[o]=i),i._next?i._next._prev=i:n[l]=i,i._prev=u,i.parent=i._dp=n,i},sd=function(n,i,o,l){o===void 0&&(o="_first"),l===void 0&&(l="_last");var c=i._prev,u=i._next;c?c._next=u:n[o]===i&&(n[o]=u),u?u._prev=c:n[l]===i&&(n[l]=c),i._next=i._prev=i.parent=null},hi=function(n,i){n.parent&&(!i||n.parent.autoRemoveChildren)&&n.parent.remove&&n.parent.remove(n),n._act=0},Gi=function(n,i){if(n&&(!i||i._end>n._dur||i._start<0))for(var o=n;o;)o._dirty=1,o=o.parent;return n},mC=function(n){for(var i=n.parent;i&&i.parent;)i._dirty=1,i.totalDuration(),i=i.parent;return n},Eh=function(n,i,o,l){return n._startAt&&(on?n._startAt.revert(Ru):n.vars.immediateRender&&!n.vars.autoRevert||n._startAt.render(i,!0,l))},xC=function r(n){return!n||n._ts&&r(n.parent)},Uy=function(n){return n._repeat?Zo(n._tTime,n=n.duration()+n._rDelay)*n:0},Zo=function(n,i){var o=Math.floor(n=Ct(n/i));return n&&o===n?o-1:o},Bu=function(n,i){return(n-i._start)*i._ts+(i._ts>=0?0:i._dirty?i.totalDuration():i._tDur)},cd=function(n){return n._end=Ct(n._start+(n._tDur/Math.abs(n._ts||n._rts||pt)||0))},ud=function(n,i){var o=n._dp;return o&&o.smoothChildTiming&&n._ts&&(n._start=Ct(o._time-(n._ts>0?i/n._ts:((n._dirty?n.totalDuration():n._tDur)-i)/-n._ts)),cd(n),o._dirty||Gi(o,n)),n},N2=function(n,i){var o;if((i._time||!i._dur&&i._initted||i._start<n._time&&(i._dur||!i.add))&&(o=Bu(n.rawTime(),i),(!i._dur||$s(0,i.totalDuration(),o)-i._tTime>pt)&&i.render(o,!0)),Gi(n,i)._dp&&n._initted&&n._time>=n._dur&&n._ts){if(n._dur<n.duration())for(o=n;o._dp;)o.rawTime()>=0&&o.totalTime(o._tTime),o=o._dp;n._zTime=-pt}},Wr=function(n,i,o,l){return i.parent&&hi(i),i._start=Ct((La(o)?o:o||n!==kt?vr(n,o,i):n._time)+i._delay),i._end=Ct(i._start+(i.totalDuration()/Math.abs(i.timeScale())||0)),M2(n,i,"_first","_last",n._sort?"_start":0),Ch(i)||(n._recent=i),l||N2(n,i),n._ts<0&&ud(n,n._tTime),n},j2=function(n,i){return(er.ScrollTrigger||g0("scrollTrigger",i))&&er.ScrollTrigger.create(i,n)},U2=function(n,i,o,l,c){if(S0(n,i,c),!n._initted)return 1;if(!o&&n._pt&&!on&&(n._dur&&n.vars.lazy!==!1||!n._dur&&n.vars.lazy)&&R2!==Fn.frame)return fi.push(n),n._lazy=[c,l],1},yC=function r(n){var i=n.parent;return i&&i._ts&&i._initted&&!i._lock&&(i.rawTime()<0||r(i))},Ch=function(n){var i=n.data;return i==="isFromStart"||i==="isStart"},bC=function(n,i,o,l){var c=n.ratio,u=i<0||!i&&(!n._start&&yC(n)&&!(!n._initted&&Ch(n))||(n._ts<0||n._dp._ts<0)&&!Ch(n))?0:1,f=n._rDelay,h=0,g,m,x;if(f&&n._repeat&&(h=$s(0,n._tDur,i),m=Zo(h,f),n._yoyo&&m&1&&(u=1-u),m!==Zo(n._tTime,f)&&(c=1-u,n.vars.repeatRefresh&&n._initted&&n.invalidate())),u!==c||on||l||n._zTime===pt||!i&&n._zTime){if(!n._initted&&U2(n,i,l,o,h))return;for(x=n._zTime,n._zTime=i||(o?pt:0),o||(o=i&&!x),n.ratio=u,n._from&&(u=1-u),n._time=0,n._tTime=h,g=n._pt;g;)g.r(u,g.d),g=g._next;i<0&&Eh(n,i,o,!0),n._onUpdate&&!o&&Zn(n,"onUpdate"),h&&n._repeat&&!o&&n.parent&&Zn(n,"onRepeat"),(i>=n._tDur||i<0)&&n.ratio===u&&(u&&hi(n,1),!o&&!on&&(Zn(n,u?"onComplete":"onReverseComplete",!0),n._prom&&n._prom()))}else n._zTime||(n._zTime=i)},vC=function(n,i,o){var l;if(o>i)for(l=n._first;l&&l._start<=o;){if(l.data==="isPause"&&l._start>i)return l;l=l._next}else for(l=n._last;l&&l._start>=o;){if(l.data==="isPause"&&l._start<i)return l;l=l._prev}},Ko=function(n,i,o,l){var c=n._repeat,u=Ct(i)||0,f=n._tTime/n._tDur;return f&&!l&&(n._time*=u/n._dur),n._dur=u,n._tDur=c?c<0?1e10:Ct(u*(c+1)+n._rDelay*c):u,f>0&&!l&&ud(n,n._tTime=n._tDur*f),n.parent&&cd(n),o||Gi(n.parent,n),n},Iy=function(n){return n instanceof Sn?Gi(n):Ko(n,n._dur)},SC={_start:0,endTime:Es,totalDuration:Es},vr=function r(n,i,o){var l=n.labels,c=n._recent||SC,u=n.duration()>=_r?c.endTime(!1):n._dur,f,h,g;return Jt(i)&&(isNaN(i)||i in l)?(h=i.charAt(0),g=i.substr(-1)==="%",f=i.indexOf("="),h==="<"||h===">"?(f>=0&&(i=i.replace(/=/,"")),(h==="<"?c._start:c.endTime(c._repeat>=0))+(parseFloat(i.substr(1))||0)*(g?(f<0?c:o).totalDuration()/100:1)):f<0?(i in l||(l[i]=u),l[i]):(h=parseFloat(i.charAt(f-1)+i.substr(f+1)),g&&o&&(h=h/100*(mn(o)?o[0]:o).totalDuration()),f>1?r(n,i.substr(0,f-1),o)+h:u+h)):i==null?u:+i},hs=function(n,i,o){var l=La(i[1]),c=(l?2:1)+(n<2?0:1),u=i[c],f,h;if(l&&(u.duration=i[1]),u.parent=o,n){for(f=u,h=o;h&&!("immediateRender"in f);)f=h.vars.defaults||{},h=Ln(h.vars.inherit)&&h.parent;u.immediateRender=Ln(f.immediateRender),n<2?u.runBackwards=1:u.startAt=i[c-1]}return new Yt(i[0],u,i[c+1])},xi=function(n,i){return n||n===0?i(n):i},$s=function(n,i,o){return o<n?n:o>i?i:o},gn=function(n,i){return!Jt(n)||!(i=uC.exec(n))?"":i[1]},wC=function(n,i,o){return xi(o,function(l){return $s(n,i,l)})},kh=[].slice,I2=function(n,i){return n&&aa(n)&&"length"in n&&(!i&&!n.length||n.length-1 in n&&aa(n[0]))&&!n.nodeType&&n!==Qr},_C=function(n,i,o){return o===void 0&&(o=[]),n.forEach(function(l){var c;return Jt(l)&&!i||I2(l,1)?(c=o).push.apply(c,Tr(l)):o.push(l)})||o},Tr=function(n,i,o){return wt&&!i&&wt.selector?wt.selector(n):Jt(n)&&!o&&(_h||!Jo())?kh.call((i||h0).querySelectorAll(n),0):mn(n)?_C(n,o):I2(n)?kh.call(n,0):n?[n]:[]},Oh=function(n){return n=Tr(n)[0]||Ts("Invalid scope")||{},function(i){var o=n.current||n.nativeElement||n;return Tr(i,o.querySelectorAll?o:o===n?Ts("Invalid scope")||h0.createElement("div"):n)}},B2=function(n){return n.sort(function(){return .5-Math.random()})},H2=function(n){if(Dt(n))return n;var i=aa(n)?n:{each:n},o=Xi(i.ease),l=i.from||0,c=parseFloat(i.base)||0,u={},f=l>0&&l<1,h=isNaN(l)||f,g=i.axis,m=l,x=l;return Jt(l)?m=x={center:.5,edges:.5,end:1}[l]||0:!f&&h&&(m=l[0],x=l[1]),function(S,T,w){var b=(w||i).length,v=u[b],D,j,A,z,R,M,k,I,$;if(!v){if($=i.grid==="auto"?0:(i.grid||[1,_r])[1],!$){for(k=-_r;k<(k=w[$++].getBoundingClientRect().left)&&$<b;);$<b&&$--}for(v=u[b]=[],D=h?Math.min($,b)*m-.5:l%$,j=$===_r?0:h?b*x/$-.5:l/$|0,k=0,I=_r,M=0;M<b;M++)A=M%$-D,z=j-(M/$|0),v[M]=R=g?Math.abs(g==="y"?z:A):w2(A*A+z*z),R>k&&(k=R),R<I&&(I=R);l==="random"&&B2(v),v.max=k-I,v.min=I,v.v=b=(parseFloat(i.amount)||parseFloat(i.each)*($>b?b-1:g?g==="y"?b/$:$:Math.max($,b/$))||0)*(l==="edges"?-1:1),v.b=b<0?c-b:c,v.u=gn(i.amount||i.each)||0,o=o&&b<0?Z2(o):o}return b=(v[S]-v.min)/v.max||0,Ct(v.b+(o?o(b):b)*v.v)+v.u}},Rh=function(n){var i=Math.pow(10,((n+"").split(".")[1]||"").length);return function(o){var l=Ct(Math.round(parseFloat(o)/n)*n*i);return(l-l%1)/i+(La(o)?0:gn(o))}},$2=function(n,i){var o=mn(n),l,c;return!o&&aa(n)&&(l=o=n.radius||_r,n.values?(n=Tr(n.values),(c=!La(n[0]))&&(l*=l)):n=Rh(n.increment)),xi(i,o?Dt(n)?function(u){return c=n(u),Math.abs(c-u)<=l?c:u}:function(u){for(var f=parseFloat(c?u.x:u),h=parseFloat(c?u.y:0),g=_r,m=0,x=n.length,S,T;x--;)c?(S=n[x].x-f,T=n[x].y-h,S=S*S+T*T):S=Math.abs(n[x]-f),S<g&&(g=S,m=x);return m=!l||g<=l?n[m]:u,c||m===u||La(u)?m:m+gn(u)}:Rh(n))},P2=function(n,i,o,l){return xi(mn(n)?!i:o===!0?!!(o=0):!l,function(){return mn(n)?n[~~(Math.random()*n.length)]:(o=o||1e-5)&&(l=o<1?Math.pow(10,(o+"").length-2):1)&&Math.floor(Math.round((n-o/2+Math.random()*(i-n+o*.99))/o)*o*l)/l})},TC=function(){for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return function(l){return i.reduce(function(c,u){return u(c)},l)}},EC=function(n,i){return function(o){return n(parseFloat(o))+(i||gn(o))}},CC=function(n,i,o){return Y2(n,i,0,1,o)},q2=function(n,i,o){return xi(o,function(l){return n[~~i(l)]})},kC=function r(n,i,o){var l=i-n;return mn(n)?q2(n,r(0,n.length),i):xi(o,function(c){return(l+(c-n)%l)%l+n})},OC=function r(n,i,o){var l=i-n,c=l*2;return mn(n)?q2(n,r(0,n.length-1),i):xi(o,function(u){return u=(c+(u-n)%c)%c||0,n+(u>l?c-u:u)})},Cs=function(n){return n.replace(lC,function(i){var o=i.indexOf("[")+1,l=i.substring(o||7,o?i.indexOf("]"):i.length-1).split(sC);return P2(o?l:+l[0],o?0:+l[1],+l[2]||1e-5)})},Y2=function(n,i,o,l,c){var u=i-n,f=l-o;return xi(c,function(h){return o+((h-n)/u*f||0)})},RC=function r(n,i,o,l){var c=isNaN(n+i)?0:function(T){return(1-T)*n+T*i};if(!c){var u=Jt(n),f={},h,g,m,x,S;if(o===!0&&(l=1)&&(o=null),u)n={p:n},i={p:i};else if(mn(n)&&!mn(i)){for(m=[],x=n.length,S=x-2,g=1;g<x;g++)m.push(r(n[g-1],n[g]));x--,c=function(w){w*=x;var b=Math.min(S,~~w);return m[b](w-b)},o=i}else l||(n=Qo(mn(n)?[]:{},n));if(!m){for(h in i)v0.call(f,n,h,"get",i[h]);c=function(w){return T0(w,f)||(u?n.p:n)}}}return xi(o,c)},By=function(n,i,o){var l=n.labels,c=_r,u,f,h;for(u in l)f=l[u]-i,f<0==!!o&&f&&c>(f=Math.abs(f))&&(h=u,c=f);return h},Zn=function(n,i,o){var l=n.vars,c=l[i],u=wt,f=n._ctx,h,g,m;if(c)return h=l[i+"Params"],g=l.callbackScope||n,o&&fi.length&&Uu(),f&&(wt=f),m=h?c.apply(g,h):c.call(g),wt=u,m},ds=function(n){return hi(n),n.scrollTrigger&&n.scrollTrigger.kill(!!on),n.progress()<1&&Zn(n,"onInterrupt"),n},Bo,G2=[],X2=function(n){if(n)if(n=!n.name&&n.default||n,p0()||n.headless){var i=n.name,o=Dt(n),l=i&&!o&&n.init?function(){this._props=[]}:n,c={init:Es,render:T0,add:v0,kill:GC,modifier:YC,rawVars:0},u={targetTest:0,get:0,getSetter:_0,aliases:{},register:0};if(Jo(),n!==l){if(Vn[i])return;tr(l,tr(Iu(n,c),u)),Qo(l.prototype,Qo(c,Iu(n,u))),Vn[l.prop=i]=l,n.targetTest&&(Au.push(l),m0[i]=1),i=(i==="css"?"CSS":i.charAt(0).toUpperCase()+i.substr(1))+"Plugin"}O2(i,l),n.register&&n.register(jn,l,Dn)}else G2.push(n)},ft=255,fs={aqua:[0,ft,ft],lime:[0,ft,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ft],navy:[0,0,128],white:[ft,ft,ft],olive:[128,128,0],yellow:[ft,ft,0],orange:[ft,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ft,0,0],pink:[ft,192,203],cyan:[0,ft,ft],transparent:[ft,ft,ft,0]},Fp=function(n,i,o){return n+=n<0?1:n>1?-1:0,(n*6<1?i+(o-i)*n*6:n<.5?o:n*3<2?i+(o-i)*(2/3-n)*6:i)*ft+.5|0},V2=function(n,i,o){var l=n?La(n)?[n>>16,n>>8&ft,n&ft]:0:fs.black,c,u,f,h,g,m,x,S,T,w;if(!l){if(n.substr(-1)===","&&(n=n.substr(0,n.length-1)),fs[n])l=fs[n];else if(n.charAt(0)==="#"){if(n.length<6&&(c=n.charAt(1),u=n.charAt(2),f=n.charAt(3),n="#"+c+c+u+u+f+f+(n.length===5?n.charAt(4)+n.charAt(4):"")),n.length===9)return l=parseInt(n.substr(1,6),16),[l>>16,l>>8&ft,l&ft,parseInt(n.substr(7),16)/255];n=parseInt(n.substr(1),16),l=[n>>16,n>>8&ft,n&ft]}else if(n.substr(0,3)==="hsl"){if(l=w=n.match(My),!i)h=+l[0]%360/360,g=+l[1]/100,m=+l[2]/100,u=m<=.5?m*(g+1):m+g-m*g,c=m*2-u,l.length>3&&(l[3]*=1),l[0]=Fp(h+1/3,c,u),l[1]=Fp(h,c,u),l[2]=Fp(h-1/3,c,u);else if(~n.indexOf("="))return l=n.match(T2),o&&l.length<4&&(l[3]=1),l}else l=n.match(My)||fs.transparent;l=l.map(Number)}return i&&!w&&(c=l[0]/ft,u=l[1]/ft,f=l[2]/ft,x=Math.max(c,u,f),S=Math.min(c,u,f),m=(x+S)/2,x===S?h=g=0:(T=x-S,g=m>.5?T/(2-x-S):T/(x+S),h=x===c?(u-f)/T+(u<f?6:0):x===u?(f-c)/T+2:(c-u)/T+4,h*=60),l[0]=~~(h+.5),l[1]=~~(g*100+.5),l[2]=~~(m*100+.5)),o&&l.length<4&&(l[3]=1),l},F2=function(n){var i=[],o=[],l=-1;return n.split(pi).forEach(function(c){var u=c.match(Io)||[];i.push.apply(i,u),o.push(l+=u.length+1)}),i.c=o,i},Hy=function(n,i,o){var l="",c=(n+l).match(pi),u=i?"hsla(":"rgba(",f=0,h,g,m,x;if(!c)return n;if(c=c.map(function(S){return(S=V2(S,i,1))&&u+(i?S[0]+","+S[1]+"%,"+S[2]+"%,"+S[3]:S.join(","))+")"}),o&&(m=F2(n),h=o.c,h.join(l)!==m.c.join(l)))for(g=n.replace(pi,"1").split(Io),x=g.length-1;f<x;f++)l+=g[f]+(~h.indexOf(f)?c.shift()||u+"0,0,0,0)":(m.length?m:c.length?c:o).shift());if(!g)for(g=n.split(pi),x=g.length-1;f<x;f++)l+=g[f]+c[f];return l+g[x]},pi=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",n;for(n in fs)r+="|"+n+"\\b";return new RegExp(r+")","gi")})(),AC=/hsl[a]?\(/,Q2=function(n){var i=n.join(" "),o;if(pi.lastIndex=0,pi.test(i))return o=AC.test(i),n[1]=Hy(n[1],o),n[0]=Hy(n[0],o,F2(n[1])),!0},ks,Fn=(function(){var r=Date.now,n=500,i=33,o=r(),l=o,c=1e3/240,u=c,f=[],h,g,m,x,S,T,w=function b(v){var D=r()-l,j=v===!0,A,z,R,M;if((D>n||D<0)&&(o+=D-i),l+=D,R=l-o,A=R-u,(A>0||j)&&(M=++x.frame,S=R-x.time*1e3,x.time=R=R/1e3,u+=A+(A>=c?4:c-A),z=1),j||(h=g(b)),z)for(T=0;T<f.length;T++)f[T](R,S,M,v)};return x={time:0,frame:0,tick:function(){w(!0)},deltaRatio:function(v){return S/(1e3/(v||60))},wake:function(){C2&&(!_h&&p0()&&(Qr=_h=window,h0=Qr.document||{},er.gsap=jn,(Qr.gsapVersions||(Qr.gsapVersions=[])).push(jn.version),k2(ju||Qr.GreenSockGlobals||!Qr.gsap&&Qr||{}),G2.forEach(X2)),m=typeof requestAnimationFrame<"u"&&requestAnimationFrame,h&&x.sleep(),g=m||function(v){return setTimeout(v,u-x.time*1e3+1|0)},ks=1,w(2))},sleep:function(){(m?cancelAnimationFrame:clearTimeout)(h),ks=0,g=Es},lagSmoothing:function(v,D){n=v||1/0,i=Math.min(D||33,n)},fps:function(v){c=1e3/(v||240),u=x.time*1e3+c},add:function(v,D,j){var A=D?function(z,R,M,k){v(z,R,M,k),x.remove(A)}:v;return x.remove(v),f[j?"unshift":"push"](A),Jo(),A},remove:function(v,D){~(D=f.indexOf(v))&&f.splice(D,1)&&T>=D&&T--},_listeners:f},x})(),Jo=function(){return!ks&&Fn.wake()},Ve={},LC=/^[\d.\-M][\d.\-,\s]/,zC=/["']/g,DC=function(n){for(var i={},o=n.substr(1,n.length-3).split(":"),l=o[0],c=1,u=o.length,f,h,g;c<u;c++)h=o[c],f=c!==u-1?h.lastIndexOf(","):h.length,g=h.substr(0,f),i[l]=isNaN(g)?g.replace(zC,"").trim():+g,l=h.substr(f+1).trim();return i},MC=function(n){var i=n.indexOf("(")+1,o=n.indexOf(")"),l=n.indexOf("(",i);return n.substring(i,~l&&l<o?n.indexOf(")",o+1):o)},NC=function(n){var i=(n+"").split("("),o=Ve[i[0]];return o&&i.length>1&&o.config?o.config.apply(null,~n.indexOf("{")?[DC(i[1])]:MC(n).split(",").map(z2)):Ve._CE&&LC.test(n)?Ve._CE("",n):o},Z2=function(n){return function(i){return 1-n(1-i)}},K2=function r(n,i){for(var o=n._first,l;o;)o instanceof Sn?r(o,i):o.vars.yoyoEase&&(!o._yoyo||!o._repeat)&&o._yoyo!==i&&(o.timeline?r(o.timeline,i):(l=o._ease,o._ease=o._yEase,o._yEase=l,o._yoyo=i)),o=o._next},Xi=function(n,i){return n&&(Dt(n)?n:Ve[n]||NC(n))||i},Zi=function(n,i,o,l){o===void 0&&(o=function(h){return 1-i(1-h)}),l===void 0&&(l=function(h){return h<.5?i(h*2)/2:1-i((1-h)*2)/2});var c={easeIn:i,easeOut:o,easeInOut:l},u;return zn(n,function(f){Ve[f]=er[f]=c,Ve[u=f.toLowerCase()]=o;for(var h in c)Ve[u+(h==="easeIn"?".in":h==="easeOut"?".out":".inOut")]=Ve[f+"."+h]=c[h]}),c},J2=function(n){return function(i){return i<.5?(1-n(1-i*2))/2:.5+n((i-.5)*2)/2}},Qp=function r(n,i,o){var l=i>=1?i:1,c=(o||(n?.3:.45))/(i<1?i:1),u=c/wh*(Math.asin(1/l)||0),f=function(m){return m===1?1:l*Math.pow(2,-10*m)*oC((m-u)*c)+1},h=n==="out"?f:n==="in"?function(g){return 1-f(1-g)}:J2(f);return c=wh/c,h.config=function(g,m){return r(n,g,m)},h},Zp=function r(n,i){i===void 0&&(i=1.70158);var o=function(u){return u?--u*u*((i+1)*u+i)+1:0},l=n==="out"?o:n==="in"?function(c){return 1-o(1-c)}:J2(o);return l.config=function(c){return r(n,c)},l};zn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,n){var i=n<5?n+1:n;Zi(r+",Power"+(i-1),n?function(o){return Math.pow(o,i)}:function(o){return o},function(o){return 1-Math.pow(1-o,i)},function(o){return o<.5?Math.pow(o*2,i)/2:1-Math.pow((1-o)*2,i)/2})});Ve.Linear.easeNone=Ve.none=Ve.Linear.easeIn;Zi("Elastic",Qp("in"),Qp("out"),Qp());(function(r,n){var i=1/n,o=2*i,l=2.5*i,c=function(f){return f<i?r*f*f:f<o?r*Math.pow(f-1.5/n,2)+.75:f<l?r*(f-=2.25/n)*f+.9375:r*Math.pow(f-2.625/n,2)+.984375};Zi("Bounce",function(u){return 1-c(1-u)},c)})(7.5625,2.75);Zi("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});Zi("Circ",function(r){return-(w2(1-r*r)-1)});Zi("Sine",function(r){return r===1?1:-iC(r*rC)+1});Zi("Back",Zp("in"),Zp("out"),Zp());Ve.SteppedEase=Ve.steps=er.SteppedEase={config:function(n,i){n===void 0&&(n=1);var o=1/n,l=n+(i?0:1),c=i?1:0,u=1-pt;return function(f){return((l*$s(0,u,f)|0)+c)*o}}};Fo.ease=Ve["quad.out"];zn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return x0+=r+","+r+"Params,"});var W2=function(n,i){this.id=aC++,n._gsap=this,this.target=n,this.harness=i,this.get=i?i.get:A2,this.set=i?i.getSetter:_0},Os=(function(){function r(i){this.vars=i,this._delay=+i.delay||0,(this._repeat=i.repeat===1/0?-2:i.repeat||0)&&(this._rDelay=i.repeatDelay||0,this._yoyo=!!i.yoyo||!!i.yoyoEase),this._ts=1,Ko(this,+i.duration,1,1),this.data=i.data,wt&&(this._ctx=wt,wt.data.push(this)),ks||Fn.wake()}var n=r.prototype;return n.delay=function(o){return o||o===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+o-this._delay),this._delay=o,this):this._delay},n.duration=function(o){return arguments.length?this.totalDuration(this._repeat>0?o+(o+this._rDelay)*this._repeat:o):this.totalDuration()&&this._dur},n.totalDuration=function(o){return arguments.length?(this._dirty=0,Ko(this,this._repeat<0?o:(o-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},n.totalTime=function(o,l){if(Jo(),!arguments.length)return this._tTime;var c=this._dp;if(c&&c.smoothChildTiming&&this._ts){for(ud(this,o),!c._dp||c.parent||N2(c,this);c&&c.parent;)c.parent._time!==c._start+(c._ts>=0?c._tTime/c._ts:(c.totalDuration()-c._tTime)/-c._ts)&&c.totalTime(c._tTime,!0),c=c.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&o<this._tDur||this._ts<0&&o>0||!this._tDur&&!o)&&Wr(this._dp,this,this._start-this._delay)}return(this._tTime!==o||!this._dur&&!l||this._initted&&Math.abs(this._zTime)===pt||!this._initted&&this._dur&&o||!o&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=o),L2(this,o,l)),this},n.time=function(o,l){return arguments.length?this.totalTime(Math.min(this.totalDuration(),o+Uy(this))%(this._dur+this._rDelay)||(o?this._dur:0),l):this._time},n.totalProgress=function(o,l){return arguments.length?this.totalTime(this.totalDuration()*o,l):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},n.progress=function(o,l){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-o:o)+Uy(this),l):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},n.iteration=function(o,l){var c=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(o-1)*c,l):this._repeat?Zo(this._tTime,c)+1:1},n.timeScale=function(o,l){if(!arguments.length)return this._rts===-pt?0:this._rts;if(this._rts===o)return this;var c=this.parent&&this._ts?Bu(this.parent._time,this):this._tTime;return this._rts=+o||0,this._ts=this._ps||o===-pt?0:this._rts,this.totalTime($s(-Math.abs(this._delay),this.totalDuration(),c),l!==!1),cd(this),mC(this)},n.paused=function(o){return arguments.length?(this._ps!==o&&(this._ps=o,o?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Jo(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==pt&&(this._tTime-=pt)))),this):this._ps},n.startTime=function(o){if(arguments.length){this._start=Ct(o);var l=this.parent||this._dp;return l&&(l._sort||!this.parent)&&Wr(l,this,this._start-this._delay),this}return this._start},n.endTime=function(o){return this._start+(Ln(o)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},n.rawTime=function(o){var l=this.parent||this._dp;return l?o&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Bu(l.rawTime(o),this):this._tTime:this._tTime},n.revert=function(o){o===void 0&&(o=fC);var l=on;return on=o,b0(this)&&(this.timeline&&this.timeline.revert(o),this.totalTime(-.01,o.suppressEvents)),this.data!=="nested"&&o.kill!==!1&&this.kill(),on=l,this},n.globalTime=function(o){for(var l=this,c=arguments.length?o:l.rawTime();l;)c=l._start+c/(Math.abs(l._ts)||1),l=l._dp;return!this.parent&&this._sat?this._sat.globalTime(o):c},n.repeat=function(o){return arguments.length?(this._repeat=o===1/0?-2:o,Iy(this)):this._repeat===-2?1/0:this._repeat},n.repeatDelay=function(o){if(arguments.length){var l=this._time;return this._rDelay=o,Iy(this),l?this.time(l):this}return this._rDelay},n.yoyo=function(o){return arguments.length?(this._yoyo=o,this):this._yoyo},n.seek=function(o,l){return this.totalTime(vr(this,o),Ln(l))},n.restart=function(o,l){return this.play().totalTime(o?-this._delay:0,Ln(l)),this._dur||(this._zTime=-pt),this},n.play=function(o,l){return o!=null&&this.seek(o,l),this.reversed(!1).paused(!1)},n.reverse=function(o,l){return o!=null&&this.seek(o||this.totalDuration(),l),this.reversed(!0).paused(!1)},n.pause=function(o,l){return o!=null&&this.seek(o,l),this.paused(!0)},n.resume=function(){return this.paused(!1)},n.reversed=function(o){return arguments.length?(!!o!==this.reversed()&&this.timeScale(-this._rts||(o?-pt:0)),this):this._rts<0},n.invalidate=function(){return this._initted=this._act=0,this._zTime=-pt,this},n.isActive=function(){var o=this.parent||this._dp,l=this._start,c;return!!(!o||this._ts&&this._initted&&o.isActive()&&(c=o.rawTime(!0))>=l&&c<this.endTime(!0)-pt)},n.eventCallback=function(o,l,c){var u=this.vars;return arguments.length>1?(l?(u[o]=l,c&&(u[o+"Params"]=c),o==="onUpdate"&&(this._onUpdate=l)):delete u[o],this):u[o]},n.then=function(o){var l=this,c=l._prom;return new Promise(function(u){var f=Dt(o)?o:D2,h=function(){var m=l.then;l.then=null,c&&c(),Dt(f)&&(f=f(l))&&(f.then||f===l)&&(l.then=m),u(f),l.then=m};l._initted&&l.totalProgress()===1&&l._ts>=0||!l._tTime&&l._ts<0?h():l._prom=h})},n.kill=function(){ds(this)},r})();tr(Os.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-pt,_prom:0,_ps:!1,_rts:1});var Sn=(function(r){S2(n,r);function n(o,l){var c;return o===void 0&&(o={}),c=r.call(this,o)||this,c.labels={},c.smoothChildTiming=!!o.smoothChildTiming,c.autoRemoveChildren=!!o.autoRemoveChildren,c._sort=Ln(o.sortChildren),kt&&Wr(o.parent||kt,ka(c),l),o.reversed&&c.reverse(),o.paused&&c.paused(!0),o.scrollTrigger&&j2(ka(c),o.scrollTrigger),c}var i=n.prototype;return i.to=function(l,c,u){return hs(0,arguments,this),this},i.from=function(l,c,u){return hs(1,arguments,this),this},i.fromTo=function(l,c,u,f){return hs(2,arguments,this),this},i.set=function(l,c,u){return c.duration=0,c.parent=this,ps(c).repeatDelay||(c.repeat=0),c.immediateRender=!!c.immediateRender,new Yt(l,c,vr(this,u),1),this},i.call=function(l,c,u){return Wr(this,Yt.delayedCall(0,l,c),u)},i.staggerTo=function(l,c,u,f,h,g,m){return u.duration=c,u.stagger=u.stagger||f,u.onComplete=g,u.onCompleteParams=m,u.parent=this,new Yt(l,u,vr(this,h)),this},i.staggerFrom=function(l,c,u,f,h,g,m){return u.runBackwards=1,ps(u).immediateRender=Ln(u.immediateRender),this.staggerTo(l,c,u,f,h,g,m)},i.staggerFromTo=function(l,c,u,f,h,g,m,x){return f.startAt=u,ps(f).immediateRender=Ln(f.immediateRender),this.staggerTo(l,c,f,h,g,m,x)},i.render=function(l,c,u){var f=this._time,h=this._dirty?this.totalDuration():this._tDur,g=this._dur,m=l<=0?0:Ct(l),x=this._zTime<0!=l<0&&(this._initted||!g),S,T,w,b,v,D,j,A,z,R,M,k;if(this!==kt&&m>h&&l>=0&&(m=h),m!==this._tTime||u||x){if(f!==this._time&&g&&(m+=this._time-f,l+=this._time-f),S=m,z=this._start,A=this._ts,D=!A,x&&(g||(f=this._zTime),(l||!c)&&(this._zTime=l)),this._repeat){if(M=this._yoyo,v=g+this._rDelay,this._repeat<-1&&l<0)return this.totalTime(v*100+l,c,u);if(S=Ct(m%v),m===h?(b=this._repeat,S=g):(R=Ct(m/v),b=~~R,b&&b===R&&(S=g,b--),S>g&&(S=g)),R=Zo(this._tTime,v),!f&&this._tTime&&R!==b&&this._tTime-R*v-this._dur<=0&&(R=b),M&&b&1&&(S=g-S,k=1),b!==R&&!this._lock){var I=M&&R&1,$=I===(M&&b&1);if(b<R&&(I=!I),f=I?0:m%g?g:m,this._lock=1,this.render(f||(k?0:Ct(b*v)),c,!g)._lock=0,this._tTime=m,!c&&this.parent&&Zn(this,"onRepeat"),this.vars.repeatRefresh&&!k&&(this.invalidate()._lock=1,R=b),f&&f!==this._time||D!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(g=this._dur,h=this._tDur,$&&(this._lock=2,f=I?g:-1e-4,this.render(f,!0),this.vars.repeatRefresh&&!k&&this.invalidate()),this._lock=0,!this._ts&&!D)return this;K2(this,k)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(j=vC(this,Ct(f),Ct(S)),j&&(m-=S-(S=j._start))),this._tTime=m,this._time=S,this._act=!A,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=l,f=0),!f&&m&&g&&!c&&!R&&(Zn(this,"onStart"),this._tTime!==m))return this;if(S>=f&&l>=0)for(T=this._first;T;){if(w=T._next,(T._act||S>=T._start)&&T._ts&&j!==T){if(T.parent!==this)return this.render(l,c,u);if(T.render(T._ts>0?(S-T._start)*T._ts:(T._dirty?T.totalDuration():T._tDur)+(S-T._start)*T._ts,c,u),S!==this._time||!this._ts&&!D){j=0,w&&(m+=this._zTime=-pt);break}}T=w}else{T=this._last;for(var te=l<0?l:S;T;){if(w=T._prev,(T._act||te<=T._end)&&T._ts&&j!==T){if(T.parent!==this)return this.render(l,c,u);if(T.render(T._ts>0?(te-T._start)*T._ts:(T._dirty?T.totalDuration():T._tDur)+(te-T._start)*T._ts,c,u||on&&b0(T)),S!==this._time||!this._ts&&!D){j=0,w&&(m+=this._zTime=te?-pt:pt);break}}T=w}}if(j&&!c&&(this.pause(),j.render(S>=f?0:-pt)._zTime=S>=f?1:-1,this._ts))return this._start=z,cd(this),this.render(l,c,u);this._onUpdate&&!c&&Zn(this,"onUpdate",!0),(m===h&&this._tTime>=this.totalDuration()||!m&&f)&&(z===this._start||Math.abs(A)!==Math.abs(this._ts))&&(this._lock||((l||!g)&&(m===h&&this._ts>0||!m&&this._ts<0)&&hi(this,1),!c&&!(l<0&&!f)&&(m||f||!h)&&(Zn(this,m===h&&l>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(m<h&&this.timeScale()>0)&&this._prom())))}return this},i.add=function(l,c){var u=this;if(La(c)||(c=vr(this,c,l)),!(l instanceof Os)){if(mn(l))return l.forEach(function(f){return u.add(f,c)}),this;if(Jt(l))return this.addLabel(l,c);if(Dt(l))l=Yt.delayedCall(0,l);else return this}return this!==l?Wr(this,l,c):this},i.getChildren=function(l,c,u,f){l===void 0&&(l=!0),c===void 0&&(c=!0),u===void 0&&(u=!0),f===void 0&&(f=-_r);for(var h=[],g=this._first;g;)g._start>=f&&(g instanceof Yt?c&&h.push(g):(u&&h.push(g),l&&h.push.apply(h,g.getChildren(!0,c,u)))),g=g._next;return h},i.getById=function(l){for(var c=this.getChildren(1,1,1),u=c.length;u--;)if(c[u].vars.id===l)return c[u]},i.remove=function(l){return Jt(l)?this.removeLabel(l):Dt(l)?this.killTweensOf(l):(l.parent===this&&sd(this,l),l===this._recent&&(this._recent=this._last),Gi(this))},i.totalTime=function(l,c){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ct(Fn.time-(this._ts>0?l/this._ts:(this.totalDuration()-l)/-this._ts))),r.prototype.totalTime.call(this,l,c),this._forcing=0,this):this._tTime},i.addLabel=function(l,c){return this.labels[l]=vr(this,c),this},i.removeLabel=function(l){return delete this.labels[l],this},i.addPause=function(l,c,u){var f=Yt.delayedCall(0,c||Es,u);return f.data="isPause",this._hasPause=1,Wr(this,f,vr(this,l))},i.removePause=function(l){var c=this._first;for(l=vr(this,l);c;)c._start===l&&c.data==="isPause"&&hi(c),c=c._next},i.killTweensOf=function(l,c,u){for(var f=this.getTweensOf(l,u),h=f.length;h--;)li!==f[h]&&f[h].kill(l,c);return this},i.getTweensOf=function(l,c){for(var u=[],f=Tr(l),h=this._first,g=La(c),m;h;)h instanceof Yt?pC(h._targets,f)&&(g?(!li||h._initted&&h._ts)&&h.globalTime(0)<=c&&h.globalTime(h.totalDuration())>c:!c||h.isActive())&&u.push(h):(m=h.getTweensOf(f,c)).length&&u.push.apply(u,m),h=h._next;return u},i.tweenTo=function(l,c){c=c||{};var u=this,f=vr(u,l),h=c,g=h.startAt,m=h.onStart,x=h.onStartParams,S=h.immediateRender,T,w=Yt.to(u,tr({ease:c.ease||"none",lazy:!1,immediateRender:!1,time:f,overwrite:"auto",duration:c.duration||Math.abs((f-(g&&"time"in g?g.time:u._time))/u.timeScale())||pt,onStart:function(){if(u.pause(),!T){var v=c.duration||Math.abs((f-(g&&"time"in g?g.time:u._time))/u.timeScale());w._dur!==v&&Ko(w,v,0,1).render(w._time,!0,!0),T=1}m&&m.apply(w,x||[])}},c));return S?w.render(0):w},i.tweenFromTo=function(l,c,u){return this.tweenTo(c,tr({startAt:{time:vr(this,l)}},u))},i.recent=function(){return this._recent},i.nextLabel=function(l){return l===void 0&&(l=this._time),By(this,vr(this,l))},i.previousLabel=function(l){return l===void 0&&(l=this._time),By(this,vr(this,l),1)},i.currentLabel=function(l){return arguments.length?this.seek(l,!0):this.previousLabel(this._time+pt)},i.shiftChildren=function(l,c,u){u===void 0&&(u=0);var f=this._first,h=this.labels,g;for(l=Ct(l);f;)f._start>=u&&(f._start+=l,f._end+=l),f=f._next;if(c)for(g in h)h[g]>=u&&(h[g]+=l);return Gi(this)},i.invalidate=function(l){var c=this._first;for(this._lock=0;c;)c.invalidate(l),c=c._next;return r.prototype.invalidate.call(this,l)},i.clear=function(l){l===void 0&&(l=!0);for(var c=this._first,u;c;)u=c._next,this.remove(c),c=u;return this._dp&&(this._time=this._tTime=this._pTime=0),l&&(this.labels={}),Gi(this)},i.totalDuration=function(l){var c=0,u=this,f=u._last,h=_r,g,m,x;if(arguments.length)return u.timeScale((u._repeat<0?u.duration():u.totalDuration())/(u.reversed()?-l:l));if(u._dirty){for(x=u.parent;f;)g=f._prev,f._dirty&&f.totalDuration(),m=f._start,m>h&&u._sort&&f._ts&&!u._lock?(u._lock=1,Wr(u,f,m-f._delay,1)._lock=0):h=m,m<0&&f._ts&&(c-=m,(!x&&!u._dp||x&&x.smoothChildTiming)&&(u._start+=Ct(m/u._ts),u._time-=m,u._tTime-=m),u.shiftChildren(-m,!1,-1/0),h=0),f._end>c&&f._ts&&(c=f._end),f=g;Ko(u,u===kt&&u._time>c?u._time:c,1,1),u._dirty=0}return u._tDur},n.updateRoot=function(l){if(kt._ts&&(L2(kt,Bu(l,kt)),R2=Fn.frame),Fn.frame>=Ny){Ny+=Wn.autoSleep||120;var c=kt._first;if((!c||!c._ts)&&Wn.autoSleep&&Fn._listeners.length<2){for(;c&&!c._ts;)c=c._next;c||Fn.sleep()}}},n})(Os);tr(Sn.prototype,{_lock:0,_hasPause:0,_forcing:0});var jC=function(n,i,o,l,c,u,f){var h=new Dn(this._pt,n,i,0,1,iS,null,c),g=0,m=0,x,S,T,w,b,v,D,j;for(h.b=o,h.e=l,o+="",l+="",(D=~l.indexOf("random("))&&(l=Cs(l)),u&&(j=[o,l],u(j,n,i),o=j[0],l=j[1]),S=o.match(Xp)||[];x=Xp.exec(l);)w=x[0],b=l.substring(g,x.index),T?T=(T+1)%5:b.substr(-5)==="rgba("&&(T=1),w!==S[m++]&&(v=parseFloat(S[m-1])||0,h._pt={_next:h._pt,p:b||m===1?b:",",s:v,c:w.charAt(1)==="="?Po(v,w)-v:parseFloat(w)-v,m:T&&T<4?Math.round:0},g=Xp.lastIndex);return h.c=g<l.length?l.substring(g,l.length):"",h.fp=f,(E2.test(l)||D)&&(h.e=0),this._pt=h,h},v0=function(n,i,o,l,c,u,f,h,g,m){Dt(l)&&(l=l(c||0,n,u));var x=n[i],S=o!=="get"?o:Dt(x)?g?n[i.indexOf("set")||!Dt(n["get"+i.substr(3)])?i:"get"+i.substr(3)](g):n[i]():x,T=Dt(x)?g?$C:rS:w0,w;if(Jt(l)&&(~l.indexOf("random(")&&(l=Cs(l)),l.charAt(1)==="="&&(w=Po(S,l)+(gn(S)||0),(w||w===0)&&(l=w))),!m||S!==l||Ah)return!isNaN(S*l)&&l!==""?(w=new Dn(this._pt,n,i,+S||0,l-(S||0),typeof x=="boolean"?qC:aS,0,T),g&&(w.fp=g),f&&w.modifier(f,this,n),this._pt=w):(!x&&!(i in n)&&g0(i,l),jC.call(this,n,i,S,l,T,h||Wn.stringFilter,g))},UC=function(n,i,o,l,c){if(Dt(n)&&(n=gs(n,c,i,o,l)),!aa(n)||n.style&&n.nodeType||mn(n)||_2(n))return Jt(n)?gs(n,c,i,o,l):n;var u={},f;for(f in n)u[f]=gs(n[f],c,i,o,l);return u},eS=function(n,i,o,l,c,u){var f,h,g,m;if(Vn[n]&&(f=new Vn[n]).init(c,f.rawVars?i[n]:UC(i[n],l,c,u,o),o,l,u)!==!1&&(o._pt=h=new Dn(o._pt,c,n,0,1,f.render,f,0,f.priority),o!==Bo))for(g=o._ptLookup[o._targets.indexOf(c)],m=f._props.length;m--;)g[f._props[m]]=h;return f},li,Ah,S0=function r(n,i,o){var l=n.vars,c=l.ease,u=l.startAt,f=l.immediateRender,h=l.lazy,g=l.onUpdate,m=l.runBackwards,x=l.yoyoEase,S=l.keyframes,T=l.autoRevert,w=n._dur,b=n._startAt,v=n._targets,D=n.parent,j=D&&D.data==="nested"?D.vars.targets:v,A=n._overwrite==="auto"&&!d0,z=n.timeline,R,M,k,I,$,te,re,le,ye,Se,we,U,H;if(z&&(!S||!c)&&(c="none"),n._ease=Xi(c,Fo.ease),n._yEase=x?Z2(Xi(x===!0?c:x,Fo.ease)):0,x&&n._yoyo&&!n._repeat&&(x=n._yEase,n._yEase=n._ease,n._ease=x),n._from=!z&&!!l.runBackwards,!z||S&&!l.stagger){if(le=v[0]?Yi(v[0]).harness:0,U=le&&l[le.prop],R=Iu(l,m0),b&&(b._zTime<0&&b.progress(1),i<0&&m&&f&&!T?b.render(-1,!0):b.revert(m&&w?Ru:dC),b._lazy=0),u){if(hi(n._startAt=Yt.set(v,tr({data:"isStart",overwrite:!1,parent:D,immediateRender:!0,lazy:!b&&Ln(h),startAt:null,delay:0,onUpdate:g&&function(){return Zn(n,"onUpdate")},stagger:0},u))),n._startAt._dp=0,n._startAt._sat=n,i<0&&(on||!f&&!T)&&n._startAt.revert(Ru),f&&w&&i<=0&&o<=0){i&&(n._zTime=i);return}}else if(m&&w&&!b){if(i&&(f=!1),k=tr({overwrite:!1,data:"isFromStart",lazy:f&&!b&&Ln(h),immediateRender:f,stagger:0,parent:D},R),U&&(k[le.prop]=U),hi(n._startAt=Yt.set(v,k)),n._startAt._dp=0,n._startAt._sat=n,i<0&&(on?n._startAt.revert(Ru):n._startAt.render(-1,!0)),n._zTime=i,!f)r(n._startAt,pt,pt);else if(!i)return}for(n._pt=n._ptCache=0,h=w&&Ln(h)||h&&!w,M=0;M<v.length;M++){if($=v[M],re=$._gsap||y0(v)[M]._gsap,n._ptLookup[M]=Se={},Th[re.id]&&fi.length&&Uu(),we=j===v?M:j.indexOf($),le&&(ye=new le).init($,U||R,n,we,j)!==!1&&(n._pt=I=new Dn(n._pt,$,ye.name,0,1,ye.render,ye,0,ye.priority),ye._props.forEach(function(X){Se[X]=I}),ye.priority&&(te=1)),!le||U)for(k in R)Vn[k]&&(ye=eS(k,R,n,we,$,j))?ye.priority&&(te=1):Se[k]=I=v0.call(n,$,k,"get",R[k],we,j,0,l.stringFilter);n._op&&n._op[M]&&n.kill($,n._op[M]),A&&n._pt&&(li=n,kt.killTweensOf($,Se,n.globalTime(i)),H=!n.parent,li=0),n._pt&&h&&(Th[re.id]=1)}te&&oS(n),n._onInit&&n._onInit(n)}n._onUpdate=g,n._initted=(!n._op||n._pt)&&!H,S&&i<=0&&z.render(_r,!0,!0)},IC=function(n,i,o,l,c,u,f,h){var g=(n._pt&&n._ptCache||(n._ptCache={}))[i],m,x,S,T;if(!g)for(g=n._ptCache[i]=[],S=n._ptLookup,T=n._targets.length;T--;){if(m=S[T][i],m&&m.d&&m.d._pt)for(m=m.d._pt;m&&m.p!==i&&m.fp!==i;)m=m._next;if(!m)return Ah=1,n.vars[i]="+=0",S0(n,f),Ah=0,h?Ts(i+" not eligible for reset"):1;g.push(m)}for(T=g.length;T--;)x=g[T],m=x._pt||x,m.s=(l||l===0)&&!c?l:m.s+(l||0)+u*m.c,m.c=o-m.s,x.e&&(x.e=Ut(o)+gn(x.e)),x.b&&(x.b=m.s+gn(x.b))},BC=function(n,i){var o=n[0]?Yi(n[0]).harness:0,l=o&&o.aliases,c,u,f,h;if(!l)return i;c=Qo({},i);for(u in l)if(u in c)for(h=l[u].split(","),f=h.length;f--;)c[h[f]]=c[u];return c},HC=function(n,i,o,l){var c=i.ease||l||"power1.inOut",u,f;if(mn(i))f=o[n]||(o[n]=[]),i.forEach(function(h,g){return f.push({t:g/(i.length-1)*100,v:h,e:c})});else for(u in i)f=o[u]||(o[u]=[]),u==="ease"||f.push({t:parseFloat(n),v:i[u],e:c})},gs=function(n,i,o,l,c){return Dt(n)?n.call(i,o,l,c):Jt(n)&&~n.indexOf("random(")?Cs(n):n},tS=x0+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",nS={};zn(tS+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return nS[r]=1});var Yt=(function(r){S2(n,r);function n(o,l,c,u){var f;typeof l=="number"&&(c.duration=l,l=c,c=null),f=r.call(this,u?l:ps(l))||this;var h=f.vars,g=h.duration,m=h.delay,x=h.immediateRender,S=h.stagger,T=h.overwrite,w=h.keyframes,b=h.defaults,v=h.scrollTrigger,D=h.yoyoEase,j=l.parent||kt,A=(mn(o)||_2(o)?La(o[0]):"length"in l)?[o]:Tr(o),z,R,M,k,I,$,te,re;if(f._targets=A.length?y0(A):Ts("GSAP target "+o+" not found. https://gsap.com",!Wn.nullTargetWarn)||[],f._ptLookup=[],f._overwrite=T,w||S||su(g)||su(m)){if(l=f.vars,z=f.timeline=new Sn({data:"nested",defaults:b||{},targets:j&&j.data==="nested"?j.vars.targets:A}),z.kill(),z.parent=z._dp=ka(f),z._start=0,S||su(g)||su(m)){if(k=A.length,te=S&&H2(S),aa(S))for(I in S)~tS.indexOf(I)&&(re||(re={}),re[I]=S[I]);for(R=0;R<k;R++)M=Iu(l,nS),M.stagger=0,D&&(M.yoyoEase=D),re&&Qo(M,re),$=A[R],M.duration=+gs(g,ka(f),R,$,A),M.delay=(+gs(m,ka(f),R,$,A)||0)-f._delay,!S&&k===1&&M.delay&&(f._delay=m=M.delay,f._start+=m,M.delay=0),z.to($,M,te?te(R,$,A):0),z._ease=Ve.none;z.duration()?g=m=0:f.timeline=0}else if(w){ps(tr(z.vars.defaults,{ease:"none"})),z._ease=Xi(w.ease||l.ease||"none");var le=0,ye,Se,we;if(mn(w))w.forEach(function(U){return z.to(A,U,">")}),z.duration();else{M={};for(I in w)I==="ease"||I==="easeEach"||HC(I,w[I],M,w.easeEach);for(I in M)for(ye=M[I].sort(function(U,H){return U.t-H.t}),le=0,R=0;R<ye.length;R++)Se=ye[R],we={ease:Se.e,duration:(Se.t-(R?ye[R-1].t:0))/100*g},we[I]=Se.v,z.to(A,we,le),le+=we.duration;z.duration()<g&&z.to({},{duration:g-z.duration()})}}g||f.duration(g=z.duration())}else f.timeline=0;return T===!0&&!d0&&(li=ka(f),kt.killTweensOf(A),li=0),Wr(j,ka(f),c),l.reversed&&f.reverse(),l.paused&&f.paused(!0),(x||!g&&!w&&f._start===Ct(j._time)&&Ln(x)&&xC(ka(f))&&j.data!=="nested")&&(f._tTime=-pt,f.render(Math.max(0,-m)||0)),v&&j2(ka(f),v),f}var i=n.prototype;return i.render=function(l,c,u){var f=this._time,h=this._tDur,g=this._dur,m=l<0,x=l>h-pt&&!m?h:l<pt?0:l,S,T,w,b,v,D,j,A,z;if(!g)bC(this,l,c,u);else if(x!==this._tTime||!l||u||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==m||this._lazy){if(S=x,A=this.timeline,this._repeat){if(b=g+this._rDelay,this._repeat<-1&&m)return this.totalTime(b*100+l,c,u);if(S=Ct(x%b),x===h?(w=this._repeat,S=g):(v=Ct(x/b),w=~~v,w&&w===v?(S=g,w--):S>g&&(S=g)),D=this._yoyo&&w&1,D&&(z=this._yEase,S=g-S),v=Zo(this._tTime,b),S===f&&!u&&this._initted&&w===v)return this._tTime=x,this;w!==v&&(A&&this._yEase&&K2(A,D),this.vars.repeatRefresh&&!D&&!this._lock&&S!==b&&this._initted&&(this._lock=u=1,this.render(Ct(b*w),!0).invalidate()._lock=0))}if(!this._initted){if(U2(this,m?l:S,u,c,x))return this._tTime=0,this;if(f!==this._time&&!(u&&this.vars.repeatRefresh&&w!==v))return this;if(g!==this._dur)return this.render(l,c,u)}if(this._tTime=x,this._time=S,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=j=(z||this._ease)(S/g),this._from&&(this.ratio=j=1-j),!f&&x&&!c&&!v&&(Zn(this,"onStart"),this._tTime!==x))return this;for(T=this._pt;T;)T.r(j,T.d),T=T._next;A&&A.render(l<0?l:A._dur*A._ease(S/this._dur),c,u)||this._startAt&&(this._zTime=l),this._onUpdate&&!c&&(m&&Eh(this,l,c,u),Zn(this,"onUpdate")),this._repeat&&w!==v&&this.vars.onRepeat&&!c&&this.parent&&Zn(this,"onRepeat"),(x===this._tDur||!x)&&this._tTime===x&&(m&&!this._onUpdate&&Eh(this,l,!0,!0),(l||!g)&&(x===this._tDur&&this._ts>0||!x&&this._ts<0)&&hi(this,1),!c&&!(m&&!f)&&(x||f||D)&&(Zn(this,x===h?"onComplete":"onReverseComplete",!0),this._prom&&!(x<h&&this.timeScale()>0)&&this._prom()))}return this},i.targets=function(){return this._targets},i.invalidate=function(l){return(!l||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(l),r.prototype.invalidate.call(this,l)},i.resetTo=function(l,c,u,f,h){ks||Fn.wake(),this._ts||this.play();var g=Math.min(this._dur,(this._dp._time-this._start)*this._ts),m;return this._initted||S0(this,g),m=this._ease(g/this._dur),IC(this,l,c,u,f,m,g,h)?this.resetTo(l,c,u,f,1):(ud(this,0),this.parent||M2(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},i.kill=function(l,c){if(c===void 0&&(c="all"),!l&&(!c||c==="all"))return this._lazy=this._pt=0,this.parent?ds(this):this.scrollTrigger&&this.scrollTrigger.kill(!!on),this;if(this.timeline){var u=this.timeline.totalDuration();return this.timeline.killTweensOf(l,c,li&&li.vars.overwrite!==!0)._first||ds(this),this.parent&&u!==this.timeline.totalDuration()&&Ko(this,this._dur*this.timeline._tDur/u,0,1),this}var f=this._targets,h=l?Tr(l):f,g=this._ptLookup,m=this._pt,x,S,T,w,b,v,D;if((!c||c==="all")&&gC(f,h))return c==="all"&&(this._pt=0),ds(this);for(x=this._op=this._op||[],c!=="all"&&(Jt(c)&&(b={},zn(c,function(j){return b[j]=1}),c=b),c=BC(f,c)),D=f.length;D--;)if(~h.indexOf(f[D])){S=g[D],c==="all"?(x[D]=c,w=S,T={}):(T=x[D]=x[D]||{},w=c);for(b in w)v=S&&S[b],v&&((!("kill"in v.d)||v.d.kill(b)===!0)&&sd(this,v,"_pt"),delete S[b]),T!=="all"&&(T[b]=1)}return this._initted&&!this._pt&&m&&ds(this),this},n.to=function(l,c){return new n(l,c,arguments[2])},n.from=function(l,c){return hs(1,arguments)},n.delayedCall=function(l,c,u,f){return new n(c,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:l,onComplete:c,onReverseComplete:c,onCompleteParams:u,onReverseCompleteParams:u,callbackScope:f})},n.fromTo=function(l,c,u){return hs(2,arguments)},n.set=function(l,c){return c.duration=0,c.repeatDelay||(c.repeat=0),new n(l,c)},n.killTweensOf=function(l,c,u){return kt.killTweensOf(l,c,u)},n})(Os);tr(Yt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});zn("staggerTo,staggerFrom,staggerFromTo",function(r){Yt[r]=function(){var n=new Sn,i=kh.call(arguments,0);return i.splice(r==="staggerFromTo"?5:4,0,0),n[r].apply(n,i)}});var w0=function(n,i,o){return n[i]=o},rS=function(n,i,o){return n[i](o)},$C=function(n,i,o,l){return n[i](l.fp,o)},PC=function(n,i,o){return n.setAttribute(i,o)},_0=function(n,i){return Dt(n[i])?rS:f0(n[i])&&n.setAttribute?PC:w0},aS=function(n,i){return i.set(i.t,i.p,Math.round((i.s+i.c*n)*1e6)/1e6,i)},qC=function(n,i){return i.set(i.t,i.p,!!(i.s+i.c*n),i)},iS=function(n,i){var o=i._pt,l="";if(!n&&i.b)l=i.b;else if(n===1&&i.e)l=i.e;else{for(;o;)l=o.p+(o.m?o.m(o.s+o.c*n):Math.round((o.s+o.c*n)*1e4)/1e4)+l,o=o._next;l+=i.c}i.set(i.t,i.p,l,i)},T0=function(n,i){for(var o=i._pt;o;)o.r(n,o.d),o=o._next},YC=function(n,i,o,l){for(var c=this._pt,u;c;)u=c._next,c.p===l&&c.modifier(n,i,o),c=u},GC=function(n){for(var i=this._pt,o,l;i;)l=i._next,i.p===n&&!i.op||i.op===n?sd(this,i,"_pt"):i.dep||(o=1),i=l;return!o},XC=function(n,i,o,l){l.mSet(n,i,l.m.call(l.tween,o,l.mt),l)},oS=function(n){for(var i=n._pt,o,l,c,u;i;){for(o=i._next,l=c;l&&l.pr>i.pr;)l=l._next;(i._prev=l?l._prev:u)?i._prev._next=i:c=i,(i._next=l)?l._prev=i:u=i,i=o}n._pt=c},Dn=(function(){function r(i,o,l,c,u,f,h,g,m){this.t=o,this.s=c,this.c=u,this.p=l,this.r=f||aS,this.d=h||this,this.set=g||w0,this.pr=m||0,this._next=i,i&&(i._prev=this)}var n=r.prototype;return n.modifier=function(o,l,c){this.mSet=this.mSet||this.set,this.set=XC,this.m=o,this.mt=c,this.tween=l},r})();zn(x0+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return m0[r]=1});er.TweenMax=er.TweenLite=Yt;er.TimelineLite=er.TimelineMax=Sn;kt=new Sn({sortChildren:!1,defaults:Fo,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Wn.stringFilter=Q2;var Vi=[],Lu={},VC=[],$y=0,FC=0,Kp=function(n){return(Lu[n]||VC).map(function(i){return i()})},Lh=function(){var n=Date.now(),i=[];n-$y>2&&(Kp("matchMediaInit"),Vi.forEach(function(o){var l=o.queries,c=o.conditions,u,f,h,g;for(f in l)u=Qr.matchMedia(l[f]).matches,u&&(h=1),u!==c[f]&&(c[f]=u,g=1);g&&(o.revert(),h&&i.push(o))}),Kp("matchMediaRevert"),i.forEach(function(o){return o.onMatch(o,function(l){return o.add(null,l)})}),$y=n,Kp("matchMedia"))},lS=(function(){function r(i,o){this.selector=o&&Oh(o),this.data=[],this._r=[],this.isReverted=!1,this.id=FC++,i&&this.add(i)}var n=r.prototype;return n.add=function(o,l,c){Dt(o)&&(c=l,l=o,o=Dt);var u=this,f=function(){var g=wt,m=u.selector,x;return g&&g!==u&&g.data.push(u),c&&(u.selector=Oh(c)),wt=u,x=l.apply(u,arguments),Dt(x)&&u._r.push(x),wt=g,u.selector=m,u.isReverted=!1,x};return u.last=f,o===Dt?f(u,function(h){return u.add(null,h)}):o?u[o]=f:f},n.ignore=function(o){var l=wt;wt=null,o(this),wt=l},n.getTweens=function(){var o=[];return this.data.forEach(function(l){return l instanceof r?o.push.apply(o,l.getTweens()):l instanceof Yt&&!(l.parent&&l.parent.data==="nested")&&o.push(l)}),o},n.clear=function(){this._r.length=this.data.length=0},n.kill=function(o,l){var c=this;if(o?(function(){for(var f=c.getTweens(),h=c.data.length,g;h--;)g=c.data[h],g.data==="isFlip"&&(g.revert(),g.getChildren(!0,!0,!1).forEach(function(m){return f.splice(f.indexOf(m),1)}));for(f.map(function(m){return{g:m._dur||m._delay||m._sat&&!m._sat.vars.immediateRender?m.globalTime(0):-1/0,t:m}}).sort(function(m,x){return x.g-m.g||-1/0}).forEach(function(m){return m.t.revert(o)}),h=c.data.length;h--;)g=c.data[h],g instanceof Sn?g.data!=="nested"&&(g.scrollTrigger&&g.scrollTrigger.revert(),g.kill()):!(g instanceof Yt)&&g.revert&&g.revert(o);c._r.forEach(function(m){return m(o,c)}),c.isReverted=!0})():this.data.forEach(function(f){return f.kill&&f.kill()}),this.clear(),l)for(var u=Vi.length;u--;)Vi[u].id===this.id&&Vi.splice(u,1)},n.revert=function(o){this.kill(o||{})},r})(),QC=(function(){function r(i){this.contexts=[],this.scope=i,wt&&wt.data.push(this)}var n=r.prototype;return n.add=function(o,l,c){aa(o)||(o={matches:o});var u=new lS(0,c||this.scope),f=u.conditions={},h,g,m;wt&&!u.selector&&(u.selector=wt.selector),this.contexts.push(u),l=u.add("onMatch",l),u.queries=o;for(g in o)g==="all"?m=1:(h=Qr.matchMedia(o[g]),h&&(Vi.indexOf(u)<0&&Vi.push(u),(f[g]=h.matches)&&(m=1),h.addListener?h.addListener(Lh):h.addEventListener("change",Lh)));return m&&l(u,function(x){return u.add(null,x)}),this},n.revert=function(o){this.kill(o||{})},n.kill=function(o){this.contexts.forEach(function(l){return l.kill(o,!0)})},r})(),Hu={registerPlugin:function(){for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];i.forEach(function(l){return X2(l)})},timeline:function(n){return new Sn(n)},getTweensOf:function(n,i){return kt.getTweensOf(n,i)},getProperty:function(n,i,o,l){Jt(n)&&(n=Tr(n)[0]);var c=Yi(n||{}).get,u=o?D2:z2;return o==="native"&&(o=""),n&&(i?u((Vn[i]&&Vn[i].get||c)(n,i,o,l)):function(f,h,g){return u((Vn[f]&&Vn[f].get||c)(n,f,h,g))})},quickSetter:function(n,i,o){if(n=Tr(n),n.length>1){var l=n.map(function(m){return jn.quickSetter(m,i,o)}),c=l.length;return function(m){for(var x=c;x--;)l[x](m)}}n=n[0]||{};var u=Vn[i],f=Yi(n),h=f.harness&&(f.harness.aliases||{})[i]||i,g=u?function(m){var x=new u;Bo._pt=0,x.init(n,o?m+o:m,Bo,0,[n]),x.render(1,x),Bo._pt&&T0(1,Bo)}:f.set(n,h);return u?g:function(m){return g(n,h,o?m+o:m,f,1)}},quickTo:function(n,i,o){var l,c=jn.to(n,tr((l={},l[i]="+=0.1",l.paused=!0,l.stagger=0,l),o||{})),u=function(h,g,m){return c.resetTo(i,h,g,m)};return u.tween=c,u},isTweening:function(n){return kt.getTweensOf(n,!0).length>0},defaults:function(n){return n&&n.ease&&(n.ease=Xi(n.ease,Fo.ease)),jy(Fo,n||{})},config:function(n){return jy(Wn,n||{})},registerEffect:function(n){var i=n.name,o=n.effect,l=n.plugins,c=n.defaults,u=n.extendTimeline;(l||"").split(",").forEach(function(f){return f&&!Vn[f]&&!er[f]&&Ts(i+" effect requires "+f+" plugin.")}),Vp[i]=function(f,h,g){return o(Tr(f),tr(h||{},c),g)},u&&(Sn.prototype[i]=function(f,h,g){return this.add(Vp[i](f,aa(h)?h:(g=h)&&{},this),g)})},registerEase:function(n,i){Ve[n]=Xi(i)},parseEase:function(n,i){return arguments.length?Xi(n,i):Ve},getById:function(n){return kt.getById(n)},exportRoot:function(n,i){n===void 0&&(n={});var o=new Sn(n),l,c;for(o.smoothChildTiming=Ln(n.smoothChildTiming),kt.remove(o),o._dp=0,o._time=o._tTime=kt._time,l=kt._first;l;)c=l._next,(i||!(!l._dur&&l instanceof Yt&&l.vars.onComplete===l._targets[0]))&&Wr(o,l,l._start-l._delay),l=c;return Wr(kt,o,0),o},context:function(n,i){return n?new lS(n,i):wt},matchMedia:function(n){return new QC(n)},matchMediaRefresh:function(){return Vi.forEach(function(n){var i=n.conditions,o,l;for(l in i)i[l]&&(i[l]=!1,o=1);o&&n.revert()})||Lh()},addEventListener:function(n,i){var o=Lu[n]||(Lu[n]=[]);~o.indexOf(i)||o.push(i)},removeEventListener:function(n,i){var o=Lu[n],l=o&&o.indexOf(i);l>=0&&o.splice(l,1)},utils:{wrap:kC,wrapYoyo:OC,distribute:H2,random:P2,snap:$2,normalize:CC,getUnit:gn,clamp:wC,splitColor:V2,toArray:Tr,selector:Oh,mapRange:Y2,pipe:TC,unitize:EC,interpolate:RC,shuffle:B2},install:k2,effects:Vp,ticker:Fn,updateRoot:Sn.updateRoot,plugins:Vn,globalTimeline:kt,core:{PropTween:Dn,globals:O2,Tween:Yt,Timeline:Sn,Animation:Os,getCache:Yi,_removeLinkedListItem:sd,reverting:function(){return on},context:function(n){return n&&wt&&(wt.data.push(n),n._ctx=wt),wt},suppressOverwrites:function(n){return d0=n}}};zn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Hu[r]=Yt[r]});Fn.add(Sn.updateRoot);Bo=Hu.to({},{duration:0});var ZC=function(n,i){for(var o=n._pt;o&&o.p!==i&&o.op!==i&&o.fp!==i;)o=o._next;return o},KC=function(n,i){var o=n._targets,l,c,u;for(l in i)for(c=o.length;c--;)u=n._ptLookup[c][l],u&&(u=u.d)&&(u._pt&&(u=ZC(u,l)),u&&u.modifier&&u.modifier(i[l],n,o[c],l))},Jp=function(n,i){return{name:n,headless:1,rawVars:1,init:function(l,c,u){u._onInit=function(f){var h,g;if(Jt(c)&&(h={},zn(c,function(m){return h[m]=1}),c=h),i){h={};for(g in c)h[g]=i(c[g]);c=h}KC(f,c)}}}},jn=Hu.registerPlugin({name:"attr",init:function(n,i,o,l,c){var u,f,h;this.tween=o;for(u in i)h=n.getAttribute(u)||"",f=this.add(n,"setAttribute",(h||0)+"",i[u],l,c,0,0,u),f.op=u,f.b=h,this._props.push(u)},render:function(n,i){for(var o=i._pt;o;)on?o.set(o.t,o.p,o.b,o):o.r(n,o.d),o=o._next}},{name:"endArray",headless:1,init:function(n,i){for(var o=i.length;o--;)this.add(n,o,n[o]||0,i[o],0,0,0,0,0,1)}},Jp("roundProps",Rh),Jp("modifiers"),Jp("snap",$2))||Hu;Yt.version=Sn.version=jn.version="3.14.2";C2=1;p0()&&Jo();Ve.Power0;Ve.Power1;Ve.Power2;Ve.Power3;Ve.Power4;Ve.Linear;Ve.Quad;Ve.Cubic;Ve.Quart;Ve.Quint;Ve.Strong;Ve.Elastic;Ve.Back;Ve.SteppedEase;Ve.Bounce;Ve.Sine;Ve.Expo;Ve.Circ;var Py,si,qo,E0,Pi,qy,C0,JC=function(){return typeof window<"u"},za={},Ii=180/Math.PI,Yo=Math.PI/180,jo=Math.atan2,Yy=1e8,k0=/([A-Z])/g,WC=/(left|right|width|margin|padding|x)/i,ek=/[\s,\(]\S/,ea={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},zh=function(n,i){return i.set(i.t,i.p,Math.round((i.s+i.c*n)*1e4)/1e4+i.u,i)},tk=function(n,i){return i.set(i.t,i.p,n===1?i.e:Math.round((i.s+i.c*n)*1e4)/1e4+i.u,i)},nk=function(n,i){return i.set(i.t,i.p,n?Math.round((i.s+i.c*n)*1e4)/1e4+i.u:i.b,i)},rk=function(n,i){return i.set(i.t,i.p,n===1?i.e:n?Math.round((i.s+i.c*n)*1e4)/1e4+i.u:i.b,i)},ak=function(n,i){var o=i.s+i.c*n;i.set(i.t,i.p,~~(o+(o<0?-.5:.5))+i.u,i)},sS=function(n,i){return i.set(i.t,i.p,n?i.e:i.b,i)},cS=function(n,i){return i.set(i.t,i.p,n!==1?i.b:i.e,i)},ik=function(n,i,o){return n.style[i]=o},ok=function(n,i,o){return n.style.setProperty(i,o)},lk=function(n,i,o){return n._gsap[i]=o},sk=function(n,i,o){return n._gsap.scaleX=n._gsap.scaleY=o},ck=function(n,i,o,l,c){var u=n._gsap;u.scaleX=u.scaleY=o,u.renderTransform(c,u)},uk=function(n,i,o,l,c){var u=n._gsap;u[i]=o,u.renderTransform(c,u)},Ot="transform",Mn=Ot+"Origin",dk=function r(n,i){var o=this,l=this.target,c=l.style,u=l._gsap;if(n in za&&c){if(this.tfm=this.tfm||{},n!=="transform")n=ea[n]||n,~n.indexOf(",")?n.split(",").forEach(function(f){return o.tfm[f]=Oa(l,f)}):this.tfm[n]=u.x?u[n]:Oa(l,n),n===Mn&&(this.tfm.zOrigin=u.zOrigin);else return ea.transform.split(",").forEach(function(f){return r.call(o,f,i)});if(this.props.indexOf(Ot)>=0)return;u.svg&&(this.svgo=l.getAttribute("data-svg-origin"),this.props.push(Mn,i,"")),n=Ot}(c||i)&&this.props.push(n,i,c[n])},uS=function(n){n.translate&&(n.removeProperty("translate"),n.removeProperty("scale"),n.removeProperty("rotate"))},fk=function(){var n=this.props,i=this.target,o=i.style,l=i._gsap,c,u;for(c=0;c<n.length;c+=3)n[c+1]?n[c+1]===2?i[n[c]](n[c+2]):i[n[c]]=n[c+2]:n[c+2]?o[n[c]]=n[c+2]:o.removeProperty(n[c].substr(0,2)==="--"?n[c]:n[c].replace(k0,"-$1").toLowerCase());if(this.tfm){for(u in this.tfm)l[u]=this.tfm[u];l.svg&&(l.renderTransform(),i.setAttribute("data-svg-origin",this.svgo||"")),c=C0(),(!c||!c.isStart)&&!o[Ot]&&(uS(o),l.zOrigin&&o[Mn]&&(o[Mn]+=" "+l.zOrigin+"px",l.zOrigin=0,l.renderTransform()),l.uncache=1)}},dS=function(n,i){var o={target:n,props:[],revert:fk,save:dk};return n._gsap||jn.core.getCache(n),i&&n.style&&n.nodeType&&i.split(",").forEach(function(l){return o.save(l)}),o},fS,Dh=function(n,i){var o=si.createElementNS?si.createElementNS((i||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),n):si.createElement(n);return o&&o.style?o:si.createElement(n)},Kn=function r(n,i,o){var l=getComputedStyle(n);return l[i]||l.getPropertyValue(i.replace(k0,"-$1").toLowerCase())||l.getPropertyValue(i)||!o&&r(n,Wo(i)||i,1)||""},Gy="O,Moz,ms,Ms,Webkit".split(","),Wo=function(n,i,o){var l=i||Pi,c=l.style,u=5;if(n in c&&!o)return n;for(n=n.charAt(0).toUpperCase()+n.substr(1);u--&&!(Gy[u]+n in c););return u<0?null:(u===3?"ms":u>=0?Gy[u]:"")+n},Mh=function(){JC()&&window.document&&(Py=window,si=Py.document,qo=si.documentElement,Pi=Dh("div")||{style:{}},Dh("div"),Ot=Wo(Ot),Mn=Ot+"Origin",Pi.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",fS=!!Wo("perspective"),C0=jn.core.reverting,E0=1)},Xy=function(n){var i=n.ownerSVGElement,o=Dh("svg",i&&i.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),l=n.cloneNode(!0),c;l.style.display="block",o.appendChild(l),qo.appendChild(o);try{c=l.getBBox()}catch{}return o.removeChild(l),qo.removeChild(o),c},Vy=function(n,i){for(var o=i.length;o--;)if(n.hasAttribute(i[o]))return n.getAttribute(i[o])},pS=function(n){var i,o;try{i=n.getBBox()}catch{i=Xy(n),o=1}return i&&(i.width||i.height)||o||(i=Xy(n)),i&&!i.width&&!i.x&&!i.y?{x:+Vy(n,["x","cx","x1"])||0,y:+Vy(n,["y","cy","y1"])||0,width:0,height:0}:i},hS=function(n){return!!(n.getCTM&&(!n.parentNode||n.ownerSVGElement)&&pS(n))},gi=function(n,i){if(i){var o=n.style,l;i in za&&i!==Mn&&(i=Ot),o.removeProperty?(l=i.substr(0,2),(l==="ms"||i.substr(0,6)==="webkit")&&(i="-"+i),o.removeProperty(l==="--"?i:i.replace(k0,"-$1").toLowerCase())):o.removeAttribute(i)}},ci=function(n,i,o,l,c,u){var f=new Dn(n._pt,i,o,0,1,u?cS:sS);return n._pt=f,f.b=l,f.e=c,n._props.push(o),f},Fy={deg:1,rad:1,turn:1},pk={grid:1,flex:1},mi=function r(n,i,o,l){var c=parseFloat(o)||0,u=(o+"").trim().substr((c+"").length)||"px",f=Pi.style,h=WC.test(i),g=n.tagName.toLowerCase()==="svg",m=(g?"client":"offset")+(h?"Width":"Height"),x=100,S=l==="px",T=l==="%",w,b,v,D;if(l===u||!c||Fy[l]||Fy[u])return c;if(u!=="px"&&!S&&(c=r(n,i,o,"px")),D=n.getCTM&&hS(n),(T||u==="%")&&(za[i]||~i.indexOf("adius")))return w=D?n.getBBox()[h?"width":"height"]:n[m],Ut(T?c/w*x:c/100*w);if(f[h?"width":"height"]=x+(S?u:l),b=l!=="rem"&&~i.indexOf("adius")||l==="em"&&n.appendChild&&!g?n:n.parentNode,D&&(b=(n.ownerSVGElement||{}).parentNode),(!b||b===si||!b.appendChild)&&(b=si.body),v=b._gsap,v&&T&&v.width&&h&&v.time===Fn.time&&!v.uncache)return Ut(c/v.width*x);if(T&&(i==="height"||i==="width")){var j=n.style[i];n.style[i]=x+l,w=n[m],j?n.style[i]=j:gi(n,i)}else(T||u==="%")&&!pk[Kn(b,"display")]&&(f.position=Kn(n,"position")),b===n&&(f.position="static"),b.appendChild(Pi),w=Pi[m],b.removeChild(Pi),f.position="absolute";return h&&T&&(v=Yi(b),v.time=Fn.time,v.width=b[m]),Ut(S?w*c/x:w&&c?x/w*c:0)},Oa=function(n,i,o,l){var c;return E0||Mh(),i in ea&&i!=="transform"&&(i=ea[i],~i.indexOf(",")&&(i=i.split(",")[0])),za[i]&&i!=="transform"?(c=As(n,l),c=i!=="transformOrigin"?c[i]:c.svg?c.origin:Pu(Kn(n,Mn))+" "+c.zOrigin+"px"):(c=n.style[i],(!c||c==="auto"||l||~(c+"").indexOf("calc("))&&(c=$u[i]&&$u[i](n,i,o)||Kn(n,i)||A2(n,i)||(i==="opacity"?1:0))),o&&!~(c+"").trim().indexOf(" ")?mi(n,i,c,o)+o:c},hk=function(n,i,o,l){if(!o||o==="none"){var c=Wo(i,n,1),u=c&&Kn(n,c,1);u&&u!==o?(i=c,o=u):i==="borderColor"&&(o=Kn(n,"borderTopColor"))}var f=new Dn(this._pt,n.style,i,0,1,iS),h=0,g=0,m,x,S,T,w,b,v,D,j,A,z,R;if(f.b=o,f.e=l,o+="",l+="",l.substring(0,6)==="var(--"&&(l=Kn(n,l.substring(4,l.indexOf(")")))),l==="auto"&&(b=n.style[i],n.style[i]=l,l=Kn(n,i)||l,b?n.style[i]=b:gi(n,i)),m=[o,l],Q2(m),o=m[0],l=m[1],S=o.match(Io)||[],R=l.match(Io)||[],R.length){for(;x=Io.exec(l);)v=x[0],j=l.substring(h,x.index),w?w=(w+1)%5:(j.substr(-5)==="rgba("||j.substr(-5)==="hsla(")&&(w=1),v!==(b=S[g++]||"")&&(T=parseFloat(b)||0,z=b.substr((T+"").length),v.charAt(1)==="="&&(v=Po(T,v)+z),D=parseFloat(v),A=v.substr((D+"").length),h=Io.lastIndex-A.length,A||(A=A||Wn.units[i]||z,h===l.length&&(l+=A,f.e+=A)),z!==A&&(T=mi(n,i,b,A)||0),f._pt={_next:f._pt,p:j||g===1?j:",",s:T,c:D-T,m:w&&w<4||i==="zIndex"?Math.round:0});f.c=h<l.length?l.substring(h,l.length):""}else f.r=i==="display"&&l==="none"?cS:sS;return E2.test(l)&&(f.e=0),this._pt=f,f},Qy={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},gk=function(n){var i=n.split(" "),o=i[0],l=i[1]||"50%";return(o==="top"||o==="bottom"||l==="left"||l==="right")&&(n=o,o=l,l=n),i[0]=Qy[o]||o,i[1]=Qy[l]||l,i.join(" ")},mk=function(n,i){if(i.tween&&i.tween._time===i.tween._dur){var o=i.t,l=o.style,c=i.u,u=o._gsap,f,h,g;if(c==="all"||c===!0)l.cssText="",h=1;else for(c=c.split(","),g=c.length;--g>-1;)f=c[g],za[f]&&(h=1,f=f==="transformOrigin"?Mn:Ot),gi(o,f);h&&(gi(o,Ot),u&&(u.svg&&o.removeAttribute("transform"),l.scale=l.rotate=l.translate="none",As(o,1),u.uncache=1,uS(l)))}},$u={clearProps:function(n,i,o,l,c){if(c.data!=="isFromStart"){var u=n._pt=new Dn(n._pt,i,o,0,0,mk);return u.u=l,u.pr=-10,u.tween=c,n._props.push(o),1}}},Rs=[1,0,0,1,0,0],gS={},mS=function(n){return n==="matrix(1, 0, 0, 1, 0, 0)"||n==="none"||!n},Zy=function(n){var i=Kn(n,Ot);return mS(i)?Rs:i.substr(7).match(T2).map(Ut)},O0=function(n,i){var o=n._gsap||Yi(n),l=n.style,c=Zy(n),u,f,h,g;return o.svg&&n.getAttribute("transform")?(h=n.transform.baseVal.consolidate().matrix,c=[h.a,h.b,h.c,h.d,h.e,h.f],c.join(",")==="1,0,0,1,0,0"?Rs:c):(c===Rs&&!n.offsetParent&&n!==qo&&!o.svg&&(h=l.display,l.display="block",u=n.parentNode,(!u||!n.offsetParent&&!n.getBoundingClientRect().width)&&(g=1,f=n.nextElementSibling,qo.appendChild(n)),c=Zy(n),h?l.display=h:gi(n,"display"),g&&(f?u.insertBefore(n,f):u?u.appendChild(n):qo.removeChild(n))),i&&c.length>6?[c[0],c[1],c[4],c[5],c[12],c[13]]:c)},Nh=function(n,i,o,l,c,u){var f=n._gsap,h=c||O0(n,!0),g=f.xOrigin||0,m=f.yOrigin||0,x=f.xOffset||0,S=f.yOffset||0,T=h[0],w=h[1],b=h[2],v=h[3],D=h[4],j=h[5],A=i.split(" "),z=parseFloat(A[0])||0,R=parseFloat(A[1])||0,M,k,I,$;o?h!==Rs&&(k=T*v-w*b)&&(I=z*(v/k)+R*(-b/k)+(b*j-v*D)/k,$=z*(-w/k)+R*(T/k)-(T*j-w*D)/k,z=I,R=$):(M=pS(n),z=M.x+(~A[0].indexOf("%")?z/100*M.width:z),R=M.y+(~(A[1]||A[0]).indexOf("%")?R/100*M.height:R)),l||l!==!1&&f.smooth?(D=z-g,j=R-m,f.xOffset=x+(D*T+j*b)-D,f.yOffset=S+(D*w+j*v)-j):f.xOffset=f.yOffset=0,f.xOrigin=z,f.yOrigin=R,f.smooth=!!l,f.origin=i,f.originIsAbsolute=!!o,n.style[Mn]="0px 0px",u&&(ci(u,f,"xOrigin",g,z),ci(u,f,"yOrigin",m,R),ci(u,f,"xOffset",x,f.xOffset),ci(u,f,"yOffset",S,f.yOffset)),n.setAttribute("data-svg-origin",z+" "+R)},As=function(n,i){var o=n._gsap||new W2(n);if("x"in o&&!i&&!o.uncache)return o;var l=n.style,c=o.scaleX<0,u="px",f="deg",h=getComputedStyle(n),g=Kn(n,Mn)||"0",m,x,S,T,w,b,v,D,j,A,z,R,M,k,I,$,te,re,le,ye,Se,we,U,H,X,ue,pe,N,Y,K,oe,ve;return m=x=S=b=v=D=j=A=z=0,T=w=1,o.svg=!!(n.getCTM&&hS(n)),h.translate&&((h.translate!=="none"||h.scale!=="none"||h.rotate!=="none")&&(l[Ot]=(h.translate!=="none"?"translate3d("+(h.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(h.rotate!=="none"?"rotate("+h.rotate+") ":"")+(h.scale!=="none"?"scale("+h.scale.split(" ").join(",")+") ":"")+(h[Ot]!=="none"?h[Ot]:"")),l.scale=l.rotate=l.translate="none"),k=O0(n,o.svg),o.svg&&(o.uncache?(X=n.getBBox(),g=o.xOrigin-X.x+"px "+(o.yOrigin-X.y)+"px",H=""):H=!i&&n.getAttribute("data-svg-origin"),Nh(n,H||g,!!H||o.originIsAbsolute,o.smooth!==!1,k)),R=o.xOrigin||0,M=o.yOrigin||0,k!==Rs&&(re=k[0],le=k[1],ye=k[2],Se=k[3],m=we=k[4],x=U=k[5],k.length===6?(T=Math.sqrt(re*re+le*le),w=Math.sqrt(Se*Se+ye*ye),b=re||le?jo(le,re)*Ii:0,j=ye||Se?jo(ye,Se)*Ii+b:0,j&&(w*=Math.abs(Math.cos(j*Yo))),o.svg&&(m-=R-(R*re+M*ye),x-=M-(R*le+M*Se))):(ve=k[6],K=k[7],pe=k[8],N=k[9],Y=k[10],oe=k[11],m=k[12],x=k[13],S=k[14],I=jo(ve,Y),v=I*Ii,I&&($=Math.cos(-I),te=Math.sin(-I),H=we*$+pe*te,X=U*$+N*te,ue=ve*$+Y*te,pe=we*-te+pe*$,N=U*-te+N*$,Y=ve*-te+Y*$,oe=K*-te+oe*$,we=H,U=X,ve=ue),I=jo(-ye,Y),D=I*Ii,I&&($=Math.cos(-I),te=Math.sin(-I),H=re*$-pe*te,X=le*$-N*te,ue=ye*$-Y*te,oe=Se*te+oe*$,re=H,le=X,ye=ue),I=jo(le,re),b=I*Ii,I&&($=Math.cos(I),te=Math.sin(I),H=re*$+le*te,X=we*$+U*te,le=le*$-re*te,U=U*$-we*te,re=H,we=X),v&&Math.abs(v)+Math.abs(b)>359.9&&(v=b=0,D=180-D),T=Ut(Math.sqrt(re*re+le*le+ye*ye)),w=Ut(Math.sqrt(U*U+ve*ve)),I=jo(we,U),j=Math.abs(I)>2e-4?I*Ii:0,z=oe?1/(oe<0?-oe:oe):0),o.svg&&(H=n.getAttribute("transform"),o.forceCSS=n.setAttribute("transform","")||!mS(Kn(n,Ot)),H&&n.setAttribute("transform",H))),Math.abs(j)>90&&Math.abs(j)<270&&(c?(T*=-1,j+=b<=0?180:-180,b+=b<=0?180:-180):(w*=-1,j+=j<=0?180:-180)),i=i||o.uncache,o.x=m-((o.xPercent=m&&(!i&&o.xPercent||(Math.round(n.offsetWidth/2)===Math.round(-m)?-50:0)))?n.offsetWidth*o.xPercent/100:0)+u,o.y=x-((o.yPercent=x&&(!i&&o.yPercent||(Math.round(n.offsetHeight/2)===Math.round(-x)?-50:0)))?n.offsetHeight*o.yPercent/100:0)+u,o.z=S+u,o.scaleX=Ut(T),o.scaleY=Ut(w),o.rotation=Ut(b)+f,o.rotationX=Ut(v)+f,o.rotationY=Ut(D)+f,o.skewX=j+f,o.skewY=A+f,o.transformPerspective=z+u,(o.zOrigin=parseFloat(g.split(" ")[2])||!i&&o.zOrigin||0)&&(l[Mn]=Pu(g)),o.xOffset=o.yOffset=0,o.force3D=Wn.force3D,o.renderTransform=o.svg?yk:fS?xS:xk,o.uncache=0,o},Pu=function(n){return(n=n.split(" "))[0]+" "+n[1]},Wp=function(n,i,o){var l=gn(i);return Ut(parseFloat(i)+parseFloat(mi(n,"x",o+"px",l)))+l},xk=function(n,i){i.z="0px",i.rotationY=i.rotationX="0deg",i.force3D=0,xS(n,i)},ji="0deg",ns="0px",Ui=") ",xS=function(n,i){var o=i||this,l=o.xPercent,c=o.yPercent,u=o.x,f=o.y,h=o.z,g=o.rotation,m=o.rotationY,x=o.rotationX,S=o.skewX,T=o.skewY,w=o.scaleX,b=o.scaleY,v=o.transformPerspective,D=o.force3D,j=o.target,A=o.zOrigin,z="",R=D==="auto"&&n&&n!==1||D===!0;if(A&&(x!==ji||m!==ji)){var M=parseFloat(m)*Yo,k=Math.sin(M),I=Math.cos(M),$;M=parseFloat(x)*Yo,$=Math.cos(M),u=Wp(j,u,k*$*-A),f=Wp(j,f,-Math.sin(M)*-A),h=Wp(j,h,I*$*-A+A)}v!==ns&&(z+="perspective("+v+Ui),(l||c)&&(z+="translate("+l+"%, "+c+"%) "),(R||u!==ns||f!==ns||h!==ns)&&(z+=h!==ns||R?"translate3d("+u+", "+f+", "+h+") ":"translate("+u+", "+f+Ui),g!==ji&&(z+="rotate("+g+Ui),m!==ji&&(z+="rotateY("+m+Ui),x!==ji&&(z+="rotateX("+x+Ui),(S!==ji||T!==ji)&&(z+="skew("+S+", "+T+Ui),(w!==1||b!==1)&&(z+="scale("+w+", "+b+Ui),j.style[Ot]=z||"translate(0, 0)"},yk=function(n,i){var o=i||this,l=o.xPercent,c=o.yPercent,u=o.x,f=o.y,h=o.rotation,g=o.skewX,m=o.skewY,x=o.scaleX,S=o.scaleY,T=o.target,w=o.xOrigin,b=o.yOrigin,v=o.xOffset,D=o.yOffset,j=o.forceCSS,A=parseFloat(u),z=parseFloat(f),R,M,k,I,$;h=parseFloat(h),g=parseFloat(g),m=parseFloat(m),m&&(m=parseFloat(m),g+=m,h+=m),h||g?(h*=Yo,g*=Yo,R=Math.cos(h)*x,M=Math.sin(h)*x,k=Math.sin(h-g)*-S,I=Math.cos(h-g)*S,g&&(m*=Yo,$=Math.tan(g-m),$=Math.sqrt(1+$*$),k*=$,I*=$,m&&($=Math.tan(m),$=Math.sqrt(1+$*$),R*=$,M*=$)),R=Ut(R),M=Ut(M),k=Ut(k),I=Ut(I)):(R=x,I=S,M=k=0),(A&&!~(u+"").indexOf("px")||z&&!~(f+"").indexOf("px"))&&(A=mi(T,"x",u,"px"),z=mi(T,"y",f,"px")),(w||b||v||D)&&(A=Ut(A+w-(w*R+b*k)+v),z=Ut(z+b-(w*M+b*I)+D)),(l||c)&&($=T.getBBox(),A=Ut(A+l/100*$.width),z=Ut(z+c/100*$.height)),$="matrix("+R+","+M+","+k+","+I+","+A+","+z+")",T.setAttribute("transform",$),j&&(T.style[Ot]=$)},bk=function(n,i,o,l,c){var u=360,f=Jt(c),h=parseFloat(c)*(f&&~c.indexOf("rad")?Ii:1),g=h-l,m=l+g+"deg",x,S;return f&&(x=c.split("_")[1],x==="short"&&(g%=u,g!==g%(u/2)&&(g+=g<0?u:-u)),x==="cw"&&g<0?g=(g+u*Yy)%u-~~(g/u)*u:x==="ccw"&&g>0&&(g=(g-u*Yy)%u-~~(g/u)*u)),n._pt=S=new Dn(n._pt,i,o,l,g,tk),S.e=m,S.u="deg",n._props.push(o),S},Ky=function(n,i){for(var o in i)n[o]=i[o];return n},vk=function(n,i,o){var l=Ky({},o._gsap),c="perspective,force3D,transformOrigin,svgOrigin",u=o.style,f,h,g,m,x,S,T,w;l.svg?(g=o.getAttribute("transform"),o.setAttribute("transform",""),u[Ot]=i,f=As(o,1),gi(o,Ot),o.setAttribute("transform",g)):(g=getComputedStyle(o)[Ot],u[Ot]=i,f=As(o,1),u[Ot]=g);for(h in za)g=l[h],m=f[h],g!==m&&c.indexOf(h)<0&&(T=gn(g),w=gn(m),x=T!==w?mi(o,h,g,w):parseFloat(g),S=parseFloat(m),n._pt=new Dn(n._pt,f,h,x,S-x,zh),n._pt.u=w||0,n._props.push(h));Ky(f,l)};zn("padding,margin,Width,Radius",function(r,n){var i="Top",o="Right",l="Bottom",c="Left",u=(n<3?[i,o,l,c]:[i+c,i+o,l+o,l+c]).map(function(f){return n<2?r+f:"border"+f+r});$u[n>1?"border"+r:r]=function(f,h,g,m,x){var S,T;if(arguments.length<4)return S=u.map(function(w){return Oa(f,w,g)}),T=S.join(" "),T.split(S[0]).length===5?S[0]:T;S=(m+"").split(" "),T={},u.forEach(function(w,b){return T[w]=S[b]=S[b]||S[(b-1)/2|0]}),f.init(h,T,x)}});var yS={name:"css",register:Mh,targetTest:function(n){return n.style&&n.nodeType},init:function(n,i,o,l,c){var u=this._props,f=n.style,h=o.vars.startAt,g,m,x,S,T,w,b,v,D,j,A,z,R,M,k,I,$;E0||Mh(),this.styles=this.styles||dS(n),I=this.styles.props,this.tween=o;for(b in i)if(b!=="autoRound"&&(m=i[b],!(Vn[b]&&eS(b,i,o,l,n,c)))){if(T=typeof m,w=$u[b],T==="function"&&(m=m.call(o,l,n,c),T=typeof m),T==="string"&&~m.indexOf("random(")&&(m=Cs(m)),w)w(this,n,b,m,o)&&(k=1);else if(b.substr(0,2)==="--")g=(getComputedStyle(n).getPropertyValue(b)+"").trim(),m+="",pi.lastIndex=0,pi.test(g)||(v=gn(g),D=gn(m),D?v!==D&&(g=mi(n,b,g,D)+D):v&&(m+=v)),this.add(f,"setProperty",g,m,l,c,0,0,b),u.push(b),I.push(b,0,f[b]);else if(T!=="undefined"){if(h&&b in h?(g=typeof h[b]=="function"?h[b].call(o,l,n,c):h[b],Jt(g)&&~g.indexOf("random(")&&(g=Cs(g)),gn(g+"")||g==="auto"||(g+=Wn.units[b]||gn(Oa(n,b))||""),(g+"").charAt(1)==="="&&(g=Oa(n,b))):g=Oa(n,b),S=parseFloat(g),j=T==="string"&&m.charAt(1)==="="&&m.substr(0,2),j&&(m=m.substr(2)),x=parseFloat(m),b in ea&&(b==="autoAlpha"&&(S===1&&Oa(n,"visibility")==="hidden"&&x&&(S=0),I.push("visibility",0,f.visibility),ci(this,f,"visibility",S?"inherit":"hidden",x?"inherit":"hidden",!x)),b!=="scale"&&b!=="transform"&&(b=ea[b],~b.indexOf(",")&&(b=b.split(",")[0]))),A=b in za,A){if(this.styles.save(b),$=m,T==="string"&&m.substring(0,6)==="var(--"){if(m=Kn(n,m.substring(4,m.indexOf(")"))),m.substring(0,5)==="calc("){var te=n.style.perspective;n.style.perspective=m,m=Kn(n,"perspective"),te?n.style.perspective=te:gi(n,"perspective")}x=parseFloat(m)}if(z||(R=n._gsap,R.renderTransform&&!i.parseTransform||As(n,i.parseTransform),M=i.smoothOrigin!==!1&&R.smooth,z=this._pt=new Dn(this._pt,f,Ot,0,1,R.renderTransform,R,0,-1),z.dep=1),b==="scale")this._pt=new Dn(this._pt,R,"scaleY",R.scaleY,(j?Po(R.scaleY,j+x):x)-R.scaleY||0,zh),this._pt.u=0,u.push("scaleY",b),b+="X";else if(b==="transformOrigin"){I.push(Mn,0,f[Mn]),m=gk(m),R.svg?Nh(n,m,0,M,0,this):(D=parseFloat(m.split(" ")[2])||0,D!==R.zOrigin&&ci(this,R,"zOrigin",R.zOrigin,D),ci(this,f,b,Pu(g),Pu(m)));continue}else if(b==="svgOrigin"){Nh(n,m,1,M,0,this);continue}else if(b in gS){bk(this,R,b,S,j?Po(S,j+m):m);continue}else if(b==="smoothOrigin"){ci(this,R,"smooth",R.smooth,m);continue}else if(b==="force3D"){R[b]=m;continue}else if(b==="transform"){vk(this,m,n);continue}}else b in f||(b=Wo(b)||b);if(A||(x||x===0)&&(S||S===0)&&!ek.test(m)&&b in f)v=(g+"").substr((S+"").length),x||(x=0),D=gn(m)||(b in Wn.units?Wn.units[b]:v),v!==D&&(S=mi(n,b,g,D)),this._pt=new Dn(this._pt,A?R:f,b,S,(j?Po(S,j+x):x)-S,!A&&(D==="px"||b==="zIndex")&&i.autoRound!==!1?ak:zh),this._pt.u=D||0,A&&$!==m?(this._pt.b=g,this._pt.e=$,this._pt.r=rk):v!==D&&D!=="%"&&(this._pt.b=g,this._pt.r=nk);else if(b in f)hk.call(this,n,b,g,j?j+m:m);else if(b in n)this.add(n,b,g||n[b],j?j+m:m,l,c);else if(b!=="parseTransform"){g0(b,m);continue}A||(b in f?I.push(b,0,f[b]):typeof n[b]=="function"?I.push(b,2,n[b]()):I.push(b,1,g||n[b])),u.push(b)}}k&&oS(this)},render:function(n,i){if(i.tween._time||!C0())for(var o=i._pt;o;)o.r(n,o.d),o=o._next;else i.styles.revert()},get:Oa,aliases:ea,getSetter:function(n,i,o){var l=ea[i];return l&&l.indexOf(",")<0&&(i=l),i in za&&i!==Mn&&(n._gsap.x||Oa(n,"x"))?o&&qy===o?i==="scale"?sk:lk:(qy=o||{})&&(i==="scale"?ck:uk):n.style&&!f0(n.style[i])?ik:~i.indexOf("-")?ok:_0(n,i)},core:{_removeProperty:gi,_getMatrix:O0}};jn.utils.checkPrefix=Wo;jn.core.getStyleSaver=dS;(function(r,n,i,o){var l=zn(r+","+n+","+i,function(c){za[c]=1});zn(n,function(c){Wn.units[c]="deg",gS[c]=1}),ea[l[13]]=r+","+n,zn(o,function(c){var u=c.split(":");ea[u[1]]=l[u[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");zn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Wn.units[r]="px"});jn.registerPlugin(yS);var pn=jn.registerPlugin(yS)||jn;pn.core.Tween;function Sk(r,n){for(var i=0;i<n.length;i++){var o=n[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(r,o.key,o)}}function wk(r,n,i){return n&&Sk(r.prototype,n),r}var an,zu,Qn,ui,di,Go,bS,Bi,ms,vS,Ra,jr,SS,wS=function(){return an||typeof window<"u"&&(an=window.gsap)&&an.registerPlugin&&an},_S=1,Ho=[],wr=[],xs=[],ys=Date.now,jh=function(n,i){return i},_k=function(){var n=ms.core,i=n.bridge||{},o=n._scrollers,l=n._proxies;o.push.apply(o,wr),l.push.apply(l,xs),wr=o,xs=l,jh=function(u,f){return i[u](f)}},Tk=function(n,i){return~xs.indexOf(n)&&xs[xs.indexOf(n)+1][i]},bs=function(n){return!!~vS.indexOf(n)},vn=function(n,i,o,l,c){return n.addEventListener(i,o,{passive:l!==!1,capture:!!c})},bn=function(n,i,o,l){return n.removeEventListener(i,o,!!l)},cu="scrollLeft",uu="scrollTop",Uh=function(){return Ra&&Ra.isPressed||wr.cache++},qu=function(n,i){var o=function l(c){if(c||c===0){_S&&(Qn.history.scrollRestoration="manual");var u=Ra&&Ra.isPressed;c=l.v=Math.round(c)||(Ra&&Ra.iOS?1:0),n(c),l.cacheID=wr.cache,u&&jh("ss",c)}else(i||wr.cache!==l.cacheID||jh("ref"))&&(l.cacheID=wr.cache,l.v=n());return l.v+l.offset};return o.offset=0,n&&o},Yu={s:cu,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:qu(function(r){return arguments.length?Qn.scrollTo(r,dd.sc()):Qn.pageXOffset||ui[cu]||di[cu]||Go[cu]||0})},dd={s:uu,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Yu,sc:qu(function(r){return arguments.length?Qn.scrollTo(Yu.sc(),r):Qn.pageYOffset||ui[uu]||di[uu]||Go[uu]||0})},Ek=function(n,i){return(i&&i._ctx&&i._ctx.selector||an.utils.toArray)(n)[0]||(typeof n=="string"&&an.config().nullTargetWarn!==!1?console.warn("Element not found:",n):null)},Ck=function(n,i){for(var o=i.length;o--;)if(i[o]===n||i[o].contains(n))return!0;return!1},Jy=function(n,i){var o=i.s,l=i.sc;bs(n)&&(n=ui.scrollingElement||di);var c=wr.indexOf(n),u=l===dd.sc?1:2;!~c&&(c=wr.push(n)-1),wr[c+u]||vn(n,"scroll",Uh);var f=wr[c+u],h=f||(wr[c+u]=qu(Tk(n,o),!0)||(bs(n)?l:qu(function(g){return arguments.length?n[o]=g:n[o]})));return h.target=n,f||(h.smooth=an.getProperty(n,"scrollBehavior")==="smooth"),h},Wy=function(n,i,o){var l=n,c=n,u=ys(),f=u,h=i,g=Math.max(500,h*3),m=function(w,b){var v=ys();b||v-u>h?(c=l,l=w,f=u,u=v):l+=w},x=function(){c=l=0,f=u=0},S=function(w){var b=f,v=c,D=ys();return(w||w===0)&&w!==l&&m(w),u===f||D-f>g?0:(l+v)/(D-b)*1e3};return{update:m,reset:x,getVelocity:S}},rs=function(n,i){return i&&!n._gsapAllow&&n.preventDefault(),n.changedTouches?n.changedTouches[0]:n},eb=function(n){var i=Math.max.apply(Math,n),o=Math.min.apply(Math,n);return Math.abs(i)>=Math.abs(o)?i:o},TS=function(){ms=an.core.globals().ScrollTrigger,ms&&ms.core&&_k()},ES=function(n){return an=n||wS(),!zu&&an&&typeof document<"u"&&document.body&&(Qn=window,ui=document,di=ui.documentElement,Go=ui.body,vS=[Qn,ui,di,Go],an.utils.clamp,SS=an.core.context||function(){},Bi="onpointerenter"in Go?"pointer":"mouse",bS=Ur.isTouch=Qn.matchMedia&&Qn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Qn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,jr=Ur.eventTypes=("ontouchstart"in di?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in di?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return _S=0},500),TS(),zu=1),zu};Yu.op=dd;wr.cache=0;var Ur=(function(){function r(i){this.init(i)}var n=r.prototype;return n.init=function(o){zu||ES(an)||console.warn("Please gsap.registerPlugin(Observer)"),ms||TS();var l=o.tolerance,c=o.dragMinimum,u=o.type,f=o.target,h=o.lineHeight,g=o.debounce,m=o.preventDefault,x=o.onStop,S=o.onStopDelay,T=o.ignore,w=o.wheelSpeed,b=o.event,v=o.onDragStart,D=o.onDragEnd,j=o.onDrag,A=o.onPress,z=o.onRelease,R=o.onRight,M=o.onLeft,k=o.onUp,I=o.onDown,$=o.onChangeX,te=o.onChangeY,re=o.onChange,le=o.onToggleX,ye=o.onToggleY,Se=o.onHover,we=o.onHoverEnd,U=o.onMove,H=o.ignoreCheck,X=o.isNormalizer,ue=o.onGestureStart,pe=o.onGestureEnd,N=o.onWheel,Y=o.onEnable,K=o.onDisable,oe=o.onClick,ve=o.scrollSpeed,de=o.capture,_e=o.allowClicks,be=o.lockAxis,ke=o.onLockAxis;this.target=f=Ek(f)||di,this.vars=o,T&&(T=an.utils.toArray(T)),l=l||1e-9,c=c||0,w=w||1,ve=ve||1,u=u||"wheel,touch,pointer",g=g!==!1,h||(h=parseFloat(Qn.getComputedStyle(Go).lineHeight)||22);var Be,ze,Ue,at,ct,ut,ht,ne=this,Tt=0,At=0,gt=o.passive||!m&&o.passive!==!1,mt=Jy(f,Yu),tt=Jy(f,dd),Qt=mt(),Fe=tt(),ar=~u.indexOf("touch")&&!~u.indexOf("pointer")&&jr[0]==="pointerdown",wn=bs(f),xt=f.ownerDocument||ui,sn=[0,0,0],Un=[0,0,0],ia=0,Cr=function(){return ia=ys()},In=function(me,xe){return(ne.event=me)&&T&&Ck(me.target,T)||xe&&ar&&me.pointerType!=="touch"||H&&H(me,xe)},kr=function(){ne._vx.reset(),ne._vy.reset(),ze.pause(),x&&x(ne)},Et=function(){var me=ne.deltaX=eb(sn),xe=ne.deltaY=eb(Un),He=Math.abs(me)>=l,Q=Math.abs(xe)>=l;re&&(He||Q)&&re(ne,me,xe,sn,Un),He&&(R&&ne.deltaX>0&&R(ne),M&&ne.deltaX<0&&M(ne),$&&$(ne),le&&ne.deltaX<0!=Tt<0&&le(ne),Tt=ne.deltaX,sn[0]=sn[1]=sn[2]=0),Q&&(I&&ne.deltaY>0&&I(ne),k&&ne.deltaY<0&&k(ne),te&&te(ne),ye&&ne.deltaY<0!=At<0&&ye(ne),At=ne.deltaY,Un[0]=Un[1]=Un[2]=0),(at||Ue)&&(U&&U(ne),Ue&&(v&&Ue===1&&v(ne),j&&j(ne),Ue=0),at=!1),ut&&!(ut=!1)&&ke&&ke(ne),ct&&(N(ne),ct=!1),Be=0},xn=function(me,xe,He){sn[He]+=me,Un[He]+=xe,ne._vx.update(me),ne._vy.update(xe),g?Be||(Be=requestAnimationFrame(Et)):Et()},Bt=function(me,xe){be&&!ht&&(ne.axis=ht=Math.abs(me)>Math.abs(xe)?"x":"y",ut=!0),ht!=="y"&&(sn[2]+=me,ne._vx.update(me,!0)),ht!=="x"&&(Un[2]+=xe,ne._vy.update(xe,!0)),g?Be||(Be=requestAnimationFrame(Et)):Et()},oa=function(me){if(!In(me,1)){me=rs(me,m);var xe=me.clientX,He=me.clientY,Q=xe-ne.x,ce=He-ne.y,he=ne.isDragging;ne.x=xe,ne.y=He,(he||(Q||ce)&&(Math.abs(ne.startX-xe)>=c||Math.abs(ne.startY-He)>=c))&&(Ue||(Ue=he?2:1),he||(ne.isDragging=!0),Bt(Q,ce))}},la=ne.onPress=function(ge){In(ge,1)||ge&&ge.button||(ne.axis=ht=null,ze.pause(),ne.isPressed=!0,ge=rs(ge),Tt=At=0,ne.startX=ne.x=ge.clientX,ne.startY=ne.y=ge.clientY,ne._vx.reset(),ne._vy.reset(),vn(X?f:xt,jr[1],oa,gt,!0),ne.deltaX=ne.deltaY=0,A&&A(ne))},$r=ne.onRelease=function(ge){if(!In(ge,1)){bn(X?f:xt,jr[1],oa,!0);var me=!isNaN(ne.y-ne.startY),xe=ne.isDragging,He=xe&&(Math.abs(ne.x-ne.startX)>3||Math.abs(ne.y-ne.startY)>3),Q=rs(ge);!He&&me&&(ne._vx.reset(),ne._vy.reset(),m&&_e&&an.delayedCall(.08,function(){if(ys()-ia>300&&!ge.defaultPrevented){if(ge.target.click)ge.target.click();else if(xt.createEvent){var ce=xt.createEvent("MouseEvents");ce.initMouseEvent("click",!0,!0,Qn,1,Q.screenX,Q.screenY,Q.clientX,Q.clientY,!1,!1,!1,!1,0,null),ge.target.dispatchEvent(ce)}}})),ne.isDragging=ne.isGesturing=ne.isPressed=!1,x&&xe&&!X&&ze.restart(!0),Ue&&Et(),D&&xe&&D(ne),z&&z(ne,He)}},Or=function(me){return me.touches&&me.touches.length>1&&(ne.isGesturing=!0)&&ue(me,ne.isDragging)},Rr=function(){return(ne.isGesturing=!1)||pe(ne)},Ar=function(me){if(!In(me)){var xe=mt(),He=tt();xn((xe-Qt)*ve,(He-Fe)*ve,1),Qt=xe,Fe=He,x&&ze.restart(!0)}},cn=function(me){if(!In(me)){me=rs(me,m),N&&(ct=!0);var xe=(me.deltaMode===1?h:me.deltaMode===2?Qn.innerHeight:1)*w;xn(me.deltaX*xe,me.deltaY*xe,0),x&&!X&&ze.restart(!0)}},Lr=function(me){if(!In(me)){var xe=me.clientX,He=me.clientY,Q=xe-ne.x,ce=He-ne.y;ne.x=xe,ne.y=He,at=!0,x&&ze.restart(!0),(Q||ce)&&Bt(Q,ce)}},ir=function(me){ne.event=me,Se(ne)},Na=function(me){ne.event=me,we(ne)},fe=function(me){return In(me)||rs(me,m)&&oe(ne)};ze=ne._dc=an.delayedCall(S||.25,kr).pause(),ne.deltaX=ne.deltaY=0,ne._vx=Wy(0,50),ne._vy=Wy(0,50),ne.scrollX=mt,ne.scrollY=tt,ne.isDragging=ne.isGesturing=ne.isPressed=!1,SS(this),ne.enable=function(ge){return ne.isEnabled||(vn(wn?xt:f,"scroll",Uh),u.indexOf("scroll")>=0&&vn(wn?xt:f,"scroll",Ar,gt,de),u.indexOf("wheel")>=0&&vn(f,"wheel",cn,gt,de),(u.indexOf("touch")>=0&&bS||u.indexOf("pointer")>=0)&&(vn(f,jr[0],la,gt,de),vn(xt,jr[2],$r),vn(xt,jr[3],$r),_e&&vn(f,"click",Cr,!0,!0),oe&&vn(f,"click",fe),ue&&vn(xt,"gesturestart",Or),pe&&vn(xt,"gestureend",Rr),Se&&vn(f,Bi+"enter",ir),we&&vn(f,Bi+"leave",Na),U&&vn(f,Bi+"move",Lr)),ne.isEnabled=!0,ne.isDragging=ne.isGesturing=ne.isPressed=at=Ue=!1,ne._vx.reset(),ne._vy.reset(),Qt=mt(),Fe=tt(),ge&&ge.type&&la(ge),Y&&Y(ne)),ne},ne.disable=function(){ne.isEnabled&&(Ho.filter(function(ge){return ge!==ne&&bs(ge.target)}).length||bn(wn?xt:f,"scroll",Uh),ne.isPressed&&(ne._vx.reset(),ne._vy.reset(),bn(X?f:xt,jr[1],oa,!0)),bn(wn?xt:f,"scroll",Ar,de),bn(f,"wheel",cn,de),bn(f,jr[0],la,de),bn(xt,jr[2],$r),bn(xt,jr[3],$r),bn(f,"click",Cr,!0),bn(f,"click",fe),bn(xt,"gesturestart",Or),bn(xt,"gestureend",Rr),bn(f,Bi+"enter",ir),bn(f,Bi+"leave",Na),bn(f,Bi+"move",Lr),ne.isEnabled=ne.isPressed=ne.isDragging=!1,K&&K(ne))},ne.kill=ne.revert=function(){ne.disable();var ge=Ho.indexOf(ne);ge>=0&&Ho.splice(ge,1),Ra===ne&&(Ra=0)},Ho.push(ne),X&&bs(f)&&(Ra=ne),ne.enable(b)},wk(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();Ur.version="3.14.2";Ur.create=function(r){return new Ur(r)};Ur.register=ES;Ur.getAll=function(){return Ho.slice()};Ur.getById=function(r){return Ho.filter(function(n){return n.vars.id===r})[0]};wS()&&an.registerPlugin(Ur);const kk="/demos/onwear/assets/pants-Bam4WPuX.svg",Da=async r=>(await Rt.get(`/products/detail/${r}`)).data,Ls=async r=>(await Rt.post(`/products/likes/${r}`)).data,fd=async()=>(await Rt.get("/my/likes")).data.data,Jr=r=>ol.post("/user/save",r);pn.registerPlugin(Ur);const Ok=P.div`
  position: absolute;
  top: 8px;
  left: 8px;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 50%;
  backdrop-filter: blur(4px);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  z-index: 20;

  svg,
  img {
    width: 16px;
    height: 16px;
    color: #333;
  }

  @media (max-width: 768px) {
    width: 20px;
    height: 20px;
    top: 6px;
    left: 6px;

    svg,
    img {
      width: 14px;
      height: 14px;
    }
  }
`,Rk=({checked:r,onChange:n})=>{const i=_.useId();return E.jsxs(E.Fragment,{children:[E.jsx(nO,{type:"checkbox",id:i,checked:r,onChange:n}),E.jsx(rO,{htmlFor:i,$checked:r,children:E.jsxs(aO,{width:"18px",height:"18px",viewBox:"0 0 18 18",children:[E.jsx(iO,{d:"M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z",$checked:r}),E.jsx(oO,{points:"1 9 7 14 15 4",$checked:r})]})})]})},Ak=({items:r,activeTab:n,activeCategory:i,className:o,isLoading:l=!1,error:c=null,onRetry:u,isSelectionMode:f=!1,selectedItems:h={},onItemSelect:g,onTryOn:m,isTryingOn:x=!1,onDetailClick:S,rawWishlistData:T=[],rawCoordinationData:w=[],isDeleteMode:b=!1,selectedCodiIds:v=[],onCodiSelect:D,currentTryOnItems:j})=>{const A=_.useRef(null),z=_.useRef(null),[R,M]=_.useState(1),[k,I]=_.useState(!1),[$,te]=_.useState(!1),re=_.useRef(null),le=_.useRef(1),ye=_.useRef(1),Se=_.useRef(!1),[we,U]=_.useState(()=>typeof window<"u"?window.innerWidth>=1200||window.innerWidth>=768?8:4:8);_.useEffect(()=>{const de=()=>{if(!A.current)return 8;const Be=A.current.getBoundingClientRect(),ze=Be.height,Ue=Be.width,at=window.innerWidth;if(ze===0||Ue===0)return at>=1200||at>=768?8:4;const ut=ze-20*2,ht=12,Tt=(Ue-ht*3)/4*4/3,At=Math.floor((ut+ht)/(Tt+ht));let gt=Math.max(1,At);at>=1200?gt=Math.min(Math.max(gt,2),4):at>=768?gt=Math.min(Math.max(gt,2),3):gt=Math.min(Math.max(gt,1),2);const mt=gt*4;return at>=768&&mt<4?4:mt},_e=()=>{U(de())},be=setTimeout(_e,100),ke=()=>{setTimeout(_e,50)};return window.addEventListener("resize",ke),()=>{clearTimeout(be),window.removeEventListener("resize",ke)}},[n]),_.useEffect(()=>{const _e=setTimeout(()=>{if(!A.current)return;const be=A.current.getBoundingClientRect(),ke=be.height,Be=be.width,ze=window.innerWidth;if(ke===0||Be===0){ze>=1200||ze>=768?U(8):U(4);return}const at=ke-20*2,ct=12,ht=(Be-ct*3)/4*4/3,ne=Math.floor((at+ct)/(ht+ct));let Tt=Math.max(1,ne);ze>=1200?Tt=Math.min(Math.max(Tt,2),4):ze>=768?Tt=Math.min(Math.max(Tt,2),3):Tt=Math.min(Math.max(Tt,1),2);const At=Tt*4;if(ze>=768&&At<4){U(4);return}U(At)},100);return()=>clearTimeout(_e)},[n]);const[H,X]=_.useState({}),ue=_.useCallback((de,_e)=>{X(be=>({...be,[de]:_e}))},[]),pe=_.useCallback(de=>{X(_e=>({..._e,[de]:null}))},[]),N=_.useMemo(()=>i==="Total"?r:r.filter(de=>i==="Upper"?de.type==="top":i==="Lower"?de.type==="bottom":!1),[r,i]),Y=_.useMemo(()=>{const de=[],_e=N.length,be=Math.min(Math.ceil(_e/we)||1,10);for(let ke=0;ke<be;ke++){const Be=ke*we,ze=Be+we,Ue=N.slice(Be,ze);Ue.length>0?de.push(Ue):ke===0&&N.length===0&&de.push([])}return de},[N,we]),K=Y.length||1;_.useEffect(()=>{le.current=R},[R]),_.useEffect(()=>{ye.current=K},[K]),_.useEffect(()=>{Se.current=k},[k]);const oe=_.useCallback(()=>{const de=z.current;de&&(re.current&&clearTimeout(re.current),pn.fromTo(de,{autoAlpha:0,y:20,scale:.9},{autoAlpha:1,y:0,scale:1,duration:.4,ease:"back.out(1.7)"}),re.current=setTimeout(()=>{pn.to(de,{autoAlpha:0,y:10,scale:.95,duration:.3,ease:"power2.inOut"})},2e3))},[]),ve=_.useCallback(de=>{if(k||de===R)return;const _e=R;I(!0),M(de),oe();const be=A.current;if(!be)return;be.querySelectorAll(".page-section").forEach((ze,Ue)=>{Ue===_e-1&&pn.to(ze,{autoAlpha:0,duration:.5,ease:"power2.inOut"})});const Be=be.querySelector(`.page-section:nth-child(${de})`);Be?pn.fromTo(Be,{autoAlpha:0,y:50},{autoAlpha:1,y:0,duration:.8,ease:"power2.out",delay:.2,onComplete:()=>{I(!1)}}):(console.warn(`Page ${de} not found, resetting animation state`),I(!1))},[k,R,oe]);return _.useEffect(()=>{if(!$||K<=1||!A.current)return;const de=A.current,_e=setTimeout(()=>{const be=Ur.create({target:de,type:"wheel,touch,pointer",wheelSpeed:-1,onDown:()=>{if(Se.current||ye.current<=1)return;const ke=le.current<=1?ye.current:le.current-1;if(Se.current||ke===le.current)return;const Be=le.current;Se.current=!0,le.current=ke,M(ke),I(!0),de.querySelectorAll(".page-section").forEach((at,ct)=>{ct===Be-1&&pn.to(at,{autoAlpha:0,duration:.5,ease:"power2.inOut"})});const Ue=de.querySelector(`.page-section:nth-child(${ke})`);Ue?pn.fromTo(Ue,{autoAlpha:0,y:50},{autoAlpha:1,y:0,duration:.8,ease:"power2.out",delay:.2,onComplete:()=>{Se.current=!1,I(!1)}}):(Se.current=!1,I(!1))},onUp:()=>{if(Se.current||ye.current<=1)return;const ke=le.current>=ye.current?1:le.current+1;if(Se.current||ke===le.current)return;const Be=le.current;Se.current=!0,le.current=ke,M(ke),I(!0),de.querySelectorAll(".page-section").forEach((at,ct)=>{ct===Be-1&&pn.to(at,{autoAlpha:0,duration:.5,ease:"power2.inOut"})});const Ue=de.querySelector(`.page-section:nth-child(${ke})`);Ue?pn.fromTo(Ue,{autoAlpha:0,y:50},{autoAlpha:1,y:0,duration:.8,ease:"power2.out",delay:.2,onComplete:()=>{Se.current=!1,I(!1)}}):(Se.current=!1,I(!1))},tolerance:10,preventDefault:!0});return()=>be.kill()},200);return()=>clearTimeout(_e)},[$,K]),_.useEffect(()=>{const de=A.current;if(!de)return;de.querySelectorAll(".page-section").forEach((ke,Be)=>{pn.set(ke,{autoAlpha:Be===0?1:0,y:0})}),M(1);const be=setTimeout(()=>{te(!0)},300);return()=>clearTimeout(be)},[Y]),_.useEffect(()=>{if(K>0){te(!1),M(1);const de=A.current;de&&(de.querySelectorAll(".page-section").forEach((be,ke)=>{pn.set(be,{autoAlpha:ke===0?1:0,y:0})}),setTimeout(()=>{te(!0),oe()},300))}},[n,i,K,oe]),_.useEffect(()=>{const de=z.current;if(de){pn.set(de,{autoAlpha:0,y:20,scale:.9});const _e=setTimeout(()=>{oe()},500);return()=>clearTimeout(_e)}},[oe]),_.useEffect(()=>()=>{re.current&&clearTimeout(re.current)},[]),l?E.jsxs(Yk,{children:[E.jsx(Gk,{}),E.jsx(Xk,{children:"찜목록을 불러오는 중..."})]}):c?E.jsxs(Vk,{children:[E.jsx(Fk,{children:c}),u&&E.jsx(Qk,{onClick:u,children:"다시 시도"})]}):N.length===0?E.jsxs($k,{children:[E.jsx(Pk,{children:n==="wishlist"?"찜 목록이 비어있습니다":"내 코디 목록이 비어있습니다"}),E.jsx(qk,{children:"아이템을 추가해보세요!"})]}):E.jsxs(Lk,{className:o,ref:A,children:[Y.map((de,_e)=>E.jsx(zk,{className:"page-section",children:E.jsx(Dk,{children:de.map((be,ke)=>{const ze="coordinationId"in be&&be.coordinationId!==void 0?be:null,Ue=`${be.id}-${_e}-${ke}`,at=H[Ue],ct=ze?.upperImage,ut=ze?.lowerImage,ht=n==="wishlist"&&f||n==="mycodi"&&b,ne=()=>{ht&&(n==="wishlist"?g?.(be.id,be.type):ze?.coordinationId!==void 0&&D?.(ze.coordinationId))},Tt=ht&&(n==="wishlist"?be.type==="top"&&h.upperId===be.id||be.type==="bottom"&&h.lowerId===be.id:ze?.coordinationId!==void 0&&v.includes(ze.coordinationId)),At=j&&(be.type==="top"&&j.upperId===be.id||be.type==="bottom"&&j.lowerId===be.id);return E.jsxs(Mk,{className:"clothing-item-card",onClick:ht?ne:void 0,$isCheckboxMode:ht,$isTryingOn:At,$isCodiCard:n==="mycodi",children:[ht&&E.jsx(tO,{onClick:gt=>{gt.stopPropagation()},children:E.jsx(Rk,{checked:n==="wishlist"?be.type==="top"&&h.upperId===be.id||be.type==="bottom"&&h.lowerId===be.id:ze?.coordinationId!==void 0&&v.includes(ze.coordinationId),onChange:()=>{n==="wishlist"?g?.(be.id,be.type):ze?.coordinationId!==void 0&&D?.(ze.coordinationId)}})}),ze?.isFullCoordination?E.jsxs(Nk,{className:"clothing-image","data-image-container":"split",$isFullCoordination:!0,children:[E.jsx(CS,{$imageUrl:ct,$isSelected:Tt}),E.jsx(kS,{$imageUrl:ut,$isSelected:Tt}),E.jsx(Bk,{$isVisible:at==="try-on"}),E.jsx(Hk,{$isVisible:at==="detail"})]}):E.jsxs(Ik,{className:"clothing-image","data-image-container":"single",$imageUrl:be.image,$isSelected:Tt,children:[E.jsx(tb,{$isVisible:at==="try-on",$area:"upper"}),E.jsx(tb,{$isVisible:at==="detail",$area:"lower"}),n==="wishlist"&&i==="Total"&&E.jsx(Ok,{children:be.type==="top"?E.jsx(u2,{}):be.type==="bottom"?E.jsx("img",{src:kk,alt:"pants"}):null})]}),!ht&&E.jsxs(cO,{"data-hover-overlay":!0,children:[E.jsx(lO,{onMouseEnter:()=>ue(Ue,"try-on"),onMouseLeave:()=>pe(Ue),children:E.jsx(uO,{"data-try-on-button":!0,onClick:gt=>{gt.stopPropagation(),m&&!x&&m(be.id,be.type)},disabled:x,children:x?"AI 처리중...":"시착하기"})}),E.jsx(sO,{onMouseEnter:()=>ue(Ue,"detail"),onMouseLeave:()=>pe(Ue),children:E.jsx(dO,{"data-detail-button":!0,onClick:async gt=>{gt.stopPropagation();let mt;if(n==="wishlist")try{const tt=await Da(be.id);if(tt.success&&tt.data)mt={productId:tt.data.productId,productBrand:tt.data.productBrand,productName:tt.data.productName,productPrice:tt.data.productPrice,productUrl:tt.data.productUrl,productImageUrl:tt.data.productImageUrl,styleList:tt.data.styleList,liked:tt.data.isLiked};else{const Qt=T.find(Fe=>Fe.productId===be.id);mt={productId:be.id,productBrand:"Unknown Brand",productName:"Unknown Item",productPrice:0,productUrl:"",productImageUrl:Qt?.productImageUrl||be.image,styleList:[],liked:!0}}}catch(tt){console.error("상품 상세 정보 조회 실패:",tt);const Qt=T.find(Fe=>Fe.productId===be.id);mt={productId:be.id,productBrand:"Unknown Brand",productName:"Unknown Item",productPrice:0,productUrl:"",productImageUrl:Qt?.productImageUrl||be.image,styleList:[],liked:!0}}else{const tt=be,Qt=tt.coordinationId,Fe=w.find(ar=>ar.coordinationId===Qt);mt={productId:Qt?.toString()||be.id,productBrand:"Unknown Brand",productName:tt.isFullCoordination?"Full Coordination":"Single Item",productPrice:0,productUrl:"",productImageUrl:Fe?.upperImageUrl||Fe?.lowerImageUrl||be.image,styleList:[],liked:!1}}S?.(mt)},children:"상세 페이지"})})]})]},Ue)})})},`page-${_e}-${n}-${i}`)),K>1&&E.jsx(Zk,{children:Array.from({length:K},(de,_e)=>E.jsx(Kk,{$isActive:R===_e+1,onClick:()=>ve(_e+1),disabled:k},_e+1))}),E.jsxs(Jk,{ref:z,children:[E.jsxs(Wk,{children:[R," / ",K," 페이지"]}),E.jsxs(eO,{children:["총 ",N.length,"개 상품"]})]})]})},Lk=P.div`
  position: relative;
  width: 100%;
  height: 100%; /* GridContainer의 동적 크기를 따라가도록 변경 */
  overflow: hidden; /* 넘침 방지 */
  background: transparent;
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center; /* 상품 카드들을 수직으로 중앙정렬 */
  box-sizing: border-box; /* 크기 계산 일관성 유지 */

  /* 모든 화면 크기에서 동적 높이 사용 */
  @media (min-width: 1440px) {
    height: 100%; /* GridContainer 크기에 맞춰 동적 조정 */
    min-height: 300px; /* 최소 높이만 유지 */
  }

  @media (min-width: 1200px) and (max-width: 1439px) {
    height: 100%; /* GridContainer 크기에 맞춰 동적 조정 */
    min-height: 250px; /* 최소 높이만 유지 */
  }

  /* 반응형 높이 조정 */
  @media (max-width: 768px) {
    height: 100%; /* GridContainer 크기에 맞춰 동적 조정 */
    min-height: 200px; /* 최소 높이만 유지 */
    padding-right: 15px; /* 모바일에서 더 작은 여백 */
  }

  @media (max-width: 480px) {
    height: 100%; /* GridContainer 크기에 맞춰 동적 조정 */
    min-height: 150px; /* 최소 높이만 유지 */
    padding-right: 12px; /* 작은 화면에서 최소 여백 */
  }
`,zk=P.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start; /* ProductGrid를 상단에 위치하여 공백 문제 해결 */
  justify-content: center; /* ProductGrid를 수평 중앙에 위치 */
  flex-direction: column; /* 세로 방향으로 배치하여 자연스러운 높이 계산 */
  opacity: 0;
  visibility: hidden;
  box-sizing: border-box; /* 패딩을 전체 크기에 포함하여 크기 불일치 해결 */

  /* 대형 디스플레이 */
  @media (min-width: 1440px) {
    padding: 18px; /* 공백 감소 (24px → 18px) */
  }

  @media (min-width: 1200px) and (max-width: 1439px) {
    padding: 16px; /* 공백 감소 (22px → 16px) */
  }

  /* 반응형 패딩 조정 */
  @media (max-width: 768px) {
    padding: 12px; /* 공백 감소 (16px → 12px) */
  }

  @media (max-width: 480px) {
    padding: 8px; /* 공백 감소 (12px → 8px) */
  }
`,Dk=P.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px; /* 공백 감소를 위해 gap 축소 (18px → 12px) */
  max-width: 1450px; /* 그리드 최대 너비 추가 확장 (1400px → 1450px) */
  width: 100%;
  /* height: 100% 제거 - 카드들이 자연스러운 비율을 유지할 수 있도록 함 */
  align-items: start; /* stretch에서 start로 변경 - 카드가 강제로 늘어나지 않도록 함 */
  justify-items: center;
  justify-content: space-between; /* 공간 효율적 활용 */
  isolation: isolate;
  margin: 0 auto; /* 중앙 정렬 */
  box-sizing: border-box; /* 크기 계산 일관성 보장 */
  /* min-height: 100% 제거 - aspect-ratio가 우선되도록 함 */

  /* 대형 디스플레이에서 최적화된 레이아웃 */
  @media (min-width: 1401px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 14px; /* 공백 감소 (20px → 14px) */
    padding: 0px 10px 0px 0; /* 충분한 우측 여백 유지 */
  }

  @media (min-width: 1200px) and (max-width: 1400px) {
    gap: 12px; /* 공백 감소 (16px → 12px) */
    padding: 0px 10px 0px 0; /* 축소된 사이드바에 맞춰 적절한 여백 (28px → 35px) */
    max-width: 1350px; /* 중간 크기 화면에서 적절한 너비 */
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 10px; /* 공백 감소 (16px → 10px) */
    padding: 0px 10px 0px 0; /* 태블릿에서 적절한 여백 (25px → 30px) */
    max-width: 1200px;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 8px; /* 공백 감소 (14px → 8px) */
    padding: 0px 10px 0px 0; /* 모바일에서 적절한 여백 (20px → 25px) */
    max-width: 100%;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 6px; /* 공백 감소 (12px → 6px) */
    padding: 0px 10px 0px 0; /* 작은 화면에서 적절한 여백 (18px → 22px) */
    max-width: 100%;
  }
`,Mk=P.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  cursor: ${({$isCheckboxMode:r})=>r?"pointer":"default"};
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  background: #f8f8f8;
  box-shadow: ${({$isTryingOn:r})=>r?"0 0 0 3px #072bed, 0 8px 25px rgba(7, 43, 237, 0.3)":"0 2px 8px rgba(0, 0, 0, 0.06)"};
  margin: 0 auto;
  border: ${({$isTryingOn:r})=>r?"2px solid #072bed":"none"};

  /* 모든 카드를 정확한 3:4 비율로 통일 */
  aspect-ratio: 3 / 4 !important; /* 가로:세로 = 3:4 비율 강제 적용 */
  height: auto !important; /* aspect-ratio에 의해 높이가 자동 계산되도록 강제 설정 */
  min-height: unset !important; /* 부모에서 오는 min-height 제약 제거 */
  max-height: unset !important; /* 부모에서 오는 max-height 제약 제거 */

  &:hover {
    transform: scale(1.03) translateY(-2px);
    box-shadow: ${({$isTryingOn:r})=>r?"0 0 0 3px #072bed, 0 12px 35px rgba(7, 43, 237, 0.4)":"0 8px 25px rgba(0, 0, 0, 0.12)"};
  }

  /* 카드 호버 시 버튼 오버레이 표시 */
  &:hover [data-hover-overlay] {
    opacity: 1;
    visibility: visible;
  }
`,Nk=P.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: filter 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: filter;
`,jk=P.div`
  width: 100%;
  height: 50%;
  background: linear-gradient(135deg, #e8e8e8 0%, #d0d0d0 100%);
  background-image: ${r=>r.$imageUrl?`url(${r.$imageUrl})`:"none"};
  background-repeat: no-repeat;
  background-size: contain; /* 이미지 전체가 보이도록 contain 사용 */
  background-position: center top; /* 상의 이미지는 상단 중앙 정렬로 최적화 */
  position: relative;
  filter: ${r=>r.$isSelected?"grayscale(100%) brightness(0.15)":"none"};
  transition: filter 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: rgba(255, 255, 255, 0.3);
  }
`,Uk=P.div`
  width: 100%;
  height: 50%;
  background: linear-gradient(135deg, #e8e8e8 0%, #d0d0d0 100%);
  background-image: ${r=>r.$imageUrl?`url(${r.$imageUrl})`:"none"};
  background-repeat: no-repeat;
  background-size: contain; /* 이미지 전체가 보이도록 contain 사용 */
  background-position: center bottom; /* 하의 이미지는 하단 중앙 정렬로 최적화 */
  filter: ${r=>r.$isSelected?"grayscale(100%) brightness(0.15)":"none"};
  transition: filter 0.3s cubic-bezier(0.4, 0, 0.2, 1);
`,Ik=P.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #e8e8e8 0%, #d0d0d0 100%);
  background-image: ${r=>r.$imageUrl?`url(${r.$imageUrl})`:"none"};
  background-repeat: no-repeat;
  background-size: cover; /* 카드 전체를 덮도록 cover 사용 */
  background-position: center; /* 중앙 정렬 */
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  filter: ${r=>r.$isSelected?"grayscale(100%) brightness(0.15)":"none"};

  &:hover {
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  }
`,tb=P.div`
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  height: 50%;
  background: rgba(0, 0, 0, 0.7);
  opacity: ${r=>r.$isVisible?1:0};
  transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  pointer-events: none;
  z-index: 10;

  ${r=>r.$area==="upper"&&`
    top: 0;
  `}

  ${r=>r.$area==="lower"&&`
    bottom: 0;
  `}
`,Bk=P.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 50%;
  background: rgba(0, 0, 0, 0.7);
  opacity: ${r=>r.$isVisible?1:0};
  transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  pointer-events: none;
  z-index: 15; /* 이미지 위에, 버튼 아래에 위치 */
  backdrop-filter: grayscale(100%) brightness(0.3);
  -webkit-backdrop-filter: grayscale(100%) brightness(0.3);
`,Hk=P.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 50%;
  background: rgba(0, 0, 0, 0.7);
  opacity: ${r=>r.$isVisible?1:0};
  transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  pointer-events: none;
  z-index: 15; /* 이미지 위에, 버튼 아래에 위치 */
  backdrop-filter: grayscale(100%) brightness(0.3);
  -webkit-backdrop-filter: grayscale(100%) brightness(0.3);
`,$k=P.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 40px 20px;
  text-align: center;
`,Pk=P.div`
  font-family: 'NanumSquare', sans-serif;
  font-size: 18px;
  font-weight: 600;
  color: #666;
  margin-bottom: 8px;
`,qk=P.div`
  font-family: 'NanumSquare', sans-serif;
  font-size: 14px;
  color: #999;
`,Yk=P.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 40px 20px;
  text-align: center;
`,Gk=P.div`
  width: 40px;
  height: 40px;
  border: 3px solid #f3f3f3;
  border-top: 3px solid #007bff;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 16px;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`,Xk=P.div`
  font-family: 'NanumSquare', sans-serif;
  font-size: 16px;
  color: #666;
`,Vk=P.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 40px 20px;
  text-align: center;
`,Fk=P.div`
  font-family: 'NanumSquare', sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: #d32f2f;
  margin-bottom: 16px;
  line-height: 1.5;
`,Qk=P.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  font-family: 'NanumSquare', sans-serif;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0056b3;
  }

  &:active {
    transform: translateY(1px);
  }
`,Zk=P.div`
  position: absolute;
  right: 8px; /* 더 오른쪽으로 이동 */
  top: 50%;
  transform: translateY(-50%); /* Y축만 중앙 정렬 */
  display: flex;
  flex-direction: column;
  gap: 8px; /* 간격 축소 (10px → 8px) */
  padding: 12px 5px;
  background: linear-gradient(
    135deg,
    rgba(45, 52, 64, 0.95) 0%,
    rgba(32, 38, 48, 0.95) 100%
  );
  border-radius: 18px; /* 반지름 축소 (24px → 18px) */
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  z-index: 1000; /* z-index를 더 높게 설정 */
  opacity: 1;
  visibility: visible;
  width: 16px; /* 폭을 절반으로 축소 (32px → 16px) */

  @media (max-width: 768px) {
    right: 6px; /* 더 오른쪽으로 이동 */
    transform: translateY(-50%);
    padding: 8px 4px; /* 패딩 축소 (12px 6px → 8px 4px) */
    gap: 6px; /* 간격 축소 (8px → 6px) */
    border-radius: 14px; /* 반지름 축소 (20px → 14px) */
    width: 12px; /* 모바일에서 더 작게 (기존 16px → 12px) */
  }

  @media (max-width: 480px) {
    right: 4px; /* 더 오른쪽으로 이동 */
    transform: translateY(-50%);
    padding: 6px 3px; /* 패딩 축소 (10px 5px → 6px 3px) */
    gap: 4px; /* 간격 축소 (6px → 4px) */
    border-radius: 12px; /* 반지름 축소 (16px → 12px) */
    width: 10px; /* 작은 화면에서 더 작게 (기존 12px → 10px) */
  }
`,Kk=P.button`
  width: 4px; /* 폭 축소 (6px → 4px) */
  height: 28px; /* 높이 축소 (36px → 28px) */
  border: none;
  border-radius: 2px; /* 반지름 축소 (3px → 2px) */
  background: ${r=>r.$isActive?"linear-gradient(180deg, #a8e840 0%, rgba(168, 232, 64, 0.9) 100%)":"rgba(255, 255, 255, 0.4)"};
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  border: 1px solid
    ${r=>r.$isActive?"rgba(168, 232, 64, 0.8)":"rgba(255, 255, 255, 0.2)"};

  &:hover:not(:disabled) {
    background: ${r=>r.$isActive?"linear-gradient(180deg, #a8e840 0%, rgba(168, 232, 64, 0.95) 100%)":"rgba(255, 255, 255, 0.6)"};
    transform: scaleX(1.3);
    box-shadow: 0 4px 12px rgba(168, 232, 64, 0.4);
    border-color: rgba(168, 232, 64, 0.8);
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    width: 2px; /* 모바일에서 더 작게 (3px → 2px) */
    height: 22px; /* 높이 축소 (28px → 22px) */
  }

  @media (max-width: 480px) {
    width: 2px; /* 작은 화면에서 동일 (3px → 2px) */
    height: 18px; /* 높이 축소 (24px → 18px) */
  }
`,Jk=P.div`
  position: absolute;
  bottom: 50px; /* 축소된 코디 버튼 컨테이너 위쪽에 위치 */
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 8px 16px;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(10px);
  z-index: 1000;
  opacity: 1; /* 항상 표시되도록 변경 */
  visibility: visible;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  pointer-events: none; /* 클릭 이벤트 차단 */

  @media (max-width: 768px) {
    bottom: 45px;
    padding: 6px 12px;
  }

  @media (max-width: 480px) {
    bottom: 40px;
    padding: 5px 10px;
    border-radius: 12px;
  }
`,Wk=P.div`
  font-family: 'NanumSquare', sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: #333;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`,eO=P.div`
  font-family: 'NanumSquare', sans-serif;
  font-size: 11px;
  color: #666;

  @media (max-width: 768px) {
    font-size: 10px;
  }
`,tO=P.div`
  position: absolute;
  top: 8px;
  right: 8px;
  z-index: 30;
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: auto;
  cursor: pointer;
`,nO=P.input`
  display: none;
`,rO=P.label`
  cursor: pointer;
  position: relative;
  margin: auto;
  width: 18px;
  height: 18px;
  -webkit-tap-highlight-color: transparent;
  transform: translate3d(0, 0, 0);

  &:hover svg {
    stroke: #4285f4;
  }

  ${({$checked:r})=>r&&`
    svg {
      stroke: #4285f4;
    }
  `}
`,aO=P.svg`
  position: relative;
  z-index: 1;
  fill: none;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke: #c8ccd4;
  stroke-width: 1.5;
  transform: translate3d(0, 0, 0);
  transition: all 0.2s ease;
`,iO=P.path`
  stroke-dasharray: 60;
  stroke-dashoffset: 0;
  transition: all 0.3s linear;

  ${({$checked:r})=>r&&`
    stroke: #4285f4;
    stroke-dashoffset: 60;
  `}
`,oO=P.polyline`
  stroke-dasharray: 22;
  stroke-dashoffset: 66;
  transition: all 0.2s linear;
  transition-delay: ${({$checked:r})=>r?"0.15s":"0s"};

  ${({$checked:r})=>r&&`
    stroke: #4285f4;
    stroke-dashoffset: 42;
  `}
`,lO=P.div`
  flex: 1;
  display: flex;
  width: 100%
  align-items: center;
  justify-content: center;
  position: relative;
  background: transparent;
  transition: background 0.3s ease;
`,sO=P.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: transparent;
  transition: background 0.3s ease;
`,cO=P.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  overflow: hidden;
  z-index: 20; /* 흑백 오버레이보다 위에 */
`,uO=P.button`
  width: 100%;
  height: 100%;
  background: transparent; /* 배경색 제거 */
  color: ${r=>r.disabled?"#ccc":"white"};
  border: none;
  font-family: 'NanumSquare', sans-serif;
  font-size: 14px;
  font-weight: 600;
  cursor: ${r=>r.disabled?"not-allowed":"pointer"};
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 25; /* 흑백 오버레이보다 위에 */
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7); /* 텍스트 가독성 향상 */

  &:hover {
    transform: ${r=>r.disabled?"none":"translateY(-1px)"};
  }

  &:active {
    transform: ${r=>r.disabled?"none":"translateY(0)"};
  }

  @media (max-width: 768px) {
    font-size: 13px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`,dO=P.button`
  width: 100%;
  height: 100%;
  background: transparent; /* 배경색 제거 */
  color: white;
  border: none;
  font-family: 'NanumSquare', sans-serif;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 25; /* 흑백 오버레이보다 위에 */
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7); /* 텍스트 가독성 향상 */

  &:hover {
    transform: translateY(1px);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    font-size: 13px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`,CS=_.memo(({$imageUrl:r,$isSelected:n})=>E.jsx(jk,{$imageUrl:r,$isSelected:n}));CS.displayName="MemoizedUpperHalf";const kS=_.memo(({$imageUrl:r,$isSelected:n})=>E.jsx(Uk,{$imageUrl:r,$isSelected:n}));kS.displayName="MemoizedLowerHalf";const fO=({showUploadModal:r,isDragOver:n,onClose:i,onFileUpload:o,onDragOver:l,onDragLeave:c,onDrop:u})=>(_.useEffect(()=>{if(!r)return;const f=document.body.style.overflow,h=document.documentElement.style.overflow;return document.body.style.overflow="hidden",document.documentElement.style.overflow="hidden",()=>{document.body.style.overflow=f,document.documentElement.style.overflow=h}},[r]),r?E.jsx(pO,{onWheel:f=>f.preventDefault(),children:E.jsxs(hO,{children:[E.jsxs(gO,{children:[E.jsx(mO,{children:"사진 업로드"}),E.jsx(xO,{onClick:i,children:"×"})]}),E.jsxs(yO,{$isDragOver:n,onDragOver:l,onDragLeave:c,onDrop:u,children:[E.jsx(bO,{type:"file",accept:"image/jpeg,image/jpg,image/png,image/webp",onChange:o,id:"fileInput"}),E.jsxs(vO,{htmlFor:"fileInput",children:[E.jsx(Z6,{style:{width:"70px",height:"70px",color:"currentColor",strokeWidth:1.5}}),E.jsx(SO,{children:n?"파일을 여기에 놓으세요":"클릭하여 이미지를 선택하거나 파일을 드래그하세요"}),E.jsx(nb,{children:"JPG, PNG, WEBP 파일만 업로드 가능"}),E.jsx(nb,{style:{marginTop:"4px"},children:"최대 파일 크기: 10MB"})]})]})]})}):null),pO=P.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`,hO=P.div`
  background: white;
  border-radius: 12px;
  padding: 24px;
  width: 400px;
  max-width: 90vw;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
`,gO=P.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`,mO=P.h2`
  font-family: 'NanumSquare', sans-serif;
  font-size: 18px;
  font-weight: 600;
  color: #404040;
  margin: 0;
`,xO=P.button`
  background: none;
  border: none;
  font-size: 24px;
  color: #666;
  cursor: pointer;
  padding: 0;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: #404040;
  }
`,yO=P.div`
  border: 2px dashed ${r=>r.$isDragOver?"#404040":"#ddd"};
  border-radius: 8px;
  padding: 40px 20px;
  text-align: center;
  transition: all 0.2s ease;
  background-color: ${r=>r.$isDragOver?"rgba(64, 64, 64, 0.05)":"transparent"};

  &:hover {
    border-color: ${r=>r.$isDragOver?"#404040":"#999"};
    background-color: ${r=>r.$isDragOver?"rgba(64, 64, 64, 0.05)":"rgba(0, 0, 0, 0.02)"};
  }
`,bO=P.input`
  display: none;
`,vO=P.label`
  display: block;
  cursor: pointer;
`,SO=P.div`
  font-family: 'NanumSquare', sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: #404040;
  margin-bottom: 8px;
`,nb=P.div`
  font-family: 'NanumSquare', sans-serif;
  font-size: 14px;
  color: #666;
`,OS=_.memo(({activeTab:r,isSelectionMode:n=!1,isDeleteMode:i=!1,onSelectClick:o,onSaveClick:l,onCancelClick:c,canSave:u=!1,onDeleteClick:f,onDeleteSaveClick:h,onDeleteCancelClick:g,canDelete:m=!1,hasTryOnItems:x=!1,onTryOnSaveClick:S,canTryOnSave:T=!1})=>E.jsx(wO,{children:r==="wishlist"?n?E.jsxs(eh,{children:[E.jsx(ii,{onClick:l,disabled:!u,colorIndex:1,width:"100px",children:"코디 저장"}),E.jsx(ii,{onClick:c,disabled:!1,colorIndex:1,width:"80px",children:"취소"})]}):x?E.jsxs(eh,{children:[E.jsx(ii,{onClick:o,disabled:!1,colorIndex:1,width:"100px",children:"코디 선택"}),E.jsx(ii,{onClick:S,disabled:!T,colorIndex:1,width:"100px",children:"코디 저장"})]}):E.jsx(ii,{onClick:o,disabled:!1,colorIndex:1,width:"120px",children:"코디 선택"}):i?E.jsxs(eh,{children:[E.jsx(ii,{onClick:h,disabled:!m,colorIndex:2,width:"100px",children:"삭제"}),E.jsx(ii,{onClick:g,disabled:!1,colorIndex:1,width:"80px",children:"취소"})]}):E.jsx(ii,{onClick:f,disabled:!1,colorIndex:2,width:"120px",children:"코디 삭제"})}));OS.displayName="ButtonsContainer";const wO=P.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 16px 50px 16px 20px; /* GridContainer와 동일한 우측 여백 적용 */
  background: transparent;
  z-index: 10;
  min-height: 60px;
  flex-shrink: 0; /* 크기 고정 */

  @media (max-width: 768px) {
    padding: 14px 40px 14px 18px; /* 모바일에서도 우측 여백 유지 */
    gap: 10px;
    min-height: 56px;
  }

  @media (max-width: 480px) {
    padding: 12px 35px 12px 16px; /* 작은 화면에서도 우측 여백 유지 */
    gap: 8px;
    min-height: 52px;
  }
`,eh=P.div`
  display: flex;
  gap: 8px;
  align-items: center;

  @media (max-width: 767px) {
    gap: 6px;
  }

  @media (max-width: 480px) {
    gap: 4px;
    flex-wrap: wrap;
    justify-content: center;
  }
`,ii=({children:r,onClick:n,disabled:i=!1,colorIndex:o=0,width:l="140px",className:c,title:u})=>E.jsx(_O,{onClick:n,disabled:i,colorIndex:o,width:l,className:c,title:u,children:r}),_O=P.button`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 20px;
  margin: 0;
  background: ${r=>r.colorIndex===1?"#404650":"#2C3038"}; /* CategoryTab과 동일한 배경색 */
  color: ${r=>r.colorIndex===1?"#FFFFFF":"#B0B8C1"}; /* CategoryTab과 동일한 텍스트 색상 */
  border: 1px solid #404650; /* CategoryTab과 동일한 테두리 */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3); /* CategoryTab과 동일한 박스 섀도우 */
  border-radius: 0; /* CategoryTab과 동일한 사각형 모양 */
  font-family: 'NanumSquare', sans-serif;
  font-weight: ${r=>r.colorIndex===1?700:500}; /* CategoryTab과 동일한 폰트 웨이트 */
  font-size: 14px;
  cursor: ${r=>r.disabled?"not-allowed":"pointer"};
  transition: all 0.3s ease; /* CategoryTab과 동일한 transition */
  white-space: nowrap;
  min-width: 0;
  flex-shrink: 1;
  width: ${r=>r.width};
  height: 44px;
  opacity: ${r=>r.disabled?.5:1};
  pointer-events: ${r=>r.disabled?"none":"auto"};
  text-transform: none; /* CategoryTab은 uppercase 사용하지 않음 */
  letter-spacing: 0;
  overflow: visible;

  &:hover:not(:disabled) {
    background: ${r=>r.colorIndex===1?"#5A6169":"#404650"}; /* CategoryTab과 동일한 호버 배경색 */
    color: #ffffff; /* CategoryTab과 동일한 호버 텍스트 색상 */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5); /* CategoryTab과 동일한 호버 박스 섀도우 */
    transform: none;
  }

  &:active:not(:disabled) {
    transform: translateY(1px); /* CategoryTab과 동일한 active 효과 */
  }

  &:focus {
    outline: none;
  }

  /* 큰 화면 (width ≥ 1200px) - CategoryTab과 동일한 반응형 */
  @media (min-width: 1200px) {
    padding: 10px 24px;
    font-size: 16px;
    letter-spacing: 0.5px;
  }

  /* 중간 화면 (width: 1024px-1199px) - CategoryTab과 동일한 반응형 */
  @media (min-width: 1024px) and (max-width: 1199px) {
    padding: 6px 16px;
    font-size: 12px;
    letter-spacing: 0.2px;
  }

  /* 표준 화면 (width: 768px-1023px) - CategoryTab과 동일한 반응형 */
  @media (min-width: 768px) and (max-width: 1023px) {
    padding: 8px 20px;
    font-size: 14px;
    letter-spacing: 0.2px;
  }

  /* 작은 화면 (width: 480px-767px) - CategoryTab과 동일한 반응형 */
  @media (min-width: 480px) and (max-width: 767px) {
    padding: 7px 18px;
    font-size: 13px;
    letter-spacing: 0.1px;
  }

  /* 모바일 (width < 480px) - CategoryTab과 동일한 반응형 */
  @media (max-width: 479px) {
    padding: 6px 16px;
    font-size: 12px;
    letter-spacing: 0;
    min-width: 60px;
  }

  /* 매우 작은 모바일 (width < 360px) - CategoryTab과 동일한 반응형 */
  @media (max-width: 359px) {
    padding: 5px 12px;
    font-size: 11px;
    min-width: 50px;
  }
`,TO="/demos/onwear/assets/%EC%9D%98%EB%A5%98_%EC%98%88%EC%8B%9C%EC%9D%B4%EB%AF%B8%EC%A7%80_1-DEIqbJVH.webp";function RS({src:r,alt:n}){return C("div",{css:EO,children:C("img",{src:r||TO,alt:n||"의류 이미지",css:CO})})}const EO=L`
  width: 100%;
  height: 100%; /* 부모 영역을 꽉 채우도록 */
  min-height: 0; /* grid/flex 컨테이너 수축 허용 */
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f8f9fa;
  overflow: hidden;
`,CO=L`
  width: 100%;
  height: 100%;
  object-fit: cover; /* contain에서 cover로 변경 - 컨테이너를 완전히 채움 */
`;function kO(r){return r.toLocaleString("ko-KR")}function OO({brand:r,name:n,price:i,productUrl:o,tags:l}){const c=n.replace(/([A-Za-z0-9])-([A-Za-z0-9])/g,"$1‑$2");return ee("div",{css:RO,children:[C("hr",{css:AO}),ee("div",{css:zO,children:[ee("div",{css:du,children:[C("span",{css:as,children:"BRAND"}),C("span",{css:rb,children:r})]}),ee("div",{css:du,children:[C("span",{css:as,children:"NAME"}),C("span",{css:rb,children:c})]}),ee("div",{css:du,children:[C("span",{css:as,children:"PRICE"}),ee("span",{css:DO,children:["₩ ",kO(i)]})]}),o&&ee("div",{css:du,children:[C("span",{css:as,children:"URL"}),C("a",{css:MO,href:o,target:"_blank",rel:"noreferrer",children:o})]})]}),l.length>0&&ee("div",{css:NO,children:[C("span",{css:as,children:"TAGS"}),C("div",{css:jO,children:l.map((u,f)=>C("span",{css:UO,children:u},f))})]}),C("hr",{css:LO})]})}const RO=L`
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: 100%;
  justify-content: space-between;
  color: #e6e8eb;
`,AO=L`
  border: none;
  height: 1px;
  background: #2a2a2a;
  margin-right: 20px;
`,LO=L`
  border: none;
  height: 1px;
  background: #2a2a2a;
  margin: 0;
`,zO=L`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,du=L`
  display: flex;
  align-items: flex-start;
  padding: 8px 0;
  gap: 50px;
`,as=L`
  font-weight: 800;
  font-size: 17px;
  color: #a8e840;
  min-width: 60px;
  border-bottom: 1px solid #2a2a2a;
  width: 10%;
  letter-spacing: 0.02em;
`,rb=L`
  color: #e6e8eb;
  text-align: right;
  font-weight: 700;
  font-size: 13px;
  flex: 1;
  white-space: normal; /* 여러 줄 허용 */
  word-break: keep-all; /* 한국어 단어 단위로 줄바꿈 */
  overflow-wrap: anywhere; /* 너무 긴 토큰은 적절히 분할 */
`,DO=L`
  color: #ffffff;
  font-weight: 700;
  font-size: 14px;
  text-align: right;
  flex: 1;
`,MO=L`
  color: #60a5fa; /* 네온 블루 기본 강조 */
  text-decoration: none;
  text-align: right;
  font-size: 13px;
  flex: 1;
  white-space: normal;
  word-break: break-all;
  overflow-wrap: anywhere;

  &:hover {
    color: #3b82f6; /* hover 시 더 진한 네온 블루 */
    text-decoration: underline;
    text-shadow: 0 0 8px rgba(96, 165, 250, 0.6);
  }
`,NO=L`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,jO=L`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  align-items: center;
`,UO=L`
  background: #111111; /* 네온: 다크 베이스 */
  color: #a8e840; /* 네온 라임 */
  padding: 6px 12px;
  border-radius: 4px; /* 직각에 가까운 라운드 */
  border: 1px solid #2a2a2a; /* 다크 보더 */
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.02em;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  min-height: 30px;
  line-height: 1;
  transition:
    box-shadow 0.2s ease,
    transform 0.1s ease;

  &:hover {
    box-shadow: 0 0 12px rgba(168, 232, 64, 0.25);
    transform: translateY(-1px);
  }
`;function IO({open:r,onClose:n,data:i,onLikeChange:o}){const{isLoggedIn:l,member:c}=Ft(),[u,f]=_.useState(null),[h,g]=_.useState(!1),[m,x]=_.useState(!1),[S,T]=_.useState(null),[w,b]=_.useState(!1);_.useEffect(()=>{const z=R=>{R.key==="Escape"&&r&&n()};return r&&document.addEventListener("keydown",z),()=>{document.removeEventListener("keydown",z)}},[r,n]),_.useEffect(()=>{if(!r)return;const z=document.body.style.overflow,R=document.documentElement.style.overflow;return document.body.style.overflow="hidden",document.documentElement.style.overflow="hidden",()=>{document.body.style.overflow=z,document.documentElement.style.overflow=R}},[r]);const v=_.useCallback(async()=>{try{x(!0),T(null);const z=await Da(i.productId);if(z.success&&z.data){const R={productId:z.data.productId,productBrand:z.data.productBrand,productName:z.data.productName,productPrice:z.data.productPrice,productUrl:z.data.productUrl,styleList:z.data.styleList,productImageUrl:z.data.productImageUrl,liked:z.data.isLiked};f(R)}else T(z.message||"상품 정보를 불러오는데 실패했습니다."),f(i)}catch(z){console.error("상품 상세 정보 조회 실패:",z),T("상품 정보를 불러오는데 실패했습니다."),f(i)}finally{x(!1)}},[i]),D=_.useCallback(async()=>{if(!l||!i.productId){g(!1);return}try{const R=(await fd()).some(M=>M.productId===i.productId);g(R)}catch(z){console.error("찜 목록 조회 실패:",z),g(!1)}},[l,i.productId]);_.useEffect(()=>{r&&i.productId&&(i.productId&&i.productName&&i.productBrand?(f(i),x(!1)):v(),i.liked!==void 0?g(i.liked):D())},[r,i,v,D]);const j=async()=>{if(!l){b(!0);return}try{if((await Ls(i.productId)).success){await D(),o&&o(i.productId,!h);const R=JSON.parse(sessionStorage.getItem("user_actions")||"[]"),M=R.some($=>$.productId===i.productId),k={userId:c?.memberId||0,timestamp:new Date().toISOString(),actionType:M?"unlike":"like",productId:i.productId,searchTerm:null};let I;M?I=R.filter($=>$.productId!==i.productId):I=[...R,k],sessionStorage.setItem("user_actions",JSON.stringify(I));try{await Jr([k]),console.log("사용자 액션이 실시간으로 전송되었습니다.")}catch($){console.error("사용자 액션 전송 중 오류 발생:",$)}if(I.length>=5)try{await Jr(I),sessionStorage.removeItem("user_actions")}catch($){console.error("서버 저장 중 오류 발생:",$)}}}catch(z){console.error("찜하기 토글 실패:",z)}};if(!r)return null;const A=u||i;return Fu.createPortal(ee("div",{css:BO,onClick:n,onWheel:z=>z.preventDefault(),children:[ee("div",{css:HO,onClick:z=>z.stopPropagation(),children:[C("button",{css:$O,onClick:n,children:"✕"}),m?C("div",{css:XO,children:"상품 정보를 불러오는 중..."}):S?C("div",{css:VO,children:S}):ee(ra,{children:[C("section",{css:PO,children:ee("div",{css:qO,children:[C(RS,{src:A.productImageUrl,alt:A.productName}),C("button",{type:"button",css:GO,onClick:z=>{z.stopPropagation(),j()},"aria-label":"like",children:C(ld,{size:18,color:h?"#ff4444":"#60a5fa",fill:h?"#ff4444":"transparent",style:{display:"block"}})})]})}),C("section",{css:YO,children:C(OO,{brand:A.productBrand,name:A.productName,price:A.productPrice,productUrl:A.productUrl,tags:A.styleList||[]})})]})]}),C(Ma,{show:w,onClose:()=>b(!1),message:"로그인이 필요합니다."})]}),document.body)}const BO=L`
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
`,HO=L`
  background: #0f0f10; /* 네온 컨셉 다크 베이스 */
  width: 850px;
  height: min(550px, 86vh);
  max-height: 86vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  padding: 24px;
  position: relative;
  border: 1px solid #1a1a1a;
  border-radius: 0; /* 직각 스타일 */
  box-shadow:
    0 10px 28px rgba(0, 0, 0, 0.5),
    0 0 24px rgba(168, 232, 64, 0.15);
  overflow: hidden;
  min-height: 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    width: min(92vw, 850px);
    height: min(86vh, 720px);
  }
`,$O=L`
  position: absolute;
  top: 12px;
  right: 12px;
  border: none;
  background: transparent;
  color: #a8e840; /* 네온 라임 */
  font-size: 20px;
  cursor: pointer;
  transition:
    transform 0.15s ease,
    color 0.2s ease,
    text-shadow 0.2s ease;

  &:hover {
    color: #666; /* 회색 */
    transform: scale(1.05);
  }
`,PO=L`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  min-height: 0;
  overflow: hidden;
`,qO=L`
  position: relative;
  width: 100%;
  height: 100%;
`,YO=L`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 0;
  overflow-y: auto;
  overscroll-behavior: contain;
  -webkit-overflow-scrolling: touch;
`,GO=L`
  position: absolute;
  top: 8px;
  right: 8px;
  border: 1px solid #2a2a2a;
  background: #111111; /* 네온 다크 베이스 */
  border-radius: 4px; /* 직각 무드 */
  width: 30px;
  height: 30px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition:
    box-shadow 0.2s ease,
    transform 0.12s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 0 12px rgba(96, 165, 250, 0.25);
  }
`,XO=L`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  font-size: 16px;
  color: #666;
`,VO=L`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  font-size: 16px;
  color: #e03131;
`;function FO({src:r,alt:n}){return C("div",{css:QO,children:C("img",{src:r,alt:n||"코디 이미지",css:ZO})})}const QO=L`
  width: 100%;
  height: 100%;
  min-height: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f8f9fa;
  overflow: hidden;
`,ZO=L`
  width: 100%;
  height: 100%;
  object-fit: cover; /* contain에서 cover로 변경 - 컨테이너를 완전히 채움 */
`;function KO(r){return r.toLocaleString("ko-KR")}function JO({brand:r="브랜드명",name:n="코디 아이템",price:i=0,productUrl:o="#",tags:l=[],viewMode:c,onChangeViewMode:u}){const f=n.replace(/([A-Za-z0-9])-([A-Za-z0-9])/g,"$1‑$2");return ee("div",{css:WO,children:[C("hr",{css:aR}),ee("div",{css:eR,children:[C("div",{css:tR,children:C("div",{css:[nR,c==="lower"&&rR]})}),C("button",{css:[ab,c==="upper"&&ib],onClick:()=>u("upper"),children:c==="upper"?C("span",{children:"UPPER"}):C("span",{children:"UPPER"})}),C("button",{css:[ab,c==="lower"&&ib],onClick:()=>u("lower"),children:c==="lower"?C("span",{children:"LOWER"}):C("span",{children:"LOWER"})})]}),ee("div",{css:oR,children:[ee("div",{css:fu,children:[C("span",{css:is,children:"BRAND"}),C("span",{css:ob,children:r})]}),ee("div",{css:fu,children:[C("span",{css:is,children:"NAME"}),C("span",{css:ob,children:f})]}),ee("div",{css:fu,children:[C("span",{css:is,children:"PRICE"}),ee("span",{css:lR,children:["₩ ",KO(i)]})]}),ee("div",{css:fu,children:[C("span",{css:is,children:"URL"}),C("a",{css:sR,href:o,target:"_blank",rel:"noreferrer",children:o})]})]}),ee("div",{css:fR,children:[l&&l.length>0&&ee("div",{css:cR,children:[C("span",{css:is,children:"TAGS"}),C("div",{css:uR,children:l.map((h,g)=>C("span",{css:dR,children:h},g))})]}),C("hr",{css:iR})]})]})}const WO=L`
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: 100%;
  justify-content: space-between;
  color: #e6e8eb;
`,eR=L`
  display: flex;
  align-items: center;
  background: #111111;
  border: 1px solid #2a2a2a;
  border-radius: 4px;
  padding: 4px;
  position: relative;
  justify-content: flex-start;
  width: fit-content;
  height: 34px;
  margin-bottom: 8px;
`,tR=L`
  position: absolute;
  top: 4px;
  left: 4px;
  right: 4px;
  bottom: 4px;
  background: transparent;
  border-radius: 4px;
  pointer-events: none;
`,nR=L`
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background: #1a1a1a;
  border-radius: 4px;
  transition: transform 0.25s ease;
  box-shadow:
    inset 0 0 0 1px #2a2a2a,
    0 0 0 rgba(168, 232, 64, 0);
  z-index: 0; /* 버튼 텍스트가 위에 오도록 */
  pointer-events: none;
`,rR=L`
  transform: translateX(100%);
`,ab=L`
  padding: 6px 12px;
  border: none;
  background: transparent;
  cursor: pointer;
  font-weight: 700;
  font-size: 13px;
  color: #adb5bd;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  transition: color 0.3s ease;
  position: relative;
  z-index: 1;
  border-radius: 4px;
  min-width: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`,ib=L`
  color: #a8e840;
  text-shadow: 0 0 8px rgba(168, 232, 64, 0.35);
`,aR=L`
  border: none;
  height: 1px;
  background: #2a2a2a;
  margin-right: 20px;
`,iR=L`
  border: none;
  height: 1px;
  background: #2a2a2a;
  margin: 0;
`,oR=L`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,fu=L`
  display: flex;
  align-items: flex-start;
  padding: 8px 0;
  gap: 50px;
`,is=L`
  font-weight: 800;
  font-size: 17px;
  color: #a8e840;
  min-width: 60px;
  border-bottom: 1px solid #2a2a2a;
  width: 10%;
  letter-spacing: 0.02em;
`,ob=L`
  color: #e6e8eb;
  text-align: right;
  font-weight: 700;
  font-size: 13px;
  flex: 1;
  white-space: normal; /* 여러 줄 허용 */
  word-break: keep-all; /* 한국어 단어 단위로 줄바꿈 */
  overflow-wrap: anywhere; /* 너무 긴 토큰은 적절히 분할 */
`,lR=L`
  color: #ffffff;
  font-weight: 700;
  font-size: 14px;
  text-align: right;
  flex: 1;
`,sR=L`
  color: #60a5fa;
  text-decoration: none;
  text-align: right;
  font-size: 13px;
  flex: 1;
  white-space: normal;
  word-break: break-all; /* URL은 중간 분할 허용 */
  overflow-wrap: anywhere;

  &:hover {
    color: #3b82f6;
    text-decoration: underline;
    text-shadow: 0 0 8px rgba(96, 165, 250, 0.6);
  }
`,cR=L`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,uR=L`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  align-items: center;
`,dR=L`
  background: #111111;
  color: #a8e840;
  padding: 6px 12px;
  border-radius: 4px;
  border: 1px solid #2a2a2a;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.02em;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  min-height: 30px;
  line-height: 1;
  transition:
    box-shadow 0.2s ease,
    transform 0.1s ease;

  &:hover {
    box-shadow: 0 0 12px rgba(168, 232, 64, 0.25);
    transform: translateY(-1px);
  }
`,fR=L`
  margin-top: auto;
  padding-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;function pR({open:r,onClose:n,data:i,upperLiked:o,lowerLiked:l,onToggleUpperLike:c,onToggleLowerLike:u}){const{isLoggedIn:f,member:h}=Ft(),[g,m]=_.useState("upper"),[x,S]=_.useState(!1);_.useEffect(()=>{const j=A=>{A.key==="Escape"&&r&&n()};return r&&document.addEventListener("keydown",j),()=>{document.removeEventListener("keydown",j)}},[r,n]),_.useEffect(()=>{if(!r)return;const j=document.body.style.overflow,A=document.documentElement.style.overflow;return document.body.style.overflow="hidden",document.documentElement.style.overflow="hidden",()=>{document.body.style.overflow=j,document.documentElement.style.overflow=A}},[r]);const T=j=>{if(!f){S(!0);return}j()},w=async j=>{const A=JSON.parse(sessionStorage.getItem("user_actions")||"[]"),z=A.some(k=>k.productId===j),R={userId:h?.memberId||0,timestamp:new Date().toISOString(),actionType:z?"unlike":"like",productId:j,searchTerm:null};let M;z?M=A.filter(k=>k.productId!==j):M=[...A,R],sessionStorage.setItem("user_actions",JSON.stringify(M));try{await Jr([R]),console.log("사용자 액션이 실시간으로 전송되었습니다.")}catch(k){console.error("사용자 액션 전송 중 오류 발생:",k)}if(M.length>=1)try{await Jr(M),sessionStorage.removeItem("user_actions")}catch(k){console.error("서버 저장 중 오류 발생:",k)}},b=()=>{T(async()=>{await c(),i.upper?.id&&await w(i.upper.id)})},v=()=>{T(async()=>{await u(),i.lower?.id&&await w(i.lower.id)})};if(!r)return null;const D=g==="upper"?i.upper:i.lower;return D?Fu.createPortal(ee("div",{css:lb,onClick:n,onWheel:j=>j.preventDefault(),children:[ee("div",{css:sb,onClick:j=>j.stopPropagation(),children:[C("button",{css:cb,onClick:n,children:"✕"}),C("section",{css:hR,children:ee("div",{css:gR,children:[C(FO,{src:D.imageUrl,alt:D.name}),C("button",{css:xR,onClick:j=>{j.stopPropagation(),g==="upper"?b():v()},"aria-label":"like",children:C(ld,{size:18,css:yR(g==="upper"?o:l),color:(g==="upper"?o:l)?"#ff4444":"#60a5fa",fill:(g==="upper"?o:l)?"#ff4444":"transparent",style:{display:"block"}})})]})}),C("section",{css:mR,children:C(JO,{brand:D.brand,name:D.name,price:D.price,productUrl:D.productUrl,tags:D.tags,viewMode:g,onChangeViewMode:m})})]}),C(Ma,{show:x,onClose:()=>S(!1),message:"로그인이 필요합니다."})]}),document.body):C("div",{css:lb,onClick:n,children:ee("div",{css:sb,onClick:j=>j.stopPropagation(),children:[C("button",{css:cb,onClick:n,children:"✕"}),ee("p",{children:["선택한 ",g==="upper"?"상의":"하의"," 정보가 없습니다."]})]})})}const lb=L`
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
`,sb=L`
  background: #0f0f10;
  width: 850px;
  height: min(550px, 86vh);
  max-height: 86vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  padding: 24px;
  position: relative;
  border: 1px solid #1a1a1a;
  border-radius: 0;
  box-shadow:
    0 10px 28px rgba(0, 0, 0, 0.5),
    0 0 24px rgba(168, 232, 64, 0.15);
  overflow: hidden;
  min-height: 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    width: min(92vw, 850px);
    height: min(86vh, 720px);
  }
`,cb=L`
  position: absolute;
  top: 12px;
  right: 12px;
  border: none;
  background: transparent;
  color: #a8e840;
  font-size: 20px;
  cursor: pointer;
  transition:
    transform 0.15s ease,
    color 0.2s ease,
    text-shadow 0.2s ease;

  &:hover {
    color: #666; /* 회색 */
    transform: scale(1.05);
  }
`,hR=L`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  min-height: 0;
  overflow: hidden;
`,gR=L`
  position: relative;
  width: 100%;
  height: 100%;
`,mR=L`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 0;
  overflow-y: auto;
  overscroll-behavior: contain;
  -webkit-overflow-scrolling: touch;
`,xR=L`
  position: absolute;
  top: 8px;
  right: 8px;
  border: 1px solid #2a2a2a;
  background: #111111;
  border-radius: 4px;
  width: 30px;
  height: 30px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition:
    box-shadow 0.2s ease,
    transform 0.12s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 0 12px rgba(96, 165, 250, 0.25);
  }
`,yR=r=>L`
  stroke: ${r?"#ff4444":"#60a5fa"};
  fill: ${r?"#ff4444":"transparent"};
  transition:
    stroke 0.2s ease,
    fill 0.2s ease,
    transform 0.12s ease,
    filter 0.2s ease;
  position: relative;
  button:hover & {
    transform: scale(1.06);
    filter: drop-shadow(0 0 6px rgba(96, 165, 250, 0.5));
  }
`,bR=async()=>(await Rt.get("/my/likes")).data,vR=r=>r.map(n=>({id:n.productId,image:n.productImageUrl,type:SR(n.productCategory)})),SR=r=>{if(r.toLowerCase().startsWith("lower"))return"bottom";if(r.toLowerCase().startsWith("upper"))return"top";switch(r){case"Upper":return"top";case"Lower":return"bottom";default:return"other"}},wR=ed()(r=>({wishlistItems:[],rawWishlistData:[],isLoading:!1,error:null,activeCategory:"Total",fetchWishlist:async()=>{r({isLoading:!0,error:null});try{const n=await bR();if(n.success){const i=[...n.data].reverse(),o=vR(i);r({rawWishlistData:i,wishlistItems:o,isLoading:!1,error:null})}else throw{code:n.code,message:n.message,isApiError:!0}}catch(n){console.error("찜목록 조회 실패:",n);let i="찜목록을 불러올 수 없습니다.";if(n&&typeof n=="object"&&"response"in n){const o=n;o.response?.data?.message&&(i=o.response.data.message)}r({error:i,isLoading:!1,wishlistItems:[],rawWishlistData:[]})}},setCategory:n=>{r({activeCategory:n})},clearError:()=>{r({error:null})}})),_R=async()=>(await Rt.get("/my/coordination")).data,TR=async r=>{try{const n=await Rt.delete(`my/coordination/${r}`);return n.status===200?{success:!0,message:n.data?.message||"코디가 성공적으로 삭제되었습니다."}:{success:!1,message:"코디 삭제에 실패했습니다."}}catch(n){if(n instanceof Ou){if(n.response?.status===403||n.response?.data?.code===-10403)throw new Error("로그인이 필요합니다.");if(n.response?.data?.code===-10700)throw new Error("존재하지 않는 코디입니다.");if(n.response?.data?.code===-10701)throw new Error("본인의 코디만 삭제할 수 있습니다.");const i=n.response?.data?.message||"코디 삭제 중 오류가 발생했습니다.";throw new Error(i)}throw new Error("코디 삭제 중 알 수 없는 오류가 발생했습니다.")}},ER=r=>{const n=[];return r.forEach(i=>{const o=i.upperId&&i.upperImageUrl,l=i.lowerId&&i.lowerImageUrl;if(o&&l){const c={id:`${i.coordinationId}-full`,image:i.upperImageUrl||"",type:"full",upperImage:i.upperImageUrl||"",lowerImage:i.lowerImageUrl||"",coordinationId:i.coordinationId,isFullCoordination:!0};n.push(c)}else if(o){const c={id:`${i.coordinationId}-upper`,image:i.upperImageUrl||"",type:"top",upperImage:i.upperImageUrl||"",coordinationId:i.coordinationId,isFullCoordination:!1};n.push(c)}else if(l){const c={id:`${i.coordinationId}-lower`,image:i.lowerImageUrl||"",type:"bottom",lowerImage:i.lowerImageUrl||"",coordinationId:i.coordinationId,isFullCoordination:!1};n.push(c)}}),n},CR=ed()(r=>({coordinationItems:[],rawCoordinationData:[],isLoading:!1,error:null,activeCategory:"Total",fetchCoordination:async()=>{r({isLoading:!0,error:null});try{const n=await _R();if(n.success){const i=[...n.data||[]].sort((l,c)=>c.coordinationId-l.coordinationId),o=ER(i);r({rawCoordinationData:i,coordinationItems:o,isLoading:!1,error:null})}else throw{code:n.code,message:n.message,isApiError:!0}}catch(n){console.error("코디 목록 조회 실패:",n);let i="내 코디 목록을 불러올 수 없습니다.";if(n&&typeof n=="object"&&"response"in n){const o=n;o.response?.data?.message&&(i=o.response.data.message)}r({error:i,isLoading:!1,coordinationItems:[],rawCoordinationData:[]})}},setCategory:n=>{r({activeCategory:n})},clearError:()=>{r({error:null})}})),ub=async r=>(await Rt.post("/my/coordination",r)).data,db=r=>!r.upperId&&!r.lowerId?{isValid:!1,message:"상의 또는 하의 중 최소 1개 이상을 선택해주세요"}:{isValid:!0,message:""},kR=async()=>(await Rt.get("/my/mannequins")).data,OR=async(r,n)=>{const i=new FormData;return i.append("image",n),(await Rt.put(`/my/mannequins/${r}`,i,{headers:{Accept:"*/*","Content-Type":"multipart/form-data"}})).data},RR=async r=>(await Rt.put(`/my/mannequins/delete/${r}`)).data,AR=async r=>(await Rt.post("/my/try-on",r,{timeout:6e4})).data,LR=({id:r,type:n,title:i,message:o,duration:l=3e3,onClose:c})=>{const u=_.useRef(null),f=_.useRef(void 0);_.useEffect(()=>{u.current&&pn.fromTo(u.current,{y:-60,opacity:0,scale:.9},{y:0,opacity:1,scale:1,duration:.5,ease:"back.out(1.7)"})},[n]),_.useEffect(()=>{const m=()=>{u.current&&pn.to(u.current,{y:-60,opacity:0,scale:.9,duration:.4,ease:"power2.in",onComplete:()=>{c(r)}})};return l>0&&(f.current=setTimeout(()=>{m()},l)),()=>{f.current&&clearTimeout(f.current)}},[l,r,c]);const h=()=>{u.current&&pn.to(u.current,{y:-60,opacity:0,scale:.9,duration:.4,ease:"power2.in",onComplete:()=>{c(r)}})},g=()=>{f.current&&clearTimeout(f.current),h()};return E.jsxs(zR,{ref:u,$type:n,children:[E.jsxs(DR,{children:[E.jsx(MR,{children:i}),E.jsx(NR,{children:o})]}),E.jsx(jR,{onClick:g})]})},zR=P.div`
  background: linear-gradient(90deg, #1f2333, #22232b);
  color: #f5f5f5;
  padding: 1rem 2rem 1rem 6rem;
  text-align: left;
  border-radius: 0.25rem;
  position: relative;
  font-weight: 300;
  margin: 1rem 0;
  width: auto;
  height: 100%;
  min-width: 320px;
  max-width: 450px;
  min-height: 6rem;
  display: flex;
  align-items: center;
  transition: all 0.5s ease;
  opacity: 1;
  border: 0.15rem solid rgba(255, 255, 255, 0.133);
  box-shadow: inset 0 0 0.5rem 0 #1d1e26;
  font-family: 'Varela Round', sans-serif;
  overflow: visible;

  /* CSS Variables based on type */
  ${({$type:r})=>{const n={help:L`
        --bg: #05478a;
        --clr: #0070e0;
        --brd: rgba(0, 112, 224, 0.25);
      `,success:L`
        --bg: #005e38;
        --clr: #03a65a;
        --brd: rgba(3, 166, 90, 0.25);
      `,warning:L`
        --bg: #c24914;
        --clr: #fc8621;
        --brd: rgba(252, 134, 33, 0.25);
      `,error:L`
        --bg: #851d41;
        --clr: #db3056;
        --brd: rgba(219, 48, 86, 0.25);
      `,info:L`
        --bg: #05478a;
        --clr: #0070e0;
        --brd: rgba(0, 112, 224, 0.25);
      `};return n[r]||n.info}}

  &::before {
    content: '';
    position: absolute;
    width: 6.5rem;
    height: 6.15rem;
    bottom: -0.15rem;
    left: -0.15rem;
    z-index: 0;
    border-radius: 0.35rem;
    background:
      radial-gradient(circle at 0% 50%, var(--clr), transparent 5rem),
      radial-gradient(circle at -50% 50%, var(--bg), transparent 5rem);
    opacity: 0.5;
  }

  &::after {
    content: '';
    position: absolute;
    width: 3.5rem;
    height: 3.5rem;
    background: radial-gradient(
      circle at 50% 50%,
      var(--clr) 1.25rem,
      var(--brd) calc(1.25rem + 1px) 100%
    );
    top: 1.2rem;
    left: 1rem;
    border-radius: 3rem;
    padding-top: 0.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.75rem;
    box-sizing: border-box;
    color: white;
    z-index: 1;

    ${({$type:r})=>{const n={help:L`
          content: '?';
        `,success:L`
          content: 'L';
          font-size: 1.5rem;
          font-weight: bold;
          padding-bottom: 0.35rem;
          transform: rotateY(180deg) rotate(-38deg);
          text-indent: 0.1rem;
        `,warning:L`
          content: '!';
          font-weight: bold;
        `,error:L`
          content: '+';
          font-size: 2.85rem;
          line-height: 1.2rem;
          transform: rotate(45deg);
        `,info:L`
          content: 'i';
        `};return n[r]||n.info}}
  }
`,DR=P.div`
  flex: 1;
  min-width: 0;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 0.5rem;
`,MR=P.h3`
  font-family: 'Varela Round', sans-serif;
  font-size: 1.1rem;
  margin: 0;
  line-height: 1.3;
  font-weight: 400;
  color: #f5f5f5;
  position: relative;
  z-index: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,NR=P.p`
  font-family: 'Varela Round', sans-serif;
  font-size: 0.85rem;
  color: #e0e0e0;
  line-height: 1.3;
  word-break: keep-all;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0.15rem 0 0;
  position: relative;
  z-index: 1;

  a {
    color: #fff;
    text-decoration: none;

    &:hover {
      color: var(--clr);
    }
  }
`,jR=P.button`
  position: absolute;
  width: 1.2rem;
  height: 1.2rem;
  text-align: center;
  right: 0.75rem;
  top: 0.5rem;
  cursor: pointer;
  border-radius: 50%;
  border: none;
  background: transparent;
  color: #f5f5f5;
  transition: all 0.3s ease;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;

  &::after {
    content: '×';
    font-family: 'Varela Round', sans-serif;
    font-size: 1.4rem;
    font-weight: bold;
    line-height: 1;
    display: block;
  }

  &:hover {
    background: var(--clr);
    color: #22232c;
    border-radius: 50%;
  }
`,UR=({toasts:r,onClose:n})=>Fu.createPortal(E.jsx(IR,{children:r.map(i=>E.jsx(LR,{...i,onClose:n},i.id))}),document.body),IR=P.div`
  position: fixed;
  top: 24px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9999;
  display: flex;
  flex-direction: column;
  gap: 8px;
  pointer-events: none;
  padding: 20px;

  > * {
    pointer-events: auto;
  }

  @media (max-width: 768px) {
    top: 60px;
    left: 16px;
    right: 16px;
    transform: none;
    padding: 40px 10px 20px 10px;

    > * {
      max-width: none;
      min-width: 0;
    }
  }
`,AS=_.createContext(void 0),BR=({children:r})=>{const[n,i]=_.useState([]),o=_.useCallback(x=>{i(S=>S.filter(T=>T.id!==x))},[]),l=_.useCallback((x,S,T="info",w=3e3)=>{const v={id:`toast-${Date.now()}-${Math.random()}`,type:T,title:x,message:S,duration:w,onClose:o};i(D=>[...D,v]),i(D=>D.length>5?D.slice(-5):D)},[o]),c=_.useCallback((x,S,T=3e3)=>{l(x,S,"success",T)},[l]),u=_.useCallback((x,S,T=4e3)=>{l(x,S,"error",T)},[l]),f=_.useCallback((x,S,T=3500)=>{l(x,S,"warning",T)},[l]),h=_.useCallback((x,S,T=3e3)=>{l(x,S,"info",T)},[l]),g=_.useCallback((x,S,T=3e3)=>{l(x,S,"help",T)},[l]),m={showToast:l,success:c,error:u,warning:f,info:h,help:g};return E.jsxs(AS.Provider,{value:m,children:[r,E.jsx(UR,{toasts:n,onClose:o})]})},HR=()=>{const r=_.useContext(AS);if(r===void 0)throw new Error("useToast must be used within a ToastProvider");return r},$R=()=>{const r=Br(),{success:n,error:i,warning:o}=HR(),l=_.useCallback(Q=>Q===Xn||Q==="https://myssafy.s3.us-east-1.amazonaws.com/mannequin/default_mannequin.png",[]),{isLoggedIn:c,member:u}=Ft(),{wishlistItems:f,rawWishlistData:h,isLoading:g,error:m,activeCategory:x,fetchWishlist:S,setCategory:T,clearError:w}=wR(),{coordinationItems:b,rawCoordinationData:v,isLoading:D,error:j,fetchCoordination:A,clearError:z}=CR(),R=(Q,ce)=>{switch(ce.type){case"TOGGLE_MODAL":return{...Q,modals:{...Q.modals,[ce.modal]:ce.value??!Q.modals[ce.modal]}};case"SET_LOADING":return{...Q,loading:{...Q.loading,[ce.key]:ce.value}};case"SET_SELECTION_MODE":return{...Q,selection:{...Q.selection,isMode:ce.value}};case"SET_SELECTED_ITEMS":return{...Q,selection:{...Q.selection,items:ce.items}};case"SET_DRAG_OVER":return{...Q,selection:{...Q.selection,dragOver:ce.value}};case"SET_CURRENT_TRY_ON":return{...Q,tryOn:{...Q.tryOn,currentItems:ce.items}};case"SET_FIRST_TRY_ON":return{...Q,tryOn:{...Q.tryOn,isFirstTryOn:ce.value}};case"RESET_SELECTION":return{...Q,selection:{...Q.selection,items:{}}};case"SET_DELETE_MODE":return{...Q,deleteMode:{...Q.deleteMode,isMode:ce.value}};case"SET_SELECTED_CODI_IDS":return{...Q,deleteMode:{...Q.deleteMode,selectedCodiIds:ce.ids}};case"TOGGLE_CODI_SELECTION":return{...Q,deleteMode:{...Q.deleteMode,selectedCodiIds:Q.deleteMode.selectedCodiIds.includes(ce.id)?Q.deleteMode.selectedCodiIds.filter(he=>he!==ce.id):[...Q.deleteMode.selectedCodiIds,ce.id]}};case"RESET_DELETE_SELECTION":return{...Q,deleteMode:{...Q.deleteMode,selectedCodiIds:[]}};default:return Q}},[M,k]=_.useReducer(R,{modals:{upload:!1,clothesDetail:!1,codiDetail:!1},loading:{tryOn:!1,upload:!1,delete:!1,download:!1,save:!1,deleteCoordination:!1},selection:{isMode:!1,items:{},dragOver:!1},deleteMode:{isMode:!1,selectedCodiIds:[]},tryOn:{currentItems:{},isFirstTryOn:!0}}),[I,$]=_.useState("wishlist"),[te,re]=_.useState("Total");_.useEffect(()=>{console.log("UI State changed:",{selectionMode:M.selection.isMode,deleteMode:M.deleteMode.isMode,selectedCodiIds:M.deleteMode.selectedCodiIds})},[M.selection.isMode,M.deleteMode.isMode,M.deleteMode.selectedCodiIds]);const[le,ye]=_.useState(""),[Se,we]=_.useState(Xn),[U,H]=_.useState([Xn,Xn,Xn,Xn]),[X,ue]=_.useState(null),[pe,N]=_.useState(null),[Y,K]=_.useState(!1),[oe,ve]=_.useState(!1),[de,_e]=_.useState([]),[be,ke]=_.useState(0),Be=_.useMemo(()=>de.length===0?["","","",""]:Array.from({length:4},(Q,ce)=>{const he=de[ce];return he&&he.mannequinImageUrl!=="default_mannequin_image"?he.mannequinImageUrl:Xn}),[de]),ze=_.useCallback(async()=>{if(c)try{const Q=await kR();if(Q.success){_e(Q.data);const ce=Array.from({length:4},(he,Ee)=>{const Me=Q.data[Ee];return Me?.mannequinImageUrl!=="default_mannequin_image"?Me.mannequinImageUrl:Xn});if(H(ce),Q.data.length>0&&Q.data[0]){ke(0);const he=Q.data[0].mannequinImageUrl!=="default_mannequin_image"?Q.data[0].mannequinImageUrl:Xn;ye(he),we(he)}}}catch(Q){console.error("마네킹 목록 조회 실패:",Q)}},[c]);_.useEffect(()=>{if(!c){r("/main",{replace:!0,state:{showLoginToast:!0}});return}S(),A(),ze()},[c,r,S,A,ze]),_.useEffect(()=>{re(x)},[x]);const Ue=Q=>{$(Q),M.selection.isMode&&(k({type:"SET_SELECTION_MODE",value:!1}),k({type:"RESET_SELECTION"})),M.deleteMode.isMode&&(k({type:"SET_DELETE_MODE",value:!1}),k({type:"RESET_DELETE_SELECTION"})),Q==="wishlist"?(S(),m&&w()):Q==="mycodi"&&(A(),j&&z()),re("Total"),T("Total")},at=Q=>{re(Q),T(Q)},ct=()=>{k({type:"TOGGLE_MODAL",modal:"upload",value:!0})},ut=async()=>{if(!c||!u){i("오류!","로그인이 필요합니다.");return}if(M.loading.delete||M.loading.upload)return;const Q=de[be];if(!Q||Q.mannequinImageUrl==="default_mannequin_image"){o("삭제 불가","삭제할 마네킹 이미지가 없습니다.");return}try{k({type:"SET_LOADING",key:"delete",value:!0}),await RR(Q.mannequinId);const ce=[...de];ce[be]={...ce[be],mannequinImageUrl:"default_mannequin_image"},_e(ce),ye(Xn),n("삭제 완료","마네킹 이미지가 삭제되었습니다.")}catch(ce){console.error("마네킹 이미지 삭제 실패:",ce),ce instanceof Ou?i("삭제 실패",`마네킹 이미지 삭제에 실패했습니다: ${ce.response?.data?.message||ce.message}`):i("삭제 실패","마네킹 이미지 삭제에 실패했습니다.")}finally{k({type:"SET_LOADING",key:"delete",value:!1})}},ht=()=>{k({type:"TOGGLE_MODAL",modal:"upload",value:!1})},ne=Q=>{const ce=Q.target.files?.[0];ce&&At(ce)},Tt=Q=>Q.size>10485760?{isValid:!1,message:"파일 크기가 10MB를 초과합니다. 더 작은 이미지를 사용해주세요."}:["image/jpeg","image/jpg","image/png","image/webp"].includes(Q.type)?{isValid:!0}:{isValid:!1,message:"지원하지 않는 파일 형식입니다. JPG, PNG, WEBP 파일만 업로드해주세요."},At=async Q=>{if(!Q){o("파일 선택 필요","파일이 선택되지 않았습니다.");return}const ce=Tt(Q);if(!ce.isValid){o("파일 검증 실패",ce.message||"파일 유효성 검사에 실패했습니다.");return}if(!c||!u){i("오류!","로그인이 필요합니다.");return}if(!M.loading.upload)try{if(k({type:"SET_LOADING",key:"upload",value:!0}),de.length===0){o("잠시만 기다려주세요","마네킹 목록을 불러오는 중입니다. 잠시 후 다시 시도해주세요.");return}const Ee=de[be].mannequinId,Me=await OR(Ee,Q);if(Me.success){ye(Me.data.mannequinImageUrl),we(Me.data.mannequinImageUrl);const Ae=[...de];Ae[be]={...Ae[be],mannequinImageUrl:Me.data.mannequinImageUrl},_e(Ae),n("업로드 완료","마네킹 이미지가 성공적으로 변경되었습니다!"),k({type:"TOGGLE_MODAL",modal:"upload",value:!1})}}catch(he){console.error("마네킹 이미지 변경 실패:",he);let Ee="마네킹 이미지 변경에 실패했습니다.";if(he instanceof Ou){const Me=he.response?.status;Me===413?Ee="파일 크기가 너무 큽니다. 10MB 이하의 이미지를 사용해주세요.":Me===405?Ee=`API 메소드가 지원되지 않습니다.

백엔드팀에 /my/mannequins 엔드포인트의 허용 메소드(PUT/POST/PATCH)를 확인해주세요.`:Me===400?Ee=`요청 형식 오류: ${he.response?.data?.message||"잘못된 요청입니다."}

가능한 원인:
• 파일 형식 문제
• 파라미터명 불일치
• 필수값 누락`:Me===415?Ee=`지원하지 않는 파일 형식입니다.

PNG 또는 JPG 파일만 업로드해주세요.`:he.response?.data?.message?Ee=he.response.data.message:he.message==="Network Error"&&(Ee=`CORS 또는 네트워크 오류가 발생했습니다.

개발 중에는 백엔드 CORS 설정이 필요합니다.`)}else he&&typeof he=="object"&&"code"in he&&(Ee=`에러 코드: ${he.code}`);i("업로드 실패",Ee)}finally{k({type:"SET_LOADING",key:"upload",value:!1})}},gt=Q=>{Q.preventDefault(),k({type:"SET_DRAG_OVER",value:!0})},mt=Q=>{Q.preventDefault(),k({type:"SET_DRAG_OVER",value:!1})},tt=Q=>{Q.preventDefault(),k({type:"SET_DRAG_OVER",value:!1});const ce=Array.from(Q.dataTransfer.files);ce.length>0&&At(ce[0])},Qt=_.useCallback(()=>{M.tryOn.isFirstTryOn&&(we(le),H(Be),k({type:"SET_FIRST_TRY_ON",value:!1}))},[M.tryOn.isFirstTryOn,le,Be]),Fe=_.useCallback(Q=>{const ce=b.find(Ee=>Ee.coordinationId===Q&&Ee.isFullCoordination),he=v.find(Ee=>Ee.coordinationId===Q);return{rawData:ce,originalData:he}},[b,v]),ar=_.useCallback((Q,ce,he)=>{if(ce==="full"){const Ee=parseInt(Q.replace("-full","")),{rawData:Me,originalData:Ae}=Fe(Ee);if(!Me||!Ae?.upperId||!Ae?.lowerId)throw new Error("코디 정보를 찾을 수 없습니다.");return{mannequinId:he.mannequinId,upperId:Ae.upperId,lowerId:Ae.lowerId}}else{const Ee=Q.includes("-")?Q.split("-")[0]:Q,Me={mannequinId:he.mannequinId};return ce==="top"?(Me.upperId=Ee,M.tryOn.currentItems.lowerId&&(Me.lowerId=M.tryOn.currentItems.lowerId)):ce==="bottom"&&(Me.lowerId=Ee,M.tryOn.currentItems.upperId&&(Me.upperId=M.tryOn.currentItems.upperId)),Me}},[Fe,M.tryOn.currentItems]),wn=async(Q,ce)=>{if(M.loading.tryOn)return;const he={...M.tryOn.currentItems};try{if(k({type:"SET_LOADING",key:"tryOn",value:!0}),ce==="full"){const un=parseInt(Q.replace("-full","")),{originalData:Xt}=Fe(un);Xt&&k({type:"SET_CURRENT_TRY_ON",items:{upperId:Xt.upperId||void 0,lowerId:Xt.lowerId||void 0}})}else{const un=Q.includes("-")?Q.split("-")[0]:Q,Xt={};ce==="top"?(Xt.upperId=un,M.tryOn.currentItems.lowerId&&(Xt.lowerId=M.tryOn.currentItems.lowerId)):ce==="bottom"&&(Xt.lowerId=un,M.tryOn.currentItems.upperId&&(Xt.upperId=M.tryOn.currentItems.upperId)),k({type:"SET_CURRENT_TRY_ON",items:Xt})}Qt();const Ee=de[be];if(!Ee){o("마네킹 선택 필요","마네킹을 선택해주세요.");return}const Me=ar(Q,ce,Ee),Ae=await AR(Me),it=Ae.data?.UnionImageUrl||Ae.data?.unionImageUrl||Ae.data?.imageUrl||Ae.data?.image_url||Ae.UnionImageUrl||Ae.unionImageUrl||Ae.imageUrl||Ae.image_url;if(!it)throw new Error("AI 이미지 URL을 받지 못했습니다. 서버 응답을 확인해주세요.");const Ie=`${it}?t=${Date.now()}`;ye(Ie);const qe=[...de];qe[be]={...qe[be],mannequinImageUrl:Ie},_e(qe),setTimeout(()=>{ye(Ie)},100)}catch(Ee){console.error("시착하기 실패:",Ee),k({type:"SET_CURRENT_TRY_ON",items:he});let Me="시착하기에 실패했습니다.";if(Ee instanceof Ou&&Ee.response){const Ae=Ee.response.status;Ae===400?Me="잘못된 요청입니다. 상품 정보를 확인해주세요.":Ae===401?Me="로그인이 필요합니다.":Ae===404?Me="마네킹 또는 상품을 찾을 수 없습니다.":Ae===500?Me="AI 서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.":Ee.response.data?.message&&(Me=Ee.response.data.message)}i("시착 실패",Me)}finally{k({type:"SET_LOADING",key:"tryOn",value:!1})}},xt=()=>{I!=="wishlist"&&$("wishlist"),k({type:"SET_SELECTION_MODE",value:!0}),k({type:"RESET_SELECTION"})},sn=(Q,ce)=>{const he=M.selection.items;if(ce==="top"){const Ee={...he,upperId:he.upperId===Q?void 0:Q};k({type:"SET_SELECTED_ITEMS",items:Ee})}else if(ce==="bottom"){const Ee={...he,lowerId:he.lowerId===Q?void 0:Q};k({type:"SET_SELECTED_ITEMS",items:Ee})}},Un=async()=>{if(M.loading.save)return;const Q=db(M.selection.items);if(!Q.isValid){o("유효성 검사 실패",Q.message);return}try{k({type:"SET_LOADING",key:"save",value:!0});const ce=await ub(M.selection.items);ce.success&&(n("저장 완료",ce.message||"코디가 저장되었습니다!"),k({type:"SET_SELECTION_MODE",value:!1}),k({type:"RESET_SELECTION"}),$("mycodi"),A())}catch(ce){console.error("코디 저장 실패:",ce);const he=ce instanceof Error?ce.message:"코디 저장에 실패했습니다";i("코디 저장 실패",he)}finally{k({type:"SET_LOADING",key:"save",value:!1})}},ia=!!(M.selection.items.upperId||M.selection.items.lowerId)&&!M.loading.save,Cr=!!(M.tryOn.currentItems.upperId||M.tryOn.currentItems.lowerId),In=Cr&&!M.loading.save,kr=async()=>{if(M.loading.save)return;if(!M.tryOn.currentItems.upperId&&!M.tryOn.currentItems.lowerId){o("저장 실패","시착 중인 아이템이 없습니다.");return}const Q=db(M.tryOn.currentItems);if(!Q.isValid){o("유효성 검사 실패",Q.message);return}try{k({type:"SET_LOADING",key:"save",value:!0});const ce=await ub(M.tryOn.currentItems);ce.success&&(n("저장 완료",ce.message||"시착 중인 코디가 저장되었습니다!"),$("mycodi"),A())}catch(ce){console.error("코디 저장 실패:",ce);const he=ce instanceof Error?ce.message:"코디 저장에 실패했습니다";i("코디 저장 실패",he)}finally{k({type:"SET_LOADING",key:"save",value:!1})}},Et=()=>{k({type:"SET_SELECTION_MODE",value:!1}),k({type:"RESET_SELECTION"})},xn=()=>{k({type:"SET_DELETE_MODE",value:!0}),k({type:"RESET_DELETE_SELECTION"})},Bt=()=>{k({type:"SET_DELETE_MODE",value:!1}),k({type:"RESET_DELETE_SELECTION"})},oa=Q=>{k({type:"TOGGLE_CODI_SELECTION",id:Q})},la=async()=>{if(M.loading.deleteCoordination)return;const Q=M.deleteMode.selectedCodiIds;if(Q.length===0){o("선택 필요","삭제할 코디를 선택해주세요.");return}try{k({type:"SET_LOADING",key:"deleteCoordination",value:!0});const ce=Q.map(Ae=>TR(Ae)),he=await Promise.allSettled(ce),Ee=he.filter(Ae=>Ae.status==="fulfilled").length,Me=he.filter(Ae=>Ae.status==="rejected");if(Ee>0)Me.length>0?o("부분 삭제 완료",`${Ee}개 코디가 삭제되었습니다. ${Me.length}개 코디는 삭제에 실패했습니다.`):n("삭제 완료",`${Ee}개 코디가 성공적으로 삭제되었습니다.`),k({type:"SET_DELETE_MODE",value:!1}),k({type:"RESET_DELETE_SELECTION"}),A();else{const Ae=Me[0],it=Ae.status==="rejected"?Ae.reason.message:"코디 삭제에 실패했습니다.";i("코디 삭제 실패",it)}}catch(ce){console.error("코디 삭제 실패:",ce),i("삭제 오류","코디 삭제 중 오류가 발생했습니다.")}finally{k({type:"SET_LOADING",key:"deleteCoordination",value:!1})}},$r=M.deleteMode.selectedCodiIds.length>0&&!M.loading.deleteCoordination,Or=()=>{const Q=be===0?3:be-1;ke(Q),cn(Q)},Rr=()=>{const Q=be===3?0:be+1;ke(Q),cn(Q)},Ar=Q=>{ke(Q),cn(Q)},cn=Q=>{const ce=de[Q],he=ce&&ce.mannequinImageUrl!=="default_mannequin_image"?ce.mannequinImageUrl:Xn;ye(he),we(he),k({type:"SET_CURRENT_TRY_ON",items:{}}),k({type:"SET_FIRST_TRY_ON",value:!0}),H(Be)},Lr=()=>{if(M.tryOn.isFirstTryOn){o("초기화 불가","시착한 상품이 없어서 초기화할 수 없습니다.");return}ye(Se);const Q=de.map((ce,he)=>{if(!ce)return ce;const Ee=U[he];return{...ce,mannequinImageUrl:Ee===Xn?"default_mannequin_image":Ee}});_e(Q),k({type:"SET_CURRENT_TRY_ON",items:{}}),k({type:"SET_FIRST_TRY_ON",value:!0})},ir=async Q=>{if(I==="wishlist")ue(Q),k({type:"TOGGLE_MODAL",modal:"clothesDetail",value:!0});else if(I==="mycodi"){const ce=parseInt(Q.productId),he=v.find(Ae=>Ae.coordinationId===ce);if(!he){i("코디 조회 실패","코디 정보를 찾을 수 없습니다.");return}const Ee=!he.upperId||!he.lowerId,Me=he.upperId&&he.lowerId;if(Ee){const Ae=he.upperId||he.lowerId;if(!Ae){i("상품 조회 실패","상품 정보를 찾을 수 없습니다.");return}try{const it=await Da(Ae);if(it.success&&it.data){const Ie={productId:it.data.productId,productBrand:it.data.productBrand,productName:it.data.productName,productPrice:it.data.productPrice,productUrl:it.data.productUrl,styleList:it.data.styleList,productImageUrl:it.data.productImageUrl,liked:it.data.isLiked};ue(Ie),k({type:"TOGGLE_MODAL",modal:"clothesDetail",value:!0})}else i("상품 로드 실패","상품 정보를 불러오는데 실패했습니다.")}catch(it){console.error("단일 상품 정보 조회 실패:",it),i("상품 로드 실패","상품 정보를 불러오는데 실패했습니다.")}}else if(Me){const Ae=async Ie=>{try{const qe=await Da(Ie);if(qe.success&&qe.data)return{brand:qe.data.productBrand,name:qe.data.productName,price:qe.data.productPrice,productUrl:qe.data.productUrl,tags:qe.data.styleList}}catch(qe){console.error(`상품 ${Ie} 정보 가져오기 실패:`,qe)}return null},it=async()=>{try{const Ie=await fd(),qe=he.upperId?Ie.some(Xt=>Xt.productId===he.upperId):!1,un=he.lowerId?Ie.some(Xt=>Xt.productId===he.lowerId):!1;return{upperLiked:qe,lowerLiked:un}}catch(Ie){return console.error("찜 목록 조회 실패:",Ie),{upperLiked:!1,lowerLiked:!1}}};try{const[Ie,qe,un]=await Promise.all([he.upperId?Ae(he.upperId):Promise.resolve(null),he.lowerId?Ae(he.lowerId):Promise.resolve(null),it()]),Xt={id:ce.toString(),upper:he.upperId?{id:he.upperId,brand:Ie?.brand||"브랜드 정보 없음",name:Ie?.name||`상의 (ID: ${he.upperId})`,price:Ie?.price||0,productUrl:Ie?.productUrl||"",tags:Ie?.tags||[],imageUrl:he.upperImageUrl||""}:void 0,lower:he.lowerId?{id:he.lowerId,brand:qe?.brand||"브랜드 정보 없음",name:qe?.name||`하의 (ID: ${he.lowerId})`,price:qe?.price||0,productUrl:qe?.productUrl||"",tags:qe?.tags||[],imageUrl:he.lowerImageUrl||""}:void 0};N(Xt),K(un.upperLiked),ve(un.lowerLiked),k({type:"TOGGLE_MODAL",modal:"codiDetail",value:!0})}catch(Ie){console.error("전체 코디 정보 조회 실패:",Ie),i("코디 로드 실패","코디 정보를 불러오는데 실패했습니다.")}}}},Na=()=>{k({type:"TOGGLE_MODAL",modal:"clothesDetail",value:!1}),ue(null)},fe=()=>{k({type:"TOGGLE_MODAL",modal:"codiDetail",value:!1}),N(null)},ge=async()=>{if(pe?.upper)try{const Q=await Ls(pe.upper.id);Q.success?(K(!Y),I==="wishlist"&&S()):console.error("상의 찜하기 토글 실패:",Q.message)}catch(Q){console.error("상의 찜하기 토글 실패:",Q)}},me=async()=>{if(pe?.lower)try{const Q=await Ls(pe.lower.id);Q.success?(ve(!oe),I==="wishlist"&&S()):console.error("하의 찜하기 토글 실패:",Q.message)}catch(Q){console.error("하의 찜하기 토글 실패:",Q)}},xe=()=>{pe&&(k({type:"TOGGLE_MODAL",modal:"codiDetail",value:!1}),N(null),pe.upper&&pe.lower?wn(`${pe.id}-full`,"full"):pe.upper?wn(pe.upper.id,"top"):pe.lower&&wn(pe.lower.id,"bottom"))},He=async()=>{if(!M.loading.download)try{const Q=le;if(!Q||l(Q)){o("다운로드 불가","다운로드할 마네킹 이미지가 없습니다.");return}k({type:"SET_LOADING",key:"download",value:!0});const ce=`${Q}?${Date.now()}`,he=await fetch(ce);if(!he.ok)throw new Error("fetch failed");const Ee=await he.blob(),Me=URL.createObjectURL(Ee),Ae=document.createElement("a");Ae.href=Me,Ae.download=`mannequin-image-${Date.now()}.png`,document.body.appendChild(Ae),Ae.click(),document.body.removeChild(Ae),URL.revokeObjectURL(Me),n("다운로드 완료!","마네킹 이미지가 성공적으로 다운로드되었습니다.")}catch{i("다운로드 실패!","이미지 다운로드에 실패했습니다.")}finally{k({type:"SET_LOADING",key:"download",value:!1})}};return ee(PR,{children:[ee(qR,{children:[C(YR,{children:ee(GR,{children:[ee(XR,{children:[C(VR,{children:"ON"}),C(FR,{children:" - WEAR"})]}),ee(QR,{children:["나에게",C("br",{}),C(ZR,{children:"딱 맞는"})," 코디를",C("br",{}),"입어보세요"]}),ee("div",{css:eA,children:[C("div",{css:fb}),C("p",{css:tA,children:"나만의 피팅 경험"})]}),C("div",{css:fb}),ee("div",{css:nA,children:[ee("div",{css:[pu,pb],children:[C("span",{css:xr,children:"ON-WEAR "}),C("span",{css:xr,children:"ON-WEAR "}),C("span",{css:xr,children:"ON-WEAR "})]}),ee("div",{css:pu,children:[C("span",{css:xr,children:"GOOD FASHION "}),C("span",{css:xr,children:"GOOD FASHION "}),C("span",{css:xr,children:"GOOD FASHION "})]}),ee("div",{css:[pu,pb],children:[C("span",{css:[xr,{opacity:.2}],children:"STYLE "}),C("span",{css:[xr,{opacity:.2}],children:"STYLE "}),C("span",{css:[xr,{opacity:.2}],children:"STYLE "})]}),ee("div",{css:pu,children:[C("span",{css:[xr,{opacity:.2}],children:"TREND "}),C("span",{css:[xr,{opacity:.2}],children:"TREND "}),C("span",{css:[xr,{opacity:.2}],children:"TREND "})]})]}),ee(KR,{children:[C(JR,{}),C(WR,{})]})]})}),C(rA,{children:ee(aA,{children:[C(H8,{mannequinImage:le,currentAvatarIndex:be,avatarImages:Be,onLeftArrow:Or,onRightArrow:Rr,onThumbnailClick:Ar,isLoading:M.loading.tryOn}),C(Q8,{onUploadClick:ct,onDeleteClick:ut,onDownloadClick:He,isUploading:M.loading.upload,isDeleting:M.loading.delete,isDownloading:M.loading.download,isDefaultMannequin:l(le)}),C(iA,{onClick:Lr,title:"마네킹 이미지 초기화",children:C(rE,{size:20})})]})}),ee(oA,{children:[ee(lA,{children:[C(K8,{activeTab:I,onTabClick:Ue}),I==="wishlist"&&C(eC,{activeCategory:te,onCategoryClick:at})]}),C(sA,{children:C(Ak,{items:I==="wishlist"?f:b,activeTab:I,activeCategory:te,isLoading:I==="wishlist"?g:D,error:I==="wishlist"?m:j,onRetry:I==="wishlist"?S:A,isSelectionMode:M.selection.isMode,selectedItems:M.selection.items,onItemSelect:sn,onTryOn:wn,isTryingOn:M.loading.tryOn,onDetailClick:ir,rawWishlistData:h,rawCoordinationData:v,isDeleteMode:M.deleteMode.isMode,selectedCodiIds:M.deleteMode.selectedCodiIds,onCodiSelect:oa,currentTryOnItems:M.tryOn.currentItems})}),C(OS,{activeTab:I,isSelectionMode:M.selection.isMode,isDeleteMode:M.deleteMode.isMode,onSelectClick:xt,onSaveClick:Un,onCancelClick:Et,canSave:ia,onDeleteClick:xn,onDeleteSaveClick:la,onDeleteCancelClick:Bt,canDelete:$r,hasTryOnItems:Cr,onTryOnSaveClick:kr,canTryOnSave:In})]})]}),C(fO,{showUploadModal:M.modals.upload,isDragOver:M.selection.dragOver,onClose:ht,onFileUpload:ne,onDragOver:gt,onDragLeave:mt,onDrop:tt}),X&&C(IO,{open:M.modals.clothesDetail,onClose:Na,data:X}),pe&&C(pR,{open:M.modals.codiDetail,onClose:fe,data:pe,upperLiked:Y,lowerLiked:oe,onToggleUpperLike:ge,onToggleLowerLike:me,onTryOn:xe})]})},PR=P.div`
  position: absolute;
  left: 80px;
  right: 0;
  top: 0;
  bottom: 0;
  width: auto;
  min-height: 100vh;
  margin: 0;
  background: #0f1115;
  border: none;
  overflow: hidden;
  transition: left 0.3s ease;

  nav:hover ~ & {
    left: 200px;
  }

  > * {
    position: relative;
    z-index: 1;
  }
`,qR=P.div`
  display: flex;
  width: 100%;
  height: calc(100vh);
  min-height: 600px;
  gap: 24px;
  overflow: visible;
  background: #0f1115;
  box-shadow: 0 4px 32px rgba(0, 0, 0, 0.3);
  @media (max-width: 1200px) {
    min-height: 500px;
    gap: 16px;
    padding: 12px;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    height: auto;
    min-height: 400px;
  }

  @media (max-width: 768px) {
    gap: 12px;
    min-height: 350px;
  }
`,YR=P.div`
  flex: 0 0 20%;
  height: 100%;
  background: #072bed;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Montserrat', sans-serif;
  min-width: 200px;

  @media (max-width: 1024px) {
    width: 100%;
    margin-bottom: 0;
  }
`,GR=P.div`
  padding: 20px 20px 20px 20px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;

  @media (max-width: 1200px) {
    padding: 32px;
  }

  @media (max-width: 1024px) {
    padding: 28px;
  }

  @media (max-width: 768px) {
    padding: 24px;
  }

  @media (max-width: 480px) {
    padding: 16px;
  }
`,XR=P.div`
  display: flex;
  gap: 8px;
  align-items: center;
  margin-bottom: 16px;
  flex-wrap: wrap;
`,VR=P.span`
  font-size: 32px;
  font-weight: 800;
  color: #a8e840;
  letter-spacing: -1px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 1200px) {
    font-size: 42px;
  }

  @media (max-width: 1024px) {
    font-size: 38px;
  }

  @media (max-width: 768px) {
    font-size: 32px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
  }
`,FR=P.span`
  font-size: 32px;
  font-weight: 800;
  color: #ffffff;
  letter-spacing: -1px;

  @media (max-width: 1200px) {
    font-size: 42px;
  }

  @media (max-width: 1024px) {
    font-size: 38px;
  }

  @media (max-width: 768px) {
    font-size: 32px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
  }
`,QR=P.p`
  font-size: 16px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.4;
  margin: 0;
  margin-bottom: 20px;

  @media (max-width: 1200px) {
    font-size: 22px;
  }

  @media (max-width: 1024px) {
    font-size: 20px;
  }

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`,ZR=P.span`
  color: #a8e840;
  font-weight: 800;
  position: relative;
  z-index: 1;
  letter-spacing: -1px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`,KR=P.div`
  position: absolute;
  bottom: 40px;
  left: 40px;
  display: flex;
  align-items: center;
  gap: 16px;

  @media (max-width: 768px) {
    bottom: 24px;
    left: 24px;
  }
`,JR=P.span`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #a8e840;
  box-shadow: 0 0 10px rgba(168, 232, 64, 0.5);
`,WR=P.span`
  width: 40px;
  height: 2px;
  background: linear-gradient(90deg, #a8e840, rgba(168, 232, 64, 0.3));
`,eA=L`
  margin-top: 40px;
`,fb=L`
  width: 100%;
  height: 2px;
  background: linear-gradient(
    90deg,
    rgba(168, 232, 64, 0.8),
    rgba(168, 232, 64, 0.3),
    rgba(168, 232, 64, 0.1)
  );
  margin-bottom: 20px;
  margin-top: 15px;
  box-shadow: 0 1px 2px rgba(168, 232, 64, 0.2);
`,tA=L`
  font-size: 20px;
  font-weight: 800;
  color: #ffffff;
  letter-spacing: -1px;
  margin: 0;
`,nA=L`
  position: relative;
  width: 100%;
  overflow: hidden;
  transform: skewY(-5deg);
  margin: 20px 0;
  margin-top: 150px;
  height: 400px;
`,pu=L`
  animation: textScrolling 20s linear infinite;
  will-change: transform;
  display: block;
  position: relative;
  white-space: nowrap;

  @keyframes textScrolling {
    0% {
      transform: translate3d(-100%, 0, 0);
    }
    100% {
      transform: translate3d(0%, 0, 0);
    }
  }
`,pb=L`
  animation-direction: reverse;
`,xr=L`
  font-family: 'Montserrat', sans-serif;
  font-size: 100px;
  color: transparent;
  -webkit-text-stroke: 2px #a8e840;
  text-transform: uppercase;
  display: inline-block;
  line-height: 0.75;
  font-weight: 800;
  opacity: 0.9;
  user-select: none;
  text-shadow:
    0 0 10px rgba(168, 232, 64, 0.4),
  filter: drop-shadow(0 0 8px rgba(168, 232, 64, 0.6));
`,rA=P.div`
  flex: 0 0 40%;
  flex-shrink: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  padding-top: 25px;
  padding-bottom: 25px;
  min-width: 280px;
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 8px 40px rgba(0, 0, 0, 0.12);
    transform: translateY(-2px);
  }

  @media (max-width: 1024px) {
    width: 100%;
    align-items: center;
    margin-bottom: 0;
  }
`,aA=P.div`
  position: relative;
  width: 100%;
  flex: 1; /* 전체 ModelSection 공간을 차지 */
  display: flex;
  flex-direction: column;
`,iA=P.button`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 44px;
  height: 44px;
  border: 1px solid #404650;
  background: #2c3038;
  color: #e0e6ed;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  z-index: 12;

  &:hover {
    background: #404650;
    border-color: #5a6169;
    color: #ffffff;
    transform: rotate(180deg) scale(1.05);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
  }

  &:active {
    transform: rotate(180deg) scale(0.95);
  }

  @media (max-width: 1024px) {
    width: 42px;
    height: 42px;
    top: 18px;
    right: 18px;

    svg {
      width: 19px;
      height: 19px;
    }
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    top: 16px;
    right: 16px;

    svg {
      width: 18px;
      height: 18px;
    }
  }

  @media (max-width: 480px) {
    width: 36px;
    height: 36px;
    top: 12px;
    right: 12px;

    svg {
      width: 16px;
      height: 16px;
    }
  }
`,oA=P.div`
  flex: 0 0 35%; /* 40% → 35%로 축소하여 과도한 너비 문제 해결 */
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 25px;
  padding-bottom: 25px;
  position: relative;
  min-width: 350px; /* 400px → 350px로 축소하여 최적화 */
  overflow: visible;
  transition: all 0.3s ease;
  align-items: center; /* SidePanel 내부 요소들을 중앙 정렬 */
  justify-content: flex-start; /* 위쪽부터 배치 */

  &:hover {
    box-shadow: 0 8px 40px rgba(0, 0, 0, 0.12);
    transform: translateY(-2px);
  }

  @media (max-width: 1024px) {
    width: 100%;
    margin-top: 0;
    padding: 16px;
    align-items: center; /* 모바일에서도 중앙 정렬 유지 */
  }

  @media (max-width: 768px) {
    padding: 12px;
    align-items: center; /* 작은 화면에서도 중앙 정렬 유지 */
  }
`,lA=P.div`
  flex-shrink: 0;
  z-index: 10;
  background: #0f1115;
  border-bottom: 1px solid #404650;
  padding: 16px 50px 12px 0px; /* GridContainer와 동일한 우측 여백 적용 */
  margin: 0;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center; /* 중앙 정렬 */
  justify-content: center;
  width: 100%; /* 전체 너비 확보 */
  max-width: 100%; /* 부모 컨테이너 너비를 초과하지 않도록 제한 */
  text-align: center; /* 하위 요소들까지 중앙 정렬 */

  @media (max-width: 768px) {
    padding: 8px 40px 8px 0px; /* 모바일에서도 우측 여백 유지 */
    margin: 0;
    width: 100%;
  }

  @media (max-width: 480px) {
    padding: 0.8% 35px 0.8% 0px; /* 작은 화면에서도 우측 여백 유지 */
    width: 100%;
  }
`,sA=P.div`
  flex: 1;
  position: relative;
  overflow-y: hidden; /* auto → hidden으로 변경하여 스크롤 제거 */
  overflow-x: visible; /* 페이지네이션 바가 잘리지 않도록 수평 오버플로 허용 */
  max-height: 100%; /* 70%에서 55%로 높이 감소 */
  min-height: 100px;
  padding-right: 50px; /* 페이지네이션 바를 위한 추가 여백 */
  padding-bottom: 0; /* 하단 패딩 제거 - ButtonsContainer와 분리됨 */
  background: #0f1115;
  width: 100%; /* GridContainer가 SidePanel의 전체 너비를 사용하도록 설정 */
  align-self: stretch; /* SidePanel의 중앙 정렬에 영향받지 않고 전체 너비 사용 */

  @media (min-width: 1440px) {
    min-height: 200px;
    padding: 2% 50px 0 1.5%; /* 하단 패딩 제거 */
  }

  @media (min-width: 1200px) and (max-width: 1439px) {
    min-height: 175px;
    padding: 1.8% 1.5%; /* 하단 패딩 제거 */
  }

  @media (max-width: 768px) {
    min-height: 120px;
    padding: 1% 1%; /* 하단 패딩 제거 */
  }

  @media (max-width: 480px) {
    min-height: 100px;
    padding: 0.8% 0.8%; /* 하단 패딩 제거 */
  }
`,cA=()=>C(BR,{children:C($R,{})});function pd(){return ee("li",{css:dA,children:[C("div",{css:fA,children:C("div",{css:pA})}),ee("div",{css:hA,children:[C("div",{css:[th,gA]}),C("div",{css:[th,mA]}),C("div",{css:[th,xA]})]})]})}const uA=Wu`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`,LS=L`
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: ${uA} 1.5s infinite;
`,dA=L`
  background: #fff;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  margin: 8px;
  min-width: 220px;
  min-height: 180px;
`,fA=L`
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1;
  background: #f8f9fa;
`,pA=L`
  ${LS}
  width: 100%;
  height: 100%;
  border-radius: 8px 8px 0 0;
`,hA=L`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 8px 10px 10px;
`,th=L`
  ${LS}
  border-radius: 4px;
`,gA=L`
  width: 40%;
  height: 10px;
`,mA=L`
  width: 80%;
  height: 13px;
`,xA=L`
  width: 30%;
  height: 12px;
  margin-top: 4px;
`;function yA(r){return r.toLocaleString("ko-KR")}function bA({brand:r,name:n,price:i,productUrl:o,tags:l,liked:c,onToggleLike:u,onTryOn:f}){const h=n.replace(/([A-Za-z0-9])-([A-Za-z0-9])/g,"$1‑$2");return ee("div",{css:vA,children:[C("hr",{css:SA}),ee("div",{css:_A,children:[ee("div",{css:hu,children:[C("span",{css:os,children:"BRAND"}),C("span",{css:hb,children:r})]}),ee("div",{css:hu,children:[C("span",{css:os,children:"NAME"}),C("span",{css:hb,children:h})]}),ee("div",{css:hu,children:[C("span",{css:os,children:"PRICE"}),ee("span",{css:TA,children:["₩ ",yA(i)]})]}),o&&ee("div",{css:hu,children:[C("span",{css:os,children:"URL"}),C("a",{css:EA,href:o,target:"_blank",rel:"noreferrer",children:o})]})]}),l.length>0&&ee("div",{css:CA,children:[C("span",{css:os,children:"TAGS"}),C("div",{css:kA,children:l.map((g,m)=>C("span",{css:OA,children:g},m))})]}),C("hr",{css:wA}),ee("div",{css:RA,children:[C("button",{css:[gb,AA,c&&LA],onClick:u,children:ee("span",{css:zA,children:[C(ld,{size:18,color:c?"#ff4444":"#d1d5db",fill:c?"#ff4444":"transparent",style:{display:"block"}}),C("span",{children:c?"LIKED":"LIKE"})]})}),C("button",{css:[gb,DA],onClick:f,children:"TRY ON"})]})]})}const vA=L`
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: 100%;
  justify-content: space-between;
  color: #e6e8eb;
`,SA=L`
  border: none;
  height: 1px;
  background: #2a2a2a;
  margin-right: 20px;
  margin-bottom: 50px;
`,wA=L`
  border: none;
  height: 1px;
  background: #2a2a2a;
  margin: 0;
`,_A=L`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,hu=L`
  display: flex;
  align-items: flex-start;
  padding: 8px 0;
  gap: 50px;
`,os=L`
  font-weight: 800;
  font-size: 17px;
  color: #a8e840;
  min-width: 60px;
  border-bottom: 1px solid #2a2a2a;
  width: 10%;
  letter-spacing: 0.02em;
`,hb=L`
  color: #e6e8eb;
  text-align: right;
  font-weight: 700;
  font-size: 13px;
  flex: 1;
  white-space: normal; /* 여러 줄 허용 */
  word-break: keep-all; /* 한국어 단어 단위로 줄바꿈 */
  overflow-wrap: anywhere; /* 너무 긴 토큰은 적절히 분할 */
`,TA=L`
  color: #ffffff;
  font-weight: 700;
  font-size: 14px;
  text-align: right;
  flex: 1;
`,EA=L`
  color: #60a5fa;
  text-decoration: none;
  text-align: right;
  font-size: 13px;
  flex: 1;
  margin-bottom: 50px;
  white-space: normal; /* 여러 줄 허용 */
  word-break: break-all; /* URL은 중간 분할 허용 */
  overflow-wrap: anywhere; /* 특수문자/긴 토큰 안전 분할 */

  &:hover {
    color: #3b82f6;
    text-decoration: underline;
    text-shadow: 0 0 8px rgba(96, 165, 250, 0.6);
  }
`,CA=L`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,kA=L`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  align-items: center;
`,OA=L`
  background: #111111;
  color: #a8e840;
  padding: 6px 12px;
  border-radius: 4px;
  border: 1px solid #2a2a2a;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.02em;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  min-height: 30px;
  line-height: 1;
  transition:
    box-shadow 0.2s ease,
    transform 0.1s ease;

  &:hover {
    box-shadow: 0 0 12px rgba(168, 232, 64, 0.25);
    transform: translateY(-1px);
  }
`,RA=L`
  display: flex;
  gap: 12px;
`,gb=L`
  flex: 1;
  padding: 12px 16px;
  border: none;
  border-radius: 3px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 16px;
`,AA=L`
  background: #111111;
  color: #d1d5db; /* 회색색 */
  border: 1px solid #2a2a2a;

  &:hover {
    color: #ff4444; /* 네온 레드 */
    box-shadow: 0 0 12px rgba(255, 68, 68, 0.25);
  }
`,LA=L`
  background: #111111;
  color: #ff4444;
  border-color: #2a2a2a;
`,zA=L`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`,DA=L`
  background: #111111; /* 네온 다크 베이스 */
  color: rgb(236, 236, 236); /* 약간 회색 텍스트 */
  border: 1px solid #2a2a2a;
  box-shadow: 0 0 0 rgba(0, 0, 0, 0);

  &:hover {
    background: #1a1a1a;
    color: #a8e840; /* 네온 초록 강조 */
    box-shadow: 0 0 12px rgba(168, 232, 64, 0.25);
  }
`;function Ps({open:r,onClose:n,data:i,onLikeChange:o}){const l=Br(),{isLoggedIn:c,member:u}=Ft(),[f,h]=_.useState(null),[g,m]=_.useState(!1),[x,S]=_.useState(!1),[T,w]=_.useState(null),[b,v]=_.useState(!1);_.useEffect(()=>{const k=I=>{I.key==="Escape"&&r&&n()};return r&&document.addEventListener("keydown",k),()=>{document.removeEventListener("keydown",k)}},[r,n]),_.useEffect(()=>{if(!r)return;const k=document.body.style.overflow,I=document.documentElement.style.overflow;return document.body.style.overflow="hidden",document.documentElement.style.overflow="hidden",()=>{document.body.style.overflow=k,document.documentElement.style.overflow=I}},[r]);const D=_.useCallback(async()=>{try{S(!0),w(null);const k=await Da(i.productId);if(k.success&&k.data){const I={productId:k.data.productId,productBrand:k.data.productBrand,productName:k.data.productName,productPrice:k.data.productPrice,productUrl:k.data.productUrl,styleList:k.data.styleList,productImageUrl:k.data.productImageUrl,liked:k.data.isLiked};h(I)}else w(k.message||"상품 정보를 불러오는데 실패했습니다."),h(i)}catch(k){console.error("상품 상세 정보 조회 실패:",k),w("상품 정보를 불러오는데 실패했습니다."),h(i)}finally{S(!1)}},[i]),j=_.useCallback(async()=>{if(!c||!i.productId){m(!1);return}try{const I=(await fd()).some($=>$.productId===i.productId);m(I)}catch(k){console.error("찜 목록 조회 실패:",k),m(!1)}},[c,i.productId]),A=_.useCallback(async()=>{if(!u||!i.productId)return;const k={userId:u.memberId,timestamp:new Date().toISOString(),actionType:"goDetail",productId:i.productId,productName:i.productName,productBrand:i.productBrand,productPrice:i.productPrice,searchTerm:null},I=JSON.parse(sessionStorage.getItem("user_actions")||"[]");if(!I.some(te=>te.productId===i.productId)){const te=[...I,k];sessionStorage.setItem("user_actions",JSON.stringify(te));try{await Jr([k]),console.log("모달 열기 액션이 실시간으로 전송되었습니다.")}catch(re){console.error("모달 열기 액션 전송 중 오류 발생:",re)}if(te.length>=5)try{Jr(te).then(()=>{console.log("사용자 행동 로그가 5개가 되어 서버로 전송되었습니다."),sessionStorage.removeItem("user_actions")})}catch(re){console.error("모달 열기 로그 서버 저장 중 오류 발생:",re)}}},[u,i]);_.useEffect(()=>{r&&i.productId&&(A(),i.productId&&i.productName&&i.productBrand?(h(i),S(!1)):D(),i.liked!==void 0?m(i.liked):j())},[r,i,D,j,A]);const z=async()=>{if(!c){v(!0);return}try{if((await Ls(i.productId)).success){await j(),o&&o(i.productId,!g);const I=JSON.parse(sessionStorage.getItem("user_actions")||"[]"),$=I.some(le=>le.productId===i.productId),te={userId:u?.memberId||0,timestamp:new Date().toISOString(),actionType:$?"unlike":"like",productId:i.productId,searchTerm:null};let re;$?re=I.filter(le=>le.productId!==i.productId):re=[...I,te],sessionStorage.setItem("user_actions",JSON.stringify(re));try{await Jr([te]),console.log("사용자 액션이 실시간으로 전송되었습니다.")}catch(le){console.error("사용자 액션 전송 중 오류 발생:",le)}if(re.length>=5)try{await Jr(re),sessionStorage.removeItem("user_actions")}catch(le){console.error("서버 저장 중 오류 발생:",le)}}}catch(k){console.error("찜하기 토글 실패:",k)}},R=async()=>{if(!c){v(!0);return}try{if(!g&&(await Ls(i.productId)).success){m(!0),o&&o(i.productId,!0);const I=JSON.parse(sessionStorage.getItem("user_actions")||"[]"),$={userId:u?.memberId||0,timestamp:new Date().toISOString(),actionType:"like",productId:i.productId,searchTerm:null},te=[...I,$];sessionStorage.setItem("user_actions",JSON.stringify(te));try{await Jr([$]),console.log("사용자 액션이 실시간으로 전송되었습니다.")}catch(re){console.error("사용자 액션 전송 중 오류 발생:",re)}if(te.length>=5)try{await Jr(te),sessionStorage.removeItem("user_actions")}catch(re){console.error("서버 저장 중 오류 발생:",re)}}}catch(k){console.error("TRY ON 중 찜하기 자동 처리 실패:",k)}finally{n(),l("fittingroom")}};if(!r)return null;const M=f||i;return Fu.createPortal(ee("div",{css:MA,onClick:n,onWheel:k=>k.preventDefault(),children:[ee("div",{css:NA,onClick:k=>k.stopPropagation(),children:[C("button",{css:jA,onClick:n,children:"✕"}),x?C("div",{css:HA,children:"상품 정보를 불러오는 중..."}):T?C("div",{css:$A,children:T}):ee(ra,{children:[C("section",{css:UA,children:C("div",{css:IA,children:C(RS,{src:M.productImageUrl,alt:M.productName})})}),C("section",{css:BA,children:C(bA,{brand:M.productBrand,name:M.productName,price:M.productPrice,productUrl:M.productUrl,tags:M.styleList||[],liked:g,onToggleLike:z,onTryOn:R})})]})]}),C(Ma,{show:b,onClose:()=>v(!1),message:"로그인이 필요합니다."})]}),document.body)}const MA=L`
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
`,NA=L`
  background: #0f0f10; /* 네온 컨셉 다크 베이스 */
  width: 850px;
  /* 고정 높이 모달은 뷰포트가 작을 때 내부 스크롤이 막히기 쉬워서
     height + max-height 조합으로 안전하게 처리 */
  height: min(550px, 86vh);
  max-height: 86vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  padding: 24px;
  position: relative;
  border: 1px solid #1a1a1a;
  border-radius: 0;
  box-shadow:
    0 10px 28px rgba(0, 0, 0, 0.5),
    0 0 24px rgba(168, 232, 64, 0.15);
  overflow: hidden;
  min-height: 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    width: min(92vw, 850px);
    height: min(86vh, 720px);
  }
`,jA=L`
  position: absolute;
  top: 12px;
  right: 12px;
  border: none;
  background: transparent;
  color: #a8e840;
  font-size: 20px;
  cursor: pointer;
  transition:
    transform 0.15s ease,
    color 0.2s ease,
    text-shadow 0.2s ease;

  &:hover {
    color: #666; /* 회색 */
    transform: scale(1.05);
  }
`,UA=L`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  min-height: 0; /* grid 아이템 수축 허용 */
  overflow: hidden;
`,IA=L`
  position: relative;
  width: 100%;
  height: 100%;
`,BA=L`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 0;
  overflow-y: auto;
  overscroll-behavior: contain;
  -webkit-overflow-scrolling: touch;
`,HA=L`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  font-size: 16px;
  color: #666;
`,$A=L`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  font-size: 16px;
  color: #e03131;
`,Ih=r=>ol.post("/user/save",r),zS=(r,n=10,i)=>{const o=new URLSearchParams({page:r.toString(),size:n.toString()});return ol.get(`/recommend?${o.toString()}`)},R0=r=>Rt.post(`/products/likes/${r}`),DS=()=>Rt.get("/my/likes");function MS(){return C("div",{css:qA,children:C("div",{css:YA})})}const PA=Wu`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`,qA=L`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`,YA=L`
  width: 40px;
  height: 40px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  animation: ${PA} 1s linear infinite;
`;function GA(){const{member:r}=Ft(),[n,i]=_.useState([]),[o,l]=_.useState(null),[c,u]=_.useState(!1),[f,h]=_.useState(!1),[g,m]=_.useState(!0),[x,S]=_.useState(!1),[T,w]=_.useState(0),[b,v]=_.useState(!0),[D,j]=_.useState([]),[A,z]=_.useState(!1),R=_.useRef(null),M=20,k=100,I=_.useCallback(async()=>{try{return(await DS()).data.data}catch(U){return console.error("Error fetching wishlist products:",U),[]}},[]),$=_.useCallback(async(U,H=!1)=>{H?m(!0):S(!0);try{const X=await I(),ue=await zS(U,M),{recommended_products:pe,styleTags:N}=ue.data.result;if(H&&N){const ve=N.map(de=>de[0]);j(ve)}const Y=new Set(X.map(ve=>ve.productId)),K=new Map;pe.forEach(ve=>K.set(ve.productId,{...ve,liked:Y.has(ve.productId)}));const oe=Array.from(K.values());i(H?oe:ve=>{const de=[...ve,...oe],_e=new Map;return de.forEach(be=>_e.set(be.productId,be)),Array.from(_e.values())}),v(oe.length===M&&(U+1)*M<k),H?m(!1):S(!1)}catch(X){console.error("Error fetching recommended products:",X),H?m(!1):S(!1)}},[I,M]);_.useEffect(()=>{$(0,!0)},[$]);const te=_.useCallback(U=>{const{scrollTop:H,clientHeight:X,scrollHeight:ue}=U.currentTarget;if(z(H>150),ue-H<=X*1.5&&!x&&b){const pe=T+1;w(pe),$(pe,!1)}},[$,x,b,T]),re=()=>{const U=R.current;U&&U.scrollTo({top:0,behavior:"smooth"})},le=async U=>{if(!r){h(!0);return}(await R0(U)).status===200&&i(Y=>Y.map(K=>K.productId===U?{...K,liked:!K.liked}:K));const X=JSON.parse(sessionStorage.getItem("user_actions")||"[]"),ue=X.some(Y=>Y.productId===U),pe={userId:r?.memberId||0,timestamp:new Date().toISOString(),actionType:"like",productId:U,searchTerm:null};let N;if(ue?N=X.filter(Y=>Y.productId!==U):N=[...X,pe],sessionStorage.setItem("user_actions",JSON.stringify(N)),N.length>=1)try{await Ih(N),console.log("찜 목록이 1개가 되어 서버로 전송되었습니다."),sessionStorage.removeItem("user_actions")}catch(Y){console.error("서버 저장 중 오류 발생:",Y)}},ye=async U=>{try{const X=await Da(U);if(X.success&&X.data){const ue=X.data,pe={productId:ue.productId,productBrand:ue.productBrand,productName:ue.productName,productPrice:ue.productPrice,productImageUrl:ue.productImageUrl,productUrl:ue.productUrl,styleList:ue.styleList,liked:ue.isLiked};l(pe),u(!0);const N=JSON.parse(sessionStorage.getItem("user_actions")||"[]"),Y={userId:r?.memberId||0,timestamp:new Date().toISOString(),actionType:"goDetail",productId:U,searchTerm:null},K=[...N,Y];if(sessionStorage.setItem("user_actions",JSON.stringify(K)),K.length>=1)try{await Ih(K),console.log("사용자 행동 로그가 1개가 되어 서버로 전송되었습니다."),sessionStorage.removeItem("user_actions")}catch(oe){console.error("서버 저장 중 오류 발생:",oe)}return}}catch(X){console.warn("상품 상세 API 실패, 목록 데이터로 대체합니다.",X)}const H=n.find(X=>X.productId===U);if(H){const X={productId:H.productId,productBrand:H.productBrand,productName:H.productName,productPrice:H.productPrice,productImageUrl:H.productImageUrl,productUrl:H.productUrl,styleList:H.styleList,liked:H.liked};l(X),u(!0)}else console.warn("상품 정보를 불러오지 못했어요")},Se=()=>{u(!1),l(null)},we=(U,H)=>{i(X=>X.map(ue=>ue.productId===U?{...ue,liked:H}:ue))};return ee(ra,{children:[ee("div",{css:XA,onScroll:te,ref:R,children:[g?C(ra,{children:C("ul",{css:mb,children:Array(10).fill(null).map((U,H)=>C(pd,{},H))})}):ee("ul",{css:mb,children:[n.map(U=>C(Qi,{product:U,onClick:()=>ye(U.productId),onToggleLike:le},U.productId)),x&&C("div",{css:iL,children:C(MS,{})})]}),A&&C("button",{css:oL,onClick:re,children:C(od,{size:20})})]}),C("div",{css:VA,children:ee("div",{css:FA,children:[ee("div",{css:QA,children:[C("span",{css:ZA,children:"MY"}),C("span",{css:KA,children:"STYLE"})]}),ee("p",{css:JA,children:["당신만의",C("br",{}),C("span",{css:WA,children:"맞춤 스타일"}),"로",C("br",{}),"추천해드려요"]}),ee("div",{css:lL,children:[C("div",{css:xb}),ee("p",{css:sL,children:[r?.memberName,"님의 취향은?"]}),C("p",{css:cL,children:"관심 있는 상품을 찜하고, 취향에 맞는 추천을 받아보세요!"})]}),C("div",{css:rL,children:D.map((U,H)=>ee("span",{css:aL,children:["#",U]},H))}),C("div",{css:xb}),ee("div",{css:uL,children:[ee("div",{css:[gu,yb],children:[C("span",{css:yr,children:"ON-WEAR "}),C("span",{css:yr,children:"ON-WEAR "}),C("span",{css:yr,children:"ON-WEAR "})]}),ee("div",{css:gu,children:[C("span",{css:yr,children:"GOOD FASHION "}),C("span",{css:yr,children:"GOOD FASHION "}),C("span",{css:yr,children:"GOOD FASHION "})]}),ee("div",{css:[gu,yb],children:[C("span",{css:[yr,{opacity:.2}],children:"STYLE "}),C("span",{css:[yr,{opacity:.2}],children:"STYLE "}),C("span",{css:[yr,{opacity:.2}],children:"STYLE "})]}),ee("div",{css:gu,children:[C("span",{css:[yr,{opacity:.2}],children:"TREND "}),C("span",{css:[yr,{opacity:.2}],children:"TREND "}),C("span",{css:[yr,{opacity:.2}],children:"TREND "})]})]}),ee("div",{css:eL,children:[C("span",{css:tL}),C("span",{css:nL})]})]})}),o&&C(Ps,{open:c,onClose:Se,data:o,onLikeChange:we}),C(Ma,{show:f,onClose:()=>h(!1),message:"로그인이 필요합니다."})]})}const XA=L`
  width: 80%;
  height: 100vh;
  overflow-y: scroll;
  padding: 35px 28px;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.1);
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.3);
    border: 2px solid transparent;
    background-clip: padding-box;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.5);
    border: 2px solid transparent;
    background-clip: padding-box;
  }
`,VA=L`
  width: 20%;
  height: 100vh;
  background: #072bed;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  font-family: 'Montserrat', sans-serif;
`,FA=L`
  padding: 20px 20px 20px 20px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
`,QA=L`
  display: flex;
  gap: 8px;
  align-items: center;
  margin-bottom: 16px;
  flex-wrap: wrap;
`,ZA=L`
  font-size: 32px;
  font-weight: 800;
  color: #a8e840;
  letter-spacing: -1px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`,KA=L`
  font-size: 32px;
  font-weight: 800;
  color: #ffffff;
  letter-spacing: -1px;
`,JA=L`
  font-size: 16px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.4;
  margin: 0;
  margin-bottom: 20px;
`,WA=L`
  color: #a8e840;
  font-weight: 800;
  position: relative;
  z-index: 1;
  letter-spacing: -1px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`,eL=L`
  position: absolute;
  bottom: 40px;
  left: 40px;
  display: flex;
  align-items: center;
  gap: 16px;
`,tL=L`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #a8e840;
  box-shadow: 0 0 10px rgba(168, 232, 64, 0.5);
`,nL=L`
  width: 40px;
  height: 2px;
  background: linear-gradient(90deg, #a8e840, rgba(168, 232, 64, 0.3));
`,rL=L`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 20px 0;
`,aL=L`
  display: inline-block;
  padding: 6px 12px;
  background: rgba(168, 232, 64, 0.2);
  border: 1px solid rgba(168, 232, 64, 0.4);
  border-radius: 5px;
  color: #a8e840;
  font-size: 14px;
  font-weight: 600;
  transition: all 0.2s ease;
  cursor: default;
`,iL=L`
  grid-column: 1 / -1;
  display: flex;
  justify-content: center;
  padding: 20px;
`,oL=L`
  position: fixed;
  right: 280px;
  bottom: 20px;
  z-index: 2000;
  width: 48px;
  height: 48px;
  background: #1a1a1a;
  border: 1px solid #a8e840;
  border-radius: 50%;
  color: #a8e840;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow:
    0 4px 12px rgba(0, 0, 0, 0.3),
    0 0 20px rgba(168, 232, 64, 0.3);
  transition: all 0.3s ease;

  &:hover {
    background: #0f1115;
    color: #60a5fa;
    border-color: #60a5fa;
    box-shadow:
      0 6px 16px rgba(0, 0, 0, 0.4),
      0 0 30px rgba(96, 165, 250, 0.4);
  }
`,mb=L`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  gap: 0;
  transition: transform 0.5s ease-in-out;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,lL=L`
  margin-top: 40px;
`,xb=L`
  width: 100%;
  height: 2px;
  background: linear-gradient(
    90deg,
    rgba(168, 232, 64, 0.8),
    rgba(168, 232, 64, 0.3),
    rgba(168, 232, 64, 0.1)
  );
  margin-bottom: 20px;
  margin-top: 15px;
  box-shadow: 0 1px 2px rgba(168, 232, 64, 0.2);
`,sL=L`
  font-size: 25px;
  font-weight: 800;
  color: #ffffff;
  letter-spacing: -1px;
  margin: 0;
`,cL=L`
  font-size: 12px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.9);
  letter-spacing: -1px;
  margin-top: 10px;
  margin-bottom: -20px;
`,uL=L`
  position: relative;
  width: 100%;
  overflow: hidden;
  transform: skewY(-5deg);
  margin: 20px 0;
  margin-top: 150px;
  height: 400px;
`,gu=L`
  animation: textScrolling 20s linear infinite;
  will-change: transform;
  display: block;
  position: relative;
  white-space: nowrap;

  @keyframes textScrolling {
    0% {
      transform: translate3d(-100%, 0, 0);
    }
    100% {
      transform: translate3d(0%, 0, 0);
    }
  }
`,yb=L`
  animation-direction: reverse;
`,yr=L`
  font-family: 'Montserrat', sans-serif;
  font-size: 100px;
  color: transparent;
  -webkit-text-stroke: 2px #a8e840;
  text-transform: uppercase;
  display: inline-block;
  line-height: 0.75;
  font-weight: 800;
  opacity: 0.9;
  user-select: none;
  text-shadow:
    0 0 10px rgba(168, 232, 64, 0.4),
  filter: drop-shadow(0 0 8px rgba(168, 232, 64, 0.6));
`;function dL(){const{member:r}=Ft(),[n,i]=_.useState([]),[o,l]=_.useState(null),[,c]=_.useState([]),[u,f]=_.useState(!1),[h,g]=_.useState(null),[m,x]=_.useState(!1),[S,T]=_.useState(!0),[w,b]=_.useState(!1),[v,D]=_.useState(0),[j,A]=_.useState(!0),[z,R]=_.useState(!1),M=_.useRef(null),k=20,I=100,$=_.useCallback(async()=>{try{const X=(await DS()).data.data;c(X)}catch(H){console.error("Error fetching wishlist products:",H)}},[]),te=_.useCallback(async(H,X=!1)=>{X?(g(null),T(!0)):b(!0);try{const ue=await zS(H,k),{recommended_products:pe}=ue.data.result,N=new Map;pe.forEach(K=>N.set(K.productId,K));const Y=Array.from(N.values());i(X?Y:K=>{const oe=[...K,...Y],ve=new Map;return oe.forEach(de=>ve.set(de.productId,de)),Array.from(ve.values())}),A(Y.length===k&&(H+1)*k<I),X?T(!1):b(!1)}catch(ue){g("추천 상품을 불러오지 못했어요."),console.error("Error fetching recommended products:",ue),X?T(!1):b(!1)}},[k]);_.useEffect(()=>{r&&$()},[$,r]),_.useEffect(()=>{te(0,!0)},[te]),_.useEffect(()=>{const H=M.current;if(!H)return;const X=()=>{const ue=H.scrollTop;R(ue>150)};return H.addEventListener("scroll",X),()=>H.removeEventListener("scroll",X)},[]);const re=()=>{const H=M.current;H&&H.scrollTo({top:0,behavior:"smooth"})},le=_.useCallback(H=>{const{scrollTop:X,clientHeight:ue,scrollHeight:pe}=H.currentTarget;if(pe-X<=ue*1.5&&!w&&j){const N=v+1;D(N),te(N,!1)}},[te,w,j,v]),ye=()=>{f(!1),l(null)},Se=async H=>{if(!r){x(!0);return}(await R0(H)).status===200&&i(K=>K.map(oe=>oe.productId===H?{...oe,liked:!oe.liked}:oe));const ue=JSON.parse(sessionStorage.getItem("liked_products")||"[]"),pe=ue.some(K=>K.productId===H),N={userId:r?.memberId||0,timestamp:new Date().toISOString(),actionType:"like",productId:H,searchTerm:null};let Y;if(pe?Y=ue.filter(K=>K.productId!==H):Y=[...ue,N],sessionStorage.setItem("liked_products",JSON.stringify(Y)),Y.length>=5)try{await Ih(Y),console.log("찜 목록이 5개가 되어 서버로 전송되었습니다."),sessionStorage.removeItem("liked_products")}catch(K){console.error("서버 저장 중 오류 발생:",K)}},we=async H=>{try{const X=await Da(H);if(X.success&&X.data){const ue={productId:X.data.productId,productBrand:X.data.productBrand,productName:X.data.productName,productPrice:X.data.productPrice,productImageUrl:X.data.productImageUrl,productUrl:X.data.productUrl,styleList:X.data.styleList,liked:X.data.isLiked};l(ue),f(!0)}}catch(X){console.error("Error fetching product detail:",X)}},U=(H,X)=>{i(ue=>ue.map(pe=>pe.productId===H?{...pe,liked:X}:pe))};return ee(ra,{children:[C("div",{css:fL,children:S?ee(ra,{children:[C("div",{css:pL,children:C("ul",{css:Lb,children:Array(10).fill(null).map((H,X)=>C(pd,{},X))})}),C("div",{css:bb,children:ee("div",{css:vb,children:[ee("div",{css:Sb,children:[C("span",{css:wb,children:"SHUFFLE"}),C("span",{css:_b,children:"PICKs"})]}),ee("p",{css:Tb,children:["로그인하고",C("br",{}),C("span",{css:Eb,children:"나만의 스타일"}),"로",C("br",{}),"추천받아보세요"]}),ee("div",{css:Cb,children:[C("span",{css:kb}),C("span",{css:Ob})]})]})})]}):ee(ra,{children:[h&&C("div",{css:hL,children:h}),ee("div",{css:gL,ref:M,onScroll:le,children:[z&&C("button",{css:vL,onClick:re,children:C(od,{size:20})}),ee("ul",{css:Lb,children:[n.map(H=>C(Qi,{product:H,onClick:()=>we(H.productId),onToggleLike:Se},H.productId)),w?C("div",{css:bL,children:C(MS,{})}):!j&&n.length>0&&ee("div",{css:SL,children:[C("div",{css:zb}),C("p",{css:wL,children:"모든 상품을 불러왔어요"}),C("div",{css:zb})]})]})]}),C("div",{css:bb,children:ee("div",{css:vb,children:[ee("div",{css:Sb,children:[C("span",{css:wb,children:"HOT"}),C("span",{css:_b,children:"ITEMS"})]}),ee("p",{css:Tb,children:["로그인하고",C("br",{}),C("span",{css:Eb,children:"나만의 스타일"}),"로",C("br",{}),"추천받아보세요"]}),C("div",{css:mL,children:C("div",{css:Rb})}),ee("div",{css:xL,children:[C("span",{css:ls,children:"#상의"}),C("span",{css:ls,children:"#하의"}),C("span",{css:ls,children:"#아우터"}),C("span",{css:ls,children:"#신발"}),C("span",{css:ls,children:"#악세서리"})]}),C("div",{css:Rb}),ee("div",{css:yL,children:[ee("div",{css:[mu,Ab],children:[C("span",{css:br,children:"ON-WEAR "}),C("span",{css:br,children:"ON-WEAR "}),C("span",{css:br,children:"ON-WEAR "})]}),ee("div",{css:mu,children:[C("span",{css:br,children:"GOOD FASHION "}),C("span",{css:br,children:"GOOD FASHION "}),C("span",{css:br,children:"GOOD FASHION "})]}),ee("div",{css:[mu,Ab],children:[C("span",{css:[br,{opacity:.2}],children:"STYLE "}),C("span",{css:[br,{opacity:.2}],children:"STYLE "}),C("span",{css:[br,{opacity:.2}],children:"STYLE "})]}),ee("div",{css:mu,children:[C("span",{css:[br,{opacity:.2}],children:"TREND "}),C("span",{css:[br,{opacity:.2}],children:"TREND "}),C("span",{css:[br,{opacity:.2}],children:"TREND "})]})]}),ee("div",{css:Cb,children:[C("span",{css:kb}),C("span",{css:Ob})]})]})})]})}),o&&C(Ps,{open:u,onClose:ye,data:o,onLikeChange:U}),C(Ma,{show:m,onClose:()=>x(!1),message:"로그인이 필요합니다."})]})}const fL=L`
  display: flex;
  width: 100%;
  height: 100vh;
`,pL=L`
  width: 80%;
  height: 100vh;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.1);
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.3);
    border: 2px solid transparent;
    background-clip: padding-box;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.5);
    border: 2px solid transparent;
    background-clip: padding-box;
  }
`,hL=L`
  text-align: center;
  padding: 20px;
  color: #e03131;
  font-size: 16px;
`,gL=L`
  position: relative;
  width: 80%; /* 3:1 비율로 변경 */
  height: 100vh;
  padding: 0 20px;
  overflow-y: scroll;

  /* 스크롤바 스타일링 */
  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.1);
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.3);
    border-radius: 20px;
    border: 2px solid transparent;
    background-clip: padding-box;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.5);
    border: 2px solid transparent;
    background-clip: padding-box;
  }
`,bb=L`
  width: 20%;
  height: 100vh;
  background: #072bed;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  font-family: 'Montserrat', sans-serif;
`,vb=L`
  padding: 20px 20px 20px 20px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
`,Sb=L`
  display: flex;
  gap: 8px;
  align-items: center;
  margin-bottom: 16px;
  flex-wrap: wrap;
`,wb=L`
  font-size: 32px;
  font-weight: 800;
  color: #a8e840;
  letter-spacing: -1px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`,_b=L`
  font-size: 32px;
  font-weight: 800;
  color: #ffffff;
  letter-spacing: -1px;
`,Tb=L`
  font-size: 16px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.4;
  margin: 0;
  margin-bottom: 20px;
`,Eb=L`
  color: #a8e840;
  font-weight: 800;
  position: relative;
  z-index: 1;
  letter-spacing: -1px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`,Cb=L`
  position: absolute;
  bottom: 40px;
  left: 40px;
  display: flex;
  align-items: center;
  gap: 16px;
`,kb=L`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #a8e840;
  box-shadow: 0 0 10px rgba(168, 232, 64, 0.5);
`,Ob=L`
  width: 40px;
  height: 2px;
  background: linear-gradient(90deg, #a8e840, rgba(168, 232, 64, 0.3));
`,mL=L`
  margin-top: 40px;
`,Rb=L`
  width: 100%;
  height: 2px;
  background: linear-gradient(
    90deg,
    rgba(168, 232, 64, 0.8),
    rgba(168, 232, 64, 0.3),
    rgba(168, 232, 64, 0.1)
  );
  margin-bottom: 20px;
  margin-top: 15px;
  box-shadow: 0 1px 2px rgba(168, 232, 64, 0.2);
`,xL=L`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 20px 0;
`,ls=L`
  display: inline-block;
  padding: 6px 12px;
  background: rgba(168, 232, 64, 0.2);
  border: 1px solid rgba(168, 232, 64, 0.4);
  border-radius: 20px;
  color: #a8e840;
  font-size: 14px;
  font-weight: 600;
  transition: all 0.2s ease;
  cursor: default;
`,yL=L`
  position: relative;
  width: 100%;
  overflow: hidden;
  transform: skewY(-5deg);
  margin: 20px 0;
  margin-top: 150px;
  height: 400px;
`,mu=L`
  animation: textScrolling 20s linear infinite;
  will-change: transform;
  display: block;
  position: relative;
  white-space: nowrap;

  @keyframes textScrolling {
    0% {
      transform: translate3d(-100%, 0, 0);
    }
    100% {
      transform: translate3d(0%, 0, 0);
    }
  }
`,Ab=L`
  animation-direction: reverse;
`,br=L`
  font-family: 'Montserrat', sans-serif;
  font-size: 100px;
  color: transparent;
  -webkit-text-stroke: 2px #a8e840;
  text-transform: uppercase;
  display: inline-block;
  line-height: 0.75;
  font-weight: 800;
  opacity: 0.9;
  user-select: none;
  text-shadow:
    0 0 10px rgba(168, 232, 64, 0.4),
  filter: drop-shadow(0 0 5px rgba(168, 232, 64, 0.3));
`,Lb=L`
  list-style: none;
  margin: 0;
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  gap: 0;
  transition: transform 0.5s ease-in-out;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,bL=L`
  grid-column: 1 / -1;
  display: flex;
  justify-content: center;
  padding: 20px;
`,vL=L`
  position: fixed;
  top: 92%;
  bottom: 24px;
  z-index: 2000;
  width: 48px;
  height: 48px;
  background: #1a1a1a;
  border: 1px solid #a8e840;
  border-radius: 50%;
  color: #a8e840;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow:
    0 4px 12px rgba(0, 0, 0, 0.3),
    0 0 20px rgba(168, 232, 64, 0.3);
  transition: all 0.3s ease;

  &:hover {
    background: #0f1115;
    color: #60a5fa;
    border-color: #60a5fa;
    box-shadow:
      0 6px 16px rgba(0, 0, 0, 0.4),
      0 0 30px rgba(96, 165, 250, 0.4);
  }
`,SL=L`
  grid-column: 1 / -1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 20px;
  width: 100%;
`,zb=L`
  flex: 1;
  height: 1px;
  background: linear-gradient(
    90deg,
    rgba(168, 232, 64, 0.1),
    rgba(168, 232, 64, 0.3),
    rgba(168, 232, 64, 0.1)
  );
`,wL=L`
  color: rgba(168, 232, 64, 0.6);
  font-size: 14px;
  font-weight: 600;
  margin: 0;
  white-space: nowrap;
`;function _L(){const r=Ft(o=>o.isLoggedIn),n=Ft(o=>o.member),i=Ft(o=>o.updateUserInfoFromToken);return r&&n&&(n.memberName==="User"||n.memberEmail==="user@example.com")&&i(),C("div",{css:TL,children:C("div",{css:EL,children:r&&n?C(GA,{}):C(dL,{})})})}const TL=L`
  position: absolute;
  left: 80px;
  right: 0;
  top: 0;
  bottom: 0;
  background: #0f1115;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: left 0.3s ease;

  nav:hover ~ & {
    left: 200px;
  }
`,EL=L`
  display: flex;
`;function CL({selectedCategory:r,activeSection:n,categories:i,onCategoryChange:o,onSubCategoryClick:l}){return ee("div",{css:kL,children:[ee("div",{css:OL,children:[C("button",{css:[Db,r==="upper"&&Mb],onClick:()=>o("upper"),children:"Upper"}),C("button",{css:[Db,r==="lower"&&Mb],onClick:()=>o("lower"),children:"Lower"})]}),C("div",{css:RL,children:i.map(c=>{const u=`${r}/${c.key}`;return C("button",{css:[AL,n===u&&LL],onClick:()=>l(c.key),children:c.label},c.key)})}),C("div",{css:zL})]})}const kL=L`
  background: transparent;
  padding: 0;
  border-bottom: none;
`,OL=L`
  display: flex;
  gap: 8px;
  margin-bottom: 0;
  justify-content: center;
`,Db=L`
  padding: 0px 16px 20px 16px;
  border: none;
  background: transparent;
  font-size: 18px;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.6);
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: center;
  position: relative;
  flex: 1;
  min-width: 80px;

  &:hover {
    color: rgba(255, 255, 255, 0.9);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 2px;
    background: #a8e840;
    transition: width 0.3s ease;
    z-index: 2;
  }
`,Mb=L`
  color: #a8e840;

  &::after {
    width: 100%;
  }
`,RL=L`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-top: 20px;
  padding: 0 2px;
`,AL=L`
  padding: 12px 12px;
  border: 1px solid #374151;
  background: #1a1a1a;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 800;
  color: #9ca3af;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(168, 232, 64, 0.1),
      transparent
    );
    transition: left 0.5s ease;
  }

  &:hover {
    border-color: #a8e840;
    background: #0f1115;
    color: #a8e840;
    transform: translateY(-1px);
    box-shadow:
      0 4px 12px rgba(0, 0, 0, 0.3),
      0 0 20px rgba(168, 232, 64, 0.2);

    &::before {
      left: 100%;
    }
  }

  &:focus-visible {
    outline: 2px solid #a8e840;
    outline-offset: 2px;
  }
`,LL=L`
  background: #0f1115;
  color: #a8e840;
  border: 1px solid #a8e840;
  box-shadow:
    0 4px 12px rgba(0, 0, 0, 0.3),
    0 0 20px rgba(168, 232, 64, 0.3);
  transform: translateY(-1px);

  &::before {
    background: linear-gradient(
      90deg,
      transparent,
      rgba(168, 232, 64, 0.2),
      transparent
    );
  }

  &:hover {
    background: #0f1115;
    color: #60a5fa;
    border-color: #60a5fa;
    box-shadow:
      0 6px 16px rgba(0, 0, 0, 0.4),
      0 0 30px rgba(96, 165, 250, 0.4);
  }
`,zL=L`
  width: 100%;
  height: 2px;
  background: linear-gradient(
    90deg,
    rgba(168, 232, 64, 0.8),
    rgba(168, 232, 64, 0.3),
    rgba(168, 232, 64, 0.1)
  );
  margin-bottom: 20px;
  margin-top: 25px;
  box-shadow: 0 1px 2px rgba(168, 232, 64, 0.2);
`;function DL({products:r,loading:n,page:i,last:o,onProductClick:l,onToggleLike:c,onPageChange:u,onScrollToTop:f,isLoggedIn:h=!0}){const g=_.useRef(null);return _.useEffect(()=>{const m=new IntersectionObserver(S=>{S[0].isIntersecting&&!n&&!o?u(i+1):S[0].isIntersecting&&o&&f&&f()},{threshold:.1,rootMargin:"50px"}),x=g.current;return x&&m.observe(x),()=>{x&&m.unobserve(x)}},[n,o,i,u,f]),ee("div",{css:ML,children:[ee("div",{css:NL,children:[r.map(m=>C(Qi,{product:{productId:m.productId,productName:m.productName,productBrand:m.productBrand,productPrice:m.productPrice,productImageUrl:m.productImageUrl,productUrl:m.productUrl,styleList:m.styleList,liked:h?m.liked:!1},onClick:l,onToggleLike:c},m.productId)),n&&C("div",{css:UL,children:C("div",{css:IL})})]}),!o&&C("div",{ref:g,css:jL})]})}const ML=L`
  position: relative;
  display: block;
  background: transparent;
  border: none;
  border-radius: 0; /* 네모 박스 */
`,NL=L`
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  /* 행은 자동으로 증가하여 30개 이상도 자연스럽게 배치 */
  gap: 0;
  flex: 1;
  /* 고정 높이를 제거해 섹션이 내용에 맞춰 자연스럽게 높이 결정 */

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 0;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 0;
  }
`,jL=L`
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`,UL=L`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 5;
  border-radius: 8px;
`,IL=L`
  width: 40px;
  height: 40px;
  border: 3px solid #2a2f3a;
  border-top: 3px solid #e5e7eb;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;function Nb({categoryLabel:r,categoryData:n,onProductClick:i,onToggleLike:o,onPageChange:l,onScrollToTop:c,isLoggedIn:u=!0}){return ee("div",{css:BL,children:[C("h3",{css:HL,children:r}),n?.error&&C("div",{css:$L,children:n.error}),n?.products&&n.products.length>0?C(DL,{products:n.products,loading:n.loading,page:n.page,last:n.last,onProductClick:i,onToggleLike:o,onPageChange:l,onScrollToTop:c,isLoggedIn:u}):n?.loading?C("div",{css:PL,children:Array(10).fill(null).map((f,h)=>C(pd,{},h))}):null]})}const BL=L`
  margin-bottom: 60px;
  padding: 8px 8px 12px;
  background: transparent;
  border: none;
  border-radius: 0; /* 직각, 네모 느낌 */
`,HL=L`
  font-size: 28px;
  font-weight: 800;
  color: #e5e7eb;
  margin: 10px 0 24px 0;
  text-align: left; /* 좌측 정렬로 직선적인 헤더 느낌 */
  position: relative;
  padding-bottom: 16px;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: #1f232b; /* 전체 폭 구분선 */
  }
`,$L=L`
  text-align: center;
  padding: 40px;
  font-size: 16px;
  color: #e03131;
`,PL=L`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 20px 0;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 12px;
  }
`,qL=async(r,n=0,i=30)=>(await Rt.get(`/products/rank?category=${r}&page=${n}&size=${i}`)).data,YL=r=>Rt.post(`/products/likes/${r}`),GL=async()=>(await Rt.get("/my/likes")).data.data,nh=r=>ol.post("/user/save",r),jb=[{key:"hoodie",label:"Hoodie"},{key:"knitSweater",label:"Knit"},{key:"longSleeve",label:"Long Sleeve"},{key:"manToManSweat",label:"Sweatshirt"},{key:"piqueCollarTee",label:"Polo"},{key:"shirtBlouse",label:"Shirt"},{key:"shortSleeve",label:"Short Sleeve"},{key:"sleevelessTee",label:"Sleeveless"}],Ub=[{key:"cotton",label:"Cotton"},{key:"denim",label:"Denim"},{key:"leggings",label:"Leggings"},{key:"short",label:"Shorts"},{key:"suit",label:"Suit"},{key:"training",label:"Training"}];function Ib(){const{member:r,isLoggedIn:n}=Ft(),[i,o]=_.useState("upper"),[l,c]=_.useState({}),[u,f]=_.useState(null),[h,g]=_.useState(!1),[m,x]=_.useState(new Set),[S,T]=_.useState(!1),[w,b]=_.useState(null),[v,D]=_.useState(!1),[j,A]=_.useState(!0),[z,R]=_.useState(!1),M=_.useRef(null);_.useEffect(()=>{(async()=>{if(!n){x(new Set),T(!0);return}try{const H=await GL(),X=new Set(H.map(ue=>ue.productId));x(X),T(!0)}catch(H){console.error("Error fetching liked products:",H),T(!0)}})()},[n,r?.memberId]),_.useEffect(()=>{const U=M.current;if(!U)return;const H=()=>{const X=U.scrollTop;R(X>300)};return U.addEventListener("scroll",H),()=>U.removeEventListener("scroll",H)},[]);const k=()=>{const U=M.current;U&&U.scrollTo({top:0,behavior:"smooth"})},I=_.useCallback(async(U,H,X=0,ue=!1)=>{const pe=U==="all"?"all":`${U}/${H}`,N=(X%10+10)%10;ue||c(Y=>({...Y,[pe]:{...Y[pe],loading:!0,error:null}}));try{const Y=await qL(pe,N,30);if(Y.success&&Y.data){const K=Y.data.popularClothes.content.map(oe=>({...oe,liked:m.has(oe.productId)}));c(oe=>({...oe,[pe]:{products:ue?[...oe[pe]?.products||[],...K]:K,page:N,totalPages:Y.data.popularClothes.totalPages,last:Y.data.popularClothes.last,loading:!1,error:null}}))}else c(K=>({...K,[pe]:{...K[pe],loading:!1,error:Y.message||"상품을 불러오는데 실패했습니다."}}))}catch(Y){console.error("Error fetching popular products:",Y),c(K=>({...K,[pe]:{...K[pe],loading:!1,error:"상품을 불러오는데 실패했습니다."}}))}},[m]);_.useEffect(()=>{(async()=>{if(!S)return;const H=w??"all";if(l[H]?.products?.length){A(!1);return}A(!0);try{if(H==="all")await I("all","all",0,!1);else{const[X,ue]=H.split("/");await I(X,ue,0,!1)}}finally{A(!1)}})()},[w,S,I,l]);const $=U=>{o(U)},te=U=>{const H=`${i}/${U}`;b(X=>X===H?null:H)},re=(U,H,X)=>{const ue=`${U}/${H}`,pe=l[ue];if(pe&&!pe.loading){const N=(X%10+10)%10;I(U,H,N,!0)}},le=async U=>{try{const H=await Da(U);if(H.success&&H.data){const X={productId:H.data.productId,productBrand:H.data.productBrand,productName:H.data.productName,productPrice:H.data.productPrice,productUrl:H.data.productUrl,styleList:H.data.styleList,productImageUrl:H.data.productImageUrl,liked:H.data.isLiked};if(f(X),g(!0),r){const ue={userId:r.memberId,timestamp:new Date().toISOString(),actionType:"goDetail",productId:U,searchTerm:null};try{await nh([ue]),console.log("상품 클릭 goDetail 액션이 실시간으로 전송되었습니다.")}catch(pe){console.error("goDetail 액션 전송 중 오류 발생:",pe)}}}}catch(H){console.error("Error fetching product detail:",H)}},ye=()=>{g(!1),f(null)},Se=(U,H)=>{x(X=>{const ue=new Set(X);return H?ue.add(U):ue.delete(U),ue}),c(X=>{const ue={...X};return Object.keys(ue).forEach(pe=>{ue[pe]={...ue[pe],products:ue[pe].products.map(N=>N.productId===U?{...N,liked:H}:N)}}),ue})},we=async U=>{if(!n){D(!0);return}try{(await YL(U)).status===200&&(x(Y=>{const K=new Set(Y);return K.has(U)?K.delete(U):K.add(U),K}),c(Y=>{const K={...Y};return Object.keys(K).forEach(oe=>{K[oe]={...K[oe],products:K[oe].products.map(ve=>ve.productId===U?{...ve,liked:!ve.liked}:ve)}}),K}));const X=JSON.parse(sessionStorage.getItem("user_actions")||"[]"),ue=X.some(Y=>Y.productId===U),pe={userId:r?.memberId||0,timestamp:new Date().toISOString(),actionType:ue?"unlike":"like",productId:U,searchTerm:null};let N;ue?N=X.filter(Y=>Y.productId!==U):N=[...X,pe],sessionStorage.setItem("user_actions",JSON.stringify(N));try{await nh([pe]),console.log("사용자 액션이 실시간으로 전송되었습니다.")}catch(Y){console.error("사용자 액션 전송 중 오류 발생:",Y)}if(N.length>=5)try{await nh(N),sessionStorage.removeItem("user_actions")}catch(Y){console.error("서버 저장 중 오류 발생:",Y)}}catch(H){console.error("찜하기/찜 취소 처리 중 오류 발생:",H)}};return ee("div",{css:XL,children:[C("div",{css:QL,ref:M,children:j?C(ra,{children:C("div",{css:Bb,children:C("div",{css:FL,children:C("div",{css:VL,children:Array(30).fill(null).map((U,H)=>C(pd,{},H))})})})}):C(ra,{children:C("div",{css:Bb,children:(()=>{const U=w??"all",H=l[U];if(U==="all")return C("div",{"data-section":"all",children:C(Nb,{categoryLabel:"All",categoryData:H||{products:[],page:0,totalPages:0,last:!0,loading:!1,error:null},onProductClick:le,onToggleLike:we,onPageChange:N=>{const Y=l.all;if(Y&&!Y.loading){const K=(N%10+10)%10;I("all","all",K,!0)}},onScrollToTop:k,isLoggedIn:n})});const[X,ue]=U.split("/"),pe=(X==="upper"?jb:Ub).find(N=>N.key===ue)?.label;return C("div",{"data-section":U,children:C(Nb,{categoryLabel:pe||"",categoryData:H||{products:[],page:0,totalPages:0,last:!0,loading:!1,error:null},onProductClick:le,onToggleLike:we,onPageChange:N=>re(X,ue,N),onScrollToTop:k,isLoggedIn:n})})})()})})}),C("div",{css:ZL,children:ee("div",{css:KL,children:[ee("div",{css:JL,children:[C("span",{css:WL,children:"HOT"}),C("span",{css:ez,children:"ITEMS"})]}),ee("p",{css:tz,children:["지금",C("br",{}),C("span",{css:nz,children:"인기 있는"})," 아이템을",C("br",{}),"만나보세요"]}),C("div",{css:lz}),C("div",{css:rz,children:C(CL,{selectedCategory:i,activeSection:w,categories:i==="upper"?jb:Ub,onCategoryChange:$,onSubCategoryClick:te})}),ee("div",{css:az,children:[C("span",{css:iz}),C("span",{css:oz})]})]})}),u&&C(Ps,{open:h,onClose:ye,data:u,onLikeChange:Se}),C(Ma,{show:v,onClose:()=>D(!1),message:"로그인이 필요합니다."}),z&&C("button",{css:sz,onClick:k,children:C(od,{size:20})})]})}const XL=L`
  position: absolute;
  left: 80px;
  right: 0;
  top: 0;
  bottom: 0;
  background: #0f1115;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  transition: left 0.3s ease;

  nav:hover ~ & {
    left: 200px;
  }
`,Bb=L`
  margin-bottom: 60px;
`,VL=L`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0;
  padding: 8px 0;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 0;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 0;
  }
`,FL=L`
  margin-bottom: 60px; /* 카테고리 섹션 간 간격 증가 */
  padding: 4px 0; /* 상하 패딩 최소화 */
`,QL=L`
  width: 80%;
  height: 100vh;
  overflow-y: scroll;
  padding: 0 20px;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.1);
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.3);
    border: 2px solid transparent;
    background-clip: padding-box;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.5);
    border: 2px solid transparent;
    background-clip: padding-box;
  }
`,ZL=L`
  width: 20%;
  height: 100vh;
  background: #072bed;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  font-family: 'Montserrat', sans-serif;
  overscroll-behavior: contain;
`,KL=L`
  padding: 20px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
  overflow-y: auto;
  overflow-x: hidden;
  min-height: 0;
  box-sizing: border-box;
  -webkit-overflow-scrolling: touch;

  /* 스크롤바 스타일(검색 페이지 사이드와 동일 톤) */
  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.12);
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.35);
    border: 2px solid transparent;
    background-clip: padding-box;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.55);
    border: 2px solid transparent;
    background-clip: padding-box;
  }
`,JL=L`
  display: flex;
  gap: 8px;
  align-items: center;
  margin-bottom: 16px;
  flex-wrap: wrap;
`,WL=L`
  font-size: 32px;
  font-weight: 800;
  color: #a8e840;
  letter-spacing: -1px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`,ez=L`
  font-size: 32px;
  font-weight: 800;
  color: #ffffff;
  letter-spacing: -1px;
`,tz=L`
  font-size: 16px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.4;
  margin: 0 0 20px 0;
`,nz=L`
  color: #a8e840;
  font-weight: 800;
  position: relative;
  z-index: 1;
  letter-spacing: -1px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`,rz=L`
  margin: 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height: 0;
`,az=L`
  position: relative;
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: auto;
  padding-top: 20px;
  padding-bottom: 40px;
`,iz=L`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #a8e840;
  box-shadow: 0 0 10px rgba(168, 232, 64, 0.5);
`,oz=L`
  width: 40px;
  height: 2px;
  background: linear-gradient(90deg, #a8e840, rgba(168, 232, 64, 0.3));
`,lz=L`
  width: 100%;
  height: 2px;
  background: linear-gradient(
    90deg,
    rgba(168, 232, 64, 0.8),
    rgba(168, 232, 64, 0.3),
    rgba(168, 232, 64, 0.1)
  );
  margin-bottom: 20px;
  margin-top: 55px;
  box-shadow: 0 1px 2px rgba(168, 232, 64, 0.2);
`,sz=L`
  position: fixed;
  bottom: 20px;
  right: 280px;
  width: 48px;
  height: 48px;
  background: #1a1a1a;
  border: 1px solid #a8e840;
  border-radius: 50%;
  color: #a8e840;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow:
    0 4px 12px rgba(0, 0, 0, 0.3),
    0 0 20px rgba(168, 232, 64, 0.3);
  transition: all 0.3s ease;
  z-index: 2000;

  &:hover {
    background: #0f1115;
    color: #60a5fa;
    border-color: #60a5fa;
    transform: translateY(-2px);
    box-shadow:
      0 6px 16px rgba(0, 0, 0, 0.4),
      0 0 30px rgba(96, 165, 250, 0.4);
  }

  &:active {
    transform: translateY(0);
  }
`;function cz({query:r,resultCount:n}){return E.jsx(uz,{children:E.jsxs(dz,{children:[E.jsx(Hb,{children:'"'}),E.jsx(fz,{children:r}),E.jsx(Hb,{children:'"'}),E.jsx(pz,{children:"검색 결과"}),E.jsxs(hz,{children:[n.toLocaleString(),"개"]})]})})}const uz=P.div`
  padding: 24px 0 32px;
  margin-bottom: 24px;
  text-align: center;
`,dz=P.h1`
  font-size: 28px;
  font-weight: 700;
  color: #ffffff;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
  line-height: 1.3;
`,Hb=P.span`
  color: #ffffff;
  font-weight: 800;
`,fz=P.span`
  color: #a8e840;
  font-weight: 800;
`,pz=P.span`
  color: #e5e7eb;
  font-weight: 500;
`,hz=P.span`
  color: #ffffff;
  font-weight: 700;
  // background: rgba(255, 255, 255, 0.1);
  padding: 4px 12px;
  border-radius: 5px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  font-size: 16px;
  display: inline-flex;
  align-items: center;
`,rh={"under-30k":{min:0,max:3e4},"30k-50k":{min:3e4,max:5e4},"50k-80k":{min:5e4,max:8e4},"80k-100k":{min:8e4,max:1e5},"over-100k":{min:1e5,max:1e8}},gz=[{key:"under-30k",label:"~ 30,000"},{key:"30k-50k",label:"30,000 ~ 50,000"},{key:"50k-80k",label:"50,000 ~ 80,000"},{key:"80k-100k",label:"80,000 ~ 100,000"},{key:"over-100k",label:"100,000 ~"},{key:"custom",label:"CUSTOM"}],ah={min:0,max:99999};function mz({onPriceRangesChange:r,priceRanges:n=[]}){const[i,o]=_.useState(new Set),[l,c]=_.useState(ah);_.useEffect(()=>{if(n.length===0)o(new Set),c(ah);else{const x=new Set;let S=!1;n.forEach(T=>{let w=!1;Object.entries(rh).forEach(([b,v])=>{v.min===T.min&&v.max===T.max&&(x.add(b),w=!0)}),w||(x.add("custom"),c(T),S=!0)}),o(x),S||c(ah)}},[n]);const u=x=>{const S=Array.from(x).filter(T=>T!=="custom").map(T=>rh[T]);return x.has("custom")&&S.push(l),S},f=x=>{const S=new Set(i);x==="custom"?S.has("custom")?S.delete("custom"):(S.clear(),S.add("custom")):S.has(x)?S.delete(x):(S.delete("custom"),S.add(x)),o(S),r(u(S))},h=(x,S)=>{const T=S===""?0:Number(S);let w=isNaN(T)?0:Math.max(0,T);w=Math.min(w,1e8);const v={...l};if(x==="min"?(v.min=w,w>l.max&&(v.max=w)):(v.max=w,w<l.min&&(v.min=w)),c(v),i.has("custom")){const D=new Set(i),j=Array.from(D).filter(A=>A!=="custom").map(A=>rh[A]);j.push(v),r(j)}},m=((x,S)=>!(x<0||S<0||x>S||x>1e8||S>1e8||x===S&&x===0))(l.min,l.max);return E.jsxs(xz,{children:[E.jsx(yz,{children:gz.map(x=>E.jsx(bz,{isActive:i.has(x.key),onClick:()=>f(x.key),children:x.label},x.key))}),i.has("custom")&&E.jsxs(vz,{children:[E.jsxs(Sz,{children:[E.jsxs(Pb,{children:[E.jsx(qb,{children:"MIN"}),E.jsx(Yb,{children:"₩"}),E.jsx($b,{type:"number",placeholder:"0",value:l.min||"",onChange:x=>h("min",x.target.value),min:"0",max:"100000000",isInvalid:!m})]}),E.jsxs(Pb,{children:[E.jsx(qb,{children:"MAX"}),E.jsx(Yb,{children:"₩"}),E.jsx($b,{type:"number",placeholder:"99999",value:l.max||"",onChange:x=>h("max",x.target.value),min:"0",max:"100000000",isInvalid:!m})]})]}),!m&&E.jsx(wz,{children:"올바른 가격 범위를 입력해주세요. (최솟값 ≤ 최댓값, 1억원 이하)"}),m&&E.jsxs(_z,{children:["현재 범위: ",l.min.toLocaleString(),"원 ~"," ",l.max.toLocaleString(),"원"]})]})]})}const xz=P.div`
  padding: 0;
  margin: 0;
`,yz=P.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin: 8px auto 0;
  padding: 0 20px;
  width: 100%;
  max-width: 280px;
`,bz=P.button`
  padding: 12px 16px;
  border: 1px solid ${r=>r.isActive?"#a8e840":"#374151"};
  border-radius: 8px;
  background: ${r=>(r.isActive,"#1a1a1a")};
  color: ${r=>r.isActive?"#a8e840":"#9ca3af"};
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease;
  min-height: 40px;
  width: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  &:hover {
    border-color: #a8e840;
    background: ${r=>r.isActive?"#1a1a1a":"#0f1115"};
    color: #a8e840;
    transform: translateY(-1px);
    box-shadow: ${r=>r.isActive?"0 2px 8px rgba(168, 232, 64, 0.3), 0 0 12px rgba(168, 232, 64, 0.2)":"0 1px 4px rgba(0, 0, 0, 0.2)"};
  }
`,vz=P.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 8px auto;
  padding: 14px;
  background: #1a1a1a;
  border-radius: 8px;
  border: 1px solid #374151;
  width: 100%;
  max-width: 600px;
  box-sizing: border-box;
`,$b=P.input`
  flex: 1;
  padding: 8px 10px;
  border: 1px solid ${r=>r.isInvalid?"#ef4444":"#374151"};
  border-radius: 6px;
  font-size: 13px;
  text-align: center;
  background: #0f1115;
  color: #ffffff;
  font-weight: 600;
  box-sizing: border-box;
  min-width: 0;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${r=>r.isInvalid?"#ef4444":"#a8e840"};
    box-shadow: 0 0 0 2px
      ${r=>r.isInvalid?"rgba(239, 68, 68, 0.15)":"rgba(168, 232, 64, 0.15)"};
    background: #1a1a1a;
  }

  &::placeholder {
    color: #9ca3af;
    font-size: 12px;
  }

  /* 숫자 입력 스피너 제거 (선택사항) */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type='number'] {
    -moz-appearance: textfield;
  }
`,Sz=P.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 8px;
  width: 100%;
`,Pb=P.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0px;
  width: 100%;
`,qb=P.label`
  font-size: 12px;
  color: #9ca3af;
  font-weight: 600;
  min-width: 35px;
`,Yb=P.span`
  font-size: 12px;
  color: #9ca3af;
  font-weight: 500;
  min-width: 20px;
`,wz=P.div`
  font-size: 11px;
  color: #ef4444;
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.2);
  border-radius: 4px;
  padding: 6px 8px;
  text-align: center;
  font-weight: 500;
`,_z=P.div`
  font-size: 11px;
  color: #6b7280;
  text-align: center;
  padding: 4px 8px;
  background: rgba(107, 114, 128, 0.1);
  border-radius: 4px;
  font-weight: 500;
`;function Tz({onSortChange:r,sortOptions:n}){const[i,o]=_.useState([]),l=n!==void 0?n:i;_.useEffect(()=>{n!==void 0&&o(n)},[n]);const c=f=>{const h=[...l],g=h.indexOf(f);if(g>-1)h.splice(g,1);else{if(f==="name-asc"||f==="name-desc"){const m=h.filter(x=>x!=="name-asc"&&x!=="name-desc");m.push(f),o(m),r(m);return}else if(f==="price-high"||f==="price-low"){const m=h.filter(x=>x!=="price-high"&&x!=="price-low");m.push(f),o(m),r(m);return}h.push(f)}o(h),r(h)},u=[{key:"name-asc",label:"NAME (A - Z)"},{key:"name-desc",label:"NAME (Z - A)"},{key:"price-high",label:"PRICE HIGH"},{key:"price-low",label:"PRICE LOW"}];return E.jsx(Ez,{children:u.map(f=>E.jsx(Cz,{isActive:l.includes(f.key),onClick:()=>c(f.key),children:f.label},f.key))})}const Ez=P.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin: 8px auto 0;
  padding: 0 20px;
  width: 100%;
  max-width: 280px;
`,Cz=P.button`
  padding: 12px 16px;
  border: 1px solid ${r=>r.isActive?"#a8e840":"#374151"};
  border-radius: 8px;
  background: ${r=>(r.isActive,"#1a1a1a")};
  color: ${r=>r.isActive?"#a8e840":"#9ca3af"};
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease;
  min-height: 40px;
  width: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  &:hover {
    border-color: #a8e840;
    background: ${r=>r.isActive?"#1a1a1a":"#0f1115"};
    color: #a8e840;
    transform: translateY(-1px);
    box-shadow: ${r=>r.isActive?"0 2px 8px rgba(168, 232, 64, 0.3), 0 0 12px rgba(168, 232, 64, 0.2)":"0 1px 4px rgba(0, 0, 0, 0.2)"};
  }
`;function kz({onBrandsChange:r,availableBrands:n,selectedBrands:i=[]}){const[o,l]=_.useState(new Set),c=i.length>0?new Set(i):o;_.useEffect(()=>{i.length>0?l(new Set(i)):l(new Set)},[i]);const[u,f]=_.useState(""),[h,g]=_.useState(0),m=6,x=n.filter(k=>k.toLowerCase().includes(u.toLowerCase())),S=Math.ceil((x.length+1)/m),T=h*m,w=T+m,v=["ALL",...x].slice(T,w),D=v.includes("ALL"),j=v.filter(k=>k!=="ALL");_.useEffect(()=>{g(0)},[u]);const A=()=>{g(k=>Math.max(0,k-1))},z=()=>{g(k=>Math.min(S-1,k+1))},R=k=>{const I=new Set(c);I.has(k)?I.delete(k):I.add(k),l(I),r(Array.from(I))},M=()=>{if(c.size===x.length)l(new Set),r([]);else{const k=new Set(x);l(k),r(x)}};return E.jsxs(Oz,{children:[E.jsx(Nz,{type:"text",placeholder:"브랜드 검색...",value:u,onChange:k=>f(k.target.value)}),E.jsx(Rz,{children:E.jsxs(Az,{children:[E.jsxs(Lz,{children:[D&&E.jsx(Mz,{onClick:M,children:"ALL"}),j.map(k=>E.jsx(jz,{type:"button",isActive:c.has(k),onClick:()=>R(k),children:k},k))]}),S>1&&E.jsxs(zz,{children:[E.jsx(Gb,{onClick:A,disabled:h===0,direction:"prev",children:E.jsx(s2,{size:16})}),E.jsxs(Dz,{children:[h+1," / ",S]}),E.jsx(Gb,{onClick:z,disabled:h===S-1,direction:"next",children:E.jsx(c2,{size:16})})]})]})}),x.length===0&&u&&E.jsx(Uz,{children:"검색 결과가 없습니다."})]})}const Oz=P.div`
  padding: 0;
  background: transparent;
`,Rz=P.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin: 8px auto 0;
  padding: 0 20px;
  width: 100%;
  max-width: 280px;
`,Az=P.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,Lz=P.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  height: 270px;
  justify-content: flex-start;
  overflow: hidden;
`,zz=P.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 12px 0;
  flex-shrink: 0;
  height: 50px;
`,Gb=P.button`
  width: 32px;
  height: 32px;
  border: 1px solid #374151;
  border-radius: 6px;
  background: #1a1a1a;
  color: #9ca3af;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover:not(:disabled) {
    border-color: #a8e840;
    color: #a8e840;
    background: #0f1115;
    transform: translateY(-1px);
    box-shadow: 0 2px 8px rgba(168, 232, 64, 0.2);
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`,Dz=P.span`
  font-size: 12px;
  color: #9ca3af;
  font-weight: 600;
  min-width: 40px;
  text-align: center;
`,Mz=P.button`
  padding: 8px 14px;
  border: 1px solid #374151;
  border-radius: 8px;
  background: #1a1a1a;
  color: #9ca3af;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease;
  min-height: 40px;
  width: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  &:hover {
    background: #0f1115;
    border-color: #a8e840;
    color: #a8e840;
    transform: translateY(-1px);
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  }
`,Nz=P.input`
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #374151;
  border-radius: 4px;
  font-size: 14px;
  margin: 8px auto 12px;
  background: #1a1a1a;
  color: #ffffff;
  max-width: 280px;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #a8e840;
    box-shadow: 0 0 0 2px rgba(168, 232, 64, 0.15);
    background: #0f1115;
  }

  &::placeholder {
    color: #9ca3af;
  }
`,jz=P.button`
  padding: 12px 16px;
  border: 1px solid ${r=>r.isActive?"#a8e840":"#374151"};
  border-radius: 8px;
  background: ${r=>(r.isActive,"#1a1a1a")};
  color: ${r=>r.isActive?"#a8e840":"#9ca3af"};
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease;
  text-align: center;
  width: 100%;
  min-height: 40px;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &:hover {
    border-color: #a8e840;
    background: ${r=>r.isActive?"#1a1a1a":"#0f1115"};
    color: #a8e840;
    transform: translateY(-1px);
    box-shadow: ${r=>r.isActive?"0 2px 8px rgba(168, 232, 64, 0.3), 0 0 12px rgba(168, 232, 64, 0.2)":"0 1px 4px rgba(0, 0, 0, 0.2)"};
  }
`,Uz=P.div`
  text-align: center;
  color: rgba(255, 255, 255, 0.7);
  font-size: 14px;
  padding: 20px;
`;function Iz({onStylesChange:r,availableStyles:n,selectedStyles:i=[]}){const[o,l]=_.useState(new Set),c=i.length>0?new Set(i):o;_.useEffect(()=>{i.length>0?l(new Set(i)):l(new Set)},[i]);const[u,f]=_.useState(""),[h,g]=_.useState(0),m=6,x=n.filter(k=>k.toLowerCase().includes(u.toLowerCase())),S=Math.ceil((x.length+1)/m),T=h*m,w=T+m,v=["ALL",...x].slice(T,w),D=v.includes("ALL"),j=v.filter(k=>k!=="ALL");_.useEffect(()=>{g(0)},[u]);const A=()=>{g(k=>Math.max(0,k-1))},z=()=>{g(k=>Math.min(S-1,k+1))},R=k=>{const I=new Set(c);I.has(k)?I.delete(k):I.add(k),l(I),r(Array.from(I))},M=()=>{if(c.size===x.length)l(new Set),r([]);else{const k=new Set(x);l(k),r(x)}};return E.jsxs(Bz,{children:[E.jsx(Yz,{type:"text",placeholder:"스타일 검색...",value:u,onChange:k=>f(k.target.value)}),E.jsx(Hz,{children:E.jsxs($z,{children:[E.jsxs(Pz,{children:[D&&E.jsx(qz,{onClick:M,children:"ALL"}),j.map(k=>E.jsx(Fz,{type:"button",isActive:c.has(k),onClick:()=>R(k),children:k},k))]}),S>1&&E.jsxs(Gz,{children:[E.jsx(Xb,{onClick:A,disabled:h===0,direction:"prev",children:E.jsx(s2,{size:16})}),E.jsxs(Xz,{children:[h+1," / ",S]}),E.jsx(Xb,{onClick:z,disabled:h===S-1,direction:"next",children:E.jsx(c2,{size:16})})]})]})}),x.length===0&&u&&E.jsx(Vz,{children:"검색 결과가 없습니다."})]})}const Bz=P.div`
  padding: 0;
  background: transparent;
`,Hz=P.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin: 8px auto 0;
  padding: 0 20px;
  width: 100%;
  max-width: 280px;
`,$z=P.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,Pz=P.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  height: 270px;
  justify-content: flex-start;
  overflow: hidden;
`,qz=P.button`
  padding: 8px 14px;
  border: 1px solid #374151;
  border-radius: 8px;
  background: #1a1a1a;
  color: #9ca3af;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease;
  min-height: 40px;
  width: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  &:hover {
    background: #0f1115;
    border-color: #a8e840;
    color: #a8e840;
    transform: translateY(-1px);
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  }
`,Yz=P.input`
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #374151;
  border-radius: 4px;
  font-size: 14px;
  margin: 8px auto 12px;
  background: #1a1a1a;
  color: #ffffff;
  max-width: 280px;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #a8e840;
    box-shadow: 0 0 0 2px rgba(168, 232, 64, 0.15);
    background: #0f1115;
  }

  &::placeholder {
    color: #9ca3af;
  }
`,Gz=P.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 12px 0;
  flex-shrink: 0;
  height: 50px;
`,Xb=P.button`
  width: 32px;
  height: 32px;
  border: 1px solid #374151;
  border-radius: 6px;
  background: #1a1a1a;
  color: #9ca3af;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover:not(:disabled) {
    border-color: #a8e840;
    color: #a8e840;
    background: #0f1115;
    transform: translateY(-1px);
    box-shadow: 0 2px 8px rgba(168, 232, 64, 0.2);
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`,Xz=P.span`
  font-size: 12px;
  color: #9ca3af;
  font-weight: 600;
  min-width: 40px;
  text-align: center;
`,Vz=P.div`
  text-align: center;
  color: rgba(255, 255, 255, 0.7);
  font-size: 14px;
  padding: 20px;
`,Fz=P.button`
  padding: 12px 16px;
  border: 1px solid ${r=>r.isActive?"#a8e840":"#374151"};
  border-radius: 8px;
  background: ${r=>(r.isActive,"#1a1a1a")};
  color: ${r=>r.isActive?"#a8e840":"#9ca3af"};
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease;
  text-align: center;
  width: 100%;
  min-height: 40px;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &:hover {
    border-color: #a8e840;
    background: ${r=>r.isActive?"#1a1a1a":"#0f1115"};
    color: #a8e840;
    transform: translateY(-1px);
    box-shadow: ${r=>r.isActive?"0 2px 8px rgba(168, 232, 64, 0.3), 0 0 12px rgba(168, 232, 64, 0.2)":"0 1px 4px rgba(0, 0, 0, 0.2)"};
  }
`;function Qz({priceRanges:r,onPriceRangesChange:n,selectedBrands:i,onBrandsChange:o,selectedStyles:l,onStylesChange:c,wishlistOnly:u,onWishlistChange:f,sortOptions:h,onSortChange:g,availableBrands:m,availableStyles:x}){const[S,T]=_.useState(null);return E.jsxs(Zz,{children:[S===null&&E.jsxs(E.Fragment,{children:[E.jsx(Vr,{children:E.jsxs(Fr,{isActive:!1,onClick:()=>{f(!1),T("sort")},children:["SORT ",h.length>0&&`(${h.length})`]})}),E.jsx(Vr,{children:E.jsxs(Fr,{isActive:!1,onClick:()=>{f(!1),T("price")},children:["PRICE ",r.length>0&&`(${r.length})`]})}),E.jsx(Vr,{children:E.jsxs(Fr,{isActive:!1,onClick:()=>{f(!1),T("brand")},children:["BRAND ",i.length>0&&`(${i.length})`]})}),E.jsx(Vr,{children:E.jsxs(Fr,{isActive:!1,onClick:()=>{f(!1),T("style")},children:["STYLE ",l.length>0&&`(${l.length})`]})}),E.jsx(Vr,{children:E.jsxs(Fr,{isActive:!1,onClick:()=>{f(!0),T("wishlist")},children:["LIKED ",u&&"(PICK)"]})})]}),S==="sort"&&E.jsxs(E.Fragment,{children:[E.jsx(Vr,{children:E.jsxs(Fr,{isActive:!0,onClick:()=>T(null),children:["SORT ",h.length>0&&`(${h.length})`]})}),E.jsx(xu,{children:E.jsx(yu,{children:E.jsx(Tz,{onSortChange:g,sortOptions:h})})})]}),S==="price"&&E.jsxs(E.Fragment,{children:[E.jsx(Vr,{children:E.jsxs(Fr,{isActive:!0,onClick:()=>T(null),children:["PRICE ",r.length>0&&`(${r.length})`]})}),E.jsx(xu,{children:E.jsx(yu,{children:E.jsx(mz,{onPriceRangesChange:n,priceRanges:r})})})]}),S==="brand"&&E.jsxs(E.Fragment,{children:[E.jsx(Vr,{children:E.jsxs(Fr,{isActive:!0,onClick:()=>T(null),children:["BRAND ",i.length>0&&`(${i.length})`]})}),E.jsx(xu,{children:E.jsx(yu,{children:E.jsx(kz,{onBrandsChange:o,availableBrands:m,selectedBrands:i})})})]}),S==="style"&&E.jsxs(E.Fragment,{children:[E.jsx(Vr,{children:E.jsxs(Fr,{isActive:!0,onClick:()=>T(null),children:["STYLE ",l.length>0&&`(${l.length})`]})}),E.jsx(xu,{children:E.jsx(yu,{children:E.jsx(Iz,{onStylesChange:c,availableStyles:x,selectedStyles:l})})})]}),S==="wishlist"&&E.jsx(E.Fragment,{children:E.jsx(Vr,{children:E.jsxs(Fr,{isActive:!0,onClick:()=>{f(!1),T(null)},children:["LIKED ",u&&"(PICK)"]})})})]})}const Zz=P.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  color: #ffffff;
  background: transparent;
`,Vr=P.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 8px;
  padding: 0 10px;
  width: 100%;
  max-width: 280px;
`,Fr=P.button`
  padding: 12px 12px;
  border: 1px solid #374151;
  background: #1a1a1a;
  border-radius: 5px; /*기존 8px*/
  font-size: 15px;
  font-weight: 800;
  cursor: pointer;
  position: relative;
  text-align: center;
  overflow: hidden;
  color: ${r=>r.isActive?"#a8e840":"#9ca3af"};
  transition: all 0.3s ease;

  /* 샤라락 스윕 효과 - HotItems 하위 탭과 동일 */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(168, 232, 64, 0.1),
      transparent
    );
    transition: left 0.5s ease;
  }

  &:hover {
    border-color: #a8e840;
    background: #0f1115;
    color: #a8e840;
    transform: translateY(-1px);
    box-shadow:
      0 4px 12px rgba(0, 0, 0, 0.3),
      0 0 20px rgba(168, 232, 64, 0.2);
  }

  &:hover::before {
    left: 100%;
  }

  ${r=>r.isActive&&`
    background: #0f1115;
    color: #a8e840;
    border: 1px solid #a8e840;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3), 0 0 20px rgba(168, 232, 64, 0.3);
    transform: translateY(-1px);
  `}
`,xu=P.div`
  padding: 0;
  background: transparent;
  border: none;
  border-radius: 0;
  max-height: none;
  overflow: hidden;
  overscroll-behavior: contain;
  margin: 12px auto 0;
  padding: 0 20px;
  width: 100%;
  max-width: 280px;
  animation: slideDown 0.3s ease-out;

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-10px);
      max-height: 0;
    }
    to {
      opacity: 1;
      transform: translateY(0);
      max-height: 500px;
    }
  }
`,yu=P.div`
  height: 100%;
  max-height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  overscroll-behavior: contain;
  -webkit-overflow-scrolling: touch;
`;function Kz(r){return E.jsx(Jz,{children:E.jsxs(Wz,{children:[E.jsx(eD,{children:E.jsx("span",{children:"FILTERS"})}),E.jsxs(tD,{children:["원하는 조건으로",E.jsx("br",{}),"검색 결과를",E.jsx("br",{}),E.jsx("span",{children:"필터링"}),"하세요"]}),E.jsx(iD,{}),E.jsx(Qz,{...r}),E.jsx(oD,{}),E.jsxs(nD,{children:[E.jsx(rD,{}),E.jsx(aD,{})]})]})})}const Jz=P.div`
  width: 20%;
  height: 100vh;
  background: #072bed;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: stretch;
  justify-content: stretch;
  font-family: 'Montserrat', sans-serif;
  overscroll-behavior: contain;
  margin: 0;
  padding: 0;
`,Wz=P.div`
  padding: 20px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
  /* 필터 패널이 확장될 때 잘리지 않도록 사이드바 자체 스크롤을 허용 */
  overflow-y: auto;
  overflow-x: hidden;
  min-height: 0;
  box-sizing: border-box;
  overscroll-behavior: contain;

  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.12);
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.35);
    border: 2px solid transparent;
    background-clip: padding-box;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.55);
    border: 2px solid transparent;
    background-clip: padding-box;
  }
`,eD=P.div`
  display: flex;
  gap: 8px;
  align-items: center;
  margin-bottom: 16px;
  flex-wrap: wrap;

  span:first-of-type {
    font-size: 32px;
    font-weight: 800;
    color: #a8e840;
    letter-spacing: -1px;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  span:last-child {
    font-size: 32px;
    font-weight: 800;
    color: #a8e840;
    letter-spacing: -1px;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`,tD=P.p`
  font-size: 16px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.4;
  margin: 0 0 20px 0;

  span {
    color: #a8e840;
    font-weight: 800;
    position: relative;
    z-index: 1;
    letter-spacing: -1px;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`,nD=P.div`
  /* 필터 콘텐츠의 "끝"에 붙어서 같이 내려가/올라가야 하므로 문서 흐름에 둔다 */
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 20px;
`,rD=P.span`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #a8e840;
  box-shadow: 0 0 10px rgba(168, 232, 64, 0.5);
`,aD=P.span`
  width: 40px;
  height: 2px;
  background: linear-gradient(90deg, #a8e840, rgba(168, 232, 64, 0.3));
`,iD=P.div`
  width: 100%;
  height: 2px;
  background: linear-gradient(
    90deg,
    rgba(168, 232, 64, 0.8),
    rgba(168, 232, 64, 0.3),
    rgba(168, 232, 64, 0.1)
  );
  margin-bottom: 20px;
  margin-top: 55px;
  box-shadow: 0 1px 2px rgba(168, 232, 64, 0.2);
`,oD=P.div`
  width: 100%;
  height: 2px;
  background: linear-gradient(
    90deg,
    rgba(168, 232, 64, 0.8),
    rgba(168, 232, 64, 0.3),
    rgba(168, 232, 64, 0.1)
  );
  margin-bottom: 20px;
  margin-top: 20px;
  box-shadow: 0 1px 2px rgba(168, 232, 64, 0.2);
`;function lD({priceRanges:r,selectedBrands:n,selectedStyles:i,wishlistOnly:o,sortOptions:l,onRemovePriceRange:c,onRemoveBrand:u,onRemoveStyle:f,onRemoveWishlist:h,onRemoveSort:g,onClearAll:m}){return r.length>0||n.length>0||i.length>0||o||l.length>0?E.jsxs(sD,{children:[E.jsxs(cD,{children:[E.jsx(uD,{children:"Applied Filters:"}),E.jsx(dD,{onClick:m,children:"Clear All"})]}),E.jsxs(fD,{children:[r.map((S,T)=>E.jsxs(ss,{children:["Price: ",S.min.toLocaleString(),"~",S.max.toLocaleString(),E.jsx(cs,{onClick:()=>c(T),children:E.jsx(oi,{size:12})})]},`price-${T}`)),n.map((S,T)=>E.jsxs(ss,{children:["Brand: ",S,E.jsx(cs,{onClick:()=>u(T),children:E.jsx(oi,{size:12})})]},`brand-${T}`)),i.map((S,T)=>E.jsxs(ss,{children:["Style: ",S,E.jsx(cs,{onClick:()=>f(T),children:E.jsx(oi,{size:12})})]},`style-${T}`)),o&&E.jsxs(ss,{children:["Wishlist Only",E.jsx(cs,{onClick:h,children:E.jsx(oi,{size:12})})]}),l.map((S,T)=>E.jsxs(ss,{children:["Sort:"," ",S==="name-asc"&&"Name (A-Z)"||S==="name-desc"&&"Name (Z-A)"||S==="price-high"&&"Price (High to Low)"||S==="price-low"&&"Price (Low to High)",E.jsx(cs,{onClick:()=>g(T),children:E.jsx(oi,{size:12})})]},`sort-${T}`))]})]}):null}const sD=P.div`
  margin-bottom: 20px;
  padding: 16px;
  background: #0f1115;
  border-radius: 5px;
  border: 1px solid #404040;
`,cD=P.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`,uD=P.span`
  font-size: 14px;
  font-weight: 600;
  color: #666;
`,dD=P.button`
  background: none;
  border: 1px solid #666;
  color: #666;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #666;
    color: #fff;
  }
`,fD=P.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 8px;
`,ss=P.div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  background: #072bed;
  color: white;
  border-radius: 5px;
  font-size: 13px;
  font-weight: 500;
`,cs=P.button`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  padding: 0;
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: background-color 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;function pD({products:r,loading:n,error:i,noResults:o,hasMore:l,onProductClick:c,onToggleLike:u,onLoadMore:f}){const h=_.useRef(null),g=_.useRef(null),m=_.useMemo(()=>r.map(S=>u0(S)),[r]),x=_.useCallback(()=>{h.current&&h.current.disconnect(),h.current=new IntersectionObserver(S=>{S[0].isIntersecting&&l&&!n&&f()},{rootMargin:"100px"}),g.current&&h.current.observe(g.current)},[l,n,f]);return _.useEffect(()=>(r.length>0&&l&&x(),()=>{h.current&&h.current.disconnect()}),[r.length,l,x]),n&&r.length===0?E.jsx(Vb,{children:E.jsx(Fb,{children:"검색 중..."})}):i?E.jsx(gD,{children:E.jsx(mD,{children:i})}):o?E.jsxs(Qb,{children:[E.jsx(bu,{children:"일치하는 상품이 없습니다"}),E.jsx(bu,{children:"다른 검색어로 시도해보세요"})]}):r.length===0?E.jsxs(Qb,{children:[E.jsx(bu,{children:"검색 결과가 없습니다"}),E.jsx(bu,{children:"다른 검색어로 시도해보세요"})]}):E.jsxs(E.Fragment,{children:[E.jsx(hD,{children:m.map(S=>E.jsx(Qi,{product:S,onClick:()=>c(S.productId),onToggleLike:u},S.productId))}),l&&r.length>0&&E.jsx(xD,{ref:g,children:n&&E.jsx(Vb,{children:E.jsx(Fb,{children:"더 많은 상품을 불러오는 중..."})})})]})}const hD=P.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0;
  margin-bottom: 0;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`,Vb=P.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
`,Fb=P.p`
  font-size: 16px;
  color: #666;
`,gD=P.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
`,mD=P.p`
  font-size: 16px;
  color: #dc3545;
`,Qb=P.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  text-align: center;
`,bu=P.p`
  font-size: 16px;
  color: #666;
  margin: 8px 0;
`,xD=P.div`
  height: 20px;
  width: 100%;
  margin: 20px 0;
`;function yD(){const[r]=D4(),n=Br(),{isLoggedIn:i,member:o}=Ft(),[l,c]=_.useState([]),[u,f]=_.useState([]),[h,g]=_.useState([]),[m,x]=_.useState(!1),[S,T]=_.useState([]),[w,b]=_.useState(!1),[v,D]=_.useState(""),[j,A]=_.useState([]),[z,R]=_.useState(!1),M=_.useRef(null),k=_.useRef(null),[I,$]=_.useState([]),[te,re]=_.useState(!1),[le,ye]=_.useState(null),[Se,we]=_.useState(!1),[U,H]=_.useState(0),[X,ue]=_.useState(!1),[pe,N]=_.useState(0),[Y,K]=_.useState(0),[oe,ve]=_.useState(new Set),[de,_e]=_.useState(!1),be=_.useRef(new Set),[ke,Be]=_.useState(!1),[ze,Ue]=_.useState(null),[at,ct]=_.useState(!1),ut=r.get("q")||"";_.useEffect(()=>{const fe=ge=>{ge.key==="Escape"&&w&&b(!1)};return document.addEventListener("keydown",fe),()=>{document.removeEventListener("keydown",fe)}},[w]);const ht=Array.from(new Set(I.map(fe=>fe.productBrand).filter(Boolean))).sort(),ne=Array.from(new Set(I.flatMap(fe=>fe.styleList||[]).filter(Boolean))).sort(),At=[...I.filter(fe=>{if(l.length>0){const ge=fe.productPrice;if(!l.some(xe=>ge>=xe.min&&ge<=xe.max))return!1}if(u.length>0&&!u.includes(fe.productBrand))return!1;if(h.length>0){const ge=fe.styleList||[];if(!h.some(xe=>ge.includes(xe)))return!1}return!(m&&!fe.isLiked)})].sort((fe,ge)=>{if(S.length===0)return 0;const me=S[0];let xe=0;switch(me){case"name-asc":xe=fe.productName.localeCompare(ge.productName);break;case"name-desc":xe=ge.productName.localeCompare(fe.productName);break;case"price-high":xe=ge.productPrice-fe.productPrice;break;case"price-low":xe=fe.productPrice-ge.productPrice;break;default:return 0}if(xe===0&&S.length>1)switch(S[1]){case"name-asc":xe=fe.productName.localeCompare(ge.productName);break;case"name-desc":xe=ge.productName.localeCompare(fe.productName);break;case"price-high":xe=ge.productPrice-fe.productPrice;break;case"price-low":xe=fe.productPrice-ge.productPrice;break}return xe}),gt=20,mt=l.length>0||u.length>0||h.length>0||m||S.length>0,tt=mt?At.slice(0,(Y+1)*gt):At,Qt=mt?tt.length<At.length:!1,Fe=_.useCallback(async(fe,ge=0,me=!0)=>{if(!fe.trim()){ye("검색어를 입력해주세요.");return}re(!0),ye(null),we(!1);try{const xe=await d2({keyword:fe.trim(),page:ge,size:20});if(xe.success){const He=xe.data.content;if(ue(!xe.data.last),H(ge),me&&(N(xe.data.totalElements),!i))try{const ce=sessionStorage.getItem("recentSearches");let he=ce?JSON.parse(ce):[];he=he.filter(Ee=>Ee!==fe.trim()),he.unshift(fe.trim()),he=he.slice(0,10),sessionStorage.setItem("recentSearches",JSON.stringify(he))}catch(ce){console.error("Failed to save search to session storage:",ce)}const Q=He.map(ce=>({...ce,isLiked:be.current.has(ce.productId)}));$(ce=>me?Q:[...ce,...Q]),ye(null),we(!1)}else xe.code===-10605?($([]),ue(!1),N(0),ye(null),we(!0)):ye(xe.message||"검색에 실패했습니다.")}catch(xe){console.error("Search error:",xe);const He=xe;He.response?.data?.code===-10400?ye("검색어를 입력해주세요."):He.code==="ERR_NETWORK"||He.message?.includes("Network Error")?ye("네트워크 연결을 확인해주세요."):He.message?.includes("CORS")?ye("서버 연결에 문제가 있습니다. 잠시 후 다시 시도해주세요."):ye("검색 중 오류가 발생했습니다.")}finally{re(!1)}},[i]),ar=_.useCallback(async()=>{if(i)try{const fe=await f2();fe.success&&A(fe.data.slice(0,5))}catch(fe){console.error("Failed to fetch search history:",fe),A([])}else try{const fe=sessionStorage.getItem("recentSearches");if(fe){const ge=JSON.parse(fe);A(ge.slice(0,5))}else A([])}catch(fe){console.error("Failed to fetch session search history:",fe),A([])}},[i]);_.useEffect(()=>{D(ut),ut.trim()&&de?Fe(ut,0,!0):ut.trim()||($([]),ye(null))},[ut,de,Fe]),_.useEffect(()=>{K(0)},[l,u,h,m,S]),_.useEffect(()=>{be.current=oe},[oe]),_.useEffect(()=>{(async()=>{if(!i){ve(new Set),_e(!0);return}try{const ge=await LE();if(ge.data&&ge.data.data&&Array.isArray(ge.data.data)){const me=new Set(ge.data.data.map(xe=>xe.productId));ve(me)}else ve(new Set);_e(!0)}catch(ge){console.error("Failed to fetch liked products:",ge),ve(new Set),_e(!0)}})()},[i]),_.useEffect(()=>{ar()},[ar]),_.useEffect(()=>{const fe=ge=>{M.current&&!M.current.contains(ge.target)&&b(!1)};return document.addEventListener("mousedown",fe),()=>{document.removeEventListener("mousedown",fe)}},[]),_.useEffect(()=>{const fe=k.current;if(!fe)return;const ge=()=>{const me=fe.scrollTop;R(me>300)};return fe.addEventListener("scroll",ge),()=>fe.removeEventListener("scroll",ge)},[]);const wn=()=>{const fe=k.current;fe&&fe.scrollTo({top:0,behavior:"smooth"})},xt=fe=>{fe.trim()&&(n(`/search?q=${encodeURIComponent(fe.trim())}`),b(!1))},sn=()=>{b(!0),ar()},Un=fe=>{D(fe.target.value)},ia=fe=>{fe.key==="Enter"&&xt(v)},Cr=fe=>{xt(fe)},In=async(fe,ge)=>{if(ge.stopPropagation(),i)try{(await yh(fe)).success&&(A(xe=>xe.filter(He=>He!==fe)),ar())}catch(me){console.error("Failed to delete search history:",me)}else try{const me=sessionStorage.getItem("recentSearches");if(me){const He=JSON.parse(me).filter(Q=>Q!==fe);sessionStorage.setItem("recentSearches",JSON.stringify(He)),A(Q=>Q.filter(ce=>ce!==fe))}}catch(me){console.error("Failed to delete session search history:",me)}},kr=fe=>{c(fe)},Et=fe=>{T(fe)},xn=_.useCallback(async fe=>{const ge=tt.find(me=>me.productId===fe);if(ge&&(Ue(ge),Be(!0),o)){const me={userId:o.memberId,timestamp:new Date().toISOString(),actionType:"goDetail",productId:fe,searchTerm:ut};try{await Bp([me]),console.log("상품 클릭 goDetail 액션이 실시간으로 전송되었습니다.")}catch(xe){console.error("goDetail 액션 전송 중 오류 발생:",xe)}}},[tt,o,ut]),Bt=_.useCallback(()=>{Be(!1),Ue(null)},[]),oa=_.useCallback(async fe=>{if(!i){ct(!0);return}const ge=oe.has(fe);ve(me=>{const xe=new Set(me);return xe.has(fe)?xe.delete(fe):xe.add(fe),xe}),$(me=>me.map(xe=>xe.productId===fe?{...xe,isLiked:!xe.isLiked}:xe));try{(await AE(fe)).status!==200&&(ve(he=>{const Ee=new Set(he);return ge?Ee.add(fe):Ee.delete(fe),Ee}),$(he=>he.map(Ee=>Ee.productId===fe?{...Ee,isLiked:ge}:Ee)));const xe=JSON.parse(sessionStorage.getItem("user_actions")||"[]"),He=xe.some(he=>he.productId===fe),Q={userId:o?.memberId||0,timestamp:new Date().toISOString(),actionType:He?"unlike":"like",productId:fe,searchTerm:ut};let ce;He?ce=xe.filter(he=>he.productId!==fe):ce=[...xe,Q],sessionStorage.setItem("user_actions",JSON.stringify(ce));try{await Bp([Q]),console.log("사용자 액션이 실시간으로 전송되었습니다.")}catch(he){console.error("사용자 액션 전송 중 오류 발생:",he)}if(ce.length>=5)try{await Bp(ce),sessionStorage.removeItem("user_actions")}catch(he){console.error("서버 저장 중 오류 발생:",he)}}catch(me){console.error("Failed to toggle wishlist:",me)}},[i,oe,o?.memberId,ut]),la=_.useCallback((fe,ge)=>{ve(me=>{const xe=new Set(me);return ge?xe.add(fe):xe.delete(fe),xe}),$(me=>me.map(xe=>xe.productId===fe?{...xe,isLiked:ge}:xe)),Ue(me=>me?{...me,isLiked:ge}:null)},[]),$r=_.useCallback(()=>{mt?Qt&&!te&&K(fe=>fe+1):X&&!te&&Fe(ut,U+1,!1)},[mt,Qt,te,X,Fe,ut,U]),Or=fe=>{const ge=l.filter((me,xe)=>xe!==fe);c(ge)},Rr=fe=>{const ge=u.filter((me,xe)=>xe!==fe);f(ge)},Ar=fe=>{const ge=h.filter((me,xe)=>xe!==fe);g(ge)},cn=()=>{x(!1)},Lr=fe=>{const ge=S.filter((me,xe)=>xe!==fe);T(ge)},ir=()=>{c([]),f([]),g([]),x(!1),T([])},Na=()=>{D(""),n("/search")};return E.jsxs(bD,{children:[E.jsxs(vD,{ref:k,children:[E.jsxs(SD,{ref:M,isExpanded:w,children:[E.jsx(wD,{type:"text",value:v,onClick:sn,onChange:Un,onKeyDown:ia,placeholder:"검색어를 입력하세요"}),v&&E.jsx(_D,{onClick:Na,children:E.jsx(oi,{size:16})}),E.jsx(TD,{onClick:()=>xt(v),children:"🔍︎"}),w&&E.jsxs(ED,{children:[j.length>0&&E.jsxs(E.Fragment,{children:[E.jsx($i,{children:"최근 검색어"}),E.jsx(CD,{children:j.map((fe,ge)=>E.jsxs(kD,{onClick:()=>Cr(fe),children:[E.jsx(OD,{children:fe}),E.jsx(RD,{onClick:me=>In(fe,me),children:E.jsx(oi,{size:12})})]},ge))})]}),E.jsxs(AD,{children:[E.jsxs(Zb,{children:[E.jsx($i,{children:"추천 검색어"}),E.jsx(b2,{onSearch:Cr})]}),E.jsxs(Zb,{children:[E.jsx($i,{children:"실시간 순위"}),E.jsx(y2,{onSearch:Cr})]})]})]})]}),E.jsx(cz,{query:ut,resultCount:mt?At.length:pe}),E.jsx(lD,{priceRanges:l,selectedBrands:u,selectedStyles:h,wishlistOnly:m,sortOptions:S,onRemovePriceRange:Or,onRemoveBrand:Rr,onRemoveStyle:Ar,onRemoveWishlist:cn,onRemoveSort:Lr,onClearAll:ir}),E.jsx(pD,{products:tt,loading:te,error:le,noResults:Se,hasMore:mt?Qt:X,onProductClick:xn,onToggleLike:oa,onLoadMore:$r})]}),E.jsx(Kz,{priceRanges:l,onPriceRangesChange:kr,selectedBrands:u,onBrandsChange:f,selectedStyles:h,onStylesChange:g,wishlistOnly:m,onWishlistChange:x,sortOptions:S,onSortChange:Et,availableBrands:ht,availableStyles:ne}),ze&&E.jsx(Ps,{open:ke,onClose:Bt,data:u0(ze),onLikeChange:la}),E.jsx(Ma,{show:at,onClose:()=>ct(!1),message:"로그인이 필요합니다."}),z&&E.jsx(LD,{onClick:wn,children:E.jsx(od,{size:20})})]})}const bD=P.div`
  position: fixed;
  left: 80px;
  right: 0;
  top: 0;
  bottom: 0;
  max-width: none;
  margin: 0;
  padding: 0 0 20px 0;
  background: #0f1115;
  overflow-y: hidden;
  display: flex;
  flex-direction: row;
  transition: left 0.3s ease;

  nav:hover ~ & {
    left: 200px;
  }
`,vD=P.div`
  width: 80%;
  height: 100vh;
  overflow-y: auto;
  padding: 0 20px;
  overscroll-behavior: contain;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.1);
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.3);
    border: 2px solid transparent;
    background-clip: padding-box;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.5);
    border: 2px solid transparent;
    background-clip: padding-box;
  }
`,SD=P.div`
  position: relative;
  width: 100%;
  max-width: 600px;
  margin: 80px auto 30px;
  border: 2px solid ${r=>r.isExpanded?"#007bff":"#e9ecef"};
  border-radius: 3px;
  background: white;
  transition: border-color 0.2s ease;
`,wD=P.input`
  width: 100%;
  padding: 12px 20px 12px 40px;
  border: none;
  border-radius: 25px;
  font-size: 16px;
  outline: none;
  background: transparent;
`,_D=P.div`
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  color: #999;
  transition: all 0.2s ease;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;

  &:hover {
    color: #333;
    background-color: #f5f5f5;
    transform: translateY(-50%) scale(1.1);
  }
`,TD=P.div`
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 18px;
  cursor: pointer;
  color: #666;
  transition: color 0.2s ease;

  &:hover {
    color: #0056b3;
  }
`,ED=P.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: #0f1115;
  border: 1px solid #072bed;
  border-radius: 8px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
  z-index: 1000;
  margin-top: 8px;
  padding: 20px;
`,CD=P.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
`,kD=P.div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  margin-top: 5px;
  background: #1a1a1a;
  border: 1px solid #374151;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #0f1115;
    border-color: #a8e840;
  }
`,OD=P.span`
  font-size: 14px;
  color: #cccccc;
`,RD=P.button`
  background: none;
  border: none;
  color: #666666;
  cursor: pointer;
  padding: 0;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 107, 107, 0.1);
    color: #ff6b6b;
    transform: scale(1.1);
  }
`,AD=P.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
`,Zb=P.div`
  display: flex;
  flex-direction: column;
`,LD=P.button`
  position: fixed;
  bottom: 20px;
  right: 280px;
  width: 48px;
  height: 48px;
  background: #1a1a1a;
  border: 1px solid #a8e840;
  border-radius: 50%;
  color: #a8e840;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow:
    0 4px 12px rgba(0, 0, 0, 0.3),
    0 0 20px rgba(168, 232, 64, 0.3);
  transition: all 0.3s ease;
  z-index: 2000;

  &:hover {
    background: #0f1115;
    color: #60a5fa;
    border-color: #60a5fa;
    transform: translateY(-2px);
    box-shadow:
      0 6px 16px rgba(0, 0, 0, 0.4),
      0 0 30px rgba(96, 165, 250, 0.4);
  }

  &:active {
    transform: translateY(0);
  }
`,zD=c0("runpod"),ih=async r=>{if("file"in r){const n=new FormData;n.append("file",r.file);const{data:i}=await zD.post("/products/image-search",n,{timeout:1e4});return i}throw new Error("Only file upload is supported")};function DD({uploadedImage:r,onImageUpload:n,onReset:i,historyImages:o=[],onSelectHistory:l}){const[c,u]=_.useState(!1),{showToast:f}=il(),h=_.useRef(null),g=T=>{T.preventDefault(),T.stopPropagation(),T.dataTransfer&&(T.dataTransfer.dropEffect="copy"),console.log("[DragOver] 영역 진입"),u(!0)},m=T=>{T.preventDefault(),T.stopPropagation(),console.log("[DragLeave] 영역 이탈"),u(!1)},x=T=>{T.preventDefault(),T.stopPropagation(),console.log("[Drop] 드롭 이벤트 수신"),u(!1);const w=T.dataTransfer.files,b=T.dataTransfer.items;let v=null;if(console.log("[Drop] files.length:",w?.length," items.length:",b?.length),w.length>0)console.log("[Drop] files 통해 파일 획득"),v=w[0];else if(b.length>0)for(let j=0;j<b.length;j++){const A=b[j];if(console.log("[Drop] item",j,"kind:",A.kind,"type:",A.type),A.kind==="file"&&A.type.startsWith("image/")){console.log("[Drop] items 통해 이미지 파일 획득"),v=A.getAsFile();break}if(A.kind==="string"&&A.type==="text/uri-list"){A.getAsString(z=>{console.log("[Drop] URL 드롭 감지, URL 전달:",z),n?.({target:{value:z}})});return}}v&&(j=>{if(!j)return!1;if(j.type&&j.type.startsWith("image/"))return!0;const A=j.name?.toLowerCase()||"";return/(\.jpg|\.jpeg|\.png|\.webp|\.gif|\.bmp)$/i.test(A)})(v)?(console.log("[Drop] 업로드 트리거 호출, file:",v?.name,v?.type,v?.size),n?.({target:{files:[v]}})):v||(f("이미지 파일만 업로드할 수 있습니다"),console.warn("[Drop] 처리할 파일 없음"))};return ee("div",{css:MD,onDragOver:g,onDragLeave:m,onDrop:x,onPaste:T=>{try{const w=T.clipboardData?.items;if(!w||w.length===0)return;for(let b=0;b<w.length;b++){const v=w[b];if(v.kind==="file"&&v.type.startsWith("image/")){const D=v.getAsFile();if(D){n?.({target:{files:[D]}});return}}}}catch(w){console.warn("[Paste] 처리 실패",w)}},children:[C("div",{css:ND,children:r?ee("div",{css:jD,children:[C("img",{src:r,alt:"Uploaded Image",css:UD}),C("button",{type:"button",css:ID,onClick:i,"aria-label":"reset image",children:"✕"})]}):ee("div",{css:[YD,c&&ZD],onDragOver:g,onDragLeave:m,onDrop:x,onDoubleClick:()=>h.current?.click(),children:[C("input",{type:"file",accept:"image/*",onChange:T=>{const w={target:{files:T.target.files}};n?.(w)},css:FD,id:"mannequin-upload",ref:h}),C("label",{htmlFor:"mannequin-upload",css:QD,children:ee("div",{css:Kb,children:[C("span",{css:XD,children:C(l2,{css:VD})}),C("p",{css:Kb,children:c?"이미지를 놓으세요":"원하는 스타일의 이미지 넣기"}),C("p",{css:GD,children:"붙여넣기(Ctrl+V)와 드래그가 가능해요"})]})})]})}),C("div",{css:BD,children:o&&o.length>0&&C("div",{css:$D,children:C("div",{css:HD,children:o.map((T,w)=>C("button",{type:"button",css:PD,onClick:()=>l?.(T),"aria-label":"select previous image",title:"이전 업로드 사용",children:C("img",{src:T,alt:"history",css:qD})},w))})})})]})}const MD=L`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1px 16px 0 16px;
`,ND=L`
  position: relative;
  width: 100%;
  height: calc(100% - 70px);
  max-width: 260px;
  max-height: 320px;
  display: flex;
  justify-content: center;
  align-items: center;
`,jD=L`
  position: relative;
  width: 100%;
  height: 100%;
`,UD=L`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgb(17, 17, 17);
`,ID=L`
  position: absolute;
  top: 6px;
  right: 6px;
  width: 28px;
  height: 28px;
  border-radius: 5px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  background: rgba(0, 0, 0, 0.4);
  color: #fff;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.6);
    transform: scale(1.05);
  }
`,BD=L`
  width: 100%;
  max-width: 260px;
  margin-top: 8px;
`,HD=L`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-rows: 44px;
  gap: 8px;
  padding-bottom: 8px;
`,$D=L`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`,PD=L`
  width: 44px;
  height: 44px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 6px;
  padding: 0;
  background: transparent;
  cursor: pointer;
  flex: 0 0 auto;
  overflow: hidden;
`,qD=L`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,YD=L`
  width: 100%;
  height: 100%;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.04);
  transition: all 0.2s ease-in-out;

  &:hover {
    border-color: rgba(255, 255, 255, 0.35);
    background: rgba(255, 255, 255, 0.08);
  }
`,Kb=L`
  text-align: center;
  color: rgba(255, 255, 255, 0.7);

  p {
    margin: 8px 0 0 0 !important;
    font-size: 19px;
    font-weight: 700;
    letter-spacing: -0.3px;
  }
`,GD=L`
  margin: 4px 0 0 0 !important;
  font-size: 14px !important;
  color: rgba(255, 255, 255, 0.5) !important;
  font-weight: 700 !important;
`,XD=L`
  font-size: 32px;
  display: block;
  opacity: 0.9;
`,VD=L`
  width: 50px;
  height: 50px;
`,FD=L`
  display: none;
`,QD=L`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  user-select: none;

  /* 더블클릭 시 파일 선택 */
  &:active {
    transform: scale(0.995);
  }
`,ZD=L`
  border-color: #4dabf7 !important;
  background: rgba(77, 171, 247, 0.08) !important;
  transform: scale(1.02);
  box-shadow: 0 0 20px rgba(77, 171, 247, 0.25);
`;function KD({uppers:r,lowers:n,onProductClick:i,onToggleLike:o}){return ee("div",{css:JD,children:[ee("div",{css:Jb,children:[C("div",{css:ev,children:C("h2",{css:Wb,children:"Upper"})}),C("div",{css:tv,children:C("div",{css:nv,children:r.map(l=>C(Qi,{product:l,onClick:i,onToggleLike:c=>o(c,"tops")},l.productId))})})]}),ee("div",{css:Jb,children:[C("div",{css:ev,children:C("h2",{css:Wb,children:"Lower"})}),C("div",{css:tv,children:C("div",{css:nv,children:n.map(l=>C(Qi,{product:l,onClick:i,onToggleLike:c=>o(c,"bottoms")},l.productId))})})]})]})}const JD=L`
  display: flex;
  flex-direction: row;
  gap: 24px;
  height: 100%;
  //   overflow: hidden;
`,Jb=L`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
  height: 100%;
  max-width: 50%;
  background: rgb(17, 17, 17);
  border-right: 1px solid rgba(255, 255, 255, 0.08);

  &:last-of-type {
    border-right: none;
  }
`,Wb=L`
  font-size: 40px;
  font-weight: 700;
  text-align: center;
  color: #ffffff;
  margin: 0;
  letter-spacing: -0.3px;
`,ev=L`
  position: sticky;
  top: 0;
  z-index: 1;
  padding: 16px 20px;
  background: #072bed;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  border-color: #a8e840;
`,tv=L`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  padding: 20px;
  height: 100%;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.1);
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.3);
    border: 2px solid transparent;
    background-clip: padding-box;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.5);
    border: 2px solid transparent;
    background-clip: padding-box;
  }
`,nv=L`
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  flex: 1;
  min-height: 400px;
  max-width: 100%;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.1);
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.3);
    border: 2px solid transparent;
    background-clip: padding-box;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.5);
    border: 2px solid transparent;
    background-clip: padding-box;
  }
`,Uo=r=>{const n=r,i=n.product_id,o=n.name,l=n.brand,c=n.price,u=n.thumbnail,f=n.originUrl,h=n.styleList,g=n.isLiked??n.liked??n.is_liked,m=Array.isArray(h)?h:typeof h=="string"?h.split(",").map(x=>x.trim().replace(/\(.*?\)/g,"")).filter(x=>x.length>0):null;return{productId:i,productName:o,productBrand:l,productPrice:c,productImageUrl:u,productUrl:f,styleList:m,liked:!!g}};function WD(){const[r,n]=_.useState(null),[i,o]=_.useState(!1),[l,c]=_.useState(null),[u,f]=_.useState(!1),[h,g]=_.useState([]),[m,x]=_.useState([]),[S,T]=_.useState([]),{showToast:w}=il(),b=Ft(I=>I.isLoggedIn);_.useEffect(()=>{try{const I=localStorage.getItem("imageSearchHistory");if(I){const $=JSON.parse(I);Array.isArray($)&&T($)}}catch{}},[]);const v=I=>{T($=>{const re=[I,...$.filter(le=>le!==I)].slice(0,10);try{localStorage.setItem("imageSearchHistory",JSON.stringify(re))}catch{}return re})},D=async I=>{if(console.log("[Upload] 이벤트 수신, has files:",!!I?.target?.files," value:",I?.target?.value),I.target?.value&&!I.target?.files){try{const te=String(I.target.value);console.log("[Upload] URL 드롭 수신:",te),n(te),v(te),await new Promise(ye=>requestAnimationFrame(()=>ye()));let re=te;te.startsWith("https://myssafy.s3.us-east-1.amazonaws.com/")&&(re=`${te}?${Date.now()}`),o(!0),console.log("[API] URL→File 업로드 시도 (proxiedUrl):",re);try{const Se=await(await fetch(re)).blob(),we=(Se.type.split("/")[1]||"jpg").toLowerCase(),U=new File([Se],`dropped.${we}`,{type:Se.type}),H=await ih({file:U});console.log("[API] URL→File 응답 수신, upper:",H.upper?.length," lower:",H.lower?.length);const X=H.upper.map(Uo),ue=H.lower.map(Uo);await A(X,ue);return}catch(ye){console.warn("[API] URL→File 변환 실패, 서버 URL 처리 시도",ye)}}catch(te){console.error("[Upload] URL 처리 실패",te),w("URL 이미지는 파일 변환/서버 처리 실패. 파일로 업로드해 주세요")}finally{o(!1)}return}const $=I.target.files?.[0];if($){console.log("[Upload] 파일 선택됨:",$.name,$.type,$.size),o(!0);try{await new Promise(Se=>{const we=new FileReader;we.onload=U=>{console.log("[Preview] onload 완료, 프리뷰 적용");const H=U.target?.result;n(H),v(H),Se(H)},we.readAsDataURL($)}),await new Promise(Se=>requestAnimationFrame(()=>Se())),console.log("[API] 이미지 검색 요청 시작");const re=await ih({file:$});console.log("[API] 응답 수신, upper:",re.upper?.length," lower:",re.lower?.length);const le=re.upper.map(Uo),ye=re.lower.map(Uo);await A(le,ye)}catch(te){console.error("[API] 오류",te)}finally{console.log("[API] 처리 종료"),o(!1)}}},j=async I=>{try{v(I),n(I),o(!0);let $;if(/^https?:\/\//i.test(I)){let ye=I;I.startsWith("https://myssafy.s3.us-east-1.amazonaws.com/")&&(ye=`${I}?${Date.now()}`);const U=await(await fetch(ye)).blob(),H=(U.type.split("/")[1]||"jpg").toLowerCase();$=new File([U],`history.${H}`,{type:U.type})}else if(I.startsWith("data:")){const Se=await(await fetch(I)).blob(),we=(Se.type.split("/")[1]||"png").toLowerCase();$=new File([Se],`pasted.${we}`,{type:Se.type})}else{w("지원하지 않는 이미지 형식입니다");return}const te=await ih({file:$}),re=te.upper.map(Uo),le=te.lower.map(Uo);await A(re,le)}catch($){console.warn("히스토리 이미지 처리 실패",$)}finally{o(!1)}},A=async(I,$)=>{try{const te=await fd(),re=new Set(te.map(Se=>String(Se.productId))),le=I.map(Se=>({...Se,liked:re.has(Se.productId)||Se.liked})),ye=$.map(Se=>({...Se,liked:re.has(Se.productId)||Se.liked}));g(le),x(ye)}catch(te){console.warn("찜 목록 조회 실패, 원본 리스트로 진행합니다.",te),g(I),x($)}};return ee("div",{css:eM,children:[ee("div",{css:iM,children:[C("div",{css:oM,children:ee("div",{css:lM,children:[C("div",{css:tM,children:C("div",{css:nM,children:C("div",{css:rM,children:C("span",{css:aM,children:"Image Search"})})})}),i&&C("div",{css:[uM,dM],role:"status","aria-live":"polite",children:ee("span",{children:["상품 검색 중",C("span",{className:"dots",children:"..."})]})}),C(DD,{uploadedImage:r,onImageUpload:D,onReset:()=>{n(null)},historyImages:S,onSelectHistory:j})]})}),C("div",{css:sM,children:C("div",{css:cM,children:C(KD,{uppers:h,lowers:m,onProductClick:async I=>{const $=()=>{const re=[...h,...m].find(le=>le.productId===I);return re?{productId:re.productId,productBrand:re.productBrand,productName:re.productName,productPrice:re.productPrice,productUrl:re.productUrl||"",styleList:re.styleList||null,productImageUrl:re.productImageUrl,liked:re.liked}:null};try{const re=await Da(I);if(re.success&&re.data){const le=re.data,ye={productId:le.productId,productBrand:le.productBrand,productName:le.productName,productPrice:le.productPrice,productUrl:le.productUrl,styleList:le.styleList,productImageUrl:le.productImageUrl,liked:le.isLiked};c(ye),f(!0);return}}catch(re){console.warn("getProductDetail 실패, 리스트 데이터로 대체합니다.",re)}const te=$();te&&(c(te),f(!0))},onToggleLike:async(I,$)=>{if(!I||I==="undefined"){console.warn("[Like] invalid id, abort"),w("상품 ID를 확인할 수 없습니다");return}if(!b){w("로그인이 필요합니다");return}const te=re=>re.map(le=>le.productId===I?{...le,liked:!le.liked}:le);$==="tops"?g(re=>te(re)):x(re=>te(re));try{await R0(I)}catch(re){console.error("찜 API 오류",re),$==="tops"?g(le=>te(le)):x(le=>te(le)),w("찜 처리 중 오류가 발생했습니다")}}})})})]}),l&&C(Ps,{open:u,onClose:()=>{f(!1),c(null)},data:l,onLikeChange:(I,$)=>{console.log(`Product ${I} liked: ${$}`)}})]})}const eM=L`
  position: absolute;
  left: 80px;
  right: 0;
  top: 0;
  bottom: 0;
  background:
    radial-gradient(
      1200px 400px at 20% -10%,
      rgba(79, 142, 252, 0.08),
      transparent 60%
    ),
    radial-gradient(
      1000px 350px at 85% 0%,
      rgba(34, 211, 238, 0.06),
      transparent 55%
    ),
    #0f1115;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: left 0.3s ease;

  nav:hover ~ & {
    left: 200px;
  }
`,tM=L`
  padding: 16px 16px 12px 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  position: sticky;
  top: 0;
  z-index: 2;
  background: #072bed;
  color: #ffffff;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  border-color: #a8e840;
`,nM=L`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: -15px;
  gap: 6px;
`,rM=L`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  margin-bottom: 17px;
`,aM=L`
  font-size: 40px;
  font-weight: 800;
  color: #a8e840;
  letter-spacing: -0.5px;
`,iM=L`
  display: flex;
  gap: 24px;
  height: 100vh;
  max-height: none;
  padding: 20px;
`,oM=L`
  flex: 0 0 340px;
  display: flex;
  justify-content: center;
  align-items: center;
`,lM=L`
  width: 100%;
  height: 100%;
  background: rgb(17, 17, 17);
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  overflow: hidden;
  display: flex;
  flex-direction: column;
`,sM=L`
  flex: 1;
  height: 100%;
  min-width: 0;
`,cM=L`
  height: 100%;
  background: rgb(17, 17, 17);
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  overflow: hidden;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.1);
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.3);
    border: 2px solid transparent;
    background-clip: padding-box;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.5);
    border: 2px solid transparent;
    background-clip: padding-box;
  }
`,uM=L`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #e7f0ff;
  font-size: 20px;
  font-weight: 700;
  padding: 6px 10px;
  background: rgba(255, 255, 255, 0.15);
  // border: 1px solid rgba(79, 142, 252, 0.35);/
  border-radius: 3px;
  &::before {
    content: '';
    width: 14px;
    height: 14px;
    border-top: 2px solid #a8e840;
    border-radius: 50%;
    animation: spin 0.9s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  .dots::after {
    content: '';
    display: inline-block;
    width: 1.2em;
    text-align: left;
    animation: dots 1.2s steps(4, end) infinite;
  }
  @keyframes dots {
    0%,
    20% {
      content: '';
    }
    40% {
      content: '.';
    }
    60% {
      content: '..';
    }
    80%,
    100% {
      content: '...';
    }
  }
`,dM=L`
  margin: 40px auto 0 auto;
`;function fM(){return E.jsx(r4,{children:E.jsxs(Nr,{element:E.jsx(d8,{}),children:[E.jsx(Nr,{index:!0,element:E.jsx(e4,{to:"main",replace:!0})}),E.jsx(Nr,{path:"main",element:E.jsx(Oy,{})}),E.jsx(Nr,{path:"fittingroom",element:E.jsx(cA,{})}),E.jsx(Nr,{path:"search",element:E.jsx(yD,{})}),E.jsx(Nr,{path:"image-search",element:E.jsx(WD,{})}),E.jsx(Nr,{path:"recommend",element:E.jsx(_L,{})}),E.jsx(Nr,{path:"hotitems",element:E.jsx(Ib,{})}),E.jsx(Nr,{path:"HotItems",element:E.jsx(Ib,{})}),E.jsx(Nr,{path:"login",element:E.jsx(Oy,{})})]})})}const pM="/demos/onwear/",Ca=r=>`url('${pM}fonts/${r}') format('woff2')`,hM=()=>E.jsx(C3,{styles:L`
      @font-face {
        font-family: 'NanumSquare';
        src: ${Ca("NanumSquareEB.woff2")};
        font-weight: 800;
        font-style: normal;
      }
      @font-face {
        font-family: 'NanumSquare';
        src: ${Ca("NanumSquareB.woff2")};
        font-weight: 700;
        font-style: normal;
      }
      @font-face {
        font-family: 'NanumSquare';
        src: ${Ca("NanumSquareR.woff2")};
        font-weight: 400;
        font-style: normal;
      }
      @font-face {
        font-family: 'NanumSquare';
        src: ${Ca("NanumSquareL.woff2")};
        font-weight: 300;
        font-style: normal;
      }

      @font-face {
        font-family: 'Open Sans';
        src: ${Ca("OpenSans-Regular.woff2")};
        font-weight: 400;
        font-style: normal;
      }
      @font-face {
        font-family: 'Open Sans';
        src: ${Ca("OpenSans-Bold.woff2")};
        font-weight: 700;
        font-style: normal;
      }
      @font-face {
        font-family: 'Open Sans';
        src: ${Ca("OpenSans-Semibold.woff2")};
        font-weight: 600;
        font-style: normal;
      }
      @font-face {
        font-family: 'Open Sans';
        src: ${Ca("OpenSans-Light.woff2")};
        font-weight: 300;
        font-style: normal;
      }
      @font-face {
        font-family: 'Open Sans';
        src: ${Ca("OpenSans-ExtraBold.woff2")};
        font-weight: 800;
        font-style: normal;
      }

      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      html,
      body,
      #root {
        height: 100%;
      }

      body {
        font-family: 'NanumSquare', sans-serif;
        background: #ffffff;
        color: #333;
        line-height: 1.5;
        overflow-x: hidden;
        /* 프로젝트4는 화면 내부(각 페이지 컨테이너)에서 스크롤을 관리한다 */
        overflow-y: hidden;
      }

      [lang='en'] {
        font-family: 'Open Sans', sans-serif;
      }
    `});n5.createRoot(document.getElementById("root")).render(E.jsxs(O4,{basename:"/demos/onwear/",children:[E.jsx(hM,{}),E.jsx(fM,{})]}));
