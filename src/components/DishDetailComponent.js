import React  from 'react';
import {Card,CardImg,CardTitle,CardText,CardBody, ListGroupItem , Breadcrumb,BreadcrumbItem} from 'reactstrap'
import {Link} from 'react-router-dom'


    function RenderDish({dishDetail}){
        if(dishDetail != null){
            return(
                    <div> 
                        <Card>
                            <CardImg top src={dishDetail.image} alt={dishDetail.name} />
                            <CardBody>
                                <CardTitle className="h2">{dishDetail.name}</CardTitle>
                                <CardText>{dishDetail.description}</CardText>
                            </CardBody>
                        </Card>
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
                        <div> 
                            <h4>Comments</h4>                                   
                            <div key={comment.id}>
                                <ListGroupItem className="border-0">{comment.comment}</ListGroupItem>
                                <ListGroupItem className="border-0">-- {comment.author}, {date}</ListGroupItem>
                            </div>
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
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dishDetail.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12 ">
                        <h3>{props.dishDetail.name}</h3>
                        <hr/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dishDetail={props.dishDetail}/>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments dishComments={props.comments}/>
                    </div>
                </div>
            </div>
        );
    }
        


export default DishDetail;