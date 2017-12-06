webpackJsonp([0xc4fd310c97a32800],{"./node_modules/json-loader/index.js!./.cache/json/java-serialization.json":function(n,s){n.exports={data:{site:{siteMetadata:{title:"Note Site",author:"stone"}},markdownRemark:{id:"/home/peng/develop/workspace/stone-site/src/pages/2017-11-16-java-serialization/index.md absPath of file >>> MarkdownRemark",html:'<h1>Java Serialization</h1>\n<p><strong>详阅&#x3C;<thinking in java>>18章12节</strong></p>\n<blockquote>\n<p>Java 提供了一种对象序列化的机制，该机制中，一个对象可以被表示为一个字节序列，该字节序列包括该对象的数据、有关对象的类型的信息和存储在对象中数据的类型。\n将序列化对象写入文件之后，可以从文件中读取出来，并且对它进行反序列化，也就是说，对象的类型信息、对象的数据，还有对象中的数据类型可以用来在内存中新建对象。\n整个过程都是 Java 虚拟机（JVM）独立的，也就是说，在一个平台上序列化的对象可以在另一个完全不同的平台上反序列化该对象。</p>\n</blockquote>\n<ul>\n<li>序列化的是目标是对象而不是类,所以静态变量不会被序列化</li>\n<li>反序列化过程一般不调用类的构造函数</li>\n</ul>\n<h2>Serializable接口</h2>\n<div class="gatsby-highlight">\n      <pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Serializable</span> <span class="token punctuation">{</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<ul>\n<li>没有任何成员函数,是一个语义化的接口(Marker Interface)</li>\n<li>父类实现了Serializable接口,子类自动实现序列化,不需要再显示声明</li>\n<li>\n<p>子类实现了Serializable接口,父类没有实现此接口</p>\n<ol>\n<li>若想让父类序列化,则需让父类对象实现此接口</li>\n<li>若不想让父类对象序列化,则父类必须要有无参构造函数(可在此函数中为父类成员变量设置初始值)</li>\n</ol>\n</li>\n</ul>\n<h2>serialVersionUID</h2>\n<ul>\n<li>序列化ID不一致,即使类的成员变量都一致,也无法反序列化成功</li>\n<li>\n<p>实现了Serializable接口的类,如果不显式声明serialVersionUID</p>\n<ol>\n<li>编译器会根据类名、接口名和成员变量(名字,类型,访问控制符)等信息自动生成</li>\n<li>此时如果此类有新的改动,会导致反序列化失败</li>\n</ol>\n</li>\n<li>通过更新序列化ID可以控制类的版本更新</li>\n</ul>\n<h2>transient 关键字</h2>\n<ul>\n<li>声明为transient的域不会被序列化,反序列化之后为该类型的初始值</li>\n</ul>\n<h2>writeObject()方法 &#x26; readObject()方法</h2>\n<div class="gatsby-highlight">\n      <pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token keyword">implements</span> <span class="token class-name">Serializable</span> <span class="token punctuation">{</span>\n    \n    <span class="token keyword">transient</span> <span class="token keyword">private</span> Integer age <span class="token operator">=</span> null<span class="token punctuation">;</span>\n    \n\n    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">writeObject</span><span class="token punctuation">(</span>ObjectOutputStream out<span class="token punctuation">)</span> <span class="token keyword">throws</span> IOException <span class="token punctuation">{</span>\n        out<span class="token punctuation">.</span><span class="token function">defaultWriteObject</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        out<span class="token punctuation">.</span><span class="token function">writeInt</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">readObject</span><span class="token punctuation">(</span>ObjectInputStream in<span class="token punctuation">)</span> <span class="token keyword">throws</span> IOException<span class="token punctuation">,</span> ClassNotFoundException <span class="token punctuation">{</span>\n        in<span class="token punctuation">.</span><span class="token function">defaultReadObject</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        age <span class="token operator">=</span> in<span class="token punctuation">.</span><span class="token function">readInt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<ul>\n<li>可以利用此方法可以自定义序列化的内容,比如将标记为transient的域也写入</li>\n<li>序列化过程中,虚拟机会试图调用对象类的writeObject()方法和readObject()方法</li>\n<li>此方法为私有方法,利用虚拟机反射调用</li>\n<li>此方法设置为私有方法可以避免被继承或者覆盖</li>\n<li>如果父类实现了Serializable接口,而子类不想实现序列化,可以实现此方法并抛出NotSerializableException异常</li>\n</ul>\n<h2>ObjectOutputStream &#x26; ObjectInputStream</h2>\n<div class="gatsby-highlight">\n      <pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ObjectOutputStream</span>\n    <span class="token keyword">extends</span> <span class="token class-name">OutputStream</span> <span class="token keyword">implements</span> <span class="token class-name">ObjectOutput</span><span class="token punctuation">,</span> ObjectStreamConstants\n<span class="token punctuation">{</span>\n    <span class="token comment" spellcheck="true">// -- 序列化的关键函数</span>\n    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">writeObject0</span><span class="token punctuation">(</span>Object obj<span class="token punctuation">,</span> <span class="token keyword">boolean</span> unshared<span class="token punctuation">)</span>\n        <span class="token keyword">throws</span> IOException <span class="token punctuation">{</span>\n        <span class="token comment" spellcheck="true">// ......</span>\n        <span class="token comment" spellcheck="true">// remaining cases</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>obj <span class="token keyword">instanceof</span> <span class="token class-name">String</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token function">writeString</span><span class="token punctuation">(</span><span class="token punctuation">(</span>String<span class="token punctuation">)</span> obj<span class="token punctuation">,</span> unshared<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>cl<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token function">writeArray</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> desc<span class="token punctuation">,</span> unshared<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>obj <span class="token keyword">instanceof</span> <span class="token class-name">Enum</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token function">writeEnum</span><span class="token punctuation">(</span><span class="token punctuation">(</span>Enum<span class="token operator">&lt;</span><span class="token operator">?</span><span class="token operator">></span><span class="token punctuation">)</span> obj<span class="token punctuation">,</span> desc<span class="token punctuation">,</span> unshared<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>obj <span class="token keyword">instanceof</span> <span class="token class-name">Serializable</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token function">writeOrdinaryObject</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> desc<span class="token punctuation">,</span> unshared<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n            <span class="token keyword">if</span> <span class="token punctuation">(</span>extendedDebugInfo<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">NotSerializableException</span><span class="token punctuation">(</span>\n                    cl<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">"\\n"</span> <span class="token operator">+</span> debugInfoStack<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n                <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">NotSerializableException</span><span class="token punctuation">(</span>cl<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n        <span class="token comment" spellcheck="true">// ......</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<ul>\n<li>String,Array,Enum和实现了Serializable的对象才可以序列化,否则报异常</li>\n</ul>\n<h2>Externalizable 接口</h2>\n<div class="gatsby-highlight">\n      <pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Externalizable</span> <span class="token keyword">extends</span> <span class="token class-name">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span>Serializable</span> <span class="token punctuation">{</span>\n    <span class="token comment" spellcheck="true">/**\n     * The object implements the writeExternal method to save its contents\n     * by calling the methods of DataOutput for its primitive values or\n     * calling the writeObject method of ObjectOutput for objects, strings,\n     * and arrays.\n     *\n     * @serialData Overriding methods should use this tag to describe\n     *             the data layout of this Externalizable object.\n     *             List the sequence of element types and, if possible,\n     *             relate the element to a public/protected field and/or\n     *             method of this Externalizable class.\n     *\n     */</span>\n    <span class="token keyword">void</span> <span class="token function">writeExternal</span><span class="token punctuation">(</span>ObjectOutput out<span class="token punctuation">)</span> <span class="token keyword">throws</span> IOException<span class="token punctuation">;</span>\n\n    <span class="token comment" spellcheck="true">/**\n     * The object implements the readExternal method to restore its\n     * contents by calling the methods of DataInput for primitive\n     * types and readObject for objects, strings and arrays.  The\n     * readExternal method must read the values in the same sequence\n     * and with the same types as were written by writeExternal.\n     *\n     * @param in the stream to read data from in order to restore the object\n     * @exception IOException if I/O errors occur\n     * @exception ClassNotFoundException If the class for an object being\n     *              restored cannot be found.\n     */</span>\n    <span class="token keyword">void</span> <span class="token function">readExternal</span><span class="token punctuation">(</span>ObjectInput in<span class="token punctuation">)</span> <span class="token keyword">throws</span> IOException<span class="token punctuation">,</span> ClassNotFoundException<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<ul>\n<li>扩展了Serializable接口,实现此接口可以自定义序列化过程,JVM默认的序列化不会生效</li>\n<li>有两个方法,对应了普通序列化的<code>writeObject</code>和<code>readObject</code></li>\n<li>实现此接口的类在反序列化过程中,会调用类的无参构造函数,而实现Serializable接口则不会</li>\n<li>序列化的细节都需要程序员去完成</li>\n</ul>\n<h2>readResolve()方法</h2>\n<div class="gatsby-highlight">\n      <pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token keyword">implements</span> <span class="token class-name">Serializable</span> <span class="token punctuation">{</span>\n\n    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">InstanceHolder</span> <span class="token punctuation">{</span>\n        <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> Person instance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">"John"</span><span class="token punctuation">,</span> <span class="token number">31</span><span class="token punctuation">,</span> Gender<span class="token punctuation">.</span>MALE<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">public</span> <span class="token keyword">static</span> Person <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> InstanceHolder<span class="token punctuation">.</span>instance<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">private</span> String name <span class="token operator">=</span> null<span class="token punctuation">;</span>\n    <span class="token keyword">private</span> Integer age <span class="token operator">=</span> null<span class="token punctuation">;</span>\n    <span class="token keyword">private</span> Gender gender <span class="token operator">=</span> null<span class="token punctuation">;</span>\n    <span class="token comment" spellcheck="true">// 永远返回同一个实例对象</span>\n    <span class="token keyword">private</span> Object <span class="token function">readResolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> ObjectStreamException <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> InstanceHolder<span class="token punctuation">.</span>instance<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    \n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<ul>\n<li>因为普通反序列化过程中不需要使用构造函数,导致单例(singleton)的特性可能被破坏,利用此函数可以解决这个问题</li>\n<li>无论是实现Serializable接口，或是Externalizable接口，当从I/O流中读取对象时，readResolve()方法都会被调用到</li>\n</ul>\n<p>Q:</p>\n<ul>\n<li>什么是序列化</li>\n<li>如何实现 Java 序列化及注意事项</li>\n<li>Serializable与Externalizable的区别</li>\n</ul>\n<p><a href="http://javarevisited.blogspot.sg/2011/04/top-10-java-serialization-interview.html">Top 10 Java Serialization Interview Questions and Answers</a>\n<a href="http://www.blogjava.net/jiangshachina/archive/2012/02/13/369898.html">理解Java对象序列化</a></p>',frontmatter:{title:"Java Serialization",date:"November 16, 2017",tags:["java","serialization"]}}},pathContext:{path:"/java-serialization"}}}});
//# sourceMappingURL=path---java-serialization-7029b8109abf04260927.js.map