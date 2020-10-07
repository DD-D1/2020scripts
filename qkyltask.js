/*
 @𝐗𝐢𝐝𝐍 𝐃𝐃    感谢红鲤鱼大佬

//++++++++++++++++++++++++++++++++

趣客有礼小程序

打开小程序获取ck 签到获取 转盘抽奖 红包抽奖 现金获取 广告视频获取 共5个地方
2020-10-2更新
趣客更新视频奖励 每日任务
如果获取不到视频ck 关掉去广告的规则 或者换掉圈x视频加载出来 在打开圈x获取


surge:远程
趣客有礼小程序 = type=http-request,pattern=^https:\/\/choujiang-server\.deering\.cn\/*,requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/XidNDD/2020scripts/master/qkyltask.js


圈x:远程
^https:\/\/choujiang-server\.deering\.cn\/* url script-request-body https://raw.githubusercontent.com/XidNDD/2020scripts/master/qkyltask.js


loon:远程
http-request ^https:\/\/choujiang-server\.deering\.cn\/* script-path=https://raw.githubusercontent.com/XidNDD/2020scripts/master/qkyltask.js, requires-body=true, timeout=10, tag=趣客有礼小程序



MITM= choujiang-server.deering.cn






*/













const $XidN = XidN();//声明必须


const log=0;//0关闭日志,1开启日志
const noNotice=0;//1关闭通知0打开通知.





//++++++++++++++++++++++++++++++++

const qukeyouli= "趣客有礼小程序";

const qkyl_signckname="qkyl_signckname";
const qkyl_signck= $XidN.read(qkyl_signckname);

const qkyl_signurlbdname="qkyl_signurlbdname";
const qkyl_signurlbd= $XidN.read(qkyl_signurlbdname);

const qkyl_signbdname="qkyl_signbdname";
const qkyl_signbd= $XidN.read(qkyl_signbdname);


const qkyl_drawbdname="qkyl_drawbdname";
const qkyl_drawbd= $XidN.read(qkyl_drawbdname);


const qkyl_luckybdname="qkyl_luckybdname";
const qkyl_luckybd= $XidN.read(qkyl_luckybdname);

const qkyl_videobdname="qkyl_videobdname";
const qkyl_videobd= $XidN.read(qkyl_videobdname);


const qkyl_signidckname="qkyl_signidckname";
const qkyl_signidck= $XidN.read(qkyl_signidckname);


const qkyl_runhbbdname="qkyl_runhbbdname";
const qkyl_runhbbd= $XidN.read(qkyl_runhbbdname);

const qkyl_videohdname="qkyl_videohdname";
const qkyl_videohd= $XidN.read(qkyl_videohdname);



var qkyl_num=0;var qkyl_result="";
//++++++++++++++++++++++++++++++++

//3.需要执行
function main()
{
qkyl_all();
}




function qkyl_all()

 {
 
   for(var i=0;i<8;i++)
 { (function(i) {
            setTimeout(function() {
  if(i==0) qkyl_main(i); 
else if(i==1)  qkyl_luckyurl(i);
else if(i==2)  qkyl_runhbb(i);
else if(i==3)  qkyl_video(i);
else if(i==4)  qkyl_signList(i);
else if(i==5)  qkyl_rebate(i);
           
   }, (i + 1) * 1000);
                })(i)
                
   }}



main()



//++++++++++++++++++++++++++++++++++++
//4.基础模板


function qkyl_main()
{
var result1 = "<日常打卡✍🏻>";   var result2  = "";
var tt = qukeyouli;

  
const llUrl1 = {url:"https://choujiang-server.deering.cn/exchange/sign",headers:{"token":qkyl_signck,"User-Agent":"Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/7.0.15(0x17000f15) NetType/4G Language/zh_CN","userId":qkyl_signidck
    },body:qkyl_signbd };
    

     $XidN.post(llUrl1, function(error, response, data) {
      if (log==1)console.log(data)
         var obj=JSON.parse(data)
      if(obj.code ==  0)
     result2="签到成功"+",获得"+obj.data.sign_gold+"🥔趣豆";
else if(obj.code==61000){
    result2="签到结果"+"🚫(重复签到)";    

}
  else result2= "签到失败获取ck";


     
qkyl_msg(result1+result2+"\n");

})
}



function qkyl_rebate()
{
var result1 = "<签到查询🔍>";   var result2  = "";
var tt = qukeyouli;

  const llUrl1 = {url:"https://choujiang-server.deering.cn/account/getUserMoney",headers:{"token":qkyl_signck,"User-Agent":"Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/7.0.15(0x17000f15) NetType/4G Language/zh_CN","userId":qkyl_signidck
    }, body:qkyl_signurlbd,timeout:600000};
    

     $XidN.post(llUrl1, function(error, response, data) {
     if (log==1)   console.log(data)
         var obj=JSON.parse(data)
      if(obj.code ==  0)
      {result2="累计获得,"+obj.data.user_gold+"🥔趣豆"+",账户余额,"+obj.data.user_money+"💶元"
    
}
      else result2= "查询失败获取ck❌";

       qkyl_msg(result1+""+result2+"\n");

})
}












