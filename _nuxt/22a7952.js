(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{408:function(o,t,n){var content=n(414);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[o.i,content,""]]),content.locals&&(o.exports=content.locals);(0,n(16).default)("0b37a8a6",content,!0,{sourceMap:!1})},413:function(o,t,n){"use strict";n(408)},414:function(o,t,n){var e=n(15)(!1);e.push([o.i,".scroll-arrow[data-v-419f46aa]{-webkit-animation:blink-data-v-419f46aa 3s linear infinite;animation:blink-data-v-419f46aa 3s linear infinite}@-webkit-keyframes blink-data-v-419f46aa{50%{opacity:.5;scale:90%}}@keyframes blink-data-v-419f46aa{50%{opacity:.5;scale:90%}}",""]),o.exports=e},436:function(o,t,n){"use strict";n.r(t);var e={name:"ScrollArrow",props:{bottom:{type:Boolean,default:!1}},methods:{handleScroll:function(){this.$props.bottom?window.scrollTo({top:0,behavior:"smooth"}):window.scrollTo({top:window.scrollY+window.innerHeight,behavior:"smooth"})}}},l=(n(413),n(50)),r=n(43),c=n.n(r),d=n(200),f=n(176),component=Object(l.a)(e,(function(){var o=this,t=o.$createElement,n=o._self._c||t;return n("v-btn",{attrs:{text:"",bottom:"",fixed:"",color:"grey"},on:{click:o.handleScroll}},[n("v-icon",{staticClass:"scroll-arrow mt-12"},[o._v(o._s(o.bottom?"mdi-chevron-double-up":"mdi-chevron-double-down"))])],1)}),[],!1,null,"419f46aa",null);t.default=component.exports;c()(component,{VBtn:d.a,VIcon:f.a})}}]);