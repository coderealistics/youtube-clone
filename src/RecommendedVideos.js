import React from 'react';
import "./RecommendedVideos.css";
import VideoCard from "./VideoCard";

function RecommendedVideos(props) {
    return (
        <div className="recommendedVideos">
            <h1>Recommended</h1>
            <div className="recommendedVideos__videos">
                <VideoCard
                    title="Адаптивная вёрстка писем: проблемы и решения"
                    views="2.3M Views"
                    timestamp="3 days ago"
                    channelImage="https://yt3.ggpht.com/ytc/AAUvwngmFWuJChd_vzoerPtN-i6hdNw3UiXLv-KiAQCMSg=s88-c-k-c0x00ffffff-no-rj"
                    channel="HTML Academy"
                    image="https://i.ytimg.com/vi/Vstt9RTXMas/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLAqGogAFxlHSaTe7iBfuTlp-9NfNw"
                />
                <VideoCard
                    title="Адаптивная вёрстка писем: проблемы и решения"
                    views="2.3M Views"
                    timestamp="3 days ago"
                    channelImage="https://yt3.ggpht.com/ytc/AAUvwngmFWuJChd_vzoerPtN-i6hdNw3UiXLv-KiAQCMSg=s88-c-k-c0x00ffffff-no-rj"
                    channel="HTML Academy"
                    image="https://i.ytimg.com/vi/Vstt9RTXMas/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLAqGogAFxlHSaTe7iBfuTlp-9NfNw"
                />
                <VideoCard
                    title="Адаптивная вёрстка писем: проблемы и решения"
                    views="2.3M Views"
                    timestamp="3 days ago"
                    channelImage="https://yt3.ggpht.com/ytc/AAUvwngmFWuJChd_vzoerPtN-i6hdNw3UiXLv-KiAQCMSg=s88-c-k-c0x00ffffff-no-rj"
                    channel="HTML Academy"
                    image="https://i.ytimg.com/vi/Vstt9RTXMas/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLAqGogAFxlHSaTe7iBfuTlp-9NfNw"
                />
                <VideoCard
                    title="Адаптивная вёрстка писем: проблемы и решения"
                    views="2.3M Views"
                    timestamp="3 days ago"
                    channelImage="https://yt3.ggpht.com/ytc/AAUvwngmFWuJChd_vzoerPtN-i6hdNw3UiXLv-KiAQCMSg=s88-c-k-c0x00ffffff-no-rj"
                    channel="HTML Academy"
                    image="https://i.ytimg.com/vi/Vstt9RTXMas/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLAqGogAFxlHSaTe7iBfuTlp-9NfNw"
                />
            </div>
        </div>
    );
}

export default RecommendedVideos;