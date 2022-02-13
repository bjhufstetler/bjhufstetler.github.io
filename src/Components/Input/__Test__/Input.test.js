import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import Input from '../Input';

let getByTestId;

beforeEach(() => {
    const component = render (<Input />);
    getByTestId = component.getByTestId;
});

describe("Input Component", () => {
    it("Header contains text Decypher", () => {
        const headerEl = getByTestId("header");
        expect(headerEl.textContent).toBe("Decypher");
    })
    
    it("Input box to have value 0000", () => {
        const inputEl = getByTestId("input");
        expect(inputEl.textContent).toBe("0000");
    })
})
