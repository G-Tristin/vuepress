(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{179:function(e,s,a){"use strict";a.r(s);var r=a(0),t=Object(r.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"process-进程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#process-进程","aria-hidden":"true"}},[e._v("#")]),e._v(" process - 进程")]),e._v(" "),a("p",[e._v("概念:")]),e._v(" "),a("p",[e._v("在Node.js当中每个应用程序都是一个进程类的实例对象。使用process对象代表应用进程，这是一个全局对象，可以通过它来获取Node.js应用程序以及运行该程序的用户、环境等各种信息的属性、方法、事件。")]),e._v(" "),a("h2",{attrs:{id:"进程事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#进程事件","aria-hidden":"true"}},[e._v("#")]),e._v(" 进程事件")]),e._v(" "),a("p",[e._v("process对象是一个EventEmitter的实例")]),e._v(" "),a("h3",{attrs:{id:"beforeexit事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#beforeexit事件","aria-hidden":"true"}},[e._v("#")]),e._v(" beforeExit事件")]),e._v(" "),a("p",[e._v("当Node.js请空其事件循环并且没有其他工作要安排时，会触发'beforeExit'事件。通常，Node.js 进程将在没有调度工作时退出，但是在'beforeExit'事件上注册的监听器可以进行异步调用，从而导致 Node.js 进程继续。调用监听器回调函数时会将 process.exitCode 的值作为唯一参数传入。")]),e._v(" "),a("h3",{attrs:{id:"exit事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#exit事件","aria-hidden":"true"}},[e._v("#")]),e._v(" exit事件")]),e._v(" "),a("p",[e._v("当Node.js进程因为一下原因之一即将退出时，则触发'exit'事件")]),e._v(" "),a("ul",[a("li",[e._v("显示的调用process.exit()方法")]),e._v(" "),a("li",[e._v("Node.js事件循环不再需要执行任何其他的工作时\n此时无法阻止退出事件循环，并且一旦所有'emit'事件的监听器都已经完成运行时，Node.js进程终止")])]),e._v(" "),a("p",[e._v("使用 process.exitCode 属性指定的退出码或传给 process.exit() 方法的 exitCode 参数调用监听器回调函数。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("process.on('exit', (code) => {\n  console.log(`退出码: ${code}`);\n});\n")])])]),a("p",[e._v("该事件监听函数只能执行同步代码，不能执行异步代码。在调用 'exit' 事件监听器之后，Node.js 进程将立即退出，从而导致在事件循环中仍排队的任何其他工作被放弃。")]),e._v(" "),a("h3",{attrs:{id:"message事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#message事件","aria-hidden":"true"}},[e._v("#")]),e._v(" message事件")]),e._v(" "),a("p",[e._v("如果使用IPC通道衍生node.js进程，则只要子进程收到父进程使用childProcess.send()发送的消息，就会触发messge事件。")]),e._v(" "),a("h3",{attrs:{id:"process-abort-事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#process-abort-事件","aria-hidden":"true"}},[e._v("#")]),e._v(" process.abort()事件")]),e._v(" "),a("p",[e._v("process.abort()方法会使Node.js进程立即结束，并生成一个core文件。")]),e._v(" "),a("h2",{attrs:{id:"进程中的重要属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#进程中的重要属性","aria-hidden":"true"}},[e._v("#")]),e._v(" 进程中的重要属性")]),e._v(" "),a("ul",[a("li",[e._v("stdin 标准输入流")]),e._v(" "),a("li",[e._v("stdout 标准输出流")]),e._v(" "),a("li",[e._v("stderr 标准错误输出流")]),e._v(" "),a("li",[e._v("argv 终端输入参数数组\n"),a("ul",[a("li",[e._v("第一个元素是process.execPath")]),e._v(" "),a("li",[e._v("第二个元素是正在执行的javascript文件的路径")]),e._v(" "),a("li",[e._v("其余的元素都是命令行参数")])])]),e._v(" "),a("li",[e._v("env 操作系统环境信息")]),e._v(" "),a("li",[e._v("pid 应用程序进程id")]),e._v(" "),a("li",[e._v("ppid 属性返回当前父进程的进程ID")]),e._v(" "),a("li",[e._v("debugPort (可读可写)调试器使用的端口")]),e._v(" "),a("li",[e._v("exitCode  (可读可写)退出且未指定退出码时，此数值将作为进程的退出码,指定 process.exit(code) 的退出码将覆盖 process.exitCode 的原有设置。")]),e._v(" "),a("li",[e._v("execPath 返回启动 Node.js 进程的可执行文件的绝对路径名"),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("  '/usr/local/bin/node'\n")])])])]),e._v(" "),a("li",[e._v("connected 如果node.js的进程时由IPC channel方式创建的，只要IPC channel保持连接，process.connected属性就会返回true。process.disconnect()被调用后，此属性会返回false。process.connected如果为false，则不能通过IPC channel使用process.send()发送信息。")])]),e._v(" "),a("p",[e._v("argv例子")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("文件内容\nprocess.argv.forEach((val, index) => {\n  console.log(`${index}: ${val}`);\n});\n\n启动Node程序\n$ node process-args.js one two=three four\n\n输出结果\n0: /usr/local/bin/node\n1: /Users/mjr/work/node/process-args.js\n2: one\n3: two=three\n4: four\n")])])]),a("h2",{attrs:{id:"进程方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#进程方法","aria-hidden":"true"}},[e._v("#")]),e._v(" 进程方法")]),e._v(" "),a("ul",[a("li",[e._v("process.memoryUsage() 查看内存信息")]),e._v(" "),a("li",[e._v("process.nextTick() 方法将 callback 添加到下一个时间点的队列。 一旦当轮的事件循环全部完成，则调用下一个时间点的队列中的所有回调。 它的效率更高。 它会在事件循环的下一个时间点中触发任何其他 I/O 事件（包括定时器）之前运行。//官方文档解释相当重要。")]),e._v(" "),a("li",[e._v("process.chdir() chdir方法用于修改Node.js应用程序中使用的当前工作目录")]),e._v(" "),a("li",[e._v("process.cwd() 进程当前的工作目录")]),e._v(" "),a("li",[e._v("kill() 该方法接受2个参数，第一个是pid 第二个是将要发送的信号。 eg:process.kill(process.pid, 'SIGHUP'); 当Node.js进程接收到了SIGUSR1，Node.js会启动debugger。")]),e._v(" "),a("li",[e._v("process.uncaughtexecption() 当应用程序抛出一个未被捕获的异常时触发进程对象的uncaughtExecption事件")]),e._v(" "),a("li",[e._v("process.send() 如果Node.js进程是通过进程间通信产生的，那么process.send()放发可以用来给父进程发送消息。接收到的消息被视为父进程的ChildProcess对象上的一个'message'事件。\n如果Node.js进程不是通过进程间通信产生的，process.send()回事undefined。\neg:")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("say() // 该方法未定义就执行\nprocess.on('uncaughtExecption',function(err){\n  console.log('捕获到一个未被处理的错误'，err)\n})\n")])])]),a("p",[e._v("实不相瞒还是看官方文档比较好")]),e._v(" "),a("h3",{attrs:{id:"父子进程通信"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#父子进程通信","aria-hidden":"true"}},[e._v("#")]),e._v(" 父子进程通信")]),e._v(" "),a("p",[e._v("index.js")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("const cp = require('child_process');\nconst n = cp.fork(`${__dirname}/sub.js`); //返回值是一个'child_Process'\n// 返回的是被创建的子进程实例对象\nn.on('message', (m) => {\n  console.log('父进程收到消息', m);\n  // 当前的事件是在子进程的实例对象上绑定的 那为什么说是父进程收到了消息呢?\n  // 当前进程仍然是父进程 但是 是在父进程内的子进程实例对象上添加了事件回调 获取到消息 这样实现了进程之间的通信\n  // 二个进程还是独立运行的\n});\nconsole.log(n)\n// 使子进程输出: 子进程收到消息 { hello: 'world' }\nn.send({ hello: 'world' }); // 通过在父进程中的子进程实例对象给子进程发送消息\n")])])]),a("p",[e._v("sub.js")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("process.on('message', (m) => {\n  console.log('子进程收到消息', m);\n});\n// 使父进程输出: 父进程收到消息 { foo: 'bar', baz: null }\nprocess.send({ foo: 'bar', baz: NaN });\nconsole.log(process)\n\n// 这里是一个子进程但是为什么用process来访问这个子进程呢? \n// 因为在当前文件是由index.js当中采用子进程模块'child_process'开启的node应用程序，由子进程管理。\n// 但是我们在当前文件中还是需要使用process进行访问。并且通过fork()产生的子进程将会与父进程\n产生IPC通道所以可以使用process.send()给父进程发送信息\n")])])])])}],!1,null,null,null);s.default=t.exports}}]);