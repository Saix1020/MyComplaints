import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router} from 'react-router-dom'

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {GetJSSDKConfig}  from './utils/APIs';
var url = window.location.href.split('#')[0];
GetJSSDKConfig(url) //TODO
    .then(data => {
        window.wx.config({
            debug: false,////生产环境需要关闭debug模式
            appId: data.appid,//appId通过微信服务号后台查看
            timestamp: data.timestamp,//生成签名的时间戳
            nonceStr: data.nonceStr,//生成签名的随机字符串
            signature: data.signature,//签名
            jsApiList: [//需要调用的JS接口列表
                'checkJsApi',//判断当前客户端版本是否支持指定JS接口
                'onMenuShareTimeline',//分享给好友
                'onMenuShareAppMessage'//分享到朋友圈
            ]
        });
        window.wx.error(function(res){

            console.log(res)

        });

        window.wx.ready(function(){

            console.log("ready")

            window.wx.checkJsApi({
                jsApiList: [
                    'onMenuShareTimeline',
                    'onMenuShareAppMessage'
                ],
                success: function (res) {
                    //alert(JSON.stringify(res));
                    window.wx.readyState = true;
                }
            });

        });
    })

ReactDOM.render(<Router><App/></Router>, document.getElementById('root'));
registerServiceWorker();



