import React from 'react'
import './collection-item.style.scss'

export const CollectionItem =(props)=> {
  console.log(props.item, 'BBB')
    return (
      <div className='collection-item' key={props.item.id}>
          <div className="image" style={{
                backgroundImage: `url(${props.item.imageUrl})`
            }} />
          <div className="collection-footer">
              <span className="name">{props.item.name}</span>
              <span className="price">{props.item.price}</span>
              </div>
        
      </div>
  )
}
