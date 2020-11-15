/*

 @𝐗𝐢𝐝𝐍 𝐃𝐃    感谢红鲤鱼大佬
//++++++++++++++++++++++++++++++++-


⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️
先看说明 先看说明 先看说明

说明:
一个号只有3块钱 到了就没有红包了自行删掉脚本或禁用

水滴筹保险商城小程序 步数兑换可以获得现金

步数达到6666步即可兑换 没有就需要修改步数

步数兑换过了就获取不到ck要等第二天

圈x获取不到ck就把body改成header

打开软件兑换步数获取ck 签过到可能获取不到ck

⚠️兑换步数的时候就是签到 1处获取ck的地方



小火箭:签到获取ck
水滴筹保险商城小程序 = type=http-request,script-path=https://raw.githubusercontent.com/XidNDD/2020scripts/master/sdcbxscSign.js,pattern=^https:\/\/api\.sdbao\.com\/*,max-size=131072,requires-body=true,timeout=10,enable=true

定时 水滴筹保险商城小程序 = type=cron,script-path=https://raw.githubusercontent.com/XidNDD/2020scripts/master/sdcbxscSign.js,cronexpr="0 0 0 * * *",timeout=10,enable=true






surge:签到获取ck
水滴筹保险商城小程序 = type=http-request,pattern=^https:\/\/api\.sdbao\.com\/*,requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/XidNDD/2020scripts/master/sdcbxscSign.js

定时 水滴筹保险商城小程序 = type=cron,cronexp=0 10 0 * * *,script-path=https://raw.githubusercontent.com/XidNDD/2020scripts/master/sdcbxscSign.js





圈x:签到获取ck
^https:\/\/api\.sdbao\.com\/* url script-request-body https://raw.githubusercontent.com/XidNDD/2020scripts/master/sdcbxscSign.js

定时 0 10 0 * * * https://raw.githubusercontent.com/XidNDD/2020scripts/master/sdcbxscSign.js, tag=水滴筹保险商城小程序, enabled=true






loon:签到获取ck
http-request ^https:\/\/api\.sdbao\.com\/* script-path=https://raw.githubusercontent.com/XidNDD/2020scripts/master/sdcbxscSign.js, requires-body=true, timeout=10, tag=水滴筹保险商城小程序


定时 cron "0 10 0 * * *" script-path=https://raw.githubusercontent.com/XidNDD/2020scripts/master/sdcbxscSign.js 




MITM=api.sdbao.com






*/










const $XidN = XidN();

const logs=0;//设置0关闭日志,1开启日志



//++++++++++++++++++++++++++++++++-

var all="";
var dd="水滴保险商城小程序";





//++++++++++++++++++++++++++++++++


const delay = ms => new Promise(resolve => setTimeout(resolve, ms));






 
async function XidN_degin()
 {
 let a0=await XidN_Sign();
 let a1=await XidN_rain();
 let a2=await XidN_promotion();
 let a3=await XidN_AuthorizationV2();
 let all=a0+a1+a2+a3;




await delay(2000)



 log(dd,"",all);
}



  
  
  



function XidN_Sign()
  {
  return  new Promise((resolve, reject) => {
    
   var result1="每日签到打卡";
   var result2="";

var userstepurl=$XidN.read("userstepurlname");
var userstephd=$XidN.read("userstephdname");
  const userstep={
      url:userstepurl,
      headers:JSON.parse(userstephd),
      timeout:60000};
  $XidN.get(userstep,function(error, response, data) {
if (logs==1)console.log(data)
var obj=JSON.parse(data);
if(obj.code== 0)
result2="打卡成功✅";
else
if(obj.code== 43007)
result2=obj.msg;

else
if(obj.code== 43036)
result2=obj.msg;

else
if(obj.code== 10009)
result2=obj.msg;

else
if(obj.code== 43023)
result2=obj.msg;

else
if(obj.code== 43019)
result2=obj.msg;

else
result2="签到失败获取cookie";
result2="【"+result1+"】"+result2+"\n";
console.log(result2);
resolve(result2);

})
})
}

