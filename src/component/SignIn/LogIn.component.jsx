import React, {useRef, useState} from 'react';
import { Card, Form, Button, Alert } from 'react-bootstrap';
import { useAuth } from '../../contexts/AuthContext.context';

export default function LogIn() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const { signup } = useAuth();
    const [error , setError] = useState('');
    const [loading , setLoading] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value);
        } catch {
            setError("Failed to create account. Try again")
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
