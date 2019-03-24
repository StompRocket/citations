import { Component } from 'preact'

export class PubDate extends Component {
    
    format(date) {
        let m
        let expr = /(\d+)/gm
        if (m = expr.exec(date)) {
            return m[0]
        }
        return 'Date Unknown'
    }

    render({date}) {
        return (
            <span>
                {this.format(date)}
            </span>
        )
    }
}
