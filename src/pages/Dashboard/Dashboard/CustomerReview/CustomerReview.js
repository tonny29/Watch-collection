import { Rating, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import * as React from 'react';


const CustomerReview = () => {
    const [value, setValue] = React.useState(1);
    const [email, setEmail] = React.useState('');
    const [feedback, setFeedback] = React.useState('');

    const emailHandler = (e) => {
        const email = e.target.value;
        setEmail(email)
    }
    const descriptionHandler = e => {
        const feedback = e.target.value;
        setFeedback(feedback)
    }
    const reviewData = {
        rating: value, email: email, description: feedback
    }

    const addReviewHandler = (e) => {
        e.preventDefault();

        const url = 'https://dry-taiga-68945.herokuapp.com/review'
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/JSON'
            },
            body: JSON.stringify(reviewData)
        }).then(res => {

            alert('Thanks for your feedback')
        })
    }
    return (
        <Box
            sx={{
                '& > legend': { mt: 2 },
            }}
        >
            <form onSubmit={addReviewHandler} className="reviewField">
                <Typography variant="h5" component="legend">Share Your Opinion With Us</Typography>
                <Rating
                    sx={{ fontSize: '30px' }}
                    name='ratinStar'
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue)
                    }}
                />
                <br />
                <TextField
                    id="standard-basic"
                    onChange={emailHandler}
                    sx={{ width: '75%', m: 1 }}
                    label="Your email"
                    variant="standard"
                    name="userEmail"
                    required

                />
                <TextField
                    id="standard-textarea"
                    label="Give us your description"
                    placeholder="Description"
                    sx={{ width: '75%', m: 1 }}
                    onChange={descriptionHandler}
                    multiline
                    variant="standard"
                    name="feedback"
                    required

                />
                <TextField
                    id="standard-basic"
                    sx={{ width: '70%', mt: 2, backgroundColor: 'gray' }}
                    style={{ color: 'white' }}
                    variant="standard"
                    type='submit'
                    value="Add Review"
                />
            </form>
        </Box>
    );
};


export default CustomerReview;