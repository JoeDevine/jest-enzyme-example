jest
  .unmock('../client/components/content')
    .unmock('fs')
    .unmock('path');

import React from 'react';
import { shallow } from 'enzyme';
import Content from '../client/components/content';

describe('Example Project', () => {

    it('should have an appropriate header', () => {
        const shallowContent = shallow(<Content />);
        expect(shallowContent.contains(<h1>Example Project</h1>));
    });
});
