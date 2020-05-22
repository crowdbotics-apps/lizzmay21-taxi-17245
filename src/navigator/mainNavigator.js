import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile50294Navigator from '../features/UserProfile50294/navigator';
import Maps50275Navigator from '../features/Maps50275/navigator';
import Settings50253Navigator from '../features/Settings50253/navigator';
import Settings50238Navigator from '../features/Settings50238/navigator';
import NotificationList50237Navigator from '../features/NotificationList50237/navigator';
import Maps50236Navigator from '../features/Maps50236/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
UserProfile50294: { screen: UserProfile50294Navigator },
Maps50275: { screen: Maps50275Navigator },
Settings50253: { screen: Settings50253Navigator },
Settings50238: { screen: Settings50238Navigator },
NotificationList50237: { screen: NotificationList50237Navigator },
Maps50236: { screen: Maps50236Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
