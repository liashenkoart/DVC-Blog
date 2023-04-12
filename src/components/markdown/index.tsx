import React from 'react';

import { renderAst } from '../../utils/renderAst';

import styles from './styles.module.css';

interface IMarkdownProps {
  html?: string;
  htmlAst?: string;
}

/*
function Markdown({ html }: IMarkdownProps) {
  return (
    <div
      className={styles.wrapper}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
*/

function Markdown({ html, htmlAst }: IMarkdownProps) {
  return htmlAst ? (
    <div className={styles.wrapper}>{renderAst(htmlAst)}</div>
  ) : (
    <div
      className={styles.wrapper}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default Markdown;
