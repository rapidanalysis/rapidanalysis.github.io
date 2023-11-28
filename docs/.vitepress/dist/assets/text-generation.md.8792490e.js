import{_ as s,o as n,c as a,Q as o}from"./chunks/framework.91cc59f0.js";const F=JSON.parse('{"title":"Text Generation","description":"","frontmatter":{},"headers":[],"relativePath":"text-generation.md","filePath":"text-generation.md"}'),p={name:"text-generation.md"},l=o(`<h1 id="text-generation" tabindex="-1">Text Generation <a class="header-anchor" href="#text-generation" aria-label="Permalink to &quot;Text Generation&quot;">​</a></h1><p>The following API endpoints generate text based on input.</p><hr><h3 id="generate-new-text-from-trained-text-using-ngrams" tabindex="-1">Generate new text from trained text using ngrams. <a class="header-anchor" href="#generate-new-text-from-trained-text-using-ngrams" aria-label="Permalink to &quot;Generate new text from trained text using ngrams.&quot;">​</a></h3><p>Create a new text arrangement from ngrams of an existing text document. The new generated text draws from logical arrangements in the provided text document.</p><div class="tip custom-block"><p class="custom-block-title">Parameters</p><p><code>endpoint</code> : <a href="https://api.weburban.com/generate/text-from-ngram" target="_blank" rel="noreferrer">https://api.weburban.com/generate/text-from-ngram</a><br><code>url</code> : (url) Text file at url for ngram creation<br><code>length</code> : (int) number of words the new text should contain\`</p></div><p>Example of how this would be implemented in shown below.</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-N5e8Z" id="tab-ev9OscX" checked="checked"><label for="tab-ev9OscX">curl</label><input type="radio" name="group-N5e8Z" id="tab-YR_qskU"><label for="tab-YR_qskU">Javascript</label></div><div class="blocks"><div class="language-js vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">curl </span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">location </span><span style="color:#9ECBFF;">&#39;https://api.weburban.com/generate/text-from-ngram&#39;</span><span style="color:#E1E4E8;"> \\</span></span>
<span class="line"><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">header </span><span style="color:#9ECBFF;">&#39;Accept: application/json&#39;</span><span style="color:#E1E4E8;"> \\</span></span>
<span class="line"><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">header </span><span style="color:#9ECBFF;">&#39;x-api-key: &lt;API Key&gt;&#39;</span><span style="color:#E1E4E8;"> \\</span></span>
<span class="line"><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">header </span><span style="color:#9ECBFF;">&#39;Content-Type: application/json&#39;</span><span style="color:#E1E4E8;"> \\</span></span>
<span class="line"><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">data </span><span style="color:#9ECBFF;">&#39;</span><span style="color:#FDAEB7;font-style:italic;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;url&quot;</span><span style="color:#E1E4E8;"> : </span><span style="color:#9ECBFF;">&quot;https://www.gutenberg.org/cache/epub/1342/pg1342.txt&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;length&quot;</span><span style="color:#E1E4E8;"> : </span><span style="color:#79B8FF;">100</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span><span style="color:#9ECBFF;">&#39;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">curl </span><span style="color:#D73A49;">--</span><span style="color:#24292E;">location </span><span style="color:#032F62;">&#39;https://api.weburban.com/generate/text-from-ngram&#39;</span><span style="color:#24292E;"> \\</span></span>
<span class="line"><span style="color:#D73A49;">--</span><span style="color:#24292E;">header </span><span style="color:#032F62;">&#39;Accept: application/json&#39;</span><span style="color:#24292E;"> \\</span></span>
<span class="line"><span style="color:#D73A49;">--</span><span style="color:#24292E;">header </span><span style="color:#032F62;">&#39;x-api-key: &lt;API Key&gt;&#39;</span><span style="color:#24292E;"> \\</span></span>
<span class="line"><span style="color:#D73A49;">--</span><span style="color:#24292E;">header </span><span style="color:#032F62;">&#39;Content-Type: application/json&#39;</span><span style="color:#24292E;"> \\</span></span>
<span class="line"><span style="color:#D73A49;">--</span><span style="color:#24292E;">data </span><span style="color:#032F62;">&#39;</span><span style="color:#B31D28;font-style:italic;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;url&quot;</span><span style="color:#24292E;"> : </span><span style="color:#032F62;">&quot;https://www.gutenberg.org/cache/epub/1342/pg1342.txt&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;length&quot;</span><span style="color:#24292E;"> : </span><span style="color:#005CC5;">100</span></span>
<span class="line"><span style="color:#24292E;">}</span><span style="color:#032F62;">&#39;</span></span></code></pre></div><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> myHeaders </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Headers</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">myHeaders.</span><span style="color:#B392F0;">append</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;Accept&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;application/json&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">myHeaders.</span><span style="color:#B392F0;">append</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;x-api-key&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;&lt;API Key&gt;&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">myHeaders.</span><span style="color:#B392F0;">append</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;Content-Type&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;application/json&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> raw </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">JSON</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">stringify</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&quot;url&quot;</span><span style="color:#E1E4E8;"> : </span><span style="color:#9ECBFF;">&quot;https://www.gutenberg.org/cache/epub/1342/pg1342.txt&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&quot;length&quot;</span><span style="color:#E1E4E8;"> : </span><span style="color:#79B8FF;">100</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> requestOptions </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  method: </span><span style="color:#9ECBFF;">&#39;POST&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  headers: myHeaders,</span></span>
<span class="line"><span style="color:#E1E4E8;">  body: raw,</span></span>
<span class="line"><span style="color:#E1E4E8;">  redirect: </span><span style="color:#9ECBFF;">&#39;follow&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">fetch</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;https://api.weburban.com/generate/text-from-ngram&quot;</span><span style="color:#E1E4E8;">, requestOptions)</span></span>
<span class="line"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">response</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> response.</span><span style="color:#B392F0;">text</span><span style="color:#E1E4E8;">())</span></span>
<span class="line"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">result</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(result))</span></span>
<span class="line"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">catch</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">error</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;error&#39;</span><span style="color:#E1E4E8;">, error));</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> myHeaders </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Headers</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">myHeaders.</span><span style="color:#6F42C1;">append</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;Accept&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;application/json&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">myHeaders.</span><span style="color:#6F42C1;">append</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;x-api-key&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;&lt;API Key&gt;&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">myHeaders.</span><span style="color:#6F42C1;">append</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;Content-Type&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;application/json&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> raw </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">JSON</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">stringify</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&quot;url&quot;</span><span style="color:#24292E;"> : </span><span style="color:#032F62;">&quot;https://www.gutenberg.org/cache/epub/1342/pg1342.txt&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&quot;length&quot;</span><span style="color:#24292E;"> : </span><span style="color:#005CC5;">100</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> requestOptions </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  method: </span><span style="color:#032F62;">&#39;POST&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  headers: myHeaders,</span></span>
<span class="line"><span style="color:#24292E;">  body: raw,</span></span>
<span class="line"><span style="color:#24292E;">  redirect: </span><span style="color:#032F62;">&#39;follow&#39;</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">fetch</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;https://api.weburban.com/generate/text-from-ngram&quot;</span><span style="color:#24292E;">, requestOptions)</span></span>
<span class="line"><span style="color:#24292E;">  .</span><span style="color:#6F42C1;">then</span><span style="color:#24292E;">(</span><span style="color:#E36209;">response</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> response.</span><span style="color:#6F42C1;">text</span><span style="color:#24292E;">())</span></span>
<span class="line"><span style="color:#24292E;">  .</span><span style="color:#6F42C1;">then</span><span style="color:#24292E;">(</span><span style="color:#E36209;">result</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(result))</span></span>
<span class="line"><span style="color:#24292E;">  .</span><span style="color:#6F42C1;">catch</span><span style="color:#24292E;">(</span><span style="color:#E36209;">error</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;error&#39;</span><span style="color:#24292E;">, error));</span></span></code></pre></div></div></div><p>The output of the request above will produce the following response.</p><div class="warning custom-block"><p class="custom-block-title">Please note!</p><p>Your <code>text</code> response will be different to the one shown below because the concatenated ngrams in this endpoint are random and your text <code>url</code> may contain different phrases and words.</p></div><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;Version&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;1.0&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;Output&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;text&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;Elizabeth was forced to put it out of marital authority, and so small a family of five daughters, in favour of matrimony; it remains to be alone, and fearful of its proprietor, and, with no very striking resemblance&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;Version&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;1.0&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;Output&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;text&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;Elizabeth was forced to put it out of marital authority, and so small a family of five daughters, in favour of matrimony; it remains to be alone, and fearful of its proprietor, and, with no very striking resemblance&quot;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div>`,11),e=[l];function t(r,c,E,y,i,u){return n(),a("div",null,e)}const g=s(p,[["render",t]]);export{F as __pageData,g as default};