import { Component } from "react";
class YoutubeButton extends Component{

    state={
        issubscribe : false,
        text1:"please subscribe",
        text2:"thanks for subscribing"
    }
    handleClick=()=>{
        this.setState({
            issubscribe:!this.state.issubscribe
        })
    }



    render(){
        return(
            <>
            <button onClick={this.handleClick}
            style={
                {
                    backgroundColor:this.state.issubscribe?"green":"red"
                }
            }
            >{this.state.issubscribe?this.state.text2:this.state.text1}</button>
            {
                this.state.issubscribe?<h1>WELCOME USER</h1>:<h1>Please Subscribe</h1>
            }
            </>
        )
    }
}
export default YoutubeButton