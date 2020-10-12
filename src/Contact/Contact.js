import React from 'react';
import './Contact.css';
import Layout from '../Components/Layout/Layout';
import { FormGroup, Label, Input } from 'reactstrap';
import Button from '../Components/Button/Button';

function Contact() {
  return (
      <Layout>
       <div className="contact__container">
         <div className="contact__title">
           <h1>Contact</h1>
           <p>Lamachaur , Pokhara</p>
           <p>adhikariPrakriti3@gmail.com / +977 9860342588</p>
           <div style={{ width:"70px",height:"4px",backgroundColor:"grey",marginTop:"30px" }}></div>
        </div >
         <div className="contact__form">
           <form>
             
              <FormGroup>
              <Label for="name" className="label">Name</Label>
              <Input type="text" name="name" placeholder="enter your name" className="inputbox" />
              </FormGroup>

              <FormGroup>
              <Label for="email" className="label">Email</Label>
              <Input type="email" name="email" placeholder="enter your email" className="inputbox" />
              </FormGroup>

              <FormGroup>
              <Label for="text" className="label">Message</Label>
              <Input type="textarea" name="text" placeholder="message" className="inputbox" />
              </FormGroup>

              <Button name="Send"/>

           </form>
         </div>
       </div>
    </Layout>
   
  );
}

export default Contact;
