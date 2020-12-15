import React from 'react';
import { useLayoutBreakpoints } from 'ai2jsx';

import Desktop from './Desktop';
import Mobile from './Mobile';
import Ipad from './Ipad';
import XSMobile from './XSMobile';
import SMobile from './SMobile';

const LAYOUTS = {
  Desktop: {
    breakpoint: 800,
    component: Desktop,
  },
  Mobile: {
    breakpoint: 450,
    component: Mobile,
  },
  Ipad: {
    breakpoint: 600,
    component: Ipad,
  },
  XSMobile: {
    breakpoint: 300,
    component: XSMobile,
  },
  SMobile: {
    breakpoint: 400,
    component: SMobile,
  },
};

const Panel1 = () => {
  const layout = useLayoutBreakpoints(LAYOUTS);

  return (
    <div className='ai-panel1'>
      {layout}
    </div>
  );
};

export default Panel1;
