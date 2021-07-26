//Chaidar Abimanyu
//https://github.com/Chaidarabimanyu
import Axios from 'axios';
import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View, RefreshControl} from 'react-native';
import {Picker} from '@react-native-community/picker';
import {
  Button,
  Gap,
  Header,
  ItemValue,
  HomeProfile,
} from '../../components';
import {getData, showMessage, storeData} from '../../utils';

const OrderSummary = ({navigation, route}) => {
            const {item, transaction, userProfile} = route.params;
            const [isPaymentOpen, setIsPaymentOpen] = useState(false);
            const [paymentURL, setPaymentURL] = useState('');
            const [bankSelect, setSelectedBank] = useState('');
            const [refreshing, setRefreshing] = useState(false);
            const OrderId  = Math.floor(Math.random() * 1000) + 10 ;


  const onRefresh = () => {
    setRefreshing(true);
          const config = {
              method: 'get',
              url: `https://api.sandbox.midtrans.com/v2/${paymentURL.order_id}/status`,
              headers: { 
                'Authorization': 'Basic U0ItTWlkLXNlcnZlci1oMHdIQTFubmtoN2pnRzdCUGFwcmJFOFI=', 
                'Content-Type': 'application/json', 
                'Accept': 'application/json'
              },
            };
            Axios(config)
              .then(response => {
                const setData = response.data;
                if (setData.transaction_status === 'settlement'){
                      console.log('berhasil', setData.fraud_status, setData.status_code, setData.status_message, setData.order_id);
                      storeData('setData', setData);
                      navigation.navigate('SuccessOrder');
                } else {
                       console.log('gagal', setData.status_code, setData.transaction_status);
                        showMessage(
                          `${setData.status_message} on Checkout API` ||
                            'Terjadi Kesalahan di API Checkout',
                        );
                };
              });
    setRefreshing(false);
  };
//setting API MIDTRANS 
  const onCheckout = (state) => {
    const payData = null;
    const data = {
              "payment_type": "bank_transfer",
              "bank_transfer": {
                "bank": bankSelect,
              },
              "transaction_details": {
                "order_id": OrderId,
                "gross_amount": transaction.total
              },
                "food_id": item.id,
                "qty":  transaction.totalItem,
                "user_id": userProfile.id
              };

    const config = {
              method: 'post',
              url: 'https://api.sandbox.midtrans.com/v2/charge',
              headers: { 
                'Authorization': '', 
                'Content-Type': 'application/json', 
                'Accept': 'application/json'
              },
              data : data
            };
            
    Axios(config)
              .then(response => {
                const payData = response.data;
                if (payData.fraud_status === 'accept'){
                      console.log('berhasil', payData.fraud_status, payData.status_code, payData.status_message, payData.order_id);
                      storeData('orderData', payData);
                      setIsPaymentOpen(true);
                      setPaymentURL(payData);
                } else {
                       console.log('gagal', payData.fraud_status, payData.status_code, payData.status_message );
                };
              });
    };
         
  
  if (isPaymentOpen) {
    return (
      <>
      <View style={{flex: 1, backgroundColor: '#fff'}}>
      <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
        <Header
           title="Eatree"
           subTitle="Eat easier with Tree | Payment" 
           onBack={() => navigation.navigate('Home')}
        />
      <View style={styles.content}>
        <Text style={styles.label}>Rincian Pembayaran</Text>

         <ItemValue
          label="Nomor Pesanan"
          value={paymentURL.order_id}
        />
        <Gap height={5} />
        <ItemValue
          label="Nomor Virtual Account"
          value={paymentURL.permata_va_number}
        />
         <Gap height={5} />
        <ItemValue
          label="Total Bayar"
          value={paymentURL.gross_amount}
          type="currency"
        />
        <Gap height={50} />
        <Text style={{fontFamily: 'Poppins-Medium', fontSize: 13, color: '#020202'}}>
          Pengingat
          </Text>
          <Text style={{fontFamily: 'Poppins-Light', fontSize: 12, color: '#020202'}}>
          Refresh halaman ini untuk update pembayaran anda.
          </Text>
        
        </View>
       </ScrollView>
        </View>
      </>
    );
  }
  return (
    <View style={styles.page}>
  
      <Header  
              title="Eatree"
              subTitle="Eat easier with Tree | Order Summary" 
        onBack={() => navigation.goBack()}
      />
      <View style={styles.content}>
        <Text style={styles.label}>Detail Pesanan</Text>
        <ItemValue
          label={item.name}
          value={transaction.totalPrice}
          type="currency"
        />
        <ItemValue label="Jasa Pengiriman" value={transaction.driver} type="currency" />
        <ItemValue label="PPN 10%" value={transaction.tax} type="currency" />
         <ItemValue label="Potongan" value={transaction.promo} type="currency" />
        <ItemValue
          label="Total Pembayaran"
          value={transaction.total}
          valueColor="#1ABC9C"
          type="currency"
        />
        <Gap height={10} />
        <View>
        <Text style={styles.label}>Metode Pembayaran </Text>
         <Picker
            selectedValue={bankSelect}
            style={{ height: 30, width: 150, backgroundColor: '#fff', borderRadius: 20,}}
            onValueChange={(itemValue, itemIndex) => setSelectedBank(itemValue)}>
            <Picker.Item label=" Pilih Metode Bayar" disabled />
            <Picker.Item label=" PERMATA VA" value="permata" />
        </Picker>
        </View>
      </View>

      <View style={styles.content}>
        <Text style={styles.label}>Detail Penerima</Text>
        <ItemValue label="Nama" value={userProfile.name} />
        <ItemValue label="No. HP" value={userProfile.phoneNumber} />
        <ItemValue label="Alamat" value={userProfile.address} />
        <ItemValue label="No. Rumah" value={userProfile.houseNumber} />
        <ItemValue label="Kota/Kab" value={userProfile.city} />
      </View>
      <View style={styles.button}>
        <Button text="Pembayaran" onPress={onCheckout} color="#000" />
      </View>
      <Gap height={40} />
    </View>
  );
};

export default OrderSummary;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor:'#fff',
  },
  content: {
    backgroundColor: '#fff',
    paddingHorizontal: 35,
    paddingVertical: 0,
    marginTop: 24,
  },
  label: {
    fontSize: 15,
    fontFamily: 'Poppins-Medium',
    color: '#000',
    marginBottom: 8,
  },
  button: {paddingHorizontal: 14, marginTop: '50%'},
});
