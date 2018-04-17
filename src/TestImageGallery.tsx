import * as React from 'react';
import ImageGallery from 'react-image-gallery';
interface TestImageGalleryProps {
}

const TestImageGallery: React.SFC<TestImageGalleryProps> = (props) => {
    return (
        <ImageGallery items={
    [
        {
            original: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3289719147,458472823&fm=27&gp=0.jpg",
            thumbnail: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3289719147,458472823&fm=27&gp=0.jpg",
        },
        {
            original: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3183986959,255894320&fm=27&gp=0.jpg",
            thumbnail: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3183986959,255894320&fm=27&gp=0.jpg",
        }
    ]
}/>
    );
};

export default TestImageGallery;