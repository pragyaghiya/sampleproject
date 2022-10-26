import React from 'react';
import Form from 'react-bootstrap/Form';
import { searchHcp } from '../services/hcp-service';
import './Searchbar.css'
import InputGroup from 'react-bootstrap/InputGroup';


const SearchBar = () => {
  const [querry,setQuerry] = React.useState('')
  const [querryApi,setQuerryApi] = React.useState(querry)
  const [data, setdata] = React.useState([])

  const handleQuery =(event)=>{
    setQuerry(event.target.value)
    console.log(querry)
  }
  const handleSearch=(e)=>{
    e.preventDefault()
    setQuerryApi(querry)   
  }

  const intitial = React.useRef(true)
  React.useEffect(()=>{
    if(intitial.current){
      console.log(data)
      intitial.current=false
    }else{
    console.log(intitial.current)
    searchHcp(querryApi).then((data) => {
      if (data.error) {
          console.log(data.error)
      }
      else {
        console.log(data)
        setdata(data)
        
      }
    }) 
  }},[querryApi]
  )



  


  return (
    <>
    <div className='searchContainer'>
        <InputGroup size="lg" className="mb-3">
        <Form.Control className='formSearch'
          placeholder="Search for healthcare providers..."
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          onChange={handleQuery}/>
        <button className='searchBtn' variant="outline-secondary" onClick={handleSearch} id="button-addon2">
          Search
        </button>
      </InputGroup>
    </div>
    <div className="homeContainer" style={{ "margin": "2%", "backgroundColor": "white" }}>


                {
                    data.map(det =>
                      <div className='HCPcard' key={det.id}>
                         <img src="/pcpIcon.svg" alt='' style={{ "borderRadius": "50%", "width": "20%","height":"200px", "padding": "1%" }} />
                          <div className='hcpInfo'>
                          <h2 className='HCPName'>{det.name}, {det.qualification}</h2>
                          <p>{det.designation}</p>
                          <p>{det.address1}</p>
                          <p>{det.address2}</p>
                          <p>{det.phoneNo}</p>
                          </div>
                      
                      <br/>
                      </div>
                      


                    )
                }




            </div>

    </>
  )
}

export default SearchBar