import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList183059Navigator from '../features/ArticleList183059/navigator';
import ArticleList183058Navigator from '../features/ArticleList183058/navigator';
import ArticleList183057Navigator from '../features/ArticleList183057/navigator';
import ArticleList183040Navigator from '../features/ArticleList183040/navigator';
import ArticleList183039Navigator from '../features/ArticleList183039/navigator';
import ArticleList183038Navigator from '../features/ArticleList183038/navigator';
import ArticleList183021Navigator from '../features/ArticleList183021/navigator';
import ArticleList183020Navigator from '../features/ArticleList183020/navigator';
import ArticleList183019Navigator from '../features/ArticleList183019/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList183059: { screen: ArticleList183059Navigator },
ArticleList183058: { screen: ArticleList183058Navigator },
ArticleList183057: { screen: ArticleList183057Navigator },
ArticleList183040: { screen: ArticleList183040Navigator },
ArticleList183039: { screen: ArticleList183039Navigator },
ArticleList183038: { screen: ArticleList183038Navigator },
ArticleList183021: { screen: ArticleList183021Navigator },
ArticleList183020: { screen: ArticleList183020Navigator },
ArticleList183019: { screen: ArticleList183019Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
