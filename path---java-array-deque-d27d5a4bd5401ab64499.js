webpackJsonp([0xcf47160fff210000],{"./node_modules/json-loader/index.js!./.cache/json/java-array-deque.json":function(n,s){n.exports={data:{site:{siteMetadata:{title:"Note Site",author:"stone"}},markdownRemark:{id:"/home/peng/develop/workspace/stone-site/src/pages/2017-11-04-java-array-deque/index.md absPath of file >>> MarkdownRemark",html:'<h1>Java ArrayDeque</h1>\n<p>ArrayDeque和LinkedList是Deque的两个通用实现，\n官方更推荐使用AarryDeque用作栈和队列.</p>\n<ul>\n<li>底层通过<strong>循环数组(circular array)</strong>实现</li>\n<li>不允许插入null元素</li>\n<li>没有实现同步(不是线程安全)</li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ArrayDeque</span><span class="token operator">&lt;</span>E<span class="token operator">></span> <span class="token keyword">extends</span> <span class="token class-name">AbstractCollection</span><span class="token operator">&lt;</span>E<span class="token operator">></span>\n                           <span class="token keyword">implements</span> <span class="token class-name">Deque</span><span class="token operator">&lt;</span>E<span class="token operator">></span><span class="token punctuation">,</span> Cloneable<span class="token punctuation">,</span> Serializable\n<span class="token punctuation">{</span>\n    <span class="token comment" spellcheck="true">/**\n     * The array in which the elements of the deque are stored.\n     * The capacity of the deque is the length of this array, which is\n     * always a power of two. The array is never allowed to become\n     * full, except transiently within an addX method where it is\n     * resized (see doubleCapacity) immediately upon becoming full,\n     * thus avoiding head and tail wrapping around to equal each\n     * other.  We also guarantee that all array cells not holding\n     * deque elements are always null.\n     * 存放数据的数组,此数组的大小即此deque的容量(capacity)\n     * 此数组的大小永远为2的幂\n     * 此数组中没有存放元素的位置为null(即不允许插入null至)\n     * 此数组永远不允许填满(doubleCapacity会在此数组填满后立即调用)\n     */</span>\n    <span class="token keyword">transient</span> Object<span class="token punctuation">[</span><span class="token punctuation">]</span> elements<span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// non-private to simplify nested class access</span>\n\n    <span class="token comment" spellcheck="true">/**\n     * The index of the element at the head of the deque (which is the\n     * element that would be removed by remove() or pop()); or an\n     * arbitrary number equal to tail if the deque is empty.\n     * 指向队列的第一个元素,或等于tail(此时队列为空)\n     */</span>\n    <span class="token keyword">transient</span> <span class="token keyword">int</span> head<span class="token punctuation">;</span>\n\n    <span class="token comment" spellcheck="true">/**\n     * The index at which the next element would be added to the tail\n     * of the deque (via addLast(E), add(E), or push(E)).\n     * 指向队尾的第一个可以插入元素的空位\n     */</span>\n    <span class="token keyword">transient</span> <span class="token keyword">int</span> tail<span class="token punctuation">;</span>\n <span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h2>　void addFirst(E e)</h2>\n<div class="gatsby-highlight">\n      <pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">addFirst</span><span class="token punctuation">(</span>E e<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>e <span class="token operator">==</span> null<span class="token punctuation">)</span>\n        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">NullPointerException</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    elements<span class="token punctuation">[</span>head <span class="token operator">=</span> <span class="token punctuation">(</span>head <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> <span class="token punctuation">(</span>elements<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token operator">=</span> e<span class="token punctuation">;</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>head <span class="token operator">==</span> tail<span class="token punctuation">)</span>\n        <span class="token function">doubleCapacity</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<ul>\n<li>不允许插入空值</li>\n<li>插入位置需要考虑下标越界的问题　　\n<code>(head - 1) &#x26; (elements.length - 1)</code>\n这段代码相当于利用取余解决了<code>head-1</code>为<code>-1</code>的情况<br>\n因为elements.length永远为2的幂,减一之后二进制低位全为1,\n与-1取与之后等于其本身,即element数组的最后一个位置</li>\n<li>空间问题是在插入之后解决的，即tail总是指向下一个可插入的空位</li>\n</ul>\n<h2>void addLast(E e)</h2>\n<p>基本思路和addFirst一样</p>\n<div class="gatsby-highlight">\n      <pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">addLast</span><span class="token punctuation">(</span>E e<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>e <span class="token operator">==</span> null<span class="token punctuation">)</span>\n        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">NullPointerException</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    elements<span class="token punctuation">[</span>tail<span class="token punctuation">]</span> <span class="token operator">=</span> e<span class="token punctuation">;</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span> <span class="token punctuation">(</span>tail <span class="token operator">=</span> <span class="token punctuation">(</span>tail <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> <span class="token punctuation">(</span>elements<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">==</span> head<span class="token punctuation">)</span>\n        <span class="token function">doubleCapacity</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-java"><code><span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">doubleCapacity</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">assert</span> head <span class="token operator">==</span> tail<span class="token punctuation">;</span>\n    <span class="token keyword">int</span> p <span class="token operator">=</span> head<span class="token punctuation">;</span>\n    <span class="token keyword">int</span> n <span class="token operator">=</span> elements<span class="token punctuation">.</span>length<span class="token punctuation">;</span>\n    <span class="token keyword">int</span> r <span class="token operator">=</span> n <span class="token operator">-</span> p<span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// number of elements to the right of p</span>\n    <span class="token keyword">int</span> newCapacity <span class="token operator">=</span> n <span class="token operator">&lt;&lt;</span> <span class="token number">1</span><span class="token punctuation">;</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>newCapacity <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span>\n        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">IllegalStateException</span><span class="token punctuation">(</span><span class="token string">"Sorry, deque too big"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    Object<span class="token punctuation">[</span><span class="token punctuation">]</span> a <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">[</span>newCapacity<span class="token punctuation">]</span><span class="token punctuation">;</span>\n    System<span class="token punctuation">.</span><span class="token function">arraycopy</span><span class="token punctuation">(</span>elements<span class="token punctuation">,</span> p<span class="token punctuation">,</span> a<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> r<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    System<span class="token punctuation">.</span><span class="token function">arraycopy</span><span class="token punctuation">(</span>elements<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> a<span class="token punctuation">,</span> r<span class="token punctuation">,</span> p<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    elements <span class="token operator">=</span> a<span class="token punctuation">;</span>\n    head <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n    tail <span class="token operator">=</span> n<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<ul>\n<li>扩容为原数组的两倍(保持capacity大小的2的幂)</li>\n<li>复制分两次进行,先复制head右边的元素,再复制head左边的</li>\n<li>扩容之后head为0,tail为元素的个数</li>\n</ul>\n<h2>poll</h2>\n<div class="gatsby-highlight">\n      <pre class="language-java"><code><span class="token keyword">public</span> E <span class="token function">pollFirst</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">int</span> h <span class="token operator">=</span> head<span class="token punctuation">;</span>\n    <span class="token annotation punctuation">@SuppressWarnings</span><span class="token punctuation">(</span><span class="token string">"unchecked"</span><span class="token punctuation">)</span>\n    E result <span class="token operator">=</span> <span class="token punctuation">(</span>E<span class="token punctuation">)</span> elements<span class="token punctuation">[</span>h<span class="token punctuation">]</span><span class="token punctuation">;</span>\n    <span class="token comment" spellcheck="true">// Element is null if deque empty</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>result <span class="token operator">==</span> null<span class="token punctuation">)</span>\n        <span class="token keyword">return</span> null<span class="token punctuation">;</span>\n    elements<span class="token punctuation">[</span>h<span class="token punctuation">]</span> <span class="token operator">=</span> null<span class="token punctuation">;</span>     <span class="token comment" spellcheck="true">// Must null out slot</span>\n    head <span class="token operator">=</span> <span class="token punctuation">(</span>h <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> <span class="token punctuation">(</span>elements<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> result<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">public</span> E <span class="token function">pollLast</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">int</span> t <span class="token operator">=</span> <span class="token punctuation">(</span>tail <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> <span class="token punctuation">(</span>elements<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token annotation punctuation">@SuppressWarnings</span><span class="token punctuation">(</span><span class="token string">"unchecked"</span><span class="token punctuation">)</span>\n    E result <span class="token operator">=</span> <span class="token punctuation">(</span>E<span class="token punctuation">)</span> elements<span class="token punctuation">[</span>t<span class="token punctuation">]</span><span class="token punctuation">;</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>result <span class="token operator">==</span> null<span class="token punctuation">)</span>\n        <span class="token keyword">return</span> null<span class="token punctuation">;</span>\n    elements<span class="token punctuation">[</span>t<span class="token punctuation">]</span> <span class="token operator">=</span> null<span class="token punctuation">;</span>\n    tail <span class="token operator">=</span> t<span class="token punctuation">;</span>\n    <span class="token keyword">return</span> result<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<ul>\n<li>若poll取出的元素为空,代表此deque为空</li>\n<li>取出元素后要将数组中相应的位置赋值为null,防止内存泄露</li>\n</ul>\n<h2>peek</h2>\n<div class="gatsby-highlight">\n      <pre class="language-java"><code><span class="token annotation punctuation">@SuppressWarnings</span><span class="token punctuation">(</span><span class="token string">"unchecked"</span><span class="token punctuation">)</span>\n<span class="token keyword">public</span> E <span class="token function">peekFirst</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment" spellcheck="true">// elements[head] is null if deque empty</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>E<span class="token punctuation">)</span> elements<span class="token punctuation">[</span>head<span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token annotation punctuation">@SuppressWarnings</span><span class="token punctuation">(</span><span class="token string">"unchecked"</span><span class="token punctuation">)</span>\n<span class="token keyword">public</span> E <span class="token function">peekLast</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>E<span class="token punctuation">)</span> elements<span class="token punctuation">[</span><span class="token punctuation">(</span>tail <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> <span class="token punctuation">(</span>elements<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>',frontmatter:{title:"Java ArrayDeque",date:"November 04, 2017",tags:["java","java collection framework"]}}},pathContext:{path:"/java-array-deque"}}}});
//# sourceMappingURL=path---java-array-deque-d27d5a4bd5401ab64499.js.map