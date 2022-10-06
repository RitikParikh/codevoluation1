import React, {useContext} from 'react';
import {UserContext, ChannelContext} from './index';
import ComponentF from './ComponentF';

function ComponentE() {
    const user = useContext(UserContext);
    const last = useContext(ChannelContext);
  return (
    <div>{user} - {last}</div>
  )
}

export default ComponentE