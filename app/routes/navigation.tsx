//? navigation
import {RootStackParamList} from './route';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//? style
import {header, noHeader} from './style_header';

//? pages
import OTPPage from '../pages/otp';
import PinPage from '../pages/pin';
import AuthPage from '../pages/auth';
import HomePage from '../pages/home';
import SplashPage from '../pages/splash';
import TermConditionPage from '../pages/auth/term';
import VerifySuccess from '../pages/verify_success';
import InputPhonePage from '../pages/auth/input_phone';

//? ---- Home
import GiftPage from '../pages/home/gift';
import DepositPage from '../pages/home/deposit';
import HistoryPage from '../pages/home/history';
import SettingPage from '../pages/home/settings';
import WithdrawPage from '../pages/home/withdraw';
import GoldTradePage from '../pages/home/gold_trade';
import GoldDepositPage from '../pages/home/gold_deposit';
import GoldExchangePage from '../pages/home/gold_exchange';

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
          component={VerifySuccess}
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
