import{_ as n,a as e,d as a,g as i}from"./app-a4i7gueq.js";const l={};function r(d,s){return i(),e("div",null,[...s[0]||(s[0]=[a(`<h3 id="_1、手写-promise「百度1、百度贴吧1」" tabindex="-1"><a class="header-anchor" href="#_1、手写-promise「百度1、百度贴吧1」"><span>1、手写 Promise「百度1、百度贴吧1」</span></a></h3><p><a href="https://juejin.cn/post/6994594642280857630" target="_blank" rel="noopener noreferrer">参考：看了就会，手写Promise原理，最通俗易懂的版本！！！</a> + SY 💛💛</p><details><summary>手写MyPromise方法</summary><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">class MyPromise {</span>
<span class="line">  // 构造方法</span>
<span class="line">  constructor(executor) {</span>
<span class="line">    // 初始化值</span>
<span class="line">    this.initValue()</span>
<span class="line">    // 初始化this指向</span>
<span class="line">    this.initBind()</span>
<span class="line">    // 执行传进来的函数</span>
<span class="line">    executor(this.resolve, this.reject)</span>
<span class="line">  }</span>
<span class="line"></span>
<span class="line">  initBind() {</span>
<span class="line">    // 初始化this</span>
<span class="line">    this.resolve = this.resolve.bind(this)</span>
<span class="line">    this.reject = this.reject.bind(this)</span>
<span class="line">  }</span>
<span class="line"></span>
<span class="line">  initValue() {</span>
<span class="line">    // 初始化值</span>
<span class="line">    this.PromiseResult = null // 终值</span>
<span class="line">    this.PromiseState = &#39;pending&#39; // 状态</span>
<span class="line">  }</span>
<span class="line"></span>
<span class="line">  resolve(value) {</span>
<span class="line">    // 如果执行resolve，状态变为fulfilled</span>
<span class="line">    this.PromiseState = &#39;fulfilled&#39;</span>
<span class="line">    // 终值为传进来的值</span>
<span class="line">    this.PromiseResult = value</span>
<span class="line">  }</span>
<span class="line"></span>
<span class="line">  reject(reason) {</span>
<span class="line">    // 如果执行reject，状态变为rejected</span>
<span class="line">    this.PromiseState = &#39;rejected&#39;</span>
<span class="line">    // 终值为传进来的reason</span>
<span class="line">    this.PromiseResult = reason</span>
<span class="line">  }</span>
<span class="line">}   </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="_2、手写-promise-all「天眼查1、滴滴1、小米2、滴滴1」" tabindex="-1"><a class="header-anchor" href="#_2、手写-promise-all「天眼查1、滴滴1、小米2、滴滴1」"><span>2、手写 Promise.all「天眼查1、滴滴1、小米2、滴滴1」</span></a></h3><p><a href="https://juejin.cn/post/6994594642280857630" target="_blank" rel="noopener noreferrer">参考：看了就会，手写Promise原理，最通俗易懂的版本！！！</a> + SY 💛💛</p><details><summary>手写Promise.all</summary><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">static all(promises) {</span>
<span class="line">  const result = []</span>
<span class="line">  let count = 0</span>
<span class="line">  return new MyPromise((resolve, reject) =&gt; {</span>
<span class="line">    const addData = (index, value) =&gt; {</span>
<span class="line">        result[index] = value</span>
<span class="line">        count++</span>
<span class="line">        if (count === promises.length) resolve(result)</span>
<span class="line">    }</span>
<span class="line">    promises.forEach((promise, index) =&gt; {</span>
<span class="line">        if (promise instanceof MyPromise) {</span>
<span class="line">            promise.then(res =&gt; {</span>
<span class="line">                addData(index, res)</span>
<span class="line">            }, err =&gt; reject(err))</span>
<span class="line">        } else {</span>
<span class="line">            addData(index, promise)</span>
<span class="line">        }</span>
<span class="line">    })</span>
<span class="line">  })</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="_3、手写-promise-race" tabindex="-1"><a class="header-anchor" href="#_3、手写-promise-race"><span>3、手写 Promise.race</span></a></h3><details><summary>手写 Promise.race「SY」</summary><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">static race(promises) {</span>
<span class="line">  return new MyPromise((resolve, reject) =&gt; {</span>
<span class="line">    promises.forEach(promise =&gt; {</span>
<span class="line">      if (promise instanceof MyPromise) {</span>
<span class="line">          promise.then(res =&gt; {</span>
<span class="line">              resolve(res)</span>
<span class="line">          }, err =&gt; {</span>
<span class="line">              reject(err)</span>
<span class="line">          })</span>
<span class="line">      } else {</span>
<span class="line">          resolve(promise)</span>
<span class="line">      }</span>
<span class="line">    })</span>
<span class="line">  })</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="_4、手写-promise-allsettled" tabindex="-1"><a class="header-anchor" href="#_4、手写-promise-allsettled"><span>4、手写 Promise.allSettled</span></a></h3><details><summary>手写 Promise.allSettled</summary><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">static allSettled(promises) {</span>
<span class="line">  return new Promise((resolve, reject) =&gt; {</span>
<span class="line">    const res = []</span>
<span class="line">    let count = 0</span>
<span class="line">    const addData = (status, value, i) =&gt; {</span>
<span class="line">      res[i] = {</span>
<span class="line">          status,</span>
<span class="line">          value</span>
<span class="line">      }</span>
<span class="line">      count++</span>
<span class="line">      if (count === promises.length) {</span>
<span class="line">          resolve(res)</span>
<span class="line">      }</span>
<span class="line">    }</span>
<span class="line">    promises.forEach((promise, i) =&gt; {</span>
<span class="line">      if (promise instanceof MyPromise) {</span>
<span class="line">        promise.then(res =&gt; {</span>
<span class="line">          addData(&#39;fulfilled&#39;, res, i)</span>
<span class="line">        }, err =&gt; {</span>
<span class="line">          addData(&#39;rejected&#39;, err, i)</span>
<span class="line">        })</span>
<span class="line">      } else {</span>
<span class="line">        addData(&#39;fulfilled&#39;, promise, i)</span>
<span class="line">      }</span>
<span class="line">    })</span>
<span class="line">  })</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="_5、手写红绿灯-promise" tabindex="-1"><a class="header-anchor" href="#_5、手写红绿灯-promise"><span>5、手写红绿灯-Promise</span></a></h3><details><summary>手写红绿灯</summary><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">function red() {</span>
<span class="line">  console.log(&#39;red&#39;)</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">function green() {</span>
<span class="line">  console.log(&#39;green&#39;)</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">function yellow() {</span>
<span class="line">  console.log(&#39;yellow&#39;)</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">function light(cb, wait) {</span>
<span class="line">  return new Promise((resolve) =&gt; {</span>
<span class="line">    setTimeout(() =&gt; {</span>
<span class="line">      cb()</span>
<span class="line">      resolve()</span>
<span class="line">    }, wait)</span>
<span class="line">  })</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">function start() {</span>
<span class="line">  return Promise.resolve()</span>
<span class="line">    .then(() =&gt; {</span>
<span class="line">      return light(red, 1000)</span>
<span class="line">    })</span>
<span class="line">    .then(() =&gt; {</span>
<span class="line">      return light(green, 1000)</span>
<span class="line">    })</span>
<span class="line">    .then(() =&gt; {</span>
<span class="line">      return light(yellow, 1000)</span>
<span class="line">    })</span>
<span class="line">    .finally(() =&gt; {</span>
<span class="line">      return start()</span>
<span class="line">    })</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">start()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="_6、数组随机打乱「最右1、百度贴吧-1」" tabindex="-1"><a class="header-anchor" href="#_6、数组随机打乱「最右1、百度贴吧-1」"><span>6、数组随机打乱「最右1、百度贴吧 1」</span></a></h3><blockquote><p>力扣384. 打乱数组</p></blockquote><details><summary>数组随机打乱2种方法-Own</summary><p>数组随机打乱方式：</p><ul><li>for循环，每个值随机另取一个下标，调换俩值</li><li>随机取数组中的某个值，push进新数组，删除原数组该值，直到原数组无值</li></ul><p>前置知识：</p><ul><li>Math.random() 方法可返回介于 0 ~ 1 之间的一个随机数。</li><li>0-9的随机数：Math.floor(Math.random()*10)</li><li>1-10的随机数：Math.floor(Math.random()*10)+1</li><li>0-n-1的随机数：Math.floor(Math.random()*n+1)</li><li>splice() 方法向/从数组中添加/删除项目，然后返回被删除的项目。会改变原始数组。</li><li>splice(index,howmany,item1,.....,itemX)，howmany要删除的项目数量；item1可选。向数组添加的新项目。</li><li>延伸 slice(start,end) end可选规定从何处结束选取。不会改变原数组</li></ul><p>a.for循环，每个值随机[random]另取一个下标，调换俩值</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">function reset(arr) {</span>
<span class="line">    for (let i = 0; i &lt; arr.length; i++) {</span>
<span class="line">        var index2 = Math.floor(Math.random() * arr.length);</span>
<span class="line">        const [val1, val2] = [arr[i], arr[index2]] //解构赋值</span>
<span class="line">        arr[i] = val2;</span>
<span class="line">        arr[index2] = val1;</span>
<span class="line">    }</span>
<span class="line">    return arr;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>b.随机[random]取数组中的某个值，push进新数组，删除原数组该值，直到原数组无值</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">function reset(arr) {</span>
<span class="line">    let res = []</span>
<span class="line">    console.log(arr)</span>
<span class="line">    while (arr.length) {</span>
<span class="line">        let index = Math.floor(Math.random() * arr.length)</span>
<span class="line">        res.push(arr[index]) //push随机取的值</span>
<span class="line">        arr.splice(index, 1) //将改值删除</span>
<span class="line">    }</span>
<span class="line">    return res;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="_7、驼峰命名法-和-下划线命名法-互相转换「快手-1」" tabindex="-1"><a class="header-anchor" href="#_7、驼峰命名法-和-下划线命名法-互相转换「快手-1」"><span>7、驼峰命名法 和 下划线命名法 互相转换「快手 1」</span></a></h3><details><summary>驼峰命名法 和 下划线命名法 互相转换 -Own</summary><p>前置知识：</p><ul><li><strong>stringObject.split</strong>(separator,howmany) ：方法用于把一个字符串分割成字符串数组。<strong>separator 字符串或正则表达式</strong>;</li><li><strong>arrayObject.join</strong>(separator)：方法用于把数组中的所有元素放入一个字符串。元素是通过指定的分隔符进行分隔的。</li><li><strong>arrayObject.splice</strong>()方法向/从数组中添加/删除项目，然后返回被删除的项目,该方法会改变原始数组。</li><li><strong>stringObject.toUpperCase</strong>()：用于把字符串转换为大写。</li><li><strong>stringObject.toLowerCase</strong>()：用于把字符串转换为小写。</li></ul><p>a.下划线转驼峰</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">// hello_world_web =&gt; helloWorldWeb</span>
<span class="line">function translate(str){</span>
<span class="line">    let arr=str.split(&#39;_&#39;) //[hello,world,web]</span>
<span class="line">    let res=arr[0] //hello</span>
<span class="line">    for (let i = 1; i &lt; arr.length; i++) {</span>
<span class="line">        let itemarr=arr[i].split(&#39;&#39;) // [w,o,r,l,d]</span>
<span class="line">        itemarr.splice(0,1,itemarr[0].toUpperCase()) //[W,o,r,l,d]</span>
<span class="line">        res+=itemarr.join(&#39;&#39;)//+World +Web</span>
<span class="line">    }</span>
<span class="line">    return res;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>b.驼峰转下划线</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">// helloWorldWeb =&gt; hello_world_web </span>
<span class="line">function translate(str) {</span>
<span class="line">    let arr = str.split(&#39;&#39;)</span>
<span class="line">    let res = &quot;&quot;</span>
<span class="line">    for (let i = 0; i &lt; arr.length; i++) {</span>
<span class="line">        let item = arr[i] == arr[i].toUpperCase() ? &#39;_&#39; + arr[i].toLowerCase() : arr[i];</span>
<span class="line">        res += item;</span>
<span class="line">    }</span>
<span class="line">    return res;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="_8、手写-filter、map、reduce、find-「小米1」" tabindex="-1"><a class="header-anchor" href="#_8、手写-filter、map、reduce、find-「小米1」"><span>8、手写 filter、map、reduce、find 「小米1」</span></a></h3><details><summary>手写 filter</summary><blockquote><p>filter() 方法创建一个新数组, 其包含通过所提供函数实现的测试的所有元素。<br> 不会改变原始数组。</p></blockquote><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">Array.prototype.filter1 = function (fn) {</span>
<span class="line">    let res=[]</span>
<span class="line">    for (let i = 0; i &lt; this.length; i++) {</span>
<span class="line">        if(fn(this[i])){</span>
<span class="line">            res.push(this[i])</span>
<span class="line">        }</span>
<span class="line">        //等价于 fn(this[i]) &amp;&amp; res.push(this[i])</span>
<span class="line">    }</span>
<span class="line">    return res;</span>
<span class="line">}</span>
<span class="line">//校验</span>
<span class="line">let arr = [1, 3, 5, 10];</span>
<span class="line">let arr1 = arr.filte1r(function (item) {</span>
<span class="line">    return item &gt; 4</span>
<span class="line">})</span>
<span class="line">console.log(arr1) //[5,10]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><details><summary>手写 map 映射</summary><blockquote><p>map()方法返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。<br> 不会改变原始数组。</p></blockquote><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">Array.prototype.map1=function(fn){</span>
<span class="line">    let res=[]</span>
<span class="line">    for (let i = 0; i &lt; this.length; i++) {</span>
<span class="line">        res.push(fn(this[i]))</span>
<span class="line">    }</span>
<span class="line">    return res</span>
<span class="line">}</span>
<span class="line">// 校验</span>
<span class="line">let arr = [1, 3, 6, 10];</span>
<span class="line">let arr1 = arr.map1(function (item) {</span>
<span class="line">    return item + 1</span>
<span class="line">})</span>
<span class="line">console.log(arr1) //[2, 4, 7, 11]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><details><summary>手写 reduce 累加器</summary><blockquote><p>reduce() 方法对数组中的每个元素执行一个由您提供的reducer函数(升序执行)，将其结果汇总为单个返回值。<br> 不会改变原始数组。</p></blockquote><p>a.语法：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">arr.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>callback 执行数组中每个值的函数，包含四个参数：</p><ul><li><code>accumulator</code> 累计器累计回调的返回值; 它是上一次调用回调时返回<strong>累积值或initialValue</strong>。</li><li><code>currentValue</code> 数组中<strong>正在处理的元素</strong>。</li><li><code>index</code> 可选 数组中正在处理的<strong>当前元素的索引</strong>。 如果提供了initialValue，则起始索引号为0，否则从索引1起始。</li><li><code>array</code>可选 <strong>调用reduce()的数组</strong></li></ul><p><code>initialValue</code>可选</p><ul><li><strong>作为第一次调用 callback函数时的第一个参数的值。</strong> 如果没有提供初始值，则将使用数组中的第一个元素。</li></ul><p>注：在没有初始值的空数组上调用 reduce 将报错。</p><ul><li>代码实现</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">Array.prototype.reduce1 = function (fn,initVal){</span>
<span class="line">    for (let i = 0; i &lt; this.length; i++) {</span>
<span class="line">        initVal=fn(initVal,this[i],i,this)</span>
<span class="line">    }</span>
<span class="line">    return initVal</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">var arr = [1, 4, 6, 8];</span>
<span class="line">let result = arr.reduce1(function (val, item, index, origin) {</span>
<span class="line">    return val + item</span>
<span class="line">}, 0);</span>
<span class="line">console.log(result) //19</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><details><summary>手写 find</summary><blockquote><p>find() 方法返回通过测试（函数内判断）的数组的第一个元素的值。<br> 不会改变原始数组。</p></blockquote><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line"> Array.prototype.find1=function (fn){</span>
<span class="line">    for (let i = 0; i &lt; this.length; i++) {</span>
<span class="line">        if (fn(this[i])) {</span>
<span class="line">            return this[i]</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line">let arr = [1, 3, 6, 10];</span>
<span class="line">let arr1 = arr.find1(function (item) {</span>
<span class="line">    return item &gt;4;</span>
<span class="line">})</span>
<span class="line">console.log(arr, arr1) // [1, 3, 6, 10] 6</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="_9、千位分隔符「最右1」" tabindex="-1"><a class="header-anchor" href="#_9、千位分隔符「最右1」"><span>9、千位分隔符「最右1」</span></a></h3><details><summary>千位分隔符-Own</summary><p>思路：</p><ul><li><ol><li>判断是否为数字格式，不是的话返回</li></ol></li><li><ol start="2"><li>用<code>str.split()</code>方法将字符串分为小数部分和整数部分</li></ol></li><li><ol start="3"><li>处理整数部分，转为数组格式并<code>arr.reverse()</code>反转数组</li></ol></li><li><ol start="4"><li>遍历反转后的数组，在索引为 3 的倍数位置添加&#39;,&#39;</li></ol></li><li><ol start="5"><li>最后将结果数组反转回来转为字符串并拼接小数部分返回</li></ol></li></ul><p>代码实现:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">// 14322093=&gt;14,322,093</span>
<span class="line">function format(num){</span>
<span class="line">    if(!(typeof num === &quot;number&quot;)) return &quot;非数字格式&quot;;</span>
<span class="line">    let arr = num.toString().split(&#39;.&#39;)//想小数和整数部分分割</span>
<span class="line">    let intStr=arr[0] //取整数部分</span>
<span class="line">    let decStr=arr.length &gt;1?&#39;.&#39;+arr[1]:&quot;&quot;//取小数部分</span>
<span class="line">    // 处理整数部分 14322093=&gt;14,322,093</span>
<span class="line">    var arrReverse=intStr.split(&#39;&#39;).reverse()//反转数组</span>
<span class="line">    var arr2=[arrReverse[0]]//结果数组初始化化</span>
<span class="line">    for (let i = 1; i &lt; arrReverse.length; i++) {</span>
<span class="line">        if (i%3 == 0) {</span>
<span class="line">            //索引为3的整书时，添加&#39;,&#39;</span>
<span class="line">            arr2.push(arrReverse[i]+&#39;,&#39;)</span>
<span class="line">        }else{</span>
<span class="line">            arr2.push(arrReverse[i])</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">    // 最后将数组反转回来，并转为字符串格式，拼接小数部分</span>
<span class="line">    return arr2.reverse().join(&#39;&#39;)+decStr</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="_10、数组字符串题-2a2b3c-aabbccc-aabbbccc-2a2b3c-「最右1」💛💛" tabindex="-1"><a class="header-anchor" href="#_10、数组字符串题-2a2b3c-aabbccc-aabbbccc-2a2b3c-「最右1」💛💛"><span>10、数组字符串题 [2a2b3c -&gt; aabbccc aabbbccc -&gt; 2a2b3c] 「最右1」💛💛</span></a></h3><details><summary>数组字符串题-补充</summary></details>`,26)])])}const p=n(l,[["render",r]]),t=JSON.parse('{"path":"/offer/class0/02.ES-code.html","title":"","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1764689316000,"contributors":[{"name":"lumi","username":"lumi","email":"lumiya1228@gmail.com","commits":1,"url":"https://github.com/lumi"}],"changelog":[{"hash":"f1f63c9ad884d46b7e9931fdd323a8e720f496c8","time":1764689316000,"email":"lumiya1228@gmail.com","author":"lumi","message":"docs: uadd new content for interview preparation and front-end topics"}]},"filePathRelative":"offer/class0/02.ES-code.md"}');export{p as comp,t as data};
