import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  ActivityIndicator,
} from 'react-native';
import {useEffect} from 'react/cjs/react.production.min';
import BikeItem from '../../Item/BikeItem';

export default function MarketScreen({route, navigation}) {
  const [data, setData] = useState([
    //key, title: 제목, price: 가격, detail: 상세정보, reg: item 등록 시간
    {
      key: 1,
      itemTitle: '30년된 자전거 팝니다',
      itemPrice: '300,000원',
      itemDetail:
        '제가 LA에 있을때는 말이죠 정말 제가 꿈에 무대인 메이저리그로 진출해서..',
      itemReg: 10,
      heartClick: false,
    },
    {
      key: 2,
      itemTitle: '30년된 자전거 팝니다',
      itemPrice: '300,000원',
      itemDetail:
        '제가 LA에 있을때는 말이죠 정말 제가 꿈에 무대인 메이저리그로 진출해서..',
      itemReg: 10,
      heartClick: false,
    },
    {
      key: 3,
      itemTitle: '30년된 자전거 팝니다',
      itemPrice: '300,000원',
      itemDetail:
        '제가 LA에 있을때는 말이죠 정말 제가 꿈에 무대인 메이저리그로 진출해서..',
      itemReg: 10,
      heartClick: false,
    },
    {
      key: 4,
      itemTitle: '30년된 자전거 팝니다',
      itemPrice: '300,000원',
      itemDetail:
        '제가 LA에 있을때는 말이죠 정말 제가 꿈에 무대인 메이저리그로 진출해서..',
      itemReg: 10,
      heartClick: false,
    },
    {
      key: 5,
      itemTitle: '30년된 자전거 팝니다',
      itemPrice: '300,000원',
      itemDetail:
        '제가 LA에 있을때는 말이죠 정말 제가 꿈에 무대인 메이저리그로 진출해서..',
      itemReg: 10,
      heartClick: false,
    },
    {
      key: 6,
      itemTitle: '30년된 자전거 팝니다',
      itemPrice: '300,000원',
      itemDetail:
        '제가 LA에 있을때는 말이죠 정말 제가 꿈에 무대인 메이저리그로 진출해서..',
      itemReg: 10,
      heartClick: false,
    },
    {
      key: 7,
      itemTitle: '30년된 자전거 팝니다',
      itemPrice: '300,000원',
      itemDetail:
        '제가 LA에 있을때는 말이죠 정말 제가 꿈에 무대인 메이저리그로 진출해서..',
      itemReg: 10,
      heartClick: false,
    },
    {
      key: 8,
      itemTitle: '30년된 자전거 팝니다',
      itemPrice: '300,000원',
      itemDetail:
        '제가 LA에 있을때는 말이죠 정말 제가 꿈에 무대인 메이저리그로 진출해서..',
      itemReg: 10,
      heartClick: false,
    },
    {
      key: 9,
      itemTitle: '30년된 자전거 팝니다',
      itemPrice: '300,000원',
      itemDetail:
        '제가 LA에 있을때는 말이죠 정말 제가 꿈에 무대인 메이저리그로 진출해서..',
      itemReg: 10,
      heartClick: false,
    },
    {
      key: 10,
      itemTitle: '30년된 자전거 팝니다',
      itemPrice: '300,000원',
      itemDetail:
        '제가 LA에 있을때는 말이죠 정말 제가 꿈에 무대인 메이저리그로 진출해서..',
      itemReg: 10,
      heartClick: false,
    },
  ]);

  return (
    <SafeAreaView style={styles.wrap}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Header</Text>
      </View>
      <FlatList
        data={data}
        renderItem={({item}) => <BikeItem items={item} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
  },
  header: {
    height: 60,
    borderBottomWidth: 0.2,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
