import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import Editor from "@/components/Editor";
import services from "@/services"

export default (props) => {
  const locationData = useLocation();
  const { title } = useParams();
  const [postContent, setPostContent] = useState((locationData?.state?.postData || {})?.content);
  const [loading, setLoading] = useState(false);

  const getPosContent = async () => {
    if (!locationData?.state?.postData) {
      setLoading(true);
      const list = await services.gists().finally(() => {
        setLoading(false);
      });
      setPostContent((list?.files[title] || {})?.content);
    }
  };

  useEffect(() => {
    getPosContent();
  }, []);

  return <div className="h-full p-6">
    <Editor className="h-full" value={postContent} onChange={setPostContent}/>
  </div>;
};
