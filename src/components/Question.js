import { Button } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import React, { useEffect } from 'react';

const Question = ({ question }) => {

  // const [answers] = useState([]);

  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setState({
  //     ...state,
  //     [event.target.name]: event.target.checked,
  //   });
  // };

  useEffect(() => {
    console.log(question.answers);
  });

  return (
    <Card className='card' sx={{ minWidth: 275 }}>
      <CardContent>
        <div sx={{ fontSize: 14 }} className='question' color="text.secondary" gutterBottom>
          {question.label}
        </div>
        <div className='buttons-group'>
          {
            question.answers.map(answer => (
              <Button variant="outlined" className='answer' color='secondary'>
                {answer.label}
              </Button>
            ))
          }
        </div>
      </CardContent>
    </Card>
  );
};

export default Question;