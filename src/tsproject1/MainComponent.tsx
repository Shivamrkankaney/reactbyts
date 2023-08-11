
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
export function MainComponent(){
    return(
        <div className="container-fluid" style={{height:'300px'}}>
              <div className="back" >
        <div > <br/><br/>

            <h1 className="H" >PowerFul ESG analytics platform  <br/>for your bussiness</h1>
            <p className="P1" >we have everything you need to help your company meet your net carbon <br/>zero goals.Take a free assaenment today to find out how</p>
 <div style={{textAlign:'center'}}>
    <ButtonGroup
      disableElevation
      variant="contained"
      aria-label="Disabled elevation buttons"
    >
      <Button> <Link to="Api" style={{textDecoration:'none' , color:'white'}}>TAKE A FREE ASSIGNMENT</Link></Button>
      <Button style={{marginLeft:'10px'}}><Link to="Form" style={{textDecoration:'none' , color:'white'}}> REQUEST FOR DEMO</Link></Button>
    </ButtonGroup>

            </div>
<br/>
<p className="P2" ><Link to="Video" style={{textDecoration:'none' , color:'black'}}> See how its work</Link> </p> <br/>
<p className="P3" ><img className="img" src="https://png.pngtree.com/png-vector/20220621/ourmid/pngtree-analytics-icon-vector-illustration-png-image_5222188.png" alt="" /></p>


           </div>

      </div>
      </div>)}



