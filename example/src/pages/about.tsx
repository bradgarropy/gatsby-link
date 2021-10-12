import SEO from "@bradgarropy/gatsby-plugin-seo"
import {FC} from "react"

import Link from "../../../."

const AboutPage: FC = () => {
    return (
        <>
            <SEO title="about" description="Learn more about us!" />

            <h1>about</h1>
            <Link to="/">home</Link>
        </>
    )
}

export default AboutPage
