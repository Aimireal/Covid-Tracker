(this["webpackJsonpcovid-tracker"]=this["webpackJsonpcovid-tracker"]||[]).push([[0],{53:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);var s=a(1),c=a.n(s),r=a(28),n=a.n(r),l=a(5),i=a(2),d=a(0),o=function(){return Object(d.jsxs)("div",{className:"mt-10 mb-5 text-center text-gray-100",children:[Object(d.jsxs)("p",{className:"text-sm font-semibold text-gray-100",children:["Developed by"," ",Object(d.jsx)("a",{href:"https://github.com/Aimireal",target:"_blank",rel:"noreferrer",className:"font-bold",children:"Dylan Hudson"}),", with data fetched from the"," ",Object(d.jsx)("a",{href:"https://coronavirus.data.gov.uk/details/developers-guide",target:"_blank",rel:"noreferrer",className:"font-bold",children:"GOV.UK Covid-19 API"})," "]}),Object(d.jsxs)("button",{className:"mt-5 bg-charcoal text-gray-100 px-5 py-2 rounded text-sm font-semibold hover:bg-gray-600",children:[Object(d.jsx)("i",{className:"fab fa-github mr-2"}),Object(d.jsx)("a",{href:"https://github.com/Aimireal/React-Covid-Tracker",target:"_blank",rel:"noreferrer",children:"View GitHub Repo"})]})]})},b=function(){return Object(d.jsxs)("div",{className:"bg-charcoal p-4 text-center font-source-sans text-gray-50",children:[Object(d.jsx)(l.b,{to:"/",children:Object(d.jsxs)("h3",{className:"text-3xl font-normal",children:[Object(d.jsx)("span",{className:"font-semibold",children:"COVID-Tracker"})," ",Object(d.jsx)("i",{className:"fas fa-viruses"})]})}),Object(d.jsx)("p",{className:"text-sm font-light mt-1",children:"All in one dashboard for statistics"})]})},h=a(6),j=a.n(h),u=a(9),x=a(3),m=a(10),p=a.n(m),f=a(11),O=a.n(f),y=a(12),v=a.n(y),g=function(e){var t=e.type,a=e.color,c=e.newTitle,r=e.totalTitle,n=Object(s.useState)(0),i=Object(x.a)(n,2),o=i[0],b=i[1],h=Object(s.useState)(0),m=Object(x.a)(h,2),f=m[0],y=m[1],g=Object(s.useState)("01/01/1970"),w=Object(x.a)(g,2),D=w[0],N=w[1],C=Object(s.useState)(!1),k=Object(x.a)(C,2),B=k[0],P=k[1],S=Object(s.useState)(null),Y=Object(x.a)(S,2),E=Y[0],T=Y[1],M=function(){var e=Object(u.a)(j.a.mark((function e(){var t,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,T(null),e.next=4,p.a.get('https://api.coronavirus.data.gov.uk/v1/data?filters=areaType=overview&latestBy=newCasesByPublishDate&structure={"date":"date", "newCasesByPublishDate":"newCasesByPublishDate","cumCasesByPublishDate":"cumCasesByPublishDate"}');case 4:t=e.sent,a=t.data.data,b(a[0].newCasesByPublishDate),y(a[0].cumCasesByPublishDate),N(a[0].date),P(!1),e.next=17;break;case 12:e.prev=12,e.t0=e.catch(0),P(!1),console.error(e.t0),T("Error fetching data. Reload to try again.");case 17:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}(),A=function(){var e=Object(u.a)(j.a.mark((function e(){var t,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return T(null),e.prev=1,e.next=4,p.a.get('https://api.coronavirus.data.gov.uk/v1/data?filters=areaType=overview&latestBy=newDeaths28DaysByPublishDate&structure={"date":"date","newDeaths28DaysByPublishDate":"newDeaths28DaysByPublishDate","cumDeaths28DaysByPublishDate":"cumDeaths28DaysByPublishDate" }');case 4:t=e.sent,a=t.data.data,b(a[0].newDeaths28DaysByPublishDate),y(a[0].cumDeaths28DaysByPublishDate),N(a[0].date),P(!1),e.next=17;break;case 12:e.prev=12,e.t0=e.catch(1),P(!1),console.error(e.t0),T("Error fetching data. Reload to try again.");case 17:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){P(!0),"cases"===t?M():A()}),[t]),Object(d.jsx)("div",{className:"w-full md:w-5/12   mb-5 md:mb-0 text-left font-semibold  rounded-md overflow-hidden bg-".concat(a," hover:bg-").concat(a,"Hover transform hover:scale-102 ease-in-out duration-200"),children:Object(d.jsx)(l.b,{to:"uk/".concat(t),children:Object(d.jsxs)("div",{className:"flex flex-col justify-between h-full p-5",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("h3",{className:"text-md mb-1",children:c}),Object(d.jsx)("h2",{className:"text-2xl mb-3 font-bold",children:B?"-":E?Object(d.jsx)("p",{className:"text-sm font-light italic",children:E}):v()(o).format("0,0")})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h3",{className:"text-md mb-1 text-right",children:r}),Object(d.jsx)("h2",{className:"text-2xl text-right font-bold",children:B?"-":E?Object(d.jsx)("p",{className:"text-sm font-light italic",children:E}):v()(f).format("0,0")})]}),Object(d.jsx)("p",{className:"text-xs italic mt-3 ",children:"Last updated ".concat(O()(D).format("DD/MM/YYYY"))})]})})})},w=(a.p,function(e){var t=e.type;return Object(d.jsxs)(s.Fragment,{children:[Object(d.jsx)("img",{src:"loading",alt:"Loading...",style:{width:"100px",margin:"auto",display:"block"}}),Object(d.jsx)("p",{className:"text-sm font-semibold text-center mt-3",children:"Fetching ".concat(t," data")})]})}),D=function(){var e=Object(s.useState)([]),t=Object(x.a)(e,2),a=t[0],c=t[1],r=Object(s.useState)(null),n=Object(x.a)(r,2),i=n[0],o=n[1],b=Object(s.useState)(!1),h=Object(x.a)(b,2),m=h[0],f=h[1],O=Object(s.useState)(""),y=Object(x.a)(O,2),v=y[0],g=y[1],D=function(){var e=Object(u.a)(j.a.mark((function e(){var t,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.get('https://api.coronavirus.data.gov.uk/v1/data?filters=areaType=utla&latestBy=newCasesByPublishDate&structure={"date":"date","newCases":"newCasesByPublishDate","newDeaths":"newDeaths28DaysByPublishDate","region":"areaName","regionId":"areaCode"}');case 3:t=e.sent,a=t.data.data,f(!1),c(a),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),f(!1),o("Error: Fetching data failed");case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){D()}),[]),m?Object(d.jsx)(w,{type:"regional"}):i?Object(d.jsx)("p",{className:"text-md font-light italic",children:i}):Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{className:"mb-5",children:[Object(d.jsx)("span",{className:"z-10 leading-snug font-normal text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3",children:Object(d.jsx)("i",{className:"fas fa-search"})}),Object(d.jsxs)("div",{className:"flex",children:[Object(d.jsx)("input",{type:"text",placeholder:"Search regions",value:v||"",onChange:function(e){return g(e.target.value)},className:"px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pl-10"}),Object(d.jsx)("button",{className:"bg-charcoal hover:bg-gray-800 ease-in-out duration-200 ml-1 w-10 rounded",onClick:function(e){return g("")},children:Object(d.jsx)("i",{className:"fas fa-undo text-gray-50"})})]})]}),Object(d.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 md:gap-x-12 md:gap-y-4 mb-5",children:m?null:a.filter((function(e){return e.region.toLowerCase().includes(v.toLowerCase())})).map((function(e){return Object(d.jsx)(l.b,{to:"region/".concat(e.regionId),children:Object(d.jsx)("div",{className:"w-full  p-5 mb-5 md:mb-0 text-left font-semibold  rounded-md bg-pacific hover:bg-pacificHover ease-in-out duration-100 text-gray-50",children:Object(d.jsxs)("div",{className:"flex flex-col",children:[Object(d.jsx)("p",{className:"text-md font-normal",children:e.region}),Object(d.jsx)("p",{className:"text-xl",children:"".concat(null==e.newCases?"0":e.newCases," new cases")}),Object(d.jsx)("p",{className:"text-xl",children:"".concat(null==e.newDeaths?"0":e.newDeaths," new deaths")})]})})},e.regionId)}))})]})},N={color:"white"},C=function(){return Object(d.jsxs)("div",{className:"mx-auto font-source-sans",children:[Object(d.jsx)("section",{id:"uk-data",children:Object(d.jsxs)("div",{className:"px-10 pb-10 mx-auto",style:{maxWidth:"1000px"},children:[Object(d.jsx)("h1",{className:"pt-5 mb-5 text-2x1",style:N,children:"UK Summary"}),Object(d.jsxs)("div",{className:"flex-non md:flex justify-between w-full",children:[Object(d.jsx)(g,{type:"cases",newTitle:"New cases over 24 hour period",totalTitle:"Total cases",color:"white"}),Object(d.jsx)(g,{type:"deaths",newTitle:"New deaths within 28 days of a positive test",totalTitle:"Total deaths",color:"white"})]})]})}),Object(d.jsx)("section",{id:"regional-data",children:Object(d.jsx)("div",{className:"px-10 pb-10 mx-auto",style:{maxWidth:"1000px"},children:Object(d.jsxs)("h1",{className:"pt-5 mb-5 text-2x1",style:N,children:["Regional Data (24 Hours)",Object(d.jsx)(D,{})]})})})]})},k=a(18),B=a(13),P=function(){var e=Object(s.useState)(!1),t=Object(x.a)(e,2),a=t[0],c=t[1],r=Object(s.useState)(null),n=Object(x.a)(r,2),i=n[0],o=n[1],b=Object(s.useState)({}),h=Object(x.a)(b,2),m=h[0],f=h[1],y=Object(s.useState)([]),g=Object(x.a)(y,2),D=g[0],N=g[1],C=function(){var e=Object(u.a)(j.a.mark((function e(){var t,a,s,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(!0),o(null),e.prev=2,t=[],a=[],e.next=7,p.a.get('https://api.coronavirus.data.gov.uk/v1/data?filters=areaType=overview&structure={"date":"date", "newCasesByPublishDate":"newCasesByPublishDate","cumCasesByPublishDate":"cumCasesByPublishDate"}');case 7:s=e.sent,r=s.data.data,N(r.slice(0,90)),r.slice(0,90).reverse().forEach((function(e){t.push(O()(e.date).format("DD/MM/YYYY")),a.push(e.newCasesByPublishDate)})),f({labels:t,datasets:[{label:"New cases within last 24 hours",data:a,backgroundColor:"#292929"}]}),Object(k.a)("setLoading"),c=!1,e.next=21;break;case 16:e.prev=16,e.t0=e.catch(2),c(!1),console.error(e.t0),o("Error: Fetching cases data failed");case 21:case"end":return e.stop()}}),e,null,[[2,16]])})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){C()}),[]),Object(d.jsxs)("div",{className:"px-2 sm:px-10 text-center md:text-left mx-auto",style:{maxWidth:"1000px"},children:[Object(d.jsxs)("div",{className:"flex  justify-between mt-3",children:[Object(d.jsxs)(l.b,{to:"/",className:" bg-lavender1 hover:bg-gray-400 ease-in-out duration-100 font-semibold text-lg px-3 py-1 rounded",children:[Object(d.jsx)("i",{class:"fas fa-arrow-alt-circle-left"})," Dashboard"]}),Object(d.jsxs)(l.b,{to:"/uk/deaths",className:"  bg-goldenrod hover:bg-goldenrodHover ease-in-out duration-100 font-semibold text-lg px-3 py-1 rounded",children:["UK Deaths ",Object(d.jsx)("i",{class:"fas fa-arrow-alt-circle-right"})]})]}),Object(d.jsxs)("h1",{className:"pt-5 mb-5 text-xl sm:text-2xl",children:["UK cases (past 90 days)"," "]}),a?Object(d.jsx)(w,{type:"case"}):i?Object(d.jsx)("p",{className:"text-md font-light italic",children:i}):Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:"chart",children:Object(d.jsx)(B.a,{data:m,options:{scales:{yAxes:[{ticks:{beginAtZero:!0,stepSize:1e4}}]}}})}),Object(d.jsx)("p",{className:"bg-lavender1 rounded p-3 text-center text-sm sm:text-base mt-5",children:"Number of people with at least one positive COVID-19 test result (either lab-reported or lateral flow device), by specimen date. Individuals tested positive more than once are only counted once, on the date of their first positive test."}),Object(d.jsx)("div",{id:"table-wrapper",className:"my-5",children:Object(d.jsxs)("table",{class:"table-fixed rounded w-full shadow-sm text-center md:text-left ",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{className:"bg-charcoal rounded-tl text-gray-50  px-8 py-3 w-1/2",children:"Date"}),Object(d.jsx)("th",{className:"bg-charcoal rounded-tr text-gray-50  px-8 py-3 w-1/2",children:"Cases"})]})}),Object(d.jsx)("tbody",{children:D.map((function(e){return Object(d.jsxs)("tr",{className:"even:bg-lavender1 odd:bg-lavender2 border-b border-lavender2",children:[Object(d.jsx)("td",{className:" px-8 py-2",children:O()(e.date).format("DD/MM/YYYY")}),Object(d.jsx)("td",{className:" px-8 py-2",children:v()(e.newCasesByPublishDate).format("0,0")})]})}))})]})})]})]})},S=function(){var e=Object(s.useState)(!1),t=Object(x.a)(e,2),a=t[0],c=t[1],r=Object(s.useState)(null),n=Object(x.a)(r,2),i=n[0],o=n[1],b=Object(s.useState)({}),h=Object(x.a)(b,2),m=h[0],f=h[1],y=Object(s.useState)([]),g=Object(x.a)(y,2),D=g[0],N=g[1],C=function(){var e=Object(u.a)(j.a.mark((function e(){var t,a,s,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(!0),o(null),e.prev=2,t=[],a=[],e.next=7,p.a.get('https://api.coronavirus.data.gov.uk/v1/data?filters=areaType=overview&structure={"date":"date", "newDeaths28DaysByPublishDate":"newDeaths28DaysByPublishDate","cumDeaths28DaysByPublishDate":"cumDeaths28DaysByPublishDate"}');case 7:s=e.sent,r=s.data.data,N(r.slice(0,90)),r.slice(0,90).reverse().forEach((function(e){t.push(O()(e.date).format("DD/MM/YYYY")),a.push(e.newDeaths28DaysByPublishDate)})),f({labels:t,datasets:[{label:"New deaths within 28 days of positive test",data:a,backgroundColor:"#292929"}]}),Object(k.a)("setLoading"),c=!1,e.next=21;break;case 16:e.prev=16,e.t0=e.catch(2),c(!1),console.error(e.t0),o("Error: Fetching deaths data failed");case 21:case"end":return e.stop()}}),e,null,[[2,16]])})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){C()}),[]),Object(d.jsxs)("div",{className:"px-2 sm:px-10 text-center md:text-left mx-auto",style:{maxWidth:"1000px"},children:[Object(d.jsxs)("div",{className:"flex  justify-between mt-3",children:[Object(d.jsxs)(l.b,{to:"/",className:" bg-lavender1 hover:bg-gray-400 ease-in-out duration-100 font-semibold text-lg px-3 py-1 rounded",children:[Object(d.jsx)("i",{class:"fas fa-arrow-alt-circle-left"})," Dashboard"]}),Object(d.jsxs)(l.b,{to:"/uk/cases",className:"  bg-pacific hover:bg-pacificHover ease-in-out duration-100 font-semibold text-lg px-3 py-1 rounded text-gray-50",children:["UK Cases ",Object(d.jsx)("i",{class:"fas fa-arrow-alt-circle-right"})]})]}),Object(d.jsxs)("h1",{className:"pt-5 mb-5 text-xl sm:text-2xl",children:["UK deaths (past 90 days)"," "]}),a?Object(d.jsx)(w,{type:"death"}):i?Object(d.jsx)("p",{className:"text-md font-light italic",children:i}):Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:"chart",children:Object(d.jsx)(B.a,{data:m,options:{scales:{yAxes:[{ticks:{beginAtZero:!0,stepSize:1e4}}]}}})}),Object(d.jsx)("p",{className:"bg-lavender1 rounded p-3 text-center text-sm sm:text-base mt-5",children:"Number of deaths of people who had had a positive test result for COVID-19 and died within 28 days of the first positive test."}),Object(d.jsx)("div",{id:"table-wrapper",className:"my-5",children:Object(d.jsxs)("table",{class:"table-fixed rounded w-full shadow-sm text-center md:text-left ",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{className:"bg-charcoal rounded-tl text-gray-50  px-8 py-3 w-1/2",children:"Date"}),Object(d.jsx)("th",{className:"bg-charcoal rounded-tr text-gray-50  px-8 py-3 w-1/2",children:"Deaths"})]})}),Object(d.jsx)("tbody",{children:D.map((function(e){return Object(d.jsxs)("tr",{className:"even:bg-lavender1 odd:bg-lavender2 border-b border-lavender2",children:[Object(d.jsx)("td",{className:" px-8 py-2",children:O()(e.date).format("DD/MM/YYYY")}),Object(d.jsx)("td",{className:" px-8 py-2",children:v()(e.newDeaths28DaysByPublishDate).format("0,0")})]})}))})]})})]})]})},Y=function(e){var t=e.match,a=Object(s.useState)(!1),c=Object(x.a)(a,2),r=c[0],n=c[1],i=Object(s.useState)(null),o=Object(x.a)(i,2),b=o[0],h=o[1],m=Object(s.useState)({}),f=Object(x.a)(m,2),y=f[0],g=f[1],D=Object(s.useState)({}),N=Object(x.a)(D,2),C=N[0],k=N[1],P=Object(s.useState)([]),S=Object(x.a)(P,2),Y=S[0],E=S[1],T=Object(s.useState)(""),M=Object(x.a)(T,2),A=M[0],I=M[1],F=t.params.id,H=function(){var e=Object(u.a)(j.a.mark((function e(){var t,a,s,c,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(!0),h(null),e.prev=2,t=[],a=[],s=[],e.next=8,p.a.get("https://api.coronavirus.data.gov.uk/v1/data?filters=areaType=utla;areaCode=".concat(F,'&structure={"date":"date","newCasesByPublishDate":"newCasesByPublishDate","newDeaths28DaysByPublishDate":"newDeaths28DaysByPublishDate","region":"areaName","regionId":"areaCode"}'));case 8:c=e.sent,(r=c.data.data)?(I(r[0].region),E(r.slice(0,90)),r.slice(0,90).reverse().forEach((function(e){t.push(O()(e.date).format("DD/MM/YYYY")),a.push(e.newCasesByPublishDate),s.push(e.newDeaths28DaysByPublishDate)})),g({labels:t,datasets:[{label:"New cases in the last 24 hours",data:a,backgroundColor:"#00A9C0"}]}),k({labels:t,datasets:[{label:"New deaths in the last 28 days",data:s,backgroundColor:"#D67B49"}]}),n(!1)):(n(!1),h("Error: Failed to fetch regional data")),e.next=18;break;case 13:e.prev=13,e.t0=e.catch(2),n(!1),console.error(e.t0),h("Error: Failed to fetch regional data");case 18:case"end":return e.stop()}}),e,null,[[2,13]])})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){H()})),Object(d.jsxs)("div",{className:"px-2 sm:px-10 text-center md:text-left mx-auto",style:{maxWidth:"1000px"},children:[Object(d.jsx)("div",{className:"flex  justify-between mt-3",children:Object(d.jsxs)(l.b,{to:"/",className:" bg-lavender1 hover:bg-gray-400 ease-in-out duration-100 font-semibold text-lg px-3 py-1 rounded",children:[Object(d.jsx)("i",{className:"fas fa-arrow-alt-circle-left"})," Dashboard"]})}),Object(d.jsxs)("h1",{className:"pt-5  text-xl sm:text-2xl",children:["Regional data (past 90 days)"," "]}),r?Object(d.jsx)(w,{type:"regional"}):b?Object(d.jsx)("p",{className:"mt-5 text-md font-light italic",children:b}):Object(d.jsxs)("div",{children:[Object(d.jsxs)("h1",{className:"pt-5 mb-5 text-xl sm:text-xl font-semibold italic",children:["".concat(A)," "]}),Object(d.jsxs)("section",{id:"cases",className:"mb-10",children:[Object(d.jsx)("h2",{className:"text-lg underline ",children:"Cases"}),Object(d.jsx)("div",{className:"chart",children:Object(d.jsx)(B.a,{data:y,options:{scales:{yAxes:[{ticks:{beginAtZero:!0,stepSize:1e3}}]}}})}),Object(d.jsx)("p",{className:"bg-lavender1 rounded p-3 text-center text-sm sm:text-base mt-5",children:"Number of people with at least one positive COVID-19 test result (either lab-reported or lateral flow device), by specimen date. Individuals tested positive more than once are only counted once, on the date of their first positive test."})]}),Object(d.jsxs)("section",{id:"deaths",className:" mb-10",children:[Object(d.jsx)("h2",{className:"text-lg underline mt-8 ",children:"Deaths"}),Object(d.jsx)("div",{className:"chart",children:Object(d.jsx)(B.a,{data:C,options:{scales:{yAxes:[{ticks:{beginAtZero:!0,stepSize:50}}]}}})}),Object(d.jsx)("p",{className:"bg-lavender1 rounded p-3 text-center text-sm sm:text-base mt-5",children:"Number of deaths of people who had had a positive test result for COVID-19 and died within 28 days of the first positive test."})]}),Object(d.jsx)("section",{id:"table",children:Object(d.jsxs)("div",{id:"table-wrapper",className:"mt-10 mb-5",children:[Object(d.jsx)("h2",{className:"text-lg underline mt-8 mb-4 ",children:"Daily summary"}),Object(d.jsxs)("table",{className:"table-fixed rounded w-full shadow-sm text-center md:text-left ",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{className:"bg-charcoal rounded-tl text-gray-50  px-8 py-3 w-1/2",children:"Date"}),Object(d.jsx)("th",{className:"bg-charcoal  text-gray-50  px-8 py-3 w-1/2",children:"Cases"}),Object(d.jsx)("th",{className:"bg-charcoal rounded-tr text-gray-50  px-8 py-3 w-1/2",children:"Deaths"})]})}),Object(d.jsx)("tbody",{children:Y.map((function(e){return Object(d.jsxs)("tr",{className:"even:bg-lavender1 odd:bg-lavender2 border-b border-lavender2",children:[Object(d.jsx)("td",{className:" px-8 py-2",children:O()(e.date).format("DD/MM/YYYY")}),Object(d.jsx)("td",{className:" px-8 py-2",children:v()(e.newCasesByPublishDate).format("0,0")}),Object(d.jsx)("td",{className:" px-8 py-2",children:v()(e.newDeaths28DaysByPublishDate).format("0,0")})]},e.date)}))})]})]})})]})]})};var E=function(){return Object(d.jsxs)("div",{className:"font-source-sans",children:[Object(d.jsx)(b,{}),Object(d.jsxs)(i.c,{children:[Object(d.jsx)(i.a,{path:"/",component:C}),Object(d.jsx)(i.a,{path:"/uk/cases",component:P,exact:!0}),Object(d.jsx)(i.a,{path:"/uk/deaths",component:S,exact:!0}),Object(d.jsx)(i.a,{path:"/region/:id",component:Y})]}),Object(d.jsx)(o,{})]})};a(53);n.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(l.a,{children:Object(d.jsx)(E,{})})}),document.getElementById("root"))}},[[54,1,2]]]);
//# sourceMappingURL=main.8e100511.chunk.js.map