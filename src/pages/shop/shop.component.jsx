import React, { Component } from 'react'
import { SHOP_DATA } from './shop.data'
import { CollectionPreview } from '../../components/preview-collection/collection-preview.component'

export default class Shop extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         collections: SHOP_DATA
      }
    }
    render() {
        const { collections } = this.state;
    return (
        <div>
            {
                collections.map(({id, ...otherItems}) => {
                    return <CollectionPreview key={id} otherItems={otherItems} />
                })
            }
            
      </div>
    )
  }
}
