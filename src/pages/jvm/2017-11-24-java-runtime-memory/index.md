---
title: Java Runtime Memory
date: "2017-11-24T22:22:22.169Z"
path:  "/java-runtime-memory"
tags:
   - java
   - jvm
---

## JVM 运行时的数据区域

* 程序计数器(Program Counter Register)

  1. 一块比较小的内存空间,是当前线程所执行的字节码的**行号指示器**
  2. 为了线程切换后能恢复到正确的执行位置,每个线程都需要有一个独立的程序计数器,即**线程私有**
  3. 若正在执行的是一个 Java 方法,这个计数器记录的是当前正在执行的虚拟机字节码的地址
  4. 若正在执行的是 Native 方法,这个计数器则为空(Undefined)
  5. 唯一一个在 Java 虚拟机规范中没有规定任何 OOM 情况的区域

* Java 虚拟机栈(Java Virtual Machine Stacks)
  1. 生命周期与线程相同,也是**线程私有**内存
  2. 用于描述**Java 方法**执行的内存模型: 每个 Java 方法执行时会创建一个栈帧,
     用于存储局部变量表,操作数栈,动态链接和方法出口等信息
  3. 若线程请求的栈深度大于虚拟机所允许的深度,将抛出 StackOverflowError;
     若虚拟机栈可以动态扩展,当扩展时无法申请到足够的内存,将抛出 OutOfMemoryError
* 本地方法栈(Native Method Stack)
  1. Java 虚拟机栈为 Java 方法(字节码)服务,而本地方法栈为 Native 方法服务
  2. Sun HotSpot 虚拟机把本地方法栈和虚拟机栈合二为一, `-Xss`控制其大小

* Java 堆(Java Heap)

  1. 一般来说,是 Java 虚拟机锁管理的内存中最大的一块,被所有线程共享
  2. 几乎所有的对象实例都在这里分配内存
  3. 是垃圾收集器管理的主要区域,也称作**GC 堆**(Garbage Collected Heap)
  4. 若在堆中没有内存完成实例分配,也无法再扩展时,将抛出 OutOfMemoryError
  5. 最小值`-Xms`, 最大值`-Xmx`

* 方法区(Method Area)
  1. 所有线程共享的内存区域
  2. 存储已被虚拟机加载的类信息、常量、静态变量和即时编译器编译后的代码等数据
  3. HotSpot 虚拟机使用**永久代**(Permanent Generation)来实现方法区,
     像管理 Java 堆一样管理这部分内存
  4. 永久代有`-XX:MaxPremSize`作为上限

## 对象存活&死去

* 引用计数法(Reference Counting)
  * 基本思想:给对象添加一个引用计数器,当有一个地方引用它时,计数器加一;
     当引用失效时,计数器减一. 计数器为零的对象即为*死去*
  * 无法解决对象之间**循环引用**的问题
  * 主流的 Java 虚拟机都没用选用此方法来管理内存
* 可达性分析算法(Reachability Analysis)
  * 基本思想:通过一系列的称为**GC Roots**的对象作为起始点,从这些节点向下搜索,
     所走过的路径称为引用链(Reference Chain),当一个对象到 GC Roots 没有任何引用链相连时,证明此对象是不可用的(死去)
  * Java 语言中 GC Roots 包括以下几种: 
      1. 虚拟机栈(栈帧中本地变量表)中引用的对象
      2. 方法区中的**类静态属性**引用的对象
      3. 方法区中的**常量**引用的对象
      4. 本地方法栈中(Native 方法)引用的对象

## Java 中的四种引用--强软弱虚

* 强引用(Strong Reference): 最常见的引用,只要强引用还在,就永远不会被回收
* 软引用(Soft Reference): 系统将要发生内存溢出异常之前,将会把软引用中的对象进行回收,
  若这次回收仍没有释放足够的内存,才会抛出内存溢出异常
