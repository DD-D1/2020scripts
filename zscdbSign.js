/*

 @𝐗𝐢𝐝𝐍 𝐃𝐃    感谢红鲤鱼大佬
//++++++++++++++++++++++++++++++++-



说明:

追书畅读版 签到可以获得金币兑换现金  商店下载软件

圈x获取不到ck就把body改成header

打开软件签到获取ck 签过到可能获取不到ck

获取视频ck时要换掉去广告规则 要不然获取不到

共计4个ck 签到 分享 视频奖励 账户信息





surge:远程
追书畅读版 = type=http-request,pattern=^https:\/\/.+zhuishushenqi\.com\/*,requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/XidNDD/2020scripts/master/zscdbSign.js

定时 追书畅读版 = type=cron,cronexp=0 10 0 * * *,script-path=https://raw.githubusercontent.com/XidNDD/2020scripts/master/zscdbSign.js



圈x:远程
签到获取ck
^https:\/\/.+zhuishushenqi\.com\/* url script-request-body https://raw.githubusercontent.com/XidNDD/2020scripts/master/zscdbSign.js





定时 0 10 0 * * * https://raw.githubusercontent.com/XidNDD/2020scripts/master/zscdbSign.js, tag=追书畅读版, enabled=true





loon:远程
签到获取ck
http-request ^https:\/\/.+zhuishushenqi\.com\/* script-path=https://raw.githubusercontent.com/XidNDD/2020scripts/master/zscdbSign.js, requires-body=true, timeout=10, tag=追书畅读版




定时 cron "0 10 0 * * *" script-path=https://raw.githubusercontent.com/XidNDD/2020scripts/master/zscdbSign.js




MITM= *.zhuishushenqi.com





*/














const $XidN = XidN();

const logs=0;//设置0关闭日志,1开启日志



//++++++++++++++++++++++++++++++++-


var dd="追书畅读版APP";





//++++++++++++++++++++++++++++++++


function main()
{
XidN_degin();}



 
async function XidN_degin()
 {
let a0=await XidN_Sign();
let a1=await XidN_adver();
let a2=await XidN_tasks();
let a3=await XidN_task();
 log(dd,"",a0+a1+a2+a3);
   
}



  
  
  



function XidN_Sign()
  {
  return  new Promise((resolve, reject) => {
    
   var result1="每日打卡🏝🏝";
   var result2="";

var userurl=$XidN.read("userurlname");
var userhd=$XidN.read("userhdname");
  const llUrl1={
      url:userurl,
      headers:JSON.parse(userhd),
      timeout:60000};
  $XidN.get(llUrl1,function(error, response, data) {
if (logs==1)console.log(data)
var obj=JSON.parse(data);
if(obj.ok== true)
result2="✅,"+obj.message+",奖励"+obj.gold+"💰金币";
else
if(obj.ok== false)
result2="每日只能签到一次哦！！！";
else
result2="签到失败获取cookie";
result2="<"+result1+">"+result2+"\n";
console.log(result2);
resolve(result2);
})
})
}

function XidN_adver()
  {
  return  new Promise((resolve, reject) => {
    
   var result1="看视频拆红包🧧";
   var result2="";

var adverturl=$XidN.read("adverturlname");
var userhd=$XidN.read("userhdname");
var advertbd=$XidN.read("advertbdname");
  const llUrl1={
      url:adverturl,
      headers:JSON.parse(userhd),
      body:advertbd,
      timeout:60000};
  $XidN.post(llUrl1,function(error, response, data) {
if (logs==1)console.log(data)
var obj=JSON.parse(data);
if(obj.ok== true)
result2="✅奖励"+obj.prize.gold+"💰金币";
else
if(obj.ok== false)
result2="每日只有5次机会哦！！！";
else
result2="失败获取cookie";
result2="<"+result1+">"+result2+"\n";
console.log(result2);
resolve(result2);
})
})
}

   
   

function XidN_tasks()
  {
  return  new Promise((resolve, reject) => {
    
   var result1="每日分享奖励💫";
   var result2="";

var tasksurl=$XidN.read("tasksurlname");
var userhd=$XidN.read("userhdname");
var tasksbd=$XidN.read("tasksbdname");
  const llUrl1={
      url:tasksurl,
      headers:JSON.parse(userhd),
      body:tasksbd,
      timeout:60000};
  $XidN.post(llUrl1,function(error, response, data) {
if (logs==1)console.log(data)
var obj=JSON.parse(data);
if(obj.ok== true)
result2="✅奖励"+obj.data.gold+"💰金币";
else
if(obj.ok== false)
result2="每日分享只有1次机会哦！！！";
else
result2="失败获取cookie";
result2="<"+result1+">"+result2+"\n";
console.log(result2);
resolve(result2);
})
})
}

