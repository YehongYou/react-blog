import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';

class PostsNew extends Component{
  render(){
    return(
      <form>
        <Field
          name='title'
          component={}
        />
      </form>
    );
  }
}

export default reduxForm({ // this function allow reduxform directly communitate from component to reducer that we setup
  form: 'PostNewForm'  // string need to unquie
})(PostsNew);
