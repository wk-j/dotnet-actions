import React from "react"
import { render } from "react-dom"

class App extends React.Component {
    public render = () => <h1>Hello, world!</h1>
}

render(<App />, document.getElementById("root"))