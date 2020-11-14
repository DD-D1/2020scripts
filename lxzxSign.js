/*

 @𝐗𝐢𝐝𝐍 𝐃𝐃    感谢红鲤鱼大佬
//++++++++++++++++++++++++++++++++-


⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️
先看说明 先看说明 先看说明

说明:

联想智选APP

签过了有可能就获取不到ck要等第二天

我也不知道有啥用 群友需要我就写了

圈x获取不到ck就把body改成header

打开软件签到获取ck 签过到可能获取不到ck

⚠️签到 1处获取ck的地方



小火箭:签到获取ck
联想智选 = type=http-request,script-path=https://raw.githubusercontent.com/XidNDD/2020scripts/master/lxzxSign%202.js,pattern=^https:\/\/api\.club\.lenovo\.cn\/,max-size=131072,requires-body=true,timeout=10,enable=true

定时 联想智选 = type=cron,script-path=https://raw.githubusercontent.com/XidNDD/2020scripts/master/lxzxSign%202.js,cronexpr="0 0 0 * * *",timeout=10,enable=true






surge:签到获取ck
联想智选 = type=http-request,pattern=^https:\/\/api\.club\.lenovo\.cn\/*,requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/XidNDD/2020scripts/master/lxzxSign%202.js

定时 联想智选 = type=cron,cronexp=0 10 0 * * *,script-path=https://raw.githubusercontent.com/XidNDD/2020scripts/master/lxzxSign%202.js





圈x:签到获取ck
^https:\/\/api\.club\.lenovo\.cn\/* url script-request-body https://raw.githubusercontent.com/XidNDD/2020scripts/master/lxzxSign%202.js

定时 0 10 0 * * * https://raw.githubusercontent.com/XidNDD/2020scripts/master/lxzxSign%202.js, tag=联想智选, enabled=true






loon:签到获取ck
http-request ^https:\/\/api\.club\.lenovo\.cn\/* script-path=https://raw.githubusercontent.com/XidNDD/2020scripts/master/lxzxSign%202.js, requires-body=true, timeout=10, tag=联想智选


定时 cron "0 10 0 * * *" script-path=https://raw.githubusercontent.com/XidNDD/2020scripts/master/lxzxSign%202.js 




MITM=api.club.lenovo.cn






*/










const $XidN = XidN();

const logs=0;//设置0关闭日志,1开启日志



//++++++++++++++++++++++++++++++++-


var dd="联想智选APP";





//++++++++++++++++++++++++++++++++


function main()
{
XidN_degin();}



 
async function XidN_degin()
 {
 let a0=await XidN_Sign();
 let a1=await XidN_siusers();
 log(dd,"",a0+a1);
   
}



  
  
  



function XidN_Sign()
  {
  return  new Promise((resolve, reject) => {
    
   var result1="每日签到打卡";
   var result2="";

var signinurl=$XidN.read("signinurlname");
var signinhd=$XidN.read("signinhdname");
var signinbd=$XidN.read("signinbdname");
  const signin={
      url:signinurl,
      headers:JSON.parse(signinhd),
      body:signinbd,
      timeout:60000};
  $XidN.post(signin,function(error, response, data) {
if (logs==1)console.log(data)
var obj=JSON.parse(data);
if(obj.status== 0)
result2="打卡✅获🉐️,"+obj.res.add_yb_tip;
else
if(obj.status== 1)
result2="今日已签到明日再来";
else
result2="签到失败获取cookie";
result2="【"+result1+"】"+result2+"\n";
console.log(result2);
resolve(result2);
})
})
}


function XidN_siusers()
  {
  return  new Promise((resolve, reject) => {
    
   var result1="查询账户信息";
   var result2="";

var siusersurl=$XidN.read("siusersurlname");
var siusershd=$XidN.read("siusershdname");
  const siusers={
      url:siusersurl,
      headers:JSON.parse(siusershd),
      timeout:60000};
  $XidN.get(siusers,function(error, response, data) {
if (logs==1)console.log(data)
var obj=JSON.parse(data);
if(obj.status== 0)
result2="昵称🧊"+obj.res.nickname+",会员等级"+obj.res.memberLevelName+",乐豆"+obj.res.ledou_user_amount+",优惠卷"+obj.res.coupon_count+",代金劵"+obj.res.voucher_balance+",积分"+obj.res.coins+",已签到"+obj.res.login_days+"天";

else
result2="未知的错误";
result2="【"+result1+"】"+result2+"\n";
console.log(result2);
resolve(result2);
})
})
}

   
   



function Env_yzkb() {

  if ($request.headers) {

 var urlval = $request.url;
var md_hd=$request.headers;
var md_bd=$request.body;

if(urlval.indexOf("common/signin/add")>=0)
{

 var ao= $XidN.write(urlval,"signinurlname");

var bo= $XidN.write(JSON.stringify(md_hd),"signinhdname");
var so= $XidN.write(md_bd,"signinbdname");

if (ao==true&&bo==true&&so==true) 
 log(dd,"[获取签到数据]","✅成功");}


else
if(urlval.indexOf("users/show?")>=0)
{

 var ao= $XidN.write(urlval,"siusersurlname");

var bo= $XidN.write(JSON.stringify(md_hd),"siusershdname");


if (ao==true&&bo==true) 
 log(dd,"[获取账户信息数据]","✅成功");}



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
  XidN_yzkb()
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




