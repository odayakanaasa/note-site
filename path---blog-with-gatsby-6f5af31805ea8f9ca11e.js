webpackJsonp([0x93f0284628d66000],{"./node_modules/json-loader/index.js!./.cache/json/blog-with-gatsby.json":function(n,s){n.exports={data:{site:{siteMetadata:{title:"Note Site",author:"stone"}},markdownRemark:{id:"/home/peng/HUE/WorkSpace/selfDevelop/note-site/src/pages/2017-09-03-blog-with-gatsby/index.md absPath of file >>> MarkdownRemark",html:'<h3>为什么使用Gatsby</h3>\n<p>刚开始想要在<strong><a href="https://pages.github.com/">GitHub Pages</a></strong>上搭建一个博客网站的时候,\n我的需要的只是一个可以帮我将普通文本文件转化为HTML的框架,比如已经和GitHub Pages深度集成的\n<strong><a href="https://jekyllrb.com/">Jekyll</a></strong>,但是带着探索新技术的心,我还是选择了更加新潮的\n<a href="https://www.gatsbyjs.org/">Gatsby</a>.</p>\n<blockquote>\n<p>Gatsby is a blazing-fast static site generator for React.</p>\n</blockquote>\n<p>从GitHub上简洁的介绍可以看到,这是一个用于快速构建静态网站的框架,并且是使用使用的是<a href="https://reactjs.org/">React.js</a>.\n由于工作中使用过React,当我看到连React的官网都是用Gatsby搭建的时候,我决心尝试一下这个框架.</p>\n<h3>安装Gatsby</h3>\n<p>跟着官方文档<a href="https://www.gatsbyjs.org/docs/">https://www.gatsbyjs.org/docs/</a>,可以很容易地搭建出Gatsby的开发环境,\n如果之前使用过Node.js,应该可以很容易的上手.</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> --global gatsby-cli\ngatsby new gatsby-site\n<span class="token function">cd</span> gatsby-site\ngatsby develop\n</code></pre>\n      </div>\n<p>Gatsby提供了几个默认的starter用于从模板中快速搭建一个网站,虽然starter都比较简单,但是对理解\nGatsby的使用方法有很大帮助.</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>gatsby new <span class="token punctuation">[</span>SITE_DIRECTORY<span class="token punctuation">]</span> <span class="token punctuation">[</span>URL_OF_STARTER_GITHUB_REPO<span class="token punctuation">]</span>\ngatsby new blog https://github.com/gatsbyjs/gatsby-starter-blog\n</code></pre>\n      </div>\n<hr>\n<h3>Gatsby的项目结构</h3>\n<p>Gatsby的基本目录结构如下:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>├── gatsby-config.js\n├── package.json\n└── src\n    ├── html.jsx\n    ├── pages\n    │   ├── index.jsx\n    │   └── posts\n    │       ├── 01-01-2017\n    │       │   └── index.md\n    │       ├── 01-02-2017\n    │       │   └── index.md\n    │       └── 01-03-2017\n    │           └── index.md\n    ├── templates\n    │   └── post.jsx\n    │\n    └── layouts\n        └── index.jsx</code></pre>\n      </div>\n<p><strong>pages目录</strong><br>\n在这个目录下的React Component会自动转化为静态页面,URL路径由文件名决定,如<code>src/pages/index.js</code>\n会转化为<code>domain/</code>,而<code>src/pages/about.js</code>会转化为<code>domain/about/</code>.</p>\n<p><strong>templates目录</strong><br>\npages目录可以直接构造新页面,而当有许多类似的页面时,直接在pages页面创建会需要做许多重复的工作,\n这时可以在templates目录下创建一个模板用于包装,然后使用GraphQL将所需要的数据放入这个模板,从而\n自动生成多个类似的页面.</p>\n<p><strong>Layouts目录</strong><br>\n这个目录下包含了一个React Component(非必须的),它是网站中所有页面的公共容器,可以在这里定义网站\n的导航条和脚注.</p>\n<p><strong>html.js文件</strong><br>\n这个文件定义了整个网站最基本的HTML结构,可以在这个文件里面自定义<code>&#x3C;head></code>中的内容.</p>\n<hr>\n<h3>Gatsby插件</h3>\n<p>Gatsby支持了许许多多的<a href="https://www.gatsbyjs.org/docs/plugins/">插件</a>,我想这才是\n许多人选择Gatsby的原因.在网站中加入新的插件支持需要以下两个步骤(以<code>gatsby-transformer-json</code>为例):</p>\n<ol>\n<li>从npm安装 <code>npm install --save gatsby-transformer-json</code></li>\n<li>在gatsby-config.js中配置</li>\n</ol>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  plugins<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token template-string"><span class="token string">`gatsby-transformer-json`</span></span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<hr>\n<h3>在Gatsby中使用Markdown</h3>\n<p>说到构建博客网站,一个重要的点就是要将<strong>网站页面逻辑</strong>和<strong>博客文本内容</strong>分离,这样在写博客时\n不用关心页面的具体渲染逻辑,我想没有人想在写文章的时候还要想着怎么去调整页面的CSS吧.\nMarkdown是一种轻量级的文本标记语言,它的特点是可以通过简单的标记语法让文本内容具有一定的格式.\n在Gatsby中使用Markdown生成页面需要一下几个步骤:</p>\n<h5>1.从文件系统从读取Markdown文件</h5>\n<p>这是通过<code>gatsby-source-filesystem</code>插件完成的  </p>\n<ol>\n<li>安装<code>npm i --save gatsby-source-filesystem</code></li>\n<li>配置<code>gatsby-config.js</code></li>\n</ol>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code>plugins<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n  <span class="token punctuation">{</span>\n    resolve<span class="token punctuation">:</span> <span class="token template-string"><span class="token string">`gatsby-source-filesystem`</span></span><span class="token punctuation">,</span>\n    options<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n      path<span class="token punctuation">:</span> <span class="token template-string"><span class="token string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>__dirname<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/path/to/markdown/files`</span></span><span class="token punctuation">,</span>\n      name<span class="token punctuation">:</span> <span class="token string">"markdown-pages"</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<h5>2. 转换Markdown文件</h5>\n<p>这是通过<code>gatsby-transformer-remark</code>插件完成的,这个插件会读取Markdown文件,\n将其中元数据部分(metadata)转化为<code>frontmatter</code>,将内容部分转化为HTML.  </p>\n<ol>\n<li>安装<code>npm i --save gatsby-transformer-remark</code></li>\n<li>配置<code>gatsby-config.js</code></li>\n</ol>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code>plugins<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n  <span class="token template-string"><span class="token string">`gatsby-transformer-remark`</span></span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<h5>3. 为Markdown数据创建模板组件</h5>\n<p>在<code>src/templates/</code>目录下为转换后的Markdown数据创建模板文件,定义生成的html页面的\n具体内容和样式.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Template</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  data<span class="token punctuation">,</span> <span class="token comment" spellcheck="true">// this prop will be injected by the GraphQL query below.</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token punctuation">{</span> markdownRemark <span class="token punctuation">}</span> <span class="token operator">=</span> data<span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// data.markdownRemark holds our post data</span>\n  <span class="token keyword">const</span> <span class="token punctuation">{</span> frontMatter<span class="token punctuation">,</span> html <span class="token punctuation">}</span> <span class="token operator">=</span> markdownRemark<span class="token punctuation">;</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"blog-post-container"</span><span class="token operator">></span>\n      <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"blog-post"</span><span class="token operator">></span>\n        <span class="token operator">&lt;</span>h1<span class="token operator">></span><span class="token punctuation">{</span>frontmatter<span class="token punctuation">.</span>title<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>\n        <span class="token operator">&lt;</span>h2<span class="token operator">></span><span class="token punctuation">{</span>frontmatter<span class="token punctuation">.</span>date<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>\n        <span class="token operator">&lt;</span>div\n          className<span class="token operator">=</span><span class="token string">"blog-post-content"</span>\n          dangerouslySetInnerHTML<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> __html<span class="token punctuation">:</span> html <span class="token punctuation">}</span><span class="token punctuation">}</span>\n        <span class="token operator">/</span><span class="token operator">></span>\n      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">export</span> <span class="token keyword">const</span> pageQuery <span class="token operator">=</span> graphql<span class="token template-string"><span class="token string">`\n  query BlogPostByPath($path: String!) {\n    markdownRemark(frontmatter: { path: { eq: $path } }) {\n      html\n      frontmatter {\n        date(formatString: "MMMM DD, YYYY")\n        path\n        title\n      }\n    }\n  }\n`</span></span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>需要注意的点:</p>\n<ol>\n<li>pageQuery用于获取Markdown数据,Gatsby会自动地运行这个语句并返回其查询结果</li>\n<li>查询结果会被注入到Template组件中,可以在React组件的render函数中使用</li>\n</ol>\n<h5>4. 利用Gatsby提供的Node API创建页面</h5>\n<p>Gatsby提供了强大的<a href="https://www.gatsbyjs.org/docs/node-apis/">Node.js API</a>,\n它们可以在<code>gatsby-node.js</code>文件中使用.下面将会示范如何使用<code>createPages</code>API来创建页面.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'path\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nexports<span class="token punctuation">.</span>createPages <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> boundActionCreators<span class="token punctuation">,</span> graphql <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token punctuation">{</span> createPage <span class="token punctuation">}</span> <span class="token operator">=</span> boundActionCreators<span class="token punctuation">;</span>\n\n  <span class="token keyword">const</span> blogPostTemplate <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`src/templates/blogTemplate.js`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">return</span> <span class="token function">graphql</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`{\n    allMarkdownRemark(\n      sort: { order: DESC, fields: [frontmatter___date] }\n      limit: 1000\n    ) {\n      edges {\n        node {\n          excerpt(pruneLength: 250)\n          html\n          id\n          frontmatter {\n            date\n            path\n            title\n          }\n        }\n      }\n    }\n  }`</span></span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>result <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n      <span class="token keyword">if</span> <span class="token punctuation">(</span>result<span class="token punctuation">.</span>errors<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>result<span class="token punctuation">.</span>errors<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span>\n\n      result<span class="token punctuation">.</span>data<span class="token punctuation">.</span>allMarkdownRemark<span class="token punctuation">.</span>edges\n        <span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">{</span> node <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n          <span class="token function">createPage</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n            path<span class="token punctuation">:</span> node<span class="token punctuation">.</span>frontmatter<span class="token punctuation">.</span>path<span class="token punctuation">,</span>\n            component<span class="token punctuation">:</span> blogPostTemplate<span class="token punctuation">,</span>\n            context<span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment" spellcheck="true">// additional data can be passed via context</span>\n          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<ul>\n<li>Gatsby会自动调用<code>gatsby-config.js</code>文件export的每个函数</li>\n<li>Gatsby在调用函数时会自动注入参数,如<code>boundActionCreators</code>和<code>graphql</code></li>\n<li>createPages函数中,先通过graphql获取元数据,然后在回调函数中使用<code>createPage</code>创建页面</li>\n</ul>',frontmatter:{title:"使用Gatsby构建静态博客网站",date:"September 03, 2017",tags:["web"]}}},pathContext:{path:"/blog-with-gatsby"}}}});
//# sourceMappingURL=path---blog-with-gatsby-6f5af31805ea8f9ca11e.js.map