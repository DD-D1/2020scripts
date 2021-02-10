{
"id": "DD.app.sub",
"name": "DD脚本订阅",
"author": "@DD",
"icon": "http://elf.static.maibaapp.com/content/ios-countdown/11891342/avatar/11591339654571.png",
"repo": "https://github.com/DD-D1/XIAOPU",
"apps": [{
"id": "xiaopusign",
"name": "笑谱APP",
"keys": ["iboxpayheader","tokenbody","iboxpayheader2","tokenbody","iboxpayheader3","tokenbody3","iboxpayheader4","tokenbody4","iboxpayheader5","tokenbody5","iboxpayheader6","tokenbody6","iboxpayheader7","tokenbody7","iboxpayheader8","tokenbody8","iboxpayheader9","tokenbody9","iboxpayheader10","tokenbody10"],
"author": "@dd",
"settings": [{
"id": "xiaopuSuffix",
"name": "当前账号",
"val": "1",
"type": "number",
"desc": "当前获取cookie记录的账号，多账号例如：1、2、3、目前最多10个账号"
},
{
"id": "xiaopuCount",
"name": "账号个数",
"val": "1",
"type": "number",
"desc": "指定几个账号,跑几个账号的任务,最多跑10个账号"
},
{
"id": "noNolog",
"name": "系统通知",
"val": "1",
"type": "number",
"desc": "1所有通知 2,11小时通知一次 3,3小时通知一次 4,5小时通知一下"
}
],
"repo": "https://github.com/DD-D1/XIAOPU/blob/main/xiaopu/xiaopusign.js",
"icons": ["https://raw.githubusercontent.com/DD-D1/XIAOPU/main/xiaopu/B1332A0E-D31E-4682-9C28-5E9D68E56E22.png","https://raw.githubusercontent.com/DD-D1/XIAOPU/main/xiaopu/B1332A0E-D31E-4682-9C28-5E9D68E56E22.png"],
"script": "https://raw.githubusercontent.com/DD-D1/XIAOPU/main/xiaopu/xiaopusign.js"
},
{
 "id": "zoulusign",
 "name": "走路赚APP",
 "keys": ["xiaomuyuheader","xiaomuyubody","turntableurl","turntableheader","doubleheader","Cardbody","drinkbody","memberbody","xiaomuyuheader2","xiaomuyubody2","turntableurl2","turntableheader2","doubleheader2","Cardbody2","drinkbody2","memberbody2","xiaomuyuheader3","xiaomuyubody3","turntableurl3","turntableheader3","doubleheader3","Cardbody3","drinkbody3","memberbody3","xiaomuyuheader4","xiaomuyubody4","turntableurl4","turntableheader4","doubleheader4","Cardbody4","drinkbody4","memberbody4","xiaomuyuheader5","xiaomuyubody5","turntableurl5","turntableheader5","doubleheader5","Cardbody5","drinkbody5","memberbody5","xiaomuyuheader6","xiaomuyubody6","turntableurl6","turntableheader6","doubleheader6","Cardbody6","drinkbody6","memberbody6","xiaomuyuheader7","xiaomuyubody7","turntableurl7","turntableheader7","doubleheader7","Cardbody7","drinkbody7","memberbody7","xiaomuyuheader8","xiaomuyubody8","turntableurl8","turntableheader8","doubleheader8","Cardbody8","drinkbody8","memberbody8","xiaomuyuheader9","xiaomuyubody9","turntableurl9","turntableheader9","doubleheader9","Cardbody9","drinkbody9","memberbody9","xiaomuyuheader10","xiaomuyubody10","turntableurl10","turntableheader10","doubleheader10","Cardbody10","drinkbody10","memberbody10"],
 "author": "@dd",
 "settings": [{
 "id": "zouluSuffix",
 "name": "当前账号",
 "val": "1",
 "type": "number",
 "desc": "当前获取cookie记录的账号，多账号例如：1、2、3、目前最多10个账号"
 },
 {
 "id": "zouluCount",
 "name": "账号个数",
 "val": "1",
 "type": "number",
 "desc": "指定几个账号,跑几个账号的任务,最多跑10个账号"
 },
 {
 "id": "NOLOG",
 "name": "系统通知",
 "val": "1",
 "type": "number",
 "desc": "1为所有通知 2为11小时通知一次 3为3小时通知一次 4为5小时通知一次"
 },
 {
 "id": "ZLSTEP",
 "name": "步数兑换",
 "val": "0",
 "type": "number",
 "desc": "0为不兑换 1为兑换 兑换步数在晚上10点到11点之间,默认关闭"
 },
 {
 "id": "NIQUE",
 "name": "填写步数",
 "val": "0",
 "type": "number",
 "desc": "随便填写步数一天可以兑换2次,步数不要太大,默认0"
 },
 {
 "id": "CUPID",
 "name": "喝水任务",
 "val": "0",
 "type": "number",
 "desc": "任务在10点开始到17点结束,执行任务设置在18到晚上20点,那个时间段都可以,1为10点2为11点以此类推到8为17点,默认0"
 }
 ],
 "repo": "https://github.com/DD-D1/Script/blob/main/zoulusign.js",
 "icons": ["https://raw.githubusercontent.com/DD-D1/XIAOPU/main/xiaopu/zoulu.png","https://raw.githubusercontent.com/DD-D1/XIAOPU/main/xiaopu/zoulu.png"],
 "script": "https://raw.githubusercontent.com/DD-D1/Script/main/zoulusign.js"
 }]
 }
 