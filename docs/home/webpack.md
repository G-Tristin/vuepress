# webpack

 webpack的基础知识

## 1.核心概念

- Entry：入口，webpack构建文件的起点

- Module：模块，在webpack当中一切解释模块，一个模块对应着一个文件。webpack会从配置的Entry开始递归找出所有的依赖模块。

- Chunk：代码块，一个代码块由多个模块构成，用于代码的合并与分割。

- Loader：模块转换器，用于把模块原内容按照需求转换成新内容。

- Plugin：扩展插件，在Webpack构建流程当中的特定时机注入扩展逻辑来改变构建结果或者添加你想要做的事情。

- Output：输出结果,在Webpack经过一系列处理并得出最终想要的代码后输出结果。

## 2.webpack的工作流程

在Webpack当中一切皆模块,Webpack能够根据模块间的依赖关系将它们组合打包,将浏览器不能直接运行的拓展语言(typeScript,Scss等),转换成浏览器能够直接运行的静态资源。

- webpack启动后会从Entry里配置的Module开始递归解析Entry依赖的所有的Module。

- 每找到一个Module,就会根据配置的loader去找到对应的转换规则,对Module进行转换后,再解析出当前Moduel依赖的Moduel。

- 这些模块会以Entry为单位进行分组,一个Entry和其所有依赖的Module被分到一个组也就是一个Chunk。

- 最后Webpack会把所有Chunk转换成文件输出.在整个流程中webpack会在恰当的时机执行Plugin里定义的逻辑


## 3.resolve(解析) : 设置配置模块如何解析

- extensions

指定extension之后可以不用在require和import的时候添加文件扩展名,webpack会依次尝试添加扩展名进行匹配。

- alias

配置别名可以加快webpack查找模块的速度。

## 4.loader

loader的作用:用于将一些浏览器无法识别的预处理语言或者是最新的EcmaScript语言转换成浏览器可以识别的代码。

note:针对bable-loader处理慢的解决方法

- exclude/include:排除node_modules当中的文件
- cacheDirectory:这会将转译的结果缓存到系统文件

### url-loader

url-loader 是文件预处理器，用来处理image文件。url-loader对未设置或者小于limit设置的图片进行转换，以base64的格式被img的src所使用；而对于大于limit byte的图片用file-loader进行解析.

```
module: {
    rules:[
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      }
    ]
}
```

limit设置的必要性：

对于比较小的图片，使用base64编码，可以减少一次图片的网络请求

比较大的图片,使用base64加大了html页面的大小，会加大下载页面的大小

### vue-loader

```
const VueLoaderPlugin = require('vue-loader/lib/plugin')
resolve: {
  alias: {
    'vue$': 'vue/dist/vue.common.js'
  }
},
module: {
    rules:[
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
},
plugins: [
  new VueLoaderPlugin(),
]
```

- VueLoaderPlugin()插件的重要性

这个插件是必须的！他的职责是将你定义过得其他规则复制并应用到`.vue`文件当中相应的语言块。例如:在你的`module:{}`当中的`rules`当中有一个匹配`/\.js$/`的规则,那么该规则可以通过这个插件应用到`.vue`的文件当中。

- 当页面运行的时候出现如下报错的时候:
 [Vue warn]: You are using the runtime-only build of Vue where the template compiler is not available. Either pre-compile the templates into render functions, or use the compiler-included build.

需要增加如下配置:
```
resolve: {
  alias: {
    'vue$': 'vue/dist/vue.common.js'
  }
},
// 为什么使用上述配置就可以获取到模板编译器?
// 因为我们在主文件当中导入vue的运行时核心文件是通过别名`vue$`。
// 默认的`vue$`别名指向的vue核心文件是不会包含模板编译器的，所以我们重新配置`vue$`使它指向有模板编译器的Vue的核心文件。
```
运行时构建不包含模板编译器，因此不支持template选项，只能用render选项，但即使使用运行时构建，在单文件组件中也依然可以写模板，因为单文件组件的模板会在构建时预编译为render函数。如果我们想使用template，我们不能直接在客户端使用npm install之后的vue。

note:

Vue当中scoped和CSS模块化的区别,vue当中只是增加了css样式选择优先级的权重并不是真正的模块化。

## 5.output以及publicPath理解

