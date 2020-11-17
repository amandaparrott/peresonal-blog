import React from 'react';
import BlogTimeline from './BlogTimeline';

const HomePage: React.FC<IHomePageProps> = () => {
    return (
        <div className="container">
            <div>
                <BlogTimeline />
            </div>
        </div>
    )
}

interface IHomePageProps {}

export default HomePage;