import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  SectionList,
  LogBox,
  PermissionsAndroid,
} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import BikeInfo from '../../components/BikeInfo';
import Icon from 'react-native-vector-icons/Ionicons';

const markerIcon = require('../../Images/bicycleicon.png');
const curIcon = require('../../Images/cur_pos_icon.png');
const data = [
  {
    title: '참여중인 사람',

    data: [
      {
        userName: '정승안',
        userGender: '남자',
        userSID: 18,
        hourFee: 400,
        dayFee: 1200,
        rating: 4.2,
      },
      {
        userName: '정승안',
        userGender: '남자',
        userSID: 19,
        hourFee: 400,
        dayFee: 1200,
        rating: 4.2,
      },
      {
        userName: '정승안',
        userGender: '남자',
        userSID: 18,
        hourFee: 400,
        dayFee: 1200,
        rating: 4.2,
      },
      {
        userName: '정승안',
        userGender: '남자',
        userSID: 20,
        hourFee: 400,
        dayFee: 1200,
        rating: 4.2,
      },
      {
        userName: '정승안',
        userGender: '남자',
        userSID: 22,
        hourFee: 400,
        dayFee: 1200,
        rating: 4.2,
      },
      {
        userName: '정승안',
        userGender: '남자',
        userSID: 18,
        hourFee: 400,
        dayFee: 1200,
        rating: 4.2,
      },
      {
        userName: '정승안',
        userGender: '남자',
        userSID: 21,
        hourFee: 400,
        dayFee: 1200,
        rating: 4.2,
      },
      {
        userName: '정승안',
        userGender: '남자',
        userSID: 18,
        hourFee: 400,
        dayFee: 1200,
        rating: 4.2,
      },
      {
        userName: '정승안',
        userGender: '남자',
        userSID: 18,
        hourFee: 400,
        dayFee: 1200,
        rating: 4.2,
      },
      {
        userName: '정승안',
        userGender: '남자',
        userSID: 22,
        hourFee: 400,
        dayFee: 1200,
        rating: 4.2,
      },
    ],
  },
];

async function requestPermission() {
  try {
    return await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );
  } catch (e) {
    console.log(e);
  }
}

