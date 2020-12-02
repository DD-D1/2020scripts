/*

 @𝐃𝐃 𝐃𝐃   感谢红鲤鱼大佬
//++++++++++++++++++++++++++++++++-


⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️
先看说明 先看说明 先看说明

可以使用一下我的邀请码

https://m.q.qq.com/a/s/5e8d194bfef05e8841e81486fbdc49b8



跑一下脚本大概加1分钟
时长够了 金币自动领取
增加签到翻倍奖励 和系统通知开关

说明:

QQ企鹅读书小程序 签到可以获🉐️金币兑换现金

签过了有可能就获取不到ck要等第二天

圈x获取不到ck就把body改成header

打开软件签到获取ck 签过到可能获取不到ck

 
⚠️签到  阅读时长 2处获取ck的地方



小火箭:签到获取ck
企鹅读书小程序 = type=http-request,script-path=readSign.js,pattern=^https:\/\/mqqapi\.reader\.qq\.com\/*,max-size=131072,requires-body=true,timeout=10,enable=true

定时 企鹅读书小程序 = type=cron,script-path=readSign.js,cronexpr="0 0 0 * * *",timeout=10,enable=true






surge:签到获取ck
企鹅读书小程序 = type=http-request,pattern=^https:\/\/mqqapi\.reader\.qq\.com\/*,requires-body=1,max-size=0,script-path=readSign.js

定时 企鹅读书小程序 = type=cron,cronexp=0 10 0 * * *,script-path=readSign.js





圈x:签到获取ck
^https:\/\/mqqapi\.reader\.qq\.com\/* url script-request-body readSign.js

定时 0 10 0 * * * readSign.js, tag=企鹅读书小程序, enabled=true






loon:签到获取ck
http-request ^https:\/\/mqqapi\.reader\.qq\.com\/* script-path=readSign.js, requires-body=true, timeout=10, tag=企鹅读书小程序


定时 cron "0 10 0 * * *" script-path=readSign.js 




MITM=mqqapi.reader.qq.com






*/











const DD ='企鹅读书小程序';

const $ = new Env(DD);


const logs=0;//0关闭日志,1开启日志,建议关闭

const log=0;//0关闭系统日志,1开启系统日志,和系统通知不要一起打开,关闭系统通知就要打开,系统日志

const noNolog=0;//1关闭系统通知,0打开系统通知.



console.log(`\n============ 脚本执行时间(TM)：${new Date(new Date().getTime() + 0 * 60 * 60 * 1000).toLocaleString('zh', {hour12: false})}  =============\n`)


!(async () => {
  if (typeof $request != "undefined") {
    await qedssign()
  } else {
    await initSign()
    await pageSign()
    await clockSign()
    await FbookSign()
    await bookShelfInitSign()
    await treasureSign()
    await videoSign()
    await watchSign()
    await fromGuidSign()
    await addReadSign()
    await mqqapiSign()
    await bookSign()
    await secondsSign()
    await seconds1Sign()
    await seconds2Sign()
    await Msg()
  }
})()
  .catch((e) => $.logErr(e))
  .finally(() => $.done())



 function pageSign() {
  return new Promise((resolve) => {
      let Url = {
        url : $.getdata('pagesignurl'),
        headers : JSON.parse($.getdata('pageheader')),
     
      }
      $.get(Url, async (err, resp, data) => {
        try {
          data = JSON.parse(data);
          if(logs==1)console.log(data)
          $.page = data;
        } catch (e) {
          $.logErr(e, resp);
        } finally {
          resolve()
        }
      })
  })
}

function treasureSign() {
  return new Promise((resolve) => {
      let Url = {
        url : "https://mqqapi.reader.qq.com/mqq/red_packet/user/treasure_box",
        headers : JSON.parse($.getdata('pageheader')),
     
      }
      $.get(Url, async (err, resp, data) => {
        try {
          data = JSON.parse(data);
          if(logs==1)console.log(data)
          $.treasure = data;
        } catch (e) {
          $.logErr(e, resp);
        } finally {
          resolve()
        }
      })
  })
}


