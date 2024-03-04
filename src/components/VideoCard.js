import React from "react";

const VideoCard = ({ info }) => {
  const calcTime = (date) => {
    const seconds = Math.floor((new Date() - date) / 1000);

    let interval = seconds / 31536000; // 365 * 24 * 60 * 60

    if (interval > 1) {
      return Math.floor(interval) + " years ago";
    }
    interval = seconds / 2592000; // 30 * 24 * 60 * 60
    if (interval > 1) {
      return Math.floor(interval) + " months ago";
    }
    interval = seconds / 86400; // 24 * 60 * 60
    if (interval > 1) {
      return Math.floor(interval) + " days ago";
    }
    interval = seconds / 3600; // 60 * 60
    if (interval > 1) {
      return Math.floor(interval) + " hours ago";
    }
    interval = seconds / 60;
    if (interval > 1) {
      return Math.floor(interval) + " minutes ago";
    }

    return Math.floor(seconds) + " seconds ago";
  };

  let statistics,
    snippet,
    channelTitle,
    title,
    thumbnails,
    publishedAt,
    timeAgo;

  if (info) {
    statistics = info.statistics;
    snippet = info.snippet;
    channelTitle = snippet.channelTitle;
    title = snippet.title;
    publishedAt = snippet.publishedAt;
    thumbnails = snippet.thumbnails;

    const videoPostedDate = new Date(publishedAt);
    timeAgo = calcTime(videoPostedDate);
  }

  return (
    <div className="p-2 m-2 w-60 shadow-lg rounded-md">
      <img
        alt="thumbnail"
        src={thumbnails?.medium.url}
        className="rounded-lg"
      />
      <ul>
        <li className="font-bold">{title}</li>
        <li className="text-sm">{channelTitle}</li>
        <div className="flex">
          <li className="text-sm mr-1">{statistics?.viewCount} Views</li>
          <li className="text-sm">• {timeAgo}</li>
        </div>
      </ul>
    </div>
  );
};

export default VideoCard;
