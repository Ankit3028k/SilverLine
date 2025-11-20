import React from 'react';

// We'll import popular icon sets from react-icons
import * as FaIcons from 'react-icons/fa6'; // Font Awesome 6
import * as IoIcons from 'react-icons/io5'; // Ionicons 5
import * as MdIcons from 'react-icons/md';  // Material Design
import * as FiIcons from 'react-icons/fi';  // Feather
import * as BsIcons from 'react-icons/bs';  // Bootstrap
import * as TbIcons from 'react-icons/tb';  // Tabler

interface IconProps {
  name: string;
  size?: string | number;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Icon: React.FC<IconProps> = ({ 
  name, 
  size = '1em', 
  color = 'currentColor', 
  className = '', 
  style 
}) => {
  // Map of icon names to components
  const iconMap: Record<string, React.ComponentType<any>> = {
    // Font Awesome 6
    'fa-home': FaIcons.FaHouse,
    'fa-user': FaIcons.FaUser,
    'fa-envelope': FaIcons.FaEnvelope,
    'fa-phone': FaIcons.FaPhone,
    'fa-map-marker': FaIcons.FaLocationDot,
    'fa-eye': FaIcons.FaEye,
    'fa-running': FaIcons.FaPersonRunning,
    'fa-sun': FaIcons.FaSun,
    'fa-book': FaIcons.FaBook,
    'fa-search': FaIcons.FaMagnifyingGlass,
    'fa-flask': FaIcons.FaFlask,
    'fa-heart': FaIcons.FaHeart,
    'fa-star': FaIcons.FaStar,
    'fa-check': FaIcons.FaCheck,
    'fa-times': FaIcons.FaXmark,
    'fa-plus': FaIcons.FaPlus,
    'fa-minus': FaIcons.FaMinus,
    'fa-cloud': FaIcons.FaCloud,
    'fa-diamond': FaIcons.FaDiamond,
    
    // Ionicons 5
    'io-home': IoIcons.IoHome,
    'io-person': IoIcons.IoPerson,
    'io-mail': IoIcons.IoMail,
    'io-call': IoIcons.IoCall,
    'io-location': IoIcons.IoLocation,
    'io-eye': IoIcons.IoEye,
    'io-walk': IoIcons.IoWalk,
    'io-sunny': IoIcons.IoSunny,
    'io-book': IoIcons.IoBook,
    'io-search': IoIcons.IoSearch,
    'io-flask': IoIcons.IoFlask,
    'io-heart': IoIcons.IoHeart,
    'io-star': IoIcons.IoStar,
    'io-checkmark': IoIcons.IoCheckmark,
    'io-close': IoIcons.IoClose,
    'io-add': IoIcons.IoAdd,
    'io-remove': IoIcons.IoRemove,
    
    // Material Design
    'md-home': MdIcons.MdHome,
    'md-person': MdIcons.MdPerson,
    'md-email': MdIcons.MdEmail,
    'md-phone': MdIcons.MdPhone,
    'md-location': MdIcons.MdLocationOn,
    'md-eye': MdIcons.MdVisibility,
    'md-run': MdIcons.MdDirectionsRun,
    'md-wb-sunny': MdIcons.MdWbSunny,
    'md-book': MdIcons.MdBook,
    'md-search': MdIcons.MdSearch,
    'md-science': MdIcons.MdScience,
    'md-favorite': MdIcons.MdFavorite,
    'md-star': MdIcons.MdStar,
    'md-check': MdIcons.MdCheck,
    'md-close': MdIcons.MdClose,
    'md-add': MdIcons.MdAdd,
    'md-remove': MdIcons.MdRemove,
    
    // Feather
    'fi-home': FiIcons.FiHome,
    'fi-user': FiIcons.FiUser,
    'fi-mail': FiIcons.FiMail,
    'fi-phone': FiIcons.FiPhone,
    'fi-map-pin': FiIcons.FiMapPin,
    'fi-eye': FiIcons.FiEye,
    'fi-user-check': FiIcons.FiUserCheck,
    'fi-sun': FiIcons.FiSun,
    'fi-book': FiIcons.FiBook,
    'fi-search': FiIcons.FiSearch,
    'fi-heart': FiIcons.FiHeart,
    'fi-star': FiIcons.FiStar,
    'fi-check': FiIcons.FiCheck,
    'fi-x': FiIcons.FiX,
    'fi-plus': FiIcons.FiPlus,
    'fi-minus': FiIcons.FiMinus,
    
    // Bootstrap
    'bs-house': BsIcons.BsHouse,
    'bs-person': BsIcons.BsPerson,
    'bs-envelope': BsIcons.BsEnvelope,
    'bs-telephone': BsIcons.BsTelephone,
    'bs-geo-alt': BsIcons.BsGeoAlt,
    'bs-eye': BsIcons.BsEye,
    'bs-person-walking': BsIcons.BsPersonWalking,
    'bs-sun': BsIcons.BsSun,
    'bs-book': BsIcons.BsBook,
    'bs-search': BsIcons.BsSearch,
    'bs-heart': BsIcons.BsHeart,
    'bs-star': BsIcons.BsStar,
    'bs-check': BsIcons.BsCheck,
    'bs-x': BsIcons.BsX,
    'bs-plus': BsIcons.BsPlus,
    'bs-dash': BsIcons.BsDash,
    
    // Tabler
    'tb-home': TbIcons.TbHome,
    'tb-user': TbIcons.TbUser,
    'tb-mail': TbIcons.TbMail,
    'tb-phone': TbIcons.TbPhone,
    'tb-map-pin': TbIcons.TbMapPin,
    'tb-eye': TbIcons.TbEye,
    'tb-walk': TbIcons.TbWalk,
    'tb-sun': TbIcons.TbSun,
    'tb-book': TbIcons.TbBook,
    'tb-search': TbIcons.TbSearch,
    'tb-flask': TbIcons.TbFlask,
    'tb-heart': TbIcons.TbHeart,
    'tb-star': TbIcons.TbStar,
    'tb-check': TbIcons.TbCheck,
    'tb-x': TbIcons.TbX,
    'tb-plus': TbIcons.TbPlus,
    'tb-minus': TbIcons.TbMinus,
  };

  // Get the icon component
  const IconComponent = iconMap[name];

  // If icon not found, return null or a default icon
  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }

  // Render the icon component with correct props
  return (
    <IconComponent 
      size={size} 
      color={color} 
      className={className} 
      style={style} 
    />
  );
};

export default Icon;