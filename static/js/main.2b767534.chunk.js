(this.webpackJsonpapitest=this.webpackJsonpapitest||[]).push([[0],{108:function(e,t,a){"use strict";a.r(t);var s=a(0),r=a.n(s),n=a(31),c=a.n(n),i=(a(77),a(22),a(113)),d=a(120),l=a(114),o=a(27),j=a(1);var h=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:"rubrik_home_div",children:Object(j.jsx)("h1",{className:"rubrik_home",children:"V\xe4lkommen"})}),Object(j.jsxs)(i.a,{className:"CardDeck-Home",children:[Object(j.jsxs)(d.a,{className:"Home-main-card",children:[Object(j.jsx)(d.a.Img,{src:"/Covid1.jpg",alt:"Covid",className:"Home-Card-img"}),Object(j.jsxs)(d.a.Body,{children:[Object(j.jsx)(d.a.Title,{children:"COVID19"}),Object(j.jsx)(d.a.Text,{children:"H\xe4r kan du se uppdaterad information om COVID sprindnigen"}),Object(j.jsxs)(l.a,{variant:"dark",id:"dropdown-basic-button",title:"Covid-Info",children:[Object(j.jsx)(o.a.Item,{href:"/covid",children:"Gobalt"}),Object(j.jsx)(o.a.Item,{href:"/covidCountry",children:"Per land"})]})]})]}),Object(j.jsxs)(d.a,{className:"Home-main-card",children:[Object(j.jsx)(d.a.Img,{src:"hotel1.jpg",alt:"Hotell",className:"Home-Card-img"}),Object(j.jsxs)(d.a.Body,{children:[Object(j.jsx)(d.a.Title,{children:"Hotel SeaSharp"}),Object(j.jsx)(d.a.Text,{children:"Anv\xe4nd dig av funktioner fr\xe5n hotellet"}),Object(j.jsxs)(l.a,{variant:"dark",id:"dropdown-basic-button",title:"Hotel-Funktioner",children:[Object(j.jsx)(o.a.Item,{href:"/Users",children:"Admin konton"}),Object(j.jsx)(o.a.Item,{href:"/loginHotell",children:"Logga in"})]})]})]}),Object(j.jsxs)(d.a,{className:"Home-main-card",children:[Object(j.jsx)(d.a.Img,{src:"fortnite1.jpg",alt:"Fortnite",className:"Home-Card-img"}),Object(j.jsxs)(d.a.Body,{children:[Object(j.jsx)(d.a.Title,{children:"Fortnite butiken"}),Object(j.jsx)(d.a.Text,{children:"Spana in vad du kan spendera dina Vbuks p\xe5"}),Object(j.jsxs)(l.a,{variant:"dark",id:"dropdown-basic-button",title:"Till shopen",children:[Object(j.jsx)(o.a.Item,{href:"/fortniteStore",children:"Visa rutn\xe4t"}),Object(j.jsx)(o.a.Item,{href:"/fortniteStoreList",children:"Visa i lista"})]})]})]})]})]})},b=a(118),u=a(121),x=a(115),O=a(119),p=a(70),m=a(69);var f=function(){return Object(j.jsx)("div",{children:Object(j.jsxs)(b.a,{bg:"dark",variant:"dark",expand:"lg",children:[Object(j.jsx)(b.a.Brand,{className:"nav-link-brand",href:"/home",children:"Out Of Boundaries"}),Object(j.jsx)(b.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(j.jsxs)(b.a.Collapse,{id:"basic-navbar-nav",children:[Object(j.jsxs)(u.a,{className:"mr-auto",children:[Object(j.jsx)(u.a.Link,{href:"/home",children:"Home"}),Object(j.jsx)(u.a.Link,{href:"/arenor",children:"Arenor"}),Object(j.jsxs)(x.a,{title:"COVID19",id:"basic-nav-dropdown",children:[Object(j.jsx)(x.a.Item,{href:"/covid",children:"Globalt"}),Object(j.jsx)(x.a.Item,{href:"/covidCountry",children:"Per Land"})]}),Object(j.jsxs)(x.a,{title:"Hotell SeaSharp",id:"basic-nav-dropdown",children:[Object(j.jsx)(x.a.Item,{href:"/loginHotell",children:"Logga In"}),Object(j.jsx)(x.a.Item,{href:"/users",children:"Admin Konton"})]}),Object(j.jsxs)(x.a,{title:"Fortnite-Shopen",id:"basic-nav-dropdown",children:[Object(j.jsx)(x.a.Item,{href:"/fortniteStore",children:"Visa rutl\xe4t"}),Object(j.jsx)(x.a.Item,{href:"/fortniteStoreList",children:"Visa i lista"})]})]}),Object(j.jsxs)(O.a,{inline:!0,children:[Object(j.jsx)(p.a,{type:"text",placeholder:"S\xf6k p\xe5 sidan",className:"mr-sm-2"}),Object(j.jsx)(m.a,{variant:"outline-success",children:"S\xf6k"})]})]})]})})},g=a(7),v=a.n(g),y=a(17),k=a(9),C=a(10),S=a(13),w=a(12),N=a(11),A=a.n(N),I=(a(43),a(26)),T=a(116),H=A.a.create({baseURL:"http://localhost:5000/api/Arenas/"}),L=function(e){Object(S.a)(a,e);var t=Object(w.a)(a);function a(){var e;return Object(k.a)(this,a),(e=t.call(this)).state={arenorlista:[],status:"",statusAfter:""},e.getArenor=Object(y.a)(v.a.mark((function t(){var a;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,H.get("/").then((function(e){return e.data}));case 2:a=t.sent,e.setState({arenorlista:a});case 4:case"end":return t.stop()}}),t)}))),e.createArena=Object(y.a)(v.a.mark((function t(){var a;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,H.post("/",{id:0,arenaNamn:"Gamla Ullevi",stad:"G\xf6teborg",landsKod:"SWE",kapacitet:18416});case 2:a=t.sent,console.log(a),e.getArenor();case 5:case"end":return t.stop()}}),t)}))),e.deleteArena=function(){var t=Object(y.a)(v.a.mark((function t(a){var s;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!window.confirm("\xc4r du s\xe4ker du vill radera?")){t.next=6;break}return t.next=3,H.delete("/"+a).then((function(t){console.log(t),(e.state.status=204)?(e.setState({statusAfter:"Radering lyckades",status:t.status}),alert("Arena raderad")):(e.state.status=!1)&&e.setState({statusAfter:"Misslyckades radera",status:t.status})})).catch((function(t){console.log(t),e.setState({statusAfter:"Misslyckades radera",status:s.status})}));case 3:s=t.sent,console.log(s),e.getArenor();case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.getArenor(),e}return Object(C.a)(a,[{key:"render",value:function(){var e=this;return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{style:{color:"#363535"},className:"rubrik",children:"Fotbollsarenor"}),Object(j.jsx)(m.a,{style:{marginLeft:"10px"},variant:"dark",children:Object(j.jsxs)(I.b,{className:"text-link",to:"/addArena",children:["L\xe4gg till en ny arena"," "]})}),Object(j.jsx)(m.a,{style:{marginLeft:"10px"},variant:"dark",children:Object(j.jsx)(I.b,{className:"text-link",to:"/editArena/1",children:"\xc4ndra en befintlig arena"})}),Object(j.jsxs)(d.a,{bg:"dark",text:"white",border:"light",className:"mb-3",style:{color:"#000",width:"52rem"},children:[Object(j.jsx)(d.a.Body,{children:Object(j.jsxs)(T.a,{hover:!0,variant:"dark",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"Nr"}),Object(j.jsx)("th",{children:"Namn"}),Object(j.jsx)("th",{children:"Stad"}),Object(j.jsx)("th",{children:"Landskod"}),Object(j.jsx)("th",{children:"Kapacitet"}),Object(j.jsx)("th",{children:"Ta bort"}),Object(j.jsx)("th",{children:"Uppdatera"})]})}),Object(j.jsx)("tbody",{children:this.state.arenorlista.map((function(t){return Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:t.id}),Object(j.jsx)("td",{children:t.arenaNamn}),Object(j.jsx)("td",{children:t.stad}),Object(j.jsx)("td",{children:t.landsKod}),Object(j.jsx)("td",{children:t.kapacitet}),Object(j.jsx)("td",{children:Object(j.jsxs)(m.a,{style:{border:"none"},variant:"outline-secondary",onClick:function(){return e.deleteArena(t.id)},children:[Object(j.jsx)("img",{src:"trash-fill.svg",alt:"Bootstrap"})," "]})}),Object(j.jsx)("td",{children:Object(j.jsx)(m.a,{style:{border:"none"},variant:"outline-secondary",children:Object(j.jsxs)(I.b,{className:"text-link",to:"/editArena/{this.arena.id}",children:[Object(j.jsx)("img",{src:"pen-fill.svg",alt:"Bootstrap"})," "]})})})]})}))})]})}),Object(j.jsx)("h3",{style:{marginTop:"3px"},children:this.state.statusAfter})]})]})}}]),a}(s.Component),B=function(e){Object(S.a)(a,e);var t=Object(w.a)(a);function a(){var e;Object(k.a)(this,a);for(var s=arguments.length,r=new Array(s),n=0;n<s;n++)r[n]=arguments[n];return(e=t.call.apply(t,[this].concat(r))).state={temperature:"",city:"",country:"",humidity:"",description:""},e.getWeather=function(t){t.preventDefault();var a=t.target.elements.city.value,s=t.target.elements.country.value;A.a.get("http://api.openweathermap.org/data/2.5/weather?q=".concat(a,",").concat(s,"&appid=72bc97862fc314e021f44610d4d0c869")).then((function(t){e.setState({temperature:t.data.main.temp,city:t.data.name,country:t.data.sys.country,humidity:t.data.main.humidity,description:t.data.weather[0].description})}))},e}return Object(C.a)(a,[{key:"render",value:function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"V\xe4der idag"}),Object(j.jsx)(d.a,{bg:"dark",text:"white",className:"mb-3",style:{color:"#000",width:"26rem"},children:Object(j.jsx)(d.a.Body,{children:Object(j.jsxs)(O.a,{onSubmit:this.getWeather,children:[Object(j.jsxs)(O.a.Group,{children:[Object(j.jsx)(O.a.Label,{children:"Stad"}),Object(j.jsx)(O.a.Control,{type:"text",name:"city",placeholder:"Skriv in din stad"}),Object(j.jsx)(O.a.Text,{children:"Skriv in stad och land f\xf6r att f\xe5 v\xe4derinformation"}),Object(j.jsx)(O.a.Control,{type:"text",name:"country",placeholder:"Skriv in ditt land"})]}),Object(j.jsx)(m.a,{type:"submit",variant:"info",children:"L\xe4s in v\xe4der"})]})})}),Object(j.jsxs)(d.a,{bg:"dark",text:"white",className:"mb-3",style:{color:"#000",width:"26rem"},children:[Object(j.jsx)("br",{}),Object(j.jsx)(d.a.Title,{children:"V\xe4der idag \xe4r f\xf6ljande:"}),Object(j.jsxs)(d.a.Body,{children:[Object(j.jsxs)("p",{children:["Temp: ",this.state.temperature]}),Object(j.jsxs)("p",{children:["Stad: ",this.state.city]}),Object(j.jsxs)("p",{children:["Land: ",this.state.country]}),Object(j.jsxs)("p",{children:["Fuktighet: ",this.state.humidity]}),Object(j.jsxs)("p",{children:["Beskriving: ",this.state.description]})]})]})]})}}]),a}(s.Component),M=function(e){Object(S.a)(a,e);var t=Object(w.a)(a);function a(){var e;Object(k.a)(this,a);for(var s=arguments.length,r=new Array(s),n=0;n<s;n++)r[n]=arguments[n];return(e=t.call.apply(t,[this].concat(r))).state={cases:"",deaths:"",recovered:""},e}return Object(C.a)(a,[{key:"componentDidMount",value:function(){var e=this;A.a.get("https://coronavirus-19-api.herokuapp.com/all").then((function(t){e.setState({cases:t.data.cases,deaths:t.data.deaths,recovered:t.data.recovered})}))}},{key:"render",value:function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{className:"rubrik",children:"COVID globalt"}),Object(j.jsx)(d.a,{bg:"dark",text:"white",className:"mb-3",style:{color:"#000",width:"20rem"},children:Object(j.jsxs)(d.a.Body,{children:[Object(j.jsx)(d.a.Title,{children:"Covid statestik fr\xe5n idag"}),Object(j.jsxs)("p",{children:["Fall: ",this.state.cases]}),Object(j.jsxs)("p",{children:["D\xf6da: ",this.state.deaths]}),Object(j.jsxs)("p",{children:["Tillfrisknade: ",this.state.recovered]})]})})]})}}]),a}(s.Component),D=function(e){Object(S.a)(a,e);var t=Object(w.a)(a);function a(){var e;Object(k.a)(this,a);for(var s=arguments.length,r=new Array(s),n=0;n<s;n++)r[n]=arguments[n];return(e=t.call.apply(t,[this].concat(r))).state={country:"",cases:"",todayCases:"",deaths:"",todayDeaths:"",recovered:"",active:"",critical:"",casesPerOneMillion:"",deathsPerOneMillion:"",totalTests:"",testsPerOneMillion:""},e.getCovidCountry=function(t){t.preventDefault();var a=t.target.elements.country.value;A.a.get("https://coronavirus-19-api.herokuapp.com/countries/".concat(a)).then((function(t){e.setState({country:t.data.country,cases:t.data.cases,todayCases:t.data.todayCases,deaths:t.data.deaths,todayDeaths:t.data.todayDeaths,recovered:t.data.recovered,active:t.data.active,critical:t.data.critical,casesPerOneMillion:t.data.casesPerOneMillion,deathsPerOneMillion:t.data.deathsPerOneMillion,totalTests:t.data.totalTests,testsPerOneMillion:t.data.testsPerOneMillion})}))},e}return Object(C.a)(a,[{key:"render",value:function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{className:"rubrik",children:"COVID per land"}),Object(j.jsx)(d.a,{bg:"dark",text:"white",className:"mb-3",style:{color:"#29A3E",width:"30rem"},children:Object(j.jsxs)(d.a.Body,{children:[Object(j.jsx)(d.a.Title,{children:"Skriv in ett land f\xf6r att f\xe5 COVID19 informaton f\xf6r aktuellt land"}),Object(j.jsxs)(O.a,{onSubmit:this.getCovidCountry,children:[Object(j.jsx)(O.a.Group,{children:Object(j.jsx)(O.a.Control,{type:"text",name:"country",placeholder:"Skriv in ditt land"})}),Object(j.jsx)(m.a,{type:"submit",variant:"info",children:"F\xe5 information"})]}),Object(j.jsx)("br",{}),Object(j.jsxs)("p",{children:["Valt land: ",this.state.country]}),Object(j.jsxs)("p",{children:["Totala fall: ",this.state.cases]}),Object(j.jsxs)("p",{children:["Fall idag: ",this.state.todayCases]}),Object(j.jsxs)("p",{children:["Totalt d\xf6da: ",this.state.deaths]}),Object(j.jsxs)("p",{children:["D\xf6da idag: ",this.state.todayDeaths]}),Object(j.jsxs)("p",{children:["Tillfrisknade: ",this.state.recovered]}),Object(j.jsxs)("p",{children:["Aktiva: ",this.state.active]}),Object(j.jsxs)("p",{children:["Kritiska: ",this.state.critical]}),Object(j.jsxs)("p",{children:["Fall per miljon: ",this.state.casesPerOneMillion]}),Object(j.jsxs)("p",{children:["D\xf6da per miljon: ",this.state.deathsPerOneMillion]}),Object(j.jsxs)("p",{children:["Totalt testade: ",this.state.totalTests]}),Object(j.jsxs)("p",{children:["Testade per miljon: ",this.state.testsPerOneMillion]})]})})]})}}]),a}(s.Component),U=A.a.create({baseURL:"https://thingproxy.freeboard.io/fetch/http://informatik10.ei.hv.se/UserService/Users"}),P=function(e){Object(S.a)(a,e);var t=Object(w.a)(a);function a(){var e;return Object(k.a)(this,a),(e=t.call(this)).state={users:[]},e.getUsers=Object(y.a)(v.a.mark((function t(){var a;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,U.get("/").then((function(e){return e.data}));case 2:a=t.sent,e.setState({users:a});case 4:case"end":return t.stop()}}),t)}))),e.getUsers(),e}return Object(C.a)(a,[{key:"render",value:function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{className:"rubrik",children:"Aktiva adminkonton fr\xe5n hotell"}),Object(j.jsx)(d.a,{bg:"dark",text:"white",border:"light",className:"mb-3",style:{color:"#000",width:"65rem"},children:Object(j.jsx)(d.a.Body,{children:Object(j.jsxs)(T.a,{hover:!0,variant:"dark",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"Id"}),Object(j.jsx)("th",{children:"Namn"}),Object(j.jsx)("th",{children:"Anv\xe4ndarnamn"}),Object(j.jsx)("th",{children:"Adress"}),Object(j.jsx)("th",{children:"Stad"}),Object(j.jsx)("th",{children:"Postnummer"}),Object(j.jsx)("th",{children:"Telefonnummer"}),Object(j.jsx)("th",{children:"Roll"})]})}),Object(j.jsx)("tbody",{children:this.state.users.map((function(e){return Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:e.id}),Object(j.jsx)("td",{children:e.name}),Object(j.jsx)("td",{children:e.userName}),Object(j.jsx)("td",{children:e.streetNo}),Object(j.jsx)("td",{children:e.city}),Object(j.jsx)("td",{children:e.zipCode}),Object(j.jsx)("td",{children:e.phoneNumber}),Object(j.jsx)("td",{children:e.roles})]})}))})]})})})]})}}]),a}(s.Component),F=a(29),K=a(117),R=a(71),V=A.a.create({baseURL:"https://thingproxy.freeboard.io/fetch/http://api.fortnitetracker.com/v1/store",headers:{"TRN-Api-Key":"6fb87b36-3730-40d9-8355-b0a3d91adb16"}}),G=function(e){Object(S.a)(a,e);var t=Object(w.a)(a);function a(){var e;return Object(k.a)(this,a),(e=t.call(this)).state={storeInfo:[]},e.getStoreInfo=Object(y.a)(v.a.mark((function t(){var a;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,V.get("/").then((function(e){return e.data}));case 2:a=t.sent,e.setState({storeInfo:a});case 4:case"end":return t.stop()}}),t)}))),e.getStoreInfo(),e}return Object(C.a)(a,[{key:"render",value:function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{className:"rubrik",children:"I butiken idag"}),Object(j.jsx)(K.a,{children:this.state.storeInfo.map((function(e){return Object(j.jsx)(R.a,{sm:3,md:3,lg:3,children:Object(j.jsxs)(d.a,{bg:"dark",text:"white",className:"FortniteShop-main-card my-2",children:[Object(j.jsx)(d.a.Header,{children:Object(j.jsx)("h4",{children:e.name})}),Object(j.jsx)(d.a.Img,Object(F.a)({className:"CardDeck-Home",src:e.imageUrl,alt:"new"},"className","Home-Card-img")),Object(j.jsxs)(d.a.Body,{children:[Object(j.jsxs)("h4",{children:["Rarity: ",e.rarity]}),Object(j.jsxs)("h4",{children:["Category: ",e.storeCategory]}),Object(j.jsxs)("h4",{children:["vBucks: ",e.vBucks]})]}),Object(j.jsx)(d.a.Footer,{children:Object(j.jsxs)("h4",{children:["ManifestId: ",e.manifestId]})})]})})}))})]})}}]),a}(s.Component),E=function(e){Object(S.a)(a,e);var t=Object(w.a)(a);function a(e){var s;return Object(k.a)(this,a),(s=t.call(this,e)).changeHandler=function(e){s.setState(Object(F.a)({},e.target.name,e.target.value))},s.submitHandler=function(){var e=Object(y.a)(v.a.mark((function e(t){var a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),a=A.a.post("https://thingproxy.freeboard.io/fetch/http://informatik10.ei.hv.se/UserService/Login",s.state).then((function(e){console.log(e),s.setState({status:e.data.status}),console.log(s.state.status),1==s.state.status?(s.setState({statusAfter:"Inloggniingsuppgifter verifierade",roll:e.data.role}),alert("Inloggniingsuppgifter verifierade")):0==s.state.status&&(s.setState({statusAfter:"Inloggning inte godk\xe4nd"}),alert("Inloggning inte godk\xe4nd"))})).catch((function(e){console.log(e),s.setState({statusAfter:"Inloggning misslyckades",status:a.status}),alert("Inloggning misslyckades")}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s.state={username:"",password:"",roll:"",status:!1},s}return Object(C.a)(a,[{key:"render",value:function(){var e=this.state,t=e.username,a=e.password;return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{className:"rubrik",children:"Logga in"}),Object(j.jsx)(d.a,{bg:"dark",text:"white",className:"mb-3",style:{color:"#000",width:"20rem"},children:Object(j.jsxs)(d.a.Body,{children:[Object(j.jsx)(d.a.Title,{children:"Logga in p\xe5 hotellet"}),Object(j.jsx)(O.a,{onSubmit:this.submitHandler,children:Object(j.jsxs)(O.a.Group,{children:[Object(j.jsx)(O.a.Text,{children:"Logga in med inloggningsuppgifter f\xf6r admin"}),Object(j.jsx)("div",{children:Object(j.jsx)(O.a.Control,{type:"text",name:"username",value:t,onChange:this.changeHandler,placeholder:"Skriv in ditt anv\xe4ndarnamn"})}),Object(j.jsx)("br",{}),Object(j.jsx)("div",{children:Object(j.jsx)(O.a.Control,{type:"password",name:"password",value:a,onChange:this.changeHandler,placeholder:"Skriv in ditt l\xf6senord"})}),Object(j.jsx)("br",{}),Object(j.jsx)(m.a,{type:"submit",variant:"success",children:"Logga in"}),Object(j.jsx)("br",{}),Object(j.jsx)("h3",{style:{marginTop:"5px"},children:this.state.roll}),Object(j.jsx)("h3",{style:{marginTop:"5px"},children:this.state.statusAfter})]})})]})})]})}}]),a}(s.Component),W=a(8),_=function(e){Object(S.a)(a,e);var t=Object(w.a)(a);function a(e){var s;return Object(k.a)(this,a),(s=t.call(this,e)).changeHandler=function(e){s.setState(Object(F.a)({},e.target.name,e.target.value))},s.submitHandler=function(){var e=Object(y.a)(v.a.mark((function e(t){var a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),a=A.a.post("http://localhost:5000/api/Arenas/",s.state).then((function(e){console.log(e),(s.state.status=204)?(s.setState({statusAfter:"Registrering lyckades",status:e.status}),alert("Registrering av arena lyckades"),W.b,W.a):(s.state.status=!1)&&(s.setState({statusAfter:"Registrering misslyckades",status:e.status}),alert("Registrering av arena misslyckades"))})).catch((function(e){console.log(e),s.setState({statusAfter:"Misslyckades registrera",status:a.status}),alert("Misslyckades registrera Arena")}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s.state={arenaNamn:"",stad:"",landsKod:"",kapacitet:"",status:"",statusAfter:""},s}return Object(C.a)(a,[{key:"render",value:function(){var e=this.state,t=e.arenaNamn,a=e.stad,s=e.landsKod,r=e.kapacitet;return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{className:"rubrik",children:"L\xe4gg till ny en arena"}),Object(j.jsx)(d.a,{bg:"dark",text:"white",className:"mb-3",style:{color:"#000",width:"20rem"},children:Object(j.jsxs)(d.a.Body,{children:[Object(j.jsx)(d.a.Title,{children:"Arena skapare"}),Object(j.jsx)(O.a,{onSubmit:this.submitHandler,children:Object(j.jsxs)(O.a.Group,{children:[Object(j.jsx)(O.a.Text,{children:"Mata in data f\xf6r en ny arena"}),Object(j.jsx)("div",{children:Object(j.jsx)(O.a.Control,{type:"text",name:"arenaNamn",value:t,onChange:this.changeHandler,placeholder:"Arena namn"})}),Object(j.jsx)("br",{}),Object(j.jsx)("div",{children:Object(j.jsx)(O.a.Control,{type:"text",name:"stad",value:a,onChange:this.changeHandler,placeholder:"Stad"})}),Object(j.jsx)("br",{}),Object(j.jsx)("div",{children:Object(j.jsx)(O.a.Control,{type:"text",name:"landsKod",value:s,onChange:this.changeHandler,placeholder:"Landskod"})}),Object(j.jsx)("br",{}),Object(j.jsx)("div",{children:Object(j.jsx)(O.a.Control,{type:"text",name:"kapacitet",value:r,onChange:this.changeHandler,placeholder:"Kapacitet"})}),Object(j.jsx)("br",{}),Object(j.jsx)(m.a,{type:"submit",variant:"success",children:"Registera arena"}),Object(j.jsx)(m.a,{style:{marginLeft:"10px"},variant:"danger",children:Object(j.jsx)(I.b,{className:"text-link",to:"/arenor",children:"Tillbaka"})}),Object(j.jsx)("br",{}),Object(j.jsx)("h3",{style:{marginTop:"3px"},children:this.state.statusAfter})]})})]})})]})}}]),a}(s.Component),J=function(e){Object(S.a)(a,e);var t=Object(w.a)(a);function a(e){var s;return Object(k.a)(this,a),(s=t.call(this,e)).changeHandler=function(e){s.setState(Object(F.a)({},e.target.name,e.target.value))},s.submitHandler=function(){var e=Object(y.a)(v.a.mark((function e(t){var a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),a=A.a.put("http://localhost:5000/api/Arenas/"+s.state.id,s.state).then((function(e){console.log(e),(s.state.status=204)?(s.setState({statusAfter:"Registrering lyckades",status:e.status}),alert("Registrering av arena lyckades")):(s.state.status=!1)&&(s.setState({statusAfter:"Uppdatera misslyckades",status:e.status}),alert("Uppdatera arena misslyckades"))})).catch((function(e){console.log(e),s.setState({statusAfter:"Misslyckades uppdatera",status:a.status}),alert("Misslyckades uppdatera")}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s.state={id:"",arenaNamn:"",stad:"",landsKod:"",kapacitet:"",statusText:"",status:"",statusAfter:""},s}return Object(C.a)(a,[{key:"render",value:function(){var e=this.state,t=e.id,a=e.arenaNamn,s=e.stad,r=e.landsKod,n=e.kapacitet;return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{className:"rubrik",children:"\xc4ndra f\xf6jande arena"}),Object(j.jsx)(d.a,{bg:"dark",text:"white",className:"mb-3",style:{color:"#000",width:"20rem"},children:Object(j.jsxs)(d.a.Body,{children:[Object(j.jsx)(d.a.Title,{children:"Arena \xe4ndrare"}),Object(j.jsx)(O.a,{onSubmit:this.submitHandler,children:Object(j.jsxs)(O.a.Group,{children:[Object(j.jsx)(O.a.Text,{children:"\xc4ndra f\xe4lt f\xf6r aktiv arena"}),Object(j.jsx)("div",{children:Object(j.jsx)(O.a.Control,{type:"text",name:"id",value:t,onChange:this.changeHandler,placeholder:"Arena Id"})}),Object(j.jsx)("br",{}),Object(j.jsx)("div",{children:Object(j.jsx)(O.a.Control,{type:"text",name:"arenaNamn",value:a,onChange:this.changeHandler,placeholder:"Arena namn"})}),Object(j.jsx)("br",{}),Object(j.jsx)("div",{children:Object(j.jsx)(O.a.Control,{type:"text",name:"stad",value:s,onChange:this.changeHandler,placeholder:"Stad"})}),Object(j.jsx)("br",{}),Object(j.jsx)("div",{children:Object(j.jsx)(O.a.Control,{type:"text",name:"landsKod",value:r,onChange:this.changeHandler,placeholder:"Landskod"})}),Object(j.jsx)("br",{}),Object(j.jsx)("div",{children:Object(j.jsx)(O.a.Control,{type:"text",name:"kapacitet",value:n,onChange:this.changeHandler,placeholder:"Kapacitet"})}),Object(j.jsx)("br",{}),Object(j.jsx)(m.a,{type:"submit",variant:"success",children:"Spara arena"}),Object(j.jsx)(m.a,{style:{marginLeft:"10px"},variant:"danger",children:Object(j.jsx)(I.b,{className:"text-link",to:"/arenor",children:"Tillbaka"})}),Object(j.jsx)("br",{}),Object(j.jsx)("h3",{style:{marginTop:"3px"},children:this.state.statusAfter}),Object(j.jsx)("br",{})]})})]})})]})}}]),a}(s.Component),q=A.a.create({baseURL:"https://thingproxy.freeboard.io/fetch/http://api.fortnitetracker.com/v1/store",headers:{"TRN-Api-Key":"6fb87b36-3730-40d9-8355-b0a3d91adb16"}}),z=function(e){Object(S.a)(a,e);var t=Object(w.a)(a);function a(){var e;return Object(k.a)(this,a),(e=t.call(this)).state={storeInfo:[]},e.getStoreInfo=Object(y.a)(v.a.mark((function t(){var a;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,q.get("/").then((function(e){return e.data}));case 2:a=t.sent,e.setState({storeInfo:a});case 4:case"end":return t.stop()}}),t)}))),e.getStoreInfo(),e}return Object(C.a)(a,[{key:"render",value:function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{style:{color:"#363535"},className:"rubrik",children:"I butiken idag"}),Object(j.jsx)(d.a,{bg:"dark",text:"white",border:"light",className:"mb-3",style:{color:"#000",width:"52rem"},children:Object(j.jsxs)(d.a.Body,{children:[Object(j.jsx)(d.a.Title,{children:"Uppdaterads dagligen vid 00:00 UTC"}),Object(j.jsxs)(T.a,{hover:!0,variant:"dark",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"Bild"}),Object(j.jsx)("th",{children:"Namn"}),Object(j.jsx)("th",{children:"S\xe4lsynthet"}),Object(j.jsx)("th",{children:"Kategori"}),Object(j.jsx)("th",{children:"vBucks"}),Object(j.jsx)("th",{children:"Manifest"})]})}),Object(j.jsx)("tbody",{children:this.state.storeInfo.map((function(e){return Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:Object(j.jsx)("img",{className:"photo",src:e.imageUrl,alt:"new"})}),Object(j.jsx)("td",{children:e.name}),Object(j.jsx)("td",{children:e.rarity}),Object(j.jsx)("td",{children:e.storeCategory}),Object(j.jsx)("td",{children:e.vBucks}),Object(j.jsx)("td",{children:e.manifestId})]})}))})]})]})})]})}}]),a}(s.Component);var Q=function(){return Object(j.jsx)(I.a,{children:Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(f,{}),Object(j.jsxs)(W.d,{children:[Object(j.jsx)(W.b,{path:"/home",component:h}),Object(j.jsx)(W.b,{path:"/arenor",component:L}),Object(j.jsx)(W.b,{path:"/weather",component:B}),Object(j.jsx)(W.b,{path:"/covid",component:M}),Object(j.jsx)(W.b,{path:"/covidCountry",component:D}),Object(j.jsx)(W.b,{exact:!0,path:"/users",component:P}),Object(j.jsx)(W.b,{exact:!0,path:"/fortniteStore",component:G}),Object(j.jsx)(W.b,{exact:!0,path:"/loginHotell",component:E}),Object(j.jsx)(W.b,{exact:!0,path:"/addArena",component:_}),Object(j.jsx)(W.b,{exact:!0,path:"/editArena/:id",component:J}),Object(j.jsx)(W.b,{exact:!0,path:"/fortniteStoreList",component:z}),Object(j.jsx)(W.b,{exact:!0,path:"/",component:h})]})]})})},X=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,122)).then((function(t){var a=t.getCLS,s=t.getFID,r=t.getFCP,n=t.getLCP,c=t.getTTFB;a(e),s(e),r(e),n(e),c(e)}))};c.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(Q,{})}),document.getElementById("root")),X()},43:function(e,t,a){},77:function(e,t,a){}},[[108,1,2]]]);
//# sourceMappingURL=main.2b767534.chunk.js.map