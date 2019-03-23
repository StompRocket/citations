import { Component } from 'preact'

export class Source extends Component {
    render({
        title,
        author,
        publisher,
        pubdate
    }) {
        return (
            <div>
                {title} &nbsp;
                <i>{author}</i>
            </div>
        )
    }
}
