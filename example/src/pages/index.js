import * as React from "react"

import Link from "../../../."

const IndexPage = () => (
    <>
        <h1>Home</h1>

        <p>
            <Link to="/about">About</Link> <br />
            <Link to="https://bradgarropy.com">Brad Garropy</Link>
        </p>
    </>
)

export default IndexPage
