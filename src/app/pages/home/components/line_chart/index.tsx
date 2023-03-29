import React from 'react';
import {LineChart} from 'react-native-gifted-charts';
import {colorTextTitle} from '../../../../../base/color';

type Props = {
  width: number;
};

function LineChartComponemt({width}: Props) {
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
    {value: 27000},
    {value: 28000},
    {value: 27000},
    {value: 28000},
  ];

  return (
    <>
      <LineChart
        height={100}
        width={width}
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
        spacing={30}
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
}

export default LineChartComponemt;
