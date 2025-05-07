'use client';

import { useEffect } from 'react';

export default function MoblixWidget() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://matka.lojamoblix.com/js/iframe.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <ins
      id="widgetFrame"
      data-width="100%"
      data-height="410px"
      data-host="aereo.matka.com.br"
      data-redirect-blank="true"
      data-bg=""
      data-fcolor=""
      data-lcolor=""
      data-btncolor=""
      data-aid=""
      style={{ display: 'block' }}
    />
  );
}
