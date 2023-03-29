import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {RootStackParamList} from './route';

import {header, noHeader} from './style_header';

import InputPhonePage from '../pages/auth/input_phone';
import VerifySuccessPage from '../pages/verify_success';
import TermConditionPage from '../pages/auth/term';
import VerifyKYCPage from '../pages/verify_kyc';
import SplashPage from '../pages/splash';
import HomePage from '../pages/home';
import AuthPage from '../pages/auth';
import OTPPage from '../pages/otp';
import PinPage from '../pages/pin';

import DeliveryPage from '../pages/home/gold_exchange/redeem/delivery';
import DetailsRedeemPage from '../pages/home/gold_exchange/redeem/details';
import WithdrawBankPage from '../pages/home/deposit/withdraw';
import RedeemPage from '../pages/home/gold_exchange/redeem';
import GoldTransferPage from '../pages/home/gift/gold_transfer';
import GoldExchangePage from '../pages/home/gold_exchange';
import GoldDepositPage from '../pages/home/gold_deposit';
import NotificationPage from '../pages/home/notification';
import GoldTradePage from '../pages/home/gold_trade';
import WithdrawPage from '../pages/home/withdraw';
import DepositPage from '../pages/home/deposit';
import SettingPage from '../pages/home/settings';
import HistoryPage from '../pages/home/history';
import GiftPage from '../pages/home/gift';

import EditPhonePage from '../pages/home/settings/profile/my_phone/edit';
import FormAddBankPage from '../pages/home/settings/add_bank/form';
import MyPhonePage from '../pages/home/settings/profile/my_phone';
import FormProfilePage from '../pages/home/settings/profile/form';
import AddBankPage from '../pages/home/settings/add_bank';
import ContactUsPage from '../pages/home/settings/contact';
import ProfilePage from '../pages/home/settings/profile';
import PolicyPage from '../pages/home/settings/policy';

const Stack = createNativeStackNavigator<RootStackParamList>();

function Navigation() {
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
        <Stack.Screen
          name="Notification"
          component={NotificationPage}
          options={header('แจ้งเตือน')}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
