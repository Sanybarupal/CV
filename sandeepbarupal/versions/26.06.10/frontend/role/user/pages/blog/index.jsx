import React from 'react';
import Blog from '../../components/Blog';

const BlogPage = () => {
    return (
        <div style={{ width: '100%', overflowX: 'hidden', minHeight: '100vh', paddingTop: '80px' }}>
            <Blog />
        </div>
    );
};

export default BlogPage;
