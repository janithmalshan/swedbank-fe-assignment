import Button from "./Button";
import TextInput from "../InputField/InputField";

export default {
    title: 'Ui Components/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
}

export const Primary = {
    args: {
        label: 'Button',
        variant: 'primary',
    },
};

export const Secondary = {
    args: {
        label: 'Button',
        variant: 'secondary'
    },
};
