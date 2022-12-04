import MaterialReactTable from 'material-react-table';
import React, { useMemo } from 'react';
import Navigation from '../components/Navigation';

const data = [
  {
    id: 1,
    pseudo: 'Piggy',
    lastname: 'Weber',
    firstname: 'Jaqueline',
    age: 20,
    points: 100
  },
  {
    id: 2,
    pseudo: 'Silly Gilly',
    lastname: 'Payne',
    firstname: 'Pedro',
    age: 20,
    points: 90
  },
  {
    id: 3,
    pseudo: 'Twix',
    lastname: 'Fowler',
    firstname: 'Levi',
    age: 19,
    points: 80
  },
  {
    id: 4,
    pseudo: 'Cherry',
    lastname: 'Jenkins',
    firstname: 'Andreas',
    age: 27,
    points: 70
  },
  {
    id: 5,
    pseudo: 'Dinosaur',
    lastname: 'Mathis',
    firstname: 'Larissa',
    age: 33,
    points: 60
  },
  {
    id: 6,
    pseudo: 'Buds',
    lastname: 'Weiss',
    firstname: 'Kadyn',
    age: 22,
    points: 50
  },
  {
    id: 7,
    pseudo: 'Golden Graham',
    lastname: 'Long',
    firstname: 'Salma',
    age: 25,
    points: 40
  },
  {
    id: 8,
    pseudo: 'Hulk',
    lastname: 'Little',
    firstname: 'Davon',
    age: 31,
    points: 30
  },
  {
    id: 9,
    pseudo: 'Grease',
    lastname: 'Lucero',
    firstname: 'Jaiden',
    age: 17,
    points: 20
  },
  {
    id: 10,
    pseudo: 'Diet Coke',
    lastname: 'French',
    firstname: 'Savion',
    age: 23,
    points: 10
  },
  {
    id: 11,
    pseudo: 'Conductor',
    lastname: 'Avery',
    firstname: 'Ayanna',
    age: 28,
    points: 110
  },
  {
    id: 12,
    pseudo: 'Pickles',
    lastname: 'Dickerson',
    firstname: 'Courtney',
    age: 29,
    points: 120
  },
  {
    id: 13,
    pseudo: 'Ginger',
    lastname: 'Everett',
    firstname: 'Krystal',
    age: 24,
    points: 130
  },
  {
    id: 14,
    pseudo: 'Schnookums',
    lastname: 'Ibarra',
    firstname: 'Kimora',
    age: 36,
    points: 140
  },
  {
    id: 15,
    pseudo: 'Grumpy',
    lastname: 'Tate',
    firstname: 'Averie',
    age: 36,
    points: 150
  },
  {
    id: 16,
    pseudo: 'Homer',
    lastname: 'Navarro',
    firstname: 'Ryleigh',
    age: 21,
    points: 160
  },
  {
    id: 17,
    pseudo: 'Cookie Dough',
    lastname: 'Swanson',
    firstname: 'Layne',
    age: 18,
    points: 170
  },
  {
    id: 18,
    pseudo: 'Einstein',
    lastname: 'Lloyd',
    firstname: 'Jeremy',
    age: 28,
    points: 180
  },
  {
    id: 19,
    pseudo: 'Cutie Pie',
    lastname: 'Mejia',
    firstname: 'Zavier',
    age: 30,
    points: 190
  },
  {
    id: 20,
    pseudo: 'Tater Tot',
    lastname: 'Adkins',
    firstname: 'Alfonso',
    age: 25,
    points: 200
  }
];

const Ranking = () => {
  const columns = useMemo(
    () => [
      {
        accessorKey: 'firstname',
        header: 'Prénom',
      },
      {
        accessorKey: 'lastname',
        header: 'Nom',
      },
      {
        accessorKey: 'pseudo',
        header: 'Pseudo',
      },
      {
        accessorKey: 'age',
        header: 'Age',
      },
      {
        accessorKey: 'points',
        header: 'Points',
      },
    ],
    [],
  );

  return (
    <div>
      <Navigation />
      <MaterialReactTable columns={columns} data={data} />
    </div>
  );
};

export default Ranking;