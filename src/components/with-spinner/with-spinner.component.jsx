import React from 'react';

import { SpinnerOverlay, SpinnerContainer } from './with-spinner.styles';

const withSpinner = (Wrapped) => ({ isLoading, ...props }) => {

  return isLoading ? ( 
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay> 
  ) : (
    <Wrapped {...props} />
  )
};

export default withSpinner;