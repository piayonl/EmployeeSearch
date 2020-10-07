(this.webpackJsonpreacttest=this.webpackJsonpreacttest||[]).push([[0],{17:function(e,t,a){e.exports=a(45)},22:function(e,t,a){},23:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(15),s=a.n(l),o=(a(22),a(2)),i=a(3),c=a(5),m=a(4),u=(a(23),a(16)),p=a.n(u);a(41);var d=function(){return r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"title"},"EMPLOYEE DIRECTORY: Search for an Employee"),r.a.createElement("br",null),r.a.createElement("div",{className:"tagline"},"Find Local Employees"))};a(42),a(43),a(44);var h=function(e){return r.a.createElement("div",{className:"card"},r.a.createElement("div",null,r.a.createElement("img",{alt:e.last,src:e.image})),r.a.createElement("div",null,e.title," ",e.first," ",e.last," "),r.a.createElement("div",null,e.gender),r.a.createElement("div",null,e.age),r.a.createElement("div",null,e.phone),r.a.createElement("div",null,e.email))},f=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={alphabetical:!0,ascending:!0,sortedEmployees:[],employees:[]},e.sortName=function(){var t=[];t=e.state.alphabetical?e.props.empList.sort((function(e,t){var a=e.name.last.toLowerCase(),n=t.name.last.toLowerCase();return a<n?-1:a>n?1:0})):e.props.empList.sort((function(e,t){var a=e.name.last.toLowerCase(),n=t.name.last.toLowerCase();return a>n?-1:a<n?1:0})),e.setState({alphabetical:!e.state.alphabetical,sortedEmployees:t})},e.sortAge=function(){var t=[];t=e.state.ascending?e.props.empList.sort((function(e,t){var a=e.dob.age,n=t.dob.age;return a<n?-1:a>n?1:0})):e.props.empList.sort((function(e,t){var a=e.dob.age,n=t.dob.age;return a>n?-1:a<n?1:0})),e.setState({ascending:!e.state.ascending,sortedEmployees:t})},e.filterGender=function(t){var a=e.state.sortedEmployees.filter((function(e){return e.gender.toLowerCase()===t}));e.setState({sortedEmployees:a},(function(){return console.log(e.state.sortedEmployees)}))},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.state.sortedEmployees.length<1&&this.setState({sortedEmployees:this.props.empList})}},{key:"componentDidUpdate",value:function(e){this.props.empList!==e.empList&&this.setState({sortedEmployees:this.props.empList})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{className:"header"},r.a.createElement("div",null,"Photo"),r.a.createElement("div",null,r.a.createElement("p",{onClick:this.sortName,className:"name"},"Name")," "),r.a.createElement("div",null,r.a.createElement("p",{onClick:function(){return e.filterGender("female","male")},className:"gender"},"Gender")," "),r.a.createElement("div",null,r.a.createElement("p",{onClick:this.sortAge,className:"age"},"Age")),r.a.createElement("div",null,"Phone"),r.a.createElement("div",null,"E-mail")),this.state.sortedEmployees.length>0&&this.state.sortedEmployees.map((function(e,t){return r.a.createElement(h,{image:e.picture.large,first:e.name.first,last:e.name.last,title:e.name.title,gender:e.gender,age:e.dob.age,phone:e.cell,email:e.email})})))}}]),a}(r.a.Component),E=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={searchTerm:"",filteredEmployees:[]},e.handleInputChange=function(t){e.setState({searchTerm:t.target.value});var a=t.target.value,n=e.props.employees.filter((function(e){return-1!==(e.name.title+e.name.first+e.name.last+e.gender+e.dob.age+e.email+e.cell).indexOf(a)}));e.setState({filteredEmployees:n})},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.state.filteredEmployees.length<1&&this.setState({filteredEmployees:this.props.employees})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("form",{className:"form"},r.a.createElement("input",{value:this.state.searchTerm,name:"searchTerm",onChange:function(t){return e.handleInputChange(t)},type:"text",placeholder:"Search"})),this.state.filteredEmployees.length>0&&r.a.createElement(f,{empList:this.state.filteredEmployees}))}}]),a}(r.a.Component),v=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={employees:[]},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;p.a.get("https://randomuser.me/api/?results=20&nat=Aus").then((function(t){e.setState({employees:t.data.results})}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(d,null),this.state.employees.length>0&&r.a.createElement(E,{employees:this.state.employees}))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.ba9b4818.chunk.js.map