import React, { useRef, useEffect } from 'react';
import { mount } from 'marketing/MarketingApp';
import { useHistory, useLocation } from 'react-router-dom';
export default function MarketingApp() {
  const appRoot = useRef();
  const history = useHistory();
  const { pathname } = useLocation();
  useEffect(() => {
    mount(appRoot.current, {
      onNavigate: ({ pathname: nextPathname }) => {
        console.log('container noticed navigation in marketing');
        if (pathname !== nextPathname) {
          history.push(nextPathname);
        }
      },
    });
  }, []);
  return <div ref={appRoot} />;
}
