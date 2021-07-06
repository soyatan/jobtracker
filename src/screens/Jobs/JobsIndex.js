import React, {useEffect, useCallback} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Linking,
  Alert,
  Button,
} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';

import {
  addUserRequest,
  userLogoutRequest,
  userSelector,
} from '../../redux/userReducer';
import getstyles from './styles';

import {jobsSelector, fetchJobsRequest} from '../../redux/jobsReducer';

import {
  colorNames,
  useThemedColors,
  useThemedStyles,
} from '../../modules/Theming';
import {ActivityIndicator, Searchbar, useTheme} from 'react-native-paper';
import {useState} from 'react';
import AddJobModal from '../../components/AddJobModal/AddJobModal';
import AddJobButton from '../../components/AddJobButton/AddJobButton';
import JobPost from '../../components/JobPost/JobPost';
import {employeeSelector} from '../../redux/employeesReducer';
import {employeeFetchSelector} from '../../redux/employeesFetchReducer';
import FilterButton from '../../components/FilterButton/FilterButton';
import FilterModal from '../../components/FilterModal/FilterModal';
import {useNavigation} from '@react-navigation/native';
import {filteredJobsSelector} from '../../redux/filteredJobsReducer';
import {baseURL} from '../../API/jobsURL';

import database from '@react-native-firebase/database';
import {companiesSelector} from '../../redux/companyReducer';

export default JobsIndex = ({route}) => {
  // document reference inside a collection
  const curuser = useSelector(userSelector);
  const users = useSelector(employeeSelector);
  const companies = useSelector(companiesSelector);

  useEffect(() => {
    dispatch(fetchJobsRequest());
  }, []);

  const [searchQuery, setSearchQuery] = useState();
  const [data, setData] = useState(jobs);

  const onChangeSearch = value => {
    setSearchQuery(value);
    if (!value) {
      setData(jobs);
    }
  };
  const submitSearch = () => {
    if (searchQuery) {
      const newList = jobs.filter(item => {
        const ITEMTITLE = item.title
          ? item.title.toUpperCase()
          : ''.toUpperCase();
        const SEARCHDATA = searchQuery.toUpperCase();
        return ITEMTITLE.indexOf(SEARCHDATA) > -1;
      });
      setData(newList);
    } else {
      setData(jobs);
    }
  };

  const clearSearch = () => {
    alert(searchQuery);
  };

  const jobs = useSelector(jobsSelector);

  const filterStatus = useSelector(filteredJobsSelector);

  const dispatch = useDispatch();

  const styles = useThemedStyles(getstyles);

  useEffect(() => {
    setData(jobs);
  }, [jobs]);

  useEffect(() => {
    if (filterStatus === 'FILTERED') {
      setData(jobs);
    } else if (filterStatus === 'NO FILTER') {
      dispatch(fetchJobsRequest());
    }
  }, [filterStatus]);

  const navigation = useNavigation();

  const showFilter = () => {
    navigation.toggleDrawer();
  };

  const colors = useThemedColors();
  const [modalVisible, setModalVisible] = useState(false);
  const [modal3Visible, setModal3Visible] = useState(false);

  const showAddModalandSendUser = () => {
    dispatch(addUserRequest(curuser.email));
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchbarcontainer}>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
          onEndEditing={submitSearch}
          theme={{
            colors: {
              underlineColor: 'transparent',
              text: 'white',
              placeholder: 'white',
            },
          }}
          style={styles.searchbar}
          selectionColor={'white'}
        />
        <TouchableOpacity
          onPress={() => showFilter()}
          style={styles.filtercontainer}>
          <FilterButton />
        </TouchableOpacity>
      </View>

      <View style={styles.blogcontainer}>
        <AddJobModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
        {jobs ? (
          <FlatList
            keyExtractor={(item, index) => index}
            showsVerticalScrollIndicator={false}
            data={data}
            renderItem={item => <JobPost data={item} />}
          />
        ) : (
          <ActivityIndicator
            size="large"
            color={colors[colorNames.header.inputText]}
          />
        )}
      </View>

      <View style={styles.addnewjobcontainer}>
        <AddJobButton
          onPress={() => showAddModalandSendUser()}
          size={45}
          name={'plus'}
          color={colors[colorNames.header.inputText]}
        />
      </View>
    </View>
  );
};
