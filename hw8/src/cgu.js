import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import LockIcon from '@mui/material/Icon';
const Login=()=>{
    var output=[];
    output.push(
    <><div>
         <IconButton color="primary" aria-label="add an alarm">
  <LockIcon /></IconButton>
        <h2>CGU Login</h2>
    </div><div>
            <p>Email</p><input type="email"></input>
            <p>Password</p><input type="password"></input>
        </div>
        <div>
            <Button variant="contained" color="primary">sign in</Button>
        </div>
        <CardActions>
      <Button size="small" color="primary">
        Forgat password?
      </Button>
      <Button size="small" color="primary">
        Don't have an account?
      </Button>
      <Button size="small" color="primary">
        Sign Up
      </Button>
    </CardActions>
    </>
        )
        return output;
}
export default Login;
