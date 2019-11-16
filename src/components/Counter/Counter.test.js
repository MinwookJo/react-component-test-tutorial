import React from 'react';
import renderer from 'react-test-renderer';
import Counter from './Counter';

describe('Counter Test', () => {
    let component = null;

    it('render correctly', () => {
        component = renderer.create(<Counter/>);
    });

    it('match snapshot', () => {
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    })

    it('increase correctly', () => {
        const counterInstance = component.getInstance();
        counterInstance.onIncrease();
        expect(counterInstance.state.value).toBe(2);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('decrease correctly', () => {
        const counterInstance = component.getInstance();
        counterInstance.onDecrease();
        expect(counterInstance.state.value).toBe(1);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});