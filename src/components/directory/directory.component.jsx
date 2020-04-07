import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';
import Sections_Data from './sections.data';

class Directory extends React.Component {

    constructor() {

        super();

        this.state = {
            sections: Sections_Data
        }
    }

    render() {
        return (
            <div className="directory-menu">
                {
                    this.state.sections.map(({ id, ...otherSectionsProps}) => (
                        <MenuItem key={id} {...otherSectionsProps} />
                    ))
                }
            </div>
        );
    }
}

export default Directory;