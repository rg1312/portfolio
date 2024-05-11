import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { TransitionProvider } from '../componet/TransitionContext';
import TransitionComponent from '../componet/Transition';
// import Boxes from '../views/Boxes';
import Scroll from '../views/Scroll';
import Layers from '../views/Layers';

const Router = () => {
  return (
    <TransitionProvider>

<Route
          path="/scroll"
          element={
            <TransitionComponent>
              <Scroll />
            </TransitionComponent>
          }
        />
      
        
        <Route
          path="/layers"
          element={
            <TransitionComponent>
              <Layers />
            </TransitionComponent>
          }
        />
      
    </TransitionProvider>
  );
};

export default Router;