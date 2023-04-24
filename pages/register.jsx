import { useState } from 'react';
import { MdLockClock } from 'react-icons/md';

const Register = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [agreeToTerms, setAgreeToTerms] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        // Submit the form data
    };

    return (
        <>
            <div className="w-full h-screen overflow-hidden">
                <div className="flex">
                    <div className='w-[75%] h-screen bg-orange-500'>
                        <h1>Helllo</h1>
                    </div>
                    <div className='w-[25%] flex items-center justify-center'>
                        <form>
                            <p className='text-2xl'>Create an account</p>
                        </form>
                    </div>
                </div>
            </div >
        </>
    );
};

export default Register;