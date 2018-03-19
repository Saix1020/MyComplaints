/**
 * Created by saix on 2018/3/13.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import qs from 'query-string';

import { Card, WhiteSpace } from 'antd-mobile';

const statusImg = {
    'done' : "./img/icon/done.png",
    'accept' : "./img/icon/accept.png",
    'reply' : "./img/icon/reply.png"
}


class InfoCard extends Component {

    render() {
        const img = statusImg[(Object.keys(statusImg))[parseInt(Math.random()*100)%3]];
        return (

          <div class="info-card" onClick={()=>{

              this.context.router.history.push(
                  {
                      pathname:"/complaint-detail",
                      search: ''
                  }
              )
          }}>
              <Card full>
                  <Card.Header
                      title={<div>
                          <div style={{fontSize:'15px'}}>徐赛</div>
                          <div style={{color:'#b4b4b4', fontSize:'13px'}}>2018-03-13</div>
                      </div>}
                      thumb={<img src="./img/avatar.jpg" class="info-card card-head-thumb"/>}
                      extra={<img src={img} class="info-card card-head-extra"/>}
                  />
                  <Card.Body style={{wordWrap:'break-word'}}>
                      <div style={{fontSize:'18px'}}>这是题目这是题目</div>
                      {/*Hello world Hello worldHello worldHello worldHello worldHello worldHello world*/}
                      <div style={{width:'100%', color:'#b4b4b4', fontSize:'13px', wordWrap:'break-word', whiteSpace:'normal'}}>这是内容这是内容，
                          这是内容这是内容这是内容这是内容这是内容,
                          这是内容这是内容这是内容这是内容这是内容,
                          这是内容这是内容这是内容这是内容</div>

                  </Card.Body>
                  <Card.Footer content={
                      <div>
                          <div>
                            <span style={{color:'#6e6eFF', fontSize:'13px'}}>
                              [投诉对象] &nbsp;&nbsp;
                            </span>
                              <span style={{color:'#000000', fontSize:'13px'}}>
                              华宇国际教育
                            </span>
                          </div>
                          <div>
                            <span style={{color:'#6e6eFF', fontSize:'13px'}}>
                            [投诉要求] &nbsp;&nbsp;
                            </span>
                              <span style={{color:'#000000', fontSize:'13px'}}>
                            尽快解决问题！！
                      </span>
                          </div>
                          </div>
                  } />
              </Card>


          </div>
        );
    }
}

export default InfoCard;