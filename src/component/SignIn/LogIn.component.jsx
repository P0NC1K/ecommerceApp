import React, {useRef, useState} from 'react';
import { Card, Form, Button, Alert } from 'react-bootstrap';
import { useAuth } from '../../contexts/AuthContext.context';
import { useHistory } from 'react-router';

export default function LogIn() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const { login } = useAuth();
    const [error , setError] = useState('');
    const [loading , setLoading] = useState(false);
    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value);
            history.push('/')
        } catch {
            setError("Failed to log into account. Try again")
        }
        setLoading(false)
    }

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Log In</h2>
                    {error && <Alert variant='danger'> {error} </Alert>}
                    <Form onSubmit={ handleSubmit }> 
                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passwordRef}/>
                        </Form.Group>
                    </Form>
                    <Button disabled={ loading } className="w-100 mt-3" type="submit" onClick={ handleSubmit }>Log In</Button>
                </Card.Body>
            </Card>
        </>
    )
}
