import React from 'react';
import { keyHandler, KEYPRESS } from 'react-key-handler';

function Demo({ keyValue }) {
  return (
    <div>
      {keyValue}
    </div>
  );
}

export default keyHandler({ keyEventName: KEYPRESS, keyValue:KEYPRESS })(Demo);