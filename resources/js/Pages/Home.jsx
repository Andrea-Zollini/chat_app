import ChatLayout from '@/Layouts/ChatLayout';

export default function Home({ auth }) {
    const user = auth.user;
    return (
        <ChatLayout>
            <h1 className='text-3xl font-bold text-white'>Messages</h1>
        </ChatLayout>
    );
}