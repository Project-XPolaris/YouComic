import React from 'react';
import { PageHeader, Divider } from 'antd';
import { router } from 'umi';
import styles from './style.less'

interface SettingPagePropsType {

}


export default function SettingPage({}: SettingPagePropsType) {

  return (
    <div>
      <PageHeader
        className="site-page-header"
        onBack={() => router.goBack()}
        title="设置"
      />

      <Divider className={styles.divider}/>
    </div>
  );
}
