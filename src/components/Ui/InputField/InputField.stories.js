import TextInput from "./InputField";

export default {
    title: 'Ui Components/Input',
    component: TextInput,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
}

export const Default = {
    args: {
        label: 'Label',
        isError: true,
        name: 'name',
        value: 'value',
        hint: 'hint',
        errorText: 'errorText',
        required: true,
        isNumber: true
    },
};
