import { useTheme } from '@material-ui/core';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, Tooltip, ColumnSeries, DataLabel } from '@syncfusion/ej2-react-charts';
import PropertyAttributes from '../../services/types/property-attributes.type';

interface Props {
  property: PropertyAttributes;
}

const Bar: React.FC<Props> = ({ property }) => {

  const theme = useTheme();

  const months = property.neighbourhoodTrends?.map(neighbour => {
    return { x: neighbour.yearMonth, y: neighbour.neighbourhoodYoY }
  }).reverse();

  return (
    <>
      <ChartComponent
        primaryXAxis={{
          valueType: 'Category',
          interval: 1,
          majorGridLines: {
            width: 0
          },
          labelRotation: 270
        }}
        chartArea={{
          border: {
            width: 0
          }
        }}
        primaryYAxis={{
          labelFormat: '{value}%',
          majorGridLines: {
            width: 0
          },
          majorTickLines: {
            width: 0
          }
        }}
        tooltip={{
          enable: true
        }}>
        <Inject services={[ColumnSeries, Legend, Category, Tooltip, DataLabel]} />
        <SeriesCollectionDirective>
          <SeriesDirective dataSource={months}
            xName='x'
            yName='y'
            type='Column'
            fill={theme.palette.rpsDarkBlue.main}
          >
          </SeriesDirective>
        </SeriesCollectionDirective>
      </ChartComponent>
    </>
  );
}

export default Bar;