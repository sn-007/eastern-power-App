import React from 'react'

import {
    DrawerContentScrollView,
    DrawerItemList,
  } from '@react-navigation/drawer';

import Profile from './Profile';
  

const CustomDrawer = (props) => {
    return (
        <DrawerContentScrollView {...props}>

          <Profile />
          

          <DrawerItemList {...props} />

        </DrawerContentScrollView>
      );
}

export default CustomDrawer


