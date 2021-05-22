import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  
} from 'react-native';

import getstyles from './styles';

import {
  colorNames,
  useThemedColors,
  useThemedStyles,
} from '../../modules/Theming';
import _ from 'lodash';
import {useDispatch} from 'react-redux';
import {addJobRequest, jobsSelector, setJobs} from '../../redux/jobsReducer';
import FilterSubText from './FilterSubText';
import FilterSubChoices from './FilterSubChoices';

import Left from '../icons/left.svg';
import {useSelector} from 'react-redux';
import {userSelector} from '../../redux/userReducer';
import {useNavigation} from '@react-navigation/native';
import {setFilteredJobs} from '../../redux/filteredJobsReducer';

export default FilterModal = ({route,modalVisible,setModalVisible})=>{
  const navigation = useNavigation();

  const styles = useThemedStyles(getstyles);
  const dispatch = useDispatch();
  const [isChoosing, setChoosing] = useState(false);
  const [filterValues, setFilterValues] = useState();
  const [mainFilter, setMainFilter] = useState([{location: [], title: []}]);
  const [activeFilter, setActiveFilter] = useState(null);

  const defaultFilterScheme = [{location: [], title: []}];

  const curuser = useSelector(userSelector);

  const userEmail = curuser.email;

  const jobs = useSelector(jobsSelector);

  const [data, setData] = useState();

  useEffect(() => {
    setData(jobs);
  }, [jobs]);

  const createValueList = dbKey => {
    if (jobs && data) {

  const filterValues = data.map(item=>{
        return item[dbKey].toUpperCase();
      });
      return _.sortedUniq(filterValues);
    }
  };


const goBack = () => {
    setChoosing(false);
  };

  const filterDetail = () => {
    setChoosing(true);
  };

  const filterFromData = item => {};

  const _onPressSubmitFilter = () => {
    const SEARCHTITLES = mainFilter[0]['title'].map(item => item.toUpperCase());
    const SEARCHLOCATIONS = mainFilter[0]['location'].map(item =>item.toUpperCase())

    const newList = jobs.filter(item => {
      const ITEMTITLE = item.title
        ? item.title.toUpperCase()
        : ''.toUpperCase();
      const ITEMLOCATION = item.location
        ? item.location.toUpperCase()
        : ''.toUpperCase();


  if (SEARCHTITLES.some(item=>item === ITEMTITLE) || (SEARCHLOCATIONS.some(item=>item === ITEMLOCATION))){
        return item;
      }})


    dispatch(setJobs(newList));


  dispatch(setFilteredJobs('FILTERED'));
    navigation.navigate('Jobs Index');
  };

  const _cleanFilter = () => {
    setMainFilter(defaultFilterScheme);
    dispatch(setFilteredJobs('NO FILTER'));
    navigation.navigate('Jobs Index');
  };

  return (

 jobs ?
    <View style={styles.centeredView}>

        <View style={styles.headercontainer}>
        {!isChoosing ?
        <>
            <TouchableOpacity>
              <Text style={styles.header}>SELECT FILTERS</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => _cleanFilter()}
              style={styles.button}>
              <Text style={styles.header}>CLEAR FILTERS</Text>
            </TouchableOpacity>
          </>
         : 
          <>
            <TouchableOpacity onPress={() => goBack()}>
              <Left
                width={styles.icondimensions.width}
                height={styles.icondimensions.height}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => _cleanFilter()}
              style={styles.button}>
              <Text style={styles.header}>CLEAR FILTERS</Text>
            </TouchableOpacity>
          </>
        }
      </View>

      <View style={styles.filteritemcontainer}>
        {!isChoosing ?
          <>
            <FilterSubText
              dbKey={'title'}
              data={createValueList('title')}
              isChoosing={setChoosing}
              activeState={setActiveFilter}
              state={setFilterValues}
              title={'JOB TİTLE'}
            />
            <FilterSubText
              dbKey={'location'}
              data={createValueList('location')}
              isChoosing={setChoosing}
              activeState={setActiveFilter}
              state={setFilterValues}
              title={'LOCATION'}/>
          </> : <FilterSubChoices activeFilter={activeFilter} mainFilter={mainFilter} filterValues={filterValues} setMainFilter={setMainFilter} setActiveFilter={setActiveFilter} />}

      </View>

      <View style={styles.filterfootercontainer}>
        <Text style={styles.header} onPress={() => _onPressSubmitFilter()}>
          FILTER JOB APPLICATIONS
        </Text>
      </View>

      </View>
      
      : <View></View>
  )
}  


