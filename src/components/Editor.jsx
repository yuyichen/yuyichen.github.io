import React from "react";
import Editor from "@uiw/react-md-editor";
import services from '@/services'

export default (props) => {

  const uploadImage = async (file) => {
    const result = await services.upload(file);
    return result.url; 
  }
  return <Editor {...props} height="100%"/>
};
