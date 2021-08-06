import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './components/app/';
// class GetMyName extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             years: 26
//         }
//         this.nextYear = this.nextYear.bind(this)
//     }
//     nextYear() {
//         console.log(1)
//         this.setState(state => ({
//             years: ++state.years
//         }))
//     }
//     render() {
//         const{name} = this.props;
//         const{years} = this.state;
//         return(
//             <>
//                 <h1>My name is {name}, {years}</h1>
//                 <button onClick={this.nextYear}>++</button>
//             </>
//         )
//     }
// }
ReactDOM.render(
  <React.StrictMode>
      <App/>
    {/*<GetMyName name='Vadym' />*/}
  </React.StrictMode>,
  document.getElementById('root')
);

