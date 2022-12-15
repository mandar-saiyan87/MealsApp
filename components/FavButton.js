import React from 'react';
import { Ionicons } from '@expo/vector-icons';

function FavButton({ favPress, status }) {

  return (
    <>
      {status ? <Ionicons name="star" size={20} color="yellow" onPress={favPress} /> :
        <Ionicons name="star-outline" size={20} color="white" onPress={favPress} />
      }
    </>
  )
}

export default FavButton
