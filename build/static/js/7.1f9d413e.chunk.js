(this["webpackJsonpreact-first"]=this["webpackJsonpreact-first"]||[]).push([[7],{223:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return m})),n.d(t,"c",(function(){return l}));var r=n(224),a=n(0),c=n.n(a),i=(n(225),n(104)),o=function(e){e.input;var t=e.meta,n=t.error,a=t.touched,i=e.children,o=(Object(r.a)(e,["input","meta","children"]),n&&a);return c.a.createElement("div",{className:"form-control "+(o?"error":"")},i,o&&c.a.createElement("span",{className:"error-span"},n))},u=function(e){var t=e.input,n=(e.meta,Object(r.a)(e,["input","meta"]));return c.a.createElement(o,e,c.a.createElement("textarea",Object.assign({},t,n)))},m=function(e){var t=e.input,n=(e.meta,Object(r.a)(e,["input","meta"]));return c.a.createElement(o,e,c.a.createElement("input",Object.assign({},t,n)))},l=function(e,t,n,r,a){var o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{};return c.a.createElement(i.a,Object.assign({component:r,validate:n,name:t,placeholder:e,className:a},o))}},225:function(e,t,n){},226:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=function(e){return e?void 0:"Field is required"},a=function(e){return function(t){return t.length>e?"Max length is ".concat(e):void 0}}},298:function(e,t,n){},303:function(e,t,n){"use strict";n.r(t);var r=n(51),a=n(52),c=n(54),i=n(53),o=n(55),u=n(0),m=n.n(u),l=(n(298),n(105)),s=n(21),b=n(39),f=n(223),p=n(226),d=Object(l.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error;return m.a.createElement("form",{onSubmit:t,className:"login-form"},Object(f.c)("Login","email",[p.b],f.a,"login-form__input",{type:"email"}),Object(f.c)("Password","password",[p.b],f.a,"login-form__input",{type:"password"}),m.a.createElement("div",{className:"checkbox-box"},Object(f.c)(null,"rememberMe",null,"input","checkbox",{type:"checkbox",id:"remember"}),m.a.createElement("label",{htmlFor:"remember"},"Remember me")),n&&m.a.createElement("div",{className:"summary-error"},n),m.a.createElement("button",{className:"form-btn"},"Login"))})),h=Object(b.b)()((function(e){return e.isAuth?m.a.createElement(s.a,{to:"/profile/"}):m.a.createElement("div",{className:"login"},m.a.createElement("h1",null,"Login"),m.a.createElement(d,{onSubmit:function(t){e.getLoginUserData(t.email,t.password,t.rememberMe)}}))})),g=n(30),E=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(a.a)(t,[{key:"render",value:function(){return m.a.createElement(m.a.Fragment,null,m.a.createElement(h,this.props))}}]),t}(m.a.Component);t.default=Object(b.b)((function(e){return{login:e.auth.login,isAuth:e.auth.isAuth}}),{getLoginUserData:g.c})(E)}}]);
//# sourceMappingURL=7.1f9d413e.chunk.js.map