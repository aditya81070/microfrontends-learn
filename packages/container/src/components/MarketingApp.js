import React, { useRef, useEffect } from 'react';
import { mount } from 'marketing/MarketingApp';

export default function MarketingApp() {
  const appRoot = useRef();

  useEffect(() => {
    mount(appRoot.current);
  }, []);
  return <div ref={appRoot} />;
}
