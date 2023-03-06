import React from 'react';
import { beforeEach, describe, expect, it } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";

import { HelloWorld, DEFAULT_TEXT } from "./HelloWorld"

describe("HelloWorld", () => {
    beforeEach(() => {
        cleanup();
    });

    it("should render with default text", () => {
        render(<HelloWorld />);
        const element: HTMLDivElement = screen.getByText(new RegExp(DEFAULT_TEXT));

        expect(element).toBeInTheDocument();
    });

    it("it should render with custom text", () => {
        const CUSTOM_TEXT = "Multiverse";
        render(<HelloWorld text={CUSTOM_TEXT} />);

        const element: HTMLDivElement = screen.getByText(new RegExp(CUSTOM_TEXT));
        expect(element).toBeInTheDocument();
    });

    it("it should render default value", () => {
        render(<HelloWorld />);
        const element: HTMLDivElement = screen.getByText(new RegExp(DEFAULT_TEXT));
        expect(element).toBeInTheDocument();
    })
})