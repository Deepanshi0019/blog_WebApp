import React, { useState, useEffect } from 'react';
import Card from './Card';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../firebase';

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "blogs"));
        const blogsList = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setBlogs(blogsList);
      } catch (error) {
        console.error("Error getting documents: ", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className='flex justify-evenly items-center flex-wrap'>
      {blogs.map(blog => (
        <Card key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default Home;
