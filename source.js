import { Component } from 'preact'
import { PubDate } from './date'

export class Source extends Component {
    render({
        title,
        author,
        publisher,
        pubdate
    }) {
        return (
            <div>
                {author[0].split(' ').reverse().join(', ')}.
                &nbsp;
                <i>{title}</i>.
                &nbsp;
                <PubDate date={pubdate} />. {publisher}
            </div>
        )
    }
}
