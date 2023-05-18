import React from 'react';

const VideoPlayIcon = ({width, height}) => {
  return (
    <>
      <svg
        width={width ? width : '24'}
        height={height ? height: '24'}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z"
          fill="currentColor"
        />
        <path
          d="M21.4795 7.85999H2.51953C2.32062 7.85999 2.12985 7.78097 1.9892 7.64032C1.84855 7.49966 1.76953 7.3089 1.76953 7.10999C1.76953 6.91107 1.84855 6.72031 1.9892 6.57966C2.12985 6.439 2.32062 6.35999 2.51953 6.35999H21.4795C21.6784 6.35999 21.8692 6.439 22.0099 6.57966C22.1505 6.72031 22.2295 6.91107 22.2295 7.10999C22.2295 7.3089 22.1505 7.49966 22.0099 7.64032C21.8692 7.78097 21.6784 7.85999 21.4795 7.85999Z"
          fill="currentColor"
        />
        <path
          d="M8.51953 7.71999C8.10953 7.71999 7.76953 7.37998 7.76953 6.96999V2.10999C7.76953 1.69999 8.10953 1.35999 8.51953 1.35999C8.92953 1.35999 9.26953 1.69999 9.26953 2.10999V6.96999C9.26953 7.37998 8.92953 7.71999 8.51953 7.71999ZM15.4795 7.26999C15.0695 7.26999 14.7295 6.92999 14.7295 6.51999V2.10999C14.7295 1.69999 15.0695 1.35999 15.4795 1.35999C15.8895 1.35999 16.2295 1.69999 16.2295 2.10999V6.51999C16.2295 6.93999 15.8995 7.26999 15.4795 7.26999ZM11.0895 18.121C10.7295 18.121 10.3895 18.031 10.0795 17.861C9.39953 17.461 8.99953 16.661 8.99953 15.651V13.251C8.99953 12.241 9.39953 11.431 10.0895 11.031C10.7795 10.631 11.6795 10.691 12.5495 11.201L14.6295 12.401C15.4995 12.901 16.0095 13.651 16.0095 14.451C16.0095 15.251 15.4995 16.001 14.6195 16.501L12.5395 17.701C12.0595 17.981 11.5595 18.121 11.0895 18.121ZM11.0995 12.271C10.9995 12.271 10.9095 12.291 10.8395 12.331C10.6295 12.451 10.4995 12.791 10.4995 13.251V15.651C10.4995 16.101 10.6295 16.441 10.8395 16.571C11.0495 16.691 11.4095 16.631 11.7995 16.401L13.8795 15.201C14.2695 14.971 14.5095 14.691 14.5095 14.451C14.5095 14.211 14.2795 13.931 13.8795 13.701L11.7995 12.501C11.5395 12.351 11.2895 12.271 11.0995 12.271Z"
          fill="currentColor"
        />
      </svg>
    </>
  );
};

export default VideoPlayIcon;