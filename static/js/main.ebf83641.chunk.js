(this["webpackJsonpbig-bug-react"]=this["webpackJsonpbig-bug-react"]||[]).push([[0],{180:function(e,t,a){},184:function(e,t,a){e.exports=a(407)},189:function(e,t,a){},191:function(e,t,a){},210:function(e,t){},212:function(e,t){},242:function(e,t){},243:function(e,t){},287:function(e,t){},289:function(e,t){},312:function(e,t){},403:function(e,t,a){},404:function(e,t,a){},405:function(e,t,a){},406:function(e,t,a){},407:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(181),u=a.n(i),s=(a(189),a(13)),o=a.n(s),c=a(8),l=a(7),g=a(38);a(191);function d(e){var t=e.currentUserData,a=t.firstName,n=void 0===a?"Default":a,i=t.lastName,u=void 0===i?"User":i;return r.a.createElement("header",null,e.isAuthenticated?r.a.createElement("div",{id:"headerContainer"},r.a.createElement("div",{id:"userName"},"Welcome, ",n," ",u),r.a.createElement("div",{id:"headerMenu"},r.a.createElement(l.b,{to:"/",style:{textDecoration:"none"}},r.a.createElement("div",{className:"headerItem"},"Dashboard")),r.a.createElement(l.b,{to:"/createBug",style:{textDecoration:"none"}},r.a.createElement("div",{className:"headerItem"},"Create Bug")),r.a.createElement(l.b,{to:"/settings",style:{textDecoration:"none"}},r.a.createElement("i",{className:"fa fa-cog headerItem",style:{marginTop:"5px"}})),r.a.createElement(l.b,{to:"/",style:{textDecoration:"none"}},r.a.createElement("div",{className:"headerItem"},r.a.createElement("span",{onClick:e.logout,type:"text"},"Logout"))))):null)}var b=a(20),m=a(5),p=a(25);function f(e){return new Promise((function(t,a){var n=e.email,r=void 0===n?"":n,i=e.pwd;p({method:"POST",url:"https://bigbug-365ff5.appdrag.site/api/users/login",form:{email:r,pwd:void 0===i?"":i,AD_PageNbr:"1",AD_PageSize:"500"}},(function(e,a,n){if(null!=e)t(e);else{var r=JSON.parse(n);0!==r.Table.length?(console.log("Welcome "+r.Table[0].firstName),t(r.Table[0])):(console.log("No data returned"),t(-1))}}))}))}function h(e,t){return o.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:a(25)({method:"POST",url:"https://bigbug-365ff5.appdrag.site/api/users/register",form:{firstName:e.firstName,lastName:e.lastName,email:e.email,pwd:e.pwd,phone:e.phone}},(function(e,a,n){console.log(n);var r=JSON.parse(n);t(r.affectedRows)}));case 2:case"end":return n.stop()}}))}function v(e,t){a(25)({method:"POST",url:"https://bigbug-365ff5.appdrag.site/api/users/updateUser",form:{id:e.id,firstName:e.firstName,lastName:e.lastName,pwd:e.newPwd?e.newPwd:e.pwd,phone:e.phone}},(function(e,a,n){var r=JSON.parse(n).Table;console.log("update User",r),t(r)}))}function w(e){return new Promise((function(t,a){p({method:"POST",url:"https://bigbug-365ff5.appdrag.site/api/checkUniqueEmail",form:{email:e,AD_PageNbr:"1",AD_PageSize:"500"}},(function(e,a,n){if(null!=e)t(e);else{var r=JSON.parse(n).Table;t(r)}}))}))}function E(e){var t=Object(n.useState)(!1),a=Object(c.a)(t,2),i=a[0],u=a[1],s=Object(n.useState)(!1),o=Object(c.a)(s,2),g=o[0],d=o[1],p=function(){var e=Object(n.useRef)(null);return[e,function(){e.current&&e.current.focus()}]}(),h=Object(c.a)(p,2),v=h[0],w=h[1];function E(){return e.currentUserData.email&&e.currentUserData.email.length>0&&e.currentUserData.pwd&&e.currentUserData.pwd.length>0}function S(){console.log("login request");f(e.currentUserData).then((function(t){console.log("after promise with res ",t),-1===t?(u(!0),w(),e.setCurrentUserData(Object(m.a)({},e.currentUserData,{email:"",pwd:""}))):(u(!1),e.setCurrentUserData(t),e.setIsAuthenticated(!0))}))}function y(t){var a=t.name,n=t.value;e.setCurrentUserData(Object(m.a)({},e.currentUserData,Object(b.a)({},a,n)))}function C(e){"Enter"===e.key&&E()&&S()}return r.a.createElement("div",{className:"mainWindow"},r.a.createElement("div",{className:"centeredContainer narrowWindow"},i&&r.a.createElement("div",{className:"error-text bold"},"Incorrect login. Please check your details and try again."),r.a.createElement("div",{className:"flexColumnContainer"},r.a.createElement("label",{className:"bold",htmlFor:"loginEmail"},"Email:"),r.a.createElement("input",{onChange:function(e){return y(e.target)},onKeyPress:function(e){return C(e)},id:"loginEmail",className:"centeredContainerInput",type:"text",name:"email",value:e.currentUserData.email||"",autoFocus:!0,ref:v})),r.a.createElement("div",{className:"flexColumnContainer"},r.a.createElement("label",{className:"bold",htmlFor:"loginPassword"},"Password:"),r.a.createElement("input",{onChange:function(e){return y(e.target)},onKeyPress:function(e){return C(e)},id:"loginPassword",className:"centeredContainerInput",type:g?"text":"password",name:"pwd",value:e.currentUserData.pwd||""}),r.a.createElement("i",{className:g?"fa fa-eye-slash passwordEye":"fa fa-eye passwordEye",onClick:function(){return d((function(e){return!e}))}})),E()?r.a.createElement("input",{id:"loginButton",className:"centeredContainerButton primaryButton buttonEnabled",onClick:S,type:"button",value:"Login"}):r.a.createElement("input",{id:"loginDisabled",className:"centeredContainerButton primaryButtonDisabled",type:"button",value:"Login"}),r.a.createElement("div",{className:"flexColumnContainer text-center"},r.a.createElement(l.b,{to:"/register"},r.a.createElement("input",{id:"registerButton",className:"centeredContainerButton tertiaryButton buttonEnabled",type:"button",value:"Register"})))))}function S(e){var t=e.errorMsgs,a=void 0===t?{}:t,n=e.field,i=void 0===n?"":n,u=e.value,s=void 0===u?"":u,o=!!e.hasAutoFocus,c=!!e.isDisabled;return r.a.createElement("div",{className:"flexColumnContainer inputFieldPadding"},r.a.createElement("label",{className:"bold",htmlFor:"userDataField"},e.children,":",r.a.createElement("span",{className:a[i]?"error-text margin-left-30":null},a[i]?a[i]:null)),o?r.a.createElement("input",{className:"centeredContainerInput",onChange:e.handleInput,onInput:e.handleInput,id:"userDataField",name:i,type:"text",value:s,autoFocus:!0}):c?r.a.createElement("input",{className:"centeredContainerInput",onChange:e.handleInput,onInput:e.handleInput,id:"userDataField",name:i,type:"text",value:s,disabled:!0}):r.a.createElement("input",{className:"centeredContainerInput",onChange:e.handleInput,onInput:e.handleInput,id:"userDataField",name:i,type:"text",value:s}))}function y(e){var t=e.errorMsgs,a=void 0===t?{}:t,n=e.field,i=e.value,u=void 0===i?"":i,s=e.checkPwdStrength(n);return r.a.createElement("div",{className:"flexColumnContainer inputFieldPadding"},r.a.createElement("label",{className:"bold",htmlFor:"UserPwdField"},e.children,":",r.a.createElement("span",{className:a[n]?"error-text margin-left-30":null},a[n]?a[n]:null),r.a.createElement("span",{className:"margin-left-30"}),e.showPwdStengthBar&&r.a.createElement("span",{className:s},"lowPwdStrength"===s?"(weak)":"mediumPwdStrength"===s?"(okay)":"strongPwdStrength"===s?"(strong)":null)),r.a.createElement("input",{className:"centeredContainerInput",onChange:e.handleInput,onInput:e.handleInput,id:"UserPwdField",name:n,type:e.showPwds[n]?"text":"password",value:u}),r.a.createElement("i",{className:e.showPwds[n]?"fa fa-eye-slash passwordEye":"fa fa-eye passwordEye",onClick:function(){return e.toggleShowPwd(n)}}),e.showPwdStengthBar&&r.a.createElement("div",{className:s}))}a(403);function C(e){var t=Object(n.useState)(e.currentUserData),a=Object(c.a)(t,2),i=a[0],u=a[1],s=i.email,d=i.pwd,p=i.firstName,E=i.lastName,C=i.phone,N=(i.landingPage,Object(n.useState)({})),D=Object(c.a)(N,2),O=D[0],_=D[1],P=Object(n.useState)({}),x=Object(c.a)(P,2),j=x[0],B=x[1],T=Object(g.g)(),I="/register"===T.location.pathname;Object(n.useEffect)((function(){I||u((function(e){return Object(m.a)({},e,{pwd:""})}))}),[]);var k=function(e){return/^.+@.+\..+$/.test(e)},L=new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#_$%^&*-])(?=.{8,})"),A=new RegExp("^(((?=.*[a-z!@#_$%^&*-])(?=.*[A-Z!@#_$%^&*-]))|((?=.*[a-z!@#_$%^&*-])(?=.*[0-9!@#_$%^&*-]))|((?=.*[A-Z!@#_$%^&*-])(?=.*[0-9!@#_$%^&*-])))(?=.{6,})"),R=new RegExp("^(?=.*[0-9a-zA-Z!@#_$%^&*-])(?=.{3,})");function F(){var e,t;return o.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:if(e=i.email,console.log("email = ",e),console.log("errorMsgs = ",O),!i.hasOwnProperty("email")||0===e.length){a.next=23;break}if(console.log("is email"),console.log("valid?",k(e)),!k(e)){a.next=19;break}return a.next=9,o.a.awrap(w(e));case 9:if(0!==(t=a.sent).length){a.next=15;break}return console.log("is unique",t),a.abrupt("return",!0);case 15:console.log("not unique",t),_((function(e){return Object(m.a)({},e,{email:"This email address already is registered"})}));case 17:a.next=21;break;case 19:console.log("no email"),_((function(e){return Object(m.a)({},e,{email:"Not Valid Email"})}));case 21:a.next=25;break;case 23:console.log("no email"),_((function(e){return Object(m.a)({},e,{email:"No Email"})}));case 25:return a.abrupt("return",!1);case 26:case"end":return a.stop()}}))}var U=function(e){var t,a=(t={firstName:"",lastName:""},Object(b.a)(t,e,""),Object(b.a)(t,"pwdConfirm",""),t),n=!0;return p&&p.length>=2||(a=Object(m.a)({},a,{firstName:"Name needs to be at least 2 characters."}),n=!1),E&&E.length>=2||(a=Object(m.a)({},a,{lastName:"Name needs to be at least 2 characters."}),n=!1),("pwd"===e||i[e]&&0!==i[e].length)&&(!function(e){return i[e]&&i[e].length>2}(e)?(a=Object(m.a)({},a,Object(b.a)({},e,"pwd not strong enough")),n=!1):i.pwdConfirm&&i[e]==i.pwdConfirm||(a=Object(m.a)({},a,{pwdConfirm:"pwd doesn't match"}),n=!1)),_((function(e){return Object(m.a)({},e,{},a)})),n};var J=function(e){return B((function(t){return Object(m.a)({},t,Object(b.a)({},e,!t[e]))}))},W=function(e){return e in i?L.test(i[e])?"strongPwdStrength":A.test(i[e])?"mediumPwdStrength":R.test(i[e])?"lowPwdStrength":"noPwdStrength":"noPwdStrength"},z=function(e){var t=e.target,a=t.name,n=t.value;_((function(e){return Object(m.a)({},e,Object(b.a)({},a,""))})),u((function(e){return Object(m.a)({},e,Object(b.a)({},a,n))}))};return r.a.createElement("div",{className:"userDetailsWindow"},r.a.createElement("div",{className:"centeredContainer",style:{width:"inherit"}},r.a.createElement("div",{className:"bold"},r.a.createElement("h1",null,I?"Registration Information:":"Update Your Settings:")),r.a.createElement("div",{className:"flexRowContainer"},r.a.createElement(S,{field:"firstName",value:p,errorMsgs:O,handleInput:z,hasAutoFocus:!0},"First Name"),r.a.createElement(S,{field:"lastName",value:E,errorMsgs:O,handleInput:z},"Last Name")),I?r.a.createElement(S,{field:"email",value:s,errorMsgs:O,handleInput:z},"Email"):r.a.createElement(S,{field:"email",value:s,isDisabled:!0,handleInput:z},"Email"),r.a.createElement("div",{className:"flexRowContainer"},I?r.a.createElement(y,{field:"pwd",value:i.pwd,showPwds:j,toggleShowPwd:J,showPwdStengthBar:!0,errorMsgs:O,handleInput:z,checkPwdStrength:W},"Password"):r.a.createElement(r.a.Fragment,null,r.a.createElement(y,{field:"pwd",value:i.pwd,showPwds:j,toggleShowPwd:J,showPwdStengthBar:!1,errorMsgs:O,handleInput:z,checkPwdStrength:W},"Confirm Old Password"),r.a.createElement(y,{field:"newPwd",value:i.newPwd,showPwds:j,toggleShowPwd:J,showPwdStengthBar:!0,errorMsgs:O,handleInput:z,checkPwdStrength:W},"New Password")),r.a.createElement(y,{field:"pwdConfirm",value:i.pwdConfirm,showPwds:j,toggleShowPwd:J,showPwdStengthBar:!1,errorMsgs:O,handleInput:z,checkPwdStrength:W},"Confirm Password")),r.a.createElement(S,{field:"phone",value:C,errorMsgs:O,handleInput:z},"Phone"),r.a.createElement("div",{className:"flexRowContainer",style:{justifyContent:"center"}},r.a.createElement(l.b,{to:"/"},r.a.createElement("input",{className:"centeredContainerButton tertiaryButton buttonEnabled",style:{marginTop:"30px",marginRight:"60px",minWidth:"80px"},type:"button",value:"Back"})),r.a.createElement("input",{className:"centeredContainerButton primaryButton buttonEnabled",onClick:I?function(t){return function(t){var a;return o.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return t.preventDefault(),a=U("pwd"),n.next=4,o.a.awrap(F());case 4:if(n.t0=n.sent,!n.t0){n.next=7;break}n.t0=a;case 7:if(!n.t0){n.next=10;break}h(i,(function(t){e.setIsAuthenticated(!0),e.setCurrentUserData(i),T.push("/")}));case 10:case"end":return n.stop()}}))}(t)}:function(t){return function(t){var a;return o.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return t.preventDefault(),a=U("newPwd"),n.next=4,o.a.awrap(o.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",f(i).then((function(e){return-1!==e||(_((function(e){return Object(m.a)({},e,{pwd:"Incorrect Password"})})),!1)})));case 1:case"end":return e.stop()}})));case 4:if(n.t0=n.sent,!n.t0){n.next=7;break}n.t0=a;case 7:if(!n.t0){n.next=12;break}v(i,(function(t){e.setCurrentUserData((function(e){return Object(m.a)({},e,{pwd:i.newPwd?i.newPwd:d})})),T.push("/")})),n.next=13;break;case 12:console.log("maybe incorrect pwd");case 13:case"end":return n.stop()}}))}(t)},type:"button",value:I?"Create Account":"Update Settings"}))))}function N(e,t){a(25)({method:"POST",url:"https://bigbug-365ff5.appdrag.site/api/bugs/deleteBugs",form:{idList:e}},(function(e,a,n){if(e)console.log("deleteBugs error ",e),t(-1);else{var r=JSON.parse(n);t(r)}}))}var D=a(72),O=(a(180),!0),_="";function P(e){var t=["id","bugTitle","bugCreatedDate","bugAssignedTo","bugDueDate","bugStatus","bugSeverity","bugReproducibility"];Object.keys(e.headerInfo).filter((function(e){return t.includes(e)}));return t.map((function(t,a){return r.a.createElement("th",{onClick:function(){e.setBugList(function(e,t){_===t?O=!O:(O=!0,_=t);var a=typeof e.bugList[0][t],n=Object(D.a)(e.bugList);switch(a){case"string":n.sort((function(e,a){return function(e,t,a){var n=0;e[a].toLowerCase()>t[a].toLowerCase()?n=O?1:-1:e[a].toLowerCase()<t[a].toLowerCase()&&(n=O?-1:1);return n}(e,a,t)}));break;case"number":n.sort((function(e,a){return function(e,t,a){var n=0;e[a]>t[a]?n=O?1:-1:e[a]<t[a]&&(n=O?-1:1);return n}(e,a,t)}))}return n}(e,t))},key:a},t.toUpperCase())}))}function x(e){var t=Object(n.useState)([]),a=Object(c.a)(t,2),i=a[0],u=a[1],s=function(e){var t=e.target,a=t.name,n=t.checked;u(n?[].concat(Object(D.a)(i),[a]):i.filter((function(e){return e!==a})))},o=function(e){console.log(e)};return r.a.createElement("div",{id:"bug_list_view_table_container"},r.a.createElement("table",{id:"bug_list_view_table"},r.a.createElement("thead",null,r.a.createElement("tr",{key:0},r.a.createElement("th",null,r.a.createElement("input",{className:"bug_list_view_item bug_list_view_check_box",type:"checkbox",name:"mainCheckAll",onChange:function(t){var a=t.target.checked;if(console.log("master checkbox = "+a),a){var n=e.bugList.map((function(e){return"(id=".concat(e.id,")")}));u(n)}else u([])},checked:i.length===e.bugList.length})),r.a.createElement(P,{headerInfo:e.bugList[0],bugList:e.bugList,setBugList:e.setBugList}))),r.a.createElement("tbody",null,e.bugList.map((function(t){var a,n,u,o=t.id,c=t.bugTitle,g=t.bugCreatedDate,d=t.bugAssignedTo,b=t.bugDueDate,m=t.bugStatus,p=t.bugSeverity,f=t.bugReproducibility,h=e.userList.filter((function(e){return e.id===parseInt(d)}));return 0!==h.length&&(h=h[0].firstName+" "+h[0].lastName),0!==e.bugStatusStages.length&&m&&(a=e.bugStatusStages[parseInt(m)-1].status),0!==e.bugSeverityLevels.length&&p&&(n=e.bugSeverityLevels[parseInt(p)-1].SeverityLevel),0!==e.bugReproducibilityOptions.length&&f&&(u=e.bugReproducibilityOptions[parseInt(f)-1].bugReproducibility),r.a.createElement("tr",{key:o},r.a.createElement("td",null,r.a.createElement("input",{className:"bug_list_view_item bug_list_view_check_box",type:"checkbox",name:"(id=".concat(o,")"),onChange:s,checked:i.includes("(id=".concat(o,")"))})),r.a.createElement("td",{className:"bug_list_view_item bug_list_view_bug_id"},r.a.createElement(l.b,{to:"/bug/".concat(o)},o)),r.a.createElement("td",{className:"bug_list_view_item bug_list_view_bug_title"},r.a.createElement(l.b,{to:"/bug/".concat(o)},c)),r.a.createElement("td",{className:"bug_list_view_item bug_list_view_bug_createdDate"},r.a.createElement(l.b,{to:"/bug/".concat(o)},g)),r.a.createElement("td",{className:"bug_list_view_item bug_list_view_bug_assignedTo"},r.a.createElement(l.b,{to:"/bug/".concat(o)},h)),r.a.createElement("td",{className:"bug_list_view_item bug_list_view_bug_dueDate"},r.a.createElement(l.b,{to:"/bug/".concat(o)},"0001-01-01"==b?"None":b)),r.a.createElement("td",{className:"bug_list_view_item bug_list_view_bug_status"},r.a.createElement(l.b,{to:"/bug/".concat(o)},a)),r.a.createElement("td",{className:"bug_list_view_item bug_list_view_bug_severity"},r.a.createElement(l.b,{to:"/bug/".concat(o)},n)),r.a.createElement("td",{className:"bug_list_view_item bug_list_view_bug_reproducibleFrequency"},r.a.createElement(l.b,{to:"/bug/".concat(o)},u)))})))),i.length>0&&r.a.createElement("div",null,r.a.createElement("input",{onClick:function(){var e=i.join(" OR ");console.log(e),N(e,o)},type:"button",value:"DELETE"})))}function j(e){var t=function(t){e.setBugList(t)};return Object(n.useEffect)((function(){var n;n=t,o.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:a(25)({method:"POST",url:"https://bigbug-365ff5.appdrag.site/api/bugs/getAllBugs",form:{AD_PageNbr:"1",AD_PageSize:"500"}},(function(e,t,a){if(e)console.log("getAllBugs error ",e),n(-1);else{var r=JSON.parse(a);n(r.Table)}}));case 2:case"end":return e.stop()}})),function(){var t;o.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,o.a.awrap(new Promise((function(e,t){p({method:"POST",url:"https://bigbug-365ff5.appdrag.site/api/users/getUsers",form:{AD_PageNbr:"1",AD_PageSize:"500"}},(function(t,a,n){if(null!=t)e(t);else{var r=JSON.parse(n).Table;e(r)}}))})));case 2:(t=a.sent).length&&t.unshift({id:0,firstName:"Unassigned",lastName:"",email:""}),e.setUserList(t);case 5:case"end":return a.stop()}}))}()}),[]),r.a.createElement("div",null,r.a.createElement(x,{bugList:e.bugList,setBugList:e.setBugList,userList:e.userList,bugStatusStages:e.bugStatusStages,bugSeverityLevels:e.bugSeverityLevels,bugReproducibilityOptions:e.bugReproducibilityOptions}))}function B(e){return r.a.createElement("div",{className:"flexColumnContainer inputFieldPadding"},r.a.createElement("label",{className:"bold",htmlFor:"userDataField"},e.children,":"),r.a.createElement("select",{className:"centeredContainerInput inputFieldPadding",value:e.user,onChange:function(t){e.onChange(t.target.value)}},e.userList.map((function(e){return r.a.createElement("option",{key:e.id,value:e.id},e.firstName," ",e.lastName)}))))}function T(e){return r.a.createElement("div",{className:"flexColumnContainer inputFieldPadding"},r.a.createElement("label",{htmlFor:"dataField"},e.children,":"),r.a.createElement("select",{className:"centeredContainerInput inputFieldPadding",id:"dataField",value:e.bugSeverity,onChange:function(t){e.onChange(t.target.value)}},e.bugSeverityLevels.map((function(e){return r.a.createElement("option",{key:e.id,value:e.id},e.SeverityLevel)}))))}function I(e){return r.a.createElement("div",{className:"flexColumnContainer inputFieldPadding"},r.a.createElement("label",{htmlFor:"dataField"},e.children,":"),r.a.createElement("select",{className:"centeredContainerInput inputFieldPadding",id:"dataField",value:e.bugReproducibility,onChange:function(t){e.onChange(t.target.value)}},e.bugReproducibilityOptions.map((function(e){return r.a.createElement("option",{key:e.id,value:e.id},e.bugReproducibility)}))))}function k(e){return r.a.createElement("div",{className:"flexColumnContainer inputFieldPadding"},r.a.createElement("label",{htmlFor:"bugStatus"},"Status:"),r.a.createElement("select",{className:"centeredContainerInput",id:"bugStatus",value:e.bugStatus,onChange:function(t){return e.onChange(t.target.value)}},e.bugStatusStages.map((function(e){return r.a.createElement("option",{key:e.id,id:e.id,value:e.id},e.status)}))))}a(404);function L(e){var t=e.setShow;return r.a.createElement("div",null,r.a.createElement("button",{id:"CloseWindowButton",onClick:function(){return t(!1)}},"Close"))}a(405);function A(e){var t=e.message,a=e.success,n=e.show,i=e.setShow;return n&&setTimeout((function(){i(!1)}),5e3),r.a.createElement(r.a.Fragment,null,n&&r.a.createElement("div",{id:"SuccessWindowContainer",className:a?"success-text bold":"error-text bold"},t,r.a.createElement(L,{setShow:i})))}function R(e){var t="/createBug"===Object(g.h)().pathname;function i(){return{id:"",bugTitle:"",bugDescription:"",bugCreatedDate:t?(new Date).toISOString().split("T")[0]:"",bugCreatedBy:t?e.currentUserData.id:"",bugAssignedTo:"0",bugDueDate:"",bugStatus:"1",bugSeverity:"1",bugReproducibility:"1"}}var u=Object(n.useState)({message:t?"Enter New Bug Details":"Edit Bug Details",messageType:"success",show:!0}),s=Object(c.a)(u,2),o=s[0],d=(s[1],Object(n.useState)({message:"message here",success:!0,show:!1})),p=Object(c.a)(d,2),f=p[0],h=p[1],v=Object(n.useState)(i()),w=Object(c.a)(v,2),E=w[0],y=w[1],C=E.bugTitle,D=E.bugDescription,O=E.bugCreatedDate,_=E.bugCreatedBy,P=E.bugAssignedTo,x=E.bugDueDate,j=E.bugStatus,L=E.bugSeverity,R=E.bugReproducibility,F=Object(n.useState)(!!t),U=Object(c.a)(F,2),J=U[0],W=U[1];Object(g.g)();t!==J&&(console.log("change"),y(i()),W(!!t));var z=Object(g.i)().id;""!==E.id||t||function(e,t){a(25)({method:"POST",url:"https://bigbug-365ff5.appdrag.site/api/bugs/getBug",form:{id:e,AD_PageNbr:"1",AD_PageSize:"500"}},(function(e,a,n){if(e)console.log("getBug error ",e),t(-1);else{var r=JSON.parse(n);t(r.Table[0])}}))}(z,(function(e){console.log(e);var t="0001-01-01"===e.bugDueDate?"":e.bugDueDate;y({id:e.id,bugTitle:e.bugTitle,bugDescription:e.bugDescription,bugCreatedDate:e.bugCreatedDate,bugCreatedBy:e.bugCreatedBy,bugAssignedTo:e.bugAssignedTo,bugDueDate:t,bugStatus:e.bugStatus,bugSeverity:e.bugSeverity,bugReproducibility:e.bugReproducibility})}));var M=function(e){var t=e.target,a=t.name,n=t.value;y(Object(m.a)({},E,Object(b.a)({},a,n)))},$=function(e){console.log("update callback: "+e),h("1"===e?{message:"Bug successfully updated.",success:!0,show:!0}:{message:"Error entering bug.",success:!1,show:!0})},q=function(e){"1"===e?(h({message:"New bug successfully entered.",success:!0,show:!0}),y(i())):h({message:"Error creating bug. (".concat(e,")"),success:!1,show:!0})},Z=function(e){console.log(e)};return r.a.createElement("div",null,r.a.createElement("div",{id:"mainWindow",style:{padding:"30px"}},o.show&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,o.message),r.a.createElement(A,{message:f.message,success:f.success,show:f.show,setShow:function(e){return h((function(t){return Object(m.a)({},f,{show:e})}))}})),r.a.createElement("form",null,r.a.createElement(S,{field:"bugTitle",value:C,onChange:M,handleInput:M,hasAutoFocus:!0},"Title"),r.a.createElement("div",{className:"flexColumnContainer inputFieldPadding"},r.a.createElement("label",{className:"bold",htmlFor:"bugDescription"},"Description:"),r.a.createElement("textarea",{rows:"4",className:"centeredContainerInput",onChange:M,id:"bugDescription",name:"bugDescription",value:D})),r.a.createElement("div",{className:"flexRowContainer"},r.a.createElement(S,{field:"bugCreatedDate",value:O,handleInput:M,hasAutoFocus:!0},"Creation Date"),r.a.createElement(B,{user:_,userList:e.userList,onChange:function(e){return y(Object(m.a)({},E,{bugCreatedBy:e}))}},"Created By"),r.a.createElement(B,{user:P,userList:e.userList,onChange:function(e){return y(Object(m.a)({},E,{bugAssignedTo:e}))}},"Assigned To"),r.a.createElement("div",{className:"flexColumnContainer inputFieldPadding"},r.a.createElement("label",{className:"bold",htmlFor:"bugDueDate"},"Due Date:"),r.a.createElement("input",{className:"centeredContainerInput",onChange:M,type:"date",id:"bugDueDate",name:"bugDueDate",value:x}))),r.a.createElement("div",{className:"flexRowContainer"},r.a.createElement(k,{bugStatusStages:e.bugStatusStages,bugStatus:j,onChange:function(e){return y(Object(m.a)({},E,{bugStatus:e}))}}),r.a.createElement(T,{onChange:function(e){return y(Object(m.a)({},E,{bugSeverity:e}))},bugSeverityLevels:e.bugSeverityLevels,bugSeverity:L},"Bug Severity"),r.a.createElement(I,{onChange:function(e){console.log("buglevel = ",e),y(Object(m.a)({},E,{bugReproducibility:e}))},bugReproducibilityOptions:e.bugReproducibilityOptions,bugReproducibility:R},"Bug Reproducibility")),r.a.createElement("div",{className:"dividing-line-main",style:{marginTop:"10px"}}),r.a.createElement("div",{className:"flex-right"},r.a.createElement(l.b,{to:"/"},r.a.createElement("input",{className:"centeredContainerButton tertiaryButton buttonEnabled",style:{marginTop:"30px",marginRight:"60px",minWidth:"100px"},type:"button",value:"Cancel"})),r.a.createElement(l.b,{to:"/"},r.a.createElement("input",{onClick:function(){var e="(id = ".concat(z,")");console.log("SQL = ".concat(e)),N(e,Z)},className:"centeredContainerButton tertiaryButton buttonEnabled",style:{marginTop:"30px",marginRight:"60px",minWidth:"80px"},type:"button",value:"Delete"})),r.a.createElement(l.b,{to:"/"},r.a.createElement("input",{onClick:t?function(e){e.preventDefault(),console.log("submit Bug"),function(e,t){var n=a(25);console.log("submitting request"),console.log(e),n({method:"POST",url:"https://bigbug-365ff5.appdrag.site/api/bugs/submitBug",form:{bugTitle:e.bugTitle,bugDescription:e.bugDescription,bugCreatedDate:e.bugCreatedDate,bugCreatedBy:e.bugCreatedBy,bugAssignedTo:e.bugAssignedTo,bugDueDate:e.bugDueDate,bugStatus:e.bugStatus,bugSeverity:e.bugSeverity,bugReproducibility:e.bugReproducibility}},(function(e,a,n){if(e)console.log("submitBug error ",e),t(-1);else{var r=JSON.parse(n).affectedRows;console.log("submit bug success ",r),t(r)}}))}(E,q)}:function(e){var t,n;e.preventDefault(),console.log("update Bug"),t=E,n=$,a(25)({method:"POST",url:"https://bigbug-365ff5.appdrag.site/api/bugs/updateBug",form:{id:t.id,bugTitle:t.bugTitle,bugDescription:t.bugDescription,bugCreatedDate:t.bugCreatedDate,bugCreatedBy:t.bugCreatedBy,bugAssignedTo:t.bugAssignedTo,bugDueDate:t.bugDueDate,bugStatus:t.bugStatus,bugSeverity:t.bugSeverity,bugReproducibility:t.bugReproducibility}},(function(e,t,a){if(e)console.log("updateBug error ",e),n(-1);else{var r=JSON.parse(a);n(r.affectedRows)}}))},className:"centeredContainerButton primaryButton buttonEnabled",type:"button",value:t?"Submit New Bug":"Update Bug"}))))))}function F(){return r.a.createElement("div",null,"Please check your connection to the internet.")}a(406);var U=function(){var e,t=Object(n.useState)(!0),i=Object(c.a)(t,2),u=(i[0],i[1],Object(n.useState)({})),s=Object(c.a)(u,2),b=s[0],m=s[1],p=Object(n.useState)(!1),f=Object(c.a)(p,2),h=f[0],v=f[1],w=Object(n.useState)([{id:""}]),S=Object(c.a)(w,2),y=S[0],N=S[1],D=Object(n.useState)([]),O=Object(c.a)(D,2),_=O[0],P=O[1],x=Object(n.useState)([]),B=Object(c.a)(x,2),T=B[0],I=B[1],k=Object(n.useState)([]),L=Object(c.a)(k,2),A=L[0],U=L[1],J=Object(n.useState)([]),W=Object(c.a)(J,2),z=W[0],M=W[1];return 0===T.length&&(e=function(e){return o.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:e.length?I(e):console.log("no length");case 1:case"end":return t.stop()}}))},o.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:a(25)({method:"POST",url:"https://bigbug-365ff5.appdrag.site/api/bugs/getBugSeverityLevels",form:{AD_PageNbr:"1",AD_PageSize:"500"}},(function(t,a,n){if(t)console.log("getBugSeverityLevels error: ",t),e(-1);else{var r=JSON.parse(n);e(r.Table)}}));case 2:case"end":return t.stop()}}))),0===A.length&&function(e){a(25)({method:"POST",url:"https://bigbug-365ff5.appdrag.site/api/bugs/getBugStatusStages",form:{AD_PageNbr:"1",AD_PageSize:"500"}},(function(t,a,n){if(t)console.log("getBugStatusStages error ",t),e(-1);else{var r=JSON.parse(n);e(r.Table)}}))}((function(e){return o.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:U(e);case 1:case"end":return t.stop()}}))})),0===z.length&&function(e){a(25)({method:"POST",url:"https://bigbug-365ff5.appdrag.site/api/bugs/getBugReproducibilityOptions",form:{AD_PageNbr:"1",AD_PageSize:"500"}},(function(t,a,n){if(t)console.log("getBugReproducibilityOptions error ",t),e(-1);else{var r=JSON.parse(n);e(r.Table)}}))}((function(e){return o.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",M(e));case 1:case"end":return t.stop()}}))})),r.a.createElement("div",{id:"app"},r.a.createElement(l.a,null,r.a.createElement(d,{isAuthenticated:h,logout:function(){return console.log("App: logging out"),v(!1),m({}),void localStorage.setItem("userInfo",{firstName:"default",lastName:"user"})},setIsAuthenticated:function(e){return v(e)},currentUserData:b}),r.a.createElement(g.d,null,r.a.createElement(g.b,{exact:!0,path:["/"]},h?r.a.createElement(j,{bugList:y,setBugList:function(e){return N(e)},userList:_,setUserList:function(e){return P(e)},bugSeverityLevels:T,bugStatusStages:A,bugReproducibilityOptions:z}):r.a.createElement(E,{currentUserData:b,setCurrentUserData:function(e){return m(e)},setIsAuthenticated:function(e){return v(e)}})),r.a.createElement(g.b,{path:["/register","/settings"]},r.a.createElement(C,{currentUserData:b,setCurrentUserData:function(e){return m(e)},setIsAuthenticated:function(e){return v(e)}})),r.a.createElement(g.b,{path:["/createBug","/bug/:id"]},r.a.createElement(R,{currentUserData:b,userList:_,bugSeverityLevels:T,bugStatusStages:A,bugReproducibilityOptions:z})),r.a.createElement(g.b,{path:"/error"},r.a.createElement(F,null)),r.a.createElement(g.a,{to:"/"}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(r.a.createElement(U,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[184,1,2]]]);
//# sourceMappingURL=main.ebf83641.chunk.js.map