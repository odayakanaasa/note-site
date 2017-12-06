webpackJsonp([125906163358116e5],{"./node_modules/json-loader/index.js!./.cache/json/java-copy-on-write-array-list.json":function(n,s){n.exports={data:{site:{siteMetadata:{title:"Note Site",author:"stone"}},markdownRemark:{id:"/home/peng/develop/workspace/stone-site/src/pages/2017-11-15-java-copy-on-write-array-list/index.md absPath of file >>> MarkdownRemark",html:'<h1>CopyOnWriteArrayList</h1>\n<div class="gatsby-highlight">\n      <pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CopyOnWriteArrayList</span><span class="token operator">&lt;</span>E<span class="token operator">></span>\n    <span class="token keyword">implements</span> <span class="token class-name">List</span><span class="token operator">&lt;</span>E<span class="token operator">></span><span class="token punctuation">,</span> RandomAccess<span class="token punctuation">,</span> Cloneable<span class="token punctuation">,</span> java<span class="token punctuation">.</span>io<span class="token punctuation">.</span>Serializable <span class="token punctuation">{</span>\n    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">long</span> serialVersionUID <span class="token operator">=</span> 8673264195747942595L<span class="token punctuation">;</span>\n\n    <span class="token comment" spellcheck="true">/** The lock protecting all mutators */</span>\n    <span class="token keyword">final</span> <span class="token keyword">transient</span> ReentrantLock lock <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ReentrantLock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token comment" spellcheck="true">/** The array, accessed only via getArray/setArray. */</span>\n    <span class="token comment" spellcheck="true">// -- 底层的数组,只通过getArray/setArray来访问</span>\n    <span class="token keyword">private</span> <span class="token keyword">transient</span> <span class="token keyword">volatile</span> Object<span class="token punctuation">[</span><span class="token punctuation">]</span> array<span class="token punctuation">;</span>\n    \n    <span class="token comment" spellcheck="true">/**\n     * Gets the array.  Non-private so as to also be accessible\n     * from CopyOnWriteArraySet class.\n     * -- 也被CopyOnWriteArraySet复用\n     */</span>\n    <span class="token keyword">final</span> Object<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">getArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> array<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token comment" spellcheck="true">/**\n     * Sets the array.\n     */</span>\n    <span class="token keyword">final</span> <span class="token keyword">void</span> <span class="token function">setArray</span><span class="token punctuation">(</span>Object<span class="token punctuation">[</span><span class="token punctuation">]</span> a<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        array <span class="token operator">=</span> a<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h2>add</h2>\n<div class="gatsby-highlight">\n      <pre class="language-java"><code><span class="token comment" spellcheck="true">/**\n * Appends the specified element to the end of this list.\n *\n * @param e element to be appended to this list\n * @return {@code true} (as specified by {@link Collection#add})\n */</span>\n<span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">add</span><span class="token punctuation">(</span>E e<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">final</span> ReentrantLock lock <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>lock<span class="token punctuation">;</span>\n    lock<span class="token punctuation">.</span><span class="token function">lock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">try</span> <span class="token punctuation">{</span>\n        Object<span class="token punctuation">[</span><span class="token punctuation">]</span> elements <span class="token operator">=</span> <span class="token function">getArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">int</span> len <span class="token operator">=</span> elements<span class="token punctuation">.</span>length<span class="token punctuation">;</span>\n        <span class="token comment" spellcheck="true">// -- 创建一个新数组,长度为length+1,并讲旧数组的所有内容拷贝进去</span>\n        Object<span class="token punctuation">[</span><span class="token punctuation">]</span> newElements <span class="token operator">=</span> Arrays<span class="token punctuation">.</span><span class="token function">copyOf</span><span class="token punctuation">(</span>elements<span class="token punctuation">,</span> len <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token comment" spellcheck="true">// 将e赋值到最后一个位置</span>\n        newElements<span class="token punctuation">[</span>len<span class="token punctuation">]</span> <span class="token operator">=</span> e<span class="token punctuation">;</span>\n        <span class="token comment" spellcheck="true">// 更换数组</span>\n        <span class="token function">setArray</span><span class="token punctuation">(</span>newElements<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>\n        lock<span class="token punctuation">.</span><span class="token function">unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment" spellcheck="true">/**\n * Inserts the specified element at the specified position in this\n * list. Shifts the element currently at that position (if any) and\n * any subsequent elements to the right (adds one to their indices).\n *\n * @throws IndexOutOfBoundsException {@inheritDoc}\n */</span>\n<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">int</span> index<span class="token punctuation">,</span> E element<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">final</span> ReentrantLock lock <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>lock<span class="token punctuation">;</span>\n    lock<span class="token punctuation">.</span><span class="token function">lock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">try</span> <span class="token punctuation">{</span>\n        Object<span class="token punctuation">[</span><span class="token punctuation">]</span> elements <span class="token operator">=</span> <span class="token function">getArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">int</span> len <span class="token operator">=</span> elements<span class="token punctuation">.</span>length<span class="token punctuation">;</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">></span> len <span class="token operator">||</span> index <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span>\n            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">IndexOutOfBoundsException</span><span class="token punctuation">(</span><span class="token string">"Index: "</span><span class="token operator">+</span>index<span class="token operator">+</span>\n                                                <span class="token string">", Size: "</span><span class="token operator">+</span>len<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        Object<span class="token punctuation">[</span><span class="token punctuation">]</span> newElements<span class="token punctuation">;</span>\n        <span class="token comment" spellcheck="true">// -- numMoved为需要向后挪动的元素个数</span>\n        <span class="token keyword">int</span> numMoved <span class="token operator">=</span> len <span class="token operator">-</span> index<span class="token punctuation">;</span>\n        <span class="token comment" spellcheck="true">// -- 若插入位置为最后一位,直接复制数组</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>numMoved <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span>\n            newElements <span class="token operator">=</span> Arrays<span class="token punctuation">.</span><span class="token function">copyOf</span><span class="token punctuation">(</span>elements<span class="token punctuation">,</span> len <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token comment" spellcheck="true">// -- 若插入位置在数组中间,分两次拷贝旧数组到新数组</span>\n        <span class="token keyword">else</span> <span class="token punctuation">{</span>\n            newElements <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">[</span>len <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n            System<span class="token punctuation">.</span><span class="token function">arraycopy</span><span class="token punctuation">(</span>elements<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> newElements<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> index<span class="token punctuation">)</span><span class="token punctuation">;</span>\n            System<span class="token punctuation">.</span><span class="token function">arraycopy</span><span class="token punctuation">(</span>elements<span class="token punctuation">,</span> index<span class="token punctuation">,</span> newElements<span class="token punctuation">,</span> index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span>\n                             numMoved<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        <span class="token comment" spellcheck="true">// -- 将element放到正确的位置</span>\n        newElements<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> element<span class="token punctuation">;</span>\n        <span class="token comment" spellcheck="true">// -- 更换数组</span>\n        <span class="token function">setArray</span><span class="token punctuation">(</span>newElements<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>\n        lock<span class="token punctuation">.</span><span class="token function">unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h2>E set(int index, E element)</h2>\n<div class="gatsby-highlight">\n      <pre class="language-java"><code><span class="token comment" spellcheck="true">/**\n * Replaces the element at the specified position in this list with the\n * specified element.\n *\n * @throws IndexOutOfBoundsException {@inheritDoc}\n */</span>\n<span class="token keyword">public</span> E <span class="token function">set</span><span class="token punctuation">(</span><span class="token keyword">int</span> index<span class="token punctuation">,</span> E element<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">final</span> ReentrantLock lock <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>lock<span class="token punctuation">;</span>\n    lock<span class="token punctuation">.</span><span class="token function">lock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">try</span> <span class="token punctuation">{</span>\n        Object<span class="token punctuation">[</span><span class="token punctuation">]</span> elements <span class="token operator">=</span> <span class="token function">getArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        E oldValue <span class="token operator">=</span> <span class="token function">get</span><span class="token punctuation">(</span>elements<span class="token punctuation">,</span> index<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>oldValue <span class="token operator">!=</span> element<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">int</span> len <span class="token operator">=</span> elements<span class="token punctuation">.</span>length<span class="token punctuation">;</span>\n            <span class="token comment" spellcheck="true">// -- 复制旧数组</span>\n            Object<span class="token punctuation">[</span><span class="token punctuation">]</span> newElements <span class="token operator">=</span> Arrays<span class="token punctuation">.</span><span class="token function">copyOf</span><span class="token punctuation">(</span>elements<span class="token punctuation">,</span> len<span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token comment" spellcheck="true">// -- 将index位置上的值复制为element</span>\n            newElements<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> element<span class="token punctuation">;</span>\n            <span class="token comment" spellcheck="true">// 更新数组</span>\n            <span class="token function">setArray</span><span class="token punctuation">(</span>newElements<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n            <span class="token comment" spellcheck="true">// Not quite a no-op; ensures volatile write semantics</span>\n            <span class="token function">setArray</span><span class="token punctuation">(</span>elements<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        <span class="token keyword">return</span> oldValue<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>\n        lock<span class="token punctuation">.</span><span class="token function">unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h2>remove</h2>\n<div class="gatsby-highlight">\n      <pre class="language-java"><code><span class="token comment" spellcheck="true">/**\n * Removes the element at the specified position in this list.\n * Shifts any subsequent elements to the left (subtracts one from their\n * indices).  Returns the element that was removed from the list.\n *\n * @throws IndexOutOfBoundsException {@inheritDoc}\n */</span>\n<span class="token keyword">public</span> E <span class="token function">remove</span><span class="token punctuation">(</span><span class="token keyword">int</span> index<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">final</span> ReentrantLock lock <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>lock<span class="token punctuation">;</span>\n    lock<span class="token punctuation">.</span><span class="token function">lock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">try</span> <span class="token punctuation">{</span>\n        Object<span class="token punctuation">[</span><span class="token punctuation">]</span> elements <span class="token operator">=</span> <span class="token function">getArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">int</span> len <span class="token operator">=</span> elements<span class="token punctuation">.</span>length<span class="token punctuation">;</span>\n        E oldValue <span class="token operator">=</span> <span class="token function">get</span><span class="token punctuation">(</span>elements<span class="token punctuation">,</span> index<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token comment" spellcheck="true">// 删除之后需要向前挪的元素个数</span>\n        <span class="token keyword">int</span> numMoved <span class="token operator">=</span> len <span class="token operator">-</span> index <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>\n        <span class="token comment" spellcheck="true">// 删除的元素在数组末端</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>numMoved <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span>\n            <span class="token function">setArray</span><span class="token punctuation">(</span>Arrays<span class="token punctuation">.</span><span class="token function">copyOf</span><span class="token punctuation">(</span>elements<span class="token punctuation">,</span> len <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token comment" spellcheck="true">// 删除的元素在数组中间</span>\n        <span class="token keyword">else</span> <span class="token punctuation">{</span>\n            Object<span class="token punctuation">[</span><span class="token punctuation">]</span> newElements <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">[</span>len <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n            System<span class="token punctuation">.</span><span class="token function">arraycopy</span><span class="token punctuation">(</span>elements<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> newElements<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> index<span class="token punctuation">)</span><span class="token punctuation">;</span>\n            System<span class="token punctuation">.</span><span class="token function">arraycopy</span><span class="token punctuation">(</span>elements<span class="token punctuation">,</span> index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> newElements<span class="token punctuation">,</span> index<span class="token punctuation">,</span>\n                             numMoved<span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token function">setArray</span><span class="token punctuation">(</span>newElements<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        <span class="token keyword">return</span> oldValue<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>\n        lock<span class="token punctuation">.</span><span class="token function">unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment" spellcheck="true">/**\n * Removes the first occurrence of the specified element from this list,\n * if it is present.  If this list does not contain the element, it is\n * unchanged.  More formally, removes the element with the lowest index\n * {@code i} such that\n * &lt;tt>(o==null&amp;nbsp;?&amp;nbsp;get(i)==null&amp;nbsp;:&amp;nbsp;o.equals(get(i)))&lt;/tt>\n * (if such an element exists).  Returns {@code true} if this list\n * contained the specified element (or equivalently, if this list\n * changed as a result of the call).\n *\n * @param o element to be removed from this list, if present\n * @return {@code true} if this list contained the specified element\n */</span>\n<span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">remove</span><span class="token punctuation">(</span>Object o<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    Object<span class="token punctuation">[</span><span class="token punctuation">]</span> snapshot <span class="token operator">=</span> <span class="token function">getArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">int</span> index <span class="token operator">=</span> <span class="token function">indexOf</span><span class="token punctuation">(</span>o<span class="token punctuation">,</span> snapshot<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> snapshot<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>index <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token boolean">false</span> <span class="token operator">:</span> <span class="token function">remove</span><span class="token punctuation">(</span>o<span class="token punctuation">,</span> snapshot<span class="token punctuation">,</span> index<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment" spellcheck="true">/**\n * A version of remove(Object) using the strong hint that given\n * recent snapshot contains o at the given index.\n */</span>\n<span class="token keyword">private</span> <span class="token keyword">boolean</span> <span class="token function">remove</span><span class="token punctuation">(</span>Object o<span class="token punctuation">,</span> Object<span class="token punctuation">[</span><span class="token punctuation">]</span> snapshot<span class="token punctuation">,</span> <span class="token keyword">int</span> index<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">final</span> ReentrantLock lock <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>lock<span class="token punctuation">;</span>\n    lock<span class="token punctuation">.</span><span class="token function">lock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">try</span> <span class="token punctuation">{</span>\n        Object<span class="token punctuation">[</span><span class="token punctuation">]</span> current <span class="token operator">=</span> <span class="token function">getArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">int</span> len <span class="token operator">=</span> current<span class="token punctuation">.</span>length<span class="token punctuation">;</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>snapshot <span class="token operator">!=</span> current<span class="token punctuation">)</span> findIndex<span class="token operator">:</span> <span class="token punctuation">{</span>\n            <span class="token keyword">int</span> prefix <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> len<span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> prefix<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                <span class="token keyword">if</span> <span class="token punctuation">(</span>current<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">!=</span> snapshot<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token function">eq</span><span class="token punctuation">(</span>o<span class="token punctuation">,</span> current<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                    index <span class="token operator">=</span> i<span class="token punctuation">;</span>\n                    <span class="token keyword">break</span> findIndex<span class="token punctuation">;</span>\n                <span class="token punctuation">}</span>\n            <span class="token punctuation">}</span>\n            <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">>=</span> len<span class="token punctuation">)</span>\n                <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n            <span class="token keyword">if</span> <span class="token punctuation">(</span>current<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">==</span> o<span class="token punctuation">)</span>\n                <span class="token keyword">break</span> findIndex<span class="token punctuation">;</span>\n            index <span class="token operator">=</span> <span class="token function">indexOf</span><span class="token punctuation">(</span>o<span class="token punctuation">,</span> current<span class="token punctuation">,</span> index<span class="token punctuation">,</span> len<span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span>\n                <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        Object<span class="token punctuation">[</span><span class="token punctuation">]</span> newElements <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">[</span>len <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n        System<span class="token punctuation">.</span><span class="token function">arraycopy</span><span class="token punctuation">(</span>current<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> newElements<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> index<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        System<span class="token punctuation">.</span><span class="token function">arraycopy</span><span class="token punctuation">(</span>current<span class="token punctuation">,</span> index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span>\n                         newElements<span class="token punctuation">,</span> index<span class="token punctuation">,</span>\n                         len <span class="token operator">-</span> index <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token function">setArray</span><span class="token punctuation">(</span>newElements<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>\n        lock<span class="token punctuation">.</span><span class="token function">unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h2>get</h2>\n<div class="gatsby-highlight">\n      <pre class="language-java"><code><span class="token annotation punctuation">@SuppressWarnings</span><span class="token punctuation">(</span><span class="token string">"unchecked"</span><span class="token punctuation">)</span>\n<span class="token keyword">private</span> E <span class="token function">get</span><span class="token punctuation">(</span>Object<span class="token punctuation">[</span><span class="token punctuation">]</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> index<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>E<span class="token punctuation">)</span> a<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment" spellcheck="true">/**\n * {@inheritDoc}\n *\n * @throws IndexOutOfBoundsException {@inheritDoc}\n */</span>\n<span class="token keyword">public</span> E <span class="token function">get</span><span class="token punctuation">(</span><span class="token keyword">int</span> index<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment" spellcheck="true">// -- 不用加锁</span>\n    <span class="token keyword">return</span> <span class="token function">get</span><span class="token punctuation">(</span><span class="token function">getArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> index<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>',
frontmatter:{title:"Java CopyOnWriteArrayList",date:"November 14, 2017"}}},pathContext:{path:"/java-copy-on-write-array-list"}}}});
//# sourceMappingURL=path---java-copy-on-write-array-list-3f2406adb622d800b436.js.map