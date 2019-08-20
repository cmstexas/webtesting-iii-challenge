import React from 'react'
import {render, fireEvent} from 'react-testing-library';
import Controls from './Controls';
import renderer from 'react-test-renderer';
import 'jest-dom/extend-expect';

it ('renders properly', () => {
    render(<Controls />)
});

describe('<Controls />', () => {
    it('matches snapshot', () => {
        const tree = renderer.create(<Controls />);
    
        expect(tree.toJSON()).toMatchSnapshot();
    });

    it('shows unlicked and open as a default state', () => {
        const {getByText, queryByText} = render(<Controls />)
        getByText(/lock gate/i)
        getByText(/close gate/i)
    })
});