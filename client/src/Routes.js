import React, { lazy, Suspense } from 'react';
import { useReducer,useContext } from 'react';
import { Route,Switch,Redirect, useLocation } from 'react-router-dom';
import {reducer,initialState} from './reducers/userReducer'
import { AnimatePresence, motion } from 'framer-motion';
import { Spinner } from 'reactstrap';

// Layout Blueprints
import { PresentationLayout } from './layout-blueprints';

const LandingPage = lazy(() => import('./example-pages/LandingPage'));
const Profile = lazy(() => import('./example-pages/Profile'));
const Achievements = lazy(() => import('./example-pages/Achievements'));
const Projector = lazy(() => import('./example-pages/Projector'));
const Feed = lazy(() => import('./example-pages/Feed'));
const CreatePost = lazy(() => import('./example-pages/CreatePost'));
const OpensourceC = lazy(() => import('./example-pages/Opensource-C'));
const Dashboard = lazy(() => import('./example-pages/Dashboard'));
const DetailsHondaCivic = lazy(() => import('./example-pages/Details/DetailsHondaCivic'));

const Routes = () => {

  const pageVariants = {
    initial: {
      opacity: 0,
      scale: 0.99
    },
    in: {
      opacity: 1,
      scale: 1
    },
    out: {
      opacity: 0,
      scale: 1.01
    }
  };

  const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.4
  };

  const location = useLocation();
  
  return (
    <AnimatePresence>
      <Suspense
        fallback={
          <div className="d-flex align-items-center vh-100 justify-content-center text-center font-weight-bold font-size-lg py-3">
            <div className="w-50 mx-auto">
              <Spinner type="grow" color="primary" />
            </div>
          </div>
        }>
        <Switch>
          <Redirect exact from="/" to="/LandingPage" />
          <Route path={['/LandingPage']}>
            <PresentationLayout>
              <Switch location={location} key={location.pathname}>
                <motion.div
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={pageTransition}>
                  <Route path="/LandingPage" component={LandingPage} />
                </motion.div>
              </Switch>
            </PresentationLayout>
          </Route>
          <Route path="/Profile" component={Profile} />
          <Route path="/Achievements" component={Achievements} /> 
          <Route path="/Projector" component={Projector} /> 
          <Route path="/Feed" component={Feed} />
          <Route path="/CreatePost" component={CreatePost} />
          <Route path="/OpensourceC" component={OpensourceC} />
          <Route path="/Dashboard" component={Dashboard} />
          <Route path="/DetailsHondaCivic" component={DetailsHondaCivic} />
        </Switch>
      </Suspense>
    </AnimatePresence>
  );
};

export default Routes;
