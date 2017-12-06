webpackJsonp([0xf215061db1b9b800],{"./node_modules/json-loader/index.js!./.cache/json/java-linked-list.json":function(n,s){n.exports={data:{site:{siteMetadata:{title:"Note Site",author:"stone"}},markdownRemark:{id:"/home/peng/develop/workspace/stone-site/src/pages/2017-11-03-java-linked-list/index.md absPath of file >>> MarkdownRemark",html:'<h1>Java LinkedList</h1>\n<ul>\n<li>LinkedList同时实现了List和Deque接口</li>\n<li>可以当做队列(Queue)或栈(Stack)使用,虽然首选还是ArrayDeque</li>\n<li>没有实现同步</li>\n<li>底层通过<strong>双向链表实现</strong></li>\n</ul>\n<p>链表节点为内部类Node,LinkedList通过first和last引用分别指向链表的第一个和最后一个元素。\n注意这里没有所谓的哑元，当链表为空的时候first和last都指向null。</p>\n<div class="gatsby-highlight">\n      <pre class="language-java"><code><span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">Node</span><span class="token operator">&lt;</span>E<span class="token operator">></span> <span class="token punctuation">{</span>\n    E item<span class="token punctuation">;</span>\n    Node<span class="token operator">&lt;</span>E<span class="token operator">></span> next<span class="token punctuation">;</span>\n    Node<span class="token operator">&lt;</span>E<span class="token operator">></span> prev<span class="token punctuation">;</span>\n    <span class="token function">Node</span><span class="token punctuation">(</span>Node<span class="token operator">&lt;</span>E<span class="token operator">></span> prev<span class="token punctuation">,</span> E element<span class="token punctuation">,</span> Node<span class="token operator">&lt;</span>E<span class="token operator">></span> next<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span>item <span class="token operator">=</span> element<span class="token punctuation">;</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span>next <span class="token operator">=</span> next<span class="token punctuation">;</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span>prev <span class="token operator">=</span> prev<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h2>boolean add(E e)</h2>\n<p>将一个元素(可为null)添加到list的末尾,\n时间复杂度 O(1),实现比较简单</p>\n<div class="gatsby-highlight">\n      <pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">add</span><span class="token punctuation">(</span>E e<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">linkLast</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">void</span> <span class="token function">linkLast</span><span class="token punctuation">(</span>E e<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">final</span> Node<span class="token operator">&lt;</span>E<span class="token operator">></span> l <span class="token operator">=</span> last<span class="token punctuation">;</span>\n    <span class="token keyword">final</span> Node<span class="token operator">&lt;</span>E<span class="token operator">></span> newNode <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token operator">&lt;</span><span class="token operator">></span><span class="token punctuation">(</span>l<span class="token punctuation">,</span> e<span class="token punctuation">,</span> null<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    last <span class="token operator">=</span> newNode<span class="token punctuation">;</span>\n    <span class="token comment" spellcheck="true">// 若原链表为空,则为第一个元素</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>l <span class="token operator">==</span> null<span class="token punctuation">)</span>\n        first <span class="token operator">=</span> newNode<span class="token punctuation">;</span>\n    <span class="token keyword">else</span>\n        l<span class="token punctuation">.</span>next <span class="token operator">=</span> newNode<span class="token punctuation">;</span>\n    size<span class="token operator">++</span><span class="token punctuation">;</span>\n    <span class="token comment" spellcheck="true">// AbstractList中的字段，用于标记list被修改的次数</span>\n    modCount<span class="token operator">++</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h2>void add(int index, E element)</h2>\n<p>讲元素插入到链表中的指定位置,\n时间复杂度O(n),需要线性查找到插入的具体位置(函数<code>Node&#x3C;E> node(int index)</code>)</p>\n<div class="gatsby-highlight">\n      <pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">int</span> index<span class="token punctuation">,</span> E element<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment" spellcheck="true">// 检查 index >= 0 &amp;&amp; index &lt;= size</span>\n    <span class="token function">checkPositionIndex</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">==</span> size<span class="token punctuation">)</span>\n        <span class="token function">linkLast</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// 等同于add(e)</span>\n    <span class="token keyword">else</span>\n        <span class="token function">linkBefore</span><span class="token punctuation">(</span>element<span class="token punctuation">,</span> <span class="token function">node</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">void</span> <span class="token function">linkBefore</span><span class="token punctuation">(</span>E e<span class="token punctuation">,</span> Node<span class="token operator">&lt;</span>E<span class="token operator">></span> succ<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment" spellcheck="true">// assert succ != null;</span>\n    <span class="token keyword">final</span> Node<span class="token operator">&lt;</span>E<span class="token operator">></span> pred <span class="token operator">=</span> succ<span class="token punctuation">.</span>prev<span class="token punctuation">;</span>\n    <span class="token keyword">final</span> Node<span class="token operator">&lt;</span>E<span class="token operator">></span> newNode <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token operator">&lt;</span><span class="token operator">></span><span class="token punctuation">(</span>pred<span class="token punctuation">,</span> e<span class="token punctuation">,</span> succ<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    succ<span class="token punctuation">.</span>prev <span class="token operator">=</span> newNode<span class="token punctuation">;</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>pred <span class="token operator">==</span> null<span class="token punctuation">)</span> <span class="token comment" spellcheck="true">// pred为前一个节点,若pred为null,则表示插入位置为0</span>\n        first <span class="token operator">=</span> newNode<span class="token punctuation">;</span>\n    <span class="token keyword">else</span>\n        pred<span class="token punctuation">.</span>next <span class="token operator">=</span> newNode<span class="token punctuation">;</span>\n    size<span class="token operator">++</span><span class="token punctuation">;</span>\n    modCount<span class="token operator">++</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\nNode<span class="token operator">&lt;</span>E<span class="token operator">></span> <span class="token function">node</span><span class="token punctuation">(</span><span class="token keyword">int</span> index<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment" spellcheck="true">// assert isElementIndex(index);</span>\n    <span class="token comment" spellcheck="true">// 由于是双向链表,两个方向都可以遍历,根据index是否大于中点决定从哪个方向遍历</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">&lt;</span> <span class="token punctuation">(</span>size <span class="token operator">>></span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        Node<span class="token operator">&lt;</span>E<span class="token operator">></span> x <span class="token operator">=</span> first<span class="token punctuation">;</span>\n        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> index<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>\n            x <span class="token operator">=</span> x<span class="token punctuation">.</span>next<span class="token punctuation">;</span>\n        <span class="token keyword">return</span> x<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n        Node<span class="token operator">&lt;</span>E<span class="token operator">></span> x <span class="token operator">=</span> last<span class="token punctuation">;</span>\n        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> size <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">></span> index<span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span>\n            x <span class="token operator">=</span> x<span class="token punctuation">.</span>prev<span class="token punctuation">;</span>\n        <span class="token keyword">return</span> x<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>',frontmatter:{title:"Java LinkedList",date:"November 03, 2017"}}},pathContext:{path:"/java-linked-list"}}}});
//# sourceMappingURL=path---java-linked-list-7e759d78089ca61b4723.js.map