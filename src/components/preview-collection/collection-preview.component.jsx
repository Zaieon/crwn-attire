import React from 'react'
import { CollectionItem } from '../collection-item/collection-item.component'
import './collection-preview.style.scss'

export const CollectionPreview = ({ otherItems }) => {
  console.log(otherItems.items, "AAA")
  return (
    <div className='collection-preview' key={otherItems.title}>
      <h1 className="title">{otherItems.title.toUpperCase()}</h1>
      <div className="preview">
        {
          otherItems.items.filter((item, idx) => idx < 4)
            .map(item => <CollectionItem key={item.id} item={item} />)
        }
      </div>
    </div>
  )
}
