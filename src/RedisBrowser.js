import React, { useState } from 'react';
import { Box, Button, Collapsible, Heading, Grommet, Layer, ResponsiveContext } from 'grommet';

import { FormClose, Tree } from 'grommet-icons';

import KeyBrowser from './KeyBrowser';

const theme = {
  global: {
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  },
};

const AppBar = props => (
  <Box
    tag="header"
    direction="row"
    align="center"
    justify="between"
    background="brand"
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    elevation="medium"
    style={{ zIndex: '1' }}
    {...props}
  />
);

const RedisBrowser = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <Grommet theme={theme} full>
      <ResponsiveContext.Consumer>
        {size => (
          <Box fill>
            <AppBar>
              <Heading level="3" margin="none">
                Redis Browser
              </Heading>
              <Button icon={<Tree />} onClick={() => setShowSidebar(!showSidebar)} />
            </AppBar>

            <Box direction="row" flex overflow={{ horizontal: 'hidden' }}>
              <Box flex align="center" justify="center">
                editor UI coming soon
              </Box>
              {showSidebar && size === 'small' ? (
                <Layer>
                  <Box
                    background="light-2"
                    tag="header"
                    justify="end"
                    align="center"
                    direction="row"
                  >
                    <Button icon={<FormClose />} onClick={() => setShowSidebar(!showSidebar)} />
                  </Box>
                  <Box fill background="light-6">
                    <KeyBrowser />
                  </Box>
                </Layer>
              ) : (
                <Collapsible direction="horizontal" open={showSidebar}>
                  <Box
                    flex
                    width="medium"
                    background="light-6"
                    elevation="small"
                    align="start"
                    justify="start"
                    overflow={{ horizontal: 'scroll', vertical: 'scroll' }}
                  >
                    <KeyBrowser />
                  </Box>
                </Collapsible>
              )}
            </Box>
          </Box>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
};

export default RedisBrowser;