function XidN_rain()
  {
  return  new Promise((resolve, reject) => {
    
   var result1="拆现金红包🎊";
   var result2="";
var userstephd=$XidN.read("userstephdname");
  const rain={
      url:"https://api.sdbao.com/api/sdb/promotion/health/redpackage/v2/receive?AuthorizationV2=&activityId=1&awardNo=redpackagev2",
      headers:JSON.parse(userstephd),
      timeout:60000};
  $XidN.get(rain,function(error, response, data) {
if (logs==1)console.log(data)
var obj=JSON.parse(data);
if(obj.code== 0)
result2="兑换现金✅";
else
if(obj.code== 43008)
result2=obj.msg;

else
if(obj.code== 43036)
result2=obj.msg;

else
if(obj.code== 10009)
result2=obj.msg;

else
if(obj.code== 43023)
result2=obj.msg;

else
if(obj.code== 43022)
result2=obj.msg;

else
result2="失败获取cookie";
result2="【"+result1+"】"+result2+"\n";
console.log(result2);
resolve(result2);
})
})
}

   
   
function XidN_promotion()
  {
  return  new Promise((resolve, reject) => {
    
   var result1="现金红包提现";
   var result2="";
var userstephd=$XidN.read("userstephdname");
  const promotion={
      url:"https://api.sdbao.com/api/sdb/promotion/health/redpackage/v2/withdraw?AuthorizationV2=&activityId=1&awardNo=redpackagev2withdrawal",
      headers:JSON.parse(userstephd),
      timeout:60000};
  $XidN.get(promotion,function(error, response, data) {
if (logs==1)console.log(data)
var obj=JSON.parse(data);
if(obj.code== 0)
result2="提现成功✅获🉐️,"+obj.data.amount+"元💸";
else
if(obj.code== 43011)
result2=obj.msg;

else
if(obj.code== 43036)
result2=obj.msg;

else
if(obj.code== 10009)
result2=obj.msg;

else
if(obj.code== 43023)
result2=obj.msg;

else
if(obj.code== 43040)
result2=obj.msg;

else
result2="失败获取cookie";
result2="【"+result1+"】"+result2+"\n";
console.log(result2);
resolve(result2);
})
})
}


function XidN_AuthorizationV2()
  {
  return  new Promise((resolve, reject) => {
    
   var result1="查询账户信息";
   var result2="";
var userstephd=$XidN.read("userstephdname");
  const Authorization={
      url:"https://api.sdbao.com/api/sdb/promotion/health/userstep/v2/user-health-detail?AuthorizationV2=&activityId=1",
      headers:JSON.parse(userstephd),
      timeout:60000};
  $XidN.get(Authorization,function(error, response, data) {
if (logs==1)console.log(data)
var obj=JSON.parse(data);
if(obj.code== 0)
result2="步数达标共"+obj.data.qualifiedDay+"天";


var userstephd=$XidN.read("userstephdname");
  const AuthorizationV={
      url:"https://api.sdbao.com/api/sdb/promotion/activity/health/v2/gotten-service?AuthorizationV2=&activityId=1",
      headers:JSON.parse(userstephd),
      timeout:60000};
  $XidN.get(AuthorizationV,function(error, response, data) {
if (logs==1)console.log(data)
var obj=JSON.parse(data);
if(obj.code== 0)
result2+=",累计提现"+obj.data.totalPrice+"元💸";

else
result2="失败获取cookie";
result2="【"+result1+"】"+result2+"\n";
console.log(result2);
resolve(result2);
})
})
})
}







function XidN_sdcxcx() {

  if ($request.headers) {

 var urlval = $request.url;
var md_hd=$request.headers;
var md_bd=$request.body;

if(urlval.indexOf("/api/sdb/promotion/health/userstep/v2/signin?")>=0)
{

 var ao= $XidN.write(urlval,"userstepurlname");

var bo= $XidN.write(JSON.stringify(md_hd),"userstephdname");

if (ao==true&&bo==true) 
 log(dd,"[获取签到数据]","✅成功");}

}  
}



function main()
{
XidN_degin();}



function log(x,y,z){

$XidN.notify(x,y,z);}
function getRandom(start, end, fixed = 0) {
  let differ = end - start
  let random = Math.random()
  return (start + differ * random).toFixed(fixed)
}

if ($XidN.isRequest) {
  XidN_sdcxcx()
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

