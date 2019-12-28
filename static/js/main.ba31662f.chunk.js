(this["webpackJsonpchat-react"]=this["webpackJsonpchat-react"]||[]).push([[0],{117:function(e,a,t){e.exports=t(168)},168:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),l=t(8),o=t.n(l),s=t(18),i=function(){return n.a.createElement("div",null,"Chat")},c=t(22),u=t(30),m=t(99),d=t(100),p=t(42),f={isAuthenticated:!1},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,a=arguments.length>1?arguments[1]:void 0,t=a.type,r=a.payload;switch(t){case"USER_LOGIN_SUCCESS":return Object(p.a)({},e,{isAuthenticated:!0},r);case"USER_LOGOUT":case"USER_LOGIN_FAIL":return localStorage.removeItem("token"),Object(p.a)({},f,{isAuthenticated:!1})}return e},h=Object(u.combineReducers)({user:g}),b=t(26),E=t.n(b),v=function(e){e?E.a.defaults.headers.common.Authorization="Bearer ".concat(e):delete E.a.defaults.headers.common.Authorization},w=t(29),O=t.n(w),S=function(){return function(e){var a;return O.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return localStorage.token&&v(localStorage.token),t.prev=1,t.next=4,O.a.awrap(E.a.get("https://radiant-taiga-91549.herokuapp.com/users/me"));case 4:a=t.sent,e({type:"USER_LOGIN_SUCCESS",payload:a.data}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),e({type:"USER_LOGIN_FAIL"});case 11:case"end":return t.stop()}}),null,null,[[1,8]])}},j=t(202),y=t(101),C=t.n(y),k=t(200),A=t(198),_=t(204),U=t(196),I=t(199),x=t(193),L=t(190),N=t(55),R=function(e,a){var t=Object(r.useState)({}),n=Object(s.a)(t,2),l=n[0],o=n[1],i=Object(r.useState)({}),c=Object(s.a)(i,2),u=c[0],m=c[1],d=Object(r.useState)(!1),f=Object(s.a)(d,2),g=f[0],h=f[1];return Object(r.useEffect)((function(){0===Object.keys(u).length&&g&&e()}),[u]),{handleChange:function(e,a){o((function(t){return Object(p.a)({},t,Object(N.a)({},e,a))})),m((function(a){return Object(p.a)({},a,Object(N.a)({},e,null))}))},handleSubmit:function(e){e.preventDefault(),m(a(l)),h(!0)},setServerErrors:function(e){m((function(a){return Object(p.a)({},a,{},e)}))},values:l,errors:u}},W=t(194),q=t(205),z=t(197),F=t(192),G=t(195),P=Object(L.a)((function(e){return{paper:{display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}})),T=Object(c.b)(null,{loadUser:S})((function(e){var a=Object(r.useState)(!1),t=Object(s.a)(a,2),l=t[0],o=t[1],i=P(),c=R((function(){var a,t,r,n,l;return O.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:return o(!0),a=d.email,t=d.password,s.prev=2,s.next=5,O.a.awrap(E.a.post("https://radiant-taiga-91549.herokuapp.com/auth",{email:a,password:t}));case 5:r=s.sent,n=r.data,l=n.token,localStorage.setItem("token",l),e.loadUser(),o(!1),s.next=18;break;case 13:s.prev=13,s.t0=s.catch(2),console.log(s.t0),f({email:s.t0.message}),o(!1);case 18:case"end":return s.stop()}}),null,null,[[2,13]])}),(function(e){var a={};return e.email||(a.email="Required"),e.password||(a.password="Required"),e.email&&!/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e.email)&&(a.email="Email is not valid"),a})),u=c.handleChange,m=c.handleSubmit,d=c.values,p=c.errors,f=c.setServerErrors;return n.a.createElement(n.a.Fragment,null,n.a.createElement(F.a,null,n.a.createElement("div",{className:i.paper},n.a.createElement(_.a,{className:i.avatar}),n.a.createElement(x.a,{component:"h1",variant:"h5"},"Sign in"),n.a.createElement("form",{className:i.form,noValidate:!0,onSubmit:m},n.a.createElement(q.a,{fullWidth:!0,error:!!p.email},n.a.createElement(I.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",onChange:function(e){return u(e.target.name,e.target.value)},label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,error:!!p.email,value:d.email?d.email:""}),p.email&&n.a.createElement(W.a,null,p.email)),n.a.createElement(q.a,{fullWidth:!0,error:!!p.password},n.a.createElement(I.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",error:!!p.password,onChange:function(e){return u(e.target.name,e.target.value)},autoComplete:"current-password",value:d.password?d.password:""}),p.password&&n.a.createElement(W.a,null,p.password))))),n.a.createElement(G.a,null,l?n.a.createElement(z.a,null):n.a.createElement(U.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:i.submit,onClick:m,size:"large"},"Sign In")))})),D=t(61),Z=Object(L.a)((function(e){return{paper:{display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}})),B=Object(D.a)(null,{loadUser:S})((function(e){var a=Object(r.useState)(!1),t=Object(s.a)(a,2),l=t[0],o=t[1],i=Z(),c=R((function(){var a,t,r,n,l;return O.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:return o(!0),a=d.email,t=d.password,s.prev=2,s.next=5,O.a.awrap(E.a.post("https://radiant-taiga-91549.herokuapp.com/users",{email:a,password:t}));case 5:r=s.sent,n=r.data,l=n.token,o(!1),localStorage.setItem("token",l),e.loadUser(),s.next=18;break;case 13:s.prev=13,s.t0=s.catch(2),console.log(s.t0),f({email:s.t0.message}),o(!1);case 18:case"end":return s.stop()}}),null,null,[[2,13]])}),(function(e){var a={};return e.email||(a.email="Required"),e.email&&!/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e.email)&&(a.email="Email is not valid"),e.password||(a.password="Required"),e.repeat_password||(a.repeat_password="Required"),e.password&&e.repeat_password&&e.password!==e.repeat_password&&(a.password="Passwords are different",a.repeat_password="Passwords are different"),a})),u=c.handleChange,m=c.handleSubmit,d=c.values,p=c.errors,f=c.setServerErrors;return n.a.createElement(n.a.Fragment,null,n.a.createElement(F.a,null,n.a.createElement("div",{className:i.paper},n.a.createElement(_.a,{className:i.avatar}),n.a.createElement(x.a,{component:"h1",variant:"h5"},"Sign Up"),n.a.createElement("form",{className:i.form,noValidate:!0,onSubmit:m},n.a.createElement(q.a,{fullWidth:!0,error:!!p.email},n.a.createElement(I.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",onChange:function(e){return u(e.target.name,e.target.value)},label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,error:!!p.email,value:d.email?d.email:""}),p.email&&n.a.createElement(W.a,null,p.email)),n.a.createElement(q.a,{fullWidth:!0,error:!!p.password},n.a.createElement(I.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",error:!!p.password,onChange:function(e){return u(e.target.name,e.target.value)},autoComplete:"current-password",value:d.password?d.password:""}),p.password&&n.a.createElement(W.a,null,p.password)),n.a.createElement(q.a,{fullWidth:!0,error:!!p.repeat_password},n.a.createElement(I.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"repeat_password",label:"Repeat password",type:"password",id:"repeat_password",error:!!p.repeat_password,onChange:function(e){return u(e.target.name,e.target.value)},autoComplete:"current-password",value:d.repeat_password?d.repeat_password:""}),p.repeat_password&&n.a.createElement(W.a,null,p.repeat_password))))),n.a.createElement(G.a,null,l?n.a.createElement(z.a,null):n.a.createElement(U.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:i.submit,size:"large",onClick:m},"Sign Up")))})),J=Object(c.b)((function(e){return{isAuthenticated:e.user.isAuthenticated}}))((function(e){var a=e.open,t=e.setOpen,l=e.isAuthenticated,o=n.a.useState(0),i=Object(s.a)(o,2),c=i[0],u=i[1];return Object(r.useEffect)((function(){l&&t(!1)}),[l]),n.a.createElement(j.a,{open:a,onClose:function(){return t(!1)},"aria-labelledby":"auth-tabs-title"},n.a.createElement(C.a,{position:"static"},n.a.createElement(k.a,{value:c,onChange:function(e,a){return u(a)},"aria-label":"auth tabs",centered:!0},n.a.createElement(A.a,{label:"Sign In",id:"signIn","aria-controls":"signIn-tab"}),n.a.createElement(A.a,{label:"Sign Up",id:"signUp","aria-controls":"signUp-tab"}))),0===c&&n.a.createElement(T,null),1===c&&n.a.createElement(B,null))})),V=Object(c.b)((function(e){return{isAuthenticated:e.user.isAuthenticated}}))((function(e){var a=e.setOpenLoginPopup,t=e.isAuthenticated;return n.a.createElement(n.a.Fragment,null,!t&&n.a.createElement(U.a,{variant:"outlined",color:"primary",onClick:function(){return a(!0)}},"login"))})),$=Object(c.b)((function(e){return{isAuthenticated:e.user.isAuthenticated}}),{userLogOut:function(){return function(e){e({type:"USER_LOGOUT"})}}})((function(e){var a=e.isAuthenticated,t=e.userLogOut;return n.a.createElement(n.a.Fragment,null,a&&n.a.createElement(U.a,{variant:"outlined",color:"primary",onClick:t},"Log out"))})),M=Object(u.createStore)(h,Object(m.composeWithDevTools)(Object(u.applyMiddleware)(d.a)));localStorage.token&&v(localStorage.token);var H=function(){Object(r.useEffect)((function(){M.dispatch(S())}),[]);var e=Object(r.useState)(!1),a=Object(s.a)(e,2),t=a[0],l=a[1];return n.a.createElement(c.a,{store:M},n.a.createElement("div",{className:"App"},n.a.createElement(i,null),n.a.createElement(V,{setOpenLoginPopup:l}),n.a.createElement($,null),n.a.createElement(J,{open:t,setOpen:l})))};o.a.render(n.a.createElement(H,null),document.getElementById("root"))}},[[117,1,2]]]);
//# sourceMappingURL=main.ba31662f.chunk.js.map