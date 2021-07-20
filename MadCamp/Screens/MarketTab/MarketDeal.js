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
      itemTitle: '10년된 자전거 팝니다',
      itemPrice: '100,000원',
      itemDetail:
        '제가 LA에 있을때는 말이죠 정말 제가 꿈의 무대인 메이저리그로 진출해서..',
      itemReg: 10,
      heartClick: false,
      img: require('../../Image/b1.jpg'),
      mkType: 'none',
    },
    {
      key: 2,
      emailId: '2@kaist.ac.kr',
      itemTitle: '20년된 자전거 팝니다',
      itemPrice: '200,000원',
      itemDetail:
        '제가 LA에 있을때는 말이죠 정말 제가 꿈의 무대인 메이저리그로 진출해서..',
      itemReg: 10,
      heartClick: false,
      img: require('../../Image/b2.jpg'),
      mkType: 'purc',
    },
    {
      key: 3,
      emailId: '3@kaist.ac.kr',
      itemTitle: '30년된 자전거 팝니다',
      itemPrice: '300,000원',
      itemDetail:
        '제가 LA에 있을때는 말이죠 정말 제가 꿈의 무대인 메이저리그로 진출해서..',
      itemReg: 10,
      heartClick: false,
      img: require('../../Image/b3.jpg'),
      mkType: 'purc',
    },
    {
      key: 4,
      emailId: '4@kaist.ac.kr',
      itemTitle: '40년된 자전거 팝니다',
      itemPrice: '400,000원',
      itemDetail:
        '제가 LA에 있을때는 말이죠 정말 제가 꿈의 무대인 메이저리그로 진출해서..',
      itemReg: 10,
      heartClick: false,
      img: require('../../Image/b4.jpg'),
      mkType: 'purc',
    },
    {
      key: 5,
      emailId: '5@kaist.ac.kr',
      itemTitle: '50년된 자전거 팝니다',
      itemPrice: '500,000원',
      itemDetail:
        '제가 LA에 있을때는 말이죠 정말 제가 꿈의 무대인 메이저리그로 진출해서..',
      itemReg: 10,
      heartClick: false,
      img: require('../../Image/b5.jpg'),
      mkType: 'none',
    },
    {
      key: 6,
      emailId: '6@kaist.ac.kr',
      itemTitle: '60년된 자전거 팝니다',
      itemPrice: '600,000원',
      itemDetail:
        '제가 LA에 있을때는 말이죠 정말 제가 꿈의 무대인 메이저리그로 진출해서..',
      itemReg: 10,
      heartClick: false,
      img: require('../../Image/b6.jpg'),
      mkType: 'none',
    },
    {
      key: 7,
      emailId: '7@kaist.ac.kr',
      itemTitle: '70년된 자전거 팝니다',
      itemPrice: '700,000원',
      itemDetail:
        '제가 LA에 있을때는 말이죠 정말 제가 꿈의 무대인 메이저리그로 진출해서..',
      itemReg: 10,
      heartClick: false,
      img: require('../../Image/b7.jpg'),
      mkType: 'none',
    },
    {
      key: 8,
      emailId: '9@kaist.ac.kr',
      itemTitle: '80년된 자전거 팝니다',
      itemPrice: '800,000원',
      itemDetail:
        '제가 LA에 있을때는 말이죠 정말 제가 꿈의 무대인 메이저리그로 진출해서..',
      itemReg: 10,
      heartClick: false,
      img: require('../../Image/b8.jpg'),
      mkType: 'onsale',
    },
    {
      key: 9,
      emailId: '9@kaist.ac.kr',
      itemTitle: '90년된 자전거 팝니다',
      itemPrice: '900,000원',
      itemDetail:
        '제가 LA에 있을때는 말이죠 정말 제가 꿈의 무대인 메이저리그로 진출해서..',
      itemReg: 10,
      heartClick: false,
      img: require('../../Image/b9.jpg'),
      mkType: 'onsale',
    },
    {
      key: 10,
      emailId: '9@kaist.ac.kr',
      itemTitle: '20년된 자전거 팝니다',
      itemPrice: '200,000원',
      itemDetail: '저에게는 2대의 자전거가 있습니다.',
      itemReg: 30,
      heartClick: false,
      img: require('../../Image/b10.jpg'),
      mkType: 'salec',
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
