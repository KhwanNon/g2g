import React from 'react';
import {DEVICE_WIDTH} from '../../../../../base/constant';
import {LineChart} from 'react-native-gifted-charts';
import {colorTextTitle} from '../../../../../base/color';

const LineChartComponemt = () => {
  const data: any = [
    {value: 30000},
    {value: 29000},
    {value: 27000},
    {value: 25000},
    {value: 25000},
    {value: 22000},
    {value: 22000},
    {value: 25000},
    {value: 27000},
    {value: 28000},
  ];
  return (
    <>
      <LineChart
        height={130}
        width={DEVICE_WIDTH * 0.8}
        yAxisColor="#999999"
        xAxisColor="#999999"
        curved={true}
        areaChart
        data={data}
        noOfSections={5}
        hideDataPoints
        startOpacity={0.6}
        endOpacity={0.6}
        color="#D5BD90"
        spacing={40}
        showVerticalLines
        rulesType="solid"
        initialSpacing={0}
        rulesColor="#E2E2E2"
        endFillColor={'#FFF0D2'}
        startFillColor={'#FFF0D2'}
        yAxisTextStyle={{color: colorTextTitle, fontSize: 10}}
      />
    </>
  );
};

export default LineChartComponemt;
