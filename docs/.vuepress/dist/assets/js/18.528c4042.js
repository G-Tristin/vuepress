(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{199:function(e,t,a){"use strict";a.r(t);var s=a(0),i=Object(s.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[e._m(0),e._v(" "),a("p",[e._v("webpack的基础知识")]),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),a("p",[e._v("在Webpack当中一切皆模块,Webpack能够根据模块间的依赖关系将它们组合打包,将浏览器不能直接运行的拓展语言(typeScript,Scss等),转换成浏览器能够直接运行的静态资源.")]),e._v(" "),e._m(4),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),a("p",[e._v("指定extension之后可以不用在require和import的事就加文件扩展名,会依次尝试添加扩展名进行匹配")]),e._v(" "),e._m(7),e._v(" "),a("p",[e._v("配置别名可以加快webpack查找模块的速度")]),e._v(" "),e._m(8),e._v(" "),e._m(9),e._v(" "),e._m(10),e._v(" "),a("p",[e._v("note:针对bable-loader处理慢的解决方法")]),e._v(" "),e._m(11),e._v(" "),e._m(12),e._v(" "),a("p",[e._v("url-loader 是文件预处理器，用来处理image文件。url-loader对未设置或者小于limit设置的图片进行转换，以base64的格式被img的src所使用；而对于大于limit byte的图片用file-loader进行解析.")]),e._v(" "),e._m(13),a("p",[e._v("limit设置的必要性：")]),e._v(" "),a("p",[e._v("对于比较小的图片，使用base64编码，可以减少一次图片的网络请求")]),e._v(" "),a("p",[e._v("比较大的图片,使用base64加大了html页面的大小，会加大下载页面的大小")]),e._v(" "),e._m(14),e._v(" "),e._m(15),e._m(16),e._v(" "),a("p",[e._v("这个插件是必须的!他的职责是将你定义过得其他规则复制并应用到.vue文件当中相应的语言块.\n例如:在你的module:{}当中的rules当中有一个匹配/.js$/的规则,那么该规则可以通过这个插件应用到.vue的文件当中")]),e._v(" "),e._m(17),e._v(" "),a("p",[e._v("需要增加如下配置:")]),e._v(" "),a("p",[e._v("resolve: {\nalias: {\n'vue$': 'vue/dist/vue.common.js'\n}\n},\n运行时构建不包含模板编译器，因此不支持template选项，只能用render选项，但即使使用运行时构建，在单文件组件中也依然可以写模板，因为单文件组件的模板会在构建时预编译为render函数。如果我们想使用template，我们不能直接在客户端使用npm install之后的vue。")]),e._v(" "),a("p",[e._v("note:")]),e._v(" "),a("p",[e._v("Vue当中scoped和CSS模块化的区别,vue当中只是增加了css样式选择优先级的权重并不是真正的模块化.")]),e._v(" "),e._m(18),e._v(" "),a("p",[a("a",{attrs:{href:"https://juejin.im/post/5ae9ae5e518825672f19b094",target:"_blank",rel:"noopener noreferrer"}},[e._v("文档"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("output是在webpack经过一系列处理并得出最总想要的代码后输出的结果")]),e._v(" "),e._m(19),e._m(20),e._v(" "),a("p",[e._v("output选项指定webpack输出的位置,其中比较重要的也是经常要用到的有path和publicPath.")]),e._v(" "),a("p",[e._v("output.path 只是指示输出的目录,对应一个绝对路径,例如在项目中通常会做如下的配置:")]),e._v(" "),e._m(21),a("p",[e._v("output.publicPath")]),e._v(" "),a("p",[e._v("官方文档的解释是:webpack提供一个非常有用的配置,该配置能够帮助你为项目中的所有资源指定一个基础路径,它被称为是公共路径")]),e._v(" "),a("p",[e._v("其实这里说的所有资源的基础路径是指项目中引用的css,js,img等资源时候的一个基础路径,这个基础路径要配合具体资源中指定的路径使用,\n所以其实打包后资源的访问路径可以用如下公式表所示:")]),e._v(" "),e._m(22),a("p",[e._v("例如:")]),e._v(" "),e._m(23),a("p",[e._v("这个最终静态资源访问路径在使用html-webpack-plugin打包后得到的html中可以看到.所以publicPath设置成相对路径后,相对路径是相对于build之后的index.html的,\n例如,如果设置publicPath:'./dist/',则打包后js的引用路径为./dist/main.js,但是这里有一个问题,相对路径在本地时可以,但是如果将静态资源托管到CDN上则访问路径\n显然不能使用相对路径,但是如果将publicPath设置成'/',则打包后访问路径为localhost:8080/dist/main.js,本地无法访问.")]),e._v(" "),a("p",[e._v("使用一下方式用来设置线上和线下的公共路径")]),e._v(" "),e._m(24),a("hr"),e._v(" "),e._m(25),e._m(26),e._v(" "),a("p",[e._v("在开发阶段,我们借用devServe启动一个开发服务器进行开发,这里也会配置一个publicPath(在devServe中),这里的publicPath路径下的打包文件可再浏览器当中访问.而静态资源\n仍然使用output.publicPath.")]),e._v(" "),a("p",[e._v("webpack-dev-serve打包的内容是放在内存当中的,这些打包后的资源对外的根目录就是publicPath,换句话说,这里我们设置的是打包后资源存放的位置")]),e._v(" "),a("p",[e._v("例如:")]),e._v(" "),e._m(27),a("p",[e._v("以上可以直接通过http://lcoalhost:8080/dist/main.js访问到\n通过访问 http://localhost:8080/webpack-dev-server 可以得到devServer启动后的资源访问路径，如图所示，点击静态资源可以看到静态资源的访问路径为 http://localhost:8080${publicPath}index.html")]),e._v(" "),e._m(28),e._v(" "),a("p",[e._v("该插件用于将css和js添加到html模板当中,其中template和filename会受到路径的影响.")]),e._v(" "),a("p",[e._v("template")]),e._v(" "),a("p",[e._v("作用:用于定义模板文件的路径")]),e._v(" "),a("p",[e._v("源码:")]),e._v(" "),e._m(29),a("p",[e._v("因此template只有定义在webpack的context下才会被识别，webpack context的默认值为process.cwd()，既运行 node 命令时所在的文件夹的绝对路径")]),e._v(" "),a("p",[e._v("filename")]),e._v(" "),a("p",[e._v("作用:输出的HTML文件名,默认为index.html,可以直接配置带有子目录")]),e._v(" "),a("p",[e._v("源码:")]),e._v(" "),e._m(30),a("p",[e._v("所以filename的路径是相对于output.path的，而在webpack-dev-server中，则是相对于webpack-dev-server配置的publicPath。")]),e._v(" "),a("p",[e._v("如果webpack-dev-server的publicPath和output.publicPath不一致，在使用html-webpack-plugin可能会导致引用静态资源失败，因为在使用该插件时,devServer中仍然以output.publicPath引用静态资源,和webpack-dev-server的提供的资源访问路径不一致，从而无法正常访问。")]),e._v(" "),a("p",[e._v("有一种情况除外，就是output.publicPath是相对路径，这时候可以访问本地资源")]),e._v(" "),a("p",[e._v("所以一般情况下都要保证devServer中的publicPath与output.publicPath保持一致")]),e._v(" "),e._m(31),e._v(" "),e._m(32),e._v(" "),a("p",[e._v("node中的路径:")]),e._v(" "),a("p",[e._v("__dirname:总是返回被执行的js所在文件夹的绝对路径")]),e._v(" "),a("p",[e._v("__filename:总是返回被执行的js的绝对路径")]),e._v(" "),a("p",[e._v("process.cwd():总是返回运行node命令时所在的文件夹的绝对路径")]),e._v(" "),e._m(33),e._v(" "),a("p",[e._v("Webpack的代码分割功能将代码分割成多个bundle,从而实现按需加载或并行加载.相对于大型的app来说,所有的代码放到一个单独的文件会导致效率低下,webpack提供拆分块的这种机制,\n尤其是在某些条件下才会有需求的代码块,这些代码块应该在需要的时候加载,不需要的时候不加载.")]),e._v(" "),e._m(34),e._v(" "),e._m(35),e._v(" "),e._m(36),e._v(" "),e._m(37),e._v(" "),e._m(38),e._v(" "),e._m(39),e._v(" "),e._m(40),e._v(" "),a("p",[e._v("1.安装> npm install webpack-dev-serve -d\n2.配置开发服务器参数")]),e._v(" "),e._m(41),e._m(42),e._v(" "),e._m(43),e._v(" "),e._m(44),e._m(45),e._v(" "),a("p",[e._v("如果我们在部署新版本时不更改资源的文件名，浏览器可能会认为它没有被更新，就会使用它的缓存版本。由于缓存的存在，当你需要获取新的代码时，就会显得很棘手。")]),e._v(" "),e._m(46),e._v(" "),a("p",[e._v("为什么要使用服务器中间件？")]),e._v(" "),a("p",[e._v("因为打包后的文件不能直接被node创建的服务器使用，必须使用webpack-dev-middleware包装后使用")]),e._v(" "),a("p",[e._v("serve.js")]),e._v(" "),e._m(47)])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"webpack"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#webpack","aria-hidden":"true"}},[this._v("#")]),this._v(" webpack")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"_1-核心概念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-核心概念","aria-hidden":"true"}},[this._v("#")]),this._v(" 1.核心概念")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[a("p",[e._v("Entry：入口，webpack构建文件的起点")])]),e._v(" "),a("li",[a("p",[e._v("Module：模块，在webpack当中一切解释模块，一个模块对应着一个文件。webpack会从配置的Entry开始递归找出所有的依赖模块。、")])]),e._v(" "),a("li",[a("p",[e._v("Chunk：代码块，一个代码块由多个模块构成，用于代码的合并与分割")])]),e._v(" "),a("li",[a("p",[e._v("Loader：模块转换器，用于把模块原内容按照需求转换成新内容")])]),e._v(" "),a("li",[a("p",[e._v("Plugin：扩展插件，在Webpack构建流程当中的特定时机注入扩展逻辑来改变构建结果或者添加你想要做的事情")])]),e._v(" "),a("li",[a("p",[e._v("Output：输出结果,在Webpack经过一系列处理并得出最终想要的代码后输出结果")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"_2-webpack的工作流程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-webpack的工作流程","aria-hidden":"true"}},[this._v("#")]),this._v(" 2.webpack的工作流程")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[t("p",[this._v("webpack启动后会从Entry里配置的Module开始递归解析Entry依赖的所有的Module.")])]),this._v(" "),t("li",[t("p",[this._v("每找到一个Module,就会根据配置的loader去找到对应的转换规则,对Module进行转换后,再解析出当前Moduel依赖的module.")])]),this._v(" "),t("li",[t("p",[this._v("这些模块会以Entry为单位进行分组,一个Entry和其所有依赖的Module被分到一个组也就是一个Chunk.")])]),this._v(" "),t("li",[t("p",[this._v("最后Webpack会把所有Chunk转换成文件输出.在整个流程中webpack会在恰当的时机执行Plugin里定义的逻辑.")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"_3-resolve-解析-设置配置模块如何解析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-resolve-解析-设置配置模块如何解析","aria-hidden":"true"}},[this._v("#")]),this._v(" 3.resolve(解析) : 设置配置模块如何解析")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("extensions")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("alias")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("em",[this._v("每当引入jquery模块的时候,它会直接引入jqueryPath,而不需要从node_modules文件夹中按模块的查找规则查找")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("em",[this._v("不需要webpack去解析jquery.js文件")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"_4-loader"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-loader","aria-hidden":"true"}},[this._v("#")]),this._v(" 4.loader")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("exclude/include:排除node_modules当中的文件")]),this._v(" "),t("li",[this._v("cacheDirectory:这会将转译的结果缓存到系统文件")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"url-loader"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#url-loader","aria-hidden":"true"}},[this._v("#")]),this._v(" url-loader")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("module: {\n    rules:[\n      {\n        test: /\\.(png|jpg|jpeg|gif|svg)$/,\n        use: [\n          {\n            loader: 'url-loader',\n            options: {\n              limit: 8192\n            }\n          }\n        ]\n      }\n    ]\n}\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"vue-loader"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vue-loader","aria-hidden":"true"}},[this._v("#")]),this._v(" vue-loader")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("const VueLoaderPlugin = require('vue-loader/lib/plugin')\nresolve: {\n  alias: {\n    'vue$': 'vue/dist/vue.common.js'\n  }\n},\nmodule: {\n    rules:[\n      {\n        test: /\\.vue$/,\n        loader: 'vue-loader'\n      }\n    ]\n},\nplugins: [\n  new VueLoaderPlugin(),\n]\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("VueLoaderPlugin()插件的重要性")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("当页面运行的时候出现如下报错的时候:\n[Vue warn]: You are using the runtime-only build of Vue where the template compiler is not available. Either pre-compile the templates into render functions, or use the compiler-included build.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"_5-output以及publicpath理解"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-output以及publicpath理解","aria-hidden":"true"}},[this._v("#")]),this._v(" 5.output以及publicPath理解")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("output: {\n    //输出文件的目标路径\n    path: path.resolve(__dirname, './dist'),\n    //加载资源的相对路径\n    publicPath: '',\n    //附加分块的文件名模板，按需加载chunk的输出文件\n    chunkFilename: '[name].[chunkhash].js',\n    //每个输出文件的名称，必填\n    filename: '[name].js'\n  }\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"解读path和publicpath的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解读path和publicpath的区别","aria-hidden":"true"}},[this._v("#")]),this._v(" 解读path和publicPath的区别")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("output:{\n  path:path.resolve(__dirname,'../dist'),\n}\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("静态资源最终访问路径 = output.publicPath + 资源loader或插件等配置的路径\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("output.publicPath = '/dist/'\n\n// image\noptions: {\n  name: 'img/[name].[ext]?[hash]'\n}\n\n// 最终图片的访问路径为\noutput.publicPath + 'img/[name].[ext]?[hash]' = '/dist/img/[name].[ext]?[hash]'\n\n// js output.filename\noutput: {\n  filename: '[name].js'\n}\n// 最终js的访问路径为\noutput.publicPath + '[name].js' = '/dist/[name].js'\n\n// extract-text-webpack-plugin css\nnew ExtractTextPlugin({\n  filename: 'style.[chunkhash].css'\n})\n// 最终css的访问路径为\noutput.publicPath + 'style.[chunkhash].css' = '/dist/style.[chunkhash].css'\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("publicPath: process.env.NODE_ENV === 'production'\n  ? config.build.assetsPublicPath\n  : config.dev.assetsPublicPath\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("一般情况下publicPath应该以'/'结尾,而其他loader或插件的配置不要以'/'开头\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"webpack-dev-server中的publicpath"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#webpack-dev-server中的publicpath","aria-hidden":"true"}},[this._v("#")]),this._v(" webpack-dev-server中的publicPath")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("// 假设devServer的publicPath为\nconst publicPath = '/dist/'\n// 则启动devServer后index.html的位置为\nconst htmlPath = `${pablicPath}index.html`\n// 包的位置\ncosnt mainJsPath = `${pablicPath}main.js`\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"html-webpack-plugin"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#html-webpack-plugin","aria-hidden":"true"}},[this._v("#")]),this._v(" html-webpack-plugin")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("this.options.filename = path.relative(compiler.options.output.path, filename);\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("this.options.filename = path.relative(compiler.options.output.path, filename);\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"路径的小知识"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#路径的小知识","aria-hidden":"true"}},[this._v("#")]),this._v(" 路径的小知识")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[t("p",[this._v("devServer.contentBase 告诉服务器从哪里提供内容.只有在你想要提供静态文件时才需要.")])]),this._v(" "),t("li",[t("p",[this._v("devServer.publicPaht 将用于确定应该从哪里提供bundle,并且此选项优先.")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"代码分割和代码拆分"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#代码分割和代码拆分","aria-hidden":"true"}},[this._v("#")]),this._v(" 代码分割和代码拆分")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"有3种常用的代码分割的方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#有3种常用的代码分割的方法","aria-hidden":"true"}},[this._v("#")]),this._v(" 有3种常用的代码分割的方法:")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[t("p",[this._v("入口点:在配置文件中通过entry手动指定分割")])]),this._v(" "),t("li",[t("p",[this._v("去重:使用CommonsChunkPlugin插件抽取重复的模块(webpack4.0不再使用 新版本使用SplitChunksPlugin)")])]),this._v(" "),t("li",[t("p",[this._v("动态加载:通过模块内的内联函数来实现")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"可用于分割代码的其他插件和加载器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#可用于分割代码的其他插件和加载器","aria-hidden":"true"}},[this._v("#")]),this._v(" 可用于分割代码的其他插件和加载器")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[t("p",[this._v("ExtractTextPlugin:可用于将CSS从主程序当中分割出来")])]),this._v(" "),t("li",[t("p",[this._v("bundle-loader:可用来分割代码并按需加载模块")])]),this._v(" "),t("li",[t("p",[this._v("promise-loader:和bundle-loader类似,但是使用promises")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"代码分割的好处"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#代码分割的好处","aria-hidden":"true"}},[this._v("#")]),this._v(" 代码分割的好处")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[t("p",[this._v("解决文件体积过大的问题")])]),this._v(" "),t("li",[t("p",[this._v("按需加载")])]),this._v(" "),t("li",[t("p",[this._v("并行加载,减少加载时间,提供性能")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"安装开发者服务器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装开发者服务器","aria-hidden":"true"}},[this._v("#")]),this._v(" 安装开发者服务器")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("devServe:{\n  contentBase:path.resolve(__dirname,'dist'),//配置开发服务器运行时的文件跟目录\n  host:'localhost',//开发服务器监听的主机地址\n  compress:true,//开发服务器是否启动gzip等压缩\n  port:8080//开发服务器的监听端口\n}\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"webpack可优化点总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#webpack可优化点总结","aria-hidden":"true"}},[this._v("#")]),this._v(" webpack可优化点总结")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[a("p",[e._v("缩小文件的搜索范围:include & exclude")])]),e._v(" "),a("li",[a("p",[e._v("压缩JS代码:UglifyjsWebpackPlugin")])]),e._v(" "),a("li",[a("p",[e._v("代码分离 提取公共代码")])]),e._v(" "),a("li",[a("p",[e._v("热模块替换:不刷新整个页面,只更新指定的模块")])]),e._v(" "),a("li",[a("p",[e._v("区分环境:开发环境和生产环境")])]),e._v(" "),a("li",[a("p",[e._v("HappyPack:HappyPack能让Webpack把任务分解给多个子进程去并发的执行，子进程处理完后再把结果发送给主进程.")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("plugins: [\n    new VueLoaderPlugin(),\n    new webpack.DefinePlugin({\n      PAGE_NAME: JSON.stringify(require('./package.json').name)\n    }),\n    new HappyPack({\n        id: 'babel',\n        cache: false,\n        loaders: [{\n            loader: 'babel-loader?cacheDirectory=true', \n        }]// 和rules里的配置相同\n    }),\n  ]\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"缓存"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#缓存","aria-hidden":"true"}},[this._v("#")]),this._v(" 缓存")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"webpack-dev-middleware"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#webpack-dev-middleware","aria-hidden":"true"}},[this._v("#")]),this._v(" webpack-dev-middleware")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("const express = require('express')\nconst webpack = require('webpack')\nconst webpackDevMiddleware = require('webpack-dev-middleware');\nconst config = require('./webpack.config.js') //应用一个webpack的配置文件 webpack配置文件最后返回值都是一个对象\nconst compiler = webpack(config)\nconst app = express()\napp.use(webpackDevMiddleware(compiler, {\n  publicPath: config.output.publicPath\n})) //这一步的主要当中的webpackDevMiddleware(compiler, {publicPath: config.output.publicPath}) 返回值 应该就是针对本地路径的返回打包后的文件\napp.listen(3000,function(){\n  console.log(开启服务监听)\n})\n")])])])}],!1,null,null,null);i.options.__file="webpack.md";t.default=i.exports}}]);