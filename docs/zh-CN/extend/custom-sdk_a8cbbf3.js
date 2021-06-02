amis.define('docs/zh-CN/extend/custom-sdk.md', function(require, exports, module, define) {

  module.exports = {
    "title": "自定义组件 - SDK",
    "html": "<div class=\"markdown-body\"><h2><a class=\"anchor\" name=\"%E4%BD%BF%E7%94%A8-custom-%E7%BB%84%E4%BB%B6%E4%B8%B4%E6%97%B6%E6%89%A9%E5%B1%95\" href=\"#%E4%BD%BF%E7%94%A8-custom-%E7%BB%84%E4%BB%B6%E4%B8%B4%E6%97%B6%E6%89%A9%E5%B1%95\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>使用 custom 组件临时扩展</h2><p>基于 custom 组件可以直接在 amis 配置实现自定义功能，它的支持面最广，是唯一支持在可视化编辑器中使用的方法。</p>\n<p>使用 custom 组件类似如下写法：</p>\n<pre><code class=\"language-javascript\"><span class=\"token punctuation\">{</span>\n  label<span class=\"token operator\">:</span> <span class=\"token string\">'使用 custom 组件'</span><span class=\"token punctuation\">,</span>\n  name<span class=\"token operator\">:</span> <span class=\"token string\">'username'</span><span class=\"token punctuation\">,</span>  <span class=\"token comment\">// 如果要放在 form 中，需要设置 name，onChange 将会设置这个值</span>\n  type<span class=\"token operator\">:</span> <span class=\"token string\">'custom'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token comment\">// onMount 将会在组件创建时执行，默认会创建一个空 div 标签，也可以设置 inline: true 来创建 span 标签</span>\n  <span class=\"token comment\">// dom 是 dom 节点，value 是初始数据，比如表单 name 初始拿到的数据，onChange 只有在表单下才会有</span>\n  <span class=\"token function-variable function\">onMount</span><span class=\"token operator\">:</span> <span class=\"token punctuation\">(</span><span class=\"token parameter\">dom<span class=\"token punctuation\">,</span> value<span class=\"token punctuation\">,</span> onChange</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> button <span class=\"token operator\">=</span> document<span class=\"token punctuation\">.</span><span class=\"token function\">createElement</span><span class=\"token punctuation\">(</span><span class=\"token string\">'button'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    button<span class=\"token punctuation\">.</span>innerText <span class=\"token operator\">=</span> <span class=\"token string\">'点击修改姓名'</span><span class=\"token punctuation\">;</span>\n    button<span class=\"token punctuation\">.</span><span class=\"token function-variable function\">onclick</span> <span class=\"token operator\">=</span> <span class=\"token parameter\">event</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n      <span class=\"token function\">onChange</span><span class=\"token punctuation\">(</span><span class=\"token string\">'new name'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n      event<span class=\"token punctuation\">.</span><span class=\"token function\">preventDefault</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n    dom<span class=\"token punctuation\">.</span><span class=\"token function\">appendChild</span><span class=\"token punctuation\">(</span>button<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token comment\">// onUpdate 将会在数据更新时被调用</span>\n  <span class=\"token comment\">// dom 是 dom 节点、data 将包含表单所有数据，prevData 是之前表单的所有数据</span>\n  <span class=\"token function-variable function\">onUpdate</span><span class=\"token operator\">:</span> <span class=\"token punctuation\">(</span><span class=\"token parameter\">dom<span class=\"token punctuation\">,</span> data<span class=\"token punctuation\">,</span> prevData</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'数据有变化'</span><span class=\"token punctuation\">,</span> data<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token comment\">// onUnmount 将会在组件被销毁的时候调用，用于清理资源</span>\n  <span class=\"token function-variable function\">onUnmount</span><span class=\"token operator\">:</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'组件被销毁'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n</code></pre>\n<p>注意上面的代码用到了 JavaScript 函数，无法转成 json 格式，但这三个函数还支持字符串形式，上面的代码可以改成如下形式，这样就能在可视化编辑器里支持自定义组件了：</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n  \"type\": \"form\",\n  \"title\": \"custom 组件\",\n  \"controls\": [\n    {\n      \"type\": \"text\",\n      \"name\": \"username\",\n      \"label\": \"姓名\"\n    },\n    {\n      \"name\": \"username\",\n      \"type\": \"custom\",\n      \"label\": \"自定义组件\",\n      \"onMount\": \"const button = document.createElement('button'); button.innerText = '点击修改姓名'; button.onclick = event => { onChange('new name'); event.preventDefault(); }; dom.appendChild(button);\"\n    }\n  ]\n}\n</script></div><div class=\"markdown-body\">\n<p>注意上面的例子中两个组件的 name 是一样的，这是为了方便示例，因为 amis 中的数据是双向绑定的，因此 onChange 修改自身的时候，另一个「姓名」输入框由于 name 一样，也会同步更新。</p>\n<p>关于 custom 组件的更多属性请参考「<a href=\"../../components/custom\">Custom 组件</a>」。</p>\n<h2><a class=\"anchor\" name=\"js-sdk-%E6%B3%A8%E5%86%8C%E7%BB%84%E4%BB%B6\" href=\"#js-sdk-%E6%B3%A8%E5%86%8C%E7%BB%84%E4%BB%B6\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>JS SDK 注册组件</h2><p>amis 组件都是基于 React 的，所以需要使用一个简单的 React 组件来注册，可以是函数组件也可以是类组件，下面以函数组件为例，将<a href=\"../start/getting-started\">快速开始</a>中的代码替换成如下示例：</p>\n<pre><code class=\"language-javascript\"><span class=\"token keyword\">let</span> amis <span class=\"token operator\">=</span> <span class=\"token function\">amisRequire</span><span class=\"token punctuation\">(</span><span class=\"token string\">'amis/embed'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">let</span> amisLib <span class=\"token operator\">=</span> <span class=\"token function\">amisRequire</span><span class=\"token punctuation\">(</span><span class=\"token string\">'amis'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">let</span> React <span class=\"token operator\">=</span> <span class=\"token function\">amisRequire</span><span class=\"token punctuation\">(</span><span class=\"token string\">'react'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token comment\">// 自定义组件，props 中可以拿到配置中的所有参数，比如 props.label 是 'Name'</span>\n<span class=\"token keyword\">function</span> <span class=\"token function\">CustomComponent</span><span class=\"token punctuation\">(</span><span class=\"token parameter\">props</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token keyword\">let</span> dom <span class=\"token operator\">=</span> React<span class=\"token punctuation\">.</span><span class=\"token function\">useRef</span><span class=\"token punctuation\">(</span><span class=\"token keyword\">null</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  React<span class=\"token punctuation\">.</span><span class=\"token function\">useEffect</span><span class=\"token punctuation\">(</span><span class=\"token keyword\">function</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token comment\">// 从这里开始写自定义代码，dom.current 就是新创建的 dom 节点</span>\n    <span class=\"token comment\">// 可以基于这个 dom 节点对接任意 JavaScript 框架，比如 jQuery/Vue 等</span>\n    dom<span class=\"token punctuation\">.</span>current<span class=\"token punctuation\">.</span>innerHTML <span class=\"token operator\">=</span> <span class=\"token string\">'custom'</span><span class=\"token punctuation\">;</span>\n    <span class=\"token comment\">// 而 props 中能拿到这个</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token keyword\">return</span> React<span class=\"token punctuation\">.</span><span class=\"token function\">createElement</span><span class=\"token punctuation\">(</span><span class=\"token string\">'div'</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n    ref<span class=\"token operator\">:</span> dom\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token comment\">//注册自定义组件，请参考后续对工作原理的介绍</span>\namisLib<span class=\"token punctuation\">.</span><span class=\"token function\">Renderer</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n  test<span class=\"token operator\">:</span> <span class=\"token regex\"><span class=\"token regex-delimiter\">/</span><span class=\"token regex-source language-regex\">(^|\\/)my-custom</span><span class=\"token regex-delimiter\">/</span></span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>CustomComponent<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">let</span> amisScoped <span class=\"token operator\">=</span> amis<span class=\"token punctuation\">.</span><span class=\"token function\">embed</span><span class=\"token punctuation\">(</span><span class=\"token string\">'#root'</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n  type<span class=\"token operator\">:</span> <span class=\"token string\">'page'</span><span class=\"token punctuation\">,</span>\n  title<span class=\"token operator\">:</span> <span class=\"token string\">'表单页面'</span><span class=\"token punctuation\">,</span>\n  body<span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n    type<span class=\"token operator\">:</span> <span class=\"token string\">'form'</span><span class=\"token punctuation\">,</span>\n    mode<span class=\"token operator\">:</span> <span class=\"token string\">'horizontal'</span><span class=\"token punctuation\">,</span>\n    api<span class=\"token operator\">:</span> <span class=\"token string\">'/saveForm'</span><span class=\"token punctuation\">,</span>\n    controls<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span>\n      <span class=\"token punctuation\">{</span>\n        label<span class=\"token operator\">:</span> <span class=\"token string\">'Name'</span><span class=\"token punctuation\">,</span>\n        type<span class=\"token operator\">:</span> <span class=\"token string\">'my-custom'</span><span class=\"token punctuation\">,</span> <span class=\"token comment\">// 注意这个的 type 对应之前注册的 test</span>\n        name<span class=\"token operator\">:</span> <span class=\"token string\">'custom'</span>\n      <span class=\"token punctuation\">}</span>\n    <span class=\"token punctuation\">]</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n</code></pre>\n<h3><a class=\"anchor\" name=\"%E7%A4%BA%E4%BE%8B-%E5%BC%95%E5%85%A5-element-ui\" href=\"#%E7%A4%BA%E4%BE%8B-%E5%BC%95%E5%85%A5-element-ui\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>示例：引入 Element UI</h3><p>首先在页面中加入 Element UI 所需的依赖</p>\n<pre><code class=\"language-html\"><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>link</span>\n  <span class=\"token attr-name\">rel</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>stylesheet<span class=\"token punctuation\">\"</span></span>\n  <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>https://unpkg.com/element-ui/lib/theme-chalk/index.css<span class=\"token punctuation\">\"</span></span>\n<span class=\"token punctuation\">/></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>script</span> <span class=\"token attr-name\">src</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>https://unpkg.com/vue/dist/vue.js<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token script\"></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>script</span><span class=\"token punctuation\">></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>script</span> <span class=\"token attr-name\">src</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>https://unpkg.com/element-ui/lib/index.js<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token script\"></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>script</span><span class=\"token punctuation\">></span></span>\n</code></pre>\n<p>然后将前面的 <code>React.useEffect</code> 改成如下即可：</p>\n<pre><code class=\"language-javascript\">React<span class=\"token punctuation\">.</span><span class=\"token function\">useEffect</span><span class=\"token punctuation\">(</span><span class=\"token keyword\">function</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  dom<span class=\"token punctuation\">.</span>current<span class=\"token punctuation\">.</span>innerHTML <span class=\"token operator\">=</span> <span class=\"token template-string\"><span class=\"token template-punctuation string\">`</span><span class=\"token string\">\n      &lt;el-button @click=\"visible = true\">Button&lt;/el-button>\n      &lt;el-dialog :visible.sync=\"visible\" title=\"Hello world\">\n        &lt;p>Try Element&lt;/p>\n      &lt;/el-dialog>\n    </span><span class=\"token template-punctuation string\">`</span></span><span class=\"token punctuation\">;</span>\n  <span class=\"token keyword\">new</span> <span class=\"token class-name\">Vue</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n    el<span class=\"token operator\">:</span> dom<span class=\"token punctuation\">.</span>current<span class=\"token punctuation\">,</span>\n    <span class=\"token function-variable function\">data</span><span class=\"token operator\">:</span> <span class=\"token keyword\">function</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      <span class=\"token keyword\">return</span> <span class=\"token punctuation\">{</span>visible<span class=\"token operator\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n</code></pre>\n</div>",
    "toc": {
      "label": "目录",
      "type": "toc",
      "children": [
        {
          "label": "使用 custom 组件临时扩展",
          "fragment": "%E4%BD%BF%E7%94%A8-custom-%E7%BB%84%E4%BB%B6%E4%B8%B4%E6%97%B6%E6%89%A9%E5%B1%95",
          "fullPath": "#%E4%BD%BF%E7%94%A8-custom-%E7%BB%84%E4%BB%B6%E4%B8%B4%E6%97%B6%E6%89%A9%E5%B1%95",
          "level": 2
        },
        {
          "label": "JS SDK 注册组件",
          "fragment": "js-sdk-%E6%B3%A8%E5%86%8C%E7%BB%84%E4%BB%B6",
          "fullPath": "#js-sdk-%E6%B3%A8%E5%86%8C%E7%BB%84%E4%BB%B6",
          "level": 2,
          "children": [
            {
              "label": "示例：引入 Element UI",
              "fragment": "%E7%A4%BA%E4%BE%8B-%E5%BC%95%E5%85%A5-element-ui",
              "fullPath": "#%E7%A4%BA%E4%BE%8B-%E5%BC%95%E5%85%A5-element-ui",
              "level": 3
            }
          ]
        }
      ],
      "level": 0
    }
  };

});
