// import React from 'react';
import React, { Component } from 'react';

class Button extends Component {
    constructor(props) {
        super(props);
        this.stocked = props.stocked;
        this.colorStocked = props.stocked ? 'btn-red' : 'btn-green';
        this.state = {
            added: false,
            date: new Date().toLocaleTimeString()
        }

        setInterval(this.updateTime, 1000)


    }

    updateTime = () => {
        this.setState({
            date: new Date().toLocaleTimeString()
        });

    }
    addToCart = () => {
        this.setState({
            added: true,
            date: new Date().toLocaleTimeString()
        });
    }



    render() {
        const btnStyle = { color: this.stocked ? 'red' : 'green' }
        const btnText = this.state.added ? 'Added' : 'BUY';

        return (
            <div className="">
                <button onClick={this.addToCart} className={this.colorStocked} style={btnStyle}>{btnText}</button>
                <span>{this.state.date}</span>

            </div>

        )
    }

}




// function Button(props) {

//     const colorStocked = props.stocked ? 'btn-red' : 'btn-green';
//     const btnStyle = { color: props.stocked ? 'red' : 'green' }
//     return (
//         <button onClick={addToCart} className={colorStocked} style={{ color: props.stocked ? 'red' : 'green' }}>BUY !!!</button>
//     )
// }




export default Button;