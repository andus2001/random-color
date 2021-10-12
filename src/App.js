import React from "react"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            color: ""
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(event){
        event.preventDefault()
        fetch("https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}")
        .then(response => response.json())
        .then(data => {
            const newColor = "#"+data.colors[0].hex
            
            this.setState({color:newColor})
            console.log(this.state.color);
        })
    }
    

    render(){
        
        return(
            <div>
                <div style={{backgroundColor:this.state.color}}  className="coloredDiv"></div>
                <button onClick={this.handleClick}>CHANGE COLORS</button>
            </div>
        )
    }

}

export default App