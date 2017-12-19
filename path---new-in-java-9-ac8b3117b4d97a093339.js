webpackJsonp([0x3afa36132c2d3200],{"./node_modules/json-loader/index.js!./.cache/json/new-in-java-9.json":function(n,a){n.exports={data:{site:{siteMetadata:{title:"Note Site",author:"stone"}},markdownRemark:{id:"/home/peng/HUE/WorkSpace/selfDevelop/note-site/src/pages/2017-12-14-new-in-java-9/index.md absPath of file >>> MarkdownRemark",html:'<h2>平台级模块化系统</h2>\n<p>没有模块化之前Java中存在的问题:</p>\n<ul>\n<li>JDK过于臃肿</li>\n<li>JAR文件(如rt.jar)过于臃肿,无法在小的设备或程序中使用</li>\n<li>封装不够强大,public修饰符允许任何人访问</li>\n<li>不同版本的类库交叉依赖,无法确定是否共同依赖了相同的JAR</li>\n</ul>\n<h4>Java SE 9: Jigsaw Project</h4>\n<p>Java 9的模块化是通过工程Jigsaw引入的<br>\n参考链接 <a href="http://openjdk.java.net/projects/jigsaw/">http://openjdk.java.net/projects/jigsaw/</a></p>\n<blockquote>\n<p>The primary goals of this Project were to:</p>\n<ul>\n<li>Make it easier for developers to construct and maintain libraries</li>\n<li>and large applications;</li>\n<li>Improve the security and maintainability of Java SE Platform Implementations in general, and the JDK in particular;</li>\n<li>Enable improved application performance; and</li>\n<li>Enable the Java SE Platform, and the JDK, to scale down for use in small computing devices and dense cloud deployments.</li>\n</ul>\n</blockquote>\n<p>Jigsaw的主体被拆分分以下6个部分:</p>\n<ul>\n<li>\n<p><a href="http://openjdk.java.net/jeps/200">200: The Modular JDK</a></p>\n</li>\n<li>\n<p><a href="http://openjdk.java.net/jeps/201">201: Modular Source Code</a></p>\n</li>\n<li>\n<p><a href="http://openjdk.java.net/jeps/220">220: Modular Run-Time Images</a></p>\n</li>\n<li>\n<p><a href="http://openjdk.java.net/jeps/260">260: Encapsulate Most Internal APIs</a></p>\n</li>\n<li>\n<p><a href="http://openjdk.java.net/jeps/261">261: Module System</a></p>\n</li>\n<li>\n<p><a href="http://openjdk.java.net/jeps/282">282: jlink: The Java Linker</a></p>\n</li>\n</ul>\n<p>Java 9模块化系统的优点:</p>\n<ul>\n<li>JDK,JRE,JAR等都将被划分为小模块,有利于将Java应用到小的设备或程序</li>\n<li>易于测试和维护</li>\n<li>提供更强的封装</li>\n</ul>\n<hr>\n<h2>接口中的私有方法</h2>\n<p>参考网址\n<a href="https://www.journaldev.com/12850/java-9-private-methods-interfaces">https://www.journaldev.com/12850/java-9-private-methods-interfaces</a></p>\n<p>在Java 7中,接口中只能有两种东西</p>\n<ol>\n<li>常量</li>\n<li>抽象方法</li>\n</ol>\n<div class="gatsby-highlight">\n      <pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Java7Interface</span> <span class="token punctuation">{</span>\n    <span class="token comment" spellcheck="true">// 默认省略 public </span>\n    <span class="token keyword">public</span> <span class="token keyword">int</span> constVariable <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n    \n    <span class="token comment" spellcheck="true">// 默认省略 public abstract</span>\n     <span class="token keyword">void</span> <span class="token function">abstractMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>在Java 8中，接口中可以有默认方法和静态方法,但是这些方法都是公有的,</p>\n<ol>\n<li>常量</li>\n<li>抽象方法</li>\n<li>默认方法</li>\n<li>静态方法</li>\n</ol>\n<div class="gatsby-highlight">\n      <pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Java8Interface</span> <span class="token punctuation">{</span>\n\n    <span class="token comment" spellcheck="true">// 默认省略 public</span>\n    <span class="token keyword">default</span> <span class="token keyword">void</span> <span class="token function">defaultMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        System<span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"I am a default method"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token comment" spellcheck="true">// 默认省略 public</span>\n    <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">staticMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        System<span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"I am a static method"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>在Java 9中,允许在接口中使用私有方法</p>\n<ol>\n<li>常量</li>\n<li>抽象方法</li>\n<li>默认方法</li>\n<li>静态方法</li>\n<li>私有方法</li>\n<li>私有静态方法</li>\n</ol>\n<div class="gatsby-highlight">\n      <pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Java9Interface</span> <span class="token punctuation">{</span>\n\n    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">privateMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        System<span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"I am a private static"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">privateStaticMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n        System<span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"I am a private static method"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    \n    <span class="token comment" spellcheck="true">// 编译错误,只有接口私有方法,没有私有接口变量</span>\n    <span class="token comment" spellcheck="true">// private int privateVariable = 0; </span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Java 9中,接口私有方法使用规则:</p>\n<ol>\n<li>\n<p>必须用<code>private</code>显式声明</p>\n<ul>\n<li>接口中所有方法默认是公有的</li>\n</ul>\n</li>\n<li>\n<p><code>private</code>修饰符无法与<code>abstract</code>共存,否则会导致编译错误</p>\n<ul>\n<li><code>private</code>方法表示这个方法已经被接口实现,子类无法继承和覆盖</li>\n<li><code>abstract</code>方法表示这个这个方法还没有实现,子类必须继承并覆盖</li>\n</ul>\n</li>\n<li>私有方法必须有实现</li>\n<li>\n<p><code>private</code>修饰符代表最低的可见性</p>\n<ul>\n<li>只有这个在这个接口才能访问到这个方法</li>\n</ul>\n</li>\n</ol>\n<p>为什么需要接口私有方法\nJava8中,若接口的默认方法如果有重复的代码,则无法封装重用,因此使用接口私有方法可以:</p>\n<ol>\n<li>实现代码复用</li>\n<li>仅暴露公有方法给客户端</li>\n</ol>\n<hr>\n<h2>Java 9 REPL (JShell)</h2>\n<p>Java 9提供了一个交互式的编程环境, REPL(Read Evaluate Print Loop).可以从控制台启动JShell来使用</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>G:\\<span class="token operator">></span>jshell\n<span class="token operator">|</span>  Welcome to JShell -- Version 9-ea\n<span class="token operator">|</span>  For an introduction type: /help intro\n\n\njshell<span class="token operator">></span> int a <span class="token operator">=</span> 10\na <span class="token operator">==</span><span class="token operator">></span> 10\n\njshell<span class="token operator">></span> System.out.println<span class="token punctuation">(</span><span class="token string">"a value = "</span> + a <span class="token punctuation">)</span>\na value <span class="token operator">=</span> 10\n</code></pre>\n      </div>\n<hr>\n<h2>集合的工厂方法</h2>\n<p>Java 9中引入了一些便捷的方法用来创建<strong>不可修改</strong>的List,Set,Map和Map.Entry.</p>\n<div class="gatsby-highlight">\n      <pre class="language-java"><code>List immutableList <span class="token operator">=</span> List<span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nList immutableList <span class="token operator">=</span> List<span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span><span class="token string">"one"</span><span class="token punctuation">,</span><span class="token string">"two"</span><span class="token punctuation">,</span><span class="token string">"three"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<h2>改进的Stream API</h2>\n<p>Java 9中Stream接口增加了有些便捷的方法,如<strong>dropWhile</strong>和<strong>takeWhile</strong></p>\n<h2>try-with-resource的改进</h2>\n<p><a href="https://www.journaldev.com/12940/javase9-try-with-resources-improvements">https://www.journaldev.com/12940/javase9-try-with-resources-improvements</a></p>\n<p>Java 7中的try-with-resource</p>\n<div class="gatsby-highlight">\n      <pre class="language-java"><code><span class="token keyword">void</span> <span class="token function">testARM_Before_Java9</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> IOException<span class="token punctuation">{</span>\n BufferedReader reader1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BufferedReader</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">FileReader</span><span class="token punctuation">(</span><span class="token string">"journaldev.txt"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n <span class="token keyword">try</span> <span class="token punctuation">(</span>BufferedReader reader2 <span class="token operator">=</span> reader1<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n   System<span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>reader2<span class="token punctuation">.</span><span class="token function">readLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Java 9中的try-with-resource</p>\n<div class="gatsby-highlight">\n      <pre class="language-java"><code><span class="token keyword">void</span> <span class="token function">testARM_Java9</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> IOException<span class="token punctuation">{</span>\n BufferedReader reader1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BufferedReader</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">FileReader</span><span class="token punctuation">(</span><span class="token string">"journaldev.txt"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n <span class="token keyword">try</span> <span class="token punctuation">(</span>reader1<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n   System<span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>reader1<span class="token punctuation">.</span><span class="token function">readLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>',frontmatter:{title:"Java 9 中的新特性",date:"December 14, 2017",tags:["java"]}}},pathContext:{path:"/new-in-java-9"}}}});
//# sourceMappingURL=path---new-in-java-9-ac8b3117b4d97a093339.js.map