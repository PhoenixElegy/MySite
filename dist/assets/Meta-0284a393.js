const n=`### \`<meta>\`标签\r
\r
> <meta> 元素提供有关页面的元信息，放在文档的头部，不包含内容，属性定义了与文档相关的键值对，不会显示在页面上，但对于机器是可读的。\r
> 典型的情况是，meta 元素被用于规定页面的描述、关键词、文档的作者、最后修改时间以及其他元数据。\r
>\r
> 标签始终位于 head 元素中。\r
>\r
> 元数据可用于浏览器（如何显示内容或重新加载页面），搜索引擎（关键词），或其他 web 服务。\r
\r
\`\`\`html\r
<meta name="keywords" content="HTML,ASP,PHP,SQL">\r
// 可以理解为一个键值对 {keywords：HTML,ASP,PHP,SQL}\r
\`\`\`\r
\r
1. http-equiv\r
\r
   添加http头部内容，对于一些自定义的，或者需要额外添加的http头部内容，需要发送到浏览器中，我们可以使用这个属性。\r
\r
2. 常用meta标签\r
\r
   \`\`\`html\r
   // charset是声明文档使用的字符编码，解决乱码问题主要用的就是它，值得一提的是，这个charset一定要写第一行，不然就可能会产生乱码了\r
   <meta charset="utf-8">\r
   <meta http-equiv="Content-Type" content="text/html; charset=utf-8">\r
   \`\`\`\r
\r
   \`\`\`html\r
   // 百度禁止转码\r
   <meta http-equiv="Cache-Control" content="no-siteapp" />\r
   \`\`\`\r
\r
   \`\`\`html\r
   // SEO 优化部分\r
   \r
   <!-- 页面标题<title>标签(head 头部必须) -->\r
   <title>your title</title>\r
   <!-- 页面关键词 keywords -->\r
   <meta name="keywords" content="your keywords">\r
   <!-- 页面描述内容 description -->\r
   <meta name="description" content="your description">\r
   <!-- 定义网页作者 author -->\r
   <meta name="author" content="author,email address">\r
   <!-- 定义网页搜索引擎索引方式，robotterms 是一组使用英文逗号「,」分割的值，通常有如下几种取值：none，noindex，nofollow，all，index和follow。 -->\r
   <meta name="robots" content="index,follow">\r
   \`\`\`\r
\r
   \`\`\`html\r
   // viewport主要是影响移动端页面布局\r
   <meta name="viewport" content="width=device-width, initial-scale=1.0">\r
   \`\`\`\r
\r
   \`\`\`html\r
   // Microsoft Internet Explorer\r
   \r
   <!-- 优先使用最新的ie版本 -->\r
   <meta http-equiv="x-ua-compatible" content="ie=edge">\r
   <!-- 是否开启cleartype显示效果 -->\r
   <meta http-equiv="cleartype" content="on">\r
   <meta name="skype_toolbar" content="skype_toolbar_parser_compatible">\r
   \r
   \r
   <!-- Pinned Site -->\r
   <!-- IE 10 / Windows 8 -->\r
   <meta name="msapplication-TileImage" content="pinned-tile-144.png">\r
   <meta name="msapplication-TileColor" content="#009900">\r
   <!-- IE 11 / Windows 9.1 -->\r
   <meta name="msapplication-config" content="ieconfig.xml">\r
   \`\`\`\r
\r
   \`\`\`html\r
   // Google Chrome\r
   \r
   <!-- 优先使用最新的chrome版本 -->\r
   <meta http-equiv="X-UA-Compatible" content="chrome=1" />\r
   <!-- 禁止自动翻译 -->\r
   <meta name="google" value="notranslate">\r
   \`\`\`\r
\r
   \`\`\`html\r
   // 360浏览器\r
   \r
   <!-- 选择使用的浏览器解析内核 -->\r
   <meta name="renderer" content="webkit|ie-comp|ie-stand">\r
   \`\`\`\r
\r
   \`\`\`html\r
   // UC手机浏览器\r
   \r
   <!-- 将屏幕锁定在特定的方向 -->\r
   <meta name="screen-orientation" content="landscape/portrait">\r
   <!-- 全屏显示页面 -->\r
   <meta name="full-screen" content="yes">\r
   <!-- 强制图片显示，即使是"text mode" -->\r
   <meta name="imagemode" content="force">\r
   <!-- 应用模式，默认将全屏，禁止长按菜单，禁止手势，标准排版，强制图片显示。 -->\r
   <meta name="browsermode" content="application">\r
   <!-- 禁止夜间模式显示 -->\r
   <meta name="nightmode" content="disable">\r
   <!-- 使用适屏模式显示 -->\r
   <meta name="layoutmode" content="fitscreen">\r
   <!-- 当页面有太多文字时禁止缩放 -->\r
   <meta name="wap-font-scale" content="no">\r
   \`\`\`\r
\r
   \`\`\`html\r
   // Apple iOS\r
   \r
   <!-- Smart App Banner -->\r
   <meta name="apple-itunes-app" content="app-id=APP_ID,affiliate-data=AFFILIATE_ID,app-argument=SOME_TEXT">\r
   \r
   \r
   <!-- 禁止自动探测并格式化手机号码 -->\r
   <meta name="format-detection" content="telephone=no">\r
   \r
   \r
   <!-- Add to Home Screen添加到主屏 -->\r
   <!-- 是否启用 WebApp 全屏模式 -->\r
   <meta name="apple-mobile-web-app-capable" content="yes">\r
   <!-- 设置状态栏的背景颜色,只有在 “apple-mobile-web-app-capable” content=”yes” 时生效 -->\r
   <meta name="apple-mobile-web-app-status-bar-style" content="black">\r
   <!-- 添加到主屏后的标题 -->\r
   <meta name="apple-mobile-web-app-title" content="App Title">\r
   \`\`\`\r
\r
   \`\`\`html\r
   // Google Android\r
   \r
   <meta name="theme-color" content="#E64545">\r
   <!-- 添加到主屏 -->\r
   <meta name="mobile-web-app-capable" content="yes">\r
   <!-- More info: https://developer.chrome.com/multidevice/android/installtohomescreen -->\r
   \`\`\`\r
\r
   \`\`\`html\r
   // App Links\r
   \r
   <!-- iOS -->\r
   <meta property="al:ios:url" content="applinks://docs">\r
   <meta property="al:ios:app_store_id" content="12345">\r
   <meta property="al:ios:app_name" content="App Links">\r
   <!-- Android -->\r
   <meta property="al:android:url" content="applinks://docs">\r
   <meta property="al:android:app_name" content="App Links">\r
   <meta property="al:android:package" content="org.applinks">\r
   <!-- Web Fallback -->\r
   <meta property="al:web:url" content="http://applinks.org/documentation">\r
   <!-- More info: http://applinks.org/documentation/ -->\r
   \`\`\`\r
\r
   \`\`\`html\r
   // 移动端常用的meta\r
   \r
   <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />\r
   <meta name="apple-mobile-web-app-capable" content="yes" />\r
   <meta name="apple-mobile-web-app-status-bar-style" content="black" />\r
   <meta name="format-detection"content="telephone=no, email=no" />\r
   <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />\r
   <meta name="apple-mobile-web-app-capable" content="yes" /><!-- 删除苹果默认的工具栏和菜单栏 -->\r
   <meta name="apple-mobile-web-app-status-bar-style" content="black" /><!-- 设置苹果工具栏颜色 -->\r
   <meta name="format-detection" content="telphone=no, email=no" /><!-- 忽略页面中的数字识别为电话，忽略email识别 -->\r
   <!-- 启用360浏览器的极速模式(webkit) -->\r
   <meta name="renderer" content="webkit">\r
   <!-- 避免IE使用兼容模式 -->\r
   <meta http-equiv="X-UA-Compatible" content="IE=edge">\r
   <!-- 针对手持设备优化，主要是针对一些老的不识别viewport的浏览器，比如黑莓 -->\r
   <meta name="HandheldFriendly" content="true">\r
   <!-- 微软的老式浏览器 -->\r
   <meta name="MobileOptimized" content="320">\r
   <!-- uc强制竖屏 -->\r
   <meta name="screen-orientation" content="portrait">\r
   <!-- QQ强制竖屏 -->\r
   <meta name="x5-orientation" content="portrait">\r
   <!-- UC强制全屏 -->\r
   <meta name="full-screen" content="yes">\r
   <!-- QQ强制全屏 -->\r
   <meta name="x5-fullscreen" content="true">\r
   <!-- UC应用模式 -->\r
   <meta name="browsermode" content="application">\r
   <!-- QQ应用模式 -->\r
   <meta name="x5-page-mode" content="app">\r
   <!-- windows phone 点击无高光 -->\r
   <meta name="msapplication-tap-highlight" content="no">\r
   <!-- 适应移动端end -->\r
   \`\`\`\r
\r
#### 自定义的标签\r
\r
\`\`\`html\r
<meta name="description" content="The description of your Pro"/>\r
<meta name="keywords" content="MyPro, Vite, How And Do What"/>\r
<meta content="dark" name="color-scheme" />\r
\`\`\`\r
\r
### meta property=og标签含义及作用\r
\r
\`\`\`html\r
<meta property="fb:app_id" content="192271934223559"/>\r
<meta property="og:image" content="http://www.piccsy.com/investors/apple-touch-icon-114x114-precomposed.png"/> \r
<meta property="og:title" content="Piccsy Investor Pitchdeck"/>\r
<meta property="og:type" content="website"/>\r
<meta property="og:url" content="http://www.piccsy.com/investors"/>\r
 <meta property="og:description" content="Detailed information about Piccsy for investors."/>\r
\`\`\`\r
\r
og是一种新的HTTP头部标记，即Open Graph Protocol：　The Open Graph Protocol enables any web page to become a rich object in a social graph.即这种协议可以让网页成为一个“富媒体对象”。\r
\r
如果网站上要使用Open Graph Protocol，那么，meta property=og和meta name、Title标签应同时赋值。\r
\r
应用的合理，非常有利于网站的推广。`;export{n as m};
