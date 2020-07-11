import React, { useEffect } from 'react';

import { APIHelper } from '../helpers/APIHelper';
import { GenericHelper } from '../helpers/GenericHelper';

export const UrlRedirect: React.FC = () => {
  const promoterId = GenericHelper.getUrlQueryParamByName("promoterId");
  const payerId = GenericHelper.getUrlQueryParamByName("payerId");
  const groupUrl = "https://t.me/brothersvagasp";

  useEffect(() => {
    (async () => {
      const response = await APIHelper.request("POST", "/credit", {
        promoterId,
        payerId,
      });

      console.log(response.data);

      GenericHelper.crossBrowserUrlRedirect(groupUrl);
    })();
  }, [promoterId, payerId]);

  return <p>Aguarde enquanto redirecionamos...</p>;
};
