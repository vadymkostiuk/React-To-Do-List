import React,{Component} from 'react'

import './test.css'

class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {
            years: 29
        }
        this.test = this.test.bind(this)
    }
    test() {
        this.setState(state => ({
                years: ++state.years
            }))
    }
    render() {

         const{name} = this.props;
         const{years} = this.state;

         return (
             <div>
                <button onClick={this.test}>++</button>
                <h1 className='testH1'>Hello {name}, years{years}</h1>
                <h2>World</h2>
            </div>
        )
    }
}

export default Test