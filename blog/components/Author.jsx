import React from 'react';
import '../static/style/components/author.scss';
import {
  Avatar, Divider,
} from 'antd';
import { GithubOutlined, QqOutlined, WechatOutlined } from '@ant-design/icons';


const Author = () => (
  <div className="author-div comm-box">
    <div>
      <Avatar size={100} src="../static/images/cat.jpeg" />
    </div>
    <div className="author-introduction">
      祖籍广东顺德，生于广州，长于广州。因为天赋异品，才华横溢，故现代人疑其为谭嗣同的后代。
      <Divider>社交账号</Divider>
      <Avatar size={28} icon={<GithubOutlined />} className="account" />
      <Avatar size={28} icon={<QqOutlined />} className="account" />
      <Avatar size={28} icon={<WechatOutlined />} className="account" />
    </div>
  </div>
);

export default Author;