function videoSign(timeout=3000) {
  return new Promise((resolve) => {
   setTimeout( ()=>{
      let Url = {
        url : "https://mqqapi.reader.qq.com/mqq/red_packet/user/treasure_box_video",
        headers : JSON.parse($.getdata('pageheader')),
     
      }
      $.get(Url, async (err, resp, data) => {
        try {
          data = JSON.parse(data);
          if(logs==1)console.log(data)
          $.video = data;
        } catch (e) {
          $.logErr(e, resp);
        } finally {
          resolve()
        }
      })
   },timeout)
  })
}


function watchSign() {
  return new Promise((resolve) => {
      let Url = {
        url :  "https://mqqapi.reader.qq.com/mqq/red_packet/user/watch_video",
        headers : JSON.parse($.getdata('pageheader')),
     
      }
      $.get(Url, async (err, resp, data) => {
        try {
          data = JSON.parse(data);
          if(logs==1)console.log(data)
          $.watch = data;
        } catch (e) {
          $.logErr(e, resp);
        } finally {
          resolve()
        }
      })
  })
}



function fromGuidSign() {
  return new Promise((resolve) => {
      let Url = {
        url :  "https://mqqapi.reader.qq.com/mqq/red_packet/user/page?fromGuid=",
        headers : JSON.parse($.getdata('pageheader')),
     
      }
      $.get(Url, async (err, resp, data) => {
        try {
          data = JSON.parse(data);
          if(logs==1)console.log(data)
          $.fromGuid = data;
        } catch (e) {
          $.logErr(e, resp);
        } finally {
          resolve()
        }
      })
  })
}

function FbookSign() {
  return new Promise((resolve) => {
      let Url = {
        url :  "https://mqqapi.reader.qq.com/mqq/page/config?router=%2Fpages%2Fbook-read%2Findex&options=%7B%22bid%22%3A%2223475205%22%2C%22cid%22%3A%221%22%2C%22from%22%3A%22shelf%22%7D",
        headers : JSON.parse($.getdata('pageheader')),
     
      }
      $.get(Url, async (err, resp, data) => {
        try {
          data = JSON.parse(data);
          if(logs==1)console.log(data)
          $.Fbook = data;
        } catch (e) {
          $.logErr(e, resp);
        } finally {
          resolve()
        }
      })
  })
}



function addReadSign() {
  return new Promise((resolve) => {
      let Url = {
        url :  $.getdata('addReadTimesignurl'),
        headers : JSON.parse($.getdata('pageheader')),
     
      }
      $.get(Url, async (err, resp, data) => {
        try {
          data = JSON.parse(data);
          if(logs==1)console.log(data)
          $.addRead = data;
        } catch (e) {
          $.logErr(e, resp);
        } finally {
          resolve()
        }
      })
  })
}






function bookShelfInitSign() {
  return new Promise((resolve) => {
      let Url = {
        url :  "https://mqqapi.reader.qq.com/mqq/v1/bookShelfInit",
        headers : JSON.parse($.getdata('pageheader')),
     
      }
      $.get(Url, async (err, resp, data) => {
        try {
          data = JSON.parse(data);
          if(logs==1)console.log(data)
          $.bookShelfInit = data;
        } catch (e) {
          $.logErr(e, resp);
        } finally {
          resolve()
        }
      })
  })
}




function initSign() {
  return new Promise((resolve) => {
      let Url = {
        url :  "https://mqqapi.reader.qq.com/mqq/user/init",
        headers : JSON.parse($.getdata('pageheader')),
     
      }
      $.get(Url, async (err, resp, data) => {
        try {
          data = JSON.parse(data);
          if(logs==1)console.log(data)
          $.init = data;
        } catch (e) {
          $.logErr(e, resp);
        } finally {
          resolve()
        }
      })
  })
}



function mqqapiSign() {
  return new Promise((resolve) => {
      let Url = {
        url :  "https://mqqapi.reader.qq.com/mqq/red_packet/user/page?fromGuid=",
        headers : JSON.parse($.getdata('pageheader')),
     
      }
      $.get(Url, async (err, resp, data) => {
        try {
          data = JSON.parse(data);
          if(logs==1)console.log(data)
          $.mqqapi = data;
        } catch (e) {
          $.logErr(e, resp);
        } finally {
          resolve()
        }
      })
  })
}

