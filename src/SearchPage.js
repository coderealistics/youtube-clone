import React from 'react';
import "./SearchPage.css";
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";

function SearchPage(props) {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneOutlinedIcon/>
                <h2>FILTER</h2>
            </div>
            <hr/>

            <ChannelRow
                image="https://yt3.ggpht.com/ytc/AAUvwniwccxGvXvGzzwka5f73aPbmdxvEX4G_cUd7TEzkw=s176-c-k-c0x00ffffff-no-rj-mo"
                channel="Clever Programmer"
                verified
                subs="856K"
                noOfVideo={382}
                description="You can find awesome programming lessons here! Also, expect programming tips and tricks that will take your coding skills to the next level."
            />
            <hr/>

            <VideoRow
                views="1.4M"
                subs="856K"
                description="You can find awesome programming lessons here! Also, expect programming tips and tricks that will take your coding skills to the next level."
                timestamp="59 seconds ago"
                channel="Clever Programmer"
                title="Why I felt depressed last year and how I got out of it (mental health for developers)"
                image="https://i.ytimg.com/an_webp/zeqJ-GppCDI/mqdefault_6s.webp?du=3000&sqp=CNio6P4F&rs=AOn4CLBC3wPTh7mENlySNwxRqHJuw6pPoA"
            />

            <VideoRow
                views="1.4M"
                subs="856K"
                description="You can find awesome programming lessons here! Also, expect programming tips and tricks that will take your coding skills to the next level."
                timestamp="59 seconds ago"
                channel="Clever Programmer"
                title="Why I felt depressed last year and how I got out of it (mental health for developers)"
                image="https://i.ytimg.com/an_webp/zeqJ-GppCDI/mqdefault_6s.webp?du=3000&sqp=CNio6P4F&rs=AOn4CLBC3wPTh7mENlySNwxRqHJuw6pPoA"
            />
        </div>
    );
}

export default SearchPage;