import PropTypes from 'prop-types'
import './button.css'
import classnames from 'classnames'
import { Link } from 'react-router'
function Button({
    children, 
    href,
    to,
    primary,
    transparent,
    rounded,
    className,
    ...passProps
}) {

    let Comp = 'button'
    const props = {
        ...passProps
    }

    const classes = {
        primary,
        transparent,
        rounded
    }

    if(href) {
        Comp = 'a'
        props.href = href
    }
    else if(to) {
        Comp = Link
        props.to = to
    }
  
    return ( 
        <Comp className={classnames(classes, className)} {...props}>
            {children}
        </Comp>
     );
}

Button.PropTypes = {
    children: PropTypes.node.isRequired,
    href: PropTypes.string,
    to: PropTypes.string,
    primary: PropTypes.bool,
    transparent: PropTypes.bool,
    rounded: PropTypes.bool,
    className: PropTypes.string,
    passProps: PropTypes.node
}

export default Button;