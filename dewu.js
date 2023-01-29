/*
目标:  得物App 抓包心愿森林heders里的x-auth-token 不要值前面的Bearer

格式：export dewu="token=eyJhxxxxxxxx"  多账号换行隔开

cron 32 5 8,12,18,22 * * ?

频道：https://t.me/+O6-uZI3t6uhhMmU1
*/

const $ = new Env("得物心愿森林");
let envSplitor = ['\n']  //多账号隔开方式，默认换行可自定义
let dwHelp = 2
///////////////////////////////维护参数自行更换//////////////////////////////////
let deviceTrait = 'V1824A'                   //设备型号
let deviceId = '1212121212121212'         //设备标识
let appVersion = '5.5.1'                     //软件版本
let defaultUA = 'Mozilla/5.0 (Linux; Android 10; V1824A Build/QP1A.190711.020; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/74.0.3729.186 Mobile Safari/537.36/duapp/5.5.1(android;10)'                    //默认UA
let helpcode = '%F0%9F%99%88%F0%9F%98%B8%F0%9F%99%89%F0%9F%92%A2%F0%9F%92%A6%F0%9F%91%A7%F0%9F%8C%B9'
//需要助力账号的互助码  搜索keyword=后面的值 #Referer、url和 响应体 里都有，若果是emoji需要找没转码的，或者自行转码后再放入脚本

