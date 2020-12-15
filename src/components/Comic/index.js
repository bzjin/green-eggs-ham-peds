import React from 'react';
import { useLayoutBreakpoints } from 'ai2jsx';

import Artboard_1 from './Artboard_1';

const LAYOUTS = {
  Artboard_1: {
    breakpoint: 1200,
    component: Artboard_1,
  },
};

const Comic = () => {
  const layout = useLayoutBreakpoints(LAYOUTS);

  return (
    <div className='ai-artisan-file'>
      {layout}
    </div>
  );
};

export default Comic;
