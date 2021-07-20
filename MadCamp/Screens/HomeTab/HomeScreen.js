import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ToastAndroid,
  ScrollView,
  SectionList,
  LogBox,
  PermissionsAndroid,
} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import BikeInfo from '../../components/BikeInfo';
import Icon from 'react-native-vector-icons/Ionicons';

const markerIcon = require('../../Images/bicycleicon.png');
const curIcon = require('../../Images/cur_pos_icon.png');
/*const data = [
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
*/
async function requestPermission() {
  try {
    return await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );
  } catch (e) {
    console.log(e);
  }
}
let baseHour = 0;
let dataList = [];
export default function HomeScreen({ route, navigation }) {
  const [data, setData] = useState([{ title: '대여 가능한 자전거', data: [] }]);
  const [location, setLocation] = useState({ lat: 0, lng: 0 });
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    requestPermission().then(result => {
      console.log({ result });
      if (result === 'granted') {
        Geolocation.getCurrentPosition(
          pos => {
            setLocation({ lat: pos.coords.latitude, lng: pos.coords.longitude });
          },
          error => {
            console.log(error);
          },
          { enableHighAccuracy: true, timeout: 3600, maximumAge: 3600 },
        );
      }
    });
  }, []);

  const curDate = new Date();
  if (curDate.getUTCHours() >= 15) {
    baseHour = curDate.getUTCHours() - 15;
  } else {
    baseHour = curDate.getUTCHours() + 9;
  }
  const [isStrDatePickerVisible, setStrDatePickerVisibility] = useState(false);
  const [isStrTimePickerVisible, setStrTimePickerVisibility] = useState(false);
  const [isEndDatePickerVisible, setEndDatePickerVisibility] = useState(false);
  const [isEndTimePickerVisible, setEndTimePickerVisibility] = useState(false);
  const [strSelYear, setStrSelYear] = useState(curDate.getFullYear());
  const [strSelMonth, setStrSelMonth] = useState(curDate.getMonth());
  const [strSelDay, setStrSelDay] = useState(curDate.getDate());
  const [strSelHour, setStrSelHour] = useState(baseHour);
  const [strSelMin, setStrSelMin] = useState(curDate.getUTCMinutes());
  const [endSelYear, setEndSelYear] = useState(curDate.getFullYear());
  const [endSelMonth, setEndSelMonth] = useState(curDate.getMonth());
  const [endSelDay, setEndSelDay] = useState(curDate.getDate());
  const [endSelHour, setEndSelHour] = useState(baseHour);
  const [endSelMin, setEndSelMin] = useState(curDate.getUTCMinutes());

  const showStrDatePicker = () => {
    setStrDatePickerVisibility(true);
  };
  const hideStrDatePicker = () => {
    setStrDatePickerVisibility(false);
  };
  const showStrTimePicker = () => {
    setStrTimePickerVisibility(true);
  };
  const hideStrTimePicker = () => {
    setStrTimePickerVisibility(false);
  };
  const showEndDatePicker = () => {
    setEndDatePickerVisibility(true);
  };
  const hideEndDatePicker = () => {
    setEndDatePickerVisibility(false);
  };
  const showEndTimePicker = () => {
    setEndTimePickerVisibility(true);
  };
  const hideEndTimePicker = () => {
    setEndTimePickerVisibility(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.topTabContainer}>
        <View style={styles.topTextContainer}>
          <Text style={styles.topText}>대여</Text>
        </View>
        <View style={styles.startContainer}>
          <TouchableOpacity
            onPress={showStrDatePicker}
            style={styles.strDateContainer}>
            <Text style={styles.dateText}>{strSelMonth + 1}/ </Text>
            <Text style={styles.dateText}>{strSelDay}</Text>
          </TouchableOpacity>
          <DateTimePickerModal
            isVisible={isStrDatePickerVisible}
            mode="date"
            onConfirm={date => {
              setStrSelYear(date.getFullYear());
              setStrSelMonth(date.getMonth());
              setStrSelDay(date.getDate());
              hideStrDatePicker();
            }}
            onCancel={hideStrDatePicker}
          />
          <TouchableOpacity
            onPress={showStrTimePicker}
            style={styles.endDateContainer}>
            <Text style={styles.dateText}>
              {strSelHour}: {strSelMin}
            </Text>
          </TouchableOpacity>
          <DateTimePickerModal
            isVisible={isStrTimePickerVisible}
            mode="time"
            is24Hour={true}
            display="spinner"
            onConfirm={date => {
              console.log(date.getUTCHours());
              if (date.getUTCHours() >= 15) {
                setStrSelHour(date.getUTCHours() - 15);
                setStrSelMin(date.getUTCMinutes());
              } else {
                setStrSelHour(date.getUTCHours() + 9);
                setStrSelMin(date.getUTCMinutes());
              }
              hideStrTimePicker();
            }}
            onCancel={hideStrTimePicker}
          />
        </View>
        <Icon
          style={styles.iconContainer}
          name="swap-horizontal-outline"
          color="#10569B"
          fontWeight="bold"
          size={25}></Icon>
        <View style={styles.endendContainer}>
          <TouchableOpacity
            onPress={showEndDatePicker}
            style={styles.strDateContainer}>
            <Text style={styles.dateText}>{endSelMonth + 1}/ </Text>
            <Text style={styles.dateText}>{endSelDay}</Text>
          </TouchableOpacity>
          <DateTimePickerModal
            isVisible={isEndDatePickerVisible}
            mode="date"
            onConfirm={date => {
              setEndSelYear(date.getFullYear());
              setEndSelMonth(date.getMonth());
              setEndSelDay(date.getDate());
              hideEndDatePicker();
            }}
            onCancel={hideEndDatePicker}
          />
          <TouchableOpacity
            onPress={showEndTimePicker}
            style={styles.endDateContainer}>
            <Text style={styles.dateText}>
              {endSelHour}: {endSelMin}
            </Text>
          </TouchableOpacity>
          <DateTimePickerModal
            isVisible={isEndTimePickerVisible}
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
              hideEndTimePicker();
            }}
            onCancel={hideEndTimePicker}
          />
        </View>
      </View>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.mapView}>
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
              coordinate={{ latitude: 36.3664798, longitude: 127.3612639 }}
              title={'응용공학동'}
              icon={markerIcon}
              onCalloutPress={() => {
                fetch('http://192.249.18.122:80/getRentBike', {
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                    building_name: '응용공학동',
                  }),
                })
                  .then(res => res.json())
                  .then(json => {
                    if (json.bikelist === 'no Info') {
                      ToastAndroid.showWithGravity(
                        '대여 가능한 자전거가 없습니다.',
                        ToastAndroid.SHORT,
                        ToastAndroid.CENTER,
                      );
                      dataList = [];
                      setData([{ title: '열려있는 그룹', data: dataList }]);
                    } else {
                      dataList = [];
                      for (let i = 0; i < json.length; i++) {
                        const tmpContainer = json[i].table;
                        let check = true;
                        for (let j = 0; j < tmpContainer.length; j++) {
                          const [startTime, endTime] = tmpContainer[j];
                          const [strYear, strMonth, strDay, strTime] =
                            startTime.split('/');
                          const [strHour, strMinute] = strTime.split(':');
                          const [endYear, endMonth, endDay, pendTime] =
                            endTime.split('/');
                          const [endHour, endMinute] = pendTime.split(':');
                          if (
                            strYear < strSelYear ||
                            strMonth < strSelMonth ||
                            strDay < strSelDay ||
                            strHour < strSelHour ||
                            strMinute < strSelMin ||
                            endYear > endSelYear ||
                            endMonth > endSelMonth ||
                            endDay > endSelDay ||
                            endHour > endSelHour ||
                            endMinute > endSelMin
                          ) {
                            check = false;
                            break;
                          }
                        }
                        if (check) {
                          dataList.push({
                            userId: json[i].user_id,
                            userName: json[i].user_name,
                            userGender: json[i].user_gender,
                            userSID: String(json[i].user_SID),
                            hourFee: String(json[i].hour_fee),
                            dayFee: String(json[i].day_fee),
                            rating: String(json[i].rating),
                          });
                          setData([{ title: '열려있는 그룹', data: dataList }]);
                        }
                      }
                      console.log(dataList);
                    }
                  })
                  .catch(error => console.log('error', error));
              }}
            />
            <Marker
              coordinate={{ latitude: 36.3636441, longitude: 127.3591617 }}
              title={'쪽문'}
              icon={markerIcon}
              onCalloutPress={e => console.log(e)}
            />
            <Marker
              coordinate={{ latitude: 36.3708546, longitude: 127.3665032 }}
              title={'세종관'}
              icon={markerIcon}
              onCalloutPress={e => console.log(e)}
            />
            <Marker
              coordinate={{ latitude: 36.3706964, longitude: 127.3624517 }}
              title={'창의학습관'}
              icon={markerIcon}
              onCalloutPress={e => console.log(e)}
            />
            <Marker
              coordinate={{ latitude: 36.37434, longitude: 127.36566 }}
              title={'N1'}
              icon={markerIcon}
              onCalloutPress={e => console.log(e)}
            />
            <Marker
              coordinate={{ latitude: 36.3705, longitude: 127.35582 }}
              title={'미르관/나래관'}
              icon={markerIcon}
              onCalloutPress={e => console.log(e)}
            />
            <Marker
              coordinate={{ latitude: 36.3734349, longitude: 127.3573793 }}
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
            renderItem={({ item }) => (
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
    height: 50,
  },
  topTextContainer: {
    height: 50,
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
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    margin: 1,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 10,
    backgroundColor: '#10569B',
  },
  endendContainer: {
    flex: 1,
    borderColor: 'white',
    flexDirection: 'row',
    backgroundColor: 'white',
    margin: 1,
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 10,
    marginRight: 10,
    backgroundColor: '#10569B',
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
    borderRightColor: 'white',
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
    marginTop: 12,
  },
  scrollContainer: {
    height: '90%',
    width: '100%',
    //borderWidth: 1,
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
    borderColor: '#cfcfcf',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topTitle: {
    fontFamily: 'SpoqaHanSansNeo-Bold',
  },
  dateText: {
    color: 'white',
    fontSize: 12,
    fontFamily: 'SpoqaHanSansNeo-Medium',
  },
});
