import react from 'react';
import { render, fireEvent} from '@testing-library/react';
import * as rtl from "react-testing-library";
import 'jest-dom/extend-expect';
import Display from './Display';
import renderer from "react-test-renderer";
import 'jest-dom/extend-expect';
afterEach(rtl.cleanup);


describe("<Display />", () => {
    it("matches snapshot", () => {
        const tree = renderer.create(<Display />);

        expect(tree.toJSON()).toMatchSnapshot();
    });

    it('shows unlocked and open as default state', () => {
        const { getByText } = render(<Display />)
        getByText(/unlocked/i)
        getByText(/open/i)
    })
    it ('State changes w/ props', () => {
        const { getByText } = render (<Display locked={true} closed={true} />);
        getByText(/locked/i)
        getByText(/closed/i)
    })
    it('changes red/green based on props truth', () => {
        const {getByText, rerender} = render(<Display locked={false} ckised={false} />)

        const openDiv = getByText(/open/i);
        const lockedDiv =  getByText(/unlocked/i);
        expect(openDiv.className).toBe('led green-led');
        expect(lockedDiv.className).toBe('led green-led');
        expect(openDiv.textContent).toBe('Open');    
        expect(lockedDiv.textContent).toBe('Unlocked');  

        rerender(<Display locked={true} closed={true} />)

        expect (openDiv.className).toBe('led red-led');
        expect (lockedDiv.className).toBe('led red-led');
        expect (openDiv.textContent).toBe('Closed');
        expect (lockedDiv.textContent).toBe('Locked');
    })
    });
