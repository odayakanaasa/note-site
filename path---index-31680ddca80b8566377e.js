webpackJsonp([0x81b8806e42603000],{"./node_modules/json-loader/index.js!./.cache/json/index.json":function(a,e){a.exports={data:{site:{siteMetadata:{title:"Note Site"}},allMarkdownRemark:{edges:[{node:{excerpt:"ACID 原子性(Atomic) 执行一个语句时,事务中的每个更新都必须成功才能称为成功 一致性(Consistent) 数据必须从一个正确的状态转移到另一个正确的状态 隔离性(Isolated) 并发执行的事务不应该彼此依赖 持久性(Durable...",frontmatter:{title:"Cassandra",path:"/cassandra",date:"29 November, 2017",tags:["java","jvm"]}}},{node:{excerpt:"JVM运行时的数据区域 程序计数器(Program Counter Register) 一块比较小的内存空间,是当前线程所执行的字节码的 行号指示器 为了线程切换后能恢复到正确的执行位置,每个线程都需要有一个独立的程序计数器,即 线程私有 若正在执行的是一个Java...",frontmatter:{title:"Java Runtime Memory",path:"/java-runtime-memory",date:"24 November, 2017",tags:["java","jvm"]}}},{node:{excerpt:"Java Thread Local 线程封闭 当访问共享的可变数据时,通常需要使用同步.一种避免使用同步的方式就是不共享数据,如果仅在单线程内访问数据,\n就不需要同步,这种数据被称为 线程封闭 (Thread Confinement) ThreadLocal...",frontmatter:{title:"Java Thread Local",path:"/java-thread-local",date:"20 November, 2017",tags:["java"]}}},{node:{excerpt:"Java Thread Pool Java中的线程池是运用场景最多的并发框架,几乎所有需要异步或并发执行任务的程序\n都可以使用线程池。在开发过程中,合理地使用线程池能够带来...",frontmatter:{title:"Java Thread Pool",path:"/java-thread-pool",date:"19 November, 2017",tags:["java"]}}},{node:{excerpt:"Thread Java中的线程在运行的生命在周期中可能处于以下6个状态之一 new 初始状态,线程被构建,但是还没有调用start()方法 runnable 运行状态,Java线程将操作系统中的 就绪 和 运行 两种状态都笼统的称作 运行中 blocked...",frontmatter:{title:"Java Thread",path:"/java-thread",date:"17 November, 2017",tags:["java"]}}},{node:{excerpt:"synchronized对比Lock lock获取锁的过程比较可控,粒度更细,synchronize获得锁的过程由jvm控制 synchronize会自动释放锁,lock释放锁需要显式调用 synchronized关键字 Java...",frontmatter:{title:"Java Lock",path:"/java-lock",date:"17 November, 2017",tags:["java"]}}},{node:{excerpt:"Java Serialization 详阅< >18章12节 Java...",frontmatter:{title:"Java Serialization",path:"/java-serialization",date:"16 November, 2017",tags:["java"]}}},{node:{excerpt:"Java Memory Model 从JDK5开始，java使用新的JSR -133内存模型（本文除非特别说明，针对的都是JSR- 133内存模型）\nJSR-133提出了happens-before...",frontmatter:{title:"Java Memory Model",path:"/java-memory-model",date:"14 November, 2017",tags:["java","jvm"]}}},{node:{excerpt:"CopyOnWriteArrayList add E set(int index, E element) remove get",frontmatter:{title:"Java CopyOnWriteArrayList",path:"/java-copy-on-write-array-list",date:"14 November, 2017",tags:["java","java collection framework"]}}},{node:{excerpt:"Node fields size() public V put(K key, V value) transfer 扩容方法 基本思想和HashMap很像 支持并发扩容\n在扩容的时候,总会涉及到一个数组到另一个数组的拷贝操作,基本思路是把这个拷贝操作并发进行. CAS CAS...",frontmatter:{title:"Java ConcurrentHashMap",path:"/java-concurrent-hash-map",date:"13 November, 2017",tags:["java","java collection framework"]}}},{node:{excerpt:"优先队列,能保证每次取出来的元素都是队列中权值最小的(C++中每次取最大的元素) 元素大小比较可使用构造时传入的比较器或者使用元素的自然顺序(natural order) 不允许放入null元素 通过完全二叉树实现的最小堆,底层通过数组实现 add() & offer...",frontmatter:{title:"Java PriorityQueue",path:"/java-priority-queue",date:"11 November, 2017",tags:["java","java collection framework"]}}},{node:{excerpt:"实现了SortedMap接口,会按照key的大小对map中的元素进行排序 未实现同步(不是线程安全) key...",frontmatter:{title:"Java TreeMap",path:"/java-tree-map",date:"10 November, 2017",tags:["java","java collection framework"]}}},{node:{excerpt:"Java LinkedHashMap HashMap的直接子类 在HashMap的基础上，采用双向链表将所有的entry链接起来 能保证迭代顺序与插入顺序相同 未实现同步（不是线程安全） *",frontmatter:{title:"Java LinkedHashMap",path:"/java-linked-hash-map",date:"08 November, 2017",tags:["java","java collection framework"]}}},{node:{excerpt:"Java Hashtable 抽象父类为Dictionary (一个过时的类) 实现同步（线程安全） key和value都不允许为空 put() put方法用 关键字实现同步 判断value是否为空,为空则抛出异常 直接计算key对象的hashCode...",frontmatter:{title:"Java Hashtable",path:"/java-hash-table",date:"08 November, 2017",tags:["java","java collection framework"]}}},{node:{excerpt:"SQL Table Join",frontmatter:{title:"SQL Table Join",path:"/sql-table-join",date:"06 November, 2017",tags:["sql"]}}},{node:{excerpt:"Java ArrayDeque ArrayDeque和LinkedList是Deque的两个通用实现，\n官方更推荐使用AarryDeque用作栈和队列. 底层通过 循环数组(circular array) 实现 不允许插入null元素 没有实现同步(不是线程安全) 　void...",frontmatter:{title:"Java ArrayDeque",path:"/java-array-deque",date:"04 November, 2017",tags:["java","java collection framework"]}}},{node:{excerpt:"Java HashMap Map的最常用实现 允许放入空元素 (key允许为空,value也允许为空) 不保证元素的顺序 未实现同步（不是线程安全） get() hash()函数: 取原对象的hashCode,左移16位,返回与其自身的亦或结果\n原因: 因为HashMap...",frontmatter:{title:"Java HashMap",path:"/java-array-deque",date:"04 November, 2017",tags:["java","java collection framework"]}}},{node:{excerpt:"Java LinkedList LinkedList同时实现了List和Deque接口 可以当做队列(Queue)或栈(Stack)使用,虽然首选还是ArrayDeque 没有实现同步 底层通过 双向链表实现 链表节点为内部类Node,LinkedList通过first和last...",frontmatter:{title:"Java LinkedList",path:"/java-linked-list",date:"03 November, 2017",tags:["java","java collection framework"]}}},{node:{excerpt:"ASCII American Standard Code for Information Interchange，美国信息互换标准代码）\n最常见的英文编码，标准的ASCII码表是128个字符,\n范围是0x00~0x7F (0000 0000 ~ 0111 111...",frontmatter:{title:"Encoding",path:"/encoding",date:"12 September, 2017",tags:["encoding","java"]}}},{node:{excerpt:"interface Queue interface Q 怎么打印数组？ 怎样打印数组中的重复元素 Array 和 ArrayList有什么区别？ 什么时候应该使用Array而不是ArrayList 数组和链表数据结构描述，各自的时间复杂度 数组有没有length...",frontmatter:{title:"Java Collection Framework",path:"/java-collection-framework",date:"12 September, 2017",tags:["java","java collection framework"]}}},{node:{excerpt:"Java ArrayList Java中最常用的数据结构之一 元素的存放顺序与 的顺序相同 允许放入 元素 未实现同步（不是线程安全） 底层实现是一个array数组 由于java中的数组无法自动扩容，所以当ArrayList中的容量 不足时，\n会调用 函数进行扩容。",frontmatter:{title:"Java ArrayList",path:"/java-array-list",date:"12 September, 2017",tags:["java","java collection framework"]}}},{node:{excerpt:"代码区块 标记方法 用三个反引号 ` ` ` 包围 只有声明了程序语言的代码块才会应用语法高亮 缩进4个空格或者1个制表符 行内代码，用单个反引号 ` 包起来 标记效果 区块会被 和 标签包裹 区块中      会自动转成html实体  区块中各种markdown语法无效",frontmatter:{title:"Code Highlight",path:"/code-highlight",date:"10 September, 2017",tags:["remark","markdown","prismJs"]}}},{node:{excerpt:"Java中的类加载时机 Java中类的生命周期包括以下7个阶段:\n加载 验证 准备 解析 初始化 使用 卸载 初始化时机 遇到      或者  这四种字节码指令时，对类进行初始化\n 可以认定为一种特殊的静态方法 读取类的被final...",frontmatter:{title:"Java Classloader",path:"/java-classloader/",date:"05 September, 2017",tags:["java","jvm"]}}},{node:{excerpt:"页面内的快速跳转 标题    分割线    强调    列表    链接    图片    表格    脚注    引用    行内HTML    分割线 标题 H1 H2 H3 H4 H5 H6 Alt-H1 Alt-H...",frontmatter:{title:"Markdown Learning",path:"/markdown-learning",date:"05 September, 2017",tags:["remark","markdown"]}}},{node:{excerpt:"Far far away, behind the word mountains, far from the countries Vokalia\nand Consonantia, there live the blind texts. Separated they live in...",frontmatter:{title:"New Beginnings",path:"/hi-folks/",date:"28 May, 2015",tags:["mock"]}}}],group:[{fieldValue:"encoding",totalCount:1},{fieldValue:"java",totalCount:21},{fieldValue:"java collection framework",totalCount:11},{fieldValue:"jvm",totalCount:4},{fieldValue:"markdown",totalCount:2},{fieldValue:"mock",totalCount:1},{fieldValue:"prismJs",totalCount:1},{fieldValue:"remark",totalCount:2},{fieldValue:"sql",totalCount:1}]}},pathContext:{}}}});
//# sourceMappingURL=path---index-31680ddca80b8566377e.js.map