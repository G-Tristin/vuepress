(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{188:function(e,t,r){"use strict";r.r(t);var n=r(0),a=Object(n.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"content"},[e._m(0),e._v(" "),r("p",[r("a",{attrs:{href:"https://yuchengkai.cn/docs/frontend/browser.html#event-loop",target:"_blank",rel:"noopener noreferrer"}},[e._v("前端面试"),r("OutboundLink")],1)]),e._v(" "),e._m(1),e._v(" "),r("p",[e._v("require()方法是commonJS所使用的引用模块的方法，一般用于服务器加载模块.")]),e._v(" "),r("p",[e._v("import 是ES6新增的浏览器加载模块的方法.")]),e._v(" "),e._m(2),e._v(" "),r("p",[e._v("require是运行时调用，所以require理论上可以运用在代码的任何地方")]),e._v(" "),r("p",[e._v("import是编译时调用，但是并不一定需要写在开头，import命令具有提升效果，会提升到整个模块的头部")]),e._v(" "),e._m(3),e._v(" "),r("p",[e._v("require是赋值过程，其实require的结果就是对象、数字、字符串、函数等，再把require的结果赋值给某个变量")]),e._v(" "),r("p",[e._v("import是解构过程，但是目前所有的引擎都还没有实现import，我们在node中使用babel支持ES6，也仅仅是将ES6转码为ES5再执行，import语法会被转码为require")]),e._v(" "),e._m(4),e._v(" "),e._m(5),e._v(" "),r("p",[e._v("import 形式的是es6中新增的语法，大部分浏览器不支持import ，所以要用babel转换成CommonJS规范形式的代码。\nCommonJS 是一种模块化规范，浏览器本身也没有require这种语法，是用原生js实现的功能。")]),e._v(" "),e._m(6),e._v(" "),r("p",[e._v("Node 中就是以CommonJS规范 为基础，可以直接使用require，但是客户端中却没有require 和 module语法。\nbabel 对 require是不进行处理的，一般的打包工具都会做好处理，例如fis、webpack。")]),e._v(" "),r("p",[e._v("简而言之就是 import 和 require都可以在浏览器和服务端使用，只要你使用了打包工具进行处理。")]),e._v(" "),e._m(7),e._v(" "),r("p",[e._v("使用require加载模块，实质是整体加载fs模块(即会加载fs的所有方法)，然后再读取我们使用到的部分方法。\n但是使用import加载模块，实质是从fs模块中加载指定的方法，其他方法不加载，这种加载方式称之为”编译时加载“，或者叫做\n静态加载，即ES6可以在编译时就完成加载，效率更高。")]),e._v(" "),e._m(8),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.cnblogs.com/tugenhua0707/p/9780621.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("文档"),r("OutboundLink")],1),e._v(" "),r("a",{attrs:{href:"https://www.jianshu.com/p/c8f9c61c2f20",target:"_blank",rel:"noopener noreferrer"}},[e._v("文档"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("在node中有全局变量process表示当前的node进程.precess.env包含着关于系统环境的信息.但是process.env当中并不存在NODE_ENV这个属性.\nNODE_ENV是由用户定义的变量,在webpack中它的用途是判断是生产环境还是开发环境的依据.")]),e._v(" "),e._m(9),e._v(" "),r("p",[e._v("可以直接在cmd环境配置即可,查看环境变量,添加环境变量,删除环境变量等操作")]),e._v(" "),r("p",[e._v("1.1在window下配置环境变量")]),e._v(" "),e._m(10),r("p",[e._v("1.2在mac下配置环境变量")]),e._v(" "),e._m(11),e._m(12),e._v(" "),e._m(13),e._v(" "),e._m(14),e._v(" "),r("p",[e._v("因此我们可以在webpack.config.js 中添加如下代码配置全局变量信息了，因为当webpack进行编译的时候会全局设置变量；如下代码：")]),e._v(" "),e._m(15),e._m(16),e._v(" "),r("p",[e._v("阻止事件冒泡的方式：")]),e._v(" "),r("p",[e._v("1.使用on添加的事件  event.cancelBubble = true;")]),e._v(" "),r("p",[e._v("2.使用addEventListener  event.stopPropagation();")]),e._v(" "),r("p",[e._v("阻止默认事件的方式：")]),e._v(" "),r("p",[e._v("1.使用on添加的事件 return false")]),e._v(" "),r("p",[e._v("2.使用addEventListener event.preventDefault()")]),e._v(" "),e._m(17),e._v(" "),r("p",[r("a",{attrs:{href:"https://zhangguixu.github.io/2016/12/02/jsonp/",target:"_blank",rel:"noopener noreferrer"}},[e._v("文档"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("eg：一个简单的jsop的实现")]),e._v(" "),e._m(18),r("p",[e._v("当我们调用JsonP的时候回发送请求，请求返回后会调用回调函数，那么为什么请求返回后会调用回调函数呢？")]),e._v(" "),r("p",[e._v("后端服务代码")]),e._v(" "),e._m(19),e._m(20),e._v(" "),r("p",[e._v("总所周知javascript是单线程的语言，因为它是服务于浏览器的，如果浏览器出现多线程，多个线程同时操作一个DOM就会出现错误")]),e._v(" "),r("p",[e._v("JS在执行过程中会产生执行环境，这些执行环境会按顺序被加入到执行栈中，如果遇到异步代码就会暂时挂起，将其放入到Task(有多种task)队列当中。\n一旦执行栈为空EventLoop就会从队列当中拿出需要执行的代码，放入到执行栈中执行")]),e._v(" "),r("p",[e._v("note:setTimeout()的最小延时时间是4毫秒 ，如果不足4毫秒就默认取4毫秒")]),e._v(" "),e._m(21),e._v(" "),r("p",[e._v("不同的任务源会被分配到不同的Task队列当中，任务源可以分为(mic)微任务和(mac)宏任务")]),e._v(" "),r("p",[e._v("在ES6的规范中微任务被称为jobs，宏任务被称为task")]),e._v(" "),e._m(22),e._v(" "),r("p",[e._v("mic: process.nextTick promise Object.observe(事件监听) MutationObserver")]),e._v(" "),r("p",[e._v("mac: script setTimeout setInterval setImmediate I/O UI rendering")]),e._v(" "),r("p",[e._v("很多人有个误区，认为微任务快于宏任务，其实是错误的。因为宏任务中包括了 script ，浏览器会先执行一个宏任务，接下来有异步代码的话就先执行微任务。")]),e._v(" "),r("p",[e._v("所以正确的一次 Event loop 顺序是这样的")]),e._v(" "),r("p",[e._v("1.执行同步代码，这属于宏任务\n2.执行栈为空，查询是否有微任务需要执行\n3.执行所有微任务\n4.必要的话渲染 UI\n5.然后开始下一轮 Event loop，执行宏任务中的异步代码")]),e._v(" "),e._m(23),e._v(" "),r("p",[e._v("渲染机制一般分为以下几个步骤")]),e._v(" "),r("p",[e._v("1.处理 HTML 并构建 DOM 树。")]),e._v(" "),r("p",[e._v("2.处理 CSS 构建 CSSOM 树。")]),e._v(" "),r("p",[e._v("3.将 DOM 与 CSSOM 合并成一个渲染树")]),e._v(" "),r("p",[e._v("4.根据渲染树来布局，计算每个节点的位置")]),e._v(" "),r("p",[e._v("5.调用 GPU 绘制，合成图层，显示在屏幕上。")]),e._v(" "),r("p",[e._v("在构建CSSOM树的时候回阻塞渲染，直至CSSOM树渲染完成。并且构建CSSOM树是非常消耗性能的过程，所以我们应该尽量保持CSS层级的扁平\n减少过度的层叠，越是具体的CSS选择器，执行速度越慢")]),e._v(" "),r("p",[e._v("当HMLT解析到script标签时会暂停构建DOM，完成会才会从暂停的地方重新开始，也就是说如果想加快首屏的加载速度，就不应该在首屏加载JS文件。并且CSS也会影响\nJS的执行，只有当解析完样式表才会执行JS，所以也可以认为这种情况下，CSS也会暂停构建DOM。")]),e._v(" "),e._m(24),e._v(" "),r("p",[e._v("一般来说，可以把普通文档流看成一个图层。特定的属性可以添加一个新的图层。不同图层渲染互不影响，所以对于某些复杂需要渲染的建议单独生成一个新的图层，提高性能。单页不能生层太多的图层。")]),e._v(" "),r("p",[e._v("通过以下属性可以生成新的图层")]),e._v(" "),e._m(25)])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"javascript"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#javascript","aria-hidden":"true"}},[this._v("#")]),this._v(" javascript")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"import-与-require的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#import-与-require的区别","aria-hidden":"true"}},[this._v("#")]),this._v(" import 与 require的区别")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"调用时间"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#调用时间","aria-hidden":"true"}},[this._v("#")]),this._v(" 调用时间")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"本质"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#本质","aria-hidden":"true"}},[this._v("#")]),this._v(" 本质")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"使用场景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用场景","aria-hidden":"true"}},[this._v("#")]),this._v(" 使用场景")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("import")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("require")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"import-比较-require-的优势"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#import-比较-require-的优势","aria-hidden":"true"}},[this._v("#")]),this._v(" import 比较 require 的优势")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"node-env"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#node-env","aria-hidden":"true"}},[this._v("#")]),this._v(" NODE_ENV")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("如何配置环境变量")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("#node中常用的到的环境变量是NODE_ENV，首先查看是否存在\nset NODE_ENV\n\n#如果不存在则添加环境变量\nset NODE_ENV=production\n\n#环境变量追加值 set 变量名=%变量名%;变量内容\nset path=%path%;C:\\web;C:\\Tools\n\n#某些时候需要删除环境变量\nset NODE_ENV=\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("#node中常用的到的环境变量是NODE_ENV，首先查看是否存在\necho $NODE_ENV\n\n#如果不存在则添加环境变量\nexport NODE_ENV=production\n\n#环境变量追加值\nexport path=$path:/home/download:/usr/local/\n\n#某些时候需要删除环境变量\nunset NODE_ENV\n\n#某些时候需要显示所有的环境变量\nenv\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("note:如果我们在命令行中设置环境变量后，比如设置 production 后，如下设置：\n"),t("code",[this._v("export NODE_ENV=production")]),this._v("，那么会在所有的项目下都是正式环境，当我们使用命令 npm install 后下载依赖包时，只会把 package.json中的dependencies依赖项下载下来，对于devDependencies中的依赖包是下载不下来的。因此我们需要使用上面的命令 unset NODE_ENV 删除刚刚设置的环境变量。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"理解webpack当中的插件defineplugin含义"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#理解webpack当中的插件defineplugin含义","aria-hidden":"true"}},[this._v("#")]),this._v(" 理解webpack当中的插件DefinePlugin含义")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("官网解释的是：DefinePlugin允许我们创建全局变量，可以在"),t("strong",[this._v("编译时")]),this._v("进行设置，因此我们可以使用该属性来设置全局变量来区分开发环境和正式环境。这就是 DefinePlugin的基本功能。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('module.exports = {\n  plugins: [\n    // 设置环境变量信息\n    new webpack.DefinePlugin({\n      \'typeof window\': JSON.stringify(\'object\'), //在DefinePlugin插件中typeof会执行并且结果和js一致\n      \'process.env\': {\n        NODE_ENV: JSON.stringify(process.env.NODE_ENV)\n        //该步骤用于获取node进程中的process.env.NODE_ENV 但是mode默认是没有这个属性的 如果我们不设置默认是undefined\n      }\n    })\n  ]\n}\nconsole.log(\'process.env.NODE_ENV 的值是(webpack.config.js)：\' + process.env.NODE_ENV)\n\n所以我们需要在package.json执行脚本的时候给node进程加上这个属性(NODE_ENV)\n\n"scripts": {\n  "build": "NODE_ENV=production webpack",\n  "serve": "NODE_ENV=development webpack"\n  //这种通过脚本设置NODE_ENV只会在serve或者build的时候给process.env设置NODE_ENV.进程结束就会删除环境变量的当前属性\n},\n')])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"阻止事件冒泡和事件捕获"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#阻止事件冒泡和事件捕获","aria-hidden":"true"}},[this._v("#")]),this._v(" 阻止事件冒泡和事件捕获")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"jsonp"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jsonp","aria-hidden":"true"}},[this._v("#")]),this._v(" jsonP")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("function JsonP(params){\n  const script = document.createElement('script');\n  const head = document.getElementByTagName('head')[0];\n  script.src= params.url + `?callback=${params.callback}`\n  head.appendChild(script)\n\n}\nfn(data){\n  console.log(data)\n}\nJsonP({url:'',callback:fn})\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("var http = require('http');\nvar urllib = require('url');\nvar port = 8080;\nvar data = {'data':'world'};\nhttp.createServer(function(req,res){\n    var params = urllib.parse(req.url,true);\n    if(params.query.callback){\n        console.log(params.query.callback);\n        //jsonp\n        var str = params.query.callback + '(' + JSON.stringify(data) + ')';\n        //核心在此处 把后调函数返回 并带入数据执行\n        res.end(str);\n    } else {\n        res.end();\n    }\n}).listen(port,function(){\n    console.log('jsonp server is on');\n});\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"eventloop"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#eventloop","aria-hidden":"true"}},[this._v("#")]),this._v(" EventLoop")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"mic与mac"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mic与mac","aria-hidden":"true"}},[this._v("#")]),this._v(" mic与mac")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"微任务与宏任务的分类"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#微任务与宏任务的分类","aria-hidden":"true"}},[this._v("#")]),this._v(" 微任务与宏任务的分类")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"渲染机制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#渲染机制","aria-hidden":"true"}},[this._v("#")]),this._v(" 渲染机制")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"图层"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#图层","aria-hidden":"true"}},[this._v("#")]),this._v(" 图层")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("p",[e._v("3D变换：translate3d translateZ")])]),e._v(" "),r("li",[r("p",[e._v("will-change")])]),e._v(" "),r("li",[r("p",[e._v("video iframe标签")])]),e._v(" "),r("li",[r("p",[e._v("通过动画实现的opacity动画转换")])]),e._v(" "),r("li",[r("p",[e._v("position:fixed")])])])}],!1,null,null,null);a.options.__file="javascript.md";t.default=a.exports}}]);