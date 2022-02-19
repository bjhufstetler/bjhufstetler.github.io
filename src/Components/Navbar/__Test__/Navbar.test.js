import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Navbar from '../Navbar';

describe("NavBar Component has all icons", () => {
    let getByTestId;
    beforeEach(() => {
        const component = render (<Navbar />);
        getByTestId = component.getByTestId;
    });

    it('has a github icon', () => {
        const githubEl = getByTestId('nav-github');
        expect(githubEl).toBeInTheDocument;
    })
    it('has a title with the correct symbol', () => {
        const titleEl = getByTestId('nav-title');
        expect(titleEl).toBeInTheDocument;
    })
    it('has a help icon', () => {
        const helpEl = getByTestId('nav-help');
        expect(helpEl).toBeInTheDocument;
    })
    it('has a profile icon', () => {
        const profileEl = getByTestId('nav-profile');
        expect(profileEl).toBeInTheDocument;
    })
    it('has a settings icon', () => {
        const settingsEl = getByTestId('nav-settings');
        expect(settingsEl).toBeInTheDocument;
    })
})