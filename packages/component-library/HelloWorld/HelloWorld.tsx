import React from 'react';
export interface IHelloWorld {
    text?: string
}

export const DEFAULT_TEXT = "Component Library";

export const HelloWorld = ({ text=DEFAULT_TEXT }: IHelloWorld) => {
    return (
        <div>Welcome to {text}</div>
    );
};