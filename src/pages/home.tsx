import { useEffect, useState } from 'react';
import { Link, useHistory } from "react-router-dom"
import { useTranslation } from 'react-i18next';
import { Accordion, AccordionDetails, AccordionSummary, Container, Grid, Stack, Typography, useTheme } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
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
    <>
      <Accordion
        sx={{
          backgroundColor: '#e3e3e3'
        }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          id="panel-header">
          <Typography variant="h5">
            Welcome to RPS ACCESS, the leading appraisal order solution.
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <b>Appraisal Delays</b>
            RPS is working closely with our appraiser network to meet the current appraisal volumes. To help, please provide all the information and documentation up front to keep the process moving as quickly as possible. Thank you for your understanding if you experience a delayed response from our Broker Specialist Team. Your order is important to us and we will do our very best to get back to you.
          </Typography>
          <Typography>
            <b>Broker Webinars</b>
            Check out our upcoming webinars including another accredited webinar and watch all the replays here.
            <Link to="https://lp.constantcontactpages.com/cu/KvBuYmU/BrokerWebinars">
              View the Webinar Calendar
            </Link>
          </Typography>
          <Typography>
            <b>Homeowner Video</b>
            Here's a short video for homeowners that explains what to expect during the Appraisal process. You can share this with your client to help ensure the process goes as smoothly as possible
            <Link to="https://youtu.be/Q30DdT4v4nU">
              Watch Video
            </Link>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Grid container
        my={2}>
        <Grid item
          xs={8}>
          <Typography
            variant="h5"
            color='#56befb'>
            MEET OUR BROKER TEAM
          </Typography>
          <Grid>
            
          </Grid>
        </Grid>
        <Grid item
          xs={4}>
          <Typography
            variant="h5"
            color='#56befb'>
            OUR LENDER PARTNERS
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}
