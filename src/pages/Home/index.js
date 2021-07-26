import React, {useEffect} from 'react';
import {ScrollView, StyleSheet, View, Text, TextInput, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {FoodCard, Gap, HomeProfile, Card} from '../../components';
import {getFoodData} from '../../redux/action';

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const {food} = useSelector((state) => state.homeReducer);

  useEffect(() => {
    dispatch(getFoodData());
  }, []);
  return (
      <View style={styles.page}>
        <HomeProfile
        title="Eatree"
        subTitle="Eat easier with Tree | Home" />
        <View style={styles.viewInput}>
        <Gap height={20} />
        <TextInput style={styles.InputId}
        placeholder="Find Foods"
        placeholderTextColor="#8c8c8c" />
        </View>
        <View style={{backgroundColor: '#1a1a1a', }}>
        <View style={{backgroundColor: '#1a1a1a', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
          
            <View style={styles.container}>
            <TouchableOpacity>
              <View style={styles.content}>
                <Text style={styles.text}>Menu</Text>
                  <Text style={styles.textBawah}>Daftar Menu</Text>
              </View>
                </TouchableOpacity>
            </View>
            <View style={styles.containera}>
            <TouchableOpacity>
              <View style={styles.content}>
                <Text style={styles.texta}>Order</Text>
                  <Text style={styles.textBawaha}>Buat Pesanan</Text>
              </View>
            </TouchableOpacity>
            </View>
            <View style={styles.container}>
            <TouchableOpacity>
              <View style={styles.content}>
                <Text style={styles.text}>Booking</Text>
                  <Text style={styles.textBawah}>Pemesanan</Text>
              </View>
              </TouchableOpacity>
            </View>
            </View>
         <View style={styles.atasText}>
            <Text style={styles.Atas}>
            Special For You 
            </Text>
            <Gap height={25} />
            <Card />
        </View>
        <View style={styles.atasText}>
            <Text style={styles.Atas}>
            Top Seller this Month
            </Text>
        </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.foodCardContainer}>
              {food.map((itemFood) => {
                return (
                  <FoodCard
                    key={itemFood.id}
                    name={itemFood.name}
                    image={{uri: itemFood.picturePath}}
                    price={itemFood.price}
                    onPress={() => navigation.navigate('FoodDetail', itemFood)}
                  />
                );
              })}
            </View>
          </ScrollView>
        </View>
      </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {flex: 1,
  backgroundColor: '#1a1a1a'},
  foodCardContainer: {flexDirection: 'row', marginVertical: 15, paddingHorizontal: 20,},
  tabContainer: {flex: 1, backgroundColor:'#004d99'},
  atasText: {
        backgroundColor: '#1a1a1a',
        marginTop: 30,

  },
  Atas: {
        fontFamily: 'Poppins-Medium',
        fontSize: 15,
        color: '#fff',
        marginRight: 180,
        marginLeft: 23,
  },
  InputId: {
        backgroundColor: '#fff', 
        margin: 15, 
        marginTop: 20, 
        marginBottom: 30,
        borderRadius: 10, 
        paddingLeft: 15, 
        fontFamily: 'Poppins-Medium', 
        fontSize: 12,
  },
  viewInput: {
    marginTop: -30,
  },
    container: {
      width: '27.5%',
      backgroundColor: 'white',
      borderRadius: 8,
      shadowColor: '#fff',
      elevation: 14,
      overflow: 'hidden',
      margin: 10,
      marginTop: -10, 
  },
   containera: {
      width: '27%',
      backgroundColor: 'white',
      borderRadius: 8,
      shadowColor: '#fff',
      elevation: 14,
      overflow: 'hidden',
      margin: 10,
      marginTop: -10, 
  },
  image: {width: 200, height: 140, resizeMode: 'cover'},
  content: {padding: 12},
  text: {fontSize: 12, fontFamily: 'Poppins-Medium', color: '#020202',justifyContent: 'center', alignItems: 'center', textAlign: 'center'},
  textBawah: {fontSize: 9, fontFamily: 'Poppins-Regular', color: '#a6a6a6',justifyContent: 'center', alignItems: 'center', textAlign: 'center'},
  texta: {fontSize: 11, fontFamily: 'Poppins-Medium', color: '#000',justifyContent: 'center', alignItems: 'center', textAlign: 'center'},
  textBawaha: {fontSize: 9, fontFamily: 'Poppins-Regular', color: '#a6a6a6',justifyContent: 'center', alignItems: 'center', textAlign: 'center'},
});