function bookSign() {
  return new Promise((resolve) => {
      let Url = {
        url :  "https://mqqapi.reader.qq.com/mqq/red_packet/user/read_book",
        headers : JSON.parse($.getdata('pageheader')),
     
      }
      $.get(Url, async (err, resp, data) => {
        try {
          data = JSON.parse(data);
          if(logs==1)console.log(data)
          $.book = data;
        } catch (e) {
          $.logErr(e, resp);
        } finally {
          resolve()
        }
      })
  })
}



function secondsSign() {
  return new Promise((resolve) => {
      let Url = {
        url :  "https://mqqapi.reader.qq.com/mqq/red_packet/user/read_time?seconds=30",
        headers : JSON.parse($.getdata('pageheader')),
     
      }
      $.get(Url, async (err, resp, data) => {
        try {
          data = JSON.parse(data);
          if(logs==1)console.log(data)
          $.seconds = data;
        } catch (e) {
          $.logErr(e, resp);
        } finally {
          resolve()
        }
      })
  })
}


function seconds1Sign(timeout=5000) {
  return new Promise((resolve) => {
   setTimeout( ()=>{
      let Url = {
        url :  "https://mqqapi.reader.qq.com/mqq/red_packet/user/read_time?seconds=300",
        headers : JSON.parse($.getdata('pageheader')),
     
      }
      $.get(Url, async (err, resp, data) => {
        try {
          data = JSON.parse(data);
          if(logs==1)console.log(data)
          $.secondss = data;
        } catch (e) {
          $.logErr(e, resp);
        } finally {
          resolve()
        }
      })
   },timeout)
  })
}


function seconds2Sign(timeout=5000) {
  return new Promise((resolve) => {
   setTimeout( ()=>{
      let Url = {
        url :  "https://mqqapi.reader.qq.com/mqq/red_packet/user/read_time?seconds=1800",
        headers : JSON.parse($.getdata('pageheader')),
     
      }
      $.get(Url, async (err, resp, data) => {
        try {
          data = JSON.parse(data);
          if(logs==1)console.log(data)
          $.secondsss = data;
        } catch (e) {
          $.logErr(e, resp);
        } finally {
          resolve()
        }
      })
   },timeout)
  })
}

function clockSign() {
  return new Promise((resolve) => {
      let Url = {
        url :  "https://mqqapi.reader.qq.com/mqq/red_packet/user/clock_in_video",
        headers : JSON.parse($.getdata('pageheader')),
     
      }
      $.get(Url, async (err, resp, data) => {
        try {
          data = JSON.parse(data);
          if(logs==1)console.log(data)
          $.clock = data;
        } catch (e) {
          $.logErr(e, resp);
        } finally {
          resolve()
        }
      })
  })
}





