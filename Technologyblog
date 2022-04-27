import react from 'react';
import Nav from './nav';
import url from './techb1.jpg';

//for css
import './techblog.css';
// for card 
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

class Tech extends react.Component{
    
    constructor(){
        super();
        this.state={
            flag:false,
            data:[]
        }
    }

   componentDidMount(){
    fetch('http://localhost:3003/datastore',{     
        method: 'POST',                                
        headers: { 
            'Content-Type': 'application/json'  
        },                      
       }).then(data=>{
        return data.json();
    }).then(res=>{
        this.setState({
            flag:true,
            data:res
        })
        
    })
     
   }

    render(){ 
         
            
       return(
        <>
          <Nav/>

          <div className='main2'>
          
            <div className='card'>
            <Card sx={{ maxWidth: 345 }}>         
      <CardActionArea>     
        <CardMedia
          component="img"
          height="220"
          image={url}   
          alt="web technology" 
        />  
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Web Technology  
          </Typography>      
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>  
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>   
      </CardActions>
    </Card>
            </div>
    <div className='card'>  
    <Card sx={{ maxWidth: 345 }}>         
      <CardActionArea>     
        <CardMedia
          component="img"
          height="220"
          image={url}   
          alt="web technology" 
        />  
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Web Technology  
          </Typography>      
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>    
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share  
        </Button>   
      </CardActions>
    </Card>
    </div>
    
    <div className='card'>  
    <Card sx={{ maxWidth: 345 }}>         
      <CardActionArea>     
        <CardMedia
          component="img"
          height="220"
          image={url}   
          alt="web technology" 
        />  
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Web Technology  
          </Typography>      
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>  
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share  
        </Button>   
      </CardActions>
    </Card>
    </div>

    <div className='card'>  
    <Card sx={{ maxWidth: 345 }}>           
      <CardActionArea>     
        <CardMedia
          component="img"
          height="220"
          image={url}   
          alt="web technology" 
        />  
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Web Technology  
          </Typography>       
          <Typography variant="body2" color="text.secondary">  
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>  
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share  
        </Button>   
      </CardActions>
    </Card>
    </div>
   </div>
        </>
       )
    }

}

export default Tech;