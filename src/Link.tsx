import {Link as GatsbyLink} from "gatsby"
import React, {AnchorHTMLAttributes, FC} from "react"

type LinkProps = {
    to: string
} & AnchorHTMLAttributes<HTMLAnchorElement>

const Link: FC<LinkProps> = ({to, children, ...props}) => {
    if (to.startsWith("/")) {
        return (
            <GatsbyLink to={to} {...props}>
                {children}
            </GatsbyLink>
        )
    }

    return (
        <a href={to} target="_blank" rel="noopener noreferrer" {...props}>
            {children}
        </a>
    )
}

export default Link
