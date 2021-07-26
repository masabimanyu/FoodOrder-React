import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {Button, Gap, Header, TextInput,} from '../../components';
import {signInAction} from '../../redux/action/auth';
import {useForm} from '../../utils';

const SignIn = ({navigation}) => {
  const [form, setForm] = useForm({
    email: '',
    password: '',
  });
  const dispatch = useDispatch();

  const onSubmit = () => {
    dispatch(signInAction(form, navigation));
  };

  const onSubmitEditing = useState();

  return (
    <View style={styles.page}>
      <View style={styles.Atas}>
       <Text style={styles.textAtas}>
                 Eatree
            </Text>
            <Text style={styles.textBawah}>
                 Eat easier with Tree 
            </Text>
            <Text style={styles.textBawah2}>
                 We connect food to your stomach.
            </Text>
     </View>
       <View style={styles.continue}>
                <TextInput
                  label=""
                  placeholder="Email"
                  value={form.email}
                  onChangeText={(value) => setForm('email', value)}
                />
        <Gap height={30} />
                <TextInput
                  label=""
                  placeholder="Password"
                  value={form.password}
                  onChangeText={(value) => setForm('password', value)}
                  secureTextEntry
                />
        <Gap height={55} />
                <Button text="Let's Go" onPress={onSubmit} color="#000" />
        <Gap height={30} />
                <TouchableOpacity>
                  <Text style={styles.regis}>
                  Create Account
                  </Text>
                </TouchableOpacity>
        </View>
        <Gap height={70} />
        <Text style={styles.footer}>
        Chaidar Abimanyu | 2021
        </Text>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  textAtas: {
    fontFamily: 'Poppins-Medium',
    fontSize: 70,
  },
  continue: {
    marginTop: -70,
    paddingHorizontal: 40,
  },
  regis: {
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      fontFamily: 'Poppins-Medium',
  },
  footer: {
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      fontFamily: 'Poppins-Light',
      fontSize: 15,
  },
  textBawah: {
    fontFamily: 'STIXTwoMath-Regular',
    fontSize: 26,
    marginTop: -50,
  },
   textBawah2: {
    fontFamily: 'Poppins-Light',
    fontSize: 17,
    marginTop: '-7%',
  },
   container: {  
    flex: 1,
  },
  Atas: {
    paddingHorizontal: 50,
    paddingVertical: 120,
  },
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
});
