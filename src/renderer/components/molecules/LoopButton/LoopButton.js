// @flow

import React from 'react';
import cx from 'classnames';
import { Icon as Button } from '../../atoms/Button';
import styles from './style.css';

type Props = {
  loop: 'none' | 'one' | 'all';
  onClick: () => {};
  className: string;
};

const decideLoopPositon = (p) => {
  const loopTable = ['none', 'one', 'all'];
  const next = loopTable.findIndex((item) => item === p);

  return loopTable[next + 1] !== undefined ?
    loopTable[next + 1] :
    loopTable[0];
};

const LoopButton = (props: Props) => (
  <Button
    icon="loop"
    size="1.2rem"
    title="loop"
    className={cx(styles[`${props.loop}LoopButton`], props.className)}
    onClick={() => props.onClick(decideLoopPositon(props.loop))}
  />
);

export default LoopButton;
