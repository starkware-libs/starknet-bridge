import {Select, MenuItem, FormControl} from '@mui/material';
import {ChainInfo, ChainType} from '@starkware-commons-js/enums';
import React from 'react';

import {ReactComponent as CollapseIcon} from '../../../assets/svg/icons/collapse.svg';
import {ReactComponent as SelectedIcon} from '../../../assets/svg/icons/selected.svg';
import {useEnvs} from '../../../hooks';
import {toClasses, openInNewTab} from '../../../utils';
import styles from './ChainSelect.module.scss';
import {ChainSelectTheme} from './ChainSelect.theme';

export const ChainSelect = () => {
  const {supportedL2ChainId} = useEnvs();

  const handleChange = event => {
    openInNewTab(ChainInfo.L2[event.target.value].APP_URL);
  };

  const renderItems = () => {
    return Object.values(ChainType.L2).map(chainName => {
      return (
        <MenuItem key={chainName} value={chainName}>
          {ChainInfo.L2[chainName].CHAIN}
          {chainName === supportedL2ChainId && (
            <div className={styles.selectedIcon}>
              <SelectedIcon />
            </div>
          )}
        </MenuItem>
      );
    });
  };

  return (
    <ChainSelectTheme>
      <div className={toClasses(styles.chainSelect)}>
        <FormControl size={'small'}>
          <Select
            IconComponent={CollapseIcon}
            renderValue={chainName => ChainInfo.L2[chainName].CHAIN}
            value={supportedL2ChainId}
            onChange={handleChange}
          >
            {renderItems()}
          </Select>
        </FormControl>
      </div>
    </ChainSelectTheme>
  );
};
