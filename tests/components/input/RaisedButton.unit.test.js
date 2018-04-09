import React from 'react';
import RaisedButton from "../../../src/components/input/RaisedButton";

test('RaisedButton should not have executed callback if button has not been clicked', (done) => {
    let mockOnClick = jest.fn();
    let wrapper = shallow(<RaisedButton text={'some-test-text'} onClick={mockOnClick}/>);

    expect(mockOnClick).not.toHaveBeenCalled();

    done();
});

test('RaisedButton should execute callback when button is clicked', (done) => {
    let mockOnClick = jest.fn();
    let wrapper = shallow(<RaisedButton text={'some-test-text'} onClick={mockOnClick}/>);

    wrapper.find('button').simulate('click');

    expect(mockOnClick).toHaveBeenCalled();

    done();
});

test('RaisedButton should display text passed to it', (done) => {
    let mockOnClick = jest.fn();
    let wrapper = shallow(<RaisedButton text={'some-test-text'} onClick={mockOnClick}/>);

    expect(wrapper.find('button').text()).toEqual('some-test-text');

    done();
});