import React from 'react';
import Router from './Router';
import renderer from 'react-test-renderer';

test('renders correctly', () => {
    const tree = renderer.create(<Router />).toJSON();
    expect(tree).toMatchSnapshot();
});