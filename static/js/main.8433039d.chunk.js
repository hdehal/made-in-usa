(this["webpackJsonpmade-in-usa"]=this["webpackJsonpmade-in-usa"]||[]).push([[0],{117:function(e,t,a){e.exports=a(197)},123:function(e,t,a){},197:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(26),l=a.n(o),c=a(28),i=a(21),s=a(17),u=a(23),m=a(22),d=a(4),h=a(24),p=(a(122),a(123),a(38)),b=a(77),f=a(31),g=a.n(f),E=a(46),y=a(43),v=(y.b.hasAppClient("miusa-gxhmx")?y.b.getAppClient("miusa-gxhmx"):y.b.initializeDefaultAppClient("miusa-gxhmx")).getServiceClient(y.a.factory,"mongodb-atlas"),C=new y.c("USDh3yDZOxXiBPjnWhuC9qkeFAhbh5OFZdMsm7WUj4RZYSn5EccHIVEGBEzh0vu5"),k=!1,S=null,O=function(){return new Promise((function(e,t){k?e(S):y.b.defaultAppClient.auth.loginWithCredential(C).then((function(t){k=!0,S=v.db("vendor").collection("vendor-item"),e(S)})).catch((function(e){return t(e)}))}))},w=v.db("vendor").collection("vendor-item"),j=a(84),x=a(85),A=a(82),N=a(83),D=a(86),F=(a(80),a(102)),L=a.n(F);a(131);var M,U=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={dataMaps:[]},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"getData",value:function(){var e=Object(E.a)(g.a.mark((function e(){var t=this;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O();case 2:e.t0={isVerified:!0},e.t1=function(e){return t.setState({dataMaps:e})},e.t2=function(e){console.warn("Error:",e)},e.sent.find(e.t0).toArray().then(e.t1).catch(e.t2);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.getData()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(j.a,{style:{height:"480px",width:"100%",opacity:"0.9"},zoom:4.25,maxZoom:20,center:[37.7687477,-99.6820275],attributionControl:!1},r.a.createElement(x.a,{url:"https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}{r}.png",attribution:"Map by <a href='http://stamen.com' target='_blank'>Stamen Design</a> | \xa9 <a href='https://www.openstreetmap.org/copyright' target='_blank'>OpenStreetMap</a> contributors"}),r.a.createElement(A.a,{position:"bottomright",prefix:!1}),r.a.createElement(L.a,{spiderfyDistanceMultiplier:1,showCoverageOnHover:!1},this.state.dataMaps.map((function(e,t){var a=e.coordinates,n=e.company,o=e.url,l=e.loc;return r.a.createElement(N.a,{key:t,center:[a[0],a[1]],position:[a[0],a[1]]},r.a.createElement(D.a,{direction:"right",offset:[-8,-2],opacity:1},r.a.createElement("span",null,r.a.createElement("a",{href:o},n)),r.a.createElement("span",null,l)))})))))}}]),t}(n.Component),V=function(){return r.a.createElement(U,null)},G=a(116),I=a(15),z=a(55),P=a(107),_=a(103),q=a(104),B=a.n(q),T=new(a(105).OpenStreetMapProvider),W=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).checkboxOnChange=function(e){var t=e.target.name;a.setState((function(e){var a=e.checkboxIds;return a.includes(t)?{checkboxIds:a.filter((function(e){return e!==t}))}:{checkboxIds:[].concat(Object(G.a)(a),[t]).sort()}}))},a.animateSubmit=function(){a.setState({animateSubmit:!0})},a.onChangeCompanyName=a.onChangeCompanyName.bind(Object(d.a)(a)),a.onChangeUrl=a.onChangeUrl.bind(Object(d.a)(a)),a.onChangeLoc=a.onChangeLoc.bind(Object(d.a)(a)),a.onChangeGender=a.onChangeGender.bind(Object(d.a)(a)),a.onSubmit=a.onSubmit.bind(Object(d.a)(a)),a.onDelete=a.onDelete.bind(Object(d.a)(a)),a.onChangeisVerified=a.onChangeisVerified.bind(Object(d.a)(a)),a.onloadCallback=a.onloadCallback.bind(Object(d.a)(a)),a.verifyCallback=a.verifyCallback.bind(Object(d.a)(a)),a.state={checkboxes:[{id:"Accessories"},{id:"Bottoms"},{id:"Dresses"},{id:"Formal"},{id:"Shoes"},{id:"Swim"},{id:"Tops"},{id:"Undergarments"}],checkboxIds:[],company:"",url:"",loc:"",gender:"",isCaptchaVerified:!1,isVerified:!1,animateSubmit:!1},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"onChangeCompanyName",value:function(e){this.setState({company:e.target.value})}},{key:"onChangeUrl",value:function(e){this.setState({url:e.target.value})}},{key:"onChangeLoc",value:function(e){this.setState({loc:e.target.value})}},{key:"onChangeGender",value:function(e){this.setState({gender:e.target.value})}},{key:"onChangeisVerified",value:function(e){this.setState({isVerified:e.target.checked})}},{key:"onSubmit",value:function(e){var t=this;e.preventDefault(),Object(E.a)(g.a.mark((function e(){var a,n,r;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.search({query:t.state.loc});case 2:(a=e.sent)&&a.length>0&&(n=[a[0].y,a[0].x],r={company:t.state.company,url:t.state.url,loc:t.state.loc,coordinates:n,gender:t.state.gender,tags:t.state.checkboxIds,isVerified:t.state.isVerified}),w.insertOne(r).then((function(e){return console.log("Successfully inserted item with _id: ".concat(e.insertedId))})).catch((function(e){return console.error("Failed to insert item: ".concat(e))})),t.setState({animateSubmit:!1}),t.setState({id:"",company:"",url:"",loc:"",gender:"",checkboxIds:[],isCaptchaVerified:!1,isVerified:!1}),document.getElementById("genderSelect").selectedIndex="0";case 8:case"end":return e.stop()}}),e)})))()}},{key:"onDelete",value:function(e){console.log(this.props.selected);var t={_id:new _.a(this.props.selected)};w.deleteOne(t).then((function(e){return console.log("Deleted ".concat(e.deletedCount," item(s)."))})).catch((function(e){return console.error("Delete failed with error: ".concat(e))}))}},{key:"onloadCallback",value:function(){}},{key:"verifyCallback",value:function(e){e&&this.setState({isCaptchaVerified:!0})}},{key:"render",value:function(){var e,t=this,a=this.state,n=a.checkboxes,o=a.checkboxIds,l=this.state.animateSubmit,c=function(){e.reset(),t.setState({isCaptchaVerified:!1})};return r.a.createElement("div",{className:"mainContainer"},r.a.createElement("h4",null,"Add New Company"),r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement(I.a.Group,null,r.a.createElement(I.a.Label,null,"Company Name:"),r.a.createElement(I.a.Control,{type:"text",size:"sm",value:this.state.company,onChange:this.onChangeCompanyName,placeholder:"Example Corp",required:!0})),r.a.createElement(I.a.Group,null,r.a.createElement(I.a.Label,null,"URL:"),r.a.createElement(I.a.Control,{type:"text",size:"sm",value:this.state.url,onChange:this.onChangeUrl,placeholder:"https://www.example.com",required:!0})),r.a.createElement(I.a.Group,null,r.a.createElement(I.a.Label,null,"Location:"),r.a.createElement(I.a.Control,{type:"text",size:"sm",value:this.state.loc,onChange:this.onChangeLoc,placeholder:"City, State",required:!0})),r.a.createElement(I.a.Group,null,r.a.createElement(I.a.Label,null,"Gender:"),r.a.createElement("select",{required:!0,id:"genderSelect",className:"form-control dropdown-toggle btn btn-secondary",onChange:this.onChangeGender,multiple:!1},r.a.createElement("option",{value:""},"Select One"),r.a.createElement("option",{value:"Everyone"},"Everyone"),r.a.createElement("option",{value:"Men"},"Men"),r.a.createElement("option",{value:"Women"},"Women"))),r.a.createElement(I.a.Group,null,r.a.createElement(I.a.Label,null,"Category/Tags:"),r.a.createElement("div",{className:"mb-3"},n.map((function(e){return r.a.createElement(I.a.Check,{inline:!0,key:e.id,label:e.id,id:e.id,type:"checkbox",checked:o.includes(e.id),name:e.id,onChange:t.checkboxOnChange})})))),r.a.createElement(I.a.Check,{type:"hidden",disabled:!0}),r.a.createElement(B.a,{sitekey:"6LdaT90UAAAAAPhUh2D2odXQQB47ilnXw2mhCwAj",render:"explicit",onloadCallback:this.onloadCallback,verifyCallback:this.verifyCallback,ref:function(t){return e=t}}),r.a.createElement(I.a.Group,null,r.a.createElement(z.a,{id:"addFormSubmit",type:"submit",value:"Submit",disabled:!this.state.isCaptchaVerified,onClick:function(){t.animateSubmit(),c()}},l&&r.a.createElement(P.a,{as:"span",animation:"grow",size:"sm",role:"status","aria-hidden":"true",style:{marginRight:"4px"}}),l&&r.a.createElement("span",null,"Submitting"),!l&&r.a.createElement("span",null,"Submit")),r.a.createElement(z.a,{className:"btn",variant:"danger",type:"reset",onClick:function(){c()}},"Reset"))))}}]),t}(n.Component),R=a(50),H=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).onClickAlert=a.onClickAlert.bind(Object(d.a)(a)),a.state={setShowAlert:!0},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"onClickAlert",value:function(e){this.setState({setShowAlert:!1})}},{key:"render",value:function(){return r.a.createElement("div",{className:"mainContainer"},r.a.createElement(R.a,{show:this.state.setShowAlert,variant:"success",onClick:this.onClickAlert,dismissible:!0},r.a.createElement(R.a.Heading,null,"Missing a Vendor?"),r.a.createElement("p",null,'Please feel free to contribute to the list by adding a "Made in USA" company. Your submission(s) will be put into a queue and approved by a moderator shortly. Thanks!')))}}]),t}(n.Component),Z=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={selected:[]},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(H,null),r.a.createElement(W,{selected:this.props.selected}))}}]),t}(n.Component),X=function(){return r.a.createElement("div",{className:"mainContainer"},r.a.createElement(R.a,{variant:"primary"},r.a.createElement(R.a.Heading,null,"About the List"),r.a.createElement("p",null,'Over ten years ago, I took a challenge to slowly convert my wardrobe to entirely "Made in USA" clothing. The goals were numerous \u2014 from having fewer items of higher-quality clothing that would last longer, to voting with my wallet and making a political statement for fair wages, supply chain transparency, and against adverse working conditions abroad. Not all companies listed have their entire product portfolio American-made \u2014  the only requirement is that some product(s) should be manufactured in the USA \u2014 regardless of domestic or foreign materials. Please feel free to ',r.a.createElement(c.c,{to:"".concat("","/add")},"contribute"),"!"),r.a.createElement("hr",null),r.a.createElement("p",{className:"mb-0"},"This is a personal coding project built as a Single Page Application (SPA) using ",r.a.createElement("a",{href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"},"React")," and ",r.a.createElement("a",{href:"https://react-bootstrap.github.io/",target:"_blank",rel:"noopener noreferrer"},"Bootstrap")," with a ",r.a.createElement("a",{href:"https://www.mongodb.com/cloud/atlas",target:"_blank",rel:"noopener noreferrer"},"cloud MongoDB service"),". Open source and proudly hosted on ",r.a.createElement("a",{href:"https://github.com/hdehal/made-in-usa",target:"_blank",rel:"noopener noreferrer"},"GitHub"),".")))},J=function(){return r.a.createElement("div",{className:"mainContainer"},r.a.createElement("p",null,"404 Error: Page does not exist"))},Q=a(201),Y=a(200),K=function(){return r.a.createElement(Q.a,{bg:"light",expand:"lg"},r.a.createElement(c.b,{to:"/"},r.a.createElement(Q.a.Brand,null,r.a.createElement("span",{role:"img","aria-label":"US flag"},"\ud83c\uddfa\ud83c\uddf8")," Made in USA List")),r.a.createElement(Q.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(Q.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(Y.a,{className:"mr-auto"},r.a.createElement(c.c,{to:"/add"},"Add Company"))),r.a.createElement(Q.a.Collapse,{className:"justify-content-end"},r.a.createElement(c.c,{to:"/about"},r.a.createElement(z.a,{size:"sm",variant:"secondary"},"About"))))},$=a(113),ee=a(114),te=a.n(ee),ae=a(66),ne=a.n(ae),re=a(115),oe=function(e,t){return e?"asc"===e?r.a.createElement("span",{className:"react-bootstrap-table-sort-order"},r.a.createElement("span",{className:"caret"})):"desc"===e?r.a.createElement("span",{className:"react-bootstrap-table-sort-order dropup"},r.a.createElement("span",{className:"caret"})):null:r.a.createElement("span",{className:"order"},r.a.createElement("span",{className:"dropdown"},r.a.createElement("span",{className:"caret"})),r.a.createElement("span",{className:"dropup"},r.a.createElement("span",{className:"caret"})))},le=[{dataField:"id",text:"ID",hidden:!0},{dataField:"company",text:"Company",sort:!0,sortCaret:oe,headerStyle:function(e,t){return{minWidth:"175px"}}},{dataField:"url",text:"URL",sort:!0,sortCaret:oe,formatter:function(e,t){return r.a.createElement(r.a.Fragment,null,r.a.createElement("a",{href:e,target:"_blank",rel:"noopener noreferrer"},e))}},{dataField:"loc",text:"Location",sort:!0,sortCaret:oe,headerStyle:function(e,t){return{minWidth:"175px"}}},{dataField:"gender",text:"Gender",sort:!0,sortCaret:oe,headerStyle:function(e,t){return{minWidth:"120px"}}},{dataField:"tags",text:r.a.createElement("span",{className:"tagsLabel"},"Tags"),sort:!0,sortCaret:oe,formatter:function(e){return e.map((function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(re.a,{pill:!0,variant:"primary"},e))}))},filter:Object(ae.textFilter)({className:"form-control-sm",placeholder:"Search by tag",getFilter:function(e){M=e}})}];document.onkeydown=function(e){("key"in(e=e||window.event)?"Escape"===e.key||"Esc"===e.key:27===e.keyCode)&&M("")};var ce=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={data:[]},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"getData",value:function(){var e=Object(E.a)(g.a.mark((function e(){var t=this;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O();case 2:e.t0={isVerified:!0},e.t1=function(e){return e.map((function(e){return Object($.a)({},e,{id:e._id.toString()})}))},e.t2=function(e){return t.setState({data:e})},e.t3=function(e){console.warn("Error:",e)},e.sent.find(e.t0).toArray().then(e.t1).then(e.t2).catch(e.t3);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.getData()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(te.a,{keyField:"id",data:this.state.data,columns:le,filter:ne()(),defaultSorted:[{dataField:"company",order:"asc"}],striped:!0,hover:!0,condensed:!0,bootstrap4:!0}))}}]),t}(n.Component);b.a.initialize("UA-159568942-1"),b.a.pageview(window.location.pathname+window.location.search);var ie=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={selected:[]},a.handleOnSelect=a.handleOnSelect.bind(Object(d.a)(a)),a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"handleOnSelect",value:function(e,t){t?(console.log(e),this.setState({selected:e.id})):(console.log(e),this.setState({selected:[]}))}},{key:"render",value:function(){var e=this;return r.a.createElement(c.a,{basename:"/st"},r.a.createElement(K,null),r.a.createElement(p.c,null,r.a.createElement(p.a,{path:"/",component:V,exact:!0}),r.a.createElement(p.a,{path:"/add",component:function(){return r.a.createElement(Z,{selected:e.state.selected})}}),r.a.createElement(p.a,{path:"/about",component:X}),r.a.createElement(p.a,{component:J})),r.a.createElement(ce,{handleOnSelectProp:this.handleOnSelect}))}}]),t}(n.Component);l.a.render(r.a.createElement(c.a,null,r.a.createElement(ie,null)),document.getElementById("root"))}},[[117,1,2]]]);
//# sourceMappingURL=main.8433039d.chunk.js.map