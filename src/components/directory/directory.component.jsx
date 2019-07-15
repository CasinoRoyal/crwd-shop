import React, { Component } from 'react';

import MenuItem from '../menu-item';

import './directory.styles.scss';

export default class Directory extends Component {

  state = {
    sections: [
      {
        title: 'hats',
        subtitle: 'shop now',
        imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
        size: null,
        id: 1,
        linkUrl: 'hats'
      },
      {
        title: 'jackets',
        subtitle: 'shop now',
        imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
        size: null,
        id: 2,
        linkUrl: 'shop/jackets'
      },
      {
        title: 'sneakers',
        subtitle: 'shop now',
        imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
        size: null,
        id: 3,
        linkUrl: 'shop/sneakers'
      },
      {
        title: 'womens',
        subtitle: 'shop now',
        imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
        size: 'large',
        id: 4,
        linkUrl: 'shop/womens'
      },
      {
        title: 'mens',
        subtitle: 'shop now',
        imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
        size: 'large',
        id: 5,
        linkUrl: 'shop/mens'
      }
    ]
}
  
  render() {
    return (
      <div className="directory-menu">
          {
            this.state.sections.map(({ id, ...otherProps}) => {
              return <MenuItem key={id} {...otherProps} />
            })
          }
      </div>
    )
  }
}