(this["webpackJsonpcovid-19-statistics"]=this["webpackJsonpcovid-19-statistics"]||[]).push([[0],{273:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),r=t(53),o=t.n(r),c=t(4),s=t(57),i=t(16),d=t(10),m=t.n(d),u=t(11),E=t.n(u),h=function(e){var a=e.nombrePais,t=e.alpha3Code,r=Object(l.useState)(""),o=Object(i.a)(r,2),s=o[0],d=o[1];return Object(l.useEffect)((function(){""!==t&&m.a.get("https://corona.lmao.ninja/v2/historical/".concat(t,"?lastdays=30")).then((function(e){var a=Object.keys(e.data.timeline.cases);a=a.map((function(e){var a=e.split("/");return a[1]+"/"+a[0]+"/"+a[2]}));var t=Object.values(e.data.timeline.cases),l=Object.values(e.data.timeline.deaths),n=Object.values(e.data.timeline.recovered),r={type:"line",data:{labels:a,datasets:[{label:"Casos",backgroundColor:window.chartColors.red,borderColor:window.chartColors.red,fill:!1,data:t},{label:"Muertes",backgroundColor:window.chartColors.purple,borderColor:window.chartColors.purple,fill:!1,data:l},{label:"Recuperaciones",backgroundColor:window.chartColors.green,borderColor:window.chartColors.green,fill:!1,data:n}]},options:{responsive:!0,title:{display:!0,text:"Linea de tiempo del covid en ".concat(e.data.country)},scales:{xAxes:[{display:!0}],yAxes:[{display:!0}]}}};s.hasOwnProperty("destroy")&&s.destroy();var o=document.getElementById("myChart5");d(new E.a(o,r))}))}),[a,t]),n.a.createElement(c.Card,null,n.a.createElement(c.Card.Body,null,n.a.createElement("h5",null,"Linea de tiempo de ",n.a.createElement("b",null,a)),n.a.createElement("div",null,n.a.createElement("canvas",{id:"myChart5"}))))},p=function(e){var a=e.paisSeleccionado;return Object(l.useEffect)((function(){var e=document.getElementById("myChart7"),t={type:"pie",data:{datasets:[{data:[a.cases,a.recovered,a.deaths],backgroundColor:[window.chartColors.blue,window.chartColors.yellow,window.chartColors.red],label:"Global"}],labels:["Casos "+a.cases,"Recuperados "+a.recovered,"Fallecidos "+a.deaths]},options:{responsive:!0}};new E.a(e,t)})),n.a.createElement(c.Card,null,n.a.createElement(c.Card.Body,null,n.a.createElement("div",null,n.a.createElement("canvas",{id:"myChart7"}))))},v=t(18),C=t.n(v),b=function(e){var a=e.paisSeleccionado;return n.a.createElement(c.Card,null,n.a.createElement(c.Card.Body,null,n.a.createElement(c.BH5,null,n.a.createElement("img",{src:a.countryInfo.flag,heigth:"30",width:"30",alt:""}),"Datos actuales de ",a.country),n.a.createElement("p",null,"Fecha de actualizacion: ",n.a.createElement(C.a,{format:"DD/MM/YYYY"},a.updated)),n.a.createElement("p",null,"Casos nivel mundial: ",n.a.createElement("b",null,a.cases)),n.a.createElement("p",null,"Total de recuperados: ",n.a.createElement("b",null,a.recovered)),n.a.createElement("p",null,"Total de fallecidos: ",n.a.createElement("b",null,a.deaths)),n.a.createElement("p",null,"Casos del dia de hoy: ",a.todayCases),n.a.createElement("p",null,"Total de casos activos: ",a.active),n.a.createElement("p",null,"Casos criticos: ",a.critical)))},f=t(54),y=t.n(f),w=function(){var e=Object(l.useState)({updated:0,cases:0,todayCases:0,deaths:0,todayDeaths:0,recovered:0,active:0,critical:0,casesPerOneMillion:0,deathsPerOneMillion:0,tests:0,testsPerOneMillion:0,affectedCountries:0,country:"",countryInfo:{},alpha3Code:""}),a=Object(i.a)(e,2),t=a[0],r=a[1],o=Object(l.useState)([]),d=Object(i.a)(o,2),u=d[0],E=d[1];Object(l.useEffect)((function(){m.a.get("https://restcountries.eu/rest/v2/all").then((function(e){E(e.data)}))}),[]);return n.a.createElement(n.a.Fragment,null,n.a.createElement(c.Row,{my:"md-3"},n.a.createElement(c.Col,{col:"md-12",text:"center"},n.a.createElement("h2",null,"Seleccione el pais"))),n.a.createElement(c.Row,{my:"md-3"},n.a.createElement(c.Col,null,n.a.createElement("select",{defaultValue:"DEFAULT",className:"form-control",id:"exampleFormControlSelect2",onChange:function(e){!function(e){var a=e.target.value;""!==a?m.a.get("https://corona.lmao.ninja/v2/countries/"+a).then((function(e){r(Object(s.a)({},e.data,{alpha3Code:a}))})).catch((function(e){e.response.status?alert("No existe datos para este pais"):alert("Error")})):r({updated:0,cases:0,todayCases:0,deaths:0,todayDeaths:0,recovered:0,active:0,critical:0,casesPerOneMillion:0,deathsPerOneMillion:0,tests:0,testsPerOneMillion:0,affectedCountries:0,country:"",countryInfo:{},alpha3Code:""})}(e)}},n.a.createElement("option",{value:"DEFAULT",disabled:!0},"Seleccione"),u.map((function(e){return n.a.createElement("option",{key:y()(),value:e.alpha3Code},e.name)}))))),n.a.createElement(c.Row,{my:"md-3"},n.a.createElement(c.Col,{col:"md-4"},n.a.createElement(b,{paisSeleccionado:t})),n.a.createElement(c.Col,{col:"md-8"},n.a.createElement(p,{paisSeleccionado:t}))),n.a.createElement(c.Row,{my:"md-3"},n.a.createElement(c.Col,{col:"md-12"},n.a.createElement(h,{nombrePais:t.country,alpha3Code:t.alpha3Code}))))},g=function(){var e=Object(l.useState)({updated:1587044800696,country:"",countryInfo:{_id:0,iso2:"",iso3:"",lat:0,long:0,flag:""},cases:0,todayCases:0,deaths:0,todayDeaths:0,recovered:0,active:0,critical:0,casesPerOneMillion:0,deathsPerOneMillion:0,tests:0,testsPerOneMillion:0}),a=Object(i.a)(e,2),t=a[0],r=a[1];return Object(l.useEffect)((function(){m.a.get("https://corona.lmao.ninja/v2/countries/BOL").then((function(e){r(e.data);var a=document.getElementById("myChart231");new E.a(a,{type:"horizontalBar",data:{labels:["Casos (".concat(e.data.cases,")"),"Fallecidos (".concat(e.data.deaths,")"),"Recuperados (".concat(e.data.recovered,")")],datasets:[{label:["Bolivia"],data:[e.data.cases,e.data.deaths,e.data.recovered],fill:!1,backgroundColor:[window.chartColors.red,window.chartColors.purple,window.chartColors.green]}]}})}))}),[]),n.a.createElement(n.a.Fragment,null,n.a.createElement(c.Row,{my:"md-3"},n.a.createElement(c.Col,{col:"md-12",text:"center"},n.a.createElement("h2",null,"Datos en Bolivia."))),n.a.createElement(c.Row,{my:"md-3"},n.a.createElement(c.Col,{col:"md-8"},n.a.createElement(c.Card,null,n.a.createElement(c.Card.Body,null,n.a.createElement(c.BH5,null,"Cuadro de la fecha ",n.a.createElement(C.a,{format:"DD/MM/YYYY"},t.updated)," "),n.a.createElement("canvas",{id:"myChart231"})))),n.a.createElement(c.Col,{col:"md-4"},n.a.createElement(b,{paisSeleccionado:t}))))},O=function(){return Object(l.useEffect)((function(){m.a.get("https://corona.lmao.ninja/v2/historical/BOL?lastdays=30").then((function(e){var a=Object.keys(e.data.timeline.cases);a=a.map((function(e){var a=e.split("/");return a[1]+"/"+a[0]+"/"+a[2]}));var t=Object.values(e.data.timeline.cases),l=Object.values(e.data.timeline.deaths),n=Object.values(e.data.timeline.recovered),r={type:"line",data:{labels:a,datasets:[{label:"Casos",backgroundColor:window.chartColors.red,borderColor:window.chartColors.red,fill:!1,data:t},{label:"Muertes",backgroundColor:window.chartColors.purple,borderColor:window.chartColors.purple,fill:!1,data:l},{label:"Recuperaciones",backgroundColor:window.chartColors.green,borderColor:window.chartColors.green,fill:!1,data:n}]},options:{responsive:!0,title:{display:!0,text:"Linea de tiempo del covid en ".concat(e.data.country)},scales:{xAxes:[{display:!0}],yAxes:[{display:!0}]}}},o=document.getElementById("myChart31");new E.a(o,r)}))}),[]),n.a.createElement(c.Row,null,n.a.createElement(c.Col,{col:"md-12"},n.a.createElement(c.Card,null,n.a.createElement(c.Card.Body,null,n.a.createElement("h5",null,"Linea de tiempo de Bolivia"),n.a.createElement("div",null,n.a.createElement("canvas",{id:"myChart31"}))))))},j=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(g,null),n.a.createElement(O,null))},D=t(22),M=t(23),k=t(25),P=t(24),B=function(e){Object(k.a)(t,e);var a=Object(P.a)(t);function t(e){var l;return Object(D.a)(this,t),(l=a.call(this,e)).chartRef=n.a.createRef(),l}return Object(M.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return n.a.createElement(c.Card,null,n.a.createElement(c.Card.Body,null,n.a.createElement("div",null,n.a.createElement("canvas",{id:"myChart",ref:this.chartRef}))))}},{key:"componentDidUpdate",value:function(){var e=this.dibujar(this.props.globalData),a=this.chartRef.current.getContext("2d");new E.a(a,e)}},{key:"dibujar",value:function(e){var a=e;return{type:"pie",data:{datasets:[{data:[a.cases,a.recovered,a.deaths],backgroundColor:[window.chartColors.blue,window.chartColors.yellow,window.chartColors.red],label:"Global"}],labels:["Casos "+a.cases,"Recuperados "+a.recovered,"Fallecidos "+a.deaths]},options:{responsive:!0}}}}]),t}(l.Component),S=function(e){Object(k.a)(t,e);var a=Object(P.a)(t);function t(e){var l;return Object(D.a)(this,t),(l=a.call(this,e)).state={updated:0,cases:0,todayCases:0,deaths:0,todayDeaths:0,recovered:0,active:0,critical:0,casesPerOneMillion:0,deathsPerOneMillion:0,tests:0,testsPerOneMillion:0,affectedCountries:0},l}return Object(M.a)(t,[{key:"componentDidMount",value:function(){var e=this;m.a.get("https://corona.lmao.ninja/v2/continents").then((function(a){var t=0,l=0,n=0,r=0,o=0,c=0,s=0,i=0,d=0,m=0,u=0,E=0,h=0;a.data.forEach((function(e){t=e.updated,l+=e.cases,n+=e.todayCases,r+=e.deaths,o+=e.todayDeaths,c+=e.recovered,s+=e.active,i+=e.critical,d+=e.casesPerOneMillion,m+=e.deathsPerOneMillion,u+=e.tests,E+=e.testsPerOneMillion,h+=e.affectedCountries})),e.setState({updated:t,cases:l,todayCases:n,deaths:r,todayDeaths:o,recovered:c,active:s,critical:i,casesPerOneMillion:d,deathsPerOneMillion:m,tests:u,testsPerOneMillion:E,affectedCountries:h})}))}},{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(c.Row,{my:"md-3"},n.a.createElement(c.Col,{text:"center"},n.a.createElement("h2",null,"Datos Globales."))),n.a.createElement(c.Row,{my:"md-3"},n.a.createElement(c.Col,{col:"md-4"},n.a.createElement(c.Card,null,n.a.createElement(c.Card.Body,null,n.a.createElement("h2",null,"Datos nivel mundial."),n.a.createElement("p",null,"Fecha de actualizacion: ",n.a.createElement(C.a,{format:"DD/MM/YYYY"},this.state.updated)),n.a.createElement("p",null,"Casos nivel mundial: ",n.a.createElement("b",null,this.state.cases)),n.a.createElement("p",null,"Total de recuperados: ",n.a.createElement("b",null,this.state.recovered)),n.a.createElement("p",null,"Total de fallecidos: ",n.a.createElement("b",null,this.state.deaths)),n.a.createElement("p",null,"Casos del dia de hoy: ",this.state.todayCases),n.a.createElement("p",null,"Total de casos activos: ",this.state.active),n.a.createElement("p",null,"Casos criticos: ",this.state.critical)))),n.a.createElement(c.Col,{col:"md-8"},n.a.createElement(B,{globalData:this.state}))))}}]),t}(l.Component),I=function(){return n.a.createElement(c.Container,null,n.a.createElement("ul",{class:"nav nav-tabs"},n.a.createElement("li",{class:"nav-item"},n.a.createElement("a",{class:"nav-link active","data-toggle":"tab",href:"#home"},"Datos Globales")),n.a.createElement("li",{class:"nav-item"},n.a.createElement("a",{class:"nav-link","data-toggle":"tab",href:"#menu1"},"Bolivia")),n.a.createElement("li",{class:"nav-item"},n.a.createElement("a",{class:"nav-link","data-toggle":"tab",href:"#menu2"},"Por Pais"))),n.a.createElement("div",{className:"tab-content"},n.a.createElement("div",{id:"home",className:"container tab-pane active"},n.a.createElement(S,null)),n.a.createElement("div",{id:"menu1",className:"container tab-pane fade"},n.a.createElement(j,null)),n.a.createElement("div",{id:"menu2",className:"container tab-pane fade"},n.a.createElement(w,null))))},x=t(26),R=t(15),N=function(){return n.a.createElement("div",null,"hola")};var F=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(x.a,null,n.a.createElement(c.Navbar,{expand:"lg",light:!0,bg:"light"},n.a.createElement(c.Navbar.Brand,{href:"#"},n.a.createElement("b",null,"ESTADISTICAS DEL COVID-19")),n.a.createElement(c.Navbar.Toggler,{target:"#navbarSupportedContent"}),n.a.createElement(c.Collapse,{navbar:!0,id:"navbarSupportedContent"},n.a.createElement(c.Navbar.Nav,{mr:"auto"},n.a.createElement(c.Nav.Item,{active:!0},n.a.createElement(x.b,{to:"/",className:"nav-link"},"Inicio")),n.a.createElement(c.Nav.Item,null,n.a.createElement(x.b,{to:"/comparador",className:"nav-link"},"Comparador")),n.a.createElement(c.Nav.Item,{dropdown:!0},n.a.createElement(c.Nav.Link,{dropdownToggle:!0},"Opciones"),n.a.createElement(c.Dropdown.Menu,null,n.a.createElement(c.Dropdown.Item,null,"Action"),n.a.createElement(c.Dropdown.Item,null,"Another action"),n.a.createElement(c.Dropdown.Divider,null),n.a.createElement(c.Dropdown.Item,null,"Something else")))))),n.a.createElement(R.c,null,n.a.createElement(R.a,{exact:!0,path:"/"},n.a.createElement(I,null)),n.a.createElement(R.a,{exact:!0,path:"/comparador",component:N}))))};window.chartColors={red:"rgb(255, 99, 132)",orange:"rgb(255, 159, 64)",yellow:"rgb(255, 205, 86)",green:"rgb(75, 192, 192)",blue:"rgb(54, 162, 235)",purple:"rgb(153, 102, 255)",grey:"rgb(201, 203, 207)"},o.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(F,null)),document.getElementById("root"))},58:function(e,a,t){e.exports=t(273)}},[[58,1,2]]]);
//# sourceMappingURL=main.14ca7c84.chunk.js.map