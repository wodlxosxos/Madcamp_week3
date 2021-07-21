import React, {useState, useEffect, useCallback} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  ToastAndroid,
} from 'react-native';
import BikeItem from '../../components/BikeItem';
import FAB from 'react-native-fab';
import Icon from 'react-native-vector-icons/Ionicons';
import {set} from 'react-native-reanimated';

let marketlist = [];
export default function MarketDeal({route, navigation}) {
  const [data, setData] = useState([]);

  useFocusEffect(
    useCallback(() => {
      let marketlist = [];
      fetch('http://192.249.18.131:80/getmarket')
        .then(res => res.json())
        .then(json => {
          for (var i = 0; i < json.length; i++) {
            marketlist.push(json[i]);
          }
          console.log(marketlist);
          setData(marketlist);
        })
        .catch(error => console.log('error', error));

      return () => console.log('bye');
    }, []),
  );

  return (
    <SafeAreaView style={styles.wrap}>
      <View style={styles.header}>
        <Text style={styles.headerText}>자전거 거래</Text>
      </View>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <BikeItem route={item} navigation={navigation} />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <FAB
        buttonColor="#10569B"
        iconTextColor="white"
        onClickAction={() => {
          //alert('FAB pressed');
          navigation.navigate('업로드');
        }}
        visible={true}
        iconTextComponent={<Icon name="add-outline" size={20} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    height: 50,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginLeft: 15,
    marginRight: 15,
    borderBottomWidth: 0.2,
    borderColor: '#cfcfcf',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
