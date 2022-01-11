import React, {useState, useEffect, useCallback} from 'react';
import {View, Text, StyleSheet, Button, ScrollView, Dimensions, TextInput} from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import {fetchMenuItems, fetchExpenses, fetchSales} from '../../libs/api';
import numeral from 'numeral';
import { getUser } from '../../libs/auth';
import TransparentHeader from '../../components/TransparentHeader';
import {StackedBarChart, PieChart} from 'react-native-chart-kit';
import lodash from 'lodash';


export default function DetailSalesScreen({navigation}) {
    
    
    const [graph, setGraph] = useState([]);
    const [userId, setUserId] = useState();
    const [data, setData] = useState({})
    const[name, setName] = useState([]);
    const [profit, setProfit] = useState();
    const [cost, setCost] = useState();
    const [sale, setSale] = useState();
    const [percent, setPercent] = useState();
    var bars = [];
    var dates = [];
    var dailyCost = [];
    var dailySale = [];
    var dailyExpense = [];
    useEffect(() => {
        async function init() {
            const user = await getUser();
            setUserId(user.id);
            console.log("userId: " + user.id);
            const salesData = await fetchSales(user.id)
            
            
            // for(var i=0 ; i<salesData.length ; i++) {
            //     a.push(salesData[i].date);
            //     setDailySale([...dailySale, salesData[i].total_sale-salesData[i].total_cost-Math.round(salesData[i].expense/30)]);
            //     setDailyCost([...dailyCost, salesData[i].total_cost]);
            //     setDailyExpense([...dailyExpense, Math.round(salesData[i].expense/30)]);
            // }
            salesData.map((item) => {
                bars.push([Math.round(item.expense/30), item.total_cost, item.total_sale])
                var t = item.date.split('-');
                dates.push(t[1]+'/'+t[2]);
                dailySale.push(item.total_sale)
                dailyCost.push(item.total_cost);
                dailyExpense.push(Math.round(item.expense/30))
            })
            setGraph(bars);
            setName(dates);
            setCost(lodash.sum(dailyCost) + lodash.sum(dailyExpense));
            setSale(lodash.sum(dailySale));
            setProfit(lodash.sum(dailySale)-(lodash.sum(dailyCost) + lodash.sum(dailyExpense)))
            setPercent(Math.round(((lodash.sum(dailySale)-(lodash.sum(dailyCost) + lodash.sum(dailyExpense)))/lodash.sum(dailySale))*1000)/10)
            // console.log("expenseList: "+expenseList[0].cost)
        }
        init();
    }, []);
    // const data = {
    //     labels: dates,
    //     legend: ["정기 관리비", "원가", "순이익"],
    //     data: [dailyExpense, dailyCost, dailySale],
    //     barColors: ["#dfe4ea", "#ced6e0", "#a4b0be"]
    // };
    const chartConfig={
        backgroundColor: '#fff',
        backgroundGradientFrom: '#fff',
        backgroundGradientTo: '#fff',
        decimalPlaces: 2, // optional, defaults to 2dp
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16
            },
            propsForDots: {
              r: "6",
              strokeWidth: "2",
              stroke: "#ffa726"
            }
          };
    return (
        <View style={styles.background}>
            <View style={styles.header}>
                <TransparentHeader />
                <Text style={styles.salesTitle}>매출 현황</Text>
            </View>
            
            <ScrollView style={styles.container}>
                <Text style={styles.subTitle}>매출 분석</Text>
                <View style = {styles.chartContainer}>
                    <StackedBarChart
                        data={{
                            labels: name,
                            legend: ["관리비", "원가", "매출"],
                            data: graph,
                            barColors: ["#4790CC", "#59B5FF", "#A6D7FF"]
                        }}
                        width={Dimensions.get("window").width-30}
                        height={220}
                        chartConfig={chartConfig}
                        withHorizontalLabels={false}
                        withVerticalLabels={true}
                        style={styles.chart}
                    />
                </View>
                <View>
                    <View style={styles.money}>
                        <Text style={styles.moneyTitle}>총 매출</Text>
                        <Text style={styles.moneyAmount}>{ numeral(sale).format('0,0') +" 원"}</Text>
                    </View>
                    <View style={styles.money}>
                        <Text style={styles.moneyTitle}>총 지출</Text>
                        <Text style={styles.moneyAmount}>{ numeral(cost).format('0,0') +" 원"}</Text>
                    </View>
                    <View style={styles.money}>
                        <Text style={styles.moneyTitle}>순수익</Text>
                        <Text style={styles.moneyAmount}>{ numeral(profit).format('0,0') +" 원"}</Text>
     
                        <Text style={styles.moneyPercent, (percent < 0) ? {color: 'red'}:{color: 'green'}}>{percent + " %"}</Text>
                    </View>
                </View>
            </ ScrollView>
        </View>
        
    );
};



const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#fff',
    },
    container: {
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    salesTitle: {
        fontSize: 20,
        alignContent: 'center',
        marginLeft: 12,
        color: '#000'
    },
    subTitle: {
        fontSize: 24,
        color: '#59B5FF',
        marginLeft: 12,
    },
    salesTitleContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    salesSum: {
        fontSize: 36,
        fontWeight: 'bold'
    },
    detailSales: {
        padding: 12,

    },
    chart: {
    },
    chartContainer: {
        borderColor: '#59B5FF',
        borderTopWidth: 2,
        borderBottomWidth: 2,
        margin: 12,
    },
    money: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 12,
        borderWidth: 2,
        borderColor: '#59B5FF',
        padding: 12,
        borderRadius: 12,
        marginBottom: 12
    },
    moneyTitle: {
        fontSize: 24,
        marginRight: 12,
        fontWeight: 'bold'
    },
    moneyAmount: {
        fontSize: 20,
        marginRight: 12
    },
    moneyPercent: {
        fontSize: 16,
    }
});
