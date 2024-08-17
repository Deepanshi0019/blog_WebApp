import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const isProfileComplete = () => {
  return localStorage.getItem('Profile') === 'true';
};

const Profile = () => {
  const [profile, setProfile] = useState(false);
  const location = useLocation();
  const profileData = location.state?.profileData;

  useEffect(() => {
    const isProfileDone = isProfileComplete();
    console.log('Profile status:', isProfileDone); // Check the value here
    setProfile(isProfileDone);
  }, []);

  if (!profile) {
    return (
      <div className="text-center mt-16">
        <h1 className='mb-10'>Please complete your profile setup</h1>
        <Link
          to="/Setup"
          className="px-4 py-2 bg-orange-700 text-white rounded"
        >
          Create Profile
        </Link>
      </div>
    );
  }

  console.log('Profile Data:', profileData); // Check profile data here

  return (
    <div className="max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white shadow-xl rounded-lg text-gray-900">
      <div className="rounded-t-lg h-32 overflow-hidden">
        <img
          className="object-cover object-top w-full"
          src='https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ'
          alt='Mountain'
        />
      </div>
      <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
        <img
          className="object-cover object-center h-32"
          src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ'
          alt='Woman looking front'
        />
      </div>
      <div className="text-center mt-2">
        <h2 className="font-semibold">{profileData ? profileData.name : 'No Name'}</h2>
        <p className="text-gray-500">{profileData ? profileData.status : 'No Status'}</p>
        {profileData?.status === 'doing-job' && (
          <p className="text-gray-500">{profileData.job}</p>
        )}
      </div>
      <ul className="py-4 mt-2 text-gray-700 flex items-center justify-around">
        {/* Add any additional profile actions here */}
      </ul>
      <div className="p-4 border-t mx-8 mt-2">
        <button className="w-1/2 block mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-6 py-2">Follow</button>
      </div>
    </div>
  );
};

export default Profile;
