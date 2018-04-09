import React from 'react';
import TextInput from "../../../src/components/input/TextInput";

test('TextInput should match snapshot', (done) => {
    const mockOnChange = jest.fn();
    let value = 'some-text-value';
    const wrapper = shallow(<TextInput
            onChange={mockOnChange}
            label={'some-text-label'}
            value={value} />);

    expect(wrapper).toMatchSnapshot();

    done();
});

test('TextInput should return current text value on blur', (done) => {
    const mockOnChange = jest.fn();
    const value = 'some-text-value';
    const wrapper = shallow(<TextInput
        onChange={mockOnChange}
        label={'some-text-label'}
        value={value}/>);

    const input = wrapper.find('input');
    input.simulate('click');
    input.simulate('change', { target: { value: 'new-text-input' }});
    input.simulate('blur');

    expect(mockOnChange).toHaveBeenCalledWith('new-text-input');

    done();
});