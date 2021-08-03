import React, { useRef, useEffect } from 'react';
import { mount } from 'marketing/MarketingApp';
import { useHistory, useLocation } from 'react-router-dom';
export default function MarketingApp() {
  const appRoot = useRef();
  const history = useHistory();
  const { pathname } = useLocation();
  useEffect(() => {
    const { onParentNavigate } = mount(appRoot.current, {
      onNavigate: ({ pathname: nextPathname }) => {
        if (pathname !== nextPathname) {
          history.push(nextPathname);
        }
      },
    });
    history.listen(onParentNavigate);
  }, []);
  return <div ref={appRoot} />;
}
