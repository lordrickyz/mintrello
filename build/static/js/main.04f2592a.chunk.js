(this.webpackJsonpmintrello=this.webpackJsonpmintrello||[]).push([[0],{32:function(e,t,a){e.exports=a.p+"static/media/Mintrello-Butler.39efeebc.gif"},33:function(e,t,a){e.exports=a.p+"static/media/splashfiller1.ee384d2f.png"},34:function(e,t,a){e.exports=a.p+"static/media/splashfiller2.5c7153b6.png"},35:function(e,t,a){e.exports=a.p+"static/media/buter-pocket.824b9f8c.jpg"},38:function(e,t,a){e.exports=a(53)},50:function(e,t,a){},51:function(e,t,a){},53:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(19),l=a.n(c),s=a(13),i=a(20),o=a(5),d=a(4),u=a(6),m=a(7),p=a(10),b=a(9),O=a(8),h=a(23),f=a(24),j=function(e){Object(b.a)(a,e);var t=Object(O.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={id:n.props.card.id,title:n.props.card.title,description:n.props.card.description},n.update=n.update.bind(Object(p.a)(n)),n.handleClick=n.handleClick.bind(Object(p.a)(n)),n.deleteCard=n.deleteCard.bind(Object(p.a)(n)),n}return Object(m.a)(a,[{key:"update",value:function(e){var t=this;return function(a){t.setState(Object(d.a)({},e,a.currentTarget.value))}}},{key:"handleClick",value:function(e){this.props.closeModal(),this.props.editCard(this.state)}},{key:"deleteCard",value:function(){this.props.removeCard(this.props.column,this.props.card),this.props.closeModal()}},{key:"render",value:function(){var e=r.a.createElement("div",{className:"card-title-container"},r.a.createElement("span",{className:"card-title-icon",id:"card-show-icons"},r.a.createElement(h.a,{icon:f.b})),r.a.createElement("textarea",{className:"card-title-editor",spellCheck:"false",defaultValue:this.state.title,onChange:this.update("title")}),r.a.createElement("span",{className:"card-show-close",onClick:this.handleClick},r.a.createElement(h.a,{icon:f.c})),r.a.createElement("div",{className:"card-show-listname"},r.a.createElement("p",null,"In Column"))),t=r.a.createElement("div",{className:"card-description"},r.a.createElement("div",{className:"card-description-top"},r.a.createElement("span",{className:"card-desc-icon",id:"card-show-icons"},r.a.createElement(h.a,{icon:f.a})),r.a.createElement("h3",null,"Description")),r.a.createElement("textarea",{className:"card-description-editor",defaultValue:this.state.description,onChange:this.update("description"),placeholder:"Click here to add a description...",spellCheck:"false"}));return r.a.createElement("div",{className:"card-show"},r.a.createElement("div",{className:"card-show-title"}," ",e," "),r.a.createElement("div",{className:"card-show-desc"}," ",t," "),r.a.createElement("button",{onClick:this.deleteCard}," Delete Card"))}}]),a}(r.a.Component),v=Object(s.b)(null,(function(e){return{closeModal:function(){return e({type:"CLOSE_MODAL"})}}}))(j),E=(a(50),Object(s.b)((function(e){return{modal:e.modal}}),(function(e){return{closeModal:function(){return e({type:"CLOSE_MODAL"})}}}))((function(e){var t,a=e.modal;e.closeModal;if(!a)return null;switch(a.type){case"show-card":t=r.a.createElement(v,{card:a.item[0],editCard:a.item[1],removeCard:a.item[2],column:a.item[3]});break;default:return null}return r.a.createElement("div",{className:"modal-background"},r.a.createElement("div",{className:"modal-child",onClick:function(e){return e.stopPropagation()}},t))}))),g=(a(51),function(e){Object(b.a)(a,e);var t=Object(O.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar-container"},r.a.createElement("h3",null,"Mintrello"))}}]),a}(r.a.Component)),C=a(32),y=a.n(C),S=a(33),k=a.n(S),N=a(34),I=a.n(N),M=a(35),w=a.n(M),x=function(e){Object(b.a)(a,e);var t=Object(O.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"splash-page-container"},r.a.createElement("header",null,r.a.createElement(g,null)),r.a.createElement("div",{className:"splash-page-top"},r.a.createElement("img",{className:"butler-gif",src:y.a,alt:"The Butler is missing :O"}),r.a.createElement("div",{className:"splash-page-main-words"},r.a.createElement("h1",null,"Mintrello"),r.a.createElement("p",null,"Keep project planning sweet and simple"),r.a.createElement("ul",{className:"start-buttons-container"},r.a.createElement("li",null,r.a.createElement("button",{className:"left-start-btn"},"Tutorial")),r.a.createElement("li",null,r.a.createElement("a",{href:"#/dashboard"},r.a.createElement("button",{className:"right-start-btn"},"Get Started")))))),r.a.createElement("ul",{className:"splash-page-body"},r.a.createElement("li",null,r.a.createElement("h1",null,"Track",r.a.createElement("br",null),r.a.createElement("p",null,"With Mintrello you don't have to worry about losing track of project status. Keep up on current tasks with Mintrello's project board. Break up projects in to smaller pieces with cards. ")),r.a.createElement("img",{src:k.a,alt:"I'm missing :O"})),r.a.createElement("li",null,r.a.createElement("h1",null,"Complete",r.a.createElement("br",null),r.a.createElement("p",null,"Complete, delete, forget. Mintrello's emphasis on a minimalist structure ensures the only visible projects are the ones you still need to complete.")),r.a.createElement("img",{src:I.a,alt:"I'm missing :O"})),r.a.createElement("li",null,r.a.createElement("h1",null,"Take anywhere",r.a.createElement("br",null),r.a.createElement("p",null,"With Mintrello you keep track of projects on your PC or your mobile. Mintrello's design ensures a clean interface no matter your screen size.   ")),r.a.createElement("img",{className:"butler-pocket",src:w.a,alt:"I'm missing :O"}))),r.a.createElement("footer",null,"Whipped up by: Carl Godlewski, Louis Velazquez, and Ricky Zheng for the Mintbean Hackathon"))}}]),a}(r.a.Component),L=a(2),D=a(17),R=function(e){Object(b.a)(a,e);var t=Object(O.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(D.b,{draggableId:this.props.card.id,index:this.props.index},(function(t,a){return r.a.createElement("div",Object.assign({className:"card-container"},t.draggableProps,t.dragHandleProps,{ref:t.innerRef}),r.a.createElement("div",{onClick:function(){return e.props.openShowModal([e.props.card,e.props.editCard,e.props.removeCard,e.props.column])}},r.a.createElement("span",{id:"card-item-title"},e.props.card.title)))}))}}]),a}(r.a.Component),A=Object(s.b)(null,(function(e){return{openShowModal:function(t){return e(function(e,t){return{type:"OPEN_MODAL",modal:{type:e,item:t}}}("show-card",t))}}}))(R),J=function(e){Object(b.a)(a,e);var t=Object(O.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={id:"card-".concat(n.props.cardLength),title:"",description:""},n.update=n.update.bind(Object(p.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(p.a)(n)),n}return Object(m.a)(a,[{key:"update",value:function(e){var t=this;return function(a){t.setState(Object(d.a)({},e,a.currentTarget.value))}}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.onSubmit(this.props.column,{id:"card-".concat(this.props.cardLength),title:this.state.title,description:""}),this.setState({title:""})}},{key:"render",value:function(){return r.a.createElement("div",{className:"card-form-container"},r.a.createElement("form",{onSubmit:this.handleSubmit,className:"card-form"},r.a.createElement("input",{type:"text",value:this.state.title,onChange:this.update("title"),className:"card-input-title",placeholder:"Enter Card Title"}),r.a.createElement("input",{type:"submit",value:"+Add Card",disabled:!this.state.title,className:"card-input-submit"})))}}]),a}(r.a.Component),T=function(e){Object(b.a)(a,e);var t=Object(O.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={id:n.props.column.id,title:n.props.column.title,cardIds:n.props.column.cardIds},n.update=n.update.bind(Object(p.a)(n)),n.handleClick=n.handleClick.bind(Object(p.a)(n)),n.deleteColumn=n.deleteColumn.bind(Object(p.a)(n)),n}return Object(m.a)(a,[{key:"update",value:function(e){var t=this;return function(a){t.setState(Object(d.a)({},e,a.target.value))}}},{key:"handleClick",value:function(e){this.props.editColumn(this.state)}},{key:"deleteColumn",value:function(){this.props.removeColumn(this.props.column)}},{key:"render",value:function(){var e=this;return r.a.createElement(D.b,{draggableId:this.props.column.id,index:this.props.index},(function(t){return r.a.createElement("div",Object.assign({className:"column-container"},t.draggableProps,{ref:t.innerRef}),r.a.createElement("div",Object.assign({className:"column-item-header"},t.dragHandleProps),r.a.createElement("textarea",{className:"list-name-editor",onBlur:e.handleClick,onChange:e.update("title"),defaultValue:e.props.column.title})),r.a.createElement(D.c,{droppableId:e.props.column.id},(function(t,a){return r.a.createElement("div",Object.assign({className:"column-card-container",ref:t.innerRef},t.droppableProps),e.props.cards.map((function(t,a){return r.a.createElement(A,{key:t.id,card:t,column:e.props.column,index:a,editCard:e.props.editCard,removeCard:e.props.removeCard})})),t.placeholder,r.a.createElement(J,{column:e.props.column,onSubmit:e.props.addCard,cards:e.props.cards,cardLength:Object.keys(e.props.totalCards).length+1}),r.a.createElement("button",{onClick:e.deleteColumn},"Remove Column"))})))}))}}]),a}(r.a.Component),P={cards:{"card-1":{id:"card-1",title:"Trashing",description:"Take out the garbage"},"card-2":{id:"card-2",title:"Watching",description:"Watch my favorite show"},"card-3":{id:"card-3",title:"Charging",description:"Charge my phone"},"card-4":{id:"card-4",title:"Cooking",description:"Cook Dinner"}},columns:{"column-1":{id:"column-1",title:"To Do",cardIds:["card-1","card-2","card-3","card-4"]},"column-2":{id:"column-2",title:"In Progress",cardIds:[]},"column-3":{id:"column-3",title:"Done",cardIds:[]}},columnOrder:["column-1","column-2","column-3"]},_=function(e){Object(b.a)(a,e);var t=Object(O.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={id:"column-".concat(n.props.columnLength),title:"",cardIds:[]},n.update=n.update.bind(Object(p.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(p.a)(n)),n}return Object(m.a)(a,[{key:"update",value:function(e){var t=this;return function(a){t.setState(Object(d.a)({},e,a.currentTarget.value))}}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.onSubmit({id:"column-".concat(this.props.columnLength),title:this.state.title,cardIds:[]}),this.setState({title:""})}},{key:"render",value:function(){return r.a.createElement("div",{className:"list-form-container"},r.a.createElement("form",{onSubmit:this.handleSubmit,className:"list-form"},r.a.createElement("input",{type:"text",value:this.state.title,onChange:this.update("title"),className:"list-input-title",placeholder:"Enter Column Title..."}),r.a.createElement("input",{type:"submit",value:"+Add List",disabled:!this.state.title,className:"list-input-submit"})))}}]),a}(r.a.Component),V=function(e){Object(b.a)(a,e);var t=Object(O.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).addColumn=function(e){var t=Object(L.a)(Object(L.a)({},n.state),{},{columns:Object(L.a)(Object(L.a)({},n.state.columns),{},Object(d.a)({},e.id,e)),columnOrder:n.state.columnOrder.concat(e.id)});n.setState(t),localStorage.setItem("state",JSON.stringify(t))},n.editColumn=function(e){var t=Object(L.a)(Object(L.a)({},n.state),{},{columns:Object(L.a)(Object(L.a)({},n.state.columns),{},Object(d.a)({},e.id,e))});n.setState(t),localStorage.setItem("state",JSON.stringify(t))},n.removeColumn=function(e){var t=n.state.columnOrder.filter((function(t){return t!==e.id})),a=Object.assign({},n.state.columns);delete a[e];var r=Object(L.a)(Object(L.a)({},n.state),{},{columns:a,columnOrder:t});n.setState(r),localStorage.setItem("state",JSON.stringify(r))},n.addCard=function(e,t){var a=Object(L.a)(Object(L.a)({},n.state),{},{cards:Object(L.a)(Object(L.a)({},n.state.cards),{},Object(d.a)({},t.id,t)),columns:Object(L.a)(Object(L.a)({},n.state.columns),{},Object(d.a)({},e.id,Object(L.a)(Object(L.a)({},e),{},{cardIds:n.state.columns[e.id].cardIds.concat(t.id)})))});n.setState(a),localStorage.setItem("state",JSON.stringify(a))},n.editCard=function(e){var t=Object(L.a)(Object(L.a)({},n.state),{},{cards:Object(L.a)(Object(L.a)({},n.state.cards),{},Object(d.a)({},e.id,e))});n.setState(t),localStorage.setItem("state",JSON.stringify(t))},n.removeCard=function(e,t){var a=t.id,r=e.id,c=Object.assign({},n.state.cards);delete c[t];var l=n.state.columns[r].cardIds.filter((function(e){return e!==a})),s=Object(L.a)(Object(L.a)({},n.state),{},{cards:c,columns:Object(L.a)(Object(L.a)({},n.state.columns),{},Object(d.a)({},r,Object(L.a)(Object(L.a)({},e),{},{cardIds:l})))});n.setState(s),localStorage.setItem("state",JSON.stringify(s))},n.onDragEnd=function(e){var t,a=e.destination,r=e.source,c=e.draggableId,l=e.type;if(a&&(a.droppableId!==r.droppableId||a.index!==r.index)){if("column"===l){var s=Array.from(n.state.columnOrder);s.splice(r.index,1),s.splice(a.index,0,c);var i=Object(L.a)(Object(L.a)({},n.state),{},{columnOrder:s});return n.setState(i),void localStorage.setItem("state",JSON.stringify(i))}var o=n.state.columns[r.droppableId],u=n.state.columns[a.droppableId];if(o===u){var m=Array.from(o.cardIds);m.splice(r.index,1),m.splice(a.index,0,c);var p=Object(L.a)(Object(L.a)({},o),{},{cardIds:m}),b=Object(L.a)(Object(L.a)({},n.state),{},{columns:Object(L.a)(Object(L.a)({},n.state.columns),{},Object(d.a)({},p.id,p))});return n.setState(b),void localStorage.setItem("state",JSON.stringify(b))}var O=Array.from(o.cardIds);O.splice(r.index,1);var h=Object(L.a)(Object(L.a)({},o),{},{cardIds:O}),f=Array.from(u.cardIds);f.splice(a.index,0,c);var j=Object(L.a)(Object(L.a)({},u),{},{cardIds:f}),v=Object(L.a)(Object(L.a)({},n.state),{},{columns:Object(L.a)(Object(L.a)({},n.state.columns),{},(t={},Object(d.a)(t,h.id,h),Object(d.a)(t,j.id,j),t))});n.setState(v),localStorage.setItem("state",JSON.stringify(v))}},n.state=n.props.data,localStorage.setItem("state",JSON.stringify(n.state)),n}return Object(m.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(D.a,{onDragEnd:this.onDragEnd},r.a.createElement(D.c,{droppableId:"all-columns",direction:"horizontal",type:"column"},(function(t){return r.a.createElement("div",Object.assign({className:"dashboard-container"},t.droppableProps,{ref:t.innerRef}),e.state.columnOrder.map((function(t,a){var n=e.state.columns[t],c=n.cardIds.map((function(t){return e.state.cards[t]}));return r.a.createElement(T,{key:n.id,column:n,columnOrder:e.state.columnOrder,cards:c,totalCards:e.state.cards,index:a,addCard:e.addCard,editCard:e.editCard,removeCard:e.removeCard,editColumn:e.editColumn,removeColumn:e.removeColumn})})),t.placeholder,r.a.createElement(_,{onSubmit:e.addColumn,columns:e.state.columns,columnLength:e.state.columnOrder.length+1,columnOrder:e.state.columnOrder}))})))}}]),a}(r.a.Component),z=Object(s.b)((function(){return{data:null!=localStorage.getItem("state")?JSON.parse(localStorage.getItem("state")):P}}),null)(V),B=function(){return r.a.createElement("div",null,r.a.createElement(E,null),r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:"/",component:x}),r.a.createElement(o.a,{exact:!0,path:"/dashboard",component:z})))},W=function(e){var t=e.store;return r.a.createElement(s.a,{store:t},r.a.createElement(i.a,null,r.a.createElement(B,null)))},U=a(15),H=a(36),G=a.n(H),K=a(37),q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(Object.freeze(e),t.type){case"OPEN_MODAL":return t.modal;case"CLOSE_MODAL":return{};default:return e}},Z=P.columns,F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;switch(Object.freeze(e),t.type){case"RECEIVE_COLUMN":return Object.assign({},e,Object(d.a)({},t.columns.id,t.columns));case"REMOVE_COLUMN":var a=Object.assign({},e);return delete a[t.column],a;default:return e}},Q=P.cards,X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(Object.freeze(e),t.type){case"RECEIVE_CARDS":return t.cards;case"REMOVE_CARD":var a=Object.assign({},e);return delete a[t.card],a;default:return e}},Y=P.columnOrder,$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(Object.freeze(e),t.type){case"RECEIVE_COLUMN":return Object.assign({},e,Object(d.a)({},t.columns.id,t.columns.id));case"REMOVE_COLUMN":var a=Object.assign({},e);return delete a[t.column],a;default:return e}},ee=Object(U.c)({columns:F,cards:X,modal:q,columnOrder:$}),te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(U.e)(ee,e,Object(U.a)(K.a,G.a))};document.addEventListener("DOMContentLoaded",(function(){var e=document.getElementById("root"),t=te();window.getState=t.getState,l.a.render(r.a.createElement(W,{store:t}),e)}))}},[[38,1,2]]]);
//# sourceMappingURL=main.04f2592a.chunk.js.map