import { Component } from "react";
import { connect } from "react-redux";
import { login } from "../ReduxFolder/auth/authAction";

 class CountClass extends Component {

    constructor(props){
        super(props)
    }

    componentDidMount(){
        console.log('from class comp did mount');
        console.log(this.props);
    }

    loginUser = () => {
        this.props.dispatch(login('Rohit Kumar'))
    }

    render(){

        return(

            <>

            <h2>Class component Redux examples</h2>
            <h3>Count: {this.props.count} </h3>
            <button onClick={this.loginUser}>Login from class component</button>

            </>
        )
    }

}

// here we are getting the store from redux and mapping it to props
const mapStoreToProps = (store) => {
    return{
        count: store.count,
    }
}

// connect to the store into the countClass component 
export default connect(mapStoreToProps)(CountClass); 