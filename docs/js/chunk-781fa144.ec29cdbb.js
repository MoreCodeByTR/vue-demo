(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-781fa144"],{"0b42":function(e,t,s){var n=s("da84"),o=s("e8b5"),r=s("68ee"),a=s("861d"),c=s("b622"),l=c("species"),p=n.Array;e.exports=function(e){var t;return o(e)&&(t=e.constructor,r(t)&&(t===p||o(t.prototype))?t=void 0:a(t)&&(t=t[l],null===t&&(t=void 0))),void 0===t?p:t}},"1dde":function(e,t,s){var n=s("d039"),o=s("b622"),r=s("2d00"),a=o("species");e.exports=function(e){return r>=51||!n((function(){var t=[],s=t.constructor={};return s[a]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"4de4":function(e,t,s){"use strict";var n=s("23e7"),o=s("b727").filter,r=s("1dde"),a=r("filter");n({target:"Array",proto:!0,forced:!a},{filter:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}})},"4fa3":function(e,t,s){},"65f0":function(e,t,s){var n=s("0b42");e.exports=function(e,t){return new(n(e))(0===t?0:t)}},"922a":function(e,t,s){"use strict";s("4fa3")},b727:function(e,t,s){var n=s("0366"),o=s("e330"),r=s("44ad"),a=s("7b0b"),c=s("07fa"),l=s("65f0"),p=o([].push),_=function(e){var t=1==e,s=2==e,o=3==e,_=4==e,v=6==e,i=7==e,u=5==e||v;return function(d,h,f,m){for(var g,b,j=a(d),C=r(j),T=n(h,f),y=c(C),k=0,A=m||l,w=t?A(d,y):s||i?A(d,0):void 0;y>k;k++)if((u||k in C)&&(g=C[k],b=T(g,k,j),e))if(t)w[k]=b;else if(b)switch(e){case 3:return!0;case 5:return g;case 6:return k;case 2:p(w,g)}else switch(e){case 4:return!1;case 7:p(w,g)}return v?-1:o||_?_:w}};e.exports={forEach:_(0),map:_(1),filter:_(2),some:_(3),every:_(4),find:_(5),findIndex:_(6),filterReject:_(7)}},e8b5:function(e,t,s){var n=s("c6b6");e.exports=Array.isArray||function(e){return"Array"==n(e)}},ead7:function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"markdown-body"},[s(e.currentView,{tag:"component"})],1)},o=[],r=(s("4de4"),s("d3b7"),function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)}),a=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",[s("html",[s("head"),s("body",[s("h1",[e._v("HTTP缓存")]),s("blockquote",[s("p",[e._v("编辑日期:2022.3.28")])]),s("blockquote",[s("p",[e._v("参考文献")]),s("p",[e._v("https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Cache-Control")]),s("p",[e._v("https://blog.csdn.net/jiangshangchunjiezi/article/details/104488266")])]),s("h2",[e._v("1.为什么使用缓存")]),s("ul",[s("li",[e._v("减少延迟")]),s("li",[e._v("减少网络通信")]),s("li",[e._v("增强网站响应性")])]),s("hr"),s("h2",[e._v("2.Cache-Control")]),s("p",[s("code",{pre:!0},[e._v("Cache-Control")]),e._v("是浏览器缓存的控制开关，不设置的则会重新向服务器发起请求；")]),s("p",[s("code",{pre:!0},[e._v("Cache-Control")]),e._v("是通用的消息头字段，其指令是单向的，在请求头中的"),s("code",{pre:!0},[e._v("Cache-Control")]),e._v("不一定包含在响应头中")]),s("pre",{pre:!0},[s("code",{pre:!0,attrs:{"v-pre":""}},[e._v('accept-ranges: bytes\naccess-control-allow-origin: *\nage: 75617\ncache-control: max-age=31536000\ncontent-encoding: br\ncontent-md5: qEixiiEsURBAE2zakMuWhg==\ncontent-type: text/javascript; charset=utf-8\ndate: Sun, 27 Mar 2022 03:36:45 GMT\netag: "a848b18a212c511040136cda90cb9686"\nexpires: Tue, 29 Mar 2022 06:36:28 GMT\nlast-modified: Thu, 17 Mar 2022 08:23:27 GMT\nohc-cache-hit: jn7un52 [2]\nohc-file-size: 617427\nserver: JSP3/2.0.14\ntiming-allow-origin: *\nx-bce-content-crc32: 3171064980\nx-bce-debug-id: 6nzJkohMEqwAdOz3SUUley/u9NMny0t9vcSu4tv9cbAc/BK+iqjrnY4UOuzgjSFml7kLIoVioeUGk8RYgsDrHQ==\nx-bce-request-id: fde4f928-13ca-4600-83cf-ee8d9ec97ff8\nx-bce-storage-class: STANDARD\n')])]),s("p",[e._v("客户端在HTTP请求中可以使用的"),s("code",{pre:!0},[e._v("Cache-Control")]),e._v("指令")]),s("pre",{pre:!0},[s("code",{pre:!0,attrs:{"v-pre":""}},[e._v("Cache-Control: max-age=<seconds>\nCache-Control: max-stale[=<seconds>]\nCache-Control: min-fresh=<seconds>\nCache-control: no-cache\nCache-control: no-store\nCache-control: no-transform\nCache-control: only-if-cached\n")])]),s("p",[e._v("服务器在HTTP请求中可以使用的"),s("code",{pre:!0},[e._v("Cache-Control")]),e._v("指令")]),s("pre",{pre:!0},[s("code",{pre:!0,attrs:{"v-pre":""}},[e._v("Cache-control: must-revalidate\nCache-control: no-cache\nCache-control: no-store\nCache-control: no-transform\nCache-control: public\nCache-control: private\nCache-control: proxy-revalidate\nCache-Control: max-age=<seconds>\nCache-control: s-maxage=<seconds>\n")])]),s("blockquote",[s("p",[s("code",{pre:!0},[e._v("public")]),e._v(" 表明响应可以被任何对象（包括：发送请求的客户端，代理服务器，等等）缓存，即使是通常不可缓存的内容。（例如：1.该响应没有max-age指令或Expires消息头；2. 该响应对应的请求方法是 POST 。）")])]),s("blockquote",[s("p",[s("code",{pre:!0},[e._v("private")]),e._v(" 表明响应只能被单个用户缓存，不能作为共享缓存（即代理服务器不能缓存它）。私有缓存可以缓存响应内容，比如：对应用户的本地浏览器。")])]),s("blockquote",[s("p",[s("code",{pre:!0},[e._v("no-cache")]),e._v(" 在发布缓存副本之前，强制要求缓存把请求提交给原始服务器进行验证(协商缓存验证)。")])]),s("blockquote",[s("p",[s("code",{pre:!0},[e._v("no-store")]),e._v(" 缓存不应存储有关客户端请求或服务器响应的任何内容，即不使用任何缓存。")])]),s("blockquote",[s("p",[s("code",{pre:!0},[e._v("max-age=<seconds>")]),e._v(" 设置缓存存储的最大周期，超过这个时间缓存被认为过期(单位秒)。与Expires相反，时间是相对于请求的时间。若在此时间内发起请求，会用缓存；若超时，则会向服务端发请求。")])]),s("hr"),s("h2",[e._v("3.Expires")]),s("p",[s("code",{pre:!0},[e._v("Expires")]),e._v(" 响应头包含日期/时间， 即在此时候之后，响应过期。")]),s("p",[e._v("如果在"),s("code",{pre:!0},[e._v("Cache-Control")]),e._v("响应头设置了 "),s("code",{pre:!0},[e._v("max-age")]),e._v(" 或者 "),s("code",{pre:!0},[e._v("s-max-age")]),e._v(" 指令，那么 "),s("code",{pre:!0},[e._v("Expires")]),e._v(" 头会被忽略。")]),s("hr"),s("h2",[e._v("4.协商缓存")]),s("p",[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200224232616448.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2ppYW5nc2hhbmdjaHVuamllemk=,size_16,color_FFFFFF,t_70",alt:"协商缓存过程"}})]),s("blockquote",[s("p",[s("code",{pre:!0},[e._v("Etag")]),e._v("、"),s("code",{pre:!0},[e._v("If-None-Match")])]),s("blockquote",[s("p",[e._v("浏览器第一次向服务器请求一个资源，服务器在返回这个资源的同时，在respone的header加上ETag字段；")]),s("p",[e._v("浏览器再次跟服务器请求这个资源时，在request的header上加上If-None-Match，这个值就是上一次请求时返回的ETag的值；")]),s("p",[e._v("服务器再次收到资源请求时，再根据资源生成一个新的ETag，与浏览器传过来If-None-Match比较，如果这两个值相同，则说明资源没有变化，返回304 Not Modified, 浏览器从缓存中加载资源，否则返回200 资源内容。与Last-Modified不一样的是，当服务器返回304 Not Modified的响应时，由于ETag重新生成过，response header中还会把这个ETag返回，即使这个ETag跟之前的没有变化")])])]),s("blockquote",[s("p",[s("code",{pre:!0},[e._v("Last-Modified")]),e._v("、"),s("code",{pre:!0},[e._v("If-Modified-Since")])]),s("blockquote",[s("p",[e._v("浏览器第一次向服务器请求一个资源，服务器在返回这个资源的同时，在respone的header加上Last-Modified字段，表示该资源在服务器上的最后修改时间；")]),s("p",[e._v("浏览器再次向服务器请求这个资源时，在request的header上加上If-Modified-Since字段，这个值就是上一次请求时返回的Last-Modified的值;")]),s("p",[e._v("服务器收到资源请求时，比较If-Modified-Since字段值和被请求资源的最后修改时间，若资源最后修改时间较旧，则说明文件没有修改，返回304 Not Modified, 浏览器从缓存中加载资源；若不相同，说明文件被更新，浏览器直接从服务器加载资源, 返回200；")]),s("p",[e._v("重新加载资源时更新Last-Modified Header")])])]),s("hr"),s("blockquote",[s("p",[e._v("为什么有了"),s("code",{pre:!0},[e._v("Last-Modified")]),e._v("，还需要使用"),s("code",{pre:!0},[e._v("Etag")]),e._v("？")])]),s("p",[e._v("一些文件可能被修改过，但是其内容并未变化，这时候我们不希望客户端认为文件进行了改变，而重新请求")]),s("ul",[s("li",[e._v("部分文件修改频繁，1s内多次修改，而"),s("code",{pre:!0},[e._v("If-Modified-Since")]),e._v("只能检查的粒度为s")]),s("li",[e._v("某些服务器不能精确的得到文件的最后修改时间。 对于上述情景，利用"),s("code",{pre:!0},[e._v("ETag")]),e._v("能够更加准确的控制缓存，因为ETag是服务器自动生成的资源在服务器端的唯一标识符，资源每次变动，都会生成新的ETag值。"),s("code",{pre:!0},[e._v("Last-Modified")]),e._v("与"),s("code",{pre:!0},[e._v("ETag")]),e._v("是可以一起使用的，但服务器会"),s("code",{pre:!0},[e._v("优先验证ETag")]),e._v("。")])]),s("hr"),s("h2",[e._v("5.响应中Age与Date")]),s("blockquote",[s("p",[s("code",{pre:!0},[e._v("Date")]),e._v(" 原服务器第一次响应的时间")]),s("p",[s("code",{pre:!0},[e._v("Age")]),e._v(" 表示中间环节(CDN或缓存服务器)从服务器拿到数据之后的时间。如果是客户端看到是0秒，代表是从服务器拿到的最新的数据。")])])])])])}],c=s("2877"),l={},p=Object(c["a"])(l,r,a,!1,null,null,null),_=p.exports,v=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},i=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",[s("html",[s("head"),s("body",[s("h1",[e._v("浏览器输入Url会发生什么？")]),s("p",[e._v("编辑日期：2022.3.28")]),s("blockquote",[s("p",[e._v("参考链接")]),s("p",[e._v("https://www.jianshu.com/p/7eea6fbc5fcd")])]),s("blockquote",[s("p",[e._v("详细过程")])]),s("ul",[s("li",[e._v("1.判断当前url的缓存内容是否可用,决定是否向服务器请求资源")]),s("li",[e._v("2.DNS解析，寻找域名映射的IP地址")]),s("li",[e._v("3.浏览器与服务器通过三次握手建立TCP连接")]),s("li",[e._v("4.浏览器向服务器发送HTTP请求")]),s("li",[e._v("5.浏览器接收服务器的HTTP响应报文")]),s("li",[e._v("6.浏览器进行页面渲染")]),s("li",[e._v("7.通过四次挥手关闭TCP连接")])]),s("p",[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200417223938321.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0NDX1RvZ2V0aGVy,size_16,color_FFFFFF,t_70",alt:"浏览器页面渲染"}})]),s("blockquote",[s("p",[e._v("1.解析HTML生成DOM树；")]),s("p",[e._v("2.解析CSS生成CSS规则；")]),s("p",[e._v("3.合并DOM树和渲染规则生成渲染树render Tree")]),s("p",[e._v("4.对渲染树进行布局计算，对页面元素进行位置布局计算")]),s("p",[e._v("5.绘制render树")]),s("p",[e._v("6.浏览器将各层的信息发送给GPU,由进行图层的合成，并展示在屏幕上；")])]),s("p",[e._v("浏览器在未收到完成的HTML文件时，就进行了页面的渲染，在遇到外部的脚本标签或者样式时，就会重新发送http请求重复上述过程，在这之中可能会发生页面的回流或者重绘；")]),s("hr"),s("h2",[e._v("重绘和重排（回流）")]),s("blockquote"),s("p",[e._v("Reflow和Repaint，回流也称之为Layout,一般意味着页面的内容、结构、位置尺寸发生了变化，需要重新计数和渲染树；")]),s("p",[e._v("Repaint意味着页面的改变只是影响到页面的一些元素外观之类的")]),s("p",[e._v("显然，回流的成本要高于重绘，DOM树中节点的reflow很可能导致与其相关节点的reflow")]),s("blockquote",[s("p",[e._v("减少重排的方法:")]),s("ul",[s("li",[e._v("集中修改样式")]),s("li",[e._v("将元素设置为display：none，脱离文档流")]),s("li",[e._v("使用BFC，不影响其他元素位置")]),s("li",[e._v("使用节流或者防抖")]),s("li",[e._v("使用createDocumentFragment批量操作DOM")]),s("li",[e._v("使用CSS3和requestAnimationFrame,利用自身的优化机制")])])]),s("hr"),s("h2",[e._v("第二种思路回答")]),s("ul",[s("li",[e._v("网络请求")])]),s("blockquote",[s("p",[e._v("DNS解析、TCP连接、HTTP请求")])]),s("ul",[s("li",[e._v("解析")])]),s("blockquote",[s("p",[e._v("解析HTML报文，遇到css、js、图片等静态资源继续使用http请求,网络请求过程中会进行缓存判断；")]),s("p",[e._v("将数据进行结构化，构建DOM树、CSS规则，生成Render Tree")])]),s("ul",[s("li",[e._v("渲染")])]),s("blockquote",[s("p",[e._v("layout、composite")])])])])])}],u={},d=Object(c["a"])(u,v,i,!1,null,null,null),h=d.exports,f=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},m=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",[s("html",[s("head"),s("body",[s("h1",[s("code",{pre:!0},[e._v("<script>")]),e._v("中defer和async的区别？")]),s("p",[e._v("编辑日期：2022.3.28")]),s("p",[s("img",{attrs:{src:"https://image-static.segmentfault.com/28/4a/284aec5bb7f16b3ef4e7482110c5ddbb_fix732",alt:"解析图片"}})]),s("ul",[s("li",[e._v("defer延迟执行，async异步")]),s("li",[e._v("无defer、async时，遇到js时，html暂停解析，下载js执行js")]),s("li",[e._v("有defer时，js下载与html解析并行进行，js执行要在所有元素解析完成之后，DOMContentLoaded 事件触发之前完成。")]),s("li",[e._v("有async时，js下载与html解析并行进行，js下载完毕即执行，会暂停解析html")]),s("li",[e._v("defer能够保证js文件的执行顺序，async不行")]),s("li",[e._v("js动态添加的 script 标签隐含 async 属性")])])])])])}],g={},b=Object(c["a"])(g,f,m,!1,null,null,null),j=b.exports,C=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},T=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",[s("html",[s("head"),s("body",[s("h2",[e._v("1. HTTPS")]),s("ul",[s("li",[e._v("1.客户端向客户端发送https请求；")]),s("li",[e._v("2.客户端将非对称加密密钥对中的公钥发送给客户端；")]),s("li",[e._v("3.客户端向第三方机构验证包含公钥信息的数字证书的合法性，如果认证通过则生成一个随机数（后续作为客户端密钥使用），用服务端公钥对这个随机数进行加密；")]),s("li",[e._v("4.客户端发送第二次http请求，将这个加密的随机数发送服务器；")]),s("li",[e._v("5.服务器通过非对称加密中的密钥对上述报文进行解密，得到随机数；")]),s("li",[e._v("6.服务器使用解密获得的随机数对需要响应的报文进行对称加密，并传输给客户端；")]),s("li",[e._v("7.客户端获得响应报文后，使用自己的随机数作为密钥进行解密")])]),s("p",[e._v("总的来说https包含了两次http传输过程，使用了非对称加密和对称加密；非对称加密主要用于处理对称加密需要使用的密钥；")])])])])}],y={},k=Object(c["a"])(y,C,T,!1,null,null,null),A=k.exports,w=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},S=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",[s("html",[s("head"),s("body",[s("h1",[e._v("Javascript")]),s("h2",[e._v("1. typeof 判断变量类型")]),s("ul",[s("li",[s("code",{pre:!0},[e._v("typeof")]),e._v(" 无法判断null 返回的是object,这是javascript的历史遗留bug，由于涉及到的东西太多，不好进行修复")])]),s("pre",{pre:!0},[s("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("const")]),e._v(" {log}="),s("span",{pre:!0,attrs:{class:"hljs-variable language_"}},[e._v("console")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("function")]),e._v(" "),s("span",{pre:!0,attrs:{class:"hljs-title function_"}},[e._v("foo")]),e._v("("),s("span",{pre:!0,attrs:{class:"hljs-params"}}),e._v("){}\n\n"),s("span",{pre:!0,attrs:{class:"hljs-title function_"}},[e._v("log")]),e._v("("),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("typeof")]),e._v(" "),s("span",{pre:!0,attrs:{class:"hljs-literal"}},[e._v("null")]),e._v(")  "),s("span",{pre:!0,attrs:{class:"hljs-comment"}},[e._v("//object")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"hljs-title function_"}},[e._v("log")]),e._v("("),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("typeof")]),e._v(" "),s("span",{pre:!0,attrs:{class:"hljs-literal"}},[e._v("undefined")]),e._v(") "),s("span",{pre:!0,attrs:{class:"hljs-comment"}},[e._v("//undefined")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"hljs-title function_"}},[e._v("log")]),e._v("("),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("typeof")]),e._v(" "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("1")]),e._v(") "),s("span",{pre:!0,attrs:{class:"hljs-comment"}},[e._v("//number")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"hljs-title function_"}},[e._v("log")]),e._v("("),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("typeof")]),e._v(" "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'123'")]),e._v(") "),s("span",{pre:!0,attrs:{class:"hljs-comment"}},[e._v("//string")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"hljs-title function_"}},[e._v("log")]),e._v("("),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("typeof")]),e._v(" "),s("span",{pre:!0,attrs:{class:"hljs-literal"}},[e._v("false")]),e._v(") "),s("span",{pre:!0,attrs:{class:"hljs-comment"}},[e._v("//boolean")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"hljs-title function_"}},[e._v("log")]),e._v("("),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("typeof")]),e._v(" {}) "),s("span",{pre:!0,attrs:{class:"hljs-comment"}},[e._v("//object")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"hljs-title function_"}},[e._v("log")]),e._v("("),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("typeof")]),e._v(" []) "),s("span",{pre:!0,attrs:{class:"hljs-comment"}},[e._v("//object")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"hljs-title function_"}},[e._v("log")]),e._v("("),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("typeof")]),e._v(" foo) "),s("span",{pre:!0,attrs:{class:"hljs-comment"}},[e._v("//function")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"hljs-title function_"}},[e._v("log")]),e._v("("),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("typeof")]),e._v(" abc) "),s("span",{pre:!0,attrs:{class:"hljs-comment"}},[e._v("//undefined  abc无需声明")]),e._v("\n")])]),s("hr"),s("h2",[e._v("2.如何进行准确的js内置数据类型判断？")]),s("ul",[s("li",[s("code",{pre:!0},[e._v("Object.prototype.toString.call()")])])]),s("pre",{pre:!0},[s("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("const")]),e._v(" {log}="),s("span",{pre:!0,attrs:{class:"hljs-variable language_"}},[e._v("console")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("const")]),e._v(" {toString}="),s("span",{pre:!0,attrs:{class:"hljs-title class_"}},[e._v("Object")]),e._v("."),s("span",{pre:!0,attrs:{class:"hljs-property"}},[s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("prototype")])]),e._v("\n"),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("let")]),e._v(" abc\n"),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("function")]),e._v(" "),s("span",{pre:!0,attrs:{class:"hljs-title function_"}},[e._v("foo")]),e._v("("),s("span",{pre:!0,attrs:{class:"hljs-params"}}),e._v("){}\n\n"),s("span",{pre:!0,attrs:{class:"hljs-title function_"}},[e._v("log")]),e._v("(toString."),s("span",{pre:!0,attrs:{class:"hljs-title function_"}},[e._v("call")]),e._v("("),s("span",{pre:!0,attrs:{class:"hljs-literal"}},[e._v("null")]),e._v(")) "),s("span",{pre:!0,attrs:{class:"hljs-comment"}},[e._v("//[object Null]")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"hljs-title function_"}},[e._v("log")]),e._v("(toString."),s("span",{pre:!0,attrs:{class:"hljs-title function_"}},[e._v("call")]),e._v("("),s("span",{pre:!0,attrs:{class:"hljs-literal"}},[e._v("undefined")]),e._v(")) "),s("span",{pre:!0,attrs:{class:"hljs-comment"}},[e._v("//[object Undefined]")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"hljs-title function_"}},[e._v("log")]),e._v("(toString."),s("span",{pre:!0,attrs:{class:"hljs-title function_"}},[e._v("call")]),e._v("(abc)) "),s("span",{pre:!0,attrs:{class:"hljs-comment"}},[e._v("//[object Undefined]  abc需要声明不然报错")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"hljs-title function_"}},[e._v("log")]),e._v("(toString."),s("span",{pre:!0,attrs:{class:"hljs-title function_"}},[e._v("call")]),e._v("("),s("span",{pre:!0,attrs:{class:"hljs-literal"}},[e._v("false")]),e._v(")) "),s("span",{pre:!0,attrs:{class:"hljs-comment"}},[e._v("//[object Bollean]")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"hljs-title function_"}},[e._v("log")]),e._v("(toString."),s("span",{pre:!0,attrs:{class:"hljs-title function_"}},[e._v("call")]),e._v("("),s("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("123")]),e._v(")) "),s("span",{pre:!0,attrs:{class:"hljs-comment"}},[e._v("//[object Number]")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"hljs-title function_"}},[e._v("log")]),e._v("(toString."),s("span",{pre:!0,attrs:{class:"hljs-title function_"}},[e._v("call")]),e._v("("),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'boo'")]),e._v(")) "),s("span",{pre:!0,attrs:{class:"hljs-comment"}},[e._v("//[object String]")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"hljs-title function_"}},[e._v("log")]),e._v("(toString."),s("span",{pre:!0,attrs:{class:"hljs-title function_"}},[e._v("call")]),e._v("({})) "),s("span",{pre:!0,attrs:{class:"hljs-comment"}},[e._v("//[object Object]")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"hljs-title function_"}},[e._v("log")]),e._v("(toString."),s("span",{pre:!0,attrs:{class:"hljs-title function_"}},[e._v("call")]),e._v("([])) "),s("span",{pre:!0,attrs:{class:"hljs-comment"}},[e._v("//[object Array]")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"hljs-title function_"}},[e._v("log")]),e._v("(toString."),s("span",{pre:!0,attrs:{class:"hljs-title function_"}},[e._v("call")]),e._v("(foo)) "),s("span",{pre:!0,attrs:{class:"hljs-comment"}},[e._v("//[object Function]")]),e._v("\n")])]),s("ul",[s("li")])])])])}],O={},x=Object(c["a"])(O,w,S,!1,null,null,null),M=x.exports,E=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},q=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",[s("html",[s("head"),s("body",[s("h1",[e._v("简单请求和复杂请求（CORS实现）")]),s("blockquote",[s("p",[e._v("编辑日期：2022.3.29")]),s("p",[e._v("参考文献：http://www.ruanyifeng.com/blog/2016/04/cors.html")])]),s("hr"),s("blockquote",[s("p",[e._v("CORS可以分为以下两种：")])]),s("ul",[s("li",[e._v("简单请求（simple request）")]),s("li",[e._v("复杂请求（not-so-simple request")])]),s("hr"),s("h2",[e._v("1.简单请求")]),s("blockquote",[s("p",[e._v("简单请求")])]),s("p",[e._v("需要同时满足以下两大条件：")]),s("blockquote",[s("p",[e._v("1、请求方法是以下三种方法之一： HEAD GET POST")])]),s("blockquote",[s("p",[e._v("2、HTTP的头信息不超出以下几种字段： Accept、 Accept-Language、 Content-Language、 Last-Event-ID、 Content-Type：只限于三个值application/x-www-form-urlencoded、multipart/form-data、text/plain")])]),s("p",[e._v("这个设计是为了兼容表单，历史上表单一直可以发出跨域请求。AJAX的跨域设计是，只要表单可以发，AJAX就可以直接发。")]),s("p",[e._v("不同时满足上述两个条件的请求均为复杂请求；")]),s("blockquote",[s("p",[e._v("请求过程")])]),s("p",[e._v("简单请求发出时会自动添加"),s("code",{pre:!0},[e._v("Origin")]),e._v("字段")]),s("pre",{pre:!0},[s("code",{pre:!0,attrs:{"v-pre":"",class:"language-text"}},[e._v("GET /cors HTTP/1.1\nOrigin: http://api.bob.com\nHost: api.alice.com\nAccept-Language: en-US\nConnection: keep-alive\nUser-Agent: Mozilla/5.0...\n")])]),s("p",[e._v("如果Origin指定的域名在许可范围内，服务器返回的响应，会多出几个头信息字段。")]),s("pre",{pre:!0},[s("code",{pre:!0,attrs:{"v-pre":""}},[e._v("Access-Control-Allow-Origin: http://api.bob.com\nAccess-Control-Allow-Credentials: true\nAccess-Control-Expose-Headers: FooBar\nContent-Type: text/html; charset=utf-8\n")])]),s("p",[e._v("上面的头信息之中，有三个与CORS请求相关的字段，都以"),s("code",{pre:!0},[e._v("Access-Control-")]),e._v("开头。")]),s("ul",[s("li",[e._v("Access-Control-Allow-Origin")])]),s("p",[e._v("该字段是必须的。它的值要么是请求时"),s("code",{pre:!0},[e._v("Origin")]),e._v("字段的值，要么是一个"),s("code",{pre:!0},[e._v("*")]),e._v("，表示接受任意域名的请求。")]),s("ul",[s("li",[e._v("Access-Control-Allow-Credentials")])]),s("p",[e._v("该字段可选。它的值是一个布尔值，表示是否允许发送"),s("code",{pre:!0},[e._v("Cookie")]),e._v("。默认情况下，Cookie不包括在CORS请求之中。设为true，即表示服务器明确许可，Cookie可以包含在请求中，一起发给服务器。这个值也只能设为true，如果服务器不要浏览器发送Cookie，删除该字段即可。")]),s("p",[e._v("需要注意的是，如果要发送Cookie，Access-Control-Allow-Origin就不能设为星号，必须指定明确的、与请求网页一致的域名。同时，Cookie依然遵循同源政策，只有用服务器域名设置的Cookie才会上传，其他域名的Cookie并不会上传，且（跨源）原网页代码中的"),s("code",{pre:!0},[e._v("document.cookie")]),e._v("也无法读取服务器域名下的Cookie。")]),s("ul",[s("li",[e._v("Access-Control-Expose-Headers")])]),s("p",[e._v("该字段可选。与XMLHttpRequest对象的getResponseHeader()方法相关")]),s("hr"),s("h2",[e._v("2.复杂请求")]),s("p",[e._v("非简单请求是那种对服务器有特殊要求的请求，比如请求方法是"),s("code",{pre:!0},[e._v("PUT")]),e._v("或"),s("code",{pre:!0},[e._v("DELETE")]),e._v("，或者"),s("code",{pre:!0},[e._v("Content-Type")]),e._v("字段的类型是"),s("code",{pre:!0},[e._v("application/json")]),e._v("。")]),s("p",[e._v("非简单请求的"),s("code",{pre:!0},[e._v("CORS")]),e._v("在正式通信前，会发起一次HTTP查询请求，成为‘预检’请求（preflight）")]),s("p",[e._v("这次预请求的目的是向服务器验证正式请求是否被允许，会讲正式请求的请求方法、头部信息字段传递给服务器进行验证；")]),s("p",[e._v('"预检"请求用的请求方法是OPTIONS，表示这个请求是用来询问的。头信息里面，关键字段是Origin，表示请求来自哪个源。')]),s("blockquote",[s("p",[e._v("OPTIONS请求")])]),s("pre",{pre:!0},[s("code",{pre:!0,attrs:{"v-pre":""}},[e._v("\nOPTIONS /cors HTTP/1.1\nOrigin: http://api.bob.com\nAccess-Control-Request-Method: PUT\nAccess-Control-Request-Headers: X-Custom-Header\nHost: api.alice.com\nAccept-Language: en-US\nConnection: keep-alive\nUser-Agent: Mozilla/5.0...\n\n")])]),s("p",[e._v("除了"),s("code",{pre:!0},[e._v("Origin")]),e._v('字段，"预检"请求的头信息包括两个特殊字段。')]),s("ul",[s("li",[e._v("Access-Control-Request-Method")]),s("li",[e._v("Access-Control-Request-Headers")])]),s("blockquote",[s("p",[e._v("服务器回应")])]),s("p",[e._v("服务器检查上述相关字段后，如果允许跨域请求会进行响应")]),s("pre",{pre:!0},[s("code",{pre:!0,attrs:{"v-pre":""}},[e._v("HTTP/1.1 200 OK\nDate: Mon, 01 Dec 2008 01:15:39 GMT\nServer: Apache/2.0.61 (Unix)\nAccess-Control-Allow-Origin: http://api.bob.com\nAccess-Control-Allow-Methods: GET, POST, PUT\nAccess-Control-Allow-Headers: X-Custom-Header\nContent-Type: text/html; charset=utf-8\nContent-Encoding: gzip\nContent-Length: 0\nKeep-Alive: timeout=2, max=100\nConnection: Keep-Alive\nContent-Type: text/plain\n")])]),s("p",[e._v("如果服务器响应不包含CORS相关头信息字段，浏览器会判定服务器不同意预检请求，因此会触发一个错误，被XHR的onerror回调函数捕获，在控制台打印如下信息：")]),s("pre",{pre:!0},[s("code",{pre:!0,attrs:{"v-pre":""}},[e._v("XMLHttpRequest cannot load http://api.alice.com.\nOrigin http://api.bob.com is not allowed by Access-Control-Allow-Origin.\n")])]),s("p",[e._v("服务器回应的CORS字段如下：")]),s("pre",{pre:!0},[s("code",{pre:!0,attrs:{"v-pre":""}},[e._v("Access-Control-Allow-Methods: GET, POST, PUT\nAccess-Control-Allow-Headers: X-Custom-Header\nAccess-Control-Allow-Credentials: true\nAccess-Control-Max-Age: 1728000 //本次预请求有效期，可缓存，在此期间，无需发出第二条预请求\n")])]),s("blockquote",[s("p",[e._v("预请求通过")])]),s("p",[e._v("通过预请求后与简单请求没有区别，都会有一个"),s("code",{pre:!0},[e._v("Origin")]),e._v("头信息，响应字段中有"),s("code",{pre:!0},[e._v("Access-Control-Allow-Origin")]),e._v("信息")]),s("hr"),s("h2",[e._v("3. CORS与JSONP相比")]),s("p",[e._v("CORS与JSONP的使用目的相同，但是比JSONP更强大。")]),s("p",[e._v("JSONP只支持GET请求，CORS支持所有类型的HTTP请求。JSONP的优势在于支持老式浏览器，以及可以向不支持CORS的网站请求数据。")])])])])}],H={},P=Object(c["a"])(H,E,q,!1,null,null,null),R=P.exports,L={name:"Home",components:{BrowserCache:_,ParseUrl:h,DeferAndAsync:j,HttpsProtocol:A,JS01:M,SimpleRequest:R},props:{},data:function(){return{currentView:"BrowserCache",notesMap:[{code:"browser-cache",component:"BrowserCache"},{code:"ParseUrl",component:"ParseUrl"},{code:"DeferAndAsync",component:"DeferAndAsync"},{code:"JS01",component:"JS01"},{code:"HttpsProtocol",component:"HttpsProtocol"},{code:"SimpleRequest",component:"SimpleRequest"}]}},watch:{$route:{handler:function(e){var t=e.params.articleName,s=this.notesMap.filter((function(e){return e.code===t}));s&&s.length>0&&(this.currentView=s[0].component)},deep:!0}},computed:{},mounted:function(){var e=this.$route.params,t=e.articleName,s=this.notesMap.filter((function(e){return e.code===t}));this.currentView=s[0].component},methods:{}},N=L,D=(s("922a"),Object(c["a"])(N,n,o,!1,null,null,null));t["default"]=D.exports}}]);
//# sourceMappingURL=chunk-781fa144.ec29cdbb.js.map