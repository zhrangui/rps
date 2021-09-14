import { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom"
import { useTranslation } from 'react-i18next';
import { Accordion, AccordionDetails, AccordionSummary, Grid, Paper, Typography, useTheme } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useForm } from 'react-hook-form';

import CanadaPostMap from '../services/canada-post-map';
import { useSelector } from 'react-redux';

import intl, { DateFormat } from '../common/internationalization';


import store, { RootState } from '../stores/store';
import { saveDashboard, resetClient } from '../stores/client-reducer';
import ImgageCard from '../components/image-card';


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

  const partners = [
    "Alterna Bank",
    "Alterna Savings",
    "ATB Financial",
    "B2B Bank",
    "Bridgewater",
    "CMLS",
    "CMLS Adapt",
    "CMLS Attain",
    "CMLS Aveo",
    "First National",
    "Lendwise",
    "Manulife",
    "MCAN/XMC",
    "MCAP",
    "Meridian",
    "Merix",
    "Nesto",
    "Paradigm",
    "People’s Bank",
    "Private Lender",
    "RFA",
    "RMG",
    "TD Bank",
    "Verico LifeCycle",
    "Wealth One",
    "Westbor"
  ]


  let [loading, setLoading] = useState(false);
  useEffect(() => {
    CanadaPostMap();
  });

  return (
    <>
      <Accordion
        defaultExpanded
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
            <a href="https://lp.constantcontactpages.com/cu/KvBuYmU/BrokerWebinars" target="_blank" rel="noopener noreferrer">
              View the Webinar Calendar
            </a>
          </Typography>
          <Typography>
            <b>Homeowner Video</b>
            Here's a short video for homeowners that explains what to expect during the Appraisal process. You can share this with your client to help ensure the process goes as smoothly as possible
            <a href="https://youtu.be/Q30DdT4v4nU" target="_blank" rel="noopener noreferrer">
              View the Webinar Calendar
            </a>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Grid container
        my={2}
        spacing={2}>
        <Grid item
          sm={8}>
          <Typography
            variant="h5"
            color='rpsLightAzure.main'>
            MEET OUR BROKER TEAM
          </Typography>
          <Grid my={2}>
            <Typography
              color='rpsLightAzure.main'>
              Meet our Specialist Team
            </Typography>
            <Typography>
              If you need support for an order in progress, please contact our Broker Specialist Team
            </Typography>
          </Grid>
          <Grid container
            justifyContent="space-around"
            spacing={3}
          >
            <Grid item>
              <ImgageCard url="https://access-uat.rpsrealsolutions.com/BrokerAccess/assets/team/Elenie.jpg"
                content={['Eleni Xindaris', 'Broker Specialist', '1-866-545-7555']}
                email="mailto:brokersupport@rpsrealsolutions.com" />
            </Grid>
            <Grid item>
              <ImgageCard url="https://access-uat.rpsrealsolutions.com/BrokerAccess/assets/team/Suzette.png"
                content={['Suzette Hoyle', 'Broker Specialist Lead', '1-866-545-7555']}
                email="mailto:brokersupport@rpsrealsolutions.com" />
            </Grid>
          </Grid>
          <Grid>
            <Typography
              color='rpsLightAzure.main'>
              Meet our Sales Team
            </Typography>
            <Typography>
              If you are new to RPS, want help to get started or book a meeting, please contact our Sales Team
            </Typography>
          </Grid>
          <Grid container
            justifyContent="space-around"
            spacing={3}
            my={2}>
            <Grid item>
              <ImgageCard url="https://access-uat.rpsrealsolutions.com/BrokerAccess/assets/team/Sabrina.jpg"
                content={['Sabrina Smith', 'Quebec', '514-463-1110', 'Email here']}
                email="mailto:sabrina.smith@rpsrealsolutions.com" />
            </Grid>
            <Grid item>
              <ImgageCard url="https://access-uat.rpsrealsolutions.com/BrokerAccess/assets/team/MarkLange.jpg"
                content={['Mark Lange', 'Ottawa & SWO', '416-460-9360']}
                email="mailto:mark.lange@rpsrealsolutions.com" />
            </Grid>
            <Grid item>
              <ImgageCard url="https://access-uat.rpsrealsolutions.com/BrokerAccess/assets/team/GitaCartwright.jpg"
                content={['Gita Cartwright', 'Ontario & Atlantic', '647-521-9345']}
                email="mailto:gita.cartwright@rpsrealsolutions.com" />
            </Grid>
          </Grid>
          <Grid container
            justifyContent="space-around"
            spacing={3}>
            <Grid item>
              <ImgageCard url="https://access-uat.rpsrealsolutions.com/BrokerAccess/assets/team/Andrea.jpg"
                content={['Andrea Smith', 'Senior Vice President, Business', 'Development']} />
            </Grid>
            <Grid item>
              <ImgageCard url="https://access-uat.rpsrealsolutions.com/BrokerAccess/assets/team/Joel.jpg"
                content={['Joel Bates', 'President']} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item
          sm={4}>
          <Typography
            variant="h5"
            color='rpsLightAzure.main'>
            OUR LENDER PARTNERS
          </Typography>
          <Typography
            color='rpsLightAzure.main'>
            Lender Partner
          </Typography>
          <Grid container
            spacing={2}>
            {
              partners.map((partner, index) =>
                <Grid item
                  key={partner + index}
                  xs={6}>
                  <Paper variant="outlined" square >
                    {partner}
                  </Paper>
                </Grid>
              )
            }
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

