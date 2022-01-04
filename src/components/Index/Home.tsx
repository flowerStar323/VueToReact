import "./Home.style.css";
import HomeLogo from "../../assets/img/home.svg";
import { useState } from "react";
const Home = () => {
    const [langFlag, setLangFlag] = useState(false);
    return (
        <div className="w-1280 h-screen flex-col justify-center flex">
            <div className="hidden items-center mb-7 primary w-full flex justify-center" style={{ height: "30px" }}>
                <a href="/" aria-current="page" className="hidden xl:flex items-center mb-20 cursor-pointer block">
                    <svg width="42" height="48" viewBox="0 0 65 75" fill="none" xmlns="http://www.w3.org/2000/svg" className="logo text-primary mr-5">
                        <path fillRule="evenodd" clipRule="evenodd" d="M57.4774 40.1845V26.6067H0.144043V0.685791H64.144V13.6462H57.4774V7.16602H6.81071V20.1265H64.144V41.2196C64.0363 51.5228 58.1035 59.9743 48.2911 66.6987C44.8255 69.0737 41.1078 71.0633 37.3811 72.6845C36.0675 73.256 34.8427 73.7417 33.7381 74.1431C33.0572 74.3906 32.513 74.5727 32.2704 74.6463L32.1405 74.6858L32.0108 74.6458C31.739 74.5621 31.2245 74.3898 30.5455 74.1429C29.4408 73.7412 28.2165 73.2556 26.9034 72.6842C23.1772 71.0627 19.4603 69.0733 15.9952 66.6984C6.27684 60.0376 0.365082 51.6825 0.150114 41.5112H0.144043V33.0869H6.81071V40.1845C6.81071 47.9967 11.0121 54.5315 18.2191 59.8741C20.8805 61.847 23.8111 63.5472 26.8494 64.9836C28.8637 65.9358 30.6774 66.6589 32.1449 67.1623C33.6109 66.6596 35.4255 65.9362 37.4399 64.9839C40.478 63.5476 43.4086 61.8474 46.0699 59.8744C53.2768 54.5317 57.4774 47.9967 57.4774 40.1845Z" fill="currentColor"></path>
                    </svg>
                    <span className="font-bold text-5xl">Hivesigner</span>
                </a>
            </div>
            <div className="grid gap-2.5 xl:gap-40 grid-cols-2 items-center justify-center sm:mb-10 xl:mb-20">
                <div className="col-span-2 xl:col-span-1 sm:mb-6 xl:mb-0">
                    <img src={HomeLogo} alt="Homelogo" draggable={false} className="block mx-auto image mb-16 sm:mb-0" />
                    <p className="text-3xl sm:text-5xl xl:text-6xl font-light text-center text-black-500 sm:text-gray-550">
                        <span className="hidden sm:block">Secure way to sign</span>
                    </p>
                </div>
                <div className="col-span-2 xl:col-span-1 sm:mb-6 xl:mb-0">
                    <a href="/" aria-current="page" className="hidden xl:flex items-center mb-20 cursor-pointer block">
                        <svg width="42" height="48" viewBox="0 0 65 75" fill="none" xmlns="http://www.w3.org/2000/svg" className="logo text-primary mr-5">
                            <path fillRule="evenodd" clipRule="evenodd" d="M57.4774 40.1845V26.6067H0.144043V0.685791H64.144V13.6462H57.4774V7.16602H6.81071V20.1265H64.144V41.2196C64.0363 51.5228 58.1035 59.9743 48.2911 66.6987C44.8255 69.0737 41.1078 71.0633 37.3811 72.6845C36.0675 73.256 34.8427 73.7417 33.7381 74.1431C33.0572 74.3906 32.513 74.5727 32.2704 74.6463L32.1405 74.6858L32.0108 74.6458C31.739 74.5621 31.2245 74.3898 30.5455 74.1429C29.4408 73.7412 28.2165 73.2556 26.9034 72.6842C23.1772 71.0627 19.4603 69.0733 15.9952 66.6984C6.27684 60.0376 0.365082 51.6825 0.150114 41.5112H0.144043V33.0869H6.81071V40.1845C6.81071 47.9967 11.0121 54.5315 18.2191 59.8741C20.8805 61.847 23.8111 63.5472 26.8494 64.9836C28.8637 65.9358 30.6774 66.6589 32.1449 67.1623C33.6109 66.6596 35.4255 65.9362 37.4399 64.9839C40.478 63.5476 43.4086 61.8474 46.0699 59.8744C53.2768 54.5317 57.4774 47.9967 57.4774 40.1845Z" fill="currentColor"></path>
                        </svg>
                        <span className="font-bold text-5xl">Hivesigner</span>
                    </a>
                    <p className="text-base sm:text-xl text-center xl:text-left text-gray pb-8 xl:pb-12">
                        Secure way to sign with Hivesigner. Best security for users and developers to integrate industry standard OAuth2 for their Blockchain applications. Transform web 2.0 apps into web 3.0 decentralized apps.
                    </p>
                    <div className="flex justify-center xl:justify-start">
                        <a href="/import?redirect=accounts" className="button button-primary inline-flex items-center mb-12 sm:mb-0">
                            <svg width="21" height="24" viewBox="0 0 21 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                                <path d="M20.3842 6.34624L20.3835 6.32852C20.3735 6.10759 20.3669 5.87368 20.3628 5.61363C20.3441 4.34546 19.3359 3.29646 18.0676 3.22575C15.4232 3.078 13.3775 2.21571 11.6296 0.512184L11.6146 0.497971C11.0443 -0.0247727 10.1843 -0.0245972 9.61439 0.497795L9.5993 0.512184C7.85138 2.21571 5.80568 3.078 3.16126 3.22575C1.89291 3.29646 0.884803 4.34546 0.866027 5.6138C0.862167 5.87228 0.855323 6.10601 0.845321 6.32852L0.844268 6.37011C0.792854 9.06665 0.72898 12.4225 1.85168 15.4687C2.469 17.1438 3.40376 18.5999 4.63017 19.7967C6.02713 21.1598 7.85665 22.2419 10.0683 23.0131C10.1403 23.0382 10.2149 23.0586 10.2909 23.0737C10.3982 23.0953 10.5063 23.106 10.6144 23.106C10.7225 23.106 10.8308 23.0953 10.938 23.0737C11.014 23.0586 11.0891 23.0381 11.1617 23.0128C13.3705 22.2403 15.198 21.1577 16.5936 19.7947C17.8195 18.5975 18.7544 17.1408 19.3723 15.4656C20.4992 12.4102 20.4355 9.04787 20.3842 6.34624ZM18.106 14.9984C16.9219 18.2091 14.5047 20.4138 10.7166 21.7385C10.703 21.7432 10.6885 21.7473 10.6736 21.7502C10.6343 21.7581 10.5944 21.7581 10.5549 21.7501C10.54 21.7473 10.5258 21.7432 10.5125 21.7387C6.72009 20.4163 4.30132 18.2126 3.11791 15.002C2.08313 12.1942 2.14191 9.11368 2.19368 6.39572L2.19386 6.38081C2.20438 6.14707 2.21158 5.90264 2.21544 5.63363C2.22386 5.07053 2.67238 4.60482 3.23653 4.57323C4.733 4.4897 6.04766 4.20052 7.25564 3.68918C8.46186 3.17854 9.5335 2.45874 10.5309 1.48871C10.5814 1.44589 10.6474 1.44572 10.698 1.48871C11.6955 2.45874 12.767 3.17872 13.9732 3.68918C15.1812 4.20052 16.4959 4.4897 17.9925 4.57323C18.5567 4.60482 19.0052 5.07053 19.0134 5.63381C19.0175 5.90422 19.0245 6.14865 19.035 6.38063C19.0864 9.10174 19.1438 12.1847 18.106 14.9984Z" fill="currentColor">
                                </path>
                                <path d="M10.6139 6.82642C8.92937 6.82642 7.55908 8.19688 7.55908 9.88128C7.55908 10.8741 8.03585 11.7898 8.82672 12.3594L8.8111 14.5412V14.546C8.8111 15.5349 9.61566 16.3397 10.6046 16.3397C11.5927 16.3397 12.3968 15.5364 12.3984 14.5486L12.4142 12.3497C13.1969 11.7792 13.6688 10.8671 13.6688 9.88128C13.6688 8.19688 12.2983 6.82642 10.6139 6.82642ZM11.0486 14.5461C11.0486 14.7909 10.8494 14.9901 10.6046 14.9901C10.3606 14.9901 10.1617 14.7918 10.1607 14.5479L10.1789 12.0374C10.1977 11.7782 10.0652 11.5202 9.82062 11.3913C9.25804 11.0949 8.90867 10.5163 8.90867 9.88128C8.90867 8.94108 9.67357 8.17618 10.6139 8.17618C11.5541 8.17618 12.319 8.94108 12.319 9.88128C12.319 10.5119 11.9732 11.0886 11.4164 11.3863C11.1613 11.5229 11.0302 11.7999 11.0665 12.071L11.0486 14.5412V14.5461Z" fill="currentColor"></path>
                            </svg>
                            Get started
                        </a>
                    </div>
                    <div className="flex w-full pt-28 hidden sm:flex items-center justify-between">
                        <a href="/apps" className="text-gray py-1.5 text-lg hover:text-primary cursor-pointer">Apps</a>
                        <a href="/accounts" className="text-gray py-1.5 text-lg hover:text-primary cursor-pointer">Accounts</a>
                        <a href="/signs" className="text-gray py-1.5 text-lg hover:text-primary cursor-pointer">Signer</a>
                        <a href="https://docs.hivesigner.com/" className="text-gray py-1.5 text-lg hover:text-primary cursor-pointer">Docs</a>
                        <a href="/about" className="text-gray py-1.5 text-lg hover:text-primary cursor-pointer">About</a>
                        <a href="/login?redirect=accounts" className="text-gray py-1.5 text-lg hover:text-primary cursor-pointer">Login</a>
                        <div className="dropdown relative py-1.5">
                            {langFlag === true && <div className="overlay inset-0 fixed bg-black-400 opacity-40 duration-500 z-30" onClick={() => setLangFlag(false)} />}
                            <div className="dropdown-trigger cursor-pointer with-chevron flex items-center text-black-light hover:text-primary" onClick={() => setLangFlag(true)}>
                                <span className="text-lg uppercase">en</span>
                                <div className="icon ml-1">
                                    <svg width="10" height="5" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.726562 1.2124L6.16629 5.93117L11.3967 1.39391" stroke="currentColor" strokeWidth="2"></path></svg>
                                </div>
                            </div>
                            {langFlag === true && <div className="dropdown-menu flex flex-col bg-white absolute m-2 duration-500 z-30 -bottom-2 -right-2 p-6" style={{ width: "313px" }}>
                                <div className="icon absolute right-4 top-4 cursor-pointer text-gray hover:text-black" onClick={() => setLangFlag(false)} >
                                    <svg width="33" height="34" viewBox="0 0 33 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.08252 9.01685L24.248 25.1823" stroke="currentColor" strokeWidth="2"></path> <path d="M24.248 9.01697L8.08256 25.1825" stroke="currentColor" strokeWidth="2"></path> <path d="M8.08252 9.01685L24.248 25.1823" stroke="currentColor" strokeWidth="2"></path> <path d="M24.248 9.01697L8.08256 25.1825" stroke="currentColor" strokeWidth="2"></path></svg>
                                </div>
                                <a role="button" className="cursor-pointer py-1 hover:text-primary">
                                    English
                                </a>
                                <a role="button" className="cursor-pointer py-1 hover:text-primary">
                                    Русский
                                </a>
                            </div>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Home;