var __encode ='jsjiami.com',_a={}, _0xb483=["\x5F\x64\x65\x63\x6F\x64\x65","\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x73\x6F\x6A\x73\x6F\x6E\x2E\x63\x6F\x6D\x2F\x6A\x61\x76\x61\x73\x63\x72\x69\x70\x74\x6F\x62\x66\x75\x73\x63\x61\x74\x6F\x72\x2E\x68\x74\x6D\x6C"];(function(_0xd642x1){_0xd642x1[_0xb483[0]]= _0xb483[1]})(_a);var __Oxf432b=["\x69\x73\x4E\x6F\x64\x65","\x64\x65\x77\x75","\x65\x6E\x76","\x67\x65\x74\x64\x61\x74\x61","","\x69\x6E\x64\x65\x78","\x6E\x61\x6D\x65","\x76\x61\x6C\x69\x64","\x63\x61\x6E\x52\x65\x61\x64","\x70\x61\x72\x61\x6D","\x73\x74\x72\x32\x6A\x73\x6F\x6E","\x63\x6B\x56\x61\x6C\x69\x64","\u8D26\u53F7\x5B","\x5D\x43\x4B\u683C\u5F0F\u9519\u8BEF","\x6C\x6F\x67\x41\x6E\x64\x4E\x6F\x74\x69\x66\x79","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x70\x70\x2E\x64\x65\x77\x75\x2E\x63\x6F\x6D\x2F\x68\x61\x63\x6B\x69\x6E\x67\x2D\x74\x72\x65\x65\x2F\x76\x31\x2F\x75\x73\x65\x72\x2F\x74\x61\x72\x67\x65\x74\x2F\x69\x6E\x66\x6F","\x42\x65\x61\x72\x65\x72\x20","\x74\x6F\x6B\x65\x6E","\x67\x65\x74","\x63\x6F\x64\x65","\x5D\u76EE\u6807\x3A","\x64\x61\x74\x61","\x20\u5F53\u524D\u7B49\u7EA7\x3A\x4C\x76","\x6C\x65\x76\x65\x6C","\x5D\u67E5\u8BE2\u8D26\u6237\u5931\u8D25\uFF0C\u53D8\u91CF\u5931\u6548\u6216\u68C0\u67E5\u53D8\u91CF\u683C\u5F0F","\x72\x65\x73\x6F\x6C\x76\x65","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x70\x70\x2E\x64\x65\x77\x75\x2E\x63\x6F\x6D\x2F\x68\x61\x63\x6B\x69\x6E\x67\x2D\x74\x72\x65\x65\x2F\x76\x31\x2F\x74\x61\x73\x6B\x2F\x6C\x69\x73\x74","\x74\x61\x73\x6B\x4C\x69\x73\x74","\x69\x73\x43\x6F\x6D\x70\x6C\x65\x74\x65","\x69\x73\x52\x65\x63\x65\x69\x76\x65\x52\x65\x77\x61\x72\x64","\x5D","\x74\x61\x73\x6B\x4E\x61\x6D\x65","\x20\x2D\x2D\x20\u53EF\u9886\u53D6","\x74\x61\x73\x6B\x6C\x64","\x74\x61\x73\x6B\x49\x64","\x77\x61\x69\x74","\x63\x6C\x61\x73\x73\x69\x66\x79","\x63\x6F\x6D\x70\x6C\x65\x74\x65\x46\x6C\x61\x67","\x72\x65\x63\x65\x69\x76\x65","\x20\x2D\x2D\x20\u672A\u5B8C\u6210","\x74\x61\x73\x6B\x54\x79\x70\x65","\x5D\u53BB\u5B8C\u6210\x2D\x2D\x3E\x3E\x20","\x63\x6F\x6D\x6D\x69\x74","\x20\x2D\x2D\x20\u5DF2\u5B8C\u6210","\x65\x78\x74\x72\x61\x41\x77\x61\x72\x64\x4C\x69\x73\x74","\x73\x74\x61\x74\x75\x73","\x63\x6F\x6E\x64\x69\x74\x69\x6F\x6E","\x65\x78\x74\x72\x61","\x6C\x6F\x67","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x70\x70\x2E\x64\x65\x77\x75\x2E\x63\x6F\x6D\x2F\x68\x61\x63\x6B\x69\x6E\x67\x2D\x74\x61\x73\x6B\x2F\x76\x31\x2F\x74\x61\x73\x6B\x2F\x63\x6F\x6D\x6D\x69\x74","\x7B\x22\x74\x61\x73\x6B\x54\x79\x70\x65\x22\x3A\x22","\x22\x2C\x22\x74\x61\x73\x6B\x49\x64\x22\x3A\x22","\x22\x7D","\x70\x6F\x73\x74","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x70\x70\x2E\x64\x65\x77\x75\x2E\x63\x6F\x6D\x2F\x68\x61\x63\x6B\x69\x6E\x67\x2D\x74\x72\x65\x65\x2F\x76\x31\x2F\x74\x72\x65\x65\x2F\x67\x65\x74\x5F\x74\x72\x65\x65\x5F\x69\x6E\x66\x6F","\x6C\x65\x76\x65\x6C\x52\x65\x77\x61\x72\x64","\x67\x65\x74\x5F\x6C\x65\x76\x65\x6C\x5F\x72\x65\x77\x61\x72\x64","\x5D\u7B49\u7EA7\u5956\u52B1\u5DF2\u9886\u53D6","\x6E\x65\x78\x74\x57\x61\x74\x65\x72\x69\x6E\x67\x54\x69\x6D\x65\x73","\x67\x65\x74\x5F\x77\x61\x74\x65\x72\x69\x6E\x67\x5F\x72\x65\x77\x61\x72\x64","\x6E\x75\x6D","\x66","\x77\x61\x74\x65\x72\x69\x6E\x67","\x5D\u6C34\u6EF4\u503C\u4E0D\u8DB3\uFF0C\u653E\u5F03\u6D47\u6C34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x70\x70\x2E\x64\x65\x77\x75\x2E\x63\x6F\x6D\x2F\x68\x61\x63\x6B\x69\x6E\x67\x2D\x74\x72\x65\x65\x2F\x76\x31\x2F\x74\x72\x65\x65\x2F\x67\x65\x74\x5F\x77\x61\x74\x65\x72\x69\x6E\x67\x5F\x72\x65\x77\x61\x72\x64","\x7B\x22\x70\x72\x6F\x6D\x6F\x74\x65\x22\x3A\x22\x22\x7D","\x5D\u9886\u53D6\u6D47\u6C34\u5956\u52B1\u83B7\u5F97","\x72\x65\x77\x61\x72\x64\x4E\x75\x6D","\x63\x75\x72\x72\x65\x6E\x74\x57\x61\x74\x65\x72\x69\x6E\x67\x52\x65\x77\x61\x72\x64","\u6C34\u6EF4\u503C","\x5D\u4E3A\u4FDD\u6301\u5956\u52B1\u6700\u5927\u5316\uFF0C\u518D\u6B21\u6267\u884C","\x67\x65\x74\x5F\x74\x72\x65\x65\x5F\x69\x6E\x66\x6F","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x70\x70\x2E\x64\x65\x77\x75\x2E\x63\x6F\x6D\x2F\x68\x61\x63\x6B\x69\x6E\x67\x2D\x74\x72\x65\x65\x2F\x76\x31\x2F\x74\x72\x65\x65\x2F\x67\x65\x74\x5F\x6C\x65\x76\x65\x6C\x5F\x72\x65\x77\x61\x72\x64","\x5D\u9886\u53D6\u7B49\u7EA7\u5956\u52B1\u83B7\u5F97","\x63\x75\x72\x72\x65\x6E\x74\x4C\x65\x76\x65\x6C\x52\x65\x77\x61\x72\x64","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x70\x70\x2E\x64\x65\x77\x75\x2E\x63\x6F\x6D\x2F\x68\x61\x63\x6B\x69\x6E\x67\x2D\x74\x72\x65\x65\x2F\x76\x31\x2F\x75\x73\x65\x72\x2F\x69\x6E\x69\x74","\x7B\x22\x6B\x65\x79\x77\x6F\x72\x64\x22\x3A\x22\x22\x7D","\x6D","\x64\x72\x6F\x70\x6C\x65\x74","\x6E","\x77\x61\x74\x65\x72\x69\x6E\x67\x44\x72\x6F\x70\x6C\x65\x74","\x5D\u5269\u4F59\u6C34\u6EF4\x3A","\x20\u53EF\u4EE5\u6D47\u6C34","\u6B21","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x70\x70\x2E\x64\x65\x77\x75\x2E\x63\x6F\x6D\x2F\x68\x61\x63\x6B\x69\x6E\x67\x2D\x74\x72\x65\x65\x2F\x76\x31\x2F\x74\x72\x65\x65\x2F\x77\x61\x74\x65\x72\x69\x6E\x67","\x7B\x7D","\x5D\u7B2C","\u6B21\u6D47\u6C34\uFF01\u5F53\u524D\u7B49\u7EA7\x3A","\x20\u8DDD\u79BB\u4E0B\u4E2A\u7B49\u7EA7\u8FD8\u5DEE","\x63\x75\x72\x72\x65\x6E\x74\x4C\x65\x76\x65\x6C\x4E\x65\x65\x64\x57\x61\x74\x65\x72\x69\x6E\x67\x44\x72\x6F\x70\x6C\x65\x74","\x75\x73\x65\x72\x57\x61\x74\x65\x72\x69\x6E\x67\x44\x72\x6F\x70\x6C\x65\x74","\x6D\x73\x67","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x70\x70\x2E\x64\x65\x77\x75\x2E\x63\x6F\x6D\x2F\x68\x61\x63\x6B\x69\x6E\x67\x2D\x74\x72\x65\x65\x2F\x76\x31\x2F\x73\x69\x67\x6E\x2F\x6C\x69\x73\x74","\x5D\u65B0\u624B\u6253\u5361\u4EFB\u52A1\u5DF2\u5B8C\u6210","\x63\x75\x72\x72\x65\x6E\x74\x44\x61\x79","\u5929\x20\x2D\x2D\x3E\x20\u4ECA\u65E5\u8FD8\u672A\u6253\u5361","\x73\x69\x67\x6E\x5F\x69\x6E","\x5D\u65B0\u624B\u6253\u5361\u4EFB\u52A1\u4ECA\u65E5\u5DF2\u5B8C\u6210","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x70\x70\x2E\x64\x65\x77\x75\x2E\x63\x6F\x6D\x2F\x68\x61\x63\x6B\x69\x6E\x67\x2D\x74\x72\x65\x65\x2F\x76\x31\x2F\x73\x69\x67\x6E\x2F\x73\x69\x67\x6E\x5F\x69\x6E","\x5D\u6253\u5361\u83B7\u5F97","\x4E\x75\x6D","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x70\x70\x2E\x64\x65\x77\x75\x2E\x63\x6F\x6D\x2F\x68\x61\x63\x6B\x69\x6E\x67\x2D\x74\x72\x65\x65\x2F\x76\x31\x2F\x74\x61\x73\x6B\x2F\x65\x78\x74\x72\x61","\x7B\x22\x63\x6F\x6E\x64\x69\x74\x69\x6F\x6E\x22\x3A","\x7D","\x5D\u4EFB\u52A1\u8FBE\u6807\u5956\u52B1\u83B7\u5F97\x3A","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x70\x70\x2E\x64\x65\x77\x75\x2E\x63\x6F\x6D\x2F\x68\x61\x63\x6B\x69\x6E\x67\x2D\x74\x72\x65\x65\x2F\x76\x31\x2F\x74\x61\x73\x6B\x2F\x72\x65\x63\x65\x69\x76\x65","\x7B\x22\x63\x6C\x61\x73\x73\x69\x66\x79\x22\x3A","\x2C\x22\x74\x61\x73\x6B\x49\x64\x22\x3A\x22","\x22\x2C\x22\x63\x6F\x6D\x70\x6C\x65\x74\x65\x46\x6C\x61\x67\x22\x3A","\x5D\u83B7\u5F97\u6C34\u6EF4\u503C\x3A","\x5D\u53BB\u9886\u53D6\x2D\x2D\x3E\x3E","\uFF1A","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x70\x70\x2E\x64\x65\x77\x75\x2E\x63\x6F\x6D\x2F\x68\x61\x63\x6B\x69\x6E\x67\x2D\x74\x72\x65\x65\x2F\x76\x31\x2F\x64\x72\x6F\x70\x6C\x65\x74\x2D\x65\x78\x74\x72\x61\x2F\x72\x65\x63\x65\x69\x76\x65","\x5D\u96C6\u6C34\u5668\x3A\u83B7\u5F97\u6C34\u6EF4\u503C\x3A","\x74\x6F\x74\x61\x6C\x44\x72\x6F\x70\x6C\x65\x74","\x5D\u6C14\u6CE1\u5956\u52B1\x3A","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x70\x70\x2E\x64\x65\x77\x75\x2E\x63\x6F\x6D\x2F\x68\x61\x63\x6B\x69\x6E\x67\x2D\x74\x72\x65\x65\x2F\x76\x31\x2F\x64\x72\x6F\x70\x6C\x65\x74\x2F\x67\x65\x74\x5F\x67\x65\x6E\x65\x72\x61\x74\x65\x5F\x64\x72\x6F\x70\x6C\x65\x74","\x5D\u96C6\u6C34\u5668\x3A","\x7B\x22\x6B\x65\x79\x77\x6F\x72\x64\x22\x3A\x22","\x5D\u83B7\u53D6\u4E92\u52A9\u7801\u4E3A\x3A","\x69\x6E\x76\x69\x74\x65\x52\x65\x73","\x64\x6F\x6E\x65","\x66\x69\x6E\x61\x6C\x6C\x79","\x63\x61\x74\x63\x68","\x75\x6E\x64\x65\x66\x69\x6E\x65\x64","\x66\x69\x6C\x74\x65\x72","\x6C\x65\x6E\x67\x74\x68","\x0A\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x20\u8D26\u53F7\u68C0\u6D4B\x20\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D","\x6D\x79","\x70\x75\x73\x68","\x61\x6C\x6C","\x0A\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x20\u6BCF\u65E5\u4EFB\u52A1\x20\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D","\x6C\x69\x73\x74","\x0A\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x20\u4E92\u52A9\u4EFB\u52A1\x20\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D","\x68\x65\x6C\x70","\x0A\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x20\u5F69\u86CB\u4EFB\u52A1\x20\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D","\x72\x65\x63\x65\x69\x76\x65\x31","\x72\x65\x63\x65\x69\x76\x65\x32","\x69\x6E\x69\x74","\x6C\x69\x73\x74\x37","\x73\x68\x6F\x77\x6D\x73\x67","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x76\x31\x2E\x6A\x69\x6E\x72\x69\x73\x68\x69\x63\x69\x2E\x63\x6F\x6D\x2F\x61\x6C\x6C\x2E\x6A\x73\x6F\x6E","\x63\x6F\x6E\x74\x65\x6E\x74","\x20\x20\u2014\u2014\u2014\u2014\u300A","\x6F\x72\x69\x67\x69\x6E","\u300B","\x61\x75\x74\x68\x6F\x72","\x69\x6E\x64\x65\x78\x4F\x66","\x73\x70\x6C\x69\x74","\x0A\u274C\u672A\u627E\u5230\x43\x4B\x20\u8BF7\u9605\u8BFB\u811A\u672C\u8BF4\u660E","\u5171\u627E\u5230","\u4E2A\u8D26\u53F7","\x2F","\x2F\x2F","\x72\x65\x70\x6C\x61\x63\x65","\x62\x6F\x64\x79","\x63\x6F\x6E\x74\x65\x6E\x74\x2D\x74\x79\x70\x65","\x68\x65\x61\x64\x65\x72\x73","\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x6A\x73\x6F\x6E\x3B\x63\x68\x61\x72\x73\x65\x74\x3D\x55\x54\x46\x2D\x38","\x43\x6F\x6E\x74\x65\x6E\x74\x2D\x4C\x65\x6E\x67\x74\x68","\u8BF7\u6C42\u5931\u8D25","\x73\x74\x72\x69\x6E\x67\x69\x66\x79","\x6F\x62\x6A\x65\x63\x74","\x70\x61\x72\x73\x65","\x73\x65\x6E\x64","\u5220\u9664","\u7248\u672C\u53F7\uFF0C\x6A\x73\u4F1A\u5B9A","\u671F\u5F39\u7A97\uFF0C","\u8FD8\u8BF7\u652F\u6301\u6211\u4EEC\u7684\u5DE5\u4F5C","\x6A\x73\x6A\x69\x61","\x6D\x69\x2E\x63\x6F\x6D"];let httpResult,httpReq,httpResp;let userCookie=($[__Oxf432b[0x0]]()?process[__Oxf432b[0x2]][__Oxf432b[0x1]]:$[__Oxf432b[0x3]](__Oxf432b[0x1]))|| __Oxf432b[0x4];let userList=[];let userIdx=0;let userCount=0;class UserInfo{constructor(_0x27f3x9){this[__Oxf432b[0x5]]=  ++userIdx;this[__Oxf432b[0x6]]= this[__Oxf432b[0x5]];this[__Oxf432b[0x7]]= false;this[__Oxf432b[0x8]]= false;try{this[__Oxf432b[0x9]]= $[__Oxf432b[0xa]](_0x27f3x9);this[__Oxf432b[0xb]]= true}catch(e){this[__Oxf432b[0xb]]= false;$[__Oxf432b[0xe]](`${__Oxf432b[0xc]}${this[__Oxf432b[0x5]]}${__Oxf432b[0xd]}`)}}async my(){try{let _0x27f3xb=`${__Oxf432b[0xf]}`;let _0x27f3xc=`${__Oxf432b[0x4]}`;let _0x27f3xd=`${__Oxf432b[0x10]}${this[__Oxf432b[0x9]][__Oxf432b[0x11]]}${__Oxf432b[0x4]}`;let _0x27f3xe=populateUrlObject(_0x27f3xb,_0x27f3xd,_0x27f3xc); await httpRequest(__Oxf432b[0x12],_0x27f3xe);let _0x27f3xf=httpResult;if(!_0x27f3xf){return};if(_0x27f3xf[__Oxf432b[0x13]]== 200){this[__Oxf432b[0x7]]= true;this[__Oxf432b[0x8]]= true;$[__Oxf432b[0xe]](`${__Oxf432b[0xc]}${this[__Oxf432b[0x6]]}${__Oxf432b[0x14]}${_0x27f3xf[__Oxf432b[0x15]][__Oxf432b[0x6]]}${__Oxf432b[0x16]}${_0x27f3xf[__Oxf432b[0x15]][__Oxf432b[0x17]]}${__Oxf432b[0x4]}`)}else {$[__Oxf432b[0xe]](`${__Oxf432b[0xc]}${this[__Oxf432b[0x6]]}${__Oxf432b[0x18]}`)}}catch(e){}finally{return Promise[__Oxf432b[0x19]](1)}}async list(){try{let _0x27f3xb=`${__Oxf432b[0x1a]}`;let _0x27f3xc=`${__Oxf432b[0x4]}`;let _0x27f3xd=`${__Oxf432b[0x10]}${this[__Oxf432b[0x9]][__Oxf432b[0x11]]}${__Oxf432b[0x4]}`;let _0x27f3xe=populateUrlObject(_0x27f3xb,_0x27f3xd,_0x27f3xc); await httpRequest(__Oxf432b[0x12],_0x27f3xe);let _0x27f3xf=httpResult;if(!_0x27f3xf){return};let _0x27f3x11=_0x27f3xf[__Oxf432b[0x15]][__Oxf432b[0x1b]]|| [];for(let _0x27f3x12 of _0x27f3x11){if(_0x27f3x12[__Oxf432b[0x1c]]== true& _0x27f3x12[__Oxf432b[0x1d]]== false){$[__Oxf432b[0xe]](`${__Oxf432b[0xc]}${this[__Oxf432b[0x6]]}${__Oxf432b[0x1e]}${_0x27f3x12[__Oxf432b[0x1f]]}${__Oxf432b[0x20]}`);this[__Oxf432b[0x21]]= _0x27f3x12[__Oxf432b[0x22]]; await $[__Oxf432b[0x23]](2000);this[__Oxf432b[0x24]]= _0x27f3x12[__Oxf432b[0x24]];this[__Oxf432b[0x25]]= _0x27f3x12[__Oxf432b[0x25]];this[__Oxf432b[0x22]]= _0x27f3x12[__Oxf432b[0x22]];this[__Oxf432b[0x1f]]= _0x27f3x12[__Oxf432b[0x1f]]; await this[__Oxf432b[0x26]]()}else {if(_0x27f3x12[__Oxf432b[0x1c]]== false& _0x27f3x12[__Oxf432b[0x1d]]== false){$[__Oxf432b[0xe]](`${__Oxf432b[0xc]}${this[__Oxf432b[0x6]]}${__Oxf432b[0x1e]}${_0x27f3x12[__Oxf432b[0x1f]]}${__Oxf432b[0x27]}`);this[__Oxf432b[0x28]]= _0x27f3x12[__Oxf432b[0x28]];this[__Oxf432b[0x22]]= _0x27f3x12[__Oxf432b[0x22]];this[__Oxf432b[0x1f]]= _0x27f3x12[__Oxf432b[0x1f]]; await $[__Oxf432b[0x23]](2000);$[__Oxf432b[0xe]](`${__Oxf432b[0xc]}${this[__Oxf432b[0x6]]}${__Oxf432b[0x29]}${this[__Oxf432b[0x1f]]}${__Oxf432b[0x4]}`); await this[__Oxf432b[0x2a]]()}};if(_0x27f3x12[__Oxf432b[0x1d]]== true& _0x27f3x12[__Oxf432b[0x1c]]== true){$[__Oxf432b[0xe]](`${__Oxf432b[0xc]}${this[__Oxf432b[0x6]]}${__Oxf432b[0x1e]}${_0x27f3x12[__Oxf432b[0x1f]]}${__Oxf432b[0x2b]}`)}};let _0x27f3x13=_0x27f3xf[__Oxf432b[0x15]][__Oxf432b[0x2c]]|| [];for(let _0x27f3x12 of _0x27f3x13){if(_0x27f3x12[__Oxf432b[0x2d]]== 1){this[__Oxf432b[0x2e]]= _0x27f3x12[__Oxf432b[0x2e]]; await $[__Oxf432b[0x23]](2000); await this[__Oxf432b[0x2f]]()}}}catch(e){console[__Oxf432b[0x30]](e)}finally{return Promise[__Oxf432b[0x19]](1)}}async commit(){try{let _0x27f3xb=`${__Oxf432b[0x31]}`;let _0x27f3xc=`${__Oxf432b[0x32]}${this[__Oxf432b[0x28]]}${__Oxf432b[0x33]}${this[__Oxf432b[0x22]]}${__Oxf432b[0x34]}`;let _0x27f3xd=`${__Oxf432b[0x10]}${this[__Oxf432b[0x9]][__Oxf432b[0x11]]}${__Oxf432b[0x4]}`;let _0x27f3xe=populateUrlObject(_0x27f3xb,_0x27f3xd,_0x27f3xc); await httpRequest(__Oxf432b[0x35],_0x27f3xe);let _0x27f3xf=httpResult;if(!_0x27f3xf){return}}catch(e){}finally{return Promise[__Oxf432b[0x19]](1)}}async get_tree_info(){try{let _0x27f3xb=`${__Oxf432b[0x36]}`;let _0x27f3xc=`${__Oxf432b[0x4]}`;let _0x27f3xd=`${__Oxf432b[0x10]}${this[__Oxf432b[0x9]][__Oxf432b[0x11]]}${__Oxf432b[0x4]}`;let _0x27f3xe=populateUrlObject(_0x27f3xb,_0x27f3xd,_0x27f3xc); await httpRequest(__Oxf432b[0x12],_0x27f3xe);let _0x27f3xf=httpResult;if(!_0x27f3xf){return};if(_0x27f3xf[__Oxf432b[0x15]][__Oxf432b[0x37]][__Oxf432b[0x1c]]== true){ await this[__Oxf432b[0x38]]()}else {$[__Oxf432b[0xe]](`${__Oxf432b[0xc]}${this[__Oxf432b[0x6]]}${__Oxf432b[0x39]}`)};if(_0x27f3xf[__Oxf432b[0x15]][__Oxf432b[0x3a]]== 0){ await this[__Oxf432b[0x3b]]()}else {if(`${__Oxf432b[0x4]}${this[__Oxf432b[0x3c]]}${__Oxf432b[0x4]}`> 0){for(let _0x27f3x16=0;_0x27f3x16< `${__Oxf432b[0x4]}${this[__Oxf432b[0x3c]]}${__Oxf432b[0x4]}`;_0x27f3x16++){this[__Oxf432b[0x3d]]= _0x27f3x16+ 1; await this[__Oxf432b[0x3e]]()}}else {$[__Oxf432b[0xe]](`${__Oxf432b[0xc]}${this[__Oxf432b[0x6]]}${__Oxf432b[0x3f]}`)}}}catch(e){}finally{return Promise[__Oxf432b[0x19]](1)}}async get_watering_reward(){try{let _0x27f3xb=`${__Oxf432b[0x40]}`;let _0x27f3xc=`${__Oxf432b[0x41]}`;let _0x27f3xd=`${__Oxf432b[0x10]}${this[__Oxf432b[0x9]][__Oxf432b[0x11]]}${__Oxf432b[0x4]}`;let _0x27f3xe=populateUrlObject(_0x27f3xb,_0x27f3xd,_0x27f3xc); await httpRequest(__Oxf432b[0x35],_0x27f3xe);let _0x27f3xf=httpResult;if(!_0x27f3xf){return};$[__Oxf432b[0xe]](`${__Oxf432b[0xc]}${this[__Oxf432b[0x6]]}${__Oxf432b[0x42]}${_0x27f3xf[__Oxf432b[0x15]][__Oxf432b[0x44]][__Oxf432b[0x43]]}${__Oxf432b[0x45]}`);$[__Oxf432b[0xe]](`${__Oxf432b[0xc]}${this[__Oxf432b[0x6]]}${__Oxf432b[0x46]}`); await $[__Oxf432b[0x23]](3000); await this[__Oxf432b[0x47]]()}catch(e){}finally{return Promise[__Oxf432b[0x19]](1)}}async get_level_reward(){try{let _0x27f3xb=`${__Oxf432b[0x48]}`;let _0x27f3xc=`${__Oxf432b[0x41]}`;let _0x27f3xd=`${__Oxf432b[0x10]}${this[__Oxf432b[0x9]][__Oxf432b[0x11]]}${__Oxf432b[0x4]}`;let _0x27f3xe=populateUrlObject(_0x27f3xb,_0x27f3xd,_0x27f3xc); await httpRequest(__Oxf432b[0x35],_0x27f3xe);let _0x27f3xf=httpResult;if(!_0x27f3xf){return};$[__Oxf432b[0xe]](`${__Oxf432b[0xc]}${this[__Oxf432b[0x6]]}${__Oxf432b[0x49]}${_0x27f3xf[__Oxf432b[0x15]][__Oxf432b[0x4a]][__Oxf432b[0x43]]}${__Oxf432b[0x45]}`);$[__Oxf432b[0xe]](`${__Oxf432b[0xc]}${this[__Oxf432b[0x6]]}${__Oxf432b[0x46]}`); await $[__Oxf432b[0x23]](3000); await this[__Oxf432b[0x47]]()}catch(e){}finally{return Promise[__Oxf432b[0x19]](1)}}async init(){try{let _0x27f3xb=`${__Oxf432b[0x4b]}`;let _0x27f3xc=`${__Oxf432b[0x4c]}`;let _0x27f3xd=`${__Oxf432b[0x10]}${this[__Oxf432b[0x9]][__Oxf432b[0x11]]}${__Oxf432b[0x4]}`;let _0x27f3xe=populateUrlObject(_0x27f3xb,_0x27f3xd,_0x27f3xc); await httpRequest(__Oxf432b[0x35],_0x27f3xe);let _0x27f3xf=httpResult;if(!_0x27f3xf){return};this[__Oxf432b[0x4d]]= _0x27f3xf[__Oxf432b[0x15]][__Oxf432b[0x4e]];this[__Oxf432b[0x4f]]= _0x27f3xf[__Oxf432b[0x15]][__Oxf432b[0x50]];this[__Oxf432b[0x3c]]= (parseInt(this[__Oxf432b[0x4d]]/ this[__Oxf432b[0x4f]]));$[__Oxf432b[0xe]](`${__Oxf432b[0xc]}${this[__Oxf432b[0x6]]}${__Oxf432b[0x51]}${_0x27f3xf[__Oxf432b[0x15]][__Oxf432b[0x4e]]}${__Oxf432b[0x52]}${this[__Oxf432b[0x3c]]}${__Oxf432b[0x53]}`)}catch(e){}finally{return Promise[__Oxf432b[0x19]](1)}}async watering(){try{let _0x27f3xb=`${__Oxf432b[0x54]}`;let _0x27f3xc=`${__Oxf432b[0x55]}`;let _0x27f3xd=`${__Oxf432b[0x10]}${this[__Oxf432b[0x9]][__Oxf432b[0x11]]}${__Oxf432b[0x4]}`;let _0x27f3xe=populateUrlObject(_0x27f3xb,_0x27f3xd,_0x27f3xc); await httpRequest(__Oxf432b[0x35],_0x27f3xe);let _0x27f3xf=httpResult;if(!_0x27f3xf){return};if(_0x27f3xf[__Oxf432b[0x13]]== 200){$[__Oxf432b[0xe]](`${__Oxf432b[0xc]}${this[__Oxf432b[0x6]]}${__Oxf432b[0x56]}${this[__Oxf432b[0x3d]]}${__Oxf432b[0x57]}${_0x27f3xf[__Oxf432b[0x15]][__Oxf432b[0x17]]}${__Oxf432b[0x58]}${_0x27f3xf[__Oxf432b[0x15]][__Oxf432b[0x59]]- _0x27f3xf[__Oxf432b[0x15]][__Oxf432b[0x5a]]}${__Oxf432b[0x4]}`)}else {$[__Oxf432b[0xe]](`${__Oxf432b[0xc]}${this[__Oxf432b[0x6]]}${__Oxf432b[0x1e]}${_0x27f3xf[__Oxf432b[0x5b]]}${__Oxf432b[0x4]}`)}}catch(e){}finally{return Promise[__Oxf432b[0x19]](1)}}async list7(){try{let _0x27f3xb=`${__Oxf432b[0x5c]}`;let _0x27f3xc=`${__Oxf432b[0x4]}`;let _0x27f3xd=`${__Oxf432b[0x10]}${this[__Oxf432b[0x9]][__Oxf432b[0x11]]}${__Oxf432b[0x4]}`;let _0x27f3xe=populateUrlObject(_0x27f3xb,_0x27f3xd,_0x27f3xc); await httpRequest(__Oxf432b[0x12],_0x27f3xe);let _0x27f3xf=httpResult;if(!_0x27f3xf){return};if(_0x27f3xf[__Oxf432b[0x15]][__Oxf432b[0x2d]]== 1){$[__Oxf432b[0xe]](`${__Oxf432b[0xc]}${this[__Oxf432b[0x6]]}${__Oxf432b[0x5d]}${_0x27f3xf[__Oxf432b[0x15]][__Oxf432b[0x5e]]}${__Oxf432b[0x5f]}`); await this[__Oxf432b[0x60]]()}else {$[__Oxf432b[0xe]](`${__Oxf432b[0xc]}${this[__Oxf432b[0x6]]}${__Oxf432b[0x61]}`)}}catch(e){}finally{return Promise[__Oxf432b[0x19]](1)}}async sign_in(){try{let _0x27f3xb=`${__Oxf432b[0x62]}`;let _0x27f3xc=`${__Oxf432b[0x55]}`;let _0x27f3xd=`${__Oxf432b[0x10]}${this[__Oxf432b[0x9]][__Oxf432b[0x11]]}${__Oxf432b[0x4]}`;let _0x27f3xe=populateUrlObject(_0x27f3xb,_0x27f3xd,_0x27f3xc); await httpRequest(__Oxf432b[0x35],_0x27f3xe);let _0x27f3xf=httpResult;if(!_0x27f3xf){return};$[__Oxf432b[0xe]](`${__Oxf432b[0xc]}${this[__Oxf432b[0x6]]}${__Oxf432b[0x63]}${_0x27f3xf[__Oxf432b[0x15]][__Oxf432b[0x64]]}${__Oxf432b[0x45]}`)}catch(e){}finally{return Promise[__Oxf432b[0x19]](1)}}async extra(){try{let _0x27f3xb=`${__Oxf432b[0x65]}`;let _0x27f3xc=`${__Oxf432b[0x66]}${this[__Oxf432b[0x2e]]}${__Oxf432b[0x67]}`;let _0x27f3xd=`${__Oxf432b[0x10]}${this[__Oxf432b[0x9]][__Oxf432b[0x11]]}${__Oxf432b[0x4]}`;let _0x27f3xe=populateUrlObject(_0x27f3xb,_0x27f3xd,_0x27f3xc); await httpRequest(__Oxf432b[0x35],_0x27f3xe);let _0x27f3xf=httpResult;if(!_0x27f3xf){return};$[__Oxf432b[0xe]](`${__Oxf432b[0xc]}${this[__Oxf432b[0x6]]}${__Oxf432b[0x68]}${_0x27f3xf[__Oxf432b[0x15]][__Oxf432b[0x3c]]}${__Oxf432b[0x45]}`)}catch(e){}finally{return Promise[__Oxf432b[0x19]](1)}}async receive(){try{let _0x27f3xb=`${__Oxf432b[0x69]}`;let _0x27f3xc=`${__Oxf432b[0x6a]}${this[__Oxf432b[0x24]]}${__Oxf432b[0x6b]}${this[__Oxf432b[0x21]]}${__Oxf432b[0x6c]}${this[__Oxf432b[0x25]]}${__Oxf432b[0x67]}`;let _0x27f3xd=`${__Oxf432b[0x10]}${this[__Oxf432b[0x9]][__Oxf432b[0x11]]}${__Oxf432b[0x4]}`;let _0x27f3xe=populateUrlObject(_0x27f3xb,_0x27f3xd,_0x27f3xc); await httpRequest(__Oxf432b[0x35],_0x27f3xe);let _0x27f3xf=httpResult;if(!_0x27f3xf){return};if(_0x27f3xf[__Oxf432b[0x13]]== 200){$[__Oxf432b[0xe]](`${__Oxf432b[0xc]}${this[__Oxf432b[0x6]]}${__Oxf432b[0x6d]}${_0x27f3xf[__Oxf432b[0x15]][__Oxf432b[0x3c]]}${__Oxf432b[0x4]}`)}else {$[__Oxf432b[0xe]](`${__Oxf432b[0xc]}${this[__Oxf432b[0x6]]}${__Oxf432b[0x6e]}${this[__Oxf432b[0x1f]]}${__Oxf432b[0x6f]}${_0x27f3xf[__Oxf432b[0x5b]]}${__Oxf432b[0x4]}`)}}catch(e){}finally{return Promise[__Oxf432b[0x19]](1)}}async receive1(){try{let _0x27f3xb=`${__Oxf432b[0x70]}`;let _0x27f3xc=`${__Oxf432b[0x55]}`;let _0x27f3xd=`${__Oxf432b[0x10]}${this[__Oxf432b[0x9]][__Oxf432b[0x11]]}${__Oxf432b[0x4]}`;let _0x27f3xe=populateUrlObject(_0x27f3xb,_0x27f3xd,_0x27f3xc); await httpRequest(__Oxf432b[0x35],_0x27f3xe);let _0x27f3xf=httpResult;if(!_0x27f3xf){return};if(_0x27f3xf[__Oxf432b[0x13]]== 200){$[__Oxf432b[0xe]](`${__Oxf432b[0xc]}${this[__Oxf432b[0x6]]}${__Oxf432b[0x71]}${_0x27f3xf[__Oxf432b[0x15]][__Oxf432b[0x72]]}${__Oxf432b[0x4]}`)}else {$[__Oxf432b[0xe]](`${__Oxf432b[0xc]}${this[__Oxf432b[0x6]]}${__Oxf432b[0x73]}${_0x27f3xf[__Oxf432b[0x5b]]}${__Oxf432b[0x4]}`)}}catch(e){}finally{return Promise[__Oxf432b[0x19]](1)}}async receive2(){try{let _0x27f3xb=`${__Oxf432b[0x74]}`;let _0x27f3xc=`${__Oxf432b[0x55]}`;let _0x27f3xd=`${__Oxf432b[0x10]}${this[__Oxf432b[0x9]][__Oxf432b[0x11]]}${__Oxf432b[0x4]}`;let _0x27f3xe=populateUrlObject(_0x27f3xb,_0x27f3xd,_0x27f3xc); await httpRequest(__Oxf432b[0x35],_0x27f3xe);let _0x27f3xf=httpResult;if(!_0x27f3xf){return};if(_0x27f3xf[__Oxf432b[0x13]]== 200){$[__Oxf432b[0xe]](`${__Oxf432b[0xc]}${this[__Oxf432b[0x6]]}${__Oxf432b[0x71]}${_0x27f3xf[__Oxf432b[0x15]][__Oxf432b[0x4e]]}${__Oxf432b[0x4]}`)}else {$[__Oxf432b[0xe]](`${__Oxf432b[0xc]}${this[__Oxf432b[0x6]]}${__Oxf432b[0x75]}${_0x27f3xf[__Oxf432b[0x5b]]}${__Oxf432b[0x4]}`)}}catch(e){}finally{return Promise[__Oxf432b[0x19]](1)}}async help(){try{let _0x27f3xb=`${__Oxf432b[0x4b]}`;let _0x27f3xc=`${__Oxf432b[0x76]}${helpcode}${__Oxf432b[0x34]}`;let _0x27f3xd=`${__Oxf432b[0x10]}${this[__Oxf432b[0x9]][__Oxf432b[0x11]]}${__Oxf432b[0x4]}`;let _0x27f3xe=populateUrlObject(_0x27f3xb,_0x27f3xd,_0x27f3xc); await httpRequest(__Oxf432b[0x35],_0x27f3xe);let _0x27f3xf=httpResult;if(!_0x27f3xf){return};$[__Oxf432b[0xe]](`${__Oxf432b[0xc]}${this[__Oxf432b[0x6]]}${__Oxf432b[0x77]}${_0x27f3xf[__Oxf432b[0x15]][__Oxf432b[0x78]]}${__Oxf432b[0x4]}`)}catch(e){console[__Oxf432b[0x30]](e)}finally{return Promise[__Oxf432b[0x19]](1)}}};!(async ()=>{if( typeof $request!== __Oxf432b[0x7c]){}else {if(!( await checkEnv())){return}; await sc();let _0x27f3x23=[];let _0x27f3x24=userList[__Oxf432b[0x7d]]((_0x27f3x25)=>{return _0x27f3x25[__Oxf432b[0xb]]});if(_0x27f3x24[__Oxf432b[0x7e]]> 0){$[__Oxf432b[0xe]](__Oxf432b[0x7f]);_0x27f3x23= [];for(let _0x27f3x26 of _0x27f3x24){_0x27f3x23[__Oxf432b[0x81]](_0x27f3x26[__Oxf432b[0x80]]())}; await Promise[__Oxf432b[0x82]](_0x27f3x23);_0x27f3x24= _0x27f3x24[__Oxf432b[0x7d]]((_0x27f3x25)=>{return _0x27f3x25[__Oxf432b[0x7]]});if(_0x27f3x24[__Oxf432b[0x7e]]> 0){$[__Oxf432b[0xe]](__Oxf432b[0x83]);_0x27f3x23= [];for(let _0x27f3x26 of _0x27f3x24[__Oxf432b[0x7d]]((_0x27f3x25)=>{return _0x27f3x25[__Oxf432b[0x8]]})){_0x27f3x23[__Oxf432b[0x81]](_0x27f3x26[__Oxf432b[0x84]]())}; await Promise[__Oxf432b[0x82]](_0x27f3x23);$[__Oxf432b[0xe]](__Oxf432b[0x85]);_0x27f3x23= [];for(let _0x27f3x26 of _0x27f3x24[__Oxf432b[0x7d]]((_0x27f3x25)=>{return _0x27f3x25[__Oxf432b[0x8]]})){_0x27f3x23[__Oxf432b[0x81]](_0x27f3x26[__Oxf432b[0x86]]())}; await Promise[__Oxf432b[0x82]](_0x27f3x23);$[__Oxf432b[0xe]](__Oxf432b[0x87]);_0x27f3x23= [];for(let _0x27f3x26 of _0x27f3x24[__Oxf432b[0x7d]]((_0x27f3x25)=>{return _0x27f3x25[__Oxf432b[0x8]]})){_0x27f3x23[__Oxf432b[0x81]](_0x27f3x26[__Oxf432b[0x88]]()); await $[__Oxf432b[0x23]](3000);_0x27f3x23[__Oxf432b[0x81]](_0x27f3x26[__Oxf432b[0x89]]()); await $[__Oxf432b[0x23]](3000);_0x27f3x23[__Oxf432b[0x81]](_0x27f3x26[__Oxf432b[0x8a]]()); await $[__Oxf432b[0x23]](3000);_0x27f3x23[__Oxf432b[0x81]](_0x27f3x26[__Oxf432b[0x8b]]()); await $[__Oxf432b[0x23]](3000);_0x27f3x23[__Oxf432b[0x81]](_0x27f3x26[__Oxf432b[0x47]]())}; await Promise[__Oxf432b[0x82]](_0x27f3x23)}}; await $[__Oxf432b[0x8c]]()}})()[__Oxf432b[0x7b]]((_0x27f3x22)=>{return console[__Oxf432b[0x30]](_0x27f3x22)})[__Oxf432b[0x7a]](()=>{return $[__Oxf432b[0x79]]()});async function sc(){try{let _0x27f3xb=`${__Oxf432b[0x8d]}`;let _0x27f3xc=`${__Oxf432b[0x4]}`;let _0x27f3xe=populateUrlObject(_0x27f3xb,_0x27f3xc); await httpRequest(__Oxf432b[0x12],_0x27f3xe);let _0x27f3xf=httpResult;if(!_0x27f3xf){return};$[__Oxf432b[0xe]](`${__Oxf432b[0x4]}${_0x27f3xf[__Oxf432b[0x8e]]}${__Oxf432b[0x8f]}${_0x27f3xf[__Oxf432b[0x90]]}${__Oxf432b[0x91]}${_0x27f3xf[__Oxf432b[0x92]]}${__Oxf432b[0x4]}`);var _0x27f3x28=_0x27f3xf[__Oxf432b[0x8e]]}catch(e){}finally{return Promise[__Oxf432b[0x19]](1)}}async function checkEnv(){if(userCookie){let _0x27f3x2a=envSplitor[0x0];for(let _0x27f3x2b of envSplitor){if(userCookie[__Oxf432b[0x93]](_0x27f3x2b)>  -1){_0x27f3x2a= _0x27f3x2b;break}};for(let _0x27f3x2c of userCookie[__Oxf432b[0x94]](_0x27f3x2a)){if(_0x27f3x2c){userList[__Oxf432b[0x81]]( new UserInfo(_0x27f3x2c))}};userCount= userList[__Oxf432b[0x7e]]}else {console[__Oxf432b[0x30]](__Oxf432b[0x95]);return};console[__Oxf432b[0x30]](`${__Oxf432b[0x96]}${userCount}${__Oxf432b[0x97]}`);return true}function populateUrlObject(_0x27f3xb,_0x27f3xd,_0x27f3xc= __Oxf432b[0x4]){let _0x27f3x2e=_0x27f3xb[__Oxf432b[0x9a]](__Oxf432b[0x99],__Oxf432b[0x98])[__Oxf432b[0x94]](__Oxf432b[0x98])[0x1];let _0x27f3xe={url:_0x27f3xb,headers:{'\x48\x6F\x73\x74':_0x27f3x2e,'\x78\x2D\x61\x75\x74\x68\x2D\x74\x6F\x6B\x65\x6E':_0x27f3xd,'\x64\x65\x76\x69\x63\x65\x54\x72\x61\x69\x74':deviceTrait,'\x64\x65\x76\x69\x63\x65\x49\x64':deviceId,'\x75\x75\x69\x64':deviceId,'\x61\x70\x70\x56\x65\x72\x73\x69\x6F\x6E':appVersion,'\x55\x73\x65\x72\x2D\x41\x67\x65\x6E\x74':defaultUA},timeout:5000};if(_0x27f3xc){_0x27f3xe[__Oxf432b[0x9b]]= _0x27f3xc;_0x27f3xe[__Oxf432b[0x9d]][__Oxf432b[0x9c]]= __Oxf432b[0x9e];_0x27f3xe[__Oxf432b[0x9d]][__Oxf432b[0x9f]]= _0x27f3xe[__Oxf432b[0x9b]]?_0x27f3xe[__Oxf432b[0x9b]][__Oxf432b[0x7e]]:0};return _0x27f3xe}async function httpRequest(_0x27f3x30,_0x27f3xb){httpResult= null,httpReq= null,httpResp= null;return  new Promise((_0x27f3x31)=>{$[__Oxf432b[0xa4]](_0x27f3x30,_0x27f3xb,async (_0x27f3x32,_0x27f3x33,_0x27f3x34)=>{try{httpReq= _0x27f3x33;httpResp= _0x27f3x34;if(_0x27f3x32){console[__Oxf432b[0x30]](`${__Oxf432b[0x4]}${_0x27f3x30}${__Oxf432b[0xa0]}`);console[__Oxf432b[0x30]](JSON[__Oxf432b[0xa1]](_0x27f3x32))}else {if(_0x27f3x34[__Oxf432b[0x9b]]){if( typeof _0x27f3x34[__Oxf432b[0x9b]]== __Oxf432b[0xa2]){httpResult= _0x27f3x34[__Oxf432b[0x9b]]}else {try{httpResult= JSON[__Oxf432b[0xa3]](_0x27f3x34[__Oxf432b[0x9b]])}catch(e){httpResult= _0x27f3x34[__Oxf432b[0x9b]]}}}}}catch(e){console[__Oxf432b[0x30]](e)}finally{_0x27f3x31()}})})}(function(_0x27f3x16,_0x27f3x35,_0x27f3x36,_0x27f3x37,_0x27f3x38,_0x27f3x39){_0x27f3x39= __Oxf432b[0x7c];_0x27f3x37= function(_0x27f3x3a){if( typeof alert!== _0x27f3x39){alert(_0x27f3x3a)};if( typeof console!== _0x27f3x39){console[__Oxf432b[0x30]](_0x27f3x3a)}};_0x27f3x36= function(_0x27f3x3b,_0x27f3x16){return _0x27f3x3b+ _0x27f3x16};_0x27f3x38= _0x27f3x36(__Oxf432b[0xa5],_0x27f3x36(_0x27f3x36(__Oxf432b[0xa6],__Oxf432b[0xa7]),__Oxf432b[0xa8]));try{_0x27f3x16= __encode;if(!( typeof _0x27f3x16!== _0x27f3x39&& _0x27f3x16=== _0x27f3x36(__Oxf432b[0xa9],__Oxf432b[0xaa]))){_0x27f3x37(_0x27f3x38)}}catch(e){_0x27f3x37(_0x27f3x38)}})({})

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