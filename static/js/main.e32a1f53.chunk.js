(this["webpackJsonpreact-with-firebase"]=this["webpackJsonpreact-with-firebase"]||[]).push([[0],{36:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var a=n(3),c=n.n(a),r=n(30),s=n.n(r),i=(n(36),n(14)),o=n(16),u=n(17),l=n(5),j=n(21);n(49),n(37),n(39);j.a.initializeApp({apiKey:"AIzaSyC08-esU5opJSWKjtXw_t0UVSqMdsW582o",authDomain:"react-with-firebase-5c1a1.firebaseapp.com",databaseURL:"https://react-with-firebase-5c1a1-default-rtdb.firebaseio.com",projectId:"react-with-firebase-5c1a1",storageBucket:"react-with-firebase-5c1a1.appspot.com",messagingSenderId:"605147249976",appId:"1:605147249976:web:a58f0fa4a677fce40b55cd",measurementId:"G-6XEVNKHBQ7"});var b=j.a.auth,d=(j.a.firestore(),j.a.database()),h=n(15),p=n.n(h),f=n(18);function O(e,t){return console.log("\uac00\uc785",e,t),b().createUserWithEmailAndPassword(e,t)}function m(e,t){return b().signInWithEmailAndPassword(e,t)}function x(){var e=new b.GoogleAuthProvider;return b().signInWithPopup(e)}var v=n(2),g=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)([]),s=Object(i.a)(r,2),o=s[0],u=s[1],l=function(){var e=Object(f.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log(n),e.prev=2,e.next=5,a={message:n,timestamp:Date.now(),uid:b().currentUser.uid},d.ref("chats").push({message:a.message,timestamp:a.timestamp,uid:a.uid});case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),console.log(e.t0);case 10:case"end":return e.stop()}var a}),e,null,[[2,7]])})));return function(t){return e.apply(this,arguments)}}(),j=function(){var e=function(){var e=[];return d.ref("chats").on("value",(function(t){t.forEach((function(t){e.push(t.val())}))})),e}();u(e)};return Object(a.useEffect)((function(){try{d.ref("chats").on("child_added",j),d.ref("chats").on("child_changed",j)}catch(e){console.log(e)}}),[]),Object(v.jsxs)("div",{className:"chat-container",children:[Object(v.jsx)("div",{className:"chat-top",children:"\ud5e4\ub354"}),Object(v.jsx)("div",{className:"chat-middle",children:o.length>0?o.map((function(e,t){return Object(v.jsxs)("li",{className:"chat-bubble send",style:{display:"flex",flexDirection:"column",alignItems:b().currentUser.uid===e.uid?"flex-start":"flex-end"},children:[Object(v.jsx)("p",{children:e.message}),Object(v.jsx)("span",{children:e.timestamp})]},t)})):Object(v.jsx)("li",{children:"\ub9ac\uc2a4\ud2b8\uac00\uc5c6\uc2b5\ub2c8\ub2e4."})}),Object(v.jsx)("div",{className:"chat-bottom",children:Object(v.jsxs)("form",{onSubmit:l,children:[Object(v.jsx)("input",{placeholder:"\ub0b4\uc6a9\uc744 \uc785\ub825\ud558\uc138\uc694.",value:n,onChange:function(e){c(e.target.value)}}),Object(v.jsx)("button",{type:"submit",children:"\uc804\uc1a1"})]})}),Object(v.jsx)("button",{onClick:function(){b().signOut()},children:"\ub85c\uadf8\uc544\uc6c3"})]})};var w=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),s=Object(i.a)(r,2),o=s[0],l=s[1],j=function(e){var t=e.target.name;"email"===t?c(e.target.value):"password"===t&&l(e.target.value)},b=function(){var e=Object(f.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),""===n||""===o){e.next=11;break}return e.prev=2,e.next=5,O(n,o).then((function(e){return console.log(e)}));case 5:e.next=11;break;case 7:e.prev=7,e.t0=e.catch(2),console.log(e.t0),console.log("The email address is already in use by another account."===e.t0.message&&"\uc774\ubbf8 \uc788\ub294 \uc544\uc774\ub514\uc785\ub2c8\ub2e4.");case 11:case"end":return e.stop()}}),e,null,[[2,7]])})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsx)("div",{className:"sign-container",children:Object(v.jsxs)("div",{className:"sign-up-wrap",children:[Object(v.jsx)("h1",{className:"title",children:"\ud68c\uc6d0\uac00\uc785"}),Object(v.jsxs)("form",{className:"sign-up-form",onSubmit:b,children:[Object(v.jsx)("div",{children:Object(v.jsx)("input",{type:"email",placeholder:"\uc774\uba54\uc77c\uc744 \uc785\ub825\ud558\uc138\uc694.",name:"email",value:n,onChange:j})}),Object(v.jsx)("div",{children:Object(v.jsx)("input",{type:"password",placeholder:"\ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud558\uc138\uc694.",name:"password",value:o,onChange:j})}),Object(v.jsx)("div",{children:Object(v.jsx)("button",{type:"submit",children:"\ud68c\uc6d0\uac00\uc785"})})]}),Object(v.jsx)("hr",{}),Object(v.jsxs)("p",{children:["\uc774\ubbf8 \ud68c\uc6d0\uc774\uc2e0\uac00? ",Object(v.jsx)(u.b,{to:"/login",children:"\ub85c\uadf8\uc778"})]})]})})};var y=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),s=Object(i.a)(r,2),o=s[0],l=s[1],j=function(e){var t=e.target.name;"email"===t?c(e.target.value):"password"===t&&l(e.target.value)},b=function(){var e=Object(f.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),""===n||""===o){e.next=10;break}return e.prev=2,e.next=5,m(n,o).then((function(e){return console.log(e)}));case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[2,7]])})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(f.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x();case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}();return Object(v.jsx)("div",{className:"sign-container",children:Object(v.jsxs)("div",{className:"sign-wrap",children:[Object(v.jsx)("h1",{className:"title",children:"\ub85c\uadf8\uc778"}),Object(v.jsxs)("form",{className:"sign-form",onSubmit:b,children:[Object(v.jsx)("div",{children:Object(v.jsx)("input",{type:"email",placeholder:"\uc774\uba54\uc77c\uc744 \uc785\ub825\ud558\uc138\uc694.",name:"email",value:n,onChange:j})}),Object(v.jsx)("div",{children:Object(v.jsx)("input",{type:"password",placeholder:"\ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud558\uc138\uc694.",name:"password",value:o,onChange:j})}),Object(v.jsx)("div",{children:Object(v.jsx)("button",{type:"submit",children:"\ub85c\uadf8\uc778"})})]}),Object(v.jsx)("hr",{}),Object(v.jsx)("button",{type:"button",className:"sign-social-btn google-login",onClick:d,children:"\uad6c\uae00 \ub85c\uadf8\uc778"}),Object(v.jsx)("hr",{}),Object(v.jsxs)("p",{children:["\ud68c\uc6d0\uc774 \uc544\ub2c8\uc2e0\uac00? ",Object(v.jsx)(u.b,{to:"/signup",children:"\ud68c\uc6d0\uac00\uc785"})]})]})})},S=n(23),k=["component","authenticated"];var N=function(e){var t=e.component,n=e.authenticated,a=Object(S.a)(e,k);return Object(v.jsx)(l.b,Object(o.a)(Object(o.a)({},a),{},{render:function(e){return!1===n?Object(v.jsx)(t,Object(o.a)({},e)):Object(v.jsx)(l.a,{to:"/chat"})}}))},E=["component","authenticated"];var C=function(e){var t=e.component,n=e.authenticated,a=Object(S.a)(e,E);return Object(v.jsx)(l.b,Object(o.a)(Object(o.a)({},a),{},{render:function(e){return!0===n?Object(v.jsx)(t,Object(o.a)({},e)):Object(v.jsx)(l.a,{to:{pathname:"/login",state:{from:e.location}}})}}))},I={authenticated:!1,loading:!0};function U(e,t){switch(t.type){case"GET_USER":return Object(o.a)(Object(o.a)({},e),{},{authenticated:t.result});default:return e}}var D=function(){var e=Object(a.useReducer)(U,I),t=Object(i.a)(e,2),n=t[0],c=t[1],r=n.authenticated;return Object(a.useEffect)((function(){b().onAuthStateChanged((function(e){c(e?{type:"GET_USER",result:!0}:{type:"GET_USER",result:!1})}))}),[]),Object(v.jsx)(u.a,{children:Object(v.jsxs)(l.d,{children:[Object(v.jsx)(C,{path:"/chat",authenticated:r,component:g}),Object(v.jsx)(N,{path:"/signup",authenticated:r,component:w}),Object(v.jsx)(N,{path:["/","/login"],authenticated:r,component:y})]})})},A=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,50)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};s.a.render(Object(v.jsx)(c.a.StrictMode,{children:Object(v.jsx)(D,{})}),document.getElementById("root")),A()}},[[48,1,2]]]);
//# sourceMappingURL=main.e32a1f53.chunk.js.map