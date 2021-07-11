import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';


const iconFunction = (name) => {

    switch (name) {
  
      case 'home':
        return (({color, size }) => (<Ionicons name={name} size={size} color={color} />))
      case 'new-message':
        return (({color, size }) => (<Entypo name={name} size={size} color={color} />))
  
      case 'rupee-sign':
        return (({color, size }) => (<FontAwesome5 name={name} size={size} color={color} />))
  
      case 'customerservice':
        return (({color, size }) => (<AntDesign name={name} size={size} color={color} />))
  
      case 'stats-chart':
        return (({color, size }) => (<Ionicons name={name} size={size} color={color} />))
  
      case 'history':
        return (({color, size }) => (<FontAwesome name={name} size={size} color={color} />))
  
      case 'flash':
        return (({color, size }) => (<Ionicons name={name} size={size} color={color} />))
  
      case 'connect-without-contact':
        return (({color, size }) => (<MaterialIcons name={name} size={size} color={color} />))
  
      case 'calculator':
        return (({color, size }) => (<FontAwesome name={name} size={size} color={color} />))
  
      case 'shopping-pos-machine':
        return (({color, size }) => (<Fontisto name={name} size={size} color={color} />))
  
      case 'ios-power':
        return (({color, size }) => (<Ionicons name={name} size={size} color={color} />))
  
  
  
  
  
    }
  
  
  
  }

  export default iconFunction;