function XidN_task()
  {
  return  new Promise((resolve, reject) => {
    
   var result1="查询账户信息🔍";
   var result2="";

var taskurl=$XidN.read("taskurlname");
var userhd=$XidN.read("userhdname");
  const llUrl1={
      url:taskurl,
      headers:JSON.parse(userhd),
      timeout:60000};
  $XidN.get(llUrl1,function(error, response, data) {
if (logs==1)console.log(data)
var obj=JSON.parse(data);
if(obj.ok== true)
result2="累计"+obj.info.totalGold+"💰金币"+",累计"+obj.info.balance+"现金💸"+",今日获得"+obj.info.cGold+"💰金币"+"现金"+obj.info.cBalance+"元"+",昨日获得"+obj.info.yGold+"💰金币"+"现金"+obj.info.yBalance+"元";
else
result2="失败获取cookie";
result2="<"+result1+">"+result2+"\n";
console.log(result2);
resolve(result2);
})
})
}





function XidN_zscdb() {

  if ($request.headers) {

 var urlval = $request.url;
var md_hd=$request.headers;
var md_bd=$request.body;

if(urlval.indexOf("user/do-sign?")>=0)
{

 var ao= $XidN.write(urlval,"userurlname");

var bo= $XidN.write(JSON.stringify(md_hd),"userhdname");

if (ao==true&&bo==true) 
 log(dd,"[获取签到数据]","✅成功");}

else
if(urlval.indexOf("advert/video/lottery?")>=0)
{

var so= $XidN.write(urlval,"adverturlname");
var bo= $XidN.write(md_bd,"advertbdname");
if (bo==true&&so==true) 
 log(dd,"[获取看视频数据]","✅成功");}

else
if(urlval.indexOf("tasks")>=0)
{

var so= $XidN.write(urlval,"tasksurlname");
var bo= $XidN.write(md_bd,"tasksbdname");
if (bo==true&&so==true) 
 log(dd,"[获取每日分享数据]","✅成功");}
else
if(urlval.indexOf("account?")>=0)
{

var so= $XidN.write(urlval,"taskurlname");
if (so==true) 
 log(dd,"[获取账户余额数据]","✅成功");}

}  
}






function log(x,y,z){

$XidN.notify(x,y,z);}
function getRandom(start, end, fixed = 0) {
  let differ = end - start
  let random = Math.random()
  return (start + differ * random).toFixed(fixed)
}

if ($XidN.isRequest) {
  XidN_zscdb()
  $XidN.end()
} else {
  main();
  $XidN.end()
 }



function XidN() {
    const isRequest = typeof $request != "undefined"
    const isSurge = typeof $httpClient != "undefined"
    const isQuanX = typeof $task != "undefined"
    const notify = (title, subtitle, message) => {
        if (isQuanX) $notify(title, subtitle, message)
        if (isSurge) $notification.post(title, subtitle, message)
    }
    const write = (value, key) => {
        if (isQuanX) return $prefs.setValueForKey(value, key)
        if (isSurge) return $persistentStore.write(value, key)
    }
    const read = (key) => {
        if (isQuanX) return $prefs.valueForKey(key)
        if (isSurge) return $persistentStore.read(key)
    }
    const get = (options, callback) => {
        if (isQuanX) {
            if (typeof options == "string") options = { url: options }
            options["method"] = "GET"
            $task.fetch(options).then(response => {
                response["status"] = response.statusCode
                callback(null, response, response.body)
            }, reason => callback(reason.error, null, null))
        }
        if (isSurge) $httpClient.get(options, callback)
    }
    const post = (options, callback) => {
        if (isQuanX) {
            if (typeof options == "string") options = { url: options }
            options["method"] = "POST"
            $task.fetch(options).then(response => {
                response["status"] = response.statusCode
                callback(null, response, response.body)
            }, reason => callback(reason.error, null, null))
        }
        if (isSurge) $httpClient.post(options, callback)
    }
    const end = () => {
        if (isQuanX) isRequest ? $done({}) : ""
        if (isSurge) isRequest ? $done({}) : $done()
    }
    return { isRequest, isQuanX, isSurge, notify, write, read, get, post, end }
};



