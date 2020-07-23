import React, { useEffect } from 'react';

import { GenericHelper } from '../helpers/GenericHelper';

export const UrlRedirect: React.FC = () => {
  useEffect(() => {
    GenericHelper.crossBrowserUrlRedirect("https://t.me/empregourgenteSPc");
  }, []);

  return <p>Aguarde enquanto redirecionamos...</p>;
};
