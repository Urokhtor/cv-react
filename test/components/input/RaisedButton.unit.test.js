import React from 'react';
import RaisedButton from "../../../src/components/input/RaisedButton";

test('RaisedButton should match snapshot', (done) => {
    const mockOnClick = jest.fn();
    const wrapper = shallow(<RaisedButton text={'some-test-text'} onClick={mockOnClick}/>);

    expect(wrapper).toMatchSnapshot();

    done();
});

test('RaisedButton should not have executed callback if button has not been clicked', (done) => {
    const mockOnClick = jest.fn();
    const wrapper = shallow(<RaisedButton text={'some-test-text'} onClick={mockOnClick}/>);

    expect(mockOnClick).not.toHaveBeenCalled();

    done();
});

test('RaisedButton should execute callback when button is clicked', (done) => {
    const mockOnClick = jest.fn();
    const wrapper = shallow(<RaisedButton text={'some-test-text'} onClick={mockOnClick}/>);

    wrapper.find('button').simulate('click');

    expect(mockOnClick).toHaveBeenCalled();

    done();
});

test('RaisedButton should display text passed to it', (done) => {
    const mockOnClick = jest.fn();
    const wrapper = shallow(<RaisedButton text={'some-test-text'} onClick={mockOnClick}/>);

    expect(wrapper.find('button').text()).toEqual('some-test-text');

    done();
});