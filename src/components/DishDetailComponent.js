import React,{Component} from 'react';
import {Card,CardImg,CardTitle,CardText,CardBody,ListGroup, ListGroupItem } from 'reactstrap'

class DishDetail extends Component{
    constructor(props){
        super(props);
        this.state = {
        }
        console.log('hola')
    }

    renderComments(dishComments) {
        if (dishComments != null) {
            return(
                dishComments.map((comment)=>{
                    let date = comment.date.slice(0,10);
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
        const dishDetail = this.props.dishDetail;
        console.log(dishDetail)
        return(
            <div className="container">
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
            </div>
        );
    }
}

export default DishDetail;