import React from 'react';
import BlogTimeline from '../../components/public/BlogTimeline';

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