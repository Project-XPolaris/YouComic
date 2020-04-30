import React from 'react';
import logoImage from "../../assets/lab.png"
import styles from './style.less'
import { Button, Typography } from 'antd';
import { CloseOutlined, MinusOutlined, SettingOutlined } from '@ant-design/icons/lib';
import { remote } from '@/utils/electron';
import { app } from '@/global';
import { router } from 'umi';
const { Title } = Typography;

interface AppHeaderPropsType {

}


export default function AppHeader({}: AppHeaderPropsType) {
  return (
    <div className={styles.main}>
      <div className={styles.windowAction}>
        <Button icon={<MinusOutlined />} type={'link'} className={styles.actionButton} onClick={() => {
          remote.BrowserWindow.getFocusedWindow().minimize();
        }}/>
        <Button icon={<CloseOutlined/>} type={'link'} className={styles.actionButton} onClick={() => {
          app.quit()
        }}/>
      </div>
      <div className={styles.titleContainer}>
        <div className={styles.titleWrap}>
          <img src={logoImage} className={styles.logo}/>
          <span className={styles.title}>YouComic</span>
        </div>
        {/*<Button icon={<SettingOutlined />} shape={'circle'} type={'ghost'} size={'small'} className={styles.actionButton} onClick={() => {*/}
        {/*  router.push("/setting")*/}
        {/*}}/>*/}
      </div>
    </div>
  );
}
