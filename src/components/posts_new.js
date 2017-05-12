import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {createPost} from '../actions';


class PostsNew extends Component{
  renderField(field){
    //{...field.input} contain all event handler like eg. onChange = {field.input.onChange} ....

    const className = `form-group ${field.meta.touched && field.meta.error ? 'has-danger' : ''}`;
    return(
      <div className={className}>
        <label>{field.label}</label>
        <input
          className="form-control"
          type='text'
          {...field.input}
        />
        <div className="text-help">
         {field.meta.touched? field.meta.error : ''}
        </div>
      </div>
    )
  }

  onSubmit(values){
    this.props.createPost(values, ()=>{
      this.props.history.push('/');
    });
  }

  render(){
    const {handleSubmit} = this.props; // pass props to function, onbehalf of redux form
    //  onSubmit={handleSubmit(this.onSubmit.bind(this))}
                // hundlesubmit run the reduxform assign of thing, is ok ==> run call back function this.onSubmit.bind(this))
    return(
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label="Title for Post"
          name='title'
          component={this.renderField}
        />
        <Field
          label="Categories"
          name='categories'
          component={this.renderField}
        />
        <Field
          label="Post Content"
          name='content'
          component={this.renderField}
        />
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className='btn btn-danger'>Cancel</Link>
      </form>
    );
  }
}
// values is a object containing all the values that user enter
function validate(values){ // it will be called automatically by redux form
  // console.log(values) => {title:"asdas", Categories="asdas", content="sdas"}
  const errors ={};
  //validate the inputs from the 'values'
  if(!values.title || values.title.length<3){
    errors.title="Enter a title! that at least 3 charators";
  }
  if(!values.categories){
    errors.categories="Enter some categories!";
  }
  if(!values.content){
    errors.content="Enter some content!";
  }

  //if errors is empty, the form is fine to submit
  //if errors have any properties, redux form assumes form is invalid
  return errors;
}
              //reduxform is like connect method, add additional propos to PostNew component
export default reduxForm({ // this function allow reduxform directly communitate from component to reducer that we setup
  validate: validate, // === validate
  form: 'PostNewForm'  // string need to unquie
})(
  connect(null,{createPost:createPost})(PostsNew)
);
//reduxform is reponsible for handling state and validation of our form
