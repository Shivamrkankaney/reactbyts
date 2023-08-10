import { useFormik } from "formik";
import { useState } from "react";
import * as yup from "yup";

export function FreeDemo(){
    const[ clear, setClear]=useState({

    },);

    const formik = useFormik({
        initialValues:{
            "UserName":"",
            "Age":0,
            "Mobile":"",
            "City":""
        },
        validationSchema:yup.object({
            "UserName":yup.string().required("Name Required").min(4,"Name too short"),
            "Age":yup.number().required(),
            "Mobile":yup.string().matches(/\+91\d{10}/,"Invalid Mobile").required("Number Required")
        }),
        onSubmit:(values)=>{
            alert(JSON.stringify(values));
            setClear({
                initialValues:{
                    "UserName":"",
                    "Age":0,
                    "Mobile":"",
                    "City":"",}

        })
        }
    })

    return(
        <div className="container-fluid">
            <center style={{marginTop:'50px'}}>
            <h2>Register User</h2>
            <form onSubmit={formik.handleSubmit}>
            <dl>
            <dt>UserName</dt>
            <dd> <input type="text" onBlur={formik.handleBlur} onChange={formik.handleChange}  name="UserName"/></dd>
            <dd className="text-danger">{formik.errors.UserName}</dd>
            <dt>Age</dt>
            <dd> <input type="number"  onChange={formik.handleChange}  name="Age"/></dd>
            <dd className="text-danger">{formik.errors.Age}</dd>
            <dt>Mobile</dt>
            <dd> <input type="text"  onChange={formik.handleChange}  name="Mobile"/></dd>
            <dd className="text-danger">{formik.errors.Mobile}</dd>
            <dt>City</dt>
            <dd> <select  onChange={formik.handleChange}  name="City">
             <option value="-1">Choose City</option>
             <option value="Hyd">Hyd</option>
             <option value="Delhi">Delhi</option>

                 </select></dd>
            <dd className="text-danger"></dd>
            </dl>
            <button className="btn btn-primary"  >Register</button> </form>
            </center>
        </div>
    )
}
