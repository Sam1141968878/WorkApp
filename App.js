/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { PureComponent } from 'react';
import {Dimensions}from 'react-native'
import {StackNavigator,TabNavigator } from 'react-navigation';


import FirstHomePage from './Component/Page/FirstHomePage'
import QrPage from './Component/Page/QrPage'
import MyPage from './Component/Page/MyPage'
import HomePage from './Component/Page/HomePage'
import SuccessfulLandingPage from './Component/Page/SuccessfulLandingPage'
import AnnualReportPage from './Component/Page/AnnualReportPage'
import AssetsViewPage from './Component/Page/AssetsViewPage'
import CapacityViewPage from './Component/Page/CapacityViewPage'
import ConstructionApplicationPage from './Component/Page/ConstructionApplicationPage'
import EnergyEfficiencyPage from './Component/Page/EnergyEfficiencyPage'
import FaultReportPage from './Component/Page/FaultReportPage'
import KnowledgeBasePage from './Component/Page/KnowledgeBasePage'
import MonthlyPage from './Component/Page/MonthlyPage'
import MorePage from './Component/Page/MorePage'
import PatrolCheckPage from './Component/Page/PatrolCheckPage'
import PUEViewPage from './Component/Page/PUEViewPage'
import ServiceRequestPage from './Component/Page/ServiceRequestPage'
import ShiftWorkPage from './Component/Page/ShiftWorkPage'
import WeeklyPage from './Component/Page/WeeklyPage'
import HomePublicPage from './Component/Page/HomePubilcPage'
import LandingPage from './Component/Page/LandingPage'
import DataManagementPage from './Component/Page/DataManagementPage'
import CustomerServicePage from './Component/Page/CustomerServicePage'
import AboutPage from './Component/Page/AboutPage'
import AccountDetailsPage from './Component/Page/AccountDetailsPage'
import AwaitMeManagePage from './Component/Page/AwaitMeManagePage'
import MyAttentionPage from './Component/Page/MyAttentionPage'
import MyMessagePage from './Component/Page/MyMessagePage'
import WarningPage from './Component/Page/WarningPage'
import DescribePage from './Component/Page/DescribePage'
import SearchWarningPage from './Component/Page/SearchWarningPage'
import SearchAssetsPage from './Component/Page/SearchAssetsPage'
import HomePageGoToLandingPage from './Component/PageComponents/HomePage/HomePageGoToLandingPage'
import SelectEquipmentPage from './Component/Page/SelectEquipmentPage'
import GuideImagePage from './Component/Page/GuideImagePage'
import StartImagePage from './Component/Page/StartImagePage'



import QRPatrolCheckDetailPage from './Component/Detail/QRPatrolCheckDetailPage'
import AwaitMeManageDetailPage from './Component/Detail/AwaitMeManageDetailPage'



const MyTab =TabNavigator({
    HomePage:{screen:HomePage},
    QrPage:{screen:QrPage},
    MyPage:{screen:MyPage},
},{
    lazy:true,
    tabBarPosition:'bottom',
    swipeEnabled:true,
    animationEnabled: false,
    removeClippedSubviews:false,
    tabBarOptions:{
        activeTintColor: '#129faa',
        inactiveTintColor: '#adbdc9',
        showIcon: true,
        removeClippedSubviews:false,
        pressColor : '#129faa',
        pressOpacity:0.1,
        initialLayout:{
            height:50,
            width: Dimensions.get('window').width,
        },
        indicatorStyle: {
            height: 0
        },
        tabStyle:{
              height: 50,
              marginTop:5,
        },
        style: {
              backgroundColor: '#0a1336',
        },
        labelStyle: {
              fontSize: 10,
              marginTop:5
        },
    }
})

const App=StackNavigator({
    MyTab:{screen:MyTab},
    LandingPage:{screen:LandingPage},
    HomePublicPage:{screen:HomePublicPage},
    AnnualReportPage:{screen:AnnualReportPage},
    AssetsViewPage:{screen:AssetsViewPage},
    CapacityViewPage:{screen:CapacityViewPage},
    ConstructionApplicationPage:{screen:ConstructionApplicationPage},
    EnergyEfficiencyPage:{screen:EnergyEfficiencyPage},
    FaultReportPlage:{screen:FaultReportPage},
    KnowledgeBasePage:{screen:KnowledgeBasePage},
    MonthlyPage:{screen:MonthlyPage},
    MorePage:{screen:MorePage},
    PatrolCheckPage:{screen:PatrolCheckPage},
    PUEViewPage:{screen:PUEViewPage},
    ServiceRequestPage:{screen:ServiceRequestPage},
    ShiftWorkPage:{screen:ShiftWorkPage},
    WeeklyPage:{screen:WeeklyPage},
    DataManagementPage:{screen:DataManagementPage},
    CustomerServicePage:{screen:CustomerServicePage},
    AboutPage:{screen:AboutPage},
    AccountDetailsPage:{screen:AccountDetailsPage},
    AwaitMeManagePage:{screen:AwaitMeManagePage},
    MyAttentionPage:{screen:MyAttentionPage},
    MyMessagePage:{screen:MyMessagePage},
    WarningPage:{screen:WarningPage},
    HomePageGoToLandingPage:{screen:HomePageGoToLandingPage},
    DescribePage:{screen:DescribePage},
    SearchWarningPage:{screen:SearchWarningPage},
    SearchAssetsPage:{screen:SearchAssetsPage},
    SelectEquipmentPage:{screen:SelectEquipmentPage},
    QRPatrolCheckDetailPage:{screen:QRPatrolCheckDetailPage},
    AwaitMeManageDetailPage:{screen:AwaitMeManageDetailPage},
},{
    headerMode:'none',
    mode:'modal'
})


export default App;























