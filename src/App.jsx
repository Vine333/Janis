import {ConfigProvider} from 'antd';

import AppRoutes from "./routes/index.jsx";



function App() {

    return (
        <ConfigProvider >
            <AppRoutes/>
        </ConfigProvider>
    )
}

export default App
