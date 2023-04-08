import cn from 'classnames';
import React from 'react';

import { ids } from '../../data';

import styles from './styles.module.css';

import { default as Glyph1Src } from './glyph-1.svg';
import { default as Glyph2Src } from './glyph-2.svg';

import SubscribeForm from './form';

export default function Subscribe() {
  return (
    <div className={styles.wrapper} id={ids.subscribe}>
      <img src={Glyph1Src} className={cn(styles.glyph, styles.topleft)} />
      <div className={styles.container}>
        <div className={styles.title}>
          Subscribe for updates. We won&#39;t spam you.
        </div>
        <div className={styles.subscribeContainer}>
          <SubscribeForm />
        </div>
      </div>
      <img src={Glyph2Src} className={cn(styles.glyph, styles.rigthbottom)} />
    </div>
  );
}
