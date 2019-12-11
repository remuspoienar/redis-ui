import React, { useState } from 'react';
import { Accordion, AccordionPanel, Box, Heading, ThemeContext, Button } from 'grommet';

const richAccordionTheme = {
  accordion: {
    border: false,
  },
};

const PanelContent = ({ label, icon, hovering }) => {
  return (
    <Box round direction="row" align="center" gap="small" pad={{ left: 'medium', right: 'medium' }}>
      {icon}
      <Heading level={4} color={hovering ? 'dark-1' : 'dark-3'}>
        {label}
      </Heading>
    </Box>
  );
};
const RichPanel = ({ children, icon, label }) => {
  const [hovering, setHovering] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const content = <PanelContent label={label} icon={icon} hovering={hovering} />;

  const contentProps = {
    round: true,
    background: 'light-2',
    margin: {
      top: 'small',
      bottom: 'small',
      left: 'medium',
      right: 'medium',
    },
    width: { min: 'small', max: 'small' },
    height: { min: 'xxsmall', max: 'large' },
    onMouseOver() {
      setHovering(true);
    },
    onMouseOut() {
      setHovering(false);
    },
    onFocus() {
      setHovering(true);
    },
    onBlur() {
      setHovering(false);
    },
  };
  const hasChildren = !!children;

  const onClickHandler = () => {
    setIsOpen(!isOpen);
  };

  return hasChildren ? (
    <AccordionPanel label={content} {...contentProps} onClick={onClickHandler}>
      {isOpen && children}
    </AccordionPanel>
  ) : (
    <Box {...contentProps} elevation="medium">
      <Button label={label} fill onClick={() => {}}></Button>
    </Box>
  );
};

const PanelGroup = ({ children }) => {
  return (
    <Accordion margin={{ left: 'large' }} multiple>
      {children}
    </Accordion>
  );
};

const KeyBrowser = () => {
  return (
    <Box>
      <ThemeContext.Extend value={richAccordionTheme}>
        <Accordion multiple>
          <RichPanel label="a">
            <PanelGroup>
              <RichPanel label="b">
                <PanelGroup>
                  <RichPanel label="c" />
                  <RichPanel label="d">
                    <PanelGroup>
                      <RichPanel label="f" />
                      <RichPanel label="g" />
                    </PanelGroup>
                  </RichPanel>
                  <RichPanel label="e">
                    <PanelGroup>
                      <RichPanel label="h" />
                      <RichPanel label="i" />
                    </PanelGroup>
                  </RichPanel>
                </PanelGroup>
              </RichPanel>
            </PanelGroup>
          </RichPanel>
        </Accordion>
      </ThemeContext.Extend>
    </Box>
  );
};

export default KeyBrowser;
