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

export interface inputs {
    placeholder: string
    title: string;
    handleOnChange: any;
    value: any;
}

export interface EmailInputs extends inputs {}
export interface PasswordInputs extends inputs {}
export interface TextInputs extends inputs {
    maxLength: number;
}
export interface SubmitInputs {
    value: string;
}