* 弱引用(Weak Reference): 只被弱引用关联的对象只能生存到下一次垃圾回收之前,即当垃圾收集器工作时,总会回收掉只被弱引用关联的对象
* 虚引用(Phantom Reference): 最弱的一种引用关系,一个对象是否有虚引用的存在,完全不会对其生存时间构成影响,也**无法**通过虚引用来获得一个对象实例.为一个对象设置虚引用关联的唯一目的就是能在这个对象被收集器回收时收到一个系统通知

## 垃圾回收与 finalize

真正宣告一个对象死亡,至少要经过两次标记过程([代码示例](FinalizeEscapeGC.java)):

1. 在可达性分析算法中不可达的对象,会被**第一次标记**为并且进行一次筛选:
   筛选条件是是否有必要执行 finalize 方法(对象没有覆盖了 finalize 方法或者对象的这个方法已经被虚拟机执行过,将视为*没有必要执行*)
2. 如果被判定为有必要执行 finalize()方法,那么对象会放置在 F-Queue 队列中,由一个低优先级的
   Finalizer 线程去执行它.稍后的 GC 将对 F-Queue 中的对象进行**第二次标记**,如果此时对象又和引用链上的其他对象进行了关联(比如把 this 赋值给某个类变量),那么它将被移除出*即将回收的集合*,否则将被真正回收

## 方法区中的垃圾回收

* Java 虚拟机规范**不要求**虚拟机实现方法区的垃圾收集
* 方法区(HotSpot 中的永久代)中的垃圾收集主要有两部分内容:
  1. 废弃常量: 收集方法与 Java 堆中的普通对象类似,如字符串常量`"abc"`,当系统中没有一个 String 对象的值是`"abc"`,即没有其他地方引用了这个常量,那么它将被回收
  2. 无用的类: 一个类要**同时满足**以下三个条件算是无用的类
     * 该类的所有实例都已经被回收
     * 加载该类的 classLoader 已经被回收
     * 该类对应的 java.lang.Class 对象没有在任何其他地方被引用,
       无法在任何地方通过反射访问该类的方法

## 垃圾回收算法

* 标记-清除算法(Mark-Sweep)
  * 基本思路: 首先标记出所有需要回收的对象,在标记完成后统一回收
  * 主要不足: 一是效率问题,标记和清除两个过程效率都不高;另一个是空间问题,
    标记清除后会产生大量不连续的内存碎片
* 复制算法(Copy)
  * 基本思路: 将内存按容量划分为大小相等的两块,每次只使用其中的一块;当这一块的内存用完了,就将还存活着的对象复制到另一块上面,然后把已经使用过的那块内存一次清理掉.
  * 优点: 内存分配时不用考虑内存碎片的问题
  * 缺点: 内存利用率较低,只利用了一半;对象存活率较高时复制操作太多
  * 现在的商业虚拟机都采用这种算法来回收**新生代**
* 标记-整理算法(Mark-Compact)
  * 基本思路: 标记过程和就"标记-清除"算法一样,然后让所有存活的对象都向一端移动,然后清理掉边界以外的内存
  * 优点: 没有内存碎片
  * 适用于**老年代**

## 垃圾收集器

* Serial
  * 单线程: 不仅仅表示它只会用一个 CPU 或者一条线程过取去完成垃圾收集工作,
    更重要的是它在进行垃圾收集时,必须暂停其他**所有**的工作线程,直到收集结束
  * 使用**复制**算法
  * 适用于桌面应用(Client 模式),收集的内存不大,能在 100ms 內完成
* ParNew
  * Serial 收集器的多线程版本,可**并行**,使用**复制**算法
  * 唯一能与 CMS 收集器配合工作的新生代收集器
* Parallel Scavenge
  * 新生代收集器,使用**复制**算法,可并行
  * 与其他收集器不同,不关注*用户线程的停顿时间*,而是关注**吞吐量**
    (运行用户代码时间/运行用户代码和垃圾收集的总时间)
  * 适用于在后台计算而不需要太多交互的任务
* Serial Old
  * Serial 收集器的**老年代**版本,使用**标记-整理**算法
  * 适用于桌面应用(Client 模式)
* Parallel Old 收集器
  * Parallel Scavenge 收集器的**老年代**版本,使用多线程和**标记-整理**算法
