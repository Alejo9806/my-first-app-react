import React,{useState}  from 'react';
import {Card,CardImg,CardTitle,CardText,CardBody, ListGroupItem , Breadcrumb,BreadcrumbItem,Button,Modal, ModalHeader, ModalBody, Label,Row} from 'reactstrap'
import {Link} from 'react-router-dom'
import { Control, LocalForm, Errors } from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);


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

        const handleSubmit=(values) => {
            console.log('Current State is: ' + JSON.stringify(values));
            alert('Current State is: ' + JSON.stringify(values));
            // event.preventDefault();
        }

        const toggleModal = () => {
            setIsModalOpen(!isModalOpen);
        }
    
        const [isModalOpen,setIsModalOpen] = useState(false);
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
                        <h4>Comments</h4>   
                        <RenderComments dishComments={props.comments}/>
                        <Button outline className="mt-3" onClick={toggleModal}><span className="fa fa-pencil fa-lg"></span> Submit Comment</Button>
                    </div>
                </div>

                <Modal isOpen={isModalOpen} toggle={toggleModal}>
                    <ModalHeader toggle={toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => handleSubmit(values)} m={4}>
                            <Row className="form-group">
                                <Label htmlFor="username">Rating</Label>
                                <Control.select model=".rating" id="rating" name="rating" className="form-control">
                                    <option value="1" selected>1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </Control.select>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="password">Your Name</Label>
                                <Control.text model=".name" id="name" name="name"
                                        placeholder="Your Name"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                         />
                                    <Errors
                                        className="text-danger"
                                        model=".name"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                     />
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="comment" md={2}>Comment</Label>
                                <Control.textarea model=".comment" id="comment" name="comment"
                                    rows="12"
                                    className="form-control" />
                            </Row>
                            <Button type="submit" value="submit" color="primary">Submit</Button>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
        


export default DishDetail;