import { Component, ReactNode, createElement } from "react";
import { hot } from "react-hot-loader/root";
import { ValueStatus } from "mendix";
import classNames from "classnames";
import { DynamicLinkContainerProps } from "../typings/DynamicLinkProps";
import { Icon } from "mendix/components/web/Icon";

import "./ui/DynamicLink.css";

type DynamicLinkState = {
    link?: string
}

class DynamicLink extends Component<DynamicLinkContainerProps, DynamicLinkState> {
    constructor(props : DynamicLinkContainerProps) {
        super(props);

        this.state = { link: this.props.link.value }
    }

    componentDidMount() {
        if (this.props.link.status == ValueStatus.Available) {
            this.setState( { link: this.props.link.value } );
        }
    }

    render(): ReactNode {
        const className = classNames("dynamiclink", this.props.class);
        return <a href={this.state.link} target='_blank'
                className={className}
                style={this.props.style}
                tabIndex={this.props.tabIndex}>

                { !!this.props.linkIcon
                    ? <Icon icon={this.props.linkIcon.value} />
                   : null
                }
               <span style={{ paddingLeft: 5 }} >
                   {this.props.linkText}
               </span></a>;
    }
}

export default hot(DynamicLink);
