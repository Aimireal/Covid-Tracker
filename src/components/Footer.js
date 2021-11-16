import React from "react";

const Footer = () => {
  return (
    <div className='mt-10 mb-5 text-center text-gray-100'>
      <p className='text-sm font-semibold text-gray-100'>
        Developed by{" "}
        <a
          href='https://github.com/Aimireal'
          target='_blank'
          rel='noreferrer'
          className='font-bold'
        >
          Dylan Hudson
        </a>
        , with data fetched from the{" "}
        <a
          href='https://coronavirus.data.gov.uk/details/developers-guide'
          target='_blank'
          rel='noreferrer'
          className='font-bold'
        >
          GOV.UK Covid-19 API
        </a>{" "}
      </p>
      <button className='mt-5 bg-charcoal text-gray-100 px-5 py-2 rounded text-sm font-semibold hover:bg-gray-600'>
        <i className='fab fa-github mr-2'></i>
        <a
          href='https://github.com/Aimireal/React-Covid-Tracker'
          target='_blank'
          rel='noreferrer'
        >
          View GitHub Repo
        </a>
      </button>
    </div>
  )
}

export default Footer;