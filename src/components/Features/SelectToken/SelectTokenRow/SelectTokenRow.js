import PropTypes from 'prop-types';
import React from 'react';

import {formatBalance} from '../../../../utils';
import {CryptoLogo} from '../../../UI';
import {CryptoLogoSize} from '../../../UI/CryptoLogo/CryptoLogo.enums';
import styles from './SelectTokenRow.module.scss';

export const SelectTokenRow = ({name, balance, symbol, onClick}) => {
  return (
    <div className={styles.selectTokenRow} onClick={onClick}>
      <hr />
      <div className={styles.data}>
        <div className={styles.left}>
          <CryptoLogo size={CryptoLogoSize.MEDIUM} symbol={symbol} />
          <div>
            <div className={styles.symbol}>{symbol}</div>
            <div className={styles.name}>{name}</div>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.balance}>
            {formatBalance(balance)} {symbol}
          </div>
        </div>
      </div>
    </div>
  );
};

SelectTokenRow.propTypes = {
  name: PropTypes.string,
  balance: PropTypes.number,
  symbol: PropTypes.string,
  onClick: PropTypes.func
};
