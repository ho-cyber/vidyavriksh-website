import React from 'react'
import { InstagramEmbed } from 'react-social-media-embed';

const InstaEmbed = ({url, text}) => {
    
  return (
    <div>
        <h1 className='text-black mx-3'>{text}</h1>
        <br/>
          <InstagramEmbed url={url} width={328} height = {500} className='mx-3 items-center'/>
         
          
    </div>
  )
}

export default InstaEmbed