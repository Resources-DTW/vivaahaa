import React, { useState, useEffect } from 'react';
import { Collapse, Pagination } from 'antd';
import ProfileCard from 'path-to-ProfileCard'; // Adjust the import path

const { Panel } = Collapse;

const TabWithPagination = () => {


  const items = [
    {
      key: "1",
      label: "My Matches (1005)",
      children: (
        <>
          

        </>
      ),
    },
    {
      key: "2",
      label: "Near Me",
      children: (
        <>

        </>
      ),
    },
    {
      key: "3",
      label: "Recently Viewed",
      children: (
        <>

        </>
      ),
    },
    {
      key: "4",
      label: "Shortlisted",
      children: (
        <>

        </>
      ),
    },
  ];

  return <Collapse defaultActiveKey={['1']} items={items} />;
};

export default TabWithPagination;
