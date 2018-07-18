import React, {Component} from 'react';
import { connect } from 'react-redux';
import "bootstrap/scss/bootstrap.scss";

class TextDisplay extends Component {

    constructor(props){
        super(props);

    }

    render() {
        return (
            <div className='text-center'>
                <form>
                    <div className="form-group mt-3 ">
                        <input 
                            type="text" 
                            className="form-control disabled text-center font-weight-bold" 
                            value={this.props.txtDisplay} 
                            id="inputText" 
                        disabled />
                    </div>
                </form>
            </div>

        );
    }
}

function mapStateToProps(state){
    return {
        txtDisplay: state.txtdisplay
    }       
  }


export default connect(mapStateToProps)(TextDisplay);

