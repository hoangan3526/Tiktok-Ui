import Header from '~/component/Layout/components/Header';

import Sidebar from '~/Sidebar';

function LayoutDefault({ children }) {
    return (
        <div>
            <Header />
            <div className="content">
                <Sidebar />
                <div className="content"> {children} </div>
            </div>
        </div>
    );
}

export default LayoutDefault;
