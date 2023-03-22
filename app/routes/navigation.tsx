import {RootStackParamList} from './route';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {header, noHeader} from './style_header';

import OTPPage from '../pages/otp';
import PinPage from '../pages/pin';
import AuthPage from '../pages/auth';
import HomePage from '../pages/home';
import SplashPage from '../pages/splash';
import VerifyKYCPage from '../pages/verify_kyc';
import TermConditionPage from '../pages/auth/term';
import VerifySuccessPage from '../pages/verify_success';
import InputPhonePage from '../pages/auth/input_phone';

import GiftPage from '../pages/home/gift';
import DepositPage from '../pages/home/deposit';
import HistoryPage from '../pages/home/history';
import SettingPage from '../pages/home/settings';
import WithdrawPage from '../pages/home/withdraw';
import GoldTradePage from '../pages/home/gold_trade';
import GoldDepositPage from '../pages/home/gold_deposit';
import GoldExchangePage from '../pages/home/gold_exchange';
import RedeemPage from '../pages/home/gold_exchange/redeem';
import WithdrawBankPage from '../pages/home/deposit/withdraw';
import DeliveryPage from '../pages/home/gold_exchange/redeem/delivery';
import DetailsRedeemPage from '../pages/home/gold_exchange/redeem/details';
import GoldTransferPage from '../pages/home/gift/gold_transfer';

import FormProfilePage from '../pages/home/settings/profile/form';
import ProfilePage from '../pages/home/settings/profile';
import MyPhonePage from '../pages/home/settings/profile/my_phone';
import EditPhonePage from '../pages/home/settings/profile/my_phone/edit';
import AddBankPage from '../pages/home/settings/add_bank';
import FormAddBankPage from '../pages/home/settings/add_bank/form';
import PolicyPage from '../pages/home/settings/policy';
import ContactUsPage from '../pages/home/settings/contact';

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashPage} options={noHeader} />
        <Stack.Screen name="Auth" component={AuthPage} options={noHeader} />
        <Stack.Screen name="Home" component={HomePage} options={noHeader} />
        <Stack.Screen
          name="InputPhone"
          component={InputPhonePage}
          options={header('ยืนยันหมายเลขโทรศัพท์')}
        />
        <Stack.Screen
          name="Term"
          component={TermConditionPage}
          options={header('ข้อตกลงและเงื่อนไข')}
        />
        <Stack.Screen
          name="OTP"
          component={OTPPage}
          options={header('ยืนยันหมายเลขโทรศัพท์')}
        />
        <Stack.Screen
          name="Pin"
          component={PinPage}
          options={header('Pin Code')}
        />
        <Stack.Screen
          name="VerifySuccess"
          component={VerifySuccessPage}
          options={noHeader}
        />
        <Stack.Screen
          name="Deposit"
          component={DepositPage}
          options={header('เติมเงิน')}
        />
        <Stack.Screen
          name="Gift"
          component={GiftPage}
          options={header('ส่งของขวัญ')}
        />
        <Stack.Screen
          name="GoldDeposit"
          component={GoldDepositPage}
          options={header('ฝากทอง')}
        />
        <Stack.Screen
          name="GoldExchange"
          component={GoldExchangePage}
          options={header('แลกทองคำ')}
        />
        <Stack.Screen
          name="GoldTrade"
          component={GoldTradePage}
          options={header('ซื้อขายทองคำ')}
        />
        <Stack.Screen
          name="History"
          component={HistoryPage}
          options={header('History')}
        />
        <Stack.Screen
          name="Setting"
          component={SettingPage}
          options={header('ตั้งค่า')}
        />
        <Stack.Screen
          name="Withdraw"
          component={WithdrawPage}
          options={header('ถอนเงิน')}
        />
        <Stack.Screen
          name="VerifyKYC"
          component={VerifyKYCPage}
          options={header('การยืนยันตัวตน')}
        />
        <Stack.Screen
          name="FormProfile"
          component={FormProfilePage}
          options={noHeader}
        />
        <Stack.Screen
          name="Profile"
          component={ProfilePage}
          options={header('ข้อมูลของฉัน')}
        />
        <Stack.Screen
          name="MyPhone"
          component={MyPhonePage}
          options={header('หมายเลขโทรศัพท์')}
        />
        <Stack.Screen
          name="EditPhone"
          component={EditPhonePage}
          options={header('ยืนยันหมายเลขโทรศัพท์')}
        />
        <Stack.Screen
          name="AddBank"
          component={AddBankPage}
          options={header('เพิ่มธนาคาร')}
        />
        <Stack.Screen
          name="FormAddBank"
          component={FormAddBankPage}
          options={header('บัญชีของคุณ')}
        />
        <Stack.Screen
          name="Policy"
          component={PolicyPage}
          options={header('นโยบาย')}
        />
        <Stack.Screen
          name="Contact"
          component={ContactUsPage}
          options={header('ติดต่อเรา')}
        />
        <Stack.Screen
          name="WithdrawBank"
          component={WithdrawBankPage}
          options={header('ถอนเงิน')}
        />
        <Stack.Screen
          name="Redeem"
          component={RedeemPage}
          options={header('แลกทองคำ')}
        />
        <Stack.Screen
          name="DetailsRedeem"
          component={DetailsRedeemPage}
          options={header('แลกทองคำ')}
        />
        <Stack.Screen
          name="Delivery"
          component={DeliveryPage}
          options={header('แลกทองคำ')}
        />
        <Stack.Screen
          name="GoldTransfer"
          component={GoldTransferPage}
          options={header('โอนทองคำผ่านระบบ')}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
