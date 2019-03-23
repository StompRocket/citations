import { Component } from 'preact'

export class Navbar extends Component {
    componentDidMount() {
        this.setState({
            open: false
        })
    }

    openNav = () => {
        this.setState({
            open: true
        })
    }

    closeNav = () => {
        this.setState({
            open: false
        })
    }

    render({ title, links }, { open }) {
        return (
            <div>
                <nav class="navbar material white">
                    <div class="container">
                        <div class="nav-logo">
                            <h3>
                                <a href="/">{title}</a>
                            </h3>
                        </div>

                        <a class="nav-burger" onClick={this.openNav}>=</a>

                        <div class="nav-menu">
                            <h3>
                                { links.map( l => <a href={ l.href }>{ l.body }</a> ) }
                            </h3>
                        </div>
                    </div>
                </nav>
                <div class={"nav-mobile" + (open ? " open" : "")}>
                    <div class="modal-background"></div>
                    <div class="nav-body">
                        <a class="nav-close" onClick={this.closeNav}>x</a>
                        <br />
                        <h3><a href="/">{title}</a></h3>
                        <br />
                        { links.map( l => <a href={ l.href }>{ l.body }</a> ) }
                    </div>
                </div>
            </div>
        )
    }
}
