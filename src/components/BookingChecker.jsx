import React, { Component } from 'react';
import { InputLabel,MenuItem,Link,FormControl,Select,TextField,Card, CardContent, Grid, Typography, Button,Accordion,AccordionSummary,AccordionDetails} from '@material-ui/core'


class BookingChecker extends Component {
    constructor(props) {
        super(props);
        this.state = {
          client: {
            cin: props.cin,
            service: props.service,
            
          }
        }
      }

      render() {
        return(
          <div className='BookingChecker' align='left'>
           <Accordion>
            <AccordionSummary
              
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Grid container spacing={2}>
              <Grid xs={6} sm={6} item style={{margin:"auto"}}>
              <Typography>{this.props.appointment.subject}</Typography>
              </Grid>
              <Grid xs={6} sm={6} item style={{margin:"auto",align:"right"}}>
              <Typography>{this.props.appointment.start}</Typography>
              </Grid>
              </Grid>
            
            
              
            </AccordionSummary>

            <AccordionDetails>
              <Grid container spacing={2}>
              <Grid xs={12} sm={12} item style={{margin:"auto"}}>
                  <Typography variant="h6" display="inline-block">
                  You have an appointment with {this.props.appointment.subject}, do not forget to be present 15 minutes before the specified time mentioned above.
                  </Typography>
              </Grid>
              <Grid xs={12} sm={12} item style={{margin:"auto"}}>
                  <Link href="https://accounts.google.com/AccountChooser/signinchooser?service=mail&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&flowName=GlifWebSignIn&flowEntry=AccountChooser">Check your email to manage this appointment</Link>
                  
              </Grid>
              </Grid>
            </AccordionDetails>
            </Accordion>
            
          </div>
        )
        
      }

}


export default BookingChecker