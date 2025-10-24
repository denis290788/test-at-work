import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Home } from "./components/layout/Home/Home";
import { EditUser } from "./components/layout/EditUser/EditUser";
import { Layout } from "./components/layout/Layout/Layout";

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Router basename="/test-at-work/">
                <Layout>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/edit/:id" element={<EditUser />} />
                    </Routes>
                </Layout>
            </Router>
        </QueryClientProvider>
    );
}

export default App;
