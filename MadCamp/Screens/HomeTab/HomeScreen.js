import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  SectionList,
  ToastAndroid,
  PermissionsAndroid,
} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import BikeInfo from '../../components/BikeInfo';

const markerIcon = require('../../Images/bicycle_icon.png');
const curIcon = require('../../Images/cur_pos_icon.png');
const data = [
  {
    title: '참여중인 사람',

    data: [
      {
        userName: '정승안',
        userGender: '남자',
        userID: 18,
        hourFee: 400,
        dayFee: 1200,
      },
      {
        userName: '정승안',
        userGender: '남자',
        userID: 19,
        hourFee: 400,
        dayFee: 1200,
      },
      {
        userName: '정승안',
        userGender: '남자',
        userID: 18,
        hourFee: 400,
        dayFee: 1200,
      },
      {
        userName: '정승안',
        userGender: '남자',
        userID: 20,
        hourFee: 400,
        dayFee: 1200,
      },
      {
        userName: '정승안',
        userGender: '남자',
        userID: 22,
        hourFee: 400,
        dayFee: 1200,
      },
      {
        userName: '정승안',
        userGender: '남자',
        userID: 18,
        hourFee: 400,
        dayFee: 1200,
      },
      {
        userName: '정승안',
        userGender: '남자',
        userID: 21,
        hourFee: 400,
        dayFee: 1200,
      },
      {
        userName: '정승안',
        userGender: '남자',
        userID: 18,
        hourFee: 400,
        dayFee: 1200,
      },
      {
        userName: '정승안',
        userGender: '남자',
        userID: 18,
        hourFee: 400,
        dayFee: 1200,
      },
      {
        userName: '정승안',
        userGender: '남자',
        userID: 22,
        hourFee: 400,
        dayFee: 1200,
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
        <View style={styles.strContainer}>
          <TouchableOpacity
            onPress={showDatePicker}
            style={styles.strDateContainer}>
            <Text style={styles.dateText}>{strSelMonth + 1}월 </Text>
            <Text style={styles.dateText}>{strSelDay}일</Text>
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
            style={styles.strDateContainer}>
            <Text style={styles.dateText}>
              {strSelHour}시 {strSelMin}분
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
        <View style={styles.endContainer}>
          <TouchableOpacity
            onPress={showDatePicker}
            style={styles.endDateContainer}>
            <Text style={styles.dateText}>{endSelMonth + 1}월 </Text>
            <Text style={styles.dateText}>{endSelDay}일</Text>
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
              {endSelHour}시 {endSelMin}분
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
              <BikeInfo items={item} navigation={navigation} />
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
    height: 60,
    width: '100%',
    backgroundColor: 'black',
  },
  strContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    margin: 1,
    borderRadius: 10,
  },
  strDateContainer: {
    borderWidth: 1,
    width: '45%',
    borderRadius: 15,
    marginVertical: 10,
    marginHorizontal: 3,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  endContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    margin: 1,
    borderRadius: 10,
  },
  endDateContainer: {
    borderWidth: 1,
    width: '45%',
    borderRadius: 15,
    marginVertical: 10,
    marginHorizontal: 3,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  scrollContainer: {
    height: '90%',
    width: '100%',
    borderWidth: 1,
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
    borderRadius: 25,
    borderColor: 'gray',
    borderWidth: 3,
    padding: 7,
    marginHorizontal: 2,
    marginBottom: 4,
  },
  containerTitle: {
    height: 30,
    borderBottomWidth: 1,
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
