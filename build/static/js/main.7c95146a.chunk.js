(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{15:function(t,e,n){t.exports={Contact__list:"PhoneBook_Contact__list__39gFN",Contact__item:"PhoneBook_Contact__item__3HOKz",Button__remove:"PhoneBook_Button__remove__J888H"}},18:function(t,e,n){t.exports={Filter__search:"Filter_Filter__search__26RSF",Filter__input:"Filter_Filter__input__3v6lu"}},29:function(t,e,n){},41:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),o=n(12),r=n.n(o),s=(n(29),n(20)),i=n(14),u=n(9),l=n(3),b=Object(l.b)("contacts/addContacts"),_=Object(l.b)("contacts/dellContacts"),j=Object(l.b)("contacts/addFilter"),d=n(6),m=function(t){return t.contacts.filter},h=Object(d.a)([function(t){return t.contacts.items},m],(function(t,e){return t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}))})),O=n(19),p=n(5),f=n.n(p),x=n(11),v=n(1),C=function(t){var e=t.onSubmit,n=Object(a.useState)(""),c=Object(O.a)(n,2),o=c[0],r=c[1],s=Object(a.useState)(""),i=Object(O.a)(s,2),u=i[0],l=i[1],b=function(t){var e=t.target,n=e.name,a=e.value;switch(n){case"name":r(a);break;case"number":l(a);break;default:return}},_=function(){r(""),l("")};return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e({name:o,number:u}),_()},className:f.a.Forma,children:[Object(v.jsx)("label",{className:f.a.nameinput}),"Name",Object(v.jsx)("input",{className:f.a.Forma__input,id:Object(x.a)(),type:"text",name:"name",value:o,placeholder:"Ivan Petrov",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:b}),Object(v.jsx)("label",{className:f.a.nameinput}),"Number",Object(v.jsx)("input",{className:f.a.Forma__input,id:Object(x.a)(),type:"text",name:"number",value:u,placeholder:"+380990000000",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:b}),Object(v.jsx)("button",{type:"submit",className:f.a.Button__form,children:"Add Contact"})]})})},F=n(15),N=n.n(F),k=function(t){var e=t.contacts,n=void 0===e?[]:e,a=t.delContact;return Object(v.jsx)("ul",{className:N.a.Contact__list,children:n.map((function(t){return Object(v.jsxs)("li",{className:N.a.Contact__item,children:[Object(v.jsxs)("span",{children:[t.name," : ",t.number]}),Object(v.jsx)("button",{type:"button",onClick:function(){return a(t.id)},className:N.a.Button__remove,children:"Remove"})]},t.id)}))})},g=n(18),B=n.n(g),P=function(t){var e=t.filterContact,n=t.value;return Object(v.jsx)("div",{children:Object(v.jsxs)("form",{className:B.a.Filter__search,children:[Object(v.jsx)("label",{children:"Search"}),Object(v.jsx)("input",{className:B.a.Filter__input,value:n,onChange:e,placeholder:"Enter your name"})]})})},y=n(8),w=n.n(y);var S=function(){var t=Object(u.c)(h),e=Object(u.c)(m),n=Object(u.b)();console.log(t);var a=function(e){return t.find((function(t){return t.name===e}))},c=e.toLowerCase(),o=t.filter((function(t){return t.name.toLowerCase().includes(c)}));return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("div",{className:w.a.PhoneBookBlock,children:Object(v.jsx)(C,{onSubmit:function(e){var c={id:Object(x.a)(),name:e.name,number:e.number};if(a(c.name))return alert("Name ".concat(c.name,"already on your list\n      "));n(b([].concat(Object(i.a)(t),[Object(s.a)({},c)])))}})}),Object(v.jsxs)("div",{children:[Object(v.jsxs)("div",{children:[Object(v.jsx)("h2",{className:w.a.Contacts__title,children:"Contacts"}),t.length>0?Object(v.jsx)(P,{filterContact:function(t){var e=t.currentTarget.value;n(j(e))},value:e}):Object(v.jsx)("p",{className:w.a.Filter__text,children:"No contacts\ud83d\ude41"})]}),Object(v.jsx)(k,{contacts:o,delContact:function(t){n(_(t))}})]})]})};var A,I=function(){return Object(v.jsx)("div",{className:w.a.Container,children:Object(v.jsx)(S,{})})},z=(n(37),n(2)),J=n(22),L=n.n(J),Z=n(7),q=Object(l.c)([],(A={},Object(Z.a)(A,b,(function(t,e){return e.payload})),Object(Z.a)(A,_,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),A)),E=Object(l.c)("",Object(Z.a)({},j,(function(t,e){return e.payload}))),H=Object(z.b)({items:q,filter:E}),K=n(4),M=n(23),Q={key:"contacts",storage:n.n(M).a},R=Object(z.b)({contacts:H}),T=Object(K.g)(Q,R),D=Object(l.a)({reducer:T,middleware:function(t){return[].concat(Object(i.a)(t({serializableCheck:{ignoredActions:[K.a,K.f,K.b,K.c,K.d,K.e]}})),[L.a])},devTools:!1}),$={store:D,persistor:Object(K.h)(D)},G=n(24);r.a.render(Object(v.jsx)(c.a.StrictMode,{children:Object(v.jsx)(u.a,{store:$.store,children:Object(v.jsx)(G.a,{loading:null,persistor:$.persistor,children:Object(v.jsx)(I,{})})})}),document.getElementById("root"))},5:function(t,e,n){t.exports={Forma:"InputPhonebook_Forma__3orIP",Forma__input:"InputPhonebook_Forma__input__1es7_",nameinput:"InputPhonebook_nameinput__3g3SN",Button__form:"InputPhonebook_Button__form__3p6Qc"}},8:function(t,e,n){t.exports={Container:"PhoneBook_Container__2wQ_Z",Contacts__title:"PhoneBook_Contacts__title__1uPsK",Filter__text:"PhoneBook_Filter__text__3_4v4"}}},[[41,1,2]]]);
//# sourceMappingURL=main.7c95146a.chunk.js.map