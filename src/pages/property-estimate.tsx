import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { useTheme } from '@material-ui/core'
import { Box, Button, Divider, Grid, Stack, Typography, useMediaQuery } from '@material-ui/core';
import { useForm } from 'react-hook-form';

import PropertySlider from '../components/property-slider';
import HtmlTooltip from '../components/html-tooltip';
import Bar from '../components/chart/bar';
import Spline from '../components/chart/spline';

import { RootState } from '../store/store';
import { PropertyStyle } from '../services/types/property-response.type';
import { mapStyleMonth, maptAttributes } from '../services/property-services';
import { formatCurrency } from '../common/internationalization';
import StyleText from '../components/style-text';
import { LoadingButton } from '@material-ui/lab';

export default function PropertyEstimate() {

  const { t } = useTranslation();

  const theme = useTheme();

  let [loading, setLoading] = useState(false);
  const [growthChecked, setGrowthChecked] = useState(true);

  const client = useSelector((state: RootState) => state.client);
  const property = useSelector((state: RootState) => state.server.property);
  const propertyStyle = useSelector((state: RootState) => state.client.propertyStyle);

  const attributes: any = property && maptAttributes(property);
  const styleMap = [PropertyStyle.Detached, PropertyStyle.SemiDetached, PropertyStyle.Townhome, PropertyStyle.Condo, PropertyStyle.Unknown];

  const isBreakPoint = useMediaQuery(theme.breakpoints.only('xs'));

  const hasData = !!(property && property.avm);

  function getStyleString(style: PropertyStyle): string {
    switch (style) {
      case PropertyStyle.Detached:
        return t("Single Family Detached");
      case PropertyStyle.SemiDetached:
        return t("Semi Detached");
      case PropertyStyle.Condo:
        return t("Condo Apartment");
      case PropertyStyle.Townhome:
        return t("Row Townhouse");
      case PropertyStyle.Unknown:
        return t("Unknown");
      default:
        const _exhaustiveCheck: never = style;
        return _exhaustiveCheck;
    }
  }

  const propertyStyleRange = [
    ['Detached', formatCurrency(attributes.currentMonthLower_SFD), formatCurrency(attributes.currentMonthUpper_SFD), attributes.currentMonthYoY_SFD + "%"],
    ['Semi-detached', formatCurrency(attributes.currentMonthLower_SD), formatCurrency(attributes.currentMonthUpper_SD), attributes.currentMonthYoY_SD + "%"],
    ['Row Townhouse', formatCurrency(attributes.currentMonthLower_ROW), formatCurrency(attributes.currentMonthUpper_ROW), attributes.currentMonthYoY_ROW + "%"],
    ['Condo', formatCurrency(attributes.currentMonthLower_CONDO), formatCurrency(attributes.currentMonthUpper_CONDO), attributes.currentMonthYoY_CONDO + "%"]
  ];

  const [currentMonthLower, currentMonthUpper] = mapStyleMonth(attributes, propertyStyle);
  const currentMonthSpan = currentMonthUpper - currentMonthLower;

  return (
    <form>
      <Stack
        spacing={2}>
        <Grid>
          <Typography
            variant="h4">
            {t('Your Property Estimate Results')}
          </Typography>
          <Typography>
            {t('PROPERTY_ESTIMATE_RESULTS')}
          </Typography>
        </Grid>
        <Grid>
          <Typography
            variant="h3">
            {t('Estimated Property Value Range')}
            <HtmlTooltip tooltip={t('ESTIMATED_PROPERTY_VALUE_RANGE')} />
          </Typography>
        </Grid>
        {hasData ?
          <>
            <Grid>
              <Grid item
                mt={-1}>
                <Grid
                  container
                  direction="column"
                  alignItems="center">
                  <Typography
                    variant="h4"
                    color='rpsAzure.main'>
                    {t('Estimated Property Value')}
                  </Typography>
                  <Typography
                    color='rpsLightGray.main'>
                    {formatCurrency(attributes.valueEstimate)}
                  </Typography>
                </Grid>
                {/* <PropertySlider low={25} middle={50} high={75} /> */}
                <Grid item
                  mx={1}>
                  <PropertySlider low={(attributes.lowerBound - currentMonthLower) / currentMonthSpan * 100}
                    middle={(attributes.valueEstimate - currentMonthLower) / currentMonthSpan * 100}
                    high={(attributes.upperBound - currentMonthLower) / currentMonthSpan * 100} />
                </Grid>
              </Grid>
              <Grid>
                <Box
                  color="rpsDarkBlue.main"
                  fontSize="min(2.4vw, 14px)">
                  <Grid container
                    justifyContent="space-between">
                    <Grid item>
                      <Grid container
                        direction="column"
                        alignItems="center">
                        <Grid item
                          color="rpsDarkBlue.main">
                          {t('Neighbourhood Low')}
                        </Grid>
                        <Grid item>
                          {formatCurrency(currentMonthLower)}
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <Grid container
                        direction="column"
                        alignItems="center">
                        <Grid item
                          color="rpsDarkBlue.main">
                          {t('Property Value Range')}
                        </Grid>
                        <Grid item>
                          {formatCurrency(attributes.lowerBound)}-{formatCurrency(attributes.upperBound)}
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <Grid container
                        direction="column"
                        alignItems="center">
                        <Grid item
                          color="rpsDarkBlue.main">
                          {t('Neighbourhood High')}
                        </Grid>
                        <Grid item>
                          {formatCurrency(currentMonthUpper)}
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid><Grid container>
              <Grid container
                justifyContent="space-between">
                <Grid item>
                  <Typography
                    variant="h5"
                    color="rpsDarkBlue.main">
                    {t('Property')}
                  </Typography>
                </Grid>
                <Grid item
                  xs={8}>
                  {client.address?.fullAddress}
                </Grid>
              </Grid>
              <Grid container
                justifyContent="space-between">
                <Grid item>
                  <Typography
                    variant="h5"
                    color="rpsDarkBlue.main">
                    {t('Neighbourhood')}
                  </Typography>
                </Grid>
                <Grid item
                  xs={8}>
                  {attributes.currentMonthGeoName_CONDO}
                </Grid>
              </Grid>
              <Grid container
                justifyContent="space-between">
                <Grid item>
                  <Typography
                    variant="h5"
                    color="rpsDarkBlue.main">
                    {t('Property Style')}
                  </Typography>
                </Grid>
                <Grid item
                  xs={8}>
                  {getStyleString(propertyStyle)}
                </Grid>
              </Grid>
            </Grid><Stack spacing={1}>
              <Typography
                variant="h5">
                {t('Estimated Scores')}
                <HtmlTooltip tooltip={t('Tooltip')} />
              </Typography>
              <Grid
                container
                justifyContent="space-between">
                <Grid item>
                  <Typography
                    variant="h5"
                    color="rpsDarkBlue.main">
                    {t('Accuracy')}
                    <HtmlTooltip tooltip={t('ACCURACY')} />
                  </Typography>
                </Grid>
                <Grid item
                  sm={9}
                  xs={12}>
                  <Stack direction="row">
                    <Grid
                      container
                      spacing={1}>
                      <Grid item>
                        <StyleText active={attributes.confidenceScore !== "Low"}>
                          {t('Good')}
                        </StyleText>
                      </Grid>
                      <Grid item>
                        <StyleText active={attributes.confidenceScore !== "Medium"}>
                          {t('Better')}
                        </StyleText>
                      </Grid>
                      <Grid item>
                        <StyleText active={attributes.confidenceScore !== "High"}>
                          {t('Best')}
                        </StyleText>
                      </Grid>
                    </Grid>
                  </Stack>
                </Grid>
              </Grid>
              {attributes.homogeneityScore &&
                <Grid
                  container
                  justifyContent="space-between">
                  <Grid item>
                    <Typography
                      variant="h5"
                      color="rpsDarkBlue.main">
                      {t('Variability')}
                      <HtmlTooltip tooltip={t('VARIABILITY')} />
                    </Typography>
                  </Grid>
                  <Grid item
                    sm={9}
                    xs={12}>
                    <Grid
                      container
                      spacing={1}>
                      <Grid item>
                        <StyleText active={attributes.homogeneityScore >= 1 / 3}>
                          {t('Low')}
                        </StyleText>
                      </Grid>
                      <Grid item>
                        <StyleText active={attributes.homogeneityScore < 1 / 3 || attributes.homogeneityScore >= 2 / 3}>
                          {t('Medium')}
                        </StyleText>
                      </Grid>
                      <Grid item>
                        <StyleText active={attributes.homogeneityScore < 2 / 3}>
                          {t('High')}
                        </StyleText>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>}
            </Stack><Divider /><Grid>
              <Typography
                variant="h3">
                {t('Neighbourhood Insights')}
                <HtmlTooltip tooltip={t('NEIGHBOURHOOD_INSIGHTS')} />
              </Typography>
              <Typography
                variant="h5">
                {t('House Price Growth Rates for this Property Style')}
              </Typography>
              <Stack direction="row" spacing={1} alignItems="center">
                {/* <Typography> {t('Monthly Growth')}</Typography>
                  <Switch
                    checked={growthChecked}
                    onChange={e => setGrowthChecked(e.target.checked)}
                  /> */}
                <Typography
                  color="rpsDarkBlue.main">
                  {t('Annual Growth')}
                </Typography>
              </Stack>
              <Bar property={attributes} />
            </Grid><Grid>
              <Typography
                variant="h5">
                {t('10-Year House Price Growth Trend for this Property Style')}
              </Typography>
              <Spline property={attributes} style={propertyStyle} />
            </Grid><Grid>
              <Typography
                variant="h5"
                mb={1}>
                {t('Neighbourhood Value Range by Property Style')}
                <HtmlTooltip tooltip={t('NEIGHBOURHOOD_VALUE_RANGE_BY_PROPERTY_STYLE')} />
              </Typography>
              {isBreakPoint ?
                <></> :
                <Grid container
                  color="rpsDarkBlue.main"
                  justifyContent="flex-end">
                  <Grid item
                    sm={3}>
                    {t('Neighbourhood Low')}
                  </Grid>
                  <Grid item
                    sm={3}>
                    {t('Neighbourhood High')}
                  </Grid>
                  <Grid item
                    sm={3}>
                    {t('YoY Change')}
                  </Grid>
                </Grid>}
              <Stack
                spacing={1}
                color="rpsDarkBlue.main"
                mb={1}>
                {propertyStyleRange.map((property, index) => (
                  <div key={property[0]}>
                    <Grid container>
                      <Grid item
                        xs={12}
                        sm={3}
                        color={propertyStyle === styleMap[index] ? 'rpsAzure.main' : ''}
                        fontWeight="bold">
                        {t(property[0])}
                      </Grid>
                      <Grid item sm={3}
                        xs={12}>
                        <Grid container
                          justifyContent="space-between">
                          {isBreakPoint ?
                            <Grid item>
                              {t('Neighbourhood Low')}
                            </Grid> : <></>}
                          <Grid item
                            xs={6}
                            color={propertyStyle === styleMap[index] ? 'rpsAzure.main' : 'rpsLightGray.main'}>
                            {t(property[1])}
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item sm={3} xs={12}>
                        <Grid container
                          justifyContent="space-between">
                          {isBreakPoint ?
                            <Grid item>
                              {t('Neighbourhood High')}
                            </Grid> : <></>}
                          <Grid item
                            xs={6}
                            color={propertyStyle === styleMap[index] ? 'rpsAzure.main' : 'rpsLightGray.main'}>
                            {t(property[2])}
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item sm={3} xs={12}>
                        <Grid container
                          justifyContent="space-between">
                          {isBreakPoint ?
                            <Grid item>
                              {t('YoY Change')}
                            </Grid> : <></>}
                          <Grid item
                            xs={6}
                            color={propertyStyle === styleMap[index] ? 'rpsAzure.main' : 'rpsLightGray.main'}>
                            {t(property[3])}
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </div>
                ))}
              </Stack>
            </Grid>
            <Divider />
          </> : <>
            <Grid>
              <Typography>
                {t('NO_ESTIMATED_MARKET_VALUE')}
              </Typography>
            </Grid>
            <Grid>
              <Typography>
                {t('GET_A_MARKET_VALUE_ESTIMATE')}
              </Typography>
            </Grid>
          </>}
        <Stack
          mx={8}
          alignItems="center">
          <Typography
            variant="h5">
            {t("Additional Valuations for this Property")}
          </Typography>
          <Typography>
            {t("Want to order an appraisal?")}
          </Typography>
          <Typography
            my={2}>
            {t("ORDER_REPORT")}
          </Typography>
          <LoadingButton
            loading={loading}
            target="_blank"
            href="https://access.rpsrealsolutions.com/"
            color="secondary"
            variant="contained"
            size="medium"
            sx={{
              fontSize: 18,
              fontFamily: 'Heebo'
            }}
          >
            {t('Order Now')}
          </LoadingButton>
          <Typography
            my={2}
            sx={{
              fontSize: 10.5,
              color: '#888e9f'
            }}>
            {t('Thank you for choosing RPS for your valuation needs')}
          </Typography>
        </Stack>
      </Stack>
    </form>
  );
}