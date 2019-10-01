import React, { useContext } from 'react';

import DirectoryContext from '../../contexts/directory/directory.context';
 
import MenuItem from '../menu-item';

import './directory.styles.scss';

const Directory = () => {
  const { sections } = useContext(DirectoryContext);

  return (
    <div className="directory-menu">
        {
          sections.map(({ id, ...otherProps}) => {
            return <MenuItem key={id} {...otherProps} />
          })
        }
    </div>
  )
}

export default Directory;