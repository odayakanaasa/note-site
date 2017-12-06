webpackJsonp([0x452442d5ae113c00],{"./node_modules/json-loader/index.js!./.cache/json/java-priority-queue.json":function(n,s){n.exports={data:{site:{siteMetadata:{title:"Note Site",author:"stone"}},markdownRemark:{id:"/home/peng/develop/workspace/stone-site/src/pages/2017-11-11-java-priority-queue/index.md absPath of file >>> MarkdownRemark",html:'<ul>\n<li>优先队列,能保证每次取出来的元素都是队列中权值最小的(C++中每次取最大的元素)</li>\n<li>元素大小比较可使用构造时传入的比较器或者使用元素的自然顺序(natural order)</li>\n<li>不允许放入null元素</li>\n<li>通过完全二叉树实现的最小堆,底层通过数组实现</li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">PriorityQueue</span><span class="token operator">&lt;</span>E<span class="token operator">></span> <span class="token keyword">extends</span> <span class="token class-name">AbstractQueue</span><span class="token operator">&lt;</span>E<span class="token operator">></span>\n    <span class="token keyword">implements</span> <span class="token class-name">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span>Serializable</span> <span class="token punctuation">{</span>\n    <span class="token comment" spellcheck="true">/**\n     * Priority queue represented as a balanced binary heap: the two\n     * children of queue[n] are queue[2*n+1] and queue[2*(n+1)].  The\n     * priority queue is ordered by comparator, or by the elements\'\n     * natural ordering, if comparator is null: For each node n in the\n     * heap and each descendant d of n, n &lt;= d.  The element with the\n     * lowest value is in queue[0], assuming the queue is nonempty.\n     */</span>\n    <span class="token keyword">transient</span> Object<span class="token punctuation">[</span><span class="token punctuation">]</span> queue<span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// non-private to simplify nested class access</span>\n\n    <span class="token comment" spellcheck="true">/**\n     * The number of elements in the priority queue.\n     * -- 当前队列中的元素个数\n     */</span>\n    <span class="token keyword">private</span> <span class="token keyword">int</span> size <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n\n    <span class="token comment" spellcheck="true">/**\n     * The comparator, or null if priority queue uses elements\'\n     * natural ordering.\n     */</span>\n    <span class="token keyword">private</span> <span class="token keyword">final</span> Comparator<span class="token operator">&lt;</span><span class="token operator">?</span> <span class="token keyword">super</span> E<span class="token operator">></span> comparator<span class="token punctuation">;</span>\n\n    <span class="token comment" spellcheck="true">/**\n     * The number of times this priority queue has been\n     * &lt;i>structurally modified&lt;/i>.  See AbstractList for gory details.\n     */</span>\n    <span class="token keyword">transient</span> <span class="token keyword">int</span> modCount <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// non-private to simplify nested class access</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h2>add() &#x26; offer()</h2>\n<div class="gatsby-highlight">\n      <pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">add</span><span class="token punctuation">(</span>E e<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token function">offer</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">offer</span><span class="token punctuation">(</span>E e<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>e <span class="token operator">==</span> null<span class="token punctuation">)</span> <span class="token comment" spellcheck="true">// -- 不允许放入空元素</span>\n        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">NullPointerException</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    modCount<span class="token operator">++</span><span class="token punctuation">;</span>\n    <span class="token keyword">int</span> i <span class="token operator">=</span> size<span class="token punctuation">;</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">>=</span> queue<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token comment" spellcheck="true">// -- 若队列中元素已满,则扩容</span>\n        <span class="token function">grow</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    size <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token comment" spellcheck="true">// -- 若队列为空,则插入为第一个元素</span>\n        queue<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> e<span class="token punctuation">;</span>\n    <span class="token keyword">else</span>\n        <span class="token function">siftUp</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> e<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">grow</span><span class="token punctuation">(</span><span class="token keyword">int</span> minCapacity<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">int</span> oldCapacity <span class="token operator">=</span> queue<span class="token punctuation">.</span>length<span class="token punctuation">;</span>\n    <span class="token comment" spellcheck="true">// -- 若size小于64,则增大100%, 否则增大50%</span>\n    <span class="token comment" spellcheck="true">// Double size if small; else grow by 50%</span>\n    <span class="token keyword">int</span> newCapacity <span class="token operator">=</span> oldCapacity <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>oldCapacity <span class="token operator">&lt;</span> <span class="token number">64</span><span class="token punctuation">)</span> <span class="token operator">?</span>\n                                     <span class="token punctuation">(</span>oldCapacity <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">:</span>\n                                     <span class="token punctuation">(</span>oldCapacity <span class="token operator">>></span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token comment" spellcheck="true">// overflow-conscious code</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>newCapacity <span class="token operator">-</span> MAX_ARRAY_SIZE <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span>\n        newCapacity <span class="token operator">=</span> <span class="token function">hugeCapacity</span><span class="token punctuation">(</span>minCapacity<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token comment" spellcheck="true">// -- 简单地把原数组的内容完全拷过去</span>\n    queue <span class="token operator">=</span> Arrays<span class="token punctuation">.</span><span class="token function">copyOf</span><span class="token punctuation">(</span>queue<span class="token punctuation">,</span> newCapacity<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h2>siftUp(int k, E x)</h2>\n<div class="gatsby-highlight">\n      <pre class="language-java"><code><span class="token comment" spellcheck="true">// -- k: 准备插入的位置, x: 插入的元素</span>\n<span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">siftUp</span><span class="token punctuation">(</span><span class="token keyword">int</span> k<span class="token punctuation">,</span> E x<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>comparator <span class="token operator">!=</span> null<span class="token punctuation">)</span>\n        <span class="token function">siftUpUsingComparator</span><span class="token punctuation">(</span>k<span class="token punctuation">,</span> x<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">else</span>\n        <span class="token function">siftUpComparable</span><span class="token punctuation">(</span>k<span class="token punctuation">,</span> x<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token annotation punctuation">@SuppressWarnings</span><span class="token punctuation">(</span><span class="token string">"unchecked"</span><span class="token punctuation">)</span>\n<span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">siftUpComparable</span><span class="token punctuation">(</span><span class="token keyword">int</span> k<span class="token punctuation">,</span> E x<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    Comparable<span class="token operator">&lt;</span><span class="token operator">?</span> <span class="token keyword">super</span> E<span class="token operator">></span> key <span class="token operator">=</span> <span class="token punctuation">(</span>Comparable<span class="token operator">&lt;</span><span class="token operator">?</span> <span class="token keyword">super</span> E<span class="token operator">></span><span class="token punctuation">)</span> x<span class="token punctuation">;</span>\n    <span class="token keyword">while</span> <span class="token punctuation">(</span>k <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">int</span> parent <span class="token operator">=</span> <span class="token punctuation">(</span>k <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">>>></span> <span class="token number">1</span><span class="token punctuation">;</span>\n        Object e <span class="token operator">=</span> queue<span class="token punctuation">[</span>parent<span class="token punctuation">]</span><span class="token punctuation">;</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>key<span class="token punctuation">.</span><span class="token function">compareTo</span><span class="token punctuation">(</span><span class="token punctuation">(</span>E<span class="token punctuation">)</span> e<span class="token punctuation">)</span> <span class="token operator">>=</span> <span class="token number">0</span><span class="token punctuation">)</span>\n            <span class="token keyword">break</span><span class="token punctuation">;</span>\n        queue<span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">=</span> e<span class="token punctuation">;</span>\n        k <span class="token operator">=</span> parent<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    queue<span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">=</span> key<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token annotation punctuation">@SuppressWarnings</span><span class="token punctuation">(</span><span class="token string">"unchecked"</span><span class="token punctuation">)</span>\n<span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">siftUpUsingComparator</span><span class="token punctuation">(</span><span class="token keyword">int</span> k<span class="token punctuation">,</span> E x<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">while</span> <span class="token punctuation">(</span>k <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">int</span> parent <span class="token operator">=</span> <span class="token punctuation">(</span>k <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">>>></span> <span class="token number">1</span><span class="token punctuation">;</span>\n        Object e <span class="token operator">=</span> queue<span class="token punctuation">[</span>parent<span class="token punctuation">]</span><span class="token punctuation">;</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>comparator<span class="token punctuation">.</span><span class="token function">compare</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> <span class="token punctuation">(</span>E<span class="token punctuation">)</span> e<span class="token punctuation">)</span> <span class="token operator">>=</span> <span class="token number">0</span><span class="token punctuation">)</span>\n            <span class="token keyword">break</span><span class="token punctuation">;</span>\n        queue<span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">=</span> e<span class="token punctuation">;</span>\n        k <span class="token operator">=</span> parent<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    queue<span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">=</span> x<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<ul>\n<li>根据是否有比较器,调用<code>siftUpUsingComparator</code>或<code>siftUpComparable</code>,这两个函数内部逻辑基本相同</li>\n<li>根据插入位置k计算出其父亲节点的位置(<code>(k-1)/2</code>)parent, 比较父亲节点<code>parent</code>和准备插入点<code>x</code>的权值</li>\n<li>若<code>parent小于x</code>,则当前k为合适的插入位置,退出循环</li>\n<li>否则将父亲节点往下挪动(放到k所在的位置),并将k赋值为parent,重复迭代</li>\n</ul>\n<h2>element() &#x26; peek</h2>\n<div class="gatsby-highlight">\n      <pre class="language-java"><code><span class="token keyword">public</span> E <span class="token function">peek</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>size <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">?</span> null <span class="token operator">:</span> <span class="token punctuation">(</span>E<span class="token punctuation">)</span> queue<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<ul>\n<li>获取但不删除队首元素</li>\n<li>由最小堆的性质,数组的第一个位置就是队首</li>\n</ul>\n<h2>poll</h2>\n<div class="gatsby-highlight">\n      <pre class="language-java"><code><span class="token keyword">public</span> E <span class="token function">poll</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>size <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span>\n        <span class="token keyword">return</span> null<span class="token punctuation">;</span>\n    <span class="token keyword">int</span> s <span class="token operator">=</span> <span class="token operator">--</span>size<span class="token punctuation">;</span>\n    modCount<span class="token operator">++</span><span class="token punctuation">;</span>\n    E result <span class="token operator">=</span> <span class="token punctuation">(</span>E<span class="token punctuation">)</span> queue<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// -- 队尾元素</span>\n    E x <span class="token operator">=</span> <span class="token punctuation">(</span>E<span class="token punctuation">)</span> queue<span class="token punctuation">[</span>s<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// -- 队首元素</span>\n    queue<span class="token punctuation">[</span>s<span class="token punctuation">]</span> <span class="token operator">=</span> null<span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// -- 删除队尾元素</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>s <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token comment" spellcheck="true">// -- 若队列不为空</span>\n        <span class="token function">siftDown</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> x<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// -- 将队尾元素插入到队首,并调整堆的结构</span>\n    <span class="token keyword">return</span> result<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<ul>\n<li>删除队首元素</li>\n<li>将队尾元素插入到队首,调用siftDown调整堆结构</li>\n</ul>\n<h2>siftDown(int k, E x)</h2>\n<p>从k指定的位置开始，将x逐层向下与当前点的左右孩子中较小的那个交换，直到x小于或等于左右孩子中的任何一个为止</p>\n<div class="gatsby-highlight">\n      <pre class="language-java"><code><span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">siftDown</span><span class="token punctuation">(</span><span class="token keyword">int</span> k<span class="token punctuation">,</span> E x<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>comparator <span class="token operator">!=</span> null<span class="token punctuation">)</span>\n        <span class="token function">siftDownUsingComparator</span><span class="token punctuation">(</span>k<span class="token punctuation">,</span> x<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">else</span>\n        <span class="token function">siftDownComparable</span><span class="token punctuation">(</span>k<span class="token punctuation">,</span> x<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token annotation punctuation">@SuppressWarnings</span><span class="token punctuation">(</span><span class="token string">"unchecked"</span><span class="token punctuation">)</span>\n<span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">siftDownComparable</span><span class="token punctuation">(</span><span class="token keyword">int</span> k<span class="token punctuation">,</span> E x<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    Comparable<span class="token operator">&lt;</span><span class="token operator">?</span> <span class="token keyword">super</span> E<span class="token operator">></span> key <span class="token operator">=</span> <span class="token punctuation">(</span>Comparable<span class="token operator">&lt;</span><span class="token operator">?</span> <span class="token keyword">super</span> E<span class="token operator">></span><span class="token punctuation">)</span>x<span class="token punctuation">;</span>\n    <span class="token keyword">int</span> half <span class="token operator">=</span> size <span class="token operator">>>></span> <span class="token number">1</span><span class="token punctuation">;</span>        <span class="token comment" spellcheck="true">// loop while a non-leaf</span>\n    <span class="token keyword">while</span> <span class="token punctuation">(</span>k <span class="token operator">&lt;</span> half<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment" spellcheck="true">// -- 若大于half则为叶子节点,没有sift down的必要</span>\n        <span class="token keyword">int</span> child <span class="token operator">=</span> <span class="token punctuation">(</span>k <span class="token operator">&lt;&lt;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// assume left child is least</span>\n        Object c <span class="token operator">=</span> queue<span class="token punctuation">[</span>child<span class="token punctuation">]</span><span class="token punctuation">;</span>\n        <span class="token keyword">int</span> right <span class="token operator">=</span> child <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>right <span class="token operator">&lt;</span> size <span class="token operator">&amp;&amp;</span> <span class="token comment" spellcheck="true">// -- 若右儿子存在且小于左儿子,则将child赋值为右儿子</span>\n            <span class="token punctuation">(</span><span class="token punctuation">(</span>Comparable<span class="token operator">&lt;</span><span class="token operator">?</span> <span class="token keyword">super</span> E<span class="token operator">></span><span class="token punctuation">)</span> c<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">compareTo</span><span class="token punctuation">(</span><span class="token punctuation">(</span>E<span class="token punctuation">)</span> queue<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span>\n            c <span class="token operator">=</span> queue<span class="token punctuation">[</span>child <span class="token operator">=</span> right<span class="token punctuation">]</span><span class="token punctuation">;</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>key<span class="token punctuation">.</span><span class="token function">compareTo</span><span class="token punctuation">(</span><span class="token punctuation">(</span>E<span class="token punctuation">)</span> c<span class="token punctuation">)</span> <span class="token operator">&lt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token comment" spellcheck="true">// 若待插入元素小于左右两个儿子节点,退出循环</span>\n            <span class="token keyword">break</span><span class="token punctuation">;</span>\n        queue<span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">=</span> c<span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// 将较小的儿子节点上提</span>\n        k <span class="token operator">=</span> child<span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// 待插入位置修改</span>\n    <span class="token punctuation">}</span>\n    queue<span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">=</span> key<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token annotation punctuation">@SuppressWarnings</span><span class="token punctuation">(</span><span class="token string">"unchecked"</span><span class="token punctuation">)</span>\n<span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">siftDownUsingComparator</span><span class="token punctuation">(</span><span class="token keyword">int</span> k<span class="token punctuation">,</span> E x<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">int</span> half <span class="token operator">=</span> size <span class="token operator">>>></span> <span class="token number">1</span><span class="token punctuation">;</span>\n    <span class="token keyword">while</span> <span class="token punctuation">(</span>k <span class="token operator">&lt;</span> half<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">int</span> child <span class="token operator">=</span> <span class="token punctuation">(</span>k <span class="token operator">&lt;&lt;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>\n        Object c <span class="token operator">=</span> queue<span class="token punctuation">[</span>child<span class="token punctuation">]</span><span class="token punctuation">;</span>\n        <span class="token keyword">int</span> right <span class="token operator">=</span> child <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>right <span class="token operator">&lt;</span> size <span class="token operator">&amp;&amp;</span>\n            comparator<span class="token punctuation">.</span><span class="token function">compare</span><span class="token punctuation">(</span><span class="token punctuation">(</span>E<span class="token punctuation">)</span> c<span class="token punctuation">,</span> <span class="token punctuation">(</span>E<span class="token punctuation">)</span> queue<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span>\n            c <span class="token operator">=</span> queue<span class="token punctuation">[</span>child <span class="token operator">=</span> right<span class="token punctuation">]</span><span class="token punctuation">;</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>comparator<span class="token punctuation">.</span><span class="token function">compare</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> <span class="token punctuation">(</span>E<span class="token punctuation">)</span> c<span class="token punctuation">)</span> <span class="token operator">&lt;=</span> <span class="token number">0</span><span class="token punctuation">)</span>\n            <span class="token keyword">break</span><span class="token punctuation">;</span>\n        queue<span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">=</span> c<span class="token punctuation">;</span>\n        k <span class="token operator">=</span> child<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    queue<span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">=</span> x<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<ul>\n<li>根据是否有比较器,调用<code>siftDownComparable</code>或<code>siftDownUsingComparator</code>,这两个函数内部逻辑基本相同</li>\n<li>若待插入位置小于队列元素数量的一半,则待插入位置为叶子节点,直接插入即可</li>\n<li>拿到左右两个子节点中较小的那个,与待插入元素比较</li>\n<li>若待插入元素小于左右两个子节点,退出循环</li>\n<li>若待插入元素大于较小的子节点,将较小的子节点上提,插入位置修改为较小子节点的位子,继续循环</li>\n</ul>\n<h2>remove(Object o)</h2>\n<div class="gatsby-highlight">\n      <pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">remove</span><span class="token punctuation">(</span>Object o<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token function">indexOf</span><span class="token punctuation">(</span>o<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>\n        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n    <span class="token keyword">else</span> <span class="token punctuation">{</span>\n        <span class="token function">removeAt</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">private</span> E <span class="token function">removeAt</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment" spellcheck="true">// assert i >= 0 &amp;&amp; i &lt; size;</span>\n    modCount<span class="token operator">++</span><span class="token punctuation">;</span>\n    <span class="token keyword">int</span> s <span class="token operator">=</span> <span class="token operator">--</span>size<span class="token punctuation">;</span>\n    <span class="token comment" spellcheck="true">// -- 若删除的是最后一个元素,不会破坏堆的性质</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>s <span class="token operator">==</span> i<span class="token punctuation">)</span> <span class="token comment" spellcheck="true">// removed last element</span>\n        queue<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> null<span class="token punctuation">;</span>\n    <span class="token keyword">else</span> <span class="token punctuation">{</span>\n        E moved <span class="token operator">=</span> <span class="token punctuation">(</span>E<span class="token punctuation">)</span> queue<span class="token punctuation">[</span>s<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// -- 最后一个元素</span>\n        queue<span class="token punctuation">[</span>s<span class="token punctuation">]</span> <span class="token operator">=</span> null<span class="token punctuation">;</span>\n        <span class="token function">siftDown</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> moved<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// -- 将最后一个元素插入到被删除的位置,试着做siftDown</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>queue<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> moved<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment" spellcheck="true">// -- 若它没有被siftDown,则可能是需要做siftUp</span>\n            <span class="token function">siftUp</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> moved<span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token keyword">if</span> <span class="token punctuation">(</span>queue<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">!=</span> moved<span class="token punctuation">)</span>\n                <span class="token keyword">return</span> moved<span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">return</span> null<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<ul>\n<li>删除队列中跟o相等的某一个元素</li>\n<li>将最后一个元素填充到被删除的位置</li>\n<li>试着做siftDown</li>\n<li>若该元素没有被siftDown,则试着做siftUp (因为被删除的元素不一定是在堆顶,可能需要做siftUp)</li>\n</ul>',
frontmatter:{title:"Java PriorityQueue",date:"November 11, 2017",tags:["java","java collection framework"]}}},pathContext:{path:"/java-priority-queue"}}}});
//# sourceMappingURL=path---java-priority-queue-ca1a42323becdfa2f5fa.js.map