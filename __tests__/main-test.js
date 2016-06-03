jest
  .unmock('../client/components/content')
    .unmock('fs')
    .unmock('path');

import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Content from '../client/components/content';

describe('Shallow Render of Example Project', () => {
    it('should have an appropriate header', () => {
        const shallowContent = shallow(<Content />);
        expect(shallowContent.contains(<h1>Example Project</h1>));
    });
});

describe('Full DOM Render of Example Project', () => {
    it('should apply appropriate properties', () => {
        const fullContent = mount(<Content testProp='testProps' />);
        expect(fullContent.props().testProp).toEqual('testProps');
    });
});

describe('Static Rendered Markup of Example Project', () => {
    it('should have an appropriate header', () => {
        const staticContent = render(<Content />);
        expect(staticContent.text()).toContain('Example Project');
    });
});
