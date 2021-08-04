import React, { lazy, Suspense, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';
import Header from './components/Header';
import Progress from './components/Progress';
const MarketingApp = lazy(() => import('./components/MarketingApp'));
const AuthApp = lazy(() => import('./components/AuthApp'));
const generateClassName = createGenerateClassName({
  productionPrefix: 'con',
});
export default function App() {
  const [isSignedIn, setSignedIn] = useState(false);
  console.log(isSignedIn);
  function handleSignIn() {
    setSignedIn(true);
  }
  function handleSignOut() {
    setSignedIn(false);
  }
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <Header isSignedIn={isSignedIn} onSignOut={handleSignOut} />
        <Suspense fallback={<Progress />}>
          <Switch>
            <Route path="/auth">
              <AuthApp onSignIn={handleSignIn} />
            </Route>
            <Route path="/" component={MarketingApp} />
          </Switch>
          <MarketingApp />
        </Suspense>
      </StylesProvider>
    </BrowserRouter>
  );
}
