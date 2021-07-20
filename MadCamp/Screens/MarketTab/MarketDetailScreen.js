import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  TouchableOpacityComponent,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import BikeItem from '../../components/BikeItem';

export default function MarketDetailScreen({route, navigation}) {
  //const [heart, setHeart] = useState(false);
  /*useEffect(() => {
    //클릭 시에만 되게 조건 주기
    route.heartClick = !route.heartClick;
  });*/
  return (
    <View style={styles.Container}>
      <View style={styles.Header}>
        <View style={styles.BackOut}>
          <TouchableOpacity
            style={styles.Back}
            onPress={() => navigation.goBack()}>
            <Icon name="arrow-back-outline" color={'#0C579F'} size={35} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.icon} onPress={() => setHeart(!heart)}>
          <Icon
            name={route.heartClick ? 'heart' : 'heart-outline'}
            color="#10569B"
            size={25}></Icon>
        </TouchableOpacity>
      </View>

      <ScrollView>
        <View style={styles.Context}>
          <Image source={route.params.img} style={styles.UploadImg}></Image>
          <View style={styles.profileContainer}>
            <View style={styles.emailContent}>
              <Text style={styles.PriceText}> {route.params.itemPrice}</Text>
            </View>
            <View style={styles.ChatOut}>
              <TouchableOpacity
                style={styles.Chat}
                onPress={() =>
                  navigation.navigate('DealChat', {
                    senderId: 'seungan@',
                    senderName: 'seungan',
                    recieverName: 'younghoon',
                  })
                }>
                <Text style={styles.Chattext}>채팅으로 거래하기</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.TitleContent}>
            <Text style={styles.TitleText}> {route.params.itemTitle}</Text>
          </View>
          <View style={styles.DetailContent}>
            <Text style={styles.DetailText}> {route.params.itemDetail}</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'column',
  },
  Context: {
    backgroundColor: 'white',
    flexDirection: 'column',
    flex: 3,
  },
  Header: {
    flexDirection: 'row',
  },
  BackOut: {
    flex: 1,
    height: 50,
  },
  Back: {
    height: '100%',
    marginLeft: 10,
    alignItems: 'flex-start', //horizontal
    justifyContent: 'center', //vertical
  },
  TitleOut: {
    flex: 2,
    height: 50,
  },
  Title: {
    height: '100%',
    width: '100%',
    marginTop: 15,
    fontSize: 16,
    color: 'black',
    alignItems: 'flex-start', //horizontal
    justifyContent: 'center', //vertical
  },
  icon: {
    marginTop: 10,
    marginRight: 10,
    width: 30,
    flex: 1,
    alignItems: 'flex-end',
  },
  UploadImg: {
    width: '100%',
    height: 360,
  },
  profileContainer: {
    padding: 8,
    //flex: 1,
    flexDirection: 'row',

    borderBottomWidth: 0.2,
    borderColor: '#cfcfcf',
  },
  TitleContent: {
    //marginLeft: 10,
    padding: 10,
  },
  TitleText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#565759',
  },
  DetailContent: {
    //padding: 5,
    marginLeft: 15,
    marginRight: 15,
  },
  DetailText: {
    fontSize: 18,
    color: 'gray',
    lineHeight: 25,
  },
  PriceText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  emailContent: {
    flex: 4,
    justifyContent: 'center',
  },
  ChatOut: {
    flex: 4,
    height: 50,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  Chat: {
    height: '70%',
    width: '80%',
    backgroundColor: '#10569B',
    alignItems: 'center', //horizontal
    justifyContent: 'center', //vertical
    borderRadius: 18,
  },
  Chattext: {
    color: 'white',
    fontSize: 15,
  },
});
