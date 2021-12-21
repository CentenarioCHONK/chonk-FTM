(this["webpackJsonpchonk-frontend"]=this["webpackJsonpchonk-frontend"]||[]).push([[6],{980:function(n,e,t){"use strict";t.r(e);var i,c,r,a,s,u=t(0),o=t(45),d=t(11),l=t(71),x=t(39),p=t(6),b=t(7),j=t(262),f=t(3),h=["children"],g=p.e.div(i||(i=Object(x.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  padding: 16px;\n  padding-bottom: 0;\n  min-height: calc(100vh - 64px);\n  background: ",";\n\n  "," {\n    background-size: auto;\n  }\n\n  "," {\n    padding: 24px;\n    padding-bottom: 0;\n  }\n\n  "," {\n    padding-top: 32px;\n    min-height: calc(100vh - 64px);\n  }\n"])),(function(){return"linear-gradient(180deg, #304FAC, #000)"}),(function(n){return n.theme.mediaQueries.xs}),(function(n){return n.theme.mediaQueries.sm}),(function(n){return n.theme.mediaQueries.lg})),m=function(n){var e=n.children,t=Object(l.a)(n,h);return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(j.a,{}),Object(f.jsxs)(g,Object(d.a)(Object(d.a)({},t),{},{children:[e,Object(f.jsx)(b.m,{flexGrow:1})]}))]})},O=t(2),v=t.n(O),k=t(23),w=t(20),B=t(63),S=t(57),V=(p.e.div(c||(c=Object(x.a)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  margin: ",";\n  & > * {\n    margin: 0px ","px 0px ","px;\n  }\n  & > *: first-child {\n    margin: 0px ","px 0px 0px;\n  }\n  & > *: last-child {\n    margin: 0px 0px 0px ","px;\n  }\n"])),(function(n){return n.spacing}),(function(n){return n.spacing}),(function(n){return n.spacing}),(function(n){return n.spacing}),(function(n){return n.spacing})),p.e.div(r||(r=Object(x.a)(["\n  display:flex;\n  flex-direction: column;\n  & > * {\n    margin: ","px 0px ","px 0px;\n  }\n  & > *: first-child {\n    margin: 0px 0px ","px 0px;\n  }\n  & > *: last-child {\n    margin: ","px 0px 0px 0px;\n  }\n"])),(function(n){return n.spacing}),(function(n){return n.spacing}),(function(n){return n.spacing}),(function(n){return n.spacing}))),y=t(67),A=p.e.div(a||(a=Object(x.a)(["\n  border-radius: 16px;\n  margin: 20px;\n  background-color: ",";\n  box-shadow: ",";\n"])),(function(n){return n.theme.colors.input}),(function(n){return n.theme.shadows.inset})),J=p.e.div(s||(s=Object(x.a)(["\n"])));function U(n){var e=n.label,t=n.value,i=n.isBnbAndHasUsdtValue,c=void 0!==i&&i,r=n.usdtValue;return Object(f.jsxs)(J,{children:[Object(f.jsxs)(b.J,{bold:!0,children:[e,":"]}),Object(f.jsxs)(b.J,{children:[t,c?" BNB (~ ".concat(r," USDT)"):""]})]})}function F(){var n=Object(u.useState)("0"),e=Object(w.a)(n,2),t=e[0],i=e[1],c=Object(u.useState)("0"),r=Object(w.a)(c,2),a=r[0],s=r[1],o=Object(y.b)(),d=Object(S.c)().account;return Object(u.useEffect)((function(){d&&function(){var n=Object(k.a)(v.a.mark((function n(){var e;return v.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=[o.totalBnbBalance(),o.getTokenHolderAmount()],n.next=3,Promise.all(e).then((function(n){s(Number(B.a.utils.formatEther(BigInt(n[0]._hex))).toFixed(2)),i(BigInt(n[1]._hex).toString())}));case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()()})),Object(f.jsx)(A,{children:Object(f.jsxs)(V,{spacing:"20",style:{margin:"20px"},children:[Object(f.jsx)(b.J,{bold:!0,fontSize:"20px",children:"Statistics"}),Object(f.jsx)(U,{label:"Total Users",value:t,isBnbAndHasUsdtValue:!1}),Object(f.jsx)(U,{label:"Total Value Locked",value:a,isBnbAndHasUsdtValue:!0,usdtValue:"0"})]})})}var H=function(){return Object(f.jsx)(m,{children:Object(f.jsx)(F,{})})};e.default=function(){return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)(o.a,{path:"/info",exact:!0,children:Object(f.jsx)(H,{})})})}}}]);
//# sourceMappingURL=6.0e2ac857.chunk.js.map