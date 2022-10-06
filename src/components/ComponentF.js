import React from 'react'
import {UserContext, ChannelContext} from './index';
function ComponentF() {
  return (
    <div>
        <UserContext.Consumer>
            {
                user =>{
                    return (
                        <ChannelContext.Consumer>
                            {
                                last =>{
                                    return <div>User an dLast Context Value {user} {last}</div>
                                }
                            }
                        </ChannelContext.Consumer>
                    ) 
                }
            }
        </UserContext.Consumer>
    </div>
  )
}

export default ComponentF