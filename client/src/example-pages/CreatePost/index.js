import React, { Fragment, useState } from 'react';
import { Link , useHistory } from 'react-router-dom';
import { Button } from 'reactstrap';
import M from 'materialize-css';
import '../../assets/Profile/css/animate.css'
import '../../assets/Profile/css/style.css'
import Footer from '../Profile/Footer';
import Bread from '../Profile/Bread';

const CreatePost = () =>  {

    const history = useHistory();
    const [title,setTitle] = useState("");
    const [body,setBody] = useState("");
    const [image,setImage] = useState("");
    const [url,setUrl] = useState("");

    const MakePost = () => {
    	const data = new FormData()
    	data.append("File",image)
    	data.append("upload_preset","codersprofile")
    	data.append("cloud_name","codersprofile")
    	fetch("	https://api.cloudinary.com/v1_1/codersprofile/image/upload",{
    		method:"post",
    		body:data
    	}).then(res => res.json())
    	.then(data => {
    		setUrl(data.url)
    	})
    	.catch(err => {
    		console.log(err)
    	})

    	fetch("/createpost",
	    {
	      method:"Post",
	      headers:{
	        'Content-Type':'application/json'
	    },
	    body:JSON.stringify({
	        title,
	        body,
	        pic:url
	      }) 
	  	}).then(res => res.json())
	      .then(data => {
	        if (data.error) {
	        	console.log(data.error)
	           M.toast({html: data.error, classes :"#c62828 red darken-3" })
	        } else {
	          M.toast({html: 'Created Post'})
	        }
	      }).catch(err => {
	        console.log(err)
	      })
    }


		return (
			<Fragment>
			<div id="page"> 
			  <Bread />		
				<div id="fh5co-consult">
	              <div className="choose animate-box col-md-12 text-center">
	                <h2>Create Post</h2>
	                <form>
	                  <div className="row form-group justify-content-center">
	                    <div className="col-md-6 text-center">
	                      <input type="text" id="title" className="form-control text-center" placeholder="Your firstname"
							value={title} onChange={(e) => setTitle(e.target.value)}
	                       />
	                    </div>
	                  </div>
	                  <div className="row form-group justify-content-center">
	                    <div className="col-md-6">
	                      <input type="text" id="body" className="form-control text-center" placeholder="Your lastname" 
	                      	value={body} onChange={(e) => setBody(e.target.value)}
	                      />
	                    </div>
	                  </div>

	                  <div className="row form-group justify-content-center">
	                    <div className="col-md-6">
	                      <input type="file" onChange={(e) => setImage(e.target.files[0])}
	                       />
	                    </div>
	                  </div>
	                  
	                  <div className="form-group justify-content-center">
	                    <Button color="second" className="mt-4" onClick={() => MakePost()}>
		                    Create
		                 </Button>
	                  </div>

	                </form> 
	              </div>
	            </div> 
	           </div>
		      <Footer />
			</Fragment>
		);
}

export default CreatePost