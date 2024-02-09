import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import  {bahasa} from '../data/bhasapage'


function Product() {
   const [dataBahasa,setDataBahasa]=useState([]);
  useEffect (()=>{
    bahasa((data) =>{

      setDataBahasa(data.data)

    })
      
  },[])
  return (

    <div>
            <div className="container-fluid fixed-top "style={{backgroundColor:"#A1CEF6" , height:"150px" }} >
        <nav className="navbar navbar-expand-lg bg-body-tertiary rounded mt-3">
  <div className="container-fluid ">
    <a className="navbar-brand" href="#">Al Qur'an.on</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end " id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active postion-relative" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Pricing</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  </div>
   <div className='container pt-5'>
    <div className='pt-5'></div>
    <ul className=' row pt-5'>
      {dataBahasa.map((item, index)=>(
        <li key={index} className='col-md-6 d-flex justify-content-center'>
      <div className="card w-75 mb-3 ">
    <div className="card-body" >
    <h5 className="card-text">Nama Surat {item.name_translations.ar} / {item.name_translations.id}</h5>
    <p className="card-text">Jumlah ayat: {item.number_of_ayah}</p>
    <p className="card-text">Tempat turun surat :{item.place} </p>
    <p>Type Surat {item.type}</p>
    <a href={item.recitation} target="_blank" rel='nooper norefferer' type="button" className="btn btn-primary container">Play</a>
      </div>
        </div>
    </li>
   ))}
   </ul>
   </div>
</div>
  )
}

export default Product
