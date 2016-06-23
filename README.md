## Quickstart
```
var pacul = require('pacul');

pacul.showStatus(1, 'success');
pacul.debug('This is debug message.');
pacul.showLog('debug', 'This is also debug message.');
```

## Functions

<dl>
<dt><a href="#showStatus">showStatus(code, message)</a> ⇒ <code>object</code></dt>
<dd><p>showStatus</p>
<p>show status of transaction.</p>
<p>Status code consist of:</p>
<table>
<thead>
<tr>
<th>Code</th>
<th>Status</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>success</td>
</tr>
<tr>
<td>2</td>
<td>sent</td>
</tr>
<tr>
<td>3</td>
<td>corrupt</td>
</tr>
<tr>
<td>4</td>
<td>queueing</td>
</tr>
<tr>
<td>5</td>
<td>fail</td>
</tr>
<tr>
<td>6</td>
<td>created</td>
</tr>
<tr>
<td>7</td>
<td>forbidden</td>
</tr>
<tr>
<td>9</td>
<td>unknown error</td>
</tr>
</tbody>
</table>
</dd>
<dt><a href="#isEmptyObject">isEmptyObject(obj)</a> ⇒ <code>Boolean</code></dt>
<dd><p>Fungsi ini akan menguji object, apakah object tersebut kosong atau tidak.</p>
</dd>
<dt><a href="#uniq">uniq(an)</a> ⇒ <code>Object</code></dt>
<dd><p>Find unique content of object</p>
</dd>
<dt><a href="#namespace">namespace(name, separator, container, val)</a> ⇒ <code>Object</code></dt>
<dd><p>Change string to namespace
change path like this &quot;/path/to/some/file.js&quot; into path.to.some.file</p>
</dd>
<dt><a href="#isjson">isjson(obj)</a> ⇒ <code>Boolean</code></dt>
<dd><p>Function to check if input object is json or not</p>
</dd>
<dt><a href="#showLog">showLog(String, String)</a> ⇒</dt>
<dd><p>Show log to console depend on config level.</p>
</dd>
</dl>

<a name="showStatus"></a>

## showStatus(code, message) ⇒ <code>object</code>
showStatus

show status of transaction.

Status code consist of:

| Code | Status |
| ---- | ------ |
| 1 | success |
| 2 | sent |
| 3 | corrupt |
| 4 | queueing |
| 5 | fail |
| 6 | created |
| 7 | forbidden |
| 9 | unknown error |

**Kind**: global function  
**Returns**: <code>object</code> - object  json object of status  

| Param | Type | Description |
| --- | --- | --- |
| code | <code>integer</code> | Status code |
| message | <code>string</code> | Message shown to status |

<a name="isEmptyObject"></a>

## isEmptyObject(obj) ⇒ <code>Boolean</code>
Fungsi ini akan menguji object, apakah object tersebut kosong atau tidak.

**Kind**: global function  
**Returns**: <code>Boolean</code> - boolean return value, true if empty, or false otherwise.  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>Object</code> | Tested Object |

<a name="uniq"></a>

## uniq(an) ⇒ <code>Object</code>
Find unique content of object

**Kind**: global function  
**Returns**: <code>Object</code> - Unique result object  

| Param | Type | Description |
| --- | --- | --- |
| an | <code>Object</code> | Asserted object |

<a name="namespace"></a>

## namespace(name, separator, container, val) ⇒ <code>Object</code>
Change string to namespace
change path like this "/path/to/some/file.js" into path.to.some.file

**Kind**: global function  
**Returns**: <code>Object</code> - Nested object result  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>String</code> | Separated string |
| separator | <code>String</code> | Separator of string |
| container | <code>Object</code> | Target object |
| val | <code>Mixed</code> | Content of target object |

<a name="isjson"></a>

## isjson(obj) ⇒ <code>Boolean</code>
Function to check if input object is json or not

**Kind**: global function  
**Returns**: <code>Boolean</code> - Return True if input is json, or False otherwise.  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>string</code> | String object to check. |

<a name="showLog"></a>

## showLog(String, String) ⇒
Show log to console depend on config level.

**Kind**: global function  
**Returns**: String        String shown to console.  

| Param | Description |
| --- | --- |
| String | type Type of log, it can be info, error, or debug. |
| String | msg  Message that want to shown on console. |
