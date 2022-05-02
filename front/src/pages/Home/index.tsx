import useHome from './hooks/useHome';

function Home() {
    const { content } = useHome();
    
    return (
        <>
            { !content ? <div>loading...</div> :
                <div>
                    { content }
                </div>
            }
        </>
    );
}

export default Home;