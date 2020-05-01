(this["webpackJsonpbig-bug-react"]=this["webpackJsonpbig-bug-react"]||[]).push([[0],{180:function(e,t,a){},184:function(e,t,a){e.exports=a(406)},189:function(e,t,a){},191:function(e,t,a){},210:function(e,t){},212:function(e,t){},242:function(e,t){},243:function(e,t){},287:function(e,t){},289:function(e,t){},312:function(e,t){},403:function(e,t,a){},404:function(e,t,a){},405:function(e,t,a){},406:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),u=a(181),l=a.n(u),s=(a(189),a(13)),i=a.n(s),c=a(8),o=a(6),g=a(38);a(191);function b(e){var t=e.currentUserData,a=t.firstName,n=void 0===a?"Default":a,u=t.lastName,l=void 0===u?"User":u;return r.a.createElement("header",null,e.isAuthenticated?r.a.createElement("div",{id:"headerContainer"},r.a.createElement("div",{id:"userName"},"Welcome, ",n," ",l),r.a.createElement("div",{id:"headerMenu"},r.a.createElement(o.b,{to:"/",style:{textDecoration:"none"}},r.a.createElement("div",{className:"headerItem"},"Dashboard")),r.a.createElement(o.b,{to:"/createBug",style:{textDecoration:"none"}},r.a.createElement("div",{className:"headerItem"},"Create Bug")),r.a.createElement(o.b,{to:"settings",style:{textDecoration:"none"}},r.a.createElement("i",{className:"fa fa-cog headerItem",style:{marginTop:"5px"}})),r.a.createElement(o.b,{to:"/",style:{textDecoration:"none"}},r.a.createElement("div",{className:"headerItem"},r.a.createElement("span",{onClick:e.logout,type:"text"},"Logout"))))):null)}var m=a(20),d=a(5);function p(e,t){return i.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:a(26)({method:"POST",url:"https://bigbug-365ff5.appdrag.site/api/users/register",form:{firstName:e.firstName,lastName:e.lastName,email:e.email,pwd:e.pwd,phone:e.phone}},(function(e,a,n){console.log(n);var r=JSON.parse(n);t(r.affectedRows)}));case 2:case"end":return n.stop()}}))}var f=a(26);function v(e){return new Promise((function(t,a){f({method:"POST",url:"https://bigbug-365ff5.appdrag.site/api/checkUniqueEmail",form:{email:e,AD_PageNbr:"1",AD_PageSize:"500"}},(function(e,a,n){if(null!=e)t(e);else{var r=JSON.parse(n).Table;t(r)}}))}))}function h(e){var t=Object(n.useState)(!1),u=Object(c.a)(t,2),l=u[0],s=u[1],g=Object(n.useState)(!1),b=Object(c.a)(g,2),p=b[0],f=b[1],v=function(){var e=Object(n.useRef)(null);return[e,function(){e.current&&e.current.focus()}]}(),h=Object(c.a)(v,2),E=h[0],w=h[1];function S(){return e.currentUserData.email&&e.currentUserData.email.length>0&&e.currentUserData.pwd&&e.currentUserData.pwd.length>0}function y(){console.log("login request");!function(e,t){var n,r,u,l,s;i.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:n=a(26),r=e.email,u=void 0===r?"":r,l=e.pwd,s=void 0===l?"":l,console.log("email ".concat(u," ").concat(s)),n({method:"POST",url:"https://bigbug-365ff5.appdrag.site/api/users/login",form:{email:u,pwd:s,AD_PageNbr:"1",AD_PageSize:"500"}},(function(e,a,n){var r=JSON.parse(n);0!==r.Table.length?(console.log("Welcome "+r.Table[0].firstName),t(r.Table[0])):(console.log("No data returned"),t(-1))}));case 4:case"end":return i.stop()}}))}(e.currentUserData,(function(t){console.log("Data received from CallBack = ",t),-1===t?(s(!0),w(),e.setCurrentUserData(Object(d.a)({},e.currentUserData,{email:"",pwd:""}))):(s(!1),e.setCurrentUserData(t),e.setIsAuthenticated(!0))}))}function D(t){var a=t.name,n=t.value;e.setCurrentUserData(Object(d.a)({},e.currentUserData,Object(m.a)({},a,n)))}function C(e){"Enter"===e.key&&S()&&y()}return r.a.createElement("div",{className:"mainWindow"},r.a.createElement("div",{className:"centeredContainer narrowWindow"},l&&r.a.createElement("div",{className:"error-text bold"},"Incorrect login. Please check your details and try again."),r.a.createElement("div",{className:"flexColumnContainer"},r.a.createElement("label",{className:"bold",htmlFor:"loginEmail"},"Email:"),r.a.createElement("input",{onChange:function(e){return D(e.target)},onKeyPress:function(e){return C(e)},id:"loginEmail",className:"centeredContainerInput",type:"text",name:"email",value:e.currentUserData.email||"",autoFocus:!0,ref:E})),r.a.createElement("div",{className:"flexColumnContainer"},r.a.createElement("label",{className:"bold",htmlFor:"loginPassword"},"Password:"),r.a.createElement("input",{onChange:function(e){return D(e.target)},onKeyPress:function(e){return C(e)},id:"loginPassword",className:"centeredContainerInput",type:p?"text":"password",name:"pwd",value:e.currentUserData.pwd||""}),r.a.createElement("i",{className:p?"fa fa-eye-slash passwordEye":"fa fa-eye passwordEye",onClick:function(){return f((function(e){return!e}))}})),S()?r.a.createElement("input",{id:"loginButton",className:"centeredContainerButton primaryButton buttonEnabled",onClick:y,type:"button",value:"Login"}):r.a.createElement("input",{id:"loginDisabled",className:"centeredContainerButton primaryButtonDisabled",type:"button",value:"Login"}),r.a.createElement("div",{className:"flexColumnContainer text-center"},r.a.createElement(o.b,{to:"/register"},r.a.createElement("input",{id:"registerButton",className:"centeredContainerButton tertiaryButton buttonEnabled",type:"button",value:"Register"})))))}function E(e){var t=e.errorMsgs,a=void 0===t?{}:t,n=e.field,u=e.value,l=!!e.hasAutoFocus,s=!!e.isDisabled;return r.a.createElement("div",{className:"flexColumnContainer inputFieldPadding"},r.a.createElement("label",{className:"bold",htmlFor:"userDataField"},e.children,":",r.a.createElement("span",{className:a[n]?"error-text margin-left-30":null},a[n]?a[n]:null)),l?r.a.createElement("input",{className:"centeredContainerInput",onInput:e.handleInput,id:"userDataField",name:n,type:"text",defaultValue:"",value:u||"",autoFocus:!0}):s?r.a.createElement("input",{className:"centeredContainerInput",onInput:e.handleInput,id:"userDataField",name:n,type:"text",defaultValue:"",value:u||"",disabled:!0}):r.a.createElement("input",{className:"centeredContainerInput",onInput:e.handleInput,id:"userDataField",name:n,type:"text",defaultValue:"",value:u||""}))}function w(e){var t=e.errorMsgs,a=void 0===t?{}:t,n=e.field,u=e.value,l=void 0===u?"":u,s=e.checkPwdStrength(n);return r.a.createElement("div",{className:"flexColumnContainer inputFieldPadding"},r.a.createElement("label",{className:"bold",htmlFor:"UserPwdField"},e.children,":",r.a.createElement("span",{className:a[n]?"error-text margin-left-30":null},a[n]?a[n]:null),r.a.createElement("span",{className:"margin-left-30"}),e.showPwdStengthBar&&r.a.createElement("span",{className:s},"lowPwdStrength"===s?"(weak)":"mediumPwdStrength"===s?"(okay)":"strongPwdStrength"===s?"(strong)":null)),r.a.createElement("input",{className:"centeredContainerInput",onInput:e.handleInput,id:"UserPwdField",name:n,type:e.showPwds[n]?"text":"password",value:l}),r.a.createElement("i",{className:e.showPwds[n]?"fa fa-eye-slash passwordEye":"fa fa-eye passwordEye",onClick:function(){return e.toggleShowPwd(n)}}),e.showPwdStengthBar&&r.a.createElement("div",{className:s}))}a(403);function S(e){var t=Object(n.useState)(e.currentUserData),a=Object(c.a)(t,2),u=a[0],l=a[1],s=u.email,b=u.pwd,f=u.firstName,h=u.lastName,S=u.phone,y=(u.landingPage,Object(n.useState)({})),D=Object(c.a)(y,2),C=D[0],N=D[1],O=Object(n.useState)({}),_=Object(c.a)(O,2),P=_[0],j=_[1],x=Object(g.g)(),T="/register"===x.location.pathname,B=function(e){return/^.+@.+\..+$/.test(e)},L=new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#_$%^&*-])(?=.{8,})"),F=new RegExp("^(((?=.*[a-z!@#_$%^&*-])(?=.*[A-Z!@#_$%^&*-]))|((?=.*[a-z!@#_$%^&*-])(?=.*[0-9!@#_$%^&*-]))|((?=.*[A-Z!@#_$%^&*-])(?=.*[0-9!@#_$%^&*-])))(?=.{6,})"),k=new RegExp("^(?=.*[0-9a-zA-Z!@#_$%^&*-])(?=.{3,})");function A(){var e,t;return i.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:if(e=u.email,console.log("email = ",e),console.log("errorMsgs = ",C),!u.hasOwnProperty("email")||0===e.length){a.next=23;break}if(console.log("is email"),console.log("valid?",B(e)),!B(e)){a.next=19;break}return a.next=9,i.a.awrap(v(e));case 9:if(0!==(t=a.sent).length){a.next=15;break}return console.log("is unique",t),a.abrupt("return",!0);case 15:console.log("not unique",t),N((function(e){return Object(d.a)({},e,{email:"This email address already is registered"})}));case 17:a.next=21;break;case 19:console.log("no email"),N((function(e){return Object(d.a)({},e,{email:"Not Valid Email"})}));case 21:a.next=25;break;case 23:console.log("no email"),N((function(e){return Object(d.a)({},e,{email:"No Email"})}));case 25:return a.abrupt("return",!1);case 26:case"end":return a.stop()}}))}var I=function(e){var t,a=(t={firstName:"",lastName:""},Object(m.a)(t,e,""),Object(m.a)(t,"pwdConfirm",""),t),n=!0;return f&&f.length>=2||(a=Object(d.a)({},a,{firstName:"Name needs to be at least 2 characters."}),n=!1),h&&h.length>=2||(a=Object(d.a)({},a,{lastName:"Name needs to be at least 2 characters."}),n=!1),("pwd"===e||u[e]&&0!==u[e].length)&&(!function(e){return u[e]&&u[e].length>2}(e)?(a=Object(d.a)({},a,Object(m.a)({},e,"pwd not strong enough")),n=!1):u.pwdConfirm&&u[e]==u.pwdConfirm||(a=Object(d.a)({},a,{pwdConfirm:"pwd doesn't match"}),n=!1)),N((function(e){return Object(d.a)({},e,{},a)})),n};var R=function(e){return j((function(t){return Object(d.a)({},t,Object(m.a)({},e,!t[e]))}))},U=function(e){return e in u?L.test(u[e])?"strongPwdStrength":F.test(u[e])?"mediumPwdStrength":k.test(u[e])?"lowPwdStrength":"noPwdStrength":"noPwdStrength"},q=function(e){var t=e.target,a=t.name,n=t.value;N((function(e){return Object(d.a)({},e,Object(m.a)({},a,""))})),l((function(e){return Object(d.a)({},e,Object(m.a)({},a,n))}))};return r.a.createElement("div",{className:"mainWindow"},r.a.createElement("div",{className:"centeredContainer",style:{width:"inherit"}},r.a.createElement("div",{className:"bold"},r.a.createElement("h1",null,T?"Registration Information:":"Update Your Settings:")),r.a.createElement("div",{className:"flexRowContainer"},r.a.createElement(E,{field:"firstName",value:f,errorMsgs:C,handleInput:q,hasAutoFocus:!0},"First Name"),r.a.createElement(E,{field:"lastName",value:h,errorMsgs:C,handleInput:q},"Last Name")),T?r.a.createElement(E,{field:"email",value:s,errorMsgs:C,handleInput:q},"Email"):r.a.createElement(E,{field:"email",value:s,isDisabled:!0,handleInput:q},"Email"),r.a.createElement("div",{className:"flexRowContainer"},T?r.a.createElement(w,{field:"pwd",value:b,showPwds:P,toggleShowPwd:R,showPwdStengthBar:!0,errorMsgs:C,handleInput:q,checkPwdStrength:U},"Password"):r.a.createElement(r.a.Fragment,null,r.a.createElement(w,{field:"pwd",value:b,showPwds:P,toggleShowPwd:R,showPwdStengthBar:!0,errorMsgs:C,handleInput:q,checkPwdStrength:U},"Old Password"),r.a.createElement(w,{field:"newPwd",value:u.newPwd,showPwds:P,toggleShowPwd:R,showPwdStengthBar:!0,errorMsgs:C,handleInput:q,checkPwdStrength:U},"New Password")),r.a.createElement(w,{field:"pwdConfirm",value:u.pwdConfirm,showPwds:P,toggleShowPwd:R,showPwdStengthBar:!1,errorMsgs:C,handleInput:q,checkPwdStrength:U},"Confirm Password")),r.a.createElement(E,{field:"phone",value:S,errorMsgs:C,handleInput:q},"Phone"),r.a.createElement("div",{className:"flexRowContainer",style:{justifyContent:"center"}},r.a.createElement(o.b,{to:"/"},r.a.createElement("input",{className:"centeredContainerButton tertiaryButton buttonEnabled",style:{marginTop:"30px",marginRight:"60px",minWidth:"80px"},type:"button",value:"Back"})),r.a.createElement("input",{className:"centeredContainerButton primaryButton buttonEnabled",onClick:T?function(t){return function(t){var a;return i.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return t.preventDefault(),a=I("pwd"),n.next=4,i.a.awrap(A());case 4:if(n.t0=n.sent,!n.t0){n.next=7;break}n.t0=a;case 7:if(!n.t0){n.next=10;break}p(u,(function(t){e.setIsAuthenticated(!0),e.setCurrentUserData(u),x.push("/")}));case 10:case"end":return n.stop()}}))}(t)}:function(t){return function(t){var a;return i.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return t.preventDefault(),a=I("newPwd"),n.next=4,i.a.awrap(i.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return u.email,u.pwd,e.abrupt("return",!0);case 2:case"end":return e.stop()}})));case 4:if(n.t0=n.sent,!n.t0){n.next=7;break}n.t0=a;case 7:if(!n.t0){n.next=10;break}(function(t){e.setCurrentUserData(u),x.push("/")}),console.log("Will update settings");case 10:case"end":return n.stop()}}))}(t)},type:"button",value:T?"Create Account":"Update Settings"}))))}function y(e,t){a(26)({method:"POST",url:"https://bigbug-365ff5.appdrag.site/api/bugs/deleteBugs",form:{idList:e}},(function(e,a,n){console.log(n);var r=JSON.parse(n);t(r)}))}var D=a(72),C=(a(180),!0),N="";function O(e){var t=["id","bugTitle","bugCreatedDate","bugAssignedTo","bugDueDate","bugStatus","bugSeverity","bugReproducibleFrequency"];Object.keys(e.headerInfo).filter((function(e){return t.includes(e)}));return t.map((function(t,a){return r.a.createElement("th",{onClick:function(){e.setBugList(function(e,t){N===t?C=!C:(C=!0,N=t);var a=typeof e.bugList[0][t],n=Object(D.a)(e.bugList);switch(a){case"string":n.sort((function(e,a){return function(e,t,a){var n=0;e[a].toLowerCase()>t[a].toLowerCase()?n=C?1:-1:e[a].toLowerCase()<t[a].toLowerCase()&&(n=C?-1:1);return n}(e,a,t)}));break;case"number":n.sort((function(e,a){return function(e,t,a){var n=0;e[a]>t[a]?n=C?1:-1:e[a]<t[a]&&(n=C?-1:1);return n}(e,a,t)}))}return n}(e,t))},key:a},t.toUpperCase())}))}function _(e){var t=Object(n.useState)([]),a=Object(c.a)(t,2),u=a[0],l=a[1],s=function(e){var t=e.target,a=t.name,n=t.checked;l(n?[].concat(Object(D.a)(u),[a]):u.filter((function(e){return e!==a})))},i=function(e){console.log(e)};return r.a.createElement("div",null,r.a.createElement("table",{id:"bug_list_view_table"},r.a.createElement("thead",null,r.a.createElement("tr",{key:0},r.a.createElement("th",null,r.a.createElement("input",{className:"bug_list_view_item bug_list_view_check_box",type:"checkbox",name:"mainCheckAll",onChange:function(t){var a=t.target.checked;if(console.log("master checkbox = "+a),a){var n=e.bugList.map((function(e){return"(id=".concat(e.id,")")}));l(n)}else l([])},checked:u.length===e.bugList.length})),r.a.createElement(O,{headerInfo:e.bugList[0],bugList:e.bugList,setBugList:e.setBugList}))),r.a.createElement("tbody",null,e.bugList.map((function(t){var a,n,l=t.id,i=t.bugTitle,c=t.bugCreatedDate,g=t.bugAssignedTo,b=t.bugDueDate,m=t.bugStatus,d=t.bugSeverity,p=t.bugReproducableFrequency,f=e.userList.filter((function(e){return e.id===parseInt(g)}));return 0!==f.length&&(f=f[0].firstName+" "+f[0].lastName),0!==e.bugStatusStages.length&&m&&(a=e.bugStatusStages[parseInt(m)-1].status),0!==e.bugSeverityLevels.length&&d&&(n=e.bugSeverityLevels[parseInt(d)-1].SeverityLevel),r.a.createElement("tr",{key:l},r.a.createElement("td",null,r.a.createElement("input",{className:"bug_list_view_item bug_list_view_check_box",type:"checkbox",name:"(id=".concat(l,")"),onChange:s,checked:u.includes("(id=".concat(l,")"))})),r.a.createElement("td",{className:"bug_list_view_item bug_list_view_bug_id"},r.a.createElement(o.b,{to:"/bug/".concat(l)},l)),r.a.createElement("td",{className:"bug_list_view_item bug_list_view_bug_title"},r.a.createElement(o.b,{to:"/bug/".concat(l)},i)),r.a.createElement("td",{className:"bug_list_view_item bug_list_view_bug_createdDate"},r.a.createElement(o.b,{to:"/bug/".concat(l)},c)),r.a.createElement("td",{className:"bug_list_view_item bug_list_view_bug_assignedTo"},r.a.createElement(o.b,{to:"/bug/".concat(l)},f)),r.a.createElement("td",{className:"bug_list_view_item bug_list_view_bug_dueDate"},r.a.createElement(o.b,{to:"/bug/".concat(l)},"0001-01-01"==b?"None":b)),r.a.createElement("td",{className:"bug_list_view_item bug_list_view_bug_status"},r.a.createElement(o.b,{to:"/bug/".concat(l)},a)),r.a.createElement("td",{className:"bug_list_view_item bug_list_view_bug_severity"},r.a.createElement(o.b,{to:"/bug/".concat(l)},n)),r.a.createElement("td",{className:"bug_list_view_item bug_list_view_bug_reproducibleFrequency"},r.a.createElement(o.b,{to:"/bug/".concat(l)},p)))})))),u.length>0&&r.a.createElement("div",null,r.a.createElement("input",{onClick:function(){var e=u.join(" OR ");console.log(e),y(e,i)},type:"button",value:"DELETE"})))}function P(e){var t=function(t){e.setBugList(t)};return Object(n.useEffect)((function(){var n;n=t,i.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:a(26)({method:"POST",url:"https://bigbug-365ff5.appdrag.site/api/bugs/getAllBugs",form:{AD_PageNbr:"1",AD_PageSize:"500"}},(function(e,t,a){var r=JSON.parse(a);n(r.Table)}));case 2:case"end":return e.stop()}})),function(){var t;i.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,i.a.awrap(new Promise((function(e,t){f({method:"POST",url:"https://bigbug-365ff5.appdrag.site/api/users/getUsers",form:{AD_PageNbr:"1",AD_PageSize:"500"}},(function(t,a,n){if(null!=t)e(t);else{var r=JSON.parse(n).Table;e(r)}}))})));case 2:(t=a.sent).unshift({id:0,firstName:"Unassigned",lastName:"",email:""}),e.setUserList(t);case 5:case"end":return a.stop()}}))}()}),[]),r.a.createElement("div",null,r.a.createElement(_,{bugList:e.bugList,setBugList:e.setBugList,userList:e.userList,bugStatusStages:e.bugStatusStages,bugSeverityLevels:e.bugSeverityLevels}))}function j(e){return r.a.createElement("select",{value:e.user,onChange:function(t){e.onChange(t.target.value)}},e.userList.map((function(e){return r.a.createElement("option",{key:e.id,value:e.id},e.firstName," ",e.lastName)})))}function x(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("label",{htmlFor:"bugSeverity"},"Severity:"),r.a.createElement("select",{id:"bugSeverity",value:e.bugSeverity,onChange:function(t){console.log("SelectBugSeverity: handleChange: ",t.target.value),e.onChange(t.target.value)}},e.bugSeverityLevels.map((function(e){return r.a.createElement("option",{key:e.id,value:e.id},e.SeverityLevel)}))))}function T(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("label",{htmlFor:"bugStatus"},"Status:"),r.a.createElement("select",{id:"bugStatus",value:e.bugStatus,onChange:function(t){return e.onChange(t.target.value)}},e.bugStatusStages.map((function(e){return r.a.createElement("option",{key:e.id,id:e.id,value:e.id},e.status)}))))}a(404);function B(e){function t(){return{bugTitle:"",bugDescription:"",bugCreatedDate:(new Date).toISOString().split("T")[0],bugCreatedBy:"",bugAssignedTo:"0",bugDueDate:"",bugStatus:"1",bugSeverity:"1",bugReproducableFrequency:""}}var u=Object(n.useState)(t()),l=Object(c.a)(u,2),s=l[0],i=l[1],g=Object(n.useState)({message:"Enter New Bug Details",messageType:"success",show:!0}),b=Object(c.a)(g,2),p=b[0],f=b[1],v=function(e){var t=e.target,a=t.name,n=t.value;i(Object(d.a)({},s,Object(m.a)({},a,n)))},h=function(e){"1"===e?(f({message:"New bug successfully entered.",messageType:"success",show:!0}),i(t())):f({message:"Error creating bug. (".concat(e,")"),messageType:"failure",show:!0})};return r.a.createElement("div",{id:"CreateBugForm"},p.show&&r.a.createElement("h1",null,p.message),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),function(e,t){var n=a(26);console.log("submitting request"),console.log(e),n({method:"POST",url:"https://bigbug-365ff5.appdrag.site/api/bugs/submitBug",form:{bugTitle:e.bugTitle,bugDescription:e.bugDescription,bugCreatedDate:e.bugCreatedDate,bugCreatedBy:e.bugCreatedBy,bugAssignedTo:e.bugAssignedTo,bugDueDate:e.bugDueDate,bugStatus:e.bugStatus,bugSeverity:e.bugSeverity,bugReproducableFrequency:e.bugReproducableFrequency}},(function(e,a,n){var r=JSON.parse(n).affectedRows;t(r)}))}(s,h)}},r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"bugTitle"},"Title:"),r.a.createElement("input",{onChange:v,type:"text",id:"bugTitle",name:"bugTitle",value:s.bugTitle})),r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"bugDescription"},"Description:")),r.a.createElement("textarea",{onChange:v,id:"bugDescription",name:"bugDescription",value:s.bugDescription})),r.a.createElement("div",{className:"flex"},r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"bugCreatedDate"},"Creation Date:"),r.a.createElement("input",{onChange:v,type:"text",id:"bugCreatedDate",name:"bugCreatedDate",value:s.bugCreatedDate})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"bugCreatedBy"},"Created By:"),r.a.createElement(j,{user:2,userList:e.userList,onChange:function(e){return i(Object(d.a)({},s,{bugCreatedBy:e}))}})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"bugAssignedTo"},"Assigned To:"),r.a.createElement(j,{userList:e.userList,onChange:function(e){return i(Object(d.a)({},s,{bugAssignedTo:e}))}})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"bugDueDate"},"Due Date:"),r.a.createElement("input",{onChange:v,type:"date",id:"bugDueDate",name:"bugDueDate",value:s.bugDueDate}))),r.a.createElement(T,{bugStatusStages:e.bugStatusStages,bugStatus:s.bugStatus,onChange:function(e){return i(Object(d.a)({},s,{bugStatus:e}))}}),r.a.createElement(x,{onChange:function(e){return i(Object(d.a)({},s,{bugSeverity:e}))},bugSeverityLevels:e.bugSeverityLevels,bugSeverity:s.bugSeverity}),r.a.createElement("label",{htmlFor:"bugReproducibleFrequency"},"Reproducible Frequency:"),r.a.createElement("input",{onChange:v,type:"text",id:"bugReproducibleFrequency",name:"bugReproducibleFrequency",value:s.bugReproducableFrequency}),r.a.createElement("div",{className:"flex-right"},r.a.createElement(o.b,{to:"/"},r.a.createElement("input",{className:"btn",type:"button",value:"Cancel"})),r.a.createElement("input",{className:"btn",type:"submit",value:"Submit New Bug"}))))}function L(e){var t=Object(n.useState)({message:"Edit Bug Details",messageType:"success",show:!0}),u=Object(c.a)(t,2),l=u[0],s=(u[1],Object(n.useState)({id:"",bugTitle:"",bugDescription:"",bugCreatedDate:"",bugCreatedBy:"",bugAssignedTo:"",bugDueDate:"",bugStatus:"",bugSeverity:"",bugReproducableFrequency:""})),i=Object(c.a)(s,2),b=i[0],p=i[1],f=Object(g.h)().id;""===b.id&&function(e,t){a(26)({method:"POST",url:"https://bigbug-365ff5.appdrag.site/api/bugs/getBug",form:{id:e,AD_PageNbr:"1",AD_PageSize:"500"}},(function(e,a,n){console.log(n);var r=JSON.parse(n);t(r.Table[0])}))}(f,(function(e){console.log(e);var t="0001-01-01"===e.bugDueDate?"":e.bugDueDate;p({id:e.id,bugTitle:e.bugTitle,bugDescription:e.bugDescription,bugCreatedDate:e.bugCreatedDate,bugCreatedBy:e.bugCreatedBy,bugAssignedTo:e.bugAssignedTo,bugDueDate:t,bugStatus:e.bugStatus,bugSeverity:e.bugSeverity,bugReproducableFrequency:e.bugReproducableFrequency})}));var v=function(e){var t=e.target,a=t.name,n=t.value;p(Object(d.a)({},b,Object(m.a)({},a,n)))},h=function(e){console.log("update callback: "+e)},E=function(){var e,t;e=b,t=h,a(26)({method:"POST",url:"https://bigbug-365ff5.appdrag.site/api/bugs/updateBug",form:{id:e.id,bugTitle:e.bugTitle,bugDescription:e.bugDescription,bugCreatedDate:e.bugCreatedDate,bugCreatedBy:e.bugCreatedBy,bugAssignedTo:e.bugAssignedTo,bugDueDate:e.bugDueDate,bugStatus:e.bugStatus,bugSeverity:e.bugSeverity,bugReproducableFrequency:e.bugReproducableFrequency}},(function(e,a,n){console.log(n);var r=JSON.parse(n);t(r.affectedRows)}))},w=function(e){console.log(e)};return r.a.createElement("div",null,r.a.createElement("div",{id:"CreateBugForm"},l.show&&r.a.createElement("h1",null,l.message),r.a.createElement("form",{onSubmit:E},r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"bugTitle"},"Title:"),r.a.createElement("input",{onChange:v,type:"text",id:"bugTitle",name:"bugTitle",value:b.bugTitle})),r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"bugDescription"},"Description:")),r.a.createElement("textarea",{onChange:v,id:"bugDescription",name:"bugDescription",value:b.bugDescription})),r.a.createElement("div",{className:"flex"},r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"bugCreatedDate"},"Creation Date:"),r.a.createElement("input",{onChange:v,type:"date",id:"bugCreatedDate",name:"bugCreatedDate",value:b.bugCreatedDate})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"bugCreatedBy"},"Created By:"),r.a.createElement(j,{user:b.bugCreatedBy,userList:e.userList,onChange:function(e){return p(Object(d.a)({},b,{bugCreatedBy:e}))}})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"bugAssignedTo"},"Assigned To:"),r.a.createElement(j,{user:b.bugAssignedTo,userList:e.userList,onChange:function(e){return p(Object(d.a)({},b,{bugAssignedTo:e}))}})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"bugDueDate"},"Due Date:"),r.a.createElement("input",{onChange:v,type:"date",id:"bugDueDate",name:"bugDueDate",value:b.bugDueDate}))),r.a.createElement(T,{bugStatusStages:e.bugStatusStages,bugStatus:b.bugStatus,onChange:function(e){return p(Object(d.a)({},b,{bugStatus:e}))}}),r.a.createElement(x,{onChange:function(e){return p(Object(d.a)({},b,{bugSeverity:e}))},bugSeverityLevels:e.bugSeverityLevels,bugSeverity:b.bugSeverity}),r.a.createElement("label",{htmlFor:"bugReproducibleFrequency"},"Reproducible Frequency:"),r.a.createElement("input",{onChange:v,type:"text",id:"bugReproducibleFrequency",name:"bugReproducableFrequency",value:b.bugReproducableFrequency}),r.a.createElement("div",{className:"flex-right"},r.a.createElement(o.b,{to:"/"},r.a.createElement("input",{className:"btn",type:"button",value:"Cancel"})),r.a.createElement(o.b,{to:"/"},r.a.createElement("input",{onClick:function(){var e="(id = ".concat(f,")");console.log("SQL = ".concat(e)),y(e,w)},className:"btn",type:"button",value:"Delete"})),r.a.createElement(o.b,{to:"/"},r.a.createElement("input",{onClick:E,className:"btn",type:"button",value:"Update Bug"}))))))}a(405);var F=function(){var e,t=Object(n.useState)(!0),u=Object(c.a)(t,2),l=(u[0],u[1],Object(n.useState)({})),s=Object(c.a)(l,2),m=s[0],d=s[1],p=Object(n.useState)(!1),f=Object(c.a)(p,2),v=f[0],E=f[1],w=Object(n.useState)([{id:""}]),y=Object(c.a)(w,2),D=y[0],C=y[1],N=Object(n.useState)([]),O=Object(c.a)(N,2),_=O[0],j=O[1],x=Object(n.useState)([]),T=Object(c.a)(x,2),F=T[0],k=T[1],A=Object(n.useState)([]),I=Object(c.a)(A,2),R=I[0],U=I[1];return 0===F.length&&(e=function(e){return i.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:k(e);case 1:case"end":return t.stop()}}))},i.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:a(26)({method:"POST",url:"https://bigbug-365ff5.appdrag.site/api/bugs/getBugSeverityLevels",form:{AD_PageNbr:"1",AD_PageSize:"500"}},(function(t,a,n){var r=JSON.parse(n);e(r.Table)}));case 2:case"end":return t.stop()}}))),0===R.length&&function(e){a(26)({method:"POST",url:"https://bigbug-365ff5.appdrag.site/api/bugs/getBugStatusStages",form:{AD_PageNbr:"1",AD_PageSize:"500"}},(function(t,a,n){var r=JSON.parse(n);e(r.Table)}))}((function(e){return i.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:U(e);case 1:case"end":return t.stop()}}))})),r.a.createElement("div",{id:"app"},r.a.createElement(o.a,null,r.a.createElement(b,{isAuthenticated:v,logout:function(){return console.log("App: logging out"),E(!1),d({}),void localStorage.setItem("userInfo",{firstName:"default",lastName:"user"})},setIsAuthenticated:function(e){return E(e)},currentUserData:m}),r.a.createElement(g.d,null,r.a.createElement(g.b,{exact:!0,path:["/"]},v?r.a.createElement(P,{bugList:D,setBugList:function(e){return C(e)},userList:_,setUserList:function(e){return j(e)},bugSeverityLevels:F,bugStatusStages:R}):r.a.createElement(h,{currentUserData:m,setCurrentUserData:function(e){return d(e)},setIsAuthenticated:function(e){return E(e)}})),r.a.createElement(g.b,{path:["/register","/settings"]},r.a.createElement(S,{currentUserData:m,setCurrentUserData:function(e){return d(e)},setIsAuthenticated:function(e){return E(e)}})),r.a.createElement(g.b,{path:"/createBug"},r.a.createElement(B,{userList:_,bugSeverityLevels:F,bugStatusStages:R})),r.a.createElement(g.b,{path:"/bug/:id"},r.a.createElement(L,{userList:_,bugSeverityLevels:F,bugStatusStages:R})),r.a.createElement(g.a,{to:"/"}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[184,1,2]]]);
//# sourceMappingURL=main.62653da6.chunk.js.map