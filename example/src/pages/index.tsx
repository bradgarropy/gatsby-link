import SEO from "@bradgarropy/gatsby-plugin-seo"
import {FC} from "react"

import Link from "../../../."

const IndexPage: FC = () => {
    return (
        <>
            <SEO
                title="gatsby starter"
                description="Welcome to gatsby-starter!"
            />

            <h1>home</h1>
            <Link to="/about">about</Link>
        </>
    )
}

export default IndexPage