function Msg() {
  let dd = ""

if ($.init.code == 0) 
dd +="【账户信息昵称】"+$.init.data.user.nickName+"\n";

if ($.page.code == 0) 
dd +="【每日签到打卡】"+"今日打卡获得"+$.page.data.todayAmount+"💰金币"+",已签到"+$.page.data.clockInDays+"天\n";


if ($.clock.code == -1) 
dd +="【每日签到翻倍】"+"今日已完成明日再来\n";


if ($.clock.code==0) 
dd +="【每日签到翻倍】"+"获得"+$.clock.data.amount+"💰金币\n";




if ($.mqqapi.code == 0) 
dd +="【邀请新用户】"+$.mqqapi.data.invite.month+"月"+",第"+$.mqqapi.data.invite.issue+"期"+",时间"+$.mqqapi.data.invite.dayRange+"\n";

if ($.mqqapi.code == 0) 
dd +="已邀请"+$.mqqapi.data.invite.inviteCount+"人"+",在邀请"+$.mqqapi.data.invite.nextInviteConfig.count+"人"+",可获得"+$.mqqapi.data.invite.nextInviteConfig.amount+"金币💰\n";



if ($.treasure.code == 0)
dd+="【时段宝箱打卡】"+"已开第"+$.treasure.data.count+"个宝箱"+"✅获得"+$.treasure.data.amount+"💰金币\n";
if ($.treasure.code == -1)
dd+="【时段宝箱打卡】"+$.treasure.msg+"\n";


if ($.video.code == 0)
dd+="【翻倍宝箱打卡】"+"✅获得"+$.video.data.amount+"💰金币\n";
if ($.video.code == -1)
dd+="【翻倍宝箱打卡】"+$.video.msg+"\n";


if ($.watch.code == 0)
dd+="【看视频领金币】"+"✅获得"+$.watch.data.amount+"💰金币\n";
if ($.watch.code == -1)
dd+="【看视频领金币】"+"明日再来\n";


if ($.bookShelfInit.code == 0)
dd+="【时长累计查询】"+"本周累计阅读"+$.bookShelfInit.data.readTime+"分钟\n";

if ($.mqqapi.code == 0) 
dd +="【阅读奖励金币】"+$.mqqapi.data.taskList[1].title+",可获得"+$.mqqapi.data.taskList[1].amount+"💰";


if ($.book.code == 0) 
dd +="+"+$.book.data.amount+"💰金币\n";

if ($.book.code == -1) 
dd +=$.book.msg+"\n";


if ($.Fbook.code == 0){
dd +="【阅读时长查询】"+"今日已阅读"+($.Fbook.data.pageParams.todayReadSeconds/60).toFixed(0)+'分钟\n';
for(let i=0;i<$.Fbook.data.pageParams.readTimeTask.length;i++)
 {
var gg=$.Fbook.data.pageParams.readTimeTask[i].doneFlag==0?"(阅读时长未到)":"(阅读奖励已发放)";
if($.Fbook.data.pageParams.readTimeTask[i].doneFlag!=undefined)
dd +="阅读"+$.Fbook.data.pageParams.readTimeTask[i].timeStr+",可获得"+$.Fbook.data.pageParams.readTimeTask[i].amount+"金币💰"+gg+"\n";
}}





if ($.seconds.data.amount >0)
dd+="【阅读30秒奖励】"+"✅获得"+$.seconds.data.amount+"💰金币\n";



if ($.secondss.data.amount>0)
dd+="【阅读5分钟奖励】"+"✅获得"+$.secondss.data.amount+"💰金币\n";



if ($.secondss.data.amount >0)
dd+="【阅读30分钟奖励】"+"✅获得"+$.secondss.data.amount+"💰金币\n";






if ($.fromGuid.code == 0)
dd+="【账号信息查询】"+"当前账号"+$.fromGuid.data.user.amount+"💰金币"+",折合人民币"+(Number($.fromGuid.data.user.amount)/10000).toFixed(2) +"元\n";

  

if(log==1)console.log(dd)

 if(noNolog==0)$.msg($.name,"",dd)
}



function qedssign() {
  if ($request.url.indexOf("clock_in/page") > -1) {
    $.setdata($request.url,'pagesignurl')
    $.setdata(JSON.stringify($request.headers),'pageheader')
    
    $.msg($.name,"","[获取签到数据]✅成功")}



else
if ($request.url.indexOf("addReadTimeWithBid?") > -1) {
    $.setdata($request.url,'addReadTimesignurl')
        
    $.msg($.name,"","[获取时长数据]✅成功")}

}
































function Env(t,e){class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`\ud83d\udd14${this.name}, \u5f00\u59cb!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),a={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(a,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t){let e={"M+":(new Date).getMonth()+1,"d+":(new Date).getDate(),"H+":(new Date).getHours(),"m+":(new Date).getMinutes(),"s+":(new Date).getSeconds(),"q+":Math.floor(((new Date).getMonth()+3)/3),S:(new Date).getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,((new Date).getFullYear()+"").substr(4-RegExp.$1.length)));for(let s in e)new RegExp("("+s+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[s]:("00"+e[s]).substr((""+e[s]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r)));let h=["","==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];h.push(e),s&&h.push(s),i&&h.push(i),console.log(h.join("\n")),this.logs=this.logs.concat(h)}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t.stack):this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}
