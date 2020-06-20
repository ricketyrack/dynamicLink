/**
 * This file was generated from DynamicLink.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { CSSProperties } from "react";
import { DynamicValue, WebIcon } from "mendix";

export interface DynamicLinkContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex: number;
    linkText?: string;
    link: DynamicValue<string>;
    linkIcon?: DynamicValue<WebIcon>;
}

export interface DynamicLinkPreviewProps {
    class: string;
    style: string;
    linkText: string;
    link: string;
    linkIcon: { type: "glyph"; iconClass: string; } | { type: "image"; imageUrl: string; } | null;
}
