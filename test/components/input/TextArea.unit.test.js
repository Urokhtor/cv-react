import React from 'react';
import TextArea from "../../../src/components/input/TextArea";

test('TextArea should match snapshot', (done) => {
    const mockOnChange = jest.fn();
    const value = 'some-text-value';
    const wrapper = shallow(<TextArea
            onChange={mockOnChange}
            label={'some-text-label'}
            value={value} />);

    expect(wrapper).toMatchSnapshot();

    done();
});

test('TextArea should match snapshot when in failed state', (done) => {
    const mockOnChange = jest.fn();
    const value = 'some-text-value';
    const wrapper = shallow(<TextArea
            onChange={mockOnChange}
            validator={() => "error"}
            label={'some-text-label'}
            value={value} />);

    const textarea = wrapper.find('textarea');
    textarea.simulate('click');
    textarea.simulate('change', { target: { value: 'new-text-input' }});
    textarea.simulate('blur');

    expect(wrapper).toMatchSnapshot();

    done();
});

test('TextArea should return current text value on blur', (done) => {
    const mockOnChange = jest.fn();
    const value = 'some-text-value';
    const wrapper = shallow(<TextArea
        onChange={mockOnChange}
        label={'some-text-label'}
        value={value}/>);

    const textarea = wrapper.find('textarea');
    textarea.simulate('click');
    textarea.simulate('change', { target: { value: 'new-text-input' }});
    textarea.simulate('blur');

    expect(mockOnChange).toHaveBeenCalledWith({
        failed: false,
        value: 'new-text-input'
    });

    done();
});

test('TextArea should show error if validation fails', (done) => {
    const mockOnChange = jest.fn();
    const value = 'some-text-value';
    const wrapper = shallow(<TextArea
        onChange={mockOnChange}
        validator={() => "error"}
        label={'some-text-label'}
        value={value}/>);

    const textarea = wrapper.find('textarea');
    textarea.simulate('click');
    textarea.simulate('change', { target: { value: 'new-text-input' }});
    textarea.simulate('blur');

    expect(mockOnChange).toHaveBeenCalledWith({
        failed: true,
        value: 'new-text-input'
    });

    expect(wrapper.find('label .error').text()).toEqual('error');

    done();
});