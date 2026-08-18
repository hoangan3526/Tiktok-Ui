import Header from './Header';

function LayoutDefault({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <div className="content"> {children} </div>
            </div>
        </div>
    );
}

export default LayoutDefault;
