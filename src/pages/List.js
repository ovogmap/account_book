import React, { useEffect, useState } from 'react';
import { Text, View, Dimensions } from 'react-native';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from 'react-native-chart-kit'
function List() {
  const [vData,setVData] = useState([])
  const defaultWidth = Dimensions.get("window").width;
const data = [
    {
      name: "Seoul",
      population: 21500000,
      color: "rgba(131, 167, 234, 1)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Toronto",
      population: 2800000,
      color: "#F00",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Beijing",
      population: 527612,
      color: "red",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "New York",
      population: 8538000,
      color: "#ffffff",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Moscow",
      population: 11920000,
      color: "rgb(0, 0, 255)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    }
  ];
  const getPercent = (obj) => {
    const total = obj.reduce((acc, curr) => {
      return acc + curr.population;
    }, 0);
    const result = obj
      .sort((a, b) => {
        return (b.population - a.population);
      })
      .map((item) => {
        const percent = Math.floor((item.population * 100) / total);
        return { name: item.name, percent: percent, color: item.color };
      });
    return result;
  };
  useEffect(() => {
    const result = getPercent(data);
    setVData(result);
  }, []);
  return (
    <>
    <View style={{ display: "flex" , justifyContent: "center", alignItems: "center"}} width="100%">
      <PieChart
        data={data}
        width={defaultWidth}
        height={220}
        chartConfig={{
          backgroundColor: "#e26a00",
          backgroundGradientFrom: "#fb8c00",
          backgroundGradientTo: "#ffa726",
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16
          },
          propsForDots: {
            r: "0",
            strokeWidth: "2",
            stroke: "#ffa726"
          }
        }}
        accessor="population"
        backgroundColor="transparent"
        paddingLeft="15"
        absolute
        hasLegend={false}
        avoidFalseZero
        />
    </View>
    <View>
        {vData && vData?.map((item) => {
          return <Text>{item.name}: {item.percent}%</Text>
        }, [])} 
    </View>
        </>
  )
}
export default List;