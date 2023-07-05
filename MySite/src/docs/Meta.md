### `<meta>`标签

> <meta> 元素提供有关页面的元信息，放在文档的头部，不包含内容，属性定义了与文档相关的键值对，不会显示在页面上，但对于机器是可读的。
> 典型的情况是，meta 元素被用于规定页面的描述、关键词、文档的作者、最后修改时间以及其他元数据。
>
> 标签始终位于 head 元素中。
>
> 元数据可用于浏览器（如何显示内容或重新加载页面），搜索引擎（关键词），或其他 web 服务。

```html
<meta name="keywords" content="HTML,ASP,PHP,SQL">
// 可以理解为一个键值对 {keywords：HTML,ASP,PHP,SQL}
```

1. http-equiv

   添加http头部内容，对于一些自定义的，或者需要额外添加的http头部内容，需要发送到浏览器中，我们可以使用这个属性。

2. 常用meta标签

   ```html
   // charset是声明文档使用的字符编码，解决乱码问题主要用的就是它，值得一提的是，这个charset一定要写第一行，不然就可能会产生乱码了
   <meta charset="utf-8">
   <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
   ```

   ```html
   // 百度禁止转码
   <meta http-equiv="Cache-Control" content="no-siteapp" />
   ```

   ```html
   // SEO 优化部分
   
   <!-- 页面标题<title>标签(head 头部必须) -->
   <title>your title</title>
   <!-- 页面关键词 keywords -->
   <meta name="keywords" content="your keywords">
   <!-- 页面描述内容 description -->
   <meta name="description" content="your description">
   <!-- 定义网页作者 author -->
   <meta name="author" content="author,email address">
   <!-- 定义网页搜索引擎索引方式，robotterms 是一组使用英文逗号「,」分割的值，通常有如下几种取值：none，noindex，nofollow，all，index和follow。 -->
   <meta name="robots" content="index,follow">
   ```

   ```html
   // viewport主要是影响移动端页面布局
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   ```

   ```html
   // Microsoft Internet Explorer
   
   <!-- 优先使用最新的ie版本 -->
   <meta http-equiv="x-ua-compatible" content="ie=edge">
   <!-- 是否开启cleartype显示效果 -->
   <meta http-equiv="cleartype" content="on">
   <meta name="skype_toolbar" content="skype_toolbar_parser_compatible">
   
   
   <!-- Pinned Site -->
   <!-- IE 10 / Windows 8 -->
   <meta name="msapplication-TileImage" content="pinned-tile-144.png">
   <meta name="msapplication-TileColor" content="#009900">
   <!-- IE 11 / Windows 9.1 -->
   <meta name="msapplication-config" content="ieconfig.xml">
   ```

   ```html
   // Google Chrome
   
   <!-- 优先使用最新的chrome版本 -->
   <meta http-equiv="X-UA-Compatible" content="chrome=1" />
   <!-- 禁止自动翻译 -->
   <meta name="google" value="notranslate">
   ```

   ```html
   // 360浏览器
   
   <!-- 选择使用的浏览器解析内核 -->
   <meta name="renderer" content="webkit|ie-comp|ie-stand">
   ```

   ```html
   // UC手机浏览器
   
   <!-- 将屏幕锁定在特定的方向 -->
   <meta name="screen-orientation" content="landscape/portrait">
   <!-- 全屏显示页面 -->
   <meta name="full-screen" content="yes">
   <!-- 强制图片显示，即使是"text mode" -->
   <meta name="imagemode" content="force">
   <!-- 应用模式，默认将全屏，禁止长按菜单，禁止手势，标准排版，强制图片显示。 -->
   <meta name="browsermode" content="application">
   <!-- 禁止夜间模式显示 -->
   <meta name="nightmode" content="disable">
   <!-- 使用适屏模式显示 -->
   <meta name="layoutmode" content="fitscreen">
   <!-- 当页面有太多文字时禁止缩放 -->
   <meta name="wap-font-scale" content="no">
   ```

   ```html
   // Apple iOS
   
   <!-- Smart App Banner -->
   <meta name="apple-itunes-app" content="app-id=APP_ID,affiliate-data=AFFILIATE_ID,app-argument=SOME_TEXT">
   
   
   <!-- 禁止自动探测并格式化手机号码 -->
   <meta name="format-detection" content="telephone=no">
   
   
   <!-- Add to Home Screen添加到主屏 -->
   <!-- 是否启用 WebApp 全屏模式 -->
   <meta name="apple-mobile-web-app-capable" content="yes">
   <!-- 设置状态栏的背景颜色,只有在 “apple-mobile-web-app-capable” content=”yes” 时生效 -->
   <meta name="apple-mobile-web-app-status-bar-style" content="black">
   <!-- 添加到主屏后的标题 -->
   <meta name="apple-mobile-web-app-title" content="App Title">
   ```

   ```html
   // Google Android
   
   <meta name="theme-color" content="#E64545">
   <!-- 添加到主屏 -->
   <meta name="mobile-web-app-capable" content="yes">
   <!-- More info: https://developer.chrome.com/multidevice/android/installtohomescreen -->
   ```

   ```html
   // App Links
   
   <!-- iOS -->
   <meta property="al:ios:url" content="applinks://docs">
   <meta property="al:ios:app_store_id" content="12345">
   <meta property="al:ios:app_name" content="App Links">
   <!-- Android -->
   <meta property="al:android:url" content="applinks://docs">
   <meta property="al:android:app_name" content="App Links">
   <meta property="al:android:package" content="org.applinks">
   <!-- Web Fallback -->
   <meta property="al:web:url" content="http://applinks.org/documentation">
   <!-- More info: http://applinks.org/documentation/ -->
   ```

   ```html
   // 移动端常用的meta
   
   <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
   <meta name="apple-mobile-web-app-capable" content="yes" />
   <meta name="apple-mobile-web-app-status-bar-style" content="black" />
   <meta name="format-detection"content="telephone=no, email=no" />
   <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
   <meta name="apple-mobile-web-app-capable" content="yes" /><!-- 删除苹果默认的工具栏和菜单栏 -->
   <meta name="apple-mobile-web-app-status-bar-style" content="black" /><!-- 设置苹果工具栏颜色 -->
   <meta name="format-detection" content="telphone=no, email=no" /><!-- 忽略页面中的数字识别为电话，忽略email识别 -->
   <!-- 启用360浏览器的极速模式(webkit) -->
   <meta name="renderer" content="webkit">
   <!-- 避免IE使用兼容模式 -->
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <!-- 针对手持设备优化，主要是针对一些老的不识别viewport的浏览器，比如黑莓 -->
   <meta name="HandheldFriendly" content="true">
   <!-- 微软的老式浏览器 -->
   <meta name="MobileOptimized" content="320">
   <!-- uc强制竖屏 -->
   <meta name="screen-orientation" content="portrait">
   <!-- QQ强制竖屏 -->
   <meta name="x5-orientation" content="portrait">
   <!-- UC强制全屏 -->
   <meta name="full-screen" content="yes">
   <!-- QQ强制全屏 -->
   <meta name="x5-fullscreen" content="true">
   <!-- UC应用模式 -->
   <meta name="browsermode" content="application">
   <!-- QQ应用模式 -->
   <meta name="x5-page-mode" content="app">
   <!-- windows phone 点击无高光 -->
   <meta name="msapplication-tap-highlight" content="no">
   <!-- 适应移动端end -->
   ```

#### 自定义的标签

```html
<meta name="description" content="The description of your Pro"/>
<meta name="keywords" content="MyPro, Vite, How And Do What"/>
<meta content="dark" name="color-scheme" />
```

### meta property=og标签含义及作用

```html
<meta property="fb:app_id" content="192271934223559"/>
<meta property="og:image" content="http://www.piccsy.com/investors/apple-touch-icon-114x114-precomposed.png"/> 
<meta property="og:title" content="Piccsy Investor Pitchdeck"/>
<meta property="og:type" content="website"/>
<meta property="og:url" content="http://www.piccsy.com/investors"/>
 <meta property="og:description" content="Detailed information about Piccsy for investors."/>
```

og是一种新的HTTP头部标记，即Open Graph Protocol：　The Open Graph Protocol enables any web page to become a rich object in a social graph.即这种协议可以让网页成为一个“富媒体对象”。

如果网站上要使用Open Graph Protocol，那么，meta property=og和meta name、Title标签应同时赋值。

应用的合理，非常有利于网站的推广。