(this["webpackJsonplogin-page"]=this["webpackJsonplogin-page"]||[]).push([[0],{36:function(e,t,s){},42:function(e,t,s){},43:function(e,t,s){},44:function(e,t,s){"use strict";s.r(t);var c=s(0),n=s(13),a=s.n(n),i=s(25),r=s(11),o=s(17),d=s.p+"static/media/google_logo.e576aca0.svg",l=s.p+"static/media/microsoft_logo.3cc4718c.svg",u=s(26),m=(s(36),s(64)),j=s(63),b=s(2),h=function(e){return Object(b.jsx)(m.a,{control:Object(b.jsx)(j.a,{checked:e.checked,onChange:function(){!0===e.checked?(e.setValue("remember",!1),e.setChecked(!1)):(e.setValue("remember",!0),e.setChecked(!0))},name:"remember"}),label:"Remember me"})},p=function(e){["email","password"].forEach((function(t){e.errors[t]?document.getElementById("".concat(t)).classList.contains("inputInvalid")||document.getElementById("".concat(t)).classList.add("inputInvalid"):document.getElementById("".concat(t)).classList.contains("inputInvalid")&&document.getElementById("".concat(t)).classList.remove("inputInvalid")}))},O=function(){var e=Object(c.useState)(!1),t=Object(r.a)(e,2),s=t[0],n=t[1],a=Object(o.c)(),m=a.register,j=a.handleSubmit,O=a.formState,g=O.errors,x=O.isSubmitSuccessful,v=a.formState,f=a.reset,N=a.control,w=a.setValue;return Object(c.useEffect)((function(){x&&(f({keepIsSubmitted:!1}),n(!1)),p(v)}),[x,f,v]),Object(b.jsx)("div",{id:"login-page",children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("h1",{children:"Log in"}),Object(b.jsxs)("div",{className:"h-centered",children:[Object(b.jsx)("p",{children:"Don't have an account?"}),Object(b.jsx)("div",{className:"button button--custom",children:"Sign up"})]}),Object(b.jsxs)("div",{className:"button button--custom-bordered",children:[Object(b.jsx)("img",{src:d,alt:"google logo"}),"Continue with Google"]}),Object(b.jsxs)("div",{className:"button button--custom-bordered",children:[Object(b.jsx)("img",{src:l,alt:"microsoft logo"}),"Continue with Microsoft"]}),Object(b.jsxs)("div",{className:"divider",children:[Object(b.jsx)("div",{className:"strike"})," or ",Object(b.jsx)("div",{className:"strike"})]}),Object(b.jsxs)("form",{onSubmit:j((function(){})),children:[Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("input",Object(i.a)({id:"email",className:"input-field",placeholder:"Email",name:"email"},m("email",{pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,message:"Not valid e-mail"}}))),Object(b.jsx)(u.a,{errors:g,name:"email",render:function(e){var t=e.message;return Object(b.jsx)("p",{children:t})}})]}),Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("input",Object(i.a)({id:"password",className:"input-field",type:"password",placeholder:"Password",name:"password"},m("password",{required:{value:!0,message:"The password is required"}}))),Object(b.jsx)(u.a,{errors:g,name:"password",render:function(e){var t=e.message;return Object(b.jsx)("p",{children:t})}})]}),Object(b.jsx)("div",{className:"h-centered",children:Object(b.jsx)("div",{className:"button button--custom",children:"Forgot password?"})}),Object(b.jsx)("div",{children:Object(b.jsx)(o.a,{name:"remember",defaultValue:!1,control:N,render:function(){return Object(b.jsx)(h,{setValue:w,checked:s,setChecked:n})}})}),Object(b.jsx)("button",{type:"submit",children:"Continue"})]})]})})};s(42);var g=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(O,{})})};s(43);a.a.render(Object(b.jsx)(g,{}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.0f8b34d2.chunk.js.map