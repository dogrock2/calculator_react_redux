import React, { Component } from 'react';
import TextInput from '../containers/TextDisplay';
import Buttons from '../containers/Buttons';
import "bootstrap/scss/bootstrap.scss";

class App extends Component {

    constructor(props){
        super(props);
        this.constVal = ['7','8','9','x','4','5','6','-','1','2','3','+','+/-','0','.','/'];
        this.btnArr = [];
    }

    prepBtns(){        
        this.constVal.forEach(item => {
            this.btnArr.push(<div className='col-3 border btns  rounded font-weight-bold' key={item}><Buttons btnNum={item} /></div>);    
        });
    }

    render() {
        this.prepBtns();
        return (
            <div className={' container text-center border p-4 mt-1'} id='mainContainer'>
                <TextInput className={'text-danger'} />
                <div className='row'>{ this.btnArr }</div>
                <div className='row mt-1  font-weight-bold'>
                    <div className='col-9 border rounded btns'><Buttons btnNum={'CLEAR'} /></div>
                    <div  className='col-3 border rounded btns'><Buttons btnNum={'='} /></div>
                </div>
            </div>
        );
    }

}

export default App;