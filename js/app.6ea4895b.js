(function(e){function t(t){for(var s,r,o=t[0],b=t[1],j=t[2],u=0,l=[];u<o.length;u++)r=o[u],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&l.push(n[r][0]),n[r]=0;for(s in b)Object.prototype.hasOwnProperty.call(b,s)&&(e[s]=b[s]);d&&d(t);while(l.length)l.shift()();return c.push.apply(c,j||[]),a()}function a(){for(var e,t=0;t<c.length;t++){for(var a=c[t],s=!0,o=1;o<a.length;o++){var b=a[o];0!==n[b]&&(s=!1)}s&&(c.splice(t--,1),e=r(r.s=a[0]))}return e}var s={},n={app:0},c=[];function r(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=s,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)r.d(a,s,function(t){return e[t]}.bind(null,s));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/vue-covid-tracker/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],b=o.push.bind(o);o.push=t,o=o.slice();for(var j=0;j<o.length;j++)t(o[j]);var d=b;c.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},4678:function(e,t,a){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(e){var t=c(e);return a(t)}function c(e){if(!a.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}n.keys=function(){return Object.keys(s)},n.resolve=c,e.exports=n,n.id="4678"},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("7a23"),n={class:"container mx-auto"};function c(e,t,a,c,r,o){var b=Object(s["u"])("Header"),j=Object(s["u"])("router-view");return Object(s["p"])(),Object(s["d"])(s["a"],null,[Object(s["g"])(b),Object(s["g"])("div",n,[Object(s["g"])(j)])],64)}var r={class:"text-center bg-blue-800 text-white p-4 mb-10"},o=Object(s["g"])("div",{class:"text-3xl md:text-5xl font-bold mb-3"},[Object(s["g"])("i",{class:"fa fa-viruses"}),Object(s["f"])("Covid-19 Tracker ")],-1);function b(e,t,a,n,c,b){return Object(s["p"])(),Object(s["d"])("header",r,[o])}var j={name:"Header"};j.render=b;var d=j,u={components:{Header:d}};u.render=c;var l=u,i=a("6c02"),f={key:0},m={key:1,class:"flex flex-col align-center justify-center text-center"},p=Object(s["g"])("div",{class:"text-gray-500 text-3xl mt-10 mb-6"},"Featching Data",-1);function g(e,t,a,n,c,r){var o=Object(s["u"])("DataTitle"),b=Object(s["u"])("DataBoxes"),j=Object(s["u"])("CountrySelect");return Object(s["p"])(),Object(s["d"])(s["a"],null,[c.loading?(Object(s["p"])(),Object(s["d"])("main",m,[p,Object(s["g"])("img",{src:c.loadingImage,class:"w-24 m-auto",alt:""},null,8,["src"])])):(Object(s["p"])(),Object(s["d"])("main",f,[Object(s["g"])(o,{text:c.title,dataDate:c.dataDate},null,8,["text","dataDate"]),Object(s["g"])(b,{stats:c.stats},null,8,["stats"]),Object(s["g"])(j,{onGetCountry:r.getCountryData,countries:c.countries},null,8,["onGetCountry","countries"])])),c.stats.Country?(Object(s["p"])(),Object(s["d"])("button",{key:2,onClick:t[1]||(t[1]=function(){return r.clearCountryData&&r.clearCountryData.apply(r,arguments)}),class:"\n      bg-green-700\n      text-white\n      rounded\n      p-3\n      mt-10\n      focus:outline-none\n      hover:bg-green-600\n    "}," Clear Country ")):Object(s["e"])("",!0)],64)}var h=a("1da1"),O=(a("96cf"),a("d3b7"),{class:"text-center"}),v={class:"text-3xl font-bold"},y={class:"text-2xl mt-4 mb-10"};function x(e,t,a,n,c,r){return Object(s["p"])(),Object(s["d"])("div",O,[Object(s["g"])("h2",v,Object(s["w"])(a.text),1),Object(s["g"])("div",y,Object(s["w"])(r.timestamp),1)])}var w=a("c1df"),k=a.n(w),C={name:"DataTitle",props:["text","dataDate"],computed:{timestamp:function(){return k()(this.dataDate).format("MMMM Do YYYY, h:mm:ss a")}}};C.render=x;var D=C,z={class:"grid md:grid-cols-2 gap-4"},T={class:"shadow-md bg-blue-200 p-10 text-center rounded"},S=Object(s["g"])("h3",{class:"text-3xl text-blue-900 font-bold mb-4"},"Cases",-1),M={class:"text-2xl mb-4"},_=Object(s["g"])("span",{class:"font-bold"},"New: ",-1),P={class:"text-2xl mb-4"},G=Object(s["g"])("span",{class:"font-bold"},"Total: ",-1),N={class:"shadow-md bg-blue-300 p-10 text-center rounded"},R=Object(s["g"])("h3",{class:"text-3xl text-blue-900 font-bold mb-4"},"Deaths",-1),H={class:"text-2xl mb-4"},W=Object(s["g"])("span",{class:"font-bold"},"New: ",-1),B={class:"text-2xl mb-4"},I=Object(s["g"])("span",{class:"font-bold"},"Total: ",-1);function Y(e,t,a,n,c,r){return Object(s["p"])(),Object(s["d"])("div",z,[Object(s["g"])("div",T,[S,Object(s["g"])("div",M,[_,Object(s["f"])(" "+Object(s["w"])(r.numberWithCommas(a.stats.NewConfirmed)),1)]),Object(s["g"])("div",P,[G,Object(s["f"])(" "+Object(s["w"])(r.numberWithCommas(a.stats.TotalConfirmed)),1)])]),Object(s["g"])("div",N,[R,Object(s["g"])("div",H,[W,Object(s["f"])(" "+Object(s["w"])(r.numberWithCommas(a.stats.NewDeaths)),1)]),Object(s["g"])("div",B,[I,Object(s["f"])(" "+Object(s["w"])(r.numberWithCommas(a.stats.TotalDeaths)),1)])])])}a("ac1f"),a("5319"),a("25f0");var U={name:"DataBoxes",props:["stats"],methods:{numberWithCommas:function(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}}};U.render=Y;var q=U,E=Object(s["g"])("option",{value:"0"},"Select Country",-1);function F(e,t,a,n,c,r){return Object(s["A"])((Object(s["p"])(),Object(s["d"])("select",{onChange:t[1]||(t[1]=function(e){return r.onChange()}),"onUpdate:modelValue":t[2]||(t[2]=function(e){return c.selected=e}),class:"form-select mt-10 block w-full border p-3 rounded"},[E,(Object(s["p"])(!0),Object(s["d"])(s["a"],null,Object(s["t"])(a.countries,(function(e){return Object(s["p"])(),Object(s["d"])("option",{value:e.ID},Object(s["w"])(e.Country),9,["value"])})),256))],544)),[[s["y"],c.selected]])}a("7db0");var J={name:"CountrySelect",props:["countries"],data:function(){return{selected:0}},methods:{onChange:function(){var e=this,t=this.countries.find((function(t){return t.ID===e.selected}));console.log(t),this.$emit("get-country",t)}}};J.render=F;var A=J,L={name:"Home",components:{DataTitle:D,DataBoxes:q,CountrySelect:A},data:function(){return{loading:!0,title:"Global",dataDate:"",stats:{},countries:[],loadingImage:a("e8dd")}},methods:{featchCovidData:function(){return Object(h["a"])(regeneratorRuntime.mark((function e(){var t,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.covid19api.com/summary");case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})))()},getCountryData:function(e){this.stats=e,this.title=e.Country},clearCountryData:function(){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loading=!0,t.next=3,e.featchCovidData();case 3:a=t.sent,e.title="Global",e.stats=a.Global,e.loading=!1;case 7:case"end":return t.stop()}}),t)})))()}},created:function(){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.featchCovidData();case 2:a=t.sent,e.dataDate=a.Date,e.stats=a.Global,e.countries=a.Countries,e.loading=!1;case 7:case"end":return t.stop()}}),t)})))()}};L.render=g;var V=L,$=[{path:"./",name:"Home",component:V}],K=Object(i["a"])({history:Object(i["b"])("/vue-covid-tracker/"),routes:$}),Q=K;a("ba8c");Object(s["c"])(l).use(Q).mount("#app")},ba8c:function(e,t,a){},e8dd:function(e,t,a){e.exports=a.p+"img/hourglass.549947b6.gif"}});
//# sourceMappingURL=app.6ea4895b.js.map