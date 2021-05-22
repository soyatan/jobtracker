import React from 'react';

import {useThemedStyles} from '../../modules/Theming';
import Filter from '../icons/filter.svg';
import getstyles from './styles';

export default Filterbutton = () => {
  const styles = useThemedStyles(getstyles);

  return <Filter height={styles.icondimensions.width} />;
};
