import AddIcon from '@mui/icons-material/Add';
import HomeIcon from '@mui/icons-material/Home';
import QuizIcon from '@mui/icons-material/Quiz';
import TableRowsIcon from '@mui/icons-material/TableRows';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  const [value, setValue] = React.useState('home');

  const handleChange = (event: React.SyntheticEvent, newValue: String) => {
    setValue(newValue);
  };
  // return (
  //   <div>
  //     <ul>
  //       <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
  //         <li>Accueil</li>
  //       </NavLink>
  //       <NavLink to="/ranking" className={(nav) => (nav.isActive ? "nav-active" : "")}>
  //         <li>Classement</li>
  //       </NavLink>
  //       <NavLink to="/questionnaire" className={(nav) => (nav.isActive ? "nav-active" : "")}>
  //         <li>Questionnaire</li>
  //       </NavLink>
  //       <NavLink to="/add-question" className={(nav) => (nav.isActive ? "nav-active" : "")}>
  //         <li>Ajouter une question</li>
  //       </NavLink>
  //     </ul>
  //   </div>
  // );

  return (
    <BottomNavigation sx={{ width: 500 }} value={value} onChange={handleChange}>
      <NavLink to="/home">
        <BottomNavigationAction
          label="Accueil"
          icon={<HomeIcon />}
        />
      </NavLink>
      <NavLink to="/ranking">
        <BottomNavigationAction
          label="Classement"
          icon={<TableRowsIcon />}
        />
      </NavLink>
      <NavLink to="/questionnaire">
        <BottomNavigationAction
          label="Questionnaire"
          icon={<QuizIcon />}
        />
      </NavLink>
      <NavLink to="/add-question">
        <BottomNavigationAction
          label="Ajouter une question"
          icon={<AddIcon />}
        />
      </NavLink >
    </BottomNavigation>
  );
};

export default Navigation;
