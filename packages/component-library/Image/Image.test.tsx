import React from "react";
import { beforeEach, describe, expect, it } from "vitest";
import { cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { FALLBACK_ALT, FALLBACK_IMAGE, Image } from "./Image";

describe("Responsive Image", () => {
    beforeEach(() => {
        cleanup();
    });

    it("should render fallback image when no src passed", async () => {
        render(<Image />)
        const imgElement: HTMLImageElement = screen.getByRole('img');

        fireEvent.error(imgElement);
        expect(imgElement.alt).toBe(FALLBACK_ALT);
    });

    it("should render src & alt passed", () => {
        const src = "https://images.unsplash.com/photo-1518837695005-2083093ee35b";
        const alt = "ocean";
        const maxWidth = '350px';
        render(<Image src={src} alt={alt} maxWidth={maxWidth} />);

        const imgElement: HTMLImageElement = screen.getByRole('img');

        expect(imgElement.alt).toBe(alt);
        expect(imgElement.src).toBe(src);
    });

    it("should render fallback image when src url passed returns error", () => {
        const incorrectURL = "https://images.unsplash.com/phto-1518837695005-2083093ee35b";
        const alt = "ocean";
        const maxWidth = '350px';
        render(<Image src={incorrectURL} alt={alt} maxWidth={maxWidth} />);

        const imgElement: HTMLImageElement = screen.getByRole('img');

        fireEvent.error(imgElement);
        expect(imgElement.alt).toBe(FALLBACK_ALT);
        expect(imgElement.src).toBe(FALLBACK_IMAGE);
    });
});