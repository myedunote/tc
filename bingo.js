/*
目标:  小程序 bingo荟 抓包h5.youzan.com域名请求头里extra-data中的sid和uuid用&连接 不分顺序

格式：export bingo="uuid=xxxxxxxx&sid=xxxxxxx"  多账号换行隔开

cron: 32 5 12 * * ?

频道：https://t.me/+O6-uZI3t6uhhMmU1
*/

const $ = new Env("bingo荟");
let envSplitor = ['\n']  //多账号隔开方式，默认换行可自定义
///////////////////////////////维护参数自行更换//////////////////////////////////
let defaultUA = 'Mozilla/5.0 (Linux; Android 10; V1824A Build/QP1A.190711.020; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/74.0.3729.186 Mobile Safari/537.36/duapp/5.5.1(android;10)'                    //默认UA

var _0xodn='jsjiami.com.v6',_0xodn_=['_0xodn'],_0x196e=[_0xodn,'\x69\x73\x4e\x6f\x64\x65','\x65\x6e\x76','\x62\x69\x6e\x67\x6f','\x67\x65\x74\x64\x61\x74\x61','\x69\x6e\x64\x65\x78','\x6e\x61\x6d\x65','\x76\x61\x6c\x69\x64','\x63\x61\x6e\x52\x65\x61\x64','\x70\x61\x72\x61\x6d','\x73\x74\x72\x32\x6a\x73\x6f\x6e','\x63\x6b\x56\x61\x6c\x69\x64','\x6c\x6f\x67\x41\x6e\x64\x4e\x6f\x74\x69\x66\x79','\u8d26\u53f7\x5b','\x5d\x43\x4b\u683c\u5f0f\u9519\u8bef','\x67\x65\x74\x54\x69\x6d\x65','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x68\x35\x2e\x79\x6f\x75\x7a\x61\x6e\x2e\x63\x6f\x6d\x2f\x77\x73\x63\x75\x73\x65\x72\x2f\x6d\x65\x6d\x62\x65\x72\x63\x65\x6e\x74\x65\x72\x2f\x73\x74\x61\x74\x73\x2e\x6a\x73\x6f\x6e\x3f\x6b\x64\x74\x5f\x69\x64\x3d\x39\x39\x36\x39\x35\x38\x32\x32\x26\x76\x65\x72\x73\x69\x6f\x6e\x3d\x33\x2e\x38\x33\x2e\x34\x2e\x31\x30\x31\x30\x30\x31','\x7b\x22\x69\x73\x5f\x77\x65\x61\x70\x70\x22\x3a\x31\x2c\x22\x73\x69\x64\x22\x3a\x22','\x73\x69\x64','\x22\x2c\x22\x76\x65\x72\x73\x69\x6f\x6e\x22\x3a\x22\x33\x2e\x38\x33\x2e\x34\x2e\x31\x30\x31\x30\x30\x31\x22\x2c\x22\x63\x6c\x69\x65\x6e\x74\x22\x3a\x22\x77\x65\x61\x70\x70\x22\x2c\x22\x62\x69\x7a\x45\x6e\x76\x22\x3a\x22\x72\x65\x74\x61\x69\x6c\x22\x2c\x22\x75\x75\x69\x64\x22\x3a\x22','\x75\x75\x69\x64','\x22\x2c\x22\x66\x74\x69\x6d\x65\x22\x3a','\x67\x65\x74','\x63\x6f\x64\x65','\x5d\u73b0\u6709\u79ef\u5206\x3a','\x64\x61\x74\x61','\x73\x74\x61\x74\x73','\x70\x6f\x69\x6e\x74\x73','\x5d\u67e5\u8be2\u8d26\u6237\u5931\u8d25\uff0c\u53d8\u91cf\u5931\u6548\u6216\u68c0\u67e5\u53d8\u91cf\u683c\u5f0f','\x72\x65\x73\x6f\x6c\x76\x65','\x73\x69\x67\x6e','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x68\x35\x2e\x79\x6f\x75\x7a\x61\x6e\x2e\x63\x6f\x6d\x2f\x77\x73\x63\x75\x6d\x70\x2f\x63\x68\x65\x63\x6b\x69\x6e\x2f\x63\x68\x65\x63\x6b\x69\x6e\x56\x32\x2e\x6a\x73\x6f\x6e\x3f\x63\x68\x65\x63\x6b\x69\x6e\x49\x64\x3d\x33\x33\x31\x34\x33\x36\x39\x26\x6b\x64\x74\x5f\x69\x64\x3d\x31\x31\x39\x33\x39\x38\x34\x30\x36','\x5d\u7b7e\u5230\u83b7\u5f97\x3a','\x6c\x69\x73\x74','\x69\x6e\x66\x6f\x73','\x74\x69\x74\x6c\x65','\x5d\u4eca\u65e5\u5df2\u7b7e\u5230','\x75\x6e\x64\x65\x66\x69\x6e\x65\x64','\x0a\u901a\u77e5\u533a\uff1a\x0a\u611f\u8c22\x62\x79\u5357\u5bab\u950c\u67f1\u6295\u7a3f\x20\u53cd\u9988\u8bf4\u7b7e\u5230\u7684\u79ef\u5206\u53ef\u5151\u6362\u5168\u989d\u62b5\u6263\u5404\u79cd\x76\x69\x70\u5361\u5238\x0a\u5151\u6362\u5165\u53e3\x3a\u5c0f\u7a0b\u5e8f\u9996\u9875\x2d\x2d\u4ee3\u4ef7\u5361\u5238','\x66\x69\x6c\x74\x65\x72','\x6c\x65\x6e\x67\x74\x68','\x0a\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x20\u8d26\u53f7\u68c0\u6d4b\x20\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d','\x70\x75\x73\x68','\x61\x6c\x6c','\x0a\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x20\u6bcf\u65e5\u7b7e\u5230\x20\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d','\x73\x68\x6f\x77\x6d\x73\x67','\x63\x61\x74\x63\x68','\x6c\x6f\x67','\x66\x69\x6e\x61\x6c\x6c\x79','\x64\x6f\x6e\x65','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x76\x31\x2e\x6a\x69\x6e\x72\x69\x73\x68\x69\x63\x69\x2e\x63\x6f\x6d\x2f\x61\x6c\x6c\x2e\x6a\x73\x6f\x6e','\x63\x6f\x6e\x74\x65\x6e\x74','\x20\x20\x0a\x20\u2014\u2014\u2014\u2014\u300a','\x6f\x72\x69\x67\x69\x6e','\x61\x75\x74\x68\x6f\x72','\x69\x6e\x64\x65\x78\x4f\x66','\x73\x70\x6c\x69\x74','\x0a\u274c\u672a\u627e\u5230\x43\x4b\x20\u8bf7\u9605\u8bfb\u811a\u672c\u8bf4\u660e','\u5171\u627e\u5230','\u4e2a\u8d26\u53f7','\x72\x65\x70\x6c\x61\x63\x65','\x62\x6f\x64\x79','\x68\x65\x61\x64\x65\x72\x73','\x63\x6f\x6e\x74\x65\x6e\x74\x2d\x74\x79\x70\x65','\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6a\x73\x6f\x6e\x3b\x63\x68\x61\x72\x73\x65\x74\x3d\x55\x54\x46\x2d\x38','\x43\x6f\x6e\x74\x65\x6e\x74\x2d\x4c\x65\x6e\x67\x74\x68','\x73\x65\x6e\x64','\u8bf7\u6c42\u5931\u8d25','\x73\x74\x72\x69\x6e\x67\x69\x66\x79','\x6f\x62\x6a\x65\x63\x74','\x70\x61\x72\x73\x65','\x79\x6a\x73\x4d\x58\x6a\x79\x69\x71\x61\x6d\x69\x2e\x63\x6f\x6d\x44\x2e\x52\x4b\x54\x76\x4a\x36\x78\x56\x6b\x5a\x6e\x58\x44\x3d\x3d'];function _0xeed2(_0x31596a,_0x1fc848){_0x31596a=~~'0x'['concat'](_0x31596a['slice'](0x0));var _0x12786=_0x196e[_0x31596a];return _0x12786;};(function(_0x47aff1,_0x4d6cda){var _0x319583=0x0;for(_0x4d6cda=_0x47aff1['shift'](_0x319583>>0x2);_0x4d6cda&&_0x4d6cda!==(_0x47aff1['pop'](_0x319583>>0x3)+'')['replace'](/[yMXyqDRKTJxVkZnXD=]/g,'');_0x319583++){_0x319583=_0x319583^0x1222ca;}}(_0x196e,_0xeed2));let httpResult,httpReq,httpResp;let userCookie=($[_0xeed2('0')]()?process[_0xeed2('1')][_0xeed2('2')]:$[_0xeed2('3')](_0xeed2('2')))||'';let userList=[];let userIdx=0x0;let userCount=0x0;class UserInfo{constructor(_0x3bfb73){this[_0xeed2('4')]=++userIdx;this[_0xeed2('5')]=this[_0xeed2('4')];this[_0xeed2('6')]=![];this[_0xeed2('7')]=![];try{this[_0xeed2('8')]=$[_0xeed2('9')](_0x3bfb73);this[_0xeed2('a')]=!![];}catch(_0x3a3ff9){this[_0xeed2('a')]=![];$[_0xeed2('b')](_0xeed2('c')+this[_0xeed2('4')]+_0xeed2('d'));}}async['\x6d\x79'](){try{let _0x2b0324=new Date()[_0xeed2('e')]();let _0x1d8026=_0xeed2('f');let _0x38409b='';let _0x4458ca=_0xeed2('10')+this[_0xeed2('8')][_0xeed2('11')]+_0xeed2('12')+this[_0xeed2('8')][_0xeed2('13')]+_0xeed2('14')+_0x2b0324+'\x7d';let _0x1faa91=populateUrlObject(_0x1d8026,_0x4458ca,_0x38409b);await httpRequest(_0xeed2('15'),_0x1faa91);let _0x433db5=httpResult;if(!_0x433db5)return;if(_0x433db5[_0xeed2('16')]==0x0){this[_0xeed2('6')]=!![];this[_0xeed2('7')]=!![];$[_0xeed2('b')](_0xeed2('c')+this[_0xeed2('5')]+_0xeed2('17')+_0x433db5[_0xeed2('18')][_0xeed2('19')][_0xeed2('1a')]);}else{$[_0xeed2('b')](_0xeed2('c')+this[_0xeed2('5')]+_0xeed2('1b'));}}catch(_0x128437){}finally{return Promise[_0xeed2('1c')](0x1);}}async[_0xeed2('1d')](){try{let _0xc4f72=new Date()[_0xeed2('e')]();let _0x5592ef=_0xeed2('1e');let _0x5ddfcf='';let _0x23af4a=_0xeed2('10')+this[_0xeed2('8')][_0xeed2('11')]+_0xeed2('12')+this[_0xeed2('8')][_0xeed2('13')]+_0xeed2('14')+_0xc4f72+'\x7d';let _0x289aa4=populateUrlObject(_0x5592ef,_0x23af4a,_0x5ddfcf);await httpRequest(_0xeed2('15'),_0x289aa4);let _0x34c898=httpResult;if(!_0x34c898)return;if(_0x34c898[_0xeed2('16')]==0x0){$[_0xeed2('b')](_0xeed2('c')+this[_0xeed2('5')]+_0xeed2('1f')+_0x34c898[_0xeed2('18')][_0xeed2('20')][0x0][_0xeed2('21')][_0xeed2('22')]+'\u79ef\u5206');}else{$[_0xeed2('b')](_0xeed2('c')+this[_0xeed2('5')]+_0xeed2('23'));}}catch(_0xc18a45){}finally{return Promise[_0xeed2('1c')](0x1);}}}!(async()=>{if(typeof $request!==_0xeed2('24')){}else{if(!(await checkEnv()))return;await sc();$[_0xeed2('b')](_0xeed2('25'));let _0x1040c5=[];let _0xdcbc78=userList[_0xeed2('26')](_0x11c2c5=>_0x11c2c5[_0xeed2('a')]);if(_0xdcbc78[_0xeed2('27')]>0x0){$[_0xeed2('b')](_0xeed2('28'));_0x1040c5=[];for(let _0x4ec278 of _0xdcbc78){_0x1040c5[_0xeed2('29')](_0x4ec278['\x6d\x79']());}await Promise[_0xeed2('2a')](_0x1040c5);_0xdcbc78=_0xdcbc78[_0xeed2('26')](_0x5ccf5e=>_0x5ccf5e[_0xeed2('6')]);if(_0xdcbc78[_0xeed2('27')]>0x0){$[_0xeed2('b')](_0xeed2('2b'));_0x1040c5=[];for(let _0x2b8af5 of _0xdcbc78[_0xeed2('26')](_0x2b8944=>_0x2b8944[_0xeed2('7')])){_0x1040c5[_0xeed2('29')](_0x2b8af5[_0xeed2('1d')]());}await Promise[_0xeed2('2a')](_0x1040c5);}}await $[_0xeed2('2c')]();}})()[_0xeed2('2d')](_0x1fb046=>console[_0xeed2('2e')](_0x1fb046))[_0xeed2('2f')](()=>$[_0xeed2('30')]());async function sc(){try{let _0x247e3d=_0xeed2('31');let _0x52c73c='';let _0x527b6c=populateUrlObject(_0x247e3d,_0x52c73c);await httpRequest(_0xeed2('15'),_0x527b6c);let _0x185664=httpResult;if(!_0x185664)return;$[_0xeed2('b')]('\x0a\x20'+_0x185664[_0xeed2('32')]+_0xeed2('33')+_0x185664[_0xeed2('34')]+'\u300b'+_0x185664[_0xeed2('35')]);var _0x4fab9e=_0x185664[_0xeed2('32')];}catch(_0x26e20f){}finally{return Promise[_0xeed2('1c')](0x1);}}async function checkEnv(){if(userCookie){let _0x53c045=envSplitor[0x0];for(let _0x4b6165 of envSplitor){if(userCookie[_0xeed2('36')](_0x4b6165)>-0x1){_0x53c045=_0x4b6165;break;}}for(let _0x55501e of userCookie[_0xeed2('37')](_0x53c045)){if(_0x55501e)userList[_0xeed2('29')](new UserInfo(_0x55501e));}userCount=userList[_0xeed2('27')];}else{console[_0xeed2('2e')](_0xeed2('38'));return;}console[_0xeed2('2e')](_0xeed2('39')+userCount+_0xeed2('3a'));return!![];}function populateUrlObject(_0x14b129,_0x54ab8d,_0x4db5d2=''){let _0x5a6882=_0x14b129[_0xeed2('3b')]('\x2f\x2f','\x2f')[_0xeed2('37')]('\x2f')[0x1];let _0x1b8402={'\x75\x72\x6c':_0x14b129,'\x68\x65\x61\x64\x65\x72\x73':{'Host':_0x5a6882,'extra-data':_0x54ab8d,'User-Agent':defaultUA},'\x74\x69\x6d\x65\x6f\x75\x74':0x1388};if(_0x4db5d2){_0x1b8402[_0xeed2('3c')]=_0x4db5d2;_0x1b8402[_0xeed2('3d')][_0xeed2('3e')]=_0xeed2('3f');_0x1b8402[_0xeed2('3d')][_0xeed2('40')]=_0x1b8402[_0xeed2('3c')]?_0x1b8402[_0xeed2('3c')][_0xeed2('27')]:0x0;}return _0x1b8402;}async function httpRequest(_0x19c9d2,_0x1bf766){httpResult=null,httpReq=null,httpResp=null;return new Promise(_0x4059c7=>{$[_0xeed2('41')](_0x19c9d2,_0x1bf766,async(_0x59aa4e,_0xa5c45a,_0x319bc7)=>{try{httpReq=_0xa5c45a;httpResp=_0x319bc7;if(_0x59aa4e){console[_0xeed2('2e')](_0x19c9d2+_0xeed2('42'));console[_0xeed2('2e')](JSON[_0xeed2('43')](_0x59aa4e));}else{if(_0x319bc7[_0xeed2('3c')]){if(typeof _0x319bc7[_0xeed2('3c')]==_0xeed2('44')){httpResult=_0x319bc7[_0xeed2('3c')];}else{try{httpResult=JSON[_0xeed2('45')](_0x319bc7[_0xeed2('3c')]);}catch(_0x588668){httpResult=_0x319bc7[_0xeed2('3c')];}}}}}catch(_0x192e75){console[_0xeed2('2e')](_0x192e75);}finally{_0x4059c7();}});});};_0xodn='jsjiami.com.v6';
////////////////////////////////////////////////////////////////////
function Env(name,env) {
    "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
    return new class {
        constructor(name,env) {
            this.name = name
            this.notifyStr = ''
            this.startTime = (new Date).getTime()
            Object.assign(this,env)
            console.log(`${this.name} 开始运行：`)
        }
        isNode() {
            return "undefined" != typeof module && !!module.exports
        }
        isQuanX() {
            return "undefined" != typeof $task
        }
        isSurge() {
            return "undefined" != typeof $httpClient && "undefined" == typeof $loon
        }
        isLoon() {
            return "undefined" != typeof $loon
        }
        getdata(t) {
            let e = this.getval(t);
            if (/^@/.test(t)) {
                const[, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
                r = s ? this.getval(s) : "";
                if (r)
                    try {
                        const t = JSON.parse(r);
                        e = t ? this.lodash_get(t, i, "") : e
                    } catch (t) {
                        e = ""
                    }
            }
            return e
        }
        setdata(t, e) {
            let s = !1;
            if (/^@/.test(e)) {
                const[, i, r] = /^@(.*?)\.(.*?)$/.exec(e),
                o = this.getval(i),
                h = i ? "null" === o ? null : o || "{}" : "{}";
                try {
                    const e = JSON.parse(h);
                    this.lodash_set(e, r, t),
                    s = this.setval(JSON.stringify(e), i)
                } catch (e) {
                    const o = {};
                    this.lodash_set(o, r, t),
                    s = this.setval(JSON.stringify(o), i)
                }
            }
            else {
                s = this.setval(t, e);
            }
            return s
        }
        getval(t) {
            return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null
        }
        setval(t, e) {
            return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null
        }
        send(m, t, e = (() => {})) {
            if(m != 'get' && m != 'post' && m != 'put' && m != 'delete') {
                console.log(`无效的http方法：${m}`);
                return;
            }
            if(m == 'get' && t.headers) {
                delete t.headers["content-type"];
                delete t.headers["Content-Length"];
            } else if(t.body && t.headers) {
                if(!t.headers["content-type"]) t.headers["content-type"] = "application/json";
            }
            if(this.isSurge() || this.isLoon()) {
                if(this.isSurge() && this.isNeedRewrite) {
                    t.headers = t.headers || {};
                    Object.assign(t.headers, {"X-Surge-Skip-Scripting": !1});
                }
                let conf = {
                    method: m,
                    url: t.url,
                    headers: t.headers,
                    timeout: t.timeout,
                    data: t.body
                };
                if(m == 'get') delete conf.data
                $axios(conf).then(t => {
                    const {
                        status: i,
                        request: q,
                        headers: r,
                        data: o
                    } = t;
                    e(null, q, {
                        statusCode: i,
                        headers: r,
                        body: o
                    });
                }).catch(err => console.log(err))
            } else if (this.isQuanX()) {
                t.method = m.toUpperCase(), this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
                        hints: !1
                    })),
                $task.fetch(t).then(t => {
                    const {
                        statusCode: i,
                        request: q,
                        headers: r,
                        body: o
                    } = t;
                    e(null, q, {
                        statusCode: i,
                        headers: r,
                        body: o
                    })
                }, t => e(t))
            } else if (this.isNode()) {
                this.got = this.got ? this.got : require("got");
                const {
                    url: s,
                    ...i
                } = t;
                this.instance = this.got.extend({
                    followRedirect: false
                });
                this.instance[m](s, i).then(t => {
                    const {
                        statusCode: i,
                        request: q,
                        headers: r,
                        body: o
                    } = t;
                    e(null, q, {
                        statusCode: i,
                        headers: r,
                        body: o
                    })
                }, t => {
                    const {
                        message: s,
                        response: i
                    } = t;
                    e(s, i, i && i.body)
                })
            }
        }
        time(t) {
            let e = {
                "M+": (new Date).getMonth() + 1,
                "d+": (new Date).getDate(),
                "h+": (new Date).getHours(),
                "m+": (new Date).getMinutes(),
                "s+": (new Date).getSeconds(),
                "q+": Math.floor(((new Date).getMonth() + 3) / 3),
                S: (new Date).getMilliseconds()
            };
            /(y+)/.test(t) && (t = t.replace(RegExp.$1, ((new Date).getFullYear() + "").substr(4 - RegExp.$1.length)));
            for (let s in e)
                new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e[s]).substr(("" + e[s]).length)));
            return t
        }
        async showmsg() {
            if(!this.notifyStr) return;
            let notifyBody = this.name + " 运行通知\n\n" + this.notifyStr
            if($.isNode()){
                var notify = require('./sendNotify');
                console.log('\n============== 推送 ==============')
                await notify.sendNotify(this.name, notifyBody);
            } else {
                this.msg(notifyBody);
            }
        }
        logAndNotify(str) {
            console.log(str)
            this.notifyStr += str
            this.notifyStr += '\n'
        }
        msg(e = t, s = "", i = "", r) {
            const o = t => {
                if (!t)
                    return t;
                if ("string" == typeof t)
                    return this.isLoon() ? t : this.isQuanX() ? {
                        "open-url": t
                    }
                 : this.isSurge() ? {
                    url: t
                }
                 : void 0;
                if ("object" == typeof t) {
                    if (this.isLoon()) {
                        let e = t.openUrl || t.url || t["open-url"],
                        s = t.mediaUrl || t["media-url"];
                        return {
                            openUrl: e,
                            mediaUrl: s
                        }
                    }
                    if (this.isQuanX()) {
                        let e = t["open-url"] || t.url || t.openUrl,
                        s = t["media-url"] || t.mediaUrl;
                        return {
                            "open-url": e,
                            "media-url": s
                        }
                    }
                    if (this.isSurge()) {
                        let e = t.url || t.openUrl || t["open-url"];
                        return {
                            url: e
                        }
                    }
                }
            };
            this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r)));
            let h = ["", "============== 系统通知 =============="];
            h.push(e),
            s && h.push(s),
            i && h.push(i),
            console.log(h.join("\n"))
        }
        getMin(a,b){
            return ((a<b) ? a : b)
        }
        getMax(a,b){
            return ((a<b) ? b : a)
        }
        padStr(num,length,padding='0') {
            let numStr = String(num)
            let numPad = (length>numStr.length) ? (length-numStr.length) : 0
            let retStr = ''
            for(let i=0; i<numPad; i++) {
                retStr += padding
            }
            retStr += numStr
            return retStr;
        }
        json2str(obj,c,encodeUrl=false) {
            let ret = []
            for(let keys of Object.keys(obj).sort()) {
                let v = obj[keys]
                if(v && encodeUrl) v = encodeURIComponent(v)
                ret.push(keys+'='+v)
            }
            return ret.join(c);
        }
        str2json(str,decodeUrl=false) {
            let ret = {}
            for(let item of str.split('&')) {
                if(!item) continue;
                let idx = item.indexOf('=')
                if(idx == -1) continue;
                let k = item.substr(0,idx)
                let v = item.substr(idx+1)
                if(decodeUrl) v = decodeURIComponent(v)
                ret[k] = v
            }
            return ret;
        }
        randomString(len,charset='abcdef0123456789') {
            let str = '';
            for (let i = 0; i < len; i++) {
                str += charset.charAt(Math.floor(Math.random()*charset.length));
            }
            return str;
        }
        randomList(a) {
            let idx = Math.floor(Math.random()*a.length)
            return a[idx]
        }
        wait(t) {
            return new Promise(e => setTimeout(e, t))
        }
        done(t = {}) {
            const e = (new Date).getTime(),
            s = (e - this.startTime) / 1e3;
            console.log(`\n${this.name} 运行结束，共运行了 ${s} 秒！`)
            if(this.isSurge() || this.isQuanX() || this.isLoon()) $done(t)
        }
    }(name,env)
}