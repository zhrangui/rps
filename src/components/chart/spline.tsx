import { useTranslation } from 'react-i18next';
import { useTheme } from '@mui/material';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, SplineSeries, Tooltip } from '@syncfusion/ej2-react-charts';
import PropertyAttributes from '../../services/types/property-attributes.type';
import { NeighbourhoodValues, PropertyStyle } from '../../services/types/property-response.type';

interface Props {
  property: PropertyAttributes;
  style: PropertyStyle
}

const Spline: React.FC<Props> = ({ property, style }) => {

  const theme = useTheme();

  const house = property.neighbourhoodValues?.map(neighbour => {
    return {
      x: neighbour.yearMonth, y: neighbour.aggregate
    }
  }).reverse();

  const getStyleValue = (neighbour: NeighbourhoodValues, style: PropertyStyle): number => {
    switch (style) {
      case PropertyStyle.Detached:
        return neighbour.sfd;
      case PropertyStyle.SemiDetached:
        return neighbour.sd;
      case PropertyStyle.Townhome:
        return neighbour.row;
      case PropertyStyle.Condo:
        return neighbour.sd;
      default:
        console.warn("Undefined style")
        return 0;
    }
  }

  const neighbourhood = property.neighbourhoodValues?.map(neighbour => {
    return {
      x: neighbour.yearMonth, y: getStyleValue(neighbour, style)
    }
  }).reverse();

  const { t } = useTranslation();

  return (
    <>
      <ChartComponent
        primaryXAxis={{
          valueType: 'Category',
          interval: 1,
          majorGridLines: {
            width: 0
          },
          labelRotation: 270,
        }}
        chartArea={{
          border: {
            width: 0
          }
        }}
        primaryYAxis={{
          labelFormat: '${value}',
          majorTickLines: {
            width: 0
          },
          minorTickLines: {
            width: 0
          }
        }}
        tooltip={{
          enable: true
        }}>
        <Inject services={[SplineSeries, Legend, Category, Tooltip]} />
        <SeriesCollectionDirective>
          <SeriesDirective
            dataSource={house}
            xName='x'
            yName='y'
            width={2}
            name={t('Property')}
            type='Spline'
            fill={theme.palette.rpsAzure.main}>
          </SeriesDirective>
          <SeriesDirective
            dataSource={neighbourhood}
            xName='x'
            yName='y'
            width={2}
            name={t('Neighbourhood')}
            type='Spline'
            fill={theme.palette.rpsDarkBlue.main}>
          </SeriesDirective>
        </SeriesCollectionDirective>
      </ChartComponent>
    </>
  );
}

export default Spline;