import { Component } from 'preact'
import { PubDate } from './date'
import './styles'

export class Source extends Component {
    render({
        title,
        author,
        publisher,
        pubdate,
        thumb,
        preview
    }) {
        return (
            <div class="box container" style="margin-top: 3em; margin-bottom: 3em;">
                <div class="row">
                    <div class="column book-preview">
                        <img src={thumb} class="box material"></img>
                    </div>
                    <div class="column full-width">
                        <h2><b>{title}</b> By {author.join(', ')}</h2>
                        <h3><a href={preview} target="_blank">Preview</a></h3>
                        <span>
                            {author[0].split(' ').reverse().join(', ')}.
                            &nbsp;
                            <i>{title}</i>.
                            &nbsp;
                            <PubDate date={pubdate} />. {publisher}
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}
