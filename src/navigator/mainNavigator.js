import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList183021Navigator from '../features/ArticleList183021/navigator';
import ArticleList183020Navigator from '../features/ArticleList183020/navigator';
import ArticleList183019Navigator from '../features/ArticleList183019/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
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
