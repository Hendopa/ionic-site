---
layout: "v2_fluid/docs_base"
version: "2.8.1"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "alipay"
title: "Alipay"
header_sub_title: "Class in module "
doc: "Alipay"
docType: "class"
---







<h1 class="api-title">
  
  Alipay
  

  

  </h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/plugins/alipay.ts#L62">
  Improve this doc
</a>



<!-- decorators -->





<pre><code>$ ionic plugin add https://github.com/xueron/cordova-alipay-base --variable APP_ID=your_app_id</code></pre>
<p>Repo:
  <a href="https://github.com/xueron/cordova-alipay-base">
    https://github.com/xueron/cordova-alipay-base
  </a>
</p>

<!-- description -->

<p>This plugin is used for Alipay APP support. Integrated with the latest SDK.</p>
<p>Requires Cordova plugin: <code>cordova-alipay-base</code>. For more info, please see the <a href="https://github.com/xueron/cordova-alipay-base">Alipay plugin docs</a>.</p>


<!-- @platforms tag -->
<h2>Supported platforms</h2>

<ul>
  <li>Android</li><li>iOS</li>
</ul>

<!-- @platforms tag end -->


<!-- if doc.decorators -->

<!-- @usage tag -->

<h2>Usage</h2>

<pre><code>import { Alipay } from &#39;ionic-native&#39;;

// Should get from server side with sign.
let alipayOrder = {
         ...
    };

Alipay.pay(alipayOrder)
   .then(result =&gt; {
      console.log(result); // Success
   })
   .catch(error =&gt; {
      console.log(error); // Failed
   });
</code></pre>




<!-- @property tags -->


<h2>Static Members</h2>

<div id="pay"></div>
<h3><code>pay(order)</code>
  
</h3>


Open Alipay to perform App pay


<table class="table param-table" style="margin:0;">
  <thead>
  <tr>
    <th>Param</th>
    <th>Type</th>
    <th>Details</th>
  </tr>
  </thead>
  <tbody>
  
  <tr>
    <td>
      order
      
      
    </td>
    <td>
      
<code>AlipayOrder</code>
    </td>
    <td>
      <p>alipay options</p>

      
    </td>
  </tr>
  
  </tbody>
</table>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> Returns a Promise that resolves with the success return, or rejects with an error.
</div>




<!-- methods on the class -->



<!-- other classes -->

<!-- end other classes -->

<!-- interfaces -->

<!--<h2><a class="anchor" name="interfaces" href="#interfaces"></a>Interfaces</h2>-->


<h2><a class="anchor" name="AlipayOrder" href="#AlipayOrder"></a>AlipayOrder</h2>


<table class="table param-table" style="margin:0;">
  <thead>
  <tr>
    <th>Param</th>
    <th>Type</th>
    <th>Details</th>
  </tr>
  </thead>
  <tbody>
  
  <tr>
    <td>
      app_id
      
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>appId assigned by Alipay</p>

    </td>
  </tr>
  
  <tr>
    <td>
      method
      
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Api name.
Should be: alipay.trade.app.pay</p>

    </td>
  </tr>
  
  <tr>
    <td>
      format
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Data format
Default: &quot;JSON&quot;</p>

    </td>
  </tr>
  
  <tr>
    <td>
      charset
      
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Charset
Possible values: &quot;UTF-8&quot;, &quot;GBK&quot;
Default: &quot;UTF-8&quot;</p>

    </td>
  </tr>
  
  <tr>
    <td>
      sign_type
      
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Sign method
Default: &#39;RSA&#39;</p>

    </td>
  </tr>
  
  <tr>
    <td>
      sign
      
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Sign value. Should be got from server side.
Default: &#39;RSA&#39;</p>

    </td>
  </tr>
  
  <tr>
    <td>
      timestamp
      
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Timestamp, formated like &quot;yyyy-MM-dd HH:mm:ss&quot;, e.g. 2014-07-24 03:07:50</p>

    </td>
  </tr>
  
  <tr>
    <td>
      version
      
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Api version. Fixed value &#39;1.0&#39;</p>

    </td>
  </tr>
  
  <tr>
    <td>
      notify_url
      
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Notify url.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      biz_content
      
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>biz content. formated in json. see alipay doc for detail.</p>

    </td>
  </tr>
  
  </tbody>
</table>





<!-- end interfaces -->

<!-- related link --><!-- end content block -->


<!-- end body block -->