function qkyl_luckyurl()
{
var result1 = "<全民拼大奖🔔>";   var result2  = "";
var tt = qukeyouli;

  const llUrl1 = {url:"https://choujiang-server.deering.cn/lucky-draw/Run",headers:{"token":qkyl_signck,"User-Agent":"Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/7.0.15(0x17000f15) NetType/4G Language/zh_CN","userId":qkyl_signidck
    }, body:qkyl_luckybd,timeout:600000};
    

     $XidN.post(llUrl1, function(error, response, data) {
     if(log==1)console.log(data)
         var obj=JSON.parse(data)
      if(obj.success ==  1)
      result2="获得奖励,"+obj.data.goods_name+",碎片/金币/趣豆"; 
    
      else if (obj.success==0){
         result2="趣豆不足!!!!!";
}
     else result2= "查询失败获取ck❌";

       qkyl_msg(result1+result2+"\n");

})
}







function qkyl_runhbb()
{
var result1 = "<现金兑换🧧>";   var result2  = "";
var tt = qukeyouli;

  const llUrl1 = {url:"https://choujiang-server.deering.cn/exchange/run",headers:{"token":qkyl_signck,"User-Agent":"Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/7.0.15(0x17000f15) NetType/4G Language/zh_CN","userId":qkyl_signidck
    }, body:qkyl_runhbbd,timeout:600000};
    

     $XidN.post(llUrl1, function(error, response, data) {
     if (log==1)   console.log(data)
         var obj=JSON.parse(data)
      if(obj.code ==  0)
      result2="获得奖励,"+obj.data.money+"现金";
    
else if (obj.code==71007){
         result2="红包已被兑完!!";
}

else if (obj.code==71001){
         result2="已经兑换过该红包了!!";
}
      
else if (obj.code==11000){
         result2="失败获取ck❌!!";
}
      
     else result2= "查询失败获取ck❌";

       qkyl_msg(result1+result2+"\n");

})
}


function qkyl_video()
{
var result1 = "<广告奖励🎦>";   var result2  = "";
var tt = qukeyouli;

  const llUrl1 = {url:"https://choujiang-server.visvos.com/task/watchVideo",headers:{"token":qkyl_signck,"User-Agent":"Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/7.0.15(0x17000f15) NetType/4G Language/zh_CN","userId":qkyl_signidck,"Referer":qkyl_videohd,"Content-Type":"application/x-www-form-urlencoded"
    }, body:qkyl_videobd,timeout:600000};
    

     $XidN.post(llUrl1, function(error, response, data) {
    if(log==1)console.log(data)
         var obj=JSON.parse(data)
      if(obj.code ==  0)
      result2="获得奖励,"+obj.data.money+"🥔趣豆";
    
else if (obj.code==11008){
         result2="不要着急吗2分钟后再试!!!";
}
      else result2= "查询失败获取ck❌";

       qkyl_msg(result1+result2+"\n");

})
}


function qkyl_signList()
{
var result1 = "<每日任务✨>";   var result2  = "";
var tt = qukeyouli;

  const llUrl1 = {url:"https://choujiang-server.deering.cn/exchange/signList",headers:{"token":qkyl_signck,"User-Agent":"Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/7.0.15(0x17000f15) NetType/4G Language/zh_CN","userId":qkyl_signidck
    }, body:qkyl_signbd,timeout:600000};
    

     $XidN.post(llUrl1, function(error, response, data) {
if(log==1)console.log(data)
var obj=JSON.parse(data);
if(obj.success==1)

var objtemp=obj.data.every_day;
for(var i=0;i<objtemp.length;i++)
{
  var tg=objtemp[i].complete_type==0?"(未完成)":"(已完成)";
  if(objtemp[i].before_number!=undefined)
  result2+=`${objtemp[i].name},奖励${objtemp[i].gold},进度${objtemp[i].before_number}/${objtemp[i].end_number}`+tg+"\n";
 
else
result2+=`${objtemp[i].name},奖励${objtemp[i].gold}`+tg+"\n";
}
 

       qkyl_msg(result1+result2+"");

})
}




function qkyl_msg(r)
{var tt=qukeyouli;
 qkyl_num++;qkyl_result+=r;
  
  console.log(qkyl_num)
  console.log(r)
  if(qkyl_num==6)
  papa(tt,"",qkyl_result,);
}











//固定函数
function papa(x,y,z){

if(noNotice==0)$XidN.notify(x,y,z);}




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



