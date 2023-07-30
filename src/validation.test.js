import {act, render, screen} from '@testing-library/react'
import userEvent from "@testing-library/user-event";
import App from "./App";

test.each([
    ['abcdef', '100'],
    ['AabB!!!', '100'],
    ['a Ab$#1!', '100'],
    ['aAbB1@3', '3'],
    ['!@#$%^&aaabbb123', '100']
])('should fail validation', async (string, maxLength) => {
    render(<App/>)

    await act(async () => {
        await userEvent.click(screen.getByText('Enter the string'));
        await userEvent.keyboard(string);

        await userEvent.click(screen.getByText('Enter max string length'));
        await userEvent.keyboard(maxLength);
    })

    expect(screen.getByText('String is invalid')).toBeInTheDocument()
})

test.each([
    ['aAb1@#$', '100'],
    ['AabB!1!!', '100'],
    ['aAb$#1!', '100'],
    ['aAbB1@3', '30'],
    ['!@#$%^&aaAabbb123', '100']
])('should pass validation', async (string, maxLength) => {
    render(<App/>)

    await act(async () => {
        await userEvent.click(screen.getByText('Enter the string'));
        await userEvent.keyboard(string);

        await userEvent.click(screen.getByText('Enter max string length'));
        await userEvent.keyboard(maxLength);
    })

    expect(screen.getByText('String is valid')).toBeInTheDocument()
})

