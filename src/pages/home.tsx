import { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom"
import { useTranslation } from 'react-i18next';
import { Button, FormControlLabel, Grid, MenuItem, RadioGroup, Stack, TextField, Typography, useTheme } from '@material-ui/core';
import { useForm, Controller } from 'react-hook-form';

import CanadaPostMap from '../services/canada-post-map';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import { DatePicker, LoadingButton, LocalizationProvider } from '@material-ui/lab';
import { useSelector } from 'react-redux';

import intl, { DateFormat } from '../common/internationalization';

import { getPropertyResponse } from '../services/http-client';
import PropertyRequest from '../services/types/property-request.type';
import { PropertyStyle } from '../services/types/property-response.type';

import store, { RootState } from '../store/store';
import { updateClient, resetClient } from '../store/client-reducer';

import { Financing } from '../services/types/property-attributes.type';
import ImageRadio from '../components/image-radio';
import ColorSwitch from '../components/color-switch';
import CurrencyFormat from '../components/currency-format';
import DateMask from '../components/date-mask';
import ErrorMessage from '../components/error-message';

import mockData from '../tests/mock-data';
import { Translate } from '@material-ui/icons';

export default function Home() {

  const theme = useTheme();

  const { t } = useTranslation();

  const history = useHistory();

  const date0 = new Date(0);

  const renovationTypes = [{
    value: '',
    label: ''
  }, {
    value: 11,
    label: t('Kitchen')
  }, {
    value: 12,
    label: t('Bathroom')
  }, {
    value: 13,
    label: t('Hardwood Floors')
  }, {
    value: 14,
    label: t('Basement')
  }, {
    value: 15,
    label: t('Bedroom')
  }, {
    value: 16,
    label: t('Addition')
  }, {
    value: 17,
    label: t('Windows')
  }, {
    value: 18,
    label: t('Deck')
  }, {
    value: 19,
    label: t('Landscaping')
  }, {
    value: 20,
    label: t('Pool')
  }];

  let address = useSelector((state: RootState) => state.client.address);

  let { originalValue, originalDate, propertyStyle, numMonthsTrend, renovationChecked, renovationType, renovationAmount, renovationDate } = useSelector((state: RootState) => state.client);

  let [loading, setLoading] = useState(false);
  useEffect(() => {
    CanadaPostMap();
  });

  const dispatch = (clientProperty: {}) => {
    store.dispatch(updateClient(clientProperty));
  }

  const { handleSubmit, control } = useForm();

  let isValid = !!address.fullAddress && !!propertyStyle;

  let hasInput = address.fullAddress ||
    propertyStyle ||
    originalValue ||
    originalDate ||
    renovationType ||
    renovationAmount ||
    renovationDate;

  const resetInput = (): void => {
    store.dispatch(resetClient());
  }

  const onSubmit = (data: {}) => {
    const propertyRequest: PropertyRequest = {
      address: { ...address, postalCode: address.postalCode?.replace(/\s/, '') ?? '' },
      hpt: {
        originalValue: parseInt(originalValue),
        originalDate: originalDate ? intl.formatDate(new Date(originalDate), { format: DateFormat.yyyymm }) : '',
        propertyStyle,
        numMonthsTrend,
        renovation: {
          type: renovationType,
          amount: parseInt(renovationAmount),
          date: renovationDate ? intl.formatDate(new Date(renovationDate), { format: DateFormat.yyyymm }) : '',
        }
      }
    }
    setLoading(true);
    getPropertyResponse(propertyRequest).then(data => {
      history.push("/search result")
    }).finally(() => {
      setLoading(false);
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack
        spacing={2}>
        <Grid>
          <Typography
            variant="h4">
            {t('Welcome to RPS RealValue.')}
          </Typography>
          <Typography>
            {t('RPS_REAL_VALUE')}
          </Typography>
        </Grid>
        {!!hasInput &&
          <Grid>
            <Button
              onClick={resetInput}
              variant="contained"
              size="small"
              sx={{
                fontFamily: 'Heebo',
                backgroundColor: theme.palette.rpsLightAzure.main,
                '&:hover': {
                  backgroundColor: theme.palette.rpsLightAzure.main
                }
              }}>
              {t('Clear Fields')}
            </Button>
          </Grid>
        }
        <Controller
          name="addressComplete"
          control={control}
          rules={{ required: `${t('This selection is required')}` }}
          defaultValue={address.fullAddress}
          render={({ field: { onChange }, fieldState: { error } }) => (
            <Stack>
              <Grid item
                xs={10}>
                <Grid
                  container
                  justifyContent='space-between'
                >
                  <Grid item>
                    <Typography variant="h5">
                      {t('Type in the address')}
                    </Typography>
                  </Grid>
                  <Grid item>
                    {!!error && <ErrorMessage> {error.message} </ErrorMessage>}
                  </Grid>
                </Grid>
              </Grid>
              <Grid item
                sm={10}>
                <TextField
                  id="address-complete"
                  size="small"
                  fullWidth={true}
                  label={t('Start typing and select address from the list')}
                  margin="dense"
                  error={!!error}
                  value={address.fullAddress}
                  onChange={e => {
                    onChange(e);
                    dispatch({
                      address: { fullAddress: e.target.value }
                    })
                  }} />
              </Grid>
            </Stack>
          )}
        />
        <Grid item>
          <Controller
            name="propertyStyle"
            control={control}
            rules={{
              pattern: {
                value: /[1-4]/,
                message: `${t('A selection is required')}`
              }
            }}
            defaultValue={propertyStyle}
            render={({ field: { onChange }, fieldState: { error } }) => (
              <>
                <Grid item
                  xs={10}>
                  <Grid
                    container
                    justifyContent='space-between'>
                    <Grid item mr={1}>
                      <Typography variant="h5">
                        {t('Select the property style')}
                      </Typography>
                    </Grid>
                    <Grid item>
                      {!!error && <ErrorMessage> {error.message} </ErrorMessage>}
                    </Grid>
                  </Grid>
                </Grid>
                <RadioGroup
                  value={propertyStyle}
                  onChange={event => {
                    onChange(event);
                    dispatch({ propertyStyle: parseInt(event.target.value) });
                  }}>
                  <Grid item
                    sm={8}>
                    <Grid container
                      justifyContent="space-between">
                      <Grid item>
                        <ImageRadio
                          value={PropertyStyle.Detached}
                          imageAlt={t('Detached')}
                          imageSrc="images/detached.svg">
                          {t('Detached')}
                        </ImageRadio>
                      </Grid>
                      <Grid item>
                        <ImageRadio
                          value={PropertyStyle.SemiDetached}
                          imageAlt={t('Semi-detached')}
                          imageSrc="images/semi-detached.svg">
                          {t('Semi-detached')}
                        </ImageRadio>
                      </Grid>
                      <Grid item>
                        <ImageRadio
                          value={PropertyStyle.Townhome}
                          imageAlt={t('Row townhouse')}
                          imageSrc="images/row townhouse.svg">
                          {t('Row townhouse')}
                        </ImageRadio>
                      </Grid>
                      <Grid item>
                        <ImageRadio
                          value={PropertyStyle.Condo}
                          imageAlt={t('Condo')}
                          imageSrc="images/condo.svg">
                          {t('Condo')}
                        </ImageRadio>
                      </Grid>
                    </Grid>
                  </Grid>
                </RadioGroup>
              </>
            )}
          />
        </Grid>
        <Grid item>
          <Typography variant="h5">
            {t('If available, add purchase details')}
          </Typography>
          <Typography fontSize={12} color="rpsDarkBlue.main">
            {t('Purchase details can help us provide a more accurate property estimate. If you are unsure of the amount or date, please leave both blank.')}
          </Typography>
        </Grid>
        <Grid container>
          <Grid item
            mr={2}
            mt={1}>
            <TextField
              id="purchase-amount"
              size="small"
              label={t('Type amount')}
              value={originalValue}
              onChange={e => dispatch({ originalValue: e.target.value })}
              InputProps={{
                inputComponent: CurrencyFormat as any,
              }} />
          </Grid>
          <Grid item
            mt={1}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                views={['year', 'month']}
                label={t("Select purchase date")}
                minDate={new Date('1941')}
                maxDate={new Date()}
                inputFormat="MMM yyyy"
                value={originalDate}
                clearable
                onChange={newDate =>
                  dispatch({ originalDate: ((newDate && newDate < date0) ? null : newDate) })
                }
                InputProps={{
                  inputComponent: DateMask as any,
                }}
                renderInput={(params) => <TextField {...params} size="small" />} />
            </LocalizationProvider>
          </Grid>
        </Grid>
        {originalValue && originalDate &&
          <>
            <Grid item>
              <FormControlLabel
                control={<ColorSwitch
                  checked={renovationChecked}
                  onChange={(e: { target: { checked: boolean; }; }) =>
                    dispatch({ renovationChecked: e.target.checked })} />
                }
                label={t('Add a renovation')} />
            </Grid>
            {renovationChecked &&
              <>
                <Grid>
                  <Typography variant="h5">
                    {t('Select the renovation type')}
                  </Typography>
                  <Grid item
                    sm={10}>
                    <TextField
                      id="renovation-type"
                      select
                      value={renovationType}
                      onChange={e => dispatch({ renovationType: e.target.value })}
                      size="small"
                      fullWidth={true}
                      margin="dense"
                      label={t('Select the renovation type from list')}>
                      {renovationTypes.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                </Grid>
                <Grid item>
                  <Typography variant="h5">
                    {t('Enter the renovation details')}
                  </Typography>
                  <Typography fontSize={12} color="rpsLightGray.main">
                    {t('Renovation details can help us provide a more accurate property estimate. If you are unsure of the amount or date, please leave this section blank.')}
                  </Typography>
                </Grid>
                <Grid container>
                  <Grid item
                    mr={2}
                    mt={1}>
                    <TextField
                      id="renovation-amount"
                      size="small"
                      label={t('Type amount')}
                      value={renovationAmount}
                      onChange={e => {
                        dispatch({ renovationAmount: e.target.value });
                      }}
                      InputProps={{
                        inputComponent: CurrencyFormat as any,
                      }} />
                  </Grid>
                  <Grid item
                    mt={1}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DatePicker
                        views={['year', 'month']}
                        label={t("Select renovation date")}
                        minDate={new Date('1941')}
                        maxDate={new Date()}
                        inputFormat="MMM yyyy"
                        value={renovationDate}
                        clearable
                        onChange={(newDate) => dispatch({ renovationDate: ((newDate && newDate < date0) ? null : newDate) })}
                        renderInput={(params) => <TextField {...params} size="small" />} />
                    </LocalizationProvider>
                  </Grid>
                </Grid>
              </>
            }
          </>
        }
        <Grid container
          justifyContent="center"
          mt={2}>
          <LoadingButton
            loading={loading}
            type="submit"
            color="secondary"
            variant="contained"
            size="medium"
            disabled={!isValid}
            sx={{
              fontSize: 18,
              fontFamily: 'Heebo'
            }}>
            {t('Get Value')}
          </LoadingButton>
        </Grid>
        <Typography fontSize={12} color="rpsDarkBlue.main" textAlign="center">
          {t('By clicking Get Value, you are agreeing to the Terms and Conditions of using RealValue.')}
        </Typography>
      </Stack >
    </form >
  );
}
