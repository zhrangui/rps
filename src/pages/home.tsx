import { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom"
import { useTranslation } from 'react-i18next';
import { Stack, useTheme } from '@mui/material';
import { useForm } from 'react-hook-form';

import CanadaPostMap from '../services/canada-post-map';
import { useSelector } from 'react-redux';

import intl, { DateFormat } from '../common/internationalization';

import { getPropertyResponse } from '../services/http-client';
import PropertyRequest from '../services/types/property-request.type';

import store, { RootState } from '../stores/store';
import { updateClient, resetClient } from '../stores/client-reducer';



export default function Home() {

  const theme = useTheme();

  const { t } = useTranslation();

  const history = useHistory();


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
      <Stack spacing={2}>

      </Stack >
    </form >
  );
}
