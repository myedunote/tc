/*
目标:  第一电动App 抓包token=xxx和uid=xxxx 用&连接不分顺序

格式：export dydd="token=xxxx&uid=xxxx"  多账号换行隔开
*/

const $ = new Env("第一电动");
const md5 = require('md5-node');
let envSplitor = ['\n']  //多账号隔开方式，默认换行可自定义

///////////////////////////////维护参数//////////////////////////////////
let nm = Math.floor(Math.random() * 10 + 1);    //随机数1～10
let defaultUA = 'Dalvik/2.1.0 (Linux; U; Android 12; V1824A Build/QP1A.190711.020)'         //默认UA
let vCode = '20415'         //软件版本
let vName = '2.4.15'        //软件版本
let app = 'android12'        //安卓版本
let osVer = '12'              //安卓版本(需跟上面对应)
let city_id = '000000'        //城市坐标
let text= ['支持新能源电动汽车','这个不错太好了！开上去不知道怎么样！','好看哦','着实没想到有这么多会长，祝第一电动越来越好']    //随机评论，按格式自己添加

var __encode ='jsjiami.com',_a={}, _0xb483=["\x5F\x64\x65\x63\x6F\x64\x65","\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x73\x6F\x6A\x73\x6F\x6E\x2E\x63\x6F\x6D\x2F\x6A\x61\x76\x61\x73\x63\x72\x69\x70\x74\x6F\x62\x66\x75\x73\x63\x61\x74\x6F\x72\x2E\x68\x74\x6D\x6C"];(function(_0xd642x1){_0xd642x1[_0xb483[0]]= _0xb483[1]})(_a);var __Oxf432d=["\x69\x73\x4E\x6F\x64\x65","\x64\x79\x64\x64","\x65\x6E\x76","\x67\x65\x74\x64\x61\x74\x61","","\x69\x6E\x64\x65\x78","\x6E\x61\x6D\x65","\x76\x61\x6C\x69\x64","\x63\x61\x6E\x52\x65\x61\x64","\x70\x61\x72\x61\x6D","\x73\x74\x72\x32\x6A\x73\x6F\x6E","\x63\x6B\x56\x61\x6C\x69\x64","\u8D26\u53F7\x5B","\x5D\x43\x4B\u683C\u5F0F\u9519\u8BEF","\x6C\x6F\x67\x41\x6E\x64\x4E\x6F\x74\x69\x66\x79","\x67\x65\x74\x54\x69\x6D\x65","\x72\x6F\x75\x6E\x64","\x4F\x4D\x4B\x43\x79\x32\x55\x78\x5A\x77\x6E\x38\x65\x34\x41\x6B\u7B2C\u4E00\u7535\u52A8\x64\x31\x65\x76\x5F\x61\x70\x70","\x74\x6F\x6B\x65\x6E","\x75\x69\x64","\x74\x6F\x55\x70\x70\x65\x72\x43\x61\x73\x65","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x70\x70\x32\x2E\x64\x31\x65\x76\x2E\x63\x6F\x6D\x2F\x61\x70\x69\x2F\x75\x73\x65\x72\x2F\x67\x65\x74\x2D\x6D\x79\x2D\x69\x6E\x74\x65\x67\x72\x61\x6C\x3F\x74\x69\x6D\x65\x73\x74\x61\x6D\x70\x3D","\x26\x61\x70\x70\x5F\x69\x64\x3D\x64\x31\x65\x76\x5F\x61\x70\x70\x26\x75\x69\x64\x3D","\x26\x74\x6F\x6B\x65\x6E\x3D","\x26\x61\x70\x70\x4E\x61\x6D\x65\x3D\x25\x45\x37\x25\x41\x43\x25\x41\x43\x25\x45\x34\x25\x42\x38\x25\x38\x30\x25\x45\x37\x25\x39\x34\x25\x42\x35\x25\x45\x35\x25\x38\x41\x25\x41\x38\x26\x6F\x73\x3D\x61\x6E\x64\x72\x6F\x69\x64\x26\x6F\x73\x56\x65\x72\x3D\x31\x32\x26\x76\x4E\x61\x6D\x65\x3D","\x26\x76\x43\x6F\x64\x65\x3D","\x26\x73\x69\x67\x6E\x3D","\x67\x65\x74","\x63\x6F\x64\x65","\x5D\u73B0\u6709\u79EF\u5206\x3A","\x64\x61\x74\x61","\x5D\u67E5\u8BE2\u8D26\u6237\u5931\u8D25\uFF0C\u53D8\u91CF\u5931\u6548\u6216\u68C0\u67E5\u53D8\u91CF\u683C\u5F0F","\x72\x65\x73\x6F\x6C\x76\x65","\x31\x31","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x70\x70\x32\x2E\x64\x31\x65\x76\x2E\x63\x6F\x6D\x2F\x61\x70\x69\x2F\x75\x73\x65\x72\x2F\x61\x64\x64\x2D\x69\x6E\x74\x65\x67\x72\x61\x6C\x3F\x74\x69\x6D\x65\x73\x74\x61\x6D\x70\x3D","\x26\x61\x70\x70\x5F\x69\x64\x3D\x64\x31\x65\x76\x5F\x61\x70\x70\x26\x74\x79\x70\x65\x3D\x31\x31\x26\x75\x69\x64\x3D","\x26\x61\x70\x70\x4E\x61\x6D\x65\x3D\x25\x45\x37\x25\x41\x43\x25\x41\x43\x25\x45\x34\x25\x42\x38\x25\x38\x30\x25\x45\x37\x25\x39\x34\x25\x42\x35\x25\x45\x35\x25\x38\x41\x25\x41\x38\x26\x6F\x73\x3D\x61\x6E\x64\x72\x6F\x69\x64\x26\x6F\x73\x56\x65\x72\x3D","\x26\x76\x4E\x61\x6D\x65\x3D","\x5D\u7B7E\u5230\u83B7\u5F97\x3A","\u79EF\u5206","\x5D\u7B7E\u5230\u72B6\u6001\x3A","\x6D\x73\x67","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x70\x70\x32\x2E\x64\x31\x65\x76\x2E\x63\x6F\x6D\x2F\x61\x70\x69\x2F\x75\x73\x65\x72\x2F\x67\x65\x74\x2D\x6D\x79\x2D\x64\x61\x79\x2D\x69\x6E\x74\x65\x67\x72\x61\x6C\x3F\x74\x69\x6D\x65\x73\x74\x61\x6D\x70\x3D","\x73\x74\x61\x74\x65","\x63\x6E\x74","\x74\x61\x73\x6B\x43\x6E\x74","\u5DF2\u5B8C\u6210","\u672A\u5B8C\u6210","\x5D","\x20\x2D\x2D\x20","\x2F","\uFF0C","\x6D\x6D","\x67\x6C\x69\x73\x74","\x69\x64","\x72\x65\x61\x64","\x73\x68\x61\x72\x65","\x70\x6C","\x64\x7A","\x76\x69\x64\x65\x6F","\x63\x61\x74","\x77\x61\x69\x74","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x70\x70\x32\x2E\x64\x31\x65\x76\x2E\x63\x6F\x6D\x2F\x61\x70\x69\x2F\x68\x6F\x6D\x65\x2F\x64\x61\x74\x61\x2D\x73\x74\x72\x65\x61\x6D\x3F\x74\x69\x6D\x65\x73\x74\x61\x6D\x70\x3D","\x26\x61\x70\x70\x5F\x69\x64\x3D\x64\x31\x65\x76\x5F\x61\x70\x70\x26\x70\x61\x67\x65\x3D","\x26\x75\x69\x64\x3D","\x6E\x75\x6D","\x31\x30","\x32","\x26\x61\x70\x70\x5F\x69\x64\x3D\x64\x31\x65\x76\x5F\x61\x70\x70\x26\x74\x79\x70\x65\x3D\x32\x26\x74\x61\x72\x67\x65\x74\x49\x64\x3D","\x26\x74\x61\x72\x67\x65\x74\x54\x79\x70\x65\x3D\x31\x30\x26\x75\x69\x64\x3D","\x26\x63\x69\x74\x79\x5F\x69\x64\x3D","\x5D\u9605\u8BFB\u83B7\u5F97\x3A","\x33","\x26\x61\x70\x70\x5F\x69\x64\x3D\x64\x31\x65\x76\x5F\x61\x70\x70\x26\x74\x79\x70\x65\x3D\x33\x26\x74\x61\x72\x67\x65\x74\x49\x64\x3D","\x5D\u5206\u4EAB\u83B7\u5F97\x3A","\x31","\x26\x61\x70\x70\x5F\x69\x64\x3D\x64\x31\x65\x76\x5F\x61\x70\x70\x26\x70\x61\x67\x65\x3D\x31\x26\x75\x69\x64\x3D","\x61\x75\x74\x68\x6F\x72\x49\x64","\x70\x75\x62\x6C\x69\x73\x68\x65\x72\x49\x64","\x74\x61\x72\x67\x65\x74\x49\x64","\x61\x64\x64","\x5D\u8BC4\u8BBA\u6587\u7AE0\x3A\u6293\u53D6\x69\x64\u5931\u8D25","\x74\x65\x78\x74","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x70\x70\x32\x2E\x64\x31\x65\x76\x2E\x63\x6F\x6D\x2F\x61\x70\x69\x2F\x75\x73\x65\x72\x2F\x63\x6F\x6D\x6D\x65\x6E\x74\x2D\x61\x64\x64","\x7B\x22\x74\x69\x6D\x65\x73\x74\x61\x6D\x70\x22\x3A\x22","\x22\x2C\x22\x61\x70\x70\x5F\x69\x64\x22\x3A\x22\x64\x31\x65\x76\x5F\x61\x70\x70\x22\x2C\x22\x6C\x65\x76\x65\x6C\x22\x3A\x31\x2C\x22\x73\x6F\x75\x72\x63\x65\x22\x3A\x31\x2C\x22\x63\x6F\x6E\x74\x65\x6E\x74\x22\x3A\x22","\x22\x2C\x22\x74\x61\x72\x67\x65\x74\x49\x64\x22\x3A","\x2C\x22\x74\x61\x72\x67\x65\x74\x54\x79\x70\x65\x22\x3A\x31\x30\x2C\x22\x74\x6F\x55\x73\x65\x72\x49\x64\x22\x3A","\x2C\x22\x75\x69\x64\x22\x3A\x22","\x22\x2C\x22\x74\x6F\x6B\x65\x6E\x22\x3A\x22","\x22\x2C\x22\x61\x70\x70\x4E\x61\x6D\x65\x22\x3A\x22\u7B2C\u4E00\u7535\u52A8\x22\x2C\x22\x6F\x73\x22\x3A\x22\x61\x6E\x64\x72\x6F\x69\x64\x22\x2C\x22\x6F\x73\x56\x65\x72\x22\x3A\x22","\x22\x2C\x22\x76\x4E\x61\x6D\x65\x22\x3A\x22","\x22\x2C\x22\x76\x43\x6F\x64\x65\x22\x3A\x22","\x22\x2C\x22\x63\x69\x74\x79\x5F\x69\x64\x22\x3A\x22","\x22\x2C\x22\x73\x69\x67\x6E\x22\x3A\x22","\x22\x7D","\x70\x6F\x73\x74","\x5D\u8BC4\u8BBA\u6587\u7AE0\x3A","\x35","\x26\x61\x70\x70\x5F\x69\x64\x3D\x64\x31\x65\x76\x5F\x61\x70\x70\x26\x74\x79\x70\x65\x3D\x35\x26\x74\x61\x72\x67\x65\x74\x49\x64\x3D","\x5D\u70B9\u8D5E\u83B7\u5F97\x3A","\x31\x39","\x26\x61\x70\x70\x5F\x69\x64\x3D\x64\x31\x65\x76\x5F\x61\x70\x70\x26\x74\x79\x70\x65\x3D\x31\x39\x26\x74\x61\x72\x67\x65\x74\x49\x64\x3D","\x26\x74\x61\x72\x67\x65\x74\x54\x79\x70\x65\x3D\x32\x26\x75\x69\x64\x3D","\x5D\u770B\u89C6\u9891\u83B7\u5F97\x3A","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x70\x70\x32\x2E\x64\x31\x65\x76\x2E\x63\x6F\x6D\x2F\x61\x70\x69\x2F\x74\x6F\x70\x69\x63\x2F\x6D\x79\x2D\x74\x6F\x70\x69\x63\x73\x3F\x74\x69\x6D\x65\x73\x74\x61\x6D\x70\x3D","\x26\x61\x70\x70\x5F\x69\x64\x3D\x64\x31\x65\x76\x5F\x61\x70\x70\x26\x70\x3D\x31\x26\x70\x75\x62\x6C\x69\x73\x68\x65\x72\x49\x64\x3D","\x6C\x65\x6E\x67\x74\x68","\x5D\u4F60\u73B0\u5728\u6709\x3A","\u7BC7\u4E3B\u9898\u53EF\u5220\u9664","\x64\x65\x6C\x69\x64","\x64\x65\x6C","\x5D\u5220\u9664\u4E3B\u9898\x3A\u65E0\u6587\u7AE0\u53EF\u5220\u9664","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x70\x70\x32\x2E\x64\x31\x65\x76\x2E\x63\x6F\x6D\x2F\x61\x70\x69\x2F\x75\x73\x65\x72\x2F\x74\x6F\x70\x69\x63\x2D\x64\x65\x6C\x3F\x74\x69\x6D\x65\x73\x74\x61\x6D\x70\x3D","\x26\x61\x70\x70\x5F\x69\x64\x3D\x64\x31\x65\x76\x5F\x61\x70\x70\x26\x69\x64\x3D","\x5D\u4E3B\u9898\u56DE\u6536\x3A\u5220\u9664\u6210\u529F\uFF5E","\x5D\u5220\u9664\u4E3B\u9898\x3A","\x4F\x4D\x4B\x43\x79\x32\x55\x78\x5A\x77\x6E\x38\x65\x34\x41\x6B\u7B2C\u4E00\u7535\u52A8\x64\x31\x65\x76\x5F\x61\x70\x70\x31\x38\x31","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x70\x70\x32\x2E\x64\x31\x65\x76\x2E\x63\x6F\x6D\x2F\x61\x70\x69\x2F\x74\x6F\x70\x69\x63\x2F\x67\x65\x74\x2D\x74\x6F\x70\x69\x63\x2D\x61\x74\x2D\x63\x61\x74\x65\x67\x6F\x72\x79\x3F\x74\x69\x6D\x65\x73\x74\x61\x6D\x70\x3D","\x26\x61\x70\x70\x5F\x69\x64\x3D\x64\x31\x65\x76\x5F\x61\x70\x70\x26\x70\x61\x67\x65\x3D\x31\x26\x63\x61\x74\x65\x67\x6F\x72\x79\x49\x64\x3D\x31\x38\x31\x26\x69\x73\x46\x65\x61\x74\x75\x72\x65\x64\x3D\x31\x26\x75\x69\x64\x3D","\x63\x6F\x6E\x74\x65\x6E\x74","\x66\x74","\x72\x65\x70\x6C\x61\x63\x65","\x31\x57\x31\x30\x3D","\x31\x31\x32\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x70\x70\x32\x2E\x64\x31\x65\x76\x2E\x63\x6F\x6D\x2F\x61\x70\x69\x2F\x75\x73\x65\x72\x2F\x74\x6F\x70\x69\x63\x2D\x61\x64\x64\x2D\x76\x32","\x22\x2C\x22\x61\x70\x70\x5F\x69\x64\x22\x3A\x22\x64\x31\x65\x76\x5F\x61\x70\x70\x22\x2C\x22\x63\x6F\x6E\x74\x65\x6E\x74\x22\x3A\x22","\x22\x2C\x22\x63\x6F\x76\x65\x72\x49\x6D\x67\x55\x72\x6C\x22\x3A\x22\x22\x2C\x22\x6D\x65\x64\x69\x61\x73\x22\x3A\x22\x57\x31\x30\x3D\x22\x2C\x22\x72\x65\x64\x69\x72\x65\x63\x74\x55\x72\x6C\x22\x3A\x22\x22\x2C\x22\x73\x6F\x75\x72\x63\x65\x22\x3A\x31\x2C\x22\x69\x73\x43\x61\x6E\x44\x6F\x77\x6E\x6C\x6F\x61\x64\x22\x3A\x31\x2C\x22\x74\x61\x67\x73\x22\x3A\x22\x31\x22\x2C\x22\x74\x61\x72\x67\x65\x74\x54\x79\x70\x65\x22\x3A\x32\x34\x2C\x22\x75\x69\x64\x22\x3A\x22","\x5D\u53D1\u77ED\u56FE\u6587\x3A\u53D1\u8868\u6210\u529F\x69\x64\u4E3A","\x20\x2D\x2D\x3E\x20\u6682\u505C\u540E\u7EE7\u7EED\u6267\u884C","\x64\x6F\x6E\x65","\x66\x69\x6E\x61\x6C\x6C\x79","\x6C\x6F\x67","\x63\x61\x74\x63\x68","\x75\x6E\x64\x65\x66\x69\x6E\x65\x64","\x66\x69\x6C\x74\x65\x72","\x0A\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x20\u8D26\u53F7\u68C0\u6D4B\x20\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D","\x6D\x79","\x70\x75\x73\x68","\x61\x6C\x6C","\x0A\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x20\u6BCF\u65E5\u4EFB\u52A1\x20\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D","\x73\x69\x67\x6E","\x6C\x69\x73\x74","\x0A\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x20\u4E3B\u9898\u56DE\u6536\x20\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D","\x74\x6F\x70\x69\x63\x73","\u6BCF\u665A\x32\x31\u65F6\u5220\u9664\u53D1\u8868\u8FC7\u7684\u4E3B\u9898\uFF0C\u8BF7\u6CE8\u610F\u5B9A\u65F6","\x73\x68\x6F\x77\x6D\x73\x67","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x76\x31\x2E\x6A\x69\x6E\x72\x69\x73\x68\x69\x63\x69\x2E\x63\x6F\x6D\x2F\x61\x6C\x6C\x2E\x6A\x73\x6F\x6E","\x20\x20\u2014\u2014\u2014\u2014\u300A","\x6F\x72\x69\x67\x69\x6E","\u300B","\x61\x75\x74\x68\x6F\x72","\x69\x6E\x64\x65\x78\x4F\x66","\x73\x70\x6C\x69\x74","\x0A\u672A\u627E\u5230\x43\x4B\x20\u8BF7\u9605\u8BFB\u811A\u672C\u8BF4\u660E","\u5171\u627E\u5230","\u4E2A\u8D26\u53F7","\x2F\x2F","\x62\x6F\x64\x79","\x63\x6F\x6E\x74\x65\x6E\x74\x2D\x74\x79\x70\x65","\x68\x65\x61\x64\x65\x72\x73","\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x6A\x73\x6F\x6E\x3B\x63\x68\x61\x72\x73\x65\x74\x3D\x55\x54\x46\x2D\x38","\u8BF7\u6C42\u5931\u8D25","\x73\x74\x72\x69\x6E\x67\x69\x66\x79","\x6F\x62\x6A\x65\x63\x74","\x70\x61\x72\x73\x65","\x73\x65\x6E\x64","\x67\x65\x74\x48\x6F\x75\x72\x73","\x72\x61\x6E\x64\x6F\x6D","\u5220\u9664","\u7248\u672C\u53F7\uFF0C\x6A\x73\u4F1A\u5B9A","\u671F\u5F39\u7A97\uFF0C","\u8FD8\u8BF7\u652F\u6301\u6211\u4EEC\u7684\u5DE5\u4F5C","\x6A\x73\x6A\x69\x61","\x6D\x69\x2E\x63\x6F\x6D"];let httpResult,httpReq,httpResp;let userCookie=($[__Oxf432d[0x0]]()?process[__Oxf432d[0x2]][__Oxf432d[0x1]]:$[__Oxf432d[0x3]](__Oxf432d[0x1]))|| __Oxf432d[0x4];let userList=[];let userIdx=0;let userCount=0;let h=local_hours();class UserInfo{constructor(_0x5190xa){this[__Oxf432d[0x5]]=  ++userIdx;this[__Oxf432d[0x6]]= this[__Oxf432d[0x5]];this[__Oxf432d[0x7]]= false;this[__Oxf432d[0x8]]= false;try{this[__Oxf432d[0x9]]= $[__Oxf432d[0xa]](_0x5190xa);this[__Oxf432d[0xb]]= true}catch(e){this[__Oxf432d[0xb]]= false;$[__Oxf432d[0xe]](`${__Oxf432d[0xc]}${this[__Oxf432d[0x5]]}${__Oxf432d[0xd]}`)}}async my(){try{let _0x5190xc=Math[__Oxf432d[0x10]]( new Date()[__Oxf432d[0xf]]()/ 1000).toString();let _0x5190xd=`${__Oxf432d[0x11]}${app}${__Oxf432d[0x4]}${_0x5190xc}${__Oxf432d[0x4]}${this[__Oxf432d[0x9]][__Oxf432d[0x12]]}${__Oxf432d[0x4]}${this[__Oxf432d[0x9]][__Oxf432d[0x13]]}${__Oxf432d[0x4]}${vCode}${__Oxf432d[0x4]}${vName}${__Oxf432d[0x4]}`;let _0x5190xe=md5(_0x5190xd);let sign=_0x5190xe[__Oxf432d[0x14]]();let _0x5190x10=`${__Oxf432d[0x15]}${_0x5190xc}${__Oxf432d[0x16]}${this[__Oxf432d[0x9]][__Oxf432d[0x13]]}${__Oxf432d[0x17]}${this[__Oxf432d[0x9]][__Oxf432d[0x12]]}${__Oxf432d[0x18]}${vName}${__Oxf432d[0x19]}${vCode}${__Oxf432d[0x1a]}${sign}${__Oxf432d[0x4]}`;let _0x5190x11=`${__Oxf432d[0x4]}`;let _0x5190x12=populateUrlObject(_0x5190x10,_0x5190x11); await httpRequest(__Oxf432d[0x1b],_0x5190x12);let _0x5190x13=httpResult;if(!_0x5190x13){return};if(_0x5190x13[__Oxf432d[0x1c]]== 1000){this[__Oxf432d[0x7]]= true;this[__Oxf432d[0x8]]= true;$[__Oxf432d[0xe]](`${__Oxf432d[0xc]}${this[__Oxf432d[0x6]]}${__Oxf432d[0x1d]}${_0x5190x13[__Oxf432d[0x1e]]}${__Oxf432d[0x4]}`)}else {$[__Oxf432d[0xe]](`${__Oxf432d[0xc]}${this[__Oxf432d[0x6]]}${__Oxf432d[0x1f]}`)}}catch(e){}finally{return Promise[__Oxf432d[0x20]](1)}}async sign(){try{let _0x5190xc=Math[__Oxf432d[0x10]]( new Date()[__Oxf432d[0xf]]()/ 1000).toString();let _0x5190xd=`${__Oxf432d[0x11]}${app}${__Oxf432d[0x4]}${_0x5190xc}${__Oxf432d[0x4]}${this[__Oxf432d[0x9]][__Oxf432d[0x12]]}${__Oxf432d[0x21]}${this[__Oxf432d[0x9]][__Oxf432d[0x13]]}${__Oxf432d[0x4]}${vCode}${__Oxf432d[0x4]}${vName}${__Oxf432d[0x4]}`;let _0x5190xe=md5(_0x5190xd);let sign=_0x5190xe[__Oxf432d[0x14]]();let _0x5190x10=`${__Oxf432d[0x22]}${_0x5190xc}${__Oxf432d[0x23]}${this[__Oxf432d[0x9]][__Oxf432d[0x13]]}${__Oxf432d[0x17]}${this[__Oxf432d[0x9]][__Oxf432d[0x12]]}${__Oxf432d[0x24]}${osVer}${__Oxf432d[0x25]}${vName}${__Oxf432d[0x19]}${vCode}${__Oxf432d[0x1a]}${sign}${__Oxf432d[0x4]}`;let _0x5190x11=`${__Oxf432d[0x4]}`;let _0x5190x12=populateUrlObject(_0x5190x10,_0x5190x11); await httpRequest(__Oxf432d[0x1b],_0x5190x12);let _0x5190x13=httpResult;if(!_0x5190x13){return};if(_0x5190x13[__Oxf432d[0x1c]]== 1000){$[__Oxf432d[0xe]](`${__Oxf432d[0xc]}${this[__Oxf432d[0x6]]}${__Oxf432d[0x26]}${_0x5190x13[__Oxf432d[0x1e]]}${__Oxf432d[0x27]}`)}else {$[__Oxf432d[0xe]](`${__Oxf432d[0xc]}${this[__Oxf432d[0x6]]}${__Oxf432d[0x28]}${_0x5190x13[__Oxf432d[0x29]]}${__Oxf432d[0x4]}`)}}catch(e){}finally{return Promise[__Oxf432d[0x20]](1)}}async list(){try{let _0x5190xc=Math[__Oxf432d[0x10]]( new Date()[__Oxf432d[0xf]]()/ 1000).toString();let _0x5190xd=`${__Oxf432d[0x11]}${app}${__Oxf432d[0x4]}${_0x5190xc}${__Oxf432d[0x4]}${this[__Oxf432d[0x9]][__Oxf432d[0x12]]}${__Oxf432d[0x4]}${this[__Oxf432d[0x9]][__Oxf432d[0x13]]}${__Oxf432d[0x4]}${vCode}${__Oxf432d[0x4]}${vName}${__Oxf432d[0x4]}`;let _0x5190xe=md5(_0x5190xd);let sign=_0x5190xe[__Oxf432d[0x14]]();let _0x5190x10=`${__Oxf432d[0x2a]}${_0x5190xc}${__Oxf432d[0x16]}${this[__Oxf432d[0x9]][__Oxf432d[0x13]]}${__Oxf432d[0x17]}${this[__Oxf432d[0x9]][__Oxf432d[0x12]]}${__Oxf432d[0x24]}${osVer}${__Oxf432d[0x25]}${vName}${__Oxf432d[0x19]}${vCode}${__Oxf432d[0x1a]}${sign}${__Oxf432d[0x4]}`;let _0x5190x11=`${__Oxf432d[0x4]}`;let _0x5190x12=populateUrlObject(_0x5190x10,_0x5190x11); await httpRequest(__Oxf432d[0x1b],_0x5190x12);let _0x5190x13=httpResult;if(!_0x5190x13){return};let _0x5190x15=_0x5190x13[__Oxf432d[0x1e]]|| [];for(let _0x5190x16 of _0x5190x15){this[__Oxf432d[0x2b]]= `${__Oxf432d[0x4]}${_0x5190x16[__Oxf432d[0x2c]]}${__Oxf432d[0x4]}`== `${__Oxf432d[0x4]}${_0x5190x16[__Oxf432d[0x2d]]}${__Oxf432d[0x4]}`?true:false;let _0x5190x17=this[__Oxf432d[0x2b]]?__Oxf432d[0x2e]:__Oxf432d[0x2f];$[__Oxf432d[0xe]](`${__Oxf432d[0xc]}${this[__Oxf432d[0x6]]}${__Oxf432d[0x30]}${_0x5190x16[__Oxf432d[0x6]]}${__Oxf432d[0x31]}${_0x5190x16[__Oxf432d[0x2c]]}${__Oxf432d[0x32]}${_0x5190x16[__Oxf432d[0x2d]]}${__Oxf432d[0x33]}${_0x5190x17}${__Oxf432d[0x4]}`);for(let _0x5190x18=`${__Oxf432d[0x4]}${_0x5190x16[__Oxf432d[0x2c]]}${__Oxf432d[0x4]}`;_0x5190x18< `${__Oxf432d[0x4]}${_0x5190x16[__Oxf432d[0x2d]]}${__Oxf432d[0x4]}`;_0x5190x18++){this[__Oxf432d[0x34]]= nm++; await this[__Oxf432d[0x35]]();if(`${__Oxf432d[0x4]}${_0x5190x16[__Oxf432d[0x36]]}${__Oxf432d[0x4]}`== 2&& _0x5190x18< `${__Oxf432d[0x4]}${_0x5190x16[__Oxf432d[0x2d]]}${__Oxf432d[0x4]}`){ await this[__Oxf432d[0x37]]()};if(`${__Oxf432d[0x4]}${_0x5190x16[__Oxf432d[0x36]]}${__Oxf432d[0x4]}`== 3&& _0x5190x18< `${__Oxf432d[0x4]}${_0x5190x16[__Oxf432d[0x2d]]}${__Oxf432d[0x4]}`){ await this[__Oxf432d[0x38]]()};if(`${__Oxf432d[0x4]}${_0x5190x16[__Oxf432d[0x36]]}${__Oxf432d[0x4]}`== 4&& _0x5190x18< `${__Oxf432d[0x4]}${_0x5190x16[__Oxf432d[0x2d]]}${__Oxf432d[0x4]}`){ await this[__Oxf432d[0x39]]()};if(`${__Oxf432d[0x4]}${_0x5190x16[__Oxf432d[0x36]]}${__Oxf432d[0x4]}`== 5&& _0x5190x18< `${__Oxf432d[0x4]}${_0x5190x16[__Oxf432d[0x2d]]}${__Oxf432d[0x4]}`){ await this[__Oxf432d[0x3a]]()};if(`${__Oxf432d[0x4]}${_0x5190x16[__Oxf432d[0x36]]}${__Oxf432d[0x4]}`== 19&& _0x5190x18< `${__Oxf432d[0x4]}${_0x5190x16[__Oxf432d[0x2d]]}${__Oxf432d[0x4]}`){ await this[__Oxf432d[0x3b]]()};if(`${__Oxf432d[0x4]}${_0x5190x16[__Oxf432d[0x36]]}${__Oxf432d[0x4]}`== 22&& _0x5190x18< `${__Oxf432d[0x4]}${_0x5190x16[__Oxf432d[0x2d]]}${__Oxf432d[0x4]}`){ await this[__Oxf432d[0x3c]]()}; await $[__Oxf432d[0x3d]](3000)}}}catch(e){}finally{return Promise[__Oxf432d[0x20]](1)}}async glist(){try{let _0x5190xc=Math[__Oxf432d[0x10]]( new Date()[__Oxf432d[0xf]]()/ 1000).toString();let _0x5190xd=`${__Oxf432d[0x11]}${app}${__Oxf432d[0x4]}${nm}${__Oxf432d[0x4]}${_0x5190xc}${__Oxf432d[0x4]}${this[__Oxf432d[0x9]][__Oxf432d[0x12]]}${__Oxf432d[0x4]}${this[__Oxf432d[0x9]][__Oxf432d[0x13]]}${__Oxf432d[0x4]}${vCode}${__Oxf432d[0x4]}${vName}${__Oxf432d[0x4]}`;let _0x5190xe=md5(_0x5190xd);let sign=_0x5190xe[__Oxf432d[0x14]]();let _0x5190x10=`${__Oxf432d[0x3e]}${_0x5190xc}${__Oxf432d[0x3f]}${nm}${__Oxf432d[0x40]}${this[__Oxf432d[0x9]][__Oxf432d[0x13]]}${__Oxf432d[0x17]}${this[__Oxf432d[0x9]][__Oxf432d[0x12]]}${__Oxf432d[0x24]}${osVer}${__Oxf432d[0x25]}${vName}${__Oxf432d[0x19]}${vCode}${__Oxf432d[0x1a]}${sign}${__Oxf432d[0x4]}`;let _0x5190x11=`${__Oxf432d[0x4]}`;let _0x5190x12=populateUrlObject(_0x5190x10,_0x5190x11); await httpRequest(__Oxf432d[0x1b],_0x5190x12);let _0x5190x13=httpResult;if(!_0x5190x13){return};this[__Oxf432d[0x41]]= _0x5190x13[__Oxf432d[0x1e]][nm][__Oxf432d[0x36]]}catch(e){}finally{return Promise[__Oxf432d[0x20]](1)}}async read(){try{let _0x5190xc=Math[__Oxf432d[0x10]]( new Date()[__Oxf432d[0xf]]()/ 1000).toString();let _0x5190xd=`${__Oxf432d[0x11]}${city_id}${__Oxf432d[0x4]}${app}${__Oxf432d[0x4]}${this[__Oxf432d[0x41]]}${__Oxf432d[0x42]}${_0x5190xc}${__Oxf432d[0x4]}${this[__Oxf432d[0x9]][__Oxf432d[0x12]]}${__Oxf432d[0x43]}${this[__Oxf432d[0x9]][__Oxf432d[0x13]]}${__Oxf432d[0x4]}${vCode}${__Oxf432d[0x4]}${vName}${__Oxf432d[0x4]}`;let _0x5190xe=md5(_0x5190xd);let sign=_0x5190xe[__Oxf432d[0x14]]();let _0x5190x10=`${__Oxf432d[0x22]}${_0x5190xc}${__Oxf432d[0x44]}${this[__Oxf432d[0x41]]}${__Oxf432d[0x45]}${this[__Oxf432d[0x9]][__Oxf432d[0x13]]}${__Oxf432d[0x17]}${this[__Oxf432d[0x9]][__Oxf432d[0x12]]}${__Oxf432d[0x24]}${osVer}${__Oxf432d[0x25]}${vName}${__Oxf432d[0x19]}${vCode}${__Oxf432d[0x46]}${city_id}${__Oxf432d[0x1a]}${sign}${__Oxf432d[0x4]}`;let _0x5190x11=`${__Oxf432d[0x4]}`;let _0x5190x12=populateUrlObject(_0x5190x10,_0x5190x11); await httpRequest(__Oxf432d[0x1b],_0x5190x12);let _0x5190x13=httpResult;if(!_0x5190x13){return};if(_0x5190x13[__Oxf432d[0x1c]]== 1000){$[__Oxf432d[0xe]](`${__Oxf432d[0xc]}${this[__Oxf432d[0x6]]}${__Oxf432d[0x47]}${_0x5190x13[__Oxf432d[0x1e]]}${__Oxf432d[0x27]}`)}else {$[__Oxf432d[0xe]](`${__Oxf432d[0xc]}${this[__Oxf432d[0x6]]}${__Oxf432d[0x30]}${_0x5190x13[__Oxf432d[0x29]]}${__Oxf432d[0x4]}`)}}catch(e){}finally{return Promise[__Oxf432d[0x20]](1)}}async share(){try{let _0x5190xc=Math[__Oxf432d[0x10]]( new Date()[__Oxf432d[0xf]]()/ 1000).toString();let _0x5190xd=`${__Oxf432d[0x11]}${city_id}${__Oxf432d[0x4]}${app}${__Oxf432d[0x4]}${this[__Oxf432d[0x41]]}${__Oxf432d[0x42]}${_0x5190xc}${__Oxf432d[0x4]}${this[__Oxf432d[0x9]][__Oxf432d[0x12]]}${__Oxf432d[0x48]}${this[__Oxf432d[0x9]][__Oxf432d[0x13]]}${__Oxf432d[0x4]}${vCode}${__Oxf432d[0x4]}${vName}${__Oxf432d[0x4]}`;let _0x5190xe=md5(_0x5190xd);let sign=_0x5190xe[__Oxf432d[0x14]]();let _0x5190x10=`${__Oxf432d[0x22]}${_0x5190xc}${__Oxf432d[0x49]}${this[__Oxf432d[0x41]]}${__Oxf432d[0x45]}${this[__Oxf432d[0x9]][__Oxf432d[0x13]]}${__Oxf432d[0x17]}${this[__Oxf432d[0x9]][__Oxf432d[0x12]]}${__Oxf432d[0x24]}${osVer}${__Oxf432d[0x25]}${vName}${__Oxf432d[0x19]}${vCode}${__Oxf432d[0x46]}${city_id}${__Oxf432d[0x1a]}${sign}${__Oxf432d[0x4]}`;let _0x5190x11=`${__Oxf432d[0x4]}`;let _0x5190x12=populateUrlObject(_0x5190x10,_0x5190x11); await httpRequest(__Oxf432d[0x1b],_0x5190x12);let _0x5190x13=httpResult;if(!_0x5190x13){return};if(_0x5190x13[__Oxf432d[0x1c]]== 1000){$[__Oxf432d[0xe]](`${__Oxf432d[0xc]}${this[__Oxf432d[0x6]]}${__Oxf432d[0x4a]}${_0x5190x13[__Oxf432d[0x1e]]}${__Oxf432d[0x27]}`)}else {$[__Oxf432d[0xe]](`${__Oxf432d[0xc]}${this[__Oxf432d[0x6]]}${__Oxf432d[0x30]}${_0x5190x13[__Oxf432d[0x29]]}${__Oxf432d[0x4]}`)}}catch(e){}finally{return Promise[__Oxf432d[0x20]](1)}}async pl(){try{let _0x5190xc=Math[__Oxf432d[0x10]]( new Date()[__Oxf432d[0xf]]()/ 1000).toString();let _0x5190xd=`${__Oxf432d[0x11]}${city_id}${__Oxf432d[0x4]}${app}${__Oxf432d[0x4b]}${_0x5190xc}${__Oxf432d[0x4]}${this[__Oxf432d[0x9]][__Oxf432d[0x12]]}${__Oxf432d[0x4]}${this[__Oxf432d[0x9]][__Oxf432d[0x13]]}${__Oxf432d[0x4]}${vCode}${__Oxf432d[0x4]}${vName}${__Oxf432d[0x4]}`;let _0x5190xe=md5(_0x5190xd);let sign=_0x5190xe[__Oxf432d[0x14]]();let _0x5190x10=`${__Oxf432d[0x3e]}${_0x5190xc}${__Oxf432d[0x4c]}${this[__Oxf432d[0x9]][__Oxf432d[0x13]]}${__Oxf432d[0x17]}${this[__Oxf432d[0x9]][__Oxf432d[0x12]]}${__Oxf432d[0x24]}${osVer}${__Oxf432d[0x25]}${vName}${__Oxf432d[0x19]}${vCode}${__Oxf432d[0x46]}${city_id}${__Oxf432d[0x1a]}${sign}${__Oxf432d[0x4]}`;let _0x5190x11=`${__Oxf432d[0x4]}`;let _0x5190x12=populateUrlObject(_0x5190x10,_0x5190x11); await httpRequest(__Oxf432d[0x1b],_0x5190x12);let _0x5190x13=httpResult;if(!_0x5190x13){return};if(_0x5190x13[__Oxf432d[0x1e]][`${__Oxf432d[0x4]}${this[__Oxf432d[0x34]]}${__Oxf432d[0x4]}`][__Oxf432d[0x36]]> 0){this[__Oxf432d[0x4d]]= _0x5190x13[__Oxf432d[0x1e]][`${__Oxf432d[0x4]}${this[__Oxf432d[0x34]]}${__Oxf432d[0x4]}`][__Oxf432d[0x4e]];this[__Oxf432d[0x4f]]= _0x5190x13[__Oxf432d[0x1e]][`${__Oxf432d[0x4]}${this[__Oxf432d[0x34]]}${__Oxf432d[0x4]}`][__Oxf432d[0x36]]; await this[__Oxf432d[0x50]]()}else {$[__Oxf432d[0xe]](`${__Oxf432d[0xc]}${this[__Oxf432d[0x6]]}${__Oxf432d[0x51]}`)}}catch(e){}finally{return Promise[__Oxf432d[0x20]](1)}}async add(){try{this[__Oxf432d[0x52]]= randomArr(text);let _0x5190xc=Math[__Oxf432d[0x10]]( new Date()[__Oxf432d[0xf]]()/ 1000).toString();let _0x5190xd=`${__Oxf432d[0x11]}${city_id}${__Oxf432d[0x4]}${this[__Oxf432d[0x52]]}${__Oxf432d[0x4b]}${app}${__Oxf432d[0x4b]}${this[__Oxf432d[0x4f]]}${__Oxf432d[0x42]}${_0x5190xc}${__Oxf432d[0x4]}${this[__Oxf432d[0x4d]]}${__Oxf432d[0x4]}${this[__Oxf432d[0x9]][__Oxf432d[0x12]]}${__Oxf432d[0x4]}${this[__Oxf432d[0x9]][__Oxf432d[0x13]]}${__Oxf432d[0x4]}${vCode}${__Oxf432d[0x4]}${vName}${__Oxf432d[0x4]}`;let _0x5190xe=md5(_0x5190xd);let sign=_0x5190xe[__Oxf432d[0x14]]();let _0x5190x10=`${__Oxf432d[0x53]}`;let _0x5190x11=`${__Oxf432d[0x54]}${_0x5190xc}${__Oxf432d[0x55]}${this[__Oxf432d[0x52]]}${__Oxf432d[0x56]}${this[__Oxf432d[0x4f]]}${__Oxf432d[0x57]}${this[__Oxf432d[0x4d]]}${__Oxf432d[0x58]}${this[__Oxf432d[0x9]][__Oxf432d[0x13]]}${__Oxf432d[0x59]}${this[__Oxf432d[0x9]][__Oxf432d[0x12]]}${__Oxf432d[0x5a]}${osVer}${__Oxf432d[0x5b]}${vName}${__Oxf432d[0x5c]}${vCode}${__Oxf432d[0x5d]}${city_id}${__Oxf432d[0x5e]}${sign}${__Oxf432d[0x5f]}`;let _0x5190x12=populateUrlObject(_0x5190x10,_0x5190x11); await httpRequest(__Oxf432d[0x60],_0x5190x12);let _0x5190x13=httpResult;if(!_0x5190x13){return};$[__Oxf432d[0xe]](`${__Oxf432d[0xc]}${this[__Oxf432d[0x6]]}${__Oxf432d[0x61]}${_0x5190x13[__Oxf432d[0x29]]}${__Oxf432d[0x4]}`)}catch(e){}finally{return Promise[__Oxf432d[0x20]](1)}}async dz(){try{let _0x5190xc=Math[__Oxf432d[0x10]]( new Date()[__Oxf432d[0xf]]()/ 1000).toString();let _0x5190xd=`${__Oxf432d[0x11]}${city_id}${__Oxf432d[0x4]}${app}${__Oxf432d[0x4]}${this[__Oxf432d[0x41]]}${__Oxf432d[0x42]}${_0x5190xc}${__Oxf432d[0x4]}${this[__Oxf432d[0x9]][__Oxf432d[0x12]]}${__Oxf432d[0x62]}${this[__Oxf432d[0x9]][__Oxf432d[0x13]]}${__Oxf432d[0x4]}${vCode}${__Oxf432d[0x4]}${vName}${__Oxf432d[0x4]}`;let _0x5190xe=md5(_0x5190xd);let sign=_0x5190xe[__Oxf432d[0x14]]();let _0x5190x10=`${__Oxf432d[0x22]}${_0x5190xc}${__Oxf432d[0x63]}${this[__Oxf432d[0x41]]}${__Oxf432d[0x45]}${this[__Oxf432d[0x9]][__Oxf432d[0x13]]}${__Oxf432d[0x17]}${this[__Oxf432d[0x9]][__Oxf432d[0x12]]}${__Oxf432d[0x24]}${osVer}${__Oxf432d[0x25]}${vName}${__Oxf432d[0x19]}${vCode}${__Oxf432d[0x46]}${city_id}${__Oxf432d[0x1a]}${sign}${__Oxf432d[0x4]}`;let _0x5190x11=`${__Oxf432d[0x4]}`;let _0x5190x12=populateUrlObject(_0x5190x10,_0x5190x11); await httpRequest(__Oxf432d[0x1b],_0x5190x12);let _0x5190x13=httpResult;if(!_0x5190x13){return};if(_0x5190x13[__Oxf432d[0x1c]]== 1000){$[__Oxf432d[0xe]](`${__Oxf432d[0xc]}${this[__Oxf432d[0x6]]}${__Oxf432d[0x64]}${_0x5190x13[__Oxf432d[0x1e]]}${__Oxf432d[0x27]}`)}else {$[__Oxf432d[0xe]](`${__Oxf432d[0xc]}${this[__Oxf432d[0x6]]}${__Oxf432d[0x30]}${_0x5190x13[__Oxf432d[0x29]]}${__Oxf432d[0x4]}`)}}catch(e){}finally{return Promise[__Oxf432d[0x20]](1)}}async video(){try{let _0x5190xc=Math[__Oxf432d[0x10]]( new Date()[__Oxf432d[0xf]]()/ 1000).toString();let _0x5190xd=`${__Oxf432d[0x11]}${app}${__Oxf432d[0x4]}${this[__Oxf432d[0x41]]}${__Oxf432d[0x43]}${_0x5190xc}${__Oxf432d[0x4]}${this[__Oxf432d[0x9]][__Oxf432d[0x12]]}${__Oxf432d[0x65]}${this[__Oxf432d[0x9]][__Oxf432d[0x13]]}${__Oxf432d[0x4]}${vCode}${__Oxf432d[0x4]}${vName}${__Oxf432d[0x4]}`;let _0x5190xe=md5(_0x5190xd);let sign=_0x5190xe[__Oxf432d[0x14]]();let _0x5190x10=`${__Oxf432d[0x22]}${_0x5190xc}${__Oxf432d[0x66]}${this[__Oxf432d[0x41]]}${__Oxf432d[0x67]}${this[__Oxf432d[0x9]][__Oxf432d[0x13]]}${__Oxf432d[0x17]}${this[__Oxf432d[0x9]][__Oxf432d[0x12]]}${__Oxf432d[0x24]}${osVer}${__Oxf432d[0x25]}${vName}${__Oxf432d[0x19]}${vCode}${__Oxf432d[0x1a]}${sign}${__Oxf432d[0x4]}`;let _0x5190x11=`${__Oxf432d[0x4]}`;let _0x5190x12=populateUrlObject(_0x5190x10,_0x5190x11); await httpRequest(__Oxf432d[0x1b],_0x5190x12);let _0x5190x13=httpResult;if(!_0x5190x13){return};if(_0x5190x13[__Oxf432d[0x1c]]== 1000){$[__Oxf432d[0xe]](`${__Oxf432d[0xc]}${this[__Oxf432d[0x6]]}${__Oxf432d[0x68]}${_0x5190x13[__Oxf432d[0x1e]]}${__Oxf432d[0x27]}`)}else {$[__Oxf432d[0xe]](`${__Oxf432d[0xc]}${this[__Oxf432d[0x6]]}${__Oxf432d[0x30]}${_0x5190x13[__Oxf432d[0x29]]}${__Oxf432d[0x4]}`)}}catch(e){}finally{return Promise[__Oxf432d[0x20]](1)}}async topics(){try{let _0x5190xc=Math[__Oxf432d[0x10]]( new Date()[__Oxf432d[0xf]]()/ 1000).toString();let _0x5190xd=`${__Oxf432d[0x11]}${city_id}${__Oxf432d[0x4]}${app}${__Oxf432d[0x4b]}${this[__Oxf432d[0x9]][__Oxf432d[0x13]]}${__Oxf432d[0x4]}${_0x5190xc}${__Oxf432d[0x4]}${this[__Oxf432d[0x9]][__Oxf432d[0x12]]}${__Oxf432d[0x4]}${this[__Oxf432d[0x9]][__Oxf432d[0x13]]}${__Oxf432d[0x4]}${vCode}${__Oxf432d[0x4]}${vName}${__Oxf432d[0x4]}`;let _0x5190xe=md5(_0x5190xd);let sign=_0x5190xe[__Oxf432d[0x14]]();let _0x5190x10=`${__Oxf432d[0x69]}${_0x5190xc}${__Oxf432d[0x6a]}${this[__Oxf432d[0x9]][__Oxf432d[0x13]]}${__Oxf432d[0x40]}${this[__Oxf432d[0x9]][__Oxf432d[0x13]]}${__Oxf432d[0x17]}${this[__Oxf432d[0x9]][__Oxf432d[0x12]]}${__Oxf432d[0x24]}${osVer}${__Oxf432d[0x25]}${vName}${__Oxf432d[0x19]}${vCode}${__Oxf432d[0x46]}${city_id}${__Oxf432d[0x1a]}${sign}${__Oxf432d[0x4]}`;let _0x5190x11=`${__Oxf432d[0x4]}`;let _0x5190x12=populateUrlObject(_0x5190x10,_0x5190x11); await httpRequest(__Oxf432d[0x1b],_0x5190x12);let _0x5190x13=httpResult;if(!_0x5190x13){return};if(_0x5190x13[__Oxf432d[0x1e]][__Oxf432d[0x6b]]> 0){$[__Oxf432d[0xe]](`${__Oxf432d[0xc]}${this[__Oxf432d[0x6]]}${__Oxf432d[0x6c]}${_0x5190x13[__Oxf432d[0x1e]][__Oxf432d[0x6b]]}${__Oxf432d[0x6d]}`);let _0x5190x21=`${__Oxf432d[0x4]}${_0x5190x13[__Oxf432d[0x1e]][__Oxf432d[0x6b]]}${__Oxf432d[0x4]}`;for(let _0x5190x18=0;_0x5190x18< _0x5190x21;_0x5190x18++){this[__Oxf432d[0x6e]]= _0x5190x13[__Oxf432d[0x1e]][_0x5190x18][__Oxf432d[0x36]]; await $[__Oxf432d[0x3d]](3000); await this[__Oxf432d[0x6f]]()}}else {$[__Oxf432d[0xe]](`${__Oxf432d[0xc]}${this[__Oxf432d[0x6]]}${__Oxf432d[0x70]}`)}}catch(e){}finally{return Promise[__Oxf432d[0x20]](1)}}async del(){try{let _0x5190xc=Math[__Oxf432d[0x10]]( new Date()[__Oxf432d[0xf]]()/ 1000).toString();let _0x5190xd=`${__Oxf432d[0x11]}${city_id}${__Oxf432d[0x4]}${this[__Oxf432d[0x6e]]}${__Oxf432d[0x4]}${app}${__Oxf432d[0x4]}${_0x5190xc}${__Oxf432d[0x4]}${this[__Oxf432d[0x9]][__Oxf432d[0x12]]}${__Oxf432d[0x4]}${this[__Oxf432d[0x9]][__Oxf432d[0x13]]}${__Oxf432d[0x4]}${vCode}${__Oxf432d[0x4]}${vName}${__Oxf432d[0x4]}`;let _0x5190xe=md5(_0x5190xd);let sign=_0x5190xe[__Oxf432d[0x14]]();let _0x5190x10=`${__Oxf432d[0x71]}${_0x5190xc}${__Oxf432d[0x72]}${this[__Oxf432d[0x6e]]}${__Oxf432d[0x40]}${this[__Oxf432d[0x9]][__Oxf432d[0x13]]}${__Oxf432d[0x17]}${this[__Oxf432d[0x9]][__Oxf432d[0x12]]}${__Oxf432d[0x24]}${osVer}${__Oxf432d[0x25]}${vName}${__Oxf432d[0x19]}${vCode}${__Oxf432d[0x46]}${city_id}${__Oxf432d[0x1a]}${sign}${__Oxf432d[0x4]}`;let _0x5190x11=`${__Oxf432d[0x4]}`;let _0x5190x12=populateUrlObject(_0x5190x10,_0x5190x11); await httpRequest(__Oxf432d[0x1b],_0x5190x12);let _0x5190x13=httpResult;if(!_0x5190x13){return};if(_0x5190x13[__Oxf432d[0x1c]]== 1000){$[__Oxf432d[0xe]](`${__Oxf432d[0xc]}${this[__Oxf432d[0x6]]}${__Oxf432d[0x73]}`)}else {$[__Oxf432d[0xe]](`${__Oxf432d[0xc]}${this[__Oxf432d[0x6]]}${__Oxf432d[0x74]}${_0x5190x13[__Oxf432d[0x29]]}${__Oxf432d[0x4]}`)}}catch(e){}finally{return Promise[__Oxf432d[0x20]](1)}}async cat(){try{let _0x5190xc=Math[__Oxf432d[0x10]]( new Date()[__Oxf432d[0xf]]()/ 1000).toString();let _0x5190xd=`${__Oxf432d[0x75]}${city_id}${__Oxf432d[0x4b]}${app}${__Oxf432d[0x4b]}${_0x5190xc}${__Oxf432d[0x4]}${this[__Oxf432d[0x9]][__Oxf432d[0x12]]}${__Oxf432d[0x4]}${this[__Oxf432d[0x9]][__Oxf432d[0x13]]}${__Oxf432d[0x4]}${vCode}${__Oxf432d[0x4]}${vName}${__Oxf432d[0x4]}`;let _0x5190xe=md5(_0x5190xd);let sign=_0x5190xe[__Oxf432d[0x14]]();let _0x5190x10=`${__Oxf432d[0x76]}${_0x5190xc}${__Oxf432d[0x77]}${this[__Oxf432d[0x9]][__Oxf432d[0x13]]}${__Oxf432d[0x17]}${this[__Oxf432d[0x9]][__Oxf432d[0x12]]}${__Oxf432d[0x24]}${osVer}${__Oxf432d[0x25]}${vName}${__Oxf432d[0x19]}${vCode}${__Oxf432d[0x46]}${city_id}${__Oxf432d[0x1a]}${sign}${__Oxf432d[0x4]}`;let _0x5190x11=`${__Oxf432d[0x4]}`;let _0x5190x12=populateUrlObject(_0x5190x10,_0x5190x11); await httpRequest(__Oxf432d[0x1b],_0x5190x12);let _0x5190x13=httpResult;if(!_0x5190x13){return};if(_0x5190x13[__Oxf432d[0x1c]]== 1000){this[__Oxf432d[0x78]]= _0x5190x13[__Oxf432d[0x1e]][`${__Oxf432d[0x4]}${this[__Oxf432d[0x34]]}${__Oxf432d[0x4]}`][__Oxf432d[0x78]]; await this[__Oxf432d[0x79]]()}else {$[__Oxf432d[0xe]](`${__Oxf432d[0xc]}${this[__Oxf432d[0x6]]}${__Oxf432d[0x30]}${_0x5190x13[__Oxf432d[0x29]]}${__Oxf432d[0x4]}`)}}catch(e){}finally{return Promise[__Oxf432d[0x20]](1)}}async ft(){try{let _0x5190x25=`${__Oxf432d[0x4]}${this[__Oxf432d[0x78]]}${__Oxf432d[0x4]}`;let _0x5190x26=_0x5190x25[__Oxf432d[0x7a]](/[\  \r\n]+/g,__Oxf432d[0x4]);let _0x5190xc=Math[__Oxf432d[0x10]]( new Date()[__Oxf432d[0xf]]()/ 1000).toString();let _0x5190xd=`${__Oxf432d[0x11]}${city_id}${__Oxf432d[0x4]}${_0x5190x26}${__Oxf432d[0x7b]}${app}${__Oxf432d[0x7c]}${_0x5190xc}${__Oxf432d[0x4]}${this[__Oxf432d[0x9]][__Oxf432d[0x12]]}${__Oxf432d[0x4]}${this[__Oxf432d[0x9]][__Oxf432d[0x13]]}${__Oxf432d[0x4]}${vCode}${__Oxf432d[0x4]}${vName}${__Oxf432d[0x4]}`;let _0x5190xe=md5(_0x5190xd);let sign=_0x5190xe[__Oxf432d[0x14]]();let _0x5190x10=`${__Oxf432d[0x7d]}`;let _0x5190x11=`${__Oxf432d[0x54]}${_0x5190xc}${__Oxf432d[0x7e]}${_0x5190x26}${__Oxf432d[0x7f]}${this[__Oxf432d[0x9]][__Oxf432d[0x13]]}${__Oxf432d[0x59]}${this[__Oxf432d[0x9]][__Oxf432d[0x12]]}${__Oxf432d[0x5a]}${osVer}${__Oxf432d[0x5b]}${vName}${__Oxf432d[0x5c]}${vCode}${__Oxf432d[0x5d]}${city_id}${__Oxf432d[0x5e]}${sign}${__Oxf432d[0x5f]}`;let _0x5190x12=populateUrlObject(_0x5190x10,_0x5190x11); await httpRequest(__Oxf432d[0x60],_0x5190x12);let _0x5190x13=httpResult;if(!_0x5190x13){return};if(_0x5190x13[__Oxf432d[0x1c]]== 1000){$[__Oxf432d[0xe]](`${__Oxf432d[0xc]}${this[__Oxf432d[0x6]]}${__Oxf432d[0x80]}${_0x5190x13[__Oxf432d[0x1e]]}${__Oxf432d[0x81]}`); await $[__Oxf432d[0x3d]](65000)}else {$[__Oxf432d[0xe]](`${__Oxf432d[0xc]}${this[__Oxf432d[0x6]]}${__Oxf432d[0x30]}${_0x5190x13[__Oxf432d[0x29]]}${__Oxf432d[0x4]}`)}}catch(e){}finally{return Promise[__Oxf432d[0x20]](1)}}};!(async ()=>{if( typeof $request!== __Oxf432d[0x86]){}else {if(!( await checkEnv())){return}; await sc();let _0x5190x28=[];let _0x5190x29=userList[__Oxf432d[0x87]]((_0x5190x2a)=>{return _0x5190x2a[__Oxf432d[0xb]]});if(_0x5190x29[__Oxf432d[0x6b]]> 0){$[__Oxf432d[0xe]](__Oxf432d[0x88]);_0x5190x28= [];for(let _0x5190x2b of _0x5190x29){_0x5190x28[__Oxf432d[0x8a]](_0x5190x2b[__Oxf432d[0x89]]())}; await Promise[__Oxf432d[0x8b]](_0x5190x28);_0x5190x29= _0x5190x29[__Oxf432d[0x87]]((_0x5190x2a)=>{return _0x5190x2a[__Oxf432d[0x7]]});if(_0x5190x29[__Oxf432d[0x6b]]> 0){$[__Oxf432d[0xe]](__Oxf432d[0x8c]);_0x5190x28= [];for(let _0x5190x2b of _0x5190x29[__Oxf432d[0x87]]((_0x5190x2a)=>{return _0x5190x2a[__Oxf432d[0x8]]})){_0x5190x28[__Oxf432d[0x8a]](_0x5190x2b[__Oxf432d[0x8d]]()); await $[__Oxf432d[0x3d]](3000);_0x5190x28[__Oxf432d[0x8a]](_0x5190x2b[__Oxf432d[0x8e]]())}; await Promise[__Oxf432d[0x8b]](_0x5190x28);$[__Oxf432d[0xe]](__Oxf432d[0x8f]);_0x5190x28= [];for(let _0x5190x2b of _0x5190x29){if(h== 21){_0x5190x28[__Oxf432d[0x8a]](_0x5190x2b[__Oxf432d[0x90]]())}else {$[__Oxf432d[0xe]](`${__Oxf432d[0x91]}`)}}; await Promise[__Oxf432d[0x8b]](_0x5190x28)}}; await $[__Oxf432d[0x92]]()}})()[__Oxf432d[0x85]]((_0x5190x27)=>{return console[__Oxf432d[0x84]](_0x5190x27)})[__Oxf432d[0x83]](()=>{return $[__Oxf432d[0x82]]()});async function sc(){try{let _0x5190x10=`${__Oxf432d[0x93]}`;let _0x5190x11=`${__Oxf432d[0x4]}`;let _0x5190x12=populateUrlObject(_0x5190x10,_0x5190x11); await httpRequest(__Oxf432d[0x1b],_0x5190x12);let _0x5190x13=httpResult;if(!_0x5190x13){return};$[__Oxf432d[0xe]](`${__Oxf432d[0x4]}${_0x5190x13[__Oxf432d[0x78]]}${__Oxf432d[0x94]}${_0x5190x13[__Oxf432d[0x95]]}${__Oxf432d[0x96]}${_0x5190x13[__Oxf432d[0x97]]}${__Oxf432d[0x4]}`);var _0x5190x26=_0x5190x13[__Oxf432d[0x78]]}catch(e){}finally{return Promise[__Oxf432d[0x20]](1)}}async function checkEnv(){if(userCookie){let _0x5190x2e=envSplitor[0x0];for(let _0x5190x2f of envSplitor){if(userCookie[__Oxf432d[0x98]](_0x5190x2f)>  -1){_0x5190x2e= _0x5190x2f;break}};for(let _0x5190x30 of userCookie[__Oxf432d[0x99]](_0x5190x2e)){if(_0x5190x30){userList[__Oxf432d[0x8a]]( new UserInfo(_0x5190x30))}};userCount= userList[__Oxf432d[0x6b]]}else {console[__Oxf432d[0x84]](__Oxf432d[0x9a]);return};console[__Oxf432d[0x84]](`${__Oxf432d[0x9b]}${userCount}${__Oxf432d[0x9c]}`);return true}function populateUrlObject(_0x5190x10,_0x5190x11= __Oxf432d[0x4]){let _0x5190x32=_0x5190x10[__Oxf432d[0x7a]](__Oxf432d[0x9d],__Oxf432d[0x32])[__Oxf432d[0x99]](__Oxf432d[0x32])[0x1];let _0x5190x12={url:_0x5190x10,headers:{'\x48\x6F\x73\x74':_0x5190x32,'\x55\x73\x65\x72\x2D\x41\x67\x65\x6E\x74':defaultUA},timeout:5000};if(_0x5190x11){_0x5190x12[__Oxf432d[0x9e]]= _0x5190x11;_0x5190x12[__Oxf432d[0xa0]][__Oxf432d[0x9f]]= __Oxf432d[0xa1]};return _0x5190x12}async function httpRequest(_0x5190x34,_0x5190x10){httpResult= null,httpReq= null,httpResp= null;return  new Promise((_0x5190x35)=>{$[__Oxf432d[0xa6]](_0x5190x34,_0x5190x10,async (_0x5190x36,_0x5190x37,_0x5190x38)=>{try{httpReq= _0x5190x37;httpResp= _0x5190x38;if(_0x5190x36){console[__Oxf432d[0x84]](`${__Oxf432d[0x4]}${_0x5190x34}${__Oxf432d[0xa2]}`);console[__Oxf432d[0x84]](JSON[__Oxf432d[0xa3]](_0x5190x36))}else {if(_0x5190x38[__Oxf432d[0x9e]]){if( typeof _0x5190x38[__Oxf432d[0x9e]]== __Oxf432d[0xa4]){httpResult= _0x5190x38[__Oxf432d[0x9e]]}else {try{httpResult= JSON[__Oxf432d[0xa5]](_0x5190x38[__Oxf432d[0x9e]])}catch(e){httpResult= _0x5190x38[__Oxf432d[0x9e]]}}}}}catch(e){console[__Oxf432d[0x84]](e)}finally{_0x5190x35()}})})}function local_hours(){let _0x5190x3a= new Date();let h=_0x5190x3a[__Oxf432d[0xa7]]();return h}function randomArr(_0x5190x3c){return _0x5190x3c[parseInt(Math[__Oxf432d[0xa8]]()* _0x5190x3c[__Oxf432d[0x6b]],10)]}(function(_0x5190x21,_0x5190x3d,_0x5190x3e,_0x5190x3f,_0x5190x40,_0x5190x41){_0x5190x41= __Oxf432d[0x86];_0x5190x3f= function(_0x5190x42){if( typeof alert!== _0x5190x41){alert(_0x5190x42)};if( typeof console!== _0x5190x41){console[__Oxf432d[0x84]](_0x5190x42)}};_0x5190x3e= function(_0x5190x43,_0x5190x21){return _0x5190x43+ _0x5190x21};_0x5190x40= _0x5190x3e(__Oxf432d[0xa9],_0x5190x3e(_0x5190x3e(__Oxf432d[0xaa],__Oxf432d[0xab]),__Oxf432d[0xac]));try{_0x5190x21= __encode;if(!( typeof _0x5190x21!== _0x5190x41&& _0x5190x21=== _0x5190x3e(__Oxf432d[0xad],__Oxf432d[0xae]))){_0x5190x3f(_0x5190x40)}}catch(e){_0x5190x3f(_0x5190x40)}})({})


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