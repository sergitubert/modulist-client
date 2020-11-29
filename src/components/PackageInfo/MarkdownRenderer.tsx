import React from 'react';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';

const flatten = (text: any, child: any): any => {
    return typeof child === 'string'
        ? text + child
        : React.Children.toArray(child.props.children).reduce(flatten, text)
}

const HeadingRenderer = (props: any) => {
    const children = React.Children.toArray(props.children)
    const text = children.reduce(flatten, '')
    const slug = text.toLowerCase().replace(/\W/g, '-')
    return React.createElement('h' + props.level, { id: slug }, props.children)
}

type Props = {
    markdown: string;
}

export const MarkdownRenderer = ({ markdown }: Props) => {
    return (
        <ReactMarkdown
            escapeHtml={false}
            className="prose"
            renderers={{ heading: HeadingRenderer, }}
            plugins={[gfm]}
            children={markdown} />
    );
}