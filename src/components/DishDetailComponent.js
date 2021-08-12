import React,{Component} from 'react';
import {Card,CardImg,CardTitle,CardText,CardBody,ListGroup, ListGroupItem } from 'reactstrap'

class DishDetail extends Component{
    constructor(props){
        super(props);
        this.state = {
        }

    }
    componentDidMount(){
        console.log('DishDetail Component mount')
    }
    componentDidUpdate(){
        console.log('DishDetail Component update')
    }

    renderDish(dishDetail){
        if(dishDetail != null){
            console.log(dishDetail)
            return(
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-5 col-lg-5 m-1"> 
                        <Card>
                            <CardImg top src={dishDetail.image} alt={dishDetail.name} />
                            <CardBody>
                                <CardTitle className="h2">{dishDetail.name}</CardTitle>
                                <CardText>{dishDetail.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12 col-sm-12 col-md-5 col-lg-5 m-1"> 
                        <h4>Comments</h4>
                        <ListGroup>{this.renderComments(dishDetail.comments)}</ListGroup>
                        
                    </div>
                </div>
            )
        }
    }
    renderComments(dishComments) {
        if (dishComments != null) {
            return(
                dishComments.map((comment)=>{
                    let date = new Intl.DateTimeFormat('en-US',{year:'numeric',month:'short',day:'2-digit'}).format(new Date(Date.parse(comment.date)));
                    return(
                        <div key={comment.id}>
                            <ListGroupItem className="border-0">{comment.comment}</ListGroupItem>
                            <ListGroupItem className="border-0">-- {comment.author}, {date}</ListGroupItem>
                        </div>
                       
                    )
                })
            )
        }
    }
    
    render(){
        console.log('DishDetail Component render')
        const dishDetail = this.props.dishDetail;
        return(
            <div className="container">
                {this.renderDish(dishDetail)}
            </div>
        );
    }
}

export default DishDetail;