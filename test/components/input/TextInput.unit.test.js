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

test('TextInput should match snapshot when in failed state', (done) => {
    const mockOnChange = jest.fn();
    const value = 'some-text-value';
    const wrapper = shallow(<TextInput
        onChange={mockOnChange}
        validator={() => "error"}
        label={'some-text-label'}
        value={value} />);

    const textarea = wrapper.find('input');
    textarea.simulate('click');
    textarea.simulate('change', { target: { value: 'new-text-input' }});
    textarea.simulate('blur');

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

    expect(mockOnChange).toHaveBeenCalledWith({
        failed: false,
        value: 'new-text-input'
    });

    done();
});

test('TextInput should show error if validation fails', (done) => {
    const mockOnChange = jest.fn();
    const value = 'some-text-value';
    const wrapper = shallow(<TextInput
        onChange={mockOnChange}
        validator={() => "error"}
        label={'some-text-label'}
        value={value}/>);

    const input = wrapper.find('input');
    input.simulate('click');
    input.simulate('change', { target: { value: 'new-text-input' }});
    input.simulate('blur');

    expect(mockOnChange).toHaveBeenCalledWith({
        failed: true,
        value: 'new-text-input'
    });

    expect(wrapper.find('label .error').text()).toEqual('error');

    done();
});