export default function HomeScreen({route, navigation}) {
  const [location, setLocation] = useState({lat: 0, lng: 0});
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    requestPermission().then(result => {
      console.log({result});
      if (result === 'granted') {
        Geolocation.getCurrentPosition(
          pos => {
            setLocation({lat: pos.coords.latitude, lng: pos.coords.longitude});
          },
          error => {
            console.log(error);
          },
          {enableHighAccuracy: true, timeout: 3600, maximumAge: 3600},
        );
      }
    });
  }, []);

  const curDate = new Date();
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const [strSelYear, setStrSelYear] = useState(curDate.getFullYear());
  const [strSelMonth, setStrSelMonth] = useState(curDate.getMonth());
  const [strSelDay, setStrSelDay] = useState(curDate.getDate());
  const [strSelHour, setStrSelHour] = useState(curDate.getUTCHours() + 9);
  const [strSelMin, setStrSelMin] = useState(curDate.getUTCMinutes());
  const [endSelYear, setEndSelYear] = useState(curDate.getFullYear());
  const [endSelMonth, setEndSelMonth] = useState(curDate.getMonth());
  const [endSelDay, setEndSelDay] = useState(curDate.getDate());
  const [endSelHour, setEndSelHour] = useState(curDate.getUTCHours() + 9);
  const [endSelMin, setEndSelMin] = useState(curDate.getUTCMinutes());

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };
  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.topTabContainer}>
        <View style={styles.topTextContainer}>
          <Text style={styles.topText}>대여</Text>
        </View>
        <View style={styles.startContainer}>
          <TouchableOpacity
            onPress={showDatePicker}
            style={styles.strDateContainer}>
            <Text style={styles.dateText}>{strSelMonth + 1}/ </Text>
            <Text style={styles.dateText}>{strSelDay}</Text>
          </TouchableOpacity>
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={date => {
              setStrSelYear(date.getFullYear());
              setStrSelMonth(date.getMonth());
              setStrSelDay(date.getDate());
              hideDatePicker();
            }}
            onCancel={hideDatePicker}
          />
          <TouchableOpacity
            onPress={showTimePicker}
            style={styles.endDateContainer}>
            <Text style={styles.dateText}>
              {strSelHour}: {strSelMin}
            </Text>
          </TouchableOpacity>
          <DateTimePickerModal
            isVisible={isTimePickerVisible}
            mode="time"
            is24Hour={true}
            display="spinner"
            onConfirm={date => {
              if (date.getUTCHours() >= 15) {
                setStrSelHour(date.getUTCHours() - 15);
                setStrSelMin(date.getUTCMinutes());
              } else {
                setStrSelHour(date.getUTCHours() + 9);
                setStrSelMin(date.getUTCMinutes());
              }
              hideTimePicker();
            }}
            onCancel={hideTimePicker}
          />
        </View>
        <Icon
          style={styles.iconContainer}
          name="swap-horizontal-outline"
          color="#10569B"
          size={25}></Icon>
        <View style={styles.endendContainer}>
          <TouchableOpacity
            onPress={showDatePicker}
            style={styles.strDateContainer}>
            <Text style={styles.dateText}>{endSelMonth + 1}/ </Text>
            <Text style={styles.dateText}>{endSelDay}</Text>
          </TouchableOpacity>
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={date => {
              setEndSelYear(date.getFullYear());
              setEndSelMonth(date.getMonth());
              setEndSelDay(date.getDate());
              hideDatePicker();
            }}
            onCancel={hideDatePicker}
          />
          <TouchableOpacity
            onPress={showTimePicker}
            style={styles.endDateContainer}>
            <Text style={styles.dateText}>
              {endSelHour}: {endSelMin}
            </Text>
          </TouchableOpacity>
          <DateTimePickerModal
            isVisible={isTimePickerVisible}
            mode="time"
            is24Hour={true}
            display="spinner"
            onConfirm={date => {
              if (date.getUTCHours() >= 15) {
                setEndSelHour(date.getUTCHours() - 15);
                setEndSelMin(date.getUTCMinutes());
              } else {
                setEndSelHour(date.getUTCHours() + 9);
                setEndSelMin(date.getUTCMinutes());
              }
              hideTimePicker();
            }}
            onCancel={hideTimePicker}
          />
        </View>
      </View>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.mapViewContainer}>
          <MapView
            style={styles.mapView}
            provider={PROVIDER_GOOGLE}
            userLocationUpdateInterval={500}
            moveOnMarkerPress={false}
            showsUserLocation={true}
            region={{
              latitude: location.lat,
              longitude: location.lng,
              latitudeDelta: 0.0101,
              longitudeDelta: 0.0101,
            }}>
            <Marker
              coordinate={{latitude: 36.3664798, longitude: 127.3612639}}
              title={'응용공학동'}
              icon={markerIcon}
              onCalloutPress={e => console.log(e)}
            />
            <Marker
              coordinate={{latitude: 36.3636441, longitude: 127.3591617}}
              title={'쪽문'}
              icon={markerIcon}
              onCalloutPress={e => console.log(e)}
            />
            <Marker
              coordinate={{latitude: 36.3708546, longitude: 127.3665032}}
              title={'세종관'}
              icon={markerIcon}
              onCalloutPress={e => console.log(e)}
            />
            <Marker
              coordinate={{latitude: 36.3706964, longitude: 127.3624517}}
              title={'창의학습관'}
              icon={markerIcon}
              onCalloutPress={e => console.log(e)}
            />
            <Marker
              coordinate={{latitude: 36.37434, longitude: 127.36566}}
              title={'N1'}
              icon={markerIcon}
              onCalloutPress={e => console.log(e)}
            />
            <Marker
              coordinate={{latitude: 36.3705, longitude: 127.35582}}
              title={'미르관/나래관'}
              icon={markerIcon}
              onCalloutPress={e => console.log(e)}
            />
            <Marker
              coordinate={{latitude: 36.3734349, longitude: 127.3573793}}
              title={'아름관/소망관/사랑관'}
              icon={markerIcon}
              onCalloutPress={e => console.log(e)}
            />
          </MapView>
        </View>
        <View style={styles.bikeContainer}>
          <View style={styles.containerTitle}>
            <Text style={styles.topTitle}> | 대여 가능한 자전거 | </Text>
          </View>
          <SectionList
            nestedScrollEnabled
            sections={data}
            keyExtractor={(item, index) => item + index}
            renderItem={({item}) => (
              <BikeInfo
                items={item}
                navigation={navigation}
                info={{
                  strYear: strSelYear,
                  strMonth: strSelMonth + 1,
                  strDay: strSelDay,
                  strHour: strSelHour,
                  strMin: strSelMin,
                  endYear: endSelYear,
                  endMonth: endSelMonth + 1,
                  endDay: endSelDay,
                  endHour: endSelHour,
                  endMin: endSelMin,
                }}
              />
            )}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
  },
  topTabContainer: {
    flexDirection: 'row',
    height: 55,
    width: '100%',
    //alignItems: 'flex-start',
    //backgroundColor: 'black',
  },
  topTextContainer: {
    height: 55,
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginLeft: 15,
    marginRight: 15,
  },
  topText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  startContainer: {
    flex: 2,
    flexDirection: 'row',
    backgroundColor: 'white',
    margin: 1,
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 10,
  },
  endendContainer: {
    flex: 2,
    flexDirection: 'row',
    backgroundColor: 'white',
    margin: 1,
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 10,
    marginRight: 10,
    //borderRadius: 10,
  },
  strContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    margin: 1,
    //borderRadius: 10,
  },
  strDateContainer: {
    width: '45%',
    marginVertical: 10,
    marginHorizontal: 3,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderRightWidth: 1,
  },
  endContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    margin: 1,
  },
  endDateContainer: {
    width: '45%',
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  iconContainer: {
    marginTop: 15,
  },
  scrollContainer: {
    height: '90%',
    width: '100%',
    //borderWidth: 1,
  },
  mapViewContainer: {
    height: 400,
    width: '100%',
  },
  mapView: {
    height: 400,
    width: '100%',
  },
  bikeContainer: {
    height: 600,
    width: '100%',
    padding: 7,
    marginHorizontal: 2,
    marginBottom: 4,
    overflow: 'hidden',
  },
  containerTitle: {
    height: 50,
    borderBottomWidth: 0.2,
    borderColor: 'gray',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topTitle: {
    fontFamily: 'SpoqaHanSansNeo-Bold',
  },
  dateText: {
    fontSize: 12,
    fontFamily: 'SpoqaHanSansNeo-Medium',
  },
});
