import react from 'react';
import { render, fireEvent} from 'react-testing-library';
import "react-testing-library/cleanup-after-each";
import 'jest-dom/extend-expect';
import Dashboard from './Dashboard';
import renderer from "react-test-renderer';"
import 'jest-dom/extend-expect';

describe ('<Dashboard />', () => {
    it ('renders open, close, and status buttons', () => {
        const { getbyText, debug } = render (<Dashboard />);
        debug();

        getbyText(/lock/i);
        getbyText(/close/i);
        getbyText(/open/i);
        getbyText(/unlocked/i);
    })

    it('matches snapshot', () => {
        const tree = renderer.create(<Dashboard />);

        expect(tree.toJSON()).toMatchSnapshot();
    });
});