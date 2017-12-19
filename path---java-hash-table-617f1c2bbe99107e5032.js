webpackJsonp([0x3d13582d241a6c00],{"./node_modules/json-loader/index.js!./.cache/json/java-hash-table.json":function(n,a){n.exports={data:{site:{siteMetadata:{title:"Note Site",author:"stone"}},markdownRemark:{id:"/home/peng/HUE/WorkSpace/selfDevelop/note-site/src/pages/2017-11-09-java-hash-table/index.md absPath of file >>> MarkdownRemark",html:'<h1>Java Hashtable</h1>\n<ul>\n<li>抽象父类为Dictionary (一个过时的类)</li>\n<li>实现同步（线程安全）</li>\n<li>key和value都不允许为空</li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Hashtable</span><span class="token operator">&lt;</span>K<span class="token punctuation">,</span>V<span class="token operator">></span>\n    <span class="token keyword">extends</span> <span class="token class-name">Dictionary</span><span class="token operator">&lt;</span>K<span class="token punctuation">,</span>V<span class="token operator">></span>\n    <span class="token keyword">implements</span> <span class="token class-name">Map</span><span class="token operator">&lt;</span>K<span class="token punctuation">,</span>V<span class="token operator">></span><span class="token punctuation">,</span> Cloneable<span class="token punctuation">,</span> java<span class="token punctuation">.</span>io<span class="token punctuation">.</span>Serializable <span class="token punctuation">{</span>\n    <span class="token comment" spellcheck="true">/**\n     * The hash table data.\n     */</span>\n    <span class="token keyword">private</span> <span class="token keyword">transient</span> Entry<span class="token operator">&lt;</span><span class="token operator">?</span><span class="token punctuation">,</span><span class="token operator">?</span><span class="token operator">></span><span class="token punctuation">[</span><span class="token punctuation">]</span> table<span class="token punctuation">;</span>\n\n    <span class="token comment" spellcheck="true">/**\n     * The total number of entries in the hash table.\n     * -- Hashtable的大小\n     */</span>\n    <span class="token keyword">private</span> <span class="token keyword">transient</span> <span class="token keyword">int</span> count<span class="token punctuation">;</span>\n\n    <span class="token comment" spellcheck="true">/**\n     * The table is rehashed when its size exceeds this threshold.  (The\n     * value of this field is (int)(capacity * loadFactor).)\n     * -- 阈值　用于判断是否需要扩容\n     * @serial\n     */</span>\n    <span class="token keyword">private</span> <span class="token keyword">int</span> threshold<span class="token punctuation">;</span>\n\n    <span class="token comment" spellcheck="true">/**\n     * The load factor for the hashtable.\n     * -- 负载因子\n     * @serial\n     */</span>\n    <span class="token keyword">private</span> <span class="token keyword">float</span> loadFactor<span class="token punctuation">;</span>\n\n    <span class="token comment" spellcheck="true">/**\n     * The number of times this Hashtable has been structurally modified\n     * Structural modifications are those that change the number of entries in\n     * the Hashtable or otherwise modify its internal structure (e.g.,\n     * rehash).  This field is used to make iterators on Collection-views of\n     * the Hashtable fail-fast.  (See ConcurrentModificationException).\n     * -- 记录修改次数 用于实现fail-fast\n     */</span>\n    <span class="token keyword">private</span> <span class="token keyword">transient</span> <span class="token keyword">int</span> modCount <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h2>put()</h2>\n<div class="gatsby-highlight">\n      <pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">synchronized</span> V <span class="token function">put</span><span class="token punctuation">(</span>K key<span class="token punctuation">,</span> V value<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment" spellcheck="true">// Make sure the value is not null</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>value <span class="token operator">==</span> null<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">NullPointerException</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token comment" spellcheck="true">// Makes sure the key is not already in the hashtable.</span>\n    Entry<span class="token operator">&lt;</span><span class="token operator">?</span><span class="token punctuation">,</span><span class="token operator">?</span><span class="token operator">></span> tab<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> table<span class="token punctuation">;</span>\n    <span class="token keyword">int</span> hash <span class="token operator">=</span> key<span class="token punctuation">.</span><span class="token function">hashCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">int</span> index <span class="token operator">=</span> <span class="token punctuation">(</span>hash <span class="token operator">&amp;</span> <span class="token number">0x7FFFFFFF</span><span class="token punctuation">)</span> <span class="token operator">%</span> tab<span class="token punctuation">.</span>length<span class="token punctuation">;</span>\n    <span class="token annotation punctuation">@SuppressWarnings</span><span class="token punctuation">(</span><span class="token string">"unchecked"</span><span class="token punctuation">)</span>\n    Entry<span class="token operator">&lt;</span>K<span class="token punctuation">,</span>V<span class="token operator">></span> entry <span class="token operator">=</span> <span class="token punctuation">(</span>Entry<span class="token operator">&lt;</span>K<span class="token punctuation">,</span>V<span class="token operator">></span><span class="token punctuation">)</span>tab<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">;</span>\n    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token punctuation">;</span> entry <span class="token operator">!=</span> null <span class="token punctuation">;</span> entry <span class="token operator">=</span> entry<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>entry<span class="token punctuation">.</span>hash <span class="token operator">==</span> hash<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> entry<span class="token punctuation">.</span>key<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            V old <span class="token operator">=</span> entry<span class="token punctuation">.</span>value<span class="token punctuation">;</span>\n            entry<span class="token punctuation">.</span>value <span class="token operator">=</span> value<span class="token punctuation">;</span>\n            <span class="token keyword">return</span> old<span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token function">addEntry</span><span class="token punctuation">(</span>hash<span class="token punctuation">,</span> key<span class="token punctuation">,</span> value<span class="token punctuation">,</span> index<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> null<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<ul>\n<li>put方法用<code>synchronized</code>关键字实现同步</li>\n<li>判断value是否为空,为空则抛出异常</li>\n<li>直接计算key对象的hashCode(没有做非空检查,即不允许key为空)</li>\n<li>将hashCode模table数组的长度得到index</li>\n<li>若<code>table[index]</code>元素不为空,则迭代遍历,若得到相同的key则直接替换,并返回旧value</li>\n<li>若key不存在于table中,调用addEntry将其加入table</li>\n</ul>\n<h2>addEntry</h2>\n<div class="gatsby-highlight">\n      <pre class="language-java"><code><span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">addEntry</span><span class="token punctuation">(</span><span class="token keyword">int</span> hash<span class="token punctuation">,</span> K key<span class="token punctuation">,</span> V value<span class="token punctuation">,</span> <span class="token keyword">int</span> index<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    modCount<span class="token operator">++</span><span class="token punctuation">;</span>\n\n    Entry<span class="token operator">&lt;</span><span class="token operator">?</span><span class="token punctuation">,</span><span class="token operator">?</span><span class="token operator">></span> tab<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> table<span class="token punctuation">;</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>count <span class="token operator">>=</span> threshold<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token comment" spellcheck="true">// Rehash the table if the threshold is exceeded</span>\n        <span class="token function">rehash</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        tab <span class="token operator">=</span> table<span class="token punctuation">;</span>\n        hash <span class="token operator">=</span> key<span class="token punctuation">.</span><span class="token function">hashCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        index <span class="token operator">=</span> <span class="token punctuation">(</span>hash <span class="token operator">&amp;</span> <span class="token number">0x7FFFFFFF</span><span class="token punctuation">)</span> <span class="token operator">%</span> tab<span class="token punctuation">.</span>length<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token comment" spellcheck="true">// Creates the new entry.</span>\n    <span class="token annotation punctuation">@SuppressWarnings</span><span class="token punctuation">(</span><span class="token string">"unchecked"</span><span class="token punctuation">)</span>\n    Entry<span class="token operator">&lt;</span>K<span class="token punctuation">,</span>V<span class="token operator">></span> e <span class="token operator">=</span> <span class="token punctuation">(</span>Entry<span class="token operator">&lt;</span>K<span class="token punctuation">,</span>V<span class="token operator">></span><span class="token punctuation">)</span> tab<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">;</span>\n    tab<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Entry</span><span class="token operator">&lt;</span><span class="token operator">></span><span class="token punctuation">(</span>hash<span class="token punctuation">,</span> key<span class="token punctuation">,</span> value<span class="token punctuation">,</span> e<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    count<span class="token operator">++</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<ul>\n<li>判断count是否等于threshold,是则调用rehash增大table的大小</li>\n<li>拿到<code>table[index]</code>位置上的引用(可能为空)</li>\n<li>新建一个Entry并插入到<code>table[index]</code>的位置,其next指向其旧的引用</li>\n</ul>\n<h2>rehash()</h2>\n<p>当count的大小达到threshold时调用此函数</p>\n<div class="gatsby-highlight">\n      <pre class="language-java"><code><span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">rehash</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">int</span> oldCapacity <span class="token operator">=</span> table<span class="token punctuation">.</span>length<span class="token punctuation">;</span>\n    Entry<span class="token operator">&lt;</span><span class="token operator">?</span><span class="token punctuation">,</span><span class="token operator">?</span><span class="token operator">></span><span class="token punctuation">[</span><span class="token punctuation">]</span> oldMap <span class="token operator">=</span> table<span class="token punctuation">;</span>\n\n    <span class="token comment" spellcheck="true">// overflow-conscious code</span>\n    <span class="token keyword">int</span> newCapacity <span class="token operator">=</span> <span class="token punctuation">(</span>oldCapacity <span class="token operator">&lt;&lt;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>newCapacity <span class="token operator">-</span> MAX_ARRAY_SIZE <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>oldCapacity <span class="token operator">==</span> MAX_ARRAY_SIZE<span class="token punctuation">)</span>\n            <span class="token comment" spellcheck="true">// Keep running with MAX_ARRAY_SIZE buckets</span>\n            <span class="token keyword">return</span><span class="token punctuation">;</span>\n        newCapacity <span class="token operator">=</span> MAX_ARRAY_SIZE<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    Entry<span class="token operator">&lt;</span><span class="token operator">?</span><span class="token punctuation">,</span><span class="token operator">?</span><span class="token operator">></span><span class="token punctuation">[</span><span class="token punctuation">]</span> newMap <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Entry</span><span class="token operator">&lt;</span><span class="token operator">?</span><span class="token punctuation">,</span><span class="token operator">?</span><span class="token operator">></span><span class="token punctuation">[</span>newCapacity<span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n    modCount<span class="token operator">++</span><span class="token punctuation">;</span>\n    threshold <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span>Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>newCapacity <span class="token operator">*</span> loadFactor<span class="token punctuation">,</span> MAX_ARRAY_SIZE <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    table <span class="token operator">=</span> newMap<span class="token punctuation">;</span>\n\n    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> oldCapacity <span class="token punctuation">;</span> i<span class="token operator">--</span> <span class="token operator">></span> <span class="token number">0</span> <span class="token punctuation">;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">for</span> <span class="token punctuation">(</span>Entry<span class="token operator">&lt;</span>K<span class="token punctuation">,</span>V<span class="token operator">></span> old <span class="token operator">=</span> <span class="token punctuation">(</span>Entry<span class="token operator">&lt;</span>K<span class="token punctuation">,</span>V<span class="token operator">></span><span class="token punctuation">)</span>oldMap<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token punctuation">;</span> old <span class="token operator">!=</span> null <span class="token punctuation">;</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            Entry<span class="token operator">&lt;</span>K<span class="token punctuation">,</span>V<span class="token operator">></span> e <span class="token operator">=</span> old<span class="token punctuation">;</span>\n            old <span class="token operator">=</span> old<span class="token punctuation">.</span>next<span class="token punctuation">;</span>\n\n            <span class="token keyword">int</span> index <span class="token operator">=</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>hash <span class="token operator">&amp;</span> <span class="token number">0x7FFFFFFF</span><span class="token punctuation">)</span> <span class="token operator">%</span> newCapacity<span class="token punctuation">;</span>\n            e<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token punctuation">(</span>Entry<span class="token operator">&lt;</span>K<span class="token punctuation">,</span>V<span class="token operator">></span><span class="token punctuation">)</span>newMap<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">;</span>\n            newMap<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> e<span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<ul>\n<li>数组大小增大为(2n+1)</li>\n<li>遍历旧的table,遍历每个index上的链表,根据其hashCode放入新的table</li>\n</ul>\n<h2>get()</h2>\n<div class="gatsby-highlight">\n      <pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">synchronized</span> V <span class="token function">get</span><span class="token punctuation">(</span>Object key<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    Entry<span class="token operator">&lt;</span><span class="token operator">?</span><span class="token punctuation">,</span><span class="token operator">?</span><span class="token operator">></span> tab<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> table<span class="token punctuation">;</span>\n    <span class="token keyword">int</span> hash <span class="token operator">=</span> key<span class="token punctuation">.</span><span class="token function">hashCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">int</span> index <span class="token operator">=</span> <span class="token punctuation">(</span>hash <span class="token operator">&amp;</span> <span class="token number">0x7FFFFFFF</span><span class="token punctuation">)</span> <span class="token operator">%</span> tab<span class="token punctuation">.</span>length<span class="token punctuation">;</span>\n    <span class="token keyword">for</span> <span class="token punctuation">(</span>Entry<span class="token operator">&lt;</span><span class="token operator">?</span><span class="token punctuation">,</span><span class="token operator">?</span><span class="token operator">></span> e <span class="token operator">=</span> tab<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token punctuation">;</span> e <span class="token operator">!=</span> null <span class="token punctuation">;</span> e <span class="token operator">=</span> e<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>hash <span class="token operator">==</span> hash<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> e<span class="token punctuation">.</span>key<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">return</span> <span class="token punctuation">(</span>V<span class="token punctuation">)</span>e<span class="token punctuation">.</span>value<span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">return</span> null<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<ul>\n<li>get方法用<code>synchronized</code>关键字实现同步</li>\n<li>寻找value的方法与put相同,不再赘述</li>\n</ul>',frontmatter:{title:"Java Hashtable",date:"November 08, 2017",tags:["java","java collection framework"]}}},pathContext:{path:"/java-hash-table"}}}});
//# sourceMappingURL=path---java-hash-table-617f1c2bbe99107e5032.js.map