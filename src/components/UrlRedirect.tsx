import _ from 'lodash';
import React, { useEffect } from 'react';

import { APIHelper } from '../helpers/APIHelper';
import { GenericHelper } from '../helpers/GenericHelper';
import { ICampaign } from '../types/payer.types';

export const UrlRedirect: React.FC = () => {
  const promoterId = GenericHelper.getUrlQueryParamByName("promoterId");
  // const payerId = GenericHelper.getUrlQueryParamByName("payerId");
  // const groupUrl = "https://t.me/brothersvagasp";

  const payers: ICampaign[] = [
    { payerId: 5, groupUrl: "https://t.me/empregourgenteSPc" },
    { payerId: 3, groupUrl: "https://t.me/brothersvagasp" },
  ];
  let campaign: ICampaign | null = null;

  const n = _.random(10);

  if (n >= 0 && n <= 4) {
    campaign = payers[0];
  }
  if (n >= 5 && n <= 10) {
    campaign = payers[1];
  }

  useEffect(() => {
    if (campaign) {
      (async () => {
        const response = await APIHelper.request("POST", "/credit", {
          promoterId,
          payerId: campaign.payerId,
        });

        console.log(response.data);

        GenericHelper.crossBrowserUrlRedirect(campaign.groupUrl);
      })();
    }
  }, [campaign, promoterId]);

  return <p>Aguarde enquanto redirecionamos...</p>;
};
