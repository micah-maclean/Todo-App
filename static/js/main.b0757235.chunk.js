(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(7),s=n.n(a),l=(n(14),n(4)),i=n(8),o=n(2),d=n(9),r=n(0);var u=function(e){var t=Object(c.useState)(!1),n=Object(o.a)(t,2),a=n[0],s=n[1],l=Object(c.useState)(""),i=Object(o.a)(l,2),d=i[0],u=i[1],b=Object(r.jsxs)("form",{className:"stack-small",onSubmit:function(t){t.preventDefault(),e.editTask(e.id,d),u(""),s(!1)},children:[Object(r.jsx)("div",{className:"form-group",children:Object(r.jsx)("input",{id:e.id,className:"todo-edit",value:d,onChange:function(e){u(e.target.value)},placeholder:"Edit ''"+e.name+"''",type:"text"})}),Object(r.jsxs)("div",{className:"btn-group",children:[Object(r.jsx)("button",{type:"button",className:"btn cancel",onClick:function(){return s(!1)},children:"Cancel"}),Object(r.jsx)("button",{type:"submit",className:"btn btn__primary save",children:"Save"})]})]}),j=Object(r.jsxs)("div",{className:"stack-small",children:[Object(r.jsxs)("div",{className:"checkbox",children:[Object(r.jsx)("input",{id:e.id,defaultChecked:e.completed,onChange:function(){return e.toggleTaskCompleted(e.id)},type:"checkbox"}),Object(r.jsx)("label",{className:"todo-label",htmlFor:e.id,children:e.name})]}),Object(r.jsxs)("div",{className:"btn-group",children:[Object(r.jsx)("button",{className:"btn",onClick:function(){return s(!0)},children:"Edit"}),Object(r.jsx)("button",{className:"btn delete",onClick:function(){return e.deleteTask(e.id)},children:"Delete"})]})]});return Object(r.jsx)("li",{className:"todo",children:a?b:j})};var b=function(e){var t=Object(c.useState)(""),n=Object(o.a)(t,2),a=n[0],s=n[1];return Object(r.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e.addTask(a),s("")},children:[Object(r.jsx)("h2",{className:"label-wrapper",children:Object(r.jsx)("label",{htmlFor:"new-task",children:"What needs to be done?"})}),Object(r.jsx)("input",{value:a,onChange:function(e){s(e.target.value)},placeholder:"new task",type:"text",id:"new-task",className:"input_lg",name:"new-task",autoComplete:"off"}),Object(r.jsx)("button",{type:"submit",className:"btn btn_lg add",children:"Add"})]})};var j=function(e){return Object(r.jsx)("button",{className:"btn toggle-btn","aria-pressed":e.isPressed,onClick:function(){return e.setFilter(e.name)},type:"button",children:Object(r.jsx)("span",{children:e.name})})},m={All:function(){return!0},Active:function(e){return!e.completed},Completed:function(e){return e.completed}};var p=function(e){var t=Object(c.useState)(e.tasks),n=Object(o.a)(t,2),a=n[0],s=n[1],p=Object(c.useState)("All"),O=Object(o.a)(p,2),h=O[0],f=O[1],x=Object.keys(m);function v(e){var t=a.map((function(t){return e===t.id?Object(l.a)(Object(l.a)({},t),{},{completed:!t.completed}):t}));s(t)}function k(e,t){var n=a.map((function(n){return e===n.id?Object(l.a)(Object(l.a)({},n),{},{name:t}):n}));s(n)}function g(e){var t=a.filter((function(t){return e!==t.id}));s(t)}var N=a.filter(m[h]).map((function(e){return Object(r.jsx)(u,{id:e.id,name:e.name,completed:e.completed,toggleTaskCompleted:v,editTask:k,deleteTask:g},e.id)})),C=x.map((function(e){return Object(r.jsx)(j,{name:e,isPressed:e===h,setFilter:f},e)})),y=1!==N.length?"tasks":"task",S="Completed"===h?"completed":"Active"===h?"active":"",T="".concat(N.length," ").concat(y," ").concat(S);return Object(r.jsxs)("div",{className:"todo-app",children:[Object(r.jsx)(b,{addTask:function(e){var t={id:"todo-"+Object(d.a)(),name:e,completed:!1};s([].concat(Object(i.a)(a),[t]))}}),Object(r.jsx)("div",{className:"filters btn-group stack-exception",children:C}),Object(r.jsx)("h2",{id:"list-heading",children:T}),Object(r.jsx)("ul",{role:"list",className:"todo-list",children:N})]})};s.a.render(Object(r.jsx)(p,{tasks:[{id:"todo-0",name:"Eat",completed:!0},{id:"todo-1",name:"Sleep",completed:!1},{id:"todo-2",name:"Repeat",completed:!1}]}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.b0757235.chunk.js.map