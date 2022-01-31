export interface HeaderItemInputs {
    link: string;
    content: string;
}

export interface InputInputs {
    type: string;
    placeholder: string;
    title: string;
    maxLength: number;
    handleOnChange: any;
    value: any
}

export interface TextInput {
    placeholder: string
    title: string;
    handleOnChange: any;
    value: any;
}

export interface EmailInputs extends TextInput {}
export interface PasswordInputs extends TextInput {}
export interface SubmitInputs {
    value: string;
}