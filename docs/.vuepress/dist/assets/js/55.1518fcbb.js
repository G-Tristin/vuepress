(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{198:function(t,e,a){"use strict";a.r(e);var s=a(0),r=Object(s.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._m(3),t._v(" "),t._m(4),t._m(5),t._v(" "),t._m(6),a("p",[t._v("以上我们就使用了Vue实现了一个简单的demo,但是在这个地方也有我们需要注意的地方. 第一我们在这个demo当中并没有使用模板,那么Vue会自动的将id为app的DOM节点的outHTML视为VNode来使用.")]),t._v(" "),t._m(7),t._v(" "),a("p",[t._v("Vue.js使用了基于HTML的模板语法,如果我们足够熟悉DOM,并且喜欢JavaScript原生的力量页可以不适用模板,直接写"),a("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/render-function.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("渲染函数(render)"),a("OutboundLink")],1),t._v(",使用可选的JSX语法.")]),t._v(" "),t._m(8),t._v(" "),a("p",[t._v("数据渲染当中最常见的使用方法是使用双大括号的文本插值{{}},但是使用插值渲染的都将会是一个文本,如果想要输出一个真正的HTML,则需要使用v-html来实现")]),t._v(" "),t._m(9),t._v(" "),a("p",[t._v("双大括号语法不能直接使用在HTML的特性上,遇到这种情况应该使用v-bind指令")]),t._v(" "),t._m(10),t._v(" "),a("p",[t._v("在Vue的数据绑定当中可以使用JavaScript表达式,但是不允许使用语句或者流控制")]),t._v(" "),t._m(11),t._m(12),t._v(" "),a("p",[t._v("在项目中computed能够解决大部分的操作,但是当数据变化时执行异步操作或开销较大的操作时,就需要使用到watch")]),t._v(" "),a("p",[t._v("比如说 当我们使用一个input输入框,需要对输入的不同数据做出不同的响应,那么就要使用watch属性 详情见"),a("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/class-and-style.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("官网"),a("OutboundLink")],1)])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"vue基础"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vue基础","aria-hidden":"true"}},[this._v("#")]),this._v(" Vue基础")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("首先我们需要引入一个Vue的包")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('\x3c!-- 开发环境版本，包含了有帮助的命令行警告 --\x3e\n<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"><\/script>\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("在js文档当中创建一个Vue实例,并将它挂载到DOM节点上")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("var app = new Vue({\n  el:\"#app\",\n  data:{\n    message:'hello Vue!'\n  }\n})\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("在HTML当中声明挂载点")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('<div id="app">\n{{message}}\n</div>\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"模板语法注意事项"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#模板语法注意事项","aria-hidden":"true"}},[this._v("#")]),this._v(" 模板语法注意事项")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"插值"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#插值","aria-hidden":"true"}},[this._v("#")]),this._v(" 插值")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"特性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#特性","aria-hidden":"true"}},[this._v("#")]),this._v(" 特性")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"使用javascript表达式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用javascript表达式","aria-hidden":"true"}},[this._v("#")]),this._v(" 使用JavaScript表达式")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("\x3c!-- 这是语句，不是表达式 --\x3e\n{{ var a = 1 }}\n\n\x3c!-- 流控制也不会生效，请使用三元表达式 --\x3e\n{{ if (true) { return message } }}\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"watch和computed"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#watch和computed","aria-hidden":"true"}},[this._v("#")]),this._v(" watch和computed")])}],!1,null,null,null);e.default=r.exports}}]);