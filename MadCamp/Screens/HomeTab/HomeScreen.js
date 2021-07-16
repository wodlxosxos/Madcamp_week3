import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  ToastAndroid,
} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

export default function HomeScreen({route, navigation}) {
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
  const [lat, setLat] = useState(36.36311);
  const [lng, setLng] = useState(127.35489);
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
            region={{
              latitude: lat,
              longitude: lng,
              latitudeDelta: 0.0322,
              longitudeDelta: 0.0322,
            }}
          />
        </View>
        <View style={styles.bikeContainer}>
          <View style={styles.containerTitle}>
            <Text> | 대여 가능한 자전거 | </Text>
          </View>
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
  dateText: {
    fontSize: 12,
  },
});
