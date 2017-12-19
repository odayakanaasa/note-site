webpackJsonp([0x9c98bde680b65800],{"./node_modules/json-loader/index.js!./.cache/json/java-lock.json":function(n,s){n.exports={data:{site:{siteMetadata:{title:"Note Site",author:"stone"}},markdownRemark:{id:"/home/peng/HUE/WorkSpace/selfDevelop/note-site/src/pages/2017-11-17-java-lock/index.md absPath of file >>> MarkdownRemark",html:'<h2>synchronized对比Lock</h2>\n<ul>\n<li>lock获取锁的过程比较可控,粒度更细,synchronize获得锁的过程由jvm控制</li>\n<li>synchronize会自动释放锁,lock释放锁需要显式调用</li>\n</ul>\n<h2>synchronized关键字</h2>\n<ul>\n<li>Java为防止资源冲突提供的内置支持</li>\n</ul>\n<h3>synchronized方法</h3>\n<div class="gatsby-highlight">\n      <pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SynchronizedObject</span> <span class="token punctuation">{</span>\n    <span class="token comment" spellcheck="true">// 必须将共享资源设置为私有(不能被外部直接访问),否则synchronize方法将失去意义</span>\n    <span class="token keyword">private</span> Resource resource<span class="token punctuation">;</span>\n    <span class="token comment" spellcheck="true">// 所有的synchronize方法共享同一个锁,锁定的其实是这个对象本身</span>\n    <span class="token keyword">synchronized</span> <span class="token keyword">void</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment" spellcheck="true">/*访问resource*/</span><span class="token punctuation">}</span>\n    <span class="token keyword">synchronized</span> <span class="token keyword">void</span> <span class="token function">g</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment" spellcheck="true">/*访问resource*/</span><span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<ul>\n<li>\n<p>共享资源一般是以对象形式存在的内存的片段</p>\n</li>\n<li>\n<p>要控制对共享资源的访问,一般是把它包装进一个对象,然后把所有要访问这个资源的方法标记为<code>synchronized</code></p>\n</li>\n<li>\n<p>如果某个线程正在调用一个标记为<code>synchronized</code>的方法,那么在此线程从该方法返回之前,\n所有要调用这个类中<strong>任何</strong>标记为<code>synchronized</code>方法的线程都会被阻塞</p>\n</li>\n<li>\n<p>同一个线程可以多次获得对象的锁(<code>synchronized</code>实现的锁是可重入的)</p>\n<ul>\n<li>如f方法内部可以继续调用g方法,JVM会负责追踪对象被加锁的次数</li>\n<li>只有首先获得了锁的线程才能继续重入这个锁,每次获得锁时,计数会递增</li>\n<li>当计数为零的时候,锁才被释放</li>\n</ul>\n</li>\n</ul>\n<h2>临界区(同步控制块)</h2>\n<div class="gatsby-highlight">\n      <pre class="language-java"><code><span class="token keyword">synchronized</span> <span class="token punctuation">(</span>syncObject<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment" spellcheck="true">// 对于一个syncObject,同一时间只有一个线程能进入这段代码</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<ul>\n<li>相比与synchronized方法(对整个方法进行同步控制),\n同步控制块可以使多个任务访问对象的时间性能得到显著提高</li>\n<li>临界区也可以用Lock对象来显式创建</li>\n</ul>\n<h2>Lock接口</h2>\n<div class="gatsby-highlight">\n      <pre class="language-java"><code><span class="token keyword">package</span> java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>concurrent<span class="token punctuation">.</span>locks<span class="token punctuation">;</span>\n<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Lock</span> <span class="token punctuation">{</span>\n    <span class="token keyword">void</span> <span class="token function">lock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">void</span> <span class="token function">lockInterruptibly</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> InterruptedException<span class="token punctuation">;</span>\n    <span class="token keyword">boolean</span> <span class="token function">tryLock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">boolean</span> <span class="token function">tryLock</span><span class="token punctuation">(</span><span class="token keyword">long</span> time<span class="token punctuation">,</span> TimeUnit unit<span class="token punctuation">)</span> <span class="token keyword">throws</span> InterruptedException<span class="token punctuation">;</span>\n    <span class="token keyword">void</span> <span class="token function">unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    Condition <span class="token function">newCondition</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<ul>\n<li>此接口的实现基本都是通过聚合一个队列同步器(AbstractQueuedSynchronizer)来完成线程的访问控制的</li>\n</ul>\n<h3>lock和unlock方法</h3>\n<div class="gatsby-highlight">\n      <pre class="language-java"><code><span class="token comment" spellcheck="true">// 获取锁</span>\nlock<span class="token punctuation">.</span><span class="token function">lock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">try</span> <span class="token punctuation">{</span>\n    \n    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>\n<span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>\n    <span class="token comment" spellcheck="true">// 释放锁</span>\n    lock<span class="token punctuation">.</span><span class="token function">unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  \n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<ul>\n<li>lock方法相当于显式创建临界区</li>\n<li>不要将锁的获取过程写在try块中,因为如果在获取锁的过程中发生了异常,会导致锁的无故释放</li>\n<li>Lock不会自动释放锁(synchronize在发生异常时自动释放),需要在<code>try-finally</code>中显式释放锁</li>\n</ul>\n<h3>lockInterruptibly方法</h3>\n<div class="gatsby-highlight">\n      <pre class="language-java"><code><span class="token keyword">void</span> <span class="token function">lockInterruptibly</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> InterruptedException<span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<ul>\n<li>可中断地获取锁,和lock()方法不同之处在于该方法会响应中断,即在锁的获取中可以中断当前线程</li>\n<li>当通过这个方法去获取锁时，如果线程正在等待获取锁，则这个线程能够响应中断，即中断线程的等待状态。\n例如当两个线程同时通过lock.lockInterruptibly()想获取某个锁时，假若此时线程A获取到了锁，\n而线程B只有在等待，那 么对线程B调用threadB.interrupt()方法能够中断线程B的等待过程。</li>\n</ul>\n<h3>tryLock方法</h3>\n<div class="gatsby-highlight">\n      <pre class="language-java"><code><span class="token keyword">boolean</span> <span class="token function">tryLock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<ul>\n<li>尝试非阻塞的获取锁,调用该方法之后立刻返回,如果能够获取则返回true,否则返回false</li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="language-java"><code><span class="token keyword">boolean</span> <span class="token function">tryLock</span><span class="token punctuation">(</span><span class="token keyword">long</span> time<span class="token punctuation">,</span> TimeUnit unit<span class="token punctuation">)</span> <span class="token keyword">throws</span> InterruptedException<span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<ul>\n<li>\n<p>超时地获取锁,当前线程在一下三种情况下返回</p>\n<ol>\n<li>当前线程在超时时间内获得了锁</li>\n<li>当前线程在超时时间内被中断</li>\n<li>超时时间结束,返回false</li>\n</ol>\n</li>\n</ul>\n<h2>ReentrantLock</h2>\n<div class="gatsby-highlight">\n      <pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ReentrantLock</span> <span class="token keyword">implements</span> <span class="token class-name">Lock</span><span class="token punctuation">,</span> java<span class="token punctuation">.</span>io<span class="token punctuation">.</span>Serializable <span class="token punctuation">{</span>\n    <span class="token keyword">abstract</span> <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">Sync</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractQueuedSynchronizer</span> <span class="token punctuation">{</span>\n        <span class="token comment" spellcheck="true">// 关键方法,非公平地试着获取锁</span>\n        <span class="token keyword">final</span> <span class="token keyword">boolean</span> <span class="token function">nonfairTryAcquire</span><span class="token punctuation">(</span><span class="token keyword">int</span> acquires<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">final</span> Thread current <span class="token operator">=</span> Thread<span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token keyword">int</span> c <span class="token operator">=</span> <span class="token function">getState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token comment" spellcheck="true">// 当前锁是空闲的</span>\n            <span class="token keyword">if</span> <span class="token punctuation">(</span>c <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">compareAndSetState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> acquires<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                    <span class="token function">setExclusiveOwnerThread</span><span class="token punctuation">(</span>current<span class="token punctuation">)</span><span class="token punctuation">;</span>\n                    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n                <span class="token punctuation">}</span>\n            <span class="token punctuation">}</span>\n            <span class="token comment" spellcheck="true">// 如果是获取了锁的线程再次请求,将同步状态值增加,返回true,实现可重入</span>\n            <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>current <span class="token operator">==</span> <span class="token function">getExclusiveOwnerThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                <span class="token keyword">int</span> nextc <span class="token operator">=</span> c <span class="token operator">+</span> acquires<span class="token punctuation">;</span>\n                <span class="token keyword">if</span> <span class="token punctuation">(</span>nextc <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token comment" spellcheck="true">// overflow</span>\n                    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">"Maximum lock count exceeded"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n                <span class="token function">setState</span><span class="token punctuation">(</span>nextc<span class="token punctuation">)</span><span class="token punctuation">;</span>\n                <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span>\n            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">class</span> <span class="token class-name">NonfairSync</span> <span class="token keyword">extends</span> <span class="token class-name">Sync</span> <span class="token punctuation">{</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">}</span>\n    <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">class</span> <span class="token class-name">FairSync</span> <span class="token keyword">extends</span> <span class="token class-name">Sync</span> <span class="token punctuation">{</span>\n        <span class="token comment" spellcheck="true">// 关键方法,公平地获取锁</span>\n        <span class="token keyword">protected</span> <span class="token keyword">final</span> <span class="token keyword">boolean</span> <span class="token function">tryAcquire</span><span class="token punctuation">(</span><span class="token keyword">int</span> acquires<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">final</span> Thread current <span class="token operator">=</span> Thread<span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token keyword">int</span> c <span class="token operator">=</span> <span class="token function">getState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token keyword">if</span> <span class="token punctuation">(</span>c <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                <span class="token comment" spellcheck="true">// 判断同步队列中是否线程比当前线程更早地请求获取锁,</span>\n                <span class="token comment" spellcheck="true">// 如果有则返回false,即要等待前驱线程获取并释放锁之后才能获取锁</span>\n                <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">hasQueuedPredecessors</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span>\n                    <span class="token function">compareAndSetState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> acquires<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                    <span class="token function">setExclusiveOwnerThread</span><span class="token punctuation">(</span>current<span class="token punctuation">)</span><span class="token punctuation">;</span>\n                    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n                <span class="token punctuation">}</span>\n            <span class="token punctuation">}</span>\n            <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>current <span class="token operator">==</span> <span class="token function">getExclusiveOwnerThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                <span class="token keyword">int</span> nextc <span class="token operator">=</span> c <span class="token operator">+</span> acquires<span class="token punctuation">;</span>\n                <span class="token keyword">if</span> <span class="token punctuation">(</span>nextc <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span>\n                    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">"Maximum lock count exceeded"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n                <span class="token function">setState</span><span class="token punctuation">(</span>nextc<span class="token punctuation">)</span><span class="token punctuation">;</span>\n                <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span>\n            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n    <span class="token comment" spellcheck="true">// -- 默认提供不公平的锁</span>\n    <span class="token keyword">public</span> <span class="token function">ReentrantLock</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        sync <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">NonfairSync</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token comment" spellcheck="true">// -- 通过构造函数决定锁是不是公平的</span>\n    <span class="token keyword">public</span> <span class="token function">ReentrantLock</span><span class="token punctuation">(</span><span class="token keyword">boolean</span> fair<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        sync <span class="token operator">=</span> fair <span class="token operator">?</span> <span class="token keyword">new</span> <span class="token class-name">FairSync</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">NonfairSync</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<ul>\n<li>可重入的锁,对于已经获取到锁的线程,能够再次调用lock方法获取锁而不被阻塞</li>\n<li>公平性问题: 若在绝对时间上,先对锁进行获取的请求一定先被满足,那么这个锁是公平的,否则不是</li>\n<li>不同公平性的区别: 非公平性锁会使得其他锁饥饿,但是减少了线程的切换,保证了更大的吞吐量</li>\n</ul>\n<h2>ReadWriteLock接口</h2>\n<div class="gatsby-highlight">\n      <pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">ReadWriteLock</span> <span class="token punctuation">{</span>\n    <span class="token comment" spellcheck="true">// 获得读锁</span>\n    Lock <span class="token function">readLock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token comment" spellcheck="true">// 获得写锁</span>\n    Lock <span class="token function">writeLock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<ul>\n<li>不是Lock接口的实现</li>\n<li>不是排他锁(互斥锁),即允许同一时刻有多个读线程在访问</li>\n<li>当有一个写线程在访问时,所有的读线程和其他写线程均被阻塞</li>\n<li>通过分离读锁和写锁,使得并发性相比一般的排他锁有很大提升</li>\n</ul>\n<h2>ReentrantReadWriteLock类</h2>\n<div class="gatsby-highlight">\n      <pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ReentrantReadWriteLock</span>\n        <span class="token keyword">implements</span> <span class="token class-name">ReadWriteLock</span><span class="token punctuation">,</span> java<span class="token punctuation">.</span>io<span class="token punctuation">.</span>Serializable <span class="token punctuation">{</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p><a href="https://github.com/pzxwhc/MineKnowContainer/issues/16">Lock接口方法分析</a></p>\n<h2>volatile</h2>\n<p>当且仅当满足一下<strong>所有</strong>条件时,才应该使用volatile变量</p>\n<ul>\n<li>对变量的写入操作不依赖当前变量,或者能确保只有单个线程更新变量的值</li>\n<li>该变量不会与其他状态变量一起纳入不变性条件中</li>\n<li>在访问变量时不需要加锁</li>\n</ul>\n<p>Q:</p>\n<ul>\n<li>volatile 修饰符的有过什么实践</li>\n<li>volatile 变量是什么？volatile 变量和 atomic 变量有什么不同</li>\n<li>volatile 类型变量提供什么保证？能使得一个非原子操作变成原子操作吗</li>\n<li>能创建 volatile 数组吗？</li>\n</ul>',frontmatter:{title:"Java Lock",date:"November 17, 2017",tags:["java"]}}},pathContext:{path:"/java-lock"}}}});
//# sourceMappingURL=path---java-lock-aa3cfa981f9c36b39c1b.js.map