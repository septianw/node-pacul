# Global





* * *

### chmod(file, mode, message) 

Fungsi chmod
Fungsi ini bertindak sebagai penyederhana fungsi fs.chmod

**Parameters**

**file**: `string`, file yang akan dirubah modenya

**mode**: `octal`, mode perubahan

**message**: `string`, pesan yang akan tampil ketika berhasil



### genrandkey(length) 

Fungsi generate random string

Fungsi ini akan generate string acak, secara default
fungsi ini akan membuat string sepanjang 48 byte.

**Parameters**

**length**: `integer`, integer length of string in byte

**Returns**: `string`, random string in specified length


### showStatus(code, message) 

showStatus

show status of transaction

**Parameters**

**code**: `integer`, kode status

**message**: `string`, Pesan yang akan ditampilkan ke status

**Returns**: `object`, object  json object of status


### isEmptyObject(obj) 

Fungsi ini akan menguji object, apakah object tersebut kosong atau tidak.

**Parameters**

**obj**: `Object`, Object yang akan diuji

**Returns**: `Boolean`, Nilai balik berupa boolean, true bila kosong, atau false bila tidak.


### uniq(a) 

Find unique content of object

**Parameters**

**a**: `Object`, Asserted object

**Returns**: `Object`, Unique result object


### namespace(name, separator, container, val) 

Change string to namespace

**Parameters**

**name**: `String`, Separated string

**separator**: `String`, Separator of string

**container**: `Object`, Target object

**val**: `Mixed`, Content of target object

**Returns**: `Object`, Nested object result


### isjson(obj) 

Function to check if input object is json or not

**Parameters**

**obj**: `string`, String object to check.

**Returns**: `Boolean`, Return True if input is json, or False otherwise.


### showLog(String, String) 

Show log to console depend on config level.

**Parameters**

**String**: , type Type of log, it can be info, error, or debug.

**String**: , msg  Message that want to shown on console.

**Returns**: , String        String shown to console.



* * *










