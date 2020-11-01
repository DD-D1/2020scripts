/*

 @𝐗𝐢𝐝𝐍 𝐃𝐃    
//++++++++++++++++++++++++++++++++-



说明:

海德汇一城小程序 签到可以获得积分兑换物品
群友需要就写了 不是羊毛

圈x获取不到ck就把body改成header

打开软件签到获取ck 签过到可能获取不到ck








surge:远程
海德汇一城 = type=http-request,pattern=^https:\/\/wox2019\.woxshare\.com\/*,requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/XidNDD/2020scripts/master/hdhycSign.js

定时 海德汇一城 = type=cron,cronexp=0 10 0 * * *,script-path=https://raw.githubusercontent.com/XidNDD/2020scripts/master/hdhycSign.js



圈x:远程
签到获取ck
^https:\/\/wox2019\.woxshare\.com\/* url script-request-body https://raw.githubusercontent.com/XidNDD/2020scripts/master/hdhycSign.js





定时 0 10 0 * * * https://raw.githubusercontent.com/XidNDD/2020scripts/master/hdhycSign.js, tag=海德汇一城, enabled=true





loon:远程
签到获取ck
http-request ^https:\/\/wox2019\.woxshare\.com\/* script-path=https://raw.githubusercontent.com/XidNDD/2020scripts/master/hdhycSign.js, requires-body=true, timeout=10, tag=海德汇一城




定时 cron "0 10 0 * * *" script-path=https://raw.githubusercontent.com/XidNDD/2020scripts/master/hdhycSign.js

小火箭:远程
海德汇一城 = type=http-request,script-path=https://raw.githubusercontent.com/XidNDD/2020scripts/master/hdhycSign.js,pattern= ^https:\/\/wox2019\.woxshare\.com\/*,max-size=131072,requires-body=true,timeout=10,enable=true

海德汇一城 = type=cron,script-path=hdhycSign.js,cronexpr="0 07 16 * * *",timeout=10,enable=true



MITM= wox2019.woxshare.com





*/














const $XidN = XidN();

const logs=0;//设置0关闭日志,1开启日志



//++++++++++++++++++++++++++++++++-


var dd="海德汇一城小程序";





//++++++++++++++++++++++++++++++++


function main()
{
XidN_degin();}



 
async function XidN_degin()
 {
let a0=await XidN_Sign();
 log(dd,"",a0);
   
}



  
  
  



function XidN_Sign()
  {
  return  new Promise((resolve, reject) => {
    
   var result1="每日打卡奖励🌟";
   var result2="";

var RecordAddurl=$XidN.read("RecordAddurlname");
var RecordAddhd=$XidN.read("RecordAddhdname");
var RecordAddbd=$XidN.read("RecordAddbdname");
  const Record={
      url:RecordAddurl,
      headers:JSON.parse(RecordAddhd),
      body:RecordAddbd,
      timeout:60000};
  $XidN.post(Record,function(error, response, data) {
if (logs==1)console.log(data)
var obj=JSON.parse(data);
if(obj.errCode== 0)
result2="✅签到"+",奖励"+obj.detail.integral+"积分";
else
if(obj.errCode== 60101)
result2="签到说明:"+obj.errMsg;
else
result2="签到失败获取cookie";

var RecordListurl=$XidN.read("RecordListurlname");
var RecordAddhd=$XidN.read("RecordAddhdname");
var RecordListbd=$XidN.read("RecordListbdname");
  const RecordList={
      url:RecordListurl,
      headers:JSON.parse(RecordAddhd),
      body:RecordListbd,
      timeout:60000};
  $XidN.post(RecordList,function(error, response, data) {
if (logs==1)console.log(data)
var obj=JSON.parse(data);
if(obj.errCode== 0)

var objtemp=obj.detail.signRecordList;
 result2+=`[连续签到✨]${obj.detail.doSignDays+"天"+",账户"+obj.detail.userIntegral+"积分"}\n`;
for(var i=0;i<objtemp.length;i++)
{
  var tg=objtemp[i].signStatus==2?"(未完成)":"(已完成)";
  if(objtemp[i].integral!=undefined)
  result2+="[打卡查询🔍]"+objtemp[i].title+tg+"";
}
result2="<"+result1+">"+result2+"\n";
console.log(result2);
resolve(result2);
})
})
})
}  




function XidN_RecordAdd() {

  if ($request.headers) {

 var urlval = $request.url;
var md_hd=$request.headers;
var md_bd=$request.body;

if(urlval.indexOf("clientApi/signInRecordAdd")>=0)
{
var so= $XidN.write(md_bd,"RecordAddbdname");
 var ao= $XidN.write(urlval,"RecordAddurlname");
var bo= $XidN.write(JSON.stringify(md_hd),"RecordAddhdname");

if (ao==true&&bo==true&&so==true) 
 log(dd,"[获取签到数据]","✅成功");}

else
if(urlval.indexOf("clientApi/signInRecordList")>=0)
{
var so= $XidN.write(urlval,"RecordListurlname");
 var ao= $XidN.write(md_bd,"RecordListbdname");

if (ao==true&&so==true) 
 log(dd,"[获取连续签到数据]","✅成功");}




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
  XidN_RecordAdd()
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



