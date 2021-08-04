import React, { useRef, useEffect } from 'react';
import { mount } from 'auth/AuthApp';
import { useHistory } from 'react-router-dom';

export default function AuthApp({ onSignIn }) {
  const appRoot = useRef();
  const history = useHistory();
  useEffect(() => {
    const { onParentNavigate } = mount(appRoot.current, {
      initialPath: history.location.pathname,
      onNavigate: ({ pathname: nextPathname }) => {
        if (history.location.pathname !== nextPathname) {
          history.push(nextPathname);
        }
      },
      onSignIn,
    });
    history.listen(onParentNavigate);
  }, []);
  return <div ref={appRoot} />;
}
