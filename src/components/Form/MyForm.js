import React,{useState,useEffect} from 'react'
import Modal from '../Modal/Modal'
import styles from '../Modal/Modal.module.css'; 

function MyForm(props) {
    const {} = props
    const [formdata, setFormdata] = useState({
            firstname:"",
            lastname:"",
            email:"",
            status:"",
    });
    //this.showModal = this.showModal.bind(this);
    //this.hideModal = this.hideModal.bind(this);
  

  const [Modalst, setModalst] = useState({
    show: false,
  })  


const showModal = () => {
    setFormdata({   firstname:"",
    lastname:"",
    email:"",
    status: "SUCCESS" });
    setModalst({
        show: true,
    })
}

const hideModal = () => {
    setModalst({
        show: false,
    })
}


const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setFormdata({
        ...formdata,
        [name]:value,
    })
}
const handleSubmit = (e) => {
    e.preventDefault();
    //const form = e.target;
    fetch("https://formspree.io/f/xaylkznd",{
        method: "POST",
        body: JSON.stringify(formdata),
        headers:{
            "Content-Type": "application/json",
            Accept: "application/json",
        },
    }       
    ).then((res)=>res.json())
    .then((result) => {
        if(result.ok){
            showModal();
        }
         else {
            setFormdata({  ...formdata, status: "ERROR" });
            alert("this is not DONE");
         }

    })
    // const form = e.target;
    // const data = new FormData(form);
    // const xhr = new XMLHttpRequest();
    // xhr.open(form.method, form.action);
    // xhr.setRequestHeader("Accept", "application/json");
    // xhr.onreadystatechange = () => {
    //       if (xhr.readyState !== XMLHttpRequest.DONE) return;
    //       if (xhr.status === 200) {
    //         form.reset(); 
    //         setFormdata({  status: "SUCCESS" });
    //       } else {
    //         setFormdata({  status: "ERROR" });
    //       }
    //     };
    //     xhr.send(data);
};
    return (
        
        <form onSubmit={handleSubmit}  
        // action="https://formspree.io/f/xaylkznd"
        method="POST">
            <div>
            <label>firstname:</label>
            <input type="text" name="firstname" value={formdata.firstname} onChange={handleChange}/>
            </div>
            <div>
            <label>lastname:</label>
            <input type="text" name="lastname" value={formdata.lastname} onChange={handleChange}/>
            </div>
            <div>   
            <label>email:</label>
            <input type="email" name="email" value={formdata.email} onChange={handleChange}/>
            </div>
            <div>
            <button>Submit</button>
            </div>
            <main>
            <Modal show={Modalst.show} handleClose={hideModal} 
                             msg={(formdata.status == "SUCCESS") 
                                          ?"This Record is added to Table Successfully" :"Error"}> </Modal> 
            </main>
        </form>
    )
}

MyForm.propTypes = {

}

export default MyForm;

// const Modal = ({ handleClose, show, msg }) => {  
//     const showHideClassName =  show ? [styles.displayblock] : [styles.displaynone];
//     let classNames = [styles.modal];
//     classNames +=  ' ' + showHideClassName;
//     return (
//       <div className={classNames}>
//         <section className={styles.modalmain}>
//         <div className={styles.modalcontent}>
//           {msg} 
//          </div>
//          <div className="col-md-offset-2 col-md-2 ">
//           <button className="btn btn-primary center-block" type="button" onClick={handleClose}>
//             Close
//           </button>
//           </div>
//         </section>
//       </div>
//     );
//   };
