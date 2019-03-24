import { Component } from 'preact'
import { Source } from './source'

export class BookCitation extends Component {
    state = {
        text: '',
        sources: []
    }

    findBook = () => {
        console.log('kek')
        let { text } = this.state
        let url = 'https://www.googleapis.com/books/v1/volumes?q='
            + encodeURIComponent(text)

        fetch(url)
            .then(data => data.json())
            .then(data => this.setState({sources: data.items}))
    }

    preventDefault = e => {
        e.preventDefault()
    }

    inputChanged = i => {
        this.setState({
            text: i.target.value
        })
    }

    render({}, { text, sources }) {
        return (
            <div class="container">
                <h2>Book Citation</h2>

                <form class="multi-input" width="100%" onSubmit={this.preventDefault}>
                    <input class="input" type="text" onInput={this.inputChanged} value={text} />
                    <button
                        type="submit"
                        class="button input"
                        onClick={this.findBook}>Search</button>
                </form>

                <div>
                    { sources.map(({volumeInfo}) =>
                        <Source
                            title={volumeInfo.title}
                            author={volumeInfo.authors}
                            publisher={volumeInfo.publisher}
                            pubdate={volumeInfo.publishedDate} />)
                    }
                </div>
            </div>
        )
    }
}
