import Footer from "./footer";
import Header from "./header";

type Props = {
    children: React.ReactNode;
}

export const MarketingLayout = ({ children }: Props) => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <main className="flex flex-col flex-1 items-center justify-center ">
                {children}
            </main>

            <Footer />
        </div>
    );
}