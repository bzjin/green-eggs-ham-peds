import React from 'react';
import { useLayoutBreakpoints } from 'ai2jsx';

import Desktop from './Desktop';
import Artboard_6 from './Artboard_6';

const LAYOUTS = {
  Desktop: {
    breakpoint: 800,
    component: Desktop,
  },
  Artboard_6: {
    breakpoint: 450,
    component: Artboard_6,
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
