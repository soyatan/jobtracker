import React, {useState, useEffect} from 'react';
import {FlatList} from 'react-native';

import FilterItem from './FilterItem';

export default FilterSubChoices = ({
  activeFilter,
  setMainFilter,
  filterValues,
  mainFilter,
  setActiveFilter,
}) => {
  return (
    <FlatList
      data={filterValues}
      keyExtractor={(item, index) => index}
      renderItem={item => {
        return (
          <FilterItem
            item={item.item}
            setMainFilter={setMainFilter}
            mainFilter={mainFilter}
            activeFilter={activeFilter}
          />
        );
      }}
    />
  );
};
