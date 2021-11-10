import React, {useRef, useState} from 'react';
import { Card, Form, Button, Alert } from 'react-bootstrap';
import { useAuth } from '../../contexts/AuthContext.context';
import { useHistory } from 'react-router';

export default function SignUp() {
    const userRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();

    const { signup } = useAuth();

    const [error , setError] = useState('');
    const [loading , setLoading] = useState(false);
    
    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault();

        if(passwordRef.current.value !== confirmPasswordRef.current.value) {
            return setError('Passwords do not match')
        }

        try {
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value, userRef.current.value);
            history.push('/')
        } catch(error) {
            setError("Failed to create account. Try again")
            console.error(error)
        }
        setLoading(false)
    }

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Sign Up</h2>
                    {error && <Alert variant='danger'> {error} </Alert>}
                    <Form onSubmit={ handleSubmit }> 
                        <Form.Group>
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" ref={userRef}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passwordRef}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" ref={confirmPasswordRef}/>
                        </Form.Group>
                    </Form>
                    <Button disabled={ loading } className="w-100 mt-3" type="submit" onClick={ handleSubmit }>Sign Up</Button>
                </Card.Body>
            </Card>
        </>
    )
}
