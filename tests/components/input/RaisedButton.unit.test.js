import React from 'react';
import RaisedButton from "../../../src/components/input/RaisedButton";
import Enzyme from "enzyme";
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

test('RaisedButton should not have executed callback if button has not been clicked', (done) => {
    let mockOnClick = jest.fn();
    let wrapper = Enzyme.shallow(<RaisedButton text={'some-test-text'} onClick={mockOnClick}/>);

    expect(mockOnClick).not.toHaveBeenCalled();

    done();
});

test('RaisedButton should execute callback when button is clicked', (done) => {
    let mockOnClick = jest.fn();
    let wrapper = Enzyme.shallow(<RaisedButton text={'some-test-text'} onClick={mockOnClick}/>);

    wrapper.find('button').simulate('click');

    expect(mockOnClick).toHaveBeenCalled();

    done();
});

test('RaisedButton should display text passed to it', (done) => {
    let mockOnClick = jest.fn();
    let wrapper = Enzyme.mount(<RaisedButton text={'some-test-text'} onClick={mockOnClick}/>);

    expect(wrapper.find('button').text()).toEqual('some-test-text');

    done();
});