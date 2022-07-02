import logo from '../logo.svg';
import '../App.css';
import ReactDOM from 'react-dom/client';



import React, { Component } from 'react';
import axios from 'axios';

import { InputLabel,Link,MenuItem,FormControl,Select,TextField,Card, CardContent, Grid, Typography, Button } from '@material-ui/core'
import BookingChecker from './BookingChecker';



class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      client: {
        cin: props.cin,
        service: props.service,
        phone: props.phone
        
      },
      appointments:[
        
      ]
    }
  }

  

  handleCinChanged(event) {
    // Extract the current value of the customer from state
    var client = this.state.client;
  
    // Extract the value of the input element represented by `target`
    var modifiedValue = event.target.value;
  
    // Update the customer object's first name
    client.cin = modifiedValue;
  
    // Update the state object
    this.setState({
      client: client
    });
  }
  handleServiceChanged(event) {
    // Extract the current value of the customer from state
    var client = this.state.client;
  
    // Extract the value of the input element represented by `target`
    var modifiedValue = event.target.value;
  
    // Update the customer object's first name
    client.service = modifiedValue;
  
    // Update the state object
    this.setState({
      client: client
    });
  }
  handlePhoneChanged(event) {
    // Extract the current value of the customer from state
    var client = this.state.client;
  
    // Extract the value of the input element represented by `target`
    var modifiedValue = event.target.value;
  
    // Update the customer object's first name
    client.phone = modifiedValue;
  
    // Update the state object
    this.setState({
      client: client
    });
  }

  getBookingPage() {
    /** Send cin and service to the server */
    axios.get('http://localhost:5000/api/bookings', {
      params: {
        cin: this.state.client.cin,
        service:this.state.client.service
      }
    })
    .then(function (response) {
      return response.data
      
    })
    
 }
 
   
 getCheckBookingPage() {
  
  axios.get('http://localhost:5000/api/bookings', {
    params: {
      cin: this.state.client.cin,
      service: this.state.client.service,
      phone: this.state.client.phone
    }
  })
  .then(response =>{
    // Redercet to /booking-service and show all client services appointments
    console.log(response)
    console.log(this)
    this.setState({
      appointments: response.data
    })
    console.log(this.state.appointments)
    this.render()
    return response.data
    
  })
     
 };
  

  render() {
    const appointmentsList = this.state.appointments;
    console.log(appointmentsList.length)
    if(appointmentsList.length > 0) {
      return(
            <div className='BookingChecker'>
                <Typography variant='h3' align='center' gutterBottom>
                  Imagine iddarti
                </Typography>
                <Card style={{maxWidth: 750,margin:"0 auto",padding:"20px 20px"}}>
                  
                  <CardContent>
                    <Typography gutterBottom variant='h5' align='center' >Imagine Iddarti - Appointments</Typography>
                    <Typography gutterBottom variant='body2' component="p" align='center'>You have a {appointmentsList.length} appointments with our services</Typography>
                  </CardContent>
                  {appointmentsList.map(appointment=>(
                    
                      <BookingChecker appointment={appointment} />
                    

                  ))}
          
        
                </Card>
                
     </div>
      )
    }else{
      return (

        <div className="Home">
           
                  
                    <div>
                    <Typography variant='h3' align='center' gutterBottom>
                        Imagine iddarti
                    </Typography>
                    <Card style={{maxWidth: 650,margin:"0 auto",padding:"20px 5px"}}>
                      <CardContent >
                        <Typography gutterBottom variant='h5' >Imagine Iddarti - Services</Typography>
                        <Typography gutterBottom variant='body2' component="p">Book an appointment with our services and save your time</Typography>
                        
                      
                          <Grid container spacing={2}>
                              <Grid xs={12} sm={12} item style={{margin:"auto"}}>
                                <TextField onChange={this.handleCinChanged.bind(this)} id="outlined-basic" label="CIN" variant="outlined" placeholder='Enter CIN' fullWidth required name="cin" value={this.state.client.cin}/>
                              </Grid>
                              <Grid xs={12} sm={12} item style={{margin:"auto"}}>
                                <TextField onChange={this.handlePhoneChanged.bind(this)} id="outlined-basic" label="Phone Number" variant="outlined" placeholder='0612324556' fullWidth required name="phone" value={this.state.client.phone}/>
                              </Grid>
                              <Grid xs={12} sm={12} item style={{margin:"auto"}}>
                                <FormControl fullWidth variant="outlined" mt={2} required>
                                  <InputLabel id="demo-simple-select-label" >Service</InputLabel>
                                  <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    onChange={this.handleServiceChanged.bind(this)} 
                                    value={this.state.client.service}
                                    name="service"
                                    label="Service"
                                    
                                  >
                                    <MenuItem value="passport">Paasport booking service</MenuItem>
                                    <MenuItem value="building">Building permit booking service</MenuItem>
                                    
                                  </Select>
                                </FormControl>
                              </Grid>
                              
                              <Grid xs={12}  item style={{margin:"auto"}}>
                                <Button variant="contained" fullWidth color="primary" onClick={this.getCheckBookingPage.bind(this)}>Check your appointment</Button>
                              </Grid>
                              <Grid xs={12}  item style={{margin:"auto"}}>
                              <Link href={this.state.client.service == "passport"?"https://outlook.office365.com/owa/calendar/Passeportimagineservice@IMAGINE746.onmicrosoft.com/bookings/s/_y6To9J9r0qbzGoptiQZYg2":"https://outlook.office365.com/owa/calendar/Passeportimagineservice@IMAGINE746.onmicrosoft.com/bookings/s/_y6To9J9r0qbzGoptiQZYg2"}
                               
                                 underline="hover">
                                  Booking a new appointment
                                </Link>

                              </Grid>
                              
                            
              
                          </Grid>
              
                        
                          
                        
                      
              
              
                        
                      </CardContent>
                    </Card>
              
                    </div>
                  
          
  
        </div>
      
       
       )

    }
     
   
  }


}

export default Home;