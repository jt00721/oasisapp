import { useState } from 'react';
import useRequest from '../../hooks/use-requests';
import Router from 'next/router';

export default () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const { doRequest, errors } = useRequest({
        url: '/api/users/login',
        method: 'post',
        body: {
          email,
          password
        },
        onSuccess: () => Router.push('/')
    });

    const onSubmit = async (event) => {
        event.preventDefault();
        await doRequest();
    };

    return (<form onSubmit={onSubmit}>
        <h1>Login</h1>
        <div className="form-group">
            <label>Email Address</label>
            <input 
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
            />
        </div>
        <div className="form-group">
            <label>Password</label>
            <input 
                className="form-control"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} 
            />
        </div>
        {errors}
        <button className="btn btn-primary">Login</button>
    </form>);
};