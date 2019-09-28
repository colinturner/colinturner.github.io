(window["webpackJsonpcolin-portfolio"]=window["webpackJsonpcolin-portfolio"]||[]).push([[0],{24:function(e,a,t){e.exports=t(54)},29:function(e,a,t){},51:function(e,a,t){},52:function(e,a,t){},53:function(e,a,t){},54:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(22),r=t.n(l),s=(t(29),t(2)),i=t(3),o=t(5),m=t(4),p=t(6),u=t(9),d=t(12),E=t(13),b=t(23),g=t(8),N=t(7),h=t.n(N),v=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).state={target:"_blank"},t}return Object(p.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"dp-contact"},c.a.createElement("ul",{className:"dp-contacts"},c.a.createElement("li",null,c.a.createElement("a",{href:"https://github.com/colinturner",target:this.state.target},c.a.createElement(u.a,{icon:["fab","github"]}))),c.a.createElement("li",null,c.a.createElement("a",{href:"https://www.linkedin.com/in/colin-turner/",target:this.state.target},c.a.createElement(u.a,{icon:["fab","linkedin"]})))))}}]),a}(n.Component),y=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).state={target:"_blank"},t}return Object(p.a)(a,e),Object(i.a)(a,[{key:"ageCalculator",value:function(e){var a=e/1e3/60/60/24/365;return Math.trunc(a)}},{key:"render",value:function(){var e=new Date-new Date("1992/10/24");return c.a.createElement("div",null,c.a.createElement(h.a,{speed:20,cursorClassName:"dp-cursor",className:"dp-introduction"},c.a.createElement("h3",null,"Name: ",c.a.createElement("strong",null,"Colin Turner"),", ",c.a.createElement("br",null),"Age: ",c.a.createElement("strong",null,this.ageCalculator(e))," years old,",c.a.createElement(h.a.Delay,{ms:750}),c.a.createElement(h.a.Backspace,{count:4}),"young, ",c.a.createElement("br",null),"Specialities: ",c.a.createElement("strong",null,"React, Rails, Angular, Node.js")),c.a.createElement(h.a.Delay,{ms:750}),c.a.createElement("h1",null,"Full Stack Developer"),c.a.createElement(h.a.Delay,{ms:750}),c.a.createElement("p",null,"in ",c.a.createElement("strong",null,"Vancouver, BC"))),c.a.createElement(v,null))}}]),a}(n.Component),j=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"dp-education-item"},c.a.createElement("p",{className:"line-1"},c.a.createElement("span",{className:"c-y braclet-open"},".",this.props.endDate," ")),c.a.createElement("p",{className:"line-2"},c.a.createElement("span",{className:"c-p"},"Institution"),c.a.createElement("span",null,":"),c.a.createElement("span",{className:"c-g"}," ",this.props.institution),c.a.createElement("span",null,";")),c.a.createElement("p",{className:"line-3"},c.a.createElement("span",{className:"c-o"},"&.location"),c.a.createElement("span",null,":"),c.a.createElement("span",{className:"c-g"}," ",this.props.location),c.a.createElement("span",null,";")),c.a.createElement("p",{className:"line-2"},c.a.createElement("span",{className:"c-p"},"Category"),c.a.createElement("span",null,":"),c.a.createElement("span",{className:"c-g"}," ",this.props.category),c.a.createElement("span",null,";")),c.a.createElement("p",{className:"line-2"},c.a.createElement("span",{className:"c-p"},"Description"),c.a.createElement("span",null,":"),c.a.createElement("span",{className:"c-g"}," ",this.props.description),c.a.createElement("span",null,";")),c.a.createElement("span",{className:"braclet-close"}))}}]),a}(n.Component),f=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"dp-section-education"},c.a.createElement("div",{className:"dp-school"},c.a.createElement(h.a,{speed:10,cursorClassName:"dp-cursor"},c.a.createElement("div",{className:"dp-title"},"Education")),c.a.createElement("div",{className:"code code-css dp-work-experience-list"},c.a.createElement("div",{className:"code-content"},c.a.createElement("code",null,c.a.createElement(j,{endDate:"2017",institution:"Makers Academy",location:"London, UK",category:"Full Stack Development",description:"Refined industry skills including agile test-driven development and pair programming"}),c.a.createElement(j,{endDate:"2015",institution:"McGill University",location:"Montr\xe9al, CA",category:"B.Eng. Materials Engineering",description:"Industrial co-op program. International exchange. Included computer science courses, programming, nanotechnology, thermodynamics, and laboratory studies"}))))),c.a.createElement("div",{className:"dp-technical-skills"},c.a.createElement(h.a,{speed:10,cursorClassName:"dp-cursor",startDelay:1500},c.a.createElement("div",{className:"dp-title"},"Technical Chops")),c.a.createElement("div",{className:"code code-js dp-technical-skills-list"},c.a.createElement("div",{className:"code-content"},c.a.createElement("code",null,c.a.createElement("span",{className:"c-y"},"const "),c.a.createElement("span",{className:"c-b"},"frontend")," = [",c.a.createElement("span",{className:"c-g"},"\u201creact\u201d"),","," ",c.a.createElement("span",{className:"c-g"},"\u201cangular\u201d"),","," ",c.a.createElement("span",{className:"c-g"},'"vue"'),"];",c.a.createElement("br",null),c.a.createElement("span",{className:"c-y"},"const "),c.a.createElement("span",{className:"c-b"},"backend")," = [",c.a.createElement("span",{className:"c-g"},"\u201cruby\u201d"),","," ",c.a.createElement("span",{className:"c-g"},"\u201crails\u201d"),","," ",c.a.createElement("span",{className:"c-g"},"\u201cnode.js\u201d"),"];",c.a.createElement("br",null),c.a.createElement("span",{className:"c-y"},"const "),c.a.createElement("span",{className:"c-b"},"database")," = [",c.a.createElement("span",{className:"c-g"},"\u201cpostgres\u201d"),","," ",c.a.createElement("span",{className:"c-g"},"\u201cmysql\u201d"),"]; ",c.a.createElement("br",null),c.a.createElement("br",null))))))}}]),a}(n.Component),k=(t(51),function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:" dp-work-experience-item code code-js"},c.a.createElement("div",{className:"code-content"},c.a.createElement("code",null,c.a.createElement("span",{className:"c-y"},"const "),c.a.createElement("span",{className:"c-b"},this.props.companyName),c.a.createElement("span",null," = {"),c.a.createElement("br",null),c.a.createElement("span",{className:"c-b dp-code-spacer"},"era: "),c.a.createElement("span",{className:"c-g"},'"',this.props.era,'",'),c.a.createElement("br",null),c.a.createElement("span",{className:"c-b dp-code-spacer"},"position: "),c.a.createElement("span",{className:"c-g"},'"',this.props.position,'",'),c.a.createElement("br",null),c.a.createElement("span",{className:"c-b dp-code-spacer"},"location: "),c.a.createElement("span",{className:"c-g"},'"',this.props.location,'",'),c.a.createElement("br",null),c.a.createElement("span",{className:"c-b dp-code-spacer"},"description: "),c.a.createElement("span",{className:"c-g"},'"',this.props.description,'",'),c.a.createElement("br",null),"};")),c.a.createElement("br",null))}}]),a}(n.Component)),O=(t(52),function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"dp-work"},c.a.createElement(h.a,{speed:10,cursorClassName:"dp-cursor"},c.a.createElement("div",{className:"dp-title"},"Professional Experience")),c.a.createElement("div",{className:"dp-work-experience"},c.a.createElement("div",{className:"dp-work-experience-list"},c.a.createElement(k,{era:"2018 - 2019",companyName:"PathFactory",position:"Full Stack Developer",location:"Toronto, CA",description:"Agile full stack web development building B2B digital marketing products. Core technologies include JavaScript (React), Ruby on Rails, and MySQL."}),c.a.createElement(k,{era:"2017 - 2018",companyName:"SuperAwesome",position:"Full Stack Developer",location:"London, UK",description:"Built an advertising marketplace that makes digital spaces safer for kids. Technologies include JavaScript, Angular 2+, AngularJS, Node.js, Ruby, PostgreSQL and MongoDB. REST API development. Agile environment. Partially remote team."}),c.a.createElement(k,{era:"2014",companyName:"UNSW",position:"Computational Fluids Researcher",location:"Sydney, AU",description:"Led pioneering research into air bubble collision mechanics using Computational Fluid Dynamics methods. Large data sets and regression analysis."}),c.a.createElement(k,{era:"2013",companyName:"Rolls-Royce",position:"Materials Engineer Intern",location:"Montr\xe9al, CA",description:"Documented gas turbine research. Composite and ultralight materials."}))))}}]),a}(n.Component)),w=(t(53),function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).state={target:"_blank",list:[{id:"1",link:"https://github.com/colinturner/norwegian-verbs",platform:"github",text:{title:"Snakk",shortDescription:"Free language-learning web app",stack:"React"}},{id:"2",link:"https://github.com/Alicespyglass/middl",platform:"github",text:{title:"Middl",shortDescription:"Find new venues to meet up with people halfway",stack:"React Native"}}]},t}return Object(p.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"dp-projects"},this.state.list.map((function(a){return c.a.createElement("div",{key:a.id,className:"dp-projects-list-item"},c.a.createElement("a",{href:a.link,target:e.state.target,className:"dp-projects-list-item-link"},c.a.createElement("div",{className:"dp-projects-list-item-text"},c.a.createElement("div",{className:"dp-projects-list-item-icon"},c.a.createElement(u.a,{icon:["fab","".concat(a.platform)]})),c.a.createElement("div",null,c.a.createElement("p",{className:"dp-projects-list-item-title"},a.text.title),c.a.createElement("p",{className:"dp-project-list-item-stack"},a.text.stack),c.a.createElement("p",null,a.text.shortDescription)))))})))}}]),a}(n.Component)),C=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"dp-projects-page"},c.a.createElement(h.a,{speed:10,cursorClassName:"dp-cursor"},c.a.createElement("div",{className:"dp-title"},"Personal projects")),c.a.createElement(w,null))}}]),a}(n.Component);d.b.add(b.a);var D=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){document.title="Colin Turner"}},{key:"render",value:function(){return c.a.createElement("div",{className:"app"},c.a.createElement(g.d,{className:"dp-tab-navigation"},c.a.createElement(g.b,{className:"dp-icon-navigation-list"},c.a.createElement(g.a,{className:"icon dp-icon-navigation-list-item"},c.a.createElement(u.a,{icon:E.c})),c.a.createElement(g.a,{className:"icon dp-icon-navigation-list-item dp-graduation"},c.a.createElement(u.a,{icon:E.b})),c.a.createElement(g.a,{className:"icon dp-icon-navigation-list-item"},c.a.createElement(u.a,{icon:E.a})),c.a.createElement(g.a,{className:"icon dp-icon-navigation-list-item"},c.a.createElement(u.a,{icon:E.d}))),c.a.createElement("div",{className:"dp-content"},c.a.createElement(g.c,{className:"dp-home"},c.a.createElement(y,null)),c.a.createElement(g.c,null,c.a.createElement(f,null)),c.a.createElement(g.c,null,c.a.createElement(O,null)),c.a.createElement(g.c,null,c.a.createElement(C,null)))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[24,1,2]]]);
//# sourceMappingURL=main.16af7b65.chunk.js.map