import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {BarChart} from 'react-native-chart-kit';
import {useSelector} from 'react-redux';

import {WINDOW_WIDTH} from '../../../constants/common';
import Style from './styles';
import colors from '../../../constants/colors';

const filterList = {
  WEEK: 'WEEK',
  MONTH: 'MONTH',
  YEAR: 'YEAR',
};

const monthLabels = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

const getCurrentDate = () => {
  const currentDate = new Date();
  return {
    year: currentDate.getFullYear(),
    month: currentDate.getMonth() + 1,
    day: currentDate.getDate(),
    dayOfWeek: currentDate.getDay(),
  };
};

const AlcoholGraph = () => {
  const styles = Style();
  const alcoholDataList = useSelector(
    state => state.alcoholData.alcoholDataList,
  );
  const [filter, setFilter] = useState(filterList.MONTH);
  const [graphData, setGraphData] = useState(
    filterAndCreateMonthArray(alcoholDataList),
  );
  const {
    year: currentYear,
    month: currentMonth,
    day: currentDay,
    dayOfWeek: currentDayOfWeek,
  } = getCurrentDate();

  useEffect(() => {
    updateGraphData();
  }, [filter]);

  function updateGraphData() {
    switch (filter) {
      case filterList.MONTH:
        setGraphData(filterAndCreateMonthArray(alcoholDataList));
        break;
      case filterList.WEEK:
        setGraphData(filterAndCreateWeekArray(alcoholDataList));
        break;
      case filterList.YEAR:
        setGraphData(
          filterAndCreateYearlyArray(aggregateMonthlyData(alcoholDataList)),
        );
        break;
      default:
        break;
    }
  }

  function filterAndCreateMonthArray(data) {
    const filteredData = data.filter(entry => {
      const entryDate = new Date(entry.date);
      return (
        entryDate.getMonth() + 1 === currentMonth &&
        entryDate.getFullYear() === currentYear
      );
    });
    const lastDayOfMonth = new Date(currentYear, currentMonth, 0).getDate();
    const drinksArray = Array.from({length: lastDayOfMonth}, () => 0);

    filteredData.forEach(entry => {
      const entryDay = new Date(entry.date).getDate();
      drinksArray[entryDay - 1] = entry.numberOfDrinks;
    });

    return drinksArray;
  }

  function filterAndCreateWeekArray(data) {
    const startOfWeek = new Date(
      currentYear,
      currentMonth - 1,
      currentDay - currentDayOfWeek,
    );
    const endOfWeek = new Date(
      currentYear,
      currentMonth - 1,
      currentDay + (6 - currentDayOfWeek),
    );

    const filteredData = data.filter(entry => {
      const entryDate = new Date(entry.date);
      return entryDate >= startOfWeek && entryDate <= endOfWeek;
    });

    const weekArray = Array.from({length: 7}, () => 0);
    filteredData.forEach(entry => {
      const entryDayOfWeek = new Date(entry.date).getDay();
      weekArray[entryDayOfWeek] = entry.numberOfDrinks;
    });

    return weekArray;
  }

  function aggregateMonthlyData(data) {
    const monthlyAggregates = {};
    data.forEach(entry => {
      const entryDate = new Date(entry.date);
      const yearMonthKey = `${entryDate.getFullYear()}-${
        entryDate.getMonth() + 1
      }`;

      if (!monthlyAggregates[yearMonthKey]) {
        monthlyAggregates[yearMonthKey] = {numberOfDrinks: 0};
      }
      monthlyAggregates[yearMonthKey].numberOfDrinks += entry.numberOfDrinks;
    });

    return monthlyAggregates;
  }

  function filterAndCreateYearlyArray(aggregatedData) {
    const yearlyDataArray = Array.from({length: 12}, (_, index) => {
      const monthToRetrieve = currentMonth - index;
      const yearToRetrieve =
        currentYear - Math.floor((currentMonth - index - 1) / 12);

      const yearMonthKey = `${yearToRetrieve}-${monthToRetrieve}`;
      return aggregatedData[yearMonthKey]
        ? aggregatedData[yearMonthKey].numberOfDrinks
        : 0;
    });

    return yearlyDataArray.reverse();
  }

  const getBarPercentage = () => {
    switch (filter) {
      case filterList.MONTH:
        return 0.2;
      case filterList.WEEK:
        return 1;
      case filterList.YEAR:
        return 0.7;
      default:
        return 0.2;
    }
  };

  const chartConfig = {
    backgroundGradientFrom: colors.PRIMARY_01,
    backgroundGradientFromOpacity: 0.2,
    backgroundGradientTo: colors.PRIMARY_01,
    backgroundGradientToOpacity: 0,
    color: () => colors.PRIMARY_01,
    strokeWidth: 0,
    barPercentage: getBarPercentage(),
    decimalPlaces: 0,
  };

  const data = {
    labels: monthLabels,
    datasets: [
      {
        data: graphData,
      },
    ],
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Alcohol Graph</Text>
      <View style={styles.selectorContainer}>
        {Object.values(filterList).map(filterItem => (
          <TouchableOpacity
            key={filterItem}
            style={[styles.selector, filter === filterItem && styles.selected]}
            onPress={() => setFilter(filterItem)}>
            <Text style={styles.label}>{filterItem}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <BarChart
        data={data}
        width={WINDOW_WIDTH}
        height={220}
        chartConfig={chartConfig}
        withDots={false}
        withInnerLines={false}
        style={{marginLeft: -40}}
        withVerticalLabels={false}
      />
      {/* <Text style={styles.summeryTitle}>Summery</Text> */}
    </View>
  );
};

export default AlcoholGraph;
