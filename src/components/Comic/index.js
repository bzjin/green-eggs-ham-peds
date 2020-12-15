import React from 'react';
import { useLayoutBreakpoints } from 'ai2jsx';

import Desktop from './Desktop';
import Mobile from './Mobile';
import Ipad from './Ipad';
import XSMobile from './XSMobile';

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
    breakpoint: 290,
    component: XSMobile,
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
