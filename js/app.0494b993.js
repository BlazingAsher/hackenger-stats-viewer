(function(t){function e(e){for(var a,c,i=e[0],o=e[1],l=e[2],f=0,h=[];f<i.length;f++)c=i[f],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&h.push(r[c][0]),r[c]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);d&&d(e);while(h.length)h.shift()();return n.push.apply(n,l||[]),s()}function s(){for(var t,e=0;e<n.length;e++){for(var s=n[e],a=!0,i=1;i<s.length;i++){var o=s[i];0!==r[o]&&(a=!1)}a&&(n.splice(e--,1),t=c(c.s=s[0]))}return t}var a={},r={app:0},n=[];function c(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,c),s.l=!0,s.exports}c.m=t,c.c=a,c.d=function(t,e,s){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(c.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(s,a,function(e){return t[e]}.bind(null,a));return s},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],o=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var d=o;n.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";var a=s("85ec"),r=s.n(a);r.a},4678:function(t,e,s){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(t){var e=n(t);return s(e)}function n(t){if(!s.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}r.keys=function(){return Object.keys(a)},r.resolve=n,t.exports=r,r.id="4678"},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a,r,n=s("2b0e"),c=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("div",{staticClass:"container"},[s("h1",{staticClass:"text-center"},[t._v("MasseyHacks VI Hackenger Stats")]),s("p",{staticClass:"text-center"},[t._v("Last Update: "+t._s(t._f("moment")(t.lastServerStatsUpdate,"dddd, MMMM Do [at] h:mm:ss a [UTC]Z"))+" "),0!==t.lastServerStatsUpdate?s("span",[t._v("("+t._s(t._f("duration")(t.lastServerStatsUpdate-Date.now(),"humanize",!0))+")")]):t._e(),t._v(" - Update Interval: "+t._s(Math.floor(t.statsUpdateFrequency/1e3))+" seconds")]),s("p",{staticClass:"text-center"},[s("button",{staticClass:"btn btn-primary",on:{click:t.toggleDisplay}},[t._v("Toggle Chart/Table")])]),s("p",{staticClass:"text-center"},[t._v("Namespaces: "),t._l(Object.keys(t.statsData),(function(e){return s("a",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll"}],key:e+"-n-b",staticClass:"black-link",attrs:{href:"#"+e+"-n-title"}},[t._v("("+t._s(e)+") ")])}))],2)]),t.chartsEnabled?s("div",{staticClass:"container"},[t.statsData?s("div",t._l(t.statsData,(function(e,a){return s("div",{key:a+"-n"},[s("h1",{staticClass:"mt-5",attrs:{id:a+"-n-title"}},[t._v("Namespace: "+t._s(a)+" "),s("small",[s("a",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll"}],staticClass:"black-link",attrs:{href:"#top"}},[t._v("(top)")])])]),s("hr"),s("h5",[t._v("Questions: "),t._l(Object.keys(e),(function(e){return s("a",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll"}],key:e+"-q-b",staticClass:"btn btn-primary mr-2",attrs:{href:"#"+a+"-n-"+e+"-q-title"}},[t._v(t._s(e))])}))],2),t._l(e,(function(e,r){return s("div",{key:r+"-q"},[s("h2",{staticClass:"mt-5",attrs:{id:a+"-n-"+r+"-q-title"}},[t._v("Question: "+t._s(r)+" "),s("small",[s("a",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll"}],staticClass:"black-link",attrs:{href:"#"+a+"-n-title"}},[t._v("(namespace top)")])])]),s("h5",[t._v("Events: "),t._l(Object.keys(e),(function(e){return s("a",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll"}],key:e+"-e-b",staticClass:"btn btn-primary mr-2",attrs:{href:"#"+a+"-n-"+r+"-q-"+e+"-e-title"}},[t._v(t._s(e))])}))],2),s("div",{staticClass:"row"},t._l(e,(function(e,n){return s("div",{key:a+"-n-"+r+"-q-"+n+"-e",staticClass:"col-sm-6"},[s("h2",{staticClass:"mt-5",attrs:{id:a+"-n-"+r+"-q-"+n+"-e-title"}},[t._v("Event: "+t._s(n)+" "),s("small",[s("a",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll"}],staticClass:"black-link",attrs:{href:"#"+a+"-n-"+r+"-q-title"}},[t._v("(question top)")])])]),s("p",[t._v("Last occurrence: "+t._s(t._f("moment")(e.lastTrigger,"dddd, MMMM Do [at] h:mm:ss a [UTC]Z")))]),s("p",[t._v("Number of occurrences: "+t._s(e.num))]),s("event-time-graph",{ref:"charts",refInFor:!0,attrs:{"chart-name":n,"chart-init-data":e.chartData,"chart-namespace":a,"chart-question":r,"chart-event":n,height:null,width:null}})],1)})),0)])}))],2)})),0):t._e()]):s("div",{staticClass:"container"},t._l(t.statsData,(function(e,a){return s("div",{key:a+"-n-t"},[s("h1",{staticClass:"mt-5",attrs:{id:a+"-n-title"}},[t._v("Namespace: "+t._s(a)+" "),s("small",[s("a",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll"}],staticClass:"black-link",attrs:{href:"#top"}},[t._v("(top)")])])]),s("table",{staticClass:"table table-bordered"},[t._m(0,!0),t._l(e,(function(e,a){return s("tbody",{key:a+"-q-t"},[s("tr",[s("td",[s("strong",[t._v("Question: "+t._s(a))])]),s("td",[t._v("-")]),s("td",[t._v("-")])]),t._l(e,(function(e,a){return s("tr",{key:a+"-e"},[s("td",[t._v(t._s(a))]),s("td",[t._v(t._s(e.num))]),s("td",[t._v(t._s(t._f("moment")(e.lastTrigger,"dddd, MMMM Do [at] h:mm:ss a [UTC]Z")))])])}))],2)}))],2)])})),0),s("div",{staticClass:"container-fluid",staticStyle:{"padding-top":"5em","padding-bottom":"1em"}},[s("hr"),s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-12"},[s("p",{staticClass:"text-center"},[t._v("MasseyHacks Hackenger Stats Viewer. Copyright © 2020 MasseyHacks."),s("br"),s("a",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll"}],staticClass:"black-link",attrs:{href:"#top"}},[t._v("Back to Top")]),t._v(" - "),s("a",{staticClass:"black-link",attrs:{href:"https://masseyhacks.ca"}},[t._v("Main Site")])])])])])])},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",[s("tr",[s("th",[t._v("Subject")]),s("th",[t._v("Number of Occurrences")]),s("th",[t._v("Last Occurrence")])])])}],o=(s("b64b"),s("b85c")),l=s("1fca"),d={extends:l["a"],name:"EventTimeGraph",props:{chartInitData:{type:Object,required:!0},chartName:{type:String,required:!0},chartNamespace:{type:String,required:!0},chartQuestion:{type:String,required:!0},chartEvent:{type:String,required:!0}},data:function(){return{options:{},chartData:this.chartInitData}},methods:{drawChart:function(){this.renderChart(this.chartData,this.options)},updateChart:function(t){this.chartData=t},getChartInfo:function(){return[this.chartNamespace,this.chartQuestion,this.chartEvent]}},mounted:function(){this.options={title:{display:!0,text:this.chartName+" Event Trigger History"},scales:{xAxes:[{type:"time",time:{displayFormats:{toSecond:"h:mm:ss a"}},scaleLabel:{display:!0,labelString:"Time (UTC -4)"}}],yAxes:[{ticks:{beginAtZero:!0},scaleLabel:{display:!0,labelString:"# Occurances"}}]},responsiveAnimationDuration:500,responsive:!0},this.drawChart()}},f=d,h=s("2877"),u=Object(h["a"])(f,a,r,!1,null,"1fc77742",null),b=u.exports,j=s("bc3a"),m=s.n(j),p={name:"App",components:{EventTimeGraph:b},data:function(){return{statsData:{},statsUpdateFrequency:0,lastServerStatsUpdate:0,fromLengthText:"",chartsEnabled:!0}},methods:{processStats:function(t){for(var e=0,s=Object.keys(t);e<s.length;e++)for(var a=s[e],r=0,n=Object.keys(t[a]);r<n.length;r++)for(var c=n[r],i=0,o=Object.keys(t[a][c]);i<o.length;i++){var l=o[i];t[a][c][l]["chartData"]={datasets:[{label:"Events",data:t[a][c][l]["chartData"],backgroundColor:"rgba(5, 25, 48, 0.6)",cubicInterpolationMode:"monotone",pointBackgroundColor:"rgb(5, 25, 48)"}]}}return t},fetchStats:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];m.a.get("https://api.hackenger.online/stats").then((function(s){if(t.statsData=t.processStats(s.data.stats.data),t.lastServerStatsUpdate=parseInt(s.data.stats.timestamp),!e&&t.chartsEnabled){var a,r=Object(o["a"])(t.$refs.charts);try{for(r.s();!(a=r.n()).done;){var n=a.value,c=n.getChartInfo();n.updateChart(t.statsData[c[0]][c[1]][c[2]]["chartData"]),n.drawChart()}}catch(i){r.e(i)}finally{r.f()}}})),window.setTimeout(this.fetchStats,this.statsUpdateFrequency+Math.floor(this.statsUpdateFrequency*(1/6)))},toggleDisplay:function(){this.chartsEnabled=!this.chartsEnabled}},mounted:function(){var t=this;m.a.get("https://api.hackenger.online/updateFrequency").then((function(e){t.statsUpdateFrequency=parseInt(e.data.frequency),t.fetchStats(),t.$moment.relativeTimeThreshold("ss",5)}))}},v=p,y=(s("034f"),Object(h["a"])(v,c,i,!1,null,null,null)),_=y.exports,g=s("5a58"),k=s.n(g);n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(_)}}).$mount("#app"),n["a"].use(k.a),n["a"].use(s("2ead"))},"85ec":function(t,e,s){}});
//# sourceMappingURL=app.0494b993.js.map