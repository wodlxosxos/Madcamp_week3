import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  ActivityIndicator,
} from 'react-native';

export default function MarketScreen({route, navigation}) {
  return (
    <SafeAreaView style={styles.wrap}>
      <FlatList
        data={data}
        ListHeaderComponent={() => (
          <View style={styles.header}>
            <Text style={styles.headerText}>Header</Text>
          </View>
        )}
        renderItem={({item}) => (
          <Image style={styles.image} source={{uri: item.uri}} />
        )}
        columnWrapperStyle={styles.imageRow}
        numColumns={3}
      />
    </SafeAreaView>
  );
}

const data = [
  {
    id: 1,
    uri: 'https://i.ytimg.com/vi/ZYvvmsrDOj8/maxresdefault.jpg',
  },
  {
    id: 2,
    uri: 'https://i.ytimg.com/vi/ZYvvmsrDOj8/maxresdefault.jpg',
  },
  {
    id: 3,
    uri: 'https://i.ytimg.com/vi/ZYvvmsrDOj8/maxresdefault.jpg',
  },
  {
    id: 4,
    uri: 'https://i.ytimg.com/vi/ZYvvmsrDOj8/maxresdefault.jpg',
  },
];

const data1 = [
  {key: '0', data: 'aaa'},
  {key: '1', data: 'bbb'},
  {key: '2', data: 'ccc'},
  {key: '3', data: 'ddd'},
  {key: '4', data: 'aaa'},
  {key: '5', data: 'bbb'},
  {key: '6', data: 'ccc'},
  {key: '7', data: 'ddd'},
  {key: '8', data: 'aaa'},
  {key: '9', data: 'bbb'},
  {key: '10', data: 'ccc'},
  {key: '11', data: 'ddd'},
];

const data2 = [
  {name: 'sam', message: 'Hello world', img: require('./images/b1.jpg')},
  /*
  {name: 'robin', message: 'Hello rn', img: require('./images/b2.jpg')},
  {name: 'kim', message: 'Hello react', img: require('./images/b3.jpg')},
  {name: 'hong', message: 'Hello hybrid', img: require('./images/b4.jpg')},
  {name: 'rosa', message: 'Hello ios', img: require('./images/b5.jpg')},
  {name: 'lee', message: 'Hello rom', img: require('./images/b7.jpg')},
  {name: 'jack', message: 'Hello tom', img: require('./images/b8.jpg')},
  {name: 'moana', message: 'Hello native', img: require('./images/b9.jpg')},*/
];

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
  },
  header: {
    height: 60,
    //borderBottomWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  imageRow: {
    justifyContent: 'space-between',
  },
  image: {
    width: 110,
    height: 110,
  },
});