* CMS(Concurrent Mark Sweep)
   * 以获取**最短回收停顿时间**为目标的收集器,使用**标记-清除**算法
   * 整个运作过程分为四个步骤
      1. 初始标记(initial mark) - `stop the world` 时间很短
      2. 并发标记(concurrent mark) - 与用户线程并发 时间长
      3. 重新标记(remark) - `stop the world` 时间短
      4. 并发清除(concurrent sweep) - 与用户线程并发 时间长
   * 优点: 并发收集,低停顿
   * 缺点:
      1. 对 CPU 资源非常敏感,资源不足时用户程序执行速度下降明显
      2. 无法清理浮动垃圾
      3. 存在内存碎片(`标记-清除`算法)
* G1(Garbage first)
   * 前沿的成果之一,在 HotSpot 开发用于替代 CMS
   * 特点:
      1. 并行与并发
      2. 分代收集
      3. 空间整合(整体看来基于`标记-整理`,没有内存碎片)
      4. 可预测的停顿(明确指定在长度为 M 毫秒的时间片段内 GC 时间不得超过 N 毫秒)

## GC 类型

* 新生代 GC(MinorGC / YoungGC): 发生在新生代的垃圾收集动作,非常频繁,速度较快
* 老年代 GC(MajorGC / FullGC): 发生在老年代的 GC,一般会伴随至少一次的 MinorGC,
  速度一般会比 MinorGC 慢十倍以上

## 内存分配与回收策略

* 对象优先在新生代 Eden 分配,没有足够空间时发起一次**Minor GC**
* 大对象直接进入老年代
* 长期存活的对象将进入老年代
  * 每`熬过`一次 MinorGC 的对象年龄增加一岁
  * 达到一定年龄(MaxTenuringThreshold,默认为 15)的对象晋升到老年代
* 动态对象年龄判定
  * 如果在 Survivor 空间中相同年龄的所有对象大小总和大于 Survivor 空间的一半,
    则年龄大于或者等于该年龄的对象就可以直接进入老年代,无需等到 MaxTenuringThreshold
* 空间分配担保
  * 每次发生 MinorGC 之前,会检查老年代**最大可用连续空间**是否大于新生代的所有空间
  * 如果成立,则可以确保 MinorGC 是安全的
  * 如果不成立,则检查 HandlePromotionFailure(是否允许担保失败)
    * HandlePromotionFailure 为 true,继续检查最大的可用连续空间是否大于历次晋升到老年代对象的**平均大小**
    * 如果小于,或者 HandlePromotionFailure 为 false,则改为进行 FullGC

## Question

* GC 是什么?为什么要有 GC
* 什么时候会导致垃圾回收
* GC 是怎么样运行的
* 新老以及永久区是什么
* GC 有几种方式？怎么配置
* 什么时候一个对象会被 GC？ 如何判断一个对象是否存活
* System.gc() Runtime.gc()会做什么事情？ 能保证 GC 执行吗
* 垃圾回收器可以马上回收内存吗？有什么办法主动通知虚拟机进行垃圾回收？
* Minor GC 、Major GC、Young GC 与 Full GC 分别在什么时候发生
* 垃圾回收算法的实现原理
* 如果对象的引用被置为 null，垃圾收集器是否会立即释放对象占用的内存？
* 垃圾回收的最佳做法是什么

* GC 收集器有哪些
* 垃圾回收器的基本原理是什么？
* 串行(serial)收集器和吞吐量(throughput)收集器的区别是什么
* Serial 与 Parallel GC 之间的不同之处
* CMS 收集器 与 G1 收集器的特点与区别
* CMS 垃圾回收器的工作过程
* JVM 中一次完整的 GC 流程是怎样的？ 对象如何晋升到老年代
* 吞吐量优先和响应优先的垃圾收集器选择
* 举个实际的场景，选择一个 GC 策略
* JVM 的永久代中会发生垃圾回收吗
* 标记清除、标记整理、复制算法的原理与特点？分别用在什么地方
* 如果让你优化收集方法，有什么思路
