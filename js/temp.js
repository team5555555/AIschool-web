const e = React.createElement;

class LikeButton extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return e('button',null,'Like');

    }
}