import "@testing-library/jest-dom"

import React from "react"

const gatsby = jest.requireActual("gatsby")

jest.mock("gatsby", () => {
    const mockGatsby = {
        ...gatsby,
        Link: jest.fn().mockImplementation(({to, ...rest}) =>
            React.createElement("a", {
                ...rest,
                href: to,
            }),
        ),
    }

    return mockGatsby
})
