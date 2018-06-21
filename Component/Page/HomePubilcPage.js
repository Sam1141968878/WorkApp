/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 * Created by Administrator on 2018/4/19.
 */

import React, { Component,PureComponent } from 'react';
import {
  StyleSheet,
} from 'react-native';

import AnnualReportPage from './AnnualReportPage'
import AssetsViewPage from './AssetsViewPage'
import CapacityViewPage from './CapacityViewPage'
import ConstructionApplicationPage from './ConstructionApplicationPage'
import EnergyEfficiencyPage from './EnergyEfficiencyPage'
import FaultReportPage from './FaultReportPage'
import KnowledgeBasePage from './KnowledgeBasePage'
import MonthlyPage from './MonthlyPage'
import MorePage from './MorePage'
import PatrolCheckPage from './PatrolCheckPage'
import PUEViewPage from './PUEViewPage'
import ServiceRequestPage from './ServiceRequestPage'
import ShiftWorkPage from './ShiftWorkPage'
import WeeklyPage from './WeeklyPage'

export default class HomePubilcPage extends PureComponent{

  render() {
    const {state,goBack,navigate}=this.props.navigation
    //根据传值的不同渲染出不同的组件
    if(state.params.id===1){
        return <FaultReportPage
        goBack={()=>goBack()}
        navigate={navigate}
        />
    }else if(state.params.id===2){
        return <ServiceRequestPage
        goBack={()=>goBack()}
        navigate={navigate}
        />
    }else if(state.params.id===3){
        return <ConstructionApplicationPage
        goBack={()=>goBack()}
        navigate={navigate}
        />
    }else if(state.params.id===4){
        return <AssetsViewPage
        goBack={()=>goBack()}
        navigate={navigate}
        />
    }else if(state.params.id===5){
        return <ShiftWorkPage
        goBack={()=>goBack()}
        navigate={navigate}
        />
    }else if(state.params.id===6){
        return <PatrolCheckPage
        goBack={()=>goBack()}
        navigate={navigate}
        />
    }else if(state.params.id===7){
        return <KnowledgeBasePage
        goBack={()=>goBack()}
        navigate={navigate}
        />
    }else if(state.params.id===8){
        return <PUEViewPage
        goBack={()=>goBack()}
        navigate={navigate}
        />
    }else if(state.params.id===9){
        return <EnergyEfficiencyPage
        goBack={()=>goBack()}
        navigate={navigate}
        />
    }else if(state.params.id===10){
        return <WeeklyPage
        goBack={()=>goBack()}
        navigate={navigate}
        />
    }else if(state.params.id===11){
        return <MonthlyPage
        goBack={()=>goBack()}
        navigate={navigate}
        />
    }else if(state.params.id===12){
        return <AnnualReportPage
        goBack={()=>goBack()}
        navigate={navigate}
        />
    }else if(state.params.id===13){
        return <CapacityViewPage
        goBack={()=>goBack()}
        navigate={navigate}
        />
    }else if(state.params.id===14){
        return <MorePage
        goBack={()=>goBack()}
        navigate={navigate}
        />
    }
  }
}

const styles = StyleSheet.create({

});
