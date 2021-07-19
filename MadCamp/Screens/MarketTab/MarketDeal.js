import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
} from 'react-native';
import {useEffect} from 'react/cjs/react.production.min';
import BikeItem from '../../Item/BikeItem';
import FAB from 'react-native-fab';
import Icon from 'react-native-vector-icons/Ionicons';

export default function MarketDeal({route, navigation}) {
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
        <Text style={styles.headerText}>자전거 거래</Text>
      </View>
      <FlatList
        data={data}
        renderItem={({item}) => <BikeItem items={item} />}
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
  },
  header: {
    height: 60,
    borderBottomWidth: 0.2,
    borderColor: 'gray',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
