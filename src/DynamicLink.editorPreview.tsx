import { Component, ReactNode, createElement } from "react";
import { DynamicLinkPreviewProps } from "../typings/DynamicLinkProps";
import classNames from "classnames";
declare function require(name: string): string;

export class preview extends Component<DynamicLinkPreviewProps> {
    render(): ReactNode {
        const className=classNames("dynamiclink", this.props.class);
        return <a
                className={className}
                href={this.props.link}>
                {this.props.linkText}
               </a>;
    }
}

export function getPreviewCss(): string {
    return require("./ui/DynamicLink.css");
}