[文档](https://juejin.im/post/5ae9ae5e518825672f19b094)

output是项目在webpack经过一系列处理并得出最总想要的代码后输出的结果

```
output: {
    //输出文件的目标路径
    path: path.resolve(__dirname, './dist'),
    //加载资源的相对路径
    publicPath: '',
    //附加分块的文件名模板，按需加载chunk的输出文件
    chunkFilename: '[name].[chunkhash].js',
    //每个输出文件的名称，必填
    filename: '[name].js'
  }
```

### 解读path和publicPath的区别

output选项指定webpack输出的位置,其中比较重要的也是经常要用到的有path和publicPath.

output.path 只是指示输出的目录,对应一个绝对路径,例如在项目中通常会做如下的配置:
```
output:{
  path:path.resolve(__dirname,'../dist'),
}
```

output.publicPath

官方文档的解释是:webpack提供一个非常有用的配置,该配置能够帮助你为项目中的所有资源指定一个基础路径,它被称为是公共路径

其实这里说的所有资源的基础路径是指项目中引用的`css,js,img`等资源时候的一个基础路径,这个基础路径要配合具体资源中指定的路径使用,
所以其实打包后资源的访问路径可以用如下公式表所示:

```
静态资源最终访问路径 = output.publicPath + 资源loader或插件等配置的路径
```

例如:

```
output.publicPath = '/dist/'

// image
options: {
  name: 'img/[name].[ext]?[hash]'
}
// 最终图片的访问路径为
output.publicPath + 'img/[name].[ext]?[hash]' = '/dist/img/[name].[ext]?[hash]'

// js output.filename
output: {
  filename: '[name].js'
}
// 最终js的访问路径为
output.publicPath + '[name].js' = '/dist/[name].js'

// extract-text-webpack-plugin css
new ExtractTextPlugin({
  filename: 'style.[chunkhash].css'
})
// 最终css的访问路径为
output.publicPath + 'style.[chunkhash].css' = '/dist/style.[chunkhash].css'
```

这个最终静态资源访问路径在使用html-webpack-plugin打包后得到的html中可以看到。所以`publicPath`设置成相对路径后，相对路径是相对于build之后的index.html的，例如:如果设置`publicPath:'./dist/'`,则打包后js的引用路径为`./dist/main.js`,但是这里有一个问题,相对路径在本地时可以，但是如果将静态资源托管到CDN上则访问路径显然不能使用相对路径。但是如果将publicPath设置成'/'，则打包后访问路径为`localhost:8080/dist/main.js`本地无法访问。

使用以下方式用来设置线上和线下的公共路径:

```
publicPath: process.env.NODE_ENV === 'production'
? config.build.assetsPublicPath
: config.dev.assetsPublicPath
```

一般情况下publicPath应该以'/'结尾,而其他loader或插件的配置不要以'/'开头


### webpack-dev-server中的publicPath

在开发阶段我们借用devServe启动一个开发服务器进行开发，这里也会配置一个`publicPath`(在devServe中),这里的`publicPath`路径下的打包文件可在浏览器当中访问.而静态资源仍然使用`output.publicPath`。

webpack-dev-serve打包的内容是放在内存当中的，这些打包后的资源对外的根目录就是publicPath。换句话说这里我们设置的是打包后存放在内存中的资源路径。

例如:

```
// 假设devServer的publicPath为
const publicPath = '/dist/'
// 则启动devServer后index.html的位置为
const htmlPath = `${pablicPath}index.html`
// 包的位置
cosnt mainJsPath = `${pablicPath}main.js`
```

以上可以直接通过`http://lcoalhost:8080/dist/main.js`访问到，通过访问`http://localhost:8080/webpack-dev-server` 以得到devServer启动后的资源访问路径。点击静态资源可以看到静态资源的访问路径为 http://localhost:8080${publicPath}index.html。

### html-webpack-plugin

该插件用于将css和js添加到html模板当中,其中template和filename会受到路径的影响.

- template

作用:用于定义模板文件的路径

因为template只有定义在webpack的context下才会被识别`，webpack context`的默认值为`process.cwd()`，即运行node命令时所在的文件夹的绝对路径。

- filename

作用:输出的HTML文件名,默认为index.html,可以直接配置带有子目录

源码:

```
this.options.filename = path.relative(compiler.options.output.path, filename);
```

filename的路径是相对于`output.path`的，而在webpack-dev-server中则是相对于webpack-dev-server配置的publicPath。

如果webpack-dev-server的`publicPath`和`output.publicPath`不一致。在使用`html-webpack-plugin`可能会导致引用静态资源失败，因为在使用该插件时,devServer中仍然以`output.publicPath`引用静态资源,和`webpack-dev-server`的提供的资源访问路径不一致，从而无法正常访问。有一种情况除外，就是output.publicPath是相对路径，这时候可以访问本地资源。所以一般情况下都要保证`devServer`中的`publicPath`与`output.publicPath`保持一致。

### 路径的小知识

- devServer.contentBase 告诉服务器从哪里提供内容，只有在你想要提供静态文件时才需要。

- devServer.publicPath 将用于确定应该从哪里提供bundle，并且此选项优先。

node中的路径:

__dirname:总是返回被执行的js所在文件夹的绝对路径

__filename:总是返回被执行的js的绝对路径

process.cwd():总是返回运行node命令时所在的文件夹的绝对路径

## 6.代码分割和代码拆分

Webpack的代码分割功能将代码分割成多个bundle，从而实现按需加载或并行加载。相对于大型的app来说所有的代码放到一个单独的文件会导致效率低下，webpack提供拆分块的这种机制，尤其是在某些条件下才会有需求的代码块，这些代码块应该在需要的时候加载不需要的时候不加载。

### 有3种常用的代码分割的方法:

- 入口点:在配置文件中通过entry手动指定分割

- 去重:使用CommonsChunkPlugin插件抽取重复的模块(webpack4.0不再使用，新版本使用SplitChunksPlugin)

- 动态加载:通过模块内的内联函数来实现

### 可用于分割代码的其他插件和加载器

- ExtractTextPlugin:可用于将CSS从主程序当中分割出来。

- bundle-loader:可用来分割代码并按需加载模块。

- promise-loader:和bundle-loader类似,但是使用promise。

### 代码分割的好处

- 解决文件体积过大的问题

- 按需加载

- 并行加载,减少加载时间,提供性能

## 7.安装开发者服务器

1.安装> npm install webpack-dev-server -d
2.配置开发服务器参数
```
devServer:{
  contentBase:path.resolve(__dirname,'dist'),//配置开发服务器运行时的文件跟目录
  host:'localhost',//开发服务器监听的主机地址
  compress:true,//开发服务器是否启动gzip等压缩
  port:8080//开发服务器的监听端口
}
```
### 设置代理服务器结果跨域问题

通过在选项devServer当中设置参数proxy可以为当前项目提供代理服务器的功能。
```
module.exports = {
  devServer:{
    proxy:{
      '/api':{
        target:'http://localhost:3000'
        pathRewrite:{'^api':''}
      }
    }
  }
}
```
从上面的示例代码中我们可以看到代理服务器的域名为**本机域名**端口号为3000。`/api`则代表着:请求路径带有`/api`的请求都会被本地服务器代理转发。同时pathRewrite代表着:如果路径重命名。

## 8.webpack可优化点总结

- 缩小文件的搜索范围:include & exclude

- 压缩JS代码:UglifyjsWebpackPlugin

- 代码分离 提取公共代码

- 热模块替换:不刷新整个页面,只更新指定的模块

- 区分环境:开发环境和生产环境

- HappyPack:HappyPack能让Webpack把任务分解给多个子进程去并发的执行，子进程处理完后再把结果发送给主进程.

```
plugins: [
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      PAGE_NAME: JSON.stringify(require('./package.json').name)
    }),
    new HappyPack({
        id: 'babel',
        cache: false,
        loaders: [{
            loader: 'babel-loader?cacheDirectory=true', 
        }]// 和rules里的配置相同
    }),
  ]
```

## 9.缓存

如果我们在部署新版本时不更改资源的文件名，浏览器可能会认为它没有被更新，就会使用它的缓存版本。由于缓存的存在当你需要获取新的代码时就会显得很棘手。缓存可以分为强缓存和协商缓存，当强缓存过期之后浏览器自动会走协商缓存。

### webpack当中如何巧妙的实现缓存机制

对单页应用来说:一般我们发布到线上的当中的html文件(一般是`index.html`)是不会经常性的改动的，我们可以使用协商缓存来设置客户端缓存该文件。静态文件比如图片等则可以使用强缓存来处理。而js之类的文件的缓存处理方式较为特殊(一般采用协商缓存)，由于我们使用webpack打包一个项目的时候通常还是会将公共部分的文件单独打包成一个chunk出来，这时我们会在`outpath`当中使用`chunkFilename`的配置项来设置一个公共模块的名称 `[name].[chunkhash].js`。这种处理方式的好处是当我们的需求发生变动，我们更新完代码并重新打包的时候，发生变动的代码打包出来的chunk的名称当中的chunkhash会发生改变，也就是整个js文件名发生变动。这时浏览器就不会走缓存而是直接引用新的文件保证线上代码都是最新的代码。那么为什么html文件要使用协商缓存?这是因为协商缓存要求客户端必须向服务器确认缓存是否过期。当我们js文件改变时html引用的js文件名也改变了，而缓存的html上引用的文件名还是之前的js文件名会导致代码还是旧的js代码。而采用协商缓存服务器就可以告诉客户端你的html文件过期了!必须使用我给你的最新html文件，保证客户端能够及时使用到最新代码。

note:其实单页应用目前不缓存`html`，因为一旦这个入口没更新，后面的相当于都不更新了。所以一般`html`是服务端直接返回字符流(强制更新)。

## 10.webpack-dev-middleware

为什么要使用服务器中间件?

因为打包后的文件不能直接被node创建的服务器使用，必须使用webpack-dev-middleware包装后使用。

serve.js

```
const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware');
const config = require('./webpack.config.js') //应用一个webpack的配置文件 webpack配置文件最后返回值都是一个对象
const compiler = webpack(config)
const app = express()
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
})) //这一步的主要当中的webpackDevMiddleware(compiler, {publicPath: config.output.publicPath}) 返回值 应该就是针对本地路径的返回打包后的文件
app.listen(3000,function(){
  console.log(开启服务监听)
})
```