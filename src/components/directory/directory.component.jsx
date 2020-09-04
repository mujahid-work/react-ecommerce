import React from 'react';
import {connect} from 'react-redux';
import {selectDirectorySections} from '../../redux/directory/directory.selector';
import {createStructuredSelector} from 'reselect';
import DirectoryItem from '../directory-item/directory-item.component';
import { DirectoryMenuContainer } from './directory.styles';

const Directory = ({sections}) => (
    <DirectoryMenuContainer>
        {
            sections.map(({ id, ...otherSectionsProps}) => (
                <DirectoryItem key={id} {...otherSectionsProps} />
            ))
        }
    </DirectoryMenuContainer>  
)

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);