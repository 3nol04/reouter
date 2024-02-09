const Register =()=>{


    return( 
      <div style={{minHeight : "100vh" , justifyContent : "center", alignItems : "center", display : "flex"
      }}>
<form className="" style={{width:"25em",fontFamily: "serif"}}>

  <p className=" d-flex justify-content-center fs-3" >
    Register
  </p>
  <div class="mb-3 fs-6">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3 fs-6">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  <button type="submit" class="btn btn-primary">register</button>
  
</form>
      </div>
    )
}

export default Register