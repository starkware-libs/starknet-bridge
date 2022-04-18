import PropTypes from 'prop-types';
import React from 'react';

import {useTranslation} from '../../../../hooks';
import styles from './ToastFooter.module.scss';

export const ToastFooter = ({children}) => {
  return <div className={styles.toastFooter}>{children}</div>;
};

export const TransferLogLink = ({onClick}) => {
  const {transferLogLink} = useTranslation('toasts');

  return (
    <div className={styles.transferLogLink} onClick={onClick}>
      {transferLogLink}
    </div>
  );
};

ToastFooter.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};

TransferLogLink.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func
};
