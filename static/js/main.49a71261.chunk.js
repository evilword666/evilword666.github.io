(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,a,t){},15:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(7),l=t.n(o),c=(t(14),t(1)),s=t(2),i=t(4),u=t(3),m=t(5),d=function(e){return r.a.createElement("div",null,r.a.createElement("nav",null,r.a.createElement("div",{className:"nav-wrapper  light-blue darken-2"},r.a.createElement("a",{className:"brand-logo"},e.titulo))))},p=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(t=Object(i.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(o)))).ciudadRef=r.a.createRef(),t.paisRef=r.a.createRef(),t.buscarClima=function(e){e.preventDefault();var a={ciudad:t.ciudadRef.current.value,pais:t.paisRef.current.value};t.props.datosConsulta(a)},t}return Object(m.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"contenedor-form"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("form",{onSubmit:this.buscarClima},r.a.createElement("div",{className:"input-field col s12 m8 l4 offset-m2"},r.a.createElement("input",{ref:this.ciudadRef,id:"ciudad",type:"text"}),r.a.createElement("label",{htlfor:"ciudad"},"Ciudad: ")),r.a.createElement("div",{className:"input-field col s12 m8 l4 offset-m2"},r.a.createElement("select",{ref:this.paisRef},r.a.createElement("option",{value:"",defaultValue:!0},"Elige un pais"),r.a.createElement("option",{value:"AR"},"Argentina"),r.a.createElement("option",{value:"CO"},"Colombia"),r.a.createElement("option",{value:"CR"},"Costa Rica"),r.a.createElement("option",{value:"ES"},"Espa\xf1a"),r.a.createElement("option",{value:"US"},"Estados Unidos"),r.a.createElement("option",{value:"MX"},"M\xe9xico"),r.a.createElement("option",{value:"PE"},"Per\xfa")),r.a.createElement("label",{htmlFor:"pais"},"Pais: ")),r.a.createElement("div",{className:"input-field col s12 m8 l4 offset-2 buscador"},r.a.createElement("input",{type:"submit",className:"waves-effect waves-light btn-large yellow accent-4",value:"Buscar..."}))))))}}]),a}(n.Component),f=function(e){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12 m6 offset-m3"},r.a.createElement("div",{className:"card-panel red darken-4 error"},e.mensaje))))},v=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(t=Object(i.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(o)))).mostrarResultado=function(){var e=t.props.resultado,a=e.name,n=e.weather,o=e.main;if(!a||!n||!o)return null;var l="http://openweathermap.org/img/w/".concat(n[0].icon,".png"),c="Clima de ".concat(a);return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"resultado col s12 m8 l6 offset-m2 offset-l3 "},r.a.createElement("div",{className:"card-panel light-blue align-center"},r.a.createElement("span",{className:"white-text"},r.a.createElement("h2",null,"Resultado Clima de ",a),r.a.createElement("p",{className:"temperatura"},"Actual: ",(o.temp-273.15).toFixed(2)," \xb0C",r.a.createElement("img",{src:l,alt:c})),r.a.createElement("p",null,"Max. ",o.temp_max-273.15," \xb0C"),r.a.createElement("p",null,"Max. ",o.temp_min-273.15," \xb0C")))),a)},t}return Object(m.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return console.log(this.props.resultado),r.a.createElement("div",{className:"container"},this.mostrarResultado())}}]),a}(n.Component),E=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=Object(i.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(r)))).state={error:"",consulta:{},resultado:{}},t.consultarApi=function(){var e=t.state.consulta,a=e.ciudad,n=e.pais;if(!a||!n)return null;var r="http://api.openweathermap.org/data/2.5/weather?q=".concat(a,",").concat(n,"&appid=").concat("a81e78526114357acf5141d5837748c3");fetch(r).then(function(e){return e.json()}).then(function(e){t.setState({resultado:e})}).catch(function(e){console.log(e)}),console.log(a),console.log(n)},t.datosConsulta=function(e){""===e.ciudad||""===e.pais?(console.log("Hay errores"),t.setState({error:!0})):(console.log(e),t.setState({consulta:e,error:!1}))},t}return Object(m.a)(a,e),Object(s.a)(a,[{key:"componentDidUpdate",value:function(e,a){a.consulta!==this.state.consulta&&this.consultarApi()}},{key:"componentDidMount",value:function(){this.setState({error:!1})}},{key:"render",value:function(){var e=this.state.error;console.log(e);var a,t=this.state.resultado.cod;return a=e?r.a.createElement(f,{mensaje:"Ambos campos son obligatorios"}):"404"===t?r.a.createElement(f,{mensaje:"Ciudad no encontrada"}):r.a.createElement(v,{resultado:this.state.resultado}),r.a.createElement("div",{className:"app"},r.a.createElement(d,{titulo:"Clima React"}),r.a.createElement(p,{datosConsulta:this.datosConsulta}),a)}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,a,t){e.exports=t(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.49a71261.chunk.js.map