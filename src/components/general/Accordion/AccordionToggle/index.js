import React from "react";
import Button from '../../Button'

const AccordionToggle = ({ toggled, ...props }) => (
  <Button {...props}>
    {toggled ? <span>&uarr;</span> : <span>&darr;</span>}
  </Button>
);

export default AccordionToggle;
