import React, { Fragment, useState , useEffect } from 'react';
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

useEffect(()=>{
       if(url){
        fetch("/createpost",{
            method:"post",
            headers:{
                "Content-Type":"application/json",
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            },
            body:JSON.stringify({
                title,
                body,
                pic:url
            })
        }).then(res=>res.json())
        .then(data=>{
    
           if(data.error){
              M.toast({html: data.error})
           }
           else{
               M.toast({html:"Created post Successfully"})
               history.push('/Feed')
           }
        }).catch(err=>{
            console.log(err)
        })
    }
    },[url])

	const MakePost = () => {
	const data = new FormData()
	data.append("file",image)
	data.append("upload_preset","cloud_bucket")
	data.append("cloud_name","codersprofile")
	fetch("https://api.cloudinary.com/v1_1/codersprofile/image/upload",{
		method:"post",
		body:data
	}).then(res => res.json())
	.then(data => {
			setUrl(data.url)
			console.log(data.url)
			M.toast({html: "Image Saved"})
	})
	.catch(err => {
		M.toast({html: err})
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
                      <input type="text" id="title" className="form-control text-center" placeholder="Title"
						          required="required" value={title} onChange={(e) => setTitle(e.target.value)}
                       />
                    </div>
                  </div>
                  <div className="row form-group justify-content-center">
                    <div className="col-md-6">
                      <input type="text" id="body" className="form-control text-center" placeholder="Description" 
                      	required value={body} onChange={(e) => setBody(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="row form-group justify-content-center">
                    <div className="col-md-6">
                      <input type="file" required="required" onChange={(e) => setImage(e.target.files[0])}
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