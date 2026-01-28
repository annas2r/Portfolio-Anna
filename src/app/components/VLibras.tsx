import { useEffect } from 'react';

export function VLibras() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://vlibras.gov.br/app/vlibras-plugin.js';
    script.async = true;
    script.onload = () => {
      // @ts-ignore
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      new (window as any).VLibras.Widget('https://vlibras.gov.br/app');
    };
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  // Estrutura exigida pelo widget
  return (
    <div className="vlibras-widget enabled">
      <div className="vw-access-button-active"></div>
      <div className="vw-plugin-wrapper">
        <div className="vw-plugin-top-wrapper"></div>
      </div>
    </div>
  );
}
