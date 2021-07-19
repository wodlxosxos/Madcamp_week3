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
import BikeItem from '../../components/BikeItem';
import FAB from 'react-native-fab';
import Icon from 'react-native-vector-icons/Ionicons';

export default function MarketDeal({route, navigation}) {
  const [data, setData] = useState([
    //key, title: 제목, price: 가격, detail: 상세정보, reg: item 등록 시간
    {
      key: 1,
      emailId: '1@kaist.ac.kr',
      itemTitle: '30년된 자전거 팝니다',
      itemPrice: '300,000원',
      itemDetail:
        '제가 LA에 있을때는 말이죠 정말 제가 꿈에 무대인 메이저리그로 진출해서..',
      itemReg: 10,
      heartClick: false,
    },
    {
      key: 2,
      emailId: '2@kaist.ac.kr',
      itemTitle: '30년된 자전거 팝니다',
      itemPrice: '300,000원',
      itemDetail:
        '제가 LA에 있을때는 말이죠 정말 제가 꿈에 무대인 메이저리그로 진출해서..',
      itemReg: 10,
      heartClick: false,
    },
    {
      key: 3,
      emailId: '3@kaist.ac.kr',
      itemTitle: '30년된 자전거 팝니다',
      itemPrice: '300,000원',
      itemDetail:
        '제가 LA에 있을때는 말이죠 정말 제가 꿈에 무대인 메이저리그로 진출해서..',
      itemReg: 10,
      heartClick: false,
    },
    {
      key: 4,
      emailId: '4@kaist.ac.kr',
      itemTitle: '30년된 자전거 팝니다',
      itemPrice: '300,000원',
      itemDetail:
        '제가 LA에 있을때는 말이죠 정말 제가 꿈에 무대인 메이저리그로 진출해서..',
      itemReg: 10,
      heartClick: false,
    },
    {
      key: 5,
      emailId: '5@kaist.ac.kr',
      itemTitle: '30년된 자전거 팝니다',
      itemPrice: '300,000원',
      itemDetail:
        '제가 LA에 있을때는 말이죠 정말 제가 꿈에 무대인 메이저리그로 진출해서..',
      itemReg: 10,
      heartClick: false,
    },
    {
      key: 6,
      emailId: '6@kaist.ac.kr',
      itemTitle: '30년된 자전거 팝니다',
      itemPrice: '300,000원',
      itemDetail:
        '제가 LA에 있을때는 말이죠 정말 제가 꿈에 무대인 메이저리그로 진출해서..',
      itemReg: 10,
      heartClick: false,
    },
    {
      key: 7,
      emailId: '7@kaist.ac.kr',
      itemTitle: '30년된 자전거 팝니다',
      itemPrice: '300,000원',
      itemDetail:
        '제가 LA에 있을때는 말이죠 정말 제가 꿈에 무대인 메이저리그로 진출해서..',
      itemReg: 10,
      heartClick: false,
    },
    {
      key: 8,
      emailId: '8@kaist.ac.kr',
      itemTitle: '30년된 자전거 팝니다',
      itemPrice: '300,000원',
      itemDetail:
        '제가 LA에 있을때는 말이죠 정말 제가 꿈에 무대인 메이저리그로 진출해서..',
      itemReg: 10,
      heartClick: false,
    },
    {
      key: 9,
      emailId: '9@kaist.ac.kr',
      itemTitle: '30년된 자전거 팝니다',
      itemPrice: '300,000원',
      itemDetail:
        '제가 LA에 있을때는 말이죠 정말 제가 꿈에 무대인 메이저리그로 진출해서..',
      itemReg: 10,
      heartClick: false,
    },
    {
      key: 10,
      emailId: '10@kaist.ac.kr',
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
        renderItem={({item}) => (
          <BikeItem route={item} navigation={navigation} />
        )}
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
    //borderBottomWidth: 0.2,
    //borderColor: 'gray',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginLeft: 15,
    marginRight: 15,
    borderBottomWidth: 0.2,
    borderColor: 'gray',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
