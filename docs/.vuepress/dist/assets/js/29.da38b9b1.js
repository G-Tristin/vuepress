(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{189:function(e,s,t){"use strict";t.r(s);var o=t(0),r=Object(o.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"commonjs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#commonjs","aria-hidden":"true"}},[e._v("#")]),e._v(" commonJs")]),e._v(" "),t("h2",{attrs:{id:"命令行模式和node交互模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#命令行模式和node交互模式","aria-hidden":"true"}},[e._v("#")]),e._v(" 命令行模式和Node交互模式")]),e._v(" "),t("p",[e._v("命令行模式下可以直接输入node xx.js文件就可以直接在node环境下运行js文件.而使用直接在命令行输入node将进入到Node交互环境.\n在node交互环境我们可以运行js代码并且会直接输出结果,如果我们通过命令行模式 即通过node xx.js来运行js代码,则必须通过在改js文件\n当中通过console.log(),把我们想要的结果打印出来.")]),e._v(" "),t("h2",{attrs:{id:"commonjs规范"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#commonjs规范","aria-hidden":"true"}},[e._v("#")]),e._v(" commonJs规范")]),e._v(" "),t("p",[e._v("当我们使用require引入一个模块时,如果没有明确的写明模块的路径")]),e._v(" "),t("p",[e._v("比如:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("const greet = require('greet')\n")])])]),t("p",[e._v("那么node会首先从内置模块当中找(即:node_modules)然后在全局的模块当中查找最后再从当前的路径当中查找")]),e._v(" "),t("h2",{attrs:{id:"commonjs与es的模块化的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#commonjs与es的模块化的区别","aria-hidden":"true"}},[e._v("#")]),e._v(" commonJs与ES的模块化的区别")]),e._v(" "),t("p",[e._v("1.commonJs是在代码的执行阶段加载的而ES6的模块化是在静态编译的时候就引入了模块接口。所以ES6不知此动态加载。因为动态加载意味则会在代码的执行阶段去引入模块这和ES6模块化的实现方式不同。")]),e._v(" "),t("p",[e._v("eg:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("import {a} from `${a}b.js`\na+b必定实在运行时加载输出结果 在编译时是无法得知结果的 所以ES6无法引入该模块\n")])])]),t("p",[e._v("2.commonJs是值的复制 而ES6的模块化是地址的引用")]),e._v(" "),t("h3",{attrs:{id:"commonjs规范简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#commonjs规范简介","aria-hidden":"true"}},[e._v("#")]),e._v(" CommonJS规范简介")]),e._v(" "),t("p",[e._v("在这个规范下，每个.js文件都是一个模块，它们内部各自使用的变量名和函数名都互不冲突，例如，hello.js和main.js都申明了全局变量var s = 'xxx'，但互不影响。")]),e._v(" "),t("p",[e._v("一个模块想要对外暴露变量（函数也是变量），可以用module.exports = variable;，一个模块要引用其他模块暴露的变量，用var ref = require('module_name');就拿到了引用模块的变量。")]),e._v(" "),t("h3",{attrs:{id:"exports与module-exports"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#exports与module-exports","aria-hidden":"true"}},[e._v("#")]),e._v(" exports与module.exports")]),e._v(" "),t("p",[e._v("module.exports可以如下方法理解：\nmodule是commonJs对外暴露的模块对象，而模块对外暴露的属性和方法则被赋值给了module下的exports属性。\n所以我们可以把我们想要对外输出的变量或者方法 直接赋值给module.exports")]),e._v(" "),t("p",[e._v("eg:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("如果我们将一个变量或者函数直接赋值给module.exports\n// a.js\nconst str = 'str'\nmodule.exports = str\n---\nconst string  = require('a.js')\nconsole.log(string) // str\n\n如果我们给module.exports设置一个属性\n// b.js\nmodule.exports = {\n  name:'a'\n}\n--\nconst name = require('b.js')\nconsole.log(name) // {name:'a'}\n")])])]),t("p",[e._v("而exports是一个辅助工具，它相当于是exports = module.exports。从而获取到了module.exports的地址引用")]),e._v(" "),t("p",[e._v("所以我们可以给exports赋予属性，相当于给module.exports添加属性和方法。但是不能给exports直接赋值，如果给它直接\n赋值，将会造成exports的应用地址与module.exports的地址断开，而CommonJs模块下暴露出去的模块对象的属性是module.export\n所以给exports直接赋值将会导致不再对外暴露出去属性和方法。")])])}],!1,null,null,null);s.default=r.exports}}]);