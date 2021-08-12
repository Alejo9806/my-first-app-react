import React  from 'react';
import {Card,CardImg,CardTitle,CardText,CardBody,ListGroup, ListGroupItem } from 'reactstrap'



    function RenderDish({dishDetail}){
        if(dishDetail != null){
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
                        <ListGroup><RenderComments dishComments={dishDetail.comments}/></ListGroup>                      
                    </div>
                </div>
            );
        }else{
            return(null)
        }
    }
    function RenderComments({dishComments}) {
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
        }else{
            return(null)
        }
    }
    const DishDetail = (props) =>{
        console.log('DishDetail Component render')
        return(
            <div className="container">
                <RenderDish dishDetail={props.dishDetail}/>
            </div>
        );
    }
        


export default DishDetail;