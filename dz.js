/*
目标:  快应用-->点众免费小说 heders里的utdid

格式：export dzmfxs="utdid=xxxxxxxx"  多账号换行隔开

cron: 不要贪心每天一到两次就行了

频道：https://t.me/+O6-uZI3t6uhhMmU1
*/

const $ = new Env("点众免费小说");
let envSplitor = ['\n']  //多账号隔开方式，默认换行可自定义
///////////////////////////////维护参数自行更换//////////////////////////////////
let osvn = '12'                     //安卓版本
let model = 'V2203A'              //机型
let brand = 'xiaomi'                   //品牌
let defaultUA = 'Mozilla/5.0 (Linux; Android 12; V2203A Build/SP1A.210812.003; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/91.0.4472.114 Mobile Safari/537.36 hap/1.10/vivo com.vivo.hybrid/1.10.2.260 com.dianzhong.dzmfxs/5.5.3.240 ({"packageName":"com.quickapp.center","type":"center_used","extra":{"quick_app_st_channel":"VIVO_UNKNOWN_CHANNEL","third_st_param":"{\"source_version\":4610}","define_pkg":"com.quickapp.center"}})'                         //User-Agent

var _0xode='jsjiami.com.v6',_0xode_=['_0xode'],_0x1b07=[_0xode,'\x69\x73\x4e\x6f\x64\x65','\x65\x6e\x76','\x64\x7a\x6d\x66\x78\x73','\x67\x65\x74\x64\x61\x74\x61','\x69\x6e\x64\x65\x78','\x6e\x61\x6d\x65','\x76\x61\x6c\x69\x64','\x63\x61\x6e\x52\x65\x61\x64','\x70\x61\x72\x61\x6d','\x73\x74\x72\x32\x6a\x73\x6f\x6e','\x63\x6b\x56\x61\x6c\x69\x64','\x6c\x6f\x67\x41\x6e\x64\x4e\x6f\x74\x69\x66\x79','\u8d26\u53f7\x5b','\x5d\x43\x4b\u683c\u5f0f\u9519\u8bef','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x64\x7a\x6d\x66\x78\x73\x2e\x6b\x6b\x79\x64\x2e\x63\x6e\x2f\x67\x6c\x6f\x72\x79\x2f\x66\x61\x73\x74\x61\x70\x70\x2f\x32\x38\x35\x34','\x75\x74\x64\x69\x64','\x70\x6f\x73\x74','\x72\x65\x74\x43\x6f\x64\x65','\x5d\u73b0\u6709\u91d1\u5e01\x3a','\x64\x61\x74\x61','\x67\x6f\x6c\x64\x43\x6f\x69\x6e\x4e\x75\x6d','\x20\u63d0\u73b0\u6bd4\u4f8b\x31\x77\u91d1\u5e01\x3d\x31\u8f6f\u59b9\u5e01','\x5d\u67e5\u8be2\u8d26\u6237\u5931\u8d25\uff0c\u53d8\u91cf\u5931\u6548\u6216\u68c0\u67e5\u53d8\u91cf\u683c\u5f0f','\x72\x65\x73\x6f\x6c\x76\x65','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x64\x7a\x6d\x66\x78\x73\x2e\x6b\x6b\x79\x64\x2e\x63\x6e\x2f\x67\x6c\x6f\x72\x79\x2f\x66\x61\x73\x74\x61\x70\x70\x2f\x32\x31\x34\x36\x3f\x76\x65\x72\x3d\x35\x35\x30\x33\x32\x33\x30\x26\x61\x70\x70\x56\x65\x72\x3d\x35\x2e\x35\x2e\x33\x2e\x32\x33\x30','\x7b\x22\x74\x61\x73\x6b\x49\x64\x22\x3a\x31\x31\x34\x38\x2c\x22\x61\x63\x74\x69\x6f\x6e\x22\x3a\x33\x36\x2c\x22\x72\x65\x61\x64\x44\x75\x72\x61\x74\x69\x6f\x6e\x22\x3a','\x2c\x22\x62\x6f\x6f\x6b\x49\x64\x22\x3a\x22\x31\x31\x30\x31\x30\x30\x39\x36\x31\x36\x38\x22\x2c\x22\x63\x68\x61\x70\x74\x65\x72\x49\x64\x22\x3a\x22\x34\x39\x35\x35\x39\x31\x33\x33\x33\x22\x7d','\x5d\u4e0a\u4f20\u9605\u8bfb\u65f6\u95f4\u6210\u529f\x20\u5f53\u524d\u9605\u8bfb\x20','\x74\x6f\x74\x61\x6c\x52\x65\x61\x64\x44\x75\x72\x61\x74\x69\x6f\x6e','\x74\x61\x73\x6b\x6c\x64','\x72\x65\x61\x64','\x77\x61\x69\x74','\x5d\u9519\u8bef\x20\u539f\u56e0\u672a\u77e5\x2c\u8bf7\u901a\u77e5\u811a\u672c\u4f5c\u8005\u4fee\u590d','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x64\x7a\x6d\x66\x78\x73\x2e\x6b\x6b\x79\x64\x2e\x63\x6e\x2f\x67\x6c\x6f\x72\x79\x2f\x66\x61\x73\x74\x61\x70\x70\x2f\x32\x31\x34\x31\x3f\x76\x65\x72\x3d\x35\x35\x30\x33\x32\x33\x30\x26\x61\x70\x70\x56\x65\x72\x3d\x35\x2e\x35\x2e\x33\x2e\x32\x33\x30','\x7b\x22\x74\x61\x73\x6b\x49\x64\x22\x3a','\x63\x6f\x64\x65','\x6d\x65\x73\x73\x61\x67\x65','\x75\x6e\x64\x65\x66\x69\x6e\x65\x64','\x66\x69\x6c\x74\x65\x72','\x6c\x65\x6e\x67\x74\x68','\x0a\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x20\u8d26\u53f7\u68c0\u6d4b\x20\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d','\x70\x75\x73\x68','\x61\x6c\x6c','\x0a\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x20\u6bcf\u65e5\u4efb\u52a1\x20\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d','\x73\x68\x6f\x77\x6d\x73\x67','\x63\x61\x74\x63\x68','\x6c\x6f\x67','\x66\x69\x6e\x61\x6c\x6c\x79','\x64\x6f\x6e\x65','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x76\x31\x2e\x6a\x69\x6e\x72\x69\x73\x68\x69\x63\x69\x2e\x63\x6f\x6d\x2f\x61\x6c\x6c\x2e\x6a\x73\x6f\x6e','\x67\x65\x74','\x63\x6f\x6e\x74\x65\x6e\x74','\x20\x20\x0a\u2014\u2014\u2014\u2014\u300a','\x6f\x72\x69\x67\x69\x6e','\x61\x75\x74\x68\x6f\x72','\x69\x6e\x64\x65\x78\x4f\x66','\x73\x70\x6c\x69\x74','\x0a\u274c\u672a\u627e\u5230\x43\x4b\x20\u8bf7\u9605\u8bfb\u811a\u672c\u8bf4\u660e','\u5171\u627e\u5230','\u4e2a\u8d26\u53f7','\x72\x65\x70\x6c\x61\x63\x65','\x6f\x74\x68\x65\x72','\x31\x30\x38\x30','\x63\x6f\x6d\x2e\x64\x69\x61\x6e\x7a\x68\x6f\x6e\x67\x2e\x64\x7a\x6d\x66\x78\x73','\x64\x7a\x5f\x64\x7a\x6d\x66\x78\x73','\x31\x31\x30\x32','\x32\x34\x30\x30','\x63\x6f\x6d\x2e\x71\x75\x69\x63\x6b\x61\x70\x70\x2e\x63\x65\x6e\x74\x65\x72','\x31\x2e\x31\x30','\x62\x6f\x64\x79','\x68\x65\x61\x64\x65\x72\x73','\x63\x6f\x6e\x74\x65\x6e\x74\x2d\x74\x79\x70\x65','\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6a\x73\x6f\x6e\x3b\x63\x68\x61\x72\x73\x65\x74\x3d\x55\x54\x46\x2d\x38','\x43\x6f\x6e\x74\x65\x6e\x74\x2d\x4c\x65\x6e\x67\x74\x68','\x73\x65\x6e\x64','\u8bf7\u6c42\u5931\u8d25','\x73\x74\x72\x69\x6e\x67\x69\x66\x79','\x6f\x62\x6a\x65\x63\x74','\x70\x61\x72\x73\x65','\x67\x65\x74\x48\x6f\x75\x72\x73','\x6a\x73\x6a\x69\x61\x59\x75\x77\x6d\x59\x69\x2e\x63\x46\x4b\x6f\x79\x42\x4c\x6d\x2e\x71\x76\x59\x36\x4b\x4f\x62\x3d\x3d'];function _0x4d62(_0x32d002,_0x4ce6b6){_0x32d002=~~'0x'['concat'](_0x32d002['slice'](0x0));var _0x3f2b14=_0x1b07[_0x32d002];return _0x3f2b14;};(function(_0x3fd2ff,_0x31c747){var _0x120b8a=0x0;for(_0x31c747=_0x3fd2ff['shift'](_0x120b8a>>0x2);_0x31c747&&_0x31c747!==(_0x3fd2ff['pop'](_0x120b8a>>0x3)+'')['replace'](/[YuwYFKyBLqYKOb=]/g,'');_0x120b8a++){_0x120b8a=_0x120b8a^0x12221f;}}(_0x1b07,_0x4d62));let taskid=[0x3e9,0x412,0x413,0x414,0x426,0x42c,0x42d,0x42e,0x42f,0x430,0x433,0x43d,0x43f,0x444,0x446,0x450,0x451,0x475,0x476,0x47c,0x47d,0x47e,0x47f,0x480,0x481,0x482,0x484,0x485,0x486,0x487,0x488,0x489,0x48a,0x48f,0x491,0x492,0x493,0x495,0x496,0x498,0x499,0x49b,0x49c,0x4a3,0x4a9,0x4aa,0x4ab,0x4ac,0x4ad,0x4ae,0x4af,0x4b0,0x4b1,0x4b2,0x4b3,0x4b4,0x4b5,0x4b6,0x4b7,0x4b8,0x4b9,0x4ba,0x4c2,0x4c3,0x4c4,0x4c5,0x4c6,0x4c7,0x4c8,0x4c9,0x4ca,0x4cb,0x4cc,0x4cd,0x4d4,0x4d8,0x4dc,0x4dd,0x4df,0x4e0,0x4e1,0x4e2,0x4e3,0x4e4,0x4e9,0x4ea,0x4ec,0x4f2,0x4f5,0x4f8,0x4fe,0x2f];let httpResult,httpReq,httpResp;let userCookie=($[_0x4d62('0')]()?process[_0x4d62('1')][_0x4d62('2')]:$[_0x4d62('3')](_0x4d62('2')))||'';let userList=[];let userIdx=0x0;let userCount=0x0;class UserInfo{constructor(_0x4b79a6){this[_0x4d62('4')]=++userIdx;this[_0x4d62('5')]=this[_0x4d62('4')];this[_0x4d62('6')]=![];this[_0x4d62('7')]=![];try{this[_0x4d62('8')]=$[_0x4d62('9')](_0x4b79a6);this[_0x4d62('a')]=!![];}catch(_0x34369a){this[_0x4d62('a')]=![];$[_0x4d62('b')](_0x4d62('c')+this[_0x4d62('4')]+_0x4d62('d'));}}async['\x6d\x79'](){try{let _0x76d8df=_0x4d62('e');let _0x2c3955='\x7b\x7d';let _0x52f6a5=''+this[_0x4d62('8')][_0x4d62('f')];let _0x4f789a=populateUrlObject(_0x76d8df,_0x52f6a5,_0x2c3955);await httpRequest(_0x4d62('10'),_0x4f789a);let _0x373c3e=httpResult;if(!_0x373c3e)return;if(_0x373c3e[_0x4d62('11')]==0x0){this[_0x4d62('6')]=!![];this[_0x4d62('7')]=!![];$[_0x4d62('b')](_0x4d62('c')+this[_0x4d62('5')]+_0x4d62('12')+_0x373c3e[_0x4d62('13')][_0x4d62('14')]+_0x4d62('15'));}else{$[_0x4d62('b')](_0x4d62('c')+this[_0x4d62('5')]+_0x4d62('16'));}}catch(_0x515619){}finally{return Promise[_0x4d62('17')](0x1);}}async['\x75\x70'](){try{let _0x26a33b=local_hours();this['\x74\x73']=_0x26a33b*0xa;let _0x9f994f=_0x4d62('18');let _0x1911fb=_0x4d62('19')+this['\x74\x73']+_0x4d62('1a');let _0x2c0b4f=''+this[_0x4d62('8')][_0x4d62('f')];let _0x1bff69=populateUrlObject(_0x9f994f,_0x2c0b4f,_0x1911fb);await httpRequest(_0x4d62('10'),_0x1bff69);let _0xdd0902=httpResult;if(!_0xdd0902)return;if(_0xdd0902[_0x4d62('11')]==0x0){$[_0x4d62('b')](_0x4d62('c')+this[_0x4d62('5')]+_0x4d62('1b')+_0xdd0902[_0x4d62('13')][_0x4d62('1c')]+'\u5206\u949f');for(let _0x213711 of taskid){this[_0x4d62('1d')]=_0x213711;await this[_0x4d62('1e')]();await $[_0x4d62('1f')](0x7d0);}}else{$[_0x4d62('b')](_0x4d62('c')+this[_0x4d62('5')]+_0x4d62('20'));}}catch(_0x17ac2c){}finally{return Promise[_0x4d62('17')](0x1);}}async[_0x4d62('1e')](){try{let _0x1841d8=_0x4d62('21');let _0x31e311=_0x4d62('22')+this[_0x4d62('1d')]+'\x7d';let _0x5d5bf0=''+this[_0x4d62('8')][_0x4d62('f')];let _0x3edf8a=populateUrlObject(_0x1841d8,_0x5d5bf0,_0x31e311);await httpRequest(_0x4d62('10'),_0x3edf8a);let _0x4efce5=httpResult;if(!_0x4efce5)return;if(_0x4efce5[_0x4d62('13')][_0x4d62('23')]==0x0&&_0x4efce5[_0x4d62('13')][_0x4d62('24')]){$[_0x4d62('b')](_0x4d62('c')+this[_0x4d62('5')]+'\x5d'+_0x4efce5[_0x4d62('13')][_0x4d62('24')]);}}catch(_0x3ec1fb){}finally{return Promise[_0x4d62('17')](0x1);}}}!(async()=>{if(typeof $request!==_0x4d62('25')){}else{if(!(await checkEnv()))return;await sc();let _0x43f296=[];let _0x613b35=userList[_0x4d62('26')](_0x46ba4b=>_0x46ba4b[_0x4d62('a')]);if(_0x613b35[_0x4d62('27')]>0x0){$[_0x4d62('b')](_0x4d62('28'));_0x43f296=[];for(let _0x24e6bf of _0x613b35){_0x43f296[_0x4d62('29')](_0x24e6bf['\x6d\x79']());}await Promise[_0x4d62('2a')](_0x43f296);_0x613b35=_0x613b35[_0x4d62('26')](_0x3a4e82=>_0x3a4e82[_0x4d62('6')]);if(_0x613b35[_0x4d62('27')]>0x0){$[_0x4d62('b')](_0x4d62('2b'));_0x43f296=[];for(let _0x417750 of _0x613b35[_0x4d62('26')](_0x42c67b=>_0x42c67b[_0x4d62('7')])){_0x43f296[_0x4d62('29')](_0x417750['\x75\x70']());}await Promise[_0x4d62('2a')](_0x43f296);}}await $[_0x4d62('2c')]();}})()[_0x4d62('2d')](_0x413e44=>console[_0x4d62('2e')](_0x413e44))[_0x4d62('2f')](()=>$[_0x4d62('30')]());async function sc(){try{let _0x2e0dac=_0x4d62('31');let _0x22f600='';let _0x3d0c6b=populateUrlObject(_0x2e0dac,_0x22f600);await httpRequest(_0x4d62('32'),_0x3d0c6b);let _0x277c84=httpResult;if(!_0x277c84)return;$[_0x4d62('b')]('\x0a'+_0x277c84[_0x4d62('33')]+_0x4d62('34')+_0x277c84[_0x4d62('35')]+'\u300b'+_0x277c84[_0x4d62('36')]);var _0x2eac2d=_0x277c84[_0x4d62('33')];}catch(_0x392d07){}finally{return Promise[_0x4d62('17')](0x1);}}async function checkEnv(){if(userCookie){let _0x160665=envSplitor[0x0];for(let _0x291c28 of envSplitor){if(userCookie[_0x4d62('37')](_0x291c28)>-0x1){_0x160665=_0x291c28;break;}}for(let _0x38c56d of userCookie[_0x4d62('38')](_0x160665)){if(_0x38c56d)userList[_0x4d62('29')](new UserInfo(_0x38c56d));}userCount=userList[_0x4d62('27')];}else{console[_0x4d62('2e')](_0x4d62('39'));return;}console[_0x4d62('2e')](_0x4d62('3a')+userCount+_0x4d62('3b'));return!![];}function populateUrlObject(_0x4e41af,_0x36f2d9,_0x4d5f90=''){let _0x38a45a=_0x4e41af[_0x4d62('3c')]('\x2f\x2f','\x2f')[_0x4d62('38')]('\x2f')[0x1];let _0x2663fb={'\x75\x72\x6c':_0x4e41af,'\x68\x65\x61\x64\x65\x72\x73':{'Host':_0x38a45a,'appStartScene':_0x4d62('3d'),'osvc':'\x33\x31','scw':_0x4d62('3e'),'utdid':_0x36f2d9,'pname':_0x4d62('3f'),'sourceChannel':_0x4d62('40'),'osvn':osvn,'uuid':'','readPref':'\x31','t':'','pfvc':_0x4d62('41'),'domain':'\x33','sch':_0x4d62('42'),'sourcePackageName':_0x4d62('43'),'model':model,'pfvn':_0x4d62('44'),'brand':brand,'channelCode':_0x4d62('40'),'User-Agent':defaultUA},'\x74\x69\x6d\x65\x6f\x75\x74':0x1388};if(_0x4d5f90){_0x2663fb[_0x4d62('45')]=_0x4d5f90;_0x2663fb[_0x4d62('46')][_0x4d62('47')]=_0x4d62('48');_0x2663fb[_0x4d62('46')][_0x4d62('49')]=_0x2663fb[_0x4d62('45')]?_0x2663fb[_0x4d62('45')][_0x4d62('27')]:0x0;}return _0x2663fb;}async function httpRequest(_0x1c279b,_0x28a1b1){httpResult=null,httpReq=null,httpResp=null;return new Promise(_0x2de229=>{$[_0x4d62('4a')](_0x1c279b,_0x28a1b1,async(_0x37026f,_0x19e208,_0x12f962)=>{try{httpReq=_0x19e208;httpResp=_0x12f962;if(_0x37026f){console[_0x4d62('2e')](_0x1c279b+_0x4d62('4b'));console[_0x4d62('2e')](JSON[_0x4d62('4c')](_0x37026f));}else{if(_0x12f962[_0x4d62('45')]){if(typeof _0x12f962[_0x4d62('45')]==_0x4d62('4d')){httpResult=_0x12f962[_0x4d62('45')];}else{try{httpResult=JSON[_0x4d62('4e')](_0x12f962[_0x4d62('45')]);}catch(_0x43b6c3){httpResult=_0x12f962[_0x4d62('45')];}}}}}catch(_0x25bc71){console[_0x4d62('2e')](_0x25bc71);}finally{_0x2de229();}});});}function local_hours(){let _0xb2fd17=new Date();h=_0xb2fd17[_0x4d62('4f')]();return h;};_0xode='jsjiami.com.v6';
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