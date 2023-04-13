import React from 'react';

import { renderAst } from '../../utils/renderAst';

import styles from './styles.module.css';

interface IMarkdownProps {
  html: string;
}

function Markdown({ html }: IMarkdownProps) {
  return <div className={styles.wrapper}>{renderAst(html)}</div>;
}

export default Markdown;

/*
function Markdown({ html }: IMarkdownProps) {
  return (
    <div
      className={styles.wrapper}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
  return htmlAst ? (
    <div className={styles.wrapper}>{renderAst(html)}</div>
  ) : (
    <div
      className={styles.wrapper}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );

*/
