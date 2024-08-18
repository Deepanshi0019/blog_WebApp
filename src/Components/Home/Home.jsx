import React, { useState, useEffect } from 'react';
import Card from './Card';
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
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

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "blogs", id));  // Correctly reference the doc by its ID
      setBlogs(blogs.filter(blog => blog.id !== id));  // Update state to remove the deleted blog
    } catch (error) {
      console.error("Error deleting document: ", error);
    }
  };

  return (
    <div className='flex justify-evenly items-center flex-wrap'>
      {blogs.map(blog => (
        <Card key={blog.id} blog={blog} onDelete={() => handleDelete(blog.id)} />
      ))}
    </div>
  );
};

export default Home;
