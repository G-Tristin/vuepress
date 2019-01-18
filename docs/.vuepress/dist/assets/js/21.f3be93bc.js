(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{182:function(e,t,r){"use strict";r.r(t);var n=r(0),s=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"content"},[r("h1",{attrs:{id:"http服务"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#http服务","aria-hidden":"true"}},[e._v("#")]),e._v(" http服务")]),e._v(" "),r("h2",{attrs:{id:"使用node搭建一个http服务器"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#使用node搭建一个http服务器","aria-hidden":"true"}},[e._v("#")]),e._v(" 使用node搭建一个http服务器")]),e._v(" "),r("ul",[r("li",[e._v("先引入一个http模块")]),e._v(" "),r("li",[e._v("使用http.createServe()创建服务器")]),e._v(" "),r("li",[e._v("让服务器监听端口")])]),e._v(" "),r("p",[e._v("代码示例:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("var http = require('http');\n\n// 创建http server，并传入回调函数:\nvar server = http.createServer(function (request, response) {\n    // 回调函数接收request和response对象,\n    // 获得HTTP请求的method和url:\n    console.log(request.method + ': ' + request.url);\n    // 将HTTP响应200写入response, 同时设置Content-Type: text/html:\n    response.writeHead(200, {'Content-Type': 'text/html'});\n    // 将HTTP响应的HTML内容写入response:\n    response.end('<h1>Hello world!</h1>');\n});\n// 让服务器监听8080端口:\nserver.listen(8080);\n")])])]),r("h2",{attrs:{id:"创建一个文件的服务器"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#创建一个文件的服务器","aria-hidden":"true"}},[e._v("#")]),e._v(" 创建一个文件的服务器")]),e._v(" "),r("p",[e._v("文件服务器与普通服务器的区别就是,文件服务器会从请求的链接当中获取到路径,然后根据路径返回对应的文件")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("var\n    fs = require('fs'), //用于读取和写入文件\n    url = require('url'), //用于解析url链接\n    path = require('path'), //用于操作路径\n    http = require('http'); //用于搭建http服务器\n\n// 从命令行参数获取root目录，默认是当前目录:\nvar root = path.resolve(process.argv[2] || '.');\n\nconsole.log('Static root dir: ' + root);\n\n// 创建服务器:\nvar server = http.createServer(function (request, response) {\n\n    // 获得URL的path，类似 '/css/bootstrap.css':\n    var pathname = url.parse(request.url).pathname;\n\n    // 获得对应的本地文件路径，类似 '/srv/www/css/bootstrap.css':\n    var filepath = path.join(root, pathname);\n    \n    // 获取文件状态:\n    fs.stat(filepath, function (err, stats) {\n        if (!err && stats.isFile()) {\n            // 没有出错并且文件存在:\n            console.log('200 ' + request.url);\n            // 发送200响应:\n            response.writeHead(200);\n            // 将文件流导向response:\n            fs.createReadStream(filepath).pipe(response);\n        } else {\n            // 出错了或者文件不存在:\n            console.log('404 ' + request.url);\n            // 发送404响应:\n            response.writeHead(404);\n            response.end('404 Not Found');\n        }\n    });\n});\n\nserver.listen(8080);\n")])])])])}],!1,null,null,null);s.options.__file="http服务.md";t.default=s.exports}}]);