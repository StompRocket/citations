import '@stomprocket/blastoff'
import { Component } from 'preact'
import { Navbar } from './navbar'
import { BookCitation } from './content'

let links = [
    {
        href: "//github.com/stomprocket/citations",
        body: "Github"
    }
]

export default class App extends Component {
    render() {
        return (
            <div>
                <Navbar title="Citations" links={links}/>
                <BookCitation />
            </div>
        )
    }
}
