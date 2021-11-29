import { Component } from "react";
import { Formik } from "formik";

export default class SearchBar extends Component {
    handleSubmit = (values, actions) => {
        console.log(values);
    }

    render() {
        return (
            <Formik 
                onSubmit={this.handleSubmit}
                initialValues={{ query: '' }}
            >
                { ({handleSubmit, handleChange, handleBlur, isSubmitting}) => (
                    <form className="d-flex flex_row p-2 m-2" onSubmit={handleSubmit}>
                        <input name="query" className="flex-fill form-control mx-2" placeholder="Search ..." onChange={handleChange} onBlur={handleBlur} />
                        <button className="btn btn-small btn-success" type="submit" disabled={isSubmitting} >Submit</button>
                    </form>
                )}

            </Formik>
            
        )
    }
}