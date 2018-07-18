import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from '../../node_modules/redux';
import { ButtonClicks } from '../actions/index';
import "bootstrap/scss/bootstrap.scss";


class Buttons extends Component {

    constructor(props){
        super(props);
  
    }


    add(v1,v2){ return v1 + v2; }
    sub(v1,v2){ return v1 - v2; }
    mult(v1,v2){ return v1 * v2; }
    div(v1,v2){ 
        if(v1 === 0)
            return 0;
        else if(v2 !== 0)
            return v1 / v2; 
        return 'Cant divide by zero.';
    }
    
    calc(txt){       
        let valNum = parseFloat(txt);
        let result = '';

        if(!isNaN(valNum) && txt !== '=' && txt !== '+/-') {
            trans = true;
            currentVal += txt;
            this.props.ButtonClicks(currentVal);
        }

        if(isNaN(valNum) && txt !== '=' && txt !== '+/-' && txt !== '.' && trans === true) {
            val1 = parseFloat(currentVal);
            operand = txt;
            this.props.ButtonClicks('');
            currentVal = '';
        }

        if(txt === 'CLEAR'){
            reset();
            this.props.ButtonClicks('');
        }

        if(txt === '.' && deci === false){
            deci = true;
            currentVal += '.';
            this.props.ButtonClicks(currentVal);
        }


        if(txt === '=' && trans === true){
            val2 = parseFloat(currentVal);
            switch(operand){
                case '+':
                    result = this.add(val1, val2);
                    break;
                case '-':
                    result = this.sub(val1, val2);
                    break;
                case 'x':
                    result = this.mult(val1, val2);
                    break;
                case '/':
                    result = this.div(val1, val2);
                    break;
            }
            this.props.ButtonClicks(result);
            reset();
        }

    }

    render() {
        return (
            <div 
                className='text-center btnNums'
                onClick={()=>this.calc(this.props.btnNum)}>
                {this.props.btnNum}
            </div>
        );
    }

}

let currentVal = '';
let operand = '';
let val1 = '';
let val2 = '';
let trans = false;
let deci = false;

function reset(){
    currentVal = '';
    operand = '';
    val1 = '';
    val2 = '';
    trans = false;
    deci = false;
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ButtonClicks}, dispatch)
}

export default connect(null, mapDispatchToProps)(Buttons);