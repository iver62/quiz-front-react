import { Button } from '@mui/material';
import React from 'react';
import Navigation from '../components/Navigation';
import Question from '../components/Question';

const data = [
  {
    id: 1,
    label: 'Selon la légende, comment le pape Adrien IV est-il mort en 1159 ?',
    answers: [
      {
        label: 'En avalant une mouche.',
        good: true,
        state: false
      },
      {
        label: 'En se cognant contre une porte.',
        good: false,
        state: false
      },
      {
        label: 'En chutant d’un cheval.',
        good: false,
        state: false
      },
      {
        label: 'En tombant d’un balcon.',
        good: false,
        state: false
      }
    ]
  },
  {
    id: 2,
    label: 'Que signifie « palimpseste » ?',
    answers: [
      {
        label: 'Manuscrit dont on a fait disparaître l’écriture pour y écrire un autre texte.',
        good: true,
        state: false
      },
      {
        label: 'Raisonnement par lequel on démontre la vérité d’une proposition en prouvant l’impossibilité ou l’absurdité de la proposition contraire.',
        good: false,
        state: false
      },
      {
        label: 'Ce qui aide, ce qui sert d’auxiliaire.',
        good: false,
        state: false
      },
      {
        label: 'Farceur, personnage qui manque de sérieux et sur lequel on ne peut compter.',
        good: false,
        state: false
      }
    ]
  },
  {
    id: 3,
    label: 'De quel ouvrage de la Bible l’expression « rien de nouveau sous le Soleil » est-elle tirée ?',
    answers: [
      {
        label: 'Le Livre de Job',
        good: false,
        state: false
      },
      {
        label: 'La Genèse',
        good: false,
        state: false
      },
      {
        label: 'Le Cantique des cantiques',
        good: false,
        state: false
      },
      {
        label: 'L’Ecclésiaste',
        good: true,
        state: false
      }
    ]
  },
  {
    id: 4,
    label: 'Segueï Rachmaninov est resté (surtout) dans les mémoires comme …',
    answers: [
      {
        label: 'compositeur.',
        good: true,
        state: false
      },
      {
        label: 'chanteur.',
        good: false,
        state: false
      },
      {
        label: 'pianiste de génie.',
        good: false,
        state: false
      },
      {
        label: 'chef d’orchestre.',
        good: false,
        state: false
      }
    ]
  },
  {
    id: 5,
    label: 'À quel ordre de l’église catholique le pape François appartient-il ?',
    answers: [
      {
        label: 'Aux dominicains.',
        good: false,
        state: false
      },
      {
        label: 'Aux franciscains.',
        good: false,
        state: false
      },
      {
        label: 'Aux bénédictins.',
        good: false,
        state: false
      },
      {
        label: 'Aux jésuites.',
        good: true,
        state: false
      }
    ]
  },
  {
    id: 6,
    label: 'Quel état des États-Unis a pour capitale Montgomery ?',
    answers: [
      {
        label: 'La Californie',
        good: false,
        state: false
      },
      {
        label: 'Le Nouveau-Mexique',
        good: false,
        state: false
      },
      {
        label: 'L’Ohio',
        good: false,
        state: false
      },
      {
        label: 'L’Alabama',
        good: true,
        state: false
      }
    ]
  },
  {
    id: 7,
    label: 'Quel animal est la drosophile, utilisée dans des expérimentations génétiques ?',
    answers: [
      {
        label: 'Un cochon d’Inde',
        good: false,
        state: false
      },
      {
        label: 'Une chèvre',
        good: false,
        state: false
      },
      {
        label: 'Un rat',
        good: false,
        state: false
      },
      {
        label: 'Une mouche',
        good: true,
        state: false
      }
    ]
  },
  {
    id: 8,
    label: 'Quel philosophe a écrit « Les origines du totalitarisme » et « La crise de la culture » ?',
    answers: [
      {
        label: 'Edmund Husserl',
        good: false,
        state: false
      },
      {
        label: 'Hannah Arendt',
        good: true,
        state: false
      },
      {
        label: 'Henri Bergson',
        good: false,
        state: false
      },
      {
        label: 'John Dewey',
        good: false,
        state: false
      }
    ]
  },
  {
    id: 9,
    label: 'Parmi les castes suivantes, laquelle correspond en Inde à la caste des prêtres ?',
    answers: [
      {
        label: 'Les kshatriya',
        good: false,
        state: false
      },
      {
        label: 'Les brahmanes',
        good: true,
        state: false
      },
      {
        label: 'Les vaishya',
        good: false,
        state: false
      },
      {
        label: 'Les sudras',
        good: false,
        state: false
      }
    ]
  },
  {
    id: 10,
    label: 'Quel objet est devenu le symbole du film d’animation « Akira » ?',
    answers: [
      {
        label: 'Une mitrailleuse',
        good: false,
        state: false
      },
      {
        label: 'Une voiture bleue',
        good: false,
        state: false
      },
      {
        label: 'Une épée rouge',
        good: false,
        state: false
      },
      {
        label: 'Une moto rouge',
        good: true,
        state: false
      }
    ]
  },
]

const Questionnaire = () => {
  return (
    <div>
      <Navigation />
      {
        data.map(question => (
          <Question question={question} />
        ))
      }
      <div className='validate'>
        <Button variant="contained">Valider</Button>
      </div>
    </div>
  );
};

export default Questionnaire;